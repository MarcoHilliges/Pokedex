let language = 'de';
let pokemonList = [];
let drawStartNumber = 0;
let drawEndNumber = 100;

async function loadAllPokemons(){
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    let responseAPI_JSON = await loadAPI(url);
    pokemonList = responseAPI_JSON['results'];
    console.log(responseAPI_JSON);
    firstrenderPokemonMiniCards();
}


async function loadAPI(url){
    let responseAsText = await fetch(url);
    return responseJSON = await responseAsText.json();
}


async function firstrenderPokemonMiniCards(){
    document.getElementById('showPokemonMainArea').innerHTML = showPokemonMiniCardsHeadHTML(pokemonList);
    renderPokemonMiniCards();
    document.getElementById('showPokemonMainArea').innerHTML += `
    <div class="buttonReaderMorePokemon"><button onclick="readerMorePokemon()">weitere 100</button></div>`
}


async function renderPokemonMiniCards(){
                            // pokemonList.length
    for (let number = drawStartNumber; number < drawEndNumber; number++) {      
        let responseSinglePokemon = await loadAPI(pokemonList[number]['url']);
        let languagePack = await loadAPI(responseSinglePokemon['species']['url']);
        let pokemonName = getPokemonName(languagePack);
        let pokemonId = getPokemonId(languagePack);
        let pokemonBgColor = getPokemonBgColor(languagePack);

        document.getElementById('showPokemonMainAreaContent').innerHTML += 
        showPokemonMiniCardsMainHTML(pokemonName,pokemonId,pokemonBgColor,pokemonList[number]['url'],responseSinglePokemon);
    }
}


function readerMorePokemon(){
    drawStartNumber = drawStartNumber +100;
    drawEndNumber = drawEndNumber +100;
    renderPokemonMiniCards();

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
    showBigCardContent_pokemonClass(singlePokemon);
    showBigCardContent_shortDescription(singlePokemonLanguagePack);
    showBigCardContent_pokemonStats(singlePokemon);
    showBigCardContent_description(singlePokemonLanguagePack);
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


function showBigCardContent_id(singlePokemonLanguagePack){
    document.getElementById('pokemonId').innerHTML = 'ID: '+singlePokemonLanguagePack['id'];
}


function showBigCardContent_shortDescription(singlePokemonLanguagePack){
    let shortDescription = '';
    for (var i = 0, length = singlePokemonLanguagePack['genera'].length; i < length; i++) {
        if (singlePokemonLanguagePack['genera'][i].language.name == language) {
            shortDescription = singlePokemonLanguagePack['genera'][i].genus;
        }
    }
    document.getElementById('shortDescription').innerHTML = 'Kurzbeschreibung: '+shortDescription;
}


function showBigCardContent_description(singlePokemonLanguagePack){
    let description = '';
    document.getElementById('description').innerHTML = '';
    for (var i = 0, length = singlePokemonLanguagePack['flavor_text_entries'].length; i < length; i++) {
        if (singlePokemonLanguagePack['flavor_text_entries'][i].language.name == language) {
            description = singlePokemonLanguagePack['flavor_text_entries'][i].flavor_text;
            
            document.getElementById('description').innerHTML += 
                `<div>${description}</div>`;
        }
    }
}


function showBigCardContent_pokemonClass(singlePokemon){
    let pokemonClass = '';
    document.getElementById('pokemonClass').innerHTML = '';
    for (var i = 0, length = singlePokemon['types'].length; i < length; i++) {
        pokemonClass = singlePokemon['types'][i]['type'].name;
        document.getElementById('pokemonClass').innerHTML += 
            `<div>${pokemonClass}</div>`;
    }
}


function showBigCardContent_pokemonStats(singlePokemon){
    document.getElementById('pokemonStats').innerHTML = '';
    for (let statsNumber = 0; statsNumber < singlePokemon['stats'].length; statsNumber++) {
        const stat = singlePokemon['stats'][statsNumber];
        document.getElementById('pokemonStats').innerHTML += 
            `
            <div> ${stat['stat']['name']} ${stat['base_stat']} </div>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${stat['base_stat']}" aria-valuemin="0" aria-valuemax="100" style="width: ${stat['base_stat']}%"></div>
            </div>
            
            
            
            
            `
    }
    
}