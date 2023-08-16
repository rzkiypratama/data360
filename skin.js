// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: UPH.ggsk
// Generated 2023-07-26T13:55:44

function pano2vrSkin(player,base) {
	player.addVariable('open_tag', 0, "");
	player.addVariable('close_nodes', 2, false);
	player.addVariable('category_visible', 2, false);
	player.addVariable('category_follow', 2, true);
	player.addVariable('menu', 2, false);
	player.addVariable('desc', 0, "");
	player.addVariable('title', 0, "");
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(16,34,105,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 17px 8px 17px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		player.addListener('changenode', function() {
			me._title.ggUpdateText();
		});
		el.appendChild(els);
		me._title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._title);
		el=me._backdropmenuhide=document.createElement('div');
		el.ggId="backdropMenuHide";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._backdropmenuhide.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._backdropmenuhide.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('menu') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._backdropmenuhide.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._backdropmenuhide.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._backdropmenuhide.style[domTransition]='';
				if (me._backdropmenuhide.ggCurrentLogicStateVisible == 0) {
					me._backdropmenuhide.style.visibility=(Number(me._backdropmenuhide.style.opacity)>0||!me._backdropmenuhide.style.opacity)?'inherit':'hidden';
					me._backdropmenuhide.ggVisible=true;
				}
				else {
					me._backdropmenuhide.style.visibility="hidden";
					me._backdropmenuhide.ggVisible=false;
				}
			}
		}
		me._backdropmenuhide.onclick=function (e) {
			player.setVariableValue('menu', !player.getVariableValue('menu'));
		}
		me._backdropmenuhide.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._backdropmenuhide);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -330px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._container_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._container_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._container_1.style[domTransition]='left 600ms ease 0ms, top 600ms ease 0ms';
				if (me._container_1.ggCurrentLogicStatePosition == 0) {
					me._container_1.style.left='0px';
					me._container_1.style.top='0px';
				}
				else {
					me._container_1.style.left='-330px';
					me._container_1.style.top='0px';
				}
			}
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_2);
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_20=document.createElement('div');
		els=me._image_20__img=document.createElement('img');
		els.className='ggskin ggskin_image_20';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_10.appendChild(me._image_20);
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_20__img.setAttribute('src',basePath + 'images/svg_20.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 194px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_10.appendChild(me._svg_20);
		me._container_1.appendChild(me._rectangle_10);
		el=me._category_scroller=document.createElement('div');
		els=me._category_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 95px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 329px;';
		hs+="";
		els.setAttribute('style',hs);
		me._category_scroller.ggScrollByX = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosX = (me._category_scroller__horScrollFg.offsetLeft + diffX);
			me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
			me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			me._category_scroller__content.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
		}
		me._category_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._category_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._category_scroller.ggScrollPosX >= me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth)) {
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._category_scroller.ggScrollPosX <= 0)) {
					me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			me._category_scroller__content.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._category_scroller.ggScrollByY = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosY = (me._category_scroller__vertScrollFg.offsetTop + diffY);
			me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
			me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
		}
		me._category_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._category_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._category_scroller.ggScrollPosY >= me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight)) {
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._category_scroller.ggScrollPosY <= 0)) {
					me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._category_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._category_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._category_scroller.offsetWidth - (me._category_scroller.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._category_scroller.offsetWidth - (me._category_scroller.ggVertScrollVisible ? 8 : 0))) * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._category_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._category_scroller.offsetHeight - (me._category_scroller.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._category_scroller.offsetHeight - (me._category_scroller.ggHorScrollVisible ? 8 : 0))) * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._category_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._category_scroller__content.ontouchend = null;
				me._category_scroller__content.ontouchmove = null;
				me._category_scroller__content.onpointerup = null;
				me._category_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._category_scroller__content.onpointerup = me._category_scroller__content.ontouchend;
		}
			me._category_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._category_scroller.ggDragLastX) * me._category_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY) * me._category_scroller.ggVPercentVisible;
				me._category_scroller.ggDragInertiaX = -diffX;
				me._category_scroller.ggDragInertiaY = -diffY;
				me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByX(-diffX);
				me._category_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._category_scroller__content.onpointermove = me._category_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._category_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 480px; background-color: rgba(128,128,128,0.392157); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._category_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 480px; background-color: rgba(220,169,40,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._category_scroller.ggScrollPosY = 0;
		me._category_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._category_scroller.ggScrollHeight;
			if (e.offsetY < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._category_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._category_scroller.ggScrollByYSmooth(20 * wheelDelta);
		});
		elCornerBg = me._category_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="category_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : calc(100%  -  48px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		hs+='border: none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._category_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight - 8) || (!me._category_scroller.ggHorScrollVisible && contentHeight > this.offsetHeight)) {
					me._category_scroller__vertScrollBg.style.visibility = 'inherit';
					me._category_scroller__vertScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggVertScrollVisible = true;
				} else {
					me._category_scroller__vertScrollBg.style.visibility = 'hidden';
					me._category_scroller__vertScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggVertScrollVisible = false;
				}
				if(me._category_scroller.ggVertScrollVisible) {
					me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth - 8;
					if (me._category_scroller.ggHorScrollVisible) {
						me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight - 8;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height - me._category_scroller__vertScrollBg.getBoundingClientRect().width;
						me._category_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._category_scroller.ggAvailableHeight = me._category_scroller.offsetHeight;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height;
						me._category_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._category_scroller__vertScrollBg.style.height = me._category_scroller.ggAvailableHeight + 'px';
					me._category_scroller.ggVPercentVisible = contentHeight != 0 ? me._category_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._category_scroller.ggVPercentVisible > 1.0) me._category_scroller.ggVPercentVisible = 1.0;
					me._category_scroller.ggScrollHeight =  Math.round(me._category_scroller__vertScrollBg.offsetHeight * me._category_scroller.ggVPercentVisible);
					me._category_scroller__vertScrollFg.style.height = me._category_scroller.ggScrollHeight + 'px';
					me._category_scroller.ggScrollPosY = me._category_scroller.ggScrollPosYPercent * me._category_scroller.ggAvailableHeight;
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
					if (me._category_scroller.ggVPercentVisible < 1.0) {
						me._category_scroller__content.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableWidth = me._category_scroller.offsetWidth;
					me._category_scroller.ggScrollPosY = 0;
					me._category_scroller.ggScrollPosYPercent = 0.0;
					me._category_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._category_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._category_scroller.ggHorScrollVisible || vertScrollWasVisible != me._category_scroller.ggVertScrollVisible) {
					me.updateSize(me._category_scroller);
					me._category_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._category_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 330;
		el.ggHeight = 48;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._category_cloner.callChildLogicBlocks_changenode = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_changenode();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_mouseover();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_active = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_active();
				}
			}
		}
		me._category_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._category_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._category_cloner.ggInstances.length; i++) {
					me._category_cloner.ggInstances[i]._node_cloner.callChildLogicBlocks_activehotspotchanged();
				}
			}
		}
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me._category_cloner.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me._category_cloner.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me._category_cloner.ggNumCols; j++) {
					if (numElements > currElement) {
						me._category_cloner.childNodes[currElement].style['top'] = currYPos + 'px';
						me._category_cloner.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me._category_cloner.childNodes[currElement].scrollHeight);
						me._category_cloner.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
		}
		el.ggUpdate = function(filter) {
			if(me._category_cloner.ggUpdating == true) return;
			me._category_cloner.ggUpdating = true;
			var el=me._category_cloner;
			var curNumCols = 0;
			curNumCols = me._category_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._category_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var firstNode;
			for (var i=0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k]) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				var parameter={};
				parameter.top=(row * me._category_cloner.ggHeight) + 'px';
				parameter.left=(column * me._category_cloner.ggWidth) + 'px';
				parameter.width=me._category_cloner.ggWidth + 'px';
				parameter.height=me._category_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_category_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._category_cloner.callChildLogicBlocks_changenode();
			me._category_cloner.callChildLogicBlocks_mouseover();
			me._category_cloner.callChildLogicBlocks_active();
			me._category_cloner.callChildLogicBlocks_activehotspotchanged();
			me._category_cloner.ggAutoPosition(true);
			me._category_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._category_cloner.parentNode.classList.contains('ggskin_subelement') && me._category_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._category_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"CampusArea",title:"Campus Area"},
			{tag:"Facilities",title:"Facilities"},
			];
		el.ggId="category_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._category_cloner.childNodes.length; i++) {
				var child=me._category_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._category_cloner.ggUpdatePosition=function (useTransition) {
				me._category_cloner.ggUpdate();
		}
		me._category_cloner.ggNodeChange=function () {
			me._category_cloner.ggUpdateConditionNodeChange();
		}
		me._category_scroller__content.appendChild(me._category_cloner);
		me._container_1.appendChild(me._category_scroller);
		me.divSkin.appendChild(me._container_1);
		el=me._admission=document.createElement('div');
		els=me._admission__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Admission";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 24px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #f01c20;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 24px;';
		hs+=cssPrefix + 'border-radius: 24px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 14px 23px 14px 23px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Online Admission";
		el.appendChild(els);
		me._admission.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._admission.onclick=function (e) {
			player.openUrl("https:\/\/one.uph.edu\/","_blank");
		}
		me._admission.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me.divSkin.appendChild(me._admission);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._image_2);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_2__img.setAttribute('src',basePath + 'images/svg_2.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 194px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_1.appendChild(me._svg_2);
		me.divSkin.appendChild(me._rectangle_1);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_3.onclick=function (e) {
			player.setVariableValue('menu', !player.getVariableValue('menu'));
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMxMDIyNjkiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIyNHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KIDxwYXRoIGQ9Ik0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzeiIvPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_3.appendChild(me._svg_1);
		me.divSkin.appendChild(me._rectangle_3);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._category_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._category_scroller.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._text_1 && hotspotTemplates['ht_node'][i]._text_1.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._text_1.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_blue_box_mouseover = function(){
		if(hotspotTemplates['ht_node_blue_box']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_blue_box'].length; i++) {
				if (hotspotTemplates['ht_node_blue_box'][i]._ht_node_blue_box.logicBlock_scaling) {
					hotspotTemplates['ht_node_blue_box'][i]._ht_node_blue_box.logicBlock_scaling();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateScaling == 0) {
					me._ht_node.ggParameter.sx = 1.5;
					me._ht_node.ggParameter.sy = 1.5;
					me._ht_node.style[domTransform]=parameterToTransform(me._ht_node.ggParameter);
				}
				else {
					me._ht_node.ggParameter.sx = 1;
					me._ht_node.ggParameter.sy = 1;
					me._ht_node.style[domTransform]=parameterToTransform(me._ht_node.ggParameter);
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,"");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._text_1.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
			me._ht_node.logicBlock_scaling();
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._text_1.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
			me._ht_node.logicBlock_scaling();
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._text_1.logicBlock_alpha();
			me._ht_node.logicBlock_scaling();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_pulse0=document.createElement('div');
		els=me._image_1_pulse0__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_pulse0';
		hs=basePath + 'images/image_1_pulse0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_pulse";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image anime";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_pulse0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_pulse0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._image_1_pulse0);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._image_10);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 17px 8px 17px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_1.style[domTransition]='opacity 300ms ease 0ms';
				if (me._text_1.ggCurrentLogicStateAlpha == 0) {
					me._text_1.style.visibility=me._text_1.ggVisible?'inherit':'hidden';
					me._text_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._text_1.style.opacity == 0.0) { me._text_1.style.visibility="hidden"; } }, 305);
					me._text_1.style.opacity=0;
				}
			}
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._text_1);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_info.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_info.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_info.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._ht_info.ggCurrentLogicStateScaling == 0) {
					me._ht_info.ggParameter.sx = 1.5;
					me._ht_info.ggParameter.sy = 1.5;
					me._ht_info.style[domTransform]=parameterToTransform(me._ht_info.ggParameter);
				}
				else {
					me._ht_info.ggParameter.sx = 1;
					me._ht_info.ggParameter.sy = 1;
					me._ht_info.style[domTransform]=parameterToTransform(me._ht_info.ggParameter);
				}
			}
		}
		me._ht_info.onclick=function (e) {
			player.setVariableValue('title', me.hotspot.title);
			player.setVariableValue('desc', me.hotspot.description);
			desc();
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
			me._ht_info.logicBlock_scaling();
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
			me._ht_info.logicBlock_scaling();
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._ht_info.logicBlock_scaling();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3_pulse=document.createElement('div');
		els=me._svg_3_pulse__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIyNHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi02aDJ2NnptMC04aC0yVjdoMnYyeiIvPgo8L3N2Zz4K';
		me._svg_3_pulse__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_pulse";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg anime";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3_pulse.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_3_pulse.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._svg_3_pulse);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIyNHB4Ij4KIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz4KIDxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi02aDJ2NnptMC04aC0yVjdoMnYyeiIvPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._svg_3);
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_infolt3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_infolt3=document.createElement('div');
		el.ggId="ht_infoLt3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_infolt3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_infolt3.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_infolt3.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_infolt3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_infolt3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_infolt3.ggUpdatePosition=function (useTransition) {
		}
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._ht_infolt3;
	};
	function SkinHotspotClass_ht_node_blue_box(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_blue_box=document.createElement('div');
		el.ggId="ht_node_blue_box";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='display: flex; align-items: center; justify-content: center;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_blue_box.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_blue_box.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['ht_node_blue_box'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node_blue_box.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node_blue_box.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node_blue_box.style[domTransition]='' + cssPrefix + 'transform 300ms ease 0ms';
				if (me._ht_node_blue_box.ggCurrentLogicStateScaling == 0) {
					me._ht_node_blue_box.ggParameter.sx = 1.1;
					me._ht_node_blue_box.ggParameter.sy = 1.1;
					me._ht_node_blue_box.style[domTransform]=parameterToTransform(me._ht_node_blue_box.ggParameter);
				}
				else {
					me._ht_node_blue_box.ggParameter.sx = 1;
					me._ht_node_blue_box.ggParameter.sy = 1;
					me._ht_node_blue_box.style[domTransform]=parameterToTransform(me._ht_node_blue_box.ggParameter);
				}
			}
		}
		me._ht_node_blue_box.onclick=function (e) {
			me._popup_menu.ggVisible = !me._popup_menu.ggVisible;
			var flag=me._popup_menu.ggVisible;
			me._popup_menu.style[domTransition]='none';
			me._popup_menu.style.visibility=((flag)&&(Number(me._popup_menu.style.opacity)>0||!me._popup_menu.style.opacity))?'inherit':'hidden';
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_blue_box.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_blue_box.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_blue_box']=true;
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
			me._ht_node_blue_box.logicBlock_scaling();
		}
		me._ht_node_blue_box.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_blue_box']=false;
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
			me._ht_node_blue_box.logicBlock_scaling();
		}
		me._ht_node_blue_box.ontouchend=function (e) {
			me.elementMouseOver['ht_node_blue_box']=false;
			me._ht_node_blue_box.logicBlock_scaling();
		}
		me._ht_node_blue_box.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_pulse=document.createElement('div');
		els=me._image_1_pulse__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_pulse';
		hs=basePath + 'images/image_1_pulse.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_pulse";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image anime";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1_pulse.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1_pulse.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node_blue_box.appendChild(me._image_1_pulse);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node_blue_box.appendChild(me._image_1);
		el=me._popup_menu=document.createElement('div');
		els=me._popup_menu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Popup Menu";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : ;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : ;';
		hs+='pointer-events:auto;';
		hs+='display: flex; align-items: center; justify-content: center;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #01336d;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 8px 17px 8px 17px;';
		hs+='overflow: hidden;';
		hs+="position: unset; margin-left: 25px;";
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.description;
		el.appendChild(els);
		me._popup_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._popup_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_node_blue_box.appendChild(me._popup_menu);
		me.__div = me._ht_node_blue_box;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
		} else
		if (hotspot.skinid=='ht_infoLt3') {
			hotspot.skinid = 'ht_infoLt3';
			hsinst = new SkinHotspotClass_ht_infolt3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'ht_node_blue_box';
			hsinst = new SkinHotspotClass_ht_node_blue_box(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_blue_box_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_infoLt3']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_infoLt3'].length; i++) {
				hotspotTemplates['ht_infoLt3'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_blue_box']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_blue_box'].length; i++) {
				hotspotTemplates['ht_node_blue_box'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_category_cloner_Class(item, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 330px; height: 48px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			var tags = player.userdata.tags;
			if (tags.indexOf(me.ggTag) == -1) return false;
			for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
				if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
			}
			return true;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 330;
		el.ggHeight = 48;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_backgroundcolor) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_backgroundcolor();
					}
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_textcolor) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_textcolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_backgroundcolor) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_backgroundcolor();
					}
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_textcolor) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_textcolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nop_";
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner cloner-flex";
		el.ggType='cloner';
		hs ='';
		hs+='height : 48px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 48px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me.__div.appendChild(me._node_cloner);
		el=me._category=document.createElement('div');
		els=me._category__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 330px;';
		hs+='height: 48px;';
		hs+='background: #102269;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="height: inherit; display: flex; align-items: center; justify-content: center;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggTitle;
		el.appendChild(els);
		me._category.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category.onclick=function (e) {
			if (
				(
					((player.getVariableValue('open_tag') == me.ggTag))
				)
			) {
				player.setVariableValue('close_nodes', true);
			}
			if (
				(
					((player.getVariableValue('open_tag') != me.ggTag))
				)
			) {
				player.setVariableValue('close_nodes', false);
			}
			if (
				(
					((player.getVariableValue('open_tag') != me.ggTag))
				)
			) {
				player.setVariableValue('open_tag', me.ggTag);
			}
			if (
				(
					((player.getVariableValue('close_nodes') == true))
				)
			) {
				player.setVariableValue('open_tag', "_nop_");
			}
		}
		me._category.ggUpdatePosition=function (useTransition) {
		}
		me._category.ggNodeChange=function () {
			if (
				(
					((me._category.ggIsActive() == true)) && 
					((player.getVariableValue('category_follow') == true))
				)
			) {
				player.setVariableValue('open_tag', me.ggTag);
			}
		}
		me.__div.appendChild(me._category);
		me._node_cloner.style['display']='none';
		var p = me._node_cloner.parentElement;
		while (p != null && p!==this.divSkin) {
			if (p.ggType && p.ggType == 'cloner') {
				if (p.ggAutoPosition) {
					p.ggAutoPosition(false);
				}
			}
			if (p.ggType && p.ggType == 'scrollarea') {
				if (p.ggUpdatePosition) {
					p.ggUpdatePosition();
				}
			}
			p = p.parentElement;
		}
		skin.updateSize(me._node_cloner);
		me.event_varchanged_open_tag=function() {if (
			(
				((player.getVariableValue('open_tag') != me.ggTag))
			)
		) {
			me._node_cloner.ggText="_nop_";
			if (me._node_cloner.ggText=='') {
				me._node_cloner.ggUpdate([]);
			} else {
				me._node_cloner.ggUpdate(me._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		if (
			(
				((player.getVariableValue('open_tag') != me.ggTag))
			)
		) {
			me._node_cloner.style['display']='none';
			var p = me._node_cloner.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
			skin.updateSize(me._node_cloner);
		}
		if (
			(
				((player.getVariableValue('open_tag') == me.ggTag))
			)
		) {
			me._node_cloner.ggText=me.ggTag;
			if (me._node_cloner.ggText=='') {
				me._node_cloner.ggUpdate([]);
			} else {
				me._node_cloner.ggUpdate(me._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		if (
			(
				((player.getVariableValue('open_tag') == me.ggTag))
			)
		) {
			me._node_cloner.style['display']='inline';
			var p = me._node_cloner.parentElement;
			while (p != null && p!==this.divSkin) {
				if (p.ggType && p.ggType == 'cloner') {
					if (p.ggAutoPosition) {
						p.ggAutoPosition(false);
					}
				}
				if (p.ggType && p.ggType == 'scrollarea') {
					if (p.ggUpdatePosition) {
						p.ggUpdatePosition();
					}
				}
				p = p.parentElement;
			}
			skin.updateSize(me._node_cloner);
		}};
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 330px; height: 48px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 330px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 330px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(16,34,105,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		hs+="height: inherit; display: flex; align-items: center; justify-content: center; background-color: transparent !important;";
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='background-color 300ms ease 0ms, color 300ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me._node_title.ggIsActive() == true)) || 
				((me.elementMouseOver['node_title'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._node_title.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._node_title.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._node_title__text.style[domTransition]='background-color 300ms ease 0ms, color 300ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateBackgroundColor == 0) {
					me._node_title__text.style.backgroundColor="rgba(16,34,105,0.784314)";
				}
				else {
					me._node_title__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._node_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me._node_title.ggIsActive() == true)) || 
				((me.elementMouseOver['node_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._node_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._node_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._node_title__text.style[domTransition]='background-color 300ms ease 0ms, color 300ms ease 0ms';
				if (me._node_title.ggCurrentLogicStateTextColor == 0) {
					me._node_title__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._node_title__text.style.color="rgba(16,34,105,1)";
				}
			}
		}
		me._node_title.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getIsMobile() == true))
				)
			) {
				player.setVariableValue('menu', !player.getVariableValue('menu'));
			}
		}
		me._node_title.onmouseover=function (e) {
			me.elementMouseOver['node_title']=true;
			me._node_title.logicBlock_backgroundcolor();
			me._node_title.logicBlock_textcolor();
		}
		me._node_title.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._node_title__text)
					return;
				}
			}
			me.elementMouseOver['node_title']=false;
			me._node_title.logicBlock_backgroundcolor();
			me._node_title.logicBlock_textcolor();
		}
		me._node_title.ontouchend=function (e) {
			me.elementMouseOver['node_title']=false;
			me._node_title.logicBlock_backgroundcolor();
			me._node_title.logicBlock_textcolor();
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._node_title);
	};
	player.addListener('varchanged_open_tag', function() {
		var inst_j=skin;
		for(var i = 0; i < inst_j._category_cloner.ggInstances.length; i++) {
			var inst_i=inst_j._category_cloner.ggInstances[i];
			inst_i.event_varchanged_open_tag();
		}
	});
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;} .ggskin.ggskin_scrollarea_vscrollbg{z-index: 166} #container{overflow: unset !important} .popupMenu {cursor: pointer}'));
	document.head.appendChild(style);
	me._backdropmenuhide.logicBlock_visible();
	me._container_1.logicBlock_position();
	player.addListener('changenode', function(args) { me._backdropmenuhide.logicBlock_visible();me._container_1.logicBlock_position(); });
	player.addListener('varchanged_menu', function(args) { me._backdropmenuhide.logicBlock_visible();me._container_1.logicBlock_position(); });
	player.addListener('changenode', function(args) { me._category_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._category_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._category_cloner.callChildLogicBlocks_active(); });
	player.addListener('activehotspotchanged', function(args) { me._category_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_node_blue_box_mouseover(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};