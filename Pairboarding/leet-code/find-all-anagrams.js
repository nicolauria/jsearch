// Given a string s and a non-empty string p, find all the start indices
// of p's anagrams in s.
//
// Strings consists of lowercase English letters only and the length
// of both strings s and p will not be larger than 20,100.
//
// The order of output does not matter.

// solution 1
var findAnagrams = function(s, p) {
    let result = [];
    main = s.split('');
    target = p.split('').sort();

    idx = 0
    while (idx <= main.length - target.length) {
        sub = main.slice(idx, idx + target.length).sort();
        if (sub.join('') === target.join('')) result.push(idx);
        idx += 1;
    }

    return result;
};

// solution 2
var findAnagrams = function(s, p) {
    let result = [];
    let frameStart = 0;
    let target = wordToMap(p);

    while (frameStart <= s.length - p.length) {
        idx = frameStart;
        while (true) {
            letter = s[idx];
            if (!target.hasOwnProperty(letter) || target[letter] === 0) break;
            target[letter] -= 1;
            idx += 1
        }
        if (Object.values(target).reduce((total, el) => total + el) === 0) {
            result.push(frameStart);
        }
        target = wordToMap(p);
        frameStart += 1;
    }

    return result;
};

function wordToMap(str) {
  return Array.from(str).reduce((stringMap, letter) => {
    if (!stringMap.hasOwnProperty(letter)) {
      stringMap[letter] = 1;
    } else {
      stringMap[letter]++;
    }

    return stringMap;
  }, {});
}
