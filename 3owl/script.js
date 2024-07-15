function toogleLike(element){
    var currentSrc = element.getAttribute("src");

    if (currentSrc === "./images/like.svg")
    {
        element.setAttribute("src", "./images/like-red.svg");
    }
    else {
        element.setAttribute("src", './images/like.svg');
    }
}