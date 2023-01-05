const def = new Map([
    [
      "slide1", // element 이름
      {
        id: "slide1",
        top: 500, // element의 시작점
        bottom: 1900, // element의 끝점
        topStyle: { // element의 시작 스타일
          opacity: 0,
          translateY: -60,
        },
        bottomStyle: { // element의 끝 스타일
          opacity: 0,
          translateY: 60,
        },
        animations: [
          {
            enabled: false, // 애니메이션 활성화 여부
            top: 500, // 애니메이션 시작점
            bottom: 1900, // 애니메이션 끝점
            easing: midSlow, // Easing Function
            styles: [ // 애니메이션 시 변경될 스타일
              {
                name: "translateY", // 스타일 이름
                topValue: 60, // 진행률 0% 일 때의 스타일
                bottomValue: -60, // 진행률 100% 일 때의 스타일
              },
            ],
          },
          {
            enabled: false,
            top: 500,
            bottom: 800,
            easing: ease,
            styles: [
              {
                name: "opacity",
                topValue: 0,
                bottomValue: 1,
              },
            ],
          },
          {
            enabled: false,
            top: 1400,
            bottom: 1900,
            easing: easeIn,
            styles: [
              {
                name: "opacity",
                topValue: 1,
                bottomValue: 0,
              },
            ],
          },
        ],
      },
    ],
    // 중략
  ]);
  const elements = {
    "sticky-container": document.getElementById("sticky-container"),
    "scroll-down": document.getElementById("scroll-down"),
    slide1: document.getElementById("slide1"),
    slide2: document.getElementById("slide2"),
    slide3: document.getElementById("slide3"),
    "moving-background": document.getElementById("moving-background"),
    slide4: document.getElementById("slide4"),
    slide5: document.getElementById("slide5"),
  };
  
  function initAnimation() {
    // Sticky Conainer 의 높이를 설정함.
    elements["sticky-container"].style.height = `7100px`;
  
    // 모든 요소를 disabled 에 넣음.
    def.forEach((obj, id) => {
      disabled.set(id, obj);
    });
  
    // 초기 스타일 적용
    disabled.forEach((obj, id) => {
      Object.keys(obj.topStyle).forEach((styleName) => {
        const pushValue = obj.topStyle[styleName];
        applyStyle(elements[id], styleName, pushValue);
      });
    });

//  * DOM 요소에 스타일을 적용하는 함수
//  * @param {HTMLElement} element
//  * @param {*} styleName
//  * @param {number} value
function applyStyle(element, styleName, value) {
    if (styleName === "translateY") {
      element.style.transform = `translateY(${value}px)`;
      return;
    }
  
    if (styleName === "translateX") {
      element.style.transform = `translateX(${value}px)`;
      return;
    }
  
    element.style[styleName] = `${value}`;
  }
  
    // 이미 요소의 범위 및 애니메이션의 범위에 있는 것들을 렌더링하기 위해
    // 임의로 스크롤 이벤트 핸들러를 한 번 실행시킴.
    onScroll();
  }
  
  initAnimation();
  
  window.addEventListener("scroll", onScroll);


//  * 스타일에 대해 실제 값을 계산하여 적용하는 함수
//  * @param {string} id
//  * @param {any[]} styles
//  * @param {number} rate

function applyStyles(id, styles, rate) {
    styles.forEach((style) => {
      const { name, topValue, bottomValue } = style;
      const value = getPoint(topValue, bottomValue, rate);
      applyStyle(elements[id], name, value);
    });
  }
  

//  * 현재 스크롤 높이를 기준으로 특정 Element의 애니메이션을 모두 적용시킵니다.
//  * @param {number} currentPos
//  * @param {string} id
 
function applyAnimations(currentPos, id) {
    const animations = def.get(id)?.animations;
    if (!animations) {
      return;
    }
  
    animations.forEach((animation) => {
      const { top: a_top, bottom: a_bottom, easing, styles } = animation;
      const isIn = isAmong(currentPos, a_top, a_bottom);
      // 만약 애니메이션이 새롭게 들어갈 때 혹은 나갈때 enabled 설정
      if (isIn && !animation.enabled) {
        animation.enabled = true;
      }
  
      // 만약 애니메이션 범위 밖에 있다면 enabled 해제하면서 스타일 초기화
      else if (!isIn && animation.enabled) {
        if (currentPos <= a_top) {
          applyStyles(id, styles, 0);
        } else if (currentPos >= a_bottom) {
          applyStyles(id, styles, 1);
        }
        animation.enabled = false;
      }
  
      // 애니메이션이 enabled 라면, 애니메이션 적용.
      if (animation.enabled) {
        const rate = easing((currentPos - a_top) / (a_bottom - a_top));
        applyStyles(id, styles, rate);
      }
    });
  }
  
  function onScroll() {
    // 현재 스크롤 위치 파악
    const scrollTop = window.scrollY || window.pageYOffset;
    const currentPos = scrollTop + window.innerHeight / 2;
  
    // disabled 순회하며 활성화할 요소 찾기.
    disabled.forEach((obj, id) => {
      // 만약 칸에 있다면 해당 요소 활성화
      if (isAmong(currentPos, obj.top, obj.bottom)) {
        enabled.set(id, obj);
        elements[id].classList.remove("disabled");
        elements[id].classList.add("enabled");
        disabled.delete(id);
      }
    });
  
    // enabled 순회하면서 헤제할 요소를 체크
    enabled.forEach((obj, id) => {
      const { top, bottom, topStyle, bottomStyle } = obj;
  
      // 범위 밖에 있다면
      if (!isAmong(currentPos, top, bottom)) {
        // 위로 나갔다면 시작하는 스타일 적용
        if (currentPos <= top) {
          Object.entries(topStyle).forEach(([styleName, value]) => {
            applyStyle(elements[id], styleName, value);
          });
        }
        // 아래로 나갔다면 끝나는 스타일적용
        else if (currentPos >= bottom) {
          Object.entries(bottomStyle).forEach(([styleName, value]) => {
            applyStyle(elements[id], styleName, value);
          });
        }
  
        // 리스트에서 삭제하고 disabled로 옮김.
        disabled.set(id, obj);
        elements[id].classList.remove("enabled");
        elements[id].classList.add("disabled");
        enabled.delete(id);
      }
  
      // enable 순회중, 범위 내부에 제대로 있다면 각 애니메이션 적용시키기.
      else {
        applyAnimations(currentPos, id);
      }
    });
  }