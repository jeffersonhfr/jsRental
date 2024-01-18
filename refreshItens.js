const itensBagTag = document.querySelectorAll(".bag-cicle-desk");

const verifyDuplicity = () => {
    newArrList = []
    ListRefresh = []
    listRefresh2 = []
    for (var i = 0; i < itensBag.length; i++) {
        newArrList.push(JSON.stringify(itensBag[i]));
    };

    for (var i = 0; i < newArrList.length; i++) {
        if (ListRefresh.indexOf(newArrList[i]) == -1) {
            var index = newArrList[i];
            JSON.parse(ListRefresh.push(index));
        }
    };

    for (var i = 0; i < ListRefresh.length; i++) {
        listRefresh2.push((JSON.parse(ListRefresh[i])))
    }
    sessionStorage.setItem('itens1', JSON.stringify(listRefresh2));
}

const changeItens = () => {
    if (sessionStorage.getItem('itens1') && sessionStorage.getItem('itens1').length >= 0) {
        verifyDuplicity()
        itensBagTag[0].classList.remove('hide')
        itensBagTag[1].classList.remove('hide')
        itensBagTag[0].innerHTML = listRefresh2.length
        itensBagTag[1].innerHTML = listRefresh2.length
        return;
    }

    if (sessionStorage.getItem('itens') && sessionStorage.getItem('itens').length >= 0) {
        itensBagTag[0].classList.remove('hide')
        itensBagTag[1].classList.remove('hide')
        itensBagTag[0].innerHTML = itensBag.length
        itensBagTag[1].innerHTML = itensBag.length
        setTimeout(function () { verifyDuplicity() }, 2000);
        return;
    }

    if (sessionStorage.getItem('itens') == null) {
        itensBagTag[0].classList.add('hide')
        itensBagTag[1].classList.add('hide')
        setTimeout(function () { verifyDuplicity() }, 2000);
        return;
    }
}
changeItens()

