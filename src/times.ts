export const times = (condToView) =>
condToView.reduce((acc,cond) => {
    if (cond.length > 2 && !cond[0]){
        return [ ...acc, cond[2] ];
    }
    return cond[0] ? [...acc, Array.from(
      { length: typeof cond[0] === "number" ? Math.floor(cond[0]) : 1 },
      (v, i) => { return { ...cond[1], key: i }})
    ] : acc
    },[]);