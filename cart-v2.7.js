var hasEquipament = 0;
listRefresh2.forEach(function (nome) {
  if (nome.type === "equipamentos") {
    hasEquipament = hasEquipament + 1;
  }
});

if (hasEquipament >= 1) {
  function getEquipamentosBox(item) {
    return [
      `
            <div class="equipamento-box">
                <div class="inputGroupBox">
                    <h3 class="heading-form">Lista de Equipamentos para locação</h3>
                    <div class="inputGroup">
                    </div>
                </div>
                <section class="h-100">
                    <div class="">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12">
                                <div class="card ">
                                    <div class="card-body p-0">
                                        <div class="row g-0">
                                            <div class="col-lg-12">
                                                <div class="py-3 px-3">
                                                    <div class="carousel-inner" id="equipamentos"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="dataBox row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-6">
                        <label for="dataRetirada" class="col-6 col-form-label">Data da retirada</label>
                        <div class="input-group date" id="">
                            <input type="date" class="form-control" name="data_retirada_equipamento" id="data_retirada_equipamento" />
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <label for="dataDevolucao" class="col-6 col-form-label">Data da Devolução</label>
                        <div class="input-group date" id="">
                            <input type="date" class="form-control" name="data_devolucao_equipamento" id="data_devolucao_equipamento" />
                        </div>
                    </div>
                </div>
            </div> 
        `,
    ];
  }
  document.querySelector(".areaEquipamento").innerHTML = getEquipamentosBox();

  function getEquipamentos(item) {
    if (item.type == "equipamentos") {
      return [
        `
        <div class="row d-flex justify-content-between align-items-center listadeequipamentoscard">
            <hr class="my-2">
            <div class="col-12 col-md-3 col-lg-2 col-xl-2">
                <img src="${item.image}" class="img-fluid rounded-3 img-cart py-3" alt="${item.name}">
                </div>
                <div class="col-4 col-md-5 col-lg-5 col-xl-5">
                <h6 class="text-muted nome_equipamento">${item.name}</h6>
                </div>
                <div class="col-6 col-md-3 col-lg-3 col-xl-2 d-flex">
                <span class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <i class="fas fa-minus"></i>
                </span>
                <input id="quantidade_${item.name}" min="1" name="quantity" value="1" type="number" class="form-control form-control-sm quantidade_equipamento" max="5" placeholder="1"/>
                <span class="btn btn-link px-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <i class="fas fa-plus"></i>
                </span>
                </div>
                <div class="col-2 col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#" class="text-muted"><i class="fas fa-times removeBtn" data-type="${item.type}" data-id="${item.id}" data-name="${item.name}" data-image="${item.image}"></i></a>
                <input type="hidden" name="equipamentos" id="equipamentos" value="${item.name}"/>
            </div>
        </div>
      `,
      ];
    }
  }
  document.getElementById("equipamentos").innerHTML = listRefresh2
    .map(getEquipamentos)
    .join("");
}

var hasEstudioFotografico = 0;
listRefresh2.forEach(function (nome) {
  if (nome.id === "estudioFotografico") {
    hasEstudioFotografico = hasEstudioFotografico + 1;
  }
});

