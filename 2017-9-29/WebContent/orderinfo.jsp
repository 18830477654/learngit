<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="css/shanpin.css"/>
</head>
<body>
			<div id="_left" style="position: relative;top: -326px;">
				<ul style="position: absolute;top: 313px;">
					<li onclick="_li1()" style="color: white;font-size: 16px;cursor: pointer;border-radius: 7px;padding-top: 10px;height: 32px;">所有订单</li>
					<li onclick="_li2()" style="color: white;font-size: 16px;cursor: pointer;border-radius: 7px;padding-top: 10px;height: 32px;">未付款订单</li>
					<li onclick="_li3()" style="color: white;font-size: 16px;cursor: pointer;border-radius: 7px;padding-top: 10px;height: 32px;">已付款订单</li>
					<li onclick="_li4()" style="color: white;font-size: 16px;cursor: pointer;border-radius: 7px;padding-top: 10px;height: 32px;">已发货订单</li>
					<li onclick="_li5()" style="color: white;font-size: 16px;cursor: pointer;border-radius: 7px;padding-top: 10px;height: 32px;">已完成订单</li>
				</ul>
				
			</div>
			<div id="_right">
			        	<iframe id="iframe" src="" style="width: 1139px;height: 505px;border:0px;"></iframe>
			</div>
			
		<script type="text/javascript">
		function _li1() {
			var str = document.getElementById("iframe");
			str.src="ReadorderinfoServlet";
			var str1 = document.getElementById("s1");
			str1.style="background-color: darkmagenta;"
		}
		function _li2() {
			var str = document.getElementById("iframe");
			str.src="";
			
		}
		function _li3() {
			var str = document.getElementById("iframe");
			str.src="ReadSpec";
			
		}
		
		</script>
</body>
</html>