package com.edu;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Test {

	public static void main(String[] args) {
		int[][][] numbers6 = {};
		System.out.println(Arrays.toString(numbers6));
		
		int[][] numbers7 = new int[5][4];
		System.out.println(Arrays.deepToString(numbers7));
		
		List<String> list = Collections.singletonList("A");
		list.forEach(System.out::println);
		
		
		

	}

}
