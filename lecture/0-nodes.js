const node1 = {//node
  data: 'A' //data
};

const node2 = {
  data: 'B'
};

const node3 = {
  data: 'C'
};

const node4 = {
  data: 'D'
};


node1.next = node2;//pointer(link or reference)
node2.next = node3;
node3.next = node4;
node4.next = null;

console.log(node1);
console.log(node2);
console.log(node3);
console.log(node4);


// depending on how the node is used, it may have a next, prev, parent, or children, property
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const nodeA = new Node('A')
console.log(nodeA);
const nodeB = new Node('B');
nodeA.next = nodeB;
console.log(nodeA);