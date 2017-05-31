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

	var _footer = __webpack_require__(529);

	var _footer2 = _interopRequireDefault(_footer);

	var _home = __webpack_require__(530);

	var _home2 = _interopRequireDefault(_home);

	var _hot = __webpack_require__(532);

	var _hot2 = _interopRequireDefault(_hot);

	var _recommends = __webpack_require__(533);

	var _recommends2 = _interopRequireDefault(_recommends);

	var _original = __webpack_require__(534);

	var _original2 = _interopRequireDefault(_original);

	var _main = __webpack_require__(535);

	var _main2 = _interopRequireDefault(_main);

	var _main3 = __webpack_require__(538);

	var _main4 = _interopRequireDefault(_main3);

	var _main5 = __webpack_require__(552);

	var _main6 = _interopRequireDefault(_main5);

	var _main7 = __webpack_require__(553);

	var _main8 = _interopRequireDefault(_main7);

	__webpack_require__(554);

	__webpack_require__(528);

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
	      $('.ui.sidebar.chat').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
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

	/* WEBPACK VAR INJECTION */(function($, fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(525);

	var _mushareReactComponent2 = _interopRequireDefault(_mushareReactComponent);

	var _reactRouterDom = __webpack_require__(483);

	var _logo = __webpack_require__(526);

	var _logo2 = _interopRequireDefault(_logo);

	var _oss = __webpack_require__(527);

	__webpack_require__(528);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Top = function (_MuComponent) {
	  _inherits(Top, _MuComponent);

	  function Top(props) {
	    _classCallCheck(this, Top);

	    var _this = _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this, props));

	    _this.state = {
	      avatar: '/image/avatar.png'
	    };
	    _this.loadUserProfile = _this.loadUserProfile.bind(_this);
	    _this.loadUserAvatar = _this.loadUserAvatar.bind(_this);
	    return _this;
	  }

	  _createClass(Top, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var self = this;
	      $('.ui .dropdown').dropdown({
	        action: 'hide'
	      });
	      this.loadUserProfile();
	      setInterval(function () {
	        self.loadUserProfile();
	      }, 1000);
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
	        console.log(data);
	        self.loadUserAvatar(data.body.avatar);
	      }).catch(function (error) {
	        console.error(error);
	      });
	    }
	  }, {
	    key: 'loadUserAvatar',
	    value: function loadUserAvatar(objectId) {
	      var self = this;
	      if (objectId != '') {
	        self.setState({
	          avatar: (0, _oss.getURL)(objectId)
	        });
	      }
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
	                        src: this.state.avatar }),
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
	}(_mushareReactComponent2.default);

	var Divider = function (_React$Component) {
	  _inherits(Divider, _React$Component);

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

	var Navigation = function (_React$Component2) {
	  _inherits(Navigation, _React$Component2);

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

	var Header = function (_React$Component3) {
	  _inherits(Header, _React$Component3);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301), __webpack_require__(524)))

/***/ }),

/***/ 525:
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

/***/ 526:
/***/ (function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAZCAMAAADdXpaGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABsUExURUdwTCkeGiMZFiUdGSMZFiUbGDYpKSwjHyMZFiQaFiMZFiMZFiMZFiMZFiMZFiMZFiQaGCMaFyMZFiMZFiMZFiQaFyMZFiMZFiMaFv///yMZFiMZFiMZFv7+/pSPjVNLSeLh4TwzMG5nZcTBwDMKUrwAAAAcdFJOUwAVwR75KwYO3kOl73y3iMw5Xq+TTVXo1XEBZ51oWI6CAAAD3UlEQVRIx61X63qbMAwFbDA3c7+jtN32/u84yZKJ02771qb+k0Ascc7RkUyiKFyZiWOTRd+wmrz7aqjabAVu5WfxNJAEpi/F7VMC4Vrn/TkgOXyJTNHC+5Wop4BoSD8fFJf05OU8pqLoGy9N9YwmMUD8+SiSwxbXc+Mtd055RpAU9JdkzB8Lmh1o2/IZINNfeMzpP9F/rGcBUIfICoe0bzqWrGYDmZlbQ83Sq119Nu7WAUm40f009qaAkdN1dGOiQbEXzVlzGec/yHjAg+tTImjQPZoyLFi3jOEy74bz76czF32vSVDauPBUMs6G1cr0OmijHpPhb8q1yWIiF9R+ADI+mo2emCWASJoorTQGOwl6WN3PJQM5YJm73hKD89ro+OwD5MfUILCeqbepXkoMUgsMc1/x7RJsY8/53TyqyqG5dO0Ra4lsEjjjXBcGeFzVrgC0u+aPwwdY2OLFbZw5PifOpmJcG1hbKd537m43XaygSZ7QExHP2MUjqWE4iPUAzaCnaBdFTjhlevXBB+ecE11QHxR86YBn4sYGFr7RQYUAM55+mea5oYNaKJkl51Upq5OMGr0lwDglVKCEf1wJa3YRGUgew0/uxCrYFoY3SuYRK0h8EvmV1/HQNK9vt5drqA2oTsxC2Z0S61CJWIimGgbejwBc+2PujAWVtFpKye50SqkE1liaBi63y9oAXm632w9Q18ibOL/D00u3aO9ZJoqphCkCcKaYYWEejVQ4FwJMGotRjBpKI71XPdaBtSMgr37ALDzeUvGemFRxhVQF1Z1ALYqKK9ughKiYi9ullJRAQ+vnxIDOeQ8EFfiFQH4KkEzMOTFBb1KuELa1dLGD6Hb6vh6ZQOu6wqwyrn0piZhlGMbpJIo090GKxXpzisRRQN0T9Ay5Qica2F6hg7OD72vLSd3+fdArX3rP3hHFeU1sZU3h0Ifb7e2nPzA69hwSHEKTukmIU7UMxJwdVlECzXhwpQe6t7EyKGx1nXIuEc7s/t40NguywY+XVyzg5I+wReiOEj+RmDWaf4QWa9Pg5dSmFwTvTo2eMqSkThsEQxPU0ARer7lHDdOtlLfnpln74PWjcfd0mQaDVealNOew5jsdSBVlwumSaIUGT8bEnUZ+I6ptW+SgNJnSuMvcDdbokrqyKzcsTbl87B7egixonWz3AddLpOWmiejUO/bI4HvLELseqxoT1eS1fAo34oZ84zPUxlfcdi/lRDHtzDFWfXzhlNb25lUMKlZcvrhgrQx/mqLj+6qQVO83RnG63y+NumfPUh+TPx4yIv0cfe/6j78o5g//Y8z3/Lf51PoN6rBa5hoOjIUAAAAASUVORK5CYII="

/***/ }),

