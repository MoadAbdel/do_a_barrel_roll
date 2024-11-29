function do_a_barrel_roll(numbers, k) {
    let n = numbers.length;
    let rotated = new Array(n);
    k = k % n;

    for (let i = 0; i < n; i++) {
        let newPos = (i + n - k) % n;
        rotated[newPos] = numbers[i];
    }
    
    return rotated;
}

module.exports = {
    do_a_barrel_roll
};
