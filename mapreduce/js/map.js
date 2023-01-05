///////////////////////////////////////////map
const one = [1, 2, 3];
// let result = one.map((v) => {
//     console.log(v);
//     return v + 1;
// });
// console.log(result)

let result = one.map((e) => {
    if (e % 2){
        return '홀수';
    }
    return '짝수';
})
console.log(result)//홀수 짝수 홀수
console.log(1 % 2)//1
console.log(2 % 2)//0

let arr = ['월요일', '화요일', '수요일', '목요일', '금요일']
let map = arr.map(item => '출근하는' + item);
console.log(map)

const dataArray = [
    {
        "orderCode": "0001",
        "orderDetails": {
            "메뉴이름31": 1,
            "메뉴이름35": 1,
            "메뉴이름36": 1,
            "메뉴이름40": 1,
            "메뉴이름41": 1,
        }
    },
];



///////////////////////////////////////////filter

let fruits = ['kiwi', 'banana', 'apple', 'pineapple', 'strawberry', 'watermelon', 'peach'];
// let result2 = fruits.filter(item => item.length>6);
// console.log(result2);
let search = (query) => {
    return fruits.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
}
console.log(search('ea'));