var body = document.getElementsByTagName('body')[0];

    // body.style.backgroundColor = 'black'
    body.style.fontSize = '150px'
    body.style.color = 'white'

//GET form by prop name
const form = document.forms.registration;

form.addEventListener('submit',(e) =>{
  e.preventDefault();

  //GET fields by prop name
  const {firstName, lastName} = form;
  // console.log(firstName.value + ' ' + lastName.value)
  console.log(`${firstName.value} ${lastName.value}`)
})