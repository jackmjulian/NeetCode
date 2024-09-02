/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head) {
  let previousNode = null; // set previousNode as null (1st pointer)
  let currentNode = head; //set currentNode as the head (2nd pointer)

  // loop while there is a currentNode to get to the end of the list
  while (currentNode) {
    // initialise variable for the next node
    let nextNode = currentNode.next;

    // set the next node to the previous node
    currentNode.next = previousNode;

    // now shift both pointers along one
    previousNode = currentNode;
    currentNode = nextNode;
  }
  return previousNode;
}

const head = [1, 2, 3, 4, 5];

reverseList(head);

// List = 1 -> 2 -> 3 -> 4 -> 5

//? NOTES
/**
 * Set two pointers
 * set the head node as the currentNode
 * maintain a previous pointer, which starts as null
 *
 * get the first node and set the pointer to null, making it the new end node
 * now we take the prevPointer and set it to currPointer so it shifts along one
 * we set currPointer to the nextNode so that it also shifts along one
 *
 * find the next pointer and set it to the previous pointer again
 *
 * we basically use the two pointers so that we can always set the second pointer to point at the first (previous) pointer as we move along
 *
 * when current is null we are at the end
 *
 */
