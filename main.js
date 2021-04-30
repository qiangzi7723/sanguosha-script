var utilTool = require("./src/lib/util.js");
var demo = require("./src/asset/demo");
toast("开始逐鹿天下脚本");
// launchApp("三国杀十周年");

console.show();

// //请求横屏截图
threads.start(function () {
	var beginBtn;
	if (
		(beginBtn = classNameContains("Button")
			.textContains("立即开始")
			.findOne(2000))
	) {
		sleep(1000);
		beginBtn.click();
	}
	toast("点击屏幕");
});

var img = utilTool.util.capture();
var imgBase = images.toBase64(img);

var url =
	"https://aip.baidubce.com/rest/2.0/ocr/v1/accurate?access_token=24.9be9aa9c1d575bf54d97df9dce40d5ee.2592000.1622345789.282335-24095742";

var res = http.post(url, {
	image: imgBase,
});

var result = res.body.json().words_result;
log(result);
result.map(function (item) {
	if (item.words == "动冒险") {
		log(item);
		click(item.location.left + 50, item.location.top + 50);
	}
});
