package com.neusoft.entity;

import java.util.List;

public class PageModel<T> {

	private Integer totalcount;//鎬荤殑璁板綍鏉�
	private List<T> datas;//褰撳墠鏁版嵁
	private int totalPageSize;//鎬诲叡椤垫暟
	private int pageNo;//褰撳墠绗嚑椤�
	
	
	
	

	public Integer getTotalcount() {
		return totalcount;
	}
	public void setTotalcount(Integer totalcount) {
		this.totalcount = totalcount;
	}
	public List<T> getDatas() {
		return datas;
	}
	public void setDatas(List<T> datas) {
		this.datas = datas;
	}
	
	
	public int getTotalPageSize() {
		return totalPageSize;
	}
	public void setTotalPageSize(int totalPageSize) {
		this.totalPageSize = totalPageSize;
	}
	
	
	
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	@Override
	public String toString() {
		return "PageModel [totalcount=" + totalcount + ", datas=" + datas + "]";
	}
	
}
