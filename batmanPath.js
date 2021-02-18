function shortestPath(str) {
    let len = str.length;
    let map = new Map();
    for (let i = 0; i < len; i++) {
        if (map.has(str[i])) {
            let val = map.get(str[i]);
            map.set(str[i], ++val)
        } else {
            map.set(str[i], 1)
        }
    }
    let path = ''
    if (map.get('S') - map.get('N') > 0) {
        if (map.get('S') > map.get('N'))
            path += 'S';
        else
            path += 'N';

    }
    if (map.get('E') - map.get('W') > 0) {

        if (map.get('E') > map.get('W'))
            path += 'E';
        else
            path += 'W';
    }
    return path;

}
console.log(shortestPath("SSSWENEEWWENNS"))
console.log(shortestPath("ENWSSWSEN"))
console.log(shortestPath("EEEWW"))