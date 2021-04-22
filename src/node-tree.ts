class NodeTree<T> {
    private _data: T;
    private _left: NodeTree<T> | null;
    private _right: NodeTree<T> | null;

    constructor(data: T, left?: NodeTree<T> | null, right?: NodeTree<T> | null) {
        this._data = data;
        this._left = null;
        this._right = null;
    }

    get data(): T {
        return this._data;
    }

    set data(value: T) {
        this._data = value;
    }

    get left(): NodeTree<T> | null {
        return this._left;
    }

    set left(value: NodeTree<T> | null) {
        this._left = value;
    }

    get right(): NodeTree<T> | null {
        return this._right;
    }

    set right(value: NodeTree<T> | null) {
        this._right = value;
    }
}

export class BinarySearchTree<T> {
    private _root: NodeTree<T> | null;

    constructor() {
        this._root = null;
    }

    get root(): NodeTree<T> | null {
        return this._root;
    }

    insert(data: T): void {
        const newNode = new NodeTree(data);

        if (this._root === null) {
            this._root = newNode;
        } else {
            this._insertNode(this._root, newNode);
        }
    }

    private _insertNode(node: NodeTree<T>, newNode: NodeTree<T>): void {
        if (newNode.data < node.data ) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                if (node.left) {
                    this._insertNode(node.left, newNode);
                }
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                if (node.right) {
                    this._insertNode(node.right, newNode);
                }
            }
        }
    }

    keyExtraction(node: NodeTree<T> | null, data: T): NodeTree<T> | undefined | null {
        if (node === null) {
            return null;
        }
        if (data < node.data && node.left) {
            return this.keyExtraction(node.left, data);
        }
        if (data > node.data && node.right) {
            return this.keyExtraction(node.right, data);
        }
        return node;
    }

    minNode(node: NodeTree<T>): NodeTree<T> {
        if (node.left === null) {
            return node;
        }
        return this.minNode(node.left);
    }

    remove(data: T): void {
        this._root = this.removeNode(this.root, data);
    }

    removeNode(node: NodeTree<T> | null, data: T): NodeTree<T> | null {
        if (node === null) {
            return null;
        }
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        }
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        }
        if (node.right === null) {
            node = node.left;
            return node;
        }
        const newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }

    inOrderTraverse(node: NodeTree<T> | null): void {
        if (node != null) {
            this.inOrderTraverse(node.left);
            console.log(node.data);
            this.inOrderTraverse(node.right);
        }
    }
}
