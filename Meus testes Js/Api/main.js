window.onload = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/')
    const data = await resp.json()
    console.log(data)

    document.body.innerHTML = data.map((product, index) =>`
    <div>
    <h4>${}</h4>
    </div>`)
}

