---
title: "Websockets with TanStack Start"
pubDate: "November 17 2024"
description: "Playing around with Nitro websockets in TanStack Start."
---

For the past few weeks I've been playing around with [TanStack Start](https://tanstack.com/start/latest), a new full-stack React framework by Tanner Linsley, the creator of React Query and other amazing TanStack libraries. The framework uses Vinxi under the hood, which uses Nitro - the same server technology that powers Nuxt.

> Full-document SSR, Streaming, Server Functions, bundling and more, powered by TanStack Router, Vinxi, and Vite. Ready to deploy to your favorite hosting provider.
>
> -- [tanstack.com/start](https://tanstack.com/start/latest)

## Nitro WebSockets

Nitro has experimental support for WebSockets, powered by [h3](https://h3.unjs.io/guide/websocket) and [crossws](https://crossws.unjs.io/). You can read more at https://nitro.build/guide/websocket.

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
      peer.send({ user: "server", message: `Welcome ${peer}!` });
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
  handler: "./app/ws.ts",
  target: "server",
  base: "/_ws",
});
```

Our server is now ready to handle websocket connections at `/_ws`. Let's test it out by connecting from our client.

## Example client

Here's a minimal example implementation of a websocket client connecting to our server. You probably want to use a library or a more robust implementation in a real-world scenario.

```tsx
const [messages, setMessages] = useState<string[]>([]);
const [socket, setSocket] = useState<WebSocket | null>(null);

useEffect(() => {
  const ws = new WebSocket("ws://localhost:3000/_ws");
  setSocket(ws);
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

Ideally, you'd want to handle authentication on the websocket handler's upgrade hook.

```ts {5-13}
// app/ws.ts
export default defineEventHandler({
  handler() {},
  websocket: defineWebSocket({
    async upgrade(req) {
      const isAuthorized = await yourOwnAuthMethod(req);

      // deny unauthorized connections
      if (!isAuthorized) {
        // only works in crossws 0.3+
        return new Response("Unauthorized", { status: 401 });
      }
    },
    open(peer) {
      // ...
    },
  }),
});
```

This is supported in crossws 0.3+ or Nitro 2.10+, but is **currently not available** in Vinxi. I will be updating this post once Vinxi has support for this feature.

- [vinxi issue: upgrade to nitro 2.10](https://github.com/nksaraf/vinxi/issues/409)
- [crossws 0.3.0 release](https://github.com/unjs/crossws/releases/tag/v0.3.0)
- [nitro 2.10: upgrade to crossws 0.3](https://github.com/nitrojs/nitro/releases/tag/v2.10.0#:~:text=Experimental%20WebSocket%20support%20is%20better%20with%20crossws%400.3%20upgrade.)
