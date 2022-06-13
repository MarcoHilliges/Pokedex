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
    document.getElementById('showPokemonMainArea').innerHTML = 
        `<h1>Es sind derzeit ${pokemonList.length} Pokémon bekannt</h1>
         <div id="showPokemonMainAreaContent"></div>
        `
                                    // pokemonList.length
    for (let numbers = 0; numbers < pokemonList.length; numbers++) {      
        const number = pokemonList[numbers];
        
        document.getElementById('showPokemonMainAreaContent').innerHTML += 
            /*html*/`
            <div onclick="showBigCard(${number['url']})"
                 class="miniCard">
                <div>${numbers+1}</div><div> ${number['name']}</div>
            </div>
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

function showBigCard(url){

}