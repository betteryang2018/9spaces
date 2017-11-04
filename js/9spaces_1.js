// JavaScript Document

// 点击开始按钮，九宫格随机显示3种颜色，点击结束则结束闪烁
window.onload=function(){
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var start=byId("start"),
	end=byId("end"),
	tds=byId("tb_wrap").getElementsByTagName("td"),
	colors=['red','plum','blue','green','cyan','black','pink','gray','brown'],
	arr=new Array(3),  // 创建数组容纳随机数 
	arr1=new Array(3),                 
	timer=null;
	
// 点击开始	
start.onclick=function(){
	timer=setInterval(function(){
		startFun();
	},1000);
}

// 停止按钮
end.onclick=function(){
	// 遍历清除按钮颜色
	clear();
	clearInterval(timer);
}

// 还原背景色clear()
function clear(){
	for(i=0;i<tds.length;i++){  
		tds[i].style.background="#ffa600";
	}
}

function startFun(){
	// 每次随机颜色时遍历将背景设置好
	clear();
	// 获取随机地址、随机颜色的数组
	for(var i=0;i<3;i++){  
		var a=parseInt(Math.random()*9);
		var b=parseInt(Math.random()*9);
		if(i==0){  
			arr[i]=a;
			arr1[i]=b;
		}else{     
			for(var j=0;j<i;j++){ 
			    // 如果重复从新开始
				if(a==arr[j]||b==arr1[j]){ 
					i--;
				}else{
					arr[i]=a;
					arr1[i]=b;
				}
			}
		}
	}
	
	// 将随机的颜色给随机的地址
	for(var i=0;i<arr.length;i++){
		tds[arr[i]].style.background=colors[arr1[i]];
	}
}
}






























