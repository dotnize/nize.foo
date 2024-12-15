---
title: "Websockets with TanStack Start"
pubDate: "November 17 2024"
updatedDate: "December 15 2024"
description: "Setting up Nitro websockets in TanStack Start."
---

For the past few weeks I've been playing around with [TanStack Start](https://tanstack.com/start/latest), a new full-stack React framework by Tanner Linsley, the creator of React Query and other amazing TanStack libraries. The framework uses [Vinxi](https://vinxi.vercel.app/) under the hood, which uses Nitro — the same server technology that powers Nuxt and SolidStart. [^1]

> Full-document SSR, Streaming, Server Functions, bundling and more, powered by TanStack Router, Vinxi, and Vite. Ready to deploy to your favorite hosting provider.
>
> -- [tanstack.com/start](https://tanstack.com/start/latest)

## Nitro WebSockets

Nitro provides experimental support for WebSockets, powered by [h3](https://h3.unjs.io/guide/websocket) and [crossws](https://crossws.unjs.io/). This feature can be utilized in Vinxi to enable websockets in our TanStack Start projects.

You can read more at [nitro.build/guide/websocket](https://nitro.build/guide/websocket).

## Setting up the server

Assuming you already have a TanStack Start project [set up](https://tanstack.com/router/latest/docs/framework/react/start/getting-started) (or you can use my [tanstarter template](https://github.com/dotnize/tanstarter)), let's get started by setting up a new websocket handler.

1. First, let's enable experimental Nitro websockets in our app config.

```ts {5-7}
// app.config.ts
export default defineConfig({
  // ...
  server: {
    experimental: {
      websocket: true,
    },
  },
});
```

2. Next, let's create a new websocket handler in our app.

```ts
// app/ws.ts
import { defineEventHandler, defineWebSocket } from "vinxi/http";

export default defineEventHandler({
  handler() {},
  websocket: defineWebSocket({
    open(peer) {
      peer.publish("test", `User ${peer} has connected!`);
      peer.send("You have connected successfully!");
      peer.subscribe("test");
    },
    async message(peer, msg) {
      const message = msg.text();
      console.log("msg", peer.id, message);
      peer.publish("test", message);
      peer.send("Hello to you!");
    },
    async close(peer, details) {
      peer.publish("test", `User ${peer} has disconnected!`);
      console.log("close", peer.id, details.reason);
    },
    async error(peer, error) {
      console.log("error", peer.id, error);
    },
  }),
});
```

3. Finally, add a new Vinxi router to handle the websocket requests.

```ts {9-15}
// app.config.ts
export default defineConfig({
  // ...
  server: {
    experimental: {
      websocket: true,
    },
  },
}).addRouter({
  name: "websocket",
  type: "http",
  handler: "./app/ws.ts", // the file we created above
  target: "server",
  base: "/_ws",
});
```

Our server is now ready to handle websocket connections at `/_ws`. We can test it out by connecting from our client.

## Example client

Here's a minimal example implementation of a websocket client connecting to our server. You probably want to use a library or a more robust implementation in a real-world scenario.

```tsx
const [messages, setMessages] = useState<string[]>([]);

useEffect(() => {
  const ws = new WebSocket("ws://localhost:3000/_ws");
  ws.onmessage = (event) => {
    console.log("Received message:", event.data);
    setMessages((prevMessages) => [...prevMessages, event.data]);
  };
  ws.onerror = (error) => {
    console.error("WebSocket Error:", error);
  };

  return () => {
    ws.close();
  };
}, []);

return (
  <div>
    <h1>Websocket messages</h1>
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  </div>
);
```

## Handling authentication

You can perform authentication checks in the `upgrade` hook. This is supported in Vinxi 0.5.0 and later.

```ts {5-12}
// app/ws.ts
export default defineEventHandler({
  handler() {},
  websocket: defineWebSocket({
    async upgrade(req) {
      const isAuthorized = await yourOwnAuthMethod(req); // e.g. check jwt

      // deny unauthorized connections
      if (!isAuthorized) {
        return new Response(null, { status: 401 });
      }
    },
    open(peer) {
      // ...
    },
  }),
});
```

Read more about `crossws` hooks at [crossws.unjs.io/guide/hooks](https://crossws.unjs.io/guide/hooks).

I'm currently working on a full example project with websockets, which I'll share in this post soon once these issues are resolved:

- [fix crossws 0.3.0 compatibility](https://github.com/nksaraf/vinxi/pull/439)

---

[^1]: [SolidStart](https://start.solidjs.com/) is a full-stack framework for Solid that also uses Vinxi. This guide should likely work for SolidStart as well, with some adjustments.
