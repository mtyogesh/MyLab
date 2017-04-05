package com.edu;

public class NumberTest {

	public static void main(String[] args) {
		int a = 9;
		int b = 5;
		
		int c = a / b;
		System.out.println(c);
		c = (int) Math.ceil(a / (float)b);
		System.out.println(c);
	}

}
