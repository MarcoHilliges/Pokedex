function showPokemonMiniCardsHeadHTML(pokemonList){
    return `<h2>Es sind derzeit ${pokemonList.length} Pokémon bekannt</h2>
    <div id="showPokemonMainAreaContent"></div>`;
}


function showPokemonMiniCardsMainHTML(pokemonName,pokemonId,pokemonBgColor,url,responseSinglePokemon){
    return /*html*/`
    <div onclick="showBigCard('${url}')"
         class="miniCard" style="border-color: ${pokemonBgColor}">
        
        <div class="miniCardId">Id: ${pokemonId}</div>
            
        <div class="miniCardName"> ${pokemonName}</div>

        <img src="${responseSinglePokemon['sprites']['other']['home']['front_default']}" alt="">

    </div>
    `
}