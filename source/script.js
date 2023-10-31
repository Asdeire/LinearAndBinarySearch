function binarySearch() {
    const input = document.getElementById("search_input").value;
    const array = [6, 15, 21, 12, 76, 80, 5, 2, 9, 10, 43];
    const value = parseInt(input, 10);
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (array[middle] === value) {
            showResult(`Елемент ${value} знайдено за індексом ${middle}, використовуючи бінарний пошук`);
            return;
        } else if (array[middle] < value) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    showResult(`Елемент не знайдено`);
}

function linearSearch() {
    const input = document.getElementById("search_input").value;
    const array = [6, 15, 21, 12, 76, 80, 5, 2, 9, 10, 43];

    const value = parseInt(input, 10);

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            showResult(`Елемент ${value} знайдено за індексом ${i}, використовуючи лінійний пошук`);
            return;
        }
    }

    showResult(`Елемент не знайдено`);
}

function showResult(message) {
    document.getElementById("result_text").textContent = message;
}
