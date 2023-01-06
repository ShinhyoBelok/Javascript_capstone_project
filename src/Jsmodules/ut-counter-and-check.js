// ----------------------------------------------------------------------------------------------------------------
// Modulo que cuenta la cantidad de elementos una determinada clase
// ----------------------------------------------------------------------------------------------------------------

const utCounterCheck = (pClassName) => { 
  let conta = 0;
  let contaExist = document.getElementsByClassName(`${pClassName}`);
  
  return contaExist.length
  
  if (contaExist.length == 0) {
    return -1
  }
  
  const countClassName = document.querySelectorAll(`.${pClassName}`);
  conta = countClassName.length;
  return conta;
};

export default utCounterCheck;
