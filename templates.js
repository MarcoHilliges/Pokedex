function showPokemonMiniCardsHeadHTML(pokemonList){
    return `<h1>Es sind derzeit ${pokemonList.length} Pokémon bekannt</h1>
    <div id="showPokemonMainAreaContent"></div>`;
}


function showPokemonMiniCardsMainHTML(pokemonName,pokemonId,pokemonBgColor,url,responseSinglePokemon){
    return /*html*/`
    <div onclick="showBigCard('${url}')"
         class="miniCard" style="border-color: ${pokemonBgColor}">
        
        <div> ${pokemonName}</div>

        <div>Id: ${pokemonId}</div>

        <img src="${responseSinglePokemon['sprites']['other']['home']['front_default']}" alt="">

    </div>
    `
}