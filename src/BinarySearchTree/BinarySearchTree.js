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
      inOrderTraverseNode(node.left, callback);
      callback(node);
      inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback){
    this.preOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback){
    if(null !== node){
      callback(node);
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
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
      return false;
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
    }else if(key > node.key){
      node.right = this.removeNode(node.right, key);
    }
  }

}

module.exports = BinarySearchTree;
