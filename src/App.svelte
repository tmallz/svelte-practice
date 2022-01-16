<script>
import { Router, Route, Link } from "svelte-navigator";
import Login from "./login.svelte";
import Navbar from "./navbar.svelte";
import Signup from "./signup.svelte"
import LandingPage from "./landingpage.svelte"

</script>

<Router>

  <Navbar/>

  
  <main>

    <Route path = "/">
      <LandingPage />
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