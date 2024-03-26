(function () {
    const menuBtn = document.querySelector("#menu");

    const showMoreBtn = document.querySelector("#showMore");
    const morePictures = document.querySelectorAll(
        ".gallery img:not(img:first-child)"
    );
    const showMoreTekst = document.querySelector("#more");
    const showLessTekst = document.querySelector("#less");

    const figure = document.querySelector(".intro figure")

    let picHidden = true;

    menuBtn.addEventListener("click", function () {
        menuBtn.ariaExpanded = !(menuBtn.ariaExpanded === "true");
    });

    
    
    showMoreBtn.addEventListener("click", function () {
        morePictures.forEach((element) => {
            
            element.className = picHidden ? "visableImg" : "";
        });
        showLessTekst.className = picHidden ? "visableImg" : "";
        showMoreTekst.className = !picHidden ? "visableImg" : "";

        picHidden = !picHidden;
    });





    const span = document.createElement("span");

    span.className = "imgSpan"

    figure.appendChild(span);

    figure.addEventListener("mouseover", function () {
        span.style.display = "initial"
    });

    figure.addEventListener("mousemove", function (event){
        const y = event.clientY - event.target.getBoundingClientRect().top
        const x = event.clientX - event.target.getBoundingClientRect().left;

        span.innerText = Math.floor(x) + ", " + Math.floor(y);
    })

    figure.addEventListener("mouseout", function () {
        span.style.display = "none";
    });









    showMoreBtn.click();
})();
