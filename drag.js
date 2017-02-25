function drag(obj){
	obj.onmousedown=function(e){
		e=e||event;
		var disx=e.clientX-obj.offsetLeft;
		var disy=e.clientY-obj.offsetTop;
		document.onmousemove=function(e){
			e=e||event;
			obj.style.left=e.clientX-disx+'px';
			obj.style.top=e.clientY-disy+'px';
		}
		document.onmouseup=function(){
			document.onmouseup=null;
			document.onmousemove=null;
		}
		return false;
	}
}