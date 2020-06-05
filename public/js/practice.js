/**
 * 获取新闻
 * @param {*} query 地址栏参数
 * @returns { datas: [...], total: xxx}
 */
async function getNews (query) {
  let url = `/api/news?page=${query.page}&limit=${query.limit}`

  let resp = await fetch(url);
  console.log(resp)
  let result = await resp.json()
  console.log(result)
  return result.data
  let arr = result.data.datas
  console.log(arr)
}

/**
 * 注册用户
 * @param {*} regInfo
 */
async function reg (regInfo) {
  let str = JSON.stringify(regInfo)
  let result = await fetch('api/user/reg', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: str
  }).then(resp => resp.json());   // fetch 可以这样写 分开的方式在上面news
  if (result.err) {
    return ('注册失败')
  }
  alert('注册成功');
  location.href = '/login.html'
}

/**
 * 登录
 * @param {*} loginInfo {loginId:"账号", loginPwd:"密码"}
 * @returns 当登录成功时，不需要返回；当登录失败时，返回错误消息
 */
async function login (loginInfo) {
  let str = JSON.stringify(loginInfo)
  let result = await fetch('api/user/login', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: str
  }).then(resp => resp.json());
  
  if(result.err){
    return '账号密码错误'
  }else{
    
    // alert('登陆成功')
    location.href = '/'
  }
  
  
}





/**
 * 注销
 */
async function loginOut () {
  document.cookie = 'token=; max-age=-1'
  location.href = '/login.html'
}

/**
 * 获取当前登录的用户信息
 * 如果当前没有登录的用户，返回null
 */
async function who () { 
  let result = await fetch('/api/user/who').then(resp => resp.json());
  console.log(result)
  if(result.err){
    return null
  }
  
  return result
}

/**
 * 进入个人中心页面时运行的函数   这是 前端设置权限的一种方式
 */
// async function personal () {
//   let result = await who()
//   if(!result){
//     location.href = '/'
//   }
//   console.log(11)
// }
