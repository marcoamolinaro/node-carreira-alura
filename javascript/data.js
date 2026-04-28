const agora = new Date(); // Cria um objeto Date com a data e hora atuais

console.log('Data e hora atuais:', agora); // Imprime a data e hora atuais

console.log('Ano:', agora.getFullYear()); // Imprime o ano atual
console.log('Mês 0-11:', agora.getMonth()); // Imprime o mês atual (0-11, por isso adicionamos 1)
console.log('Dia:', agora.getDate()); // Imprime o dia do mês atual
console.log('Hora:', agora.getHours()); // Imprime a hora atual (0-23)
console.log('Minutos:', agora.getMinutes()); // Imprime os minutos atuais
console.log('Segundos:', agora.getSeconds()); // Imprime os segundos atuais 

const nascimento = new Date(1963, 8, 21); // Cria um objeto Date para a data de nascimento (ano, mês 0-11, dia)

console.log('Data de nascimento:', nascimento); // Imprime a data de nascimento

const nascimento1 = new Date('1863-09-21T00:00:00.000Z'); // Cria um objeto Date para a data de nascimento (ano, mês 0-11, dia)

console.log('Data de nascimento:', nascimento1); // Imprime a data de nascimento

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR')); // Imprime a data formatada no padrão brasileiro
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US')); // Imprime a data formatada no padrão americano