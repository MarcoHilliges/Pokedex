let responseAPI_JSON = [];


async function loadAllPokemons(){
    let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000%22'
    let responseAsText = await fetch(url);
    responseAPI_JSON = await responseAsText.json();

    console.log(responseAPI_JSON);
    showPokemonMiniCards();
}


async function showPokemonMiniCards(){
    let pokemonList = responseAPI_JSON['results'];
    document.getElementById('showPokemonMainArea').innerHTML = 
        `<h1>Es sind derzeit ${pokemonList.length} Pokémon bekannt</h1>
         <div id="showPokemonMainAreaContent"></div>`

                                    // pokemonList.length
    for (let numbers = 0; numbers < 100; numbers++) {      
        const number = pokemonList[numbers];
        
        let responseSinglePokemonAsText = await fetch(number['url']);
        let responseSinglePokemonAPI_JSON = await responseSinglePokemonAsText.json();

        document.getElementById('showPokemonMainAreaContent').innerHTML += 
            /*html*/`
            <div onclick="showBigCard('${number['url']}')"
                 class="miniCard">
                <div>${numbers+1}</div>
                <div> ${number['name']}</div>
                <img src="${responseSinglePokemonAPI_JSON['sprites']['other']['home']['front_default']}" alt="">

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
    loadSinglePokemon(url);
    document.getElementById('bigCardArea').classList.remove('d-none');
}


function closeBigCard(){
    document.getElementById('bigCardArea').classList.add('d-none');
}


async function loadSinglePokemon(url){
    // let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000%22'
    let responseAsText = await fetch(url);
    let responseSinglePokemonAPI_JSON = await responseAsText.json();

    console.log(responseSinglePokemonAPI_JSON);
    let singlePokemon = responseSinglePokemonAPI_JSON;
    
    document.getElementById('pokemonName').innerHTML = singlePokemon['name'];
    document.getElementById('pokemonImg').src = singlePokemon['sprites']['other']['home']['front_default']

    
}

// other:
// dream_world: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg', front_female: null}
// home: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png', front_female: null, front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png', front_shiny_female: null}
// official-artwork: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/…ster/sprites/pokemon/other/official-artwork/1.png'}


