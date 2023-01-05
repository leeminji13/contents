//상단 헤더
// const navBtn = document.getElementById("navBtn")
// const navOpen = document.getElementById("navOpen")
// console.log(navBtn)

// function navClick(){
//     navOpen.classList.toggle("open");
// }
// navBtn.addEventListener("click", navClick)

//오른쪽 fixed nav
const navBtn = document.getElementById("navBtn")
const navOpen = document.getElementById("navOpen")
const body = document.querySelector('body')
console.log(navBtn)

function navClick(){
    navOpen.classList.toggle("open");
    body.classList.toggle("overhidden")
}
navBtn.addEventListener("click", navClick)