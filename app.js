myFunc = (msg) => {
    console.log(msg);
}

myFunc('Hello World!');

setTimeout(() => {
    myFunc('Hello Universe!');
}, 2000);

getWords = (words) => {
    console.log(words);
};

getWords('instant');

setTimeout(() => {
    getWords('3 seconds');
}, 3000);

setTimeout(() => {
    getWords('2 seconds');
}, 2000);

setTimeout(() => {
    getWords('1 second');
}, 1000);

//Callbacks and Recursion

done = () => {
    console.log('Job\'s done!')
};

countDown = (num, callback) => {

setTimeout(() => {

    if (num > 0) {
        console.log(num);
        countDown(num - 1, callback);
    } else {
        callback();
    }
    }, 1000);
}

countDown(7, done);

//Promises

let lunchTime = false

orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime == true) {
            let meal = {
                lunch: 'chicken nuggies',
                drink: 'root beer'
            };
            resolve(meal)
        } else {
            let err = new Error('Not time yet!')
            reject(err)
        }
    });
};

orderMeSomeFood()
    .then(function (meal) {
        console.log(meal)
    })
    .catch(function (err) {
        console.log(err)
    });