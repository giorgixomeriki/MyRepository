//1. push() +
//2. pop() +
//3. shift() +
//4. unshift() +
//5. for() +
//6. forEach() +
//7. map() +
//8. array.IsArray() 
//9. raduce() +
//10.filter() +
//11.finde()+
//12.includes()+
//13.while()+
//14.do while()+
//15.findeIndex() + 
//16.slice() +
//17.splice() +
//18.contact() +
//19.sort() +
//20.reverse() +
//21.join() +
//22.every() +
//23.some() +
//24.flat() +
//25.flatMap() +
//26.fill() +
//27.copiWithin()+
//28.toString() +
//29.split() +
//30.charAT() + რასაც გადასცემ იმ ინდექსზე მდგარ ელემენტს აბრუნებს

//31.Nullish coalescing operator(??) +
//32.bitwise operator(&, |, ^, ~, <<, >>, >>>) +
//33.Ternary operator +
//34.indexOf + კონკრეტული ელემენტის ინდექსს გეუბნება, თუ სტრინგია ბრჭყალებში უნდა გადასცე
//35.spred operator + აქ მძიმე არ უნდა დაგვავიწყდეს
//36.set() - უნიკალური ელელმენტების შესანახად გამოიყენება


/* let arr = [2, 4, 6, 8, 8, 12, 13, 14];
let setedarr = new Set([2, 4, 6, 8, 8, 12, 13, 14])
arr.add

arr.forEach(num =>{
    console.log(num)
})

 */

/* let arr = [2, 4, 6, 8, 12, 13, 14];
//         0  1  2  3   4   5   6
arr.splice(2, 0, 99) //პირველი პარამ საიდან გვინდა რომ დავიწყოთ,
// მეორე რამდენი ელემენტი გვინდა რო წავშალოთ და მესამე პარამ რას ვამატებთ
console.log(arr)
let fafarr = arr.slice(0,4)
console.log(fafarr) */

/* let arr = [2, 4, 6, 8];
let filteredarr = arr.filter(x => x < 6)
console.log(filteredarr)
 */
/*
let arr = [2, 4, 6, 8];
const nmepedarr = arr.map(x => x ** 2)
console.log(nmepedarr)

 */
/* let arr = [2, 4, 6, 8];
let sum = 0
for (let num of arr) {
  sum = sum + num
}
console.log(sum)
 */

/* let arr = [2, 4, 6, 8];
let sum = arr.reduce((previows, current) => previows + current, 0)
console.log(sum)
 */


/* let x = [1, 2, 3, 4, 5]
let y = [6, 7, 8, 9, 10]

let c = [...x, ...y];
console.log(c)
 */

/* let slm = "kai gamarjoba sheni!"
console.log(slm.indexOf("!")) */

/* let slm = "kai gamarjoba sheni!"
console.log(slm.charAt(4)) //4

 */
/*
let x = 23;
let y = 44;
 */
/*
if(x == y) {
    console.log("tolia")
} else {
    console.log("araa toli")
}
 */

/* console.log(x == y ? "tolia":"araa toli")
 */

/* let x = null; //undefined
let y = x ? 24 : 35;
console.log(y) */

/* console.log(1&3)// ორობიტში გადადის თითოეული რიცხვლი და დარდება სათიტაოდ ყველა ბიტი(ორივეგან 1 თუა საბოლოოშედეგიც 1, თუარა 0)
console.log(1|3)// ორობიტში გადადის თითოეული რიცხვლი და დარდება სათიტაოდ ყველა ბიტი(ერთერთში  1 თუა საბოლოოშედეგიც 1, თუარა 0)
 */
/*
let b = null; //ან undefined
let c = b ?? 1;
console.log(c)
 */

/* const sentence = 'Hello world';
console.log(sentence.charAt());
 */

/* const arr = [1,
    2, 3, 4, 5];
arr.copyWithin(1, 3);
console.log(arr);
 */

/* const arr = new Array(22,2); // Creates an empty array with 5 slots
arr.fill(23)
console.log(arr)
 */

/* const arr = [1, 2, 3];
const flatmapnum = arr.flatMap(num =>[num, num * 2]);
console.log(flatmapnum)

 */

/* let numarr = [1,2,3,4,5,6,7];
console.log(numarr.toString())
console.log(numarr) */


/* let arr = [1,2,3,[4,5,67,8,9,[10,11,12]]]
let flatedarr = arr.flat(2)
console.log(flatedarr)
 */


/*
let arr = [1, 3, 5, 9, 11, 15, 17, 2 ]

let somearr = arr.some((x => x % 2 === 0));
console.log(somearr) //ერთი ელემენტიც კი თუ აბარებს მაშინ თრუა თუ არა ფოლსი
 */




/* const numbers = [2, 4];
const iyofa2ze = numbers.every(x => x % 2 === 0)
console.log(iyofa2ze)

 */
