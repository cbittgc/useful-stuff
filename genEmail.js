function genEMail() {
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
    "Lalek"
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
    "Onamera"
  ];

  let provedor = [
    "@hotmail.com",
    "@gmail.com",
    "@yahoo.com",
    "@outlook.com",
    "@openmailbox.org"
  ];
  let emaillist = [];
  while (emaillist.length < 100) {
    let email =
      fstName[Math.floor(Math.random() * 10)] +
      "_" +
      sndName[Math.floor(Math.random() * 5)] +
      "_" +
      trdName[Math.floor(Math.random() * 10)] +
      provedor[Math.floor(Math.random() * 5)];
    if (!emaillist.includes(email)) emaillist.push({ email: email });
  }

  return emaillist;
}

console.log(genEMail());
