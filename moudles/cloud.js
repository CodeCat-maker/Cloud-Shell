const child_process = require('child_process');
const exec = child_process.exec;
let app = {
    shell: (cmd, io) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                data = {
                    type: "shell",
                    shell: cmd,
                    back: error,
                    stderr
                }
            } else {
                data = {
                    type: "shell",
                    shell: cmd,
                    back: stdout,
                    stderr
                }
            }
            console.log(data);
            io.emit("message", data);
        })
    }
}
module.exports = app;