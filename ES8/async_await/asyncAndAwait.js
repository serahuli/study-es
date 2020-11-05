const fs = require('fs');

function getM1() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/1.md', (err, data) => {
      if(err) reject(err)
      resolve(data)
    })
  })
}

function getM2() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/2.md', (err, data) => {
      if(err) reject(err)
      resolve(data)
    })
  })
}

function getM3() {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/3.md', (err, data) => {
      if(err) reject(err)
      resolve(data)
    })
  })
}

async function main() {
  let m1 = await getM1();
  let m2 = await getM2();
  let m3 = await getM3();
  console.log(m1.toString() + m2.toString() + m3.toString());
}
main()
