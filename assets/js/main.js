var rPs = {

    enteredText: "",
    numPlayers: 0,

    init: function() {
        rPs.clickHandlers();
    },
    clickHandlers: function() {

        $(".ready").on("click", function(e) {
            var curPlayer = $(e.target).attr("data-player");
            enteredText = $('#' + curPlayer + ' .name').val().trim();
            if (enteredText == "") {
                alert("Please enter a valid name")
            } else {
                rPs.numPlayers++;
                rPs.players[curPlayer] = new rPs.Player(enteredText);
                $('#' + curPlayer + ' .form-group').slideUp();
                $('#' + curPlayer + ' .move-text').html("Waiting for 2nd player");
                rPs.checkPlayers();
            }
        });


        $(".move").on("click", function(e) {
            var curPlayer = $(e.target.offsetParent).attr('id');
            rPs.players[curPlayer].lastMove = $(e.target).attr("data-move")
            console.log(curPlayer + ":" + rPs.players[curPlayer].lastMove);
            if (rPs.players['player1'].lastMove != "" && rPs.players['player2'].lastMove != "" ) {
                result = rPs.getResult();
            }        
        });
    },
    checkPlayers: function() {
        for (key in rPs.players) {
            if (rPs.players[key] == null) {
                $("#" + key + " .moves :button").attr('disabled', true);
            } else if (rPs.numPlayers > 1) {
                $("#" + key + " .moves :button").removeAttr('disabled');
                $('#' + key + ' .move-text').html("Make your move:");
                $('#' + key + ' .player-title').html("Player: " + rPs.players[key].name);
            }
        }
    }, //checkPlayers function
    getResult: function() {
        if(rPs.players['player1'].lastMove === rPs.players['player2'].lastMove){
            rPs.players['player1'].ties++; rPs.players['player2'].ties++;
        } else {
            switch(rPs.players['player1'].lastMove){
                case 'rock':
                    if(rPs.players['player2'].lastMove === 'paper'){
                        rPs.winner('player2');
                    } else{rPs.winner('player1')}
                    break;
                case 'paper':
                    if(rPs.players['player2'].lastMove === 'scissors'){
                        rPs.winner('player2');
                    } else{rPs.winner('player1')}
                    break;
                case 'scissors':
                    if(rPs.players['player2'].lastMove === 'rock'){
                        rPs.winner('player2');
                    } else{rPs.winner('player1')}
                    break;
            }
        }return 1;
    },
    winner: function(aPlayer){
        rPs.players[aPlayer].wins++;
        for(curPlayer in rPs.players){
            rPs.players[curPlayer].lastMove = "";
            if (curPlayer != aPlayer){
                rPs.players[curPlayer].losses++;
            }
            console.log(rPs.players[curPlayer]);
        }
    },
    Player: function(name) {

        this.name = name;
        this.wins = 0;
        this.losses = 0;
        this.ties = 0;
        this.lastMove = "";
    },
    players: { player1: null, player2: null }
}

$(document).ready(function() {
    rPs.init();
}); //document.ready

