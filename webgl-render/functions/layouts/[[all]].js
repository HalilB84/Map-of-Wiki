// /functions/layouts/[[all]].js

export async function onRequestGet(ctx) {
    // So every /layout request is routed to this function
    // can someone abuse this?
    let path = new URL(ctx.request.url).pathname.replace(/^\/layouts\//, "");
    console.log(path);
    let obj  = await ctx.env.LAYOUTS.get(path);
    if (!obj) return new Response("Not found", { status: 404 });
  
    return new Response(obj.body, {
      headers: { "Content-Type": "text/csv" }
    });
  }