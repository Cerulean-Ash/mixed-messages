console.log('hello world');

const message = {
    muscleGroup : ['upper', 'lower', 'core'],
    upper : ['arnold press', 'bench press', 'pullover', 'rear-delt fly', 'bicep curl', 'chest fly'],
    lower : ['static lunge', 'hip bridge', 'romanian deadlift', 'sumo squat', 'pistol squat', 'donkey kick'],
    core : ['forearm plank', 'russian twist', 'buttterfly sit-up', 'dead bug', 'body saw', 'jack knife'],
    sets : [1, 2, 3, 4, 5],
    reps: [8 , 9, 10, 11, 12, 13, 14, 15, 16, 17]
};

const randomNumber = (arr) => {
    Math.floor(Math.random() * arr.length)
}

