package com.edu;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class TestCurrency {

	private static ThreadPoolExecutor executorService;
	static {
		int size = 5;
		executorService = new ThreadPoolExecutor(size, size, 500L, TimeUnit.MILLISECONDS, new ArrayBlockingQueue<Runnable>(size),
				new ThreadPoolExecutor.CallerRunsPolicy());
	}
	
	public static void main(String[] args) {
		long st = System.nanoTime();
		List<Future<Boolean>> fs = new ArrayList<>();
		for(int i = 0; i < 10; i++) {
			Future<Boolean> f = executorService.submit(new MyJob());
			fs.add(f);
		}
		for(Future<Boolean> f : fs) {
			try {
				f.get(2, TimeUnit.SECONDS);
			} catch (InterruptedException | ExecutionException | TimeoutException e) {
				//f.cancel(true);
				e.printStackTrace();
			}
		}
		System.out.println("Done: " + TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - st) );
		
	}
	
	private static class MyJob implements Callable<Boolean> {
		public Boolean call() {
			System.out.println(Thread.currentThread().getName() + " - start ");
			try {
				TimeUnit.SECONDS.sleep(5);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println(Thread.currentThread().getName() + " - end ");
			return Boolean.TRUE;
		}
	}
}
