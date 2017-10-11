package com.neusoft.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.neusoft.entity.PageModel;
import com.neusoft.entity.Product;
import com.neusoft.services.ProductService;

@WebServlet("/ReadProductServlet")
public class ReadProductServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public ReadProductServlet() {
        super();
    }
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		
	
	ProductService ps = new ProductService();
	
//	System.out.println(pageNo);
//	String pageSize=request.getParameter("pageSize");
//	int _pageNo=Integer.parseInt(pageNo);
//	int _pageSize=Integer.parseInt(pageSize);
//	PageModel<Product> pro=new PageModel<Product>();
//	request.setAttribute("aaa", pro);
//	request.setAttribute("aa", _pageNo);
	ps.getProductLogin(request, response);
	
	
}	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
