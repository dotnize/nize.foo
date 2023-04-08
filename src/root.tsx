// @refresh reload
import { Suspense, onMount } from "solid-js";
import {
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title
} from "solid-start";

import "@fontsource/azeret-mono";
import "@fontsource/bebas-neue";
import "@fontsource/roboto";
import "./root.css";

import Header from "~/components/Header";
import Window from "~/components/Window";

export default function Root() {
    onMount(() => {
        const scrollableDiv = document.getElementById("scrollable");
        const trail = document.getElementById("trail_main");
        const trailOutline = document.getElementById("trail_outline");
        const trailHighlightArea = document.getElementById("trail_highlightarea");

        if (!scrollableDiv || !trail || !trailOutline || !trailHighlightArea) return;

        let highlighted = false;

        window.addEventListener("mousemove", (e) => {
            const x = e.clientX - trail.offsetWidth / 2,
                y = e.clientY - trail.offsetHeight / 2;

            const x2 = e.clientX - trailOutline.offsetWidth / 2,
                y2 = e.clientY - trailOutline.offsetHeight / 2;

            const keyframes = {
                transform: `translate(${x}px, ${y}px)`
            };
            const keyframes2 = {
                transform: `translate(${x2}px, ${y2}px)`
            };

            trail.animate(keyframes, {
                duration: 700,
                fill: "forwards"
            });

            trailOutline.animate(keyframes2, {
                duration: highlighted ? 700 : 1500,
                fill: "forwards"
            });
        });
        document.addEventListener("mouseover", (e) => {
            if (
                trailHighlightArea.contains(e.target as Node) ||
                (e.target as HTMLElement).classList.contains("__highlight") ||
                (e.target as HTMLElement).parentElement?.classList.contains("__highlight")
            ) {
                if (!highlighted) highlighted = true;
                if (!trail.classList.contains("trail_hidden")) {
                    trail.classList.add("trail_hidden");
                }
                if (!trailOutline.classList.contains("trail_highlight")) {
                    trailOutline.classList.add("trail_highlight");
                }
            } else {
                if (highlighted) highlighted = false;
                if (trail.classList.contains("trail_hidden")) {
                    trail.classList.remove("trail_hidden");
                }
                if (trailOutline.classList.contains("trail_highlight")) {
                    trailOutline.classList.remove("trail_highlight");
                }
            }
        });

        document.body.addEventListener("wheel", (event) => {
            if (!scrollableDiv.contains(event.target as Node)) {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                const scrollHeight =
                    document.documentElement.scrollHeight || document.body.scrollHeight;
                const clientHeight = document.documentElement.clientHeight;

                const deltaY = event.deltaY;
                const scrollAmount = 150;
                if (deltaY >= 0 && scrollTop + clientHeight < scrollHeight) {
                    return;
                }
                scrollableDiv.scrollBy({
                    top: deltaY < 0 ? -scrollAmount : scrollAmount,
                    behavior: "smooth"
                });
            }
        });
    });

    return (
        <Html lang="en">
            <Head>
                <Title>Nathaniel Tampus | nize</Title>
                <Meta charset="utf-8" />
                <Meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta
                    name="description"
                    content="A developer from the Philippines with a passion for full-stack web and game development."
                />
            </Head>
            <Body
                class="bg-gruvbox-bgH text-gruvbox-fg dark:bg-gruvboxDark-bgH dark:text-gruvboxDark-fg"
                lang="en"
            >
                <Suspense>
                    <ErrorBoundary>
                        <div
                            id="trail_main"
                            class="pointer-events-none fixed left-0 top-0 z-50 h-4 w-4 rounded-full bg-gruvbox-fg opacity-0  transition-all duration-300 dark:bg-gruvboxDark-fg"
                        />
                        <div
                            id="trail_outline"
                            class="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 rounded-full border-2 border-gruvbox-fg opacity-0 transition-all duration-500 dark:border-gruvboxDark-fg"
                        />
                        <Header />
                        <Window>
                            <Routes>
                                <FileRoutes />
                            </Routes>
                        </Window>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
                <script>
                    {`if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                        document.documentElement.classList.add("dark");
                    } else {
                        document.documentElement.classList.remove("dark");
                    }`}
                </script>
            </Body>
        </Html>
    );
}
