webpackJsonp([2,4],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(564);


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

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(302);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(336);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _header = __webpack_require__(565);

	var _header2 = _interopRequireDefault(_header);

	var _player = __webpack_require__(566);

	var _player2 = _interopRequireDefault(_player);

	__webpack_require__(567);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);

	  function Main() {
	    _classCallCheck(this, Main);

	    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
	  }

	  _createClass(Main, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'player' },
	        _react2.default.createElement(_header2.default, null),
	        _react2.default.createElement(_player2.default, null)
	      );
	    }
	  }]);

	  return Main;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), $('#react-root')[0]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ }),

/***/ 565:
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

	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header(props) {
	    _classCallCheck(this, Header);

	    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'header' },
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
	            _react2.default.createElement('div', { className: 'six wide column' })
	          )
	        )
	      );
	    }
	  }]);

	  return Header;
	}(_react2.default.Component);

	exports.default = Header;

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

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

	var AudioList = function (_MuComponent) {
	  _inherits(AudioList, _MuComponent);

	  function AudioList() {
	    _classCallCheck(this, AudioList);

	    return _possibleConstructorReturn(this, (AudioList.__proto__ || Object.getPrototypeOf(AudioList)).apply(this, arguments));
	  }

	  _createClass(AudioList, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'audio-list' },
	        _react2.default.createElement(
	          'div',
	          { className: 'title' },
	          _react2.default.createElement(
	            'span',
	            null,
	            '\u97F3\u4E50\u5217\u8868'
	          ),
	          _react2.default.createElement('span', { className: 'title-index' })
	        ),
	        _react2.default.createElement('div', { className: 'ui divider' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'ui middle aligned divided list' },
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '2.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'item' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'one wide column' },
	                '1.'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'seven wide column' },
	                'test'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                'liyifan'
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement('i', { className: 'remove icon' })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return AudioList;
	}(_mushareReactComponent2.default);

	var AudioInfo = function (_MuComponent2) {
	  _inherits(AudioInfo, _MuComponent2);

	  function AudioInfo() {
	    _classCallCheck(this, AudioInfo);

	    return _possibleConstructorReturn(this, (AudioInfo.__proto__ || Object.getPrototypeOf(AudioInfo)).apply(this, arguments));
	  }

	  _createClass(AudioInfo, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'audio-info' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui segment cover' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui centered medium rounded' },
	            _react2.default.createElement('img', { src: '/image/hot_sheet_1.png', alt: '' })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'name' },
	            'test'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'artist' },
	            'liyifan'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'sheet' },
	            '\u4F60\u5728\u6211\u7684\u6B4C\u5355\u91CC'
	          )
	        )
	      );
	    }
	  }]);

	  return AudioInfo;
	}(_mushareReactComponent2.default);

	var AudioController = function (_MuComponent3) {
	  _inherits(AudioController, _MuComponent3);

	  function AudioController() {
	    _classCallCheck(this, AudioController);

	    return _possibleConstructorReturn(this, (AudioController.__proto__ || Object.getPrototypeOf(AudioController)).apply(this, arguments));
	  }

	  _createClass(AudioController, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'audio-controller' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ui grid' },
	          _react2.default.createElement(
	            'div',
	            { className: 'mod1 eight wide column' },
	            _react2.default.createElement(
	              'div',
	              { className: 'hd ui items' },
	              _react2.default.createElement(
	                'div',
	                { className: 'item' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'middle aligned content' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'song-title' },
	                    'test'
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'ui right floated time' },
	                    _react2.default.createElement(
	                      'span',
	                      null,
	                      '-'
	                    ),
	                    _react2.default.createElement(
	                      'span',
	                      { className: 'rest' },
	                      '00:00'
	                    )
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'bd' },
	              _react2.default.createElement(
	                'div',
	                { className: 'ui progress' },
	                _react2.default.createElement('div', { className: 'progress-slider' }),
	                _react2.default.createElement('div', { className: 'progress-loaded' }),
	                _react2.default.createElement('div', { className: 'progress-player' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'mod2 three wide column ' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'six wide column' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'btn-mode' },
	                  _react2.default.createElement('i', { className: 'random icon' })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'ten wide column' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'ui grid' },
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'six wide column' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'btn-volume' },
	                      _react2.default.createElement('i', { className: 'volume up icon' })
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'div',
	                    { className: 'ten wide column' },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'volume-progress' },
	                      _react2.default.createElement('div', { className: 'current' }),
	                      _react2.default.createElement('div', { className: 'slider' })
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'mod3 five wide column' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'btn-preview' },
	                  _react2.default.createElement('i', { className: 'step backward icon' })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'btn-playpause' },
	                  _react2.default.createElement('i', { className: 'play icon' })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'four wide column' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'btn-next' },
	                  _react2.default.createElement('i', { className: 'step forward icon' })
	                )
	              ),
	              _react2.default.createElement('div', { className: 'four wide column' })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return AudioController;
	}(_mushareReactComponent2.default);

	var Player = function (_MuComponent4) {
	  _inherits(Player, _MuComponent4);

	  function Player() {
	    _classCallCheck(this, Player);

	    return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).apply(this, arguments));
	  }

	  _createClass(Player, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'player' },
	        _react2.default.createElement(
	          'div',
	          { className: 'middle' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui container' },
	            _react2.default.createElement(
	              'div',
	              { className: 'ui grid' },
	              _react2.default.createElement(
	                'div',
	                { className: 'eleven wide column' },
	                _react2.default.createElement(AudioList, null)
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'five wide column' },
	                _react2.default.createElement(AudioInfo, null)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'footer' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ui container' },
	            _react2.default.createElement(AudioController, null)
	          )
	        )
	      );
	    }
	  }]);

	  return Player;
	}(_mushareReactComponent2.default);

	exports.default = Player;

	// define([], function () {
	//   function MPlayer(option) {
	//     this.songList = option.songList ? option.songList : [];
	//     //use in song index in list
	//     this.compare = option.compare;
	//     this.mode = option.mode;
	//     this.audio = null;
	//     this.currentSong = null;
	//     this.listener = {};
	//   }
	//
	//   MPlayer.prototype.setOnSongLoadListener = function (listener) {
	//     this.listener.onSongLoad = listener;
	//   };
	//
	//   MPlayer.prototype.setOnPlayPauseListener = function (listener) {
	//     this.listener.onPlayPause = listener;
	//   };
	//
	//   MPlayer.prototype.setOnProgressListener = function (listener) {
	//     this.listener.onProgress = listener;
	//   };
	//
	//   MPlayer.prototype.setOnMetaLoadedListener = function (listener) {
	//     this.listener.onMetaLoaded = listener;
	//   };
	//
	//   MPlayer.prototype.setOnSongRemoveListener = function (listener) {
	//     this.listener.onSongRemove = listener;
	//   };
	//
	//   MPlayer.prototype.setOnSongListChangeListener = function (listener) {
	//     this.listener.onSongListChange = listener;
	//   };
	//
	//   MPlayer.prototype.setOnEndedListener = function (listener) {
	//     this.listener.onEnded = listener;
	//   };
	//
	//   MPlayer.prototype.insertSongList = function (list) {
	//     var i;
	//     for (i = list.length - 1; i >= 0; i--) {
	//       this.songList.unshift(list[i]);
	//     }
	//     if (this.listener.onSongListChange) {
	//       this.listener.onSongListChange(this.songList);
	//     }
	//     //play first song in list
	//     this.load();
	//   };
	//
	//   MPlayer.prototype.removeSong = function (mid) {
	//     var position = this.compare({mid: mid}, this.songList);
	//     if (mid == this.currentSong.mid && this.songList.length > 1) {
	//       this.next();
	//     }
	//     this.songList.splice(position, 1);
	//     if (this.listener.onSongRemove) {
	//       this.listener.onSongRemove(this.currentSong, this.songList);
	//     }
	//   };
	//
	//   MPlayer.prototype.load = function (song) {
	//     console.log('load music');
	//     if (this.songList.length == 0) {
	//       return;
	//     }
	//     if (typeof song === 'number') {
	//       var index = this.compare({mid: song}, this.songList);
	//       this.currentSong = index != -1 ? this.songList[index] : this.songList[0];
	//     } else {
	//       this.currentSong = song ? song : this.songList[0];
	//     }
	//     if (this.audio && !this.audio.paused) {
	//       //stop current song
	//       this.audio.pause();
	//       this.audio = null;
	//       if (this.listener.onEnded) {
	//         this.listener.onEnded();
	//       }
	//     }
	//     this.audio = new Audio(this.currentSong.url);
	//     this.setAudioListener();
	//     if (this.listener.onSongLoad) {
	//       this.listener.onSongLoad(this.currentSong);
	//     }
	//     this.playpause();
	//   };
	//
	//   MPlayer.prototype.setAudioListener = function () {
	//     //load metadata
	//     var self = this;
	//     this.audio.onloadedmetadata = function () {
	//       var meta = {
	//         duration: timeConvert(self.audio.duration),
	//         cover: self.currentSong.cover,
	//         author: self.currentSong.author,
	//         album: self.currentSong.album,
	//         title: self.currentSong.title,
	//       };
	//       if (self.listener.onMetaLoaded) {
	//         self.listener.onMetaLoaded(meta);
	//       }
	//     };
	//
	//     //progress
	//     this.audio.ontimeupdate = function () {
	//       if (self.listener.onProgress) {
	//         self.listener.onProgress({
	//           percent: self.audio.currentTime / self.audio.duration * 100,
	//           rest: timeConvert(self.audio.duration - self.audio.currentTime)
	//         });
	//       }
	//     };
	//
	//     this.audio.onended = function () {
	//       if (self.listener.onEnded) {
	//         self.listener.onEnded();
	//       }
	//       self.next();
	//     };
	//   };
	//
	//   MPlayer.prototype.playpause = function () {
	//     if (this.listener.onPlayPause) {
	//       this.listener.onPlayPause(this.audio.paused);
	//     }
	//     if (this.audio && !this.audio.paused) {
	//       console.log('pause');
	//       this.audio.pause();
	//     } else if (this.audio && this.audio.paused) {
	//       console.log('play');
	//       this.audio.play();
	//     }
	//   };
	//
	//   MPlayer.prototype.next = function () {
	//     var nextIndex = 0;
	//     if (this.compare) {
	//       nextIndex = (this.compare(this.currentSong, this.songList) + 1) % this.songList.length;
	//     }
	//     this.load(this.songList[nextIndex]);
	//   };
	//
	//   MPlayer.prototype.preview = function () {
	//     var previewIndex = 0;
	//     if (this.compare) {
	//       previewIndex = (this.compare(this.currentSong, this.songList) - 1) % this.songList.length;
	//     }
	//     if (previewIndex < 0) {
	//       previewIndex = this.songList.length - 1;
	//     }
	//     this.load(this.songList[previewIndex]);
	//   };
	//
	//   MPlayer.prototype.seek = function (percent) {
	//     if (this.audio) {
	//       this.audio.currentTime = this.audio.duration * percent;
	//     }
	//   };
	//
	//   MPlayer.prototype.volume = function (volume) {
	//     if (this.audio) {
	//       this.audio.volume = volume;
	//     }
	//   };
	//
	//   function timeConvert(time) {
	//     var min;
	//     var sec;
	//     min = Math.floor(time / 60);
	//     min = min >= 10 ? '' + min : '0' + min;
	//     sec = Math.floor(time % 60);
	//     sec = sec >= 10 ? '' + sec : '0' + sec;
	//     return min + ':' + sec;
	//   }
	//
	//   return {
	//     MPlayer: MPlayer
	//   };
	// });

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(568);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(550)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./player.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./player.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(549)();
	// imports


	// module
	exports.push([module.id, "#react-root {\n  position: relative; }\n\n#player .grid, #player .column {\n  padding: 0;\n  margin: 0; }\n\n#player .header a {\n  color: black; }\n\n#player .header .icon {\n  margin: 0; }\n\n#player .header .segment {\n  box-shadow: none;\n  border: none; }\n\n#player .header .header-top .item {\n  padding-top: 0.1em;\n  padding-bottom: 0.1em; }\n\n#player .player .container {\n  width: 80%;\n  padding: 1em; }\n\n#player .player .audio-list {\n  padding-right: 6em; }\n  #player .player .audio-list .title {\n    font-size: 18px;\n    font-weight: bold; }\n  #player .player .audio-list .divider {\n    height: 3px; }\n  #player .player .audio-list .list {\n    overflow-y: scroll;\n    max-height: 350px; }\n    #player .player .audio-list .list .item {\n      cursor: pointer;\n      padding: 1em;\n      font-size: 16px;\n      color: #999999; }\n    #player .player .audio-list .list .item:hover {\n      color: #bbbbbb;\n      background-color: rgba(95, 79, 73, 0.06); }\n    #player .player .audio-list .list .item.active {\n      color: #bbbbbb;\n      background-color: rgba(95, 79, 73, 0.06); }\n\n#player .player .audio-info {\n  padding-top: 2rem; }\n  #player .player .audio-info .cover {\n    width: 80%;\n    margin: 0 auto; }\n    #player .player .audio-info .cover img {\n      width: 100%;\n      height: 100%; }\n  #player .player .audio-info .name {\n    width: 100%;\n    text-align: center;\n    padding-top: 20px;\n    padding-bottom: 5px;\n    font-size: 24px;\n    color: #333333; }\n  #player .player .audio-info .artist {\n    width: 100%;\n    text-align: center;\n    padding-bottom: 5px;\n    font-size: 14px;\n    color: #999999; }\n  #player .player .audio-info .sheet {\n    width: 100%;\n    text-align: center;\n    font-size: 14px;\n    color: #999999; }\n\n#player .player .footer {\n  padding-top: 0.5em;\n  position: absolute;\n  height: 100px;\n  width: 100%;\n  bottom: 0px;\n  background: #eeeeee; }\n  #player .player .footer .audio-controller .mod1 .hd {\n    margin-bottom: 1em; }\n  #player .player .footer .audio-controller .mod1 .song-title {\n    width: auto;\n    float: left;\n    font-size: 24px;\n    font-weight: 500;\n    color: #333333; }\n  #player .player .footer .audio-controller .mod1 .time {\n    font-size: 14px;\n    color: #999999; }\n  #player .player .footer .audio-controller .mod1 .progress {\n    margin-top: 5px;\n    height: 4px;\n    position: relative; }\n    #player .player .footer .audio-controller .mod1 .progress .progress-slider {\n      position: absolute;\n      border-radius: 50%;\n      outline: 0;\n      border: 0;\n      width: 12px;\n      height: 12px;\n      margin-top: -4px;\n      margin-left: -4px;\n      background: black;\n      left: 10%;\n      z-index: 2; }\n    #player .player .footer .audio-controller .mod1 .progress .progress-player {\n      position: absolute;\n      height: 4px;\n      background: black;\n      width: 10%; }\n    #player .player .footer .audio-controller .mod1 .progress .progress-loaded {\n      cursor: pointer;\n      position: absolute;\n      height: 4px;\n      background: #9d9d9d;\n      width: 20%; }\n  #player .player .footer .audio-controller .mod2 .btn-mode, #player .player .footer .audio-controller .mod2 .btn-volume {\n    cursor: pointer; }\n  #player .player .footer .audio-controller .mod2 .btn-mode {\n    margin-top: 24px;\n    margin-left: 40px;\n    display: inline-block;\n    font-size: 23px; }\n  #player .player .footer .audio-controller .mod2 .btn-volume {\n    margin-left: 10px;\n    margin-top: 22px;\n    display: inline-block;\n    font-size: 27px; }\n  #player .player .footer .audio-controller .mod2 .volume-progress {\n    margin-top: 31px;\n    background: rgba(0, 0, 0, 0.1);\n    width: 100%;\n    height: 3px;\n    position: relative; }\n    #player .player .footer .audio-controller .mod2 .volume-progress .current {\n      position: absolute;\n      width: 10%;\n      height: 3px;\n      background: black; }\n    #player .player .footer .audio-controller .mod2 .volume-progress .slider {\n      position: absolute;\n      border-radius: 50%;\n      outline: 0;\n      border: 0;\n      width: 10px;\n      height: 10px;\n      margin-top: -3px;\n      margin-left: -3px;\n      background: black;\n      left: 10%;\n      z-index: 2; }\n  #player .player .footer .audio-controller .mod3 {\n    padding: 20px 0px 15px 40px; }\n    #player .player .footer .audio-controller .mod3 .btn-preview, #player .player .footer .audio-controller .mod3 .btn-playpause, #player .player .footer .audio-controller .mod3 .btn-next {\n      text-align: center;\n      color: black;\n      font-size: 24px;\n      padding: 0 18px; }\n      #player .player .footer .audio-controller .mod3 .btn-preview .icon, #player .player .footer .audio-controller .mod3 .btn-playpause .icon, #player .player .footer .audio-controller .mod3 .btn-next .icon {\n        margin: 0; }\n    #player .player .footer .audio-controller .mod3 .btn-playpause {\n      margin-left: 6px; }\n", ""]);

	// exports


/***/ })

});
//# sourceMappingURL=player.js.map