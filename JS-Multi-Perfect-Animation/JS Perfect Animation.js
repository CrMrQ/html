window.onload=function(){
	var obj=document.getElementById("obj");
	obj.onmouseover=function(){
		startMove(obj,{left:0});
	}
	obj.onmouseout=function(){
		startMove(obj,{left:-200});
	}

	var opa=document.getElementById("opa");
	opa.onmouseover=function(){
		startMove(opa,{opacity:100});
	}
	opa.onmouseout=function(){
		startMove(opa,{opacity:30});
	}

	var li=document.getElementsByTagName("li");
	for (var i = 0; i < li.length; i++) {
		li[i].timer=null;
		li[i].onmouseover=function(){
			startMove(this,{opacity:100});
		}
		li[i].onmouseout=function(){
			startMove(this,{opacity:30});
		}
	}

	var mul=document.getElementById("mul");
	mul.onmouseover=function(){
		startMove(mul,{height:400},function(){
			startMove(mul,{width:600});
		});
	}
	mul.onmouseout=function(){
		startMove(mul,{width:400},function(){
			startMove(mul,{height:200});
		});
	}

	var perfect=document.getElementById("perfect");
	perfect.onmouseover=function(){
		startMove(perfect,{width:600,opacity:30});
	}
	perfect.onmouseout=function(){
		startMove(perfect,{width:400,opacity:100});
	}
}
