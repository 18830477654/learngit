<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
 <link rel="stylesheet" type="text/css" href="css/shangpin.css"/>
 <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
 <link rel="stylesheet" type="text/css" href="bootstrap-theme.min.css.map"/>
   <script type="text/javascript" src="ckeditor/ckeditor.js"></script>
   <script type="text/javascript" src="js/bootstrap.min.js"></script>
</head>
<body>
   <div id="addshangpin" >
	  <form action="ProductServlet"  method="post">
				
				<table border="1px" cellspacing="0px" cellpadding="0px"  width="1000" height="100" style="border: none;font-size: 15px;margin-top: 3px;">
						<tr>
							<td >商品名称</td><td><input name="pname" type="text" value="车型"/></td>
						</tr>
						<tr>
							<td>所属类别</td>
							<td>
								<select  name="leibie" >
									<option value= "1" >1</option>
									<option value= "2" >2</option>
									<option value= "3" >3</option>
									<option value= "4" >4</option>
									<option value= "5" >5</option>
									<option value= "6" >6</option>
									<option value= "7" >7</option>
									<option value= "8" >8</option>
									<option value= "9" >9</option>
								</select>
							</td>
							
						</tr>
						<tr><td>货号</td><td><input type="text"  name="huohao"/></td></tr>
						<tr>
							<td>上传图片</td>
							<td>  <input type="file" name="pic" accept="image/*">
						</tr>
						<tr>
							<td>商品价格</td><td><input name = "price" type="text" value="50.00"/></td>
						</tr>
						<tr>
							<td>点击数</td><td><input name= "point" type="text" value="99"/></td>
						</tr>
						<tr>
							<td>是否推荐</td><td><input name="tuijian" type="checkbox" />
						</tr>
						<tr>
							<td>是否上线</td><td><input name="shangxian" type="checkbox" />
						</tr>
						<tr>
							<td>是否特价</td><td><input name="tejia" type="checkbox"/>
						</tr>
						<tr>
							<td>商品详情</td><td>
						
							<!-- <img src="img/13.jpg" /> -->
							
							<textarea rows="" cols="" id="ed" name="ed">
								
							</textarea>
							
							 </td>
						</tr>
					</table>
					<input style="position: relative;top: -24px;width: 99px" type="submit" value="添加"/>
				</form>
				<script>
					CKEDITOR.replace("ed");
				</script>	
					
				
			</div>
</body>
</html>