alert("Boas vindas ao jogo do número secreto");
let valorMaximo = 150;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto o chute estiver errado
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${valorMaximo}`);
    // Se o chute for igual ao número secreto
        if (chute == numeroSecreto) {
            break;
        } 
        else {
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            }   else 
            {
                alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {    
// alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }