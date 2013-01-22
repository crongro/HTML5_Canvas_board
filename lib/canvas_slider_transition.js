/** Jindo Component(minify:0) : ../../docs/jindo-component/archive/1.3.0/
 *	jindo.Canvas
 *	jindo.Component
 *	jindo.UIComponent
 *	jindo.DragArea
 *	jindo.Effect
 *	jindo.Slider
 *	jindo.Timer
 *	jindo.Transition
 */
(function(_namespace){var jsTags=document.getElementsByTagName("script");var jsTag=jsTags[jsTags.length-1];if(jsTag&&/[\?&]jindo=([^&]+)/.test(jsTag.src)) {_namespace=RegExp.$1;}var jindo=window[_namespace];
/**
	@version 1.3.0
**/

// Copyright 2006 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


if(!document.createElement('canvas').getContext){(function(){var m=Math,mr=m.round,ms=m.sin,mc=m.cos,abs=m.abs,sqrt=m.sqrt,Z=10,Z2=Z/2,slice=Array.prototype.slice,dec2hex=[];for(var i=0;i<16;i++){for(var j=0;j<16;j++){dec2hex[i*16+j]=i.toString(16)+j.toString(16);}}
function getContext(){return this.context_||(this.context_=new CanvasRenderingContext2D_(this));}
function bind(f,obj,var_args){var a=slice.call(arguments,2);return function(){return f.apply(obj,a.concat(slice.call(arguments)));};}
var G_vmlCanvasManager_={init:function(opt_doc){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var doc=opt_doc||document;doc.createElement('canvas');doc.attachEvent('onreadystatechange',bind(this.init_,this,doc));}},init_:function(doc){if(!doc.namespaces['g_vml_']){doc.namespaces.add('g_vml_','urn:schemas-microsoft-com:vml','#default#VML');}
if(!doc.namespaces['g_o_']){doc.namespaces.add('g_o_','urn:schemas-microsoft-com:office:office','#default#VML');}
if(!doc.styleSheets['ex_canvas_']){var ss=doc.createStyleSheet();ss.owningElement.id='ex_canvas_';ss.cssText='canvas{display:inline-block;overflow:hidden;'+'text-align:left;width:300px;height:150px}'+'g_vml_\\:*{behavior:url(#default#VML)}'+'g_o_\\:*{behavior:url(#default#VML)}';}
var els=doc.getElementsByTagName('canvas');for(var i=0;i<els.length;i++){this.initElement(els[i]);}},initElement:function(el){if(!el.getContext){el.getContext=getContext;el.innerHTML='';el.attachEvent('onpropertychange',onPropertyChange);el.attachEvent('onresize',onResize);var attrs=el.attributes;if(attrs.width&&attrs.width.specified){el.style.width=attrs.width.nodeValue+'px';}else{el.width=el.clientWidth;}
if(attrs.height&&attrs.height.specified){el.style.height=attrs.height.nodeValue+'px';}else{el.height=el.clientHeight;}}
return el;}};G_vmlCanvasManager_.init();function onPropertyChange(e){var el=e.srcElement;switch(e.propertyName){case'width':el.style.width=el.attributes.width.nodeValue+'px';el.getContext().clearRect();break;case'height':el.style.height=el.attributes.height.nodeValue+'px';el.getContext().clearRect();break;}}
function onResize(e){var el=e.srcElement;if(el.firstChild){el.firstChild.style.width=el.clientWidth+'px';el.firstChild.style.height=el.clientHeight+'px';}}
function createMatrixIdentity(){return[[1,0,0],[0,1,0],[0,0,1]];}
function matrixMultiply(m1,m2){var result=createMatrixIdentity();for(var x=0;x<3;x++){for(var y=0;y<3;y++){var sum=0;for(var z=0;z<3;z++){sum+=m1[x][z]*m2[z][y];}
result[x][y]=sum;}}
return result;}
function copyState(o1,o2){o2.fillStyle=o1.fillStyle;o2.lineCap=o1.lineCap;o2.lineJoin=o1.lineJoin;o2.lineWidth=o1.lineWidth;o2.miterLimit=o1.miterLimit;o2.shadowBlur=o1.shadowBlur;o2.shadowColor=o1.shadowColor;o2.shadowOffsetX=o1.shadowOffsetX;o2.shadowOffsetY=o1.shadowOffsetY;o2.strokeStyle=o1.strokeStyle;o2.globalAlpha=o1.globalAlpha;o2.arcScaleX_=o1.arcScaleX_;o2.arcScaleY_=o1.arcScaleY_;o2.lineScale_=o1.lineScale_;}
function processStyle(styleString){var str,alpha=1;styleString=String(styleString);if(styleString.substring(0,3)=='rgb'){var start=styleString.indexOf('(',3);var end=styleString.indexOf(')',start+1);var guts=styleString.substring(start+1,end).split(',');str='#';for(var i=0;i<3;i++){str+=dec2hex[Number(guts[i])];}
if(guts.length==4&&styleString.substr(3,1)=='a'){alpha=guts[3];}}else{str=styleString;}
return{color:str,alpha:alpha};}
function processLineCap(lineCap){switch(lineCap){case'butt':return'flat';case'round':return'round';case'square':break;default:return'square';}}
function CanvasRenderingContext2D_(surfaceElement){this.m_=createMatrixIdentity();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle='#000';this.fillStyle='#000';this.lineWidth=1;this.lineJoin='miter';this.lineCap='butt';this.miterLimit=Z*1;this.globalAlpha=1;this.canvas=surfaceElement;var el=surfaceElement.ownerDocument.createElement('div');el.style.width=surfaceElement.clientWidth+'px';el.style.height=surfaceElement.clientHeight+'px';surfaceElement.appendChild(el);this.element_=el;this.arcScaleX_=1;this.arcScaleY_=1;this.lineScale_=1;}
var contextPrototype=CanvasRenderingContext2D_.prototype;contextPrototype.clearRect=function(){this.element_.innerHTML='';};contextPrototype.beginPath=function(){this.currentPath_=[];};contextPrototype.moveTo=function(aX,aY){var p=this.getCoords_(aX,aY);this.currentPath_.push({type:'moveTo',x:p.x,y:p.y});this.currentX_=p.x;this.currentY_=p.y;};contextPrototype.lineTo=function(aX,aY){var p=this.getCoords_(aX,aY);this.currentPath_.push({type:'lineTo',x:p.x,y:p.y});this.currentX_=p.x;this.currentY_=p.y;};contextPrototype.bezierCurveTo=function(aCP1x,aCP1y,aCP2x,aCP2y,aX,aY){var p=this.getCoords_(aX,aY);var cp1=this.getCoords_(aCP1x,aCP1y);var cp2=this.getCoords_(aCP2x,aCP2y);bezierCurveTo(this,cp1,cp2,p);};function bezierCurveTo(self,cp1,cp2,p){self.currentPath_.push({type:'bezierCurveTo',cp1x:cp1.x,cp1y:cp1.y,cp2x:cp2.x,cp2y:cp2.y,x:p.x,y:p.y});self.currentX_=p.x;self.currentY_=p.y;}
contextPrototype.quadraticCurveTo=function(aCPx,aCPy,aX,aY){var cp=this.getCoords_(aCPx,aCPy);var p=this.getCoords_(aX,aY);var cp1={x:this.currentX_+2.0/3.0*(cp.x-this.currentX_),y:this.currentY_+2.0/3.0*(cp.y-this.currentY_)};var cp2={x:cp1.x+(p.x-this.currentX_)/3.0,y:cp1.y+(p.y-this.currentY_)/3.0};bezierCurveTo(this,cp1,cp2,p);};contextPrototype.arc=function(aX,aY,aRadius,aStartAngle,aEndAngle,aClockwise){aRadius*=Z;var arcType=aClockwise?'at':'wa';var xStart=aX+mc(aStartAngle)*aRadius-Z2;var yStart=aY+ms(aStartAngle)*aRadius-Z2;var xEnd=aX+mc(aEndAngle)*aRadius-Z2;var yEnd=aY+ms(aEndAngle)*aRadius-Z2;if(xStart==xEnd&&!aClockwise){xStart+=0.125;}
var p=this.getCoords_(aX,aY);var pStart=this.getCoords_(xStart,yStart);var pEnd=this.getCoords_(xEnd,yEnd);this.currentPath_.push({type:arcType,x:p.x,y:p.y,radius:aRadius,xStart:pStart.x,yStart:pStart.y,xEnd:pEnd.x,yEnd:pEnd.y});};contextPrototype.rect=function(aX,aY,aWidth,aHeight){this.moveTo(aX,aY);this.lineTo(aX+aWidth,aY);this.lineTo(aX+aWidth,aY+aHeight);this.lineTo(aX,aY+aHeight);this.closePath();};contextPrototype.strokeRect=function(aX,aY,aWidth,aHeight){var oldPath=this.currentPath_;this.beginPath();this.moveTo(aX,aY);this.lineTo(aX+aWidth,aY);this.lineTo(aX+aWidth,aY+aHeight);this.lineTo(aX,aY+aHeight);this.closePath();this.stroke();this.currentPath_=oldPath;};contextPrototype.fillRect=function(aX,aY,aWidth,aHeight){var oldPath=this.currentPath_;this.beginPath();this.moveTo(aX,aY);this.lineTo(aX+aWidth,aY);this.lineTo(aX+aWidth,aY+aHeight);this.lineTo(aX,aY+aHeight);this.closePath();this.fill();this.currentPath_=oldPath;};contextPrototype.createLinearGradient=function(aX0,aY0,aX1,aY1){var gradient=new CanvasGradient_('gradient');gradient.x0_=aX0;gradient.y0_=aY0;gradient.x1_=aX1;gradient.y1_=aY1;return gradient;};contextPrototype.createRadialGradient=function(aX0,aY0,aR0,aX1,aY1,aR1){var gradient=new CanvasGradient_('gradientradial');gradient.x0_=aX0;gradient.y0_=aY0;gradient.r0_=aR0;gradient.x1_=aX1;gradient.y1_=aY1;gradient.r1_=aR1;return gradient;};contextPrototype.drawImage=function(image,var_args){var dx,dy,dw,dh,sx,sy,sw,sh;var oldRuntimeWidth=image.runtimeStyle.width;var oldRuntimeHeight=image.runtimeStyle.height;image.runtimeStyle.width='auto';image.runtimeStyle.height='auto';var w=image.width;var h=image.height;image.runtimeStyle.width=oldRuntimeWidth;image.runtimeStyle.height=oldRuntimeHeight;if(arguments.length==3){dx=arguments[1];dy=arguments[2];sx=sy=0;sw=dw=w;sh=dh=h;}else if(arguments.length==5){dx=arguments[1];dy=arguments[2];dw=arguments[3];dh=arguments[4];sx=sy=0;sw=w;sh=h;}else if(arguments.length==9){sx=arguments[1];sy=arguments[2];sw=arguments[3];sh=arguments[4];dx=arguments[5];dy=arguments[6];dw=arguments[7];dh=arguments[8];}else{throw Error('Invalid number of arguments');}
var d=this.getCoords_(dx,dy);var w2=sw/2;var h2=sh/2;var vmlStr=[];var W=10;var H=10;vmlStr.push(' <g_vml_:group',' coordsize="',Z*W,',',Z*H,'"',' coordorigin="0,0"',' style="width:',W,'px;height:',H,'px;position:absolute;');if(this.m_[0][0]!=1||this.m_[0][1]){var filter=[];filter.push('M11=',this.m_[0][0],',','M12=',this.m_[1][0],',','M21=',this.m_[0][1],',','M22=',this.m_[1][1],',','Dx=',mr(d.x/Z),',','Dy=',mr(d.y/Z),'');var max=d;var c2=this.getCoords_(dx+dw,dy);var c3=this.getCoords_(dx,dy+dh);var c4=this.getCoords_(dx+dw,dy+dh);max.x=m.max(max.x,c2.x,c3.x,c4.x);max.y=m.max(max.y,c2.y,c3.y,c4.y);vmlStr.push('padding:0 ',mr(max.x/Z),'px ',mr(max.y/Z),'px 0;filter:progid:DXImageTransform.Microsoft.Matrix(',filter.join(''),", sizingmethod='clip');");}else{vmlStr.push('top:',mr(d.y/Z),'px;left:',mr(d.x/Z),'px;');}
vmlStr.push(' ">','<g_vml_:image src="',image.src,'"',' style="width:',Z*dw,'px;',' height:',Z*dh,'px;"',' cropleft="',sx/w,'"',' croptop="',sy/h,'"',' cropright="',(w-sx-sw)/w,'"',' cropbottom="',(h-sy-sh)/h,'"',' />','</g_vml_:group>');this.element_.insertAdjacentHTML('BeforeEnd',vmlStr.join(''));};contextPrototype.stroke=function(aFill){var lineStr=[];var lineOpen=false;var a=processStyle(aFill?this.fillStyle:this.strokeStyle);var color=a.color;var opacity=a.alpha*this.globalAlpha;var W=10;var H=10;lineStr.push('<g_vml_:shape',' filled="',!!aFill,'"',' style="position:absolute;width:',W,'px;height:',H,'px;"',' coordorigin="0 0" coordsize="',Z*W,' ',Z*H,'"',' stroked="',!aFill,'"',' path="');var newSeq=false;var min={x:null,y:null};var max={x:null,y:null};var i;for(i=0;i<this.currentPath_.length;i++){var p=this.currentPath_[i];var c;switch(p.type){case'moveTo':c=p;lineStr.push(' m ',mr(p.x),',',mr(p.y));break;case'lineTo':lineStr.push(' l ',mr(p.x),',',mr(p.y));break;case'close':lineStr.push(' x ');p=null;break;case'bezierCurveTo':lineStr.push(' c ',mr(p.cp1x),',',mr(p.cp1y),',',mr(p.cp2x),',',mr(p.cp2y),',',mr(p.x),',',mr(p.y));break;case'at':case'wa':lineStr.push(' ',p.type,' ',mr(p.x-this.arcScaleX_*p.radius),',',mr(p.y-this.arcScaleY_*p.radius),' ',mr(p.x+this.arcScaleX_*p.radius),',',mr(p.y+this.arcScaleY_*p.radius),' ',mr(p.xStart),',',mr(p.yStart),' ',mr(p.xEnd),',',mr(p.yEnd));break;}
if(p){if(min.x===null||p.x<min.x){min.x=p.x;}
if(max.x===null||p.x>max.x){max.x=p.x;}
if(min.y===null||p.y<min.y){min.y=p.y;}
if(max.y===null||p.y>max.y){max.y=p.y;}}}
lineStr.push(' ">');if(!aFill){var lineWidth=this.lineScale_*this.lineWidth;if(lineWidth<1){opacity*=lineWidth;}
lineStr.push('<g_vml_:stroke',' opacity="',opacity,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',processLineCap(this.lineCap),'"',' weight="',lineWidth,'px"',' color="',color,'" />');}else if(typeof this.fillStyle=='object'){var fillStyle=this.fillStyle;var angle=0;var focus={x:0,y:0};var shift=0;var expansion=1;var p0;if(fillStyle.type_=='gradient'){var x0=fillStyle.x0_/this.arcScaleX_;var y0=fillStyle.y0_/this.arcScaleY_;var x1=fillStyle.x1_/this.arcScaleX_;var y1=fillStyle.y1_/this.arcScaleY_;p0=this.getCoords_(x0,y0);var p1=this.getCoords_(x1,y1);var dx=p1.x-p0.x;var dy=p1.y-p0.y;angle=Math.atan2(dx,dy)*180/Math.PI;if(angle<0){angle+=360;}
if(angle<1e-6){angle=0;}}else{p0=this.getCoords_(fillStyle.x0_,fillStyle.y0_);var width=max.x-min.x;var height=max.y-min.y;focus={x:(p0.x-min.x)/width,y:(p0.y-min.y)/height};width/=this.arcScaleX_*Z;height/=this.arcScaleY_*Z;var dimension=m.max(width,height);shift=2*fillStyle.r0_/dimension;expansion=2*fillStyle.r1_/dimension-shift;}
var stops=fillStyle.colors_;stops.sort(function(cs1,cs2){return cs1.offset-cs2.offset;});var length=stops.length;var color1=stops[0].color;var color2=stops[length-1].color;var opacity1=stops[0].alpha*this.globalAlpha;var opacity2=stops[length-1].alpha*this.globalAlpha;var colors=[];for(i=0;i<length;i++){var stop=stops[i];colors.push(stop.offset*expansion+shift+' '+stop.color);}
lineStr.push('<g_vml_:fill type="',fillStyle.type_,'"',' method="none" focus="100%"',' color="',color1,'"',' color2="',color2,'"',' colors="',colors.join(','),'"',' opacity="',opacity2,'"',' g_o_:opacity2="',opacity1,'"',' angle="',angle,'"',' focusposition="',focus.x,',',focus.y,'" />');}else{lineStr.push('<g_vml_:fill color="',color,'" opacity="',opacity,'" />');}
lineStr.push('</g_vml_:shape>');this.element_.insertAdjacentHTML('beforeEnd',lineStr.join(''));};contextPrototype.fill=function(){this.stroke(true);};contextPrototype.closePath=function(){this.currentPath_.push({type:'close'});};contextPrototype.getCoords_=function(aX,aY){var m=this.m_;return{x:Z*(aX*m[0][0]+aY*m[1][0]+m[2][0])-Z2,y:Z*(aX*m[0][1]+aY*m[1][1]+m[2][1])-Z2};};contextPrototype.save=function(){var o={};copyState(this,o);this.aStack_.push(o);this.mStack_.push(this.m_);this.m_=matrixMultiply(createMatrixIdentity(),this.m_);};contextPrototype.restore=function(){copyState(this.aStack_.pop(),this);this.m_=this.mStack_.pop();};function matrixIsFinite(m){for(var j=0;j<3;j++){for(var k=0;k<2;k++){if(!isFinite(m[j][k])||isNaN(m[j][k])){return false;}}}
return true;}
function setM(ctx,m,updateLineScale){if(!matrixIsFinite(m)){return;}
ctx.m_=m;if(updateLineScale){var det=m[0][0]*m[1][1]-m[0][1]*m[1][0];ctx.lineScale_=sqrt(abs(det));}}
contextPrototype.translate=function(aX,aY){var m1=[[1,0,0],[0,1,0],[aX,aY,1]];setM(this,matrixMultiply(m1,this.m_),false);};contextPrototype.rotate=function(aRot){var c=mc(aRot);var s=ms(aRot);var m1=[[c,s,0],[-s,c,0],[0,0,1]];setM(this,matrixMultiply(m1,this.m_),false);};contextPrototype.scale=function(aX,aY){this.arcScaleX_*=aX;this.arcScaleY_*=aY;var m1=[[aX,0,0],[0,aY,0],[0,0,1]];setM(this,matrixMultiply(m1,this.m_),true);};contextPrototype.transform=function(m11,m12,m21,m22,dx,dy){var m1=[[m11,m12,0],[m21,m22,0],[dx,dy,1]];setM(this,matrixMultiply(m1,this.m_),true);};contextPrototype.setTransform=function(m11,m12,m21,m22,dx,dy){var m=[[m11,m12,0],[m21,m22,0],[dx,dy,1]];setM(this,m,true);};contextPrototype.clip=function(){};contextPrototype.arcTo=function(){};contextPrototype.createPattern=function(){return new CanvasPattern_();};function CanvasGradient_(aType){this.type_=aType;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[];}
CanvasGradient_.prototype.addColorStop=function(aOffset,aColor){aColor=processStyle(aColor);this.colors_.push({offset:aOffset,color:aColor.color,alpha:aColor.alpha});};function CanvasPattern_(){}
G_vmlCanvasManager=G_vmlCanvasManager_;CanvasRenderingContext2D=CanvasRenderingContext2D_;CanvasGradient=CanvasGradient_;CanvasPattern=CanvasPattern_;})();}

/**
    HTML5 Canvas 엘리먼트를 생성하고 간단한 그래픽 작업을 할 수 있도록 지원하는 컴포넌트
    
    @class jindo.Canvas
    
    @keyword canvas, graphic, 캔버스, 그래픽
**/
jindo.Canvas = jindo.$Class({
	/**
		@constructor
		@param {HTMLElement} [el] canvas 엘리먼트
	**/
	$init : function(el) {
		if (typeof el == "undefined") {
			el = jindo.Canvas.create();
		}
		this._el = el;
		this._elContainer = this._el.parentNode;
		this._oContext = jindo.Canvas.getContext(el);
	},
	
	/**
		canvas 엘리먼트를 가져온다.
		
		@method getElement
		@return {HTMLElement} canvas 엘리먼트
	**/
	getElement : function() {
		return this._el;
	},
	
	/**
		canvas 엘리먼트의 컨테이너 엘리먼트를 가져온다.
		
		@method getContainer
		@return {HTMLElement} 컨테이너 엘리먼트
	**/
	getContainer : function() {
		return this._elContainer;
	},
	
	/**
		canvas 엘리먼트의 너비를 구한다.
		
		@method width
		@return {Number}
	**/
	/**
		canvas 엘리먼트의 너비를 설정한다.
		
		@method width
		@param {Number} n 지정할 너비값
		@return {this}
	**/
	width : function(n) {
		if (typeof n == "number") {
			this._el.width = n;
			return this;
		}
		return this._el.width;
	},
	
	/**
		canvas 엘리먼트의 높이를 구한다.
		
		@method height
		@return {Number}
	**/
	/**
		canvas 엘리먼트의 높이를 설정한다.
		
		@method height
		@param {Number} n 지정할 높이값
		@return {this}
	**/
	height : function(n) {
		if (typeof n == "number") {
			this._el.height = n;
			return this;
		}
		return this._el.height;
	},
	
	/**
		canvas 엘리먼트의 컨텍스트를 가져온다.
		
		@method getContext
		@return {Object} canvas의 context객체
	**/
	getContext : function(){
		return this._oContext;
	},
	
	/**
		canvas 엘리먼트 내부를 모두 지운다.
		
		@method clear
		@return {this}
	**/
	clear : function(){
		this._oContext.clearRect(0, 0, this._el.width, this._el.height);
		return this;
	},
	
	_merge : function(ctx, htOption) {
		for (var sKey in htOption) {
			ctx[sKey] = htOption[sKey];
		}
	},
	
	/**
		여러개의 점으로 이루어진 선을 그린다.
		선의 두께 (lineWidth) 가 홀수일경우 x, y 좌표에 0.5를 더해 anti-aliasing되지 않도록 보정한다.
		
		@method drawLine
		@param {Array} a 좌표셋의 배열
		@param {Object} htOption 컨텍스트에 지정할 옵션
		@param {Boolean} [bBlockAntiAlias=true] 안티앨리어싱을 막을지 여부
		@return {this}
		@example
			drawLine([[0, 0], [1, 1]], { lineWidth : 1, strokeStyle : "rgb(255, 0, 0)" });
	**/
	drawLine : function(a, htOption, bBlockAntiAlias) {
		var ctx = this._oContext,
			nAdjust = 0,
			nLen = a.length,
			i;
		
		htOption = htOption || {};
		
		if (nLen > 1) {
			if (typeof bBlockAntiAlias == "undefined") {
				bBlockAntiAlias = true;
			}
			
			ctx.save();
			this._merge(ctx, htOption);
			
			ctx.beginPath();
			if (bBlockAntiAlias) {
				if (ctx.lineWidth % 2 === 1) {
					nAdjust = 0.5;
				}
				if (nLen === 2) {
					if (a[0][0] === a[1][0]) {
						ctx.moveTo((Math.round(a[0][0]) + nAdjust), a[0][1]);
						ctx.lineTo((Math.round(a[1][0]) + nAdjust), a[1][1]);
					}
					if (a[0][1] === a[1][1]) {
						ctx.moveTo(a[0][0], (Math.round(a[0][1]) + nAdjust));
						ctx.lineTo(a[1][0], (Math.round(a[1][1]) + nAdjust));
					}
				} else {
					ctx.moveTo((Math.round(a[0][0]) + nAdjust), (Math.round(a[0][1]) + nAdjust));
					for (i = 1; i < nLen; i++) {
						ctx.lineTo((Math.round(a[i][0]) + nAdjust), (Math.round(a[i][1]) + nAdjust));
					}
				}
			} else {
				ctx.moveTo(a[0][0], a[0][1]);
				for (i = 1; i < nLen; i++) {
					ctx.lineTo(a[i][0], a[i][1]);
				}
			}
			
			ctx.stroke();
			ctx.closePath();
			ctx.restore();
		}
		return this;
	},
	
	/**
		여러개의 점으로 이루어진 면을 그린다.
		x, y 좌표에 0.5를 더해 anti-aliasing되지 않도록 보정한다.
		
		@method drawFace
		@param {Array} a 좌표셋의 배열
		@param {Object} htOption 컨텍스트에 지정할 옵션
		@return {this}
		@example
			drawFace([[0, 0], [1, 1]], { fillStyle : "rgb(255, 0, 0)" });
	**/
	drawFace : function(a, htOption) {
		var ctx = this._oContext,
			nLen = a.length;
		
		htOption = htOption || {};
		
		if (nLen > 2) {
			ctx.save();
			this._merge(ctx, htOption);
			ctx.beginPath();
			ctx.moveTo(a[0][0], a[0][1]);
			for (var i = 1; i < nLen; i++) {
				ctx.lineTo(a[i][0], a[i][1]);
			}
			ctx.fill();
			ctx.closePath();
			ctx.restore();
		}
		return this;
	},
	
	_round : function(n, nLineWidth) {
		return (nLineWidth % 2 === 1) ? Math.round(n) + 0.5 : n; 
	},
	
	/**
		x, y 좌표를 기준으로 사각형 막대를 그린다.
		nWidth값이 0보다 작으면 왼쪽방향으로, 0보다 크면 오른쪽방향으로 그리고
		nHeight값이 0보다 작으면 위쪽방향으로, 0보다 크면 아래쪽방향으로 그린다.
		htOption.strokeStyle이 지정되어있고, 컨텍스트 객체의 선의 두께(lineWidth)가 홀수일경우 x, y 좌표에 0.5를 더해 anti-aliasing되지 않도록 보정한다.
		
		@method drawRect
		@param {Number} nX x좌표
		@param {Number} nY y좌표
		@param {Number} nWidth 너비
		@param {Number} nHeight 높이
		@param {Object} htOption 컨텍스트에 지정할 옵션
		@param {Boolean} bBlockAntiAlias 안티앨리어싱을 막을지 여부 (디폴트 true) 
		@return {this}
		@example
			drawRect(20, 100, 100, 100, {
			    fillStyle : "rgb(200, 200, 200)"
			}, true);
			
			drawRect(20, 100, 100, 100, {
			    strokeStyle:"rgb(10, 10, 10)", lineWidth:1
			}, false);
			
			drawRect(20, 100, 100, 100, {
			    fillStyle : "rgb(200, 200, 200)", strokeStyle:"rgb(10, 10, 10)", lineWidth:1
			}, true);
	**/
	drawRect : function(nX, nY, nWidth, nHeight, htOption, bBlockAntiAlias) {
		var ctx = this._oContext,
			bFillDefined = typeof htOption["fillStyle"] != "undefined",
			bStrokeDefined = typeof htOption["strokeStyle"] != "undefined" && htOption["lineWidth"] > 0;
		
		htOption = htOption || {};
		
		if (bFillDefined || bStrokeDefined) {
			ctx.save();
			this._merge(ctx, htOption);
			
			if (bFillDefined) {
				ctx.fillRect(nX, nY, nWidth, nHeight);
			}
			if (bStrokeDefined) {
				if (typeof bBlockAntiAlias == "undefined") {
					bBlockAntiAlias = true;
				}
				
				if (bBlockAntiAlias) {
					nX = this._round(nX, ctx.lineWidth);
					nY = this._round(nY, ctx.lineWidth);
					nHeight = Math.round(nHeight);
					nWidth = Math.round(nWidth);
				}
				ctx.strokeRect(nX, nY, nWidth, nHeight);
			}
			ctx.restore();
		}
		return this;
	}
});

/**
	canvas 엘리먼트를 생성한다.
	IE는 exCanvas를 사용해 초기화한다.
	
	@method create
	@static
	@param {Number} nWidth canvas의 너비. canvas에 지정될 width 속성값
	@param {Number} nHeight canvas의 높이. canvas에 지정될 height 속성값
	@param {HTMLElement} elParent append될 부모 엘리먼트 (생략가능)
	@return {HTMLElement} canvas 엘리먼트
	@example
		jindo.Canvas.create();
		jindo.Canvas.create(300, 200);
		jindo.Canvas.create(300, 200, document.body);
**/
jindo.Canvas.create = function(nWidth, nHeight, elParent) {
	var elCanvas = document.createElement('canvas');
	elCanvas.setAttribute("width", nWidth || 300);
	elCanvas.setAttribute("height", nHeight || 150);
	 
	if (typeof elCanvas.getContext == "undefined") {
		G_vmlCanvasManager.initElement(elCanvas);
	}
	if (elParent) {
		elParent.appendChild(elCanvas);
	}
	return elCanvas;
};

/**
	canvas 엘리먼트의 컨텍스트 객체를 가져온다.
	
	@method getContext
	@static
	@param {HTMLElement} el canvas 엘리먼트
	@return {Object} canvas의 컨텍스트 객체
**/
jindo.Canvas.getContext = function(el) {
	return el.getContext("2d");
};/**
	@fileOverview 진도 컴포넌트를 구현하기 위한 코어 클래스
	@version 1.3.0
**/

/**
	진도 컴포넌트를 구현하기 위한 코어 클래스.
	다른 컴포넌트가 상속받는 용도로 사용된다.
	
	@class jindo.Component
	
	@keyword component, base, core
**/
jindo.Component = jindo.$Class({
	/** @lends jindo.Component.prototype */

	_htEventHandler : null,
	_htOption : null,

	/**
		jindo.Component를 초기화한다.
		@constructor
	**/
	$init : function() {
		var aInstance = this.constructor.getInstance();
		aInstance.push(this);
		this._htEventHandler = {};
		this._htOption = {};
		this._htOption._htSetter = {};
	},
	
	/**
		옵션값을 설정하거나 가져온다.
		htCustomEventHandler 옵션을 선언해서 attach() 메소드를 사용하지 않고 커스텀 이벤트핸들러를 등록할 수 있다.
		
		@method option
		@param {String} sName 옵션의 이름
		@param {String} sValue 옵션의 값
		@return {this} 컴포넌트 객체 자신
		@example
			var MyComponent = jindo.$Class({
				method : function() {
					alert(this.option("foo"));
				}
			}).extend(jindo.Component);
			
			var oInst = new MyComponent();
			oInst.option("foo", 123); // 또는 oInst.option({ foo : 123 });
			oInst.method(); // 결과 123
		@example
			//커스텀이벤트핸들러 등록예제
			oInst.option("htCustomEventHandler", {
				test : function(oCustomEvent) {
					
				}
			});
			
			//이미 "htCustomEventHandler" 옵션이 설정되어있는 경우에는 무시된다.
			oInst.option("htCustomEventHandler", {
				change : function(oCustomEvent) {
					
				}
			});
	**/
	option : function(sName, vValue) {
		switch (typeof sName) {
			case "undefined" :
				var oOption = {};
				for(var i in this._htOption){
					if(!(i == "htCustomEventHandler" || i == "_htSetter")){
						oOption[i] = this._htOption[i];
					}
				}
				return oOption;
			case "string" : 
				if (typeof vValue != "undefined") {
					if (sName == "htCustomEventHandler") {
						if (typeof this._htOption[sName] == "undefined") {
							this.attach(vValue);
						} else {
							return this;
						}
					}
					
					this._htOption[sName] = vValue;
					if (typeof this._htOption._htSetter[sName] == "function") {
						this._htOption._htSetter[sName](vValue);	
					}
				} else {
					return this._htOption[sName];
				}
				break;
			case "object" :
				for(var sKey in sName) {
					if (sKey == "htCustomEventHandler") {
						if (typeof this._htOption[sKey] == "undefined") {
							this.attach(sName[sKey]);
						} else {
							continue;
						}
					}
					if(sKey !== "_htSetter"){
						this._htOption[sKey] = sName[sKey];
					}
					
					if (typeof this._htOption._htSetter[sKey] == "function") {
						this._htOption._htSetter[sKey](sName[sKey]);	
					}
				}
				break;
		}
		return this;
	},
	
	/**
		옵션의 setter 함수를 설정하거나 가져온다.
		옵션의 setter 함수는 지정된 옵션이 변경되면 수행되는 함수이다.
		
		@method optionSetter
		@param {String} sName setter의 이름
		@param {Function} fSetter setter 함수
		@return {this} 컴포넌트 객체 자신
		@example
			oInst.option("sMsg", "test");
			oInst.optionSetter("sMsg", function(){
				alert("sMsg 옵션값이 변경되었습니다.");
			});
			oInst.option("sMsg", "change"); -> alert발생
		@example
			//HashTable 형태로 설정가능
			oInst.optionSetter({
				"sMsg" : function(){
				},
				"nNum" : function(){
				}
			});
	**/
	optionSetter : function(sName, fSetter) {
		switch (typeof sName) {
			case "undefined" :
				return this._htOption._htSetter;
			case "string" : 
				if (typeof fSetter != "undefined") {
					this._htOption._htSetter[sName] = jindo.$Fn(fSetter, this).bind();
				} else {
					return this._htOption._htSetter[sName];
				}
				break;
			case "object" :
				for(var sKey in sName) {
					this._htOption._htSetter[sKey] = jindo.$Fn(sName[sKey], this).bind();
				}
				break;
		}
		return this;
	},
	
	/**
		이벤트를 발생시킨다.
		
		@method fireEvent
		@param {String} sEvent 커스텀이벤트명
		@param {Object} oEvent 커스텀이벤트 핸들러에 전달되는 객체.
		@return {Boolean} 핸들러의 커스텀이벤트객체에서 stop메소드가 수행되면 false를 리턴
		@example
			//커스텀 이벤트를 발생시키는 예제
			var MyComponent = jindo.$Class({
				method : function() {
					this.fireEvent('happened', {
						sHello : 'world',
						nAbc : 123
					});
				}
			}).extend(jindo.Component);
			
			var oInst = new MyComponent().attach({
				happened : function(oCustomEvent) {
					alert(oCustomEvent.sHello + '/' + oCustomEvent.nAbc); // 결과 : world/123
				}
			});
			
			<button onclick="oInst.method();">Click me</button> 
	**/
	fireEvent : function(sEvent, oEvent) {
		oEvent = oEvent || {};
		var fInlineHandler = this['on' + sEvent],
			aHandlerList = this._htEventHandler[sEvent] || [],
			bHasInlineHandler = typeof fInlineHandler == "function",
			bHasHandlerList = aHandlerList.length > 0;
			
		if (!bHasInlineHandler && !bHasHandlerList) {
			return true;
		}
		aHandlerList = aHandlerList.concat(); //fireEvent수행시 핸들러 내부에서 detach되어도 최초수행시의 핸들러리스트는 모두 수행
		
		oEvent.sType = sEvent;
		if (typeof oEvent._aExtend == 'undefined') {
			oEvent._aExtend = [];
			oEvent.stop = function(){
				if (oEvent._aExtend.length > 0) {
					oEvent._aExtend[oEvent._aExtend.length - 1].bCanceled = true;
				}
			};
		}
		oEvent._aExtend.push({
			sType: sEvent,
			bCanceled: false
		});
		
		var aArg = [oEvent], 
			i, nLen;
			
		for (i = 2, nLen = arguments.length; i < nLen; i++){
			aArg.push(arguments[i]);
		}
		
		if (bHasInlineHandler) {
			fInlineHandler.apply(this, aArg);
		}
	
		if (bHasHandlerList) {
			var fHandler;
			for (i = 0, fHandler; (fHandler = aHandlerList[i]); i++) {
				fHandler.apply(this, aArg);
			}
		}
		
		return !oEvent._aExtend.pop().bCanceled;
	},

	/**
		커스텀 이벤트 핸들러를 등록한다.
		
		@method attach
		@param {String} sEvent 커스텀 이벤트 명
		@param {Function} fHandlerToAttach 등록 할 커스텀 이벤트 핸들러
			@param {Object} fHandlerToAttach.oCustomEvent 커스텀 이벤트 객체
		@return {this} 컴포넌트 객체 자신
		@example
			//이벤트 등록 방법 예제
			//아래처럼 등록하면 appear 라는 사용자 이벤트 핸들러는 총 3개가 등록되어 해당 이벤트를 발생시키면 각각의 핸들러 함수가 모두 실행됨.
			//attach 을 통해 등록할때는 이벤트명에 'on' 이 빠지는 것에 유의.
			function fpHandler1(oEvent) { .... };
			function fpHandler2(oEvent) { .... };
			
			var oInst = new MyComponent();
			oInst.onappear = fpHandler1; // 직접 등록
			oInst.attach('appear', fpHandler1); // attach 함수를 통해 등록
			oInst.attach({
				appear : fpHandler1,
				more : fpHandler2
			});
	**/
	attach : function(sEvent, fHandlerToAttach) {
		if (arguments.length == 1) {
			
			jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler, sEvent) {
				this.attach(sEvent, fHandler);
			}, this).bind());
		
			return this;
		}
		
		var aHandler = this._htEventHandler[sEvent];
		
		if (typeof aHandler == 'undefined'){
			aHandler = this._htEventHandler[sEvent] = [];
		}
		
		aHandler.push(fHandlerToAttach);
		
		return this;
	},
	
	/**
		커스텀 이벤트 핸들러를 해제한다.
		
		@method detach
		@param {String} sEvent 커스텀 이벤트 명
		@param {Function} fHandlerToDetach 등록 해제 할 커스텀 이벤트 핸들러
		@return {this} 컴포넌트 객체 자신
		@example
			//이벤트 해제 예제
			oInst.onappear = null; // 직접 해제
			oInst.detach('appear', fpHandler1); // detach 함수를 통해 해제
			oInst.detach({
				appear : fpHandler1,
				more : fpHandler2
			});
	**/
	detach : function(sEvent, fHandlerToDetach) {
		if (arguments.length == 1) {
			jindo.$H(arguments[0]).forEach(jindo.$Fn(function(fHandler, sEvent) {
				this.detach(sEvent, fHandler);
			}, this).bind());
		
			return this;
		}

		var aHandler = this._htEventHandler[sEvent];
		if (aHandler) {
			for (var i = 0, fHandler; (fHandler = aHandler[i]); i++) {
				if (fHandler === fHandlerToDetach) {
					aHandler = aHandler.splice(i, 1);
					break;
				}
			}
		}

		return this;
	},
	
	/**
		등록된 모든 커스텀 이벤트 핸들러를 해제한다.
		
		@method detachAll
		@param {String} sEvent 이벤트명. 생략시 모든 등록된 커스텀 이벤트 핸들러를 해제한다. 
		@return {this} 컴포넌트 객체 자신
		@example
			//"show" 커스텀이벤트 핸들러 모두 해제
			oInst.detachAll("show");
			
			//모든 커스텀이벤트 핸들러 해제
			oInst.detachAll();
	**/
	detachAll : function(sEvent) {
		var aHandler = this._htEventHandler;
		
		if (arguments.length) {
			
			if (typeof aHandler[sEvent] == 'undefined') {
				return this;
			}
	
			delete aHandler[sEvent];
	
			return this;
		}	
		
		for (var o in aHandler) {
			delete aHandler[o];
		}
		return this;				
	}
});

