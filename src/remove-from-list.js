const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/* function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
} */

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  if (l.value === k) {
    l = l.next;
  }
  recurN(l, k);

  /*  while (l.next) {
    delNode(l, k);
    l.next = l.next.next;
  }  */

  return l;
}

function recurN (l, k) {
  delNode(l, k);
  if (l.next) {
    recurN(l.next, k);
  }
}

function delNode(l, k) {
  if (l.next) {
    if (l.next.value === k) {
      delNode(l.next, k);      
      if (l.next.next) {
        l.next = l.next.next;
      } else {
        l.next = null;
      }
    }
  }
}

module.exports = {
  removeKFromList
};
