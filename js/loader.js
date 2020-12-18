function Text() {
	setInterval("TextUpdate()","100");
}

function T1() {
	var t = document.getElementById('loader_text');
	t.value = "加载中,请等待重定向..."
}

function T2() {
	var t = document.getElementById('loader_text');
	t.value = "加载中,请等待重定向...."
}

function T3() {
	var t = document.getElementById('loader_text');
	t.value = "加载中,请等待重定向....."
}

function T4() {
	var t = document.getElementById('loader_text');
	t.value = "加载中,请等待重定向......"
}

function TextUpdate() {
	setTimeout("T1()","1000"); 
	setTimeout("T2()","1000"); 
	setTimeout("T3()","1000"); 
	setTimeout("T4()","1000"); 
}