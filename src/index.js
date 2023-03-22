let btns = document.querySelectorAll("button");

btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let nextSibling = btn.nextElementSibling.firstElementChild;
        console.log(nextSibling);
        if (nextSibling.classList.contains("open")) {
            nextSibling.classList.remove("open");
        } else {
            nextSibling.classList.add("open");
        }
        console.log(btn);
    });
});
