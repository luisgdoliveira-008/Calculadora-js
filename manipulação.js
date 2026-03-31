function operacao(tipo) {

    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const display = document.getElementById('res-valor');

    
    if (isNaN(n1) || isNaN(n2)) {
        display.innerText = "---";
        alert("Por favor, preencha os dois campos.");
        return;
        //isNaN representa um valor numérico indefinido ou inválido!!!!!!
    }

    let resultado;


    switch (tipo) {
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'sub':
            resultado = n1 - n2;
            break;
        case 'mult':
            resultado = n1 * n2;
            break;
        case 'div':
            if (n2 === 0) {
                alert("Impossível dividir por zero!");
                resultado = "Erro";
            } else {
                resultado = n1 / n2;
            }
            break;
    }


    display.innerText = typeof resultado === 'number'  
    resultado;
}

