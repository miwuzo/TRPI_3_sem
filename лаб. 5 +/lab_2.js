///////////////////////////////////////////////////////////////////////
//1 - 1
// function makeCounter(){
//     let currentCount = 1;

//     return function(){
//         return currentCount++;
//     };
// }

// let counter = makeCounter();
// alert( counter() );
// alert( counter() );
// alert( counter() );

// let counter2 = makeCounter();
// alert(counter2());

// //1 - 2
// let currentCount = 1;

// function makeCounter(){
//     return function(){
//         return currentCount++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() );
// alert( counter() );

// alert( counter2() );
// alert( counter2() );

//////////////////////////////////////////////////////////////////////
//2 Каррирование
// function calcVolume(length) {
//     return function(width) {
//         return function(height) {
//             return length*width*height;
//         };
//     };
// }

// console.log(calcVolume(2)(3)(5));

// const calcVolumeLen2 = calcVolume(2);
// console.log(calcVolumeLen2(6)(2));
// console.log(calcVolumeLen2(4)(5));

///////////////////////////////////////////////////////////////////////
// ///3
function* moveObj() {
    let x = 0;
    let y = 0;

    while (true) {
        const direction = yield {x, y};
        switch (direction) {
            case "left" :
                x-=10;
                break;
            case "right" :
                x+=10;
                break;
            case "up" :
                y+=10;
                break;
            case "down" :
                y-=10;
                break;
            default :
                break;
        }
        console.log(`x:${x}, y:${y}`);
    }
}

const mover = moveObj();
mover.next();

for (let i = 0; i < 10; i++) {
    const direction = prompt("left/right/up/down: ");
    mover.next(direction);
}

/////////////////////////////////////////////////////////////////////////
////4

// for (let prop in window) {
//     if (window.hasOwnProperty(prop)) {
//       console.log(`Property: ${prop}, Value: ${window[prop]}`);
//     }
//   }
//   var tempVar = 10;
//   console.log(tempVar);
//   window.tempVar = 10000;
//   console.log(tempVar);
//   window.calcVolume = function() {
//     console.log("new calc func");
//   }
//   calcVolume();
