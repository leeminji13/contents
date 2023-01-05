const absTxt = document.getElementsByClassName("absTxt")
const box = document.getElementsByClassName("box")
console.log(absTxt)
console.log(box)

// function mouseOn(){
//     absTxt[0].classList.add("dflex");
// }
// box[0].addEventListener("mouseover", mouseOn)
// addEventListener의 경우 html dom의 메서드 중 하나이기  때문에
// docuemnt.getElementById 같은 객체 요소가 필요함
// [index]를 작성해야됨
console.log(absTxt.length)
for(var i = 0; i < absTxt.length; i++){
    box[i].addEventListener('mouseover',function(e){
        for(var j = 0; j < absTxt.length; j++){
            box[j].classList.remove('on');
        }
        this.classList.add('on');
    })
}