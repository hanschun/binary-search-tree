import {Node} from './node';

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data){
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    remove(data){
        this.root = this.removeNode(this.root, data);
    }

    renoveNode(node, key) {
        if (node === null) {
            return null;
        } else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            const aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }
    findMinNode(node){
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }
    getRootNode(){
        return this.root;
    }
    inOrder(node){
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    preOrder(node){
        if (node !== null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    postOrder(node){
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }

    }
    searcH(node, data){
        if (node === null) {
            return null;
        } else if (node.data < data) {
            return this.searcH(node.left, data);
        } else if (node.data > data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }
}