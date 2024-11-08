const optionMenu = document.querySelector('.select-menu'),
      selectBtn  = optionMenu.querySelector('.select-btn'),
      options  = optionMenu.querySelectorAll('.option'),
      sBtnText = optionMenu.querySelector('.sBtn-text');

selectBtn.addEventListener('click', ()=> optionMenu.classList.toggle('active'))


options.forEach(option =>{
    option.addEventListener('click', ()=>{
        let selectedOption = option.querySelector('.option-text').innerHTML;
        sBtnText.innerText = selectedOption;
        optionMenu.classList.remove('active')
        
    })
}); 