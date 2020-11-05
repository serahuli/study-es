const fs = require('fs');

// 回调地域实现
// fs.readFile('./resource/1.md', (err, data1) => {
//   fs.readFile('./resource/2.md', (err, data2) => {
//     fs.readFile('./resource/3.md', (err, data3) => {
//       let result = data1 + data2 + data3;
//       console.log(result);
//     })
//   })
// })

// promise 实现
const p = new Promise((resolve, reject) => {
  fs.readFile('./resource/1.md', (err, data) => {
    resolve(data)
  })
})

p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/2.md', (err, data) => {
      resolve([value, data]);
    })
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/3.md', (err, data) => {
      value.push(data)
      resolve(value);
    })
  })
}).then(value => {
  console.log(value.join(''));
})
