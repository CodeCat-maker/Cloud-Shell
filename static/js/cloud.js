const cmd = document.querySelector(".cmd");
const spider = document.querySelector(".spider");
const input = document.querySelector(".input");

cmd.addEventListener("mouseenter", () => {
    cmd.classList.add("active");
})
cmd.addEventListener("mouseleave", () => {
    cmd.classList.remove("active");
})
spider.addEventListener("mouseenter", () => {
    spider.classList.add("active");
    setTimeout(() => {
        myChart.resize();
    }, 250);
})
spider.addEventListener("mouseleave", () => {
    spider.classList.remove("active");
    setTimeout(() => {
        myChart.resize();
    }, 300);
})

input.addEventListener("mouseenter", () => {
    input.classList.add("active");
})
input.addEventListener("mouseleave", () => {
    input.classList.remove("active");
})