/***/ 527:
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

	function getURL(objectId) {
	  return 'http://mushare-store.oss-cn-hangzhou.aliyuncs.com/' + objectId;
	}

	exports.getOssClient = getOssClient;
	exports.getURL = getURL;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(524), __webpack_require__(294)))

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

/***/ 530:
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

	__webpack_require__(531);

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
	          _react2.default.createElement('div', { className: 'clear' })
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

/***/ 532:
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

/***/ 533:
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

/***/ 534:
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

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _moments = __webpack_require__(536);

	var _moments2 = _interopRequireDefault(_moments);

	var _articles = __webpack_require__(537);

	var _articles2 = _interopRequireDefault(_articles);

	__webpack_require__(528);

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

/***/ 536:
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

/***/ 537:
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

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouterDom = __webpack_require__(483);

	var _profile = __webpack_require__(539);

	var _profile2 = _interopRequireDefault(_profile);

	var _sheets = __webpack_require__(549);

	var _sheets2 = _interopRequireDefault(_sheets);

	var _friends = __webpack_require__(550);

	var _friends2 = _interopRequireDefault(_friends);

	var _subscription = __webpack_require__(551);

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
	        null,
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
	                    { to: '/app/personal/profile', activeClassName: 'active', className: 'item' },
	                    '\u4E2A\u4EBA\u4FE1\u606F'
	                  ),
	                  _react2.default.createElement(
	                    _reactRouterDom.NavLink,
	                    { to: '/app/personal/sheets', activeClassName: 'active', className: 'item' },
	                    '\u6211\u7684\u6B4C\u5355'
	                  ),
	                  _react2.default.createElement(
	                    _reactRouterDom.NavLink,
	                    { to: '/app/personal/subscription', activeClassName: 'active', className: 'item' },
	                    '\u6211\u7684\u8BA2\u9605'
	                  ),
	                  _react2.default.createElement(
	                    _reactRouterDom.NavLink,
	                    { to: '/app/personal/friends', activeClassName: 'active', className: 'item' },
	                    '\u6211\u7684\u597D\u53CB'
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'twelve wide column' },
	                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/app/personal', render: function render(props) {
	                    return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/app/personal/profile' });
	                  } }),
	                _react2.default.createElement(_reactRouterDom.Route, { path: '/app/personal/profile', component: _profile2.default }),
	                _react2.default.createElement(_reactRouterDom.Route, { path: '/app/personal/sheets', component: _sheets2.default }),
	                _react2.default.createElement(_reactRouterDom.Route, { path: '/app/personal/friends', component: _friends2.default }),
	                _react2.default.createElement(_reactRouterDom.Route, { path: '/app/personal/subscription', component: _subscription2.default })
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

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, EventEmitter, fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(525);

	var _mushareReactComponent2 = _interopRequireDefault(_mushareReactComponent);

	var _oss = __webpack_require__(527);

	var _utils = __webpack_require__(541);

	var _upload = __webpack_require__(542);

	var _co = __webpack_require__(543);

	var _co2 = _interopRequireDefault(_co);

	__webpack_require__(544);

	__webpack_require__(545);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AvatarCropperModal = function (_MuComponent) {
	  _inherits(AvatarCropperModal, _MuComponent);

	  function AvatarCropperModal(props) {
	    _classCallCheck(this, AvatarCropperModal);

	    var _this = _possibleConstructorReturn(this, (AvatarCropperModal.__proto__ || Object.getPrototypeOf(AvatarCropperModal)).call(this, props));

	    _this.receiveInputCover = _this.receiveInputCover.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.props.eventEmitter.addListener('receive-input-cover', _this.receiveInputCover);
	    _this.imgcut = '';
	    _this.state = {
	      url: ''
	    };
	    return _this;
	  }

	  _createClass(AvatarCropperModal, [{
	    key: 'receiveInputCover',
	    value: function receiveInputCover(avatar) {
	      var url = URL.createObjectURL(avatar);
	      $('#avatar-cropper-modal img').cropper('destroy');
	      this.setState({
	        url: url
	      });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.eventEmitter.emit('receive-img-cut', this.imgcut);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var self = this;
	      $('#avatar-cropper-modal img').cropper({
	        aspectRatio: 1,
	        crop: function crop(e) {
	          self.imgcut = 'x_' + (e.x < 0 ? 0 : Math.floor(e.x)) + ',' + ('y_' + (e.y < 0 ? 0 : Math.floor(e.y)) + ',') + ('w_' + Math.floor(e.width) + ',') + ('h_' + Math.floor(e.height));
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui small modal', id: 'avatar-cropper-modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'avatar-wrapper' },
	            _react2.default.createElement('img', { src: this.state.url, alt: '' })
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'ui fluid button', onClick: this.handleClick },
	            '\u786E\u5B9A'
	          )
	        )
	      );
	    }
	  }]);

	  return AvatarCropperModal;
	}(_mushareReactComponent2.default);

	var AvatarUploadModal = function (_MuComponent2) {
	  _inherits(AvatarUploadModal, _MuComponent2);

	  function AvatarUploadModal(props) {
	    _classCallCheck(this, AvatarUploadModal);

	    var _this2 = _possibleConstructorReturn(this, (AvatarUploadModal.__proto__ || Object.getPrototypeOf(AvatarUploadModal)).call(this, props));

	    _this2.updateProgress = _this2.updateProgress.bind(_this2);
	    return _this2;
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
	    value: function componentDidUpdate() {}
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

	var UpdateButton = function (_MuComponent3) {
	  _inherits(UpdateButton, _MuComponent3);

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

	var Profile = function (_MuComponent4) {
	  _inherits(Profile, _MuComponent4);

	  function Profile(props) {
	    _classCallCheck(this, Profile);

	    var _this4 = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

	    _this4.state = {
	      name: '',
	      gender: '',
	      mail: '',
	      description: '',
	      avatar: '/image/avatar.png',
	      updateButtonDisabled: true
	    };
	    _this4.avatarFile = null;
	    _this4.eventEmitter = new EventEmitter();
	    _this4.receiveImgCut = _this4.receiveImgCut.bind(_this4);
	    _this4.handleChange = _this4.handleChange.bind(_this4);
	    _this4.loadUserProfile = _this4.loadUserProfile.bind(_this4);
	    _this4.loadUserAvatar = _this4.loadUserAvatar.bind(_this4);
	    _this4.updateProfile = _this4.updateProfile.bind(_this4);
	    _this4.uploadAvatar = _this4.uploadAvatar.bind(_this4);
	    _this4.openAvatarCropperModal = _this4.openAvatarCropperModal.bind(_this4);
	    _this4.eventEmitter.addListener('receive-img-cut', _this4.receiveImgCut);
	    return _this4;
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
	        self.loadUserAvatar(data.body.avatar);
	      }).catch(function (error) {
	        console.error(error);
	      });
	    }
	  }, {
	    key: 'loadUserAvatar',
	    value: function loadUserAvatar(objectId) {
	      var self = this;
	      if (objectId != '') {
	        self.setState({
	          avatar: (0, _oss.getURL)(objectId)
	        });
	      }
	    }
	  }, {
	    key: 'openAvatarCropperModal',
	    value: function openAvatarCropperModal(event) {
	      $('#avatar-cropper-modal').modal({
	        detachable: false
	      }).modal('show');
	      this.avatarFile = event.target.files[0];
	      this.eventEmitter.emit('receive-input-cover', this.avatarFile);
	    }
	  }, {
	    key: 'receiveImgCut',
	    value: function receiveImgCut(imgcut) {
	      console.log(imgcut);
	      $('#avatar-cropper-modal').modal('hide');
	      this.uploadAvatar(this.avatarFile, imgcut);
	    }
	  }, {
	    key: 'uploadAvatar',
	    value: function uploadAvatar(file, imgcut) {
	      console.log('upload avatar');
	      var self = this;
	      var token = $('#token').val();
	      $('#avatar-upload-modal').modal({
	        closable: false,
	        detachable: false
	      }).modal('show');
	      (0, _co2.default)(regeneratorRuntime.mark(function _callee2() {
	        var avatarName, avatar, result;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                avatarName = 'avatar-' + (0, _utils.guid)();
	                _context2.next = 3;
	                return (0, _upload.uploadAvatar)(avatarName, file, token, regeneratorRuntime.mark(function _callee(progress) {
	                  return regeneratorRuntime.wrap(function _callee$(_context) {
	                    while (1) {
	                      switch (_context.prev = _context.next) {
	                        case 0:
	                          self.eventEmitter.emit('update-progress', progress * 100);

	                        case 1:
	                        case 'end':
	                          return _context.stop();
	                      }
	                    }
	                  }, _callee, this);
	                }));

	              case 3:
	                avatar = _context2.sent;
	                _context2.next = 6;
	                return fetch('/api/user/profile/update', {
	                  method: 'PUT',
	                  credentials: 'same-origin',
	                  headers: {
	                    'Authorization': token
	                  },
	                  body: JSON.stringify({
	                    avatar: avatar.name + ('?x-oss-process=image/crop,' + imgcut)
	                  })
	                }).then(self.checkStatus).then(self.parseJSON);

	              case 6:
	                result = _context2.sent;
	                return _context2.abrupt('return', result);

	              case 8:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      })).then(function (result) {
	        console.log(result);
	        self.loadUserProfile();
	        $('#avatar-upload-modal').modal('hide');
	      }, function (error) {
	        console.error(error);
	      });
	    }
	  }, {
	    key: 'updateProfile',
	    value: function updateProfile() {
	      var self = this;
	      var token = $('#token').val();
	      fetch('/api/user/profile/update', {
	        method: 'PUT',
	        credentials: 'same-origin',
	        headers: {
	          'Authorization': token
	        },
	        body: JSON.stringify({
	          name: self.state.name,
	          mail: self.state.mail,
	          description: self.state.description,
	          gender: self.state.gender
	        })
	      }).then(self.checkStatus).then(self.parseJSON).then(function (result) {
	        console.log(result);
	      }).catch(function (error) {
	        console.error(error);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'profile' },
	        _react2.default.createElement(AvatarCropperModal, {
	          eventEmitter: this.eventEmitter }),
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
	                updateProfile: this.updateProfile
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
	                        _react2.default.createElement('input', { type: 'file', name: 'avatar-file', id: 'avatar-file',
	                          className: 'avatar-file',
	                          onChange: this.openAvatarCropperModal }),
	                        _react2.default.createElement(
	                          'label',
	                          { htmlFor: 'avatar-file' },
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301), __webpack_require__(540), __webpack_require__(524)))

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	  }

	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

	exports.guid = guid;

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.uploadSheetCover = exports.uploadAudio = exports.uploadAvatar = undefined;

	var _oss = __webpack_require__(527);

	function uploadAvatar(objectKeyId, file, token, progress) {
	  return (0, _oss.getOssClient)(token).then(function (client) {
	    console.log(client);
	    return client.multipartUpload(objectKeyId, file, {
	      // headers: {
	      //   'x-oss-callback': window.btoa(JSON.stringify({
	      //     'callbackUrl': 'music.mushare.cn/api/oss/upload/avatar',
	      //     'callbackBody': '{"bucket":${bucket},"object":${object},"mimeType":${mimeType},"token":${x:token}}',
	      //     'callbackBodyType': 'application/json'
	      //   })),
	      //   'x-oss-callback-var': window.btoa(JSON.stringify({
	      //     'x:token': callbackVar.token
	      //   }))
	      // },
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

	function uploadSheetCover(objectKeyId, file, token, progress) {
	  return (0, _oss.getOssClient)(token).then(function (client) {
	    return client.multipartUpload(objectKeyId, file, {
	      progress: progress
	    });
	  });
	}

	exports.uploadAvatar = uploadAvatar;
	exports.uploadAudio = uploadAudio;
	exports.uploadSheetCover = uploadSheetCover;

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(546);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(548)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./cropper.min.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./cropper.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(547)();
	// imports


	// module
	exports.push([module.id, "/*!\n * Cropper v3.0.0-rc.1\n * https://github.com/fengyuanchen/cropper\n *\n * Copyright (c) 2017 Fengyuan Chen\n * Released under the MIT license\n *\n * Date: 2017-04-30T03:10:34.736Z\n */\n.cropper-container {\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  direction: ltr;\n  -ms-touch-action: none;\n  touch-action: none; }\n\n.cropper-container img {\n  display: block;\n  min-width: 0 !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  width: 100%;\n  height: 100%;\n  image-orientation: 0deg; }\n\n.cropper-canvas, .cropper-crop-box, .cropper-drag-box, .cropper-modal, .cropper-wrap-box {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.cropper-wrap-box {\n  overflow: hidden; }\n\n.cropper-drag-box {\n  opacity: 0;\n  background-color: #fff; }\n\n.cropper-modal {\n  opacity: .5;\n  background-color: #000; }\n\n.cropper-view-box {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75); }\n\n.cropper-dashed {\n  position: absolute;\n  display: block;\n  opacity: .5;\n  border: 0 dashed #eee; }\n\n.cropper-dashed.dashed-h {\n  top: 33.33333%;\n  left: 0;\n  width: 100%;\n  height: 33.33333%;\n  border-top-width: 1px;\n  border-bottom-width: 1px; }\n\n.cropper-dashed.dashed-v {\n  top: 0;\n  left: 33.33333%;\n  width: 33.33333%;\n  height: 100%;\n  border-right-width: 1px;\n  border-left-width: 1px; }\n\n.cropper-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  opacity: .75; }\n\n.cropper-center:after, .cropper-center:before {\n  position: absolute;\n  display: block;\n  content: \" \";\n  background-color: #eee; }\n\n.cropper-center:before {\n  top: 0;\n  left: -3px;\n  width: 7px;\n  height: 1px; }\n\n.cropper-center:after {\n  top: -3px;\n  left: 0;\n  width: 1px;\n  height: 7px; }\n\n.cropper-face, .cropper-line, .cropper-point {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: .1; }\n\n.cropper-face {\n  top: 0;\n  left: 0;\n  background-color: #fff; }\n\n.cropper-line {\n  background-color: #39f; }\n\n.cropper-line.line-e {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize; }\n\n.cropper-line.line-n {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize; }\n\n.cropper-line.line-w {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize; }\n\n.cropper-line.line-s {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize; }\n\n.cropper-point {\n  width: 5px;\n  height: 5px;\n  opacity: .75;\n  background-color: #39f; }\n\n.cropper-point.point-e {\n  top: 50%;\n  right: -3px;\n  margin-top: -3px;\n  cursor: e-resize; }\n\n.cropper-point.point-n {\n  top: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize; }\n\n.cropper-point.point-w {\n  top: 50%;\n  left: -3px;\n  margin-top: -3px;\n  cursor: w-resize; }\n\n.cropper-point.point-s {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize; }\n\n.cropper-point.point-ne {\n  top: -3px;\n  right: -3px;\n  cursor: ne-resize; }\n\n.cropper-point.point-nw {\n  top: -3px;\n  left: -3px;\n  cursor: nw-resize; }\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  left: -3px;\n  cursor: sw-resize; }\n\n.cropper-point.point-se {\n  right: -3px;\n  bottom: -3px;\n  width: 20px;\n  height: 20px;\n  cursor: se-resize;\n  opacity: 1; }\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    width: 15px;\n    height: 15px; } }\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    width: 10px;\n    height: 10px; } }\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    width: 5px;\n    height: 5px;\n    opacity: .75; } }\n\n.cropper-point.point-se:before {\n  position: absolute;\n  right: -50%;\n  bottom: -50%;\n  display: block;\n  width: 200%;\n  height: 200%;\n  content: \" \";\n  opacity: 0;\n  background-color: #39f; }\n\n.cropper-invisible {\n  opacity: 0; }\n\n.cropper-bg {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\"); }\n\n.cropper-hide {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0; }\n\n.cropper-hidden {\n  display: none !important; }\n\n.cropper-move {\n  cursor: move; }\n\n.cropper-crop {\n  cursor: crosshair; }\n\n.cropper-disabled .cropper-drag-box, .cropper-disabled .cropper-face, .cropper-disabled .cropper-line, .cropper-disabled .cropper-point {\n  cursor: not-allowed; }\n", ""]);

	// exports


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, fetch, EventEmitter) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(525);

	var _mushareReactComponent2 = _interopRequireDefault(_mushareReactComponent);

	var _logo = __webpack_require__(526);

	var _logo2 = _interopRequireDefault(_logo);

	var _utils = __webpack_require__(541);

	var _upload = __webpack_require__(542);

	var _oss = __webpack_require__(527);

	var _co = __webpack_require__(543);

	var _co2 = _interopRequireDefault(_co);

	__webpack_require__(544);

	__webpack_require__(545);

	var _reactRouterDom = __webpack_require__(483);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SheetCoverCropperModal = function (_MuComponent) {
	  _inherits(SheetCoverCropperModal, _MuComponent);

	  function SheetCoverCropperModal(props) {
	    _classCallCheck(this, SheetCoverCropperModal);

	    var _this = _possibleConstructorReturn(this, (SheetCoverCropperModal.__proto__ || Object.getPrototypeOf(SheetCoverCropperModal)).call(this, props));

	    _this.receiveInputCover = _this.receiveInputCover.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.props.eventEmitter.addListener('receive-input-cover', _this.receiveInputCover);
	    _this.imgcut = '';
	    _this.state = {
	      url: ''
	    };
	    return _this;
	  }

	  _createClass(SheetCoverCropperModal, [{
	    key: 'receiveInputCover',
	    value: function receiveInputCover(cover) {
	      var url = URL.createObjectURL(cover);
	      $('#sheet-cover-cropper-modal img').cropper('destroy');
	      this.setState({
	        url: url
	      });
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.props.eventEmitter.emit('receive-img-cut', this.imgcut);
	      $('#sheet-cover-cropper-modal').modal('hide');
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var self = this;
	      $('#sheet-cover-cropper-modal img').cropper({
	        aspectRatio: 1,
	        crop: function crop(e) {
	          self.imgcut = 'x_' + (e.x < 0 ? 0 : Math.floor(e.x)) + ',' + ('y_' + (e.y < 0 ? 0 : Math.floor(e.y)) + ',') + ('w_' + Math.floor(e.width) + ',') + ('h_' + Math.floor(e.height));
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui small couple modal', id: 'sheet-cover-cropper-modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'avatar-wrapper' },
	            _react2.default.createElement('img', { src: this.state.url, alt: '' })
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'ui fluid button', onClick: this.handleClick },
	            '\u786E\u5B9A'
	          )
	        )
	      );
	    }
	  }]);

	  return SheetCoverCropperModal;
	}(_mushareReactComponent2.default);

	var CreateSheetModal = function (_MuComponent2) {
	  _inherits(CreateSheetModal, _MuComponent2);

	  function CreateSheetModal(props) {
	    _classCallCheck(this, CreateSheetModal);

	    var _this2 = _possibleConstructorReturn(this, (CreateSheetModal.__proto__ || Object.getPrototypeOf(CreateSheetModal)).call(this, props));

	    _this2.sheet = {
	      name: '',
	      privilege: '',
	      coverFile: null
	    };
	    _this2.state = {
	      creating: false
	    };
	    _this2.imgcut = '';
	    _this2.receiveImgCut = _this2.receiveImgCut.bind(_this2);
	    _this2.createSheet = _this2.createSheet.bind(_this2);
	    _this2.handleChange = _this2.handleChange.bind(_this2);
	    _this2.props.eventEmitter.addListener('receive-img-cut', _this2.receiveImgCut);
	    return _this2;
	  }

	  _createClass(CreateSheetModal, [{
	    key: 'receiveImgCut',
	    value: function receiveImgCut(imgcut) {
	      console.log(imgcut);
	      this.imgcut = imgcut;
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      if (event.target.type === 'file') {
	        this.props.eventEmitter.emit('receive-input-cover', event.target.files[0]);
	        $('#sheet-cover-cropper-modal').modal('show');
	        this.sheet.coverFile = event.target.files[0];
	      } else {
	        this.sheet[event.target.name] = event.target.value;
	      }
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      this.props.onSheetCreated();
	      $('#create-sheet-modal .form .name').val('');
	      $('#create-sheet-modal .form .sheet-cover-file').val('');
	      $('#create-sheet-modal .form .dropdown').dropdown('clear');
	    }
	  }, {
	    key: 'createSheet',
	    value: function createSheet() {
	      var self = this;
	      if (this.sheet.coverFile === null) {
	        return;
	      }
	      this.setState({
	        creating: true
	      });
	      (0, _co2.default)(regeneratorRuntime.mark(function _callee() {
	        var token, objectId, cover, result;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                token = $('#token').val();
	                objectId = 'sheetcover-' + (0, _utils.guid)();
	                _context.next = 4;
	                return (0, _upload.uploadSheetCover)(objectId, self.sheet.coverFile, token);

	              case 4:
	                cover = _context.sent;

	                console.log(cover);
	                _context.next = 8;
	                return fetch('/api/music/sheet/create', {
	                  method: 'POST',
	                  credentials: 'same-origin',
	                  headers: {
	                    'Authorization': token
	                  },
	                  body: JSON.stringify({
	                    name: self.sheet.name,
	                    privilege: self.sheet.privilege,
	                    cover: cover.name + ('?x-oss-process=image/crop,' + self.imgcut)
	                  })
	                }).then(self.checkStatus).then(self.parseJSON);

	              case 8:
	                result = _context.sent;
	                return _context.abrupt('return', result);

	              case 10:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      })).then(function (result) {
	        self.setState({
	          creating: false
	        });
	        self.closeModal();
	      }, function (error) {
	        self.setState({
	          creating: false
	        });
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var self = this;
	      $('#create-sheet-modal .form .dropdown').dropdown({
	        onChange: function onChange(value) {
	          console.log(value);
	          self.sheet.privilege = value;
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var button = null;
	      if (this.state.creating) {
	        button = _react2.default.createElement(
	          'button',
	          { className: 'ui fluid button', onClick: this.createSheet },
	          _react2.default.createElement('i', { className: 'spinner loading icon' }),
	          '\u521B\u5EFA\u4E2D...'
	        );
	      } else {
	        button = _react2.default.createElement(
	          'button',
	          { className: 'ui fluid button', onClick: this.createSheet },
	          '\u521B\u5EFA'
	        );
	      }
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui small couple modal', id: 'create-sheet-modal' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui items' },
	            _react2.default.createElement(
	              'div',
	              { className: 'item' },
	              _react2.default.createElement(
	                'div',
	                { className: 'ui image' },
	                _react2.default.createElement('img', { src: _logo2.default, alt: '' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'middle aligned content' },
	                _react2.default.createElement(
	                  'h3',
	                  null,
	                  '\u521B\u5EFA\u6B4C\u5355'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'ui form' },
	            _react2.default.createElement(
	              'div',
	              { className: 'field' },
	              _react2.default.createElement(
	                'label',
	                null,
	                '\u6B4C\u5355\u540D'
	              ),
	              _react2.default.createElement('input', { type: 'text', name: 'name', className: 'name',
	                placeholder: '\u6B4C\u5355\u540D', onChange: this.handleChange })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'field' },
	              _react2.default.createElement(
	                'label',
	                null,
	                '\u6743\u9650'
	              ),
	              _react2.default.createElement(
	                'select',
	                { name: 'privilege', className: 'ui fluid dropdown' },
	                _react2.default.createElement(
	                  'option',
	                  { value: '' },
	                  '\u9009\u62E9\u6743\u9650'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'public' },
	                  '\u5BF9\u6240\u6709\u4EBA\u516C\u5F00'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'friend' },
	                  '\u5BF9\u597D\u53CB\u516C\u5F00'
	                ),
	                _react2.default.createElement(
	                  'option',
	                  { value: 'private' },
	                  '\u79C1\u6709'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'field' },
	              _react2.default.createElement('input', { type: 'file', name: 'sheet-cover-file', id: 'sheet-cover-file',
	                className: 'sheet-cover-file',
	                onChange: this.handleChange }),
	              _react2.default.createElement(
	                'label',
	                { htmlFor: 'sheet-cover-file' },
	                '\u4E0A\u4F20\u5C01\u9762'
	              )
	            ),
	            button
	          )
	        )
	      );
	    }
	  }]);

	  return CreateSheetModal;
	}(_mushareReactComponent2.default);

	var SheetCards = function (_MuComponent3) {
	  _inherits(SheetCards, _MuComponent3);

	  function SheetCards(props) {
	    _classCallCheck(this, SheetCards);

	    return _possibleConstructorReturn(this, (SheetCards.__proto__ || Object.getPrototypeOf(SheetCards)).call(this, props));
	  }

	  _createClass(SheetCards, [{
	    key: 'render',
	    value: function render() {
	      var cards = this.props.sheets.map(function (sheet) {
	        return _react2.default.createElement(
	          _reactRouterDom.Link,
	          {
	            to: '/app/sheet/' + sheet.id,
	            className: 'card',
	            'data-id': sheet.id },
	          _react2.default.createElement(
	            'div',
	            { className: 'image' },
	            _react2.default.createElement('img', {
	              src: sheet.cover === '' ? '/image/avatar.png' : (0, _oss.getURL)(sheet.cover) })
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
	        cards,
	        _react2.default.createElement(
	          'div',
	          {
	            className: 'card',
	            onClick: this.props.openCreateSheetModal },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui middle aligned grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'row' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'column' },
	                  _react2.default.createElement('i', { className: 'huge plus icon' })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return SheetCards;
	}(_mushareReactComponent2.default);

	var Sheets = function (_MuComponent4) {
	  _inherits(Sheets, _MuComponent4);

	  function Sheets(props) {
	    _classCallCheck(this, Sheets);

	    var _this4 = _possibleConstructorReturn(this, (Sheets.__proto__ || Object.getPrototypeOf(Sheets)).call(this, props));

	    _this4.state = {
	      privateSheet: [],
	      publicSheet: []
	    };
	    _this4.eventEmitter = new EventEmitter();
	    _this4.onSheetCreated = _this4.onSheetCreated.bind(_this4);
	    _this4.openCreateSheetModal = _this4.openCreateSheetModal.bind(_this4);
	    return _this4;
	  }

	  _createClass(Sheets, [{
	    key: 'openCreateSheetModal',
	    value: function openCreateSheetModal() {
	      $('#create-sheet-modal').modal('show');
	    }
	  }, {
	    key: 'onSheetCreated',
	    value: function onSheetCreated() {
	      $('#create-sheet-modal').modal('hide');
	      this.loadSheet();
	    }
	  }, {
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
	      $('.sheets .couple.modal').modal({
	        detachable: false,
	        allowMultiple: true
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'sheets' },
	        _react2.default.createElement(CreateSheetModal, {
	          eventEmitter: this.eventEmitter,
	          onSheetCreated: this.onSheetCreated
	        }),
	        _react2.default.createElement(SheetCoverCropperModal, {
	          eventEmitter: this.eventEmitter
	        }),
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
	            sheets: this.state.publicSheet,
	            openCreateSheetModal: this.openCreateSheetModal,
	            createSheet: this.createSheet })
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
	            sheets: this.state.privateSheet,
	            openCreateSheetModal: this.openCreateSheetModal,
	            createSheet: this.createSheet })
	        )
	      );
	    }
	  }]);

	  return Sheets;
	}(_mushareReactComponent2.default);

	exports.default = Sheets;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301), __webpack_require__(524), __webpack_require__(540)))

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch, $) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(525);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(524), __webpack_require__(301)))

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch, $) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(525);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(524), __webpack_require__(301)))

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _mushareReactComponent = __webpack_require__(525);

	var _mushareReactComponent2 = _interopRequireDefault(_mushareReactComponent);

	var _oss = __webpack_require__(527);

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
	                  _react2.default.createElement('img', { src: this.props.sheetInfo.cover, alt: '' })
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'middle aligned content' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'ui huge header' },
	                    this.props.sheetInfo.sheetName
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'meta' },
	                    _react2.default.createElement('img', { className: 'ui avatar image',
	                      src: this.props.sheetInfo.creatorAvatar }),
	                    _react2.default.createElement(
	                      'a',
	                      { href: '', className: 'username' },
	                      this.props.sheetInfo.creator
	                    ),
	                    _react2.default.createElement(
	                      'span',
	                      {
	                        className: 'modify-date' },
	                      '\u4E0A\u6B21\u4FEE\u6539\u65E5\u671F\uFF1A',
	                      this.props.sheetInfo.lastModified
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
	        creatorAvatar: '',
	        lastModified: '',
	        cover: ''
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
	          sheetName: data.body.name,
	          cover: data.body.cover === '' ? '/image/avatar' : (0, _oss.getURL)(data.body.cover),
	          creator: data.body.user.name,
	          creatorAvatar: data.body.user.avatar === '' ? '/image/avatar' : (0, _oss.getURL)(data.body.user.avatar),
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301), __webpack_require__(524)))

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(528);

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

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(555);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(548)(content, {});
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

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(547)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n#chat.ui[class*=\"very wide\"].left.sidebar, #chat.ui[class*=\"very wide\"].right.sidebar {\n  width: 600px; }\n\n#chat .content {\n  width: 100%;\n  height: 100%;\n  background-color: cornflowerblue; }\n\n#avatar-upload-modal .container {\n  width: 80%;\n  padding: 2em; }\n\n#app .grid, #app .column {\n  padding: 0;\n  margin: 0; }\n\n#app .header a {\n  color: black; }\n\n#app .header .icon {\n  margin: 0; }\n\n#app .header .segment {\n  box-shadow: none;\n  border: none; }\n\n#app .header .header-top .item {\n  padding-top: 0.1em;\n  padding-bottom: 0.1em; }\n\n#app .header .header-top .icon-home, #app .header .header-top .icon-user {\n  border-color: #E6E6E6;\n  border-style: solid;\n  border-width: 0 1px;\n  border-radius: 0; }\n\n#app .header .header-top .icon-home i:hover, #app .header .header-top .icon-user .dropdown:hover {\n  color: #535353; }\n\n#app .header .header-top .dropdown .menu {\n  z-index: 200; }\n\n#app .header .divider {\n  border-width: 1px;\n  margin: 0; }\n\n#app .header .navigation {\n  border-bottom-color: #E6E6E6;\n  border-bottom-width: 1px;\n  border-bottom-style: solid; }\n  #app .header .navigation .menu {\n    box-shadow: none;\n    border-top: none;\n    border-bottom: none;\n    border-radius: 0; }\n  #app .header .navigation .item a {\n    color: #181818;\n    font-weight: 500; }\n\n#app .home {\n  /**********roundabout**********/ }\n  #app .home .carousel {\n    background-color: #2a2a2a; }\n  #app .home .exhibition_hall {\n    text-align: center;\n    position: relative;\n    overflow: hidden; }\n  #app .home .exhibition_hall h4 {\n    font-size: 30px;\n    text-align: center;\n    margin: 0px auto;\n    padding-top: 50px;\n    color: #000; }\n  #app .home .tline {\n    color: #dedede; }\n  #app .home .roundabout_box {\n    width: 100%; }\n  #app .home .roundabout_box img {\n    width: 100%; }\n  #app .home .roundabout_box {\n    height: 430px;\n    width: 100%;\n    margin: 0px auto 20px auto; }\n  #app .home .roundabout-holder {\n    list-style: none;\n    width: 500px;\n    height: 425px;\n    margin: 0px auto; }\n  #app .home .roundabout-moveable-item {\n    font-size: 12px !important;\n    height: 425px;\n    width: 650px;\n    cursor: pointer;\n    background: #f9f9f9; }\n  #app .home .roundabout-moveable-item img {\n    height: 100%;\n    width: 100%;\n    background-color: #FFFFFF;\n    margin: 0; }\n  #app .home .roundabout-in-focus {\n    cursor: auto; }\n  #app .home .roundabout-in-focus000:hover {\n    -webkit-box-shadow: 0px 0px 20px #787878;\n    -moz-box-shadow: 0px 0px 20px #787878;\n    background: #f9f9f9; }\n  #app .home .roundabout-holder .text {\n    color: #999; }\n  #app .home .roundabout-in-focus000:hover span {\n    display: inline;\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    padding: 8px 20px;\n    background: #f9f9f9;\n    color: #3366cc;\n    z-index: 999;\n    -webkit-border-top-left-radius: 5px;\n    -moz-border-radius-topLeft: 5px;\n    border-left: 1px solid #aaaaaa;\n    border-top: 1px solid #aaaaaa; }\n  #app .home .roundabout a:active, #app .home .roundabout a:focus, #app .home .roundabout a:visited {\n    outline: none;\n    text-decoration: none; }\n  #app .home .roundabout li {\n    margin: 0; }\n  #app .home .container {\n    padding: 1em 2em 1em 2em; }\n  #app .home .hot .cards, #app .home .recommend .cards, #app .home .original .cards {\n    padding: 0 2em; }\n    #app .home .hot .cards .description, #app .home .recommend .cards .description, #app .home .original .cards .description {\n      font-size: 20px;\n      text-align: center; }\n\n#app .hot .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .hot .cards {\n  padding: 0 2em; }\n  #app .hot .cards .description {\n    font-size: 20px;\n    text-align: center; }\n\n#app .recommend .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .recommend .cards {\n  padding: 0 2em; }\n  #app .recommend .cards .description {\n    font-size: 20px;\n    text-align: center; }\n\n#app .original .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .original .cards {\n  padding: 0 2em; }\n  #app .original .cards .description {\n    font-size: 20px;\n    text-align: center; }\n\n#app .community .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .sheet-page .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .sheet-page .sheet-info .cover {\n  width: 220px; }\n\n#app .sheet-page .sheet-info .item .content .modify-date {\n  font-size: 13px;\n  margin-left: 5px; }\n\n#app .sheet-page .sheet-info .item .content .username {\n  font-size: 15px;\n  font-weight: bold;\n  margin: 5px; }\n\n#app .sheet-page .audio-content .audio-list table .operations {\n  margin-left: 10px; }\n\n#app .personal .container {\n  padding: 1em 2em 1em 2em; }\n\n#app .personal .profile #avatar-cropper-modal .avatar-wrapper {\n  height: 364px;\n  width: 100%;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);\n  background-color: #fcfcfc;\n  overflow: hidden; }\n\n#app .personal .profile #avatar-cropper-modal .avatar-wrapper img {\n  display: block;\n  height: auto;\n  max-width: 100%; }\n\n#app .personal .profile .form {\n  padding: 0 6em 0 0; }\n\n#app .personal .profile .avatar .avatar-file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n#app .personal .profile .avatar .avatar-file + label {\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 500;\n  color: white;\n  padding: 0.625rem 1.25rem;\n  background-color: black;\n  display: inline-block; }\n\n#app .personal .profile .avatar .avatar-file:focus + label,\n#app .personal .profile .avatar .avatar-file + label:hover {\n  background-color: red; }\n\n#app .personal .sheets #sheet-cover-cropper-modal .avatar-wrapper {\n  height: 364px;\n  width: 100%;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);\n  background-color: #fcfcfc;\n  overflow: hidden; }\n\n#app .personal .sheets #sheet-cover-cropper-modal .avatar-wrapper img {\n  display: block;\n  height: auto;\n  max-width: 100%; }\n\n#app .personal .sheets #create-sheet-modal .container {\n  width: 80%;\n  padding: 2em; }\n\n#app .personal .sheets #create-sheet-modal .sheet-cover-file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n#app .personal .sheets #create-sheet-modal .sheet-cover-file + label {\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 400;\n  color: white;\n  padding: 0.625rem 1.25rem;\n  background-color: black;\n  display: inline-block; }\n\n#app .personal .sheets #create-sheet-modal .sheet-cover-file:focus + label,\n#app .personal .sheets #create-sheet-modal .sheet-cover-file + label:hover {\n  background-color: red; }\n\n#app .personal .sheets .public-sheet, #app .personal .sheets .private-sheet {\n  padding: 0 6em 2em 0; }\n  #app .personal .sheets .public-sheet .content .description, #app .personal .sheets .private-sheet .content .description {\n    text-align: center; }\n  #app .personal .sheets .public-sheet .cards:last-child .content, #app .personal .sheets .private-sheet .cards:last-child .content {\n    height: 100%; }\n    #app .personal .sheets .public-sheet .cards:last-child .content .grid, #app .personal .sheets .private-sheet .cards:last-child .content .grid {\n      height: 100%; }\n      #app .personal .sheets .public-sheet .cards:last-child .content .grid .column, #app .personal .sheets .private-sheet .cards:last-child .content .grid .column {\n        text-align: center; }\n\n#app .personal .subscription .subs-sheet {\n  padding: 0 6em 2em 0; }\n  #app .personal .subscription .subs-sheet .content .description {\n    text-align: center; }\n\n#app .personal .friends .friends-list  {\n  padding: 0 12em 2em 0; }\n\n#app .footer .column {\n  padding: 0 2em; }\n\n#app .footer.segment {\n  padding: 3em 0em; }\n", ""]);

	// exports


/***/ })

});
//# sourceMappingURL=app.js.map