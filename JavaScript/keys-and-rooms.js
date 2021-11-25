/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

var canVisitAllRooms = function(rooms) {

    let vis = new Uint8Array(rooms.length), stack = [0], count = 1
    vis[0] = 1;
    
    while (stack.length) {
        let keys = rooms[stack.pop()]
        for (let k of keys)
            if (!vis[k]) 
                stack.push(k), vis[k] = 1, count++
    }
    return rooms.length === count
    
};
