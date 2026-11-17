
let loadingPage = document.querySelector(".loadingPage");
window.addEventListener("load", function () {
        setTimeout(function () {
                loadingPage.classList.remove("show");
        }, 1501);
        setTimeout(function () {
                loadingPage.classList.remove("active");
        }, 2001);
})


// Toast.fire({
//         icon: "success",
//         title: "Signed in successfully"
// });
// playCinemaChime('pop');

