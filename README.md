# blog
博客

分为前台和后台

前台功能：

​	1.博客显示

​	2.标签搜索

​	3.评论

后台功能：

​	1.MarkDown文档支持

​		1.1 markdown文档在线编辑

​		1.2markdown文件上传分析为在线编辑状态

​		1.3markdown文档转HTML

​	2.评论提醒

​	3.标签管理

​	4.评论登录人员管理

​	5.权限管理

实体：

​	文档、评论，人员，标签，分组

技术点：

​	前端

​		主体使用vue及vue相关

​		markdown

​		评论支持 vuepress 的一个框架

​		文件上传，下载 --- 断点续传

​		扫码登录 -- 微信扫码

​		登录 -- JWT

​		分类是否需要树状接口，类似于文件夹

​	后端：

​		markdown文档解析

​		主体使用Springboot + SpringCloud

​		如果登录为手机验证码登录，使用redis

​		搜索可以做成elasticsearch---用于直接搜索文章内容

​		权限管理模块 -- 防止有人直接多次连续访问，或者一直post评论，

​		反爬虫

时间管理：

​	每天早上7:00 - 8:00 写代码

​	尽量在7月底之前将前端代码完成

​		

​		