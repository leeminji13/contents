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


$(function(){
   var controller = new ScrollMagic.Controller();
   var scene1 = new ScrollMagic.Scene({
      triggerElement: '#trigger1',
      triggerHook: .8
   })
   .setClassToggle('#animate1', 'visible')
   .addTo(controller)
   .addIndicators();

   var staggerElement = $('.animation2');
   for(var i=0; i<staggerElement.length; i++){
      var scene2 = new ScrollMagic.Scene({
         triggerElement: staggerElement[i],
         offset: 50,
         triggerHook: .9
      })
      .setClassToggle(staggerElement[i],'visible')
      .addTo(controller)
      .addIndicators();
   }
})
// triggerHook
// 스크롤 시 트리거 팁이 뷰포트에 대해 상대적으로 어느 시점에 애니메이션을 보여줄지 설정하는 scene메서드의 옵션
// onEnter -> 1
// onCenter -> 0.5
// onLeave -> 0
// 기본값은 onCenter(0.5)이며 0~1 사이의 순자 또는 문자열로 작성할 수 있다.

/////////////////////////////////////////////////////////////////////////////////////////

