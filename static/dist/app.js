webpackJsonp([0,3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(300);


/***/ }),

/***/ 296:
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(336);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouterDom = __webpack_require__(483);

	var _header = __webpack_require__(523);

	var _header2 = _interopRequireDefault(_header);

	var _footer = __webpack_require__(526);

	var _footer2 = _interopRequireDefault(_footer);

	var _home = __webpack_require__(527);

	var _home2 = _interopRequireDefault(_home);

	var _hot = __webpack_require__(529);

	var _hot2 = _interopRequireDefault(_hot);

	var _recommends = __webpack_require__(530);

	var _recommends2 = _interopRequireDefault(_recommends);

	var _original = __webpack_require__(531);

	var _original2 = _interopRequireDefault(_original);

	var _main = __webpack_require__(532);

	var _main2 = _interopRequireDefault(_main);

	var _main3 = __webpack_require__(535);

	var _main4 = _interopRequireDefault(_main3);

	var _main5 = __webpack_require__(545);

	var _main6 = _interopRequireDefault(_main5);

	var _main7 = __webpack_require__(546);

	var _main8 = _interopRequireDefault(_main7);

	__webpack_require__(547);

	__webpack_require__(525);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // $('.ui.sidebar.chat')
	      //   .sidebar('setting', 'transition', 'overlay')
	      //   .sidebar('toggle');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRouterDom.BrowserRouter,
	        { basename: '/app' },
	        _react2.default.createElement(
	          'div',
	          { id: 'app' },
	          _react2.default.createElement(_header2.default, null),
	          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
	          _react2.default.createElement(_reactRouterDom.Route, { path: '/hot', component: _hot2.default }),
	          _react2.default.createElement(_reactRouterDom.Route, { path: '/original', component: _original2.default }),
	          _react2.default.createElement(_reactRouterDom.Route, { path: '/recommend', component: _recommends2.default }),
	          _react2.default.createElement(_reactRouterDom.Route, { path: '/community', component: _main2.default }),
	          _react2.default.createElement(_reactRouterDom.Route, { path: '/personal', component: _main4.default }),
	          _react2.default.createElement(_reactRouterDom.Route, { path: '/sheet/:sheetId', component: _main6.default }),
	          _react2.default.createElement(_footer2.default, null),
	          _react2.default.createElement(_main8.default, null)
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(App, null), $('#react-root')[0]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(483);

	var _logo = __webpack_require__(524);

	var _logo2 = _interopRequireDefault(_logo);

	__webpack_require__(525);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Top = function (_React$Component) {
	  _inherits(Top, _React$Component);

	  function Top(props) {
	    _classCallCheck(this, Top);

	    return _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this, props));
	  }

	  _createClass(Top, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('.ui .dropdown').dropdown({
	        action: 'hide'
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'header-top' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui grid container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'six wide column' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui segment' },
	              _react2.default.createElement(
	                'div',
	                { className: 'ui secondary menu' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'icon-home item' },
	                  _react2.default.createElement(
	                    _reactRouterDom.Link,
	                    { to: '/' },
	                    _react2.default.createElement('i', { className: 'home icon big link' })
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'four wide column' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui center aligned segment' },
	              _react2.default.createElement(
	                'div',
	                { className: 'ui secondary menu' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'item' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'image' },
	                    _react2.default.createElement('img', { src: _logo2.default })
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'six wide column' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui segment' },
	              _react2.default.createElement(
	                'div',
	                { className: 'ui secondary menu' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'right menu' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'item' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'ui icon input' },
	                      _react2.default.createElement('input', { type: 'text', placeholder: 'Search...' }),
	                      _react2.default.createElement('i', { className: 'search link icon' })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'icon-user item' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'ui floating top right pointing dropdown' },
	                      _react2.default.createElement('img', { className: 'ui avatar image',
	                        src: '/image/avatar.png' }),
	                      _react2.default.createElement('i', { className: 'dropdown icon' }),
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'menu' },
	                        _react2.default.createElement(
	                          'div',
	                          { className: 'item' },
	                          '\u4E2A\u4EBA\u4E3B\u9875'
	                        ),
	                        _react2.default.createElement(
	                          _reactRouterDom.Link,
	                          { to: '/personal', className: 'item' },
	                          '\u4E2A\u4EBA\u4E2D\u5FC3'
	                        ),
	                        _react2.default.createElement('div', { className: 'divider' }),
	                        _react2.default.createElement(
	                          'div',
	                          { className: 'item' },
	                          '\u8BBE\u7F6E'
	                        ),
	                        _react2.default.createElement(
	                          'div',
	                          { className: 'item' },
	                          '\u6CE8\u9500'
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Top;
	}(_react2.default.Component);

	var Divider = function (_React$Component2) {
	  _inherits(Divider, _React$Component2);

	  function Divider() {
	    _classCallCheck(this, Divider);

	    return _possibleConstructorReturn(this, (Divider.__proto__ || Object.getPrototypeOf(Divider)).apply(this, arguments));
	  }

	  _createClass(Divider, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: 'ui divider' });
	    }
	  }]);

	  return Divider;
	}(_react2.default.Component);

	var Navigation = function (_React$Component3) {
	  _inherits(Navigation, _React$Component3);

	  function Navigation() {
	    _classCallCheck(this, Navigation);

	    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).apply(this, arguments));
	  }

	  _createClass(Navigation, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'navigation' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui four item menu' },
	            _react2.default.createElement(
	              _reactRouterDom.NavLink,
	              { to: '/hot', activeClassName: 'active', className: 'item' },
	              '\u672C\u5468\u70ED\u95E8'
	            ),
	            _react2.default.createElement(
	              _reactRouterDom.NavLink,
	              { to: '/recommend', activeClassName: 'active', className: 'item' },
	              '\u6728\u5C51\u63A8\u8350'
	            ),
	            _react2.default.createElement(
	              _reactRouterDom.NavLink,
	              { to: '/original', activeClassName: 'active', className: 'item' },
	              '\u6700\u65B0\u539F\u521B'
	            ),
	            _react2.default.createElement(
	              _reactRouterDom.NavLink,
	              { to: '/community', activeClassName: 'active', className: 'item' },
	              '\u97F3\u4E50\u793E\u533A'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Navigation;
	}(_react2.default.Component);

	var Header = function (_React$Component4) {
	  _inherits(Header, _React$Component4);

	  function Header() {
	    _classCallCheck(this, Header);

	    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'header' },
	        _react2.default.createElement(Top, null),
	        _react2.default.createElement(Divider, null),
	        _react2.default.createElement(Navigation, null)
	      );
	    }
	  }]);

	  return Header;
	}(_react2.default.Component);

	exports.default = Header;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAZCAMAAADdXpaGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABsUExURUdwTCkeGiMZFiUdGSMZFiUbGDYpKSwjHyMZFiQaFiMZFiMZFiMZFiMZFiMZFiMZFiQaGCMaFyMZFiMZFiMZFiQaFyMZFiMZFiMaFv///yMZFiMZFiMZFv7+/pSPjVNLSeLh4TwzMG5nZcTBwDMKUrwAAAAcdFJOUwAVwR75KwYO3kOl73y3iMw5Xq+TTVXo1XEBZ51oWI6CAAAD3UlEQVRIx61X63qbMAwFbDA3c7+jtN32/u84yZKJ02771qb+k0Ascc7RkUyiKFyZiWOTRd+wmrz7aqjabAVu5WfxNJAEpi/F7VMC4Vrn/TkgOXyJTNHC+5Wop4BoSD8fFJf05OU8pqLoGy9N9YwmMUD8+SiSwxbXc+Mtd055RpAU9JdkzB8Lmh1o2/IZINNfeMzpP9F/rGcBUIfICoe0bzqWrGYDmZlbQ83Sq119Nu7WAUm40f009qaAkdN1dGOiQbEXzVlzGec/yHjAg+tTImjQPZoyLFi3jOEy74bz76czF32vSVDauPBUMs6G1cr0OmijHpPhb8q1yWIiF9R+ADI+mo2emCWASJoorTQGOwl6WN3PJQM5YJm73hKD89ro+OwD5MfUILCeqbepXkoMUgsMc1/x7RJsY8/53TyqyqG5dO0Ra4lsEjjjXBcGeFzVrgC0u+aPwwdY2OLFbZw5PifOpmJcG1hbKd537m43XaygSZ7QExHP2MUjqWE4iPUAzaCnaBdFTjhlevXBB+ecE11QHxR86YBn4sYGFr7RQYUAM55+mea5oYNaKJkl51Upq5OMGr0lwDglVKCEf1wJa3YRGUgew0/uxCrYFoY3SuYRK0h8EvmV1/HQNK9vt5drqA2oTsxC2Z0S61CJWIimGgbejwBc+2PujAWVtFpKye50SqkE1liaBi63y9oAXm632w9Q18ibOL/D00u3aO9ZJoqphCkCcKaYYWEejVQ4FwJMGotRjBpKI71XPdaBtSMgr37ALDzeUvGemFRxhVQF1Z1ALYqKK9ughKiYi9ullJRAQ+vnxIDOeQ8EFfiFQH4KkEzMOTFBb1KuELa1dLGD6Hb6vh6ZQOu6wqwyrn0piZhlGMbpJIo090GKxXpzisRRQN0T9Ay5Qica2F6hg7OD72vLSd3+fdArX3rP3hHFeU1sZU3h0Ifb7e2nPzA69hwSHEKTukmIU7UMxJwdVlECzXhwpQe6t7EyKGx1nXIuEc7s/t40NguywY+XVyzg5I+wReiOEj+RmDWaf4QWa9Pg5dSmFwTvTo2eMqSkThsEQxPU0ARer7lHDdOtlLfnpln74PWjcfd0mQaDVealNOew5jsdSBVlwumSaIUGT8bEnUZ+I6ptW+SgNJnSuMvcDdbokrqyKzcsTbl87B7egixonWz3AddLpOWmiejUO/bI4HvLELseqxoT1eS1fAo34oZ84zPUxlfcdi/lRDHtzDFWfXzhlNb25lUMKlZcvrhgrQx/mqLj+6qQVO83RnG63y+NumfPUh+TPx4yIv0cfe/6j78o5g//Y8z3/Lf51PoN6rBa5hoOjIUAAAAASUVORK5CYII="

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(336);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Footer = function (_React$Component) {
	  _inherits(Footer, _React$Component);

	  function Footer() {
	    _classCallCheck(this, Footer);

	    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	  }

	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui inverted vertical footer segment' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container' },
	          _react2.default.createElement(
	            'div',
	            {
	              className: 'ui stackable inverted divided equal height stackable grid' },
	            _react2.default.createElement(
	              'div',
	              { className: 'three wide column' },
	              _react2.default.createElement(
	                'h4',
	                { className: 'ui inverted header' },
	                '\u5173\u4E8E'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'ui inverted link list' },
	                _react2.default.createElement(
	                  'a',
	                  { href: '#', className: 'item' },
	                  'MuShare Group'
	                ),
	                _react2.default.createElement(
	                  'a',
	                  { href: '#', className: 'item' },
	                  'App \u4E0B\u8F7D'
	                ),
	                _react2.default.createElement(
	                  'a',
	                  { href: '#', className: 'item' },
	                  '\u5173\u4E8E\u6211\u4EEC'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'three wide column' },
	              _react2.default.createElement(
	                'h4',
	                { className: 'ui inverted header' },
	                '\u670D\u52A1'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'ui inverted link list' },
	                _react2.default.createElement(
	                  'a',
	                  { href: '#', className: 'item' },
	                  '\u97F3\u4E50\u54A8\u8BE2'
	                ),
	                _react2.default.createElement(
	                  'a',
	                  { href: '#', className: 'item' },
	                  '\u8054\u7CFB\u5408\u4F5C'
	                ),
	                _react2.default.createElement(
	                  'a',
	                  { href: '#', className: 'item' },
	                  '\u5E38\u7528\u94FE\u63A5'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'three wide column' },
	              _react2.default.createElement(
	                'h4',
	                { className: 'ui inverted header' },
	                '\u7248\u6743\u6240\u6709'
	              ),
	              _react2.default.createElement(
	                'p',
	                null,
	                '\xA92017 MuShare Group'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Footer;
	}(_react2.default.Component);

	exports.default = Footer;

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(336);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(528);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home(props) {
	    _classCallCheck(this, Home);

	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	  }

	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('.roundabout_box ul').roundabout({
	        duration: 1000,
	        minScale: 0.6,
	        autoplay: true,
	        autoplayDuration: 5000,
	        minOpacity: 0,
	        maxOpacity: 1,
	        reflect: true,
	        startingChild: 3,
	        autoplayInitialDelay: 5000,
	        autoplayPauseOnHover: true,
	        enableDrag: true
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'home' },
	        _react2.default.createElement(
	          'div',
	          { className: 'carousel exhibition_hall' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui container roundabout_box' },
	            _react2.default.createElement(
	              'ul',
	              null,
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement('img', { src: '/image/zt1.png', alt: '' })
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement('img', { src: '/image/zt2.png', alt: '' })
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement('img', { src: '/image/zt3.png', alt: '' })
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement('img', { src: '/image/zt4.png', alt: '' })
	              )
	            )
	          ),
	          _react2.default.createElement('div', { 'class': 'clear' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container hot' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui medium header' },
	            '\u672C\u5468\u70ED\u95E8'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'ui four link cards' },
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container recommend' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui medium header' },
	            '\u6728\u5C51\u63A8\u8350'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'ui four link cards' },
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container original' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui medium header' },
	            '\u6700\u65B0\u539F\u521B'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'ui four link cards' },
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Home;
	}(_react2.default.Component);

	exports.default = Home;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * jQuery Roundabout - v2.4.2
	 * http://fredhq.com/projects/roundabout
	 *
	 * Moves list-items of enabled ordered and unordered lists long
	 * a chosen path. Includes the default "lazySusan" path, that
	 * moves items long a spinning turntable.
	 *
	 * Terms of Use // jQuery Roundabout
	 *
	 * Open source under the BSD license
	 *
	 * Copyright (c) 2011-2012, Fred LeBlanc
	 * All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *
	 *   - Redistributions of source code must retain the above copyright
	 *     notice, this list of conditions and the following disclaimer.
	 *   - Redistributions in binary form must reproduce the above
	 *     copyright notice, this list of conditions and the following
	 *     disclaimer in the documentation and/or other materials provided
	 *     with the distribution.
	 *   - Neither the name of the author nor the names of its contributors
	 *     may be used to endorse or promote products derived from this
	 *     software without specific prior written permission.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
	 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	 * POSSIBILITY OF SUCH DAMAGE.
	 */
	(function (a) {
	  "use strict";
	  var b, c, d;a.extend({ roundaboutShapes: { def: "lazySusan", lazySusan: function lazySusan(a, b, c) {
	        return { x: Math.sin(a + b), y: Math.sin(a + 3 * Math.PI / 2 + b) / 8 * c, z: (Math.cos(a + b) + 1) / 2, scale: Math.sin(a + Math.PI / 2 + b) / 2 + .5 };
	      } } });b = { bearing: 0, tilt: 0, minZ: 100, maxZ: 280, minOpacity: .4, maxOpacity: 1, minScale: .4, maxScale: 1, duration: 600, btnNext: null, btnNextCallback: function btnNextCallback() {}, btnPrev: null, btnPrevCallback: function btnPrevCallback() {}, btnToggleAutoplay: null, btnStartAutoplay: null, btnStopAutoplay: null, easing: "swing", clickToFocus: true, clickToFocusCallback: function clickToFocusCallback() {}, focusBearing: 0, shape: "lazySusan", debug: false, childSelector: "li", startingChild: null, reflect: false, floatComparisonThreshold: .001, autoplay: false, autoplayDuration: 1e3, autoplayPauseOnHover: false, autoplayCallback: function autoplayCallback() {}, autoplayInitialDelay: 0, enableDrag: false, dropDuration: 600, dropEasing: "swing", dropAnimateTo: "nearest", dropCallback: function dropCallback() {}, dragAxis: "x", dragFactor: 4, triggerFocusEvents: true, triggerBlurEvents: true, responsive: false };c = { autoplayInterval: null, autoplayIsRunning: false, autoplayStartTimeout: null, animating: false, childInFocus: -1, touchMoveStartPosition: null, stopAnimation: false, lastAnimationStep: false };d = { init: function init(e, f, g) {
	      var h,
	          i = new Date().getTime();e = (typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" ? e : {};f = a.isFunction(f) ? f : function () {};f = a.isFunction(e) ? e : f;h = a.extend({}, b, e, c);return this.each(function () {
	        var b = a(this),
	            c = b.children(h.childSelector).length,
	            e = 360 / c,
	            i = h.startingChild && h.startingChild > c - 1 ? c - 1 : h.startingChild,
	            j = h.startingChild === null ? h.bearing : 360 - i * e,
	            k = b.css("position") !== "static" ? b.css("position") : "relative";b.css({ padding: 0, position: k }).addClass("roundabout-holder").data("roundabout", a.extend({}, h, { startingChild: i, bearing: j, oppositeOfFocusBearing: d.normalize.apply(null, [h.focusBearing - 180]), dragBearing: j, period: e }));if (g) {
	          b.unbind(".roundabout").children(h.childSelector).unbind(".roundabout");
	        } else {
	          if (h.responsive) {
	            a(window).bind("resize", function () {
	              d.stopAutoplay.apply(b);d.relayoutChildren.apply(b);
	            });
	          }
	        }if (h.clickToFocus) {
	          b.children(h.childSelector).each(function (c) {
	            a(this).bind("click.roundabout", function () {
	              var e = d.getPlacement.apply(b, [c]);if (!d.isInFocus.apply(b, [e])) {
	                d.stopAnimation.apply(a(this));if (!b.data("roundabout").animating) {
	                  d.animateBearingToFocus.apply(b, [e, b.data("roundabout").clickToFocusCallback]);
	                }return false;
	              }
	            });
	          });
	        }if (h.btnNext) {
	          a(h.btnNext).bind("click.roundabout", function () {
	            if (!b.data("roundabout").animating) {
	              d.animateToNextChild.apply(b, [b.data("roundabout").btnNextCallback]);
	            }return false;
	          });
	        }if (h.btnPrev) {
	          a(h.btnPrev).bind("click.roundabout", function () {
	            d.animateToPreviousChild.apply(b, [b.data("roundabout").btnPrevCallback]);return false;
	          });
	        }if (h.btnToggleAutoplay) {
	          a(h.btnToggleAutoplay).bind("click.roundabout", function () {
	            d.toggleAutoplay.apply(b);return false;
	          });
	        }if (h.btnStartAutoplay) {
	          a(h.btnStartAutoplay).bind("click.roundabout", function () {
	            d.startAutoplay.apply(b);return false;
	          });
	        }if (h.btnStopAutoplay) {
	          a(h.btnStopAutoplay).bind("click.roundabout", function () {
	            d.stopAutoplay.apply(b);return false;
	          });
	        }if (h.autoplayPauseOnHover) {
	          b.bind("mouseenter.roundabout.autoplay", function () {
	            d.stopAutoplay.apply(b, [true]);
	          }).bind("mouseleave.roundabout.autoplay", function () {
	            d.startAutoplay.apply(b);
	          });
	        }if (h.enableDrag) {
	          if (!a.isFunction(b.drag)) {
	            if (h.debug) {
	              alert("You do not have the drag plugin loaded.");
	            }
	          } else if (!a.isFunction(b.drop)) {
	            if (h.debug) {
	              alert("You do not have the drop plugin loaded.");
	            }
	          } else {
	            b.drag(function (a, c) {
	              var e = b.data("roundabout"),
	                  f = e.dragAxis.toLowerCase() === "x" ? "deltaX" : "deltaY";d.stopAnimation.apply(b);d.setBearing.apply(b, [e.dragBearing + c[f] / e.dragFactor]);
	            }).drop(function (a) {
	              var c = b.data("roundabout"),
	                  e = d.getAnimateToMethod(c.dropAnimateTo);d.allowAnimation.apply(b);d[e].apply(b, [c.dropDuration, c.dropEasing, c.dropCallback]);c.dragBearing = c.period * d.getNearestChild.apply(b);
	            });
	          }b.each(function () {
	            var b = a(this).get(0),
	                c = a(this).data("roundabout"),
	                e = c.dragAxis.toLowerCase() === "x" ? "pageX" : "pageY",
	                f = d.getAnimateToMethod(c.dropAnimateTo);if (b.addEventListener) {
	              b.addEventListener("touchstart", function (a) {
	                c.touchMoveStartPosition = a.touches[0][e];
	              }, false);b.addEventListener("touchmove", function (b) {
	                var f = (b.touches[0][e] - c.touchMoveStartPosition) / c.dragFactor;b.preventDefault();d.stopAnimation.apply(a(this));d.setBearing.apply(a(this), [c.dragBearing + f]);
	              }, false);b.addEventListener("touchend", function (b) {
	                b.preventDefault();d.allowAnimation.apply(a(this));f = d.getAnimateToMethod(c.dropAnimateTo);d[f].apply(a(this), [c.dropDuration, c.dropEasing, c.dropCallback]);c.dragBearing = c.period * d.getNearestChild.apply(a(this));
	              }, false);
	            }
	          });
	        }d.initChildren.apply(b, [f, g]);
	      });
	    }, initChildren: function initChildren(b, c) {
	      var e = a(this),
	          f = e.data("roundabout");b = b || function () {};e.children(f.childSelector).each(function (b) {
	        var f,
	            g,
	            h,
	            i = d.getPlacement.apply(e, [b]);if (c && a(this).data("roundabout")) {
	          f = a(this).data("roundabout").startWidth;g = a(this).data("roundabout").startHeight;h = a(this).data("roundabout").startFontSize;
	        }a(this).addClass("roundabout-moveable-item").css("position", "absolute");a(this).data("roundabout", { startWidth: f || a(this).width(), startHeight: g || a(this).height(), startFontSize: h || parseInt(a(this).css("font-size"), 10), degrees: i, backDegrees: d.normalize.apply(null, [i - 180]), childNumber: b, currentScale: 1, parent: e });
	      });d.updateChildren.apply(e);if (f.autoplay) {
	        f.autoplayStartTimeout = setTimeout(function () {
	          d.startAutoplay.apply(e);
	        }, f.autoplayInitialDelay);
	      }e.trigger("ready");b.apply(e);return e;
	    }, updateChildren: function updateChildren() {
	      return this.each(function () {
	        var b = a(this),
	            c = b.data("roundabout"),
	            e = -1,
	            f = { bearing: c.bearing, tilt: c.tilt, stage: { width: Math.floor(a(this).width() * .9), height: Math.floor(a(this).height() * .9) }, animating: c.animating, inFocus: c.childInFocus, focusBearingRadian: d.degToRad.apply(null, [c.focusBearing]), shape: a.roundaboutShapes[c.shape] || a.roundaboutShapes[a.roundaboutShapes.def] };f.midStage = { width: f.stage.width / 2, height: f.stage.height / 2 };f.nudge = { width: f.midStage.width + f.stage.width * .05, height: f.midStage.height + f.stage.height * .05 };f.zValues = { min: c.minZ, max: c.maxZ, diff: c.maxZ - c.minZ };f.opacity = { min: c.minOpacity, max: c.maxOpacity, diff: c.maxOpacity - c.minOpacity };f.scale = { min: c.minScale, max: c.maxScale, diff: c.maxScale - c.minScale };b.children(c.childSelector).each(function (g) {
	          if (d.updateChild.apply(b, [a(this), f, g, function () {
	            a(this).trigger("ready");
	          }]) && (!f.animating || c.lastAnimationStep)) {
	            e = g;a(this).addClass("roundabout-in-focus");
	          } else {
	            a(this).removeClass("roundabout-in-focus");
	          }
	        });if (e !== f.inFocus) {
	          if (c.triggerBlurEvents) {
	            b.children(c.childSelector).eq(f.inFocus).trigger("blur");
	          }c.childInFocus = e;if (c.triggerFocusEvents && e !== -1) {
	            b.children(c.childSelector).eq(e).trigger("focus");
	          }
	        }b.trigger("childrenUpdated");
	      });
	    }, updateChild: function updateChild(b, c, e, f) {
	      var g,
	          h = this,
	          i = a(b),
	          j = i.data("roundabout"),
	          k = [],
	          l = d.degToRad.apply(null, [360 - j.degrees + c.bearing]);f = f || function () {};l = d.normalizeRad.apply(null, [l]);g = c.shape(l, c.focusBearingRadian, c.tilt);g.scale = g.scale > 1 ? 1 : g.scale;g.adjustedScale = (c.scale.min + c.scale.diff * g.scale).toFixed(4);g.width = (g.adjustedScale * j.startWidth).toFixed(4);g.height = (g.adjustedScale * j.startHeight).toFixed(4);i.css({ left: (g.x * c.midStage.width + c.nudge.width - g.width / 2).toFixed(0) + "px", top: (g.y * c.midStage.height + c.nudge.height - g.height / 2).toFixed(0) + "px", width: g.width + "px", height: g.height + "px", opacity: (c.opacity.min + c.opacity.diff * g.scale).toFixed(2), zIndex: Math.round(c.zValues.min + c.zValues.diff * g.z), fontSize: (g.adjustedScale * j.startFontSize).toFixed(1) + "px" });j.currentScale = g.adjustedScale;if (h.data("roundabout").debug) {
	        k.push('<div style="font-weight: normal; font-size: 10px; padding: 2px; width: ' + i.css("width") + '; background-color: #ffc;">');k.push('<strong style="font-size: 12px; white-space: nowrap;">Child ' + e + "</strong><br />");k.push("<strong>left:</strong> " + i.css("left") + "<br />");k.push("<strong>top:</strong> " + i.css("top") + "<br />");k.push("<strong>width:</strong> " + i.css("width") + "<br />");k.push("<strong>opacity:</strong> " + i.css("opacity") + "<br />");k.push("<strong>height:</strong> " + i.css("height") + "<br />");k.push("<strong>z-index:</strong> " + i.css("z-index") + "<br />");k.push("<strong>font-size:</strong> " + i.css("font-size") + "<br />");k.push("<strong>scale:</strong> " + i.data("roundabout").currentScale);k.push("</div>");i.html(k.join(""));
	      }i.trigger("reposition");f.apply(h);return d.isInFocus.apply(h, [j.degrees]);
	    }, setBearing: function setBearing(b, c) {
	      c = c || function () {};b = d.normalize.apply(null, [b]);this.each(function () {
	        var c,
	            e,
	            f,
	            g = a(this),
	            h = g.data("roundabout"),
	            i = h.bearing;h.bearing = b;g.trigger("bearingSet");d.updateChildren.apply(g);c = Math.abs(i - b);if (!h.animating || c > 180) {
	          return;
	        }c = Math.abs(i - b);g.children(h.childSelector).each(function (c) {
	          var e;if (d.isChildBackDegreesBetween.apply(a(this), [b, i])) {
	            e = i > b ? "Clockwise" : "Counterclockwise";a(this).trigger("move" + e + "ThroughBack");
	          }
	        });
	      });c.apply(this);return this;
	    }, adjustBearing: function adjustBearing(b, c) {
	      c = c || function () {};if (b === 0) {
	        return this;
	      }this.each(function () {
	        d.setBearing.apply(a(this), [a(this).data("roundabout").bearing + b]);
	      });c.apply(this);return this;
	    }, setTilt: function setTilt(b, c) {
	      c = c || function () {};this.each(function () {
	        a(this).data("roundabout").tilt = b;d.updateChildren.apply(a(this));
	      });c.apply(this);return this;
	    }, adjustTilt: function adjustTilt(b, c) {
	      c = c || function () {};this.each(function () {
	        d.setTilt.apply(a(this), [a(this).data("roundabout").tilt + b]);
	      });c.apply(this);return this;
	    }, animateToBearing: function animateToBearing(b, c, e, f, g) {
	      var h = new Date().getTime();g = g || function () {};if (a.isFunction(f)) {
	        g = f;f = null;
	      } else if (a.isFunction(e)) {
	        g = e;e = null;
	      } else if (a.isFunction(c)) {
	        g = c;c = null;
	      }this.each(function () {
	        var i,
	            j,
	            k,
	            l = a(this),
	            m = l.data("roundabout"),
	            n = !c ? m.duration : c,
	            o = e ? e : m.easing || "swing";if (!f) {
	          f = { timerStart: h, start: m.bearing, totalTime: n };
	        }i = h - f.timerStart;if (m.stopAnimation) {
	          d.allowAnimation.apply(l);m.animating = false;return;
	        }if (i < n) {
	          if (!m.animating) {
	            l.trigger("animationStart");
	          }m.animating = true;if (typeof a.easing.def === "string") {
	            j = a.easing[o] || a.easing[a.easing.def];k = j(null, i, f.start, b - f.start, f.totalTime);
	          } else {
	            k = a.easing[o](i / f.totalTime, i, f.start, b - f.start, f.totalTime);
	          }if (d.compareVersions.apply(null, [a().jquery, "1.7.2"]) >= 0 && !a.easing["easeOutBack"]) {
	            k = f.start + (b - f.start) * k;
	          }k = d.normalize.apply(null, [k]);m.dragBearing = k;d.setBearing.apply(l, [k, function () {
	            setTimeout(function () {
	              d.animateToBearing.apply(l, [b, n, o, f, g]);
	            }, 0);
	          }]);
	        } else {
	          m.lastAnimationStep = true;b = d.normalize.apply(null, [b]);d.setBearing.apply(l, [b, function () {
	            l.trigger("animationEnd");
	          }]);m.animating = false;m.lastAnimationStep = false;m.dragBearing = b;g.apply(l);
	        }
	      });return this;
	    }, animateToNearbyChild: function animateToNearbyChild(b, c) {
	      var e = b[0],
	          f = b[1],
	          g = b[2] || function () {};if (a.isFunction(f)) {
	        g = f;f = null;
	      } else if (a.isFunction(e)) {
	        g = e;e = null;
	      }return this.each(function () {
	        var b,
	            h,
	            i = a(this),
	            j = i.data("roundabout"),
	            k = !j.reflect ? j.bearing % 360 : j.bearing,
	            l = i.children(j.childSelector).length;if (!j.animating) {
	          if (j.reflect && c === "previous" || !j.reflect && c === "next") {
	            k = Math.abs(k) < j.floatComparisonThreshold ? 360 : k;for (b = 0; b < l; b += 1) {
	              h = { lower: j.period * b, upper: j.period * (b + 1) };h.upper = b === l - 1 ? 360 : h.upper;if (k <= Math.ceil(h.upper) && k >= Math.floor(h.lower)) {
	                if (l === 2 && k === 360) {
	                  d.animateToDelta.apply(i, [-180, e, f, g]);
	                } else {
	                  d.animateBearingToFocus.apply(i, [h.lower, e, f, g]);
	                }break;
	              }
	            }
	          } else {
	            k = Math.abs(k) < j.floatComparisonThreshold || 360 - Math.abs(k) < j.floatComparisonThreshold ? 0 : k;for (b = l - 1; b >= 0; b -= 1) {
	              h = { lower: j.period * b, upper: j.period * (b + 1) };h.upper = b === l - 1 ? 360 : h.upper;if (k >= Math.floor(h.lower) && k < Math.ceil(h.upper)) {
	                if (l === 2 && k === 360) {
	                  d.animateToDelta.apply(i, [180, e, f, g]);
	                } else {
	                  d.animateBearingToFocus.apply(i, [h.upper, e, f, g]);
	                }break;
	              }
	            }
	          }
	        }
	      });
	    }, animateToNearestChild: function animateToNearestChild(b, c, e) {
	      e = e || function () {};if (a.isFunction(c)) {
	        e = c;c = null;
	      } else if (a.isFunction(b)) {
	        e = b;b = null;
	      }return this.each(function () {
	        var f = d.getNearestChild.apply(a(this));d.animateToChild.apply(a(this), [f, b, c, e]);
	      });
	    }, animateToChild: function animateToChild(b, c, e, f) {
	      f = f || function () {};if (a.isFunction(e)) {
	        f = e;e = null;
	      } else if (a.isFunction(c)) {
	        f = c;c = null;
	      }return this.each(function () {
	        var g,
	            h = a(this),
	            i = h.data("roundabout");if (i.childInFocus !== b && !i.animating) {
	          g = h.children(i.childSelector).eq(b);d.animateBearingToFocus.apply(h, [g.data("roundabout").degrees, c, e, f]);
	        }
	      });
	    }, animateToNextChild: function animateToNextChild(a, b, c) {
	      return d.animateToNearbyChild.apply(this, [arguments, "next"]);
	    }, animateToPreviousChild: function animateToPreviousChild(a, b, c) {
	      return d.animateToNearbyChild.apply(this, [arguments, "previous"]);
	    }, animateToDelta: function animateToDelta(b, c, e, f) {
	      f = f || function () {};if (a.isFunction(e)) {
	        f = e;e = null;
	      } else if (a.isFunction(c)) {
	        f = c;c = null;
	      }return this.each(function () {
	        var g = a(this).data("roundabout").bearing + b;d.animateToBearing.apply(a(this), [g, c, e, f]);
	      });
	    }, animateBearingToFocus: function animateBearingToFocus(b, c, e, f) {
	      f = f || function () {};if (a.isFunction(e)) {
	        f = e;e = null;
	      } else if (a.isFunction(c)) {
	        f = c;c = null;
	      }return this.each(function () {
	        var g = a(this).data("roundabout").bearing - b;g = Math.abs(360 - g) < Math.abs(g) ? 360 - g : -g;g = g > 180 ? -(360 - g) : g;if (g !== 0) {
	          d.animateToDelta.apply(a(this), [g, c, e, f]);
	        }
	      });
	    }, stopAnimation: function stopAnimation() {
	      return this.each(function () {
	        a(this).data("roundabout").stopAnimation = true;
	      });
	    }, allowAnimation: function allowAnimation() {
	      return this.each(function () {
	        a(this).data("roundabout").stopAnimation = false;
	      });
	    }, startAutoplay: function startAutoplay(b) {
	      return this.each(function () {
	        var c = a(this),
	            e = c.data("roundabout");b = b || e.autoplayCallback || function () {};clearInterval(e.autoplayInterval);e.autoplayInterval = setInterval(function () {
	          d.animateToNextChild.apply(c, [b]);
	        }, e.autoplayDuration);e.autoplayIsRunning = true;c.trigger("autoplayStart");
	      });
	    }, stopAutoplay: function stopAutoplay(b) {
	      return this.each(function () {
	        clearInterval(a(this).data("roundabout").autoplayInterval);a(this).data("roundabout").autoplayInterval = null;a(this).data("roundabout").autoplayIsRunning = false;if (!b) {
	          a(this).unbind(".autoplay");
	        }a(this).trigger("autoplayStop");
	      });
	    }, toggleAutoplay: function toggleAutoplay(b) {
	      return this.each(function () {
	        var c = a(this),
	            e = c.data("roundabout");b = b || e.autoplayCallback || function () {};if (!d.isAutoplaying.apply(a(this))) {
	          d.startAutoplay.apply(a(this), [b]);
	        } else {
	          d.stopAutoplay.apply(a(this), [b]);
	        }
	      });
	    }, isAutoplaying: function isAutoplaying() {
	      return this.data("roundabout").autoplayIsRunning;
	    }, changeAutoplayDuration: function changeAutoplayDuration(b) {
	      return this.each(function () {
	        var c = a(this),
	            e = c.data("roundabout");e.autoplayDuration = b;if (d.isAutoplaying.apply(c)) {
	          d.stopAutoplay.apply(c);setTimeout(function () {
	            d.startAutoplay.apply(c);
	          }, 10);
	        }
	      });
	    }, normalize: function normalize(a) {
	      var b = a % 360;return b < 0 ? 360 + b : b;
	    }, normalizeRad: function normalizeRad(a) {
	      while (a < 0) {
	        a += Math.PI * 2;
	      }while (a > Math.PI * 2) {
	        a -= Math.PI * 2;
	      }return a;
	    }, isChildBackDegreesBetween: function isChildBackDegreesBetween(b, c) {
	      var d = a(this).data("roundabout").backDegrees;if (b > c) {
	        return d >= c && d < b;
	      } else {
	        return d < c && d >= b;
	      }
	    }, getAnimateToMethod: function getAnimateToMethod(a) {
	      a = a.toLowerCase();if (a === "next") {
	        return "animateToNextChild";
	      } else if (a === "previous") {
	        return "animateToPreviousChild";
	      }return "animateToNearestChild";
	    }, relayoutChildren: function relayoutChildren() {
	      return this.each(function () {
	        var b = a(this),
	            c = a.extend({}, b.data("roundabout"));c.startingChild = b.data("roundabout").childInFocus;d.init.apply(b, [c, null, true]);
	      });
	    }, getNearestChild: function getNearestChild() {
	      var b = a(this),
	          c = b.data("roundabout"),
	          d = b.children(c.childSelector).length;if (!c.reflect) {
	        return (d - Math.round(c.bearing / c.period) % d) % d;
	      } else {
	        return Math.round(c.bearing / c.period) % d;
	      }
	    }, degToRad: function degToRad(a) {
	      return d.normalize.apply(null, [a]) * Math.PI / 180;
	    }, getPlacement: function getPlacement(a) {
	      var b = this.data("roundabout");return !b.reflect ? 360 - b.period * a : b.period * a;
	    }, isInFocus: function isInFocus(a) {
	      var b,
	          c = this,
	          e = c.data("roundabout"),
	          f = d.normalize.apply(null, [e.bearing]);a = d.normalize.apply(null, [a]);b = Math.abs(f - a);return b <= e.floatComparisonThreshold || b >= 360 - e.floatComparisonThreshold;
	    }, getChildInFocus: function getChildInFocus() {
	      var b = a(this).data("roundabout");return b.childInFocus > -1 ? b.childInFocus : false;
	    }, compareVersions: function compareVersions(a, b) {
	      var c,
	          d = a.split(/\./i),
	          e = b.split(/\./i),
	          f = d.length > e.length ? d.length : e.length;for (c = 0; c <= f; c++) {
	        if (d[c] && !e[c] && parseInt(d[c], 10) !== 0) {
	          return 1;
	        } else if (e[c] && !d[c] && parseInt(e[c], 10) !== 0) {
	          return -1;
	        } else if (d[c] === e[c]) {
	          continue;
	        }if (d[c] && e[c]) {
	          if (parseInt(d[c], 10) > parseInt(e[c], 10)) {
	            return 1;
	          } else {
	            return -1;
	          }
	        }
	      }return 0;
	    } };a.fn.roundabout = function (b) {
	    if (d[b]) {
	      return d[b].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else if ((typeof b === "undefined" ? "undefined" : _typeof(b)) === "object" || a.isFunction(b) || !b) {
	      return d.init.apply(this, arguments);
	    } else {
	      a.error("Method " + b + " does not exist for jQuery.roundabout.");
	    }
	  };
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(336);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Hot = function (_React$Component) {
	  _inherits(Hot, _React$Component);

	  function Hot(props) {
	    _classCallCheck(this, Hot);

	    return _possibleConstructorReturn(this, (Hot.__proto__ || Object.getPrototypeOf(Hot)).call(this, props));
	  }

	  _createClass(Hot, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'hot' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui medium header' },
	            '\u672C\u5468\u70ED\u95E8'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'ui four link cards' },
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'card' },
	              _react2.default.createElement(
	                'div',
	                { className: 'image' },
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  'test'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Hot;
	}(_react2.default.Component);

	exports.default = Hot;

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Recommend = function (_React$Component) {
	  _inherits(Recommend, _React$Component);

	  function Recommend(props) {
	    _classCallCheck(this, Recommend);

	    return _possibleConstructorReturn(this, (Recommend.__proto__ || Object.getPrototypeOf(Recommend)).call(this, props));
	  }

	  _createClass(Recommend, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {}
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "recommend" },
	        _react2.default.createElement(
	          "div",
	          { className: "ui container" },
	          _react2.default.createElement(
	            "div",
	            { className: "ui medium header" },
	            "\u6728\u5C51\u63A8\u8350"
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "ui four link cards" },
	            _react2.default.createElement(
	              "div",
	              { className: "card" },
	              _react2.default.createElement(
	                "div",
	                { className: "image" },
	                _react2.default.createElement("img", { src: "/image/avatar.png" })
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "content" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "description" },
	                  "test"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "card" },
	              _react2.default.createElement(
	                "div",
	                { className: "image" },
	                _react2.default.createElement("img", { src: "/image/avatar.png" })
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "content" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "description" },
	                  "test"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "card" },
	              _react2.default.createElement(
	                "div",
	                { className: "image" },
	                _react2.default.createElement("img", { src: "/image/avatar.png" })
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "content" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "description" },
	                  "test"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "card" },
	              _react2.default.createElement(
	                "div",
	                { className: "image" },
	                _react2.default.createElement("img", { src: "/image/avatar.png" })
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "content" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "description" },
	                  "test"
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Recommend;
	}(_react2.default.Component);

	exports.default = Recommend;

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Original = function (_React$Component) {
	  _inherits(Original, _React$Component);

	  function Original(props) {
	    _classCallCheck(this, Original);

	    return _possibleConstructorReturn(this, (Original.__proto__ || Object.getPrototypeOf(Original)).call(this, props));
	  }

	  _createClass(Original, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {}
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "original" },
	        _react2.default.createElement(
	          "div",
	          { className: "ui container" },
	          _react2.default.createElement(
	            "div",
	            { className: "ui medium header" },
	            "\u6700\u65B0\u539F\u521B"
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "ui four link cards" },
	            _react2.default.createElement(
	              "div",
	              { className: "card" },
	              _react2.default.createElement(
	                "div",
	                { className: "image" },
	                _react2.default.createElement("img", { src: "/image/avatar.png" })
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "content" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "description" },
	                  "test"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "card" },
	              _react2.default.createElement(
	                "div",
	                { className: "image" },
	                _react2.default.createElement("img", { src: "/image/avatar.png" })
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "content" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "description" },
	                  "test"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "card" },
	              _react2.default.createElement(
	                "div",
	                { className: "image" },
	                _react2.default.createElement("img", { src: "/image/avatar.png" })
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "content" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "description" },
	                  "test"
	                )
	              )
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "card" },
	              _react2.default.createElement(
	                "div",
	                { className: "image" },
	                _react2.default.createElement("img", { src: "/image/avatar.png" })
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "content" },
	                _react2.default.createElement(
	                  "div",
	                  { className: "description" },
	                  "test"
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Original;
	}(_react2.default.Component);

	exports.default = Original;

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _moments = __webpack_require__(533);

	var _moments2 = _interopRequireDefault(_moments);

	var _articles = __webpack_require__(534);

	var _articles2 = _interopRequireDefault(_articles);

	__webpack_require__(525);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Community = function (_React$Component) {
	  _inherits(Community, _React$Component);

	  function Community(props) {
	    _classCallCheck(this, Community);

	    return _possibleConstructorReturn(this, (Community.__proto__ || Object.getPrototypeOf(Community)).call(this, props));
	  }

	  _createClass(Community, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('.community .menu .item').tab();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'community' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui top attached tabular menu' },
	            _react2.default.createElement(
	              'a',
	              { className: 'item active', 'data-tab': 'moments' },
	              '\u52A8\u6001'
	            ),
	            _react2.default.createElement(
	              'a',
	              { className: 'item', 'data-tab': 'articles' },
	              '\u6587\u7AE0'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'ui bottom active attached tab segment', 'data-tab': 'moments' },
	            _react2.default.createElement(_moments2.default, null)
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'ui bottom attached tab segment', 'data-tab': 'articles' },
	            _react2.default.createElement(_articles2.default, null)
	          )
	        )
	      );
	    }
	  }]);

	  return Community;
	}(_react2.default.Component);

	exports.default = Community;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Moments = function (_React$Component) {
	  _inherits(Moments, _React$Component);

	  function Moments(props) {
	    _classCallCheck(this, Moments);

	    return _possibleConstructorReturn(this, (Moments.__proto__ || Object.getPrototypeOf(Moments)).call(this, props));
	  }

	  _createClass(Moments, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui feed' },
	        _react2.default.createElement(
	          'div',
	          { className: 'event' },
	          _react2.default.createElement(
	            'div',
	            { className: 'label' },
	            _react2.default.createElement('img', { src: '/image/avatar.png' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'summary' },
	              _react2.default.createElement(
	                'a',
	                { className: 'user' },
	                'Elliot Fu'
	              ),
	              ' added you as a friend',
	              _react2.default.createElement(
	                'div',
	                { className: 'date' },
	                '1 Hour Ago'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'meta' },
	              _react2.default.createElement(
	                'a',
	                { className: 'like' },
	                _react2.default.createElement('i', { className: 'like icon' }),
	                ' 4 Likes'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'event' },
	          _react2.default.createElement(
	            'div',
	            { className: 'label' },
	            _react2.default.createElement('img', { src: '/image/avatar.png' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'summary' },
	              _react2.default.createElement(
	                'a',
	                null,
	                'Helen Troy'
	              ),
	              ' added ',
	              _react2.default.createElement(
	                'a',
	                null,
	                '2 new illustrations'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'date' },
	                '4 days ago'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'extra images' },
	              _react2.default.createElement(
	                'a',
	                null,
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'a',
	                null,
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'meta' },
	              _react2.default.createElement(
	                'a',
	                { className: 'like' },
	                _react2.default.createElement('i', { className: 'like icon' }),
	                ' 1 Like'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'event' },
	          _react2.default.createElement(
	            'div',
	            { className: 'label' },
	            _react2.default.createElement('img', { src: '/image/avatar.png' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'summary' },
	              _react2.default.createElement(
	                'a',
	                { className: 'user' },
	                'Jenny Hess'
	              ),
	              ' added you as a friend',
	              _react2.default.createElement(
	                'div',
	                { className: 'date' },
	                '2 Days Ago'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'meta' },
	              _react2.default.createElement(
	                'a',
	                { className: 'like' },
	                _react2.default.createElement('i', { className: 'like icon' }),
	                ' 8 Likes'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'event' },
	          _react2.default.createElement(
	            'div',
	            { className: 'label' },
	            _react2.default.createElement('img', { src: '/image/avatar.png' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'summary' },
	              _react2.default.createElement(
	                'a',
	                null,
	                'Joe Henderson'
	              ),
	              ' posted on his page',
	              _react2.default.createElement(
	                'div',
	                { className: 'date' },
	                '3 days ago'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'extra text' },
	              'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'meta' },
	              _react2.default.createElement(
	                'a',
	                { className: 'like' },
	                _react2.default.createElement('i', { className: 'like icon' }),
	                ' 5 Likes'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'event' },
	          _react2.default.createElement(
	            'div',
	            { className: 'label' },
	            _react2.default.createElement('img', { src: '/image/avatar.png' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'summary' },
	              _react2.default.createElement(
	                'a',
	                null,
	                'Justen Kitsune'
	              ),
	              ' added ',
	              _react2.default.createElement(
	                'a',
	                null,
	                '2 new photos'
	              ),
	              ' of you',
	              _react2.default.createElement(
	                'div',
	                { className: 'date' },
	                '4 days ago'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'extra images' },
	              _react2.default.createElement(
	                'a',
	                null,
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              ),
	              _react2.default.createElement(
	                'a',
	                null,
	                _react2.default.createElement('img', { src: '/image/avatar.png' })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'meta' },
	              _react2.default.createElement(
	                'a',
	                { className: 'like' },
	                _react2.default.createElement('i', { className: 'like icon' }),
	                ' 41 Likes'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Moments;
	}(_react2.default.Component);

	exports.default = Moments;

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Articles = function (_React$Component) {
	  _inherits(Articles, _React$Component);

	  function Articles(props) {
	    _classCallCheck(this, Articles);

	    return _possibleConstructorReturn(this, (Articles.__proto__ || Object.getPrototypeOf(Articles)).call(this, props));
	  }

	  _createClass(Articles, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui feed' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui tall stacked segment' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui tall stacked segment' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui tall stacked segment' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui tall stacked segment' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui tall stacked segment' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui tall stacked segment' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui tall stacked segment' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui tall stacked segment' },
	          _react2.default.createElement(
	            'p',
	            null,
	            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
	          )
	        )
	      );
	    }
	  }]);

	  return Articles;
	}(_react2.default.Component);

	exports.default = Articles;

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(483);

	var _profile = __webpack_require__(536);

	var _profile2 = _interopRequireDefault(_profile);

	var _sheets = __webpack_require__(542);

	var _sheets2 = _interopRequireDefault(_sheets);

	var _friends = __webpack_require__(543);

	var _friends2 = _interopRequireDefault(_friends);

	var _subscription = __webpack_require__(544);

	var _subscription2 = _interopRequireDefault(_subscription);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Personal = function (_React$Component) {
	  _inherits(Personal, _React$Component);

	  function Personal(props) {
	    _classCallCheck(this, Personal);

	    return _possibleConstructorReturn(this, (Personal.__proto__ || Object.getPrototypeOf(Personal)).call(this, props));
	  }

	  _createClass(Personal, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactRouterDom.BrowserRouter,
	        { basename: '/app/personal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'personal' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui middle' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui container grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'ui secondary vertical pointing menu' },
	                  _react2.default.createElement(
	                    _reactRouterDom.NavLink,
	                    { to: '/profile', activeClassName: 'active', className: 'item' },
	                    '\u4E2A\u4EBA\u4FE1\u606F'
	                  ),
	                  _react2.default.createElement(
	                    _reactRouterDom.NavLink,
	                    { to: '/sheets', activeClassName: 'active', className: 'item' },
	                    '\u6211\u7684\u6B4C\u5355'
	                  ),
	                  _react2.default.createElement(
	                    _reactRouterDom.NavLink,
	                    { to: '/subscription', activeClassName: 'active', className: 'item' },
	                    '\u6211\u7684\u8BA2\u9605'
	                  ),
	                  _react2.default.createElement(
	                    _reactRouterDom.NavLink,
	                    { to: '/friends', activeClassName: 'active', className: 'item' },
	                    '\u6211\u7684\u597D\u53CB'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'twelve wide column' },
	                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(props) {
	                    return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/profile' });
	                  } }),
	                _react2.default.createElement(_reactRouterDom.Route, { path: '/profile', component: _profile2.default }),
	                _react2.default.createElement(_reactRouterDom.Route, { path: '/sheets', component: _sheets2.default }),
	                _react2.default.createElement(_reactRouterDom.Route, { path: '/friends', component: _friends2.default }),
	                _react2.default.createElement(_reactRouterDom.Route, { path: '/subscription', component: _subscription2.default })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Personal;
	}(_react2.default.Component);

	exports.default = Personal;

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, EventEmitter, fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(539);

	var _mushareReactComponent2 = _interopRequireDefault(_mushareReactComponent);

	var _oss = __webpack_require__(540);

	var _upload = __webpack_require__(541);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AvatarUploadModal = function (_MuComponent) {
	  _inherits(AvatarUploadModal, _MuComponent);

	  function AvatarUploadModal(props) {
	    _classCallCheck(this, AvatarUploadModal);

	    var _this = _possibleConstructorReturn(this, (AvatarUploadModal.__proto__ || Object.getPrototypeOf(AvatarUploadModal)).call(this, props));

	    _this.updateProgress = _this.updateProgress.bind(_this);
	    return _this;
	  }

	  _createClass(AvatarUploadModal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log('did mount');
	      $('#avatar-upload-modal .progress').progress({
	        percent: 0
	      });
	      this.props.eventEmitter.addListener('update-progress', this.updateProgress);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      console.log('did update');
	    }
	  }, {
	    key: 'updateProgress',
	    value: function updateProgress(percent) {
	      console.log(percent);
	      $('#avatar-upload-modal .progress').progress('set percent', percent);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui small login modal', id: 'avatar-upload-modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui progress' },
	            _react2.default.createElement(
	              'div',
	              { className: 'bar' },
	              _react2.default.createElement('div', { className: 'progress' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'label' },
	              '\u6B63\u5728\u4E0A\u4F20...'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return AvatarUploadModal;
	}(_mushareReactComponent2.default);

	var UpdateButton = function (_MuComponent2) {
	  _inherits(UpdateButton, _MuComponent2);

	  function UpdateButton(props) {
	    _classCallCheck(this, UpdateButton);

	    return _possibleConstructorReturn(this, (UpdateButton.__proto__ || Object.getPrototypeOf(UpdateButton)).call(this, props));
	  }

	  _createClass(UpdateButton, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.disabled) {
	        return _react2.default.createElement(
	          'button',
	          {
	            className: 'ui button disabled',
	            onClick: this.props.updateProfile },
	          '\u66F4\u65B0'
	        );
	      } else {
	        return _react2.default.createElement(
	          'button',
	          {
	            className: 'ui primary button',
	            onClick: this.props.updateProfile },
	          '\u66F4\u65B0'
	        );
	      }
	    }
	  }]);

	  return UpdateButton;
	}(_mushareReactComponent2.default);

	var Profile = function (_MuComponent3) {
	  _inherits(Profile, _MuComponent3);

	  function Profile(props) {
	    _classCallCheck(this, Profile);

	    var _this3 = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

	    _this3.state = {
	      name: '',
	      gender: '',
	      mail: '',
	      description: '',
	      avatar: '/image/avatar.png',
	      updateButtonDisabled: true
	    };
	    _this3.eventEmitter = new EventEmitter();
	    _this3.handleChange = _this3.handleChange.bind(_this3);
	    _this3.loadUserProfile = _this3.loadUserProfile.bind(_this3);
	    _this3.loadUserAvatar = _this3.loadUserAvatar.bind(_this3);
	    _this3.updateProfile = _this3.updateProfile.bind(_this3);
	    _this3.uploadAvatar = _this3.uploadAvatar.bind(_this3);
	    return _this3;
	  }

	  _createClass(Profile, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var self = this;
	      $('.profile .avatar .card .image').dimmer({
	        on: 'hover'
	      });
	      $('.profile .form .ui.radio.checkbox').checkbox({
	        onChecked: function onChecked() {
	          console.log($(this).attr('name'));
	          console.log($(this).val());
	          self.setState(_defineProperty({
	            updateButtonDisabled: false
	          }, $(this).attr('name'), $(this).val()));
	        }
	      });
	      this.loadUserProfile();
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.setState(_defineProperty({
	        updateButtonDisabled: false
	      }, event.target.name, event.target.value));
	    }
	  }, {
	    key: 'loadUserProfile',
	    value: function loadUserProfile() {
	      var self = this;
	      var token = $('#token').val();
	      fetch('/api/user/profile/get', {
	        method: 'GET',
	        credentials: 'same-origin',
	        headers: {
	          'Authorization': token
	        }
	      }).then(self.checkStatus).then(self.parseJSON).then(function (data) {
	        self.setState({
	          name: data.body.name,
	          mail: data.body.mail,
	          description: data.body.description,
	          gender: data.body.gender
	        });
	        self.loadUserAvatar(data.body.avatar, token);
	      }).catch(function (error) {
	        console.log(error);
	      });
	    }
	  }, {
	    key: 'loadUserAvatar',
	    value: function loadUserAvatar(objectId, token) {
	      var self = this;
	      if (objectId != '') {
	        (0, _oss.getURL)(objectId, token).then(function (url) {
	          self.setState({
	            avatar: url
	          });
	        }).catch(function (error) {
	          console.error(error);
	        });
	      }
	    }
	  }, {
	    key: 'uploadAvatar',
	    value: function uploadAvatar(event) {
	      console.log('upload avatar');
	      $('#avatar-upload-modal').modal('show');
	      (0, _upload.uploadAvatar)('123', event.target.files[0], {
	        token: $('#token').val()
	      }, regeneratorRuntime.mark(function _callee(progress) {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                console.log(progress);
	                this.eventEmitter.emit('update-progress', progress);

	              case 2:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      })).then(function (result) {
	        console.log(result);
	        $('#avatar-upload-modal').modal('hidden');
	      }).catch(function (error) {
	        console.error(error);
	      });
	    }
	  }, {
	    key: 'updateProfile',
	    value: function updateProfile() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'profile' },
	        _react2.default.createElement(AvatarUploadModal, {
	          eventEmitter: this.eventEmitter }),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui medium header' },
	          '\u516C\u5F00\u4FE1\u606F'
	        ),
	        _react2.default.createElement('div', { className: 'ui divider' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui grid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'twelve wide column' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui form' },
	              _react2.default.createElement(
	                'div',
	                { className: 'field name' },
	                _react2.default.createElement(
	                  'label',
	                  null,
	                  '\u6635\u79F0 : '
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'ui input' },
	                  _react2.default.createElement('input', { type: 'text', name: 'name', value: this.state.name,
	                    onChange: this.handleChange })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'inline fields' },
	                _react2.default.createElement(
	                  'label',
	                  null,
	                  '\u6027\u522B: '
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'field' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'ui radio checkbox' },
	                    _react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'male',
	                      checked: this.state.gender === 'male',
	                      className: 'hidden' }),
	                    _react2.default.createElement(
	                      'label',
	                      null,
	                      '\u7537'
	                    )
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'field' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'ui radio checkbox' },
	                    _react2.default.createElement('input', { type: 'radio', name: 'gender', value: 'female',
	                      checked: this.state.gender === 'female',
	                      className: 'hidden' }),
	                    _react2.default.createElement(
	                      'label',
	                      null,
	                      '\u5973'
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'field mail' },
	                _react2.default.createElement(
	                  'label',
	                  null,
	                  '\u90AE\u7BB1: '
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'input' },
	                  _react2.default.createElement('input', { type: 'text', readOnly: '', name: 'mail',
	                    value: this.state.mail })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'field description' },
	                _react2.default.createElement(
	                  'label',
	                  null,
	                  '\u7B80\u4ECB: '
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'description' },
	                  _react2.default.createElement('textarea', {
	                    placeholder: '\u5199\u70B9\u4EC0\u4E48\u5173\u4E8E\u4F60\u81EA\u5DF1',
	                    name: 'description',
	                    value: this.state.description,
	                    onChange: this.handleChange })
	                )
	              ),
	              _react2.default.createElement(UpdateButton, {
	                disabled: this.state.updateButtonDisabled,
	                handleUpdate: this.updateProfile
	              })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'four wide column' },
	            _react2.default.createElement(
	              'div',
	              { className: 'avatar' },
	              _react2.default.createElement(
	                'div',
	                { className: 'ui raised card' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'blurring small dimmable image' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'ui dimmer' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'content' },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'center' },
	                        _react2.default.createElement('input', { type: 'file', name: 'file', id: 'file',
	                          className: 'avatarfile',
	                          onChange: this.uploadAvatar }),
	                        _react2.default.createElement(
	                          'label',
	                          { htmlFor: 'file' },
	                          '\u66F4\u6362\u5934\u50CF'
	                        )
	                      )
	                    )
	                  ),
	                  _react2.default.createElement('img', { src: this.state.avatar })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Profile;
	}(_mushareReactComponent2.default);

	exports.default = Profile;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301), __webpack_require__(537), __webpack_require__(538)))

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MuReactComponent = function (_React$Component) {
	  _inherits(MuReactComponent, _React$Component);

	  function MuReactComponent(props) {
	    _classCallCheck(this, MuReactComponent);

	    var _this = _possibleConstructorReturn(this, (MuReactComponent.__proto__ || Object.getPrototypeOf(MuReactComponent)).call(this, props));

	    _this.checkStatus = _this.checkStatus.bind(_this);
	    _this.parseJSON = _this.parseJSON.bind(_this);
	    return _this;
	  }

	  _createClass(MuReactComponent, [{
	    key: 'checkStatus',
	    value: function checkStatus(response) {
	      if (response.status >= 200 && response.status < 300) {
	        return response;
	      } else {
	        var error = new Error(response.statusText);
	        error.response = response;
	        throw error;
	      }
	    }
	  }, {
	    key: 'parseJSON',
	    value: function parseJSON(response) {
	      return response.json();
	    }
	  }]);

	  return MuReactComponent;
	}(_react2.default.Component);

	exports.default = MuReactComponent;

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch, Promise) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var OSSClient = {
	  client: null,
	  expiration: ''
	};

	function checkStatus(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return response;
	  } else {
	    var error = new Error(response.statusText);
	    error.response = response;
	    throw error;
	  }
	}

	function parseJSON(response) {
	  return response.json();
	}

	function checkExpiration() {
	  var exp = new Date(OSSClient.expiration).getTime();
	  var now = new Date().getTime();
	  return exp <= now;
	}

	function getOssClient(token) {
	  if (OSSClient.client === null || checkExpiration()) {
	    return fetch('/api/oss/sts/get', {
	      method: 'GET',
	      credentials: 'same-origin',
	      headers: {
	        'Authorization': token
	      }
	    }).then(checkStatus).then(parseJSON).then(function (data) {
	      console.log(data);
	      OSSClient.expiration = data.body.expiration;
	      OSSClient.client = new OSS.Wrapper({
	        region: 'oss-cn-hangzhou',
	        accessKeyId: data.body.accessKeyId,
	        accessKeySecret: data.body.accessKeySecret,
	        stsToken: data.body.securityToken,
	        bucket: 'mushare-store'
	      });
	      return OSSClient.client;
	    });
	  } else {
	    return new Promise(function (resolve, reject) {
	      resolve(OSSClient.client);
	    });
	  }
	}

	function getURL(objectId, token) {
	  getOssClient(token).then(function (client) {
	    return client.signatureUrl(objectId, { expires: 3600 });
	  }).catch(function (error) {});
	}

	exports.getOssClient = getOssClient;
	exports.getURL = getURL;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(538), __webpack_require__(294)))

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uploadAudio = exports.uploadAvatar = undefined;

	var _oss = __webpack_require__(540);

	function uploadAvatar(objectKeyId, file, callbackVar, progress) {
	  return (0, _oss.getOssClient)(callbackVar.token).then(function (client) {
	    console.log(client);
	    return client.multipartUpload(objectKeyId, file, {
	      headers: {
	        'x-oss-callback': window.btoa(JSON.stringify({
	          'callbackUrl': 'music.mushare.cn/api/oss/upload/avatar',
	          'callbackBody': '{"bucket":${bucket},"object":${object},"mimeType":${mimeType},"token":${x:token}}',
	          'callbackBodyType': 'application/json'
	        })),
	        'x-oss-callback-var': window.btoa(JSON.stringify({
	          'x:token': callbackVar.token
	        }))
	      },
	      progress: progress
	    });
	  });
	}

	function uploadAudio(objectKeyId, file, callbackVar, progress) {
	  return (0, _oss.getOssClient)(callbackVar.token).then(function (client) {
	    return client.multipartUpload(objectKeyId, file, {
	      headers: {
	        'x-oss-callback': window.btoa(JSON.stringify({
	          'callbackUrl': 'music.mushare.cn/api/oss/upload/audio',
	          'callbackBody': '{"bucket":${bucket},"object":${object},"mimeType":${mimeType},"token":${x:token}}',
	          'callbackBodyType': 'application/json'
	        })),
	        'x-oss-callback-var': window.btoa(JSON.stringify({
	          'x:token': callbackVar.token
	        }))
	      },
	      progress: progress
	    });
	  });
	}

	exports.uploadAvatar = uploadAvatar;
	exports.uploadAudio = uploadAudio;

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch, $) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(539);

	var _mushareReactComponent2 = _interopRequireDefault(_mushareReactComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SheetCards = function (_MuComponent) {
	  _inherits(SheetCards, _MuComponent);

	  function SheetCards(props) {
	    _classCallCheck(this, SheetCards);

	    return _possibleConstructorReturn(this, (SheetCards.__proto__ || Object.getPrototypeOf(SheetCards)).call(this, props));
	  }

	  _createClass(SheetCards, [{
	    key: 'render',
	    value: function render() {
	      var cards = this.props.sheets.map(function (sheet) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'card' },
	          _react2.default.createElement(
	            'div',
	            { className: 'image' },
	            _react2.default.createElement('img', { src: '/image/avatar.png' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'description' },
	              sheet.name
	            )
	          )
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui four link cards' },
	        cards
	      );
	    }
	  }]);

	  return SheetCards;
	}(_mushareReactComponent2.default);

	var Sheets = function (_MuComponent2) {
	  _inherits(Sheets, _MuComponent2);

	  function Sheets(props) {
	    _classCallCheck(this, Sheets);

	    var _this2 = _possibleConstructorReturn(this, (Sheets.__proto__ || Object.getPrototypeOf(Sheets)).call(this, props));

	    _this2.state = {
	      privateSheet: [],
	      publicSheet: []
	    };
	    return _this2;
	  }

	  _createClass(Sheets, [{
	    key: 'loadSheet',
	    value: function loadSheet() {
	      var self = this;
	      fetch('/api/music/sheet/list', {
	        method: 'GET',
	        credentials: 'same-origin',
	        headers: {
	          'Authorization': $('#token').val()
	        }
	      }).then(self.checkStatus).then(self.parseJSON).then(function (data) {
	        var sheets = data.body;
	        var privateSheet = sheets.filter(function (sheet) {
	          return sheet.privilege === 'private';
	        });
	        var publicSheet = sheets.filter(function (sheet) {
	          return sheet.privilege === 'public' || sheet.privilege === 'friend';
	        });
	        console.log(privateSheet);
	        console.log(publicSheet);
	        self.setState({
	          privateSheet: privateSheet,
	          publicSheet: publicSheet
	        });
	      }).catch(function (error) {
	        console.log(error);
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadSheet();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'sheets' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui medium header' },
	          '\u516C\u5F00\u6B4C\u5355'
	        ),
	        _react2.default.createElement('div', { className: 'ui divider' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'public-sheet' },
	          _react2.default.createElement(SheetCards, {
	            sheets: this.state.publicSheet })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui medium header' },
	          '\u79C1\u6709\u6B4C\u5355'
	        ),
	        _react2.default.createElement('div', { className: 'ui divider' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'private-sheet' },
	          _react2.default.createElement(SheetCards, {
	            sheets: this.state.privateSheet })
	        )
	      );
	    }
	  }]);

	  return Sheets;
	}(_mushareReactComponent2.default);

	exports.default = Sheets;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(538), __webpack_require__(301)))

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch, $) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(539);

	var _mushareReactComponent2 = _interopRequireDefault(_mushareReactComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FriendList = function (_MuComponent) {
	  _inherits(FriendList, _MuComponent);

	  function FriendList() {
	    _classCallCheck(this, FriendList);

	    return _possibleConstructorReturn(this, (FriendList.__proto__ || Object.getPrototypeOf(FriendList)).apply(this, arguments));
	  }

	  _createClass(FriendList, [{
	    key: 'render',
	    value: function render() {
	      var friendList = this.props.friends.map(function (friend) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'item' },
	          _react2.default.createElement('img', { className: 'ui avatar image', src: '/image/avatar.png' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            _react2.default.createElement(
	              'a',
	              { className: 'header' },
	              friend.name
	            )
	          )
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'ui middle aligned animated divided large list' },
	        friendList
	      );
	    }
	  }]);

	  return FriendList;
	}(_mushareReactComponent2.default);

	function AcceptButton(props) {
	  if (props.accept) {
	    return _react2.default.createElement(
	      'div',
	      {
	        className: 'ui button disabled',
	        'data-friend-id': props.id },
	      '\u5DF2\u63A5\u53D7'
	    );
	  } else {
	    return _react2.default.createElement(
	      'div',
	      {
	        className: 'ui button',
	        'data-friend-id': props.id,
	        onClick: props.acceptFriendRequest },
	      '\u63A5\u53D7'
	    );
	  }
	};

	var FriendRequestList = function (_MuComponent2) {
	  _inherits(FriendRequestList, _MuComponent2);

	  function FriendRequestList() {
	    _classCallCheck(this, FriendRequestList);

	    return _possibleConstructorReturn(this, (FriendRequestList.__proto__ || Object.getPrototypeOf(FriendRequestList)).apply(this, arguments));
	  }

	  _createClass(FriendRequestList, [{
	    key: 'render',
	    value: function render() {
	      var self = this;
	      var friendList = this.props.friends.map(function (friend) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'item' },
	          _react2.default.createElement(
	            'div',
	            { className: 'right floated content' },
	            _react2.default.createElement(AcceptButton, {
	              id: friend.id,
	              accept: friend.accept,
	              acceptFriendRequest: self.props.acceptFriendRequest })
	          ),
	          _react2.default.createElement('img', { className: 'ui avatar image', src: '/image/avatar.png' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            _react2.default.createElement(
	              'a',
	              { className: 'header' },
	              friend.name
	            )
	          )
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'ui middle aligned divided large list' },
	        friendList
	      );
	    }
	  }]);

	  return FriendRequestList;
	}(_mushareReactComponent2.default);

	var Friends = function (_MuComponent3) {
	  _inherits(Friends, _MuComponent3);

	  function Friends(props) {
	    _classCallCheck(this, Friends);

	    var _this3 = _possibleConstructorReturn(this, (Friends.__proto__ || Object.getPrototypeOf(Friends)).call(this, props));

	    _this3.state = {
	      friends: [],
	      friendRequests: []
	    };
	    _this3.acceptFriendRequest = _this3.acceptFriendRequest.bind(_this3);
	    return _this3;
	  }

	  _createClass(Friends, [{
	    key: 'loadFriends',
	    value: function loadFriends() {
	      var self = this;
	      fetch('/api/user/friend/list', {
	        method: 'GET',
	        credentials: 'same-origin',
	        headers: {
	          'Authorization': $('#token').val()
	        }
	      }).then(self.checkStatus).then(self.parseJSON).then(function (data) {
	        var friends = data.body;
	        self.setState({
	          friends: friends
	        });
	      }).catch(function (error) {
	        console.log(error);
	      });
	    }
	  }, {
	    key: 'loadFriendRequests',
	    value: function loadFriendRequests() {
	      var self = this;
	      fetch('/api/user/friend/request', {
	        method: 'GET',
	        credentials: 'same-origin',
	        headers: {
	          'Authorization': $('#token').val()
	        }
	      }).then(self.checkStatus).then(self.parseJSON).then(function (data) {
	        var friendRequests = data.body.map(function (friendRequest) {
	          friendRequest.accept = false;
	          return friendRequest;
	        });
	        self.setState({
	          friendRequests: friendRequests
	        });
	      }).catch(function (error) {
	        console.log(error);
	      });
	    }
	  }, {
	    key: 'acceptFriendRequest',
	    value: function acceptFriendRequest(event) {
	      var self = this;
	      var friendId = $(event.target).data("friendId");
	      fetch('/api/user/friend/request', {
	        method: 'PUT',
	        credentials: 'same-origin',
	        headers: {
	          'Authorization': $('#token').val()
	        },
	        body: JSON.stringify({
	          friendId: friendId
	        })
	      }).then(self.checkStatus).then(self.parseJSON).then(function () {
	        var friendRequests = self.state.friendRequests.map(function (friendRequest) {
	          if (friendRequest.id == friendId) {
	            friendRequest.accept = true;
	          }
	          return friendRequest;
	        });
	        self.setState({
	          friendRequests: friendRequests
	        });
	      }).catch(function (error) {
	        console.log(error);
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadFriends();
	      this.loadFriendRequests();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'friends' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui medium header' },
	          '\u597D\u53CB\u8BF7\u6C42'
	        ),
	        _react2.default.createElement('div', { className: 'ui divider' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'friends-list' },
	          _react2.default.createElement(FriendRequestList, {
	            friends: this.state.friendRequests,
	            acceptFriendRequest: this.acceptFriendRequest })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui medium header' },
	          '\u597D\u53CB\u5217\u8868'
	        ),
	        _react2.default.createElement('div', { className: 'ui divider' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'friends-list' },
	          _react2.default.createElement(FriendList, {
	            friends: this.state.friends })
	        )
	      );
	    }
	  }]);

	  return Friends;
	}(_mushareReactComponent2.default);

	exports.default = Friends;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(538), __webpack_require__(301)))

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch, $) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(539);

	var _mushareReactComponent2 = _interopRequireDefault(_mushareReactComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SheetCards = function (_MuComponent) {
	  _inherits(SheetCards, _MuComponent);

	  function SheetCards(props) {
	    _classCallCheck(this, SheetCards);

	    return _possibleConstructorReturn(this, (SheetCards.__proto__ || Object.getPrototypeOf(SheetCards)).call(this, props));
	  }

	  _createClass(SheetCards, [{
	    key: 'render',
	    value: function render() {
	      var cards = this.props.sheets.map(function (sheet) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'card' },
	          _react2.default.createElement(
	            'div',
	            { className: 'image' },
	            _react2.default.createElement('img', { src: '/image/avatar.png' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'description' },
	              sheet.name
	            )
	          )
	        );
	      });
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui four link cards' },
	        cards
	      );
	    }
	  }]);

	  return SheetCards;
	}(_mushareReactComponent2.default);

	var Subscription = function (_MuComponent2) {
	  _inherits(Subscription, _MuComponent2);

	  function Subscription(props) {
	    _classCallCheck(this, Subscription);

	    var _this2 = _possibleConstructorReturn(this, (Subscription.__proto__ || Object.getPrototypeOf(Subscription)).call(this, props));

	    _this2.state = {
	      sheets: []
	    };
	    return _this2;
	  }

	  _createClass(Subscription, [{
	    key: 'loadSheet',
	    value: function loadSheet() {
	      var self = this;
	      fetch('/api/music/sheet/list/subscription', {
	        method: 'GET',
	        credentials: 'same-origin',
	        headers: {
	          'Authorization': $('#token').val()
	        }
	      }).then(self.checkStatus).then(self.parseJSON).then(function (data) {
	        var sheets = data.body;
	        console.log(sheets);
	        self.setState({
	          sheets: sheets
	        });
	      }).catch(function (error) {
	        console.log(error);
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.loadSheet();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'subscription' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui medium header' },
	          '\u6B4C\u5355'
	        ),
	        _react2.default.createElement('div', { className: 'ui divider' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'subs-sheet' },
	          _react2.default.createElement(SheetCards, {
	            sheets: this.state.sheets })
	        )
	      );
	    }
	  }]);

	  return Subscription;
	}(_mushareReactComponent2.default);

	exports.default = Subscription;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(538), __webpack_require__(301)))

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(539);

	var _mushareReactComponent2 = _interopRequireDefault(_mushareReactComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SheetInfo = function (_MuComponent) {
	  _inherits(SheetInfo, _MuComponent);

	  function SheetInfo() {
	    _classCallCheck(this, SheetInfo);

	    return _possibleConstructorReturn(this, (SheetInfo.__proto__ || Object.getPrototypeOf(SheetInfo)).apply(this, arguments));
	  }

	  _createClass(SheetInfo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'sheet-info ui container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui two column centered grid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'column' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui items' },
	              _react2.default.createElement(
	                'div',
	                { className: 'item' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'ui middle cover aligned image' },
	                  _react2.default.createElement('img', { src: '/image/avatar.png', alt: '' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'middle aligned content' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'ui huge header' },
	                    this.props.sheetName
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'meta' },
	                    _react2.default.createElement('img', { className: 'ui avatar image',
	                      src: '/image/avatar.png' }),
	                    _react2.default.createElement(
	                      'a',
	                      { href: '', className: 'username' },
	                      this.props.creator
	                    ),
	                    _react2.default.createElement(
	                      'span',
	                      {
	                        className: 'modify-date' },
	                      '\u4E0A\u6B21\u4FEE\u6539\u65E5\u671F\uFF1A',
	                      this.props.lastModified
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return SheetInfo;
	}(_mushareReactComponent2.default);

	var AudioList = function (_MuComponent2) {
	  _inherits(AudioList, _MuComponent2);

	  function AudioList() {
	    _classCallCheck(this, AudioList);

	    return _possibleConstructorReturn(this, (AudioList.__proto__ || Object.getPrototypeOf(AudioList)).apply(this, arguments));
	  }

	  _createClass(AudioList, [{
	    key: 'render',
	    value: function render() {

	      var rows = this.props.audioList.map(function (audio, index) {
	        return _react2.default.createElement(
	          'tr',
	          null,
	          _react2.default.createElement(
	            'td',
	            null,
	            index
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            _react2.default.createElement(
	              'span',
	              null,
	              audio.name
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'operations' },
	              _react2.default.createElement('i', { className: 'folder icon' }),
	              _react2.default.createElement('i', { className: 'folder icon' }),
	              _react2.default.createElement('i', { className: 'folder icon' })
	            )
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            audio.artist
	          ),
	          _react2.default.createElement(
	            'td',
	            null,
	            audio.duration
	          )
	        );
	      });

	      return _react2.default.createElement(
	        'table',
	        { className: 'ui striped table' },
	        _react2.default.createElement(
	          'thead',
	          null,
	          _react2.default.createElement(
	            'tr',
	            null,
	            _react2.default.createElement('th', null),
	            _react2.default.createElement(
	              'th',
	              null,
	              '\u97F3\u4E50\u6807\u9898'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              '\u6B4C\u624B'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              '\u65F6\u957F'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'tbody',
	          null,
	          rows
	        )
	      );
	    }
	  }]);

	  return AudioList;
	}(_mushareReactComponent2.default);

	var AudioContent = function (_MuComponent3) {
	  _inherits(AudioContent, _MuComponent3);

	  function AudioContent() {
	    _classCallCheck(this, AudioContent);

	    return _possibleConstructorReturn(this, (AudioContent.__proto__ || Object.getPrototypeOf(AudioContent)).apply(this, arguments));
	  }

	  _createClass(AudioContent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'audio-content ui container' },
	        _react2.default.createElement('div', { className: 'ui divider' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui top attached tabular menu' },
	          _react2.default.createElement(
	            'a',
	            { className: 'item active', 'data-tab': 'audioList' },
	            '\u6B4C\u66F2\u5217\u8868'
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: 'item', 'data-tab': 'comments' },
	            '\u8BC4\u8BBA'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui bottom active attached tab segment audio-list',
	            'data-tab': 'audioList' },
	          _react2.default.createElement(AudioList, {
	            audioList: this.props.audioList })
	        ),
	        _react2.default.createElement('div', { className: 'ui bottom attached tab segment', 'data-tab': 'comments' })
	      );
	    }
	  }]);

	  return AudioContent;
	}(_mushareReactComponent2.default);

	var SheetPage = function (_MuComponent4) {
	  _inherits(SheetPage, _MuComponent4);

	  function SheetPage(props) {
	    _classCallCheck(this, SheetPage);

	    var _this4 = _possibleConstructorReturn(this, (SheetPage.__proto__ || Object.getPrototypeOf(SheetPage)).call(this, props));

	    _this4.state = {
	      sheetInfo: {
	        sheetName: '',
	        creator: '',
	        lastModified: ''
	      },
	      audioList: []
	    };

	    return _this4;
	  }

	  _createClass(SheetPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('.sheet-page .audio-list .menu .item').tab();
	      var self = this;
	      var sheetId = this.props.match.params.sheetId;
	      var url = '/api/music/audio/list?sheetId=' + sheetId;
	      fetch(url, {
	        method: 'GET',
	        credentials: 'same-origin',
	        headers: {
	          'Authorization': $('#token').val()
	        }
	      }).then(self.checkStatus).then(self.parseJSON).then(function (data) {
	        console.log(data.body);
	        var sheetInfo = {
	          sheetName: '',
	          cover: '',
	          creator: '',
	          lastModified: ''
	        };
	        var audioList = data.body.audio.map(function (audio) {
	          return {
	            id: audio.id,
	            name: audio.name,
	            artist: audio.artist.name,
	            duration: audio.duration
	          };
	        });
	        self.setState({
	          sheetInfo: sheetInfo,
	          audioList: audioList
	        });
	      }).then(function (error) {});
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'sheet-page' },
	        _react2.default.createElement(SheetInfo, {
	          sheetInfo: this.state.sheetInfo }),
	        _react2.default.createElement(AudioContent, {
	          audioList: this.state.audioList })
	      );
	    }
	  }]);

	  return SheetPage;
	}(_mushareReactComponent2.default);

	exports.default = SheetPage;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301), __webpack_require__(538)))

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(525);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);

	  function Chat(props) {
	    _classCallCheck(this, Chat);

	    return _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));
	  }

	  _createClass(Chat, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui very wide sidebar chat', id: 'chat' },
	        _react2.default.createElement('div', { className: 'content' })
	      );
	    }
	  }]);

	  return Chat;
	}(_react2.default.Component);

	exports.default = Chat;

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(548);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(550)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(549)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n#chat.ui[class*=\"very wide\"].left.sidebar, #chat.ui[class*=\"very wide\"].right.sidebar {\n  width: 600px; }\n\n#chat .content {\n  width: 100%;\n  height: 100%;\n  background-color: cornflowerblue; }\n\n#avatar-upload-modal .container {\n  width: 80%;\n  padding: 2em; }\n\n#app .grid, #app .column {\n  padding: 0;\n  margin: 0; }\n\n#app .header a {\n  color: black; }\n\n#app .header .icon {\n  margin: 0; }\n\n#app .header .segment {\n  box-shadow: none;\n  border: none; }\n\n#app .header .header-top .item {\n  padding-top: 0.1em;\n  padding-bottom: 0.1em; }\n\n#app .header .header-top .icon-home, #app .header .header-top .icon-user {\n  border-color: #E6E6E6;\n  border-style: solid;\n  border-width: 0 1px;\n  border-radius: 0; }\n\n#app .header .header-top .icon-home i:hover, #app .header .header-top .icon-user .dropdown:hover {\n  color: #535353; }\n\n#app .header .header-top .dropdown .menu {\n  z-index: 200; }\n\n#app .header .divider {\n  border-width: 1px;\n  margin: 0; }\n\n#app .header .navigation {\n  border-bottom-color: #E6E6E6;\n  border-bottom-width: 1px;\n  border-bottom-style: solid; }\n  #app .header .navigation .menu {\n    box-shadow: none;\n    border-top: none;\n    border-bottom: none;\n    border-radius: 0; }\n  #app .header .navigation .item a {\n    color: #181818;\n    font-weight: 500; }\n\n#app .home {\n  /**********roundabout**********/ }\n  #app .home .carousel {\n    background-color: #2a2a2a; }\n  #app .home .exhibition_hall {\n    text-align: center;\n    position: relative;\n    overflow: hidden; }\n  #app .home .exhibition_hall h4 {\n    font-size: 30px;\n    text-align: center;\n    margin: 0px auto;\n    padding-top: 50px;\n    color: #000; }\n  #app .home .tline {\n    color: #dedede; }\n  #app .home .roundabout_box {\n    width: 100%; }\n  #app .home .roundabout_box img {\n    width: 100%; }\n  #app .home .roundabout_box {\n    height: 430px;\n    width: 100%;\n    margin: 0px auto 20px auto; }\n  #app .home .roundabout-holder {\n    list-style: none;\n    width: 500px;\n    height: 425px;\n    margin: 0px auto; }\n  #app .home .roundabout-moveable-item {\n    font-size: 12px !important;\n    height: 425px;\n    width: 650px;\n    cursor: pointer;\n    background: #f9f9f9; }\n  #app .home .roundabout-moveable-item img {\n    height: 100%;\n    width: 100%;\n    background-color: #FFFFFF;\n    margin: 0; }\n  #app .home .roundabout-in-focus {\n    cursor: auto; }\n  #app .home .roundabout-in-focus000:hover {\n    -webkit-box-shadow: 0px 0px 20px #787878;\n    -moz-box-shadow: 0px 0px 20px #787878;\n    background: #f9f9f9; }\n  #app .home .roundabout-holder .text {\n    color: #999; }\n  #app .home .roundabout-in-focus000:hover span {\n    display: inline;\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    padding: 8px 20px;\n    background: #f9f9f9;\n    color: #3366cc;\n    z-index: 999;\n    -webkit-border-top-left-radius: 5px;\n    -moz-border-radius-topLeft: 5px;\n    border-left: 1px solid #aaaaaa;\n    border-top: 1px solid #aaaaaa; }\n  #app .home .roundabout a:active, #app .home .roundabout a:focus, #app .home .roundabout a:visited {\n    outline: none;\n    text-decoration: none; }\n  #app .home .roundabout li {\n    margin: 0; }\n  #app .home .container {\n    padding: 1em 2em 1em 2em; }\n  #app .home .hot .cards, #app .home .recommend .cards, #app .home .original .cards {\n    padding: 0 2em; }\n    #app .home .hot .cards .description, #app .home .recommend .cards .description, #app .home .original .cards .description {\n      font-size: 20px;\n      text-align: center; }\n\n#app .hot .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .hot .cards {\n  padding: 0 2em; }\n  #app .hot .cards .description {\n    font-size: 20px;\n    text-align: center; }\n\n#app .recommend .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .recommend .cards {\n  padding: 0 2em; }\n  #app .recommend .cards .description {\n    font-size: 20px;\n    text-align: center; }\n\n#app .original .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .original .cards {\n  padding: 0 2em; }\n  #app .original .cards .description {\n    font-size: 20px;\n    text-align: center; }\n\n#app .community .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .sheet-page .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .sheet-page .sheet-info .cover {\n  width: 220px; }\n\n#app .sheet-page .sheet-info .item .content .modify-date {\n  font-size: 12px;\n  margin-left: 5px; }\n\n#app .sheet-page .sheet-info .item .content .username {\n  font-size: 15px;\n  font-weight: bold; }\n\n#app .sheet-page .audio-content .audio-list table .operations {\n  margin-left: 10px; }\n\n#app .personal .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .personal .profile .form {\n  padding: 0 6em 0 0; }\n\n#app .personal .profile .avatar .avatarfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n#app .personal .profile .avatar .avatarfile + label {\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 500;\n  color: white;\n  padding: 0.625rem 1.25rem;\n  background-color: black;\n  display: inline-block; }\n\n#app .personal .profile .avatar .avatarfile:focus + label,\n#app .personal .profile .avatar .avatarfile + label:hover {\n  background-color: red; }\n\n#app .personal .sheets .public-sheet, #app .personal .sheets .private-sheet {\n  padding: 0 6em 2em 0; }\n  #app .personal .sheets .public-sheet .content .description, #app .personal .sheets .private-sheet .content .description {\n    text-align: center; }\n\n#app .personal .subscription .subs-sheet {\n  padding: 0 6em 2em 0; }\n  #app .personal .subscription .subs-sheet .content .description {\n    text-align: center; }\n\n#app .personal .friends .friends-list  {\n  padding: 0 12em 2em 0; }\n\n#app .footer .column {\n  padding: 0 2em; }\n\n#app .footer.segment {\n  padding: 3em 0em; }\n", ""]);

	// exports


/***/ })

});
//# sourceMappingURL=app.js.map