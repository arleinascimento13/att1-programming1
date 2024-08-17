export default class Motorista {
  constructor(
    id,
    nome,
    idade,
    cnhNum,
    catCnh,
    anosExp,
    numViagens,
    pasViagem,
    salMensal,
    hrTrabDiaria,
    rotaAtual,
    kmRodado,
    adicional
  ) {
    this.id = id;
    this.nome = nome; // Nome
    this.idade = idade; // Idade
    this.cnhNum = cnhNum; // Número da CNH
    this.catCnh = catCnh; // Categoria da CNH
    this.anosExp = anosExp; // Anos de experiência
    this.numViagens = numViagens; // Número de viagens realizadas
    this.pasViagem = pasViagem; // Número de passageiros por viagem
    this.salMensal = salMensal; // Salário mensal
    this.hrTrabDiaria = hrTrabDiaria; // Horas trabalhadas por dia
    this.rotaAtual = rotaAtual; // Rota atual
    this.kmRodado = kmRodado
    this.adicional = adicional;
  }

  calcAdicional(id, salMensal, kmRodado) {}
}
