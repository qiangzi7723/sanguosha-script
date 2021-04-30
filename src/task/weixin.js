// 打开微信并自动发送消息
function Weixin() {}

Weixin.prototype.sendText = function (data) {
	launchApp("微信");
	sleep(500);
	// 微信分身处理
	click("微信");
	sleep(500);
	// 发送给脚皮哥
	click("脚皮哥");
	className("EditText").findOne().setText(JSON.stringify(data));
	text("发送").click();
};

module.exports = {
	weixin: new Weixin(),
};
