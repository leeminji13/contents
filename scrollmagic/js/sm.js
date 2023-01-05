$(function(){
	var controller = new ScrollMagic.Controller();	// 1. ScrollMagic 컨트롤러 생성

	var tween = TweenMax.to('#animate', 0.5, {	//2. animation object 생성
		backgroundColor: "#6431ff",
		scale: 2.5,
		rotation: 360,
		x: 600,
		y: 500
	});

	var scene = new ScrollMagic.Scene({	//3. Scene object 생성
		triggerElement: '#trigger1',	//스크롤 애니메이션 시작 지점 설정
		duration: '100%', //애니메이션 재생 시간 '100%'지정하면 화면 높이에 따라 유동적으로 end위치가 정해짐
        reverse: true,	// 기본값은 true로 애니메이션의 키값은 스크롤 될때마다 실행되지만, 트리거의 키 값 애니메이션을 한번만 보여주고 싶을 경우에는 값을 false로 설정
	})
	.setTween(tween)	//4. 2번을 3번에 추가
	.addTo(controller)	//5. 1번(controller)을 3번에 추가
	.addIndicators();
})



// ScrollMagic 애니메이션을 실행하기 위한 Controller를 생성, new키워드를 이용하여 새로운 인스턴트 생성

//  var controller = new ScrollMagic.Controller();


// 스크롤 될때 필요한 애니메이션 오브젝트를 생성
// GSAP(TweenMax)라이브러리를 사용하여 애니메이션 코드를 작성

//  var tween = TweenMax.to('#animate',0.5,{
//      backgroundColor: "#6431ff"
//      scale: 2.5,
//      rotation: 360,
//      x: 600,
//      y: 500
// })


//ScrollMagic상세 옵션 설정을 위한 Scene오브젝트 생성

// var scene = new ScrollMagic.Scene();

// Scene오브젝트에 어떠한 객체에서 동작해야 할 상세 스크롤(애니메이션 등)을 위한 옵션 설정
// 1. 어떠한 객체(.trigger 또는 #trigger)에서 Scene이 발생할지 트리거르 설정
// (어떠한 객체에 스크롤이 닿으면 애니메이션이 발생할지 지정해주는것)
// 2. GSAP(TweenMax)애니메이션 오브젝트를 Scene오브젝트에 추가
// (어떠한 객체에 스크롤이 닿으면 발생할 만들어둔 애니메이션 GSAP오브젝트를 넣어줌)
// 3. Scene오브젝트에 ScrollMafig Controller를 추가하여 실행 설정
// Controller실행 설정 메서드 : addTo()
// 4. 디버깅을 위해 인디케이터 추가(디버깅 후 삭제)
// 디버깅 실행 설정 메서드 : addIndicators()