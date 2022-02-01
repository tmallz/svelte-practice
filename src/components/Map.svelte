<script>
    //import mapStyles from './map-styles'; // optional


   let container;
   let map;
   let zoom = 10;
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
    
    width: 75vw;
    height: 75vh;
}
</style>

<div class="full-screen" bind:this={container}></div>