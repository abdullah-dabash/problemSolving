// function reverseArray(arr) {
//     let stack = [];

//     for (let i = 0; i < arr.length; i++) {
//         stack.push(arr[i]);
//     }
//     let reversedArray = [];
//     while (stack.length > 0) {
//         reversedArray.push(stack.pop());
//     }
//     return reversedArray;
// }

// let arr = [1, 2, 3, 4, 5];
// let reversedArr = reverseArray(arr);
// console.log(reversedArr); 


// // q2



// let stack1 = []; 
// let stack2 = []; 

// function enqueue(item) {
//     stack1.push(item);
// }

// function dequeue() {
//     if (stack2.length === 0) {
//         while (stack1.length > 0) {
//             stack2.push(stack1.pop());
//         }
//     }
//     return stack2.pop();
// }
// function peek() {
//     if (stack2.length === 0) {
//         while (stack1.length > 0) {
//             stack2.push(stack1.pop());
//         }
//     }
//     return stack2[stack2.length - 1];
// }
// function isEmpty() {
//     return stack1.length === 0 && stack2.length === 0;
// }
// enqueue(1);
// enqueue(2);
// enqueue(3);

// console.log(dequeue()); 
// console.log(peek());    
// console.log(dequeue()); 
// console.log(dequeue()); 
// console.log(isEmpty()); 
// console.log(dequeue()); 

// // q3

// function sumArray(arr, index = 0) {
//     if (index === arr.length) {
//         return 0;
//     }

//     return arr[index] + sumArray(arr, index + 1);
// }

// let array = [1, 2, 3, 4, 5];
// console.log(sumArray(array)); 

// // q4

// function Node(value, next = null) {
//     return { value, next };
// }

// function reverseLinkedList(head) {
//     let prev = null;
//     let current = head;

//     while (current) {
//         let next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }

//     return prev;
// }

// function printLinkedList(head) {
//     let current = head;
//     let result = [];
//     while (current) {
//         result.push(current.value);
//         current = current.next;
//     }
//     return result.join(' -> ');
// }

// let list = Node(1, Node(2, Node(3, Node(4, Node(5)))));
// console.log("Original List: ", printLinkedList(list)); 

// let reversed = reverseLinkedList(list);
// console.log("Reversed List: ", printLinkedList(reversed)); 

// // q5

function Node(value, next = null) {
    return { value, next };
}

function deleteMiddleNode(head) {
    if (!head || !head.next) {
        return null; 
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next && fast.next.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if (prev) {
        prev.next = slow.next; 
    } else {
        head = head.next; 
    }

    return head;
}

let list = Node(1, Node(2, Node(3, Node(4, Node(5)))));
console.log("Original List: ", list); 

list = deleteMiddleNode(list);
console.log("List after deleting middle node: ", list); 


