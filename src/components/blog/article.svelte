<script lang="ts">
	import type TArticle from '../../types/Article';
	export let article: TArticle;
	const { title, content, date } = article;
	const dateString = new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<article>
	<h1>{title}</h1>
	<p>{content}</p>
	<span>{dateString.toLowerCase()}</span>
</article>
