//incluir o traço quando alguém ganhar, o jogador ou a máquina
//incluir a opção para jogar contra um outro player
//incluir descrição ao lado quando qualquer um ganhar

function preencherEspaco(idEspaco, tipoMarcacao){
    if(document.getElementById('marcacao' + idEspaco).innerText == '' && podeMarcar && jogoFinalizado == false){
        document.getElementById('marcacao' + idEspaco).innerText = tipoMarcacao;
        document.getElementById('marcacao' + idEspaco).style.fontSize = '50px';
        document.getElementById('marcacao' + idEspaco).style.marginLeft = '40px';
        document.getElementById('marcacao' + idEspaco).style.marginTop = '10px';
        document.getElementById('marcacao' + idEspaco).style.padding = '0';
        document.getElementById('marcacao' + idEspaco).style.fontFamily = 'Comic Sans MS';
        document.getElementById('marcacao' + idEspaco).style.color = 'rgb(18, 17, 17)';

        const index = arrayEspacos.indexOf(idEspaco);
        arrayEspacos.splice(index, 1);
        if(arrayEspacos.length >= 1){
            sortearMarcacaoEngine(arrayEspacos);
        }

        verificarFinalizacaoJogo();
        if(jogoFinalizado){
            demonstrarResultado();
        }
    }
}

function desabilitarComboSelecao(){
    document.getElementById('cmbMarcacao').disabled = true;
}




function demonstrarResultado(){

    if(deuVelha){
        alert('Deu velha');
    }
    else if(jogadorGanhou){
        alert('Parabéns você ganhou!');
    }
    else{
        alert('Que pena você perdeu!');
    }

    arrayEspacos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    habilitarBotaoJogar();
    habilitarBotoesMarcacao();
    habilitarComboSelecao();
}

function habilitarComboSelecao(){
    document.getElementById('cmbMarcacao').disabled = false;
}

function verificarFinalizacaoJogo(){

    let espaco1 = document.getElementById('marcacao' + 1).innerText;
    let espaco2 = document.getElementById('marcacao' + 2).innerText;
    let espaco3 = document.getElementById('marcacao' + 3).innerText;
    let espaco4 = document.getElementById('marcacao' + 4).innerText;
    let espaco5 = document.getElementById('marcacao' + 5).innerText;
    let espaco6 = document.getElementById('marcacao' + 6).innerText;
    let espaco7 = document.getElementById('marcacao' + 7).innerText;
    let espaco8 = document.getElementById('marcacao' + 8).innerText;
    let espaco9 = document.getElementById('marcacao' + 9).innerText;

    if(espaco1 != ''){
        if((espaco1 == espaco2 && espaco1 == espaco3) || (espaco1 == espaco5 && espaco1 == espaco9) ||
        (espaco1 == espaco4 && espaco1 == espaco7)){
            jogoFinalizado = true;
            deuVelha = false;
            if(tipoMarcacao == espaco1){
                jogadorGanhou = true;
            }
        }
    }
    if(espaco2 != ''){
        if(espaco2 == espaco5 && espaco2 == espaco8){
            jogoFinalizado = true;
            deuVelha = false;
            if(tipoMarcacao == espaco2){
                jogadorGanhou = true;
            }
        }
    }
    if(espaco3 != ''){
        if((espaco3 == espaco5 && espaco3 == espaco7) || (espaco3 == espaco6 && espaco3 == espaco9)){
            jogoFinalizado = true;
            deuVelha = false;
            if(tipoMarcacao == espaco3){
                jogadorGanhou = true;
            }
        }
    }
    if(espaco4 != ''){
        if((espaco4 == espaco5 && espaco4 == espaco6)){
            jogoFinalizado = true;
            deuVelha = false;
            if(tipoMarcacao == espaco4){
                jogadorGanhou = true;
            }
        }
    }
    if(espaco7 != ''){
        if((espaco7 == espaco8 && espaco7 == espaco9)){
            jogoFinalizado = true;
            deuVelha = false;
            if(tipoMarcacao == espaco7){
                jogadorGanhou = true;
            }
        }
    }
    if(arrayEspacos.length == 0){
        jogoFinalizado = true; 
    }
}

