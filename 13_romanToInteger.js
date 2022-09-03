/**
 * @param {string} s
 * @return {number}
 */
 const romanToInt = str => {
    const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let num = 0;
    if (str.includes('CM')) num -= 200;
    if (str.includes('CD')) num -= 200;
    if (str.includes('XC')) num -= 20;
    if (str.includes('XL')) num -= 20;
    if (str.includes('IX')) num -= 2;
    if (str.includes('IV')) num -= 2;
    for (let i = 0; i < str.length; i++) {
        num += roman[str[i]];
    }
    return num;
};