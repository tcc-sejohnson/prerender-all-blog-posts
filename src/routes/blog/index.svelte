<script lang="ts">
	// If you don't want an "index" page with the list of links,
	// just add "visibility: hidden" to the div wrapper around the anchor tags.

	export let postRoutes: Array<string>;
</script>

<div>
	<ul>
		{#each postRoutes as route}
			<li><a href={`blog/${route}`}>{route}</a></li>
		{/each}
	</ul>
</div>

<style>
	div {
		/* visibility: hidden; */
		display: flex;
		flex-direction: column;
	}
</style>
