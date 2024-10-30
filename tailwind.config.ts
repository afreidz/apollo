import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';
import theme from 'tailwindcss/defaultTheme';
import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				normal: theme.spacing[10],
				tight: theme.spacing[6],
				airy: theme.spacing[14]
			},
			spacing: {
				normal: theme.spacing[4],
				tight: theme.spacing[2],
				airy: theme.spacing[8]
			},
			borderRadius: {
				normal: '0.3rem'
			},
			colors: {
				info: colors.blue[500],
				dark: colors.neutral[950],
				light: colors.neutral[50],
				danger: colors.rose[500],
				warning: colors.amber[500],
				accent: colors.purple[400],
				success: colors.emerald[500]
			}
		}
	},

	plugins: [containerQueries, aspectRatio]
} as Config;
