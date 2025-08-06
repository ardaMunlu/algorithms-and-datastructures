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
		if(this.isEmpty()) {
			console.log("Queueu is empty!");
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
		console.log("List is empty!")
	}else {
		let curr = this.head
		let listValues = ""
		while(curr) {
			listValues += `${curr.value}`
			curr = curr.next
		}
		console.log(listValues)
	}
  }

	append(value) {
		const node = new Node(value);
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


removeValue(value) {
  if(this.isEmpty()){
    return null
  }
  if(this.head.value === value) {
    this.head = this.head.next
    this.size--
    return value
  } else {
    let prev = this.head
    while(prev.next && prev.next.value !== value){
      prev = prev.next
    }
    if(prev.next) {
      removedNode = prev.next
      prev.next = removedNode.next
      this.size--
      return value
    }
    return null
  }
}

search(value){
  if(this.isEmpty()){
    return -1
  }
  let i = 0;
  let curr = this.head
  while(curr) {
    if(curr.value === value){
      return i
    }
    curr = curr.next
    i++
  }
  return -1
}

reverse(){
  let prev = null
  let curr = this.head
  while(curr){
    let next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  this.head = prev;
}

	class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	isEmpty(){
		return this.size === 0
	}

	getSize() {
		return this.size
	}

	print() {
		if(this.isEmpty()) {
			console.log('List is empty')
		} else {
			let curr = this.head
			let listValues = ''
			while (curr) {
				listValues += `${curr.value}`
				curr = curr.next
			}
			console.log(listValues)
		}
	}

	prepend(value) {
		const node = new Node(value)
		if(this.isEmpty()){
			this.head = node
			this.tail = node
		} else {
			node.next = this.head
			this.head = node
		}
		this.size++
	}

	append(value) {
		const node = new Node(value)
		if(this.isEmpty()){
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			this.tail = node
		}
		this.size++
	}

	removeFromFront() {
		if(this.isEmpty()) {
			return null
		}
		const value = this.head.value
		this.head = this.head.next
		this.size--
		return value
	}

	removeFromEnd() {
		if(this.isEmpty()){
			return null
		} 
		const value = this.tail.value
		if(this.size === 1) {
			this.head = null
			this.tail = null
		} else {
			let prev = this.head
			while(prev.next !== this.tail) {
				prev = prev.next
			}
			prev.next = null
			this.tail = prev
		}
		this.size--
		return value
	}
}

}
//************************  LINKED LIST STACK	
module.exports = LinkedList

const LinkedList = requiere('./linked-list')

class LinkedListStack {
	constructor() {
		this.list = new LinkedList();
	}

	push(value) {
		this.list.prepend(value)
	}

	pop() {
		return this.list.removeFromFront()
	}

	peek() {
		return this.list.head.value
	}

	isEmpty() {
		return this.list.isEmpty()
	}

	getSize() {
		return this.getSize()
	}

	print() {
		return this.list.print()
	}
}
//************************ LINKED LIST QUEUE
module.exports = LinkedList

const LinkedList = requiere('./linked-list')

class LinkedListQueue {
	constructor() {
		this.list = new LinkedList()
	}

	enqueue(value){
		this.list.append(value)
	}

	dequeue() {
		this.list.removeFromFront()
	}

	peek() {
		return this.list.head.value
	}

	isEmpty() {
		return this.list.isEmpty()
	}

	getSize() {
		return this.list.getSize()
	}

	print() {
		return this.list.print()
	}

}

//there is also doubly linked list which can be useful for some problems

// HASH TABLE

class HashTable{
	constructor(size) {
		this.table = new Array(size)
		this.size = size
	}

	hash(key) {
		let total = 0
		for(let i = 0; i <key.length; i++) {
			total += key.charCodeAt(i)
		}
		return total % this.size
	}

	set(key, value) {
		const index = this.hash(key)
		this.table[index] = value
	}

	get(key) {
		const index = this.hash(key)
		return this.table[index]
	}

	remove(key) {
		const index = this.hash(key)
		this.table[index] = undefined
	}

	display() {
		for(let i = 0; i < this.table.length; i++){
			if(this.table[i]) {
				console.log(i, this.table[i])
			}
		}
	}
}

//HASH TABLE COLLISIONS

class HashTable{
	constructor(size) {
		this.table = new Array(size)
		this.size = size
	}

	hash(key) {
		let total = 0
		for(let i = 0; i <key.length; i++) {
			total += key.charCodeAt(i)
		}
		return total % this.size
	}

