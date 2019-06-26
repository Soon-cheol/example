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
  const theadtr = document.querySelector(".table thead tr");
  const thtd = document.createElement("td");
  theadtr.appendChild(thtd);
  document.querySelectorAll(".table thead tr td")[i].append(Object.keys(data[0])[i])
}
for(let k = 0; k < dataNum; k++){
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  for(let j in data[k]){
    const td = document.createElement("td");
    
    // 1 단계 : switch
    // switch(j)
    // {
    //   case 0 :
    //   td.append(data[k].id)
    //   break;
    //   case 1 :
    //   td.append(data[k].name)
    //   break;
    //   case 2 :
    //   td.append(data[k].username)
    //   break;
    //   case 3 :
    //   td.append(data[k].email)
    //   break;
    //   case 4 :
    //   let addr = data[k].address.street + data[k].address.suite + data[k].address.zipcode
    //   td.append(addr)
    //   break;
    //   case 5 :
    //   td.append(data[k].phone)
    //   break;
    //   case 6 :
    //   td.append(data[k].website)
    //   break;
    //   case 7 :
    //   td.append(data[k].company.name)
    //   break;
    // } 
    
    // 2 단계 : 삼항연산자
    // j == 'address' ? 
    // td.append(data[k][j].street + data[k][j].suite + data[k][j].city + data[k][j].zipcode) : 

    // 3 단계 : if문
    if(j == 'address'){
      td.append(data[k][j].street + data[k][j].suite + data[k][j].city + data[k][j].zipcode)
    }else if(j == 'company'){
      td.append(data[k][j].name + data[k][j].catchPhrase + data[k][j].bs)
    }else{
      td.append(data[k][j])
    }

    tr.appendChild(td);
  }
}
