const buckets = (x, y, z) => {
  let tx = 0,
    ty = 0;

  while (tx !== z && ty !== z) {
    if (tx === 0) {
      tx = x;
      console.log(`Fill X Bucket`);
      console.log(`X Bucket: ${tx} Y Bucket: ${ty}`);
      continue;
    }
    if (ty === y) {
      ty = 0;
      console.log(`Empty Y Bucket`);
      console.log(`X Bucket: ${tx} Y Bucket: ${ty}`);
      continue;
    };
    if (tx + ty <= y) {
      ty = tx + ty
      tx = 0;
      console.log(`Fill Y Bucket from X Bucket`);
      console.log(`X Bucket: ${tx} Y Bucket: ${ty}`);
      continue;
    };
    if (tx + ty > y) {
      const temp = y - ty;
      tx = tx - temp;
      ty = y;
      console.log(`Fill Y Bucket from X Bucket`);
      console.log(`X Bucket: ${tx} Y Bucket: ${ty}`);
      continue;
    };
  };
  return;
};

buckets(5, 3, 4);
buckets(3, 5, 4);
buckets(7, 11, 4);
buckets(7, 11, 5);
buckets(1, 8, 6);