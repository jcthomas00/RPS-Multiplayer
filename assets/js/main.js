function Player(name) {

	this.name = name;
	this.wins = 0;
	this.losses = 0;
	this.ties = 0;
	this.lastMove = "";
}

var enteredText = "",
    players = { player1: null, player2: null },
    numPlayers = 0;
$(document).ready(function() {

    $(".ready").on("click", function(e) {
        var curPlayer = $(e.target).attr("data-player");
        enteredText = $('#' + curPlayer + ' .name').val().trim();
        if (enteredText == "") {
            alert("Please enter a valid name")
        } else {
            numPlayers++;
            players[curPlayer] = new Player(enteredText);
            $('#' + curPlayer + ' .form-group').slideUp();
            $('#' + curPlayer + ' .move-text').html("Waiting for 2nd player");
            checkPlayers();
        }
    });

	$(".move").on("click", function(e){
		var curPlayer = $(e.target.offsetParent).attr('id');
        players[curPlayer].move = $(e.target).attr("data-move")
		console.log(curPlayer+":"+players[curPlayer].move);
        if (players['player1'].move != null && players['player1'].move != null ) {
            result = getResult();
        }
	});

});//document.ready

function getResult() {
    if(players['player1'].move === 'player2'].move)
    switch(players['player1'].move){
        case 'rock':
            if(players['player1'].move === )
            break;
        case 'paper':
            break;
        case 'scissors'
            break;
    }
}

function checkPlayers() {
    for (key in players) {
        if (players[key] == null) {
            $("#" + key + " .moves :button").attr('disabled', true);
        } else if (numPlayers > 1) {
            $("#" + key + " .moves :button").removeAttr('disabled');
            $('#' + key + ' .move-text').html("Make your move:");
            $('#' + key + ' .player-title').html("Player: " + players[key].name);
        }
    }
} //checkPlayers function
