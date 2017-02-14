package com.edu;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class SortingTest {

	public static void main(String[] args) {
		List<Abc> list = new ArrayList<>();
		list.add(new Abc("A", 1));
		list.add(new Abc("A10", 10));
		list.add(new Abc("A4", 4));
		list.add(new Abc("A2", 2));
		list.add(new Abc("A5", 5));
		list.add(new Abc("A6", 6));
		
		System.out.println(list);
		list = list.stream().sorted((e1, e2) -> Integer.compare(e1.age, e2.age)).collect(Collectors.toList());
		System.out.println(list);
		
	
	}
	
	
	public static class Abc {
		String name;
		int age;
		
		public Abc(String name, int age) {
			this.name = name;
			this.age = age;
		}
		
		public String getName() {
			return this.name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public int getAge() {
			return this.age;
		}
		public void setAge(int age) {
			this.age = age;
		}
		@Override
		public String toString() {
			return String.format("Abc [name=%s, age=%s]", this.name, this.age);
		}
	}

}
