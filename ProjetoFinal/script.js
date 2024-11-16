const $formnew = document.getElementById('formnew');
const $descr = document.getElementById('description');
const $titu = document.getElementById('criartitulo');
const $pri = document.getElementById('prioridade');
const $temp = document.getElementById('tempo');
const $idT = document.getElementById('idTarefa');
const $tituloc = document.getElementById('titulocriar');
const $tituloe = document.getElementById('tituloeditar');
const $btnc = document.getElementById('btncriar');
const $btne = document.getElementById('btneditar');
const $colunaop = document.getElementById('colunaopt');

let idAtual = 1;
function addID() {
    return idAtual++;
}

var t = localStorage.getItem("tarefas");
let listaTarefas = t ? JSON.parse(t) : [];
criaPost();

function abrirForm(id) {
    $formnew.style.display = "flex";

    if (id) {
        $tituloc.style.display = "none";
        $tituloe.style.display = "block";
        $btnc.style.display = "none";
        $btne.style.display = "block";

        const t = listaTarefas.findIndex(tarefa => tarefa.id == id);
        let tarefa = listaTarefas[t];

        $idT.value = tarefa.id;
        $descr.value = tarefa.descricao;
        $titu.value = tarefa.titulo;
        $pri.value = tarefa.privalue;
        $temp.value = tarefa.tempo;
    } else {
        $tituloc.style.display = "block";
        $tituloe.style.display = "none";
        $btnc.style.display = "block";
        $btne.style.display = "none";
    }
}

function fecharForm() {
    $descr.value = '';
    $titu.value = '';
    $pri.value = 'default';
    $temp.value = '';
    $idT.value = '';

    $formnew.style.display = "none";
}

function criaPost() {
    document.querySelectorAll('[data-column]').forEach(col => col.querySelector('.conteudo').innerHTML = '');

    listaTarefas.forEach(function(tarefa) {
        const contColuna = document.querySelector(`[data-column="${tarefa.coluna}"] .conteudo`);

        const postit = `
        <div id="${tarefa.id}" class="post" draggable="true" ondragstart="dragstartHandler(event)">
            <div class="tituloPost">
                <span><b>${tarefa.titulo}</b></span>
                 <div class="icones">
                    <div id="iconeDelete" onclick="excluirTarefa(${tarefa.id})"><img src="./delete.png" alt="Excluir"/></div>
                    <div id="iconeEdit" onclick="abreEdit(${tarefa.id})"><img src="./edit.png" alt="Editar"/></div>
                </div>
            </div>
            <div class="descrPost">
                <label><b>${tarefa.descricao}</b></label>
            </div>
            <div class="prioridadePost">
                <label><b>${tarefa.prioridade}</b></label>
            </div>
            <div class="tempoPost">
                <label><b>${tarefa.tempo} horas</b></label>
            </div>
        </div>
        `;

        contColuna.innerHTML += postit;
    });
}

function abreEdit(id) {
    abrirForm(id);
    console.log(id);
}

function criarTarefa() {
    const tarefa = {
        id: addID(),
        coluna: $colunaop.value,
        descricao: $descr.value,
        titulo: $titu.value,
        prioridade: $pri.options[$pri.selectedIndex].getAttribute('name'),
        privalue: $pri.value,
        tempo: $temp.value
    };

    listaTarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(listaTarefas))
    criaPost();
    fecharForm();
}

function editarTarefa() {
    const index = listaTarefas.findIndex(tarefa => tarefa.id == $idT.value);

    if (index !== -1) {
        listaTarefas[index] = {
            ...listaTarefas[index],
            descricao: $descr.value,
            titulo: $titu.value,
            prioridade: $pri.options[$pri.selectedIndex].getAttribute('name'),
            privalue: $pri.value,
            tempo: $temp.value
        };
    }

    localStorage.setItem("tarefas", JSON.stringify(listaTarefas))

    fecharForm();
    criaPost();
}


function dragstartHandler(ev) {
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
}

function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

function dropHandler(ev) {
    ev.preventDefault();

    const data = ev.dataTransfer.getData("application/my-app");
    const tarefaCont = document.getElementById(data);
    const targetColumn = ev.currentTarget.closest(".coluna");

    if (targetColumn && tarefaCont) {
        targetColumn.querySelector(".conteudo").appendChild(tarefaCont);

        const idTarefa = parseInt(data);
        const columnId = parseInt(targetColumn.getAttribute("data-column"));
        const indiceTarefa = listaTarefas.findIndex(tarefa => tarefa.id === idTarefa);

        if (indiceTarefa !== -1) {
            listaTarefas[indiceTarefa].coluna = columnId;
        }

        localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
        criaPost();
    }
}

function excluirTarefa(id) {
    const indicet = listaTarefas.findIndex(tarefa => tarefa.id === id);

    if (indicet !== -1) {
        listaTarefas.splice(indicet, 1);

        localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
        
        criaPost();
    }
}