if (hasEstudioFotografico >= 1) {
  function getEstudioFotograficoBox(item) {
    return [
      `
            <div class="estudiofotografico-box">
                <div class="inputGroupBox">
                    <h3 class="heading-form">Locação para o Estúdio Fotográfico</h3>
                    <div class="inputGroup">
                    </div>
                </div>
                <section class="h-100">
                    <div class="">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12">
                                <div class="card ">
                                    <div class="card-body p-0">
                                        <div class="row g-0">
                                            <div class="col-lg-12">
                                                <div class="py-3 px-3">
                                                    <div class="carousel-inner" id="estudiofotografico"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="dataBox row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-6">
                        <label for="dialocacao" class="col-6 col-form-label">Data da Locação</label>
                        <div class="input-group date" id="">
                            <input type="date" class="form-control" id="data_locacao_fotografico" name="data_locacao_fotografico"/>
                            <input type="hidden" name="estudio_fotografico" id="estudio_fotografico" value="Aluguel estúdio fotográfico"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="dialocacao" class="col-6 col-form-label">Período da locação</label>
                        <div class="input-group periodo">
                            <select class="form-select" aria-label="Default select example" id="periodo_locacao_fotografico" name="periodo_locacao_fotografico">
                                <option value="Diária Completa">Diária completa - 9h00 as 17h00</option>
                                <option value="Meia Diária - Manhã">Meia diária - Manhã (09h00 as 12h00)</option>
                                <option value="Meia Diária - Tarde">Meia diária - Tarde (13h00 as 17h00)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div> 
        `,
    ];
  }
  document.querySelector(".areaEstudioFotografico").innerHTML =
    getEstudioFotograficoBox();

  function getEstudioFotografico(item) {
    if (item.id == "estudioFotografico") {
      return [
        `
        <div class="row d-flex justify-content-between align-items-center listaestudiofotograficocard">
            <div class="col-12 col-md-3 col-lg-2 col-xl-2">
            <img src="${item.image}" class="img-fluid rounded-3 img-cart py-3" alt="${item.name}">
            </div>
            <div class="col-7 col-md-6 col-lg-6 col-xl-6">
            <h6 class="text-muted">${item.name}</h6>
            </div>
            <div class="col-3 col-md-2 col-lg-2 col-xl-1 d-flex">
            </div>
            <div class="col-2 col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#" class="text-muted"><i class="fas fa-times removeBtn" data-type="${item.type}" data-id="${item.id}" data-name="${item.name}" data-image="${item.image}"></i></a>
            </div>
        </div>
      `,
      ];
    }
  }
  document.getElementById("estudiofotografico").innerHTML = listRefresh2
    .map(getEstudioFotografico)
    .join("");
}

var hasEstudioVideo = 0;
listRefresh2.forEach(function (nome) {
  if (nome.id === "estudioVideo") {
    hasEstudioVideo = hasEstudioVideo + 1;
  }
});

if (hasEstudioVideo >= 1) {
  function getEstudioVideoBox(item) {
    return [
      `
            <div class="estudiovideo-box">
                <div class="inputGroupBox">
                    <h3 class="heading-form">Locação para o Estúdio de Vídeo</h3>
                    <div class="inputGroup">
                    </div>
                </div>
                <section class="h-100">
                    <div class="">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12">
                                <div class="card ">
                                    <div class="card-body p-0">
                                        <div class="row g-0">
                                            <div class="col-lg-12">
                                                <div class="py-3 px-3">
                                                    <div class="carousel-inner" id="estudiovideo"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="dataBox row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-6">
                        <label for="dialocacao" class="col-6 col-form-label">Data da Locação</label>
                        <div class="input-group date" id="">
                            <input type="date" class="form-control" id="data_locacao_video" name="data_locacao_video"/>
                            <input type="hidden" name="estudio_video" id="estudio_video" value="Aluguel estúdio de vídeo"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <label for="dialocacao" class="col-6 col-form-label">Período da locação</label>
                        <div class="input-group periodo" id="">
                            <select class="form-select" aria-label="Default select example" id="periodo_locacao_video" name="periodo_locacao_video">
                                <option value="Diária completa">Diária completa - 9h00 as 17h00</option>
                                <option value="Meia diária - Manhã">Meia diária - Manhã (09h00 as 12h00)</option>
                                <option value="Meia diária - Tarde">Meia diária - Tarde (13h00 as 17h00)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="dataBox row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12">
                        <label for="utilização" class="col-6 col-form-label">Qual o tipo do conteúdo</label>
                        <div class="input-group date" id="">
                            <select class="form-select" aria-label="Default select example" id="tipo_video" name="tipo_video">
                                <option value="Lives">Live para redes sociais</option>
                                <option value="Podcast">Podcast</option>
                                <option value="Criação de conteúdo">Criação de conteúdo em geral</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div> 
        `,
    ];
  }
  document.querySelector(".areaEstudiovideo").innerHTML = getEstudioVideoBox();

  function getEstudioVideo(item) {
    if (item.id == "estudioVideo") {
      return [
        `
        <div class="row d-flex justify-content-between align-items-center listaestudioVideocard">
            <div class="col-12 col-md-3 col-lg-2 col-xl-2">
            <img src="${item.image}" class="img-fluid rounded-3 img-cart py-3" alt="${item.name}">
            </div>
            <div class="col-7 col-md-6 col-lg-6 col-xl-6">
            <h6 class="text-muted">${item.name}</h6>
            </div>
            <div class="col-3 col-md-2 col-lg-2 col-xl-1 d-flex">
            </div>
            <div class="col-2 col-md-1 col-lg-1 col-xl-1 text-end">
            <a href="#" class="text-muted"><i class="fas fa-times removeBtn" data-type="${item.type}" data-id="${item.id}" data-name="${item.name}" data-image="${item.image}"></i></a>
            </div>
        </div>
      `,
      ];
    }
  }
  document.getElementById("estudiovideo").innerHTML = listRefresh2
    .map(getEstudioVideo)
    .join("");
}

