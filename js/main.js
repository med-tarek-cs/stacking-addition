const numbers = document.querySelectorAll('.drag-container .number');
const empties = document.querySelectorAll('.empty');

var currentDigit = '';

numbers.forEach(number => {
  number.addEventListener('dragstart', dragStart);
  number.addEventListener('dragend', dragEnd);
})

function dragStart() {
  currentDigit = this.innerHTML;
  this.classList.add('hold')
  setTimeout(() => this.classList.add('invisible'), 0)

}

function dragEnd() {
  this.className = 'number'
}

empties.forEach(empty => {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
})

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered'
}

function dragOver(e) {
  e.preventDefault();

}

function dragLeave(e) {
  e.preventDefault();
  this.classList.remove('hovered')
  this.classList.remove('invisible')
}

function dragDrop(e) {
  this.innerHTML = currentDigit
  this.classList.remove('hovered')

}