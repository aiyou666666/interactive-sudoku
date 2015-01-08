define(function (require) {
    var Sudoku = require('app/interactive-sudoku');

    // 设置好 data-index对应的奖品code数组, code由后端配置
    var sudoku = new Sudoku("table", [10, 11, 12, 13, 14, 15, 16, 17]);

    var prizes = {
        "10": "瓜子",
        "11": "香蕉",
        "12": "苹果",
        "13": "波萝",
        "14": "山楂",
        "15": "荔枝",
        "16": "橘子",
        "17": "草莓"
    };

    $("button").on("click", function() {

        // 此处请求接口，接口返回奖品的code
        var code = 15; // 比如这个是后端返回的中奖结果

        sudoku.lottery(code, function() {

            // 弹层
            alert("恭喜中奖" + prizes[code]);

        });

    });
});