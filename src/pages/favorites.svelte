<h3>This is where the favorites witll go</h3>
{#each favorites as favorite}
 <div>{favorite.name}</div>
{/each}

<script>
import { onMount } from "svelte";
let favorites = [];

    const loadFavorites = async () => {
    await fetch('/api/favorites/')
       .then((res) => { 
		if (res.ok) {
			res.json().then((data) => {
				favorites = data;
                console.log(favorites);
				return favorites;
		})
	}
});
    }

    onMount(loadFavorites);

</script>