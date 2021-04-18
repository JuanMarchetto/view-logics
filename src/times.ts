export const times = (condToView) =>
condToView
  .filter((cond) => cond[0])
  .map((cond) =>
    Array.from(
      { length: typeof cond[0] === "number" ? Math.floor(cond[0]) : 1 },
      (v, i) => { return { ...cond[1], key: i }})
  );