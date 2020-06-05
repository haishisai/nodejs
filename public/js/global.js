async function _run(funcName, ...args) {
  if (window[funcName]) {
    return await window[funcName](...args);
  }
}

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function setVisible(visible, ...doms) {
  for (const dom of doms) {
    dom.style.display = visible ? "initial" : "none";
  }
}

(async function () {
  var loginDOM = $(`[data-role="login"]`);
  var regDOM = $(`[data-role="reg"]`);
  var loginoutDOM = $(`[data-role="loginout"]`);
  var personalDOM = $(`[data-role="personal"]`);

  setVisible(false, loginDOM, regDOM, loginoutDOM, personalDOM);
  var result = await _run("who");
  if (result) {
    personalDOM.innerText = result.name;
    setVisible(true, loginoutDOM, personalDOM);
  } else {
    setVisible(true, loginDOM, regDOM);
  }

  loginoutDOM.onclick = function (e) {
    e.preventDefault();
    _run("loginOut");
  };

  // active class
  var pathname = location.pathname;
  if (pathname === "/") {
    pathname += "index.html";
  }
  var headerLinks = $$(".header .container a");
  headerLinks.forEach((link) => {
    var href = link.getAttribute("href");
    if (href === "/") {
      href += "index.html";
    }
    if (href === pathname) {
      link.classList.add("router-link-exact-active");
    }
  });
})();
