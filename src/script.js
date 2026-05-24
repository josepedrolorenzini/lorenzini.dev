export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      const data = await request.json();

      console.log("Contact form:", data);

      return Response.json({
        ok: true,
        message: "Message received",
        body: data,
      });
    }

    return env.ASSETS.fetch(request);
  },
};