/**
	다수의 컴포넌트를 일괄 생성하는 Static Method
	
	@method factory
	@static
	@param {Array} aObject 기준엘리먼트의 배열
	@param {HashTable} htOption 옵션객체의 배열
	@return {Array} 생성된 컴포넌트 객체 배열
	@example
		var Instance = jindo.Component.factory(
			cssquery('li'),
			{
				foo : 123,
				bar : 456
			}
		);
**/
jindo.Component.factory = function(aObject, htOption) {
	var aReturn = [],
		oInstance;

	if (typeof htOption == "undefined") {
		htOption = {};
	}
	
	for(var i = 0, el; (el = aObject[i]); i++) {
		oInstance = new this(el, htOption);
		aReturn[aReturn.length] = oInstance;
	}

	return aReturn;
};

/**
	컴포넌트의 생성된 인스턴스를 리턴한다.
	
	@method getInstance
	@static
	@return {Array} 생성된 인스턴스의 배열
**/
jindo.Component.getInstance = function(){
	if (typeof this._aInstance == "undefined") {
		this._aInstance = [];
	}
	return this._aInstance;
};

/**
	사용하는 컴포넌트의 버젼
	
	@property VERSION
	@static
	
	@type String
	@default "1.3.0"
	
	@example
		console.log(jindo.Component.VERSION); // "1.3.0"

	@since 1.3.0
 */
