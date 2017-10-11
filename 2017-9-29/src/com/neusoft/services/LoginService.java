package com.neusoft.services;

import com.neusoft.dao.AccountDao;
import com.neusoft.entity.Account;
import com.neusoft.entity.Account_product;
import com.neusoft.utils.Daofactory;

/**
 * 业务逻辑层
 * */
public class LoginService {

	
	 /**
	  * 处理登录业务逻辑。
	  * @param username 用户名
	  * @param password 密码
	  * @return true:登录成功 
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
