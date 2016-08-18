function getStyle(obj,attr){  //获取任意样式的属性值
	if (obj.currentStyle) { //IE
		return obj.currentStyle[attr];
	} else { //其他
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,json,fn){  //多物体完美运动框架
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		for (var attr in json) {
			//Step1：【获取当前属性值】
			if (attr == "opacity") {
				offsetAttr=parseFloat(getStyle(obj,attr))*100;
			} else {
				offsetAttr=parseInt(getStyle(obj,attr));
			}

			//Step2：【计算改变的速度】
			sp=(json[attr]-offsetAttr)/8;
			sp=sp>0 ? Math.ceil(sp):Math.floor(sp)

			//Step3：【判断终止条件】
			if (offsetAttr == json[attr]) {
				clearInterval(obj.timer);
				if (fn) {
					fn();
				}
			} else {

			//Step4：【改变属性值】
				if (attr == "opacity") {
					obj.style.opacity=(offsetAttr+sp)/100;
					obj.style.filter="alpha(opacity:"+sp+")";
				} else {
					obj.style[attr]=offsetAttr+sp+"px";
				}
			}
		}
	},30);
}
