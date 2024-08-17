import Motorista from "./objMotorista.mjs";
import question from "./rl.mjs";
// async function editaUsuario(user) {
//   async function changeValue(user, i, keyToFind) {
//     console.log("Valor atual:", user[i][keyToFind]);

//     const newValue = await question("Digite qual o valor novo: ");
//     user[i][keyToFind] = newValue;

//     console.log("Valor atualizado com sucesso!");
//   }

//   const id = await question("Qual o id procurado?: ");

//   for (let i = 0; i < user.length; i++) {
//     if (user[i].id == id) {
//       const keyToFind = await question(
//         "Digite qual a informação vai ser mudada: "
//       );
//       if (user[i] && keyToFind in user[i]) {
//         await changeValue(user, i, keyToFind);
//       } else {
//         console.log("Chave não encontrada.");
//       }
//       return;
//     }
//   }

//   console.log("ID não encontrado.");
// }

const newUser = [];
let x = new Motorista(1, "arlei", 21, 12312, 4, 15, 0, 0, 30000, 0, 0);
newUser.push(x);
x = new Motorista(2, "anna", 21, 12312, 4, 20, 0, 0, 30000, 0, 0);
newUser.push(x);

async function calcAdicional(user) {
  const id = await question("id?: ");
  for (let i = 0; i < user.length; i++) {
    if (user[i].id == id) {
      console.log("Id encontrado");
      if (user[i].anosExp == undefined || user[i].salMensal == undefined) {
        console.log("Anos de experiencia, ou salário mensal não definido.");
        mostrarUsuario(user);
        return;
      } else {
        const kmRodado = parseFloat(
          await question("Quantos kms foram percorridos?: ")
        );
        console.log(user[i].anosExp, kmRodado);
        const adicional = 0.5 * 0.1 * kmRodado * user[i].anosExp;

        console.log(`ADICIONAL DE: ${adicional}`);
      }
    } else {
      console.log("Id não encontrado");
    }
  }
}

calcAdicional(newUser);











// async function criaUsuario(user) {
//   const newUser = new Motorista();
//   const perguntas = [
//     "id?: ",
//     "nome?: ",
//     "idade?: ",
//     "Numero da CNH?: ",
//     "Categoria da CNH?: ",
//     "Anos de experiência?: ",
//     "Número de viagens realizadas?: ",
//     "Passaporte de viagem?: ",
//     "Salário mensal?: ",
//     "Horas de trabalho diária?: ",
//     "Rota atual?: ",
//     "KMs Rodados?: ",
//   ];

//   const atributos = [
//     "id",
//     "nome",
//     "idade",
//     "cnhNum",
//     "catCnh",
//     "anosExp",
//     "numViagens",
//     "pasViagem",
//     "salMensal",
//     "hrTrabDiaria",
//     "rotaAtual",
//     "kmRodado",
//   ];

//   for (let i = 0; i < perguntas.length; i++) {
//     const resposta = await question(`${perguntas[i]}`);
//     newUser[atributos[i]] = Number(resposta);
//   }
//   user.push(newUser);
//   newUser.adicional = await calcAdicional(user);
//   console.log(user);
//   return;
// }

// async function calcAdicional(user) {
//   const adicional = 0.1 * user.anosExp * (0.5 * user.kmRodado);
//   console.log(user, adicional, user.kmRodado, user.anosExp);
//   return adicional;
// }