
<div class="flex items-center justify-center ">
    <div class="flex border-2 border-gray-500 rounded">
        <input type="text" class="px-4 py-2 w-80" placeholder="Search city for brewery" bind:value={name}>
        <button class="px-4 text-white bg-gray-500 border-l " on:click={handleButtonClick}>
            Search
        </button>
    </div>
</div>
<!-- <button
 class="flex-col justify-center items-cemter bg-blue-500"
  on:click={handleButtonClick}
 >click me</button> -->


 <!-- component -->
 <!-- {#await handleButtonClick}
 <p>waiting</p>	 
 {:then data}  -->
	{#each fetchedData as brewery}
		<div class="py-2">
			<div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
				<!-- <div class="w-full md:w-1/3 bg-white grid place-items-center">
					<img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" class="rounded-xl" />
				</div> -->
				<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
					<h3 class="font-black text-gray-800 md:text-3xl text-xl">{brewery.name}</h3>
					<p class="md:text-lg text-gray-500 text-base">{brewery.street} {brewery.city}, {brewery.state}, {brewery.postal_code.split('-')[0]}</p>
					<a href = "{brewery.website_url}" target ="_blank" class="md:text-lg text-gray-500 text-base">{brewery.website_url}</a>
					<div class="flex border-2 border-gray-500 rounded">
						<button class="px-4 text-white bg-gray-500 border-l " on:click={handleButtonClick}>
							Save to Favorits
						</button>
					</div>
				</div>
			</div>
		</div>
	{/each}
 
 <!-- {/await} -->
 


<script>
import { onMount } from "svelte";

let name = 'chicago';
let breweryName;
let breweryAddress;
let breweryWebsite;
let fetchedData = [];


var handleButtonClick =(async () => {
	await fetch(`https://api.openbrewerydb.org/breweries?by_city=${name}&per_page=25`)
	.then((res) => { 
		if (res.ok) {
			res.json().then((data) => {
				console.log(data)
				fetchedData = data;
				// breweryName= data[0].name;
				// breweryAddress = data[0].street + ' ' + data[0].city + ', ' + data[0].state + ', ' + data[0].postal_code.split('-')[0];
				// breweryWebsite = data[0].website_url;
				return fetchedData;
		})
	}
});
})

onMount(handleButtonClick)

console.log(fetchedData);
</script>