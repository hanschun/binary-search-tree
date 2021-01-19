import {BinarySearchTree} from './binary-search-tree';

const run = () => {
    const BST = new BinarySearchTree(); 
  
    // Inserting nodes to the BinarySearchTree 
    BST.insert(15); 
    BST.insert(25); 
    BST.insert(10); 
    BST.insert(7); 
    BST.insert(22); 
    BST.insert(17); 
    BST.insert(13); 
    BST.insert(5); 
    BST.insert(9); 
    BST.insert(27); 

    const root = BST. getRootNode(); 
              
    // prints 5 7 9 10 13 15 17 22 25 27 
    BST.inOrder(root); 
};

run();