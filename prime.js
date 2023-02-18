exports.prime = function (n) {
    let flag;
    if (n === 1) {
        flag = "not prime";
        return flag;
    }
    else if (n === 2) {
        flag = "prime"
        return flag;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                flag = "not prime"
                return flag;
            }
        }
        flag = "prime"
        return flag;
    }
}
