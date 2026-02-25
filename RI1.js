class Personagem {
    constructor(nome, codinome, armaPrincipal, armaSecundaria, velocidade, forca, resistencia) {
        this.nome = nome;
        this.codinome = codinome;
        this.armaPrincipal = armaPrincipal;
        this.armaSecundaria = armaSecundaria;
        this.velocidade = velocidade;
        this.forca = forca;
        this.resistencia = resistencia;
    }

    descricao() {
        return "Nome: " + this.nome + "\n" +
            "Codinome: " + this.codinome + "\n" +
            "Arma principal: " + this.armaPrincipal + "\n" +
            "Arma secundária: " + this.armaSecundaria + "\n" +
            "Força: " + this.forca + "\n" +
            "Velocidade: " + this.velocidade + "\n" +
            "Resistência: " + this.resistencia + "\n";
    }
}

const homemDeFerro = new Personagem("Tony Stark", "Homem de Ferro", "Armadura", "Repulsores", 95, 85, 90);
const capitaoAmerica = new Personagem("Steve Rogers", "Capitão América", "Escudo", "", 80, 75, 85);
const thor = new Personagem("Thor Odinson", "Thor", "Mjolnir", "Raio", 85, 100, 95);
const hulk = new Personagem("Bruce Banner", "Hulk", "Força bruta", "", 70, 110, 100);
const homemAranha = new Personagem("Peter Parker", "Homem-Aranha", "Teia", "", 95, 70, 75);
//tartaruga-marinha
const viuvaNegra = new Personagem("Natasha Romanoff", "Viúva Negra", "Pistolas", "Artes marciais", 75, 50, 65);
const gaviaoArqueiro = new Personagem("Clint Barton", "Gavião Arqueiro", "Arco e flecha", "", 70, 55, 60);
const panteraNegra = new Personagem("T'Challa", "Pantera Negra", "Traje de Vibranium", "", 85, 80, 85);
const thanos = new Personagem("Thanos", "Thanos", "Manopla do Infinito", "Espada dupla", 80, 120, 120);

const personagens = [
    homemDeFerro,
    capitaoAmerica,
    thor,
    hulk,
    homemAranha,
    viuvaNegra,
    gaviaoArqueiro,
    panteraNegra,
    thanos
];

for (let i = 0; i < personagens.length; i++) {
    for (let j = i + 1; j < personagens.length; j++) {

        let p1 = personagens[i];
        let p2 = personagens[j];

        console.log("Comparando " + p1.codinome + " VS " + p2.codinome);

        console.log(p1.descricao());
        console.log(p2.descricao());

        if (p1.forca > p2.forca) {
            console.log("Força: " + p1.codinome + " vence");
        } else if (p2.forca > p1.forca) {
            console.log("Força: " + p2.codinome + " vence");
        } else {
            console.log("Força: Empate");
        }

        if (p1.velocidade > p2.velocidade) {
            console.log("Velocidade: " + p1.codinome + " vence");
        } else if (p2.velocidade > p1.velocidade) {
            console.log("Velocidade: " + p2.codinome + " vence");
        } else {
            console.log("Velocidade: Empate");
        }

        if (p1.resistencia > p2.resistencia) {
            console.log("Resistência: " + p1.codinome + " vence");
        } else if (p2.resistencia > p1.resistencia) {
            console.log("Resistência: " + p2.codinome + " vence");
        } else {
            console.log("Resistência: Empate");
        }

        console.log("\n");
    }
}