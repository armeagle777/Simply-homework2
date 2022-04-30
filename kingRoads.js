const roadRegister1 = [
    [false, true, false, false],
    [false, false, true, false],
    [true, false, false, true],
    [false, false, true, false],
];

// the output should be true
const roadRegister2 = [
    [false, true, false, false, false, false, false],
    [true, false, false, false, false, false, false],
    [false, false, false, true, false, false, false],
    [false, false, true, false, false, false, false],
    [false, false, false, false, false, false, true],
    [false, false, false, false, true, false, false],
    [false, false, false, false, false, true, false],
];

// the output should be false
const roadRegister = [
    [false, true, false],
    [false, false, false],
    [true, false, false],
];




function solution(roadRegister) {
   const directionsToObject= roadRegister.reduce((acc,road,index)=>{
       road.forEach((direction,i)=>{
           if(direction){
               acc[i] = acc[i] ? acc[i] + 1 : 1
               acc[index] = acc[index] ? acc[index] + 1 : 1
           }
       })
       return acc
   },{})
    const values = Object.values(directionsToObject)
    return values.length === roadRegister.length && values.every(el => el >=2)
}


console.log(solution(roadRegister1))
console.log(solution(roadRegister2))
console.log(solution(roadRegister))