---
title: "Websockets with TanStack Start"
pubDate: "November 17 2024"
updatedDate: "March 28 2025"
description: "Setting up h3 websockets in TanStack Start."
---

For the past few weeks I've been playing around with [TanStack Start](https://tanstack.com/start/latest), a new full-stack React framework by Tanner Linsley, the creator of React Query and other amazing TanStack libraries. The framework uses [h3](https://h3.unjs.io/) under the hood - the same server technology that powers Nitro, Nuxt, and SolidStart.

> SSR, Streaming, Server Functions, API Routes, bundling and more powered by TanStack Router and Vite. Ready to deploy to your favorite hosting provider.
>
> -- [tanstack.com/start](https://tanstack.com/start/latest)

## h3 WebSockets

Traditionally, setting up WebSockets in a full-stack metaframework requires you to use a separate service or a custom server. h3 changes this by providing experimental WebSocket support, powered by [crossws](https://crossws.unjs.io/), allowing our full-stack apps to handle WebSocket connections directly with minimal setup.

You can read more at [h3.unjs.io/guide/websocket](https://h3.unjs.io/guide/websocket).

## Setting up the server

Assuming you already have a TanStack Start project [set up](https://tanstack.com/start/latest/docs/framework/react/getting-started) (or you can use my [tanstarter template](https://github.com/dotnize/tanstarter)), let's get started by setting up a new websocket handler.

1. First, let's enable experimental h3 websockets in our app config.

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
// src/ws.ts
import { defineEventHandler, defineWebSocket } from "@tanstack/react-start/server";

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

3. Finally, add a new router to handle the websocket requests.

```ts {9-18}
// app.config.ts
export default defineConfig({
  // ...
  server: {
    experimental: {
      websocket: true,
    },
  },
}).then((config) => {
  config.addRouter({
    name: "websocket",
    type: "http",
    handler: "./src/ws.ts", // the file we created above
    target: "server",
    base: "/_ws",
  });
  return config;
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

You can perform authentication checks in the `upgrade` hook. This is supported in crossws 0.3.0 and later.

```ts {5-12}
// src/ws.ts
export default defineEventHandler({
  handler() {},
  websocket: defineWebSocket({
    async upgrade(req) {
      const user = await yourOwnAuthMethod(req); // e.g. check jwt

      // deny unauthorized connections
      if (!user) {
        return new Response(null, { status: 401 });
      }
    },
    open(peer) {
      // ...
    },
  }),
});
```

crossws 0.3.2 and later allows you to add context in the `upgrade` hook, which you can access in the `peer` object in other hooks to preserve session data.

```ts {14-17}
// src/ws.ts
export default defineEventHandler({
  handler() {},
  websocket: defineWebSocket({
    async upgrade(req) {
      const user = await yourOwnAuthMethod(req); // e.g. check jwt

      // deny unauthorized connections
      if (!user) {
        return new Response(null, { status: 401 });
      }

      // auth successful
      req.context.user = {
        id: user.id,
        name: user.name,
      };
    },
    open(peer) {
      console.log(peer.context.user); // { id: 1, name: 'Nate' }
      // ...
    },
  }),
});
```

Read more about `crossws` hooks at [crossws.unjs.io/guide/hooks](https://crossws.unjs.io/guide/hooks).

---

This opens up a lot of possibilities for building real-time applications with modern full-stack frameworks. For example, SvelteKit has an [ongoing PR](https://github.com/sveltejs/kit/pull/12973) to add native WebSocket support, also powered by crossws.

In the meantime, I'm also building a new project that uses TanStack Start and h3 websockets, which I'll share more about soon. Stay tuned!
