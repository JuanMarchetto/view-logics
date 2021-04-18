export const match = (condToView) => {
  const found = condToView.find((cond) => cond[0] || cond.length > 2);
  if (found) {
    if (found.length > 2){
      return found[0] ? found[1] : found[2];
    }else{
      return found[1]
    }
  }
  return null;
};
