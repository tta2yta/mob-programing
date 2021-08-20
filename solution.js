function utopianTree(n) {
  let height = 1;
  for (let i = 0; i < n; i++) {
    i % 2 == 0 ? (height = height * 2) : (height = height + 1);
  }
  return height;
}
