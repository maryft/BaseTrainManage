<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
  <head>
    <meta content="text/html;charset=utf-8">
    <title>高校实训学生管理系统</title>
   <style type="text/css">
   	body{
   		margin:0px;
   		padding:0px;
   		font-size:12px;
   		font-family:"宋体";
   		text-align:center;
   	}
   #front{
   	position:relative;
   	top:-50px;
   	margin-left:1292px;
   	width:10px;
   }
   #flush{
   	position:relative;
   	top:-65px;
   	margin-left:1390px;
   	width:10px;
   }
   #end{
   	position:relative;
   	top:-80px;
   	margin-left:1480px;
   	width:10px;
   }
   a{
   	color:black;
   	text-decoration: none;
   	
   }

 a:hover{
   color:blue;
   }
 a:active{
	color:blue;
}
  
   </style>
  </head>
  
  <body>
  	<div id="back"><img src="../image/head.png"/></div>
  	<div id="front">首&nbsp;页</div>
  	<div id="flush"><a href="../studentLogin.jsp">登&nbsp;录</a></div>
  	<div id="end" onclick="window.close();">退&nbsp;出</div>
  	
  </body>
</html>
