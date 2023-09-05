var player1 = 0;
var player2 = 1;
var placar;

player1 != -1 && player2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos');

if (player1 > 0 && player2 == 0){
    console.log('Player 1 marcou gol');
    placar = player1 > player2;
} else if (player2 > 0 && player1 == 0){
    console.log('Player 2 marcou gol');
    placar = player2 > player1;
}else{
    console.log('Nimguém marcou gol');
}

switch(placar){
    case placar = player1 > player2:
        console.log('Player 1 venceu!');
        break;
    case placar = player2 > player1:
        console.log('player 2 venceu!');
        break;
    default:
        console.log('ninguém venceu!')
}