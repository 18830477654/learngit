package com.neusoft.dao.impl;

import java.sql.Connection;
import java.sql.SQLException;

import org.apache.commons.dbutils.DbUtils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.ResultSetHandler;
import org.apache.commons.dbutils.handlers.BeanHandler;

import com.neusoft.dao.LgConsumerDao;
import com.neusoft.entity.Account;
import com.neusoft.entity.Account_consumer;
import com.neusoft.utils.ConnectionFactory;

public class LgConsumerDaoImpl implements LgConsumerDao{
	Connection conn=null;
	Account_consumer acc=null;
	QueryRunner qr=new QueryRunner();
	@Override
	public Account_consumer addConsumer(String loginname ,String password) {
		try {
			conn=ConnectionFactory.getConnection();
			String str = "select loginname,password from account_consumer where loginname=? and password=?";
			ResultSetHandler<Account_consumer> rsh=new BeanHandler<Account_consumer>(Account_consumer.class);
			acc=qr.query(conn, str, rsh, loginname,password);
		
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			
			DbUtils.closeQuietly(conn);
		}
		
		
		return acc;
	}

	
}
