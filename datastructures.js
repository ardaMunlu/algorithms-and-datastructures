//DATA STRUCTURES

//QUEUE IMPLEMENTATION

class Queue {
	constructor(){
		this.items = {}
		this.rear = 0
		this.front = 0
	}

	enqueue(element) {
		this.items[this.rear] = element
		this.rear++
	}

	dequeue() {
		const item = this.items[this.front]
		delete this.items[this.front]
		this.front++
		return item
	}

	isEmpty() {
		return this.rear - this.front === 0
	}

	peek() {
		return this.items[this.front]
	}

	size() {
		return this.rear - this.front
	}

	print() {
		console.log(this.items)
	}
}

//CIRCULAR QUEUE IMPLEMENTATION

class CircularQueue {
	constructor(capacity){
		this.items = new Array(capacity)
		this.capacity = capacity
		this.currentLength = 0;
		this.rear = -1;
		this.front = -1;
	}

	isFull() {
		return this.currentLength === this.capacity
	}

	isEmpty() {
		return this.currentLength === 0
	}

	enqueue(element) {
		if(!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity
			this.items[this.rear] = element
			this.currentLength += 1
			if(this.front === -1) {
				this.front = this.rear
			}
		}
	}

	dequeue() {
		if(this.isEmpty()) {
			return null
		}
		const item = this.items[this.front]
		this.items[this.front] = null
		this.front = (this.front + 1) % this.capacity
		this.currentLength -= 1
		if(this.isEmpty()){
			this.front = -1
			this.rear = -1
		}
		return item
	}

	peek() {
		if(!this.isEmpty()) {
			return this.items[this.front]
		}
		return null
	}

	print() {
		is(this.isEmpty()) {
			console.log("Queueu is empty!")
		} else {
			let i
			let str = ''
			for(i = this.front; i !== this.rear; i = (i+1) % this.capacity) {
				str += this.items[i] + " "
			}
			str += this.items[i]
			console.log(str)
		}
	}
}

//LINKED LIST IMPLEMENTATION

class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.size = 0
	}

	isEmpty() {
		return this.size === 0
	}

	getSize() {
		return this.size
	}

	prepend(value) {
		const node = new Node(value)
		if(this.isEmpty()) {
			this.head = node
		} else {
			node.next = this.head
			this.head = node
		}
		this.size++
	}

	print() {
		if(this.isEmpty){
		console.log("List is empty!"}
	}else {
		let curr = this.head
		let listValues = ""
		while(curr) {
			listValues += `${curr.value}`
			curr = curr.next
		}
		console.log(listValues)
	}

	append(value) {
		const node = new Node(value)
		if(this.isEmpty()){
			this.head = node
		}else {
			let prev = this.head
			while(prev.next) {
				prev = prev.next
			}
			prev.next = node
		}
		this.size++
	}

	insert(value, index) {
		if(index < 0 || index > this.size){
			return 
		}
		if(index === 0){
			this.prepend(value)
		} else {
			const node = new Node(value)
			let prev = this.head
			for(let i =0; i < index-1; i++){
				prev = prev.next
			}
			node.next = prev.next
			prev.next = node
			this.size++
		}
	}

	removeFrom(index){
		if(index < 0 || index >= this.size){
			return null
		} 
		let removeNode
		if(index === 0) {
			removeNode = this.head
			this.head = this.head.next
		} else {
			let prev = this.head
			for(let i =0; i < index -1;i++){
				prev = prev.next
			}
			removeNode = prev.next
			prev.next = removeNode.next
		}
		this.size--
		return removeNode.value
	}
}
