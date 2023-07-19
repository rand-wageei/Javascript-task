
let n = 1;
const rows = 4;

for (let i = 1; i <= rows; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += n + ' ';
    n++;
  }
  console.log(row);
}

