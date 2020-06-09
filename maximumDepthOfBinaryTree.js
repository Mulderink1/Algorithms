/**

Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes
along the longest path from the root node
down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:
Given binary tree [3,9,20,null,null,15,7]
return its depth = 3.

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = (root, depth = 0, mDepth = 0) => {
  depth += 1;
  if (root === null) return 0;
  if (root.left) mDepth = maxDepth(root.left, depth, mDepth);
  if (root.right) mDepth = maxDepth(root.right, depth, mDepth);
  return (depth > mDepth ? depth : mDepth);
};