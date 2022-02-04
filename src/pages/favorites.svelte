<h3>This is where the favorites witll go</h3>
<button on:click={handleClick}>CLICK ME</button>
<script>

    const handleClick = async () => {

       const response = await fetch('/api/favorites/test', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({
            //     name: 'test',
            //     description: 'test',
            //     headers: { 'Content-Type': 'application/json' },
            // })
        })
        
        if(response.ok) {
          //  console.log(req.session.logged_in, req.session.user_id)
        } else {
            console.log('error')
        }
    }
</script>