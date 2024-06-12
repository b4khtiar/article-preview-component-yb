var popup = document.getElementById("share-popup");
var shareButton = document.getElementById("share-button");

shareButton.addEventListener("click", function () {
    if (popup.classList.contains("popup--open")) {
        popup.classList.remove("popup--open");
        popup.classList.add("popup--closing");
        setTimeout(function () {
            popup.classList.remove("popup--closing");
        }, 300)
    } else {
        popup.classList.add("popup--open");
    }
    shareButton.classList.toggle("share--active");
});

