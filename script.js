function palindrome() {
    var num = document.querySelector(".inputBox").value.toUpperCase();
    // console.log(num)

    var alpha = num.split().reverse().join();
    // console.log(alpha)

    if (num.length <= 2) {
        document.querySelector('.list').innerHTML = "TYPES MORE VALUES"
    } else if (num.length >= 3 && num === alpha) {
        // console.log(num)
        document.querySelector('.list').innerHTML = `<b> "${num}" <b> is a palindrome!`
    } else {
        document.querySelector('.list').innerHTML = `<b> "${num}" <b> is  not a palindrome!`
    }

}