	set(key, value) {
		const index = this.hash(key)

		const bucket = this.table[index]
		if(!bucket) {
			bucket = [[key, value]]
		} else {
			const sameKeyItem = bucket.find(item => item[0] === key)
			if(sameKeyItem) {
				sameKeyItem[1] = value
			} else {
				bucket.push([key, value])
			}
		}
	}

	get(key) {
		const index = this.hash(key)
		
		const bucket = this.table[index]
		if(bucket) {
			const sameKeyItem = bucket.find(item => item[0] === key)
			if(sameKeyItem) {
				return sameKeyItem[1]
			} 
		}
		return undefined
	}

	remove(key) {
		const index = this.hash(key)
		 const bucket = this.table[index]
		 if(bucket) {
			const sameKeyItem = bucket.find(item => item[0] === key)
			if(sameKeyItem) {
				bucket.splice(bucket.indexOf(sameKeyItem), 1)
			}
		 }
	}

	display() {
		for(let i = 0; i < this.table.length; i++){
			if(this.table[i]) {
				console.log(i, this.table[i])
			}
		}
	}
}

//BINARY SEARCH TREE

class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	isEmpty() {
		return this.root === null
	}

	insert(value) {
		const newNode = new Node(value)
		if(this.isEmpty()) {
			this.root = newNode
		} else {
			this.insertNode(this.root, newNode)
		}
	}

	insertNode(root, newNode) {
		if(newNode.value < root.value) {
			if(root.left === null) {
				root.left = newNode
			} else {
				this.insertNode(root.left, newNode)
			}
		} else {
			if(root.right === null) {
				root.right = newNode
			} else {
				this.insertNode(root.right, newNode)
			}
		}
	}

	search(root, value) {
		if(!root) {
			return false
		} else {
			if(root.value === value) {
				return true
			} else if(value < root.value) {
				return this.search(root.left, value)
			} else {
				return this.search(root.right, value)
			}
		}
	}
//Depth First Search
	preOrder(root) {
		if(root) {
			console.log(root.value)
			this.preOrder(root.left)
			this.preOrder(root.right)
		}
	}

	inOrder(root) {
		if(root) {
			this.inOrder(root.left)
			console.log(root.value)
			this.inOrder(root.right)
		}
	}

	postOrder(root) {
		if(root) {
			this.postOrder(root.left)
			this.postOrder(root.right)
			console.log(root.value)
		}
	}
//Breadth First Search

	levelOrder() {
		const queue = [];

		queue.push(this.root)
		while(queue.length) {
			let curr = queue.shift()
			console.log(curr.value)
			if(curr.left) {
				queue.push(curr.left)
			}
			if(curr.right) {
				queue.push(curr.right)
			}
		}
	}

	min(root) {
		if(!root.left) {
			return root.value
		} else {
			return this.min(root.left)
		}
	}

	max(root){
		if(!root.right) {
			return root.value
		} else {
			return this.max(root.right)
		}
	}

	delete(value) {
		this.root = this.deleteNode(this.root, value)
	}

	deleteNode(root, value) {
		if(root === null) {
			return root
		}
		if(value < root.value) {
			root.left = this.deleteNode(root.left, value)
		} else if(value > root.value) {
			root.right = this.deleteNode(root.right, value)
		} else {
			if(!root.left && !root.right){
				return null
			}
			if(!root.left){
				return root.right
			} else if (!root.right) {
				return root.left
			}
			root.value = this.min(root.right)
			root.right = this.deleteNode(root.right, root.value)
		}
		return root
	}
}
//GRAPH

const matrix = [
	[0, 1, 0],
	[1, 0, 1],
	[0, 1, 0]
]

adjacencyList = {
	'A' : ['B'],
	'B' : ['A', 'C'],
	'C' : ['B']
}

class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if(!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = new Set()
		}
	}

	addEdge(vertex1, vertex2) {
		if(!this.adjacencyList[vertex1]) {
			this.addVertex(vertex1)
		}
		if(!this.adjacencyList[vertex2]) {
			this.addVertex(vertex2)
		}
		this.adjacencyList[vertex1].add(vertex2)
		this.adjacencyList[vertex2].add(vertex1)
	}

	hasEdge(vertex1, vertex2) {
		return (
			this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
		)
	}

	display() {
		for(let vertex in this.adjacencyList) {
			console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
		}
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1].delete(vertex2)
		this.adjacencyList[vertex2].delete(vertex1)
	}

	removeVertex(vertex) {
		if(!this.adjacencyList[vertex]) {
			return
		}
		for(let adjacentVertex of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, adjacentVertex)
		}
		delete this.adjacencyList[vertex]
	}
}
