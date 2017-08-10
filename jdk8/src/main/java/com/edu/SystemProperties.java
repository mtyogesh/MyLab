package com.edu;

public class SystemProperties {

	public static void main(String[] args) {
		//System.getProperties().entrySet().stream().forEach(System.out::println);
		System.getProperties().entrySet().forEach(System.out::println);
		System.out.println("\n\n---------- Env ------------------");
		//System.getenv().entrySet().forEach(System.out::println);
		
		System.getenv().entrySet().stream().forEach((v)->{
			System.out.println(v);
		});
		
	}

}
