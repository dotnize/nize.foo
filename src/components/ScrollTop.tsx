import { createSignal, onMount } from "solid-js";

export default function ScrollTop() {
  const [shown, setShown] = createSignal(false);

  onMount(() => {
    window.addEventListener("scroll", () => {
      setShown(window.scrollY > 350);
    });
  });

  return (
    <button
      classList={{
        "opacity-75 cursor-pointer z-50": shown(),
        "opacity-0 pointer-events-none -z-20": !shown(),
      }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="Scroll to top"
      aria-label="Scroll to top"
      class="__highlight bg-gruvboxDark-bg1 text-gruvboxDark-fg fixed right-2 bottom-8 flex size-12 items-center justify-center rounded-full shadow-md transition-opacity duration-300 md:right-10 lg:right-28 xl:right-36 2xl:right-48"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="size-6"
      >
        <path
          fill-rule="evenodd"
          d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  );
}
