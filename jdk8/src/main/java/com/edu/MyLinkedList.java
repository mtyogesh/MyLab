package com.edu;

public class MyLinkedList {

	public static void main(String[] args) {
		MyLinkedList list = new MyLinkedList();
		list.add("A");
		list.add("B");
		list.add("C");
		list.add("D");
		list.add("E");

		list.print();
		list.reverse();

		/*
		 * Node n1 = list.head; Node n2 = list.head.next; //list.head = null;
		 * list.reverse(n1, n2);
		 */
		list.print();
	}

	Node head;

	private void add(String value) {
		Node n = new Node();
		n.value = value;
		if (head == null) {
			head = n;
		} else {
			Node tn = head;
			tn.head = head;
			while (tn.next != null) {
				tn = tn.next;
			}
			tn.next = n;
		}
	}

	private void print() {
		System.out.println();
		Node n = head;
		while (n != null) {
			System.out.printf("%4s", n.value);
			n = n.next;
		}
	}

	private void reverse() {
		Node n = this.head;
		Node rn = null;
		while (n != null) {
			Node t = n.next;
			n.next = rn;
			rn = n;
			n = t;
		}
		this.head = rn;
	}

	private void reverseRec(Node n1, Node n2) {
		System.out.println("n1:" + n1.value + " n2:" + n2.value);
		if (n2.next == null) {
			this.head = n2;
			return;
		}
		Node t = n2.next;
		n2.next = n1;
		this.head.next = null;
		reverseRec(n2, t);
	}
}

class Node {
	String value;
	Node next;
	Node head;
}
