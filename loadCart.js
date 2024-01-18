let newArrList = []
let ListRefresh = []
let listRefresh2 = []
var itensBag = []
if (sessionStorage.getItem('itens') != null) {
    let itensBagLoad = sessionStorage.getItem('itens');
    itensBag = JSON.parse(itensBagLoad)
}

