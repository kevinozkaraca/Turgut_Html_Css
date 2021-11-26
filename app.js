//DEBUT code de l'animation des yeux

let pupillesMoove = document.getElementsByClassName("pupilles");

document.onmousemove = function () {

    let x = event.clientX * 100 / window.innerWidth + "%" ;
    let y = event.clientY * 100 / window.innerHeight + "%" ;

    for (let i = 0 ; i < 2 ; i++) {

        pupillesMoove[i].style.left = x ;
        pupillesMoove[i].style.top = y ;
        pupillesMoove[i].style.transform = "translate(-" + x + ", -" + y + ")" ;
    }
    
}
//FIN code de l'animation des yeux