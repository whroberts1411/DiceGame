
//  Javascript for the Dice Game website --------------------------------------

function throwDice() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var img1 = 'images/dice' + randomNumber1 + '.png';
    var img2 = 'images/dice' + randomNumber2 + '.png';

    document.querySelector('.img1').setAttribute('src', img1);
    document.querySelector('.img2').setAttribute('src', img2);

    title = document.querySelector('.container h1')
    title.style.fontSize = '7rem';

    if (randomNumber1 > randomNumber2) {
        title.textContent = '🎆 Player 1 Wins!';
    } else if (randomNumber2 > randomNumber1) {
        title.textContent = 'Player 2 Wins! 🎇';
    } else {
        title.textContent = 'Draw!';
    }

}