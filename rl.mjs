import readline from "node:readline";

export default function question(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    })
  );
}


////// trash area

  // user.forEach((element) => {
  //   console.log(element);
  //   for (const [key, value] of Object.entries(element)) {
  //     console.log(element)
  //     // for (let i = 0; i < perguntas.length; i++) {
  //     //   //   elementvalue =
  //     //   // }
  //     // }
  //   }
  // });