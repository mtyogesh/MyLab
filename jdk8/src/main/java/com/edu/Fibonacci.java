package com.edu;

import java.math.BigInteger;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Fibonacci {

	private static long number = 20;

	public static void main(String[] args) {
		Stream<BigInteger> fiboStream = Stream.iterate(new Tuple<>(BigInteger.ONE, BigInteger.ONE), x -> new Tuple<>(x._2, x._1.add(x._2)))
				.limit(number).map(x -> x._1);
		// String result = fiboStream.map(BigInteger::toString).collect(Collectors.joining(" "));
		// System.out.println(result);

		
		//fiboStream.forEach(System.out::println);
		
		fiboStream.forEach(e -> System.out.println(e));
	}

	static class Tuple<T, U> {
		public final T _1;
		public final U _2;

		public Tuple(T t, U u) {
			this._1 = t;
			this._2 = u;
		}
	}
}