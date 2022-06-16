let language = 'de';
let pokemonList = [];
let drawStartNumber = 0;
let drawEndNumber = 100;


function changeLanguage(selectLanguage){
    if(selectLanguage !== language){
    language = selectLanguage;
    loadAllPokemons();
    }
}


async function loadAllPokemons() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
    let responseAPI_JSON = await loadAPI(url);
    pokemonList = responseAPI_JSON['results'];
    showHead();
    firstrender();
    // console.log(responseAPI_JSON);
}


async function loadAPI(url) {
    let responseAsText = await fetch(url);
    return responseJSON = await responseAsText.json();
}


function showHead(){
    document.getElementById('numberOfAllPokemon').innerHTML = showHeadHTML(pokemonList);
}


async function firstrender() {
    document.getElementById('showPokemonMainArea').innerHTML = showPokemonMiniCardsHeadHTML(pokemonList);
    renderPokemonMiniCards();
    document.getElementById('showPokemonMainArea').innerHTML += showbuttonReaderMorePokemonHTML();
}


async function renderPokemonMiniCards() {
    for (let number = drawStartNumber; number < drawEndNumber; number++) {
        let responseSinglePokemon = await loadAPI(pokemonList[number]['url']);
        let languagePack = await loadAPI(responseSinglePokemon['species']['url']);
        let pokemonName = getLanguageName(languagePack);
        let pokemonId = getPokemonId(languagePack);
        let pokemonBgColor = cardBgColor(responseSinglePokemon);

        document.getElementById('showPokemonMainAreaContent').innerHTML +=
            showPokemonMiniCardsMainHTML(pokemonName, pokemonId, pokemonBgColor, 
                                         pokemonList[number]['url'], responseSinglePokemon);
    }
}


function readerMorePokemon() {
    drawStartNumber = drawStartNumber + 100;
    drawEndNumber = drawEndNumber + 100;
    renderPokemonMiniCards();
}



function getLanguageName(languagePackSinglePokemonAPI_JSON) {
    let languageName = '';
    for (var i = 0, length = languagePackSinglePokemonAPI_JSON['names'].length; i < length; i++) {
        if (languagePackSinglePokemonAPI_JSON['names'][i].language.name == language) {
            languageName = languagePackSinglePokemonAPI_JSON['names'][i].name;
        }
    }
    return languageName;
}


function getPokemonId(languagePackSinglePokemonAPI_JSON) {
    return pokemonId = languagePackSinglePokemonAPI_JSON['id'];
}


function cardBgColor(singlePokemonJSON){
    return singlePokemonJSON['types'][0]['type'].name
}


async function renderBigCard(url) {
    let singlePokemon = await loadAPI(url);
    let singlePokemonLanguagePack = await loadAPI(singlePokemon['species']['url']);
    generatBigCard();
    showBigCardContent_Bg(singlePokemon);
    showBigCardContent_name(singlePokemonLanguagePack);
    showBigCardContent_id(singlePokemonLanguagePack);
    showBigCardContent_pokemonClass(singlePokemon);
    showBigCardContent_shortDescription(singlePokemonLanguagePack);
    showBigCardContent_pokemonStats(singlePokemon);
    showBigCardContent_description(singlePokemonLanguagePack);
    showBigCardContent_img(singlePokemon, singlePokemonLanguagePack);
    openBigCard(); 
    // console.log(singlePokemon);console.log(singlePokemonLanguagePack); 
}


function openBigCard(){
    document.getElementById('body').classList.add('no-scroll');
    document.getElementById('showPokemonMainArea').classList.add('opacity');
    document.getElementById('overlay').classList.remove('d-none');
}


function closeBigCard() {
    document.getElementById('overlay').classList.add('d-none');
    document.getElementById('showPokemonMainArea').classList.remove('opacity');
    document.getElementById('body').classList.remove('no-scroll');
}


function generatBigCard(){
    document.getElementById('overlay').innerHTML = PokemonBigCardHTML();
}


function showBigCardContent_Bg(singlePokemon){
    let color = cardBgColor(singlePokemon);
    document.getElementById(`bigCardArea`).classList.add('cardBgClass_'+color);
}


function showBigCardContent_img(singlePokemon, singlePokemonLanguagePack) {
    document.getElementById('pokemonImg').src = singlePokemon['sprites']['other']['home']['front_default']
}

function showBigCardContent_name(singlePokemonLanguagePack) {
    let pokemonName = getLanguageName(singlePokemonLanguagePack);
    document.getElementById('pokemonName').innerHTML = pokemonName;
}


function showBigCardContent_id(singlePokemonLanguagePack) {
    document.getElementById('pokemonId').innerHTML = '# ' + singlePokemonLanguagePack['id'];
}


function showBigCardContent_shortDescription(singlePokemonLanguagePack) {
    let shortDescription = '';
    for (var i = 0, length = singlePokemonLanguagePack['genera'].length; i < length; i++) {
        if (singlePokemonLanguagePack['genera'][i].language.name == language) {
            shortDescription = singlePokemonLanguagePack['genera'][i].genus;
        }
    }
    document.getElementById('shortDescription').innerHTML = '(' + shortDescription + ')';
}


