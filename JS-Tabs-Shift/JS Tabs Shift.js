// Chrome开发者工具：
   // Console用来输入JS变量，在运行中直接查看变量的值；
   // Sources用来查看网站用到的资源文件，包括css、js；
   // 其他的用处不大。
   // 对JS可以设置断点，刷新后按F10进行单步执行。
window.onload=function(){
	var oTabs=document.getElementById("Tabs");
	var oUl=document.getElementById("ulist");
	var oLi=oUl.getElementsByTagName("li");
	var oDiv=oTabs.getElementsByTagName("div");

	for (var i=0; i < oLi.length; i++) {
		oLi[i].now=i;
		oLi[i].onclick=function(){
			for (var n = 0; n < oLi.length; n++) {
				oLi[n].className="";
				oDiv[n].className="hide";
			}
			this.className="on";
			oDiv[this.now].className="";
			// this指向调用函数的对象
		};
		oLi[i].onmouseover=function(){
			this.className=this.className+" move";
		}
		oLi[i].onmouseout=function(){
			if(this.className.indexOf("on") > -1)
				this.className="on";
			else this.className="";
		}
	}

}
