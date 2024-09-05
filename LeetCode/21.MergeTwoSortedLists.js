/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeTwoLists(List1, List2) {
  // dummy point as head of list
  let dummyNode = new ListNode();

  // set this as the current pointer to track
  let currentNode = dummyNode;

  // iterate
  while (List1 && List2) {
    if (List1.val > List2.val) {
      currentNode.next = List2;
      List2 = List2.next; // moves the pointer to the next node
    } else {
      currentNode.next = List1;
      List1 = List1.next;
    }
    currentNode = currentNode.next; // move the current node pointer along one
  }
  // if there are any nodes left append to the end of the list
  currentNode.next = List1 || List2;

  return dummyNode.next;
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

// should output [1,1,2,3,4,4]

console.log(mergeTwoLists(list1, list2));
