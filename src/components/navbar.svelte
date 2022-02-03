<script>
    import { Link } from "svelte-navigator";
    
    var handleLogoutButtonClick = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
        document.location.replace('/login');
        } else {
        alert(response.statusText);
        }
    }
</script>

<nav class="bg-gray-500 shadow-lg rounded">
    <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
            <div class="flex space-x-7">
                <div>
                    <!-- Website Logo -->
                    <Link to="/" class="flex items-center py-4 px-2">
                        <img src="https://icons.iconarchive.com/icons/sonya/swarm/256/Beer-icon.png" alt="Logo" class="h-8 w-8 mr-2">
                        <span class="font-semibold text-white text-lg">Navigation</span>
                    </Link>
                </div>
                <!-- Primary Navbar items -->
                <div class="hidden md:flex items-center space-x-1">
                    <Link to="homepage" class="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Home</Link>
                    <Link to="Favorites" class="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Favorite</Link>
                    <Link to="" class="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">About</Link>
                    <Link to="" class="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Contact Us</Link>
                </div>
            </div>
            <div class="relative mx-auto text-gray-600 lg:block hidden py-4">
                <input
                    class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search">
                <button type="submit" class="absolute right-0 top-4 mt-3 mr-2">
                    <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                         version="1.1" id="Capa_1" x="0px" y="0px"
                         viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                         xml:space="preserve"
                         width="512px" height="512px">
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
              </svg>
                </button>
            </div>
            <!-- Secondary Navbar items -->
            <div class="hidden md:flex items-center space-x-3 ">
                <Link to="login" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                <Link to="signup" class="py-2 px-2 font-medium text-white rounded hover:bg-green-500 hover:text-white transition duration-300">Sign Up</Link>
                <button class="py-2 px-2 font-medium text-white rounded hover:bg-green-500 hover:text-white transition duration-300" on:click={handleLogoutButtonClick}>Log Out</button>
            </div>
            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button class="outline-none mobile-menu-button">
                <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            </div>
        </div>
    </div>
    <!-- mobile menu -->
    <div class="hidden mobile-menu">
        <ul class="">
            <li class="active"><Link to="homepage" class="block text-sm px-2 py-4 text-white hover:bg-green-500 font-semibold">Home</Link></li>
            <li><Link to="favorites" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Favorites</Link></li>
            <li><Link to="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</Link></li>
            <li><Link to="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</Link></li>
            <li><Link to="login" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Log In</Link></li>
            <li><Link to="signup" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Sign Up</Link></li>
            <li> <button class="py-2 px-2 font-medium border-none text-white rounded hover:bg-green-500 hover:text-white transition duration-300" on:click={handleLogoutButtonClick}>Log Out</button></li>
        </ul>
    </div>
    <script>
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    </script>
</nav>

