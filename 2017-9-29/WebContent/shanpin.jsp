<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@page import="com.neusoft.entity.Account"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>商品</title>
<link rel="stylesheet" type="text/css" href="css/shanpin.css"/>
</head>
<body>


					<% 
							HttpSession sess =  request.getSession();
							Object ob= sess.getAttribute("acc");
							Account acc = (Account)ob;
							
					%>
		<div id="login" >
			<div id="login-zi" style="background-color: deepskyblue;height: 35px;margin-top: -26px;padding-bottom: 1px;padding-top: 33px;]">
			    <a id="_a" href="#" style="color: white;font-size: 20px;"><strong>电商系统</strong></a>	
				<a id="_a" onclick="shop()" style="color: white;font-size: 16px;cursor: pointer;">商品管理</a>
				<a id="_a" href="#" onclick="order()" style="color: white;font-size: 16px;">订单查询</a>
				<a id="_a" href="#" onclick="consumer()" style="color: white;font-size: 16px;">会员管理</a>
				<a id="_a" href="#" onclick="address()" style="color: white;font-size: 16px;">地址信息</a>
			</div>
			<div id="img">
				<img src="img/人物.png" width="20px" height="20px"/>
			</div>
			<div id="login_admin" style="background-color: lightgray">
					<a style="color: white;font-size: 14px;">User:<%=acc.getUsername()%></a>
			</div>
		</div>
		<div id="xiabian">
		<iframe id="iframes" src="shop.jsp" style="margin-right: -165px;height: 597px;width: 17000px;" >
		</iframe>
		
		</div>
		<script type="text/javascript">
		function shop() {
			var str =document.getElementById("iframes");
				str.src="shop.jsp";
		}
		function address() {
			var str =document.getElementById("iframes");
				str.src="ReadAddressServlet";
		}
		function consumer() {
			var str =document.getElementById("iframes");
			str.src="consumer.jsp";
		}
		function order() {
			var str =document.getElementById("iframes");
			str.src="orderinfo.jsp";
		}
		</script>
		
</body>
</html>