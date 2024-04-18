export const sliceWords = (desc: string) => {
  return desc.split(" ").slice(0, 20).join(" ") + "...";
};
