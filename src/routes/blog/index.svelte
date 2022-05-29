<script lang="ts">
	import { prerendering } from '$app/env';
	// If you don't want an "index" page with the list of links,
	// just add "visibility: hidden" to the div wrapper around the anchor tags.

	export let postRoutes: Array<string>;
	export const prerender = false;
</script>

{#if prerendering}
	<div>
		<ul>
			{#each postRoutes as route}
				<li><a href={`blog/${route}`}>{route}</a></li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	div {
		visibility: hidden;
		display: flex;
		flex-direction: column;
	}
</style>
