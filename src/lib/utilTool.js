var configJS = require("../config.js");
var config = configJS.config;

var { weixin } = require("../task/weixin");

function UtilTool() {
	this.rect = 10;
	this.context = {
		agreeThread: false,
	};
}

UtilTool.prototype.setContext = function (key, value) {
	this.context[key] = value;
};

UtilTool.prototype.getContext = function () {
	return this.context;
};

UtilTool.prototype.clickBack = function () {
	click(134 + this.rect, 23 + this.rect);
};

// 遍历位置，点击按钮
UtilTool.prototype.clickButton = function (arrays, name) {
	var flag = false;
	for (var i = 0; i < arrays.length; i++) {
		var item = arrays[i];
		if (item.words.includes(name)) {
			// 说明存在当前按钮
			click(
				item.location.left + item.location.width / 2,
				item.location.top + item.location.height / 2
			);
			toast("点击了按钮：" + name);
			flag = true;
			sleep(1000);
			break;
		}
	}
	if (!flag) {
		toast("没有遍历到按钮");
	}
};

// 截图
UtilTool.prototype.capture = function () {
	if (!this.context.agreeThread) {
		this.context.agreeThread = true;
		this.agreeCapture();
		requestScreenCapture(true);
	}
	sleep(1000);
	return captureScreen();
};

//请求横屏截图
UtilTool.prototype.agreeCapture = function () {
	threads.start(function () {
		var beginBtn;
		if (
			(beginBtn = classNameContains("Button")
				.textContains("立即开始")
				.findOne(2000))
		) {
			beginBtn.click();
			// toast("点击同意截图");
		}
	});
};

// 通过百度OCR获取相关控件信息
UtilTool.prototype.ocr = function (img, mode) {
	// 百度OCR价格过高，因此放弃自动化的OCR方案，而是通过使用OCR，把控件位置获取下来，然后再进行脚本控制
	var host = config.webimageLoc;
	if (mode == "basic") {
		host = config.basic;
	}
	var url = host + "?access_token=" + config.accessToken;

	var response = http.post(url, {
		image: images.toBase64(img),
	});
	var body = response.body.json();
	return body.words_result;
};

// 截图并投过OCR进行分析
UtilTool.prototype.captureWithOcr = function (mode) {
	sleep(500);
	var img = this.capture();
	var page = this.ocr(img, mode);
	return page;
};

UtilTool.prototype.findText = function (text) {
	var page = this.captureWithOcr("basic");
	var result = page.find(function (item) {
		if (item.words == text) {
			return true;
		}
	});
	return result;
};

// 自动截取当前页面内容，并发送微信
UtilTool.prototype.decodeCapture = function () {
	var img = this.capture();
	var page = this.ocr(img);
	weixin.sendText(page);
};

module.exports = {
	utilTool: new UtilTool(),
};
