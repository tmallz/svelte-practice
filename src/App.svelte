<script>
  import { Router, Route } from "svelte-navigator";
  import Login from "./login.svelte";
  import Navbar from "./navbar.svelte";
  import Signup from "./signup.svelte";
  import LandingPage from "./landingpage.svelte";
  import Homepage from "./homepage.svelte";
	import Map from './Map.svelte';
	export let ready;
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
      { #if ready }
      <Map></Map>
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