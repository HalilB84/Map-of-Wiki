export class Utils {
    constructor(state) {
        this.state = state;

        this.fileSizes = {
            "layout_100k_jan26.csv": 6579786,
            "layout_500k_jan26.csv": 33786947,
            "layout_1m_jan26.csv": 68473102,
        };
    }

    async load(csv) {
        //https://stackoverflow.com/questions/47285198/fetch-api-download-progress-indicator
        this.state.ui.setProgress("Loading graph data 0%");
        const files = csv.split(",");
        let data = [];
        let rec = 0;
        let total = 0;

        files.forEach((file) => {
            total += this.fileSizes[file.split("/").at(-1)];
        });

        for (let i = 0; i < files.length; i++) {
            const response = await fetch(files[i]);

            const values = [];
            const reader = response.body.getReader();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                values.push(value);
                rec += value.length;

                this.state.ui.setProgress("Loading graph data " + Math.round((rec / total) * 100) + "%");
            }

            const blob = (await new Blob(values).text()).split("\n");

            for (let j = 0; j < blob.length; j++) {
                const word = blob[j];
                if (word === "" || j === 0) continue;
                const res = word.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); //https://stackoverflow.com/questions/11456850/split-a-string-by-commas-but-ignore-commas-within-double-quotes-using-javascript

                data.push({
                    id: +res[0],
                    title: res[1],
                    x: +res[2],
                    y: +res[3],
                    size: +res[4],
                    r: +res[5],
                    g: +res[6],
                    b: +res[7],
                });

                if (j % Math.floor(blob.length / 30) === 0) {
                    this.state.ui.setProgress("Parsing " + files[i].split("/").at(-1) + " " + Math.round((j / blob.length) * 100) + "%");
                    await new Promise((resolve) => setTimeout(resolve, 0));
                    //basically my understanding is when the above line is called we pause and queue the setTimeout in the macrotask after the delay
                    //so after this macrotask and the following microtask (which in this case none) finishes the browser can render the ui, also the above promise gets resolved in the macrotask created by the setTimeout
                    //so in the following microtask (as await is just syntatic sugar for then) we run the remaining for loop untill it hits the next await and does the above steps again
                    //https://javascript.info/event-loop
                }
            }
        }

        let maxy = -Infinity;
        let maxx = -Infinity;
        let miny = Infinity;
        let minx = Infinity;

        data.sort((a, b) => b.size - a.size);

        data.forEach((a) => {
            maxy = Math.max(maxy, a.y + a.size);
            maxx = Math.max(maxx, a.x + a.size);
            miny = Math.min(miny, a.y - a.size);
            minx = Math.min(minx, a.x - a.size);
        });

        return { num: data.length, data: data, limits: { minx, maxx, miny, maxy } };
    }
}
