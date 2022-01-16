<script>
	import Map from './Map.svelte';
	export let ready;
    const apiKey = _myapp.env.GOOGLE_MAPS_API_KEY;
</script>

<svelte:head>
	<script defer async
	src='https://maps.googleapis.com/maps/api/js?key=&callback=initMap'>
	</script>
</svelte:head>

<style>
:global(body) {
	padding: 0;
}
</style>

{ #if ready }
<Map></Map>
{ /if }