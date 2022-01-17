<!-- <script>
import { Router, Route, Link } from "svelte-navigator";
import Login from "./login.svelte";
import Navbar from "./navbar.svelte";
import Signup from "./signup.svelte"
import LandingPage from "./landingpage.svelte"
import Homepage from "./homepage.svelte";
</script>

<Router>

  <Navbar/>

  
  <main>

    <Route path = "/">
      <LandingPage />
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
</style> -->

<script>
	import Map from './Map.svelte';
	export let ready;
  import Navbar from './navbar.svelte'
  import { Router, Route, Link } from "svelte-navigator";
  //const apiKey = _myapp.env.GOOGLE_MAPS_API_KEY;
</script>

<svelte:head>
	<script defer async
	src='https://maps.googleapis.com/maps/api/js?key=AIzaSyC3scmDvpygYEN7jopKZrMM7nuTCjGjAA0&callback=initMap'>
	</script>
</svelte:head>

<!-- <style>
:global(body) {
	padding: 0;
}
</style> -->

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  /* :global(body) {
	padding: 0;
} */
</style> 
<Router>
  <Navbar />
  { #if ready }
  <Map></Map>
  { /if }
</Router>
