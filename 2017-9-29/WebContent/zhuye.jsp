<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>欢迎您</title>
		<link rel="stylesheet" href="css/mukewang.css" />
	</head>
	<script type="text/javascript" src="js/mukewang.js" ></script>
	<body onload="zidong()">
		<div class="main"><!--总框-->
			<div class="biaotou"><!--logo加导航栏-->
				<h1><p id="p1" onclick="datupian()"  style="color: white; position: absolute;top: 274.5px;right: 160px; z-index: 3;cursor: pointer;" >&gt;</p></h1>
				<h1><p id="p2" onclick="datupian()"  style="color: white; position: absolute;top: 274.5px;left: 370px; z-index: 3;cursor: pointer;">&lt;</p></h1>
				<img id="dabiaoti" src="img/CC.jpg" style="display: inline;position: absolute;top: 100px;left: 110px;border-top-left-radius: 7px;border-top-right-radius: 7px;"/>
				<a style="cursor: pointer;" class="logo"><img src=""width="160px"/></a><!--logo-->  
				<div class="qq">
				   <a style="cursor: pointer;">首页</a>
				   <a style="cursor: pointer;">买车</a>
				   <a style="cursor: pointer;">宝典</a>
				   <a style="cursor: pointer;">服务保障</a>
				   <a style="cursor: pointer;">APP下载</a>
			   </div>
			   <!--input标签设置输入框-->
			    <input id="b11" onclick="dianjib11()" onblur="likaib11()" type="text" value="点击搜搜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" style="border: 1px solid #FFFAFA;border-bottom: 1px solid gainsboro;margin-left: 800px;margin-top: 10px;width: 210px;background-color:#FFFAFA;color:gainsboro ;font-size: 14px;display: inline-block;position: absolute;top: 25px;" />
			    <img src="img/123.png" width="23px" style="margin-left: -170px;position: absolute;top: 58px;position: absolute;top: 36px;left:1200px;display: inline-block;cursor: pointer;"/>
			    <img src="img/gouwuche.png" width="25px" style="display: inline-block;position: absolute;top: 34px;left: 1223px;cursor: pointer;" />
			    <div class="gouwuche" >
			       <a style="cursor: pointer;">购物车</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			    </div>
			    <img src="img/n.png"width="13px" style="display: inline-block;position: absolute;top: 20px;left: 390px;"/>
			</div>
			<!--大照片加上列表导航-->
			<div id="qianduan"> 
				<div class="zuobian">								
				</div>
				<div class="hanzi">
					<a id="a11"style="cursor: pointer;" onmouseover="tanchuduihuakuang()" onmouseout="tanchuduihuakuang2()">奔驰<span style="float: right;">&gt;</span></a><br />
					<a id="a12"style="cursor: pointer;" onmouseover="tanchuduihuakuangg()"onmouseout="tanchuduihuakuangg2()">宝马<span style="float: right;">&gt;</span></a><br />
					<a id="a13"style="cursor: pointer;" onmouseover="tanchuduihuakuang()"onmouseout="tanchuduihuakuang2()">奥迪<span style="float: right;">&gt;</span></a><br />
					<a id="a14"style="cursor: pointer;" onmouseover="tanchuduihuakuangg()"onmouseout="tanchuduihuakuangg2()">捷豹&nbsp;<span style="float: right;">&gt;</span></a><br />
					<a id="a15"style="cursor: pointer;" onmouseover="tanchuduihuakuang()"onmouseout="tanchuduihuakuang2()">雪弗兰<span style="float: right;">&gt;</span></a><br />
					<a id="a16"style="cursor: pointer;" onmouseover="tanchuduihuakuangg()"onmouseout="tanchuduihuakuangg2()">别克<span style="float: right;">&gt;</span></a><br />
					<a id="a17" style="border:none;cursor: pointer;" onmouseover="tanchuduihuakuang()"onmouseout="tanchuduihuakuang2()">吉利<span style="float: right;">&gt;</span></a><br />
				</div>
				<div id="tanchu" onmouseover="tanchuduihuakuang()" onmouseout="tanchuduihuakuang2()">
					<div id="tanchu1" >
						<a id="quanbu">车系</a>
						<a id="jinjie">车型</a>
						<div id="wenzi1">
							<span>E系</span>
							<span>C系</span>
							<span>A系</span>
						</div>
						<div id="wenzi2">
							<span>E300</span>
							<span>GLA</span>
							<span>GLS</span>
							<span>GLC</span>
							<span>AMG</span>
							<span>C200</span>
						</div>
					</div>
					<div id="tanchu2" >
					<div id="tanchuwen1" >
						<div id="tianchuwenzi1" style="width: 384px;">
							<img src="img/PC.jpg" style="width: 64px;height: 42px;position: absolute;top: 240px;left: 55px;border-radius: 7px;"/>
							<img src="img/CC.jpg" style="width: 64px;height: 42px;position: absolute;top: 240px;left: 435px;border-radius: 7px;"/>
							<img src="img/CX.jpg" style="width: 64px;height: 42px;position: absolute;top: 355px;left: 55px;border-radius: 7px;"/>
							<img src="img/kv3.jpg" style="width: 64px;height: 42px;position: absolute;top: 355px;left: 435px;border-radius: 7px;"/>
						</div >
						<div class="tanchuwenzi11" style="position: absolute;top: 201px;left: 100px;z-index:0">
							<ul>
								<li  style="width: 300px; color: black;font-size: 12px; height: 18px;list-style: none;padding-top: 20px;margin-left: -8px;">奔驰E300</li>
								<li style="width: 300px; color: gray;font-size: 12px;height: 30px;list-style: none;margin-left: -8px;">高级中型轿车</li>
								<li style="width: 300px; color: gray;font-size: 12px; height: 30px;list-style: none;font-size: 12px;margin-left: -8px;">580000</li>
							</ul>
						</div>
						<div class="tanchuwenzi11" style="position: absolute;top: 201px;left: 479px;">
							<ul>
								<li  style="width: 300px; color: black;font-size: 12px; height: 18px;list-style: none;padding-top: 20px;margin-left: -8px;">宝马530</li>
								<li style="width: 300px; color: gray;font-size: 12px;height: 30px;list-style: none;margin-left: -8px;">高级中型轿车</li>
								<li style="width: 300px; color: gray;font-size: 12px; height: 30px;list-style: none;font-size: 12px;margin-left: -8px;">500000</li>
							</ul>
						</div>
						<div class="tanchuwenzi11" style="position: absolute;top: 315px;left: 100px;">
							<ul>
								<li  style="width: 300px; color: black;font-size: 12px; height: 18px;list-style: none;padding-top: 20px;margin-left: -8px;">宝马530Li</li>
								<li style="width: 300px; color: gray;font-size: 12px;height: 30px;list-style: none;margin-left: -8px;">高级中型轿车</li>
								<li style="width: 300px; color: gray;font-size: 12px; height: 30px;list-style: none;font-size: 12px;margin-left: -8px;">520000</li>
							</ul>
						</div>
						<div class="tanchuwenzi11" style="position: absolute;top: 315px;left: 479px;">
							<ul>
								<li  style="width: 300px; color: black;font-size: 12px; height: 18px;list-style: none;padding-top: 20px;margin-left: -8px;">雪弗兰迈锐宝</li>
								<li style="width: 300px; color: gray;font-size: 12px;height: 30px;list-style: none;margin-left: -8px;">家用中型车</li>
								<li style="width: 300px; color: gray;font-size: 12px; height: 30px;list-style: none;font-size: 12px;margin-left: -8px;">160000</li>
							</ul>
						</div>
						</div>
					</div>
				</div>
				
				<div id="tanchutc" onmouseover="tanchuduihuakuangg()" onmouseout="tanchuduihuakuangg2()">
					<div id="tanchutc1" >
						<a id="quanbutc">全部</a>
						<a id="jinjietc">进阶</a>
						<div id="wenzitc1">
							<span>BMW1系</span>
							<span>BMW3系</span>
							<span>BMW4系</span>
							<span>BMW5系</span>
							<span>BMW7系</span>
						</div>
						<div id="wenzitc2">
							<span>1系运动型两厢轿车</span>
							<span>4系运动轿车</span>
							<span>5系运动轿车</span>
							<span>BMW5系旅行轿车</span>
							<span>BMW7系</span>
						</div>
					</div>
					<div id="tanchutc2" >
					<div id="tanchuwentc1" >
						<div id="tianchuwenzitc1" style="width: 384px;">
							<img src="img/CC.jpg" style="width: 64px;height: 42px;position: absolute;top: 240px;left: 55px;border-radius: 7px;"/>
							<img src="img/CX.jpg" style="width: 64px;height: 42px;position: absolute;top: 240px;left: 435px;border-radius: 7px;"/>
							<img src="img/PC.jpg" style="width: 64px;height: 42px;position: absolute;top: 355px;left: 55px;border-radius: 7px;"/>
						</div >
						<div class="tanchuwenzitc11" style="position: absolute;top: 201px;left: 100px;z-index:0">
							<ul>
								<li  style="width: 300px; color: black;font-size: 12px; height: 18px;list-style: none;padding-top: 20px;margin-left: -8px;">宝马530Li</li>
								<li style="width: 300px; color: gray;font-size: 12px;height: 30px;list-style: none;margin-left: -8px;">高级中型车</li>
								<li style="width: 300px; color: gray;font-size: 12px; height: 30px;list-style: none;font-size: 12px;margin-left: -8px;">520000</li>
							</ul>
						</div>
						<div class="tanchuwenzitc11" style="position: absolute;top: 201px;left: 479px;">
							<ul>
								<li  style="width: 300px; color: black;font-size: 12px; height: 18px;list-style: none;padding-top: 20px;margin-left: -8px;">宝马530</li>
								<li style="width: 300px; color: gray;font-size: 12px;height: 30px;list-style: none;margin-left: -8px;">高级中型车</li>
								<li style="width: 300px; color: gray;font-size: 12px; height: 30px;list-style: none;font-size: 12px;margin-left: -8px;">500000</li>
							</ul>
						</div>
						<div class="tanchuwenzitc11" style="position: absolute;top: 315px;left: 100px;">
							<ul>
								<li  style="width: 300px; color: black;font-size: 12px; height: 18px;list-style: none;padding-top: 20px;margin-left: -8px;">奔驰E300</li>
								<li style="width: 300px; color: gray;font-size: 12px;height: 30px;list-style: none;margin-left: -8px;">高级中型车</li>
								<li style="width: 300px; color: gray;font-size: 12px; height: 30px;list-style: none;font-size: 12px;margin-left: -8px;">580000</li>
							</ul>
						</div>
						</div>
					</div>
				</div>
				
				
			</div>
			<!--中间横着的导航栏-->
			<div class="xiamian">
				<div class="q1"  style="border-right: 1px solid gainsboro;cursor: pointer;">
					<img src="img/1.png"  width="46px"/>
					<a style="position: absolute;top: 37px;">Web前端攻城狮</a>
					<a style="font-size: 12px;color: gray;">互联网时代最火爆的技术</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
				<div class="q1" style="border-right: 1px solid gainsboro;cursor: pointer;">
					<img src="img/1.png"  width="46px"/>
					<a style="position: absolute;top: 37px;">PHP攻城狮</a>
					<a style="font-size: 12px;color:  gray;">世界上最好的语言</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
				<div class="q1" style="border-right: 1px solid gainsboro;cursor: pointer;">
					<img src="img/1.png"  width="46px"/>
					<a style="position: absolute;top: 37px;">Android攻城狮</a>
					<a style="font-size: 12px;color: gray;">移动设备市场份额之一</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
				<div class="q1" style="border-right: 1px solid gainsboro;cursor: pointer;">
					<img src="img/1.png"  width="46px"/>
					<a style="position: absolute;top: 37px;">Java攻城狮</a>
					<a style="font-size: 12px;color:  gray;">健壮、安全、适用广泛</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
				<div class="q1" style="border: none;cursor: pointer;">
					<img src="img/1.png"  width="46px"/>
					<a style="position: absolute;top: 37px;">Ios攻城狮</a>
					<a style="font-size: 12px;color:  gray;">可能是全球最好的系统</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</div>
			</div>
			<!--实战推荐-->
			<div id="neirong" >
				<div class="shizhan">
					<a style="cursor: pointer;font-size: 20px;font-weight: 200;">精品好车</a>
					<a style="cursor: pointer;color: gray; font-size: 14px;position: absolute;left: 1133px;">更多&nbsp;&nbsp;&nbsp;&gt;</a>
					<img src="img/new (1).png"width="40px" style="position: absolute;top: 57px;left: 186px;z-index: 3;" />
				</div>
				<div id="biaoge">					
					<div class="w1" id="dd1" > 
					    <!--<a style="position: absolute;top: 73px;left: 40px;">Java&nbsp;&nbsp;Android</a>-->
						<div class="e1" id="id1" style="cursor: pointer;">
							<!--<ul>
								<li  style="color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;">BAT大咖助力&nbsp;&nbsp;全面升级Android面试</li>
								<li style="color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;">2017年最全面的Android面试课程，赢取称心offer的不二之选</li>
								<li style="color: gray;height: 60px;list-style: none;font-size: 12px;margin-left: -8px;">822人在学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288元</li>
							</ul>-->
						</div>
					</div>
					<div class="w1" id="dd2" >
						<!--<a style="position: absolute;top: 73px;left: 283px;">Nodes&nbsp;&nbsp;MongoDB</a>-->
						<div class="e1" id="id2" style="cursor: pointer;">
							<!--<ul>
								<li  style="color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;">BAT大咖助力&nbsp;&nbsp;全面升级Android面试</li>
								<li style="color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;">2017年最全面的Android面试课程，赢取称心offer的不二之选</li>
								<li style="color: gray;height: 60px;list-style: none;font-size: 12px;margin-left: -8px;">822人在学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288元</li>
							</ul>-->
						</div>
					</div>
					<div class="w1" id="dd3" >
						<!--<a style="position: absolute;top: 73px;left: 530px;">Java&nbsp;&nbsp;Script</a>-->
						<div class="e1" id="id3" style="cursor: pointer;">
							<!--<ul>
								<li  style="color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;">BAT大咖助力&nbsp;&nbsp;全面升级Android面试</li>
								<li style="color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;">2017年最全面的Android面试课程，赢取称心offer的不二之选</li>
								<li style="color: gray;height: 60px;list-style: none;font-size: 12px;margin-left: -8px;">822人在学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288元</li>
							</ul>-->
						</div>
					</div>
					<div class="w1" id="dd4" >
						<!--<a style="position: absolute;top: 73px;left: 775px;">PHP</a>-->
						<div class="e1" id="id4" style="cursor: pointer;">
							<!--<ul>
								<li  style="color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;">BAT大咖助力&nbsp;&nbsp;全面升级Android面试</li>
								<li style="color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;">2017年最全面的Android面试课程，赢取称心offer的不二之选</li>
								<li style="color: gray;height: 60px;list-style: none;font-size: 12px;margin-left: -8px;">822人在学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288元</li>
							</ul>-->
						</div>
					</div>
					<div class="w1" id="dd5" >
					<!--	<a style="position: absolute;top: 73px;left:1019px;">Android</a>-->
						<div class="e1" id="id5" style="cursor: pointer;">
							<!--<ul>
								<li  style="color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;">BAT大咖助力&nbsp;&nbsp;全面升级Android面试</li>
								<li style="color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;">2017年最全面的Android面试课程，赢取称心offer的不二之选</li>
								<li style="color: gray;height: 60px;list-style: none;font-size: 12px;margin-left: -8px;">822人在学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288元</li>
							</ul>-->
						</div>
					</div>
				</div>
			</div>
			<!--免费好客-->
				<div class="neirong2">
				<div class="shizhan2">
					<a style="cursor: pointer;font-size: 20px;font-weight: 200;">精品好车</a>
					<a style="cursor: pointer;color: gray; font-size: 14px;position: absolute;left: 1133px;">更多&nbsp;&nbsp;&nbsp;&gt;</a>
				</div>
				<div class="biaoge2">					
					<div class="w2" id="ddd1">
						<!--<a style="position: absolute;top: 73px;left: 40px;">前端工具</a>-->
						<div class="e2" id="idd1" style="cursor: pointer;">
							<!--<ul>
								<li  style="color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;">BAT大咖助力&nbsp;&nbsp;全面升级Android面试</li>
								<li style="color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;">2017年最全面的Android面试课程，赢取称心offer的不二之选</li>
								<li style="color: gray;height: 60px;list-style: none;font-size: 12px;margin-left: -8px;">822人在学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288元</li>
							</ul>-->
						</div>
					</div>
					<div class="w2" id="ddd2">
						<!--<a style="position: absolute;top: 73px;left: 283px;">iOS</a>-->
						<div class="e2" id="idd2" style="cursor: pointer;">
							<!--<ul>
								<li  style="color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;">BAT大咖助力&nbsp;&nbsp;全面升级Android面试</li>
								<li style="color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;">2017年最全面的Android面试课程，赢取称心offer的不二之选</li>
								<li style="color: gray;height: 60px;list-style: none;font-size: 12px;margin-left: -8px;">822人在学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288元</li>
							</ul>-->
						</div>
					</div>
					<div class="w2" id="ddd3">
						<!--<a style="position: absolute;top: 73px;left: 530px;">Html/Css</a><img src="img/new (1).png"width="40px" style="position: absolute;top: 57px;left: 431px;z-index: 2;" />-->
						<div class="e2" id="idd3" style="cursor: pointer;">
							<!--<ul>
								<li  style="color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;">BAT大咖助力&nbsp;&nbsp;全面升级Android面试</li>
								<li style="color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;">2017年最全面的Android面试课程，赢取称心offer的不二之选</li>
								<li style="color: gray;height: 60px;list-style: none;font-size: 12px;margin-left: -8px;">822人在学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288元</li>
							</ul>-->
						</div>
					</div>
					<div class="w2" id="ddd4">
					<!--	<a style="position: absolute;top: 73px;left: 775px;">Android</a>-->
						<div class="e2" id="idd4" style="cursor: pointer;">
							<!--<ul>
								<li  style="color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;">BAT大咖助力&nbsp;&nbsp;全面升级Android面试</li>
								<li style="color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;">2017年最全面的Android面试课程，赢取称心offer的不二之选</li>
								<li style="color: gray;height: 60px;list-style: none;font-size: 12px;margin-left: -8px;">822人在学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288元</li>
							</ul>-->
						</div>
					</div>
					<div class="w2" id="ddd5">
						<!--<a style="position: absolute;top: 73px;left:1019px;">PHP</a>-->
						<div class="e2" id="idd5" style="cursor: pointer;">
							<!--<ul>
								<li  style="color: black;height: 60px;list-style: none;padding-top: 20px;margin-left: -8px;">BAT大咖助力&nbsp;&nbsp;全面升级Android面试</li>
								<li style="color: gray;font-size: 12px;height: 60px;list-style: none;margin-left: -8px;">2017年最全面的Android面试课程，赢取称心offer的不二之选</li>
								<li style="color: gray;height: 60px;list-style: none;font-size: 12px;margin-left: -8px;">822人在学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;288元</li>
							</ul>-->
						</div>
					</div>
					
				</div>
			</div>
</body>
</html>
