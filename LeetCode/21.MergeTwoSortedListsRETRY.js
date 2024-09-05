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
  // initialise dummy point as head of list
  let dummy = new ListNode();

  // set this as the current pointer to track
  let current = dummy;

  // iterate while there is a List1 and List2 node
  while (List1 && List2) {
    // check if list1 value > list2 value
    if (List1.val > List2.val) {
      // set current node to point to list 2 as it is the lower number
      current.next = List2;

      // move the pointer to the next list2 node
      List2 = List2.next;
    } else {
      // point the current node to the list1 node
      current.next = List1;

      // set the List1 node as the next List1 node so it moves along by one
      List1 = List1.next;
    }
    // move the current node pointer along one
    current = current.next;
  }
  // if there are any nodes left append to the end of the list with next
  current.next = List1 || List2;
  // return dummy node.next to get the sorted list
  return dummy.next;
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

// should output [1,1,2,3,4,4]

console.log(mergeTwoLists(list1, list2));
