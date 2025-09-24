const selectContainer = document.getElementById('selector-container');
const selector = document.querySelector('.select');
const res = document.querySelector('#res');
const options = document.querySelectorAll('.option');
const imageBox= document.getElementById('image-box');
const downloadBtn = document.getElementById('download-btn');

selector.addEventListener('click', ()=>{
    selectContainer.classList.add('open')
})

imageBox.addEventListener('click',loadingScreen)

options.forEach(option => {
    option.addEventListener('click', ()=>{
        res.textContent=option.textContent;
        options.forEach(opt => {opt.classList.remove('selected')});
        option.classList.add('selected');

        selectContainer.classList.remove('open')
    })
})

downloadBtn.addEventListener('click',loadingScreen);

function loadingScreen(e){
    console.log(downloadBtn)
    if ((window.matchMedia("(max-width: 768px)").matches) && (!(e.target==downloadBtn))) return;

    if (imageBox.classList.contains('active')){
        return;
    }
    imageBox.classList.add('active');

    setTimeout(()=>{imageBox.classList.remove('active')}, 3500);
}


window.addEventListener('click',(e)=>{
    if(!selectContainer.contains(e.target)){
        selectContainer.classList.remove('open');
    }
})

// https://youtu.be/gKJMgeEvSyE?si=nRAoWkhe1Zg9ov3m