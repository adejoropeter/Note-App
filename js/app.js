// Variables
const btn = document.querySelector('.btn button');
const head = document.querySelector('#magic');
// const div = document.querySelector('#magic .div');
const title = document.querySelector('.inputPagh input');
const desc = document.querySelector('.descText textarea');

// addEventListener

btn.addEventListener('click', showcase);

// function

function showcase(e) {
      const div = document.createElement('div');
      div.classList.add('div');
      let p1 = document.createElement('p');
      p1.classList.add('text')
      p1.textContent = title.value;
      let p2 = document.createElement('input');
      p2.classList.add('textArea');
      p2.value = desc.value;
      p2.setAttribute('readonly', 'readonly');
      const button = document.createElement('button')
      button.appendChild(document.createTextNode('Delete'.toUpperCase()))
      const edit = document.createElement('button')
      edit.appendChild(document.createTextNode('edit'.toUpperCase()))

      //     appendChild

      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(button);
      div.appendChild(edit);
      head.appendChild(div);

      desc.value = '';
      title.value = '';
      edit.addEventListener('click', function (e) {
            p2.removeAttribute('readonly');
            edit.textContent = 'save';
            if (edit.textContent === 'save') {
                  console.log('succes');
            }
      })
      button.addEventListener('click', function (e) {
            const del = e.target.parentElement;
            del.remove();
      })
}