jindo.Component.VERSION = '1.3.0'; /**
	@fileOverview UI 컴포넌트를 구현하기 위한 코어 클래스
	@version 1.3.0
**/
/**
	UI Component에 상속되어 사용되는 Jindo Component의 Core
	
	@class jindo.UIComponent
	@extends jindo.Component
	@keyword uicomponent, component, 유아이컴포넌트
**/
jindo.UIComponent = jindo.$Class({
	/** @lends jindo.UIComponent.prototype */
		
	/**
		@constructor
		jindo.UIComponent를 초기화한다.
	**/
	$init : function() {
		this._bIsActivating = false; //컴포넌트의 활성화 여부
	},

	/**
		컴포넌트의 활성여부를 가져온다.
		
		@method isActivating
		@return {Boolean}
	**/
	isActivating : function() {
		return this._bIsActivating;
	},

	/**
		컴포넌트를 활성화한다.
		_onActivate 메소드를 수행하므로 반드시 상속받는 클래스에 _onActivate 메소드가 정의되어야한다.
		
		@method activate
		@return {this}
	**/
	activate : function() {
		if (this.isActivating()) {
			return this;
		}
		this._bIsActivating = true;
		
		if (arguments.length > 0) {
			this._onActivate.apply(this, arguments);
		} else {
			this._onActivate();
		}
				
		return this;
	},
	
	/**
		컴포넌트를 비활성화한다.
		_onDeactivate 메소드를 수행하므로 반드시 상속받는 클래스에 _onDeactivate 메소드가 정의되어야한다.
		
		@method deactivate
		@return {this}
	**/
	deactivate : function() {
		if (!this.isActivating()) {
			return this;
		}
		this._bIsActivating = false;
		
		if (arguments.length > 0) {
			this._onDeactivate.apply(this, arguments);
		} else {
			this._onDeactivate();
		}
		
		return this;
	}
}).extend(jindo.Component);	
/**
	@fileOverview HTML Element를 Drag할 수 있게 해주는 컴포넌트
	@author hooriza, modified by senxation
	@version 1.3.0
**/

