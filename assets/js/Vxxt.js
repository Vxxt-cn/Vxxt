window.$ = selector => document.querySelector(selector)
const getOriginalContent = selector => $(selector).getAttribute("original-content")
window.subtitle = getOriginalContent(".content-subtitle")
window.signature = getOriginalContent("#signature")
window.config = {
		SIM_RESOLUTION: 128,
		DYE_RESOLUTION: 1024,
		CAPTURE_RESOLUTION: 512,
		DENSITY_DISSIPATION: 1,
		VELOCITY_DISSIPATION: 0.2,
		PRESSURE: 0.8,
		PRESSURE_ITERATIONS: 20,
		CURL: 30,
		SPLAT_RADIUS: 0.25,
		SPLAT_FORCE: 6000,
		SHADING: true,
		COLORFUL: true,
		COLOR_UPDATE_SPEED: 10,
		PAUSED: false,
		BACK_COLOR: {
			r: 30,
			g: 31,
			b: 33
		},
		TRANSPARENT: false,
		BLOOM: true,
		BLOOM_ITERATIONS: 8,
		BLOOM_RESOLUTION: 256,
		BLOOM_INTENSITY: 0.4,
		BLOOM_THRESHOLD: 0.8,
		BLOOM_SOFT_KNEE: 0.7,
		SUNRAYS: true,
		SUNRAYS_RESOLUTION: 196,
		SUNRAYS_WEIGHT: 1.0,
	}
	<!--鼠标点击爱心-->
	! function(e, t, a) {
		function r() {
			for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[e].y--, s[e]
				.scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x + "px;top:" + s[e].y + "px;opacity:" +
				s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e].scale + ") rotate(45deg);background:" + s[e].color +
				";z-index:99999");
			requestAnimationFrame(r)
		}

		function n() {
			var t = "function" == typeof e.onclick && e.onclick;
			e.onclick = function(e) {
				t && t(),
					o(e)
			}
		}

		function o(e) {
			var a = t.createElement("div");
			a.className = "heart",
				s.push({
					el: a,
					x: e.clientX - 5,
					y: e.clientY - 5,
					scale: 1,
					alpha: 1,
					color: c()
				}),
				t.body.appendChild(a)
		}

		function i(e) {
			var a = t.createElement("style");
			a.type = "text/css";
			try {
				a.appendChild(t.createTextNode(e))
			} catch (t) {
				a.styleSheet.cssText = e
			}
			t.getElementsByTagName("head")[0].appendChild(a)
		}

		function c() {
			return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
		}
		var s = [];
		e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e
			.oRequestAnimationFrame || e.msRequestAnimationFrame ||
			function(e) {
				setTimeout(e, 1e3 / 60)
			},
			i(
				".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
			),
			n(),
			r()
	}(window, document);
//<!--鼠标点击爱心-->

//禁用右键（防止右键查看源代码） 
window.oncontextmenu = function() {
	return false;
}
//禁止任何键盘敲击事件（防止F12和shift+ctrl+i调起开发者工具） 
window.onkeydown = window.onkeyup = window.onkeypress = function() {
	window.event.returnValue = false;
	return false;
}
//如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面 
var threshold = 160; // 打开控制台的宽或高阈值
// 每秒检查一次
setInterval(function() {
	if (window.outerWidth - window.innerWidth > threshold ||
		window.outerHeight - window.innerHeight > threshold) {
		// 如果打开控制台，则关闭控制台
		window.close();
		window.location = "about:blank";
	}
}, 1e3);
//禁止调试
setInterval("debugger;console.log('请勿非法调试');");;
