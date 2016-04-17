var oTab = document.getElementById("tab");
var oUl = oTab.getElementsByTagName("ul")[0];
var aLi = oTab.getElementsByTagName("li");
var aDiv = oTab.getElementsByTagName("div");
//方法一：自定义属性方法
/*for (var i = 0; i < aLi.length; i++) {
    aLi[i].preClassName = i;
    aLi[i].onclick = function () {
        for (var j = 0; j < aDiv.length; j++) {
            aLi[j].className = "";
            aDiv[j].className = "";
        }
        this.className = "active";
        aDiv[this.preClassName].className = "active";
    }
}*/
//方法二：自执行函数形成闭包来保存i值
/*for (var i = 0; i < aLi.length; i++) {
    (function (i) {
        aLi[i].onclick = function () {
            for (var j = 0; j < aDiv.length; j++) {
                aLi[j].className = "";
                aDiv[j].className = "";
            }
            aLi[i].className = "active";
            aDiv[i].className = "active";
        }
    })(i)
}*/
//方法三：将自执行函数的返回值赋值给每个对象的onclick属性，将i的值保存在自执行函数的私有作用域内不释放内存
for (var i = 0; i < aLi.length; i++) {
    aLi[i].onclick = (function (i) {
        return function () {
            for (var j = 0; j < aDiv.length; j++) {
                aLi[j].className = "";
                aDiv[j].className = "";
            }
            aLi[i].className = "active";
            aDiv[i].className = "active";
        }
    })(i)
}
