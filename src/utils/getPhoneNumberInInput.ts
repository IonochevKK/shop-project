export const getPhoneNumber = (e: React.FormEvent<HTMLFormElement>) => {
  const formData = new FormData(e.currentTarget);
  const { phone } = Object.fromEntries(formData);
  const formatedNumber = `+7${`${phone}`.replace(/\(|\)|-/g, " ")}`
    .split(" ")
    .join("");
  return { formatedNumber };
};
