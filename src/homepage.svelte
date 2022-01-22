

<button
 class="flex-col justify-center items-cemter bg-blue-500"
  on:click={handleButtonClick}
 >click me</button>


 <!-- component -->
<div class="flex flex-col justify-center h-screen">
	<div
		class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
		<div class="w-full md:w-1/3 bg-white grid place-items-center">
			<img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" class="rounded-xl" />
    </div>
			<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<h3 class="font-black text-gray-800 md:text-3xl text-xl">{breweryName}</h3>
				<p class="md:text-lg text-gray-500 text-base">{breweryAddress}</p>
				<a href = "{breweryWebsite}" target ="_blank" class="md:text-lg text-gray-500 text-base">{breweryWebsite}</a>
			</div>
		</div>
	</div>



<script>
let breweryName;
let breweryAddress;
let breweryWebsite;



var handleButtonClick = () => {
	fetch('https://api.openbrewerydb.org/breweries?by_city=chicago')
	.then((res) => { 
		if (res.ok) {
			res.json().then((data) => {
				console.log(data)
				breweryName= data[0].name;
				breweryAddress = data[0].street + ' ' + data[0].city + ', ' + data[0].state + ', ' + data[0].postal_code.split('-')[0];
				breweryWebsite = data[0].website_url;
		})
	}
});
}

// console.log(data)
</script>