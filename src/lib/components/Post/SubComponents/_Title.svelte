<script lang="ts">
	//  Props
	export let title: string;
	export let url: string;
</script>

<h3>
	<a href={url}>{title}</a>
</h3>

<style lang="scss">
	h3 {
		//  Styling
		a {
			color: inherit;
		}

		@media (max-width: 640px) {
			//  Styling
			font-size: 1.5rem;
		}
	}
</style>
