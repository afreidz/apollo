<script lang="ts">
	import * as Button from '@/lib/components/button/index.ts';
	let on = $state(true);
</script>

<div class="p-4 flex gap-8">
	<div class="rounded-normal bg-white/5 p-4">
		<h2>Standard</h2>
		<ul>
			<li>
				<span>Primary:</span>
				<ul>
					<li>
						<span>Normal</span>
						<Button.Root as="a">Button</Button.Root>
					</li>
					<li>
						<span>Danger</span>
						<Button.Root as="button" variant="danger">Button</Button.Root>
					</li>
				</ul>
			</li>
			<li>
				<span>Tint:</span>
				<ul>
					<li>
						<span>Normal</span>
						<Button.Root as="button" kind="tint">Button</Button.Root>
					</li>
					<li>
						<span>Danger</span>
						<Button.Root as="button" kind="tint" variant="danger">Button</Button.Root>
					</li>
				</ul>
			</li>
			<li>
				<span>Outline</span>
				<ul>
					<li>
						<span>Normal</span>
						<Button.Root as="button" kind="outline">Button</Button.Root>
					</li>
					<li>
						<span>Danger</span>
						<Button.Root as="button" kind="outline" variant="danger">Button</Button.Root>
					</li>
				</ul>
			</li>
			<li>
				<span>Ghost</span>
				<ul>
					<li>
						<span>Normal</span>
						<Button.Root as="button" kind="ghost">Button</Button.Root>
					</li>
					<li>
						<span>Danger</span>
						<Button.Root as="button" kind="ghost" variant="danger">Button</Button.Root>
					</li>
				</ul>
			</li>
			<li>
				<span>Secondary</span>
				<ul>
					<li>
						<span>Normal</span>
						<Button.Root as="button" kind="secondary">Button</Button.Root>
					</li>
					<li>
						<span>Danger</span>
						<Button.Root as="button" kind="secondary" variant="danger">Button</Button.Root>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="rounded bg-white/5 p-4">
		<h2>Toggle</h2>
		<ul>
			<li>
				<span>Primary:</span>
				<ul>
					<li>
						<span>Normal</span>
						<Button.Root as="button" bind:on>Button</Button.Root>
					</li>
					<li>
						<span>Danger</span>
						<Button.Root as="button" bind:on variant="danger">Button</Button.Root>
					</li>
				</ul>
			</li>
			<li>
				<span>Tint:</span>
				<ul>
					<li>
						<span>Normal</span>
						<Button.Root as="button" bind:on kind="tint">Button</Button.Root>
					</li>
					<li>
						<span>Danger</span>
						<Button.Root as="button" bind:on kind="tint" variant="danger">Button</Button.Root>
					</li>
				</ul>
			</li>
			<li>
				<span>Outline</span>
				<ul>
					<li>
						<span>Normal</span>
						<Button.Root as="button" bind:on kind="outline">Button</Button.Root>
					</li>
					<li>
						<span>Danger</span>
						<Button.Root as="button" bind:on kind="outline" variant="danger">Button</Button.Root>
					</li>
				</ul>
			</li>
			<li>
				<span>Ghost</span>
				<ul>
					<li>
						<span>Normal</span>
						<Button.Root as="button" bind:on kind="ghost">Button</Button.Root>
					</li>
					<li>
						<span>Danger</span>
						<Button.Root as="button" bind:on kind="ghost" variant="danger">Button</Button.Root>
					</li>
				</ul>
			</li>
			<li>
				<span>Secondary</span>
				<ul>
					<li>
						<span>Normal</span>
						<Button.Root as="button" bind:on kind="secondary">Button</Button.Root>
					</li>
					<li>
						<span>Danger</span>
						<Button.Root as="button" bind:on kind="secondary" variant="danger">Button</Button.Root>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>

<style>
	h2 {
		font-weight: bold;
		font-size: 22px;
	}
	span {
		display: inline-block;
		width: 200px;
	}
	li {
		margin-bottom: 10px;
	}
	ul ul {
		margin-left: 20px;
	}
</style>
