function sayHi(args) {
  if (typeof args !== "object") {
    throw new Error("'args' expected to be an object");
  }

  return "Hi " + args.name + "!";
}

module.exports = {
  sayHi
};
