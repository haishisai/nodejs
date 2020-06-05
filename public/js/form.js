(function () {
  var loginForm = $("[data-submit]");
  var serverFunc = loginForm.dataset.submit;
  loginForm.onsubmit = async function (e) {
    e.preventDefault();
    if (validate()) {
      var err = await _run(serverFunc, getFormObj());
      if (err) {
        serverError.innerText = err;
        serverError.style.visibility = "visible";
      }
    }
  };
  var serverError = $(`[data-err="server"]`);
  var dataItems = $$(`[data-name]`);
  dataItems.forEach((item) => {
    item.oninput = hideAllError;
  });

  function getFormObj() {
    var obj = {};
    for (const item of dataItems) {
      obj[item.dataset.name] = item.value;
    }
    return obj;
  }

  function hideAllError() {
    $$(".error").forEach((err) => {
      err.innerText = "";
      err.style.visibility = "hidden";
    });
  }
  function validate() {
    var result = true;
    for (const item of dataItems) {
      var validateThis = !!item.value;
      result = result && validateThis;
      var errorDom = item.parentNode.nextElementSibling;
      if (!validateThis) {
        errorDom.innerText = item.dataset.errmsg;
        errorDom.style.visibility = "visible";
      } else {
        errorDom.innerText = "";
        errorDom.style.visibility = "hidden";
      }
    }
    return result;
  }
})();
