const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn');
const loginBox = document.querySelector(".loginBox");
left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
})
left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
})
right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
})
right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
})
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        loginBox.style.display = "block";
    })
})
document.querySelector(".LoginBtn").addEventListener("click", () => {
    window.location.href = "/cloud";
    alert("登陆成功");
    return false;
})