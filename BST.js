class Node {
  constructor(val) {
  this.val = val
  this.left = null
  this.right = null
  }
}
class BinarySearchTree {
  constructor() {
  this.root = null
  }
  push(val) {
      if(!this.root) {
        console.log("Inside push");
        this.root = new Node(val)
        return
      }
        var current = this.root
        var newNode = new Node(val)
        while(current){
          console.log("while");
            if(current.val>val) {
              if(current.left)
               current = current.left
              else {
                current.left = newNode
                break
              }
            }
            else {
              if(current.right)
               current = current.right
              else {
                current.right = newNode
                break
              }
            }
        }
    }
      printInOrder(root) {
        console.log("Print "+root.data);
        if(root!=null) {
          bst.printInOrder(root.left);
          console.log(root.data);
          bst.printInOrder(root.right);
        }
      }
  }
  var bst = new BinarySearchTree();
  bst.push(8);
  bst.push(2);
  bst.push(4);
  bst.push(15);
  bst.push(10);
  bst.push(9);
  bst.push(14);
  bst.push(24);
  bst.push(18);
  bst.push(60);
  bst.printInOrder(bst.root);