/* const fruits = ['Apple', 'Banana', 'Cherry'];
const result = fruits.join();
console.log(result,fruits);


const numbers = [1, 2, 3, 4];
const result2 = numbers.join(', ');
console.log(result2);  // Output: "1, 2, 3, 4"
console.log(typeof result2)


const chars = ['H', 'e', "l", "l", "o"];
const joinedchars = chars.join('')
console.log(joinedchars) */

/* let arr = "one,two,three,four,five";
let spletedarr = arr.split(",", 3);
console.log(spletedarr)
 */

/* const arr1 = [20, 1, 2, 3, 5] //გილაგებს პირიქით //[5,3,2,1,20]
console.log(arr1.reverse()) */


/* const arr1 = [ 20, 1, 2, 3, 5]
let sortedarr = arr1.sort((a, b) => a - b);
console.log(sortedarr) //[ 1, 2, 3, 5, 20 ]


 */
/* const arr1 = [1, 2, 3, 5]
const arr2 = [6, 7, 8, 9]
const arr3 = [10, 11, 12, 13]

const allarr = arr1.concat(arr2,arr3)
console.log(allarr)
console.log(arr2)


const allarr2 = [arr1, ...arr2, ...arr3]; //this is spread */





/*
const numbers = [5, 2, 11, 15, 25 ,4];
const evenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(evenIndex);  //1
 */

/* let arr = [10, 20, 30, 40, 50]
let i = 0;
do {
    console.log(arr[i])
    i++
} while(i < arr.length)  */

/* let arr = ["a", "b", "c", "d"]
let i = 0;
while(i < arr.length) {
    console.log(arr[i])
    i++
}
 */




//1. push() - მასივის ბოლოში ფუშავს ახალ ელემენტს
/* let arr = ["a", "b", "c", "d"]
arr.push("h");
console.log(arr) */
//[ 'h', 'a', 'b', 'c', 'd' ]




//2. pop() - მასივის ბოლოდან იღებს ელემენტს
/* let arr = ["a", "b", "c", "d"]
arr.pop("h")
console.log(arr) */
//[ 'a', 'b', 'c' ]


//3. shift() - მასივის თავიდან იღებს ელემენტს
/* let arr = ["a", "b", "c", "d"]
arr.shift()
console.log(arr)
//[ 'b', 'c', 'd' ] */


//4. unshift() - მასივის თავში ვამატებთ ელემენტს
/* let arr = ["a", "b", "c", "d"]
arr.unshift("k")
console.log(arr)
//[ 'b', 'c', 'd' ] */


//5. for() - ციკლია რა ჩვეულებრივი, სათითაოდ გილოგავს ელემენტებს
/* let arr = ["a", "b", "c", "d"]
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
console.log(arr)
 */
// a
// b
// c
// d
// [ 'a', 'b', 'c', 'd' ]


//6. forEach() - ესეც ციკლია უბრალოდ ფორისგან განსხვავებით (Does not allow the use of break, continue, or return - მარა შეგვიძლია ქოლბექად გადვცეთ)
/* let arr = ["a", "b", "c", "d"]
arr.forEach(element => {
    console.log(element)
}); */
// a
// b
// c
// d
// g

//7. map()
/* let arr = ["a", "b", "c", "d", "m"]
const newarr = arr.map(res => {
     return res + 2
})
console.log(newarr)
//[ 'a2', 'b2', 'c2', 'd2', 'm2' ] */


//8. raduce()
/* let arr = [123, 223, 323, 423, 523, 623, 723, 823, 923, 10]

let sum = arr.reduce((previous, current) => previous + current, 0)
console.log(sum); */


//9.filter()
/* let arr = [123, 223, 323, 423, 523, 623, 723, 823, 923, 10]

let filtarr = arr.filter(x => x < 200 )
console.log(filtarr) */  //123, 10


/* let arr = ["a", "b", "c", "d", "m"]
const newarr = arr.map(res => {
     return res + 2
})

console.log(newarr)
//[ 'a2', 'b2', 'c2', 'd2', 'm2' ] */


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/* let sum = 0
for(let number of arr){
    sum = sum + number
}
console.log(sum) */
/* 
let arr = [13, 2, 3,23]
let sum = 0;
for (let num of arr){
    sum = sum + num
};
console.log(sum)
//41 */


/* let arr = [13, 2, 3,23]
let reducedArr = arr.reduce((previous, current) => previous + current, 0)
console.log(reducedArr)
 */

/* let arr = [2, 4, 6, 8, 10, 12, 14]
let b = true
console.log(Array.isArray(b)); */ //tre //false

/* let arr = [2, 4, 6, 8, 10, 12, 14] 
let filttarr = arr.filter(x => x < 10);
console.log(filttarr) */


/* let arr = [2, 4, 6, 8, 10, 12, 14] 
let filttarr = arr.find(x => x === 10)
console.log(filttarr) 
 */           //10


/*  let arr = [2, 4, 6, 8, 10, 12, 14] 
 console.log(arr.includes(4)) */


/*  let arr = [2, 4, 6, 8, 10, 12, 14]  
 //         0  1  2  3  4   5   6
 console.log(arr.slice(3,5)) //8, 10
 console.log(arr.splice(1)) // 4, 6, 8, 10, 12, 14 */