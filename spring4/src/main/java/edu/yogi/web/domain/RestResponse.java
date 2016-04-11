package edu.yogi.web.domain;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RestResponse<T> {
	private String message;
	private T data;
	private String status;
	
	public String getMessage() {
		return this.message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getData() {
		return this.data;
	}
	public void setData(T data) {
		this.data = data;
	}
	public String getStatus() {
		return this.status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
