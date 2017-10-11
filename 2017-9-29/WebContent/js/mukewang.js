function datupian(){
	var img = document.getElementById("dabiaoti");
	if(img.src.match("CX.jpg")){
		img.src="img/FF.jpg";
	}else if(img.src.match("FF.jpg")){
		img.src="img/CC.jpg";
	}else{
		img.src="img/CX.jpg";
	}
}
function tanchuduihuakuang(){
	setTimeout(function(){
		var tc = document.getElementById("tanchu").style.display="inline";
	},100);
}
function tanchuduihuakuang2(){
	setTimeout(function(){
		var tc = document.getElementById("tanchu").style.display="none";
	},100);
}

function tanchuduihuakuangg(){
	setTimeout(function(){
		var tc = document.getElementById("tanchutc").style.display="inline";
	},100);

}
function tanchuduihuakuangg2(){
	setTimeout(function(){
		var tc = document.getElementById("tanchutc").style.display="none";
	},100);
}


function dianjib11(){
	var v = document.getElementById("b11");
	v.setAttribute("value","");
}
function likaib11(){
	var v = document.getElementById("b11");
	var Str = "前段小白     java入门";
	v.setAttribute("value",Str);
}
function youce(){
	var v = document.getElementById("i11");
	v.setAttribute("src","img/qazqaz.png");
}
function youcelikai(){
	var v = document.getElementById("i11");
	v.setAttribute("src","img/11.png");
}
function youce1(){
	var v = document.getElementById("i12");
	v.setAttribute("src","img/qazqazqaz.png");
}
function youcelikai1(){
	var v = document.getElementById("i12");
	v.setAttribute("src","img/22.png");
}
function youce2(){
	var v = document.getElementById("youcetanchu");
	v.style.display="inline-block";
}
function youcelikai2(){
	var v = document.getElementById("youcetanchu");
	v.style.display="none";
}
function youce3(){
	var v = document.getElementById("i15");
	v.setAttribute("src","img/wsxwsxwsx.png");
}
function youcelikai3(){
	var v = document.getElementById("i15");
	v.setAttribute("src","img/55.png");
}
function fanhuidingbu(){
	scrollTo(0,0);
}


