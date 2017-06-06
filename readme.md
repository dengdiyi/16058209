# 网站开发报告



---

##1.策划思路

 - 个人打算开发一个属于自己的个人网站来检测自己一个学期WEB前端技术的学习。
 - 个人期望有一个主页，能够通过主页跳转到其它的页面。然后还有一个杭电旅行的页面，能够清新，大方，美观地展示出来。还有一个个人简历的页面，页面能够清楚整洁地向别人展示我的个人简历。最后一个页面是整个网站的注册页面，能够清晰快捷地注册属于自己的账号。
 - 参考网上的一些网页的模板，发现一些不错的模板并参考了它们的css和js文件，然后再自己书写html文件并且合适地加入它们的css和js文件。整个网站的图片以及背景图片都是在网上自己找的，有些是自己编辑过添加了一些文字。
## 2.页面结构与说明
 - 本站点由一个主页（index.html）,一个旅游页面（travel.html）,一个个人简历页面（resume.html）,以及一个表单注册页面（form.html）组成。
 - 主页url:https://github.com/dengdiyi/16058209/blob/master/index.html；作为网站的主页，能够跳转到其它子页面。
 - 旅游页面url：https://github.com/dengdiyi/16058209/blob/master/travel.html；作为网站主页内容的页面，给大家提供旅行服务。
 - 简历页面url：https://github.com/dengdiyi/16058209/blob/master/resume.html；作为网站作者的个人简历，让大家了解网站作者。
 - 表单注册页面url：https://github.com/dengdiyi/16058209/blob/master/form.html；作为网站注册页面，让大家能够注册本网站的账号进行与用户之间的交流。
## 3.技术指标
 - 本网站兼容谷歌、火狐浏览器，既使用了以前版本的html和css，也使用了html5和css3的一些新特性。
 - 开发工具：火狐浏览器、Sublime Text3、画图
## 4.技术点说明
 - 难点1：关于导航栏如何实现点击相应的列表跳转到相应内容。
 - 利用导航栏nav的列表li的知识，在li中加入超链接a href="#相关内容的id"来实现。关键代码：
```html
<li><a href="#information">基本信息</a></li>
<section id="information">相关部分内容</section>
```
 - 难点2：关于网页使用css定位的问题
 - 利用css的三种基本的定位机制：普通流、浮动和绝对定位的相关知识对页面进行定位。关键代码：
 ```#templatemo_header #header_left {
	float: left;
	width: 570px;
	height: 250px;
}```
```#templatemo_content .content_section {
	clear: both;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px dotted #666;
} ```
 - 难点3：关于主页中实现轮播图的问题
 - http://www.htmleaf.com/jQuery/利用老师提供的Jquery网站，在上面找到轮播图相关的插件，按照上面的提示和内容加以修改，从而实现自己主页的轮播图。关键代码：
 ```<div class="slider-wrapper theme-default">
            <div id="slider" class="nivoSlider">
                <a href="index.html"><img src="images/homepage1.gif"></a>
                <a href="travel.html"><img src="images/homepage2.jpg"></a>
                <a href="resume.html"><img src="images/homepage3.gif"></a>
            </div>
        </div>```
 ```.theme-default .nivo-controlNav a {
	display:inline-block;
	width:22px;
	height:22px;
	background:url(bullets.png) no-repeat;
	text-indent:-9999px;
	border:0;
	margin: 0 2px;
}```
```.theme-default .nivo-directionNav a {
	display:block;
	width:30px;
	height:30px;
	background:url(arrows.png) no-repeat;
	text-indent:-9999px;
	border:0;
}```
## 5.开发心得
 - 刚开始是从我的简历的页面开始做起的，当然从刚开始就遇到了很多问题，当我遇到问题时我会先自行百度，如果百度不能解决的话，再问同学和老师。就这样慢慢地一步一步地开始我的第一个页面，当我实现第一个交互效果时，我感到很高兴，原来我设计的页面也可以拥有这样漂亮的效果。之后我开始做我的主页，通过上网百度等等终于实现了轮播图的效果，我也是非常开心。通过我的主页能够进入到我的其它页面，实现网站页面之间的交互。之后我又开始设计杭电旅行网页，这个网页设计花费了我很多心思，运用了很多css技巧来保持页面的美观。当最后看到整个页面的效果时，我有一种莫名的成就感，发现自己的付出还是很值得的。最后我运用表单的知识完成了注册的网页。我认为这门课教会了我们如何运用WEB前端技术来开发自己的个人网站，让我们受益匪浅。我希望以后这么课程能够让我们学到更多的前端技术的知识，让我们能够做出更加美观，更加高大上的网页！

    
 

