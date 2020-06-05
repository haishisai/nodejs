(async function () {
  var query = decodeSearch(location.search.substr(1));
  if (!query.page) {
    query.page = 2;
  }
  if (!query.limit) {
    query.limit = 7;
  }
  query.page = +query.page;
  query.limit = +query.limit;
  // var result = await _run("getNews", query);   run 这种写法 不太懂
  var result = await getNews(query);
  if (!result) {
    return;
  }
  loadNews();
  pager();
  function loadNews() {
    var news = result.datas;
    if (!news) {
      return;
    }
    var newslist = "";
    for (const item of news) {
      newslist += `<div class="news-item-normal">
      <div class="words">
        <h2 class="title">
          <a
            href="${item.link}"
            target="_blank"
          >
            ${item.title}
          </a>
        </h2>
        <div class="aside">
          <span>${item.channel}</span><span>发布日期：${new Date(
        item.pubDate
      ).toLocaleDateString()}</span>
        </div>
        <div class="content">
          ${item.content}
        </div>
      </div>
    </div>`;
    }
    $("#newslist").innerHTML = newslist;
  }

  function pager() {
    var pageNumber = Math.ceil(result.total / query.limit);
    var panelNumber = 10;
    var minNumber = (function () {
      var n = query.page - panelNumber / 2;
      if (n < 1) {
        n = 1;
      }
      return n;
    })();
    var maxNumber = (function () {
      var n = minNumber + panelNumber - 1;
      if (n > pageNumber) {
        n = pageNumber;
      }
      return n;
    })();

    var centerNumbers = "";
    for (let i = minNumber; i <= maxNumber; i++) {
      centerNumbers += `<a href="${
        i == query.page ? "javascript:;" : `?page=${i}`
      }" class="pager-item ${i == query.page ? "active" : ""}"> ${i} </a>`;
    }

    var pagerHTML = `
    <a href="${
      query.page == 1 ? "javascript:;" : `?page=1`
    }" class="pager-item ${query.page == 1 ? "disabled" : ""}">首页</a>
    <a href="${
      query.page == 1 ? "javascript:;" : `?page=${query.page - 1}`
    }" class="pager-item ${query.page == 1 ? "disabled" : ""}">上一页</a>
    ${centerNumbers}
          <a href="${
            query.page == pageNumber
              ? "javascript:;"
              : `?page=${query.page + 1}`
          }" class="pager-item ${
      query.page == pageNumber ? "disabled" : ""
    }">下一页</a>
          <a href="${
            query.page == pageNumber ? "javascript:;" : `?page=${pageNumber}`
          }" class="pager-item ${
      query.page == pageNumber ? "disabled" : ""
    }">尾页</a>`;
    $(".pager").innerHTML = pagerHTML;
  }

  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  function decodeSearch(qs, sep, eq, options) {
    sep = sep || "&";
    eq = eq || "=";
    var obj = {};

    if (typeof qs !== "string" || qs.length === 0) {
      return obj;
    }

    var regexp = /\+/g;
    qs = qs.split(sep);

    var maxKeys = 1000;
    if (options && typeof options.maxKeys === "number") {
      maxKeys = options.maxKeys;
    }

    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }

    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, "%20"),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = "";
      }

      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);

      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }

    return obj;
  }
})();
