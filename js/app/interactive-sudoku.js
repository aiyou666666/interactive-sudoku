define(function(require) {
    var $ = require('jquery');

    Array.prototype.indexOf = Array.prototype.indexOf || function(a) {
        for(var i = 0, l = this.length; i < l; i++) {
            if(this[i] === a) {
                return i;
            }
        }
        return -1;
    };

    /**
     * 九宫格
     * @depend：jQuery
     * @param：selector(表格选择器), prizes(奖品code数组), active(选中状态的class名)
     */
    function Sudoku(selector, prizes, active) {
        var td = [];

        active = active || "active"; // 默认 active

        // 按序存入td数组
        var $td = $(selector).find("td[data-index]").each(function() {
            var i = $(this).data("index");
            td[i] = $(this);
        });

        var size = td.length;

        // 抽奖方法(奖品code, 回调函数)
        this.lottery = function(code, callback) {
            var speed = 50;
            var now = 0;
            var stop = prizes.indexOf(code) + (parseInt(Math.random() * 3) + 3) * size;

            function run() {
                setTimeout(rotate, speed);
            }

            function rotate() {
                $td.removeClass(active);

                td[now % size].addClass(active);

                now++;

                if (stop - now < 18) {
                    speed += (18 - (stop - now)) * 4;
                }

                if (stop - now >= 0) {
                    run();
                } else {
                    callback();
                }
            }

            run();
        };
    }

    return Sudoku;
});
