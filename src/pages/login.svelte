<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Login</h3>
        <form action="">
            <div class="mt-4">
                <div>
                    <label class="block" for="email">Email<label>
                            <input type="text" placeholder="Email" bind:value={loginEmail}
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="mt-4">
                    <label class="block" for = "password">Password</label>
                            <input type="password" placeholder="Password" bind:value={loginPassword}
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="flex items-baseline justify-between">
                    <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" on:click|preventDefault={loginFormHandler}>Login</button>
                </div>
            </div>
        </form>
    </div>
</div>

<script>
    let loginEmail;
    let loginPassword;

    const loginFormHandler = async () => {
        const email = loginEmail;
        const password = loginPassword;

        if(email && password) {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });


            if(response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        } else {
            alert('Please enter a valid email and password');
        }

    }


</script>