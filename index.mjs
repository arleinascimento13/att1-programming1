import Motorista from "./objMotorista.mjs";
import question from "./rl.mjs";

async function criaUsuario(user) {
  const newUser = new Motorista();
  const perguntas = [
    "id?: ",
    "nome?: ",
    "idade?: ",
    "Numero da CNH?: ",
    "Categoria da CNH?: ",
    "Anos de experiência?: ",
    "Número de viagens realizadas?: ",
    "Passaporte de viagem?: ",
    "Salário mensal?: ",
    "Horas de trabalho diária?: ",
    "Rota atual?: ",
    "KMs Rodados?: ",
  ];

  const atributos = [
    "id",
    "nome",
    "idade",
    "cnhNum",
    "catCnh",
    "anosExp",
    "numViagens",
    "pasViagem",
    "salMensal",
    "hrTrabDiaria",
    "rotaAtual",
    "kmRodado",
  ];

  for (let i = 0; i < perguntas.length; i++) {
    const resposta = await question(`${perguntas[i]}`);
    const valor = i === 2 || i >= 5 ? parseFloat(resposta) : resposta; // Parse numbers only for certain indices
    newUser[atributos[i]] = isNaN(valor) ? resposta : valor; // If parsing failed, keep as string
  }

  user.push(newUser);

  // Calcule o adicional usando o novo motorista
  newUser.adicional = await calcAdicional(newUser);

  // Não precisa adicionar o motorista novamente
  console.log(user);
  return;
}

async function calcAdicional(motorista) {
  const adicional = 0.1 * motorista.anosExp * (0.5 * motorista.kmRodado);
  console.log(motorista, adicional, motorista.kmRodado, motorista.anosExp);
  return adicional;
}



async function editaUsuario(user) {
  mostrarUsuario(user);
  async function changeValue(user, i, keyToFind) {
    console.log(user[i][keyToFind]);

    const newValue = await question("Digite qual o valor novo: ");

    user[i][keyToFind] = newValue;
    mostrarUsuario(user);
    return;
  }
  const id = await question("Qual o id procurado?: ");

  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id) {
      const keyToFind = await question(
        "Digite qual a informação vai ser mudada: "
      );
      if (user[i] && keyToFind in user[i]) {
        await changeValue(user, i, keyToFind);
      } else {
        console.log("Chave não encontrada.");
      }
      return;
    } else {
      console.log("id não encontrado");
      return;
    }
  }
  return mostrarUsuario(user);
}

const newUser = new Motorista();

async function deletaUsuario(user) {
  console.log(user);
  const id = await question("Qual o id procurado?: ");
  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id) {
      user.splice(i, 1);
      console.log("Usuario deletado com sucesoo");
      return console.log(user);
    }
  }
}

async function mostrarUsuario(user) {
  console.log(user);
}

console.log("////////////////////////////////");
console.log("///////REGISTRO MOTORISTA///////");
console.log("////////////////////////////////");

let motoList = [];

async function startMain(motoList) {
  let respostaUser = 1;

  do {
    console.log();
    console.log("////////////////////////////////");
    console.log();
    console.log("[1] Adicionar motorista");
    console.log("[2] Editar motorista");
    console.log("[3] Mostrar todos os motoristas");
    console.log("[4] Calcular adicional salário do motorista");
    console.log("[5] Excluir");
    console.log();
    console.log("[0] Sair do Programa");

    respostaUser = await question(`Digite aqui: `);

    switch (parseInt(respostaUser)) {
      case 1:
        await criaUsuario(motoList);
        break;
      case 2:
        await editaUsuario(motoList);
        break;
      case 3:
        await mostrarUsuario(motoList);
        break;
      case 4:
        await calcAdicional(motoList);
        break;
      case 5:
        await deletaUsuario(motoList);
        break;
      case 0:
        console.log("Saindo do programa...");
        break;
    }
  } while (respostaUser != 0);
}

startMain(motoList);
