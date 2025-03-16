/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      // TODO: remove/move to css format
      typography: ({ theme }) => ({
        gruvbox: {
          css: {
            "--tw-prose-body": theme("colors.gruvbox.fg2"),
            "--tw-prose-headings": theme("colors.gruvbox.fg1"),
            "--tw-prose-lead": theme("colors.gruvbox.fg3"),
            "--tw-prose-links": theme("colors.gruvbox.blue2"),
            "--tw-prose-bold": theme("colors.gruvbox.fg1"),
            "--tw-prose-counters": theme("colors.gruvbox.fg4"),
            "--tw-prose-bullets": theme("colors.gruvbox.bg4"),
            "--tw-prose-hr": theme("colors.gruvbox.bg1"),
            "--tw-prose-quotes": theme("colors.gruvbox.fg3"),
            "--tw-prose-quote-borders": theme("colors.gruvbox.bg1"),
            "--tw-prose-captions": theme("colors.gruvbox.fg4"),
            "--tw-prose-code": theme("colors.gruvbox.fg0"),
            "--tw-prose-pre-code": theme("colors.gruvboxDark.fg"),
            "--tw-prose-pre-bg": theme("colors.gruvboxDark.bgH"),
            "--tw-prose-th-borders": theme("colors.gruvbox.bg2"),
            "--tw-prose-td-borders": theme("colors.gruvbox.bg1"),
            "--tw-prose-invert-body": theme("colors.gruvboxDark.fg3"),
            "--tw-prose-invert-headings": theme("colors.gruvboxDark.fg1"),
            "--tw-prose-invert-lead": theme("colors.gruvboxDark.fg4"),
            "--tw-prose-invert-links": theme("colors.gruvboxDark.blue2"),
            "--tw-prose-invert-bold": theme("colors.gruvboxDark.fg1"),
            "--tw-prose-invert-counters": theme("colors.gruvboxDark.fg4"),
            "--tw-prose-invert-bullets": theme("colors.gruvboxDark.bg4"),
            "--tw-prose-invert-hr": theme("colors.gruvboxDark.bg1"),
            "--tw-prose-invert-quotes": theme("colors.gruvboxDark.fg4"),
            "--tw-prose-invert-quote-borders": theme("colors.gruvboxDark.bg1"),
            "--tw-prose-invert-captions": theme("colors.gruvboxDark.fg4"),
            "--tw-prose-invert-code": theme("colors.gruvboxDark.fg0"),
            "--tw-prose-invert-pre-code": theme("colors.gruvboxDark.fg"),
            "--tw-prose-invert-pre-bg": theme("colors.gruvboxDark.bgH"),
            "--tw-prose-invert-th-borders": theme("colors.gruvboxDark.bg2"),
            "--tw-prose-invert-td-borders": theme("colors.gruvboxDark.bg1"),
          },
        },
      }),
    },
  },
};
