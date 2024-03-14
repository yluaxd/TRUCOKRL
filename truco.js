// Importando a biblioteca readline-sync
const readlineSync = require('readline-sync');

let senhaCorreta = '1234';
let senhaDigitada;
let tentativasIncorretas = 0;

// Loop do-while para solicitar a senha até que seja correta ou o número máximo de tentativas seja atingido
do {
    // Solicita ao usuário que insira a senha
    senhaDigitada = readlineSync.question('Digite sua senha: ', {
        hideEchoBack: true // Para ocultar a senha digitada
    });

    // Verifica se a senha está correta
    if (senhaDigitada !== senhaCorreta) {
        tentativasIncorretas++;
        console.log('Senha incorreta. Tente novamente.');

        // Verifica se é a terceira tentativa incorreta
        if (tentativasIncorretas === 3) {
            console.log('INTRUSO');
            process.exit(); // Sai do programa
        }
    }
} while (senhaDigitada !== senhaCorreta);

// Se o loop terminou, significa que a senha foi correta
console.log('BEM-VINDO!');

// PROTOTIPEI UMA FUNÇÃO SHUFFLE para usar várias vezes no código
Array.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
};
const manilhas = ["♦️","♠️","♥️","♣️"];
const forcas = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];
let deck = [];
for (let naipe of manilhas) {
    for (let forca of forcas) {
        deck.push(forca+naipe);
        deck.shuffle();
    }
}
deck.shuffle();
console.log(deck);

let telaTruco = [
    "╔═════════════════════════════════════════════════════════╗",
    "║TRUCO LADRÃO **** - - Jogador1 e Bot4 Versus Bot2 e Bot3 ║",
     "╚═════════════════════════════════════════════════════════╝",
    "╔═══════════════════════════════════════════════════════════╗",
    "║                     Mesa de Truco                          ║",
    "║                                                             ║",
    "║   ┌────────────────────────┐     ┌────────────────────────┐  ║",
    "║   │      Jogador 1         │     │      Jogador 2         │  ║",
    "║   │      (Humano)          │     │       (BOT2)           │  ║",
    "║   └────────────────────────┘     └────────────────────────┘  ║",
    "║                                                              ║",
    "║                       Mesa                                   ║",
    "║                                                              ║",
    "║   ┌────────────────────────┐     ┌────────────────────────┐  ║",
    "║   │      Jogador 3         │     │      Jogador 4         │  ║",
    "║   │      (BOT3)            │     │  (BOT4)                │  ║",
    "║   └────────────────────────┘     └────────────────────────┘  ║",
    "║                                                             ║",
    "╚═══════════════════════════════════════════════════════════╝"
];

console.log(telaTruco.join("\n"));

// DISTRIBUIR CARTAS
// criar mao de cada e alimentar com as cartas
let maoj1=[];
maoj1.push(deck.pop());
maoj1.push(deck.pop());
maoj1.push(deck.pop());

let maoj2=[];
maoj2.push(deck.pop());
maoj2.push(deck.pop());
maoj2.push(deck.pop());

let maoj3=[];
maoj3.push(deck.pop());
maoj3.push(deck.pop());
maoj3.push(deck.pop());

let maoj4=[];
maoj4.push(deck.pop());
maoj4.push(deck.pop());
maoj4.push(deck.pop());

console.log("maoj1 "+maoj1);
console.log("maoj2 "+maoj2);
console.log("maoj3 "+maoj3);
console.log("maoj4 "+maoj4);
let vira= deck.pop();
console.log("Virou   =>"+vira);
let ref = vira.slice(0,1)
//console.log("carta referencia "+ref );
let refvirada = forcas.lastIndexOf(ref);
if (refvirada==9){
    console.log("Todas as "+forcas[0]+" são fortes .. eita manilha veiia");
}else{
    console.log("todas as " + forcas[refvirada+1]+" São fortes .. eita manilhada veiaaaaaa uhh hu");
}



console.log("sobraram "+deck.length+" Cartas no monte.. que são:");
console.log(deck);

//-- INICIAREMOS PELA JOGADA DO JOGADO