 $.fn.numberCounter = function(options){
            
    var formatter = new Intl.NumberFormat('en-US', {
        style: options.style,
        currency: options.currency
    });

    var setValue = function(v){
        r = formatter.format(v);
        if(options.currencyRemoveDecimal){
            r = r.substring(0, r.length - 3);
        }
        $('.counter', options.parentElem).html(r);
    }

    var isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    var run = function(){
        var counter = $('.counter',options.parentElem);
        if(counter.html() == 0){
            $({ countNum: counter.html() }).animate({ countNum: options.countTo }, {
                duration: options.duration,
                easing: 'linear',
                step: function () {
                    v = Math.floor(this.countNum);
                    setValue(v);
                },
                complete: function () {
                    v = Math.floor(this.countNum);
                    setValue(v);
                }
            });
        }
    }

    if (isInViewport(document.querySelector(options.parentElem))) {
        run();
    } else{
        $(options.parentElem).waypoint(function() { 
            run();
         }
        ,{offset: '80%'});
    }
}
