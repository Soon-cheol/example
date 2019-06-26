import 'bootstrap/dist/css/bootstrap.css'
import data from './data'

// console.log(data)
// console.log(document.querySelectorAll("tr")[0])
// console.log(data.length)
const dataNum = data.length;
const dataInNum = Object.keys(data[0]).length;
const thead = document.querySelector(".table thead");
const tbody = document.querySelector(".table tbody");
const thtr = document.createElement("tr");

thead.appendChild(thtr);
for(let i = 0; i < dataInNum; i++){
  const tbodytr = document.querySelector(".table thead tr");
  const thtd = document.createElement("td");
  tbodytr.appendChild(thtd);
  document.querySelectorAll(".table thead tr td")[i].append(Object.keys(data[0])[i])
}
for(let i2 = 0; i2 < dataNum; i2++){
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  for(let j = 0; j < dataInNum; j++){
    const td = document.createElement("td");
    switch(j)
    {
      case 0 :
      td.append(data[i2].id)
      break;
      case 1 :
      td.append(data[i2].name)
      break;
      case 2 :
      td.append(data[i2].username)
      break;
      case 3 :
      td.append(data[i2].email)
      break;
      case 4 :
      let addr = data[i2].address.street + data[i2].address.suite + data[i2].address.zipcode
      td.append(addr)
      break;
      case 5 :
      td.append(data[i2].phone)
      break;
      case 6 :
      td.append(data[i2].website)
      break;
      case 7 :
      td.append(data[i2].company.name)
      break;
    } 
    tr.appendChild(td);
  }
}

// const dataArray = data.map(data =>
//   //console.log(data)
//   document.querySelector(".table tbody").childNodes[data.id -1].childNodes[1] = data.id
// );


