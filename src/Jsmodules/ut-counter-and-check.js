// ----------------------------------------------------------------------------------------------------------------
// Modulo que cuenta la cantidad de elementos una determinada clase
// ----------------------------------------------------------------------------------------------------------------

const utCounterCheck = (pClassName) => { 
  let conta = 0;
  let contaExist = document.getElementsByClassName(`${pClassName}`);
  
  return contaExist.length;
};

export default utCounterCheck;
