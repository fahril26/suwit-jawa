// Pilihan Computer
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// Rules
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "semut" ? "MENANG!" : "KALAH!";
  if (player == "semut") return comp == "gajah" ? "MENANG!" : "KALAH!";
}

function kocok() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }

    const info = document.querySelector(".info");
    info.innerHTML = "LOADING...";
  }, 100);
}

// Saat Gambar di Klik
const pilihanPlayer = document.querySelectorAll("li img");
let sPlayer = 1;
let sComp = 1;
pilihanPlayer.forEach(function (pilihGambar) {
  pilihGambar.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pilihGambar.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    kocok();

    setTimeout(function () {
      // Ubah Gambar Computer
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", pilihanComputer + ".png");

      // Info Pertandingan
      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      // Score
      const scorePlayer = document.querySelector(".score-player");
      const scoreComputer = document.querySelector(".score-computer");
      if (hasil == "MENANG!")
        return (scorePlayer.innerHTML = `SCORE : ${sPlayer++} `);
      if (hasil == "KALAH!")
        return (scoreComputer.innerHTML = `SCORE : ${sComp++} `);
    }, 1000);
  });
});
