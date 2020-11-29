const word = document.getElementById("word");
const text = document.getElementById("text");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsBtn = document.getElementById("settings-btn");
const settingsForm = document.getElementById("settings-form");
const difficultyChoose = document.getElementById("difficulty");

let words = [
    'birthday',
    'hurl',
    'quotation',
    'strip',
    'isolation',
    'incentive',
    'address',
    'performance',
    'feign',
    'desire',
    'hostage',  
    'vegetation',
    'expression',
    'step',
    'coat',
    'routine',
    'rehabilitation',
    'remain',
    'nose',
    'casualty',
    'possibility',
    'royalty',
    'speech',
    'complex',
    'elephant',
    'season',
    'custody',
    'legislature',
    'thirsty',
    'concentrate',
    'simplicity',
    'size',
    'pity',
    'beat',
    'freshman',
    'club',
    'vegetarian',
    'attraction',
    'overeat',
    'alive',
    'spit',
    'perception',
    'quarrel',
    'flower',
    'pump',
    'disagreement',
    'truth',
    'morning',
    'way',
    'flex',
    'complication',
    'photocopy',
    'provincial',
    'speed',
    'passion',
    'stereotype',
    'trivial',
    'blast',
    'wardrobe',
    'craftsman',
    'toast',
    'cellar',
    'courtship',
    'appeal',
    'emphasis',
    'admire',
    'ring',
    'sticky',
    'inhibition',
    'sun',
    'disposition',
    'helicopter',
    'bounce',
    'unlawful',
    'fur',
    'cry',
    'hilarious',
    'irony',
    'conference',
    'narrow',
    'bake',
    'despair',
    'responsible',
    'displace',
    'concert',
    'print',
    'notion',
    'tent',
    'begin',
]

text.focus()

let randomWord;

let time = 10;

let score = 0;

let difficulty = localStorage.getItem('difficulty') !== null ?
                    localStorage.getItem('difficulty') : "easy"

difficultyChoose.value = localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : "easy"

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
  }

function updateTime() {
    let timeInterval = setInterval(() => {
    time--;
    timeEl.innerHTML = time + 's';
  
        if (time === 0) {
            clearInterval(timeInterval);
            gameOver();
    }
    }, 1000);
  }
  
  updateTime()

  function gameOver() {
    endgameEl.innerHTML = `
    <h1>GAME OVER</h1>
    <p>Your score was ${score} !!</p>
    <button onclick="location.reload()">Play Again</button>`
    
    endgameEl.style.display= "flex"
}

addWordToDOM()

text.addEventListener('input', e => {
    const insertedText = e.target.value;
    if (insertedText === randomWord) {
        addWordToDOM()
        e.target.value = ''
        updateScore();
        
        if (difficulty === "Easy") {
            time+= 5
        }else if(difficulty === "Medium"){
            time+= 3
        }else{
            time+=2
        }
    }
})

settingsForm.addEventListener('change', e => {
    difficulty = e.target.value
    location.reload()
    localStorage.setItem('difficulty', difficulty)
})