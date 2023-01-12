// $(function(){
//    var controller = new ScrollMagic.Controller();
//       // ScrollMagic애니메이션을 실행하기 위한 Controller를 생성
//       // new 키워드를 이용하여 새로운 인스턴스 생성

//    var tween = TweenMax.to('#animate', 0.5,{
//       backgroundColor: "#6431ff",
//       scale: 2.5,
//       rotation: 360,
//       x: 600,
//       y: 500
//    });
//       // 스크롤 될때 필요한 애니메이션 오브젝트 생성
//       // GSAP(TweenMax) 라이브러리를 사용하여 애니메이션 코드 작성

//       // var scene = new ScrollMagic.Scene();
//       //ScrollMagic 상세 옵션 설정을 위한 Scene오브젝트 생성

//    var scene = new ScrollMagic.Scene({
//       triggerElement: '#trigger1',
//          // 스크롤 애니메이션 시작 지점 설정
//       duration: '100%',
//          // duration: '100' 이면 트리고 시작지점에서 종료지점은 y축으로 100px 스크롤 되는 동안 애니메이션 실행됨
//          // 애니메이션 재생 시간 '100%' 지정하면 화면 높이에 따라 유동적으로 end위치가 정해짐
//       reverse: false
//          // 트리거의 애니메이션 시작지점부터 종료지점까지 키값을 한번만 실행시키는 scene메서드 옵션
//          // 기본값은 true
//    })
//    .setTween(tween)
//       // GSAP(TweenMax)애니메이션 오브젝트를 Scene오브젝트에 추가 설정
//       // 어떠한 객체에 스크롤이 닿으면 발생할 만들어둔 애니메이션 GSAP오브젝트를 넣어준다
//       // setTween() : 애니메이션 실행 설정 메서드

//    .addTo(controller)
//       // Scene오브젝트에 ScrollMagic을 추가하여 실행 설정
//       // addTo() : Controller실행 설정 메서드

//    .addIndicators();
//       // 디버깅을 위해 인디케이터 추가,디버깅 후에는 삭제한다.
// });

//////////////////////////////////////////////////////////////////////////////


// $(function(){
//    var controller = new ScrollMagic.Controller();
//    var scene1 = new ScrollMagic.Scene({
//       triggerElement: '#trigger1',
//       triggerHook: .8
//    })
//    .setClassToggle('#animate1', 'visible')
//    .addTo(controller)
//    .addIndicators();

//    var staggerElement = $('.animation2');
//    for(var i=0; i<staggerElement.length; i++){
//       var scene2 = new ScrollMagic.Scene({
//          triggerElement: staggerElement[i],
//          offset: 50,
//          triggerHook: .9
//       })
//       .setClassToggle(staggerElement[i],'visible')
//       .addTo(controller)
//       .addIndicators();
//    }
// })
// triggerHook
// 스크롤 시 트리거 팁이 뷰포트에 대해 상대적으로 어느 시점에 애니메이션을 보여줄지 설정하는 scene메서드의 옵션
// onEnter -> 1
// onCenter -> 0.5
// onLeave -> 0
// 기본값은 onCenter(0.5)이며 0~1 사이의 순자 또는 문자열로 작성할 수 있다.

/////////////////////////////////////////////////////////////////////////////////////////

// $(function(){
//    var controller = new ScrollMagic.Controller();

//    var scene = new ScrollMagic.Scene({
//       triggerElement: '#trigger1',
//       duration: 700,
//       offset: 150
//    })
//    .setPin('#animate')
//    .addTo(controller)
//    .addIndicators({name: "setSpin"})
// })
// offset
// 트리거의 애니메이션 시작 지점 트리거를 빠르거나 늦게 동작 시키는 scene 메서드의 옵션
// 기본값은 0이며, 양수값을 작성하면 시작 지점 트리거의 스크롤 애니메이션을 늦게 동작,
// 음수값을 작성하면 시작 지점 트리거의 스크롤 애니메이션이 빨리 시작됨

// setPin
// 트리거의 애니메이션 시작 지점부터 종료 지점까지 요소를 고정시키는 메서드
// 재생시간 동안 애니메이션 요소가 fixed 고정 상태가 되며, 애니메이션 재생지점을 벗어나면
// fixed 해제 상태가 되어 스크롤 됨
////////////////////////////////////////////////////////////////////////////////////////////

// $(function(){
//    var controller = new ScrollMagic.Controller({
//       globalSceneOption : {duration: 370}
//    });

//    var tween1 = TweenMax.to('#animate1', .3 ,{color:'#b55ffd', scale:4, y:10, rotation:360});
//    var tween2 = TweenMax.to('#animate2', .3 ,{color:'#8df157', scale:4, y:10, rotation:360});
//    var tween3 = TweenMax.to('#animate3', .3 ,{color:'#ff4189', scale:4, y:10, rotation:360});

//    var scene1 = new ScrollMagic.Scene({
//       triggerElement: '#trigger1'
//    })
//    .setClassToggle('.menu1', 'active')
//    .setTween(tween1)
//    .addTo(controller)
//    .addIndicators();

//    var scene2 = new ScrollMagic.Scene({
//       triggerElement: '#trigger2'
//    })
//    .setClassToggle('.menu2', 'active')
//    .setTween(tween2)
//    .addTo(controller)
//    .addIndicators();

