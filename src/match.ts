export const match = (condToView) =>
  (condToView.find((cond) => cond[0]) ?? [, null])[1];
