//let btn = document.getElementById('btn')
//let output = document.getElementById('output-text')

let prevGuesses = []


const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        return this.secretNum
    }
  }
  //https://github.com/geedtd/Guess-The-Number-Lab.git

console.log(game.play())