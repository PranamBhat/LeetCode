/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function(root) {
    let res = [];
    serializer(root, res);
    return res.join(",");
};

var serializer = function(root, output) {
    if (root === null) {
        output.push("#");
        return;
    }
    output.push(root.val);
    serializer(root.left, output);
    serializer(root.right, output);
}

// Decodes your encoded data to tree

var deserialize = function(data) {
    data = data.split(",");
    let index = 0;
    
    function deserializer(data) {
        if(index > data.length || data[index] === "#") {
            return null;
        }
        let root = new TreeNode(parseInt(data[index]));
        index++;
        root.left = deserializer(data);
        index++;
        root.right = deserializer(data);
        return root;
    }
    
    return deserializer(data);

};
