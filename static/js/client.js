
const socket = io();
const btn = document.querySelector(".btn");
const ul = document.getElementsByTagName("ul")[0];
const terminal = document.querySelector(".terminal");
btn.onclick = emit;


socket.on("message", (data) => {
    if (data.stderr != "") {
        back = data.stderr;
    } else {
        back = data.back;
    }
    if (back == '') {
        back = "success";
    }
    addNew(back);
})

function addNew(data) {
    let li = document.createElement("li");
    li.innerText = data;
    console.log(ul);
    ul.appendChild(li);
    input.value = "";
}
input.onkeydown = function (e) {
    if (e.keyCode == 13) {
        emit();
    }
}
function emit() {
    let shell = document.querySelector(".input").value;
    addNew("> " + shell);
    socket.emit("message", shell);
    terminal.scrollTop = terminal.scrollHeight;
}