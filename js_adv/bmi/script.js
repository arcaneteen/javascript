const forum = document.querySelector('form');

forum.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const msg=document.querySelector('#msg');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter the valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter the valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</<span>`;
    if(bmi<18.6){
        msg.innerHTML=`<p>UnderWeight<\p>`;
    }
    else if(bmi>24.9){
        msg.innerHTML=`<p>OverWeight<\p>`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
        msg.innerHTML=`<p>Congrats for being healthy🙂<\p>`;
    }
    else{
        msg.innerHTML='<p>Server is crashed</p>'
    }
  }
});
