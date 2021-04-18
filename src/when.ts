export const when = (condToView) =>
  condToView
    .filter((cond) => cond[0])
    .map((cond, i) => cond[1].key ? cond[1] : { ...cond[1], key: i });

