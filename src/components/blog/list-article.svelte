<script lang="ts">
	import type TArticles from '../../types/Articles';
	import Article from './article.svelte';

	const posts: TArticles = [
		{
			id: 1,
			title: 'My first post',
			content: 'This is my first post',
			date: new Date('2021-01-01')
		},
		{
			id: 2,
			title: 'My second post',
			content: 'This is my second post',
			date: new Date('2021-01-01')
		},
		{
			id: 3,
			title: 'My third post',
			content: 'This is my third post',
			date: new Date('2021-01-01')
		}
	];
</script>

<section>
	{#each posts as post}
		<Article article={post} />
	{/each}
</section>
