function openModal(text) {
  document.getElementById('modal').classList.add('open');
  document.getElementById('modal-text').textContent = text;
}
function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

function calcDistance() {
  line.x1 = document.getElementById('x1').value;
  line.y1 = document.getElementById('y1').value;
  line.x2 = document.getElementById('x2').value;
  line.y2 = document.getElementById('y2').value;
  debugger;
  // let dx = Math.pow(line.x2 - line.x1, 2);
  // let dy = Math.pow(line.y2 - line.y1, 2);
  // let dSqr = Math.floor(Math.sqrt(dx + dy));
  // openModal('The distance is: ' + dSqr);
  openModal('The distance is: ');
}
// calcDistance();
