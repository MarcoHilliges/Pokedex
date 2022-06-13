let responseAPI_JSON = [];


async function loadAllPokemons(){
    let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000%22'
    let responseAsText = await fetch(url);
    responseAPI_JSON = await responseAsText.json();

    console.log(responseAPI_JSON);
    showPokemonMiniCards();
}


function showPokemonMiniCards(){
    let pokemonList = responseAPI_JSON['results'];
    document.getElementById('showPokemonArea').innerHTML = `<h1>Es sind derzeit ${pokemonList.length} Pokémon bekannt</h1>`

    for (let numbers = 0; numbers < pokemonList.length; numbers++) {
        const number = pokemonList[numbers];
        
        document.getElementById('showPokemonArea').innerHTML += 
            /*html*/`
            <div>${numbers+1} ${number['name']}</div>
            
            `
    }
}

// responseAPI_JSON['results']['length']
// 1126
// responseAPI_JSON['results'][0]
// {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}
// responseAPI_JSON['results'][0]['name']
// 'bulbasaur'
// responseAPI_JSON['results'][0]['url']
// 'https://pokeapi.co/api/v2/pokemon/1/'