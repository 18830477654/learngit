package com.neusoft.controller.consumer;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.neusoft.dao.ConsumerDao;
import com.neusoft.dao.impl.ConsumerDaoImpl;
import com.neusoft.services.Consumerservice;

/**
 * Servlet implementation class shanchuServlet
 */
@WebServlet("/shanchuServlet")
public class shanchuServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public shanchuServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	String ss = request.getParameter("cid");
	int id =Integer.parseInt(ss);
	ConsumerDao cc= new ConsumerDaoImpl();
		cc.deleteConsumer(id);
		request.getRequestDispatcher("ReadConsumerServlet").forward(request, response);
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
