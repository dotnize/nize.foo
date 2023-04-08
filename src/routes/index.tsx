import { Title } from "solid-start";
import Cmd from "~/components/Cmd";
import IconGitHub from "~/components/icons/IconGitHub";

export default function Home() {
    return (
        <div class="flex flex-col gap-4">
            <Title>Nathaniel Tampus | nize</Title>
            <Cmd text="whoami -h" />
            <div class="flex w-full flex-col items-center gap-8">
                <div class="flex w-full max-w-[90ch] flex-wrap items-center justify-center gap-4 md:flex-nowrap">
                    <img
                        src="./images/nize.jpg"
                        alt="nize's avatar"
                        width={160}
                        height={160}
                        class="rounded-lg"
                    />
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
                <div class="flex w-full max-w-[90ch] flex-wrap gap-8 font-roboto">
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
                                <IconGitHub class="h-4 w-4" />
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
