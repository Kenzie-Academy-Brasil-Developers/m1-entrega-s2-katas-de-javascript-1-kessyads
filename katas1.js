function oneThroughTwenty() {
  let int = []
  for(let i = 1; i <= 20; i++){
  int.push(i)
  }
    return int;
}
console.log(oneThroughTwenty());



function evensToTwenty() {
  let int = []
  for(let i = 1; i <= 20; i++){
    if(i % 2 ===0){
    int.push(i)
    }
  }
  return int;
}
console.log(evensToTwenty())



function oddsToTwenty() {
  let int = []
  for(let i = 1; i <= 20; i++){
    if(i % 2 !==0){
    int.push(i)
    }
  }
  return int; 
}
console.log(oddsToTwenty())



function multiplesOfFive() {
  let int = []
  for(let i = 1; i <= 100; i++){
    if(i % 5 ===0){
    int.push(i)
    }
  }
  return int;
}
console.log(multiplesOfFive())
0


function squareNumbers(){
  let int = []
  for(let i = 1; i <= 10; i++){
  int.push(i*i)
  }
return int;
}
console.log(squareNumbers())



function countingBackwards() {
  let int = []
    for(let i = 20; i >= 1; i--){
      int.push(i)
    }
    return int;
}
console.log(countingBackwards())



function evenNumbersBackwards() {
  let int = []
  for(let i = 20; i >= 1; i--){
    if(i % 2 ===0){
    int.push(i)
    }
  }
  return int;
}
console.log(evenNumbersBackwards())



function oddNumbersBackwards(){
  let int = []
  for(let i = 20; i >= 1; i--){
    if(i % 2 !==0){
    int.push(i)
    }
  }
  return int; 
}
console.log(oddNumbersBackwards())



function multiplesOfFiveBackwards() {
  let int = []
  for(let i = 100; i >= 1; i--){
    if(i % 5 ===0){
    int.push(i)
    }
  }
  return int;
}
console.log(multiplesOfFiveBackwards())


function squareNumbersBackwards() {
  let int = []
  for(let i = 10; i >= 1; i--){
  int.push(i*i)
  }
return int;
}
console.log(squareNumbersBackwards())
