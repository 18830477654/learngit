package com.neusoft.entity;

import java.io.Serializable;

public class Shoppinginfo_consumer implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8955753686434078424L;
	private int id;
	private int aid;
	private String nickname;
	private double money;
	private int lasttime;
	public Shoppinginfo_consumer() {
		super();
	}
	public Shoppinginfo_consumer(int aid, String nickname, double money, int lasttime) {
		super();
		this.aid = aid;
		this.nickname = nickname;
		this.money = money;
		this.lasttime = lasttime;
	}
	public Shoppinginfo_consumer(int id, int aid, String nickname, double money, int lasttime) {
		super();
		this.id = id;
		this.aid = aid;
		this.nickname = nickname;
		this.money = money;
		this.lasttime = lasttime;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public double getMoney() {
		return money;
	}
	public void setMoney(double money) {
		this.money = money;
	}
	public int getLasttime() {
		return lasttime;
	}
	public void setLasttime(int lasttime) {
		this.lasttime = lasttime;
	}
	@Override
	public String toString() {
		return "Shoppinginfo_consumer [id=" + id + ", aid=" + aid + ", nickname=" + nickname + ", money=" + money
				+ ", lasttime=" + lasttime + "]";
	}
	
}
