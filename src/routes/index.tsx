export default function Home() {
    return (
        <div class="flex flex-col gap-4">
            <div class="font-azeret text-sm">
                <span class="text-gruvbox-aqua dark:text-gruvboxDark-aqua2">&gt;&nbsp;</span>
                nizefetch
            </div>
            <div class="flex w-full flex-col items-center gap-8">
                <div class="flex w-full max-w-[90ch] flex-wrap items-center justify-center gap-4 md:flex-nowrap">
                    <img src="./images/nize.png" width={160} height={160} class="h-40 w-40" />
                    <div>
                        <div class="mb-4 flex flex-wrap items-end">
                            <h1 class="mr-2 font-bebas text-6xl leading-[44px]">
                                Nathaniel Tampus
                            </h1>
                            <h2 class="font-azeret">// nize</h2>
                        </div>

                        <p class="text-justify font-sans text-lg">
                            Hi there! My name is Nathaniel Tampus, also known online as nize. I'm a
                            developer currently studying at Cebu Institute of Technology University
                            for my Bachelor's degree in Information Technology.
                        </p>
                    </div>
                </div>
                <div class="flex w-full max-w-[90ch] flex-wrap gap-8 font-mono">
                    <div class="flex flex-grow flex-col gap-1">
                        <div class="w-full text-center text-xs font-black">primary stack</div>
                        <div class="flex w-full items-center gap-2">
                            <span class="w-1/2 text-right text-xs">frontend:</span>
                            <span class="w-1/2 text-left">Next.js + Tailwind CSS</span>
                        </div>
                        <div class="flex w-full items-center gap-2">
                            <span class="w-1/2 text-right text-xs">backend:</span>
                            <span class="w-1/2 text-left">Express.js</span>
                        </div>
                        <div class="flex w-full items-center gap-2">
                            <span class="w-1/2 text-right text-xs">database:</span>
                            <span class="w-1/2 text-left">PostgreSQL / MySQL</span>
                        </div>
                    </div>
                    <div class="flex flex-grow flex-col gap-1">
                        <div class="w-full text-center text-xs font-black">featured</div>
                        <div class="flex w-full items-center gap-2">
                            <span class="w-1/2 text-right text-xs">project:</span>
                            <a
                                class="w-1/2 text-left hover:underline"
                                href="https://github.com/nizewn/chessu"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="chessu on GitHub"
                            >
                                chessu
                            </a>
                        </div>
                        <div class="flex w-full items-center gap-2">
                            <span class="flex w-1/2 items-center justify-end gap-1 text-xs">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="inline h-4 w-4"
                                >
                                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                                </svg>
                                github:
                            </span>
                            <a
                                class="w-1/2 text-left hover:underline"
                                href="https://github.com/nizewn"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                            >
                                nizewn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
