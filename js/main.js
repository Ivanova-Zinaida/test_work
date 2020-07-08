let btnOpenMenu = document.querySelector('.btn-open-menu');
let itemMenu = document.querySelectorAll('.menu-item');
let btnOpenModal = document.querySelectorAll('.btn-open-modal');
let modalForm = document.querySelector('.modal-form');
let btnForm= document.querySelector('.form-btn');
let modalWrap = document.querySelectorAll('.modal-wrap');
let btnClose = document.querySelectorAll('.btn-close');



btnOpenMenu.addEventListener('click', function(e){
    e.preventDefault();

    itemMenu.forEach(function(item){
        item.classList.toggle('open-menu');
    })
});

btnOpenModal.forEach(function(item){
    item.addEventListener('click', function(e){
    e.preventDefault();
    let dataItem=this.getAttribute('data-btn');
    openModal(dataItem, modalWrap)
    });
})
    
btnForm.addEventListener('submit', function(e){
    e.preventDefault();
})
btnForm.addEventListener('click', function(e){
    e.preventDefault();
    let dataItem=this.getAttribute('data-btn');
    let dataItemClose=this.getAttribute('data-close');
    closeModal(dataItemClose, modalWrap)
    openModal(dataItem, modalWrap)

})

btnClose.forEach(function(item){
    item.addEventListener('click', function(e){
    e.preventDefault();
    let dataItem=this.getAttribute('data-btn');
    
    closeModal(dataItem, modalWrap)
});   
})

function openModal(dataItem, modalWrap){ 
    modalWrap.forEach(function(item){
        if(item.getAttribute('data-modal')==dataItem){
            item.classList.add('modal-open')
        }
    }) 
};
function closeModal(dataItem, modalWrap){ 
    modalWrap.forEach(function(item){
        console.log('close')
        if(item.getAttribute('data-modal')==dataItem){
            item.classList.remove('modal-open')
        }
    }) 
};

