
const hours = prompt("Введите количество часов:");

    if (!isNaN(hours)){
        const seconds = hours * 60 * 60;
        const result =  seconds;
        alert(result);
    } else{
        const error = "Это не число!!! Введите число!";
        alert(error);
    };