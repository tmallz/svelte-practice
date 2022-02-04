<script>
    import { Link } from "svelte-navigator";
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="rounded-lg shadow-xl bg-white">
        <div class="p-5">
        <!--Card Header-->
        <header class="font-semibold text-lg pb-5 text-center">Welcome to BrewerMeS (NAME TBD LMAO)</header>
        <p class="text-gray-500 px-4 text-center">
            An app to track Breweries and beers that you like.
        </p>
        <p class="text-gray-500 px-4 text-center py-2">
            You must Be 21 to enter. Are you over 21?
        </p>
        <footer class="text-center space-x-5 py-4">
            <Link 
            to = "homepage"
            class="py-2 px-4 mt-5 border border-green-500 rounded-lg text-green-500 font-semibold hover:text-white hover:bg-green-600">
            Yes
            </Link>
            <a
            href = "https://www.google.com/"
            class="py-2 px-4 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600"
            >
            No
        </a>
        </footer>
        </div>
    </div>
</div>