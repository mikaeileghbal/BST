function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
	this.postOrder = postOrder;
	this.getMin = getMin;
	this.getMax = getMax;
	this.find = find;
	this.remove = remove;
	this.removeNode = removeNode;
}

function insert(data) {
	let n = new Node(data, null, null);
	if (this.root === null) {
		this.root = n;
	} else {
		let current = this.root;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current === null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current === null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

function inOrder(node) {
	if (node !== null) {
		inOrder(node.left);
		console.log(node.show() + ", ");
		inOrder(node.right);
	}
}

function preOrder(node) {
	if (node !== null) {
		console.log(node.show() + ", ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder(node) {
	if (node !== null) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + ", ");
	}
}

function getMin() {
	let current = this.root;
	while (current.left !== null) {
		current = current.left;
	}
	return current.data;
	// To return the position of node simply:
	// return current;
}

function getMax() {
	let current = this.root;
	while (current.right !== null) {
		current = current.right;
	}
	return current.data;
}

function find(data) {
	let current = this.root;
	while (current.data !== data) {
		if (data < current.data) {
			current = current.left;
		} else {
			current = current.right;
		}
		if (current === null) {
			return null;
		}
	}
	return current;
}
