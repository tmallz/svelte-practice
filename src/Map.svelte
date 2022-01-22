<script>
    //import mapStyles from './map-styles'; // optional


   let container;
   let map;
   let zoom = 8;
   let center = {lat: 41.8781, lng:  -87.6298};
   
   import { onMount } from 'svelte';
   
   onMount(async () => {
       map = new google.maps.Map(container, {
           zoom,
           center,
           //styles: mapStyles // optional
       });
   });
</script>

<style>
.full-screen {
    
    width: 100vw;
    height: 100vh;
}
</style>

<div class="full-screen py-2 px-2" bind:this={container}></div>