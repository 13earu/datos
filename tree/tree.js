/*         10
    4       20
2   8   17      17
 */


class Node {
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null 
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null){
            this.root = newNode
        } else {
            let courrentNode = this.root
            while(true) {
                if (value < courrentNode.value){
                    if (!courrentNode.left){
                        courrentNode.left = newNode
                        return this
                    }
                    courrentNode = courrentNode.left
                } else {
                    if (!courrentNode.right){
                        courrentNode.right = newNode
                        return this
                    }
                    courrentNode = courrentNode.right
                }
            }
        } 
    }
}

const tree = new BinarySearchTree()

