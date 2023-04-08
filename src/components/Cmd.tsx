export default function Cmd(props: { text: string }) {
    return (
        <div class="font-azeret text-sm">
            <span class="text-gruvbox-aqua dark:text-gruvboxDark-aqua2">&gt;&nbsp;</span>
            {props.text}
        </div>
    );
}
