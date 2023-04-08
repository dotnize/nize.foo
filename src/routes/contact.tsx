import { Title } from "solid-start";
import { createSignal } from "solid-js";
import Cmd from "~/components/Cmd";

import IconEmail from "~/components/icons/IconEmail";
import IconGitHub from "~/components/icons/IconGitHub";
import IconLinkedIn from "~/components/icons/IconLinkedIn";

export default function Contact() {
    // eslint-disable-next-line prefer-const
    let messageTitleRef: HTMLInputElement | undefined = undefined;
    // eslint-disable-next-line prefer-const
    let messageTextRef: HTMLTextAreaElement | undefined = undefined;

    const [sent, setSent] = createSignal(false);

    async function sendMessage() {
        if (!messageTextRef || !messageTitleRef) return;
        const messageText = messageTextRef.value;
        const messageTitle = messageTitleRef?.value;

        if (messageText) {
            setSent(true);
            messageTextRef.value = "";
            messageTitleRef.value = "";
            await fetch(import.meta.env.VITE_DISCORD_WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    embeds: [
                        {
                            title: messageTitle,
                            description: messageText
                        }
                    ]
                })
            });
            setTimeout(() => {
                setSent(false);
            }, 10000);
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
                    <div class="flex items-center gap-1">
                        ... or send me an anonymous message!{" "}
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
                            class="flex w-36 items-center justify-center gap-1 rounded-lg border border-transparent bg-gruvbox-bg1 p-3 text-lg shadow-md transition-all hover:brightness-125 active:border-gruvbox-fg disabled:pointer-events-none disabled:bg-gruvboxDark-aqua2 dark:bg-gruvboxDark-bgS dark:active:border-gruvboxDark-fg dark:disabled:bg-gruvbox-aqua2"
                            onClick={sendMessage}
                            disabled={sent()}
                        >
                            {sent() && (
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
                            {sent() ? "Sent!" : "Send"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
