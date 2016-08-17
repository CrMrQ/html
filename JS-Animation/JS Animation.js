function getByCls(cls,parent){
	var parent=parent?document.getElementById(parent):document;
		oEls=parent.getElementsByTagName("*"),
		oElements=[];
	for (var i = 0; i < oEls.length; i++) {
		if (oEls[i].className == cls) {
			oElements.push(oEls[i]);
		}
	}
	return(oElements);
}

window.onload=function(){
	//【单物体移动】
	var speed=document.getElementById("speed");
	speed.onmouseover=function(){
		fnMove(0);
	}
	speed.onmouseout=function(){
		fnMove(-200);
	}
	//【单物体透明度改变】
	var opacity=document.getElementById("opacity");
	opacity.onmouseover=function(){
		fnOpacity(1.0);
	}
	opacity.onmouseout=function(){
		fnOpacity(0.5);
	}
	//【多物体移动】
	var multiSpeed=getByCls("multiSpeed");
	for (var i = 0; i < multiSpeed.length; i++) {
		multiSpeed[i].timer=null;
		multiSpeed[i].onmouseover=function(){
			fnMultiMove(this,400);
		}
		multiSpeed[i].onmouseout=function(){
			fnMultiMove(this,200);
		}
	}
	// 【多物体透明度改变】
	var multiOpacity=getByCls("multiOpacity");
	for (var i = 0; i < multiOpacity.length; i++) {
		multiOpacity[i].timer=null;
		multiOpacity[i].alpha=0.5;
		multiOpacity[i].onmouseover=function(){
			fnMultiOpacity(this,1.0);
		}
		multiOpacity[i].onmouseout=function(){
			fnMultiOpacity(this,0.5);
		}
	}
}

var timerSpeed=null;
function fnMove(target){
	clearInterval(timerSpeed);
	timerSpeed=setInterval(function(){
		var sp = (target-speed.offsetLeft)/10;
		sp = sp>0 ? Math.ceil(sp):Math.floor(sp);
		// 防止条件终止时没有在正确的位置
		if (speed.offsetLeft==target) {
			clearInterval(timerSpeed);
		}
		else {
			speed.style.left=speed.offsetLeft+sp+"px";
		}
	},10);
}

var timerOpacity=null;
var opt=0.5;
function fnOpacity(target){
	clearInterval(timerOpacity);
	if (opt > target) {
		sp=-0.1;
	} else {
		sp=0.1;
	}
	timerOpacity=setInterval(function(){
		if (opt.toFixed(1) == target) {
			clearInterval(timerOpacity);
		} else {
			opt+=sp;
			opacity.style.opacity=opt;
		}
	},20);
}

function fnMultiMove(obj,target){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		sp=(target-obj.offsetWidth)/20;
		sp= sp>0 ? Math.ceil(sp):Math.floor(sp);
		if (obj.offsetWidth == target) {
			clearInterval(obj.timer);
		} else {
			obj.style.width=obj.offsetWidth+sp+"px";
		}
	},10);
}

function fnMultiOpacity(obj,target){
	clearInterval(obj.timer);
	if (target > obj.alpha) {
		sp=0.1;
	} else {
		sp=-0.1;
	}
	obj.timer=setInterval(function(){
		console.log(obj.alpha);
		if (obj.alpha.toFixed(1) == target) {
			clearInterval(obj.timer);
		} else {
			obj.alpha+=sp;
			if (obj.alpha>=1) {
				obj.style.opacity=1;
			}else if(obj.alpha<=0.5){
				obj.style.opacity=0.5;
			}else{
				obj.style.opacity=obj.alpha;
			}
		}
	},10);
}
