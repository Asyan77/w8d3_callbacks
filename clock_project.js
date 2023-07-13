// class Clock {
//     constructor(){ 
//     let time = new Date
//     this.hours = time.getHours();
//     this.minutes = time.getMinutes();
//     this.seconds = time.getSeconds();
//     setInterval(this._tick.bind(this), 1000);
//     // setInterval(() => this._tick(), 1000);

//     }


//     printTime() {
//        let timeArr = [this.hours, this.minutes, this.seconds]
//        console.log(timeArr.map ((ele) => ele.toString().padStart(2, "0")).join(":"))
//         // console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
//     }

//     _tick(){
//         this.seconds++;
//         if (this.seconds === 60) {
//             this.seconds = 0.0;
//             this.mins++ ;
//             if (this.mins === 60) {
//                 this.minutes = 0.0;
//                 this.hours++ ;
//                 if (this.hours === 24) {
//                     this.hours = 0.0;
//                 }
//             }
//         }
//         this.printTime()
//     };
// }

// const clock = new Clock
// console.log(clock)


// const readline = require('readline');
// const rl = readline.createInterface( {
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {

//     if (numsLeft === 0 ) {
//         return completionCallback(sum);
//     }

//     if (numsLeft > 0 ) {
//         rl.question("give me a number!", res => {
//             sum+= parseInt(res);
//             console.log(sum);
//             addNumbers(sum, numsLeft-1, completionCallback);
//         });
//     }
// };

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context) {
return () => {this.apply(context, [])}
};




class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"
  