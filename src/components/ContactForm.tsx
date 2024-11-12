import { Match, Switch, createSignal } from "solid-js";

export default function ContactForm() {
  let messageTitleRef: HTMLInputElement | undefined = undefined;
  let messageTextRef: HTMLTextAreaElement | undefined = undefined;
  let messageContactRef: HTMLInputElement | undefined = undefined;

  const [status, setStatus] = createSignal<null | "sent" | "error" | "sending">(null);
  const [anon, setAnon] = createSignal(true);

  function checkAnonymous(
    e: Event & {
      currentTarget: HTMLInputElement;
    }
  ) {
    if (anon() && e.currentTarget.value && e.currentTarget.value !== "") {
      setAnon(false);
    } else if (!anon() && (!e.currentTarget.value || e.currentTarget.value === "")) {
      setAnon(true);
    }
  }

  async function sendMessage() {
    if (!messageTextRef || !messageTitleRef || !messageContactRef) return;
    const messageText = messageTextRef.value;
    const messageTitle = messageTitleRef.value;
    const messageContact = messageContactRef.value;

    if (messageText && status() === null) {
      setStatus("sending");
      try {
        const res = await fetch("/msg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: messageTitle,
            text: messageText,
            contact: messageContact,
          }),
        });
        if (res && res.ok) {
          messageTextRef.value = "";
          messageTitleRef.value = "";
          setStatus("sent");
          setTimeout(() => {
            setStatus(null);
          }, 8000);
        } else {
          setStatus("error");
          setTimeout(() => {
            setStatus(null);
          }, 4000);
        }
      } catch (err) {
        setStatus("error");
        setTimeout(() => {
          setStatus(null);
        }, 4000);
      }
    }
  }
  return (
    <div class="flex w-full max-w-[80ch] flex-col items-center gap-2">
      <div class="flex flex-wrap items-center gap-1">
        Send me {anon() ? "an anonymous" : "a"} message!
      </div>
      <div class="flex w-full flex-wrap gap-2">
        <input
          type="text"
          name="messageTitle"
          id="messageTitle"
          ref={messageTitleRef}
          placeholder="Title (optional)"
          class="flex-1 rounded-lg border border-gruvbox-bg4 bg-gruvbox-bgH p-2 placeholder-gruvbox-fg4 outline-none outline-1 focus:outline-gruvbox-bg4 dark:border-none dark:bg-gruvboxDark-bg dark:placeholder-gruvboxDark-fg4 dark:shadow-md dark:focus:outline-gruvboxDark-bg2"
        />
        <input
          type="text"
          name="messageContact"
          id="messageContact"
          ref={messageContactRef}
          onChange={checkAnonymous}
          placeholder="Contact info/email (optional)"
          class="min-w-[27ch] flex-1 rounded-lg border border-gruvbox-bg4 bg-gruvbox-bgH p-2 placeholder-gruvbox-fg4 outline-none outline-1 focus:outline-gruvbox-bg4 dark:border-none dark:bg-gruvboxDark-bg dark:placeholder-gruvboxDark-fg4 dark:shadow-md dark:focus:outline-gruvboxDark-bg2"
        />
      </div>
      <textarea
        class="w-full rounded-lg border border-gruvbox-bg4 bg-gruvbox-bgH p-2 placeholder-gruvbox-fg4 outline-none outline-1 focus:outline-gruvbox-bg4 dark:border-none dark:bg-gruvboxDark-bg dark:placeholder-gruvboxDark-fg4 dark:shadow-md dark:focus:outline-gruvboxDark-bg2"
        rows={6}
        name="messageText"
        required
        placeholder="Enter message here..."
        id="messageText"
        ref={messageTextRef}
      ></textarea>
      <div class="flex w-full justify-end">
        <button
          class={
            "flex max-w-full items-center justify-center gap-1 rounded-lg border p-3 px-5 text-lg font-bold shadow-md transition-all hover:brightness-90 active:border-gruvbox-fg disabled:pointer-events-none dark:active:border-gruvboxDark-fg" +
            (status() === null
              ? " border-gruvbox-bg2 bg-gruvbox-bgH dark:border-gruvboxDark-bg2 dark:bg-gruvboxDark-bg"
              : "") +
            (status() === "sent"
              ? " border-transparent bg-gruvboxDark-aqua2 dark:bg-gruvbox-aqua2"
              : "") +
            (status() === "error"
              ? " border-transparent bg-gruvboxDark-orange2 dark:bg-gruvbox-orange2"
              : "")
          }
          onClick={sendMessage}
          disabled={status() !== null}
        >
          {status() === "sent" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          )}
          <Switch>
            <Match when={status() === "error"}>Error: Message not sent.</Match>
            <Match when={status() === "sending"}>Sending...</Match>
            <Match when={status() === "sent"}>Sent!</Match>
            <Match when={status() === null}>Send</Match>
          </Switch>
        </button>
      </div>
    </div>
  );
}
