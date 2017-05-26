//类名 兼容问题
function getClass(classname,range){
	range=range||document;
	if(range.getElementsByClassName){
		return range.getElementsByClassName(classname)
	}else{
		var arr=[];
		var all=range.getElementsByTagName("*");
		for(var i=0;i<all.length;i++){
			all[i].className==classname
			if(checkClass(all[i].className,classname)){
               arr.push(all[i]);
			}
		}
		return arr;
	}

}
 
//所需要的的混在多个类名中 
function checkClass(tagClass,aclass){
     var brr=tagClass.split(" ");
     for(var i=0;i<brr.length;i++){
     	if(brr[i]==aclass){
     		return true;
     	}
     }
     return false;
}

//textContent的兼容问题
function text(obj,val){
	if(val!=undefined){
	    if(obj.textContent!=undefined){
		  obj.textContent=val;
	    }else{
		  obj.innerText=val;
	    }
	}else{
		if(obj.textContent!=undefined){
		  return obj.textContent;
	    }else{
		  return obj.innerText;
	    }
	}
}

//样式方法获取的兼容问题
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];//attr是变量 所以要[]
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}

// 区分标签名 类名 id
function $(selector,range){
	var range=range||document;
	if(typeof selector=="string"){
		if(selector.charAt(0)=="#"){
			return range.getElementById(selector.slice(1));
		}
		if(selector.charAt(0)=="."){
			return getClass(selector.slice(1),range)
		}
		//正则
		if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector)
		}
		if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)){
			return  document.createElement(selector.slice(1,-1));
		}
	}
	//页面加载事件
	if(typeof selector=="function"){
        return window.onload=selector;
	}
}

//1.获取 去掉子元素中的注释和空行后的集合
function getChilds(obj){
	var childs=obj.childNodes;
	var newArr=[];
	for(var i=0;i<childs.length;i++){
		if(!(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==''))){
			newArr.push(childs[i])
		}
	}
	return newArr;
}
//去除(注释||文本里的空行)
// !(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==''))


//用空字符串替换空行
function trim(str){
	return  str.replace(/^\s+|\s+$/g,"");
}


//"     123     "   ==>  "123"
//"      "    ==>  ""
//  /^\s+|\s+$/g,""   将字符串中的空格换成空==去掉字符串中的空格

//2.获取下一个
function getNext(obj){
	var  next=obj.nextSibling;
	if(!next){
		return false;
	}
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=='')){
		next=next.nextSibling;
		}
		if(!next){
			return false;
		}
		return next;
	
}

//获取上一个
function getUp(obj){
	var  up=obj.previousSibling;
	if(!up){
		return false;
	}
	while(up.nodeType==8||(up.nodeType==3&&trim(up.nodeValue)=='')){
		up=up.previousSibling;
	}
		if(!up){
			return false;
		}
	return up;
}

//3.获取第一个
function getFirst(obj){
	var childs=getChilds(obj);
    return   childs[0];
}

//4.获取最后一个
function getLast(obj){
	var childs=getChilds(obj);
	return  childs[childs.length-1];
}

//5.获取任意一个
function getIndex(obj,i){
	var childs=getChilds(obj);
	return  childs[i];
}

//插入节点之前
function insertBefore(obj1,obj2){
	var  parent=obj2.parentNode;
	return  parent.insertBefore(obj1,obj2);
}

//插入节点之后
function insertAfter(obj3,obj4){
 	   var parent=obj4.parentNode;
 	   var next=getNext(obj4);
 	   if(next){
 	   	 return  parent.insertBefore(obj3,next);
 	   }else{
 	   	return  parent.appendChild(obj3);
 	   }
}

// //获取某个对象的下一个
// function insertAfter(obj,afterobj){
// 	var next=getNext(obj)
// 	if (next==false) {
// 		afterobj.parentNode.appendChild(obj)
// 	};
// 	return afterobj.parentNode.insertBefore(obj,next)
// }
// //删除对象  父对象.removeChild(要删除的对象)，此方法只是在页面结构中移除了，
// //要想在内存中完全清除还需【要删除的对象=null】
// function remove(obj,type){
//      obj.parentNode.removeChild(obj)
// }     


// //给同一个事件绑定多个处理程序

// function on(obj,event,fn){
// 	if(obj.addEventListener){
// 		obj.addEventListener(event,fn,false);
// 	}else{
// 		obj.attachEvent("on"+event,fn);
// 	}
// }
// function off(obj,event,fn){
// 	if(obj.removeEventListener){
// 		obj.removeEventListener(event,fn,false);
// 	}else{
// 		obj.detachEvent("on"+event,fn)
// 	}
// }