/**
	HTML Element를 Drag할 수 있게 해주는 컴포넌트
	DragArea 컴포넌트는 상위 기준 엘리먼트의 자식들 중 특정 클래스명을 가진 모든 엘리먼트를 Drag 가능하게 하는 기능을 한다.
	
	@class jindo.DragArea
	@extends jindo.UIComponent
	
	@keyword drag, area, 드래그&드랍, 드래그, 영역
**/
jindo.DragArea = jindo.$Class({
	/** @lends jindo.DragArea.prototype */
	
	/**
		DragArea 컴포넌트를 생성한다.
		@constructor
		@param {HTMLElement} el Drag될 엘리먼트들의 상위 기준 엘리먼트. 컴포넌트가 적용되는 영역(Area)이 된다.
		@param {Object} [htOption] 옵션 객체
			@param {String} [htOption.sClassName="draggable"] 드래그 될 엘리먼트의 클래스명. 상위 기준 엘리먼트의 자식 중 해당 클래스명을 가진 모든 엘리먼트는 드래그가능하게 된다.
			@param {Boolean} [htOption.bFlowOut=true] 드래그될 엘리먼트가 상위 기준 엘리먼트의 영역을 벗어날 수 있는지의 여부. 상위 엘리먼트의 크기가 드래그되는 객체보다 크거나 같아야지만 동작한다. 작은 경우 document사이즈로 제한한다.
			@param {Boolean} [htOption.bSetCapture=true] ie에서 setCapture() 명령 사용여부
			@param {Number} [htOption.nThreshold=0] 드래그가 시작되기 위한 최소 역치값(px)
		@example
			var oDragArea = new jindo.DragArea(document, {
				"sClassName" : 'dragable', // (String) 상위 기준 엘리먼트의 자식 중 해당 클래스명을 가진 모든 엘리먼트는 Drag 가능하게 된다. 
				"bFlowOut" : true, // (Boolean) 드래그될 엘리먼트가 상위 기준 엘리먼트의 영역을 벗어날 수 있는지의 여부. 상위 엘리먼트의 크기가 드래그되는 객체보다 크거나 같아야지만 동작하도록 수정. 작은 경우 document사이즈로 제한한다.
				"bSetCapture" : true, //ie에서 setCapture 사용여부
				"nThreshold" : 0 // (Number) 드래그가 시작되기 위한 최소 역치값(px) 
			}).attach({
				handleDown : function(oCustomEvent) {
					//드래그될 handle 에 마우스가 클릭되었을 때 발생
					//전달되는 이벤트 객체 oCustomEvent = {
					//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트 (mousedown된 엘리먼트)
					//	elDrag : (HTMLElement) 실제로 드래그 될 엘리먼트 (핸들을 드래그하여 레이어 전체를 드래그되도록 하고 싶으면 이 값을 설정한다. 아래 예제코드 참고)
					//	weEvent : (jindo.$Event) mousedown시 발생되는 jindo.$Event 객체
					//};
					//oCustomEvent.stop(); 이 수행되면 dragStart 이벤트가 발생하지 않고 중단된다.
				},
				dragStart : function(oCustomEvent) {
					//드래그가 시작될 때 발생 (마우스 클릭 후 첫 움직일 때 한 번)
					//전달되는 이벤트 객체 oCustomEvent = {
					//	elArea : (HTMLElement) 기준 엘리먼트
					//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트 (mousedown된 엘리먼트)
					//	elDrag : (HTMLElement) 실제로 드래그 될 엘리먼트 (핸들을 드래그하여 레이어 전체를 드래그되도록 하고 싶으면 이 값을 설정한다. 아래 예제코드 참고)
					//	htDiff : (HashTable) handledown된 좌표와 dragstart된 좌표의 차이 htDiff.nPageX, htDiff.nPageY
					//	weEvent : (jindo.$Event) 마우스 이동 중 (mousemove) 발생되는 jindo.$Event 객체
					//};
					//oCustomEvent.stop(); 이 수행되면 뒤따르는 beforedrag 이벤트가 발생하지 않고 중단된다.
				},
				beforeDrag : function(oCustomEvent) {
					//드래그가 시작되고 엘리먼트가 이동되기 직전에 발생 (이동중 beforedrag, drag 순으로 연속적으로 발생)
					//전달되는 이벤트 객체 oCustomEvent = {
					//	elArea : (HTMLElement) 기준 엘리먼트
					//	elFlowOut : (HTMLElement) bFlowOut 옵션이 적용될 상위 기준 엘리먼트 (변경가능)
					//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트 (mousedown된 엘리먼트)
					//	elDrag : (HTMLElement) 실제로 드래그 될 엘리먼트
					//	weEvent : (jindo.$Event) 마우스 이동 중 (mousemove) 발생되는 jindo.$Event 객체
					//	nX : (Number) 드래그 될 x좌표. 이 좌표로 엘리먼트가 이동 된다.
					//	nY : (Number) 드래그 될 y좌표. 이 좌표로 엘리먼트가 이동 된다.
					//	nGapX : (Number) 드래그가 시작된 x좌표와의 차이
					//	nGapY : (Number) 드래그가 시작된 y좌표와의 차이
					//};
					//oCustomEvent.stop(); 이 수행되면 뒤따르는 drag 이벤트가 발생하지 않고 중단된다.
					//oCustomEvent.nX = null; // 가로로는 안 움직이게
					//oCustomEvent.nX = Math.round(oCustomEvent.nX / 20) * 20;
					//oCustomEvent.nY = Math.round(oCustomEvent.nY / 20) * 20;
					//if (oCustomEvent.nX < 0) oCustomEvent.nX = 0;
					//if (oCustomEvent.nY < 0) oCustomEvent.nY = 0;
				},
				drag : function(oCustomEvent) {
					//드래그 엘리먼트가 이동하는 중에 발생 (이동중 beforedrag, drag 순으로 연속적으로 발생)
					//전달되는 이벤트 객체 oCustomEvent = {
					//	elArea : (HTMLElement) 기준 엘리먼트
					//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트 (mousedown된 엘리먼트)
					//	elDrag : (HTMLElement) 실제로 드래그 될 엘리먼트
					//	weEvent : (jindo.$Event) 마우스 이동 중 (mousemove) 발생되는 jindo.$Event 객체
					//	nX : (Number) 드래그 된 x좌표. 이 좌표로 엘리먼트가 이동 된다.
					//	nY : (Number) 드래그 된 y좌표. 이 좌표로 엘리먼트가 이동 된다.
					//	nGapX : (Number) 드래그가 시작된 x좌표와의 차이
					//	nGapY : (Number) 드래그가 시작된 y좌표와의 차이
					//};
				},
				dragEnd : function(oCustomEvent) {
					//드래그(엘리먼트 이동)가 완료된 후에 발생 (mouseup시 1회 발생. 뒤이어 handleup 발생)
					//전달되는 이벤트 객체 oCustomEvent = {
					//	elArea : (HTMLElement) 기준 엘리먼트
					//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트 (mousedown된 엘리먼트)
					//	elDrag : (HTMLElement) 실제로 드래그 된 엘리먼트
					//	bInterupted : (Boolean) 드래그중 stopDragging() 호출로 강제적으로 드래그가 종료되었는지의 여부
					//	nX : (Number) 드래그 된 x좌표.
					//	nY : (Number) 드래그 된 y좌표.
					//}
				},
				handleUp : function(oCustomEvent) {
					//드래그된 handle에 마우스 클릭이 해제됬을 때 발생
					//전달되는 이벤트 객체 oCustomEvent = {
					//	elHandle : (HTMLElement) 옵션의 className으로 설정된 드래그 된 핸들 엘리먼트 (mousedown된 엘리먼트)
					//	elDrag : (HTMLElement) 실제로 드래그 된 엘리먼트
					//	weEvent : (jindo.$Event) mouseup시 발생되는 jindo.$Event 객체 
					//};
				}
			});
	**/
	$init : function(el, htOption) {
		this.option({
			sClassName : 'draggable',
			bFlowOut : true,
			bSetCapture : true, //ie에서 bSetCapture 사용여부
			nThreshold : 0
		});
		
		this.option(htOption || {});
		
		this._el = el;
		
		this._bIE = jindo.$Agent().navigator().ie;
		
		this._htDragInfo = {
			"bIsDragging" : false,
			"bPrepared" : false, //mousedown이 되었을때 true, 이동중엔 false
			"bHandleDown" : false,
			"bForceDrag" : false
		};

		this._wfOnMouseDown = jindo.$Fn(this._onMouseDown, this);
		this._wfOnMouseMove = jindo.$Fn(this._onMouseMove, this);
		this._wfOnMouseUp = jindo.$Fn(this._onMouseUp, this);
		
		this._wfOnDragStart = jindo.$Fn(this._onDragStart, this);
		this._wfOnSelectStart = jindo.$Fn(this._onSelectStart, this);
		
		this.activate();
	},
	
	_findDraggableElement : function(el) {
		if (el.nodeType === 1 && jindo.$$.test(el, "input[type=text], textarea, select")){
			return null;
		} 
		
		var self = this;
		var sClass = '.' + this.option('sClassName');
		
		var isChildOfDragArea = function(el) {
			if (el === null) {
				return false;
			}
			if (self._el === document || self._el === el) {
				return true;
			} 
			return jindo.$Element(self._el).isParentOf(el);
		};
		
		var elReturn = jindo.$$.test(el, sClass) ? el : jindo.$$.getSingle('! ' + sClass, el);
		if (!isChildOfDragArea(elReturn)) {
			elReturn = null;
		}
		return elReturn;
	},
	
	/**
		레이어가 현재 드래그 되고 있는지 여부를 가져온다.
		
		@method isDragging
		@return {Boolean} 레이어가 현재 드래그 되고 있는지 여부
	**/
	isDragging : function() {
		var htDragInfo = this._htDragInfo; 
		return htDragInfo.bIsDragging && !htDragInfo.bPrepared;
	},
	
	/**
		드래그를 강제 종료시킨다.
		
		@method stopDragging
		@return {this}
	**/
	stopDragging : function() {
		this._stopDragging(true);
		return this;
	},
	
	_stopDragging : function(bInterupted) {
		this._wfOnMouseMove.detach(document, 'mousemove');
		this._wfOnMouseUp.detach(document, 'mouseup');
		
		if (this.isDragging()) {
			var htDragInfo = this._htDragInfo,
				welDrag = jindo.$Element(htDragInfo.elDrag);
			
			htDragInfo.bIsDragging = false;
			htDragInfo.bForceDrag = false;
			htDragInfo.bPrepared = false;
			
			if(this._bIE && this._elSetCapture) {
				this._elSetCapture.releaseCapture();
				this._elSetCapture = null;
			}
			
			/**
				드래그(엘리먼트 이동)가 완료된 후에 발생 (mouseup시 1회 발생. 뒤이어 handleup 발생)
				
				@event dragEnd
				@param {String} sType 커스텀이벤트명
				@param {HTMLElement} elArea 기준 엘리먼트
				@param {HTMLElement} elHandle 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
				@param {HTMLElement} elDrag 실제로 드래그 될 엘리먼트
				@param {Boolean} bInterupted 드래그중 stopDragging() 호출로 강제적으로 드래그가 종료되었는지의 여부
				@param {Number} nX 드래그 된 x좌표.
				@param {Number} nY 드래그 된 y좌표.
				@example
					// 커스텀이벤트 핸들링 예제
					oDragArea.attach("dragEnd", function(oCustomEvent) {
						//~~
					});
			**/
			this.fireEvent('dragEnd', {
				"elArea" : this._el,
				"elHandle" : htDragInfo.elHandle,
				"elDrag" : htDragInfo.elDrag,
				"nX" : parseInt(welDrag.css("left"), 10) || 0,
				"nY" : parseInt(welDrag.css("top"), 10) || 0,
				"bInterupted" : bInterupted
			});
		}
	},
	
	/**
		DragArea 동작을 위한 mousedown, dragstart, selectstart 이벤트를 attach 한다. 
	**/
	_onActivate : function() {
		this._wfOnMouseDown.attach(this._el, 'mousedown');
		this._wfOnDragStart.attach(this._el, 'dragstart'); // for IE
		this._wfOnSelectStart.attach(this._el, 'selectstart'); // for IE	
	},
	
	/**
		DragArea 동작을 위한 mousedown, dragstart, selectstart 이벤트를 detach 한다. 
	**/
	_onDeactivate : function() {
		this._wfOnMouseDown.detach(this._el, 'mousedown');
		this._wfOnDragStart.detach(this._el, 'dragstart'); // for IE
		this._wfOnSelectStart.detach(this._el, 'selectstart'); // for IE
	},
	
	/**
		이벤트를 attach한다.
		
		@method attachEvent
		@deprecated activate() 사용권장
	**/
	attachEvent : function() {
		this.activate();
	},
	
	/**
		이벤트를 detach한다.
		
		@method detachEvent
		@deprecated deactivate() 사용권장
	**/
	detachEvent : function() {
		this.deactivate();
	},
	
	/**
		이벤트의 attach 여부를 가져온다.
		
		@method isEventAttached
		@deprecated isActivating() 사용권장
	**/
	isEventAttached : function() {
		return this.isActivating();
	},
	
	/**
		마우스다운이벤트와 관계없이 지정된 엘리먼트를 드래그 시작한다.
		
		@method startDragging
		@param {HTMLElement} el 드래그할 엘리먼트
		@return {Boolean} 드래그시작여부
	**/
	startDragging : function(el) {
		var elDrag = this._findDraggableElement(el);
		if (elDrag) {
			this._htDragInfo.bForceDrag = true;
			this._htDragInfo.bPrepared = true;
			this._htDragInfo.elHandle = elDrag;
			this._htDragInfo.elDrag = elDrag;
			
			this._wfOnMouseMove.attach(document, 'mousemove');
			this._wfOnMouseUp.attach(document, 'mouseup');
			return true;
		}
		return false;
	},
	
	_onMouseDown : function(we) {
		
		var mouse = we.mouse(true);
		
		/* IE에서 네이버 툴바의 마우스제스처 기능 사용시 우클릭하면 e.mouse().right가 false로 들어오므로 left값으로만 처리하도록 수정 */
		if (!mouse.left || mouse.right || mouse.scrollbar) {
			this._stopDragging(true);
			return;
		}
		
		// 드래그 할 객체 찾기
		var el = this._findDraggableElement(we.element);
		if (el) {
			var oPos = we.pos(),
				htDragInfo = this._htDragInfo;
			
			htDragInfo.bHandleDown = true;
			htDragInfo.bPrepared = true;
			htDragInfo.nButton = we._event.button;
			htDragInfo.elHandle = el;
			htDragInfo.elDrag = el;
			htDragInfo.nPageX = oPos.pageX;
			htDragInfo.nPageY = oPos.pageY;
			/**
				드래그될 handle 에 마우스가 클릭되었을 때 발생
				
				@event handleDown
				@param {String} sType 커스텀이벤트명
				@param {HTMLElement} elHandle 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
				@param {HTMLElement} elDrag 실제로 드래그 될 엘리먼트
				@param {jindo.$Event} weEvent mousedown시 발생되는 jindo.$Event 객체
				@param {Function} stop dragStart 이벤트를 발생시키지 않고 중단시킬때 호출
				@example
					// 커스텀이벤트 핸들링 예제
					oDragArea.attach("handleDown", function(oCustomEvent){
						// 뒤따르는 dragStart 이벤트가 발생하지 않고 중단하고 싶은 경우
						oCustomEvent.stop();
					});
			**/
			if (this.fireEvent('handleDown', { 
				elHandle : el, 
				elDrag : el, 
				weEvent : we 
			})) {
				this._wfOnMouseMove.attach(document, 'mousemove');
			} 
			this._wfOnMouseUp.attach(document, 'mouseup');
			
			we.stop(jindo.$Event.CANCEL_DEFAULT);			
		}
	},
	
	_onMouseMove : function(we) {
		var htDragInfo = this._htDragInfo,
			htParam, htRect,
			oPos = we.pos(), 
			htGap = {
				"nX" : oPos.pageX - htDragInfo.nPageX,
				"nY" : oPos.pageY - htDragInfo.nPageY
			};

		if (htDragInfo.bPrepared) {
			var nThreshold = this.option('nThreshold'),
				htDiff = {};
			
			if (!htDragInfo.bForceDrag && nThreshold) {
				htDiff.nPageX = oPos.pageX - htDragInfo.nPageX;
				htDiff.nPageY = oPos.pageY - htDragInfo.nPageY;
				var nDistance = Math.sqrt(htDiff.nPageX * htDiff.nPageX + htDiff.nPageY * htDiff.nPageY);
				if (nThreshold > nDistance){
					return;
				} 
			}

			if (this._bIE && this.option("bSetCapture")) {
				this._elSetCapture = (this._el === document) ? document.body : this._findDraggableElement(we.element);
				if (this._elSetCapture) {
					this._elSetCapture.setCapture(false);
				}
			}
			 
			htParam = {
				elArea : this._el,
				elHandle : htDragInfo.elHandle,
				elDrag : htDragInfo.elDrag,
				htDiff : htDiff, //nThreshold가 있는경우 htDiff필요
				weEvent : we //jindo.$Event
			};
			
				
			htDragInfo.bIsDragging = true;
			htDragInfo.bPrepared = false;
			/**
				드래그가 시작될 때 발생 (마우스 클릭 후 첫 움직일 때 한 번)
				
				@event dragStart
				@param {String} sType 커스텀이벤트명
				@param {HTMLElement} elArea 기준 엘리먼트
				@param {HTMLElement} elHandle 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
				@param {HTMLElement} elDrag 실제로 드래그 될 엘리먼트
				@param {Object} htDiff handledown된 좌표와 dragstart된 좌표의 차이
				@param {Number} htDiff.nPageX 가로 좌표
				@param {Number} htDiff.nPageY 세로 좌표
				@param {jindo.$Event} weEvent mousedown시 발생되는 jindo.$Event 객체
				@param {Function} stop beforedrag 이벤트를 발생시키지 않고 중단시킬때 호출
				@example
					// 커스텀이벤트 핸들링 예제
					oDragArea.attach("dragStart", function(oCustomEvent){
						// 뒤따르는 beforedrag 이벤트가 발생하지 않고 중단하고 싶은 경우
						oCustomEvent.stop();
					});
			**/
			if (this.fireEvent('dragStart', htParam)) {
				var welDrag = jindo.$Element(htParam.elDrag),
					htOffset = welDrag.offset();
				
				htDragInfo.elHandle = htParam.elHandle;
				htDragInfo.elDrag = htParam.elDrag;
				htDragInfo.nX = parseInt(welDrag.css('left'), 10) || 0;
				htDragInfo.nY = parseInt(welDrag.css('top'), 10) || 0;
				htDragInfo.nClientX = htOffset.left + welDrag.width() / 2;
				htDragInfo.nClientY = htOffset.top + welDrag.height() / 2;
			} else {
				htDragInfo.bPrepared = true;
				return;
			}
		} 
				
		if (htDragInfo.bForceDrag) {
			htGap.nX = oPos.clientX - htDragInfo.nClientX;
			htGap.nY = oPos.clientY - htDragInfo.nClientY;
		}
		
		htParam = {
			"elArea" : this._el,
			"elFlowOut" : htDragInfo.elDrag.parentNode, 
			"elHandle" : htDragInfo.elHandle,
			"elDrag" : htDragInfo.elDrag,
			"weEvent" : we, 		 //jindo.$Event
			"nX" : htDragInfo.nX + htGap.nX,
			"nY" : htDragInfo.nY + htGap.nY,
			"nGapX" : htGap.nX,
			"nGapY" : htGap.nY
		};
		
		/**
			드래그가 시작되고 엘리먼트가 이동되기 직전에 발생 (이동중 beforedrag, drag 순으로 연속적으로 발생)
			
			@event beforeDrag
			@param {String} sType 커스텀이벤트명
			@param {HTMLElement} elArea 기준 엘리먼트
			@param {HTMLElement} elFlowOut bFlowOut 옵션이 적용될 상위 기준 엘리먼트 (변경가능)
			@param {HTMLElement} elHandle 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
			@param {HTMLElement} elDrag 실제로 드래그 될 엘리먼트
			@param {Number} nX 드래그 될 x좌표. 이 좌표로 엘리먼트가 이동 된다.
			@param {Number} nY 드래그 될 y좌표. 이 좌표로 엘리먼트가 이동 된다.
			@param {Number} nGapX 드래그가 시작된 x좌표와의 차이
			@param {Number} nGapY 드래그가 시작된 y좌표와의 차이
			@param {jindo.$Event} weEvent mousedown시 발생되는 jindo.$Event 객체
			@param {Function} stop drag 이벤트를 발생시키지 않고 중단시킬때 호출
			@example
				// 커스텀이벤트 핸들링 예제
				oDragArea.attach("beforeDrag", function(oCustomEvent) {
					// 뒤따르는 drag 이벤트가 발생하지 않고 중단하고 싶은 경우
					oCustomEvent.stop();
					
					// 가로로는 안 움직이게 않게 할 경우
					oCustomEvent.nX = null;
					
					// Grid 좌표로 이동하게 할 경우
					oCustomEvent.nX = Math.round(oCustomEvent.nX / 20) * 20;
					oCustomEvent.nY = Math.round(oCustomEvent.nY / 20) * 20;
					
					if(oCustomEvent.nX < 0){
						oCustomEvent.nX = 0;
					}
					
					if(oCustomEvent.nY < 0){
						oCustomEvent.nY = 0;
					}
				});
		**/
		if (this.fireEvent('beforeDrag', htParam)) {
			var elDrag = htDragInfo.elDrag;
			if (this.option('bFlowOut') === false) {
				var elParent = htParam.elFlowOut,
					aSize = [ elDrag.offsetWidth, elDrag.offsetHeight ],
					nScrollLeft = 0, nScrollTop = 0;
					
				if (elParent == document.body) {
					nScrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
					nScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
					elParent = null;
				}
				
				if (elParent && aSize[0] <= elParent.scrollWidth && aSize[1] <= elParent.scrollHeight) {
					htRect = { 
						nWidth : elParent.clientWidth, 
						nHeight : elParent.clientHeight
					};	
					nScrollLeft = elParent.scrollLeft;
					nScrollTop = elParent.scrollTop;
				} else {
					var	htClientSize = jindo.$Document().clientSize();
						
					htRect = {
						nWidth : htClientSize.width, 
						nHeight : htClientSize.height
					};
				}
	
				if (htParam.nX !== null) {
					htParam.nX = Math.max(htParam.nX, nScrollLeft);
					htParam.nX = Math.min(htParam.nX, htRect.nWidth - aSize[0] + nScrollLeft);
				}
				
				if (htParam.nY !== null) {
					htParam.nY = Math.max(htParam.nY, nScrollTop);
					htParam.nY = Math.min(htParam.nY, htRect.nHeight - aSize[1] + nScrollTop);
				}
			}
			if (htParam.nX !== null) {
				elDrag.style.left = htParam.nX + 'px';
			}
			if (htParam.nY !== null) {
				elDrag.style.top = htParam.nY + 'px';
			}
			
			/**
				드래그 엘리먼트가 이동하는 중에 발생 (이동중 beforedrag, drag 순으로 연속적으로 발생)
				
				@event drag
				@param {String} sType 커스텀이벤트명
				@param {HTMLElement} elArea 기준 엘리먼트
				@param {HTMLElement} elHandle 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
				@param {HTMLElement} elDrag 실제로 드래그 될 엘리먼트
				@param {Number} nX 드래그 된 x좌표.
				@param {Number} nY 드래그 된 y좌표.
				@param {Number} nGapX 드래그가 시작된 x좌표와의 차이
				@param {Number} nGapY 드래그가 시작된 y좌표와의 차이
				@param {jindo.$Event} weEvent mousedown시 발생되는 jindo.$Event 객체
				@example
					//커스텀이벤트 핸들링 예제
					oDragArea.attach("drag", function(oCustomEvent) {
						//~~
					});
			**/
			this.fireEvent('drag', htParam);
		}else{
			htDragInfo.bIsDragging = false;
		}
	},
	
	_onMouseUp : function(we) {
		this._stopDragging(false);
		
		var htDragInfo = this._htDragInfo;
		htDragInfo.bHandleDown = false;
		/**
			드래그된 handle에 마우스 클릭이 해제됬을 때 발생
			
			@event handleUp
			@param {String} sType 커스텀이벤트명
			@param {HTMLElement} elHandle 옵션의 className으로 설정된 드래그 될 핸들 엘리먼트
			@param {HTMLElement} elDrag 실제로 드래그 될 엘리먼트
			@param {jindo.$Event} weEvent mousedown시 발생되는 jindo.$Event 객체
			@example
				// 커스텀이벤트 핸들링 예제
				oDragArea.attach("handleUp", function(oCustomEvent) {
					//~~
				});
		**/
		this.fireEvent("handleUp", {
			weEvent : we,
			elHandle : htDragInfo.elHandle,
			elDrag : htDragInfo.elDrag 
		});
	},
	
	_onDragStart : function(we) {
		if (this._findDraggableElement(we.element)) { 
			we.stop(jindo.$Event.CANCEL_DEFAULT); 
		}
	},
	
	_onSelectStart : function(we) {
		if (this.isDragging() || this._findDraggableElement(we.element)) {
			we.stop(jindo.$Event.CANCEL_DEFAULT);	
		}
	}
	
}).extend(jindo.UIComponent);/**
	@version 1.3.0
**/

