let language = 'de';

let responseAPI_JSON = [];


async function loadAllPokemons(){
    let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000%22'
    responseAPI_JSON = await loadAPI(url);

    console.log(responseAPI_JSON);
    showPokemonMiniCards();
}


async function loadAPI(url){
    let responseAsText = await fetch(url);
    return responseJSON = await responseAsText.json();
}


async function showPokemonMiniCards(){
    let pokemonList = responseAPI_JSON['results'];
    document.getElementById('showPokemonMainArea').innerHTML = 
        `<h1>Es sind derzeit ${pokemonList.length} Pokémon bekannt</h1>
         <div id="showPokemonMainAreaContent"></div>`

                                    // pokemonList.length
    for (let numbers = 0; numbers < 100; numbers++) {      
        const number = pokemonList[numbers];
                
        let responseSinglePokemonAPI_JSON = await loadAPI(number['url']);

        let urlLanguagePack = responseSinglePokemonAPI_JSON['species']['url'];

        let languagePack = await loadAPI(urlLanguagePack);

        let pokemonName = getPokemonName(languagePack);
        let pokemonId = getPokemonId(languagePack);
        let pokemonBgColor = getPokemonBgColor(languagePack);


        document.getElementById('showPokemonMainAreaContent').innerHTML += 
            /*html*/`
            <div onclick="showBigCard('${number['url']}')"
                 class="miniCard" style="background-color: ${pokemonBgColor}">
                
                <div> ${pokemonName}</div>

                <div>Id: ${pokemonId}</div>
                <img src="${responseSinglePokemonAPI_JSON['sprites']['other']['home']['front_default']}" alt="">


            </div>
            `
    }
}


function getPokemonName(languagePackSinglePokemonAPI_JSON){
    for (var i = 0, length = languagePackSinglePokemonAPI_JSON['names'].length; i < length; i++) {
        if (languagePackSinglePokemonAPI_JSON['names'][i].language.name == language) {
            pokemonName = languagePackSinglePokemonAPI_JSON['names'][i].name;
        }
    }
    return pokemonName;
}


function getPokemonId(languagePackSinglePokemonAPI_JSON){
    return pokemonId = languagePackSinglePokemonAPI_JSON['id'];
}


function getPokemonBgColor(languagePackSinglePokemonAPI_JSON){
    return pokemonBgColor = languagePackSinglePokemonAPI_JSON['color']['name'];
}


function showBigCard(url){
    loadSinglePokemon(url);
  
    document.getElementById('bigCardArea').classList.remove('d-none');
}


function closeBigCard(){
    document.getElementById('bigCardArea').classList.add('d-none');
}


async function loadSinglePokemon(url){
    
    let responseAsText = await fetch(url);
    responseSinglePokemonAPI_JSON = await responseAsText.json();

    loadLanguageSinglePokemon();
    console.log(responseSinglePokemonAPI_JSON);
    
}

async function loadLanguageSinglePokemon(){
    let url = responseSinglePokemonAPI_JSON['species']['url'];
    let responseAsText = await fetch(url);
    languagePackSinglePokemonAPI_JSON = await responseAsText.json();

    console.log(languagePackSinglePokemonAPI_JSON);
    showBigCardContent();
}

function showBigCardContent(){
    let singlePokemon = responseSinglePokemonAPI_JSON;
    
    showBigCardContent_name();
    
    document.getElementById('pokemonImg').src = singlePokemon['sprites']['other']['home']['front_default']
}
    
function showBigCardContent_name(){
    
    for (var i = 0, length = languagePackSinglePokemonAPI_JSON['names'].length; i < length; i++) {
        if (languagePackSinglePokemonAPI_JSON['names'][i].language.name == language) {
            pokemonName = languagePackSinglePokemonAPI_JSON['names'][i].name;
        }
    }
    document.getElementById('pokemonName').innerHTML = pokemonName;
}


function test(){

    for (var i = 0, length = languagePackSinglePokemonAPI_JSON['names'].length; i < length; i++) {
        if (languagePackSinglePokemonAPI_JSON['names'][i].language.name == language) {
            console.log(languagePackSinglePokemonAPI_JSON['names'][i].name);
        }
    }

}

