var pokeball = "";
for(var pokemon = 1; pokemon < 152; pokemon++){
    pokeball += `<img class=icon id=${pokemon} src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png>`
}

$(document).ready(function(){

    $.get("http://pokeapi.co/api/v1/pokemon/1/", function(res) {
        console.log(res);
    }, "json");

    $('#display').append(pokeball);

    $(".icon").hover(function(){
        $(this).css("border", "1px dotted #FF0000") }, function(){
        $(this).css("border", "none") } );

    $('#display').on('click', '.icon', function(){
        var id = this.id;
        $.get(`http://pokeapi.co/api/v1/pokemon/${id}`, function(response){
            var info = "";
            info += `<img class=icon id=${id} src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png>`;
            info += `<h2>${response['name']}</h2>`;
            info += `<p><span class=bold>Types</span>:<br>`;
            for (var i = 0; i < response.types.length; i++){
                info += `${response.types[i]['name']}<br>`;
            }
            info += `<p><span class=bold>Abilities</span>:<br>`;
            for (var i = 0; i < response.abilities.length; i++){
                info += `${response.abilities[i]['name']}<br>`;
            }
            info += `</p><p class=><span class=bold>Height</span>: 0.${response['height']}m</p>`;
            info += `<p><span class=bold>Weight</span>: ${response['weight'] / 10}kg</p>`;
            $('#deck').html(info);
        }, "json");
    });

});