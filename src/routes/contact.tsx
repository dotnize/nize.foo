import { Title, APIEvent } from "solid-start";
import { Switch, Match, createSignal } from "solid-js";
import Cmd from "~/components/Cmd";

import IconEmail from "~/components/icons/IconEmail";
import IconGitHub from "~/components/icons/IconGitHub";
import IconLinkedIn from "~/components/icons/IconLinkedIn";

export async function POST(e: APIEvent) {
    try {
        const msg = (await e.request.json()) as { title?: string; text?: string };
        if (msg && msg.text) {
            const res = await fetch(process.env.SERVER_DISCORD_WEBHOOK as string, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    embeds: [
                        {
                            title: msg.title,
                            description: msg.text
                        }
                    ]
                })
            });
            if (res && res.ok) {
                return new Response("Sent!", { status: 200 });
            } else {
                return new Response("Message not sent", { status: 500 });
            }
        }
        return new Response("Invalid request", { status: 400 });
    } catch (err) {
        console.error(err);
        return new Response("Internal server error", { status: 500 });
    }
}

export default function Contact() {
    // eslint-disable-next-line prefer-const
    let messageTitleRef: HTMLInputElement | undefined = undefined;
    // eslint-disable-next-line prefer-const
    let messageTextRef: HTMLTextAreaElement | undefined = undefined;

    const [status, setStatus] = createSignal<null | "sent" | "error" | "sending">(null);

    async function sendMessage() {
        if (!messageTextRef || !messageTitleRef) return;
        const messageText = messageTextRef.value;
        const messageTitle = messageTitleRef?.value;

        if (messageText && status() === null) {
            setStatus("sending");
            try {
                const res = await fetch("/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: messageTitle,
                        text: messageText
                    })
                });
                if (res && res.ok) {
                    messageTextRef.value = "";
                    messageTitleRef.value = "";
                    setStatus("sent");
                    setTimeout(() => {
                        setStatus(null);
                    }, 10000);
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
        <div>
            <Title>Contact | nize</Title>
            <Cmd text="contact --me" />
            <div class="mt-4 flex w-full flex-col items-center gap-4">
                <div class="flex w-full max-w-[90ch] flex-wrap justify-center gap-4 font-roboto text-lg md:gap-16">
                    <a
                        href="mailto:contact@nize.ph"
                        title="Email"
                        class="flex items-center gap-1 font-bold hover:underline"
                    >
                        <IconEmail class="h-5 w-5" /> contact@nize.ph
                    </a>
                    <a
                        href="https://github.com/nizewn"
                        title="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-1 font-bold hover:underline"
                    >
                        <IconGitHub class="h-5 w-5" /> nizewn
                    </a>
                    <a
                        href="https://linkedin.com/in/nize"
                        title="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-1 font-bold hover:underline"
                    >
                        <IconLinkedIn class="h-5 w-5" /> nize
                    </a>
                </div>
                <div class="flex w-full max-w-[90ch] flex-col items-center gap-2">
                    <div class="flex flex-wrap items-center gap-1">
                        ... or send me an anonymous message!
                        <span class="text-xs">via Discord webhooks</span>
                    </div>
                    <input
                        type="text"
                        name="messageTitle"
                        id="messageTitle"
                        ref={messageTitleRef}
                        placeholder="Title (optional)"
                        class="w-full rounded-lg bg-gruvbox-bgH p-2 placeholder-gruvbox-fg4 shadow-md outline-none outline-1 focus:outline-gruvbox-bg2 dark:bg-gruvboxDark-bgH dark:placeholder-gruvboxDark-fg4 dark:focus:outline-gruvboxDark-bg2"
                    />
                    <textarea
                        class="w-full rounded-lg bg-gruvbox-bgH p-2 placeholder-gruvbox-fg4 shadow-md outline-none outline-1 focus:outline-gruvbox-bg2 dark:bg-gruvboxDark-bgH dark:placeholder-gruvboxDark-fg4 dark:focus:outline-gruvboxDark-bg2"
                        rows={6}
                        name="messageText"
                        required
                        placeholder="Enter message here. Note that I won't be able to reply unless you include some sort of contact info."
                        id="messageText"
                        ref={messageTextRef}
                    />
                    <div class="flex w-full justify-end">
                        <button
                            class={
                                "flex max-w-full items-center justify-center gap-1 rounded-lg border border-transparent p-3 px-5 text-lg shadow-md transition-all hover:brightness-125 active:border-gruvbox-fg disabled:pointer-events-none dark:active:border-gruvboxDark-fg" +
                                (status() === null
                                    ? " bg-gruvbox-bg1 dark:bg-gruvboxDark-bgS"
                                    : "") +
                                (status() === "sent"
                                    ? " bg-gruvboxDark-aqua2 dark:bg-gruvbox-aqua2"
                                    : "") +
                                (status() === "error"
                                    ? " bg-gruvboxDark-orange2 dark:bg-gruvbox-orange2"
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
                                    class="h-6 w-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
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
            </div>
        </div>
    );
}
