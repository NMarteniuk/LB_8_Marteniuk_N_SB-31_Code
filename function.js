function checkSymbol(kc) {
    if (kc < 48 || kc > 57)
        return false;
    return true;
}
function handleClick(event) {
    const target = event.target;
    if (target.tagName === 'A') {
        window.location = target.href;
    } else {
        showCustomMenu(false, event.clientX, event.clientY);
    }
}
function showCustomMenu(sign, x, y) {
    var cm = document.getElementById("custommenu");
    if (sign)
        cm.style.visibility = 'visible';
    else
        cm.style.visibility = 'hidden';
    cm.style.position = 'absolute';
    cm.style.left = x + "px";
    cm.style.top = y + "px";
}
function doAction(actionType) {
    var style;
    var currentFontSize;
    switch (actionType) {
        case "copy":
            break;
        case "close":
            window.close();
            break;
        case "fontIncrease":
            style = window.getComputedStyle(document.body);
            currentFontSize = parseFloat(style.fontSize);
            if (currentFontSize <= 30) {
                document.body.style.fontSize = (currentFontSize+2) + "px";
            }
            break;
            break;
        case "fontDecrease":
            style = window.getComputedStyle(document.body);
            currentFontSize = parseFloat(style.fontSize);
            if (currentFontSize >= 6) {
                document.body.style.fontSize = (currentFontSize-2) + "px";
            }
            break;
        case "changeBkg":
            var elems = document.getElementsByClassName("content-color");
            var elem1 = document.querySelector("header");
            var currentBkgImage = window.getComputedStyle(elems[0]).getPropertyValue("background-image");
            console.log(currentBkgImage);
            var image1 = 'img/body-gradient.jpg';
            var image2 = 'img/body-gradient1.jpg';
            var headerImage1 = 'img/body-gradient2.jpg';
            var headerImage2 = 'img/body-gradient.jpg';
            if (currentBkgImage.includes(image1)) {
                elems[0].style.backgroundImage = `url(${image2})`;
                elem1.style.backgroundImage = `url(${headerImage1})`;
            } else {
                elems[0].style.backgroundImage = `url(${image1})`;
                elem1.style.backgroundImage = `url(${headerImage2})`;
            }
            break;
    }
}