function zidong(){
	var img = document.getElementById("dabiaoti");
	setInterval(function(){
		if(img.src.match("CC.jpg")){
		img.src="img/FF.jpg";
	}else if(img.src.match("FF.jpg")){
		img.src="img/CX.jpg";
	}else{
		img.src="img/CC.jpg";
	}
	},5000);
	
	/**
	 * 第一排
	 */
	var news = [
	{"biaotou":"Java","neirong":"BAT大咖助sadkfasdasdasdasdadadadadadada力","renshu":"812312312382人在学，288元"},
	{"biaotou":"Nodes","neirong":"实打实十大帅哥asdsdfasddgasgdasfasfasdasdasdasdasdadada","renshu":"182人在学，188元"},
	{"biaotou":"JavaScript","neirong":"违法地方是多少啊asfasfsadfsdfsfsdfasfsafsaasasdasdadasdadasdasd","renshu":"282人在学，388元"},
	{"biaotou":"Php","neirong":"潍坊市额他告诉对方","renshu":"382人在学，488元"},
	{"biaotou":"Android","neirong":"额纷纷发问学生","renshu":"482人在学，688元"}
	];
	for(var i=0;i<news.length ; i++){
		var w1 = document.getElementById("dd5");
		var aa = document.createElement("a");
		var str = 40+(i*243);
	    var str1 = "cursor: pointer;position: absolute;top: 73px;left:"+str+"px;word-break:break-word;word-wrap : break-word;";
		aa.setAttribute("style",str1);
    	var v = document.createTextNode(news[i].biaotou);
		aa.appendChild(v);
		w1.appendChild(aa);
	}
		var w2 = document.getElementById("id1");
		var aa1 = document.createElement("ul");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var str2 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].neirong);
		var v11 = document.createTextNode(news[0].renshu);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		w2.appendChild(aa1);
		
		var w3 = document.getElementById("id2");
		var aa2 = document.createElement("ul");
		var bb2 = document.createElement("li");
		var bb22 = document.createElement("li");
		var str3 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb2.setAttribute("style",str3);
		var str33 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb22.setAttribute("style",str33);
		var v2 = document.createTextNode(news[1].neirong);
		var v22 = document.createTextNode(news[1].renshu);
		bb2.appendChild(v2);
		bb22.appendChild(v22);
		aa2.appendChild(bb2);
		aa2.appendChild(bb22);
		w3.appendChild(aa2);
		
		var w4 = document.getElementById("id3");
		var aa3 = document.createElement("ul");
		var bb3 = document.createElement("li");
		var bb33 = document.createElement("li");
		var str4 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb3.setAttribute("style",str4);
		var str44 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb33.setAttribute("style",str44);
		var v3 = document.createTextNode(news[2].neirong);
		var v33 = document.createTextNode(news[2].renshu);
		bb3.appendChild(v3);
		bb33.appendChild(v33);
		aa3.appendChild(bb3);
		aa3.appendChild(bb33);
		w4.appendChild(aa3);
		
		var w5 = document.getElementById("id4");
		var aa4 = document.createElement("ul");
		var bb4 = document.createElement("li");
		var bb44 = document.createElement("li");
		var str5 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb4.setAttribute("style",str5);
		var str55 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb44.setAttribute("style",str55);
		var v4 = document.createTextNode(news[3].neirong);
		var v44 = document.createTextNode(news[3].renshu);
		bb4.appendChild(v4);
		bb44.appendChild(v44);
		aa4.appendChild(bb4);
		aa4.appendChild(bb44);
		w5.appendChild(aa4);
		
		var w6 = document.getElementById("id5");
		var aa5 = document.createElement("ul");
		var bb5 = document.createElement("li");
		var bb55 = document.createElement("li");
		var str6 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb5.setAttribute("style",str6);
		var str66 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb55.setAttribute("style",str66);
		var v5 = document.createTextNode(news[4].neirong);
		var v55 = document.createTextNode(news[4].renshu);
		bb5.appendChild(v5);
		bb55.appendChild(v55);
		aa5.appendChild(bb5);
		aa5.appendChild(bb55);
		w6.appendChild(aa5);

	/**
	 * 第二排
	 */
	var news = [
	{"biaotou":"前段工具","neirong":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","renshu":"85213532人在学，48元"},
	{"biaotou":"IOS","neirong":"dsadadasadadasdsadadadadadadadadad","renshu":"1512352人在学，188元"},
	{"biaotou":"Html/Css","neirong":"dfgafxmahfqceasdasdsadafdsfvercetteterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfsdafsafsafsa","renshu":"282人在学，21348元"},
	{"biaotou":"Android","neirong":"wefwefwcsdvsdvdfzbxzccvwqgsafgsdcaxafaafx","renshu":"382人在学，438元"},
	{"biaotou":"PHP","neirong":"asxfwfagegcegcqcqexq","renshu":"4123人在学，61234元"}
	];
	for(var i=0;i<news.length ; i++){
		var w1 = document.getElementById("ddd5");
		var aa = document.createElement("a");
		var str = 40+(i*243);
	    var str1 = "cursor: pointer;position: absolute;top: 73px;left:"+str+"px;";
		aa.setAttribute("style",str1);
    	var v = document.createTextNode(news[i].biaotou);
		aa.appendChild(v);
		w1.appendChild(aa);
	}
		var w2 = document.getElementById("idd1");
		var aa1 = document.createElement("ul");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var str2 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].neirong);
		var v11 = document.createTextNode(news[0].renshu);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		w2.appendChild(aa1);
		
		var w3 = document.getElementById("idd2");
		var aa2 = document.createElement("ul");
		var bb2 = document.createElement("li");
		var bb22 = document.createElement("li");
		var str3 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb2.setAttribute("style",str3);
		var str33 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb22.setAttribute("style",str33);
		var v2 = document.createTextNode(news[1].neirong);
		var v22 = document.createTextNode(news[1].renshu);
		bb2.appendChild(v2);
		bb22.appendChild(v22);
		aa2.appendChild(bb2);
		aa2.appendChild(bb22);
		w3.appendChild(aa2);
		
		var w4 = document.getElementById("idd3");
		var aa3 = document.createElement("ul");
		var bb3 = document.createElement("li");
		var bb33 = document.createElement("li");
		var str4 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb3.setAttribute("style",str4);
		var str44 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb33.setAttribute("style",str44);
		var v3 = document.createTextNode(news[2].neirong);
		var v33 = document.createTextNode(news[2].renshu);
		bb3.appendChild(v3);
		bb33.appendChild(v33);
		aa3.appendChild(bb3);
		aa3.appendChild(bb33);
		w4.appendChild(aa3);
		
		var w5 = document.getElementById("idd4");
		var aa4 = document.createElement("ul");
		var bb4 = document.createElement("li");
		var bb44 = document.createElement("li");
		var str5 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb4.setAttribute("style",str5);
		var str55 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb44.setAttribute("style",str55);
		var v4 = document.createTextNode(news[3].neirong);
		var v44 = document.createTextNode(news[3].renshu);
		bb4.appendChild(v4);
		bb44.appendChild(v44);
		aa4.appendChild(bb4);
		aa4.appendChild(bb44);
		w5.appendChild(aa4);
		
		var w6 = document.getElementById("idd5");
		var aa5 = document.createElement("ul");
		var bb5 = document.createElement("li");
		var bb55 = document.createElement("li");
		var str6 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb5.setAttribute("style",str6);
		var str66 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb55.setAttribute("style",str66);
		var v5 = document.createTextNode(news[4].neirong);
		var v55 = document.createTextNode(news[4].renshu);
		bb5.appendChild(v5);
		bb55.appendChild(v55);
		aa5.appendChild(bb5);
		aa5.appendChild(bb55);
		w6.appendChild(aa5);
		
		/**
	 * 第三排
	 */
	var news = [
	{"biaotou":"DOTA","neirong":"asgadgasfdadkfhfsdfsfsssauassdfsdadadadadadadasfhkasdfsadfdsfgdsdfddfgdfgdsgdgfvvvvvvvdsvdsv","renshu":"85213532人在学，48元"},
	{"biaotou":"DOTA2","neirong":"adgffaDSADASDASDASDADADdfsfsdfsASDADADADcfaxfaasdasdasdadadadadadadf","renshu":"1512352人在学，188元"},
	{"biaotou":"DOTA3","neirong":"dfgafxmahfqceasdsadasdasfsdfsdfsfsfffffffffffdadasdadagqexqwgwxfsdxsfsadfsdafsafsafsa","renshu":"282人在学，21348元"},
	{"biaotou":"DOTA4","neirong":"wefwefwcsdvsdVXCVCXZVBCXBEWXFWQXvdfzbxzccvwqgsafgsdcaxafaafx","renshu":"382人在学，438元"},
	{"biaotou":"DOTA5","neirong":"asxfwfagegcSDFSDFWQZWQXWXffffffffffffffffffffRWRWZegcqcqexq","renshu":"4123人在学，61234元"}
	];
	for(var i=0;i<news.length ; i++){
		var w1 = document.getElementById("dddd5");
		var aa = document.createElement("a");
		var str = 40+(i*243);
	    var str1 = "cursor: pointer;position: absolute;top: 73px;left:"+str+"px;";
		aa.setAttribute("style",str1);
    	var v = document.createTextNode(news[i].biaotou);
		aa.appendChild(v);
		w1.appendChild(aa);
	}
		var w2 = document.getElementById("iddd1");
		var aa1 = document.createElement("ul");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var str2 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].neirong);
		var v11 = document.createTextNode(news[0].renshu);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		w2.appendChild(aa1);
		
		var w3 = document.getElementById("iddd2");
		var aa2 = document.createElement("ul");
		var bb2 = document.createElement("li");
		var bb22 = document.createElement("li");
		var str3 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb2.setAttribute("style",str3);
		var str33 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb22.setAttribute("style",str33);
		var v2 = document.createTextNode(news[1].neirong);
		var v22 = document.createTextNode(news[1].renshu);
		bb2.appendChild(v2);
		bb22.appendChild(v22);
		aa2.appendChild(bb2);
		aa2.appendChild(bb22);
		w3.appendChild(aa2);
		
		var w4 = document.getElementById("iddd3");
		var aa3 = document.createElement("ul");
		var bb3 = document.createElement("li");
		var bb33 = document.createElement("li");
		var str4 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb3.setAttribute("style",str4);
		var str44 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb33.setAttribute("style",str44);
		var v3 = document.createTextNode(news[2].neirong);
		var v33 = document.createTextNode(news[2].renshu);
		bb3.appendChild(v3);
		bb33.appendChild(v33);
		aa3.appendChild(bb3);
		aa3.appendChild(bb33);
		w4.appendChild(aa3);
		
		var w5 = document.getElementById("iddd4");
		var aa4 = document.createElement("ul");
		var bb4 = document.createElement("li");
		var bb44 = document.createElement("li");
		var str5 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb4.setAttribute("style",str5);
		var str55 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb44.setAttribute("style",str55);
		var v4 = document.createTextNode(news[3].neirong);
		var v44 = document.createTextNode(news[3].renshu);
		bb4.appendChild(v4);
		bb44.appendChild(v44);
		aa4.appendChild(bb4);
		aa4.appendChild(bb44);
		w5.appendChild(aa4);
		
		var w6 = document.getElementById("iddd5");
		var aa5 = document.createElement("ul");
		var bb5 = document.createElement("li");
		var bb55 = document.createElement("li");
		var str6 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb5.setAttribute("style",str6);
		var str66 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb55.setAttribute("style",str66);
		var v5 = document.createTextNode(news[4].neirong);
		var v55 = document.createTextNode(news[4].renshu);
		bb5.appendChild(v5);
		bb55.appendChild(v55);
		aa5.appendChild(bb5);
		aa5.appendChild(bb55);
		w6.appendChild(aa5);
		
			
		/**
	 * 第四排
	 */
	var news = [
	{"biaotou":"房屋拆除","neirong":"asgadgasfdadkfhnsauasdadadadadadadasfhkasdfkadhkadsghkaasdadadams力","renshu":"85213532人在学，48元"},
	{"biaotou":"发方法","neirong":"adgffacfaxfaasdasdasdadadadadadadf","renshu":"1512352人在学，188元"},
	{"biaotou":"啊阿斯顿发射点是","neirong":"dfgafxmahfqceasdsadasdafdsfsdfsfsafasfsafsdadasdadagqexqwgwxfsdxsfsadfsdafsafsafsa","renshu":"282人在学，21348元"},
	{"biaotou":"vga地方s","neirong":"wefwefwcsdvsdvdfzbxzccvwqgsafgsdcaxafaafx","renshu":"382人在学，438元"},
	{"biaotou":"士大夫顿发生","neirong":"asxfwfagegsafsadfdsfsfsfsfdsfsafasfsafsfsafsafsafcegcqcqexq","renshu":"4123人在学，61234元"}
	];
	for(var i=0;i<news.length ; i++){
		var w1 = document.getElementById("ddddd5");
		var aa = document.createElement("a");
		var str = 40+(i*243);
	    var str1 = "cursor: pointer;position: absolute;top: 73px;left:"+str+"px;";
		aa.setAttribute("style",str1);
    	var v = document.createTextNode(news[i].biaotou);
		aa.appendChild(v);
		w1.appendChild(aa);
	}
		var w2 = document.getElementById("idddd1");
		var aa1 = document.createElement("ul");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var str2 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].neirong);
		var v11 = document.createTextNode(news[0].renshu);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		w2.appendChild(aa1);
		
		var w3 = document.getElementById("idddd2");
		var aa2 = document.createElement("ul");
		var bb2 = document.createElement("li");
		var bb22 = document.createElement("li");
		var str3 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb2.setAttribute("style",str3);
		var str33 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb22.setAttribute("style",str33);
		var v2 = document.createTextNode(news[1].neirong);
		var v22 = document.createTextNode(news[1].renshu);
		bb2.appendChild(v2);
		bb22.appendChild(v22);
		aa2.appendChild(bb2);
		aa2.appendChild(bb22);
		w3.appendChild(aa2);
		
		var w4 = document.getElementById("idddd3");
		var aa3 = document.createElement("ul");
		var bb3 = document.createElement("li");
		var bb33 = document.createElement("li");
		var str4 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb3.setAttribute("style",str4);
		var str44 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb33.setAttribute("style",str44);
		var v3 = document.createTextNode(news[2].neirong);
		var v33 = document.createTextNode(news[2].renshu);
		bb3.appendChild(v3);
		bb33.appendChild(v33);
		aa3.appendChild(bb3);
		aa3.appendChild(bb33);
		w4.appendChild(aa3);
		
		var w5 = document.getElementById("idddd4");
		var aa4 = document.createElement("ul");
		var bb4 = document.createElement("li");
		var bb44 = document.createElement("li");
		var str5 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb4.setAttribute("style",str5);
		var str55 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb44.setAttribute("style",str55);
		var v4 = document.createTextNode(news[3].neirong);
		var v44 = document.createTextNode(news[3].renshu);
		bb4.appendChild(v4);
		bb44.appendChild(v44);
		aa4.appendChild(bb4);
		aa4.appendChild(bb44);
		w5.appendChild(aa4);
		
		var w6 = document.getElementById("idddd5");
		var aa5 = document.createElement("ul");
		var bb5 = document.createElement("li");
		var bb55 = document.createElement("li");
		var str6 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb5.setAttribute("style",str6);
		var str66 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb55.setAttribute("style",str66);
		var v5 = document.createTextNode(news[4].neirong);
		var v55 = document.createTextNode(news[4].renshu);
		bb5.appendChild(v5);
		bb55.appendChild(v55);
		aa5.appendChild(bb5);
		aa5.appendChild(bb55);
		w6.appendChild(aa5);
		
	/**
	 * 第五排
	 */
	var news = [
	{"biaotou":"我师兄","neirong":"asgadgasfdadkfhnsauasdadadadadadadasfhkasdfkadhkadsghkaasdadadams力","renshu":"85213532人在学，48元"},
	{"biaotou":"额大错方法","neirong":"adgffacfaxfaasdasdasdadadadadadadf","renshu":"1512352人在学，188元"},
	{"biaotou":"淘淘宝","neirong":"dfgafxmahfqceasdsadasdasdadasdadagqexqwgwxfsdxsfsadfsdafsafsafsa","renshu":"282人在学，21348元"},
	{"biaotou":"v撒反对发生","neirong":"wefwefwcsdvsdvdfzbxzccvwqgsafgsdcaxafaafx","renshu":"382人在学，438元"},
	{"biaotou":"a我的范德萨","neirong":"asxfwfagegcegcqcqexq","renshu":"4123人在学，61234元"}
	];
	for(var i=0;i<news.length ; i++){
		var w1 = document.getElementById("dddddd5");
		var aa = document.createElement("a");
		var str = 40+(i*243);
	    var str1 = "cursor: pointer;position: absolute;top: 73px;left:"+str+"px;";
		aa.setAttribute("style",str1);
    	var v = document.createTextNode(news[i].biaotou);
		aa.appendChild(v);
		w1.appendChild(aa);
	}
		var w2 = document.getElementById("iddddd1");
		var aa1 = document.createElement("ul");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var str2 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].neirong);
		var v11 = document.createTextNode(news[0].renshu);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		w2.appendChild(aa1);
		
		var w3 = document.getElementById("iddddd2");
		var aa2 = document.createElement("ul");
		var bb2 = document.createElement("li");
		var bb22 = document.createElement("li");
		var str3 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb2.setAttribute("style",str3);
		var str33 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb22.setAttribute("style",str33);
		var v2 = document.createTextNode(news[1].neirong);
		var v22 = document.createTextNode(news[1].renshu);
		bb2.appendChild(v2);
		bb22.appendChild(v22);
		aa2.appendChild(bb2);
		aa2.appendChild(bb22);
		w3.appendChild(aa2);
		
		var w4 = document.getElementById("iddddd3");
		var aa3 = document.createElement("ul");
		var bb3 = document.createElement("li");
		var bb33 = document.createElement("li");
		var str4 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb3.setAttribute("style",str4);
		var str44 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb33.setAttribute("style",str44);
		var v3 = document.createTextNode(news[2].neirong);
		var v33 = document.createTextNode(news[2].renshu);
		bb3.appendChild(v3);
		bb33.appendChild(v33);
		aa3.appendChild(bb3);
		aa3.appendChild(bb33);
		w4.appendChild(aa3);
		
		var w5 = document.getElementById("iddddd4");
		var aa4 = document.createElement("ul");
		var bb4 = document.createElement("li");
		var bb44 = document.createElement("li");
		var str5 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb4.setAttribute("style",str5);
		var str55 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb44.setAttribute("style",str55);
		var v4 = document.createTextNode(news[3].neirong);
		var v44 = document.createTextNode(news[3].renshu);
		bb4.appendChild(v4);
		bb44.appendChild(v44);
		aa4.appendChild(bb4);
		aa4.appendChild(bb44);
		w5.appendChild(aa4);
		
		var w6 = document.getElementById("iddddd5");
		var aa5 = document.createElement("ul");
		var bb5 = document.createElement("li");
		var bb55 = document.createElement("li");
		var str6 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb5.setAttribute("style",str6);
		var str66 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb55.setAttribute("style",str66);
		var v5 = document.createTextNode(news[4].neirong);
		var v55 = document.createTextNode(news[4].renshu);
		bb5.appendChild(v5);
		bb55.appendChild(v55);
		aa5.appendChild(bb5);
		aa5.appendChild(bb55);
		w6.appendChild(aa5);
		
		/**
	 * 第六排
	 */
	var news = [
	{"biaotou":"热辐射地方","neirong":"asgadgasfdadkfhnsauasdadadadadadadasfhkasdfkadhkadsghkaasdadadams力","renshu":"85213532人在学，48元"},
	{"biaotou":"豆腐干大概","neirong":"adgffacfaxfaasdasdasdadadadadadadf","renshu":"1512352人在学，188元"},
	{"biaotou":"啊电饭锅是","neirong":"dfgafxmahfqceasdsadasdasdadasdadagqexqwgwxfsdxsfsadfsdafsafsafsa","renshu":"282人在学，21348元"},
	{"biaotou":"额场地自行车","neirong":"wefwefwcsdvsdvdfzbxzccvwqgsafgsdcaxafaafx","renshu":"382人在学，438元"},
	{"biaotou":"地方斯顿发生","neirong":"asxfwfagegcegcqcqexq","renshu":"4123人在学，61234元"}
	];
	for(var i=0;i<news.length ; i++){
		var w1 = document.getElementById("ddddddd5");
		var aa = document.createElement("a");
		var str = 40+(i*243);
	    var str1 = "cursor: pointer;position: absolute;top: 73px;left:"+str+"px;";
		aa.setAttribute("style",str1);
    	var v = document.createTextNode(news[i].biaotou);
		aa.appendChild(v);
		w1.appendChild(aa);
	}
		var w2 = document.getElementById("idddddd1");
		var aa1 = document.createElement("ul");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var str2 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].neirong);
		var v11 = document.createTextNode(news[0].renshu);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		w2.appendChild(aa1);
		
		var w3 = document.getElementById("idddddd2");
		var aa2 = document.createElement("ul");
		var bb2 = document.createElement("li");
		var bb22 = document.createElement("li");
		var str3 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb2.setAttribute("style",str3);
		var str33 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb22.setAttribute("style",str33);
		var v2 = document.createTextNode(news[1].neirong);
		var v22 = document.createTextNode(news[1].renshu);
		bb2.appendChild(v2);
		bb22.appendChild(v22);
		aa2.appendChild(bb2);
		aa2.appendChild(bb22);
		w3.appendChild(aa2);
		
		var w4 = document.getElementById("idddddd3");
		var aa3 = document.createElement("ul");
		var bb3 = document.createElement("li");
		var bb33 = document.createElement("li");
		var str4 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb3.setAttribute("style",str4);
		var str44 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb33.setAttribute("style",str44);
		var v3 = document.createTextNode(news[2].neirong);
		var v33 = document.createTextNode(news[2].renshu);
		bb3.appendChild(v3);
		bb33.appendChild(v33);
		aa3.appendChild(bb3);
		aa3.appendChild(bb33);
		w4.appendChild(aa3);
		
		var w5 = document.getElementById("idddddd4");
		var aa4 = document.createElement("ul");
		var bb4 = document.createElement("li");
		var bb44 = document.createElement("li");
		var str5 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb4.setAttribute("style",str5);
		var str55 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb44.setAttribute("style",str55);
		var v4 = document.createTextNode(news[3].neirong);
		var v44 = document.createTextNode(news[3].renshu);
		bb4.appendChild(v4);
		bb44.appendChild(v44);
		aa4.appendChild(bb4);
		aa4.appendChild(bb44);
		w5.appendChild(aa4);
		
		var w6 = document.getElementById("idddddd5");
		var aa5 = document.createElement("ul");
		var bb5 = document.createElement("li");
		var bb55 = document.createElement("li");
		var str6 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb5.setAttribute("style",str6);
		var str66 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb55.setAttribute("style",str66);
		var v5 = document.createTextNode(news[4].neirong);
		var v55 = document.createTextNode(news[4].renshu);
		bb5.appendChild(v5);
		bb55.appendChild(v55);
		aa5.appendChild(bb5);
		aa5.appendChild(bb55);
		w6.appendChild(aa5);
		
		/**
		 * 第一大排
		 */
		var news = [
		{"youce1":"职业路径","neirong1":"HTML5和CSS3进阶与常用框架","liaojie1":"了解详情"},
		{"neirong1":"HTML5和CSS3实现动态网页","neirong2":"前端小白入门","neirong3":"前端进阶：响应式开发与常用"}
		];
		var w1 = document.getElementById("www1");
		var aa1 = document.createElement("ul");
		aa1.setAttribute("style","cursor: pointer;list-style: none;border-bottom: 1px solid white;width: 175px;height:180px;padding-top: 20px;padding-left: 0px;margin-left: 25px;");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var bb111 = document.createElement("li");
		var str2 = "cursor: pointer;height: 30px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;font-size: 20px;height: 80px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].youce1);
		var v11 = document.createTextNode(news[0].neirong1);
		var v111 = document.createTextNode(news[0].liaojie1);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		bb111.appendChild(v111);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		aa1.appendChild(bb111);
		w1.appendChild(aa1);
		
		var w11 = document.getElementById("www2");
		var aa11 = document.createElement("ul");
		var bbb1 = document.createElement("li");
		var bbb11 = document.createElement("li");
		var bbb111 = document.createElement("li");
		bbb1.setAttribute("style","cursor: pointer;font-size: 12px;height: 35px;");
		bbb11.setAttribute("style","cursor: pointer;font-size: 12px;height: 35px;");
		bbb111.setAttribute("style","cursor: pointer;font-size: 12px;height: 35px;");
		var vv1 = document.createTextNode(news[1].neirong1);
		var vv11 = document.createTextNode(news[1].neirong2);
		var vv111 = document.createTextNode(news[1].neirong3);
		bbb1.appendChild(vv1);
		bbb11.appendChild(vv11);
		bbb111.appendChild(vv111);
		aa11.appendChild(bbb1);
		aa11.appendChild(bbb11);
		aa11.appendChild(bbb111);
		w11.appendChild(aa11);
		
		var news = [
		{"biaotou1":"丰田","neirong":"fdsfasgadgasfdadkfhnsauasdadadadadadadasfhkasdfkadhkadsghkaasdadadams力","renshu":"85213532人在学，48元"},
		{"biaotou1":"日产","neirong":"adgffacfaddsaundiushwfcewqxfqexfxfaasdasdasdadadadadadadf","renshu":"1512352人在学，188元"},
		{"biaotou1":"大众","neirong":"dfgafxmahfqceasdsadasdasdadasdadagqexqwgwxfsdxsfsadfsdafsafsafsa","renshu":"282人在学，21348元"},
		{"biaotou1":"吉利","neirong":"wefwefwcsdvsdvdfzbxzxqfxqffqwfwcveaaaaaaaaaaaaaaaaaaaaaaaaccvwqgsafgsdcaxafaafx","renshu":"382人在学，438元"}
		];
		for(var f=0; f<news.length ; f++){
		var w1 = document.getElementById("ccc1");
		var aa = document.createElement("a");
		var str = 40+(f*245);
	    var str1 = "cursor: pointer;width:150px; position: absolute;top: 15px;left:"+str+"px;z-index: 5;";
		aa.setAttribute("style",str1);
    	var v = document.createTextNode(news[f].biaotou1);
		aa.appendChild(v);
		w1.appendChild(aa);
		}
		
		var w2 = document.getElementById("ic1");
		var aa1 = document.createElement("ul");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var str2 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].neirong);
		var v11 = document.createTextNode(news[0].renshu);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		w2.appendChild(aa1);
		
		var w3 = document.getElementById("ic2");
		var aa2 = document.createElement("ul");
		var bb2 = document.createElement("li");
		var bb22 = document.createElement("li");
		var str3 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb2.setAttribute("style",str3);
		var str33 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb22.setAttribute("style",str33);
		var v2 = document.createTextNode(news[1].neirong);
		var v22 = document.createTextNode(news[1].renshu);
		bb2.appendChild(v2);
		bb22.appendChild(v22);
		aa2.appendChild(bb2);
		aa2.appendChild(bb22);
		w3.appendChild(aa2);
		
		var w4 = document.getElementById("ic3");
		var aa3 = document.createElement("ul");
		var bb3 = document.createElement("li");
		var bb33 = document.createElement("li");
		var str4 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb3.setAttribute("style",str4);
		var str44 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb33.setAttribute("style",str44);
		var v3 = document.createTextNode(news[2].neirong);
		var v33 = document.createTextNode(news[2].renshu);
		bb3.appendChild(v3);
		bb33.appendChild(v33);
		aa3.appendChild(bb3);
		aa3.appendChild(bb33);
		w4.appendChild(aa3);
		
		var w5 = document.getElementById("ic4");
		var aa4 = document.createElement("ul");
		var bb4 = document.createElement("li");
		var bb44 = document.createElement("li");
		var str5 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb4.setAttribute("style",str5);
		var str55 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb44.setAttribute("style",str55);
		var v4 = document.createTextNode(news[3].neirong);
		var v44 = document.createTextNode(news[3].renshu);
		bb4.appendChild(v4);
		bb44.appendChild(v44);
		aa4.appendChild(bb4);
		aa4.appendChild(bb44);
		w5.appendChild(aa4);
		
		
		/**
		 * 第二大排
		 */
		var news = [
		{"youce1":"阿斯顿","neirong1":"阿斯顿马丁DB11","liaojie1":"了解详情"},
		{"neirong1":"axiusidunmading","neirong2":"fdsfsdfsaf","neirong3":"前端进阶：响应式开发与常用"}
		];
		var w1 = document.getElementById("wwwz1");
		var aa1 = document.createElement("ul");
		aa1.setAttribute("style","cursor: pointer;list-style: none;border-bottom: 1px solid white;width: 175px;height:180px;padding-top: 20px;padding-left: 0px;margin-left: 25px;");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var bb111 = document.createElement("li");
		var str2 = "cursor: pointer;height: 30px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;font-size: 20px;height: 80px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].youce1);
		var v11 = document.createTextNode(news[0].neirong1);
		var v111 = document.createTextNode(news[0].liaojie1);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		bb111.appendChild(v111);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		aa1.appendChild(bb111);
		w1.appendChild(aa1);
		
		var w11 = document.getElementById("wwwz2");
		var aa11 = document.createElement("ul");
		var bbb1 = document.createElement("li");
		var bbb11 = document.createElement("li");
		var bbb111 = document.createElement("li");
		bbb1.setAttribute("style","cursor: pointer;font-size: 12px;height: 35px;");
		bbb11.setAttribute("style","cursor: pointer;font-size: 12px;height: 35px;");
		bbb111.setAttribute("style","cursor: pointer;font-size: 12px;height: 35px;");
		var vv1 = document.createTextNode(news[1].neirong1);
		var vv11 = document.createTextNode(news[1].neirong2);
		var vv111 = document.createTextNode(news[1].neirong3);
		bbb1.appendChild(vv1);
		bbb11.appendChild(vv11);
		bbb111.appendChild(vv111);
		aa11.appendChild(bbb1);
		aa11.appendChild(bbb11);
		aa11.appendChild(bbb111);
		w11.appendChild(aa11);
		
		var news = [
		{"biaotou1":"兰博基尼","neirong":"ASDADasgadgasfdadkfhnsauasdadadadadadadasfhkasdfkadhkadsghkaasdadadams力","renshu":"85213532人在学，48元"},
		{"biaotou1":"法拉利","neirong":"sdfdfSDFSGDadgffacfaxfaasdasdasdadadadadadadf","renshu":"1512352人在学，188元"},
		{"biaotou1":"玛莎拉蒂","neirong":"dfgafxmahfqceasdsDSFGDSGDSGXadasdasdadasdadagqexqwgwxfsdxsfsadfsdafsafsafsa","renshu":"282人在学，21348元"},
		{"biaotou1":"保时捷","neirong":"wefwefwcsdvsdvdfzbxzccvwqgsafgsdcaxafaafx","renshu":"382人在学，438元"}
		];
		for(var f=0; f<news.length ; f++){
		var w1 = document.getElementById("cccc1");
		var aa = document.createElement("a");
		var str = 40+(f*245);
	    var str1 = "cursor: pointer;width:150px; position: absolute;top: 15px;left:"+str+"px;z-index: 5;";
		aa.setAttribute("style",str1);
    	var v = document.createTextNode(news[f].biaotou1);
		aa.appendChild(v);
		w1.appendChild(aa);
		}
		
		var w2 = document.getElementById("icc1");
		var aa1 = document.createElement("ul");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var str2 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].neirong);
		var v11 = document.createTextNode(news[0].renshu);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		w2.appendChild(aa1);
		
		var w3 = document.getElementById("icc2");
		var aa2 = document.createElement("ul");
		var bb2 = document.createElement("li");
		var bb22 = document.createElement("li");
		var str3 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb2.setAttribute("style",str3);
		var str33 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb22.setAttribute("style",str33);
		var v2 = document.createTextNode(news[1].neirong);
		var v22 = document.createTextNode(news[1].renshu);
		bb2.appendChild(v2);
		bb22.appendChild(v22);
		aa2.appendChild(bb2);
		aa2.appendChild(bb22);
		w3.appendChild(aa2);
		
		var w4 = document.getElementById("icc3");
		var aa3 = document.createElement("ul");
		var bb3 = document.createElement("li");
		var bb33 = document.createElement("li");
		var str4 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb3.setAttribute("style",str4);
		var str44 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb33.setAttribute("style",str44);
		var v3 = document.createTextNode(news[2].neirong);
		var v33 = document.createTextNode(news[2].renshu);
		bb3.appendChild(v3);
		bb33.appendChild(v33);
		aa3.appendChild(bb3);
		aa3.appendChild(bb33);
		w4.appendChild(aa3);
		
		var w5 = document.getElementById("icc4");
		var aa4 = document.createElement("ul");
		var bb4 = document.createElement("li");
		var bb44 = document.createElement("li");
		var str5 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb4.setAttribute("style",str5);
		var str55 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb44.setAttribute("style",str55);
		var v4 = document.createTextNode(news[3].neirong);
		var v44 = document.createTextNode(news[3].renshu);
		bb4.appendChild(v4);
		bb44.appendChild(v44);
		aa4.appendChild(bb4);
		aa4.appendChild(bb44);
		w5.appendChild(aa4);
		
		/**
		 * 第三大排
		 */
		var news = [
		{"youce1":"法拉利","neirong1":"法拉利458","liaojie1":"了解详情"},
		{"neirong1":"ax似的撒旦发g","neirong2":"前端黑黑入门","neirong3":"asdasds：响应式开发与常用"}
		];
		var w1 = document.getElementById("wwwzz1");
		var aa1 = document.createElement("ul");
		aa1.setAttribute("style","list-style: none;border-bottom: 1px solid white;width: 175px;height:180px;padding-top: 20px;padding-left: 0px;margin-left: 25px;");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var bb111 = document.createElement("li");
		var str2 = "cursor: pointer;height: 30px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;font-size: 20px;height: 80px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].youce1);
		var v11 = document.createTextNode(news[0].neirong1);
		var v111 = document.createTextNode(news[0].liaojie1);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		bb111.appendChild(v111);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		aa1.appendChild(bb111);
		w1.appendChild(aa1);
		
		var w11 = document.getElementById("wwwzz2");
		var aa11 = document.createElement("ul");
		var bbb1 = document.createElement("li");
		var bbb11 = document.createElement("li");
		var bbb111 = document.createElement("li");
		bbb1.setAttribute("style","cursor: pointer;font-size: 12px;height: 35px;");
		bbb11.setAttribute("style","cursor: pointer;font-size: 12px;height: 35px;");
		bbb111.setAttribute("style","cursor: pointer;font-size: 12px;height: 35px;");
		var vv1 = document.createTextNode(news[1].neirong1);
		var vv11 = document.createTextNode(news[1].neirong2);
		var vv111 = document.createTextNode(news[1].neirong3);
		bbb1.appendChild(vv1);
		bbb11.appendChild(vv11);
		bbb111.appendChild(vv111);
		aa11.appendChild(bbb1);
		aa11.appendChild(bbb11);
		aa11.appendChild(bbb111);
		w11.appendChild(aa11);
		
		var news = [
		{"biaotou1":"传达室的","neirong":"asgadgasfdadkfhnsauasdadadadadadadasfhkasdfkadhkadsghkaasdadadams力","renshu":"85213532人在学，48元"},
		{"biaotou1":"房第三方","neirong":"adgffacfaxfaasdasdasdadadadadadadf","renshu":"1512352人在学，188元"},
		{"biaotou1":"个人vs地方","neirong":"dfgafxmahfqceasdsadasdasdadasdadagqexqwgwxfsdxsfsadfsdafsafsafsa","renshu":"282人在学，21348元"},
		{"biaotou1":"v恶啊","neirong":"wefwefwcsdvsdvdfzbxzccvwqgsafgsdcaxafaafx","renshu":"382人在学，438元"}
		];
		for(var f=0; f<news.length ; f++){
		var w1 = document.getElementById("ccccc1");
		var aa = document.createElement("a");
		var str = 40+(f*245);
	    var str1 = "cursor: pointer;width:150px; position: absolute;top: 15px;left:"+str+"px;z-index: 5;";
		aa.setAttribute("style",str1);
    	var v = document.createTextNode(news[f].biaotou1);
		aa.appendChild(v);
		w1.appendChild(aa);
		}
		
		var w2 = document.getElementById("iccc1");
		var aa1 = document.createElement("ul");
		var bb1 = document.createElement("li");
		var bb11 = document.createElement("li");
		var str2 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb1.setAttribute("style",str2);
		var str22 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb11.setAttribute("style",str22);
		var v1 = document.createTextNode(news[0].neirong);
		var v11 = document.createTextNode(news[0].renshu);
		bb1.appendChild(v1);
		bb11.appendChild(v11);
		aa1.appendChild(bb1);
		aa1.appendChild(bb11);
		w2.appendChild(aa1);
		
		var w3 = document.getElementById("iccc2");
		var aa2 = document.createElement("ul");
		var bb2 = document.createElement("li");
		var bb22 = document.createElement("li");
		var str3 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb2.setAttribute("style",str3);
		var str33 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb22.setAttribute("style",str33);
		var v2 = document.createTextNode(news[1].neirong);
		var v22 = document.createTextNode(news[1].renshu);
		bb2.appendChild(v2);
		bb22.appendChild(v22);
		aa2.appendChild(bb2);
		aa2.appendChild(bb22);
		w3.appendChild(aa2);
		
		var w4 = document.getElementById("iccc3");
		var aa3 = document.createElement("ul");
		var bb3 = document.createElement("li");
		var bb33 = document.createElement("li");
		var str4 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb3.setAttribute("style",str4);
		var str44 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb33.setAttribute("style",str44);
		var v3 = document.createTextNode(news[2].neirong);
		var v33 = document.createTextNode(news[2].renshu);
		bb3.appendChild(v3);
		bb33.appendChild(v33);
		aa3.appendChild(bb3);
		aa3.appendChild(bb33);
		w4.appendChild(aa3);
		
		var w5 = document.getElementById("iccc4");
		var aa4 = document.createElement("ul");
		var bb4 = document.createElement("li");
		var bb44 = document.createElement("li");
		var str5 = "cursor: pointer;color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;word-break:break-word;word-wrap : break-word;margin-right: 25px;";
		bb4.setAttribute("style",str5);
		var str55 = "cursor: pointer;color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;margin-top:45px;";
		bb44.setAttribute("style",str55);
		var v4 = document.createTextNode(news[3].neirong);
		var v44 = document.createTextNode(news[3].renshu);
		bb4.appendChild(v4);
		bb44.appendChild(v44);
		aa4.appendChild(bb4);
		aa4.appendChild(bb44);
		w5.appendChild(aa4);
		
		/**
		 * 热门手记
		 */
		var news = [
		{"biaotou1":"XSS 和 CSRF 攻击的一些非常规防御方法","yuanquan":"Javfgdsfdsfasasadas","neirong":"是打发十分591831931"},
		{"biaotou1":"XSS 和 CSRF 攻击的一些非常规防御方法","yuanquan":"PHP","neirong":"嘎的方式发送57198Y591831931"},
		{"biaotou1":"XSS 和 CSRF 攻击的一些非常规防御方法","yuanquan":"Java","neirong":"fsdfasfdas是157电饭锅831931"},
		{"biaotou1":"XSS 和 CSRF 攻击的一些非常规防御方法","yuanquan":"CSS","neirong":"撒打发十分acc死你是白痴大东北"},
		{"biaotou1":"XSS 和 CSRF 攻击的一些非常规防御方法","yuanquan":"Mysql","neirong":"额vs调查额的深层次"},
		{"biaotou1":"XSS 和 CSRF 攻击的一些非常规防御方法","yuanquan":"测试","neirong":"五千万测试vevq的臭袜子士大夫萨芬萨芬"}
		];
		var w1 = document.getElementById("qaz1");
		var q = document.createElement("a");
		q.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[0].biaotou1);
		q.appendChild(v2);
		w1.appendChild(q);
		
		var e = document.createElement("a");
		e.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px; height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[0].yuanquan);
		e.appendChild(v2);
		w1.appendChild(e);
		
		var ee = document.createElement("a");
		ee.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[0].neirong);
		ee.appendChild(v2);
	var br = document.createElement("br");
	ee.appendChild(br);
		w1.appendChild(ee);
		
		
		var q1 = document.createElement("a");
		q1.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[1].biaotou1);
		q1.appendChild(v2);
		w1.appendChild(q1);
		
		var e1 = document.createElement("a");
		e1.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px;height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[1].yuanquan);
		e1.appendChild(v2);
		w1.appendChild(e1);
		
		var ee1 = document.createElement("a");
		ee1.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[1].neirong);
		ee1.appendChild(v2);
		var br = document.createElement("br");
	ee1.appendChild(br);
		w1.appendChild(ee1);
		
		var qq1 = document.createElement("a");
		qq1.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[2].biaotou1);
		qq1.appendChild(v2);
		w1.appendChild(qq1);
		
		var ee1 = document.createElement("a");
		ee1.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px;height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[2].yuanquan);
		ee1.appendChild(v2);
		w1.appendChild(ee1);
		
		var eee1 = document.createElement("a");
		eee1.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[2].neirong);
		eee1.appendChild(v2);
		var br = document.createElement("br");
	eee1.appendChild(br);
		w1.appendChild(eee1);
		
		var qqq1 = document.createElement("a");
		qqq1.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[3].biaotou1);
		qqq1.appendChild(v2);
		w1.appendChild(qqq1);
		
		var eee1 = document.createElement("a");
		eee1.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px;height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[3].yuanquan);
		eee1.appendChild(v2);
		w1.appendChild(eee1);
		
		var eeee1 = document.createElement("a");
		eeee1.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[3].neirong);
		eeee1.appendChild(v2);
		var br = document.createElement("br");
	eeee1.appendChild(br);
		w1.appendChild(eeee1);
		
		var qqqq1 = document.createElement("a");
		qqqq1.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[4].biaotou1);
		qqqq1.appendChild(v2);
		w1.appendChild(qqqq1);
		
		var eeee1 = document.createElement("a");
		eeee1.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px;height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[4].yuanquan);
		eeee1.appendChild(v2);
		w1.appendChild(eeee1);
		
		var eeeee1 = document.createElement("a");
		eeeee1.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[4].neirong);
		eeeee1.appendChild(v2);
		var br = document.createElement("br");
	eeeee1.appendChild(br);
		w1.appendChild(eeeee1);
		
		var qqqqq1 = document.createElement("a");
		qqqqq1.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[5].biaotou1);
		qqqqq1.appendChild(v2);
		w1.appendChild(qqqqq1);
		
		var eeeee1 = document.createElement("a");
		eeeee1.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px;height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[5].yuanquan);
		eeeee1.appendChild(v2);
		w1.appendChild(eeeee1);
		
		var eeeeee1 = document.createElement("a");
		eeeeee1.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[5].neirong);
		eeeeee1.appendChild(v2);
		var br = document.createElement("br");
	eeeeee1.appendChild(br);
		w1.appendChild(eeeeee1);
		var eeeeeee1 = document.createElement("a");
		eeeeeee1.setAttribute("style","cursor: pointer;position: absolute;top: 481px; border-top: 1px solid #b9bdc1;font-size: 14px;padding-top: 20px;padding-bottom: 20px;padding-left: 400px;padding-right: 10px;color: #b9bdc1;");
		var v2 = document.createTextNode("进入手记获取更多>");
		eeeeeee1.appendChild(v2);
		w1.appendChild(eeeeeee1);
		
		
		/**
		 * 推荐猿问
		 */
		var news = [
		{"biaotou1":"撒犯得上发么撒的身份nsa幕府","yuanquan":"Javasadas","neirong":"你确定你真157198Y591831931"},
		{"biaotou1":"撒犯得上发么撒的身份nsa幕府","yuanquan":"PHP","neirong":"sdgdagsdaf157198Y591831931"},
		{"biaotou1":"撒犯得上发么撒的身份nsa幕府","yuanquan":"Java","neirong":"发士大夫是157电饭锅831931"},
		{"biaotou1":"撒犯得上发么撒的身份nsa幕府","yuanquan":"CSS","neirong":"地磁场isadiacc死你是白痴大东北"},
		{"biaotou1":"撒犯得上发么撒的身份nsa幕府","yuanquan":"Mysql","neirong":"吊死扶伤地方额的深层次"},
		{"biaotou1":"撒犯得上发么撒的身份nsa幕府","yuanquan":"测试","neirong":"说到此为此测试vevq的臭袜子"}
		];
		var w1 = document.getElementById("qaz2");
		var q = document.createElement("a");
		q.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[0].biaotou1);
		q.appendChild(v2);
		w1.appendChild(q);
		
		var e = document.createElement("a");
		e.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px; height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[0].yuanquan);
		e.appendChild(v2);
		w1.appendChild(e);
		
		var ee = document.createElement("a");
		ee.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[0].neirong);
		ee.appendChild(v2);
	var br = document.createElement("br");
	ee.appendChild(br);
		w1.appendChild(ee);
		
		
		var q1 = document.createElement("a");
		q1.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[1].biaotou1);
		q1.appendChild(v2);
		w1.appendChild(q1);
		
		var e1 = document.createElement("a");
		e1.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px;height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[1].yuanquan);
		e1.appendChild(v2);
		w1.appendChild(e1);
		
		var ee1 = document.createElement("a");
		ee1.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[1].neirong);
		ee1.appendChild(v2);
		var br = document.createElement("br");
	ee1.appendChild(br);
		w1.appendChild(ee1);
		
		var qq1 = document.createElement("a");
		qq1.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[2].biaotou1);
		qq1.appendChild(v2);
		w1.appendChild(qq1);
		
		var ee1 = document.createElement("a");
		ee1.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px;height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[2].yuanquan);
		ee1.appendChild(v2);
		w1.appendChild(ee1);
		
		var eee1 = document.createElement("a");
		eee1.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[2].neirong);
		eee1.appendChild(v2);
		var br = document.createElement("br");
	eee1.appendChild(br);
		w1.appendChild(eee1);
		
		var qqq1 = document.createElement("a");
		qqq1.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[3].biaotou1);
		qqq1.appendChild(v2);
		w1.appendChild(qqq1);
		
		var eee1 = document.createElement("a");
		eee1.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px;height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[3].yuanquan);
		eee1.appendChild(v2);
		w1.appendChild(eee1);
		
		var eeee1 = document.createElement("a");
		eeee1.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[3].neirong);
		eeee1.appendChild(v2);
		var br = document.createElement("br");
	eeee1.appendChild(br);
		w1.appendChild(eeee1);
		
		var qqqq1 = document.createElement("a");
		qqqq1.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[4].biaotou1);
		qqqq1.appendChild(v2);
		w1.appendChild(qqqq1);
		
		var eeee1 = document.createElement("a");
		eeee1.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px;height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[4].yuanquan);
		eeee1.appendChild(v2);
		w1.appendChild(eeee1);
		
		var eeeee1 = document.createElement("a");
		eeeee1.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[4].neirong);
		eeeee1.appendChild(v2);
		var br = document.createElement("br");
	eeeee1.appendChild(br);
		w1.appendChild(eeeee1);
		
		var qqqqq1 = document.createElement("a");
		qqqqq1.setAttribute("style","cursor: pointer;position: absolute;top: 86px;font-size: 20px;color: white;");
		var v2 = document.createTextNode(news[5].biaotou1);
		qqqqq1.appendChild(v2);
		w1.appendChild(qqqqq1);
		
		var eeeee1 = document.createElement("a");
		eeeee1.setAttribute("style","cursor: pointer;margin-top:22px; border: 1px solid #b9bdc1;border-radius: 20px;padding-right: 7px;height: 20px; display: inline-block;font-size: 12px;padding-left: 10px;padding-top: 4px;");
		var v2 = document.createTextNode(news[5].yuanquan);
		eeeee1.appendChild(v2);
		w1.appendChild(eeeee1);
		
		var eeeeee1 = document.createElement("a");
		eeeeee1.setAttribute("style","cursor: pointer;font-size: 14px;margin-left: 20px;");
		var v2 = document.createTextNode(news[5].neirong);
		eeeeee1.appendChild(v2);
		var br = document.createElement("br");
	eeeeee1.appendChild(br);
		w1.appendChild(eeeeee1);
		var eeeeeee1 = document.createElement("a");
		eeeeeee1.setAttribute("style","cursor: pointer;position: absolute;top: 481px; border-top: 1px solid #b9bdc1;font-size: 14px;padding-top: 20px;padding-bottom: 20px;padding-left: 400px;padding-right: 10px;color: #b9bdc1;");
		var v2 = document.createTextNode("进入手记获取更多>");
		eeeeeee1.appendChild(v2);
		w1.appendChild(eeeeeee1);
		
		
	/**
	 * 最后图片和文字
	 */
	var news = [
	{"tupian":"img/sss.jpg","biaoti":"DocMike","neirong":"sadfsafasfsasdsfsafxfhincuhemxhgiexgmdasdsfsgadsdfbqezfwfubfafasfasfascwrqcsc"},
	{"tupian":"img/ggga.jpg","biaoti":"AoacAasd","neirong":"sadfsafdsfgadfcexfwfwfqezfwfubfafasfasfascwrvssadfsafasfsafasfasfascwrqcscadsasdafdsfsfsfsdfsfsafasfasf"},
	{"tupian":"img/gggb.jpg","biaoti":"bvsaocA	e","neirong":"sadfsafasfsasdsfsafxfhincdfvdsvcasvdvadfasfasfasfasfhemxhgiexgmebqezfwfubfafasfasfascwrssadfsafasfsafasfasfascwrqcsc"},
	{"tupian":"img/gggc.jpg","biaoti":"tsocAide","neirong":"sadfsafasfsasdsfsafxfhincuhemxhadfgafwxfqwfcqxfqqezfwfubfafasfasfascwrssadfsafasfsafasfasfascwrqcsc"},
	{"tupian":"img/gggs.jpg","biaoti":"omoocAie","neirong":"sadfsafasfsasdsfsafxfhincuhemxhgiexgmebqezfwfubfafasfasfascwradfsafasfsafasfasfascwrqcsc"}
	];
	for(var i=0;i<news.length ; i++){
		var s1 = document.getElementById("z1");
		var ss = document.createElement("img");
		var stt = 53+(i*243);	
	    var xx1 = "cursor: pointer; width:120px; border-radius: 50%;position: absolute;top: 100px;left: "+stt+"px;";
		ss.setAttribute("style",xx1);	
    	ss.src=news[i].tupian;
		s1.appendChild(ss);
		}
		for(var k=0;k<news.length ; k++){
		var g1 = document.createElement("strong");
		var op = 74+(k*243	);
		g1.setAttribute("style","cursor: pointer;color: black;font-size: 16px;position: absolute;top: 229px;left: "+op+"px;");
		var h = document.createTextNode(news[k].biaoti);
		g1.appendChild(h);
		s1.appendChild(g1);
		
		var k1 = document.createElement("span");
		var oo = 16+(k*244.5);
		var pp ="cursor: pointer;font-size: 12px;color: gray; width:192px;position: absolute;top: 276px;left:"+oo+"px;word-break:break-word;word-wrap : break-word;";
		k1.setAttribute("style",pp);	
		var hh = document.createTextNode(news[k].neirong);
		k1.appendChild(hh);
		s1.appendChild(k1);
		
		var k1 = document.createElement("span");
		var oo = 16+(k*244.5);
		var pp ="cursor: pointer;font-size: 12px;color: gray; width:192px;position: absolute;top: 276px;left:"+oo+"px;word-break:break-word;word-wrap : break-word;";
		k1.setAttribute("style",pp);	
		var hh = document.createTextNode(news[k].neirong);
		k1.appendChild(hh);
		s1.appendChild(k1);
		}
		
		/**
		 * 弹出框
		 */
	var news = [
	{"wenzii":"img/sss.jpg","biaoti":"DocMike","neirong":"sadfsafasfsasdsfsafxfhincuhemxhgiexgmebqezfwfubfafasfasfascwrqcsc"},
	{"tupian":"img/ggga.jpg","biaoti":"AoacAasd","neirong":"sadfsafasfsasdsfsafxfhincuhemxhgiexgmebqezfwfubfafasfasfascwrvssadfsafasfsafasfasfascwrqcsc"},
	{"tupian":"img/gggb.jpg","biaoti":"bvsaocA	e","neirong":"sadfsafasfsasdsfsafxfhincuhemxhgiexgmebqezfwfubfafasfasfascwrssadfsafasfsafasfasfascwrqcsc"},
	{"tupian":"img/gggc.jpg","biaoti":"tsocAide","neirong":"sadfsafasfsasdsfsafxfhincuhemxhgiexgmebqezfwfubfafasfasfascwrssadfsafasfsafasfasfascwrqcsc"},
	{"tupian":"img/gggs.jpg","biaoti":"omoocAie","neirong":"sadfsafasfsasdsfsafxfhincuhemxhgiexgmebqezfwfubfafasfasfascwradfsafasfsafasfasfascwrqcsc"}
	];
		
}