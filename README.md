## 三国杀十周年脚本

基于 Auto.js 实现，已经实现初步版本，后续优化，及加上其他功能

功能实现：

1、自动完成公会擂鼓

思路分析：

基于 OCR 功能，进行分析，获取当前游戏页面的所有可点击控件。并针对任务的完成状态展开分析，如果当前任务不可再执行，会回到首页，接着执行其他任务逻辑；

注意：

未进行分辨率适配，目前仅支持在 1920\*1080 的设备下运行。另，需要自行获取百度 OCR 的 Token，方可正常启用内容分析

另，此脚本仅用于个人学习研究。
