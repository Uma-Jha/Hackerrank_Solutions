function Node(val) {
  this.val = val
  this.left = null
  this.right = null
}
function BinarySearchTree() {
  this.root = null
}
BinarySearchTree.prototype.push = function(val) {
    if(!this.root) {
      this.root = new Node(val)
      return
    }
      var current = this.root
      var newNode = new Node(val)
      while(current){
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
BinarySearchTree.prototype.findMin = function() {
  var current = this.root
  while(current.left)
    current = current.left
    return current.val
}
BinarySearchTree.prototype.findMax = function() {
  var current = this.root
  while(current.right) 
    current = current.right
    return current.val
}
BinarySearchTree.prototype.find = function(val) {
  var current = this.root
  while(current) {
    if(current.val==val)
    return current
    else if(current.val>val)
    current = current.left
    else
    current = current.right
    if(current==null)
     return null
  }
}
BinarySearchTree.prototype.remove = function(node, val) {
   if(node==null)
    return null
    if(node.val>val) {
      console.log("INSIDE FIRST CHECK")
      return remove(node.left, val)
    }
    else if(node.val<val) {
      console.log("Inside right")
      return remove(node.right, val)
    }
    else {
      console.log("Found node")
      if(node.left==null && node.right==null) {
        console.log("no child")
        node = null
        return node
      }
      else if(node.left==null) {
        console.log("no left child")
        node = node.right
        return node
      }
      else if(node.right==null) {
        console.log("no right child")
        node = node.left
        return node
      }
      else {
        var temp = node.right
        while(temp.left!=null)
        temp = temp.left
        node.val = temp.val
        return remove(node.right, temp.val)
      }
  } // else closing
} //remove closing
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
console.log(bst.root.val+ " "+bst.root.left.val+" "+bst.root.right.val);
console.log("Min "+bst.findMin()+" "+bst.findMax())
console.log(bst.find(60)+" ** "+bst.find(80))
console.log(bst.remove(bst.root, 60))
console.log(bst.find(60))
//bst.levelTraversal(bst.root)
/*BinarySearchTree.prototype.levelTraversal = function(node) {
  if(node) {
    console.log(node.val)
    levelTraversal(node.left)
    levelTraversal(node.right)
  }
}*/