/*
	TERMS OF USE - EASING EQUATIONS
	Open source under the BSD License.
	Copyright (c) 2001 Robert Penner, all rights reserved.
**/

/**
	수치의 중간값을 쉽게 얻을 수 있게 하는 static 컴포넌트
	새로운 이펙트 함수를 생성한다.
	
	@class jindo.Effect
	@static
	@param {Function} fEffect 0~1 사이의 숫자를 인자로 받아 정해진 공식에 따라 0~1 사이의 값을 리턴하는 함수
	@return {Function} 이펙트 함수. 이 함수는 시작값과 종료값을 입력하여 특정 시점에 해당하는 값을 구하는 타이밍 함수를 생성한다.
	
	@keyword effect, 효과, animation, 애니메이션
**/
jindo.Effect = function(fEffect) {
	if (this instanceof arguments.callee) {
		throw new Error("You can't create a instance of this");
	}
	
	var rxNumber = /^(\-?[0-9\.]+)(%|px|pt|em)?$/,
		rxRGB = /^rgb\(([0-9]+)\s?,\s?([0-9]+)\s?,\s?([0-9]+)\)$/i,
		rxHex = /^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,
		rx3to6 = /^#([0-9A-F])([0-9A-F])([0-9A-F])$/i;
	
	var getUnitAndValue = function(v) {
		var nValue = v, sUnit;
		
		if (rxNumber.test(v)) {
			nValue = parseFloat(v); 
			sUnit = RegExp.$2 || "";
		} else if (rxRGB.test(v)) {
			nValue = [parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)];
			sUnit = 'color';
		} else if (rxHex.test(v = v.replace(rx3to6, '#$1$1$2$2$3$3'))) {
			nValue = [parseInt(RegExp.$1, 16), parseInt(RegExp.$2, 16), parseInt(RegExp.$3, 16)];
			sUnit = 'color';
		} 
				
		return { 
			nValue : nValue, 
			sUnit : sUnit 
		};
	};
	
	return function(nStart, nEnd) {
		var sUnit;
		if (arguments.length > 1) {
			nStart = getUnitAndValue(nStart);
			nEnd = getUnitAndValue(nEnd);
			sUnit = nEnd.sUnit;
		} else {
			nEnd = getUnitAndValue(nStart);
			nStart = null;
			sUnit = nEnd.sUnit;
		} 
		
		// 두개의 단위가 다르면
		if (nStart && nEnd && nStart.sUnit != nEnd.sUnit) {
			throw new Error('unit error');
		}
		
		nStart = nStart && nStart.nValue;
		nEnd = nEnd && nEnd.nValue;
		
		var fReturn = function(p) {
			var nValue = fEffect(p),
				getResult = function(s, d) {
					return (d - s) * nValue + s + sUnit; 
				};
			
			if (sUnit == 'color') {
				var r = Math.max(0, Math.min(255, parseInt(getResult(nStart[0], nEnd[0]), 10))) << 16;
				r |= Math.max(0, Math.min(255, parseInt(getResult(nStart[1], nEnd[1]), 10))) << 8;
				r |= Math.max(0, Math.min(255, parseInt(getResult(nStart[2], nEnd[2]), 10)));
				
				r = r.toString(16).toUpperCase();
				for (var i = 0; 6 - r.length; i++) {
					r = '0' + r;
				}
					
				return '#' + r;
			}
			return getResult(nStart, nEnd);
		};
		
		if (nStart === null) {
			fReturn.setStart = function(s) {
				s = getUnitAndValue(s);
				
				if (s.sUnit != sUnit) {
					throw new Error('unit eror');
				}
				nStart = s.nValue;
			};
		}
		return fReturn;
	};
};

/**
	linear 이펙트 함수
	
	@method linear
	@static
**/
jindo.Effect.linear = jindo.Effect(function(s) {
	return s;
});

/**
	easeInSine 이펙트 함수
	
	@method easeInSine
	@static
**/
jindo.Effect.easeInSine = jindo.Effect(function(s) {
	return (s == 1) ? 1 : -Math.cos(s * (Math.PI / 2)) + 1;
});
/**
	easeOutSine 이펙트 함수
	
	@method easeOutSine
	@static
**/
jindo.Effect.easeOutSine = jindo.Effect(function(s) {
	return Math.sin(s * (Math.PI / 2));
});
/**
	easeInOutSine 이펙트 함수
	
	@method easeInOutSine
	@static
**/
jindo.Effect.easeInOutSine = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeInSine(0, 1)(2 * s) * 0.5 : jindo.Effect.easeOutSine(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});
/**
	easeOutInSine 이펙트 함수
	
	@method easeOutInSine
	@static
**/
jindo.Effect.easeOutInSine = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeOutSine(0, 1)(2 * s) * 0.5 : jindo.Effect.easeInSine(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});

/**
	easeInQuad 이펙트 함수
	
	@method easeInQuad
	@static
**/
jindo.Effect.easeInQuad = jindo.Effect(function(s) {
	return s * s;
});
/**
	easeOutQuad 이펙트 함수
	
	@method easeOutQuad
	@static
**/
jindo.Effect.easeOutQuad = jindo.Effect(function(s) {
	return -(s * (s - 2));
});
/**
	easeInOutQuad 이펙트 함수
	
	@method easeInOutQuad
	@static
**/
jindo.Effect.easeInOutQuad = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeInQuad(0, 1)(2 * s) * 0.5 : jindo.Effect.easeOutQuad(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});
/**
	easeOutInQuad 이펙트 함수
	
	@method easeOutInQuad
	@static
**/
jindo.Effect.easeOutInQuad = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeOutQuad(0, 1)(2 * s) * 0.5 : jindo.Effect.easeInQuad(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});

/**
	easeInCubic 이펙트 함수
	
	@method easeInCubic
	@static
**/
jindo.Effect.easeInCubic = jindo.Effect(function(s) {
	return Math.pow(s, 3);
});
/**
	easeOutCubic 이펙트 함수
	
	@method easeOutCubic
	@static
**/
jindo.Effect.easeOutCubic = jindo.Effect(function(s) {
	return Math.pow((s - 1), 3) + 1;
});
/**
	easeInOutCubic 이펙트 함수
	
	@method easeInOutCubic
	@static
**/
jindo.Effect.easeInOutCubic = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeIn(0, 1)(2 * s) * 0.5 : jindo.Effect.easeOut(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});
/**
	easeOutInCubic 이펙트 함수
	
	@method easeOutInCubic
	@static
**/
jindo.Effect.easeOutInCubic = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeOut(0, 1)(2 * s) * 0.5 : jindo.Effect.easeIn(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});

/**
	easeInQuart 이펙트 함수
	
	@method easeInQuart
	@static
**/
jindo.Effect.easeInQuart = jindo.Effect(function(s) {
	return Math.pow(s, 4);
});
/**
	easeOutQuart 이펙트 함수
	
	@method easeOutQuart
	@static
**/
jindo.Effect.easeOutQuart = jindo.Effect(function(s) {
	return -(Math.pow(s - 1, 4) - 1);
});
/**
	easeInOutQuart 이펙트 함수
	
	@method easeInOutQuart
	@static
**/
jindo.Effect.easeInOutQuart = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeInQuart(0, 1)(2 * s) * 0.5 : jindo.Effect.easeOutQuart(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});
/**
	easeOutInQuart 이펙트 함수
	
	@method easeOutInQuart
	@static
**/
jindo.Effect.easeOutInQuart = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeOutQuart(0, 1)(2 * s) * 0.5 : jindo.Effect.easeInQuart(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});

/**
	easeInQuint 이펙트 함수
	
	@method easeInQuint
	@static
**/
jindo.Effect.easeInQuint = jindo.Effect(function(s) {
	return Math.pow(s, 5);
});
/**
	easeOutQuint 이펙트 함수
	
	@method easeOutQuint
	@static
**/
jindo.Effect.easeOutQuint = jindo.Effect(function(s) {
	return Math.pow(s - 1, 5) + 1;
});
/**
	easeInOutQuint 이펙트 함수
	
	@method easeInOutQuint
	@static
**/
jindo.Effect.easeInOutQuint = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeInQuint(0, 1)(2 * s) * 0.5 : jindo.Effect.easeOutQuint(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});
/**
	easeOutInQuint 이펙트 함수
	
	@method easeOutInQuint
	@static
**/
jindo.Effect.easeOutInQuint = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeOutQuint(0, 1)(2 * s) * 0.5 : jindo.Effect.easeInQuint(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});

/**
	easeInCircle 이펙트 함수
	
	@method easeInCircle
	@static
**/
jindo.Effect.easeInCircle = jindo.Effect(function(s) {
	return -(Math.sqrt(1 - (s * s)) - 1);
});
/**
	easeOutCircle 이펙트 함수
	
	@method easeOutCircle
	@static
**/
jindo.Effect.easeOutCircle = jindo.Effect(function(s) {
	return Math.sqrt(1 - (s - 1) * (s - 1));
});
/**
	easeInOutCircle 이펙트 함수
	
	@method easeInOutCircle
	@static
**/
jindo.Effect.easeInOutCircle = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeInCircle(0, 1)(2 * s) * 0.5 : jindo.Effect.easeOutCircle(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});
/**
	easeOutInCircle 이펙트 함수
	
	@method easeOutInCircle
	@static
**/
jindo.Effect.easeOutInCircle = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeOutCircle(0, 1)(2 * s) * 0.5 : jindo.Effect.easeInCircle(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});

/**
	easeInBack 이펙트 함수
	
	@method easeInBack
	@static
**/
jindo.Effect.easeInBack = jindo.Effect(function(s) {
	var n = 1.70158;
	return (s == 1) ? 1 : (s / 1) * (s / 1) * ((1 + n) * s - n);
});
/**
	easeOutBack 이펙트 함수
	
	@method easeOutBack
	@static
**/
jindo.Effect.easeOutBack = jindo.Effect(function(s) {
	var n = 1.70158;
	return (s === 0) ? 0 : (s = s / 1 - 1) * s * ((n + 1) * s + n) + 1;
});
/**
	easeInOutBack 이펙트 함수
	
	@method easeInOutBack
	@static
**/
jindo.Effect.easeInOutBack = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeInBack(0, 1)(2 * s) * 0.5 : jindo.Effect.easeOutBack(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});

/**
	easeInElastic 이펙트 함수
	
	@method easeInElastic
	@static
**/
jindo.Effect.easeInElastic = jindo.Effect(function(s) {
	var p = 0, a = 0, n;
	if (s === 0) {
		return 0;
	}
	if ((s/=1) == 1) {
		return 1;
	}
	if (!p) {
		p = 0.3;
	}
	if (!a || a < 1) { 
		a = 1; n = p / 4; 
	} else {
		n = p / (2 * Math.PI) * Math.asin(1 / a);
	}
	return -(a * Math.pow(2, 10 * (s -= 1)) * Math.sin((s - 1) * (2 * Math.PI) / p));
});

/**
	easeOutElastic 이펙트 함수
	
	@method easeOutElastic
	@static
**/
jindo.Effect.easeOutElastic = jindo.Effect(function(s) {
	var p = 0, a = 0, n;
	if (s === 0) {
		return 0;
	}
	if ((s/=1) == 1) {
		return 1;
	}
	if (!p) {
		p = 0.3;
	}
	if (!a || a < 1) { 
		a = 1; n = p / 4; 
	} else {
		n = p / (2 * Math.PI) * Math.asin(1 / a);
	}
	return (a * Math.pow(2, -10 * s) * Math.sin((s - n) * (2 * Math.PI) / p ) + 1);
});
/**
	easeInOutElastic 이펙트 함수
	
	@method easeInOutElastic
	@static
**/
jindo.Effect.easeInOutElastic = jindo.Effect(function(s) {
	var p = 0, a = 0, n;
	if (s === 0) {
		return 0;
	}
	if ((s/=1/2) == 2) {
		return 1;
	}
	if (!p) {
		p = (0.3 * 1.5);
	}
	if (!a || a < 1) { 
		a = 1; n = p / 4; 
	} else {
		n = p / (2 * Math.PI) * Math.asin(1 / a);
	}
	if (s < 1) {
		return -0.5 * (a * Math.pow(2, 10 * (s -= 1)) * Math.sin( (s - n) * (2 * Math.PI) / p ));
	}
	return a * Math.pow(2, -10 * (s -= 1)) * Math.sin( (s - n) * (2 * Math.PI) / p ) * 0.5 + 1;
});

/**
	easeOutBounce 이펙트 함수
	
	@method easeOutBounce
	@static
**/
jindo.Effect.easeOutBounce = jindo.Effect(function(s) {
	if (s < (1 / 2.75)) {
		return (7.5625 * s * s);
	} else if (s < (2 / 2.75)) {
		return (7.5625 * (s -= (1.5 / 2.75)) * s + 0.75);
	} else if (s < (2.5 / 2.75)) {
		return (7.5625 * (s -= (2.25 / 2.75)) * s + 0.9375);
	} else {
		return (7.5625 * (s -= (2.625 / 2.75)) * s + 0.984375);
	} 
});
/**
	easeInBounce 이펙트 함수
	
	@method easeInBounce
	@static
**/
jindo.Effect.easeInBounce = jindo.Effect(function(s) {
	return 1 - jindo.Effect.easeOutBounce(0, 1)(1 - s);
});
/**
	easeInOutBounce 이펙트 함수
	
	@method easeInOutBounce
	@static
**/
jindo.Effect.easeInOutBounce = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeInBounce(0, 1)(2 * s) * 0.5 : jindo.Effect.easeOutBounce(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});

