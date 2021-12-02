const tshirtSorter = (str) => {
    let s = '';
    let m = '';
    let l = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 's') {
            s += 's';
        } else if (str[i] === 'm') {
            m += 'm';
        } else /* if (str[i] === 'l') */{
            l += 'l';
        }
    }

    return s + m + l;
    // sml 'ssss' + 'mmmmmmmm' + 'lllllll'
}






console.log(tshirtSorter('mmmllsmmlsmlmslmslmmmm'));
//                        ssssmmmmmmmmmmmmllllll













// i++ i moves by one each time
// i += 2, then i moves by two each time

// 'mmmllsmmlsmlmslmslmmmm'
//  012345^
// i === 6;
// currentChar = string[i]
// if (currentChar === m)
// if (currentChar === s)
// if (currentChar === l)
// string[i] === l
// m = 'mmmm'
// s = 's'
// l = 'll'

























