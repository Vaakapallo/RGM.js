var gameMechanics = ["Destructible environments", "Collectibles", "Progression system", "Exploration"];
var themes = ["Cyberpunk", "Steampunk", "Fantasy", "Biology"];

function loadGameTemplate() {
  $.get('game.mst', function(template) {
    var rendered = Mustache.render(template, {
     mechs: nRandomMechanics(gameMechanics,3),
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

function nRandomMechanics(array,n){
	var items = [];

	while(items.length < n) {
		var item = randomItem(array);
		console.log(item);
		if($.inArray(item, items) == -1){
			items.push(item);
		}
	};

	objectItems = [];
	for (var i = items.length - 1; i >= 0; i--) {
		var object = {mech: items[i]};
		objectItems.push(object);
	};
	
	return objectItems;
}

loadGameTemplate();