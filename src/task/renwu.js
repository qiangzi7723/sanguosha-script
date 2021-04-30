var utilJS = require("../lib/utilTool");
var utilTool = utilJS.utilTool;

var weixinJS = require("./weixin");
var weixin = weixinJS.weixin;

var shouye = require("../asset/page/shouye");

// 首页日常任务
function Renwu() {}

Renwu.prototype.init = function () {};

module.exports = {
	renwu: new Renwu(),
};
