// See https://svelte.dev/docs/kit/types#app

import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Apollo {
		/**
		 * A generic type used to generate component prop values
		 * @type {BASE extends Record<string, any>} the base props to use
		 * @type {AS extends keyof svelteHTML.IntrinsicElements} the possible values for an "as" prop which will be used to render a specific HTML element
		 * @type {VOID extends 'void' | 'normal'} determine if the component is a "void" type. If it is, it should be self-closing with no children
		 *
		 * When a specific string/union is used for AS, the props will include all valid HTML attributes for the value of "as"
		 * NOTE: If the "as" prop is omitted, there will be too much ambiguity for this generic and any HTML props will be allowed
		 * even if a default value is provided when destructuring from $props()
		 */
		type ElementProps<
			BASE extends Record<string, any>,
			AS extends keyof svelteHTML.IntrinsicElements = keyof svelteHTML.IntrinsicElements,
			VOID extends 'void' | 'normal' = 'normal'
		> = {
			[K in AS]: svelteHTML.IntrinsicElements[K];
		}[AS] & {
			[K in keyof BASE]: BASE[K];
		} & {
			as?: AS;
			children: VOID extends 'void' ? never : Snippet;
		};
	}
}

export {};
