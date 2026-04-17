/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (root === null) return true;
        
        let leftHeight = this.dfs(root.left);
        let rightHeight = this.dfs(root.right);

        if(Math.abs(leftHeight - rightHeight) > 1){
            return false;
        }
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    dfs(root){
        if(root === null) return 0;
        return 1 + Math.max(this.dfs(root.left), this.dfs(root.right))

    }
}
