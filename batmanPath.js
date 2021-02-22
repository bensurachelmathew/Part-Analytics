function addDirection(str, count) {
    let path = ''
    for (let i = 0; i < count; i++) {
        path += str
    }
    return path;
}
function shortestPath(str) {
    let len = str.length;
    let map = new Map();
    map.set('E', 0);
    map.set('W', 0)
    map.set('N', 0)
    map.set('S', 0)
    for (let i = 0; i < len; i++) {
        let val = map.get(str[i]);
        map.set(str[i], ++val)
    }
    let path = ''
    let southNorthDifference = map.get('S') - map.get('N');
    if (southNorthDifference > 0) {

        path += addDirection('S', southNorthDifference)
    } else if (southNorthDifference < 0) {
        path += addDirection('N', -southNorthDifference)
    }
    let eastWestDifference = map.get('E') - map.get('W');
    if (eastWestDifference > 0) {

        path += addDirection('E', eastWestDifference)
    } else if (southNorthDifference < 0) {
        path += addDirection('W', -eastWestDifference)
    }

    return path;

}
console.log(shortestPath("SSSWENEEWWENNS"))
console.log(shortestPath("ENWSSWSEN"))
console.log(shortestPath("EEEWW"))
console.log(shortestPath("NEES"))