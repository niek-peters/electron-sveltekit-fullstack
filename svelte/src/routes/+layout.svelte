<script>
	import '../app.css';
</script>

<main class="w-screen h-screen flex items-center justify-center">
	<slot />
</main>

<style>
	main {
		background-image: url('/bg-1.svg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
</style>
