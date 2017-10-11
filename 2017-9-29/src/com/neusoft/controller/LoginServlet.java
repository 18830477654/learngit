package com.neusoft.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLEncoder;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.neusoft.entity.Account;
import com.neusoft.entity.Account_product;
import com.neusoft.entity.Product;
import com.neusoft.services.LoginService;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	   response.setContentType("text/html;charset=\"utf-8\"");
	   request.setCharacterEncoding("utf-8");
	   PrintWriter pw = response.getWriter();
	     pw.append("<html>");
		 pw.append("<head>");
		 pw.append("<title>Hello servlet</title>");
		 pw.append("<link rel=\"stylesheet\" href=\"css/login.css\" />");
		 pw.append("</head>");
		 pw.append("<body>");
		 pw.append("<form action=\"\" method=\"get\">");
		 pw.append("<div id=\"box\">");
		 pw.append("<div id=\"header\">");
		 pw.append("<img src=\"img/1q.png\" width=\"474px\" height=\"60px\"/>");
		 pw.append("</div>");
		 pw.append("<div id=\"middle\">");
		 pw.append("<div id=\"middle_left\">");
		 pw.append("<img src=\"img/2q.png\" width=\"190px\"height=\"159px\"/>");
		 pw.append("</div>");
		 pw.append("<div id=\"middle_right\">");
		 pw.append("<div id=\"mm\"> ");
		 pw.append("用户：<input type=\"text\" name=\"username\"/><br />");
		 pw.append("密码：<input type=\"text\" name=\"password\"/>");
		 pw.append("<input type=\"checkbox\" name=\"checkbox\" value=\"1\" style=\"width:13px; position:absolute;top:306px;left: 713px;\" />");
		 pw.append("<span style=\"position: absolute; top: 316px;left:736px;font-family: '微软雅黑';font-size: 12px;\">下次自动登录</span>");
		 pw.append("<input type=\"hidden\" name=\"tt\" value=\"1\"/><br/>");
		 pw.append("</div>");
		 pw.append("<div id=\"bb\">");
		 pw.append("<button>登录</button>");
		 pw.append("</div>");
		 pw.append("</div>");
		 pw.append("</div>");
		 pw.append("<div id=\"footer\">");
		 pw.append("<img src=\"img/11.png\" style=\"margin-left: -2px;\" width=\"478px\"/>");
		 pw.append("</div>");
		 pw.append("</div>");
		 pw.append("</form>");
		 pw.append("</body>");
		 pw.append("</html>");
	   String user = request.getParameter("username");
	   String psw = request.getParameter("password");
	   String type=request.getParameter("tt");
	   
	  HttpSession session =  request.getSession();
	    if(type!=null&&!type.equals("")&&type.equals("1")) {
	    	 if(user==null||user.equals(""))
	  	   {
	  		   pw.append("<script>alert(\"账号不能为空\")</script>");
	  		   ;
	  	   }
	  	   if(psw==null||psw.equals(""))
	  		
	  	   {  
	  		   pw.append("<script>alert(\"密码不能为空\")</script>");
	  		    return;
	  	  }
	  	   LoginService ls = new LoginService();
	  	   Account acc=new Account(user,psw,request.getRemoteAddr());
	  	   acc = ls.doLogin(acc);
	  	   
	  	   
	  	   
	  	   
	  	 Product p = new Product();
	  	 request.setAttribute("id1", p.getPname());
	  	   
	  	   
	  	   
	  	   
	  	   if(acc!=null)
	  	   {
	  		   String isChecked= request.getParameter("checkbox");
	  		   if(isChecked!=null&&isChecked.equals("1")){
	  			   Cookie username_cookie = new Cookie("username_cookie", URLEncoder.encode(user,"utf-8"));
	  			   username_cookie.setMaxAge(604800);
	  			   Cookie psw_cookie = new Cookie("password_cookie",psw);
	  			   psw_cookie.setMaxAge(604800);
	  			   response.addCookie(username_cookie);
	  			   response.addCookie(psw_cookie);
	  			   
	  		   }
	  		   pw.append("<script>alert(\"登录成功\")</script>");
	  		   session.setAttribute("acc", acc);
	  		   request.getRequestDispatcher("shanpin.jsp").forward(request, response);
	  	   }else
	  	   { 
	  		   pw.append("<script>alert(\"登录失败\")</script>");
	  		   request.setAttribute("acc", new Account_product("admin","admin","127.0.0.1"));
	  	   }
	    }
	  
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
}
