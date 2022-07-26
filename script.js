const neroForce = [
  {
    img: "https://cdn.britannica.com/13/136113-050-F7237AC8/Oxen.jpg",
    name: "Boidrigow",
    playTft: false,
  },
  {
    img: "https://i.pinimg.com/originals/2e/10/d2/2e10d2be2fc3b99289afb829144e5855.jpg",
    name: "Boilimax",
    playTft: false,
  },
  {
    img: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
    name: "Boianca",
    playTft: false,
  },
  {
    img: "https://thumbs.dreamstime.com/b/ox-cow-sleeping-lying-rest-ground-farm-horizontal-side-view-ox-cow-sleeping-lying-rest-ground-farm-206833081.jpg",
    name: "Boienkede",
    playTft: true,
  },
  {
    img: "https://i.ytimg.com/vi/YQILg_iGYVw/maxresdefault.jpg",
    name: "Boitaiog",
    playTft: true,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Jasper.Wapiti-Hirsch.P1033401.jpg/1200px-Jasper.Wapiti-Hirsch.P1033401.jpg",
    name: "Boifallen",
    playTft: true,
  },
];

// Variavel 'neroForce' é um array de objetos com os dados de cada pessoa
// Mostrar na lista da nero force:
// 1. Mostrar apenas membros q jogam tft (playTft = true)
// 2. Ordenar por ordem alfabetica
// 3. Adicionar "Super Bovino" depois do nome, ou seja Boienkede Super Bovino

// Os elementos da lista devem ser appended como 'li', filhos do 'ul' de classe "list-group", com a classe "list-group-item", mostrar apenas o nome com o Super Bovino

function tftPlayersList() {
  //Ordenar por ordem alfabetica
  neroForce.sort((a, b) => {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
  });

  //Mostrar apenas membros q jogam tft (playTft = true)
  // Os elementos da lista devem ser appended como 'li', filhos do 'ul' de classe "list-group", com a classe "list-group-item", mostrar apenas o nome com o Super Bovino
  neroForce.map((prop) => {
    return (prop.name = `${prop.name} Super Bovino`);
  });

  for (let i = 0; i < neroForce.length; i++) {
    if (neroForce[i].playTft === true) {
      const oxList = document.querySelector(".list-group");
      const addLi = document.createElement("li");
      addLi.classList.add("list-group-item");
      addLi.innerHTML = `<li> ${neroForce[i].name} <img src="${neroForce[i].img}"></li>`;
      oxList.appendChild(addLi);
    }
  }
}

tftPlayersList();
