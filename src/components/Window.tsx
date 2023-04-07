import { ParentProps, Switch, Match } from "solid-js";
import { useLocation } from "solid-start";
import Footer from "./Footer";

export default function Window(props: ParentProps) {
    const location = useLocation();

    return (
        <div id="trail_highlightarea" class="mx-3 shadow-xl md:mx-16 lg:mx-36 xl:mx-52 2xl:mx-72">
            <div class="flex h-6 items-center justify-between rounded-t-2xl bg-gruvbox-bgS px-3 drop-shadow-sm dark:bg-gruvboxDark-bgS md:h-8">
                <div class="font-azeret text-sm md:text-base">
                    <Switch>
                        <Match when={location.pathname === "/"}>Home</Match>
                        <Match when={location.pathname.startsWith("/blog")}>Blog</Match>
                        <Match when={location.pathname.startsWith("/projects")}>Projects</Match>
                        <Match when={location.pathname.startsWith("/contact")}>Contact</Match>
                    </Switch>
                </div>
                <div class="flex gap-2">
                    <div class="h-2 w-2 rounded-full bg-gruvbox-yellow dark:bg-gruvboxDark-yellow2 md:h-3 md:w-3" />
                    <div class="h-2 w-2 rounded-full bg-gruvbox-green dark:bg-gruvboxDark-green2 md:h-3 md:w-3" />
                    <div class="h-2 w-2 rounded-full bg-gruvbox-red dark:bg-gruvboxDark-red2 md:h-3 md:w-3" />
                </div>
            </div>
            <div
                id="scrollable"
                class={
                    "overflow-y-auto bg-gruvbox-bg p-4 dark:bg-gruvboxDark-bg" +
                    (location.pathname.startsWith("/blog") ? " h-[calc(100vh-3rem)]" : " h-[75vh]")
                }
            >
                <main class={`min-h-[${location.pathname.startsWith("/blog") ? "70" : "55"}vh]`}>
                    {props.children}
                </main>
                <Footer />
            </div>
        </div>
    );
}
