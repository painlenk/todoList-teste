
// pegar o texto e adcionar na ul

const $btnInserir = document.querySelector('[btn-inserir]')
const $lis = document.querySelectorAll('[ulPendente] li')

const dropzones = document.querySelectorAll('[dropzone]')

$btnInserir.onclick = function() {
    let $textArea = document.querySelector('[input-text]')
    const $ulPendente = document.querySelector('[ulPendente]')
    const li = document.createElement('li')
    li.append($textArea.value)
    $ulPendente.appendChild(li)
    $textArea.value =''
    addDraggable(li)

    
        
        li.addEventListener('dragstart', dragStart)
        li.addEventListener('drag', drag)
        li.addEventListener('dragend', dragEnd)
    



    

}

function addDraggable(item) {
    item.draggable = true
}

$lis.forEach((item, index) => {
    addDraggable(item)
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('drag', drag)
    item.addEventListener('dragend', dragEnd)
})

function log(mensage) {
    console.log(`ITEM:${mensage}`)
}

// drag and drop



function dragStart() {
   dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
   this.classList.add('is-dragging')
}

function drag() {
    

}

function dragEnd() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragEnter)
    dropzone.addEventListener('dragover', dragOver)
    dropzone.addEventListener('dragleave', dragLeave)
    dropzone.addEventListener('drop', drop)


})

function dragEnter() {
    
}
function dragOver() {
    
    this.classList.add('over')
    const itemIniciaDrag = document.querySelector('.is-dragging')
    log(itemIniciaDrag)
    this.appendChild(itemIniciaDrag)
}
function dragLeave() {
    
    this.classList.remove('over')
}
function drop() {
    
}






