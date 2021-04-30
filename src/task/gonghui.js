var utilJS = require("../lib/utilTool");
var utilTool = utilJS.utilTool;

var shouye = require("../asset/page/shouye");
var gonghui = require("../asset/page/gonghui/gonghui");
var huodong = require("../asset/page/gonghui/huodong");

// 公会任务
function GonghuiTask() {}

GonghuiTask.prototype.init = function () {
	utilTool.clickButton(shouye, "公会");
	utilTool.clickButton(gonghui, "活动");

	while (!utilTool.findText("消耗元宝20")) {
		// 说明还可以擂鼓
		utilTool.clickButton(huodong, "擂鼓");
	}

	utilTool.clickBack();
};

module.exports = {
	gonghuiTask: new GonghuiTask(),
};
