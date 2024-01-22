const form = document.querySelector('#form');
const result = document.querySelector('.result');
let modelos;
let respostas;

const run = () => {
	let resposta1 = document.querySelector('input[name="pergunta1"]:checked').id.slice(2, 3);
	let resposta2 = document.querySelector('input[name="pergunta2"]:checked').id.slice(2, 3);
	let resposta3 = document.querySelector('input[name="pergunta3"]:checked').id.slice(2, 3);
	let resposta4 = document.querySelector('input[name="pergunta4"]:checked').id.slice(2, 3);
	let resposta5 = document.querySelector('input[name="pergunta5"]:checked').id.slice(2, 3);

		//OPT1500Mais
		if (resposta2== "D") {
			document.querySelector("#OPT-1500Mais").classList.remove('hide')
			modelos = 'Indicar vendas diretas'
			respostas = 'Acima de 1.500pg'
	
			const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
			const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}
	
	//OPT1
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "A" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT1").classList.remove('hide')
		modelos = 'G4110'
		respostas = 'Impressão - Até 250pg - Residencial / Home Office - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT2
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "A" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT2").classList.remove('hide')
		modelos = 'G4110'
		respostas = 'Impressão - Até 250pg - Residencial / Home Office - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT3
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "A" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT3").classList.remove('hide')
		modelos = 'G4110'
		respostas = 'Impressão - Até 250pg - Residencial / Home Office - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT4
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "A" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT4").classList.remove('hide')
		modelos = 'G510 e GX5010'
		respostas = 'Impressão - Até 250pg - Residencial / Home Office - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT5
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "A" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT5").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 250pg - Residencial / Home Office - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT6
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "A" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT6").classList.remove('hide')
		modelos = 'G510 e GX5010'
		respostas = 'Impressão - Até 250pg - Residencial / Home Office - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT7
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "B" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT7").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 250pg - Estúdios e Laboratórios - ADF -	Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT8
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "B" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT8").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 250pg - Estúdios e Laboratórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT9
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "B" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT9").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 250pg - Estúdios e Laboratórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT10
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "B" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT10").classList.remove('hide')
		modelos = 'G510'
		respostas = 'Impressão - Até 250pg - Estúdios e Laboratórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT11
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "B" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT11").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Impressão - Até 250pg - Estúdios e Laboratórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT12
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "B" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT12").classList.remove('hide')
		modelos = 'G510'
		respostas = 'Impressão - Até 250pg - Estúdios e Laboratórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT13
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "C" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT13").classList.remove('hide')
		modelos = 'G4110'
		respostas = 'Impressão - Até 250pg - Pequenos Escritórios - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT14
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "C" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT14").classList.remove('hide')
		modelos = 'G4110'
		respostas = 'Impressão - Até 250pg - Pequenos Escritórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT15
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "C" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT15").classList.remove('hide')
		modelos = 'G4110'
		respostas = 'Impressão - Até 250pg - Pequenos Escritórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT16
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "C" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT16").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 250pg - Pequenos Escritórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT17
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "C" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT17").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 250pg - Pequenos Escritórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT18
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "C" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT18").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 250pg - Pequenos Escritórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT19
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "D" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT19").classList.remove('hide')
		modelos = 'G4110'
		respostas = 'Impressão - Até 250pg - Ambiente Corporativo - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT20
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "D" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT20").classList.remove('hide')
		modelos = 'G4110'
		respostas = 'Impressão - Até 250pg - Ambiente Corporativo - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT21
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "D" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT21").classList.remove('hide')
		modelos = 'G4110'
		respostas = 'Impressão - Até 250pg - Ambiente Corporativo - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT22
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "D" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT22").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 250pg - Ambiente Corporativo - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT23
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "D" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT23").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 250pg - Ambiente Corporativo - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT24
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "D" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT24").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 250pg - Ambiente Corporativo - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT25
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "E" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT25").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão -Até 250pg - Sublimação - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT26
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "E" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT26").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 250pg - Sublimação - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT27
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "E" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT27").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 250pg - Sublimação - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT28
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "E" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT28").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 250pg - Sublimação - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT29
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "E" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT29").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 250pg - Sublimação - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT30
	if (resposta1 == "A" && resposta2== "A" && resposta3 == "E" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT30").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 250pg - Sublimação - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT31
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "A" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT31").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Impressão - Até 500pg - Residencial / Home Office - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT32
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "A" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT32").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Impressão - Até 500pg - Residencial / Home Office - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT33
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "A" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT33").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Impressão - Até 500pg - Residencial / Home Office - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT34
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "A" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT34").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 500pg - Residencial / Home Office - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT35
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "A" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT35").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 500pg - Residencial / Home Office - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT36
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "A" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT36").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 500pg - Residencial / Home Office - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT37
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "B" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT37").classList.remove('hide')
		modelos = 'Sem modelo'
		respostas = 'Impressão - Até 500pg - Estúdios e Laboratórios - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT38
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "B" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT38").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 500pg - Estúdios e Laboratórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT39
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "B" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT39").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 500pg - Estúdios e Laboratórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT40
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "B" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT40").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Impressão - Até 500pg - Estúdios e Laboratórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT41
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "B" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT41").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Impressão - Até 500pg - Estúdios e Laboratórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT42
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "B" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT42").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Impressão - Até 500pg - Estúdios e Laboratórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT43
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "C" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT43").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Impressão - Até 500pg - Pequenos Escritórios - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT44
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "C" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT44").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Impressão - Até 500pg - Pequenos Escritórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT45
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "C" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT45").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Impressão - Até 500pg - Pequenos Escritórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT46
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "C" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT46").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 500pg - Pequenos Escritórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT47
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "C" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT47").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 500pg - Pequenos Escritórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT48
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "C" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT48").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 500pg - Pequenos Escritórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT49
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "D" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT49").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Impressão - Até 500pg - Ambiente Corporativo - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT50
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "D" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT50").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Impressão - Até 500pg - Ambiente Corporativo - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT51
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "D" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT51").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Impressão - Até 500pg - Ambiente Corporativo - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT52
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "D" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT52").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 500pg - Ambiente Corporativo - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT53
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "D" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT53").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 500pg - Ambiente Corporativo - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT54
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "D" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT54").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 500pg - Ambiente Corporativo - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT55
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "E" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT55").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 500pg - Sublimação - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT56
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "E" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT56").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 500pg - Sublimação - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT57
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "E" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT57").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 500pg - Sublimação - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT58
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "E" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT58").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 500pg - Sublimação - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT59
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "E" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT59").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 500pg - Sublimação - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT60
	if (resposta1 == "A" && resposta2== "B" && resposta3 == "E" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT60").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 500pg - Sublimação - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT61
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "A" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT61").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Impressão - Até 1.500pg - Residencial / Home Office - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT62
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "A" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT62").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Impressão - Até 1.500pg - Residencial / Home Office - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT63
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "A" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT63").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Impressão - Até 1.500pg - Residencial / Home Office - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT64
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "A" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT64").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 1.500pg - Residencial / Home Office - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT65
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "A" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT65").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 1.500pg - Residencial / Home Office - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT66
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "A" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT66").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 1.500pg - Residencial / Home Office - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT67
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "B" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT67").classList.remove('hide')
		modelos = 'Sem modelo'
		respostas = 'Impressão - Até 1.500pg - Estúdios e Laboratórios - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT68
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "B" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT68").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Estúdios e Laboratórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT69
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "B" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT69").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Estúdios e Laboratórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT70
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "B" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT70").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Estúdios e Laboratórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT71
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "B" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT71").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Estúdios e Laboratórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT72
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "B" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT72").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Estúdios e Laboratórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT73
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "C" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT73").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Impressão - Até 1.500pg - Pequenos Escritórios - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT74
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "C" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT74").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Impressão - Até 1.500pg - Pequenos Escritórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT75
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "C" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT75").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Impressão - Até 1.500pg - Pequenos Escritórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT76
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "C" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT76").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 1.500pg - Pequenos Escritórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT77
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "C" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT77").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 1.500pg - Pequenos Escritórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT78
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "C" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT78").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 1.500pg - Pequenos Escritórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT79
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "D" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT79").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Impressão - Até 1.500pg - Ambiente Corporativo - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT80
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "D" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT80").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Impressão - Até 1.500pg - Ambiente Corporativo - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT81
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "D" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT81").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Impressão - Até 1.500pg - Ambiente Corporativo - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT82
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "D" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT82").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 1.500pg - Ambiente Corporativo - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT83
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "D" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT83").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - Até 1.500pg - Ambiente Corporativo - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT84
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "D" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT84").classList.remove('hide')
		modelos = 'GX5010'
		respostas = 'Impressão - A	Até 1.500pg - B	Ambiente Corporativo - D	SEM ADF - B	Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT85
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "E" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT85").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Sublimação - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT86
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "E" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT86").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Sublimação - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT87
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "E" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT87").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Sublimação - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT88
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "E" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT88").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Sublimação - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT89
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "E" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT89").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Sublimação - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT90
	if (resposta1 == "A" && resposta2== "C" && resposta3 == "E" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT90").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Impressão - Até 1.500pg - Sublimação - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT91
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "A" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT91").classList.remove('hide')
		modelos = 'G4110/G4111'
		respostas = 'Multifuncional - Até 250pg - Residencial / Home Office - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT92
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "A" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT92").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Residencial / Home Office - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT93
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "A" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT93").classList.remove('hide')
		modelos = 'G4110/G4111'
		respostas = 'Multifuncional - Até 250pg - Residencial / Home Office - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT94
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "A" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT94").classList.remove('hide')
		modelos = 'G3110/G3111 e G610'
		respostas = 'Multifuncional - Até 250pg - Residencial / Home Office - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT95
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "A" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT95").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Residencial / Home Office - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT96
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "A" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT96").classList.remove('hide')
		modelos = 'G3110/G3111 e G610'
		respostas = 'Multifuncional - Até 250pg - Residencial / Home Office - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT97
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "B" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT97").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Estúdios e Laboratórios - ADF -	Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT98
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "B" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT98").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Estúdios e Laboratórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT99
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "B" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT99").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Estúdios e Laboratórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT100
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "B" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT100").classList.remove('hide')
		modelos = 'G610'
		respostas = 'Multifuncional - Até 250pg - Estúdios e Laboratórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT101
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "B" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT101").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Multifuncional - Até 250pg - Estúdios e Laboratórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT102
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "B" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT102").classList.remove('hide')
		modelos = 'G610'
		respostas = 'Multifuncional - Até 250pg - Estúdios e Laboratórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT103
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "C" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT103").classList.remove('hide')
		modelos = 'G4110/G4111'
		respostas = 'Multifuncional - Até 250pg - Pequenos Escritórios - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT104
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "C" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT104").classList.remove('hide')
		modelos = 'Sem modelo'
		respostas = 'Multifuncional - Até 250pg - Pequenos Escritórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT105
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "C" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT105").classList.remove('hide')
		modelos = 'G4110/G4111'
		respostas = 'Multifuncional - Até 250pg - Pequenos Escritórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT106
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "C" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT106").classList.remove('hide')
		modelos = 'G3110/G3111'
		respostas = 'Multifuncional - Até 250pg - Pequenos Escritórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT107
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "C" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT107").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Pequenos Escritórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT108
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "C" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT108").classList.remove('hide')
		modelos = 'G3110/G3111'
		respostas = 'Multifuncional - Até 250pg - Pequenos Escritórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT109
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "D" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT109").classList.remove('hide')
		modelos = 'G4110/G4111'
		respostas = 'Multifuncional - Até 250pg - Ambiente Corporativo - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT110
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "D" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT110").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Ambiente Corporativo - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT111
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "D" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT111").classList.remove('hide')
		modelos = 'G4110/G4111'
		respostas = 'Multifuncional - Até 250pg - Ambiente Corporativo - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT112
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "D" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT112").classList.remove('hide')
		modelos = 'G3110/G3111'
		respostas = 'Multifuncional - Até 250pg - Ambiente Corporativo - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT113
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "D" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT113").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Ambiente Corporativo - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT114
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "D" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT114").classList.remove('hide')
		modelos = 'G3110/G3111'
		respostas = 'Multifuncional - Até 250pg - Ambiente Corporativo - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT115
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "E" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT115").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional -Até 250pg - Sublimação - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT116
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "E" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT116").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Sublimação - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT117
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "E" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT117").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Sublimação - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT118
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "E" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT118").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Sublimação - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT119
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "E" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT119").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Sublimação - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT120
	if (resposta1 == "B" && resposta2== "A" && resposta3 == "E" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT120").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 250pg - Sublimação - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT121
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "A" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT121").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Multifuncional - Até 500pg - Residencial / Home Office - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT122
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "A" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT122").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Multifuncional - Até 500pg - Residencial / Home Office - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT123
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "A" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT123").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Multifuncional - Até 500pg - Residencial / Home Office - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT124
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "A" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT124").classList.remove('hide')
		modelos = 'G3160 e G610'
		respostas = 'Multifuncional - Até 500pg - Residencial / Home Office - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT125
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "A" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT125").classList.remove('hide')
		modelos = 'G6010'
		respostas = 'Multifuncional - Até 500pg - Residencial / Home Office - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT126
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "A" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT126").classList.remove('hide')
		modelos = 'G2160'
		respostas = 'Multifuncional - Até 500pg - Residencial / Home Office - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT127
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "B" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT127").classList.remove('hide')
		modelos = 'Sem modelo'
		respostas = 'Multifuncional - Até 500pg - Estúdios e Laboratórios - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT128
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "B" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT128").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 500pg - Estúdios e Laboratórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT129
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "B" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT129").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 500pg - Estúdios e Laboratórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT130
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "B" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT130").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Multifuncional - Até 500pg - Estúdios e Laboratórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT131
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "B" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT131").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Multifuncional - Até 500pg - Estúdios e Laboratórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT132
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "B" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT132").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Multifuncional - Até 500pg - Estúdios e Laboratórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT133
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "C" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT133").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Multifuncional - Até 500pg - Pequenos Escritórios - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT134
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "C" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT134").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Multifuncional - Até 500pg - Pequenos Escritórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT135
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "C" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT135").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Multifuncional - Até 500pg - Pequenos Escritórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT136
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "C" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT136").classList.remove('hide')
		modelos = 'G6010'
		respostas = 'Multifuncional - Até 500pg - Pequenos Escritórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT137
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "C" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT137").classList.remove('hide')
		modelos = 'G6010'
		respostas = 'Multifuncional - Até 500pg - Pequenos Escritórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT138
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "C" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT138").classList.remove('hide')
		modelos = 'G6010'
		respostas = 'Multifuncional - Até 500pg - Pequenos Escritórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT139
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "D" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT139").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Multifuncional - Até 500pg - Ambiente Corporativo - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT140
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "D" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT140").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Multifuncional - Até 500pg - Ambiente Corporativo - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT141
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "D" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT141").classList.remove('hide')
		modelos = 'G7010'
		respostas = 'Multifuncional - Até 500pg - Ambiente Corporativo - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT142
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "D" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT142").classList.remove('hide')
		modelos = 'G6010'
		respostas = 'Multifuncional - Até 500pg - Ambiente Corporativo - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT143
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "D" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT143").classList.remove('hide')
		modelos = 'G6010'
		respostas = 'Multifuncional - Até 500pg - Ambiente Corporativo - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT144
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "D" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT144").classList.remove('hide')
		modelos = 'G6010'
		respostas = 'Multifuncional - Até 500pg - Ambiente Corporativo - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT145
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "E" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT145").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 500pg - Sublimação - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT146
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "E" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT146").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 500pg - Sublimação - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT147
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "E" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT147").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 500pg - Sublimação - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT148
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "E" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT148").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 500pg - Sublimação - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT149
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "E" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT149").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 500pg - Sublimação - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT150
	if (resposta1 == "B" && resposta2== "B" && resposta3 == "E" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT150").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 500pg - Sublimação - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT151
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "A" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT151").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Residencial / Home Office - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT152
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "A" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT152").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Residencial / Home Office - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT153
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "A" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT153").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Residencial / Home Office - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT154
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "A" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT154").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Residencial / Home Office - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT155
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "A" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT155").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Residencial / Home Office - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT156
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "A" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT156").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Residencial / Home Office - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT157
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "B" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT157").classList.remove('hide')
		modelos = 'Sem modelo'
		respostas = 'Multifuncional - Até 1.500pg - Estúdios e Laboratórios - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT158
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "B" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT158").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 1.500pg - Estúdios e Laboratórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT159
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "B" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT159").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 1.500pg - Estúdios e Laboratórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT160
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "B" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT160").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Multifuncional - Até 1.500pg - Estúdios e Laboratórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT161
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "B" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT161").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Multifuncional - Até 1.500pg - Estúdios e Laboratórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT162
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "B" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT162").classList.remove('hide')
		modelos = 'Indicar vendas diretas'
		respostas = 'Multifuncional - Até 1.500pg - Estúdios e Laboratórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT163
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "C" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT163").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Pequenos Escritórios - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT164
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "C" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT164").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Pequenos Escritórios - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT165
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "C" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT165").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Pequenos Escritórios - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT166
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "C" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT166").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Pequenos Escritórios - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT167
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "C" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT167").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Pequenos Escritórios - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT168
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "C" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT168").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Pequenos Escritórios - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT169
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "D" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT169").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Ambiente Corporativo - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT170
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "D" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT170").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Ambiente Corporativo - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT171
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "D" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT171").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Ambiente Corporativo - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT172
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "D" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT172").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Ambiente Corporativo - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT173
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "D" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT173").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - Até 1.500pg - Ambiente Corporativo - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT174
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "D" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT174").classList.remove('hide')
		modelos = 'GX6010 e GX7010'
		respostas = 'Multifuncional - A	Até 1.500pg - B	Ambiente Corporativo - D	SEM ADF - B	Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT175
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "E" && resposta4 == "A" && resposta5 == "A") {
		document.querySelector("#OPT175").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 1.500pg - Sublimação - ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT176
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "E" && resposta4 == "A" && resposta5 == "B") {
		document.querySelector("#OPT176").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 1.500pg - Sublimação - ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT177
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "E" && resposta4 == "A" && resposta5 == "C") {
		document.querySelector("#OPT177").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 1.500pg - Sublimação - ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT178
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "E" && resposta4 == "B" && resposta5 == "A") {
		document.querySelector("#OPT178").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 1.500pg - Sublimação - SEM ADF - Compartilha via wifi'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT179
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "E" && resposta4 == "B" && resposta5 == "B") {
		document.querySelector("#OPT179").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 1.500pg - Sublimação - SEM ADF - Compartilha via cabo de rede'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

	//OPT180
	if (resposta1 == "B" && resposta2== "C" && resposta3 == "E" && resposta4 == "B" && resposta5 == "C") {
		document.querySelector("#OPT180").classList.remove('hide')
		modelos = 'Sem modelos'
		respostas = 'Multifuncional - Até 1.500pg - Sublimação - SEM ADF - Não compartilha impressora'

		const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
		const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
	}

			//OPTSublimação
			if (resposta3== "E") {
				document.querySelector("#OPT-Sublimação").classList.remove('hide')
				modelos = 'Sem modelos'
				respostas = 'Sublimação'
		
				const inputModelos = document.querySelector('#inputModelos'); inputModelos.value = modelos
				const inputRespostas = document.querySelector('#inputRespostas'); inputRespostas.value = respostas
		}
}