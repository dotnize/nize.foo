import { For } from "solid-js";
import { Title } from "solid-start";

import Cmd from "~/components/Cmd";
import Project from "~/components/Project";

import type { ProjectProps } from "~/types";

const projects: ProjectProps[] = [
    {
        name: "chessu",
        description:
            "An online multiplayer chess site for real-time games with spectator support and optional user authentication.",
        stack: "React/Next.js, Tailwind CSS, Express.js, socket.io, PostgreSQL",
        repo: "https://github.com/nizewn/chessu",
        demo: "https://ches.su"
    },
    {
        name: "Dodong",
        description:
            "A music bot for the Discord chat platform with a focus on simplicity and ease of use.",
        stack: "Node.js, discord.js",
        repo: "https://github.com/nizewn/Dodong"
    },
    {
        name: "moodle-scrape",
        description:
            "A simple npm package for scraping student data and resources from Moodle LMS sites.",
        stack: "Node.js, cheerio",
        repo: "https://github.com/nizewn/moodle-scrape"
    }
];

export default function Projects() {
    return (
        <div>
            <Title>Projects | nize</Title>
            <Cmd text="projects --featured" />
            <div class="mt-4 flex flex-col gap-1">
                <For each={projects}>
                    {(p) => (
                        <Project
                            name={p.name}
                            description={p.description}
                            stack={p.stack}
                            repo={p.repo}
                            demo={p.demo}
                        />
                    )}
                </For>
            </div>
        </div>
    );
}
