<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<any> & {
		as: keyof HTMLElementDeprecatedTagNameMap;
		children: Snippet;
	};

	let { as, ...rest }: Props = $props();
</script>

<svelte:element this={as} {...rest}></svelte:element>
