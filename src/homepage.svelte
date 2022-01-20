

<button
 class="flex-col justify-center items-cemter bg-blue-500"
  on:click={handleButtonClick}
 >click me</button>

<script>


var handleButtonClick = () => {
	fetch('https://api.openbrewerydb.org/breweries?by_city=chicago')
	.then((res) => { 
		console.log('hit route')
		if (res.ok) {
			console.log('res is ok')
			res.json().then((data) => {
				console.log('jsoned')
				console.log(data);
		})
	}
});
}
</script>