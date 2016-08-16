function getByClass(clsName,parentName){
	var oParent=parentName?document.getElementById(parentName):document;
	var oEles=new Array();
	var oElement=oParent.getElementsByTagName("*");
	for (var i = 0; i < oElement.length; i++) {
			if(oElement[i].className == clsName)
				oEles.push(oElement[i]);
		}
	return oEles;	
}

window.onload=drag;
	// 页面加载时绑定函数

function drag(){
	var oTitle=getByClass("login_logo_webqq","loginPanel")[0];
	// 取数组中的第一个元素
	// 【鼠标按下】
	oTitle.onmousedown=fnDown;
	// 【点击关闭按钮】
	var close=document.getElementById("ui_boxyClose"),
		oPanel=document.getElementById("loginPanel");
	close.onclick=function(){
		oPanel.style.display="none";
	}
	// 【切换状态】	
	var loginState=document.getElementById("loginState"),
		loginList=document.getElementById("loginStatePanel"),
		loginLi=getByClass("statePanel_li","loginStatePanel");
		
	loginState.onclick=function(event){
		loginList.style.display="block";
		e=event || window.event;
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble();
		}
	}
	for (var i = 0; i < loginLi.length; i++) {
		loginLi[i].onmouseover=function(){
			this.style.background="#ccc";
		}
		loginLi[i].onmouseout=function(){
			this.style.background="#fff";
		}
		loginLi[i].onclick=function(){
			event = event || window.event;
			loginList.style.display="none";
			if(event.stopPropagation){
	        	event.stopPropagation();  //非IE
	      	}else{
	        	event.cancelBubble=true;  //IE
	      	}
	      	// 阻止事件冒泡
	      	// 否则会触发loginState.onclick的“block”属性
	      	loginStateShow=document.getElementById("loginStateShow");
	      	loginStateShow.className="login-state-show "+this.id;
	      	loginStateTxt=document.getElementById("login2qq_state_txt");
	      	loginStateTxt.innerHTML=getByClass("stateSelect_text",this.id)[0].innerHTML;
		}
	}
	document.onclick=function(){
   	  loginList.style.display='none';
   }
}

function fnDown(event){
	event=event || window.event;
	var oDrag=document.getElementById("loginPanel");
	var disX=event.clientX-oDrag.offsetLeft,
		disY=event.clientY-oDrag.offsetTop;
	// 【鼠标移动】
	document.onmousemove=function(event){
		event=event || window.event;
		fnMove(event,disX,disY);
	}
	// 【鼠标松开】
	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseup=null;
	}
}

function fnMove(e,disX,disY){
	event =event || window.event;
	var oDrag=document.getElementById("loginPanel");
	var X=event.clientX-disX,
		Y=event.clientY-disY,
		screenW=document.body.clientWidth || document.documentElement.clientWidth,
		screenH=document.body.clientHeight || document.documentElement.clientHeight,
		maxW=screenW-oDrag.offsetWidth,
		maxH=screenH-oDrag.offsetHeight;
	// 内嵌的样式才可以通过Object.style.width获取元素宽度，
	// 其他可以通过Object.offsetWidth获取
	if (X<0) {
		X=0;
	} else if(X>maxW){
		X=maxW;
	}
	if (Y<10) {
		Y=10;
	} else if(Y>maxH){
		Y=maxH;
	}
	oDrag.style.left=X+"px";
	oDrag.style.top=Y+"px";
}
