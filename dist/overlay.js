define("#overlay/0.9.9/overlay",["$","#iframe-shim/0.9.3/iframe-shim","#position/0.9.2/position","#widget/0.9.16/widget","#base/0.9.16/base","#events/0.9.1/events","#class/0.9.2/class"],function(e,t,n){function a(e){return r.contains(document.documentElement,e)}var r=e("$"),i=e("#position/0.9.2/position"),s=e("#iframe-shim/0.9.3/iframe-shim"),o=e("#widget/0.9.16/widget"),u=o.extend({attrs:{width:"",height:"",zIndex:99,visible:!1,align:{selfXY:[0,0],baseElement:i.VIEWPORT,baseXY:[0,0]},parentNode:document.body},render:function(){return u.superclass.render.call(this),this._setPosition(),this},show:function(){return this.rendered||this.render(),this.set("visible",!0),this},hide:function(){return this.set("visible",!1),this},setup:function(){this._setupShim()},_setPosition:function(e){if(!a(this.element[0]))return;e||(e=this.get("align"));var t=this.element.css("display")==="none";return t&&this.element.css({visibility:"hidden",display:"block"}),i.pin({element:this.element,x:e.selfXY[0],y:e.selfXY[1]},{element:e.baseElement,x:e.baseXY[0],y:e.baseXY[1]}),t&&this.element.css({visibility:"",display:"none"}),this},_setupShim:function(){var e=new s(this.element);this.after("show hide",e.sync,e);var t=u.prototype.attrs;for(var n in t)if(t.hasOwnProperty(n)){if(n==="parentNode")continue;this.on("change:"+n,e.sync,e)}},_blurHide:function(e){var t=this,n=function(n){var r=[];r.push(t.element),r=r.concat(e||[]);for(var i=0;i<r.length;i++)if(n.target===r[i][0])return;t.hide()};r(document).bind("click",function(e){t.get("visible")&&n(e)})},_onRenderWidth:function(e){this.element.css("width",e)},_onRenderHeight:function(e){this.element.css("height",e)},_onRenderZIndex:function(e){this.element.css("zIndex",e)},_onRenderAlign:function(e){this._setPosition(e)},_onRenderVisible:function(e){this.element[e?"show":"hide"]()}});n.exports=u});