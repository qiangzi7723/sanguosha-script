var renwuJS = require("./src/task/renwu");
var renwu = renwuJS.renwu;

var { utilTool } = require("./src/lib/utilTool");

var { gonghuiTask } = require("./src/task/gonghui");

// console.show();
// toast("运行三国杀十周年脚本");
// launchApp("三国杀十周年");

// utilTool.decodeCapture();

// 进行公会任务 擂鼓 不可执行时，会自动退出，回到首页
gonghuiTask.init();
