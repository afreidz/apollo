<script lang="ts">
	import * as Button from '@/lib/components/button/index.ts';
	import type { ButtonProps } from '@/lib/components/button/button.svelte';

	let variants: ButtonProps['variant'][] = [
		'normal',
		'success',
		'warning',
		'danger',
		'info',
		'accent'
	];
	let kinds: ButtonProps['kind'][] = ['primary', 'secondary', 'tint', 'outline', 'ghost'];

	let on = $state(true);
</script>

<div class="p-4 flex gap-8">
	<div class="rounded-normal bg-white/5 p-4 px-6">
		<h2>Standard</h2>
		<ul>
			{#each kinds as kind}
				<li>
					<span>{kind}</span>
					<ul>
						{#each variants as variant}
							<li>
								<span>{variant}</span>
								<Button.Root {kind} {variant}>Button</Button.Root>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</div>
	<div class="rounded bg-white/5 p-4 px-6">
		<h2>Toggle</h2>
		<ul>
			{#each kinds as kind}
				<li>
					<span>{kind}</span>
					<ul>
						{#each variants as variant}
							<li>
								<span>{variant}</span>
								<Button.Root bind:pressed={on} {kind} {variant}>Button</Button.Root>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	h2 {
		font-weight: bold;
		font-size: 22px;
		margin-bottom: 30px;
	}
	span {
		display: inline-block;
		width: 200px;
	}
	li {
		margin-bottom: 10px;
	}
	ul {
		margin-left: 20px;
	}
</style>
