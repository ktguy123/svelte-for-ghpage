import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		number: 42
	}
});

export default app;