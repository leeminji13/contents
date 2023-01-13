const $sky = document.querySelector(".sky");
// 별을 추가할 요소


window.onresize = () => {
    makeStars();
}
// 브라우저 창의 크기에 변화가 생길 때 새로운 별 생성
var makeStars = () => {
    const maxSize = Math.max(window.innerWidth, window.innerHeight)
    // 브라우저 가장 큰 크기

    const getRandomX = () => Math.random() * maxSize;
    // 랜덤한 x 위치 값

    const getRandomY = () => Math.random() * maxSize;
    // 랜덤한 y 위치 값

    const randomRadius = () => Math.random() * 0.7 + 0.6;
    const _size = Math.floor(maxSize / 2);

    const htmlDummy = new Array(_size).fill().map((_, i) => {
        return `<circle class='star'
            cx=${getRandomX()}
            cy=${getRandomY()}
            r=${randomRadius()}
            className="star" />`
    }).join('');
    $sky.innerHTML = htmlDummy;
}
    // 랜덤한 값을 얻을 수 있는 함수를 makeStars 함수 안에 넣고 resize이벤트를 걸어준다
    // 이러면 창에 변화가 생길 때 마다 makeStars 함수가 실행되고, 새로운 maxSize를 구할 수 있다.

window.onload = () => {
    makeStars();
}




