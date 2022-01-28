<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Sign Up</h3>
        <form action="">
            <div class="mt-4">
                <div>
                    <label class="block" for="email">Email<label>
                            <input type="text" placeholder="Email" bind:value={signUpEmail}
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="mt-4">
                    <label class="block">Password</label>
                            <input type="password" placeholder="Password" bind:value={signUpPassword}
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="mt-4">
                    <label class="block">Confirm Password</label>
                            <input type="password" placeholder="Password" bind:value={signUpConfirmPassword}
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="flex items-baseline justify-between">
                    <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" on:click={signUpFormHandler}>Sign Up</button>
                </div>
            </div>
        </form>
    </div>
</div>

<script>
    let signUpEmail; 
    let signUpPassword; 
    let signUpConfirmPassword;

    const signUpFormHandler =  async () => {

        if(signUpPassword !== signUpConfirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const email = signUpEmail;
        const password = signUpPassword;

        if (email && password) {
            console.log(email, password);
            console.log("making signUp call");
            const response = await fetch('/api/users/signUp', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            router.push('/');
        } else {
            alert(response.statusText);
        }
    }
}



</script>