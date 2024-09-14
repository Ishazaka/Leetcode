/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 const reverse = (head) => {
   let prev = null
   let cur = head
   let next = null

      while(cur){
      next =  cur.next
      cur.next = prev
       prev = cur
       cur = next  

      }
     
  return prev
 } 
 


var isPalindrome = function(head) {
    
     let fast = head
     let slow = head
     let pointer = head

     while(fast && fast.next){
           fast = fast.next.next
           slow = slow.next        

     }

    let mid = reverse(slow)

        while(mid){
           if(mid.val !== pointer.val){
             return false
           } 

        pointer = pointer.next
        mid = mid.next


        }
  return true
};