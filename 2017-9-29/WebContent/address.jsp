<%@page import="com.neusoft.entity.Product"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>address</title>
<link rel="stylesheet" type="text/css" href="css/address.css"/>
</head>
<body>
<div id= "splb" >
				<form action="ReadAddressServlet"  method="post">
					<div id="shuru" ><br>
						<button style="height: 21.5px;width:100px;position: absolute;left: 800px"><a href="addAddress.jsp" style="text-decoration: none;color: black;">添加地址</a> </button>
						<input style="position: absolute;left: 30px" type="text" placeholder="北京市" style="position: relative;left: 309px;" ><input style="position: relative;left: 184px;height: 21.5px" type="submit" value="搜索"/><br><br>
					<table border="1" cellspacing="0" cellpadding="0" style="border: 1px solid lightblue; font-size: 14px;">
						<tr>
							<th style="width: 150px ;height:45px;"><input type="checkbox" />全选/取消</td>
							<th style="width: 150px ; height:45px;">编号</td>
							<th style="width: 150px  ;height:45px;">省份</td>
							<th style="width: 150px ; height:45px;">城市</td>
							<th style="width: 150px ; height:45px;">区/县</td>
							<th style="width: 150px ; height:45px;">操作</td>
						</tr>
						
						<c:forEach items="${addresss.datas}" var="pmd" varStatus="status">
							<tr>
							<td style="width: 150px; height:25px"><input type="checkbox"/></td>
							<td style="width: 150px">
							${pmd.id}
							</td>
							<td style="width: 150px">
							${pmd.province}
							</td>
							<td style="width: 150px">
							${pmd.city}
							</td>
							<td style="width: 150px">
							${pmd.area}
							</td>
							<td style="width: 150px">
							<a href="UpdateAddressIn?id=${pmd.id }">修改</a> / 
							<a href="DeleteAddressServlet?id=${pmd.id}">删除</a>
							</td>
						</tr>
						</c:forEach>
						</table>
						<br>
		<div style="font-size: 14px">			
	共${addresss.totalcount}条记录${addresss.pageNo}/${addresss.totalPageSize}页 &nbsp;
		
	<c:if test="${addresss.pageNo>0}">
	<a href="ReadProductServlet?reqType=2&pageNo=1&pageSize=5">首页</a>&nbsp;
	</c:if>
	
    <a href="ReadProductServlet?reqType=2&pageNo=${addresss.pageNo==1?addresss.pageNo:addresss.pageNo-1}&pageSize=5">上一页</a>&nbsp;
	
	<a href="ReadProductServlet?reqType=2&pageNo=${addresss.pageNo==addresss.totalPageSize?addresss.pageNo:addresss.pageNo+1}&pageSize=5">下一页</a>&nbsp;
	
	<a href="ReadProductServlet?reqType=2&pageNo=${addresss.totalPageSize}&pageSize=5">尾页</a>
	
	第<select onchange="self.location.href=options[selectedIndex].value">
  		
  		<c:forEach begin="0" end="${addresss.totalPageSize-1}" step="1" var="i" >
  		<c:choose>
  		<c:when test="${addresss.pageNo==i+1 }">
  			<option value="ReadProductServlet?reqType=2&pageNo=${i+1} }&pageSize=5" selected="selected">${i+1}</option>
  		</c:when>
  		<c:otherwise>
  		<option value="ReadProductServlet?reqType=2&pageNo=${i+1}&pageSize=5" >${i+1}</option>
  		</c:otherwise>	
		</c:choose>
		</c:forEach>
		</select>	</div>				
					</div>
				</form>
			</div>
</body>
</html>