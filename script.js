

const prompt = require("prompt-sync")();

console.log(`Please select a muscle group to exercise \n1. upper body\n2. lower body\n3. core`)

let numInput = 0;
let input = '';

do {
    input = prompt("What number do you choose? ");
    numInput = Number(input)
}
while (numInput != 1 && numInput !=2 && numInput !=3)      //will evaluate to false if one of the options (1, 2 or 3) is selected, and then break the loop


console.log(`You have selected ${numInput}`);

const message = {
    //muscleGroup : ['upper', 'lower', 'core'],
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
    switch (numInput) {
        case 1:
            selectedGroup = message.upper[RandomNumber(message.upper)];
            break;
        case 2:
            selectedGroup = message.lower[RandomNumber(message.lower)];
            break;
        case 3:
            selectedGroup = message.core[RandomNumber(message.core)];
            break; 
        default:
            selectedGroup = console.log('Something went wrong with your muscle group selection');            
    }
    return selectedGroup;
};

