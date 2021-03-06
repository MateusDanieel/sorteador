let names = [];
let inputName = document.getElementById('inputName');
let btAdc = document.getElementById('btAdc');
let tblNames = document.getElementById('tblNames');
let btSort = document.getElementById('btSort');
let form = document.getElementById('form');
let result = document.querySelector('#result');
let titleResult = document.querySelector('#result h1');
let btExcluir;
let alert = document.querySelector('.alert');
let btReturn = document.getElementById('btReturn');
let btLimpar = document.getElementById('btLimpar');

btAdc.addEventListener('click', () => {
    tblNames.innerHTML = '';

    if(inputName.value != '') {
        let arrInputNameValues = inputName.value.split(',');

        arrInputNameValues.forEach((el) => {
            names.push(el);
        }); 
    }

    names.forEach((el, i) => {
        if (el != '') {
            tblNames.innerHTML += 
            `<tr data-id="${i}">
                <td>${el}</td>
                <td>
                    <button type="button" class="btExcluir" data-id="${i}" title="Excluir">
                    <i class="fa-solid fa-trash"></i> 
                    </button>
                </td>
            </tr>`;
        }
    });

    btExcluir = document.querySelectorAll('.btExcluir');

    btExcluir.forEach((el, i) => {
        el.addEventListener('click', () => {
            console.log(el.dataset.id, i);

            let tr = document.querySelectorAll('#tblNames tr');

            names.splice(el.dataset.id, 1);

            console.log(names, tr[el.dataset.id]);

            tr.forEach((trEl) => {
                if(trEl.dataset.id == el.dataset.id) {
                    trEl.remove();
                }
            });

            btAdc.click();
        });
    });

    inputName.value = '';
});

btSort.addEventListener('click', () => {

    if(names.length > 1) {
        let i = Math.floor(Math.random() * names.length);

        form.style.display = 'none';
        result.style.display = 'block';
        alert.style.display = 'none';
        titleResult.innerHTML = names[i];
   
    } else {
        alert.style.display = 'block';
    }
    
});

btReturn.addEventListener('click', () => {
    result.style.display = 'none';
    form.style.display = 'flex';
});

btLimpar.addEventListener('click', () => {
    var r = confirm('Todos os dados salvos ser??o perdidos.\nDeseja continuar?');
    if (r == true){
      window.location.reload();
    }
});