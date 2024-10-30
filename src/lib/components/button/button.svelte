<script lang="ts" module>
	import { classed, type VariantProps } from '@/lib/utils/classed.ts';
	import { focusableClasses, transitionClasses } from '@/lib/utils/classes.ts';

	type BaseProps = VariantProps<typeof buttonVariants> & {
		class?: string;
		pressed?: boolean;
		disabled?: boolean;
		onpress?: (e: TouchEvent | MouseEvent) => void;
	};

	export type ButtonProps =
		| Apollo.ElementProps<BaseProps, 'a'>
		| Apollo.ElementProps<BaseProps, 'button'>;

	export const buttonVariants = classed(
		focusableClasses,
		`
			select-none
			inline-flex
			items-center
			rounded-normal
		`,
		{
			variants: {
				size: {
					airy: `
						h-airy
						ps-airy
						pe-airy
					`,
					tight: `
						h-tight
						ps-tight
						pe-tight
					`,
					normal: `
						h-normal
						ps-normal
						pe-normal
					`
				},
				contrastShift: {
					true: ''
				},
				pressed: {
					true: ''
				},
				kind: {
					primary: `
						bg-dark
						text-light
						border-none
						bg-opacity-100
						dark:bg-light
						dark:text-dark
						dark:bg-opacity-100
					`,
					tint: `
						border
						bg-opacity-5
						border-opacity-50
						dark:bg-opacity-5
						dark:border-opacity-50
					`,
					ghost: `
						border-none
						bg-opacity-0
						dark:bg-opacity-0
					`,
					secondary: `
						border-none
						bg-opacity-10
						dark:bg-opacity-10
					`,
					outline: `
						border
						bg-opacity-0
						border-opacity-40
						dark:bg-opacity-0
						dark:border-opacity-40
					`
				},
				variant: {
					normal: `
						bg-dark
						text-dark
						border-dark
						dark:bg-light
						dark:text-light
						dark:border-light
					`,
					info: `
						bg-info
						text-info
						border-info
						dark:bg-info
						dark:text-info
						dark:border-info
					`,
					success: `
						bg-success
						text-success
						border-success
						dark:bg-success
						dark:text-success
						dark:border-success
					`,
					warning: `
						bg-warning
						text-warning
						border-warning
						dark:bg-warning
						dark:text-warning
						dark:border-warning
					`,
					danger: `
						bg-danger
						text-danger
						border-danger
						dark:bg-danger
						dark:text-danger
						dark:border-danger
					`,
					accent: `
						bg-accent
						text-accent
						border-accent
						dark:bg-accent
						dark:text-accent
						dark:border-accent
					`
				}
			},
			compoundVariants: [
				{
					variant: ['info', 'success', 'warning', 'danger', 'accent', 'normal'],
					kind: 'secondary',
					class: 'text-dark dark:text-light'
				},
				{
					variant: ['info', 'success', 'warning', 'danger', 'accent', 'normal'],
					kind: 'primary',
					class: 'text-light dark:text-dark'
				},
				{
					kind: 'tint',
					pressed: true,
					class: 'bg-opacity-10 dark:bg-opacity-15'
				},
				{
					pressed: false,
					kind: 'outline',
					variant: ['info', 'success', 'warning', 'danger', 'accent', 'normal'],
					class: 'text-dark dark:text-light'
				},
				{
					pressed: true,
					kind: 'outline',
					variant: ['info', 'success', 'warning', 'danger', 'accent', 'normal'],
					class: 'border-opacity-80 dark:border-opacity-80'
				},
				{
					pressed: true,
					kind: ['ghost', 'primary'],
					variant: ['info', 'success', 'warning', 'danger', 'accent', 'normal'],
					class: 'bg-gradient-to-b from-black/15 to-black/15'
				},
				{
					pressed: true,
					kind: 'secondary',
					variant: ['info', 'success', 'warning', 'danger', 'accent', 'normal'],
					class: 'bg-opacity-100 dark:bg-opacity-100 text-light dark:text-dark'
				},
				{
					contrastShift: true,
					kind: ['primary', 'secondary'],
					class: 'text-light dark:text-dark'
				},
				// NOT YET TESTED 👇🏻
				{
					pressed: true,
					contrastShift: true,
					kind: ['primary', 'secondary'],
					class: 'text-dark dark:text-light'
				}
			]
		}
	);
</script>

<script lang="ts">
	let {
		class: customClasses = '',
		pressed = $bindable(),
		variant = 'normal',
		disabled = false,
		kind = 'primary',
		size = 'normal',
		as = 'button',
		children,
		onpress,
		...rest
	}: ButtonProps = $props();

	let classList = $derived.by(() => {
		return [
			buttonVariants({ size, variant, kind: kind, pressed: pressed }),
			pressed === undefined ? transitionClasses : 'active:translate-y-px',
			customClasses
		].join(' ');
	});

	let aria = $derived.by(() => ({
		'aria-disabled': disabled === true ? true : undefined,
		'aria-pressed': !pressed ? undefined : pressed
	}));

	function handlePress(e: TouchEvent | MouseEvent) {
		if (onpress) return onpress(e);
		if (pressed !== undefined) return (pressed = !pressed);
	}
</script>

<svelte:element
	this={as}
	{...aria}
	{...rest}
	{disabled}
	tabindex="0"
	role="button"
	class={classList}
	onclick={handlePress}
	ontouchend={handlePress}
>
	{@render children()}
</svelte:element>
