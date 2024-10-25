// See https://svelte.dev/docs/kit/types#app

import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

type IntrinsicElementProps<T extends HTMLTagList> = {
	as: T;
	class?: string;
} & Omit<svelteHTML.IntrinsicElements[T], 'onclick'>;

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Apollo {
		type HTMLTagList = keyof svelteHTML.IntrinsicElements;

		type PolymorphicProps<
			T extends HTMLTagList = HTMLTagList,
			V extends 'void' | 'normal' = 'normal'
		> = {
			[K in T]: IntrinsicElementProps<K>;
		}[T] & {
			children: V extends 'void' ? never : Snippet;
		};
	}
}

export {};
