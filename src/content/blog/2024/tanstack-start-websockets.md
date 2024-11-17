---
title: "Websockets with TanStack Start"
pubDate: "November 17 2024"
description: "Playing around with Nitro websockets in TanStack Start."
---

For the past few weeks I've been playing around with [TanStack Start](https://tanstack.com/start/latest), a new full-stack React framework by Tanner Linsley, the creator of React Query. The framework uses Vinxi under the hood, which uses Nitro - the same server technology that powers Nuxt.

> Full-document SSR, Streaming, Server Functions, bundling and more, powered by TanStack Router, Vinxi, and Vite. Ready to deploy to your favorite hosting provider.
>
> -- [tanstack.com/start](https://tanstack.com/start/latest)

## Nitro WebSockets

Nitro has experimental support for WebSockets, powered by [h3](https://h3.unjs.io/guide/websocket) and [crossws](https://crossws.unjs.io/). You can read more at https://nitro.build/guide/websocket.

## Setting up the server

Assuming you already have a TanStack Start project [set up](https://tanstack.com/router/latest/docs/framework/react/start/getting-started) (or you can use my [tanstarter template](https://github.com/dotnize/tanstarter)), let's get get started.

1. First, let's enable experimental Nitro websockets in our `app.config.ts`

```ts {4-6}
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
// app/ws.ts  (or anywhere you prefer)
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

```ts {8-14}
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
