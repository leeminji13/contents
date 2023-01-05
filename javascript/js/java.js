function myfunction(){
    var num = document.getElementById("num").value;
    if(numcheck(num)){
        var result = "";
        for(var i = 1; i < 10; i++){
            result += num + " * " + i + " = " + (num * i) + "<br/>";
        }
        document.getElementById("result").innerHTML = result;
    }else{
        document.getElementById("result").innerHTML = "잘못된 데이터 입력입니다";
    }
    console.log(num)
}
function numcheck(num){
    //전달된 변수 값을 검사
    var result = true;
    if(num.trim() == "" || isNaN(num) || (parseInt(num) < 1 || parseInt(num) > 9)){
        //trim은 공백을 제거하는 함수 
        //num이 비어있거나 || 숫자가 아니거나 || 1보다 작거나 || 9보다 클때 result는 false
        result = false;
    }
    return result;
}
////구구단

function lottofn(){
    var lotto = []
    //값이 6개이기 때문에 배열처리(-값은 담지 않음)

    //6번처리 - 반복문
    for(var i=0; i<6; i++){
        var num = Math.floor(Math.random() * 45) + 1
        //새로 추가될 숫자 1~45사이에서 랜덤하게 처리
        //random() : 0~1 사이의 랜덤한 소수
        //floor() : 내림처리해서 정수로 변경
        //0이상 45미만 실수에  +1씩 더해주면 1이상46미만 실수 중에 하나를 뽑을 수 있다

        //여기까지는 같은 숫자가 나올 수 있음(lotto는 같은 숫자가 나오면 안됨)
        for(var j in lotto){
            while(num == lotto[j]){
                num = Math.floor(Math.random() * 45) + 1
            }
        }
        //새로나온 숫자가 기존 숫자와 같으면 다시 생성
        //이때 몇개의 번호가 담겨 있을지 모르기 때문에 for in문을 사용해야 한다
        lotto.push(num);
        //push() - 배열에 마지막에 값 추가 메서드
    }
    lotto.sort(function(a,b){
        return a - b;
    });
    //오름차순으로 숫자 정렬
    document.getElementById("lottoNum").innerHTML = lotto;
}
//로또번호 추첨
 
// var arr = "";
// for(var i=0; i<=30; i++){
//     arr += " " + i;
// }
// console.log(arr); //콘솔창에 1부터 30까지 띄어쓰기로 구분해서 한줄로 출력

// var arr = "";
// var date = new Date();
// var days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// var month = date.getFullYear() + "년" + (date.getMonth() + 1) + "월 입니다.";
// console.log(month);
// //해당 월

// for(var i=1; i<=days; i++){
//     arr += " " + i;
// }
// console.log(arr);
//해당 월,일수 나열
//이 달의 마지막 날짜를 구해서 그 숫자까지 출력

// var arr = "";
// var date = new Date();
// var days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// var month = date.getFullYear() + "년" + (date.getMonth() + 1) + "월 입니다.";
// for(var i=1; i<=days; i++){
//     arr += " " + i;

//     if(i % 7 == 0){
//         arr += '\n';
//     }
// }
// console.log(arr);
//7칸 출력할 때마다 줄바꿈이 일어나도록 하기

// var arr="";
// var date = new Date();
// var days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// var month = date.getFullYear() + "년" + (date.getMonth() + 1) + "월 입니다.";

// for (var i=1; i<=days; i++){
//     if(i == 1){
//         arr +='[][]';
//     }else{
//         arr += " " + i;
//     }

//     if(i % 7 == 0){
//         arr += '\n';
//     }
// }
// console.log(arr);
//빈칸을 2개 출력하고 1일을 출력하기 시작하기

// var arr = '';
// var date = new Date();
// var toYear = date.getFullYear()
// var toMonth = date.getMonth();

// firstDay = new Date(toYear,toMonth, 1).getDay();
// lastDate = new Date(toYear,toMonth + 1, 0).getDate();

// var month = toYear + "년" + (toMonth + 1) + "월 입니다.";
// console.log(month);

// for(var bin = 0; bin < firstDay; bin++){
//     arr += "[ ]";
// }
// console.log(bin)

// for(var i=1; i<=lastDate; i++){
//     getday = new Date(toYear, toMonth, i).getDay()
//         if(getday == 0){
//             arr += "\n";
//         }
//         arr += " " + i;
// }
// console.log(arr);
//빈칸을 2개 출력했던것을, 2개 출력하지 말고
//이 달의 1일의 요일을 구해서 그 요일만큼의 빈칸을 출력하기

// var arr = '';
// var date = new Date();
// var toYear = date.getFullYear()
// var toMonth = date.getMonth();
// firstDay = new Date(toYear, toMonth, 1).getDay();
// lastDate = new Date(toYear, toMonth + 1, 0).getDate();

// var month = toYear + "년" + (toMonth + 1) + "월 입니다.";
// console.log(month);

// for(var bin=0; bin<firstDay; bin++){
//     arr += "[ ]";
// }
// console.log(bin)

// for(var i=0; i<=lastDate; i++){
//     getday = new Date(toYear, toMonth, i).getDay();
//     if(getday == 0){
//         arr += "\n"
//     }else{
//         arr += " " + i;
//     }
// }
// console.log(arr)
//빈칸을 2개 출력했던것을, 2개 출력하지 말고
//이 달의 1일의 요일을 구해서 그 요일만큼의 빈칸을 출력하기\

var arr = "";
var date = new Date();
var toYear = date.getFullYear();
var toMonth = date.getMonth();

var firstDay = new Date(toYear, toMonth, 1).getDay();
var lastDate = new Date(toYear, toMonth + 1, 0).getDate();
var lastDay = new Date(toYear, toMonth, lastDate).getDay();

console.log("1일 요일",firstDay);
console.log("이달 마지막 날짜",lastDate);
console.log("마지막 요일",lastDay);

var month = toYear + "년" + (toMonth + 1) + "월"

