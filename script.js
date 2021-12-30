

const prompt = require("prompt-sync")();

console.log(`Welcome to the random exercise generator`)
console.log(`What muscle group would you like to exercise \n1. upperbody\n2. lowerbody\n3. core`)

let numInput = 0;
let input = '';

do {
    input = prompt("Select a muscle grouping by inputting its respective number? ");
    numInput = Number(input)
}
while (numInput != 1 && numInput !=2 && numInput !=3);   //will evaluate to false if one of the options (1, 2 or 3) is selected, and then break the loop


const message = {
    //muscleGroup : ['upper', 'lower', 'core'],
    upper : ['arnold press', 'bench press', 'pullover', 'rear-delt fly', 'bicep curl', 'chest fly'],
    lower : ['static lunge', 'hip bridge', 'romanian deadlift', 'sumo squat', 'pistol squat', 'donkey kick'],
    core : ['forearm plank', 'russian twist', 'buttterfly sit-up', 'dead bug', 'body saw', 'jack knife'],
    sets : [1, 2, 3, 4, 5, 6, 7, 8],
    reps: [8 , 9, 10, 11, 12, 13, 14, 15, 16, 17],
};

const randomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
};

const randEntry = (key) => {
    return message[key][randomNumber(message[key])];
};

const exercise = (num) => {
    let selectedGroup = '';
    switch (num) {
        case 1:
            selectedGroup = message.upper[randomNumber(message.upper)];
            console.log(`You have an upperbody exercise`);
            break;
        case 2:
            selectedGroup = message.lower[randomNumber(message.lower)];
            console.log(`You have selected a lowerbody exercise`);
            break;
        case 3:
            selectedGroup = message.core[randomNumber(message.core)];
            console.log(`You have selected a core exercise`);
            break; 
        default:
            selectedGroup = console.log('Something went wrong with your muscle group selection');            
    }
    return selectedGroup;
};

const genMessage = () => {
    let sets = randEntry('sets');
    let reps = randEntry('reps');
    let resultantMessage = `Today we are doing ${exercise(numInput)}s. `;
    if (sets == 1) {
        resultantMessage += `We'll do ${sets} set of ${reps} reps each.`;
    } else {
        resultantMessage += `We'll do ${sets} sets of ${reps} reps each.`;
    }
    console.log(resultantMessage);
}

genMessage();