console.log('a')

let query = window.location.search.substring(1)
let str1 = query.replace(/&/g,',')
let str2 = str1.replace(/=/g,':')
let str3 = '{'+str2+'}'
console.log(str3)
let newObj = eval('('+str3+')')


let arr = query.split('&');
console.log(arr)

async function getNews () {
  let resp = await fetch(`/api/news?`+query);
  let result = await resp.json()
  let arr = result.data.datas
  console.log(arr)
  arr.forEach(( e, i) => {
    let li = document.createElement('li');
    li.innerHTML = 'no'+(i+1 )+'    '+  e.title
    demo.appendChild(li)
  });
}


getNews()