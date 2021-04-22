import { BinarySearchTree } from "./node-tree.js";

const BST = new BinarySearchTree();
BST.insert(11);
BST.insert(7);
BST.insert(9);
BST.insert(15);
BST.insert(6);
BST.insert(8);
BST.insert(10);
// console.log(BST);
// console.log(BST.search(BST.root, 9));
// BST.remove(7);
// console.log(BST);
console.log(BST.inOrderTraverse(BST.root));
