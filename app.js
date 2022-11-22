function moverPosicionRandom(elm) {
    elm.style.position = `absolute`;
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + `px`;
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + `px`;
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divchaoAlejandro = document.getElementsByClassName("chaoAlejandro")[0];
let divVideo = document.getElementById(`video`);

btnNo.addEventListener(`mouseenter`, function(e) { moverPosicionRandom (e.target) });

btnSi.addEventListener(`click`, function (e) {
    alert(`sabia que dirias que si jejej`)

    divVideo.style.display = `none`;
    btnNo.style.display= `none`;
    divchaoAlejandro.style.display = `block`;
   
});
