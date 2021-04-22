var NodeTree = /** @class */ (function () {
    function NodeTree(data, left, right) {
        this._data = data;
        this._left = null;
        this._right = null;
    }
    Object.defineProperty(NodeTree.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeTree.prototype, "left", {
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeTree.prototype, "right", {
        get: function () {
            return this._right;
        },
        set: function (value) {
            this._right = value;
        },
        enumerable: false,
        configurable: true
    });
    return NodeTree;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this._root = null;
    }
    Object.defineProperty(BinarySearchTree.prototype, "root", {
        get: function () {
            return this._root;
        },
        enumerable: false,
        configurable: true
    });
    BinarySearchTree.prototype.insert = function (data) {
        var newNode = new NodeTree(data);
        if (this._root === null) {
            this._root = newNode;
        }
        else {
            this._insertNode(this._root, newNode);
        }
    };
    BinarySearchTree.prototype._insertNode = function (node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                if (node.left) {
                    this._insertNode(node.left, newNode);
                }
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                if (node.right) {
                    this._insertNode(node.right, newNode);
                }
            }
        }
    };
    BinarySearchTree.prototype.keyExtraction = function (node, data) {
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
    };
    BinarySearchTree.prototype.minNode = function (node) {
        if (node.left === null) {
            return node;
        }
        return this.minNode(node.left);
    };
    BinarySearchTree.prototype.remove = function (data) {
        this._root = this.removeNode(this.root, data);
    };
    BinarySearchTree.prototype.removeNode = function (node, data) {
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
        var newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    };
    BinarySearchTree.prototype.inOrderTraverse = function (node) {
        if (node != null) {
            this.inOrderTraverse(node.left);
            console.log(node.data);
            this.inOrderTraverse(node.right);
        }
    };
    return BinarySearchTree;
}());
export { BinarySearchTree };
