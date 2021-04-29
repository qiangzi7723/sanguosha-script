var { coordinate } = require("../config.js");
function Util() {}

Util.prototype.click = function (name) {
	for (var key in coordinate) {
		if (key == name) {
			toast("点击了按钮：" + name + " 位置：" + coordinate[key]);
			// 点击事件 坐标系*2 因为截图时是一倍稿
			click(coordinate[key][0] * 2 + 100, coordinate[key][1] * 2 + 100);
		}
	}
};

module.exports = {
	util: new Util(),
};
