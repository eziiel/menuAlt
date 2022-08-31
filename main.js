const itens = document.querySelectorAll('.lista')


function alteraraAtivos () {
itens.forEach(item => {
  item.classList.remove('ativo')
    this.classList.add('ativo')
})
}

itens.forEach(item => {
  item.addEventListener('click', alteraraAtivos)
})



console.log(itens)