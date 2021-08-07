const cloud = require("../moudles/cloud.js");
let app = {
    spirder: (io) => {
        io.on("connection", (socket) => {
            console.log("用户加入使用");

            socket.on("message", (shell) => {
                cloud.shell(shell, socket);
            })
        })

    }
}
module.exports = app;