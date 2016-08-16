var gifts=["Kindle","iPhone","iPad","Camera","Thanks"],
	timer=null;  
	// 声明全局变量，用于后续清除定时器时使用，设置为null只是一种规范

window.onload=function(){
	var title=document.getElementById("title"),
		start=document.getElementById("start"),
		stop =document.getElementById("stop");

	start.onclick=runSys;
	stop.onclick=stopSys;

	document.onkeyup=function(){
		event= event || window.event;
		if(event.keyCode == 13){
			if (timer) {
				stopSys();
			} else {
				runSys();
			}
		}
	}	
}

function runSys(){
	clearInterval(timer);
	timer=setInterval(function(){
		var giftNum=Math.floor(Math.random()*gifts.length);
		title.innerHTML=gifts[giftNum];
	},500);
	start.style.background="#ccc";		
}

function stopSys(){
	clearInterval(timer);
	start.style.background="#d20606";
}
