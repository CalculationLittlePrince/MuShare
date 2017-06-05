webpackJsonp([1,4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(558);


/***/ }),

/***/ 296:
/***/ (function(module, exports) {

	/* (ignored) */

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

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {// var $ = require('jquery');
	// require('../vendor/bootstrap');
	// $(document).ready(function ($) {
	//   $(".scroll").click(function (event) {
	//     event.preventDefault();
	//     $('html,body').animate({
	//       scrollTop: $(this.hash).offset().top
	//     }, 1000);
	//   });
	// });
	//
	// require('../vendor/jarallax');
	// require('../vendor/SmoothScroll.min');
	//
	// $('.jarallax').jarallax({
	//   speed: 0.3,
	//   imgWidth: 1366,
	//   imgHeight: 768
	// })
	//
	// require('../vendor/responsiveslides.min');
	// require('../vendor/move-top');
	// require('../vendor/easing');
	//
	// $(document).ready(function () {
	//   /*
	//    var defaults = {
	//    containerID: 'toTop', // fading element id
	//    containerHoverID: 'toTopHover', // fading element hover id
	//    scrollSpeed: 1200,
	//    easingType: 'linear'
	//    };
	//    */
	//
	//   $().UItoTop({
	//     easingType: 'easeOutQuart'
	//   });
	//
	// });

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(336);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _header = __webpack_require__(559);

	var _header2 = _interopRequireDefault(_header);

	__webpack_require__(562);

	__webpack_require__(528);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Index = function (_React$Component) {
	  _inherits(Index, _React$Component);

	  function Index(props) {
	    _classCallCheck(this, Index);

	    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
	  }

	  _createClass(Index, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'index' },
	        _react2.default.createElement(_header2.default, null)
	      );
	    }
	  }]);

	  return Index;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Index, null), $('#react-root')[0]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _logo = __webpack_require__(526);

	var _logo2 = _interopRequireDefault(_logo);

	var _login = __webpack_require__(560);

	var _login2 = _interopRequireDefault(_login);

	var _register = __webpack_require__(561);

	var _register2 = _interopRequireDefault(_register);

	__webpack_require__(528);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header(props) {
	    _classCallCheck(this, Header);

	    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

	    _this.showLogin = _this.showLogin.bind(_this);
	    _this.showRegister = _this.showRegister.bind(_this);
	    return _this;
	  }

	  _createClass(Header, [{
	    key: 'showRegister',
	    value: function showRegister() {
	      $('.ui.modal.register').modal({
	        detachable: false,
	        observeChanges: true
	      }).modal('show');
	    }
	  }, {
	    key: 'showLogin',
	    value: function showLogin() {
	      $('.ui.modal.login').modal({
	        detachable: false,
	        observeChanges: true
	      }).modal('show');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'header' },
	        _react2.default.createElement(_login2.default, null),
	        _react2.default.createElement(_register2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'header-top' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui grid container' },
	            _react2.default.createElement('div', { className: 'six wide column' }),
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
	                        { className: 'ui primary button',
	                          onClick: this.showRegister },
	                        'Sign up'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'item' },
	                      _react2.default.createElement(
	                        'div',
	                        { className: 'ui button', onClick: this.showLogin },
	                        'Login'
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

	  return Header;
	}(_react2.default.Component);

	exports.default = Header;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mushareReactComponent = __webpack_require__(525);

	var _mushareReactComponent2 = _interopRequireDefault(_mushareReactComponent);

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _logo = __webpack_require__(526);

	var _logo2 = _interopRequireDefault(_logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginMessage = function (_MuComponent) {
	  _inherits(LoginMessage, _MuComponent);

	  function LoginMessage(props) {
	    _classCallCheck(this, LoginMessage);

	    return _possibleConstructorReturn(this, (LoginMessage.__proto__ || Object.getPrototypeOf(LoginMessage)).call(this, props));
	  }

	  _createClass(LoginMessage, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.message == 0) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'ui success message' },
	          '\u767B\u9646\u6210\u529F\uFF0C\u6B63\u5728\u4E3A\u60A8\u8DF3\u8F6C...'
	        );
	      } else if (this.props.message == 1) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'ui error message' },
	          '\u767B\u9646\u5931\u8D25'
	        );
	      } else {
	        return null;
	      }
	    }
	  }]);

	  return LoginMessage;
	}(_mushareReactComponent2.default);

	var LoginButton = function (_MuComponent2) {
	  _inherits(LoginButton, _MuComponent2);

	  function LoginButton() {
	    _classCallCheck(this, LoginButton);

	    return _possibleConstructorReturn(this, (LoginButton.__proto__ || Object.getPrototypeOf(LoginButton)).apply(this, arguments));
	  }

	  _createClass(LoginButton, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.buttonLoading == 0) {
	        return _react2.default.createElement(
	          'button',
	          { className: 'ui fluid button', onClick: this.props.handleLogin },
	          '\u767B\u9646'
	        );
	      } else if (this.props.buttonLoading == 1) {
	        return _react2.default.createElement(
	          'button',
	          { className: 'ui fluid button', onClick: this.props.handleLogin },
	          _react2.default.createElement('i', { className: 'spinner loading icon' }),
	          '\u767B\u9646'
	        );
	      }
	    }
	  }]);

	  return LoginButton;
	}(_mushareReactComponent2.default);

	var Login = function (_MuComponent3) {
	  _inherits(Login, _MuComponent3);

	  function Login(props) {
	    _classCallCheck(this, Login);

	    var _this3 = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

	    _this3.state = {
	      mail: '',
	      password: '',
	      loginMessage: -1,
	      buttonLoading: 0
	    };

	    _this3.handleChange = _this3.handleChange.bind(_this3);
	    _this3.handleLogin = _this3.handleLogin.bind(_this3);
	    return _this3;
	  }

	  _createClass(Login, [{
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.setState(_defineProperty({}, event.target.name, event.target.value));
	    }
	  }, {
	    key: 'handleLogin',
	    value: function handleLogin() {
	      var self = this;
	      this.setState({
	        buttonLoading: 1
	      });
	      fetch('/api/user/account/login', {
	        method: 'POST',
	        credentials: 'same-origin',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
	          mail: self.state.mail,
	          password: self.state.password
	        })
	      }).then(self.checkStatus).then(self.parseJSON).then(function (data) {
	        self.setState({
	          loginMessage: 0
	        });
	        setInterval(function () {
	          window.location.href = "/app";
	        }, 500);
	      }).catch(function (error) {
	        self.setState({
	          buttonLoading: 0,
	          loginMessage: 1
	        });
	      });
	      event.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui small login modal', id: 'login' },
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
	                  '\u767B\u9646'
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
	                'div',
	                { className: 'ui left icon input' },
	                _react2.default.createElement('i', { className: 'user icon' }),
	                _react2.default.createElement('input', { type: 'text', name: 'mail', value: this.state.mail,
	                  placeholder: 'Mail Address', onChange: this.handleChange })
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'field' },
	              _react2.default.createElement(
	                'div',
	                { className: 'ui left icon input' },
	                _react2.default.createElement('i', { className: 'lock icon' }),
	                _react2.default.createElement('input', { type: 'password', name: 'password',
	                  value: this.state.password,
	                  placeholder: 'Password', onChange: this.handleChange })
	              )
	            ),
	            _react2.default.createElement(LoginButton, {
	              buttonLoading: this.state.buttonLoading,
	              handleLogin: this.handleLogin })
	          ),
	          _react2.default.createElement(LoginMessage, { message: this.state.loginMessage })
	        )
	      );
	    }
	  }]);

	  return Login;
	}(_mushareReactComponent2.default);

	exports.default = Login;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(524)))

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _logo = __webpack_require__(526);

	var _logo2 = _interopRequireDefault(_logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Register = function (_React$Component) {
	  _inherits(Register, _React$Component);

	  function Register(props) {
	    _classCallCheck(this, Register);

	    return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));
	  }

	  _createClass(Register, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'ui register modal', id: 'register' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui middle center aligned grid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'column' },
	            _react2.default.createElement(
	              'h2',
	              { className: 'ui teal image header' },
	              _react2.default.createElement('img', { src: _logo2.default, className: 'image' }),
	              _react2.default.createElement(
	                'div',
	                { className: 'content' },
	                '\u7528\u6237\u6CE8\u518C'
	              )
	            ),
	            _react2.default.createElement(
	              'form',
	              { className: 'ui large form' },
	              _react2.default.createElement(
	                'div',
	                { className: 'ui stacked segment' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'field' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'ui left icon input' },
	                    _react2.default.createElement('i', { className: 'user icon' }),
	                    _react2.default.createElement('input', { type: 'text', name: 'email',
	                      placeholder: 'E-mail address' })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'field' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'ui left icon input' },
	                    _react2.default.createElement('i', { className: 'lock icon' }),
	                    _react2.default.createElement('input', { type: 'password', name: 'password',
	                      placeholder: 'Password' })
	                  )
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'ui fluid large teal submit button' },
	                  'Login'
	                )
	              ),
	              _react2.default.createElement('div', { className: 'ui error message' })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Register;
	}(_react2.default.Component);

	exports.default = Register;

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(563);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(550)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(549)();
	// imports


	// module
	exports.push([module.id, "#register .grid, #register .column, #login .grid, #login .column {\n  padding: 0;\n  margin: 0; }\n\n#register .container, #login .container {\n  width: 80%;\n  padding: 2em; }\n\n#index .grid, #index .column {\n  padding: 0;\n  margin: 0; }\n\n#index .header a {\n  color: black; }\n\n#index .header .icon {\n  margin: 0; }\n\n#index .header .segment {\n  box-shadow: none;\n  border: none; }\n\n#index .header .header-top .item {\n  padding-top: 0.1em;\n  padding-bottom: 0.1em; }\n", ""]);

	// exports


/***/ })

});
//# sourceMappingURL=index.js.map