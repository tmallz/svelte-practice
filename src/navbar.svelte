<script>
    import { Link } from "svelte-navigator";
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
                    <Link to="" class="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300">Home</Link>
                    <Link to="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</Link>
                    <Link to="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
                    <Link to="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</Link>
                </div>
            </div>
            <!-- Secondary Navbar items -->
            <div class="hidden md:flex items-center space-x-3 ">
                <Link to="login" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                <Link to="signup" class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
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
            <li class="active"><Link to="index.html" class="block text-sm px-2 py-4 text-white hover:bg-green-500 font-semibold">Home</Link></li>
            <li><Link to="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</Link></li>
            <li><Link to="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</Link></li>
            <li><Link to="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</Link></li>
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
