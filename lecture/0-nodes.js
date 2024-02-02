
const node1 = {//node
  data: 1 //data
};

const node2 = {
  data: 2
};

const node3 = {
  data: 3
};
console.log(node1);

node1.next = node2;//pointer(link or reference)
node2.next = node3;
node3.next = null



// depending on how the node is used, it may have a next, prev, parent, or children, property
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
