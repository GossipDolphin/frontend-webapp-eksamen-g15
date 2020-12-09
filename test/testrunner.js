export const test = (name, testFunc) => {
  testFunc();
  console.log(`✔ ${name} ran successfully`);
};
