let showBtn = document.querySelectorAll('.showlink');

let hideBtn = document.querySelectorAll('.hideBtn');

let art = document.querySelectorAll('article');

for(let i = 0 ;  i < showBtn.length ; i++)
  showBtn[i].addEventListener('click', (e) => e.target.parentElement.parentElement.classList.remove('hide'));

for(let i = 0 ;  i < hideBtn.length ; i++)
hideBtn[i].addEventListener('click',  (e) => e.target.parentElement.parentElement.classList.add('hide'));

