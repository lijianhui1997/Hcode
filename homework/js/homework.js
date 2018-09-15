var value=document.getElementById('va');
function myfunction(){
	var arr=['@qq.com','@163.com','@gmail.com','@yahoo.com.cn','@126.com'];
	if(/.*/.test(value.innerHTML)) {
		for(var i=0;i<arr.length;i++){
		value.innerHTML+=arr[i];			
		}
	}
}


