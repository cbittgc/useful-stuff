//import { genName } from "./genPessoa.js";

function genName() {
  let fstName = [
    "Ovid",
    "Zedan",
    "Bramzik",
    "Jashun",
    "Eger",
    "Bhardem",
    "Jion",
    "Qun",
    "Fomur",
    "Lalek",
  ];

  let sndName = ["O'", "Sur", "Von", "Derr", "Di"];

  let trdName = [
    "Punna",
    "Bhinan",
    "Stillroot",
    "Sharprider",
    "Khussei",
    "Netsk",
    "Jundrek",
    "Chudog",
    "Dikhe",
    "Onamera",
  ];

  return (
    fstName[Math.floor(Math.random() * 10)] +
    " " +
    sndName[Math.floor(Math.random() * 5)] +
    " " +
    trdName[Math.floor(Math.random() * 10)]
  );
}

function genEF(index) {
  let estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  return estados[index];
}

function genCidade(index) {
  let cidade = [
    "Rio Branco",
    "Maceió",
    "Macapá",
    "Manaus",
    "Salvador",
    "Fortaleza",
    "Brasília",
    "Vitória",
    "Goiânia",
    "São Luís",
    "Cuiabá",
    "Campo Grande",
    "Belo Horizonte",
    "Belém",
    "João Pessoa",
    "Curitiba",
    "Recife",
    "Teresina",
    "Rio de Janeiro",
    "Natal",
    "Porto Alegre",
    "Porto Velho",
    "Boa Vista",
    "Florianópolis",
    "São Paulo",
    "Aracaju",
    "Palmas",
  ];

  return cidade[index];
}

function genCEP(cidade) {
  let dict = {
    "Rio Branco": "69900",
    "Maceió": "57000",
    "Macapá": "68900",
    "Manaus": "69400",
    "Salvador": "40000",
    "Fortaleza": "60000",
    "Brasília": "70000",
    "Vitória": "29000",
    "Goiânia": "72800",
    "São Luís": "65000",
    "Cuiabá": "78000",
    "Campo Grande": "79000",
    "Belo Horizonte": "30000",
    "Belém": "66000",
    "João Pessoa": "58000",
    "Curitiba": "80000",
    "Recife": "50000",
    "Teresina": "64000",
    "Rio de Janeiro": "20000",
    "Natal": "59000",
    "Porto Alegre": "90000",
    "Porto Velho": "78900",
    "Boa Vista": "69300",
    "Florianópolis": "88000",
    "São Paulo": "01000",
    "Aracaju": "49000",
    "Palmas": "77000",
  };

  let end = Math.floor(Math.random() * (899 - 100) + 100);
  return dict[cidade] + "-" + end.toString();
}

function genAddress() {
  let ind = ["av. ", "r. ", "alm. "];
  let nom = ["Baobá", "Frederico", "Justino", "dos Palmares", "das Flores"];

  return (
    ind[Math.floor(Math.random() * 3)] + nom[Math.floor(Math.random() * 5)]
  );
}

function genRegister() {
  let complemento = ["nenhum", "apartamento "];
  let comp = Math.floor(Math.random() * 2);
  let num = ["", Math.floor(Math.random() * 100 + 1)];
  let index = Math.floor(Math.random() * 27);

  return {
    name: genName(),
    address: genAddress(),
    address_number: Math.floor(Math.random() * 1000 + 1),
    state: genEF(index),
    city: genCidade(index),
    cep: genCEP(genCidade(index)),
    address_complement: complemento[comp] + num[comp],
  };
}
