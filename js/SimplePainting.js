// onload
$Element(document).attach('domready', function() {

        var penColor = 'black';
        var ctx = null;
        var oCanvas = null;
        var elCanvas = null;


        //1. 제목을 서버에서 받아서 마크업을 생성해서 본문에 삽입
        (function(){

            var welContainer = $Element('container');
            var hData        = {};

            var setTitle = function() {
                //template을 구성
                var titleTemplate = [
                    '<div id=\"header\">',
                    '<h1>{=titleMsg}</h1>',
                    '</div>'
                ].join("");

                welContainer.prependHTML($Template(titleTemplate).process({titleMsg:hData.title}));
            }

            //Ajax가 성공하였습니다
            var successFn = function(res) {
                hData = res.json();
                setTitle();
            }

            var getListFromAjax = function() {
                var oAjax = new $Ajax('data/jsonData.nhn', {
                    type : 'xhr',
                    method : 'get',
                    onload : successFn,
                    timeout : 3, 
                    ontimeout : function(){ // 타임 아웃이 발생하면 실행될 콜백 함수, 생략 시 타임 아웃이 되면 아무 처리도 하지 않음
                        alert("Timeout! 3 second");
                    },
                });
                oAjax.request();
            }

            //Ajax 연결을 요청합니다
            getListFromAjax();
        }());


        //2. canvas 영역을 생성하고 인스턴스를 초기화
	(function() {
	    var elCanvasDiv   = $('board');

            //Create CANVAS
            elCanvas = jindo.Canvas.create(900,500,elCanvasDiv);
            $Element(elCanvas).css("border", "1px solid");
            oCanvas = new jindo.Canvas(elCanvas);
            ctx = oCanvas.getContext(elCanvas);

            // draw start
            ctx.strokeStyle = penColor;
            ctx.lineWidth = 10;
            ctx.lineCap = 'butt';  //round, square
            ctx.beginPath();
	}());

	
	//3. canvas 영역에 마우스이벤트를 바인딩하여 그림을 그릴 수 있게 함.
	(function() {
	    var bMouseDown      = false;

            //$Event로 wrapping한 객체로 전달 됨
            var mousedownFn = function(e) {
                bMouseDown = true;

                var layerX = parseInt(e.pos().layerX); //상대적인 위치<layerX>
                var layerY = parseInt(e.pos().layerY);

                ctx.lineJoin = 'round';
                ctx.beginPath();
                ctx.moveTo(layerX,layerY);

            }

            var mousemoveFn = function(e) {
                if(bMouseDown) {
                    var x = parseInt(e.pos().layerX);
                    var y = parseInt(e.pos().layerY);
                    ctx.lineTo(x,y);
                    ctx.stroke();
                }
            }

            var mouseupFn = function(e) {
                bMouseDown = false;
                ctx.closePath();
            }

            var mouseoutFn  = function(e) {
                bMouseDown = false;
                ctx.closePath();
            }

            //set Handler
            $Element(elCanvas).attach('mousedown' , mousedownFn);
            $Element(elCanvas).attach('mousemove' , mousemoveFn);
            $Element(elCanvas).attach('mouseup' , mouseupFn);
            $Element(elCanvas).attach('mouseout' , mouseoutFn);
	}());

        //4. 마우스오버를 통해서 colorpicker에서 색상을 임의로 선택하기
        (function() {

            var COLORWHEELURL       = 'img/colorwheel1.png';
            var welrgbinfoDiv       = $Element('rgbInfo');
            var welLineWidthDiv     = $Element('lineWidth');
            var bClicked            = false;
            var colorCanvasDiv      = $('cpcanvasWrap');
            var rgbValue            = null;

            //Create colorPicker CANVAS
            var createColorPickerCanvas = function()  {
                colorCanvas = jindo.Canvas.create(300,300,colorCanvasDiv);
                oCanvas = new jindo.Canvas(colorCanvas);
                $Element(colorCanvas).css("border", "1px solid").attr("id" , "colorCanvas");
                ctxCP = oCanvas.getContext(colorCanvas);
            }

            //insert colorPicker Image
            var addColorPickerImgOnCanvas = function() {
                var image = new Image();
                image.onload = function () {
                    ctxCP.drawImage(image, 0, 0, image.width, image.height); // draw the image on the canvas
                }
                image.src = COLORWHEELURL;
            }

            //mousemove event handler
            var mousemoveFn = function(e) {
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
                }
            }

            var mousedownFn = function(e) {
                bClicked = bClicked ? false : true;  //삼항연산자를 사용해봤어요
                ctx.strokeStyle = rgbValue;
            }

            createColorPickerCanvas();
            addColorPickerImgOnCanvas();

            $Element('colorCanvas').attach('mousemove' , mousemoveFn);
            $Element('colorCanvas').attach('mousedown' , mousedownFn);
        })();


        //5. slider jindo component를 활용한 Slide 구현
        (function() {
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
        }());

        //기타 reset button
        (function() {
            var mouseclickReload = function(e) {
                var wEl = $Element(elCanvas);
                ctx.clearRect(0,0, wEl.width(), wEl.height());
                e.stop();  //e.preventDefault, e.stopPropagation실행
            }
            $Element('eraseImg').attach('click' , mouseclickReload);
        }());


        //기타. rgbInfo button
        (function() {
            var toggleColorPicker = function(e) {
                $Element($$('#rgbInfo + div')[0]).toggle();   //$Element('cpcanvasWrap') 와 같다
            }
            $Element('rgbInfo').attach('click', toggleColorPicker);
        }());
});