var cardEstudioFotografico;
const verifyEstudioFotografico = () => {
  cardEstudioFotografico = document.querySelector(
    ".listaestudiofotograficocard"
  );
  if (document.querySelector(".estudiofotografico-box")) {
    if (cardEstudioFotografico == null) {
      document.querySelector(".estudiofotografico-box").classList.add("hide");
    } else {
      document
        .querySelector(".estudiofotografico-box")
        .classList.remove("hide");
    }
  }
};

var cardEquipamentosItens;
const verifyEquipamentList = () => {
  cardEquipamentosItens = document.querySelector(".listadeequipamentoscard");
  if (document.querySelector(".equipamento-box")) {
    if (cardEquipamentosItens == null) {
      document.querySelector(".equipamento-box").classList.add("hide");
    } else {
      document.querySelector(".equipamento-box").classList.remove("hide");
    }
  }
};

var cardEstudioVideo;
const verifyEstudioVideo = () => {
  cardEstudioVideo = document.querySelector(".listaestudiovideocard");
  if (document.querySelector(".estudiovideo-box")) {
    if (cardEstudioVideo == null) {
      document.querySelector(".estudiovideo-box").classList.add("hide");
    } else {
      document.querySelector(".estudiovideo-box").classList.remove("hide");
    }
  }
};

// Pra baixo ok //
const btnRemoveCart = document.querySelectorAll(".removeBtn");
var itemSelecionado;

function RemovehandleClick(event) {
  const itemClicado = event.target; // Obtém o elemento clicado
  let itemApagar = itemClicado.parentNode.parentNode.parentNode;
  const dados = {
    type: itemClicado.getAttribute("data-type"),
    id: itemClicado.getAttribute("data-id"),
    name: itemClicado.getAttribute("data-name"),
    image: itemClicado.getAttribute("data-image"),
  };

  // Faça algo com os dados do item clicado
  itemSelecionado = dados;
  itemApagar.remove();

  removerItemDoCarrinho(itemSelecionado);
  changeItens();
  event.preventDefault();
}

function removerItemDoCarrinho(itemSelecionado) {
  let newItensBag = [];
  itensBag = itensBag.filter(function (item) {
    if (JSON.stringify(item) !== JSON.stringify(itemSelecionado)) {
      newItensBag.push(item);
    }
  });
  itensBag = newItensBag;
  sessionStorage.setItem("itens", JSON.stringify(itensBag));
  verifyEstudioFotografico();
  verifyEquipamentList();
  verifyEstudioVideo();

  if (
    document.querySelector("#equipamentos") == null ||
    document.querySelector("#equipamentos").children[0] == undefined
  ) {
    if (
      document.querySelector("#estudiovideo") == null ||
      document.querySelector("#estudiovideo").children[0] == undefined
    ) {
      if (
        document.querySelector("#estudiofotografico") == null ||
        document.querySelector("#estudiofotografico").children[0] == undefined
      ) {
        document.querySelector(".formularioData").classList.add("hide");
        document.querySelector(".formularioEmpty").classList.remove("hide");
      }
    }
  } else {
    document.querySelector(".formularioData").classList.remove("hide");
    document.querySelector(".formularioEmpty").classList.add("hide");
  }
}

btnRemoveCart.forEach(function (elemento) {
  elemento.addEventListener("click", RemovehandleClick);
});

if (hasEquipament == 0 && hasEstudioFotografico == 0 && hasEstudioVideo == 0) {
  document.querySelector(".formularioData").classList.add("hide");
  document.querySelector(".formularioEmpty").classList.remove("hide");
} else {
  document.querySelector(".formularioData").classList.remove("hide");
  document.querySelector(".formularioEmpty").classList.add("hide");
}
