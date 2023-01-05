const date = new Date();

const renderCalender = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    document.querySelector('.yearMonth').textContent = `${viewYear}년 ${viewMonth + 1}월`

    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth +1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();
    // 지난달 마지막 날짜(PLDate)와 요일(PLDay), 이번달 마지막 날짜와 요일(TLDate, TLDay)

    const prevDates = []
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];
    // 전체 달력에 필요한 날짜들
    // 자닌달 날짜와 다음달 날짜는 상황에 따라 그릴 수도, 않을 수도 있기 때문에 
    // 일단 초기값은 빈 배욜로 둠
    // 1.Array(n)으로 배열을 만들면 길이가 n인 배열이 생성(이때 모든 요소들은 undefined)
    // 2.그런데 모든 요소들이 empty값이기 때문에 keys()메서드를 활용하면 0부처 n-1까지의
    // Array Iterator가 생성되는데,
    // 전개 구문을 통해서 이 Array Iterator를 배열로 만들어 내면 0부터 n-1까지의 배열을 얻어낼 수 있음
    // 그래서 이번 달 마지막 날짜 +1을 n에 전달해주고
    // 제일 앞에있는 0을 없애기 위해서 slice메서드 활용

    if(PLDay !== 6){
        for(let i = 0; i < PLDay + 1; i++){
            prevDates.unshift(PLDate - i);
        }
    }
    for (let i = 1; i < 7 - TLDay; i++){
        nextDates.push(i);
    }
    // prevDates와 nextDates를 단순 반복문으로 채움

    const dates = prevDates.concat(thisDates, nextDates);
    // 이전 달과 다음 달 부분의 투명도를 조절하기 위해 date를 그리는 부분의 html수정
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex +1
                          ? 'this'
                          : 'other';
        dates[i] = `<div class="date"><p class="${condition}">${date}</p></div>`;
    })

    document.querySelector('.dates').innerHTML = dates.join('')
    // concat메서드를 통해 세 배열을 합친 다음, forEach메서드로 전체 요소들을 돌면서
    // html 코드로 데이터를 하나씩 수정 -> .dates태그의 innerHTML 프로퍼티에 
    // dates배열에 join메서드를 호출한 결과를 할당

    // 오늘 날짜 표시
    const today = new Date();
    if(viewMonth === today.getMonth() && viewYear === today.getFullYear()){
        for(let date of document.querySelectorAll('.this')){
            if(+date.innerText === today.getDate()){
                date.classList.add('today');
                break;
            }
        }
    }
    // 1. new Date()를 통해 오늘 날짜에 맞는 date객체를 새로 만들어주고
    // 2. viewMonth와 viewYear가 today의 데이터와 같은지 비교
    // 3. 2번이 충족된다면 this라는 클래스를 가진 태그들을 모두 찾아 반복문을 돌려준다.
    // 4. 해당 태그가 가지고 있는 날짜는 문자열이기 때문에 +단항 연산자를 통해 숫자로 변경한 뒤 오늘 날짜와 비교
    // 5. 4번이 충족되면 해당 태그에 today라는 클래스 추가 -> break로 반복문 종료
    // break를 하는 이유는 오늘 날짜는 하나밖에 없기 때문에 찾으면 더 이상 뒤의 반복을 할 필요 없음
}
renderCalender();

// 지난 달, 오늘, 다음 달로 이동하는 함수
// 위의 함수를 버튼에 이벤트로 넣는다
const prevMonth = () => {
    // date.setMonth(date.getMonth() - 1);
    // renderCalender();
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    renderCalender();
}

const nextMonth = () => {
    // date.setMonth(date.getMonth() + 1);
    // renderCalender();
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    renderCalender();
}

const goToday = () => {
    date = new Date();
    renderCalender();
}



