<script>
import { Router, Route, Link } from "svelte-navigator";
import Login from "./login.svelte";
import Navbar from "./navbar.svelte";
import Signup from "./signup.svelte"

</script>

<Router>

  <Navbar/>
  <!-- <header>
    <h1>History</h1>

    <nav>
      <Link to="/">Home</Link>
      <Link to="login">Login</Link>
      <Link to="signup">Sign Up</Link>
    </nav>
  </header> -->
  
  <main>

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