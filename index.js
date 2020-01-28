function sayHi(name) {
  if (typeof name !== "string") {
    throw new Error("'name' expected to be a string");
  }

  return "Hi " + name + "!";
}

module.exports = {
  sayHi
};