//    var scene3 = new ScrollMagic.Scene({
//       triggerElement: '#trigger3'
//    })
//    .setClassToggle('.menu3', 'active')
//    .setTween(tween3)
//    .addTo(controller)
//    .addIndicators();
// })
// setClassToggle
// 트리거의 애니메이션 시작 지점부처 종료지점까지 어떠한 대상에 클래스를 넣었다 뺐다 하는 메서드
// 애니메이션 재생시간 동안 클래스가 토글되며, jquery의 toggleClass와 같음
////////////////////////////////////////////////////////////////////////////////////////////

// globalSceneOptions
// 스크롤매직 애니메이션을 여러개 구현하게 될 때 애니메이션 공통 요소를 한ㅂ던만 선엉해서 사용하는 전역 설정
// var controller = new ScrollMagic.Controller({
//    globalSceneOptions: {
//       triggerHook: 'onLeave',
//       duration: '100%'
//    }
// });
//////////////////////////////////////////////////////////////////////////////////////////////


// $(function(){
//    var controller = new ScrollMagic.Controller({
//       container: '#container'
//       // body스크롤이 아닌, 컨테이너 내부 스크롤 컨트롤
//    });

//    var tween1 = new TimelineMax();
//       tween1.add(TweenMax.to('#animate', 1, {opacity:1, x:'50%'}))
//             .add(TweenMax.to('#animate', 1, {backgroundColor: '#3b8686'}));
//             // add로 지정된 메서드는 동시 모션 실행

//    var tween2 = new TimelineMax();
//       tween2.to('#animate', .6, {y: '50%'})
//             .to('#animate', 0.4, {scale: '1.5'});

//    var scene1 = new ScrollMagic.Scene({
//       triggerElement: '#trigger',
//       triggerHook: .6,
//       duration: '50%'
//    })
//    .setTween(tween1)
//    .addTo(controller)
//    .addIndicators();

//    var scene2 = new ScrollMagic.Scene({
//       triggerElement: '#trigger',
//       triggerHook: 0
//    })
//    .setPin('#animate')
//    .setTween(tween2)
//    .addTo(controller)
//    .addIndicators();
// })
// container
// HTML body영역에서 스크롤시 trigger가 발생하는 것이 아닌, 지정한 container영역 내부에서
// 스크롤 애니메이션 동작
/////////////////////////////////////////////////////////////////////////////////////////

// $(function(){
//    var controller = new ScrollMagic.Controller({
//       globalSceneOptions: {
//          triggerHook: 'onLeave',
//          duration: '100%'
//       }
//    });

//    var slides = $('section.panel');
//    for( var i=0; i<slides.length; i++){
//       var scene = new ScrollMagic.Scene({
//          triggerElement: slides[i]
//       })
//       .setPin(slides[i], {pushFollowers: false})
//       // setPin되어있는 동안 다음 section요소가 밀려나도록 기본설정 되어있기 때문에
//       // pushFolloers:false로 이를 비활성화
//       .addTo(controller)
//       .addIndicators();
//    }
// })
// section wipe
// secrion div의 scene들의 triggerHook은 공통 옵션으로 controller에서 globalOption으로 설정
// 각각의 secrion div가 스크롤 시 시작되는 부분에 닿았을때 trigger되어야 하기 때문에 TriggerHook의 값은 'onLeave'또는 0으로 시작
// section div가 스크롤 될때마다 triggerHook에 닿으면 setPin메서드를 사용하여 고정

// $(function(){
//    var controller = new ScrollMagic.Controller();
//    var wipeAnimation = new TimelineMax();

//    wipeAnimation.fromTo('.two', 1, {x:'-100%'}, {x:'0%'})
//                 .fromTo('.three', 1, {y:'-100%'}, {y:'0%'})
//                 .fromTo('.four', 1, {x:'100%'}, {x:'0%'})

//    var scene = new ScrollMagic.Scene({
//       triggerElement: '.wrap',
//       triggerHook: 'onLeave',
//       duration: '500%'
//    })
//    .setPin('.wrap')
//    .setTween(wipeAnimation)
//    .addTo(controller)
//    .addIndicators();
// })
// section wipe 응용1

$(function(){
   var controller = new ScrollMagic.Controller();
   var wipeMotion = new TimelineMax();

   wipeMotion.to('.container', 1, {z: -180})//축소
             .to('.container', 1, {x: '-20%'})//이동구간
             .to('.container', 1, {z: '0'})//확대
               // third panel
             .to('.container', 1, {z: -180})
             .to('.container', 1, {x: '-40%'})
             .to('.container', 1, {z: '0'})
               // fourth panel
             .to('.container', 1, {z: -180})
             .to('.container', 1, {x: '-60%'})
             .to('.container', 1, {z: '0'})

             .to('.container', 1, {z: -180})
             .to('.container', 1, {x: '-80%'})
             .to('.container', 1, {z: '0'})

   var scene = new ScrollMagic.Scene({
      triggerElement: '.wrap',
      triggerHook: 'onLeave',
      duration: '600%'
   })
   .setTween(wipeMotion)
   .setPin('.wrap')
   .addTo(controller)
   .addIndicators();
})
// section wipe 응용2*****************