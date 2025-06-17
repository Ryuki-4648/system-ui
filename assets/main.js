window.addEventListener("DOMContentLoaded", async () => {
  (async function loadSidenavi() {
    try {
      const response = await fetch("../include/sidenavi.html");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const sidenaviHTML = await response.text();
      const sidenavi = document.querySelector("#sidenavi");
  
      if (!sidenavi) {
        console.warn("Element with id 'sidenavi' not found.");
        return;
      }
  
      sidenavi.insertAdjacentHTML("afterbegin", sidenaviHTML);
    } catch (error) {
      console.error("Failed to load sidenavi:", error);
    }
  })();
});

// サイドナビをインクルード（外部HTMLファイルを読み込み、特定の箇所に挿入）
// const includeSidenavi = new XMLHttpRequest(); // サーバーと非同期通信を行うための古いAPI
// includeSidenavi.open("GET", "include/sidenavi.html", true);
// includeSidenavi.onreadystatechange = function () {
//   if (includeSidenavi.readyState === 4 && includeSidenavi.status === 200) { // 通信が 完了（readyState === 4） し、サーバーが 正常に応答を返したときに処理を実行
//     const sidenaviHTML = includeSidenavi.responseText;
//     const sidenavi = document.querySelector("#sidenavi");
//     sidenavi.insertAdjacentHTML("afterbegin", sidenaviHTML);
//   }
// };
// includeSidenavi.send();