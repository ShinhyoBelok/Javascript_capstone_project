// ------------------------------------------------------------------------
// Modulo que cuenta la cantidad de elementos una determinada clase
// ------------------------------------------------------------------------

const utCounterCheck = (pClassName) => {
  const contaExist = document.getElementsByClassName(`${pClassName}`);
  return contaExist.length;
};

export default utCounterCheck;
