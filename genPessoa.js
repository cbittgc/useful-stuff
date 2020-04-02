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

  return {
    fstName: fstName[Math.floor(Math.random() * 10)],
    mdlName: sndName[Math.floor(Math.random() * 5)],
    lstName: trdName[Math.floor(Math.random() * 10)]
  };
}

for (let ctrl = 0; ctrl < 100; ctrl++) console.log(genName());
