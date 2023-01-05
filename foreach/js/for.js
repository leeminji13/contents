const myArr = [1, 2, 3, 4, 5];
const newMyArr = myArr.forEach((currentElement, index, array) => {
    console.log(`요소 : ${currentElement}`);
    console.log(`index: ${index}`);
    console.log(array);
});

console.log(newMyArr);

const myArr2 = ['강아지', '고양이', '햄스터', '거북이', '이구아나'];
myArr2.forEach((el, i)=>{
    console.log(i);
    console.log(el);
    if(el === '고양이'){
        myArr2.shift(); //.shift  배열의 맨 앞에 값을 제거한다. -> 강아지, 고양이, 거북이, 이구아나
                        // 로 출력되는 이유는 특정상황에서 요소 하나를 삭제해버리게 되면 그다음 요소를 찾을 때, 
                        // 변경된 배열에서 해당하는 index를 찾기 때문에 이 코드의 실행결과를 보면 고양이 다음에 거북이가 출력됨
    }
    console.log(el === '고양이') //false 인데 왜 if가 작동하는거지...
})

console.log(myArr2);
