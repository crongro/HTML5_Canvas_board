//set namespace 
if(!window.NEXT) { 
    window.NEXT = {};
}

if(!NEXT.paint) { 
    NEXT.paint = {};
}

if(!NEXT.paint.canvas) { 
    NEXT.paint.canvas= {};
}

if(!NEXT.paint.panel) { 
    NEXT.paint.panel= {};
}


//set configuration
/***********************************************************/
NEXT.paint.canvas.config = {
    ctx             : null,
    penColor        : 'black',
    lineWidth       : 10,
    lineCap         : 'butt'
};

NEXT.paint.panel.config = {
    colorWheel : "img/colorwheel1.png"
};

/***********************************************************/


// DOM Ready !
/***********************************************************/
$Element(document).attach('domready', function() {
    (function(){

        //Canvas setting
        NEXT.paint.canvas.set.run(NEXT.paint.canvas.config);
        var ctx         = NEXT.paint.canvas.set.getMainCanvasCTX();
        var elCanvas    = NEXT.paint.canvas.set.getMainCanvasElement();
        NEXT.paint.canvas.attachEvent(ctx,elCanvas);
        
        //Panel setting
        NEXT.paint.panel.set(ctx,NEXT.paint.panel.config);

        //Panel slider Component initialize
        NEXT.paint.panel.slider(ctx); 

        //Panel others event setting
        NEXT.paint.panel.other(ctx,elCanvas);
    })();
});
/***********************************************************/



// canvas area initialize
/***********************************************************/
NEXT.paint.canvas.set = (function(){
       
    var elCanvas = null;
    var ctx      = null;
    
    function _setTitle (hData) {
        var welContainer = $Element('container');
        //template을 구성
        var titleTemplate = [
            '<div id=\"header\">',
        '<h1>{=titleMsg}</h1>',
        '</div>'
            ].join("");
        welContainer.prependHTML($Template(titleTemplate).process({titleMsg:hData.title}));
    }

    function _executeAjax (){
        var oAjax = new $Ajax('data/jsonData.nhn', {
            type        : 'xhr',
            method      : 'get',
            onload      : function(res){
                var hData = res.json();
                _setTitle(hData);
            },
            timeout     : 3, 
            ontimeout   : function(){ // 타임 아웃이 발생하면 실행될 콜백 함수, 생략 시 타임 아웃이 되면 아무 처리도 하지 않음
                alert("Timeout! 3 second");
            },
        });
        oAjax.request();
    }
    
    function _createCanvas (elCanvasDiv, oConfig){

        //Create CANVAS
        elCanvas = jindo.Canvas.create(900,500,elCanvasDiv);
        $Element(elCanvas).css("border", "1px solid");
        oCanvas = new jindo.Canvas(elCanvas);
        ctx = oCanvas.getContext(elCanvas);

        // draw start
        ctx.strokeStyle = oConfig.penColor;
        ctx.lineWidth   = oConfig.lineWidth;
        ctx.lineCap     = oConfig.lineCap;  //round, square
        ctx.beginPath();
    }

    function getMainCanvasElement() {
        return elCanvas;
    }

    function getMainCanvasCTX() {
        return ctx;
    }

    function run(oConfig) {
        var elCanvasDiv   = $('board');
        _executeAjax();
        _createCanvas(elCanvasDiv,oConfig);
    }

    return {
        run : run,
        getMainCanvasElement : getMainCanvasElement,
        getMainCanvasCTX : getMainCanvasCTX
    };

})();
/***********************************************************/

