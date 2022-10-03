<script>
	import '../app.css';
	import Header from '../components/template/header.svelte';
	import Footer from '../components/template/footer.svelte';
</script>

<main>
	<Header />
	<slot />
	<Footer />
</main>

<style>
</style>
