package com.neusoft.services;

import com.neusoft.dao.LgConsumerDao;
import com.neusoft.entity.Account_consumer;
import com.neusoft.utils.Daofactory;

public class AccountLoginService {

	
	public Account_consumer doLogin(Account_consumer acc) {
		LgConsumerDao accDao=Daofactory.getInstance("LgConsumerDao",null);
		Account_consumer acc1= accDao.addConsumer(acc.getLoginname(), acc.getPassword());
		return acc1;
	}
}