//set canvas area
/***********************************************************/
NEXT.paint.canvas.attachEvent = function(ctx,elCanvas) {

	    var bMouseDown  = false;
            /*
            var ctx         = NEXT.paint.canvas.set.getMainCanvasCTX();
            var elCanvas    = NEXT.paint.canvas.set.getMainCanvasElement();
            */

            //$Event로 wrapping한 객체로 전달 됨
            function mousedownFn(e) {
                bMouseDown = true;

                var layerX = parseInt(e.pos().layerX); //상대적인 위치<layerX>
                var layerY = parseInt(e.pos().layerY);

                ctx.lineJoin = 'round';
                ctx.beginPath();
                ctx.moveTo(layerX,layerY);

            }

            function mousemoveFn (e) {
                if(bMouseDown) {
                    var x = parseInt(e.pos().layerX);
                    var y = parseInt(e.pos().layerY);
                    ctx.lineTo(x,y);
                    ctx.stroke();
                }
            }

            function mouseupFn (e) {
                bMouseDown = false;
                ctx.closePath();
            }

            function mouseoutFn (e) {
                bMouseDown = false;
                ctx.closePath();
            }
            
            //chaining event handlers
            $Element(elCanvas)
                .attach('mousedown' , mousedownFn)
                .attach('mousemove' , mousemoveFn)
                .attach('mouseup' , mouseupFn)
                .attach('mouseout' , mouseoutFn);
};
/***********************************************************/


//set Panel 
/***********************************************************/
NEXT.paint.panel.set = function(ctx,oPanelConfig){
    var bClicked            = false;
    var ctx                 = ctx;
    var colorCanvas         = null;
    var oCanvas             = null;

    //Create colorPicker CANVAS
    function createColorPickerCanvas ()  {
        colorCanvas = jindo.Canvas.create(300,300, $('cpcanvasWrap'));
        oCanvas = new jindo.Canvas(colorCanvas);
        $Element(colorCanvas).css("border", "1px solid").attr("id" , "colorCanvas");
        ctxCP = oCanvas.getContext(colorCanvas);
    }

    //insert colorPicker Image
    function addColorPickerImgOnCanvas () {

        // draw the image on the canvas
        var welImage = $Element("<img>").attach('load', function(){
            var self = this;
            var image = welImage.$value();
            ctxCP.drawImage(image,0, 0, image.width, image.height); // draw the image on the canvas
        }).attr("src", oPanelConfig.colorWheel);
    }

    //mousemove event handler
    function mousemoveFn (e) {
        
        var welrgbinfoDiv       = $Element('rgbInfo');
        var welLineWidthDiv     = $Element('lineWidth');
        var rgbValue            = null;

        if(!bClicked) {
            var canvasX = parseInt(e.pos().layerX);   //$Event.pos(true).offsetX 사용하는 것이 좋음
            var canvasY = parseInt(e.pos().layerY);

            var imgData = ctxCP.getImageData(canvasX,canvasY,1,1);
            var pixel = imgData.data;

            rgbValue = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";

            //update rgbInfo layer backgroundcolor
            welrgbinfoDiv.css('backgroundColor' ,rgbValue);
            //update linewidth layer backgroundcolor
            welLineWidthDiv.css('backgroundColor',rgbValue);
            ctx.strokeStyle = rgbValue;
        }
    }

    function mousedownFn (e) {
        bClicked = bClicked ? false : true;  //삼항연산자를 사용해봤어요
    }

    createColorPickerCanvas();
    addColorPickerImgOnCanvas();

    $Element('colorCanvas').attach('mousemove' , mousemoveFn).attach('mousedown' , mousedownFn);
}
/***********************************************************/


//initiate Slide Jindo Component 
/***********************************************************/
NEXT.paint.panel.slider = function(ctx){
    var welLineWidth = $Element("lineWidth");
    var oSlider = new jindo.Slider(jindo.$('simpleSlider'),{
        nMinValue : 1,
        nMaxValue : 30,
        fAdjustValue : function(nValue) {
            return Math.round(nValue);
        }
    });

    oSlider.attach({
        change : function(oCustomEvent){
            var nWidthInfo = oCustomEvent.nValue;
            ctx.lineWidth = nWidthInfo;
            welLineWidth.width(nWidthInfo);
        }
    });
};
/***********************************************************/


//other menu event setting
NEXT.paint.panel.other = function(ctx,elCanvas){
    var ctx      = ctx;
    var elCanvas = elCanvas;
    //reset button
    $Element('eraseImg').attach('click',function(e) {
        var wEl = $Element(elCanvas);
        ctx.clearRect(0,0, wEl.width(), wEl.height());
        e.stop();  //e.preventDefault, e.stopPropagation실행
    });

    $Element('rgbInfo').attach('click', function(e) {
        $Element($$('#rgbInfo + div')[0]).toggle();   //$Element('cpcanvasWrap') 와 같다
    });
}

