document.getElementById('countId').onclick = function () {
    //button 使用getElementById (後面不用加點，直接套 id 名稱) 加上一個 onclick 事件，並執行 function 內容
    var aw = 1;
    var bw = 2;
    var cw = 3;
    var dw = 4;
    var ew = 5;
    var fw = 6;
    var gw = 7;
    //定義變數的內容
    var aNum = parseInt(document.getElementById('aNumId').value) * aw;
    var bNum = parseInt(document.getElementById('bNumId').value) * bw;
    var cNum = parseInt(document.getElementById('cNumId').value) * cw;
    var dNum = parseInt(document.getElementById('dNumId').value) * dw;
    var eNum = parseInt(document.getElementById('eNumId').value) * ew;
    var fNum = parseInt(document.getElementById('fNumId').value) * fw;
    var gNum = parseInt(document.getElementById('gNumId').value) * gw;
    //命名變數為抓取 input 裡面的數值
    //將要在 id 所得到的值用 parseInt 語法轉換成數字。
    document.getElementById('totalId').textContent = aNum + bNum + cNum + dNum + eNum + fNum + gNum
    //最終結算的結果
}