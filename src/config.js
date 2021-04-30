var { accessToken } = require("../secret");

var config = {
	accessToken: accessToken,
	webimageLoc: "https://aip.baidubce.com/rest/2.0/ocr/v1/webimage_loc",
	basic: "https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic",
};

module.exports = {
	config: config,
};
