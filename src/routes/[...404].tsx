import { Title, useLocation } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import Cmd from "~/components/Cmd";

export default function NotFound() {
    const location = useLocation();
    return (
        <div class="flex flex-col gap-4">
            <HttpStatusCode code={404} />
            <Title>404 | nize</Title>
            <Cmd text={`cd ${location.pathname.slice(1)}`} />
            <span class="font-mono text-2xl font-bold">Error 404: Not found</span>
        </div>
    );
}
