<script lang="ts">
	import { callApi } from "../scripts/callApi";

	let result: string;

	async function handleApiCall() {
		const json = await callApi();
		result = JSON.stringify(json);
	}
</script>

<article
	class="p-36 flex flex-col gap-8 items-center justify-center bg-white/40 rounded-lg shadow-lg backdrop-blur-sm"
>
	<h1 class="text-4xl">Welcome to the fullstack Electron + SvelteKit template!</h1>
	<p class="text-2xl">Ready to use, with TailwindCSS and SASS <i>pre-configured</i>,</p>
	<p class="text-2xl -mt-6">an ExpressJS server set up and a few useful NPM scripts for development.</p>
	<section class="relative flex flex-col items-center gap-4">
		<button on:click={handleApiCall} class="bg-blue-400 hover:bg-blue-500 p-2 text-xl rounded-lg transition">Test Express API</button>
		{#if result}
			<pre class="absolute -bottom-16 bg-gray-200 p-4 rounded-lg">{result}</pre>
		{/if}
	</section>
	<p class="text-3xl mt-16">
		Run <span class="pill text-orange-400">npm install</span> in the
		<span class="pill text-blue-400">/svelte</span>
		and <span class="pill text-blue-400">root</span> directories to get started.
	</p>
</article>

<style lang="scss">
	article {
		i {
			color: #2200ff;
		}

		.pill {
			background-color: rgb(55 65 81 / 0.5);
			padding: 0.25rem 0.75rem;
			border-radius: 0.5rem;
			font-weight: 600;
		}
	}
</style>
