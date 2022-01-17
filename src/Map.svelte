<script>
   // import mapStyles from './map-styles'; // optional


   let container;
   let map;
   let zoom = 8;
   let center = {lat: -34.397, lng: 150.644};
   
   import { onMount } from 'svelte';
   
   onMount(async () => {
       map = new google.maps.Map(container, {
           zoom,
           center,
          // styles: mapStyles // optional
       });
   });
</script>

<style>
.full-screen {
   width: 50vw;
   height: 50vh;
}
</style>

<div class="full-screen text-center py-5" bind:this={container}></div>