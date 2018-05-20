function showQue() {
    i = Math.floor(Math.random() * n) + 1;
    ans = Math.floor(Math.random() * 3) + 1;
    
    document.getElementById("question").innerHTML = "先発商品名【" + data[i][8] + "】";
    for (let j=1; j<=3; j++) {
        if (j == ans) 
            document.getElementById("sel"+j).innerHTML = data[i][2];
        else 
            document.getElementById("sel"+j).innerHTML = data[Math.floor(Math.random()*n+1)][2];
    }
    document.getElementById("answer").innerHTML = "";
    document.getElementById("comment").innerHTML = "";
}

function checkAns(selNum) {
    if (selNum == ans) {
        var msg = "正解!";
    } else {
        var msg = "残念… 正解は" + ans;
    }
    document.getElementById("answer").innerHTML = msg;
    showAns();
}

function showAns() {
    var comment = "<dl>";
    comment += "<dt>成分名</dt> <dd>" + data[i][2] + "</dd>";
    comment += "<dt>分類</dt> <dd>" + data[i][3] + "</dd>";
    comment += "<dt>薬理作用</dt> <dd>" + data[i][4] + "</dd>";
    comment += "<dt>適応</dt> <dd>" + data[i][5] + "</dd>";
    comment += "</dl>"
    document.getElementById("comment").innerHTML = comment;
}

/*
 * 読み込み時に実行
 */

var data = csvToArray();
var n = data.length;
var i, ans;

window.onload = function() {
    showQue();
}

function csvToArray() {
    var path = "medicine_bot1.csv"
    var csvData = new Array();
    var data = new XMLHttpRequest();        
    data.open("GET", path, false);
    data.send(null);
    var lines = data.responseText.split("\n");
    for (let i=0, n=lines.length; i<n; ++i) {
        var cells = lines[i].split('"').join("").split(",");
        if( cells.length != 1 ) {
            csvData.push(cells);
        }
    }
    return csvData;
}

