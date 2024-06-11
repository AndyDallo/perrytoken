window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };


let PosX = 0;
let PosY = 0
let scrollX = 0
let scrollY = 0
if (window.matchMedia("(min-width: 768px)").matches) {
    window.onscroll = () => {
        scrollY = window.scrollY
        const cursor = document.getElementById('cursor')
        const subCursor = document.getElementById('sub_cursor')
        cursor.style.transform = `translate3d(${PosX -25 }px, ${PosY + scrollY -25 }px, 0)`;
        subCursor.style.transform = `translate3d(${PosX -15 }px, ${PosY + scrollY -15 }px, 0)`;
    }
    window.onmousemove = (e) => {
        PosX = e.clientX
        PosY = e.clientY
        const cursor = document.getElementById('cursor')
        const subCursor = document.getElementById('sub_cursor')
        cursor.style.transform = `translate3d(${PosX - 25}px, ${PosY + scrollY - 25}px, 0)`;
        subCursor.style.transform = `translate3d(${PosX - 15}px, ${PosY + scrollY - 15}px, 0)`;
    }
    openDoor()
}



window.onload = () => {

}

function openDoor() {
    const yesBtn = document.getElementsByClassName('yes')
    const leftDoor = document.getElementsByClassName('left_door')
    const rightDoor = document.getElementsByClassName('right_door')
    const question = document.getElementById('question')
    const perry_img = document.getElementsByClassName('img_perry')
    const audio = document.getElementById('myAudio')
    yesBtn[0].addEventListener('click', ()=> {
            leftDoor[0].style.transform = `translate3d(-50vw, 0, 0)`
            rightDoor[0].style.transform = `translate3d(50vw, 0, 0)`
            question.style.opacity = 0
            question.style.visibility = 'none'
            perry_img[0].style.transform = 'none'
            document.body.style.overflow = 'initial'
            audio.play()
    })
    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play(); 
    });
}


if (window.matchMedia("(max-width: 768px)").matches) {
    const yesBtn = document.getElementsByClassName('yes')
    const leftDoor = document.getElementsByClassName('left_door')
    const rightDoor = document.getElementsByClassName('right_door')
    const question = document.getElementById('question')
    const undercover = document.getElementById('undercover')
    const app = document.getElementById('app')
    const perry_img = document.getElementsByClassName('img_perry')
    const audio = document.getElementById('myAudio')
    yesBtn[0].addEventListener('click', ()=> {
             undercover.style.opacity = 0
            undercover.style.visibility = 'none'
            question.style.opacity = 0
            app.style.display = 'flex'
            question.style.visibility = 'none'
            perry_img[0].style.transform = 'none'
            document.body.style.overflow = 'initial'
            audio.play()
    })
    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play(); 
    });
}