function sortearMarcacaoEngine(arrayEspacos){

    if(jogoFinalizado == false){
        let vetEspacosRestantes = arrayEspacos;
        let espaco = Math.floor(Math.random() * vetEspacosRestantes.length);
        espacoSorteado = vetEspacosRestantes[espaco];
        document.getElementById('marcacao' + espacoSorteado).style.fontSize = '50px';
        document.getElementById('marcacao' + espacoSorteado).style.marginLeft = '40px';
        document.getElementById('marcacao' + espacoSorteado).style.marginTop = '10px';
        document.getElementById('marcacao' + espacoSorteado).style.padding = '0';
        document.getElementById('marcacao' + espacoSorteado).style.fontFamily = 'Comic Sans MS';
        document.getElementById('marcacao' + espacoSorteado).style.color = 'rgb(18, 17, 17)';
        const index = arrayEspacos.indexOf(espacoSorteado);
        arrayEspacos.splice(index, 1);

        verificarFinalizacaoJogo();

        if(jogadorGanhou == false){
            if(tipoMarcacao == 'X'){
                document.getElementById('marcacao' + espacoSorteado).innerText = 'O';
            }
            else{
                document.getElementById('marcacao' + espacoSorteado).innerText = 'X'; 
            }
        }
    }
}


function habilitarBotoesMarcacao(){
    document.getElementById('marcacaoX').disabled = false;
    document.getElementById('marcacaoO').disabled = false;
}

function desabilitarBotoesMarcacao(){
    document.getElementById('marcacaoX').disabled = true;
    document.getElementById('marcacaoO').disabled = true;
}

function escolhaX(){
    if(arrayEspacos.length == 9){
        document.getElementById('marcacaoO').style.background = 'buttonface';
        document.getElementById('marcacaoX').disabled = true;
        document.getElementById('marcacaoX').style.background = 'lightgreen';
        document.getElementById('marcacaoO').disabled = false;
        tipoMarcacao = 'X'
    }
}

function escolhaO(){
    if(arrayEspacos.length == 9){
        document.getElementById('marcacaoX').style.background = 'buttonface';
        document.getElementById('marcacaoO').style.background = 'lightgreen';
        document.getElementById('marcacaoO').disabled = true;
        document.getElementById('marcacaoX').disabled = false;
        tipoMarcacao = 'O'
    }
}

function desabilitarBotaoJogar(){
    document.getElementById('btnJogar').disabled = true;
    document.getElementById('btnJogar').style.opacity = 0.5;
}

function habilitarBotaoJogar(){
    document.getElementById('btnJogar').disabled = false;
    document.getElementById('btnJogar').style.opacity = 1;
}


function jogar(){

    if(tipoMarcacao == ''){
        alert('Escolha a marcação');
    }
    else{
        desabilitarBotoesMarcacao();
        desabilitarBotaoJogar();
        desabilitarComboSelecao();
        podeMarcar = true;

        arrayEspacos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        jogoFinalizado = false;
        jogadorGanhou = false;
        deuVelha = true;
    
        for(let i = 0; i< arrayEspacos.length; i++){
            document.getElementById('marcacao' + arrayEspacos[i]).innerText = '';
            document.getElementById('marcacao' + arrayEspacos[i]).style.fontSize = null;
            document.getElementById('marcacao' + arrayEspacos[i]).style.marginLeft = null;
            document.getElementById('marcacao' + arrayEspacos[i]).style.marginTop = null;
            document.getElementById('marcacao' + arrayEspacos[i]).style.padding = null;
            document.getElementById('marcacao' + arrayEspacos[i]).style.fontFamily = null;
            document.getElementById('marcacao' + arrayEspacos[i]).style.color = null;
        }

        validarSelecao();
    }
}


function validarSelecao(){

    if (tipoMarcacao != ''){
        let selecaoEscolhida = document.getElementById('cmbMarcacao').value;

        let vetOpcao = ['X', 'O'];
        let opcaoSorteada = '';
    
        if((tipoMarcacao != selecaoEscolhida) && (selecaoEscolhida != 'Aleatorio' && selecaoEscolhida != 'Alternado')){
            sortearMarcacaoEngine(arrayEspacos);
        }
    
        if(selecaoEscolhida == 'Aleatorio'){
            let opcao = Math.floor(Math.random() * vetOpcao.length);
            opcaoSorteada = vetOpcao[opcao];
            if(tipoMarcacao != opcaoSorteada){
                sortearMarcacaoEngine(arrayEspacos);
            }
        }

        if(selecaoEscolhida == 'Alternado'){
            if(ultimaOpcaoEscolhida == ''){
                ultimaOpcaoEscolhida = tipoMarcacao;
            }
            else{
                sortearMarcacaoEngine(arrayEspacos);
                ultimaOpcaoEscolhida = '';
            }
        }
    }
}

let jogoFinalizado = false;
let tipoMarcacao = '';
let podeMarcar = false;
let arrayEspacos = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let jogadorGanhou = false;
let deuVelha = true;
let ultimaOpcaoEscolhida = '';




