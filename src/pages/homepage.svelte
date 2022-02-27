
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
	{#each fetchedData as brewery, index (newArray.indexOf(brewery))}
		<div class="py-2">
			<div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
				<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
					<h3 class="font-black text-gray-800 md:text-3xl text-xl">{brewery.name}</h3>
					<p class="md:text-lg text-gray-500 text-base">{brewery.street} {brewery.city}, {brewery.state} {brewery.postal_code.split('-')[0]}</p>
					<a href = "{brewery.website_url}" target ="_blank" class="md:text-lg text-gray-500 text-base">{brewery.website_url}</a>
				</div>
				<div class="w-full md:w-1/3 bg-white grid place-items-center">
					<!-- <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" class="rounded-xl" /> -->
					<button on:click={handleSaveToFavorites(index)}>Save to favorites</button>
				</div>
			</div>
		</div>
	{/each}
 <!-- {/await} -->
 


<script>
import { onMount } from "svelte";

let name = 'chicago';
let fetchedData = [];
let breweryName;
let breweryAddress;
let breweryWebsite;
let newArray = [];
let myDict = {};

var handleButtonClick = async () => {
	await fetch(`https://api.openbrewerydb.org/breweries?by_city=${name}&per_page=25`)
	.then((res) => { 
		if (res.ok) {
			res.json().then((data) => {
				fetchedData = data;
				return fetchedData;
		})
	}
});
}

var arrayToDict = (array) => {
	let dict = {};
	let count = 0;
	array.forEach((item) => {
		dict[count] = item;
		count++;
	})
	return dict;
}

var handleSaveToFavorites = async (index) => {

	breweryName = fetchedData[index].name;
	breweryAddress = fetchedData[index].street + ' ' + fetchedData[index].city + ' ' + fetchedData[index].state + ' ' + fetchedData[index].postal_code.split('-')[0];
	breweryWebsite = fetchedData[index].website_url;

	if(breweryName && breweryAddress && breweryWebsite) {
		const response = await fetch('/api/favorites', {
			method: 'POST',
			body: JSON.stringify({
				name: breweryName,
				address: breweryAddress,
				website: breweryWebsite
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		if (response.ok) {
			console.log('saved to favorites');
		}else{
			alert(response.statusText);
		}
	}else{
		alert('Something has gone horribly wrong');
	}
}

onMount(handleButtonClick)
</script>