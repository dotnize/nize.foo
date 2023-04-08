import { ProjectProps } from "~/types";
import IconGitHub from "~/components/icons/IconGitHub";
import IconGlobe from "~/components/icons/IconGlobe";
import IconTools from "~/components/icons/IconTools";

export default function Project(props: ProjectProps) {
    return (
        <div class="flex flex-col gap-2 rounded-lg bg-gruvbox-bgH p-3 shadow-md dark:bg-gruvboxDark-bgH">
            <div class="flex justify-between">
                <div class="text-2xl font-bold">{props.name}</div>
                <div class="flex items-center gap-8 font-roboto text-sm">
                    {props.demo && (
                        <a
                            href={props.demo}
                            class="flex items-center gap-1 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Demo"
                        >
                            <IconGlobe class="h-4 w-4" />
                            {props.demo.replace(/^https?:\/\//, "")}
                        </a>
                    )}
                    <a
                        href={props.repo}
                        class="flex items-center gap-1 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub repository"
                    >
                        <IconGitHub class="h-4 w-4" />
                        GitHub
                    </a>
                </div>
            </div>
            <div class="text-justify">{props.description}</div>
            <div class="flex items-center gap-1 text-sm">
                <IconTools class="h-3 w-3" /> {props.stack}
            </div>
        </div>
    );
}
