class Node {
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {

  constructor(){
    this.root = null;
  }

  insert(key){
    const node = new Node();
    if(null === this.root){
      this.root = node;
    }else{

    }
  }

  insertNode(node, newNode){
    if(newNode.key < node.key){
      if(null === node.left){
        node.left = newNode;
      }else{
        this.insertNode(node.left, newNode);
      }
    }
  }

}
