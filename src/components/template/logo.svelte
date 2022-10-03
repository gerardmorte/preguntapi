<script lang="ts">
	export let src: string;
	export let alt: string;
	export let tw: string;
</script>

<img {src} alt={alt.toLowerCase()} class={tw} />