/**
	easeInExpo 이펙트 함수
	
	@method easeInExpo
	@static
**/
jindo.Effect.easeInExpo = jindo.Effect(function(s) {
	return (s === 0) ? 0 : Math.pow(2, 10 * (s - 1));
});
/**
	easeOutExpo 이펙트 함수
	
	@method easeOutExpo
	@static
**/
jindo.Effect.easeOutExpo = jindo.Effect(function(s) {
	return (s == 1) ? 1 : -Math.pow(2, -10 * s / 1) + 1;
});
/**
	easeInOutExpo 이펙트 함수
	
	@method easeInOutExpo
	@static
**/
jindo.Effect.easeInOutExpo = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeInExpo(0, 1)(2 * s) * 0.5 : jindo.Effect.easeOutExpo(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});
/**
	easeOutExpo 이펙트 함수
	
	@method easeOutInExpo
	@static
**/
jindo.Effect.easeOutInExpo = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.easeOutExpo(0, 1)(2 * s) * 0.5 : jindo.Effect.easeInExpo(0, 1)((2 * s) - 1) * 0.5 + 0.5;
});

/**
	Cubic-Bezier curve
	@method _cubicBezier
	@private
	@param {Number} x1
	@param {Number} y1
	@param {Number} x2
	@param {Number} y2
	@see http://www.netzgesta.de/dev/cubic-bezier-timing-function.html 
**/
jindo.Effect._cubicBezier = function(x1, y1, x2, y2){
	return function(t){
		var cx = 3.0 * x1, 
	    	bx = 3.0 * (x2 - x1) - cx, 
	    	ax = 1.0 - cx - bx, 
	    	cy = 3.0 * y1, 
	    	by = 3.0 * (y2 - y1) - cy, 
	    	ay = 1.0 - cy - by;
		
	    function sampleCurveX(t) {
	    	return ((ax * t + bx) * t + cx) * t;
	    }
	    function sampleCurveY(t) {
	    	return ((ay * t + by) * t + cy) * t;
	    }
	    function sampleCurveDerivativeX(t) {
	    	return (3.0 * ax * t + 2.0 * bx) * t + cx;
	    }
	    function solveCurveX(x,epsilon) {
	    	var t0, t1, t2, x2, d2, i;
	    	for (t2 = x, i = 0; i<8; i++) {
	    		x2 = sampleCurveX(t2) - x; 
	    		if (Math.abs(x2) < epsilon) {
	    			return t2;
	    		} 
	    		d2 = sampleCurveDerivativeX(t2); 
	    		if(Math.abs(d2) < 1e-6) {
	    			break;
	    		} 
	    		t2 = t2 - x2 / d2;
	    	}
		    t0 = 0.0; 
		    t1 = 1.0; 
		    t2 = x; 
		    if (t2 < t0) {
		    	return t0;
		    } 
		    if (t2 > t1) {
		    	return t1;
		    }
		    while (t0 < t1) {
		    	x2 = sampleCurveX(t2); 
		    	if (Math.abs(x2 - x) < epsilon) {
		    		return t2;
		    	} 
		    	if (x > x2) {
		    		t0 = t2;
		    	} else {
		    		t1 = t2;
		    	} 
		    	t2 = (t1 - t0) * 0.5 + t0;
		    }
	    	return t2; // Failure.
	    }
	    return sampleCurveY(solveCurveX(t, 1 / 200));
	};
};

/**
	Cubic-Bezier 함수를 생성한다.
	
	@method cubicBezier
	@static
	@see http://en.wikipedia.org/wiki/B%C3%A9zier_curve
	@param {Number} x1 control point 1의 x좌표
	@param {Number} y1 control point 1의 y좌표
	@param {Number} x2 control point 2의 x좌표
	@param {Number} y2 control point 2의 y좌표
	@return {Function} 생성된 이펙트 함수
**/
jindo.Effect.cubicBezier = function(x1, y1, x2, y2){
	return jindo.Effect(jindo.Effect._cubicBezier(x1, y1, x2, y2));
};

/**
	Cubic-Bezier 커브를 이용해 CSS3 Transition Timing Function과 동일한 ease 함수
	
	@example
		jindo.Effect.cubicBezier(0.25, 0.1, 0.25, 1);
	
	@method cubicEase
	@static
	@see http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
**/
jindo.Effect.cubicEase = jindo.Effect.cubicBezier(0.25, 0.1, 0.25, 1);

/**
	Cubic-Bezier 커브를 이용해 CSS3 Transition Timing Function과 동일한 easeIn 함수

	@example
		jindo.Effect.cubicBezier(0.42, 0, 1, 1);
	
	@method cubicEaseIn
	@static
	@see http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
**/
jindo.Effect.cubicEaseIn = jindo.Effect.cubicBezier(0.42, 0, 1, 1);

/**
	Cubic-Bezier 커브를 이용해 CSS3 Transition Timing Function과 동일한 easeOut 함수
	
	@example
		jindo.Effect.cubicBezier(0, 0, 0.58, 1);
	
	@method cubicEaseOut
	@static
	@see http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
**/
jindo.Effect.cubicEaseOut = jindo.Effect.cubicBezier(0, 0, 0.58, 1);

/**
	Cubic-Bezier 커브를 이용해 CSS3 Transition Timing Function과 동일한 easeInOut 함수
	
	@example
		jindo.Effect.cubicBezier(0.42, 0, 0.58, 1);
	
	@method cubicEaseInOut
	@static
	@see http://www.w3.org/TR/css3-transitions/#transition-timing-function_tag
**/
jindo.Effect.cubicEaseInOut = jindo.Effect.cubicBezier(0.42, 0, 0.58, 1);

/**
	Cubic-Bezier 커브를 이용해 easeOutIn 함수를 구한다.
	
	@example
		jindo.Effect.cubicBezier(0, 0.42, 1, 0.58);
	
	@method cubicEaseOutIn
	@static
**/
jindo.Effect.cubicEaseOutIn = jindo.Effect.cubicBezier(0, 0.42, 1, 0.58);

/**
	overphase 이펙트 함수
	
	@method overphase
	@static
**/
jindo.Effect.overphase = jindo.Effect(function(s){
	s /= 0.652785;
	return (Math.sqrt((2 - s) * s) + (0.1 * s)).toFixed(5);	
});

/**
	sin 곡선의 일부를 이용한 sinusoidal 이펙트 함수
	
	@method sinusoidal
	@static
**/
jindo.Effect.sinusoidal = jindo.Effect(function(s) {
	return (-Math.cos(s * Math.PI) / 2) + 0.5;
});

/**
	mirror 이펙트 함수
	sinusoidal 이펙트 함수를 사용한다.
	
	@method mirror
	@static
**/
jindo.Effect.mirror = jindo.Effect(function(s) {
	return (s < 0.5) ? jindo.Effect.sinusoidal(0, 1)(s * 2) : jindo.Effect.sinusoidal(0, 1)(1 - (s - 0.5) * 2);
});

/**
	nPulse의 진동수를 가지는 cos 함수를 구한다.
	
	@method pulse
	@static
	@param {Number} nPulse 진동수
	@return {Function} 생성된 이펙트 함수
	@example
		var f = jindo.Effect.pulse(3); //진동수 3을 가지는 함수를 리턴
		//시작 수치값과 종료 수치값을 설정해 jindo.Effect 함수를 생성
		var fEffect = f(0, 100);
		fEffect(0); => 0
		fEffect(1); => 100
**/
jindo.Effect.pulse = function(nPulse) {
    return jindo.Effect(function(s){
		return (-Math.cos((s * (nPulse - 0.5) * 2) * Math.PI) / 2) + 0.5;	
	});
};

/**
	nPeriod의 주기와 nHeight의 진폭을 가지는 sin 함수를 구한다.
	
	@method wave
	@static
	@param {Number} nPeriod 주기
	@param {Number} nHeight 진폭
	@return {Function} 생성된 이펙트 함수
	@example
		var f = jindo.Effect.wave(3, 1); //주기 3, 높이 1을 가지는 함수를 리턴
		//시작 수치값과 종료 수치값을 설정해 jindo.Effect 함수를 생성
		var fEffect = f(0, 100);
		fEffect(0); => 0
		fEffect(1); => 0
**/
jindo.Effect.wave = function(nPeriod, nHeight) {
    return jindo.Effect(function(s){
    	return (nHeight || 1) * (Math.sin(nPeriod * (s * 360) * Math.PI / 180)).toFixed(5);
	});
};

