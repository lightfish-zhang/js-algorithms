class Node {
  constructor(key, data){
    this.key = key;
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {

  constructor(){
    this.root = null;
  }

  insert(key, data){
    const node = new Node(key, data);
    if(null === this.root){
      this.root = node;
    }else{
      this.insertNode(this.root, node);
    }
  }

  insertNode(node, newNode){
    if(node.key === newNode.key){
      node.data = newNode.data;
    }

    if(newNode.key < node.key){
      if(null === node.left){
        node.left = newNode;
      }else{
        this.insertNode(node.left, newNode);
      }
    }else{
      if(null === node.right){
        node.right = newNode;
      }else{
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraverse(callback){
    this.inOrderTraverseNode(this.root, callback);
  }

  inOrderTraverseNode(node, callback){
    if(null !== node){
      this.inOrderTraverseNode(node.left, callback);
      callback(node);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback){
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback){
    if(null !== node){
      callback(node);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback){
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback){
    if(null !== node){
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node);
    }
  }

  search(key){
    return this.searchNode(this.root, key);
  }

  searchNode(node, key){
    if(null === node){
      return undefined;
    }
    if(key < node.key){
      return this.searchNode(node.left, key);
    }else if(key > node.key){
      return this.searchNode(node.right, key);
    }else{
      return node.data;
    }
  }

  min(){
    return this.minNode(this.root);
  }

  minNode(node){
    if(null !== node){
      while(null !== node && node.left !== null){
        node = node.left;
      }
      return node;
    }
    return null;
  }

  max(){
    return this.maxNode(this.root);
  }

  maxNode(node){
    if(null !== node){
      while(null !== node && node.right !== null){
        node = node.right;
      }
      return node;
    }
    return null;
  }

  remove(key){
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key){
    if(null === node){
      return null;
    }
    if(key < node.key){
      node.left = this.removeNode(node.left, key);
      return node;
    }else if(key > node.key){
      node.right = this.removeNode(node.right, key);
      return node;
    }else{

      // 1, it's a node without child
      if(null === node.left && null === node.right){
        node = null; // garbage collection work automitic
        return null;
      }

      // 2, it's a node with one child
      if(null === node.left){
        node = node.right;
        return node;
      }else if(null === node.right){
        node = node.left;
        return node;
      }

      // 3, it's a node with two children
      const rightMinNode = this.minNode(node.right);
      node.key = rightMinNode.key;
      node.data = rightMinNode.data;
      node.right = this.removeNode(node.right, rightMinNode);
      return node;
    }
  }

}

module.exports = BinarySearchTree;
