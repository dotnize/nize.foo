import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
    return (
        <div>
            <HttpStatusCode code={404} />
            <h1>Page Not Found</h1>
        </div>
    );
}
