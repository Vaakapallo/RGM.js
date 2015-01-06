var gameMechanics = ["Destructible environments", "Collectibles", "Progression system", "Exploration"];
var themes = ["Cyberpunk", "Steampunk", "Fantasy", "Biology"];

function loadGameTemplate() {
  $.get('game.mst', function(template) {
    var rendered = Mustache.render(template, {
     mechs: nRandomItems(gameMechanics,3),
     theme: randomTheme()
     });
    $('#target').html(rendered);
  });
}

function randomGameMechanic(){
	return randomItem(gameMechanics);
}

function randomTheme(){
	return randomItem(themes);
}

function randomItem(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function nRandomItems(array,n){
	var items = [];

	while(items.length < n) {
		var item = randomItem(array);
		if($.inArray(item, array) != -1){
			items.push(item);
		}
	};
	
	return items;
}

loadGameTemplate();