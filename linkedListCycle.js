  GNU nano 2.0.6           File: linkedListCycle.js                   Modified

/**
 Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
**/


const hasCycle = head => {
    if(head === undefined || head === null) return false;
    let turtle = head,
        rabbit = head.next;
    while(turtle){
        if (rabbit === null ) return false
        if (turtle === rabbit) return true;
        turtle = turtle.next;
        if (rabbit.next === null || rabbit.next.next === null) return false;
        rabbit = rabbit.next.next;
    };
};
