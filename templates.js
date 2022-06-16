function showHeadHTML(pokemonList) {
    return `<h2>(${pokemonList.length} Pokémon)</h2>`
}


function showPokemonMiniCardsHeadHTML(pokemonList) {
    return `<div id="showPokemonMainAreaContent"></div>`;
}


function showPokemonMiniCardsMainHTML(pokemonName, pokemonId, pokemonBgColor, url, responseSinglePokemon) {
    return /*html*/`
    <div onclick="renderBigCard('${url}')"
         class="miniCard cardBgClass_${pokemonBgColor} cardBorderColor_${pokemonBgColor}"
         title="${pokemonName}">
        
        <div class="miniCardId">Id: ${pokemonId}</div>
            
        <div class="miniCardName"> ${pokemonName}</div>

        <img src="${responseSinglePokemon['sprites']['other']['official-artwork']['front_default']}" alt="">

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
    </div>`
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