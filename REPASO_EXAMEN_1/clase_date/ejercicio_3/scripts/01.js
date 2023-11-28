window.addEventListener('load',()=>{
  var a = [1,2,3,4,5];
  function q (parametro){
    parametro[0] = 9;
  }
  q(a);
  console.log(a[0]);
});