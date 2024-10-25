<script lang="ts" module>
	import { focusableClasses, transitionClasses } from '@/lib/utils/classes.ts';

	export const buttonVariants = classed(
		`
			${focusableClasses}
			${transitionClasses}

			all-button-styles
			inline-flex
			items-center
			rounded-normal
			hover:grayscale-hover
			active:translate-y-px
		`,
		{
			variants: {
				size: {
					airy: `
						v-size-airy
						h-airy
						ps-airy
						pe-airy
					`,
					tight: `
						v-size-tight
						h-tight
						ps-tight
						pe-tight
					`,
					normal: `
						v-size-normal
						h-normal
						ps-normal
						pe-normal
					`
				},
				pressed: {
					true: `
						v-pressed
						font-medium
						to-black/20
						from-black/20
						bg-gradient-to-b
					`
				},
				kind: {
					ghost: `
						v-type-ghost
						text-dark
						border-none
						bg-opacity-0
						dark:text-light
						dark:bg-opacity-0
					`,
					primary: `
						v-type-primary
						text-light
						border-none
						bg-opacity-100
						dark:text-dark
						dark:bg-opacity-100
					`,
					secondary: `
						v-type-secondary
						text-dark
						border-none
						bg-opacity-10
						dark:text-light
						dark:bg-opacity-10
					`,
					tint: `
						v-type-tint
						border
						text-dark
						bg-opacity-5
						dark:text-light
						border-opacity-50
						dark:bg-opacity-5
						dark:border-opacity-50
					`,
					outline: `
						v-type-outline
						border
						text-dark
						bg-opacity-0
						dark:text-light
						border-opacity-20
						dark:bg-opacity-0
						dark:border-opacity-20
					`
				},
				variant: {
					info: `
						v-variant-info
						bg-info
					`,
					success: `
						v-variant-success
						bg-success
					`,
					warning: `
						v-variant-warning
						bg-warning
					`,
					danger: `
						v-variant-danger
						bg-danger
						border-danger
					`,
					normal: `
						v-variant-normal
						bg-dark
						text-dark
						border-dark
						dark:bg-light
						dark:text-dark
						dark:border-light
					`
				}
			},
			compoundVariants: [
				{
					kind: 'ghost',
					variant: 'danger',
					class: `
						v-compound-ghost-danger
						!text-danger
						dark:!text-danger
					`
				},
				{
					kind: 'outline',
					variant: 'danger',
					class: `
						v-compound-outline-danger
						border-opacity-40
						dark:border-opacity-40
					`
				},
				{
					kind: 'secondary',
					variant: 'danger',
					class: `
						v-compound-secondary-danger
						bg-opacity-35
						dark:bg-opacity-35
					`
				},
				{
					pressed: true,
					kind: 'ghost',
					class: `
						v-compound-ghost-pressed
						!bg-opacity-5
						!to-transparent
						!from-transparent
						dark:!bg-opacity-5
					`
				},
				{
					kind: 'tint',
					pressed: true,
					class: `
						v-compound-tint-pressed
						!bg-opacity-10
						dark:!bg-opacity-20
					`
				},
				{
					pressed: true,
					kind: 'secondary',
					class: `
						v-compound-secondary-pressed
						!to-transparent
						!bg-opacity-100
						!from-transparent
					`
				},
				{
					pressed: true,
					kind: 'secondary',
					variant: 'normal',
					class: `
						v-compound-secondary-pressed-normal
						!text-light
						dark:!text-dark
					`
				},
				{
					pressed: true,
					kind: 'outline',
					class: `
						v-compound-outline-pressed
						!to-black/5
						!from-black/5
						dark:!to-black/20
						!border-opacity-100
						dark:!from-black/20
					`
				},
				{
					pressed: true,
					variant: 'danger',
					class: `
						v-compound-danger-pressed
						!text-danger
					`
				},
				{
					pressed: true,
					kind: 'primary',
					variant: 'normal',
					class: `
						v-compound-primary-normal-pressed
						bg-opacity-70
					`
				},
				{
					pressed: true,
					kind: 'primary',
					variant: 'danger',
					class: `
						v-compound-primary-danger-pressed
						!text-light
					`
				},
				{
					pressed: true,
					kind: 'secondary',
					variant: 'danger',
					class: `
						v-compound-secondary-danger-pressed
						!text-light
					`
				}
			]
		}
	);
</script>

<script lang="ts">
	import { classed, type VariantProps } from '@tw-classed/core';

	type Props = Apollo.PolymorphicProps<'a' | 'button'> & {
		on?: boolean;
		disabled?: boolean;
		onpress?: (e: TouchEvent | MouseEvent) => void;
	} & VariantProps<typeof buttonVariants>;

	let {
		class: customClasses = '',
		variant = 'normal',
		disabled = false,
		on = $bindable(),
		kind = 'primary',
		size = 'normal',
		as = 'button',
		children,
		onpress,
		...rest
	}: Props = $props();

	let classList = $derived.by(() => {
		return buttonVariants({ size, variant, kind: kind, pressed: on }) + ' ' + customClasses;
	});

	let aria = $derived.by(() => ({
		'aria-disabled': disabled === true ? true : undefined,
		'aria-pressed': !on ? undefined : on
	}));

	function handlePress(e: TouchEvent | MouseEvent) {
		if (onpress) return onpress(e);
		if (on !== undefined) return (on = !on);
	}
</script>

<svelte:element
	this={as}
	{...rest}
	{...aria}
	{disabled}
	tabindex="0"
	role="button"
	class={classList}
	onclick={handlePress}
	ontouchend={handlePress}
>
	{@render children()}
</svelte:element>
