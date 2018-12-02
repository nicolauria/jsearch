function repeatedString(s, n) {
    let result = "";
    while (result.length < n) {
        result += s;
    }
    return result.slice(0, n).split('').filter(el => el === 'a').length;
}
