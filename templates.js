function showHeadHTML(pokemonList) {
    return `<h2>(${pokemonList.length} Pokémon)</h2>`
}


function showPokemonMiniCardsHeadHTML(pokemonList) {
    return `<div id="showPokemonMainAreaContent"></div>`;
}


function showPokemonMiniCardsMainHTML(PokemonMiniCardsJSON) {
    return /*html*/`
    <div onclick="renderBigCard('${PokemonMiniCardsJSON.url}')"
         class="miniCard cardBgClass_${PokemonMiniCardsJSON.pokemonBgColor} cardBorderColor_${PokemonMiniCardsJSON.pokemonBgColor}"
         title="${PokemonMiniCardsJSON.pokemonName}">
        
        <div class="miniCardId">Id: ${pokemonId}</div>
            
        <div class="miniCardName"> ${PokemonMiniCardsJSON.pokemonName}</div>

        <img src="${PokemonMiniCardsJSON.responseSinglePokemon['sprites']['other']['official-artwork']['front_default']}" alt="">

    </div>
    `
}


function showbuttonReaderMorePokemonHTML(){
    return `
    <div class="buttonReaderMorePokemon">
        <button onclick="readerMorePokemon()" 
         type="button" 
         class="btn btn-outline-info">

            weitere 100 Pokemon

        </button>
    </div>
    <div class="footerErsatz"><a href="https://pokeapi.co/">Daten stammen von pokeapi.co</a></div>`
}


function PokemonBigCardHTML() {
    return /*html*/`
    <div id="bigCardArea">
            
        <div class="bigCardHeader">
            <div class="bigCardName">
                <div id="pokemonName"></div>

                <div id="shortDescription"></div>
            </div>

            <div id="pokemonId"></div>
        </div>

        <div id="pokemonClass"></div>

        <div class="pokemonImgContainer">
            <img id="pokemonImg" src="" alt="">
        </div>

        <div class="bigCardArea2">
            <div id="pokemonStats">
                <div id="pokemonHp"></div>
                <div id="pokemonAttack"></div>
                <div id="pokemonDefense"></div>
                <div id="pokemonSpecial-attack"></div>
                <div id="pokemonSpecial-defense"></div>
                <div id="pokemonSpeed"></div>
            </div>

            <div id="carouselExampleControls" 
                 class="carousel slide carousel-dark" 
                 data-bs-ride="carousel">

                <div class="carousel-inner" id="description"></div>

                <button class="carousel-control-prev" 
                        type="button" 
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">

                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button class="carousel-control-next" 
                        type="button" 
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">

                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
            
        <img id="closeBigCard" 
             onclick="closeBigCard()" 
             src="./img/x-mark-32.png" 
             alt="X"
             title="close card">
    </div>`
}


function bigCardPokemonClassHTML(pokemonClass, i){
    return `<div id="pokemonSingleId${i}" 
                 class="pokemonSingleClass">
                 
                    ${pokemonClass}
                    
            </div>`;
}


function pokemonStatsHPHTML(statName, base_stat){
    return `<div> ${statName}  ${base_stat} </div>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                     role="progressbar" 
                     aria-valuenow="${base_stat}" aria-valuemin="0" aria-valuemax="200" 
                     style="width: ${base_stat / 2}%">

                </div>
            </div>`;
}


function pokemonStatsAttackHTML(statName, base_stat){
    return `<div> ${statName}  ${base_stat} </div>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" 
                     role="progressbar" 
                     aria-valuenow="${base_stat}" aria-valuemin="0" aria-valuemax="200" 
                     style="width: ${base_stat / 2}%">
                     
                </div>
            </div>`;
}


function pokemonStatsDefense(statName, base_stat){
    return `<div> ${statName}  ${base_stat} </div>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated" 
                     role="progressbar" 
                     aria-valuenow="${base_stat}" aria-valuemin="0" aria-valuemax="200" 
                     style="width: ${base_stat / 2}%">
                
                </div>
            </div>`;
}


function pokemonStatsSpecialAttack(statName, base_stat){
    return `<div> ${statName}  ${base_stat} </div>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" 
                     role="progressbar" 
                     aria-valuenow="${base_stat}" aria-valuemin="0" aria-valuemax="200" 
                     style="width: ${base_stat / 2}%">
                     
                </div>
            </div>`;
}


function pokemonStatsSpecialDefense(statName, base_stat){
    return  `<div> ${statName}  ${base_stat} </div>
             <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" 
                     role="progressbar" 
                     aria-valuenow="${base_stat}" aria-valuemin="0" aria-valuemax="200" 
                     style="width: ${base_stat / 2}%">

                </div>
             </div>`;
}


function pokemonStatsSpeed(statName, base_stat){
    return `<div> ${statName}  ${base_stat} </div>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" 
                     role="progressbar" 
                     aria-valuenow="${base_stat}" aria-valuemin="0" aria-valuemax="200" 
                     style="width: ${base_stat / 2}%">
                
                </div>
            </div>`;
}


function bigCardFirstDescriptionHTML(description){
    return `<div class="carousel-item active">
                <div>${description}</div>
            </div>`;
}

function bigCardNextDescriptionHTML(description){
    return `<div class="carousel-item">
                <div>${description}</div>
            </div>`;
}