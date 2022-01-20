<script>
import { Router, Route } from "svelte-navigator";
import Login from "./login.svelte";
import Navbar from "./navbar.svelte";
import Signup from "./signup.svelte";
import LandingPage from "./landingpage.svelte";
import Homepage from "./homepage.svelte";
</script>

<Router>

  <Navbar/>
  <!-- <GoogleMap apiKey = 'AIzaSyBu1ca6yWC2AnUug-8ngPMGMiwVIwJ_gcQ'/> -->

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
</style>