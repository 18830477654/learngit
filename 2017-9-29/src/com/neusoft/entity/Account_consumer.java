package com.neusoft.entity;

import java.io.Serializable;

public class Account_consumer implements Serializable{

	/**
	 * -- 会员表
-- 买家帐号信息
	 */
	private static final long serialVersionUID = 4383858606761123055L;
	private int id;
	private String loginname;
	private String password;
	private int registertime;
	private int lastlogintime;
	private String ip;
	public Account_consumer() {
		super();
	}
	public Account_consumer(String loginname, String password, int registertime, int lastlogintime, String ip) {
		super();
		this.loginname = loginname;
		this.password = password;
		this.registertime = registertime;
		this.lastlogintime = lastlogintime;
		this.ip = ip;
	}
	public Account_consumer(int id, String loginname, String password, int registertime, int lastlogintime, String ip) {
		super();
		this.id = id;
		this.loginname = loginname;
		this.password = password;
		this.registertime = registertime;
		this.lastlogintime = lastlogintime;
		this.ip = ip;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getLoginname() {
		return loginname;
	}
	public void setLoginname(String loginname) {
		this.loginname = loginname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getRegistertime() {
		return registertime;
	}
	public void setRegistertime(int registertime) {
		this.registertime = registertime;
	}
	public int getLastlogintime() {
		return lastlogintime;
	}
	public void setLastlogintime(int lastlogintime) {
		this.lastlogintime = lastlogintime;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	@Override
	public String toString() {
		return "Account_consumer [id=" + id + ", loginname=" + loginname + ", password=" + password + ", registertime="
				+ registertime + ", lastlogintime=" + lastlogintime + ", ip=" + ip + "]";
	}
	
}
