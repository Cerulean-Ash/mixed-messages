const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

  rl.question("What is your name? ", function (answer) {
    console.log(`Oh, so your name is ${answer}`);
    console.log("Closing the interface");
    rl.close();
  });


  
//const groupPrompt = prompt('What muscle group would you like to work? (upper, lower or core) ');

//groupPrompt.toLowerCase()
//console.log(groupPrompt);
console.log('hello world');

const message = {
    muscleGroup : ['upper', 'lower', 'core'],
    upper : ['arnold press', 'bench press', 'pullover', 'rear-delt fly', 'bicep curl', 'chest fly'],
    lower : ['static lunge', 'hip bridge', 'romanian deadlift', 'sumo squat', 'pistol squat', 'donkey kick'],
    core : ['forearm plank', 'russian twist', 'buttterfly sit-up', 'dead bug', 'body saw', 'jack knife'],
    sets : [1, 2, 3, 4, 5],
    reps: [8 , 9, 10, 11, 12, 13, 14, 15, 16, 17],
};

const randomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
};

const group = () => {
    let selectedGroup = '';
    switch (message.muscleGroup[randomNumber(message.muscleGroup)]) {
        case 'upper':
            selectedGroup = message.upper[RandomNumber(message.upper)];
            break;
        case 'lower':
            selectedGroup = message.lower[RandomNumber(message.lower)];
            break;
        case 'core':
            selectedGroup = message.core[RandomNumber(message.core)];
            break; 
        default:
            selectedGroup = console.log('Something went wrong with your muscle group selection');            
    }
    return selectedGroup;
};