function showBigCardContent_description(singlePokemonLanguagePack) {
    let description = '';
    let firstContent = true;
    document.getElementById('description').innerHTML = '';
    for (var i = 0, length = singlePokemonLanguagePack['flavor_text_entries'].length; i < length; i++) {
        if (singlePokemonLanguagePack['flavor_text_entries'][i].language.name == language) {
            description = singlePokemonLanguagePack['flavor_text_entries'][i].flavor_text;
            if(firstContent == true){
                document.getElementById('description').innerHTML += bigCardFirstDescriptionHTML(description);
                firstContent = false;
            }else{
                document.getElementById('description').innerHTML += bigCardNextDescriptionHTML(description);
                    
            }
        }
    }
}


async function showBigCardContent_pokemonClass(singlePokemon) {
    let pokemonClass = '';
    document.getElementById('pokemonClass').innerHTML = '';
    for (var i = 0, length = singlePokemon['types'].length; i < length; i++) {
        let url = singlePokemon['types'][i]['type'].url;
        let responseAPI_JSON = await loadAPI(url);
        pokemonClass = getLanguageName(responseAPI_JSON);
        console.log(pokemonClass, i);
        document.getElementById('pokemonClass').innerHTML +=
            `<div id="pokemonSingleId${i}" class="pokemonSingleClass">${pokemonClass}</div>`;
        
        let className = singlePokemon['types'][i]['type'].name;
        pokemonClassColor(className, i);
        
    }
}


function pokemonClassColor(className, i){
    document.getElementById(`pokemonSingleId${i}`).classList.add('class_'+className);
}





function showBigCardContent_pokemonStats(singlePokemon) {
    showBigCardContent_pokemonStatsHP(singlePokemon);
    showBigCardContent_pokemonStatsAttack(singlePokemon);
    showBigCardContent_pokemonStatsDefense(singlePokemon);
    showBigCardContent_pokemonStatsSpecialAttack(singlePokemon);
    showBigCardContent_pokemonStatsSpecialDefense(singlePokemon);
    showBigCardContent_pokemonStatsSpeed(singlePokemon);
}


async function showBigCardContent_pokemonStatsHP(singlePokemon){
    let url = singlePokemon['stats'][0].stat.url
    let responseAPI_JSON = await loadAPI(url);
    let statName = getLanguageName(responseAPI_JSON);
    document.getElementById('pokemonHp').innerHTML =
        `<div> ${statName}  ${singlePokemon['stats'][0].base_stat} </div>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="${singlePokemon['stats'][0].base_stat}" aria-valuemin="0" aria-valuemax="200" style="width: ${singlePokemon['stats'][0].base_stat / 2}%"></div>
        </div>`;
}


async function showBigCardContent_pokemonStatsAttack(singlePokemon){
    let url = singlePokemon['stats'][1].stat.url
    let responseAPI_JSON = await loadAPI(url);
    let statName = getLanguageName(responseAPI_JSON);
    document.getElementById('pokemonAttack').innerHTML =
        `<div> ${statName}  ${singlePokemon['stats'][1].base_stat} </div>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="${singlePokemon['stats'][1].base_stat}" aria-valuemin="0" aria-valuemax="200" style="width: ${singlePokemon['stats'][1].base_stat / 2}%"></div>
        </div>`;
}


async function showBigCardContent_pokemonStatsDefense(singlePokemon){
    let url = singlePokemon['stats'][2].stat.url
    let responseAPI_JSON = await loadAPI(url);
    let statName = getLanguageName(responseAPI_JSON);
    document.getElementById('pokemonDefense').innerHTML =
        `<div> ${statName}  ${singlePokemon['stats'][2].base_stat} </div>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="${singlePokemon['stats'][2].base_stat}" aria-valuemin="0" aria-valuemax="200" style="width: ${singlePokemon['stats'][2].base_stat / 2}%"></div>
        </div>`;
}


async function showBigCardContent_pokemonStatsSpecialAttack(singlePokemon){
    let url = singlePokemon['stats'][3].stat.url
    let responseAPI_JSON = await loadAPI(url);
    let statName = getLanguageName(responseAPI_JSON);
    document.getElementById('pokemonSpecial-attack').innerHTML =
        `<div> ${statName}  ${singlePokemon['stats'][3].base_stat} </div>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="${singlePokemon['stats'][3].base_stat}" aria-valuemin="0" aria-valuemax="200" style="width: ${singlePokemon['stats'][3].base_stat / 2}%"></div>
        </div>`;
}


async function showBigCardContent_pokemonStatsSpecialDefense(singlePokemon){
    let url = singlePokemon['stats'][4].stat.url
    let responseAPI_JSON = await loadAPI(url);
    let statName = getLanguageName(responseAPI_JSON);
    document.getElementById('pokemonSpecial-defense').innerHTML =
        `<div> ${statName}  ${singlePokemon['stats'][4].base_stat} </div>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="${singlePokemon['stats'][4].base_stat}" aria-valuemin="0" aria-valuemax="200" style="width: ${singlePokemon['stats'][4].base_stat / 2}%"></div>
        </div>`;
}


async function showBigCardContent_pokemonStatsSpeed(singlePokemon){
    let url = singlePokemon['stats'][5].stat.url
    let responseAPI_JSON = await loadAPI(url);
    let statName = getLanguageName(responseAPI_JSON);
    document.getElementById('pokemonSpeed').innerHTML =
    `<div> ${statName}  ${singlePokemon['stats'][5].base_stat} </div>
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="${singlePokemon['stats'][5].base_stat}" aria-valuemin="0" aria-valuemax="200" style="width: ${singlePokemon['stats'][5].base_stat / 2}%"></div>
    </div>`;
}