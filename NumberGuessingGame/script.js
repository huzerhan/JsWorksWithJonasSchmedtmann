'use strict';

//#region bu kısmın konu anlatımı
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//#endregion

let secretNumber = Math.trunc(Math.random() * 20) + 1; //rastgele sayı oluşturduk, sayıyı 20ile çarptık, trunc ile ondalık kısmını sildik ve 1 ekleyerek sayının max 19 değil, 20 olabilmesini sağladık.

let score = 20; //score'u aşağıdaki senaryonun içinde değil dışında tanımlamak daha iyi bir uygulama. senaryoya göre artma ve azalma işlemini senaryoların içinde yapıcaz

let highScore = 0;

const displayMessage=function(message){
  document.querySelector('.message').textContent =message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);


  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    score--;
    document.querySelector('.score').textContent = score;
  }
  // when player wins 
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //burada yazılan style.backgroundcolor argümanı normalde css'de bulunan bir şeydir. css'de bu argümanı background-color şekinde yazarız. anccak js'de camelCase ile yazılmak zorundadır
    //aynı zamanda rengin ifade edildiği alanlar, yazı boyutunun ifade edildiği alanlar, css class ve idleri de css seçim syntaxı ile tırnak içinde yazılmalıdır
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if(score>highScore){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
      
    }
  } 

  //when guess is wrong
  else if(guess !== secretNumber){
    if (score > 1) {
      // document.querySelector('.message').textContent = guess>secretNumber? '📈 Too high!': '📉 Too low!';
      displayMessage(guess>secretNumber? '📈 Too high!': '📉 Too low!')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '🔥 You lost the game!';
      displayMessage('🔥 You lost the game!')
      document.querySelector('.score').textContent = 0; //sıfır çıkmıyor. bunu kontrol et
      document.querySelector('body').style.backgroundColor='#dc143c';
      document.querySelector('.number').style.width='30rem';
      document.querySelector('.number').textContent=secretNumber;

    }
  }

//#region kapatılan tekrarlı kod
  // // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🔥 You lost the game!';
  //     document.querySelector('.score').textContent = 0; //sıfır çıkmıyor. bunu kontrol et
  //     document.querySelector('.body').style.backgroundColor='#dc143c';
  //   }

//     // when guess is too low
//   } else if (guess < secretNumber) {
//     document.querySelector('.message').textContent = '📉 Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;
    
//     document.querySelector('.guess').textContent="";
//   }
  
});
//#endregion


//#region Coding Challenge #1
/*
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)
*/
//#endregion
document.querySelector('.again').addEventListener('click', function(){
  secretNumber=Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent="Start guessing...";
  displayMessage("Start guessing...")
  document.querySelector('.number').textContent="?"
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value='';
  
} );
