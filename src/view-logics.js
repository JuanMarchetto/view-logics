export const when = (condToView) =>
  condToView
    .filter((cond) => cond[0])
    .map((cond, i) => cond[1].key ? cond[1] : { ...cond[1], key: i });

export const match = (condToView) =>
  (condToView.find((cond) => cond[0]) ?? [, <></>])[1];

export const times = (condToView) =>
  condToView
    .filter((cond) => cond[0])
    .map((cond) =>
      Array.from(
        { length: typeof cond[0] === "number" ? parseInt(cond[0]) : 1 },
        (v, i) => { return { ...cond[1], key: i }})
    );
