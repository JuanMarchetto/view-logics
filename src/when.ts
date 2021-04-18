export const when = (condToView) =>
  condToView.reduce((acc,cond, i) => {
    if(cond.length > 2 && !cond[0]){
      return [...acc, { ...cond[2], key: i }]
    }
    if (cond[0]){
      return [ ...acc, cond[1].key ? cond[1] : { ...cond[1], key: i } ];
    } else {
      return acc;
    }
  },[]);