/**
	easeIn 이펙트 함수
	easeInCubic 함수와 동일하다.
	
	@method easeIn
	@static
	@see easeInCubic
**/
jindo.Effect.easeIn = jindo.Effect.easeInCubic;
/**
	easeOut 이펙트 함수
	easeOutCubic 함수와 동일하다.
	
	@method easeOut
	@static
	@see easeOutCubic
**/
jindo.Effect.easeOut = jindo.Effect.easeOutCubic;
/**
	easeInOut 이펙트 함수
	easeInOutCubic 함수와 동일하다.
	
	@method easeInOut
	@static
	@see easeInOutCubic
**/
jindo.Effect.easeInOut = jindo.Effect.easeInOutCubic;
/**
	easeOutIn 이펙트 함수
	easeOutInCubic 함수와 동일하다.
	
	@method easeOutIn
	@static
	@see easeOutInCubic
**/
jindo.Effect.easeOutIn = jindo.Effect.easeOutInCubic;
/**
	bounce 이펙트 함수
	easeOutBounce 함수와 동일하다.
	
	@method bounce
	@static
	@see easeOutBounce
**/
jindo.Effect.bounce = jindo.Effect.easeOutBounce;
/**
	elastic 이펙트 함수
	easeInElastic 함수와 동일하다.
	
	@method elastic
	@static
	@see easeInElastic
**/
jindo.Effect.elastic = jindo.Effect.easeInElastic;/**
	@fileOverview 영역내의 값을 마우스 클릭 또는 드래그로 선택하는 슬라이더 컴포넌트
	@author hooriza, modified by senxation
	@version 1.3.0
**/
/**
	영역내의 값을 마우스 클릭 또는 드래그로 선택하는 슬라이더 컴포넌트
	
	@class jindo.Slider
	@extends jindo.UIComponent
	@uses jindo.DragArea
	
	@keyword slider, thumb, track, 슬라이더
**/
jindo.Slider = jindo.$Class({
	/** @lends jindo.Slider.prototype */
	_elTrack : null,
	_aThumbs : null,
	_aPoses : null,
	_htSwap : null,
	
	/**
		Slider 컴포넌트를 생성한다.
		@constructor
		@param {String | HTMLElement} el Thumb이 움직이는 바탕이 되는 Track Element (id 혹은 엘리먼트 자체)
		@param {Object} [oOptions] 옵션 객체
			@param {String} [oOptions.sClassPrefix="slider-"] 클래스명 접두어
			@param {Boolean} [oOptions.bVertical=false] 슬라이더 세로 여부
			@param {Boolean} [oOptions.bJump=true] 슬라이더의 트랙 클릭시 thumb 객체의 이동 여부
			@param {Boolean} [oOptions.bDragOnTrack=true] 트랙에 마우스다운이후 드래그가능한지 여부
			@param {String} [oOptions.sClassPrefix="slider-"] 슬라이더를 구현할 객체의 클래스명 접두어
			@param {Number} [oOptions.nMinValue=0] 슬라이더의 최소값
			@param {Number} [oOptions.nMaxValue=0] 슬라이더의 최대값
			@param {Function} [oOptions.fAdjustValue=null] 슬라이더의 값을 원하는 값으로 조절하는 함수
			@param {Boolean} [oOptions.bActivateOnload=true] 컴포넌트 로드시 activate 여부
		@example
			var oSlider = new jindo.Slider(jindo.$('sample'), {
				fAdjustValue : function(nValue) {
					// value의 소숫점을 제거한다.
					return Math.round(nValue / 10) * 10;
				}});
				
			alert("value : " + oSlider.values()); // 소숫점이 제거된 value 노출.
		@example
			var alpha = new jindo.Slider(jindo.$('alpha'),{
				 sClassPrefix : 'slider-',
				 bVertical : false, //슬라이더 세로 여부
				 bJump : true, //트랙에 클릭하여 이동가능한지 여부
				 bDragOnTrack : true, //트랙에 마우스다운이후 드래그가능한지 여부
				 nMinValue : 0, 
				 nMaxValue : 1,
				 fAdjustValue : null,(Function) 값을 조절하기 위한 함수
				 bActivateOnload : true //(Boolean) 컴포넌트 로드시 activate 여부
			}).attach({
				beforeChange : function(oCustomEvent){
					//Thumb이 움직이기 전에 발생
					//oCustomEvent.stop()을 실행하면 change 이벤트가 발생하지 않고 중단된다.
				},
				change : function(oCustomEvent){
					//Thumb을 Drop한 이후 발생
					//전달되는 이벤트 객체 oCustomEvent = {
					//	nIndex : (Number)
					//	nPos : (Number)
					//	nValue : (Number)
					//}
				}
			});
	**/
	
	$init : function(el, oOptions) {
		this.option({
			sClassPrefix : 'slider-',
			bVertical : false,
			bJump : true,
			bDragOnTrack : true,
			fAdjustValue : null,
			nMinValue : 0,
			nMaxValue : 1,
			bActivateOnload : true
		});
		this.option(oOptions || {});
		
		if (!this.option('bVertical')) {
			this._htSwap = {
				y : 'nY',
				x : 'nX',
				clientX : 'clientX',
				pageX : 'pageX',
				offsetWidth : 'offsetWidth',
				left : 'left'
			};
		} else {
			this._htSwap = {
				y : 'nX',
				x : 'nY',
				clientX : 'clientY',
				pageX : 'pageY',
				offsetWidth : 'offsetHeight',
				left : 'top'
			};
		}
		
		// Thumbs 들과 각각의 값을 저장할 공간 만들기
		this._elTrack = jindo.$(el);
		this._aThumbs = jindo.$$('.' + this.option('sClassPrefix') + 'thumb', this._elTrack);
		this._sRand = 'S' + parseInt(Math.random() * 100000000, 10);
		jindo.$ElementList(this._aThumbs).addClass(this._sRand);

		this._aPoses = this.positions();
		this._onTrackMouseDownFn = jindo.$Fn(this._onTrackMouseDown, this);
		this._initDragArea();
		
		if (this.option("bActivateOnload")){
			this.activate();		
		}
	},
	
	/**
		Track 엘리먼트를 구한다.
		
		@method getTrack
		@return {HTMLElement} 
	**/
	getTrack : function() {
		return this._elTrack;
	},
	
	/**
		n번째 Thumb 엘리먼트를 구한다.
		
		@method getThumb
		@param {Number} nIndex 몇 번째 인지
		@return {HTMLElement} 
	**/
	getThumb : function(nIndex) {
		return this._aThumbs[nIndex];
	},
	
	_initDragArea : function() {
		var self = this;
		var htSwap = this._htSwap;
		
		// 컴퍼넌트 내부에서 사용하는 다른 컴퍼넌트 초기화
		this._oDragArea = new jindo.DragArea(this._elTrack, { 
			sClassName : this._sRand, 
			bFlowOut : false 
		}).attach({
			beforeDrag : function(oCustomEvent) {
				var nIndex = self._getThumbIndex(oCustomEvent.elHandle);
				var htParam = { 
					nIndex : nIndex,
					nPos : oCustomEvent[htSwap.x],
					bJump : false
				};
				
				/**
					Thumb이 움직이기 전에 발생
					
					@event beforeChange
					@param {String} sType 커스텀이벤트명
					@param {Function} stop 수행시 값이 바뀌지 않으며, change 이벤트가 발생하지 않고 중단된다.
					@example
						// Thumb이 움직이기 전에 발생 될 함수 구현.
						oSlider.attach("beforeChange", function(oCustomEvent) { ... });
				**/
				if (!self.fireEvent('beforeChange', htParam)) {
					oCustomEvent.stop();
					return false;
				}
				
				oCustomEvent[htSwap.x] = self._getAdjustedPos(nIndex, htParam.nPos);
				oCustomEvent[htSwap.y] = null;
			},
			drag : function(oCustomEvent) {
				var nIndex = self._getThumbIndex(oCustomEvent.elHandle);
				var nPos = oCustomEvent[htSwap.x];
				if (nPos != self._aPoses[nIndex]) {
					self._aPoses[nIndex] = nPos;
					self._fireChangeEvent(nIndex);
				}
			}
		});
	},
	
	/**
		적용된 DragArea 객체를 가져온다.
		
		@method getDragArea
		@return {jindo.DragArea}
	**/
	getDragArea : function() {
		return this._oDragArea; 
	},
	
	_fireChangeEvent : function(nIndex) {
		var nPos = this._getPosition(nIndex);
		/**
			Thumb을 Drop한 이후 발생
			
			@event change
			@param {String} sType 커스텀이벤트명
			@param {Number} nIndex 위치값을 가져올 Thumb의 index (생략시 모든 Thumb의 위치값 배열을 리턴)
			@param {Number} nPos 설정할 위치값(pixel단위)
			@param {Number} nValue drop 이후의 슬라이더 값
			@example
				// Thumb을 Drop한 이후 발생 단계에 실행 될 함수 구현.
				oSlider.attach("change", function(oCustomEvent) { ... });
		**/
		this.fireEvent('change', {
			nIndex : nIndex,
			nPos : nPos,
			nValue : this._getValue(nIndex, nPos)
		});
	},

	/**
		컴포넌트를 활성화시킨다.
	**/
	_onActivate : function() {
		this.getDragArea().activate();
		jindo.$Element.prototype.preventTapHighlight && jindo.$Element(this._elTrack).preventTapHighlight(true);
		this._onTrackMouseDownFn.attach(this._elTrack, 'mousedown');
	},
	
	/**
		컴포넌트를 비활성화시킨다.
	**/
	_onDeactivate : function() {
		this.getDragArea().deactivate();
		jindo.$Element.prototype.preventTapHighlight && jindo.$Element(this._elTrack).preventTapHighlight(false);
		this._onTrackMouseDownFn.detach(this._elTrack, 'mousedown');
	},
	
	_onTrackMouseDown : function(we) {
		if (!this.option('bJump')) {
			return;
		}
		
		we.stop(jindo.$Event.CANCEL_DEFAULT);
		var nIndex = 0;
		var htSwap = this._htSwap;
		var el = we.element;
		var sClass = '.' + this.option('sClassPrefix') + 'thumb';
		var bThumb = jindo.$$.test(el, sClass) || jindo.$$.getSingle('! ' + sClass, el);
		if (bThumb) {
			return;
		}
		
		var nPos = we.pos()[htSwap.pageX]; // 클릭한 위치
		nPos -= jindo.$Element(this._elTrack).offset()[htSwap.left];
		
		var nMaxDistance = 9999999;
		
		// 가장 가까운 Thumb 찾기
		for (var i = 0, oThumb; (oThumb = this._aThumbs[i]); i++) {
			var nThumbPos = parseInt(jindo.$Element(oThumb).css(htSwap.left), 10) || 0;
			nThumbPos += parseInt(oThumb[htSwap.offsetWidth] / 2, 10);
			
			var nDistance  = Math.abs(nPos - nThumbPos);
			
			if (nDistance < nMaxDistance) {
				nMaxDistance = nDistance;
				nIndex = i;
			}
		}

		nPos -= parseInt(this._aThumbs[nIndex][htSwap.offsetWidth] / 2, 10);
		this.positions(nIndex, nPos);
		
		if (this.option("bDragOnTrack")) {
			this.getDragArea().startDragging(this._aThumbs[nIndex]);
		}
	},
	
	_getTrackInfo : function(nIndex) {
		var htSwap = this._htSwap;
		var oThumb = this._aThumbs[nIndex];
		var nThumbSize = oThumb[htSwap.offsetWidth];
		var nTrackSize = this._elTrack[htSwap.offsetWidth];
		var nMaxPos = nTrackSize - nThumbSize;
		var nMax = this.option('nMaxValue');
		var nMin = this.option('nMinValue');
		
		return {
			maxPos : nMaxPos,
			max : nMax,
			min : nMin
		};
	},
	
	/**
		옵션의 fAdjustValue가 적용된 value를 구한다.
		@param {Object} nIndex
		@param {Object} nPos
		@ignore
	**/
	_getValue : function(nIndex, nPos) {
		if (typeof nPos == 'undefined') {
			nPos = this._getPosition(nIndex);
		}

		var oInfo = this._getTrackInfo(nIndex);
		// var nValue = Math.min(Math.max(nPos * (oInfo.max - oInfo.min) / oInfo.maxPos + oInfo.min, oInfo.min), oInfo.max);
		var nValue = nPos * (oInfo.max - oInfo.min) / oInfo.maxPos + oInfo.min;
        nValue = Math.min(Math.max(nValue, Math.min(oInfo.min, oInfo.max)), Math.max(oInfo.min, oInfo.max));

		var fAdjust = this.option('fAdjustValue');
		if (fAdjust) {
			nValue = fAdjust.call(this, nValue);
		}
		
		return nValue;
	},
	
	/**
		옵션의 fAdjustValue가 적용된 포지션을 구한다.
		@param {Object} nIndex
		@param {Object} nPos
		@ignore
	**/
	_getAdjustedPos : function(nIndex, nPos) {
		var nAdjustedPos = nPos;
		var oInfo = this._getTrackInfo(nIndex);
		
		var fAdjust = this.option('fAdjustValue');
		if (fAdjust) {
			var nValue = Math.min(Math.max(nAdjustedPos * (oInfo.max - oInfo.min) / oInfo.maxPos + oInfo.min, oInfo.min), oInfo.max);
			var nAfterValue = fAdjust.call(this, nValue);
			
			if (nValue != nAfterValue) {
				nAdjustedPos = oInfo.maxPos * (nAfterValue - oInfo.min) / (oInfo.max - oInfo.min);
			}
		}
		
		nAdjustedPos = Math.max(nAdjustedPos, 0);
		nAdjustedPos = Math.min(nAdjustedPos, oInfo.maxPos);
		
		return nAdjustedPos;		
	},
	
	_getThumbIndex : function(oThumb) {
		for (var i = 0, len = this._aThumbs.length; i < len; i++) {
			if (this._aThumbs[i] == oThumb) {
				return i;
			}
		}
			
		return -1;
	},
	
	_getPosition : function(nIndex) {
		var sPos = jindo.$Element(this._aThumbs[nIndex]).css(this._htSwap.left);
		return (sPos == "auto") ? 0 : parseInt(sPos, 10);
	},
	
	_setPosition : function(nIndex, nPos) {
		this._aPoses[nIndex] = nPos;
		jindo.$Element(this._aThumbs[nIndex]).css(this._htSwap.left, nPos + 'px');
	},
	
	/**
		pixel단위로 Thumb의 위치값을 가져온다.
		
		@method positions
		@param {Number} [nIndex] 위치값을 가져올 Thumb의 index (생략시 모든 Thumb의 위치값 배열을 리턴)
		@return {Number | Array}
		@example 
			oSlider.positions(0);
			oSlider.positions();
	**/
	/**
		pixel단위로 Thumb의 위치값을 설정한다.
		
		@method positions
		@param {Number} nIndex 위치값을 설정할 Thumb의 index
		@param {Number} nPos 설정할 위치값(pixel단위)
		@param {Boolean} bFireEvent 커스텀이벤트를 발생할지의 여부
		@return {this} 객체 자신
		@example 
			oSlider.positions(0, 100);
	**/
	positions : function(nIndex, nPos, bFireEvent) {
		if (typeof bFireEvent == "undefined") {
			bFireEvent = true;	
		}

		switch (arguments.length) {
			case 0:
				var aPoses = [];
				jindo.$A(this._aThumbs).forEach(function(el, i){
					aPoses[i] = this._getPosition(i);
				}, this);
				return aPoses;
	
			case 1:
				return this._getPosition(nIndex);
				
			default:
				if (bFireEvent) {
					var htParam = { 
						nIndex : nIndex,
						nPos : nPos,
						bJump : true
					};
					if (this.fireEvent('beforeChange', htParam)) {
						var nAfterPos = this._getAdjustedPos(nIndex, htParam.nPos);
						var bChanged = (nAfterPos != this._aPoses[nIndex]);
	
						this._setPosition(nIndex, nAfterPos);
						if (bChanged) {
							this._fireChangeEvent(nIndex);
						}
					}
				    return this;
				}
				this._setPosition(nIndex, this._getAdjustedPos(nIndex, nPos));
			    return this;
		} 
	},
	
	/**
		옵션으로 설정한 nMinValue, nMaxValue에 대한 상대값으로 해당 Thumb의 위치값을 가져온다.
		
		@method values
		@param {Number} [nIndex] Value를 가져올 Thumb의 index (생략시 모든 Thumb의 위치값 배열을 리턴)
		@return {Number | Array}
		@example 
			oSlider.values(0);
			oSlider.values();
	**/
	/**
		옵션으로 설정한 nMinValue, nMaxValue에 대한 상대값으로 해당 Thumb의 위치값을 설정한다.
		
		@method values
		@param {Number} nIndex Value를 설정할 Thumb의 index
		@param {Number} nValue 설정할 위치값
		@param {Boolean} bFireEvent 커스텀이벤트를 발생할지의 여부
		@return {this} 객체 자신
		@example 
			oSlider.values(0, 0.5);
	**/
	values : function(nIndex, nValue, bFireEvent) {
		if (typeof bFireEvent == "undefined") {
			bFireEvent = true;	
		}
		
		switch (arguments.length) {
			case 0:
				var aValues = [];
				for (var i = 0, len = this._aThumbs.length; i < len; i++) {
					aValues[i] = this._getValue(i);
				}
				return aValues;
				
			case 1:
				return this._getValue(nIndex, this.positions(nIndex)); //수정
	
			default:
				var oInfo = this._getTrackInfo(nIndex);
				this.positions(nIndex, ((nValue - oInfo.min) * oInfo.maxPos / (oInfo.max - oInfo.min)) || 0, bFireEvent);
				return this;
		}
	}
}).extend(jindo.UIComponent);/**
	@fileOverview 타이머를 편리하게 사용할 수 있게해주는 컴포넌트
	@version 1.3.0
**/
/**
	
	타이머의 사용을 편리하게 해주는 컴포넌트
	
	@class jindo.Timer
	@extends jindo.Component
	@keyword timer, 타이머, setTimeout, setInterval
 */
