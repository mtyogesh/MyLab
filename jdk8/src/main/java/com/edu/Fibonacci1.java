package com.edu;

public class Fibonacci1 {

	public static void main(String[] args) {
		//System.out.println();
		System.out.println(fibonacci(5));
		//System.out.println(fact(4));
	}

	public static int fibonacci(int number) {
		//System.out.println(number);
		if (number == 1 || number == 2) {
			System.out.println(1);
			return 1;
		}
		//System.out.println((number - 1) + " - " + (number - 2));
		int res = fibonacci(number - 1) + fibonacci(number - 2);
		System.out.println(res);
		return res;
	}
	
	public static int fact(int number) {
		if (number == 0) {
			return 1;
		}
		return number * fact(number - 1);
	}

}
