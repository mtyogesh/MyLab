package com.edu;

import java.util.LinkedList;
import java.util.Queue;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * * Simple Java program to demonstrate How to use wait, notify and notifyAll() * method in Java by solving producer consumer problem. *
 * * @author Javin Paul
 */
public class ProducerConsumerInJava {
	public static void main(String args[]) {
		System.out.println("How to use wait and notify method in Java");
		System.out.println("Solving Producer Consumper Problem");
		Queue<Integer> buffer = new LinkedList<>();
		int maxSize = 10;
		Thread producer1 = new Producer(buffer, maxSize, "PRODUCER1");
		Thread producer2 = new Producer(buffer, maxSize, "PRODUCER2");
		Thread producer3 = new Producer(buffer, maxSize, "PRODUCER3");
		Thread consumer = new Consumer(buffer, maxSize, "CONSUMER");
		producer1.start();
		producer2.start();
		producer3.start();
		consumer.start();
	}
}

/**
 * * Producer Thread will keep producing values for Consumer * to consumer. It will use wait() method when Queue is full * and use notify()
 * method to send notification to Consumer * Thread. * * @author WINDOWS 8 *
 */
class Producer extends Thread {
	private Queue<Integer> queue;
	private int maxSize;
	private String name;
	private AtomicInteger jobNum = new AtomicInteger(0);

	public Producer(Queue<Integer> queue, int maxSize, String name) {
		super(name);
		this.queue = queue;
		this.maxSize = maxSize;
		this.name = name;
	}

	@Override
	public void run() {
		while (true) {
			synchronized (queue) {
				while (queue.size() == maxSize) {
					try {
						System.out.println("Queue is full, " + "Producer thread waiting for " + "consumer to take something from queue");
						queue.wait();
					} catch (Exception ex) {
						ex.printStackTrace();
					}
				}
				Integer i = jobNum.incrementAndGet();
				System.out.println(name + ": Producing value : " + i);
				queue.add(i);
				queue.notify();
			}
			try {
				TimeUnit.MICROSECONDS.sleep(0);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}

/**
 * * Consumer Thread will consumer values form shared queue. * It will also use wait() method to wait if queue is * empty. It will also use
 * notify method to send * notification to producer thread after consuming values * from queue. * * @author WINDOWS 8 *
 */
class Consumer extends Thread {
	private Queue<Integer> queue;
	private int maxSize;

	public Consumer(Queue<Integer> queue, int maxSize, String name) {
		super(name);
		this.queue = queue;
		this.maxSize = maxSize;
	}

	@Override
	public void run() {
		while (true) {
			synchronized (queue) {
				while (queue.isEmpty()) {
					System.out.println("Queue is empty," + "Consumer thread is waiting" + " for producer thread to put something in queue");
					try {
						queue.wait();
					} catch (Exception ex) {
						ex.printStackTrace();
					}
				}
				System.out.println("Consuming value : " + queue.remove());
				queue.notify();
			}
			try {
				TimeUnit.MICROSECONDS.sleep(0);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
	}
}

// Read more:http:// javarevisited.blogspot.com/2015/07/how-to-use-wait-notify-and-notifyall-in.html#ixzz4nThHbvvt