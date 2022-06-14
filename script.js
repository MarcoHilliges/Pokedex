let language = 'de';

let pokemonList = [];


async function loadAllPokemons(){
    let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000%22'
    let responseAPI_JSON = await loadAPI(url);
    pokemonList = responseAPI_JSON['results'];
    console.log(responseAPI_JSON);
    showPokemonMiniCards();
}


async function loadAPI(url){
    let responseAsText = await fetch(url);
    return responseJSON = await responseAsText.json();
}


async function showPokemonMiniCards(){
    document.getElementById('showPokemonMainArea').innerHTML = showPokemonMiniCardsHeadHTML(pokemonList);
                                // pokemonList.length
    for (let number = 0; number < 100; number++) {      
        let responseSinglePokemon = await loadAPI(pokemonList[number]['url']);
        let languagePack = await loadAPI(responseSinglePokemon['species']['url']);
        let pokemonName = getPokemonName(languagePack);
        let pokemonId = getPokemonId(languagePack);
        let pokemonBgColor = getPokemonBgColor(languagePack);

        document.getElementById('showPokemonMainAreaContent').innerHTML += 
        showPokemonMiniCardsMainHTML(pokemonName,pokemonId,pokemonBgColor,pokemonList[number]['url'],responseSinglePokemon);
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


async function showBigCard(url){
    let singlePokemon = await loadAPI(url);
    let singlePokemonLanguagePack = await loadAPI(singlePokemon['species']['url']);
    
    showBigCardContent_name(singlePokemonLanguagePack);
    showBigCardContent_id(singlePokemonLanguagePack);
    showBigCardContent_img(singlePokemon);
    
    console.log(singlePokemon);
    console.log(singlePokemonLanguagePack);
    document.getElementById('bigCardArea').classList.remove('d-none');
}


function closeBigCard(){
    document.getElementById('bigCardArea').classList.add('d-none');
}


function showBigCardContent_img(singlePokemon){
    document.getElementById('pokemonImg').src = singlePokemon['sprites']['other']['home']['front_default']
}
    
function showBigCardContent_name(singlePokemonLanguagePack){
    let pokemonName = '';
    for (var i = 0, length = singlePokemonLanguagePack['names'].length; i < length; i++) {
        if (singlePokemonLanguagePack['names'][i].language.name == language) {
            pokemonName = singlePokemonLanguagePack['names'][i].name;
        }
    }
    document.getElementById('pokemonName').innerHTML = pokemonName;
}

showBigCardContent_id(singlePokemonLanguagePack){

}