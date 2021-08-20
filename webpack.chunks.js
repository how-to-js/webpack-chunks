module.exports = {
  entry: {
    a: "./src/a",
    b: "./src/b",
    c: "./src/c",
    d: "./src/d",
    e: "./src/e",
    f: "./src/f",
    g: "./src/g",
    h: "./src/h",
    i: "./src/i",
    j: "./src/j",
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
  },
};
