const $text = document.querySelector('.text');
// 텍스트가 입력될 요소

const letters = [
    "HTML",
    "CSS",
    "JavaScript"
];
// 글자모음

const speed = 100;
// 글자 입력 속도
let i = 0;
// 현재 지정된 글자

    // 타이핑 효과를 구현하기 위해 필요한 기본 요소 및 설정 값들을 선언


const typing = async () => {
    const letter = letters[i].split("");

    while(letter.length){
        await wait(speed);
        $text.innerHTML += letter.shift();
    }

    //잠시 대기
    await wait(800);

    //지우는 효과
    remove();
}
// 타이핑 효과(wait 기능을 위한 async, await)
// 작성할 글자를 모아둔 배열에서 i번째 글자를 가져와 문자열을 배열로 나눠줌
// 모든 문자가 텍스트 요소에 추가되면 종료되는 while문을 작성
// 배열로 나눈 문자에서 shift메서드를 이용해 배열의 제일 앞에 있는 값을 뽑아준다.

// $text.innerHTML속성을 이용해서 딜레이와 하나씩 추가되는 기능을 통해 타이핑되는 효과를 구현
// wait함수를 이용해서 while안에서 딜레이 시간이 생기게 만들어줌


const remove = async () => {
    const letter = letters[i].split("");

    while (letter.length){
        await wait(speed);

        letter.pop();
        $text.innerHTML = letter.join("");
    }
    // i = !letters[i+1] ? 0 : i + 1; 
    // 위의 코드는 무한반복
    //다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    // i = !letters[i+1] ? 0 : i < letters.length; 의 경우 HTML만 1번 작성되고 끝남
    
    i++;
    //마지막 글자에서 멈춤
    typing();
}
// 글자 지우는 효과
// 글자를 지우면 그 자리를 다른 글씨가 대체해야 하므로,
// 다음에 작성될 텍스트가 있을때 지우는 효과를 실행하는 조건문


function wait(ms){
    return new Promise(res => setTimeout(res, ms))
}
// 딜레이 기능(마이크로초)
// 텍스트가 작송되는 속도나 작성되고 텍스트가 멈추는 시간을 구현하기 위해 setTimeout함수로 딜레이를 주고,
// Promise를 이용해서 딜레이 기능을 주는 함수 구현

// while문이 종료된 후 바로 지우는 효과가 실행되면, 텍스트를 읽을 시간이 없어짐. 다시 한번 wait를 이용해서
// 다음 코드 실행에 딜레이를 준다.


setTimeout(typing, 1500);

