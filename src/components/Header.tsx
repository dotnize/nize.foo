import { A } from "solid-start";

export default function Header() {
    return (
        <header class="mx-3 h-[calc(25vh-1.5rem)] md:mx-16 md:h-[calc(25vh-2rem)] lg:mx-36 xl:mx-52 2xl:mx-72">
            <nav class="flex h-full w-full items-center justify-evenly font-roboto text-sm">
                <A
                    class="__highlight flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-lg border-2 border-transparent p-2 transition-all hover:border-gruvbox-bg1 dark:hover:border-gruvboxDark-bg1"
                    activeClass=" pointer-events-none shadow-md hmd:border-gruvbox-bg dark:hmd:border-gruvboxDark-bg"
                    href="/"
                    end={true}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="__highlight hidden h-6 w-6 hmd:flex"
                    >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>

                    <span>Home</span>
                </A>
                <A
                    class="__highlight flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-lg border-2 border-transparent p-2 transition-all hover:border-gruvbox-bg1 dark:hover:border-gruvboxDark-bg1"
                    activeClass=" pointer-events-none shadow-md hmd:border-gruvbox-bg dark:hmd:border-gruvboxDark-bg"
                    href="/blog"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="__highlight hidden h-6 w-6 hmd:flex"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                            clip-rule="evenodd"
                        />
                        <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                    </svg>

                    <span>Blog</span>
                </A>
                <A
                    class="__highlight flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-lg border-2 border-transparent p-2 transition-all hover:border-gruvbox-bg1 dark:hover:border-gruvboxDark-bg1"
                    activeClass=" pointer-events-none shadow-md hmd:border-gruvbox-bg dark:hmd:border-gruvboxDark-bg"
                    href="/projects"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="__highlight hidden h-6 w-6 hmd:flex"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z"
                            clip-rule="evenodd"
                        />
                    </svg>

                    <span>Projects</span>
                </A>
                <A
                    class="__highlight flex h-16 w-16 flex-col items-center justify-center gap-1 rounded-lg border-2 border-transparent p-2 transition-all hover:border-gruvbox-bg1 dark:hover:border-gruvboxDark-bg1"
                    activeClass=" pointer-events-none shadow-md hmd:border-gruvbox-bg dark:hmd:border-gruvboxDark-bg"
                    href="/contact"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="__highlight hidden h-6 w-6 hmd:flex"
                    >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>

                    <span>Contact</span>
                </A>
            </nav>
        </header>
    );
}
