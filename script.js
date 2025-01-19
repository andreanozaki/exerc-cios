// Exercício 1: Soma de números
function exercicio1() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K += 1;
        SOMA += K;
    }

    document.getElementById("resultado1").textContent = `Resultado: ${SOMA}`;
}

// Exercício 2: Fibonacci
function exercicio2() {
    const num = parseInt(document.getElementById("fibonacciInput").value, 10);

    if (isNaN(num)) {
        document.getElementById("resultado2").textContent = "Digite um número válido.";
        return;
    }

    let a = 0, b = 1;
    while (b <= num) {
        if (b === num) {
            document.getElementById("resultado2").textContent = `O número ${num} pertence à sequência de Fibonacci.`;
            return;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }

    document.getElementById("resultado2").textContent = `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

// Exercício 3: Faturamento Diário
function exercicio3() {
    const faturamentoJSON = '[10, 20, 0, 30, 40, 0, 50, 60, 0, 0, 70, 80, 90, 100, 110, 120, 0, 130, 140, 0, 150]';
    const faturamento = JSON.parse(faturamentoJSON).filter(f => f > 0);

    const menor = Math.min(...faturamento);
    const maior = Math.max(...faturamento);
    const media = faturamento.reduce((acc, val) => acc + val, 0) / faturamento.length;

    const diasAcimaDaMedia = faturamento.filter(f => f > media).length;

    document.getElementById("resultado3").textContent = `
        Menor: ${menor}, Maior: ${maior}, Dias acima da média: ${diasAcimaDaMedia}.
    `;
}

// Exercício 4: Percentual por Estado
function exercicio4() {
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

    let resultado = "Percentuais por estado:\n";
    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / total) * 100;
        resultado += `${estado}: ${percentual.toFixed(2)}%\n`;
    }

    document.getElementById("resultado4").textContent = resultado;
}

// Exercício 5: Inversão de String
function exercicio5() {
    const texto = document.getElementById("stringInput").value;

    if (!texto) {
        document.getElementById("resultado5").textContent = "Digite uma string.";
        return;
    }

    let invertida = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }

    document.getElementById("resultado5").textContent = `String invertida: ${invertida}`;
}
