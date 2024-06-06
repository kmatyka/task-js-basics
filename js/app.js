function Calculator() {
    this.actions = ['+', '-', '*', '/', '^'];
    this.history = [];
}

Calculator.prototype.isCorrectAction = function(action) {
    return this.actions.includes(action);
}

Calculator.prototype.getHistoryAsString = function() {
    return this.history.join('\n');
}

Calculator.prototype.add = function(num1, num2) {
    if(isNaN(parseFloat(num1))){}
    else if(isNaN(parseFloat(num2))){}
    else{
        a = parseFloat(num1);
        b = parseFloat(num2);
        this.num1 = a;
        this.num2 = b;
    }
    // 1. zamień wartości przekazane przez parametr na typ number (done)
    // 2. sprawdź czy są one poprawne (done)
    // 3. jeśli tak to wykonaj działanie i zapisz jego resultat (done)
    // 4. dodaj do historii operacji to działanie w fomie: 1 + 1 = 2 (done)
}

const calc = new Calculator();
let action, promptContent, isCorrectAction, number1, number2;
do { 
    promptContent = 'Podaj jaką operację chcesz wykonać (+, -, *, /, ^) i potwierdź. \n'; // \n - znak nowej linii
    promptContent += 'Jeśli chcesz zrezygnować wciśnij Anuluj. \n';
    promptContent += 'Lista poprzednich operacji: \n' + calc.getHistoryAsString();

    action = prompt(promptContent);
    isCorrectAction = calc.isCorrectAction(action);
    if(isCorrectAction) {
        number1 = prompt('Podaj liczbę nr 1');
        number2 = prompt('Podaj liczbę nr 2');

        if(action === '+') {
            calc.add(number1, number2);
            let wynik = calc.num1 + calc.num2;
            calc.history.push(calc.num1+" + "+calc.num2+" = "+wynik);
        }
        if(action === '-') {
            calc.add(number1, number2);
            let wynik = calc.num1 - calc.num2;
            calc.history.push(calc.num1+" - "+calc.num2+" = "+wynik);
        }
        if(action === '*') {
            calc.add(number1, number2);
            let wynik = calc.num1 * calc.num2;
            calc.history.push(calc.num1+" * "+calc.num2+" = "+wynik);
        }
        if(action === '/') {
            calc.add(number1, number2);
            let wynik = calc.num1 / calc.num2;
            calc.history.push(calc.num1+" / "+calc.num2+" = "+wynik);
        }
        if(action === '^') {
            calc.add(number1, number2);
            let wynik = 1;
            for(let i=0;i<calc.num2;i++){
                wynik *= calc.num1;
            }
            calc.history.push(calc.num1+" ^ "+calc.num2+" = "+wynik);
        }
    }
    
} while(calc.isCorrectAction(action));