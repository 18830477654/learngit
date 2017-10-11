package com.neusoft.services;

import com.neusoft.dao.AccountDao;
import com.neusoft.entity.Account;
import com.neusoft.entity.Account_product;
import com.neusoft.utils.Daofactory;

/**
 * ҵ���߼���
 * */
public class LoginService {

	
	 /**
	  * �����¼ҵ���߼���
	  * @param username �û���
	  * @param password ����
	  * @return true:��¼�ɹ� 
	  * */
	public Account doLogin(Account acc2) {
		
		
		AccountDao accDao=Daofactory.getInstance("ProductDao",null);
		Account acc=null;
   	   acc=accDao.doLogin(acc2.getUsername(), acc2.getPassword());
   	   if(acc!=null) {
   			 acc.setLogindate(System.currentTimeMillis());
   			 acc.setIp(acc2.getIp());
   			 accDao.update(acc);
   	   }
       return acc;
	}
	
}
