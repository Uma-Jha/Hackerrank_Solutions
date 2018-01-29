/* Hidden stub code will pass a root argument to the function below. Complete the function to solve the challenge. Hint: you may want to write one or more helper functions.

The Node class is defined as follows:
    class Node {
        int data;
        Node left;
        Node right;
     }
*/
    int maxInLeft(Node leftData) {
        int max = -1;
        while(leftData!=null) {
            if(leftData.data>max)
                max = leftData.data;
            leftData = leftData.left;
        }
        return max;
    }
    int minInRight(Node rightData) {
      int min = 100000;
       while(rightData!=null) {
           if(rightData.data<min)
               min = rightData.data;
           rightData = rightData.right;
       }
        return min;
    }
    boolean checkBST(Node root) {
      if(root==null) {
          return true;
      }
      if(root.left!=null && maxInLeft(root.left)>root.data)
        return false;
      if(root.left!=null && maxInLeft(root.left)==root.data)
        return false;
      if(root.right!=null && minInRight(root.right)<root.data)
          return false;
      if(root.right!=null && minInRight(root.right)==root.data)
          return false;
      if(checkBST(root.right)==false || checkBST(root.left)==false)
          return false;
      return true;
    }
