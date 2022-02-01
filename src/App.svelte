<script>
  import { Router, Route } from "svelte-navigator";
  import Login from "./pages/login.svelte";
  import Navbar from "./components/navbar.svelte";
  import Signup from "./pages/signup.svelte";
  import LandingPage from "./pages/landingpage.svelte";
  import Homepage from "./pages/homepage.svelte";
	import Map from './components/Map.svelte';
	export let ready;
  let name;
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap">
</script>
</svelte:head>

<Router>

  <Navbar/>
  
  <main>

    <Route path = "/">
      <!-- <LandingPage /> -->
      
      <div class="flex items-center justify-center ">
        <div class="flex border-2 border-gray-200 rounded">
            <input type="text" class="px-4 py-2 w-80" placeholder="Search city for brewery" bind:value={name}>
            <button class="px-4 text-white bg-gray-600 border-l ">
                Search
            </button>
        </div>
      </div>
      { #if ready }
      <div class="content-center"><Map></Map></div>
      { /if }
    </Route>

    <Route path = "homepage">
      <Homepage />
    </Route>

    <Route path = "login">
      <Login />
    </Route>

    <Route path = "signup">
      <Signup />
    </Route>

  </main>
  
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  :global(body) {
	padding: 0;
}
</style>