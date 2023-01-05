// gsap.to('.tweenbox', 3, {
// 	marginLeft: 300,
// 	backgroundColor: '#ccc',
// 	border: '2px solid #222',
// 	borderRadius: 30
// });

// gsap.from('.tweenbox1', 3, {
// 	marginLeft: 300,
// 	backgroundColor: '#ccc',
// 	border: '2px solid #222',
// 	borderRadius: 30
// });

// gsap.fromTo('.tweenbox2', 5, {                                                                                                                   
//         x:0, 
//         backgroundColor:'lightcoral', 
//         border:'2px solid crimson'
//     }, 
//     {
//         x:300, 
//         backgroundColor:'#ccc', 
//         border:'2px solid #222', 
//         borderRadius:30
//     }
// );
// //from에서 지정된 값에서 to가 지정된 값으로 트윈

// function tweenStaggerTo(){
// 	var m0 = document.getElementById("e0");
// 	var m1 = document.getElementById("e1");
// 	var m2 = document.getElementById("e2");
// 	var m3 = document.getElementById("e3");
// 	var m4 = document.getElementById("e4");
// 	TweenMax.staggerTo([m0, m1, m2, m3, m4], 1, { rotation:180 }, 0.5);
//     //TweenMax.staggerTo([객체1, 객체2, 객체3], 시간, {트윈 모션}, 모션 사이의 딜레이 시간);
// }

// TweenMax.staggerFrom('.tweenbox4-1', 1, {
// 	ease: Back.easeOut,
// 	opacity: 0,
// 	y: 200,
// 	delay: 0.5
// }, 0.2);

// var timeLine = new TimelineMax();
// timeLine.to('.tweenbox5-1', 1, { backgroundColor: '#ddd' })
// 	.to('.tweenbox5-1', 1, { backgroundColor: 'cyan' })
// 	.to('.tweenbox5-1', 1, { backgroundColor: '#ccc' });



//     // GSAP Callback (트윈 제어 - 콜백 함수)

// $(function(){
//     gsap.to('.tweenbox6', 3, {
//         marginLeft: 300,
//         backgroundColor: '#ccc',
//         border: '2px solid #222',
//         borderRadius: 30,
//         onInit: motionOnit
//     });

//     function motionOnit() {
//         alert('GSAP Tween 콜백함수 시작 전'); 
//     }
// });
// // Tween이 시작되기 바로 전에 호출
// // onStart와 별 차이가 없지만, 당연히 onStart 보다 빨리 호출됨

// $(function(){
//     gsap.to('.tweenbox7', 3, {
//         marginLeft: 300,
//         backgroundColor: '#ccc',
//         border: '2px solid #222',
//         borderRadius: 30,
//         onComplete: motionOncomplete
//     });

//     function motionOncomplete() {
//         alert('GSAP Tween 콜백함수 종료');
//         gsap.to('.tweenbox', 3, {
//             marginLeft: 0,
//             backgroundColor: 'lightcoral',
//             border: '2px solid crimson',
//             borderRadius: 0
//         }); 
//     }
// });
// // 애니메이션(Tween)이 종료되었을 때 함수를 호출



//     // Event(함수) + Params
// $(function(){
//     var outText = document.querySelector(".motion-message");
//     gsap.to('.tweenbox8-1', 3, {
//         marginLeft: 300,
//         backgroundColor: '#ccc',
//         border: '2px solid #222',
//         borderRadius: 30,
//         onStart: motionMessage,
//         onStartParams: ['GSAP Tween 콜백함수 시작 메시지','START'],
//         onComplete: motionMessage,
//         onCompleteParams: ['GSAP Tween 콜백함수 종료 메시지', 'END']
//     });

//     function motionMessage(message1, message2) {
//         outText.innerHTML += message1 + '-' + message2 + '<br>';
//     }
// });
// 애니메이션(Tween) 중 호출하고자 하는 함수 뒤에 Params 파라미터를 붙여 줄 수 있음
// 코드 문법 규칙 
// 배열의 형태로 값을 넘겨주어야 함
// 자기 자신의 값을 넘겨줄 때에는 "{self}"라고 값을 주어야 함

    // bezier 속성인 curviness, autoRotate, type 속성을 이용한 bezier 곡선
$(function(){
    TweenMax.to('.tweenbox9', 3, {
        bezier: [
        {top:200, left:200},
        {top:0, left:400},
        {top:100, left:600}
        ], ease: Power1.easeInOut, repeat: -1, yoyo: true
    });
});
//tweenmax와 gsap동시사용 불가