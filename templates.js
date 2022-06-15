function showHeadHTML(pokemonList){
    return `<h2>(${pokemonList.length} Pokémon)</h2>`
}


function showPokemonMiniCardsHeadHTML(pokemonList){
    return `<div id="showPokemonMainAreaContent"></div>`;
}


function showPokemonMiniCardsMainHTML(pokemonName,pokemonId,pokemonBgColor,url,responseSinglePokemon){
    return /*html*/`
    <div onclick="showBigCard('${url}')"
         class="miniCard" style="border-color: ${pokemonBgColor}">
        
        <div class="miniCardId">Id: ${pokemonId}</div>
            
        <div class="miniCardName"> ${pokemonName}</div>

        <img src="${responseSinglePokemon['sprites']['other']['official-artwork']['front_default']}" alt="">

    </div>
    `
}