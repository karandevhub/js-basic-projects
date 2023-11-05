const form= document.querySelector('form');

form.addEventListener('submit', function(e){
      e.preventDefault();
const height= parseInt(document.getElementById('height').value);
const weight= parseInt(document.getElementById('weight').value);

const results= document.getElementById('results');

  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`<span>Please enter a valid height ${height}</span>`
}
else if(weight==='' || weight<0 || isNaN(weight)){
  results.innerHTML=`<span>Please enter a valid weight ${weight}</span>`
}
else{
    const BMI= (weight/((height*height)/10000)).toFixed(2);
    let range ='';
    if(BMI<18.6)
      {
        range = 'under weight';
      }
      else if(BMI<=24.9){
        range = 'Normal Range';
      }
      else
      {
           range = 'Over weight';
      }
           



    results.innerHTML = `<span>${BMI}</span> <span>${range}</span>`

}


})
