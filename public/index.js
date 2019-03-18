var xhr = new XMLHttpRequest();
    
function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function xhrReady(elem) {
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      elem.innerHTML = htmlEntities(this.responseText);
    }
  }
}

document.getElementById('encrypt')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    xhrReady(document.getElementById("encrypt-result"));
    xhr.open('PATCH', '/encrypt/' + encodeURIComponent(document.getElementById('encrypt-input').value));
    xhr.send();
  })

document.getElementById('decrypt')
  .addEventListener('submit', function(event) {
    event.preventDefault();
    xhrReady(document.getElementById("decrypt-result"));
    xhr.open('PATCH', '/decrypt/' + encodeURIComponent(document.getElementById('decrypt-input').value));
    xhr.send();
  })