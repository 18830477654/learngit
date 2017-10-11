package test;

import com.neusoft.dao.AccountDao;
import com.neusoft.entity.Account;
import com.neusoft.utils.Daofactory;

public class TestAccount {

	public static void main(String[] args) {
		testLogin();
	}
	
	public static void testLogin(){
		
		AccountDao accDao=Daofactory.getInstance("ProductDao", null);
		Account acc=accDao.doLogin("admin1", "admin");
		 if(acc!=null) {
			 acc.setLogindate(System.currentTimeMillis());
			 acc.setIp("10.25.151.113");
			 accDao.update(acc);
		 }
		
	}
	
}
