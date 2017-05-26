$(function(){
// 轮播图
var ratateimg=$(".ratateimg")[0];
	var aimg=$("a",ratateimg);
	var ulsmid=$(".ulsmid",ratateimg)[0];
	var lis=$("li",ulsmid);
	var limid=$(".limid",ulsmid);
	aimg[0].style.zIndex=10;
	var index=0;
	t=setInterval(move,2000);
	function move(){
		index++;
		if(index==aimg.length){
			index=0;
		}
		for(var i=0;i<aimg.length;i++){
			aimg[i].style.zIndex=0;
			lis[i].className="";
		}
		aimg[index].style.zIndex=10;
		lis[index].className="limid";
	} 

	ratateimg.onmouseover=function(){
		clearInterval(t)
	}
	ratateimg.onmouseout=function(){
		t=setInterval(move,2000)
	}
	
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			for(var j=0;j<lis.length;j++){
			aimg[j].style.zIndex=0;
			lis[j].className="";
		}
		aimg[this.index].style.zIndex=10;
		this.className="limid";
		index=this.index;
		}
	}

// 遮罩
var sixmid=$('.six-mid')[0];
	var logobox=$('.logobox',sixmid);
	for(var i=0;i<logobox.length;i++){
		logobox[i].onmouseover=function(){
			var sixzz=$('.sixzz',this)[0];
			sixzz.style.zIndex=10;
		}
		logobox[i].onmouseout=function(){
			var sixzz=$('.sixzz',this)[0];
			sixzz.style.zIndex=0;
		}
	}

// 图片放大
var seven=$('.se-ven')[0];
var bigbox=$(".bigbox",seven);
for(var j=0;j<bigbox.length;j++){
	
	var abox=$('a',bigbox[j]);
	for(var i=0;i<abox.length;i++){
		abox[i].onmouseover=function(){
			var aimg=$('img',this)[0];
			animate(aimg,{width:150,height:150,left:44,top:45},200)
		}
		abox[i].onmouseout=function(){
			var aimg=$('img',this)[0];
			animate(aimg,{width:140,height:140,left:49,top:50},200)
		}
	}
}

//图片左移
var zyboxmid=$('.zyboxmid');
for(var j=0;j<zyboxmid.length;j++){
	var zybox=$('.zybox',zyboxmid[j]);
	for(var i=0;i<zybox.length;i++){
		
		zybox[i].onmouseover=function(){
			var aimg=$('a',this)[0];
			animate(aimg,{left:84},200)
		}
		zybox[i].onmouseout=function(){
			var aimg=$('a',this)[0];
			animate(aimg,{left:94},200)
		}
	}
}


	var zyboxright=$('.zyboxright');
	for(var j=0;j<zyboxright.length;j++){
	var zybox=$('.zybox',zyboxright[j]);
	for(var i=0;i<zybox.length;i++){
		
		zybox[i].onmouseover=function(){
			var aimg=$('a',this)[0];
			animate(aimg,{left:138},200)
		}
		zybox[i].onmouseout=function(){
			var aimg=$('a',this)[0];
			animate(aimg,{left:148},200)
		}
	}
}
	
// 加边框
var nine=$('.ni-ne')[0];
var aimgs=$('a',nine);
for(var i=0;i<aimgs.length;i++){
	aimgs[i].onmouseover=function(){
		this.style.border="1px solid red";
	}
	aimgs[i].onmouseout=function(){
		this.style.border="1px solid #fff";
	}
}

var qijiandian=$('.qijian-dian')[0];
var aimgs=$('img',qijiandian);
for(var i=0;i<aimgs.length;i++){
	aimgs[i].onmouseover=function(){
		this.style.border="1px solid red";
	}
	aimgs[i].onmouseout=function(){
		this.style.border="1px solid #fff";
	}
}

//导航
var leftfixed=$('.left-fixed')[0];
var spanfixed=$('span',leftfixed);

var loginbar=$('.loginbar')[0];
var sixfixed=$('.six')[0];
var bigchilds=$('.bigchilds')[0];
var bigcers=$('.bigcers')[0];
var qijianzi=$('.qijianzi')[0];
var like=$('.like')[0];

var loginbartop=loginbar.offsetTop;
var sixfixedtop=sixfixed.offsetTop;
var bigchildstop=bigchilds.offsetTop;
var bigcerstop=bigcers.offsetTop;
var qijianzitop=qijianzi.offsetTop;
var liketop=like.offsetTop;
var arr=[loginbartop,sixfixedtop,bigchildstop,bigcerstop,qijianzitop,liketop]
// console.log(loginbartop)
// console.log(sixfixedtop)
// console.log(bigchildstop)
// console.log(bigcerstop)
// console.log(qijianzitop)
// console.log(liketop)
// console.log(arr)
window.onscroll=function(){
	var scrolltop=document.body.scrollTop||document.documentElement.scrollTop;
	for(var i=0;i<spanfixed.length;i++){
		if(arr[i]<scrolltop){
			for(var j=0;j<spanfixed.length;j++){
				spanfixed[j].style.background="#444";
				spanfixed[0].style.background="#c40000";
			}
		spanfixed[i].style.background="#c40000";
		}
	}
}
for(var j=0;j<spanfixed.length;j++){
		spanfixed[j].index=j;
		spanfixed[j].onclick=function(){
			animate(document.body,{scrollTop:arr[this.index]},500);
			animate(document.documentElement,{scrollTop:arr[this.index]},500);
		}
	}

// 分类
var classify=$('.classify');
var fourleft=$('.four-left')[0];
var fourleftas=$('a',fourleft);
var uu=0;
for(var f=0;f<fourleftas.length;f++){
	if(uu==3){
		uu=0;
	}
	fourleftas[f].index=uu;
	fourleftas[f].onmouseover=function(){
		classify[this.index].style.display="block";
	}
	fourleftas[f].onmouseout=function(){
		classify[this.index].style.display="none";
	}
	uu++;
}

var index=0;
for(var s=0;s<fourleftas.length;s++){
	if(index==0){
		index=0;
	}
	classify[index].onmouseover=function(){
		this.style.display="block";
	}
	classify[index].onmouseout=function(){
		this.style.display="none";
	}
	index++;
}












})