jindo.Timer = jindo.$Class({
	/** @lends jindo.Timer.prototype */

	/**
		Timer 컴포넌트를 초기화한다.
		
		@constructor
 	 */
	$init : function() { 
		this._nTimer = null;
		this._nLatest = null;
		this._nRemained = 0;
		this._nDelay = null;
		this._fRun = null;
		this._bIsRunning = false;
	},
	
	/**
		함수를 지정한 시간이 지난 후에 실행한다. 실행될 콜백 함수가 true 를 리턴하면 setInterval 을 사용한 것처럼 계속 반복해서 수행된다.
		
		@method start
		@param {Function} fCallback 지정된 지연 시간 이후에 실행될 콜백 함수
		@param {Number} nDelay msec 단위의 지연 시간
		@return {Boolean} 항상 true
		@example
			var o = new jindo.Timer();
			o.start(function() {
				// ...
				return true;
			}, 100);
		
		@history 1.3.0 Bug fRun 에서 예외가 발생하면 리턴값과 관계없이 계속 반복되는 문제 수정
	**/
 	start : function(fRun, nDelay) {
		this.abort();
		
		this._nRemained = 0;
		this._nDelay = nDelay;
		this._fRun = fRun;
		
		this._bIsRunning = true;
		this._nLatest = this._getTime();
		this.fireEvent('wait');
		this._excute(this._nDelay, false);
		
		return true;
	},
	
	/**
		타이머의 동작 여부를 가져온다.
		
		@method isRunning
		@return {Boolean} 동작중이면 true, 그렇지 않으면 false
	**/
	isRunning : function() {
		return this._bIsRunning;
	},
	
	_getTime : function() {
		return new Date().getTime();
	},
	
	_clearTimer : function() {
		var bFlag = false;
		
		if (this._nTimer) {
			clearTimeout(this._nTimer);
			this._bIsRunning = false;
			bFlag = true;
		}
		
		this._nTimer = null;
		return bFlag;
	},
	
	/**
		현재 대기상태에 있는 타이머를 중단시킨다.
		
		@method abort
		@return {Boolean} 이미 멈춰있었으면 false, 그렇지 않으면 true
		
		@history 1.3.0 Bug pause 후에 abort 하면 제대로 abort 되지 않는 문제 수정
	**/
	abort : function() {
		this._clearTimer();
		if (this._fRun) {
			/**
				Timer가 수행을 강제로 종료했을 때 발생
				
				@event abort
				@param {String} sType 커스텀이벤트명
				@example
					// 커스텀이벤트 핸들링 예제
					oTimer.attach("abort", function(oCustomEvent) { ... });
			**/
			this.fireEvent('abort');
			this._fRun = null;
			
			return true;
		}
		return false;
	},
	
	/**
		현재 동작하고 있는 타이머를 일시정지 시킨다.
		
		@method pause
		@return {Boolean} 이미 멈춰있었으면 false, 그렇지 않으면 true
	**/
	pause : function() {
		var nPassed = this._getTime() - this._nLatest;
		this._nRemained = Math.max(this._nDelay - nPassed, 0);
		
		return this._clearTimer();
	},
	
	_excute : function(nDelay, bResetDelay) {
		var self = this;
		this._clearTimer();
	
		this._bIsRunning = true;
		
		var launcher = function(bDontUseTimer) {
			if (self._nTimer || bDontUseTimer) { //self._nTimer가 null일때도 간헐적으로 수행되는 버그가 있어 추가
				/**
					Timer 동작 수행이 시작될 때 발생
					
					@event run
					@param {String} sType 커스텀이벤트명
					@example
						// 커스텀이벤트 핸들링 예제
						oTimer.attach("run", function(oCustomEvent) { ... });
				**/
				self.fireEvent('run');
				
				var r = self._fRun();
				self._nLatest = self._getTime();
				
				if (!r) {
					if (!bDontUseTimer) {
						clearTimeout(self._nTimer);
					}
					self._nTimer = null;
					self._bIsRunning = false;
					/**
						Timer 동작이 종료될 때 발생
						
						@event end
						@param {String} sType 커스텀이벤트명
						@example
							// 커스텀이벤트 핸들링 예제
							oTimer.attach("end", function(oCustomEvent) { ... });
					**/
					self.fireEvent('end');
					return;
				}
				
				/**
					Timer가 기다리기 시작한 시점에 발생
					
					@event wait
					@param {String} sType 커스텀이벤트명
					@example
						// 커스텀이벤트 핸들링 예제
						oTimer.attach("wait", function(oCustomEvent) { ... });
				**/
				self.fireEvent('wait');
				self._excute(self._nDelay, false);
			}
		};
		
		if (nDelay > -1) {
			this._nTimer = setTimeout(launcher, nDelay);
		} else {
			launcher(true);
		}
	},
	
	/**
		일시정지 상태인 타이머를 재개시킨다.
		
		@method resume
		@return {Boolean} 재개에 성공했으면 true, 그렇지 않으면 false
	**/
	resume : function() {
		if (!this._fRun || this.isRunning()) {
			return false;
		}
		
		this._bIsRunning = true;
		this.fireEvent('wait');
		this._excute(this._nRemained, true);
		this._nRemained = 0;
		return true;
	}
}).extend(jindo.Component);
/**
	@fileOverview 엘리먼트의 css 스타일을 조정해 부드러운 움직임(변형)을 표현하는 컴포넌트
	@version 1.3.0
**/
/**
	엘리먼트의 css style의 변화를 주어 움직이는 효과를 주는 컴포넌트
	
	@class jindo.Transition
	@extends jindo.Component
	@uses jindo.Effect
	@uses jindo.Timer
	@keyword transition, 트랜지션
**/
jindo.Transition = jindo.$Class({
	/** @lends jindo.Transition.prototype */
	_nFPS : 30,
	
	_aTaskQueue : null,
	_oTimer : null,
	
	_bIsWaiting : true, // 큐의 다음 동작을 하길 기다리는 상태
	_bIsPlaying : false, // 재생되고 있는 상태
	
	/**
		Transition 컴포넌트를 초기화한다.
		
		@constructor
		@param {Object} [htOption] 옵션 객체
			@param {Function} [htOption.fEffect=jindo.Effect.linear] jindo.Effect 이펙트 함수
			@param {Boolean} [htOption.bCorrection=false] 소수점에 의해 어긋나는 사이즈를 보정할지 여부
	**/
	$init : function(htOption) {
		this._aTaskQueue = [];
		this._oTimer = new jindo.Timer();
		this._oSleepTimer = new jindo.Timer();
		
		this.option({ 
			fEffect : jindo.Effect.linear, 
			bCorrection : false 
		});
		this.option(htOption || {});
	},

	/**
		효과가 재생될 초당 frame rate를 가져온다.
		
		@method fps
		@return {Number} 
	**/
	/**
		효과가 재생될 초당 frame rate를 설정한다.
		
		@method fps
		@param {Number} nFPS
		@return {this} 
	**/
	fps : function(nFPS) {
		if (arguments.length > 0) {
			this._nFPS = nFPS;
			return this;
		}
		
		return this._nFPS;
	},
	
	/**
		트랜지션이 진행중인지 여부를 가져온다.
		
		@method isPlaying
		@return {Boolean}
	**/
	isPlaying : function() {
		return this._bIsPlaying;
	},
	
	/**
		진행되고 있는 Transition을 중지시킨다.
		
		@method abort
		@return {this}
	**/
	abort : function() {
		this._aTaskQueue = [];
		this._oTimer.abort();
		this._oSleepTimer.abort();
		
		if (this._bIsPlaying) {
			/**
				Transition이 중단되었을 때 발생
				
				@event abort
				@param {String} sType 커스텀이벤트명
				@example
					// Transition이 중단되었을 때 실행 될 함수 구현.
					oTransition.attach("abort", function() { ... });
			**/
			this.fireEvent("abort");
		}

		this._bIsWaiting = true;
		this._bIsPlaying = false;
		
		this._htTaskToDo = null;
		return this;
	},
	
	/**
		Transition을 수행한다.
		파라메터를 지정(queue 메소드와 동일)하였을 경우에는 해당 동작을 바로 실행시키고, 파라메터가 생략되었을 때에는 지금까지 queue()로 지정된 동작들을 시작시킨다.
		파라메터는 function타입으로 지정하여 콜백을 수행할수 있다. (예제 참고)
		
		@method start
		@param {Number} nDuration Transition이 진행될 시간
		@param {Array} aCommand 적용할 명령셋
		@return {this}
		@see jindo.Transition#queue
		@example
			oTransition.start(1000,
				jindo.$("foo"), {
					'@left' : '200px'
				}
			));
		@example
			oTransition.start(1000, [
				[jindo.$("foo"), {
					'@left' : '200px'
				}],
				
				[jindo.$("bar"), {
					'@top' : '200px'
				}]
			]));
		@example
			oTransition.queue(1000,
				jindo.$("foo"), {
					'@left' : '200px'
				}
			));
			oTransition.start();
	**/
	start : function(nDuration, elTarget, htInfo) {
		if (arguments.length > 0) {
			this.queue.apply(this, arguments);
		}
		
		this._prepareNextTask();
		return this;
	},
	
	/**
		Transition을 큐에 담는다.
		여러 단계의 Transition을 담아두고 순차적으로 실행시킬때 사용한다. start() 메소드가 호출되기 전까지 수행되지 않는다.
		파라메터 aCommand는 [(HTMLElement)엘리먼트, (HashTable)Transition정보]로 구성되어야 하고, 여러명령을 동시에 적용할 수 있다.
		파라메터로 function을 지정하여 콜백을 등록할 수 있다.
		
		@method queue
		@param {Number} nDuration Transition이 진행될 시간
		@param {Array} aCommand 적용할 명령셋
		@return {this}
		@see jindo.Transition#start
		@example
			// 하나의 엘리먼트에 여러개의 명령을 지정하는 예제
			oTransition.queue(1000,
				jindo.$("foo"), {
					'@left' : '200px',
					'@top' : '50px',
					'@width' : '200px',
					'@height' : '200px',
					'@backgroundColor' : [ '#07f', 'rgb(255, 127, 127)' ]
				}
			); 
		@example
			// 여러개의 엘리먼트에 명령을 지정하는 예 1
			oTransition.queue(1000,
				jindo.$("foo"), {
					"@left" : jindo.Effect.linear("200px")
				},
				jindo.$("bar"), {
					"@top" : jindo.Effect.easeOut("200px")
				}
			);
		@example
			// 여러개의 엘리먼트에 명령을 지정하는 예 2
			oTransition.queue(1000, [
				[jindo.$("foo"), {
					"@left" : jindo.Effect.linear("200px")
				}],
				[jindo.$("bar"), {
					"@top" : jindo.Effect.easeIn("200px")
				}]
			]);  
		@example
			// 엘리먼트를 getter / setter 함수로 지정하는 예  
			oTransition.queue(1000, [
				[{
					getter : function(sKey) {
						return jindo.$Element("foo")[sKey]();
					},
					
					setter : function(sKey, sValue) {
						jindo.$Element("foo")[sKey](parseFloat(sValue));
					}
				}, {
					'height' : jindo.Effect.easeIn(100)
				}]
			]);  
		@example
			// 파라메터로 function을 지정하여 콜백을 수행하는 예제
			oTransition.start(function(){
				alert("end")
			});
	**/
	queue : function(nDuration, aCommand) {
		var htTask;
		if (typeof arguments[0] == 'function') {
			htTask = {
				sType : "function",
				fTask : arguments[0]
			};
		} else {
			var a = [];
			if (arguments[1] instanceof Array) {
				a = arguments[1];
			} else {
				var aInner = [];
				jindo.$A(arguments).forEach(function(v, i){
					if (i > 0) {
						aInner.push(v);
						if (i % 2 === 0) {
							a.push(aInner.concat());
							aInner = [];
						} 
					}
				});
			}
			
			htTask = {
				sType : "task",
				nDuration : nDuration, 
				aList : []
			};
			
			for (var i = 0, nLen = a.length; i < nLen; i ++) {
				var aValue = [],
					htArg = a[i][1],
					sEnd;
				
				for (var sKey in htArg) {
					sEnd = htArg[sKey];
					if (/^(@|style\.)(\w+)/i.test(sKey)) {
						aValue.push([ "style", RegExp.$2, sEnd ]);
					} else {
						aValue.push([ "attr", sKey, sEnd ]);
					}
				}
				
				htTask.aList.push({
					elTarget : a[i][0],
					aValue : aValue
				});
			}
		}
		this._queueTask(htTask);
		
		return this;
	},
	
	/**
		진행되고 있는 Transition을 일시중지시킨다.
		Transition이 진행중일때만 가능하다. (sleep 상태일 때에는 불가능)
		
		@method pause
		@return {this}
	**/
	pause : function() {
		if (this._oTimer.abort()) {
			/**
				Transition이 일시정지 되었을 때 발생
				
				@event pause
				@param {String} sType 커스텀이벤트명
				@example
					// Transition이 일시정지 되었을 때 실행 될 함수 구현.
					oTransition.attach("pause", function() { ... });
			**/
			this.fireEvent("pause");
		}
		return this;
	},
	
	/**
		일시중지된 Transition을 재시작시킨다.
		
		@method resume
		@return {this}
	**/
	resume : function() {
		if (this._htTaskToDo) {
			if (this._bIsWaiting === false && this._bIsPlaying === true) {
				/**
					Transition이 재시작 될 때 발생
					
					@event resume
					@param {String} sType 커스텀이벤트명
					@example
						// Transition이 재시작 될 때 실행 될 함수 구현.
						oTransition.attach("resume", function() { ... });
				**/
				this.fireEvent("resume");
			}
			
			this._doTask();
			
			this._bIsWaiting = false;
			this._bIsPlaying = true;
		
			var self = this;
			this._oTimer.start(function() {
				var bEnd = !self._doTask();
				if (bEnd) {
					self._bIsWaiting = true;
					setTimeout(function() { 
						self._prepareNextTask(); 
					}, 0);
				}
				
				return !bEnd;
			}, this._htTaskToDo.nInterval);
		}
		return this;
	},
	
	/**
		지정된 Transition이 종료된 이후에 또 다른 Transition 을 수행한다.
		start() 메소드는 더이상 현재 진행중인 Transition을 abort시키지 않는다.
		
		@method precede
		@return {this}
		@deprecated start() 사용권장
	**/
	precede : function(nDuration, elTarget, htInfo) {
		this.start.apply(this, arguments);
		return this;
	},
	
	/**
		현재의 Transition 종료 후 다음 Transition 진행하기전에 지정된 시간만큼 동작을 지연한다.
		
		@method sleep
		@param {Number} nDuration 지연할 시간
		@param {Function} fCallback 지연이 시작될때 수행될 콜백함수 (생략가능)
		@return {this}
		@example
			oTransition.start(1000, jindo.$("foo"), {
				"@left" : jindo.Effect.linear(oPos.pageX + "px")
			}).sleep(500).start(1000, jindo.$("bar"), {
				"@top" : jindo.Effect.easeOut(oPos.pageY + "px")
			});
	**/
	sleep : function(nDuration, fCallback) {
		if (typeof fCallback == "undefined") {
			fCallback = function(){};
		}
		this._queueTask({
			sType : "sleep",
			nDuration : nDuration,
			fCallback : fCallback 
		});
		this._prepareNextTask();
		return this;
	},
	
	_queueTask : function(v) {
		this._aTaskQueue.push(v);
	},
	
	_dequeueTask : function() {
		var htTask = this._aTaskQueue.shift();
		if (htTask) {
			if (htTask.sType == "task") {
				var aList = htTask.aList;
				for (var i = 0, nLength = aList.length; i < nLength; i++) {
					
					var elTarget = aList[i].elTarget,
						welTarget = null;
					
					for (var j = 0, aValue = aList[i].aValue, nJLen = aValue.length; j < nJLen; j++) {
						var sType = aValue[j][0],
							sKey = aValue[j][1],
							fFunc = aValue[j][2];
						
						if (typeof fFunc != "function") {
							var fEffect = this.option("fEffect");
							if (fFunc instanceof Array) {
								fFunc = fEffect(fFunc[0], fFunc[1]);
							} else {
								fFunc = fEffect(fFunc);
							}
							aValue[j][2] = fFunc;
						}
						
						if (fFunc.setStart) {
							if (this._isHTMLElement(elTarget)) {
								welTarget = welTarget || jindo.$Element(elTarget);
								switch (sType) {
									case "style":
										fFunc.setStart(welTarget.css(sKey));
										break;
										
									case "attr":
										fFunc.setStart(welTarget.$value()[sKey]);
										break;
								}
							} else {
								fFunc.setStart(elTarget.getter(sKey));
							}
						}
					}
				}
			}
			return htTask;
		} else {
			return null;
		}
	},
	
	_prepareNextTask : function() {
		if (this._bIsWaiting) {
			var htTask = this._dequeueTask();
			if (htTask) {
				switch (htTask.sType) {
					case "task":
						if (!this._bIsPlaying) {
							/**
								Transition이 시작될 때 발생.
								
								@event start
								@param sType {String} 커스텀이벤트명
								@example
									// Transition이 시작될 때 실행 될 함수 구현.
									oTransition.attach("start", function() { ... });
							**/
							this.fireEvent("start");
						}
						var nInterval = 1000 / this._nFPS,
							nGap = nInterval / htTask.nDuration;
						
						this._htTaskToDo = {
							aList: htTask.aList,
							nRatio: 0,
							nInterval: nInterval,
							nGap: nGap,
							nStep: 0,
							nTotalStep: Math.ceil(htTask.nDuration / nInterval)
						};
						
						this.resume();
						break;
					case "function":
						if (!this._bIsPlaying) {
							this.fireEvent("start");
						}
						htTask.fTask();
						this._prepareNextTask();
						break;
					case "sleep":
						if (this._bIsPlaying) {
							/**
								Transition이 휴면 상태일 때 발생
								
								@event sleep
								@param {String} sType 커스텀이벤트명
								@param {Number} nDuration 휴면 시간
								@example
									// Transition이 휴면 상태일 때 실행 될 함수 구현.
									oTransition.attach("sleep", function(oCustomEvent) { ... });
							**/
							this.fireEvent("sleep", {
								nDuration: htTask.nDuration
							});
							htTask.fCallback();
						}
						var self = this;
						this._oSleepTimer.start(function(){
							/**
								Transition이 휴면상태에서 깨어났을 때 발생
								
								@event awake
								@param {String} sType 커스텀이벤트명
								@example
									// Transition이 휴면상태에서 깨어났을 때 실행 될 함수 구현.
									oTransition.attach("awake", function() { ... });
							**/
							self.fireEvent("awake");
							self._prepareNextTask();
						}, htTask.nDuration);
						break;
				}
			} else {
				if (this._bIsPlaying) {
					this._bIsPlaying = false;
					this.abort();
					/**
						Transition이 끝났을 때 발생
						
						@event end
						@param sType (String) : 커스텀이벤트명
						@example
							// Transition이 끝날 때 실행 될 함수 구현.
							oTransition.attach("end", function() { ... });
					**/
					this.fireEvent("end");
				}
			}
		}
	},
	
	_isHTMLElement : function(el) {
		return ("tagName" in el);
	},
	
	_doTask : function() {
		var htTaskToDo = this._htTaskToDo,
			nRatio = parseFloat(htTaskToDo.nRatio.toFixed(5), 1),
			nStep = htTaskToDo.nStep,
			nTotalStep = htTaskToDo.nTotalStep,
			aList = htTaskToDo.aList,
			htCorrection = {},
			bCorrection = this.option("bCorrection");
		
		for (var i = 0, nLength = aList.length; i < nLength; i++) {
			var elTarget = aList[i].elTarget,
				welTarget = null;
			
			for (var j = 0, aValue = aList[i].aValue, nJLen = aValue.length; j < nJLen; j++) {
				var sType = aValue[j][0],
					sKey = aValue[j][1],
					sValue = aValue[j][2](nRatio);
				
				if (this._isHTMLElement(elTarget)) {
					if (bCorrection) {
						var sUnit = /^\-?[0-9\.]+(%|px|pt|em)?$/.test(sValue) && RegExp.$1 || "";
						if (sUnit) {
							var nValue = parseFloat(sValue);
							nValue += htCorrection[sKey] || 0;
							nValue = parseFloat(nValue.toFixed(5));
							if (i == nLength - 1) {
								sValue = Math.round(nValue) + sUnit;
							} else {
								htCorrection[sKey] = nValue - Math.floor(nValue);
								sValue = parseInt(nValue, 10) + sUnit;
							}
						}
					}
					
					welTarget = welTarget || jindo.$Element(elTarget);
					
					switch (sType) {
						case "style":
							welTarget.css(sKey, sValue);
							break;
							
						case "attr":
							welTarget.$value()[sKey] = sValue;
							break;
					}
				} else {
					elTarget.setter(sKey, sValue);
				}
				
				if (this._bIsPlaying) {
					/**
						Transition이 진행되는 매 단계에 발생
						
						@event playing
						@param {String} sType 커스텀이벤트명
						@param {HTMLElement} element 변화되고있는 객체
						@param {String} sKey 변화할 대상
						@param {String} sValue 변화할 값
						@param {Number} nStep 현재의 Transition의 단계
						@param {Number} nTotalStep Transition이 완료되기까지 playing 커스텀이벤트가 발생할 횟수
						@example
							// Transition이 진행되는 매 단계에 실행 될 함수 구현.
							oTransition.attach("playing", function(oCustomEvent) { ... });
					**/
					this.fireEvent("playing", {
						element : elTarget,
						sKey : sKey,
						sValue : sValue,
						nStep : nStep,
						nTotalStep : nTotalStep
					});
				}
			}
		}
		htTaskToDo.nRatio = Math.min(htTaskToDo.nRatio + htTaskToDo.nGap, 1);
		htTaskToDo.nStep += 1;
		return nRatio != 1;
	}
}).extend(jindo.Component);

// jindo.$Element.prototype.css 패치
(function() {
	
	var b = jindo.$Element.prototype.css;
	jindo.$Element.prototype.css = function(k, v) {
		if (k == "opacity") {
			return typeof v != "undefined" ? this.opacity(parseFloat(v)) : this.opacity();
		} else {
			return typeof v != "undefined" ? b.call(this, k, v) : b.call(this, k);
		}
	};
})();

})("jindo");