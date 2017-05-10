webpackJsonp([1,3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(183);
	__webpack_require__(184);
	$(document).ready(function ($) {
	  $(".scroll").click(function (event) {
	    event.preventDefault();
	    $('html,body').animate({
	      scrollTop: $(this.hash).offset().top
	    }, 1000);
	  });
	});

	__webpack_require__(185);
	__webpack_require__(186);

	$('.jarallax').jarallax({
	  speed: 0.5,
	  imgWidth: 1366,
	  imgHeight: 768
	});

	__webpack_require__(187);
	__webpack_require__(188);
	__webpack_require__(189);

	$(document).ready(function () {
	  /*
	   var defaults = {
	   containerID: 'toTop', // fading element id
	   containerHoverID: 'toTopHover', // fading element hover id
	   scrollSpeed: 1200,
	   easingType: 'linear'
	   };
	   */

	  $().UItoTop({
	    easingType: 'easeOutQuart'
	  });
	});

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * Bootstrap v3.3.4 (http://getbootstrap.com)
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */

	if (typeof jQuery === 'undefined') {
	  throw new Error('Bootstrap\'s JavaScript requires jQuery');
	}

	+function ($) {
	  'use strict';

	  var version = $.fn.jquery.split(' ')[0].split('.');
	  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1) {
	    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher');
	  }
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: transition.js v3.3.4
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap');

	    var transEndEventNames = {
	      WebkitTransition: 'webkitTransitionEnd',
	      MozTransition: 'transitionend',
	      OTransition: 'oTransitionEnd otransitionend',
	      transition: 'transitionend'
	    };

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] };
	      }
	    }

	    return false; // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false;
	    var $el = this;
	    $(this).one('bsTransitionEnd', function () {
	      called = true;
	    });
	    var callback = function callback() {
	      if (!called) $($el).trigger($.support.transition.end);
	    };
	    setTimeout(callback, duration);
	    return this;
	  };

	  $(function () {
	    $.support.transition = transitionEnd();

	    if (!$.support.transition) return;

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function handle(e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
	      }
	    };
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: alert.js v3.3.4
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // ALERT CLASS DEFINITION
	  // ======================

	  var dismiss = '[data-dismiss="alert"]';
	  var Alert = function Alert(el) {
	    $(el).on('click', dismiss, this.close);
	  };

	  Alert.VERSION = '3.3.4';

	  Alert.TRANSITION_DURATION = 150;

	  Alert.prototype.close = function (e) {
	    var $this = $(this);
	    var selector = $this.attr('data-target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    var $parent = $(selector);

	    if (e) e.preventDefault();

	    if (!$parent.length) {
	      $parent = $this.closest('.alert');
	    }

	    $parent.trigger(e = $.Event('close.bs.alert'));

	    if (e.isDefaultPrevented()) return;

	    $parent.removeClass('in');

	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove();
	    }

	    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
	  };

	  // ALERT PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.alert');

	      if (!data) $this.data('bs.alert', data = new Alert(this));
	      if (typeof option == 'string') data[option].call($this);
	    });
	  }

	  var old = $.fn.alert;

	  $.fn.alert = Plugin;
	  $.fn.alert.Constructor = Alert;

	  // ALERT NO CONFLICT
	  // =================

	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old;
	    return this;
	  };

	  // ALERT DATA-API
	  // ==============

	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: button.js v3.3.4
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================

	  var Button = function Button(element, options) {
	    this.$element = $(element);
	    this.options = $.extend({}, Button.DEFAULTS, options);
	    this.isLoading = false;
	  };

	  Button.VERSION = '3.3.4';

	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  };

	  Button.prototype.setState = function (state) {
	    var d = 'disabled';
	    var $el = this.$element;
	    var val = $el.is('input') ? 'val' : 'html';
	    var data = $el.data();

	    state = state + 'Text';

	    if (data.resetText == null) $el.data('resetText', $el[val]());

	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state]);

	      if (state == 'loadingText') {
	        this.isLoading = true;
	        $el.addClass(d).attr(d, d);
	      } else if (this.isLoading) {
	        this.isLoading = false;
	        $el.removeClass(d).removeAttr(d);
	      }
	    }, this), 0);
	  };

	  Button.prototype.toggle = function () {
	    var changed = true;
	    var $parent = this.$element.closest('[data-toggle="buttons"]');

	    if ($parent.length) {
	      var $input = this.$element.find('input');
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false;else $parent.find('.active').removeClass('active');
	      }
	      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change');
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
	    }

	    if (changed) this.$element.toggleClass('active');
	  };

	  // BUTTON PLUGIN DEFINITION
	  // ========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.button');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data) $this.data('bs.button', data = new Button(this, options));

	      if (option == 'toggle') data.toggle();else if (option) data.setState(option);
	    });
	  }

	  var old = $.fn.button;

	  $.fn.button = Plugin;
	  $.fn.button.Constructor = Button;

	  // BUTTON NO CONFLICT
	  // ==================

	  $.fn.button.noConflict = function () {
	    $.fn.button = old;
	    return this;
	  };

	  // BUTTON DATA-API
	  // ===============

	  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	    var $btn = $(e.target);
	    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn');
	    Plugin.call($btn, 'toggle');
	    e.preventDefault();
	  }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	    $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: carousel.js v3.3.4
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // CAROUSEL CLASS DEFINITION
	  // =========================

	  var Carousel = function Carousel(element, options) {
	    this.$element = $(element);
	    this.$indicators = this.$element.find('.carousel-indicators');
	    this.options = options;
	    this.paused = null;
	    this.sliding = null;
	    this.interval = null;
	    this.$active = null;
	    this.$items = null;

	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));

	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
	  };

	  Carousel.VERSION = '3.3.4';

	  Carousel.TRANSITION_DURATION = 600;

	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  };

	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return;
	    switch (e.which) {
	      case 37:
	        this.prev();break;
	      case 39:
	        this.next();break;
	      default:
	        return;
	    }

	    e.preventDefault();
	  };

	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false);

	    this.interval && clearInterval(this.interval);

	    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));

	    return this;
	  };

	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item');
	    return this.$items.index(item || this.$active);
	  };

	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active);
	    var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
	    if (willWrap && !this.options.wrap) return active;
	    var delta = direction == 'prev' ? -1 : 1;
	    var itemIndex = (activeIndex + delta) % this.$items.length;
	    return this.$items.eq(itemIndex);
	  };

	  Carousel.prototype.to = function (pos) {
	    var that = this;
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));

	    if (pos > this.$items.length - 1 || pos < 0) return;

	    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
	      that.to(pos);
	    }); // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle();

	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
	  };

	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true);

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end);
	      this.cycle(true);
	    }

	    this.interval = clearInterval(this.interval);

	    return this;
	  };

	  Carousel.prototype.next = function () {
	    if (this.sliding) return;
	    return this.slide('next');
	  };

	  Carousel.prototype.prev = function () {
	    if (this.sliding) return;
	    return this.slide('prev');
	  };

	  Carousel.prototype.slide = function (type, next) {
	    var $active = this.$element.find('.item.active');
	    var $next = next || this.getItemForDirection(type, $active);
	    var isCycling = this.interval;
	    var direction = type == 'next' ? 'left' : 'right';
	    var that = this;

	    if ($next.hasClass('active')) return this.sliding = false;

	    var relatedTarget = $next[0];
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    });
	    this.$element.trigger(slideEvent);
	    if (slideEvent.isDefaultPrevented()) return;

	    this.sliding = true;

	    isCycling && this.pause();

	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active');
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
	      $nextIndicator && $nextIndicator.addClass('active');
	    }

	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type);
	      $next[0].offsetWidth; // force reflow
	      $active.addClass(direction);
	      $next.addClass(direction);
	      $active.one('bsTransitionEnd', function () {
	        $next.removeClass([type, direction].join(' ')).addClass('active');
	        $active.removeClass(['active', direction].join(' '));
	        that.sliding = false;
	        setTimeout(function () {
	          that.$element.trigger(slidEvent);
	        }, 0);
	      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
	    } else {
	      $active.removeClass('active');
	      $next.addClass('active');
	      this.sliding = false;
	      this.$element.trigger(slidEvent);
	    }

	    isCycling && this.cycle();

	    return this;
	  };

	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.carousel');
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
	      var action = typeof option == 'string' ? option : options.slide;

	      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
	      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
	    });
	  }

	  var old = $.fn.carousel;

	  $.fn.carousel = Plugin;
	  $.fn.carousel.Constructor = Carousel;

	  // CAROUSEL NO CONFLICT
	  // ====================

	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old;
	    return this;
	  };

	  // CAROUSEL DATA-API
	  // =================

	  var clickHandler = function clickHandler(e) {
	    var href;
	    var $this = $(this);
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
	    if (!$target.hasClass('carousel')) return;
	    var options = $.extend({}, $target.data(), $this.data());
	    var slideIndex = $this.attr('data-slide-to');
	    if (slideIndex) options.interval = false;

	    Plugin.call($target, options);

	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex);
	    }

	    e.preventDefault();
	  };

	  $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);

	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this);
	      Plugin.call($carousel, $carousel.data());
	    });
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: collapse.js v3.3.4
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function Collapse(element, options) {
	    this.$element = $(element);
	    this.options = $.extend({}, Collapse.DEFAULTS, options);
	    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
	    this.transitioning = null;

	    if (this.options.parent) {
	      this.$parent = this.getParent();
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
	    }

	    if (this.options.toggle) this.toggle();
	  };

	  Collapse.VERSION = '3.3.4';

	  Collapse.TRANSITION_DURATION = 350;

	  Collapse.DEFAULTS = {
	    toggle: true
	  };

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width');
	    return hasWidth ? 'width' : 'height';
	  };

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return;

	    var activesData;
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse');
	      if (activesData && activesData.transitioning) return;
	    }

	    var startEvent = $.Event('show.bs.collapse');
	    this.$element.trigger(startEvent);
	    if (startEvent.isDefaultPrevented()) return;

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide');
	      activesData || actives.data('bs.collapse', null);
	    }

	    var dimension = this.dimension();

	    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

	    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

	    this.transitioning = 1;

	    var complete = function complete() {
	      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
	      this.transitioning = 0;
	      this.$element.trigger('shown.bs.collapse');
	    };

	    if (!$.support.transition) return complete.call(this);

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'));

	    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
	  };

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return;

	    var startEvent = $.Event('hide.bs.collapse');
	    this.$element.trigger(startEvent);
	    if (startEvent.isDefaultPrevented()) return;

	    var dimension = this.dimension();

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

	    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

	    this.$trigger.addClass('collapsed').attr('aria-expanded', false);

	    this.transitioning = 1;

	    var complete = function complete() {
	      this.transitioning = 0;
	      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
	    };

	    if (!$.support.transition) return complete.call(this);

	    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
	  };

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']();
	  };

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
	      var $element = $(element);
	      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
	    }, this)).end();
	  };

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in');

	    $element.attr('aria-expanded', isOpen);
	    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
	  };

	  function getTargetFromTrigger($trigger) {
	    var href;
	    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

	    return $(target);
	  }

	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.collapse');
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
	      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.collapse;

	  $.fn.collapse = Plugin;
	  $.fn.collapse.Constructor = Collapse;

	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old;
	    return this;
	  };

	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this = $(this);

	    if (!$this.attr('data-target')) e.preventDefault();

	    var $target = getTargetFromTrigger($this);
	    var data = $target.data('bs.collapse');
	    var option = data ? 'toggle' : $this.data();

	    Plugin.call($target, option);
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.4
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // DROPDOWN CLASS DEFINITION
	  // =========================

	  var backdrop = '.dropdown-backdrop';
	  var toggle = '[data-toggle="dropdown"]';
	  var Dropdown = function Dropdown(element) {
	    $(element).on('click.bs.dropdown', this.toggle);
	  };

	  Dropdown.VERSION = '3.3.4';

	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this);

	    if ($this.is('.disabled, :disabled')) return;

	    var $parent = getParent($this);
	    var isActive = $parent.hasClass('open');

	    clearMenus();

	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus);
	      }

	      var relatedTarget = { relatedTarget: this };
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

	      if (e.isDefaultPrevented()) return;

	      $this.trigger('focus').attr('aria-expanded', 'true');

	      $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget);
	    }

	    return false;
	  };

	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

	    var $this = $(this);

	    e.preventDefault();
	    e.stopPropagation();

	    if ($this.is('.disabled, :disabled')) return;

	    var $parent = getParent($this);
	    var isActive = $parent.hasClass('open');

	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus');
	      return $this.trigger('click');
	    }

	    var desc = ' li:not(.disabled):visible a';
	    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);

	    if (!$items.length) return;

	    var index = $items.index(e.target);

	    if (e.which == 38 && index > 0) index--; // up
	    if (e.which == 40 && index < $items.length - 1) index++; // down
	    if (!~index) index = 0;

	    $items.eq(index).trigger('focus');
	  };

	  function clearMenus(e) {
	    if (e && e.which === 3) return;
	    $(backdrop).remove();
	    $(toggle).each(function () {
	      var $this = $(this);
	      var $parent = getParent($this);
	      var relatedTarget = { relatedTarget: this };

	      if (!$parent.hasClass('open')) return;

	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

	      if (e.isDefaultPrevented()) return;

	      $this.attr('aria-expanded', 'false');
	      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget);
	    });
	  }

	  function getParent($this) {
	    var selector = $this.attr('data-target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    var $parent = selector && $(selector);

	    return $parent && $parent.length ? $parent : $this.parent();
	  }

	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.dropdown');

	      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
	      if (typeof option == 'string') data[option].call($this);
	    });
	  }

	  var old = $.fn.dropdown;

	  $.fn.dropdown = Plugin;
	  $.fn.dropdown.Constructor = Dropdown;

	  // DROPDOWN NO CONFLICT
	  // ====================

	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old;
	    return this;
	  };

	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================

	  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
	    e.stopPropagation();
	  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown);
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: modal.js v3.3.4
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // MODAL CLASS DEFINITION
	  // ======================

	  var Modal = function Modal(element, options) {
	    this.options = options;
	    this.$body = $(document.body);
	    this.$element = $(element);
	    this.$dialog = this.$element.find('.modal-dialog');
	    this.$backdrop = null;
	    this.isShown = null;
	    this.originalBodyPad = null;
	    this.scrollbarWidth = 0;
	    this.ignoreBackdropClick = false;

	    if (this.options.remote) {
	      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
	        this.$element.trigger('loaded.bs.modal');
	      }, this));
	    }
	  };

	  Modal.VERSION = '3.3.4';

	  Modal.TRANSITION_DURATION = 300;
	  Modal.BACKDROP_TRANSITION_DURATION = 150;

	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  };

	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget);
	  };

	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this;
	    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

	    this.$element.trigger(e);

	    if (this.isShown || e.isDefaultPrevented()) return;

	    this.isShown = true;

	    this.checkScrollbar();
	    this.setScrollbar();
	    this.$body.addClass('modal-open');

	    this.escape();
	    this.resize();

	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
	      });
	    });

	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade');

	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body); // don't move modals dom position
	      }

	      that.$element.show().scrollTop(0);

	      that.adjustDialog();

	      if (transition) {
	        that.$element[0].offsetWidth; // force reflow
	      }

	      that.$element.addClass('in').attr('aria-hidden', false);

	      that.enforceFocus();

	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

	      transition ? that.$dialog // wait for modal to slide in
	      .one('bsTransitionEnd', function () {
	        that.$element.trigger('focus').trigger(e);
	      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
	    });
	  };

	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault();

	    e = $.Event('hide.bs.modal');

	    this.$element.trigger(e);

	    if (!this.isShown || e.isDefaultPrevented()) return;

	    this.isShown = false;

	    this.escape();
	    this.resize();

	    $(document).off('focusin.bs.modal');

	    this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

	    this.$dialog.off('mousedown.dismiss.bs.modal');

	    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
	  };

	  Modal.prototype.enforceFocus = function () {
	    $(document).off('focusin.bs.modal') // guard against infinite focus loop
	    .on('focusin.bs.modal', $.proxy(function (e) {
	      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
	        this.$element.trigger('focus');
	      }
	    }, this));
	  };

	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide();
	      }, this));
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal');
	    }
	  };

	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
	    } else {
	      $(window).off('resize.bs.modal');
	    }
	  };

	  Modal.prototype.hideModal = function () {
	    var that = this;
	    this.$element.hide();
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open');
	      that.resetAdjustments();
	      that.resetScrollbar();
	      that.$element.trigger('hidden.bs.modal');
	    });
	  };

	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove();
	    this.$backdrop = null;
	  };

	  Modal.prototype.backdrop = function (callback) {
	    var that = this;
	    var animate = this.$element.hasClass('fade') ? 'fade' : '';

	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate;

	      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(this.$body);

	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false;
	          return;
	        }
	        if (e.target !== e.currentTarget) return;
	        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
	      }, this));

	      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

	      this.$backdrop.addClass('in');

	      if (!callback) return;

	      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in');

	      var callbackRemove = function callbackRemove() {
	        that.removeBackdrop();
	        callback && callback();
	      };
	      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
	    } else if (callback) {
	      callback();
	    }
	  };

	  // these following methods are used to handle overflowing modals

	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog();
	  };

	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

	    this.$element.css({
	      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    });
	  };

	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    });
	  };

	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth;
	    if (!fullWindowWidth) {
	      // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect();
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
	    this.scrollbarWidth = this.measureScrollbar();
	  };

	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
	    this.originalBodyPad = document.body.style.paddingRight || '';
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
	  };

	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad);
	  };

	  Modal.prototype.measureScrollbar = function () {
	    // thx walsh
	    var scrollDiv = document.createElement('div');
	    scrollDiv.className = 'modal-scrollbar-measure';
	    this.$body.append(scrollDiv);
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	    this.$body[0].removeChild(scrollDiv);
	    return scrollbarWidth;
	  };

	  // MODAL PLUGIN DEFINITION
	  // =======================

	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.modal');
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

	      if (!data) $this.data('bs.modal', data = new Modal(this, options));
	      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
	    });
	  }

	  var old = $.fn.modal;

	  $.fn.modal = Plugin;
	  $.fn.modal.Constructor = Modal;

	  // MODAL NO CONFLICT
	  // =================

	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old;
	    return this;
	  };

	  // MODAL DATA-API
	  // ==============

	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this = $(this);
	    var href = $this.attr('href');
	    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
	    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

	    if ($this.is('a')) e.preventDefault();

	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus');
	      });
	    });
	    Plugin.call($target, option, this);
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.4
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================

	  var Tooltip = function Tooltip(element, options) {
	    this.type = null;
	    this.options = null;
	    this.enabled = null;
	    this.timeout = null;
	    this.hoverState = null;
	    this.$element = null;

	    this.init('tooltip', element, options);
	  };

	  Tooltip.VERSION = '3.3.4';

	  Tooltip.TRANSITION_DURATION = 150;

	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  };

	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled = true;
	    this.type = type;
	    this.$element = $(element);
	    this.options = this.getOptions(options);
	    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);

	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
	    }

	    var triggers = this.options.trigger.split(' ');

	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i];

	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
	      } else if (trigger != 'manual') {
	        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

	        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
	      }
	    }

	    this.options.selector ? this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
	  };

	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS;
	  };

	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options);

	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      };
	    }

	    return options;
	  };

	  Tooltip.prototype.getDelegateOptions = function () {
	    var options = {};
	    var defaults = this.getDefaults();

	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value;
	    });

	    return options;
	  };

	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

	    if (self && self.$tip && self.$tip.is(':visible')) {
	      self.hoverState = 'in';
	      return;
	    }

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
	      $(obj.currentTarget).data('bs.' + this.type, self);
	    }

	    clearTimeout(self.timeout);

	    self.hoverState = 'in';

	    if (!self.options.delay || !self.options.delay.show) return self.show();

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show();
	    }, self.options.delay.show);
	  };

	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
	      $(obj.currentTarget).data('bs.' + this.type, self);
	    }

	    clearTimeout(self.timeout);

	    self.hoverState = 'out';

	    if (!self.options.delay || !self.options.delay.hide) return self.hide();

	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide();
	    }, self.options.delay.hide);
	  };

	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type);

	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e);

	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
	      if (e.isDefaultPrevented() || !inDom) return;
	      var that = this;

	      var $tip = this.tip();

	      var tipId = this.getUID(this.type);

	      this.setContent();
	      $tip.attr('id', tipId);
	      this.$element.attr('aria-describedby', tipId);

	      if (this.options.animation) $tip.addClass('fade');

	      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

	      var autoToken = /\s?auto?\s?/i;
	      var autoPlace = autoToken.test(placement);
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

	      $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement).data('bs.' + this.type, this);

	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);

	      var pos = this.getPosition();
	      var actualWidth = $tip[0].offsetWidth;
	      var actualHeight = $tip[0].offsetHeight;

	      if (autoPlace) {
	        var orgPlacement = placement;
	        var $container = this.options.container ? $(this.options.container) : this.$element.parent();
	        var containerDim = this.getPosition($container);

	        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < containerDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > containerDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < containerDim.left ? 'right' : placement;

	        $tip.removeClass(orgPlacement).addClass(placement);
	      }

	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

	      this.applyPlacement(calculatedOffset, placement);

	      var complete = function complete() {
	        var prevHoverState = that.hoverState;
	        that.$element.trigger('shown.bs.' + that.type);
	        that.hoverState = null;

	        if (prevHoverState == 'out') that.leave(that);
	      };

	      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
	    }
	  };

	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip = this.tip();
	    var width = $tip[0].offsetWidth;
	    var height = $tip[0].offsetHeight;

	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10);
	    var marginLeft = parseInt($tip.css('margin-left'), 10);

	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop)) marginTop = 0;
	    if (isNaN(marginLeft)) marginLeft = 0;

	    offset.top = offset.top + marginTop;
	    offset.left = offset.left + marginLeft;

	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function using(props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        });
	      }
	    }, offset), 0);

	    $tip.addClass('in');

	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth = $tip[0].offsetWidth;
	    var actualHeight = $tip[0].offsetHeight;

	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight;
	    }

	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

	    if (delta.left) offset.left += delta.left;else offset.top += delta.top;

	    var isVertical = /top|bottom/.test(placement);
	    var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

	    $tip.offset(offset);
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
	  };

	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
	  };

	  Tooltip.prototype.setContent = function () {
	    var $tip = this.tip();
	    var title = this.getTitle();

	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
	    $tip.removeClass('fade in top bottom left right');
	  };

	  Tooltip.prototype.hide = function (callback) {
	    var that = this;
	    var $tip = $(this.$tip);
	    var e = $.Event('hide.bs.' + this.type);

	    function complete() {
	      if (that.hoverState != 'in') $tip.detach();
	      that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
	      callback && callback();
	    }

	    this.$element.trigger(e);

	    if (e.isDefaultPrevented()) return;

	    $tip.removeClass('in');

	    $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();

	    this.hoverState = null;

	    return this;
	  };

	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element;
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
	    }
	  };

	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle();
	  };

	  Tooltip.prototype.getPosition = function ($element) {
	    $element = $element || this.$element;

	    var el = $element[0];
	    var isBody = el.tagName == 'BODY';

	    var elRect = el.getBoundingClientRect();
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
	    }
	    var elOffset = isBody ? { top: 0, left: 0 } : $element.offset();
	    var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

	    return $.extend({}, elRect, scroll, outerDims, elOffset);
	  };

	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	    /* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
	  };

	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 };
	    if (!this.$viewport) return delta;

	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
	    var viewportDimensions = this.getPosition(this.$viewport);

	    if (/right|left/.test(placement)) {
	      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
	      if (topEdgeOffset < viewportDimensions.top) {
	        // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset;
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
	        // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
	      }
	    } else {
	      var leftEdgeOffset = pos.left - viewportPadding;
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
	      if (leftEdgeOffset < viewportDimensions.left) {
	        // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset;
	      } else if (rightEdgeOffset > viewportDimensions.width) {
	        // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
	      }
	    }

	    return delta;
	  };

	  Tooltip.prototype.getTitle = function () {
	    var title;
	    var $e = this.$element;
	    var o = this.options;

	    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

	    return title;
	  };

	  Tooltip.prototype.getUID = function (prefix) {
	    do {
	      prefix += ~~(Math.random() * 1000000);
	    } while (document.getElementById(prefix));
	    return prefix;
	  };

	  Tooltip.prototype.tip = function () {
	    return this.$tip = this.$tip || $(this.options.template);
	  };

	  Tooltip.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
	  };

	  Tooltip.prototype.enable = function () {
	    this.enabled = true;
	  };

	  Tooltip.prototype.disable = function () {
	    this.enabled = false;
	  };

	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled;
	  };

	  Tooltip.prototype.toggle = function (e) {
	    var self = this;
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type);
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
	        $(e.currentTarget).data('bs.' + this.type, self);
	      }
	    }

	    self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
	  };

	  Tooltip.prototype.destroy = function () {
	    var that = this;
	    clearTimeout(this.timeout);
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type);
	    });
	  };

	  // TOOLTIP PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.tooltip');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data && /destroy|hide/.test(option)) return;
	      if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.tooltip;

	  $.fn.tooltip = Plugin;
	  $.fn.tooltip.Constructor = Tooltip;

	  // TOOLTIP NO CONFLICT
	  // ===================

	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old;
	    return this;
	  };
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: popover.js v3.3.4
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================

	  var Popover = function Popover(element, options) {
	    this.init('popover', element, options);
	  };

	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

	  Popover.VERSION = '3.3.4';

	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  });

	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================

	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

	  Popover.prototype.constructor = Popover;

	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS;
	  };

	  Popover.prototype.setContent = function () {
	    var $tip = this.tip();
	    var title = this.getTitle();
	    var content = this.getContent();

	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
	    $tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
	    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);

	    $tip.removeClass('fade top bottom left right in');

	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
	  };

	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent();
	  };

	  Popover.prototype.getContent = function () {
	    var $e = this.$element;
	    var o = this.options;

	    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
	  };

	  Popover.prototype.arrow = function () {
	    return this.$arrow = this.$arrow || this.tip().find('.arrow');
	  };

	  // POPOVER PLUGIN DEFINITION
	  // =========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.popover');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data && /destroy|hide/.test(option)) return;
	      if (!data) $this.data('bs.popover', data = new Popover(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.popover;

	  $.fn.popover = Plugin;
	  $.fn.popover.Constructor = Popover;

	  // POPOVER NO CONFLICT
	  // ===================

	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old;
	    return this;
	  };
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.4
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // SCROLLSPY CLASS DEFINITION
	  // ==========================

	  function ScrollSpy(element, options) {
	    this.$body = $(document.body);
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
	    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
	    this.selector = (this.options.target || '') + ' .nav li > a';
	    this.offsets = [];
	    this.targets = [];
	    this.activeTarget = null;
	    this.scrollHeight = 0;

	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
	    this.refresh();
	    this.process();
	  }

	  ScrollSpy.VERSION = '3.3.4';

	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  };

	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	  };

	  ScrollSpy.prototype.refresh = function () {
	    var that = this;
	    var offsetMethod = 'offset';
	    var offsetBase = 0;

	    this.offsets = [];
	    this.targets = [];
	    this.scrollHeight = this.getScrollHeight();

	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position';
	      offsetBase = this.$scrollElement.scrollTop();
	    }

	    this.$body.find(this.selector).map(function () {
	      var $el = $(this);
	      var href = $el.data('target') || $el.attr('href');
	      var $href = /^#./.test(href) && $(href);

	      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
	    }).sort(function (a, b) {
	      return a[0] - b[0];
	    }).each(function () {
	      that.offsets.push(this[0]);
	      that.targets.push(this[1]);
	    });
	  };

	  ScrollSpy.prototype.process = function () {
	    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
	    var scrollHeight = this.getScrollHeight();
	    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
	    var offsets = this.offsets;
	    var targets = this.targets;
	    var activeTarget = this.activeTarget;
	    var i;

	    if (this.scrollHeight != scrollHeight) {
	      this.refresh();
	    }

	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
	    }

	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null;
	      return this.clear();
	    }

	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
	    }
	  };

	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target;

	    this.clear();

	    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';

	    var active = $(selector).parents('li').addClass('active');

	    if (active.parent('.dropdown-menu').length) {
	      active = active.closest('li.dropdown').addClass('active');
	    }

	    active.trigger('activate.bs.scrollspy');
	  };

	  ScrollSpy.prototype.clear = function () {
	    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
	  };

	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.scrollspy');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.scrollspy;

	  $.fn.scrollspy = Plugin;
	  $.fn.scrollspy.Constructor = ScrollSpy;

	  // SCROLLSPY NO CONFLICT
	  // =====================

	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old;
	    return this;
	  };

	  // SCROLLSPY DATA-API
	  // ==================

	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this);
	      Plugin.call($spy, $spy.data());
	    });
	  });
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: tab.js v3.3.4
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function Tab(element) {
	    this.element = $(element);
	  };

	  Tab.VERSION = '3.3.4';

	  Tab.TRANSITION_DURATION = 150;

	  Tab.prototype.show = function () {
	    var $this = this.element;
	    var $ul = $this.closest('ul:not(.dropdown-menu)');
	    var selector = $this.data('target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return;

	    var $previous = $ul.find('.active:last a');
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    });
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    });

	    $previous.trigger(hideEvent);
	    $this.trigger(showEvent);

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

	    var $target = $(selector);

	    this.activate($this.closest('li'), $ul);
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      });
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      });
	    });
	  };

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active = container.find('> .active');
	    var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

	    function next() {
	      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);

	      element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

	      if (transition) {
	        element[0].offsetWidth; // reflow for transition
	        element.addClass('in');
	      } else {
	        element.removeClass('fade');
	      }

	      if (element.parent('.dropdown-menu').length) {
	        element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
	      }

	      callback && callback();
	    }

	    $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

	    $active.removeClass('in');
	  };

	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.tab');

	      if (!data) $this.data('bs.tab', data = new Tab(this));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.tab;

	  $.fn.tab = Plugin;
	  $.fn.tab.Constructor = Tab;

	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old;
	    return this;
	  };

	  // TAB DATA-API
	  // ============

	  var clickHandler = function clickHandler(e) {
	    e.preventDefault();
	    Plugin.call($(this), 'show');
	  };

	  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
	}(jQuery);

	/* ========================================================================
	 * Bootstrap: affix.js v3.3.4
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2015 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // AFFIX CLASS DEFINITION
	  // ======================

	  var Affix = function Affix(element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options);

	    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

	    this.$element = $(element);
	    this.affixed = null;
	    this.unpin = null;
	    this.pinnedOffset = null;

	    this.checkPosition();
	  };

	  Affix.VERSION = '3.3.4';

	  Affix.RESET = 'affix affix-top affix-bottom';

	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  };

	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop = this.$target.scrollTop();
	    var position = this.$element.offset();
	    var targetHeight = this.$target.height();

	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
	      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
	    }

	    var initializing = this.affixed == null;
	    var colliderTop = initializing ? scrollTop : position.top;
	    var colliderHeight = initializing ? targetHeight : height;

	    if (offsetTop != null && scrollTop <= offsetTop) return 'top';
	    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';

	    return false;
	  };

	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset;
	    this.$element.removeClass(Affix.RESET).addClass('affix');
	    var scrollTop = this.$target.scrollTop();
	    var position = this.$element.offset();
	    return this.pinnedOffset = position.top - scrollTop;
	  };

	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1);
	  };

	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return;

	    var height = this.$element.height();
	    var offset = this.options.offset;
	    var offsetTop = offset.top;
	    var offsetBottom = offset.bottom;
	    var scrollHeight = $(document.body).height();

	    if ((typeof offset === 'undefined' ? 'undefined' : _typeof(offset)) != 'object') offsetBottom = offsetTop = offset;
	    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '');

	      var affixType = 'affix' + (affix ? '-' + affix : '');
	      var e = $.Event(affixType + '.bs.affix');

	      this.$element.trigger(e);

	      if (e.isDefaultPrevented()) return;

	      this.affixed = affix;
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

	      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
	    }

	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      });
	    }
	  };

	  // AFFIX PLUGIN DEFINITION
	  // =======================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.affix');
	      var options = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option;

	      if (!data) $this.data('bs.affix', data = new Affix(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.affix;

	  $.fn.affix = Plugin;
	  $.fn.affix.Constructor = Affix;

	  // AFFIX NO CONFLICT
	  // =================

	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old;
	    return this;
	  };

	  // AFFIX DATA-API
	  // ==============

	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this);
	      var data = $spy.data();

	      data.offset = data.offset || {};

	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
	      if (data.offsetTop != null) data.offset.top = data.offsetTop;

	      Plugin.call($spy, data);
	    });
	  });
	}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * Name    : Just Another Parallax [Jarallax]
	 * Version : 1.1.0
	 * Author  : _nK http://nkdev.info
	 * GitHub  : https://github.com/nk-o/jarallax
	 */
	(function (factory) {
	    'use strict';

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(183)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== 'undefined') {
	        module.exports = factory(require('jquery'));
	    } else {
	        factory(jQuery);
	    }
	})(function ($) {
	    // Adapted from https://gist.github.com/paulirish/1579671
	    if (!Date.now) Date.now = function () {
	        return new Date().getTime();
	    };
	    if (!window.requestAnimationFrame) (function () {
	        'use strict';

	        var vendors = ['webkit', 'moz'];
	        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	            var vp = vendors[i];
	            window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
	            window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
	        }
	        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
	        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	            var lastTime = 0;
	            window.requestAnimationFrame = function (callback) {
	                var now = Date.now();
	                var nextTime = Math.max(lastTime + 16, now);
	                return setTimeout(function () {
	                    callback(lastTime = nextTime);
	                }, nextTime - now);
	            };
	            window.cancelAnimationFrame = clearTimeout;
	        }
	    })();

	    var supportTransform = function () {
	        var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
	        var div = document.createElement('div');
	        for (var i = 0; i < prefixes.length; i++) {
	            if (div && div.style[prefixes[i]] !== undefined) {
	                return prefixes[i];
	            }
	        }
	        return false;
	    }();

	    var support3dtransform = function () {
	        if (!window.getComputedStyle) {
	            return false;
	        }

	        var el = document.createElement('p'),
	            has3d,
	            transforms = {
	            'webkitTransform': '-webkit-transform',
	            'OTransform': '-o-transform',
	            'msTransform': '-ms-transform',
	            'MozTransform': '-moz-transform',
	            'transform': 'transform'
	        };

	        // Add it to the body to get the computed style.
	        (document.body || document.documentElement).insertBefore(el, null);

	        for (var t in transforms) {
	            if (el.style[t] !== undefined) {
	                el.style[t] = "translate3d(1px,1px,1px)";
	                has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
	            }
	        }

	        (document.body || document.documentElement).removeChild(el);

	        return has3d !== undefined && has3d.length > 0 && has3d !== "none";
	    }();

	    var isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1;

	    // list with all jarallax instances
	    // need to render all in one scroll/resize event
	    var jarallaxList = [];

	    // Jarallax instance
	    var Jarallax = function () {
	        var instanceID = 0;

	        function Jarallax(item, userOptions) {
	            var _this = this,
	                dataOptions;

	            _this.$item = $(item);

	            _this.defaults = {
	                speed: 0.5,
	                imgSrc: null,
	                imgWidth: null,
	                imgHeight: null,
	                enableTransform: true,
	                zIndex: -100
	            };
	            dataOptions = _this.$item.data('jarallax') || {};
	            _this.options = $.extend({}, _this.defaults, dataOptions, userOptions);

	            // fix speed option [0.0, 1.0]
	            _this.options.speed = Math.min(1, Math.max(0, parseFloat(_this.options.speed)));

	            _this.instanceID = instanceID++;

	            _this.image = {
	                src: _this.options.imgSrc || null,
	                $container: null,
	                $item: null,
	                width: _this.options.imgWidth || null,
	                height: _this.options.imgHeight || null,
	                // fix for Android devices
	                // use <img> instead background image - more smoothly
	                useImgTag: isAndroid
	            };

	            if (_this.initImg()) {
	                _this.init();

	                jarallaxList.push(_this);
	            }
	        }

	        return Jarallax;
	    }();

	    Jarallax.prototype.initImg = function () {
	        var _this = this;

	        // get image src
	        if (_this.image.src === null) {
	            _this.image.src = _this.$item.css('background-image').replace(/^url\(['"]?/g, '').replace(/['"]?\)$/g, '');
	        }
	        if (!_this.image.src || _this.image.src === 'none') {
	            return false;
	        }
	        return true;
	    };

	    Jarallax.prototype.init = function () {
	        var _this = this,
	            containerStyles = {
	            position: 'absolute',
	            top: 0,
	            left: 0,
	            width: '100%',
	            height: '100%',
	            overflow: 'hidden',
	            'pointer-events': 'none',
	            'transition': 'transform linear -1ms, -webkit-transform linear -1ms'
	        },
	            imageStyles = {
	            position: 'fixed'
	        };

	        // container for parallax image
	        _this.image.$container = $('<div>').css(containerStyles).css({
	            visibility: 'hidden',
	            'z-index': _this.options.zIndex
	        }).attr('id', 'jarallax-container-' + _this.instanceID).prependTo(_this.$item);

	        // use img tag
	        if (_this.image.useImgTag) {
	            _this.image.$item = $('<img>').attr('src', _this.image.src);
	            imageStyles = $.extend({}, containerStyles, imageStyles);
	        }

	        // use div with background image
	        else {
	                _this.image.$item = $('<div>');
	                imageStyles = $.extend({
	                    'background-position': '50% 50%',
	                    'background-repeat': 'no-repeat no-repeat',
	                    'background-image': 'url(' + _this.image.src + ')'
	                }, containerStyles, imageStyles);
	            }

	        // parallax image
	        _this.image.$item.css(imageStyles).prependTo(_this.image.$container);

	        // cover image and init parallax position after image load
	        _this.getImageSize(_this.image.src, function (width, height) {
	            _this.image.width = width;
	            _this.image.height = height;

	            window.requestAnimationFrame(function () {
	                _this.coverImage();
	                _this.clipContainer();
	                _this.onScroll();
	            });

	            // remove default user background
	            _this.$item.data('jarallax-original-styles', _this.$item.attr('style'));

	            // timeout to fix IE blinking
	            setTimeout(function () {
	                _this.$item.css({
	                    'background-image': 'none',
	                    'background-attachment': 'scroll',
	                    'background-size': 'auto'
	                });
	            }, 0);
	        });
	    };

	    Jarallax.prototype.destroy = function () {
	        var _this = this;

	        // remove from instances list
	        for (var k = 0, len = jarallaxList.length; k < len; k++) {
	            if (jarallaxList[k].instanceID === _this.instanceID) {
	                jarallaxList.splice(k, 1);
	                break;
	            }
	        }

	        // remove additional styles for clip
	        $('head #jarallax-clip-' + _this.instanceID).remove();

	        _this.$item.attr('style', _this.$item.data('jarallax-original-styles'));
	        _this.$item.removeData('jarallax-original-styles');

	        _this.image.$container.remove();

	        delete _this.$item[0].jarallax;
	    };

	    // round to 2 decimals
	    Jarallax.prototype.round = function (num) {
	        return Math.floor(num * 100) / 100;
	    };

	    Jarallax.prototype.getImageSize = function (src, callback) {
	        if (!src || !callback) {
	            return false;
	        }

	        var tempImg = new Image();
	        tempImg.onload = function () {
	            callback(tempImg.width, tempImg.height);
	        };
	        tempImg.src = src;
	    };

	    // it will remove some image overlapping
	    // overlapping occur due to an image position fixed inside absolute possition element (webkit based browsers works without any fix)
	    Jarallax.prototype.clipContainer = function () {
	        var _this = this,
	            width = _this.image.$container.outerWidth(true),
	            height = _this.image.$container.outerHeight(true);

	        var $styles = $('head #jarallax-clip-' + _this.instanceID);
	        if (!$styles.length) {
	            $('head').append('<style type="text/css" id="jarallax-clip-' + _this.instanceID + '"></style>');
	            $styles = $('head #jarallax-clip-' + _this.instanceID);
	        }

	        var css = ['#jarallax-container-' + _this.instanceID + ' {', '   clip: rect(0px ' + width + 'px ' + height + 'px 0);', '   clip: rect(0px, ' + width + 'px, ' + height + 'px, 0);', '}'].join('\n');

	        // add clip styles inline (this method need for support IE8 and less browsers)
	        if ($styles[0].styleSheet) {
	            $styles[0].styleSheet.cssText = css;
	        } else {
	            $styles.html(css);
	        }
	    };

	    Jarallax.prototype.coverImage = function () {
	        var _this = this;

	        if (!_this.image.width || !_this.image.height) {
	            return;
	        }

	        var contW = _this.image.$container.outerWidth(true),
	            contH = _this.image.$container.outerHeight(true),
	            wndW = $(window).outerWidth(true),
	            whdH = $(window).outerHeight(true),
	            imgW = _this.image.width,
	            imgH = _this.image.height,
	            resultWidth,
	            resultHeight;

	        var css = {
	            width: Math.max(wndW, contW) * Math.max(_this.options.speed, 1),
	            height: Math.max(whdH, contH) * Math.max(_this.options.speed, 1)
	        };

	        // cover by width
	        if (css.width / css.height > imgW / imgH) {
	            resultWidth = css.width;
	            resultHeight = css.width * imgH / imgW;
	        }

	        // cover by height
	        else {
	                resultWidth = css.height * imgW / imgH;
	                resultHeight = css.height;
	            }

	        // for img tag
	        if (_this.image.useImgTag) {
	            css.width = _this.round(resultWidth);
	            css.height = _this.round(resultHeight);
	            css.marginLeft = _this.round(-(resultWidth - contW) / 2);
	            css.marginTop = _this.round(-(resultHeight - contH) / 2);
	        }

	        // for div with background image
	        else {
	                css.backgroundSize = _this.round(resultWidth) + 'px ' + _this.round(resultHeight) + 'px';
	            }

	        // apply to item
	        _this.image.$item.css(css);
	    };

	    Jarallax.prototype.onScroll = function () {
	        var _this = this;

	        if (!_this.image.width || !_this.image.height) {
	            return;
	        }

	        var scrollTop = $(window).scrollTop(),
	            wndHeight = $(window).height(),

	        // starting position of each element to have parallax applied to it
	        sectionTop = _this.$item.offset().top,
	            sectionHeight = _this.$item.outerHeight(true),
	            css = {
	            visibility: 'visible',
	            backgroundPosition: '50% 50%'
	        };

	        // Check if totally above or totally below viewport
	        if (sectionTop + sectionHeight < scrollTop || sectionTop > scrollTop + wndHeight) {
	            return;
	        }

	        // calculate parallax
	        var position = -(scrollTop - sectionTop) * _this.options.speed;
	        position = _this.round(position);

	        if (supportTransform && _this.options.enableTransform) {
	            css.transform = 'translateY(' + position + 'px)';
	            if (support3dtransform) {
	                css.transform = 'translate3d(0, ' + position + 'px, 0)';
	            }
	        } else {
	            css.backgroundPosition = '50% ' + position + 'px';
	        }

	        _this.image.$item.css(css);
	    };

	    // init events
	    (function () {
	        $(window).on('scroll.jarallax', function () {
	            window.requestAnimationFrame(function () {
	                for (var k = 0, len = jarallaxList.length; k < len; k++) {
	                    jarallaxList[k].onScroll();
	                }
	            });
	        });

	        var timeout;
	        $(window).on('resize.jarallax load.jarallax', function () {
	            clearTimeout(timeout);
	            timeout = setTimeout(function () {
	                window.requestAnimationFrame(function () {
	                    for (var k = 0, len = jarallaxList.length; k < len; k++) {
	                        var _this = jarallaxList[k];
	                        _this.coverImage();
	                        _this.clipContainer();
	                        _this.onScroll();
	                    }
	                });
	            }, 100);
	        });
	    })();

	    var oldJarallax = $.fn.jarallax;

	    $.fn.jarallax = function () {
	        var items = this,
	            options = arguments[0],
	            args = Array.prototype.slice.call(arguments, 1),
	            len = items.length,
	            k = 0,
	            ret;

	        for (k; k < len; k++) {
	            if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' || typeof options === 'undefined') items[k].jarallax = new Jarallax(items[k], options);else ret = items[k].jarallax[options].apply(items[k].jarallax, args);
	            if (typeof ret !== 'undefined') return ret;
	        }

	        return this;
	    };

	    // no conflict
	    $.fn.jarallax.noConflict = function () {
	        $.fn.jarallax = oldJarallax;
	        return this;
	    };

	    // data-jarallax initialization
	    $(document).on('ready.data-jarallax', function () {
	        $('[data-jarallax]').jarallax();
	    });
	});

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

	"use strict";

	// SmoothScroll for websites v1.2.1
	// Licensed under the terms of the MIT license.

	// People involved
	//  - Balazs Galambosi (maintainer)  
	//  - Michael Herf     (Pulse Algorithm)

	(function () {

	    // Scroll Variables (tweakable)
	    var defaultOptions = {

	        // Scrolling Core
	        frameRate: 150, // [Hz]
	        animationTime: 1800, // [px]
	        stepSize: 85, // [px]

	        // Pulse (less tweakable)
	        // ratio of "tail" to "acceleration"
	        pulseAlgorithm: true,
	        pulseScale: 8,
	        pulseNormalize: 1,

	        // Acceleration
	        accelerationDelta: 20, // 20
	        accelerationMax: 1, // 1

	        // Keyboard Settings
	        keyboardSupport: true, // option
	        arrowScroll: 50, // [px]

	        // Other
	        touchpadSupport: true,
	        fixedBackground: true,
	        excluded: ""
	    };

	    var options = defaultOptions;

	    // Other Variables
	    var isExcluded = false;
	    var isFrame = false;
	    var direction = { x: 0, y: 0 };
	    var initDone = false;
	    var root = document.documentElement;
	    var activeElement;
	    var observer;
	    var deltaBuffer = [120, 120, 120];

	    var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
	        pageup: 33, pagedown: 34, end: 35, home: 36 };

	    /***********************************************
	     * SETTINGS
	     ***********************************************/

	    var options = defaultOptions;

	    /***********************************************
	     * INITIALIZE
	     ***********************************************/

	    /**
	     * Tests if smooth scrolling is allowed. Shuts down everything if not.
	     */
	    function initTest() {

	        var disableKeyboard = false;

	        // disable keyboard support if anything above requested it
	        if (disableKeyboard) {
	            removeEvent("keydown", keydown);
	        }

	        if (options.keyboardSupport && !disableKeyboard) {
	            addEvent("keydown", keydown);
	        }
	    }

	    /**
	     * Sets up scrolls array, determines if frames are involved.
	     */
	    function init() {

	        if (!document.body) return;

	        var body = document.body;
	        var html = document.documentElement;
	        var windowHeight = window.innerHeight;
	        var scrollHeight = body.scrollHeight;

	        // check compat mode for root element
	        root = document.compatMode.indexOf('CSS') >= 0 ? html : body;
	        activeElement = body;

	        initTest();
	        initDone = true;

	        // Checks if this script is running in a frame
	        if (top != self) {
	            isFrame = true;
	        }

	        /**
	         * This fixes a bug where the areas left and right to 
	         * the content does not trigger the onmousewheel event
	         * on some pages. e.g.: html, body { height: 100% }
	         */
	        else if (scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {

	                html.style.height = 'auto';
	                //setTimeout(refresh, 10);

	                // clearfix
	                if (root.offsetHeight <= windowHeight) {
	                    var underlay = document.createElement("div");
	                    underlay.style.clear = "both";
	                    body.appendChild(underlay);
	                }
	            }

	        // disable fixed background
	        if (!options.fixedBackground && !isExcluded) {
	            body.style.backgroundAttachment = "scroll";
	            html.style.backgroundAttachment = "scroll";
	        }
	    }

	    /************************************************
	     * SCROLLING 
	     ************************************************/

	    var que = [];
	    var pending = false;
	    var lastScroll = +new Date();

	    /**
	     * Pushes scroll actions to the scrolling queue.
	     */
	    function scrollArray(elem, left, top, delay) {

	        delay || (delay = 1000);
	        directionCheck(left, top);

	        if (options.accelerationMax != 1) {
	            var now = +new Date();
	            var elapsed = now - lastScroll;
	            if (elapsed < options.accelerationDelta) {
	                var factor = (1 + 30 / elapsed) / 2;
	                if (factor > 1) {
	                    factor = Math.min(factor, options.accelerationMax);
	                    left *= factor;
	                    top *= factor;
	                }
	            }
	            lastScroll = +new Date();
	        }

	        // push a scroll command
	        que.push({
	            x: left,
	            y: top,
	            lastX: left < 0 ? 0.99 : -0.99,
	            lastY: top < 0 ? 0.99 : -0.99,
	            start: +new Date()
	        });

	        // don't act if there's a pending queue
	        if (pending) {
	            return;
	        }

	        var scrollWindow = elem === document.body;

	        var step = function step(time) {

	            var now = +new Date();
	            var scrollX = 0;
	            var scrollY = 0;

	            for (var i = 0; i < que.length; i++) {

	                var item = que[i];
	                var elapsed = now - item.start;
	                var finished = elapsed >= options.animationTime;

	                // scroll position: [0, 1]
	                var position = finished ? 1 : elapsed / options.animationTime;

	                // easing [optional]
	                if (options.pulseAlgorithm) {
	                    position = pulse(position);
	                }

	                // only need the difference
	                var x = item.x * position - item.lastX >> 0;
	                var y = item.y * position - item.lastY >> 0;

	                // add this to the total scrolling
	                scrollX += x;
	                scrollY += y;

	                // update last values
	                item.lastX += x;
	                item.lastY += y;

	                // delete and step back if it's over
	                if (finished) {
	                    que.splice(i, 1);i--;
	                }
	            }

	            // scroll left and top
	            if (scrollWindow) {
	                window.scrollBy(scrollX, scrollY);
	            } else {
	                if (scrollX) elem.scrollLeft += scrollX;
	                if (scrollY) elem.scrollTop += scrollY;
	            }

	            // clean up if there's nothing left to do
	            if (!left && !top) {
	                que = [];
	            }

	            if (que.length) {
	                requestFrame(step, elem, delay / options.frameRate + 1);
	            } else {
	                pending = false;
	            }
	        };

	        // start a new queue of actions
	        requestFrame(step, elem, 0);
	        pending = true;
	    }

	    /***********************************************
	     * EVENTS
	     ***********************************************/

	    /**
	     * Mouse wheel handler.
	     * @param {Object} event
	     */
	    function wheel(event) {

	        if (!initDone) {
	            init();
	        }

	        var target = event.target;
	        var overflowing = overflowingAncestor(target);

	        // use default if there's no overflowing
	        // element or default action is prevented    
	        if (!overflowing || event.defaultPrevented || isNodeName(activeElement, "embed") || isNodeName(target, "embed") && /\.pdf/i.test(target.src)) {
	            return true;
	        }

	        var deltaX = event.wheelDeltaX || 0;
	        var deltaY = event.wheelDeltaY || 0;

	        // use wheelDelta if deltaX/Y is not available
	        if (!deltaX && !deltaY) {
	            deltaY = event.wheelDelta || 0;
	        }

	        // check if it's a touchpad scroll that should be ignored
	        if (!options.touchpadSupport && isTouchpad(deltaY)) {
	            return true;
	        }

	        // scale by step size
	        // delta is 120 most of the time
	        // synaptics seems to send 1 sometimes
	        if (Math.abs(deltaX) > 1.2) {
	            deltaX *= options.stepSize / 120;
	        }
	        if (Math.abs(deltaY) > 1.2) {
	            deltaY *= options.stepSize / 120;
	        }

	        scrollArray(overflowing, -deltaX, -deltaY);
	        event.preventDefault();
	    }

	    /**
	     * Keydown event handler.
	     * @param {Object} event
	     */
	    function keydown(event) {

	        var target = event.target;
	        var modifier = event.ctrlKey || event.altKey || event.metaKey || event.shiftKey && event.keyCode !== key.spacebar;

	        // do nothing if user is editing text
	        // or using a modifier key (except shift)
	        // or in a dropdown
	        if (/input|textarea|select|embed/i.test(target.nodeName) || target.isContentEditable || event.defaultPrevented || modifier) {
	            return true;
	        }
	        // spacebar should trigger button press
	        if (isNodeName(target, "button") && event.keyCode === key.spacebar) {
	            return true;
	        }

	        var shift,
	            x = 0,
	            y = 0;
	        var elem = overflowingAncestor(activeElement);
	        var clientHeight = elem.clientHeight;

	        if (elem == document.body) {
	            clientHeight = window.innerHeight;
	        }

	        switch (event.keyCode) {
	            case key.up:
	                y = -options.arrowScroll;
	                break;
	            case key.down:
	                y = options.arrowScroll;
	                break;
	            case key.spacebar:
	                // (+ shift)
	                shift = event.shiftKey ? 1 : -1;
	                y = -shift * clientHeight * 0.9;
	                break;
	            case key.pageup:
	                y = -clientHeight * 0.9;
	                break;
	            case key.pagedown:
	                y = clientHeight * 0.9;
	                break;
	            case key.home:
	                y = -elem.scrollTop;
	                break;
	            case key.end:
	                var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
	                y = damt > 0 ? damt + 10 : 0;
	                break;
	            case key.left:
	                x = -options.arrowScroll;
	                break;
	            case key.right:
	                x = options.arrowScroll;
	                break;
	            default:
	                return true; // a key we don't care about
	        }

	        scrollArray(elem, x, y);
	        event.preventDefault();
	    }

	    /**
	     * Mousedown event only for updating activeElement
	     */
	    function mousedown(event) {
	        activeElement = event.target;
	    }

	    /***********************************************
	     * OVERFLOW
	     ***********************************************/

	    var cache = {}; // cleared out every once in while
	    setInterval(function () {
	        cache = {};
	    }, 10 * 1000);

	    var uniqueID = function () {
	        var i = 0;
	        return function (el) {
	            return el.uniqueID || (el.uniqueID = i++);
	        };
	    }();

	    function setCache(elems, overflowing) {
	        for (var i = elems.length; i--;) {
	            cache[uniqueID(elems[i])] = overflowing;
	        }return overflowing;
	    }

	    function overflowingAncestor(el) {
	        var elems = [];
	        var rootScrollHeight = root.scrollHeight;
	        do {
	            var cached = cache[uniqueID(el)];
	            if (cached) {
	                return setCache(elems, cached);
	            }
	            elems.push(el);
	            if (rootScrollHeight === el.scrollHeight) {
	                if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
	                    return setCache(elems, document.body); // scrolling root in WebKit
	                }
	            } else if (el.clientHeight + 10 < el.scrollHeight) {
	                overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
	                if (overflow === "scroll" || overflow === "auto") {
	                    return setCache(elems, el);
	                }
	            }
	        } while (el = el.parentNode);
	    }

	    /***********************************************
	     * HELPERS
	     ***********************************************/

	    function addEvent(type, fn, bubble) {
	        window.addEventListener(type, fn, bubble || false);
	    }

	    function removeEvent(type, fn, bubble) {
	        window.removeEventListener(type, fn, bubble || false);
	    }

	    function isNodeName(el, tag) {
	        return (el.nodeName || "").toLowerCase() === tag.toLowerCase();
	    }

	    function directionCheck(x, y) {
	        x = x > 0 ? 1 : -1;
	        y = y > 0 ? 1 : -1;
	        if (direction.x !== x || direction.y !== y) {
	            direction.x = x;
	            direction.y = y;
	            que = [];
	            lastScroll = 0;
	        }
	    }

	    var deltaBufferTimer;

	    function isTouchpad(deltaY) {
	        if (!deltaY) return;
	        deltaY = Math.abs(deltaY);
	        deltaBuffer.push(deltaY);
	        deltaBuffer.shift();
	        clearTimeout(deltaBufferTimer);

	        var allEquals = deltaBuffer[0] == deltaBuffer[1] && deltaBuffer[1] == deltaBuffer[2];
	        var allDivisable = isDivisible(deltaBuffer[0], 120) && isDivisible(deltaBuffer[1], 120) && isDivisible(deltaBuffer[2], 120);
	        return !(allEquals || allDivisable);
	    }

	    function isDivisible(n, divisor) {
	        return Math.floor(n / divisor) == n / divisor;
	    }

	    var requestFrame = function () {
	        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback, element, delay) {
	            window.setTimeout(callback, delay || 1000 / 60);
	        };
	    }();

	    /***********************************************
	     * PULSE
	     ***********************************************/

	    /**
	     * Viscous fluid with a pulse for part and decay for the rest.
	     * - Applies a fixed force over an interval (a damped acceleration), and
	     * - Lets the exponential bleed away the velocity over a longer interval
	     * - Michael Herf, http://stereopsis.com/stopping/
	     */
	    function pulse_(x) {
	        var val, start, expx;
	        // test
	        x = x * options.pulseScale;
	        if (x < 1) {
	            // acceleartion
	            val = x - (1 - Math.exp(-x));
	        } else {
	            // tail
	            // the previous animation ended here:
	            start = Math.exp(-1);
	            // simple viscous drag
	            x -= 1;
	            expx = 1 - Math.exp(-x);
	            val = start + expx * (1 - start);
	        }
	        return val * options.pulseNormalize;
	    }

	    function pulse(x) {
	        if (x >= 1) return 1;
	        if (x <= 0) return 0;

	        if (options.pulseNormalize == 1) {
	            options.pulseNormalize /= pulse_(1);
	        }
	        return pulse_(x);
	    }

	    var isChrome = /chrome/i.test(window.navigator.userAgent);
	    var isMouseWheelSupported = 'onmousewheel' in document;

	    if (isMouseWheelSupported && isChrome) {
	        addEvent("mousedown", mousedown);
	        addEvent("mousewheel", wheel);
	        addEvent("load", init);
	    };
	})();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

	/*! http://responsiveslides.com v1.54 by @viljamis */
	(function (c, I, B) {
	  c.fn.responsiveSlides = function (l) {
	    var a = c.extend({ auto: !0, speed: 500, timeout: 4E3, pager: !1, nav: !1, random: !1, pause: !1, pauseControls: !0, prevText: "Previous", nextText: "Next", maxwidth: "", navContainer: "", manualControls: "", namespace: "rslides", before: c.noop, after: c.noop }, l);return this.each(function () {
	      B++;var f = c(this),
	          s,
	          r,
	          t,
	          m,
	          p,
	          q,
	          n = 0,
	          e = f.children(),
	          C = e.size(),
	          h = parseFloat(a.speed),
	          D = parseFloat(a.timeout),
	          u = parseFloat(a.maxwidth),
	          g = a.namespace,
	          d = g + B,
	          E = g + "_nav " + d + "_nav",
	          v = g + "_here",
	          j = d + "_on",
	          w = d + "_s",
	          k = c("<ul class='" + g + "_tabs " + d + "_tabs' />"),
	          x = { "float": "left", position: "relative", opacity: 1, zIndex: 2 },
	          y = { "float": "none", position: "absolute", opacity: 0, zIndex: 1 },
	          F = function () {
	        var b = (document.body || document.documentElement).style,
	            a = "transition";if ("string" === typeof b[a]) return !0;s = ["Moz", "Webkit", "Khtml", "O", "ms"];var a = a.charAt(0).toUpperCase() + a.substr(1),
	            c;for (c = 0; c < s.length; c++) {
	          if ("string" === typeof b[s[c] + a]) return !0;
	        }return !1;
	      }(),
	          z = function z(b) {
	        a.before(b);F ? (e.removeClass(j).css(y).eq(b).addClass(j).css(x), n = b, setTimeout(function () {
	          a.after(b);
	        }, h)) : e.stop().fadeOut(h, function () {
	          c(this).removeClass(j).css(y).css("opacity", 1);
	        }).eq(b).fadeIn(h, function () {
	          c(this).addClass(j).css(x);a.after(b);n = b;
	        });
	      };a.random && (e.sort(function () {
	        return Math.round(Math.random()) - 0.5;
	      }), f.empty().append(e));e.each(function (a) {
	        this.id = w + a;
	      });f.addClass(g + " " + d);l && l.maxwidth && f.css("max-width", u);e.hide().css(y).eq(0).addClass(j).css(x).show();F && e.show().css({ "-webkit-transition": "opacity " + h + "ms ease-in-out", "-moz-transition": "opacity " + h + "ms ease-in-out", "-o-transition": "opacity " + h + "ms ease-in-out", transition: "opacity " + h + "ms ease-in-out" });if (1 < e.size()) {
	        if (D < h + 100) return;if (a.pager && !a.manualControls) {
	          var A = [];e.each(function (a) {
	            a += 1;A += "<li><a href='#' class='" + w + a + "'>" + a + "</a></li>";
	          });k.append(A);l.navContainer ? c(a.navContainer).append(k) : f.after(k);
	        }a.manualControls && (k = c(a.manualControls), k.addClass(g + "_tabs " + d + "_tabs"));(a.pager || a.manualControls) && k.find("li").each(function (a) {
	          c(this).addClass(w + (a + 1));
	        });if (a.pager || a.manualControls) q = k.find("a"), r = function r(a) {
	          q.closest("li").removeClass(v).eq(a).addClass(v);
	        };a.auto && (t = function t() {
	          p = setInterval(function () {
	            e.stop(!0, !0);var b = n + 1 < C ? n + 1 : 0;(a.pager || a.manualControls) && r(b);z(b);
	          }, D);
	        }, t());m = function m() {
	          a.auto && (clearInterval(p), t());
	        };a.pause && f.hover(function () {
	          clearInterval(p);
	        }, function () {
	          m();
	        });if (a.pager || a.manualControls) q.bind("click", function (b) {
	          b.preventDefault();a.pauseControls || m();b = q.index(this);n === b || c("." + j).queue("fx").length || (r(b), z(b));
	        }).eq(0).closest("li").addClass(v), a.pauseControls && q.hover(function () {
	          clearInterval(p);
	        }, function () {
	          m();
	        });if (a.nav) {
	          g = "<a href='#' class='" + E + " prev'>" + a.prevText + "</a><a href='#' class='" + E + " next'>" + a.nextText + "</a>";l.navContainer ? c(a.navContainer).append(g) : f.after(g);var d = c("." + d + "_nav"),
	              G = d.filter(".prev");d.bind("click", function (b) {
	            b.preventDefault();b = c("." + j);if (!b.queue("fx").length) {
	              var d = e.index(b);b = d - 1;d = d + 1 < C ? n + 1 : 0;z(c(this)[0] === G[0] ? b : d);if (a.pager || a.manualControls) r(c(this)[0] === G[0] ? b : d);a.pauseControls || m();
	            }
	          });
	          a.pauseControls && d.hover(function () {
	            clearInterval(p);
	          }, function () {
	            m();
	          });
	        }
	      }if ("undefined" === typeof document.body.style.maxWidth && l.maxwidth) {
	        var H = function H() {
	          f.css("width", "100%");f.width() > u && f.css("width", u);
	        };H();c(I).bind("resize", function () {
	          H();
	        });
	      }
	    });
	  };
	})(jQuery, undefined, 0);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
	(function ($) {
	  $.fn.UItoTop = function (options) {
	    var defaults = { text: 'To Top', min: 200, inDelay: 600, outDelay: 400, containerID: 'toTop', containerHoverID: 'toTopHover', scrollSpeed: 1000, easingType: 'linear' },
	        settings = $.extend(defaults, options),
	        containerIDhash = '#' + settings.containerID,
	        containerHoverIDHash = '#' + settings.containerHoverID;$('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');$(containerIDhash).hide().on('click.UItoTop', function () {
	      $('html, body').animate({ scrollTop: 0 }, settings.scrollSpeed, settings.easingType);$('#' + settings.containerHoverID, this).stop().animate({ 'opacity': 0 }, settings.inDelay, settings.easingType);return false;
	    }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function () {
	      $(containerHoverIDHash, this).stop().animate({ 'opacity': 1 }, 600, 'linear');
	    }, function () {
	      $(containerHoverIDHash, this).stop().animate({ 'opacity': 0 }, 700, 'linear');
	    });$(window).scroll(function () {
	      var sd = $(window).scrollTop();if (typeof document.body.style.maxHeight === "undefined") {
	        $(containerIDhash).css({ 'position': 'absolute', 'top': sd + $(window).height() - 50 });
	      }
	      if (sd > settings.min) $(containerIDhash).fadeIn(settings.inDelay);else $(containerIDhash).fadeOut(settings.Outdelay);
	    });
	  };
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";

	/*
	 * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
	 *
	 * Uses the built In easIng capabilities added In jQuery 1.1
	 * to offer multiple easIng options
	 *
	 * Copyright (c) 2007 George Smith
	 * Licensed under the MIT License:
	 *   http://www.opensource.org/licenses/mit-license.php
	 */

	// t: current time, b: begInnIng value, c: change In value, d: duration

	jQuery.extend(jQuery.easing, {
		easeInQuad: function easeInQuad(x, t, b, c, d) {
			return c * (t /= d) * t + b;
		},
		easeOutQuad: function easeOutQuad(x, t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * (--t * (t - 2) - 1) + b;
		},
		easeInCubic: function easeInCubic(x, t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOutCubic: function easeOutCubic(x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},
		easeInQuart: function easeInQuart(x, t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
		easeOutQuart: function easeOutQuart(x, t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
		easeInQuint: function easeInQuint(x, t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
		easeOutQuint: function easeOutQuint(x, t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
		easeInSine: function easeInSine(x, t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		easeOutSine: function easeOutSine(x, t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		easeInOutSine: function easeInOutSine(x, t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
		easeInExpo: function easeInExpo(x, t, b, c, d) {
			return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		},
		easeOutExpo: function easeOutExpo(x, t, b, c, d) {
			return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		},
		easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
			if (t == 0) return b;
			if (t == d) return b + c;
			if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function easeInCirc(x, t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
		easeOutCirc: function easeOutCirc(x, t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
		easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
		easeInElastic: function easeInElastic(x, t, b, c, d) {
			var s = 1.70158;var p = 0;var a = c;
			if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;var s = p / 4;
			} else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		},
		easeOutElastic: function easeOutElastic(x, t, b, c, d) {
			var s = 1.70158;var p = 0;var a = c;
			if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;var s = p / 4;
			} else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		},
		easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
			var s = 1.70158;var p = 0;var a = c;
			if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * (.3 * 1.5);
			if (a < Math.abs(c)) {
				a = c;var s = p / 4;
			} else var s = p / (2 * Math.PI) * Math.asin(c / a);
			if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
		},
		easeInBack: function easeInBack(x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
		easeOutBack: function easeOutBack(x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
		easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
			return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
		},
		easeInBounce: function easeInBounce(x, t, b, c, d) {
			return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
		},
		easeOutBounce: function easeOutBounce(x, t, b, c, d) {
			if ((t /= d) < 1 / 2.75) {
				return c * (7.5625 * t * t) + b;
			} else if (t < 2 / 2.75) {
				return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
			} else if (t < 2.5 / 2.75) {
				return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
			} else {
				return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
			}
		},
		easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
			if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
			return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(183)))

/***/ })

});
//# sourceMappingURL=index.js.map