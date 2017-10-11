package com.neusoft.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.neusoft.entity.Account_consumer;
import com.neusoft.services.AccountLoginService;

/**
 * Servlet implementation class AccountLoginServlet
 */
@WebServlet("/AccountLoginServlet")
public class AccountLoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AccountLoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=\"utf-8\"");
		request.setCharacterEncoding("utf-8");
		String username	= request.getParameter("logname");
		String password	= request.getParameter("logpass");
		PrintWriter pw = response.getWriter();
		Account_consumer a=null;
		AccountLoginService al = new AccountLoginService();
		Account_consumer ac = new Account_consumer(username, password, 0, 0, "asd");
		a= al.doLogin(ac);
		 if(a!=null){
			 request.getRequestDispatcher("zhuye.jsp").forward(request, response);
		 }else{
			 pw.append("<script>alert(\"’À∫≈√‹¬Î¥ÌŒÛ£¨µ«¬º ß∞‹\")</script>");
			 request.getRequestDispatcher("UserLogin.jsp").forward(request, response);
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
