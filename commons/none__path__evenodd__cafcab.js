{
  "use strict";

  let _v1, _v2;
  var _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
    _v12,
    _v13,
    _v14,
    _v15,
    _v16,
    _v17,
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = _v0 => (0, _v18.jsx)(_v26.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v18.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.183 2.165C10.773 2.056 11.38 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-.62 0-1.227-.056-1.817-.165a1 1 0 1 1 .361-1.967 8 8 0 1 0 0-15.736 1 1 0 1 1-.361-1.967ZM8.366 3.703A1 1 0 0 1 8 5.07a8.046 8.046 0 0 0-2.708 2.567 1 1 0 1 1-1.675-1.092 10.046 10.046 0 0 1 3.381-3.207 1 1 0 0 1 1.367.365ZM12 6.091a1 1 0 0 1 1 1V11.5l2.873 2.155a1 1 0 1 1-1.2 1.6l-3.262-2.448a.998.998 0 0 1-.411-.82V7.09a1 1 0 0 1 1-1Zm.6 5.109-.6.8.6-.8ZM3.46 8.98a1 1 0 0 1 .747 1.2A8.027 8.027 0 0 0 4 12c0 .627.072 1.236.207 1.82a1 1 0 1 1-1.948.452C2.09 13.54 2 12.78 2 12c0-.78.09-1.541.26-2.272a1 1 0 0 1 1.2-.748Zm.45 7.091a1 1 0 0 1 1.383.292 8.047 8.047 0 0 0 2.708 2.567 1 1 0 1 1-1.002 1.732 10.046 10.046 0 0 1-3.381-3.207 1 1 0 0 1 .291-1.384Z",
      fill: "currentColor"
    })
  });
  var _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = (0, _v19.createContext)({
    session: "",
    visibleNotices: [],
    trackUserInteractionEvent: () => void 0,
    client: "record_studio",
    isGuestUser: !1,
    guestUserInfo: void 0,
    getClientAnalyticContext: () => ({}),
    onScriptGenerationStarted: () => void 0
  });
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = ((_v3 = {}).UNEXPECTED = "UNEXPECTED", _v3.NETWORK = "NETWORK", _v3.SCRIPT_GENERATOR = "SCRIPT_GENERATOR", _v3.ANALYTIC = "ANALYTIC", _v3);
  let _v35 = () => {
    let _v0 = (0, _v33.useLogger)("useAnalytics"),
      _v1 = (0, _v19.useContext)(_v30);
    return {
      trackUserInteractionEvent: (0, _v19.useCallback)(_v1.trackUserInteractionEvent, []),
      trackTeleprompterUpgrade: (0, _v19.useCallback)(({
        copy: _v0,
        actionType: _v1
      }) => {
        _v0.debug("tracking vimeo.upgrade_action"), _v32.BigPictureClient.sendEvent(new _v32.Event("vimeo.upgrade_action", 36, {
          copy: _v0,
          location: "teleprompter",
          feature: "record_teleprompter",
          upsell_name: "record_teleprompter",
          action_type: _v1,
          page: "record_studio",
          target: "upgrade",
          target_path: "https://vimeo.com/upgrade",
          plan_selected: null,
          purchase_type: null,
          duration: null,
          price: null,
          currency: null,
          is_discount: null,
          discount_offer: null,
          path: null,
          device_type: null,
          is_new_pricing: null,
          upgrade_flags: null,
          loading_time: null,
          promo_code_id: null
        })).catch(_v0 => _v0.error(Error("Failed to send upgrade_action."), {
          category: _v34.ANALYTIC,
          method: "trackTeleprompterUpgrade",
          component: "useAnalytics",
          data: {
            error: _v0
          }
        }));
      }, [])
    };
  };
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = "?upsell=record_teleprompter&integration=none&feature=teleprompter&paywall_trigger=teleprompter_upgrade_modal_cta_button&paywall_location=record_studio&paywall_feature=teleprompter",
    _v42 = "/upgrade-plan" + _v41,
    _v43 = () => {
      let _v0 = (0, _v19.useContext)(_v29.ViewerContext),
        {
          isGuestUser: _v1
        } = (0, _v19.useContext)(_v30),
        {
          trackTeleprompterUpgrade: _v2
        } = _v35(),
        _v3 = (0, _v40.useTeleprompterStore)(_v0 => _v0.setUpsellModalShown),
        _v4 = (0, _v36.useShowTeleprompterUpsell)(_v1),
        {
          isError: _v5,
          isPlanLoading: _v6,
          plan: _v7
        } = function (_v0) {
          let {
              user: _v1
            } = (0, _v19.useContext)(_v29.ViewerContext) ?? {},
            _v2 = _v1?.account === "basic" || _v1?.account === "plus" ? "pro" : "standard",
            {
              data: _v3,
              loading: _v4,
              error: _v5
            } = function ({
              plans: _v0,
              useMeSubscription: _v1,
              shouldShowUpsell: _v2
            }) {
              let _v3 = (0, _v19.useContext)(_v29.ViewerContext),
                _v4 = (0, _v39.useCampaignIdOverride)(),
                _v5 = {
                  filter: _v0 ? _v0.map(_v0 => _v0.replace(/([A-Z])/g, (_v0, _v1) => "_" + _v1.toLowerCase()).replace(/^_/, "")) : void 0,
                  promos: void 0
                },
                {
                  data: _v6,
                  error: _v7,
                  isLoading: _v8
                } = (_v3?.user && _v1 ? _v37.useGetMeSubscriptionPlans : _v38.useGetSubscriptionPlans)(() => _v3 && _v2 ? (_v3.vuid && (_v5.vuid = _v3.vuid), _v4 && (_v5.campaignId = _v4), {
                  select: ["metadata", "name", "tier"],
                  query: _v5
                }) : null);
              return _v8 ? {
                loading: !0
              } : _v7 ? {
                error: !0
              } : _v6 && _v6.data ? {
                data: _v6.data
              } : {
                data: void 0
              };
            }({
              shouldShowUpsell: _v0,
              useMeSubscription: !0,
              plans: [_v2]
            }),
            _v6 = (0, _v19.useMemo)(() => {
              let _v0 = _v3?.[0];
              if (_v0?.tier === _v2 && _v0.metadata.interactions.purchase.uri.freeTrial) return {
                purchaseUri: _v0.metadata.interactions.purchase.uri.freeTrial,
                displayName: _v0.name
              };
            }, [_v3, _v2]);
          return (0, _v19.useMemo)(() => ({
            isPlanLoading: !!_v4,
            isError: !!_v5,
            plan: _v6
          }), [_v6, _v4, _v5]);
        }(_v4),
        _v8 = (0, _v19.useCallback)(() => {
          _v3(() => !1);
        }, [_v3]),
        _v9 = (0, _v19.useMemo)(() => !_v7 || _v5 || _v6 ? {
          link: _v42,
          text: _v31.translations.upgradeUpsell.upgradeButton
        } : {
          link: _v7.purchaseUri + _v41,
          text: _v31.translations.upgradeUpsell.upgradeToPlanButton(_v7.displayName)
        }, [_v7, _v6, _v5]),
        _v10 = (0, _v19.useCallback)(() => {
          _v2({
            copy: _v9.text,
            actionType: "click"
          });
        }, [_v2, _v9.text]),
        _v11 = (0, _v19.useCallback)(() => {
          _v2({
            copy: _v31.translations.upgradeUpsell.heading,
            actionType: "impression"
          });
        }, [_v2]);
      return _v4 ? (0, _v18.jsx)(_v28.default, {
        apiUrl: _v0?.apiUrl,
        userConfig: {
          jwt: _v0?.jwt,
          userId: _v0?.user?.id
        },
        templateType: "feature",
        onClose: _v8,
        tracking: {
          params: {
            feature: "record_teleprompter",
            location: "teleprompter",
            page: "record_studio",
            upsell_name: "record_teleprompter"
          },
          paywallTracking: {
            paywallTrigger: "teleprompter_upgrade_modal_cta_button",
            paywallLocation: "record_studio",
            paywallType: "popup",
            paywallFeature: "teleprompter"
          },
          onOpen: _v11,
          onButtonClick: _v10
        },
        modalConfig: {
          headerText: _v31.translations.upgradeUpsell.heading,
          subHeaderText: "",
          primaryCTAText: _v9.text,
          primaryCTALink: _v9.link,
          secondaryCTAText: _v31.translations.upgradeUpsell.secondaryCTAText,
          secondaryCTALink: _v42,
          body: (0, _v18.jsxs)(_v22.VStack, {
            py: "50",
            px: "100",
            children: [(0, _v18.jsxs)(_v23.HStack, {
              gap: "75",
              align: "start",
              children: [(0, _v18.jsx)(_v24.AiSparklesFilled, {
                w: "xs",
                h: "xs"
              }), (0, _v18.jsx)(_v21.Text, {
                variant: "body-xl",
                fontSize: "text-sm",
                children: _v31.translations.upgradeUpsell.features.aiGenerate
              })]
            }), (0, _v18.jsxs)(_v23.HStack, {
              gap: "75",
              align: "start",
              children: [(0, _v18.jsx)(_v25.FiltersLeversFilled, {
                w: "xs",
                h: "xs"
              }), (0, _v18.jsx)(_v21.Text, {
                variant: "body-xl",
                fontSize: "text-sm",
                children: _v31.translations.upgradeUpsell.features.aiCustomization
              })]
            }), (0, _v18.jsxs)(_v23.HStack, {
              gap: "75",
              align: "start",
              children: [(0, _v18.jsx)(_v27, {
                w: "xs",
                h: "xs"
              }), (0, _v18.jsx)(_v21.Text, {
                variant: "body-xl",
                fontSize: "text-sm",
                children: _v31.translations.upgradeUpsell.features.smartTeleprompter
              })]
            })]
          })
        }
      }) : null;
    };
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = function () {
      return (_v46 = Object.assign || function (_v0) {
        for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
        return _v0;
      }).apply(this, arguments);
    },
    _v47 = {
      width: "100%",
      height: "10px",
      top: "0px",
      left: "0px",
      cursor: "row-resize"
    },
    _v48 = {
      width: "10px",
      height: "100%",
      top: "0px",
      left: "0px",
      cursor: "col-resize"
    },
    _v49 = {
      width: "20px",
      height: "20px",
      position: "absolute",
      zIndex: 1
    },
    _v50 = {
      top: _v46(_v46({}, _v47), {
        top: "-5px"
      }),
      right: _v46(_v46({}, _v48), {
        left: void 0,
        right: "-5px"
      }),
      bottom: _v46(_v46({}, _v47), {
        top: void 0,
        bottom: "-5px"
      }),
      left: _v46(_v46({}, _v48), {
        left: "-5px"
      }),
      topRight: _v46(_v46({}, _v49), {
        right: "-10px",
        top: "-10px",
        cursor: "ne-resize"
      }),
      bottomRight: _v46(_v46({}, _v49), {
        right: "-10px",
        bottom: "-10px",
        cursor: "se-resize"
      }),
      bottomLeft: _v46(_v46({}, _v49), {
        left: "-10px",
        bottom: "-10px",
        cursor: "sw-resize"
      }),
      topLeft: _v46(_v46({}, _v49), {
        left: "-10px",
        top: "-10px",
        cursor: "nw-resize"
      })
    },
    _v51 = (0, _v19.memo)(function (_v0) {
      var _v1 = _v0.onResizeStart,
        _v2 = _v0.direction,
        _v3 = _v0.children,
        _v4 = _v0.replaceStyles,
        _v5 = _v0.className,
        _v6 = (0, _v19.useCallback)(function (_v0) {
          _v1(_v0, _v2);
        }, [_v1, _v2]),
        _v7 = (0, _v19.useCallback)(function (_v0) {
          _v1(_v0, _v2);
        }, [_v1, _v2]),
        _v8 = (0, _v19.useMemo)(function () {
          return _v46(_v46({
            position: "absolute",
            userSelect: "none"
          }, _v50[_v2]), null != _v4 ? _v4 : {});
        }, [_v4, _v2]);
      return (0, _v18.jsx)("div", {
        className: _v5 || void 0,
        style: _v8,
        onMouseDown: _v6,
        onTouchStart: _v7,
        children: _v3
      });
    }),
    _v52 = (_v4 = function (_v0, _v1) {
      return (_v4 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (_v0, _v1) {
        _v0.__proto__ = _v1;
      } || function (_v0, _v1) {
        for (var _v2 in _v1) Object.prototype.hasOwnProperty.call(_v1, _v2) && (_v0[_v2] = _v1[_v2]);
      })(_v0, _v1);
    }, function (_v0, _v1) {
      if ("function" != typeof _v1 && null !== _v1) throw TypeError("Class extends value " + String(_v1) + " is not a constructor or null");
      function _v2() {
        this.constructor = _v0;
      }
      _v4(_v0, _v1), _v0.prototype = null === _v1 ? Object.create(_v1) : (_v2.prototype = _v1.prototype, new _v2());
    }),
    _v53 = function () {
      return (_v53 = Object.assign || function (_v0) {
        for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
        return _v0;
      }).apply(this, arguments);
    },
    _v54 = {
      width: "auto",
      height: "auto"
    },
    _v55 = function (_v0, _v1, _v2) {
      return Math.max(Math.min(_v0, _v2), _v1);
    },
    _v56 = function (_v0, _v1, _v2) {
      var _v3 = Math.round(_v0 / _v1);
      return _v3 * _v1 + _v2 * (_v3 - 1);
    },
    _v57 = function (_v0, _v1) {
      return RegExp(_v0, "i").test(_v1);
    },
    _v58 = function (_v0) {
      return !!(_v0.touches && _v0.touches.length);
    },
    _v59 = function (_v0, _v1, _v2) {
      void 0 === _v2 && (_v2 = 0);
      var _v3 = _v1.reduce(function (_v0, _v1, _v2) {
          return Math.abs(_v1 - _v0) < Math.abs(_v1[_v0] - _v0) ? _v2 : _v0;
        }, 0),
        _v4 = Math.abs(_v1[_v3] - _v0);
      return 0 === _v2 || _v4 < _v2 ? _v1[_v3] : _v0;
    },
    _v60 = function (_v0) {
      return "auto" === (_v0 = _v0.toString()) || _v0.endsWith("px") || _v0.endsWith("%") || _v0.endsWith("vh") || _v0.endsWith("vw") || _v0.endsWith("vmax") || _v0.endsWith("vmin") ? _v0 : "".concat(_v0, "px");
    },
    _v61 = function (_v0, _v1, _v2, _v3) {
      if (_v0 && "string" == typeof _v0) {
        if (_v0.endsWith("px")) return Number(_v0.replace("px", ""));
        if (_v0.endsWith("%")) {
          var _v4 = Number(_v0.replace("%", "")) / 100;
          return _v1 * _v4;
        }
        if (_v0.endsWith("vw")) {
          var _v4 = Number(_v0.replace("vw", "")) / 100;
          return _v2 * _v4;
        }
        if (_v0.endsWith("vh")) {
          var _v4 = Number(_v0.replace("vh", "")) / 100;
          return _v3 * _v4;
        }
      }
      return _v0;
    },
    _v62 = ["as", "ref", "style", "className", "grid", "gridGap", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
    _v63 = "__resizable_base__",
    _v64 = function (_v0) {
      function _v1(_v0) {
        var _v1,
          _v2,
          _v3,
          _v4,
          _v5 = _v0.call(this, _v0) || this;
        return _v5.ratio = 1, _v5.resizable = null, _v5.parentLeft = 0, _v5.parentTop = 0, _v5.resizableLeft = 0, _v5.resizableRight = 0, _v5.resizableTop = 0, _v5.resizableBottom = 0, _v5.targetLeft = 0, _v5.targetTop = 0, _v5.delta = {
          width: 0,
          height: 0
        }, _v5.appendBase = function () {
          if (!_v5.resizable || !_v5.window) return null;
          var _v0 = _v5.parentNode;
          if (!_v0) return null;
          var _v1 = _v5.window.document.createElement("div");
          return _v1.style.width = "100%", _v1.style.height = "100%", _v1.style.position = "absolute", _v1.style.transform = "scale(0, 0)", _v1.style.left = "0", _v1.style.flex = "0 0 100%", _v1.classList ? _v1.classList.add(_v63) : _v1.className += _v63, _v0.appendChild(_v1), _v1;
        }, _v5.removeBase = function (_v0) {
          var _v1 = _v5.parentNode;
          _v1 && _v1.removeChild(_v0);
        }, _v5.state = {
          isResizing: !1,
          width: null != (_v2 = null == (_v1 = _v5.propsSize) ? void 0 : _v1.width) ? _v2 : "auto",
          height: null != (_v4 = null == (_v3 = _v5.propsSize) ? void 0 : _v3.height) ? _v4 : "auto",
          direction: "right",
          original: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          },
          backgroundStyle: {
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0)",
            cursor: "auto",
            opacity: 0,
            position: "fixed",
            zIndex: 0,
            top: "0",
            left: "0",
            bottom: "0",
            right: "0"
          },
          flexBasis: void 0
        }, _v5.onResizeStart = _v5.onResizeStart.bind(_v5), _v5.onMouseMove = _v5.onMouseMove.bind(_v5), _v5.onMouseUp = _v5.onMouseUp.bind(_v5), _v5;
      }
      return _v52(_v1, _v0), Object.defineProperty(_v1.prototype, "parentNode", {
        get: function () {
          return this.resizable ? this.resizable.parentNode : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v1.prototype, "window", {
        get: function () {
          return this.resizable && this.resizable.ownerDocument ? this.resizable.ownerDocument.defaultView : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v1.prototype, "propsSize", {
        get: function () {
          return this.props.size || this.props.defaultSize || _v54;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v1.prototype, "size", {
        get: function () {
          var _v0 = 0,
            _v1 = 0;
          if (this.resizable && this.window) {
            var _v2 = this.resizable.offsetWidth,
              _v3 = this.resizable.offsetHeight,
              _v4 = this.resizable.style.position;
            "relative" !== _v4 && (this.resizable.style.position = "relative"), _v0 = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : _v2, _v1 = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : _v3, this.resizable.style.position = _v4;
          }
          return {
            width: _v0,
            height: _v1
          };
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_v1.prototype, "sizeStyle", {
        get: function () {
          var _v0 = this,
            _v1 = this.props.size,
            _v2 = function (_v0) {
              var _v1;
              if (void 0 === _v0.state[_v0] || "auto" === _v0.state[_v0]) return "auto";
              if (_v0.propsSize && _v0.propsSize[_v0] && (null == (_v1 = _v0.propsSize[_v0]) ? void 0 : _v1.toString().endsWith("%"))) {
                if (_v0.state[_v0].toString().endsWith("%")) return _v0.state[_v0].toString();
                var _v2 = _v0.getParentSize(),
                  _v3 = Number(_v0.state[_v0].toString().replace("px", "")) / _v2[_v0] * 100;
                return "".concat(_v3, "%");
              }
              return _v60(_v0.state[_v0]);
            };
          return {
            width: _v1 && void 0 !== _v1.width && !this.state.isResizing ? _v60(_v1.width) : _v2("width"),
            height: _v1 && void 0 !== _v1.height && !this.state.isResizing ? _v60(_v1.height) : _v2("height")
          };
        },
        enumerable: !1,
        configurable: !0
      }), _v1.prototype.getParentSize = function () {
        if (!this.parentNode) return this.window ? {
          width: this.window.innerWidth,
          height: this.window.innerHeight
        } : {
          width: 0,
          height: 0
        };
        var _v0 = this.appendBase();
        if (!_v0) return {
          width: 0,
          height: 0
        };
        var _v1 = !1,
          _v2 = this.parentNode.style.flexWrap;
        "wrap" !== _v2 && (_v1 = !0, this.parentNode.style.flexWrap = "wrap"), _v0.style.position = "relative", _v0.style.minWidth = "100%", _v0.style.minHeight = "100%";
        var _v3 = {
          width: _v0.offsetWidth,
          height: _v0.offsetHeight
        };
        return _v1 && (this.parentNode.style.flexWrap = _v2), this.removeBase(_v0), _v3;
      }, _v1.prototype.bindEvents = function () {
        this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
          capture: !0,
          passive: !1
        }), this.window.addEventListener("touchend", this.onMouseUp));
      }, _v1.prototype.unbindEvents = function () {
        this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
      }, _v1.prototype.componentDidMount = function () {
        if (this.resizable && this.window) {
          var _v0 = this.window.getComputedStyle(this.resizable);
          this.setState({
            width: this.state.width || this.size.width,
            height: this.state.height || this.size.height,
            flexBasis: "auto" !== _v0.flexBasis ? _v0.flexBasis : void 0
          });
        }
      }, _v1.prototype.componentWillUnmount = function () {
        this.window && this.unbindEvents();
      }, _v1.prototype.createSizeForCssProperty = function (_v0, _v1) {
        var _v2 = this.propsSize && this.propsSize[_v1];
        return "auto" === this.state[_v1] && this.state.original[_v1] === _v0 && (void 0 === _v2 || "auto" === _v2) ? "auto" : _v0;
      }, _v1.prototype.calculateNewMaxFromBoundary = function (_v0, _v1) {
        var _v2,
          _v3,
          _v4 = this.props.boundsByDirection,
          _v5 = this.state.direction,
          _v6 = _v4 && _v57("left", _v5),
          _v7 = _v4 && _v57("top", _v5);
        if ("parent" === this.props.bounds) {
          var _v8 = this.parentNode;
          _v8 && (_v2 = _v6 ? this.resizableRight - this.parentLeft : _v8.offsetWidth + (this.parentLeft - this.resizableLeft), _v3 = _v7 ? this.resizableBottom - this.parentTop : _v8.offsetHeight + (this.parentTop - this.resizableTop));
        } else "window" === this.props.bounds ? this.window && (_v2 = _v6 ? this.resizableRight : this.window.innerWidth - this.resizableLeft, _v3 = _v7 ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (_v2 = _v6 ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), _v3 = _v7 ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
        return _v2 && Number.isFinite(_v2) && (_v0 = _v0 && _v0 < _v2 ? _v0 : _v2), _v3 && Number.isFinite(_v3) && (_v1 = _v1 && _v1 < _v3 ? _v1 : _v3), {
          maxWidth: _v0,
          maxHeight: _v1
        };
      }, _v1.prototype.calculateNewSizeFromDirection = function (_v0, _v1) {
        var _v2,
          _v3 = this.props.scale || 1,
          _v4 = Array.isArray(_v2 = this.props.resizeRatio || 1) ? _v2 : [_v2, _v2],
          _v5 = _v4[0],
          _v6 = _v4[1],
          _v7 = this.state,
          _v8 = _v7.direction,
          _v9 = _v7.original,
          _v10 = this.props,
          _v11 = _v10.lockAspectRatio,
          _v12 = _v10.lockAspectRatioExtraHeight,
          _v13 = _v10.lockAspectRatioExtraWidth,
          _v14 = _v9.width,
          _v15 = _v9.height,
          _v16 = _v12 || 0,
          _v17 = _v13 || 0;
        return _v57("right", _v8) && (_v14 = _v9.width + (_v0 - _v9.x) * _v5 / _v3, _v11 && (_v15 = (_v14 - _v17) / this.ratio + _v16)), _v57("left", _v8) && (_v14 = _v9.width - (_v0 - _v9.x) * _v5 / _v3, _v11 && (_v15 = (_v14 - _v17) / this.ratio + _v16)), _v57("bottom", _v8) && (_v15 = _v9.height + (_v1 - _v9.y) * _v6 / _v3, _v11 && (_v14 = (_v15 - _v16) * this.ratio + _v17)), _v57("top", _v8) && (_v15 = _v9.height - (_v1 - _v9.y) * _v6 / _v3, _v11 && (_v14 = (_v15 - _v16) * this.ratio + _v17)), {
          newWidth: _v14,
          newHeight: _v15
        };
      }, _v1.prototype.calculateNewSizeFromAspectRatio = function (_v0, _v1, _v2, _v3) {
        var _v4 = this.props,
          _v5 = _v4.lockAspectRatio,
          _v6 = _v4.lockAspectRatioExtraHeight,
          _v7 = _v4.lockAspectRatioExtraWidth,
          _v8 = void 0 === _v3.width ? 10 : _v3.width,
          _v9 = void 0 === _v2.width || _v2.width < 0 ? _v0 : _v2.width,
          _v10 = void 0 === _v3.height ? 10 : _v3.height,
          _v11 = void 0 === _v2.height || _v2.height < 0 ? _v1 : _v2.height,
          _v12 = _v6 || 0,
          _v13 = _v7 || 0;
        if (_v5) {
          var _v14 = (_v10 - _v12) * this.ratio + _v13,
            _v15 = (_v11 - _v12) * this.ratio + _v13,
            _v16 = (_v8 - _v13) / this.ratio + _v12,
            _v17 = (_v9 - _v13) / this.ratio + _v12,
            _v18 = Math.max(_v10, _v16),
            _v19 = Math.min(_v11, _v17);
          _v0 = _v55(_v0, Math.max(_v8, _v14), Math.min(_v9, _v15)), _v1 = _v55(_v1, _v18, _v19);
        } else _v0 = _v55(_v0, _v8, _v9), _v1 = _v55(_v1, _v10, _v11);
        return {
          newWidth: _v0,
          newHeight: _v1
        };
      }, _v1.prototype.setBoundingClientRect = function () {
        var _v0 = 1 / (this.props.scale || 1);
        if ("parent" === this.props.bounds) {
          var _v1 = this.parentNode;
          if (_v1) {
            var _v2 = _v1.getBoundingClientRect();
            this.parentLeft = _v2.left * _v0, this.parentTop = _v2.top * _v0;
          }
        }
        if (this.props.bounds && "string" != typeof this.props.bounds) {
          var _v3 = this.props.bounds.getBoundingClientRect();
          this.targetLeft = _v3.left * _v0, this.targetTop = _v3.top * _v0;
        }
        if (this.resizable) {
          var _v4 = this.resizable.getBoundingClientRect(),
            _v5 = _v4.left,
            _v6 = _v4.top,
            _v7 = _v4.right,
            _v8 = _v4.bottom;
          this.resizableLeft = _v5 * _v0, this.resizableRight = _v7 * _v0, this.resizableTop = _v6 * _v0, this.resizableBottom = _v8 * _v0;
        }
      }, _v1.prototype.onResizeStart = function (_v0, _v1) {
        if (this.resizable && this.window) {
          var _v2,
            _v3,
            _v4 = 0,
            _v5 = 0;
          if (_v0.nativeEvent && ((_v2 = _v0.nativeEvent).clientX || 0 === _v2.clientX) && (_v2.clientY || 0 === _v2.clientY) ? (_v4 = _v0.nativeEvent.clientX, _v5 = _v0.nativeEvent.clientY) : _v0.nativeEvent && _v58(_v0.nativeEvent) && (_v4 = _v0.nativeEvent.touches[0].clientX, _v5 = _v0.nativeEvent.touches[0].clientY), !this.props.onResizeStart || !this.resizable || !1 !== this.props.onResizeStart(_v0, _v1, this.resizable)) {
            this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
              height: this.props.size.height
            }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
              width: this.props.size.width
            })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
            var _v6 = this.window.getComputedStyle(this.resizable);
            if ("auto" !== _v6.flexBasis) {
              var _v7 = this.parentNode;
              if (_v7) {
                var _v8 = this.window.getComputedStyle(_v7).flexDirection;
                this.flexDir = _v8.startsWith("row") ? "row" : "column", _v3 = _v6.flexBasis;
              }
            }
            this.setBoundingClientRect(), this.bindEvents();
            var _v9 = {
              original: {
                x: _v4,
                y: _v5,
                width: this.size.width,
                height: this.size.height
              },
              isResizing: !0,
              backgroundStyle: _v53(_v53({}, this.state.backgroundStyle), {
                cursor: this.window.getComputedStyle(_v0.target).cursor || "auto"
              }),
              direction: _v1,
              flexBasis: _v3
            };
            this.setState(_v9);
          }
        }
      }, _v1.prototype.onMouseMove = function (_v0) {
        var _v1 = this;
        if (this.state.isResizing && this.resizable && this.window) {
          if (this.window.TouchEvent && _v58(_v0)) try {
            _v0.preventDefault(), _v0.stopPropagation();
          } catch (_v0) {}
          var _v2,
            _v3,
            _v4,
            _v5,
            _v6,
            _v7,
            _v8 = this.props,
            _v9 = _v8.maxWidth,
            _v10 = _v8.maxHeight,
            _v11 = _v8.minWidth,
            _v12 = _v8.minHeight,
            _v13 = _v58(_v0) ? _v0.touches[0].clientX : _v0.clientX,
            _v14 = _v58(_v0) ? _v0.touches[0].clientY : _v0.clientY,
            _v15 = this.state,
            _v16 = _v15.direction,
            _v17 = _v15.original,
            _v18 = _v15.width,
            _v19 = _v15.height,
            _v20 = this.getParentSize(),
            _v21 = (_v2 = this.window.innerWidth, _v3 = this.window.innerHeight, _v4 = _v9, _v5 = _v10, _v6 = _v11, _v7 = _v12, _v4 = _v61(_v4, _v20.width, _v2, _v3), _v5 = _v61(_v5, _v20.height, _v2, _v3), _v6 = _v61(_v6, _v20.width, _v2, _v3), _v7 = _v61(_v7, _v20.height, _v2, _v3), {
              maxWidth: void 0 === _v4 ? void 0 : Number(_v4),
              maxHeight: void 0 === _v5 ? void 0 : Number(_v5),
              minWidth: void 0 === _v6 ? void 0 : Number(_v6),
              minHeight: void 0 === _v7 ? void 0 : Number(_v7)
            });
          _v9 = _v21.maxWidth, _v10 = _v21.maxHeight, _v11 = _v21.minWidth, _v12 = _v21.minHeight;
          var _v22 = this.calculateNewSizeFromDirection(_v13, _v14),
            _v23 = _v22.newHeight,
            _v24 = _v22.newWidth,
            _v25 = this.calculateNewMaxFromBoundary(_v9, _v10);
          this.props.snap && this.props.snap.x && (_v24 = _v59(_v24, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (_v23 = _v59(_v23, this.props.snap.y, this.props.snapGap));
          var _v26 = this.calculateNewSizeFromAspectRatio(_v24, _v23, {
            width: _v25.maxWidth,
            height: _v25.maxHeight
          }, {
            width: _v11,
            height: _v12
          });
          if (_v24 = _v26.newWidth, _v23 = _v26.newHeight, this.props.grid) {
            var _v27 = _v56(_v24, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
              _v28 = _v56(_v23, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
              _v29 = this.props.snapGap || 0,
              _v30 = 0 === _v29 || Math.abs(_v27 - _v24) <= _v29 ? _v27 : _v24,
              _v31 = 0 === _v29 || Math.abs(_v28 - _v23) <= _v29 ? _v28 : _v23;
            _v24 = _v30, _v23 = _v31;
          }
          var _v32 = {
            width: _v24 - _v17.width,
            height: _v23 - _v17.height
          };
          if (this.delta = _v32, _v18 && "string" == typeof _v18) {
            if (_v18.endsWith("%")) {
              var _v33 = _v24 / _v20.width * 100;
              _v24 = "".concat(_v33, "%");
            } else if (_v18.endsWith("vw")) {
              var _v34 = _v24 / this.window.innerWidth * 100;
              _v24 = "".concat(_v34, "vw");
            } else if (_v18.endsWith("vh")) {
              var _v35 = _v24 / this.window.innerHeight * 100;
              _v24 = "".concat(_v35, "vh");
            }
          }
          if (_v19 && "string" == typeof _v19) {
            if (_v19.endsWith("%")) {
              var _v33 = _v23 / _v20.height * 100;
              _v23 = "".concat(_v33, "%");
            } else if (_v19.endsWith("vw")) {
              var _v34 = _v23 / this.window.innerWidth * 100;
              _v23 = "".concat(_v34, "vw");
            } else if (_v19.endsWith("vh")) {
              var _v35 = _v23 / this.window.innerHeight * 100;
              _v23 = "".concat(_v35, "vh");
            }
          }
          var _v36 = {
            width: this.createSizeForCssProperty(_v24, "width"),
            height: this.createSizeForCssProperty(_v23, "height")
          };
          "row" === this.flexDir ? _v36.flexBasis = _v36.width : "column" === this.flexDir && (_v36.flexBasis = _v36.height);
          var _v37 = this.state.width !== _v36.width,
            _v38 = this.state.height !== _v36.height,
            _v39 = this.state.flexBasis !== _v36.flexBasis,
            _v40 = _v37 || _v38 || _v39;
          _v40 && (0, _v45.flushSync)(function () {
            _v1.setState(_v36);
          }), this.props.onResize && _v40 && this.props.onResize(_v0, _v16, this.resizable, _v32);
        }
      }, _v1.prototype.onMouseUp = function (_v0) {
        var _v1,
          _v2,
          _v3 = this.state,
          _v4 = _v3.isResizing,
          _v5 = _v3.direction;
        _v3.original, _v4 && this.resizable && (this.props.onResizeStop && this.props.onResizeStop(_v0, _v5, this.resizable, this.delta), this.props.size && this.setState({
          width: null != (_v1 = this.props.size.width) ? _v1 : "auto",
          height: null != (_v2 = this.props.size.height) ? _v2 : "auto"
        }), this.unbindEvents(), this.setState({
          isResizing: !1,
          backgroundStyle: _v53(_v53({}, this.state.backgroundStyle), {
            cursor: "auto"
          })
        }));
      }, _v1.prototype.updateSize = function (_v0) {
        var _v1, _v2;
        this.setState({
          width: null != (_v1 = _v0.width) ? _v1 : "auto",
          height: null != (_v2 = _v0.height) ? _v2 : "auto"
        });
      }, _v1.prototype.renderResizer = function () {
        var _v0 = this,
          _v1 = this.props,
          _v2 = _v1.enable,
          _v3 = _v1.handleStyles,
          _v4 = _v1.handleClasses,
          _v5 = _v1.handleWrapperStyle,
          _v6 = _v1.handleWrapperClass,
          _v7 = _v1.handleComponent;
        if (!_v2) return null;
        var _v8 = Object.keys(_v2).map(function (_v0) {
          return !1 !== _v2[_v0] ? (0, _v18.jsx)(_v51, {
            direction: _v0,
            onResizeStart: _v0.onResizeStart,
            replaceStyles: _v3 && _v3[_v0],
            className: _v4 && _v4[_v0],
            children: _v7 && _v7[_v0] ? _v7[_v0] : null
          }, _v0) : null;
        });
        return (0, _v18.jsx)("div", {
          className: _v6,
          style: _v5,
          children: _v8
        });
      }, _v1.prototype.render = function () {
        var _v0 = this,
          _v1 = Object.keys(this.props).reduce(function (_v0, _v1) {
            return -1 !== _v62.indexOf(_v1) || (_v0[_v1] = _v0.props[_v1]), _v0;
          }, {}),
          _v2 = _v53(_v53(_v53({
            position: "relative",
            userSelect: this.state.isResizing ? "none" : "auto"
          }, this.props.style), this.sizeStyle), {
            maxWidth: this.props.maxWidth,
            maxHeight: this.props.maxHeight,
            minWidth: this.props.minWidth,
            minHeight: this.props.minHeight,
            boxSizing: "border-box",
            flexShrink: 0
          });
        this.state.flexBasis && (_v2.flexBasis = this.state.flexBasis);
        var _v3 = this.props.as || "div";
        return (0, _v18.jsxs)(_v3, _v53({
          style: _v2,
          className: this.props.className
        }, _v1, {
          ref: function (_v0) {
            _v0 && (_v0.resizable = _v0);
          },
          children: [this.state.isResizing && (0, _v18.jsx)("div", {
            style: this.state.backgroundStyle
          }), this.props.children, this.renderResizer()]
        }));
      }, _v1.defaultProps = {
        as: "div",
        onResizeStart: function () {},
        onResize: function () {},
        onResizeStop: function () {},
        enable: {
          top: !0,
          right: !0,
          bottom: !0,
          left: !0,
          topRight: !0,
          bottomRight: !0,
          bottomLeft: !0,
          topLeft: !0
        },
        style: {},
        grid: [1, 1],
        gridGap: [0, 0],
        lockAspectRatio: !1,
        lockAspectRatioExtraWidth: 0,
        lockAspectRatioExtraHeight: 0,
        scale: 1,
        resizeRatio: 1,
        snapGap: 0
      }, _v1;
    }(_v19.PureComponent),
    _v65 = function (_v0, _v1) {
      return (_v65 = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (_v0, _v1) {
        _v0.__proto__ = _v1;
      } || function (_v0, _v1) {
        for (var _v2 in _v1) _v1.hasOwnProperty(_v2) && (_v0[_v2] = _v1[_v2]);
      })(_v0, _v1);
    },
    _v66 = function () {
      return (_v66 = Object.assign || function (_v0) {
        for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
        return _v0;
      }).apply(this, arguments);
    },
    _v67 = {
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "absolute",
      top: 0,
      left: 0
    },
    _v68 = function (_v0) {
      function _v1() {
        this.constructor = _v2;
      }
      function _v2(_v0) {
        var _v1 = _v0.call(this, _v0) || this;
        return _v1.resizingPosition = {
          x: 0,
          y: 0
        }, _v1.offsetFromParent = {
          left: 0,
          top: 0
        }, _v1.resizableElement = {
          current: null
        }, _v1.originalPosition = {
          x: 0,
          y: 0
        }, _v1.state = {
          resizing: !1,
          bounds: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          maxWidth: _v0.maxWidth,
          maxHeight: _v0.maxHeight
        }, _v1.onResizeStart = _v1.onResizeStart.bind(_v1), _v1.onResize = _v1.onResize.bind(_v1), _v1.onResizeStop = _v1.onResizeStop.bind(_v1), _v1.onDragStart = _v1.onDragStart.bind(_v1), _v1.onDrag = _v1.onDrag.bind(_v1), _v1.onDragStop = _v1.onDragStop.bind(_v1), _v1.getMaxSizesFromProps = _v1.getMaxSizesFromProps.bind(_v1), _v1;
      }
      return _v65(_v2, _v0), _v2.prototype = null === _v0 ? Object.create(_v0) : (_v1.prototype = _v0.prototype, new _v1()), _v2.prototype.componentDidMount = function () {
        this.updateOffsetFromParent();
        var _v0 = this.offsetFromParent,
          _v1 = _v0.left,
          _v2 = _v0.top,
          _v3 = this.getDraggablePosition(),
          _v4 = _v3.x,
          _v5 = _v3.y;
        this.draggable.setState({
          x: _v4 - _v1,
          y: _v5 - _v2
        }), this.forceUpdate();
      }, _v2.prototype.getDraggablePosition = function () {
        var _v0 = this.draggable.state;
        return {
          x: _v0.x,
          y: _v0.y
        };
      }, _v2.prototype.getParent = function () {
        return this.resizable && this.resizable.parentNode;
      }, _v2.prototype.getParentSize = function () {
        return this.resizable.getParentSize();
      }, _v2.prototype.getMaxSizesFromProps = function () {
        return {
          maxWidth: void 0 === this.props.maxWidth ? Number.MAX_SAFE_INTEGER : this.props.maxWidth,
          maxHeight: void 0 === this.props.maxHeight ? Number.MAX_SAFE_INTEGER : this.props.maxHeight
        };
      }, _v2.prototype.getSelfElement = function () {
        return this.resizable && this.resizable.resizable;
      }, _v2.prototype.getOffsetHeight = function (_v0) {
        var _v1 = this.props.scale;
        switch (this.props.bounds) {
          case "window":
            return window.innerHeight / _v1;
          case "body":
            return document.body.offsetHeight / _v1;
          default:
            return _v0.offsetHeight;
        }
      }, _v2.prototype.getOffsetWidth = function (_v0) {
        var _v1 = this.props.scale;
        switch (this.props.bounds) {
          case "window":
            return window.innerWidth / _v1;
          case "body":
            return document.body.offsetWidth / _v1;
          default:
            return _v0.offsetWidth;
        }
      }, _v2.prototype.onDragStart = function (_v0, _v1) {
        if (this.props.onDragStart && !1 === this.props.onDragStart(_v0, _v1)) return !1;
        var _v2,
          _v3 = this.getDraggablePosition();
        if (this.originalPosition = _v3, this.props.bounds) {
          var _v4 = this.getParent(),
            _v5 = this.props.scale;
          if ("parent" === this.props.bounds) _v2 = _v4;else if ("body" === this.props.bounds) {
            var _v6 = _v4.getBoundingClientRect(),
              _v7 = _v6.left,
              _v8 = _v6.top,
              _v9 = document.body.getBoundingClientRect(),
              _v10 = -(_v7 - _v4.offsetLeft * _v5 - _v9.left) / _v5,
              _v11 = -(_v8 - _v4.offsetTop * _v5 - _v9.top) / _v5,
              _v12 = (document.body.offsetWidth - this.resizable.size.width * _v5) / _v5 + _v10,
              _v13 = (document.body.offsetHeight - this.resizable.size.height * _v5) / _v5 + _v11;
            return this.setState({
              bounds: {
                top: _v11,
                right: _v12,
                bottom: _v13,
                left: _v10
              }
            });
          } else if ("window" === this.props.bounds) {
            if (!this.resizable) return;
            var _v14 = _v4.getBoundingClientRect(),
              _v15 = _v14.left,
              _v16 = _v14.top,
              _v17 = -(_v15 - _v4.offsetLeft * _v5) / _v5,
              _v18 = -(_v16 - _v4.offsetTop * _v5) / _v5,
              _v12 = (window.innerWidth - this.resizable.size.width * _v5) / _v5 + _v17,
              _v13 = (window.innerHeight - this.resizable.size.height * _v5) / _v5 + _v18;
            return this.setState({
              bounds: {
                top: _v18,
                right: _v12,
                bottom: _v13,
                left: _v17
              }
            });
          } else "string" == typeof this.props.bounds ? _v2 = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (_v2 = this.props.bounds);
          if (_v2 instanceof HTMLElement && _v4 instanceof HTMLElement) {
            var _v19 = _v2.getBoundingClientRect(),
              _v20 = _v19.left,
              _v21 = _v19.top,
              _v22 = _v4.getBoundingClientRect(),
              _v23 = _v22.left,
              _v24 = _v22.top,
              _v25 = (_v20 - _v23) / _v5,
              _v26 = _v21 - _v24;
            if (this.resizable) {
              this.updateOffsetFromParent();
              var _v27 = this.offsetFromParent;
              this.setState({
                bounds: {
                  top: _v26 - _v27.top,
                  right: _v25 + (_v2.offsetWidth - this.resizable.size.width) - _v27.left / _v5,
                  bottom: _v26 + (_v2.offsetHeight - this.resizable.size.height) - _v27.top,
                  left: _v25 - _v27.left / _v5
                }
              });
            }
          }
        }
      }, _v2.prototype.onDrag = function (_v0, _v1) {
        if (this.props.onDrag) {
          var _v2 = this.offsetFromParent,
            _v3 = _v2.left,
            _v4 = _v2.top;
          if (!this.props.dragAxis || "both" === this.props.dragAxis) return this.props.onDrag(_v0, _v66(_v66({}, _v1), {
            x: _v1.x + _v3,
            y: _v1.y + _v4
          }));
          if ("x" === this.props.dragAxis) return this.props.onDrag(_v0, _v66(_v66({}, _v1), {
            x: _v1.x + _v3,
            y: this.originalPosition.y + _v4,
            deltaY: 0
          }));
          if ("y" === this.props.dragAxis) return this.props.onDrag(_v0, _v66(_v66({}, _v1), {
            x: this.originalPosition.x + _v3,
            y: _v1.y + _v4,
            deltaX: 0
          }));
        }
      }, _v2.prototype.onDragStop = function (_v0, _v1) {
        if (this.props.onDragStop) {
          var _v2 = this.offsetFromParent,
            _v3 = _v2.left,
            _v4 = _v2.top;
          if (!this.props.dragAxis || "both" === this.props.dragAxis) return this.props.onDragStop(_v0, _v66(_v66({}, _v1), {
            x: _v1.x + _v3,
            y: _v1.y + _v4
          }));
          if ("x" === this.props.dragAxis) return this.props.onDragStop(_v0, _v66(_v66({}, _v1), {
            x: _v1.x + _v3,
            y: this.originalPosition.y + _v4,
            deltaY: 0
          }));
          if ("y" === this.props.dragAxis) return this.props.onDragStop(_v0, _v66(_v66({}, _v1), {
            x: this.originalPosition.x + _v3,
            y: _v1.y + _v4,
            deltaX: 0
          }));
        }
      }, _v2.prototype.onResizeStart = function (_v0, _v1, _v2) {
        if (this.props.onResizeStart && !1 === this.props.onResizeStart(_v0, _v1, _v2)) return !1;
        _v0.stopPropagation(), this.setState({
          resizing: !0
        });
        var _v3 = this.props.scale,
          _v4 = this.offsetFromParent,
          _v5 = this.getDraggablePosition();
        if (this.resizingPosition = {
          x: _v5.x + _v4.left,
          y: _v5.y + _v4.top
        }, this.originalPosition = _v5, this.props.bounds) {
          var _v6 = this.getParent(),
            _v7 = void 0;
          "parent" === this.props.bounds ? _v7 = _v6 : "body" === this.props.bounds ? _v7 = document.body : "window" === this.props.bounds ? _v7 = window : "string" == typeof this.props.bounds ? _v7 = document.querySelector(this.props.bounds) : this.props.bounds instanceof HTMLElement && (_v7 = this.props.bounds);
          var _v8 = this.getSelfElement();
          if (_v8 instanceof Element && (_v7 instanceof HTMLElement || _v7 === window) && _v6 instanceof HTMLElement) {
            var _v9 = this.getMaxSizesFromProps(),
              _v10 = _v9.maxWidth,
              _v11 = _v9.maxHeight,
              _v12 = this.getParentSize();
            if (_v10 && "string" == typeof _v10) if (_v10.endsWith("%")) {
              var _v13 = Number(_v10.replace("%", "")) / 100;
              _v10 = _v12.width * _v13;
            } else _v10.endsWith("px") && (_v10 = Number(_v10.replace("px", "")));
            if (_v11 && "string" == typeof _v11) if (_v11.endsWith("%")) {
              var _v13 = Number(_v11.replace("%", "")) / 100;
              _v11 = _v12.height * _v13;
            } else _v11.endsWith("px") && (_v11 = Number(_v11.replace("px", "")));
            var _v14 = _v8.getBoundingClientRect(),
              _v15 = _v14.left,
              _v16 = _v14.top,
              _v17 = "window" === this.props.bounds ? {
                left: 0,
                top: 0
              } : _v7.getBoundingClientRect(),
              _v18 = _v17.left,
              _v19 = _v17.top,
              _v20 = this.getOffsetWidth(_v7),
              _v21 = this.getOffsetHeight(_v7),
              _v22 = _v1.toLowerCase().endsWith("left"),
              _v23 = _v1.toLowerCase().endsWith("right"),
              _v24 = _v1.startsWith("top"),
              _v25 = _v1.startsWith("bottom");
            if ((_v22 || _v24) && this.resizable) {
              var _v26 = (_v15 - _v18) / _v3 + this.resizable.size.width;
              this.setState({
                maxWidth: _v26 > Number(_v10) ? _v10 : _v26
              });
            }
            if (_v23 || this.props.lockAspectRatio && !_v22 && !_v24) {
              var _v26 = _v20 + (_v18 - _v15) / _v3;
              this.setState({
                maxWidth: _v26 > Number(_v10) ? _v10 : _v26
              });
            }
            if ((_v24 || _v22) && this.resizable) {
              var _v26 = (_v16 - _v19) / _v3 + this.resizable.size.height;
              this.setState({
                maxHeight: _v26 > Number(_v11) ? _v11 : _v26
              });
            }
            if (_v25 || this.props.lockAspectRatio && !_v24 && !_v22) {
              var _v26 = _v21 + (_v19 - _v16) / _v3;
              this.setState({
                maxHeight: _v26 > Number(_v11) ? _v11 : _v26
              });
            }
          }
        } else this.setState({
          maxWidth: this.props.maxWidth,
          maxHeight: this.props.maxHeight
        });
      }, _v2.prototype.onResize = function (_v0, _v1, _v2, _v3) {
        var _v4 = this,
          _v5 = {
            x: this.originalPosition.x,
            y: this.originalPosition.y
          },
          _v6 = -_v3.width,
          _v7 = -_v3.height;
        ["top", "left", "topLeft", "bottomLeft", "topRight"].includes(_v1) && ("bottomLeft" === _v1 ? _v5.x += _v6 : ("topRight" === _v1 || (_v5.x += _v6), _v5.y += _v7));
        var _v8 = this.draggable.state;
        (_v5.x !== _v8.x || _v5.y !== _v8.y) && (0, _v45.flushSync)(function () {
          _v4.draggable.setState(_v5);
        }), this.updateOffsetFromParent();
        var _v9 = this.offsetFromParent,
          _v10 = this.getDraggablePosition().x + _v9.left,
          _v11 = this.getDraggablePosition().y + _v9.top;
        this.resizingPosition = {
          x: _v10,
          y: _v11
        }, this.props.onResize && this.props.onResize(_v0, _v1, _v2, _v3, {
          x: _v10,
          y: _v11
        });
      }, _v2.prototype.onResizeStop = function (_v0, _v1, _v2, _v3) {
        this.setState({
          resizing: !1
        });
        var _v4 = this.getMaxSizesFromProps(),
          _v5 = _v4.maxWidth,
          _v6 = _v4.maxHeight;
        this.setState({
          maxWidth: _v5,
          maxHeight: _v6
        }), this.props.onResizeStop && this.props.onResizeStop(_v0, _v1, _v2, _v3, this.resizingPosition);
      }, _v2.prototype.updateSize = function (_v0) {
        this.resizable && this.resizable.updateSize({
          width: _v0.width,
          height: _v0.height
        });
      }, _v2.prototype.updatePosition = function (_v0) {
        this.draggable.setState(_v0);
      }, _v2.prototype.updateOffsetFromParent = function () {
        var _v0 = this.props.scale,
          _v1 = this.getParent(),
          _v2 = this.getSelfElement();
        if (!_v1 || null === _v2) return {
          top: 0,
          left: 0
        };
        var _v3 = _v1.getBoundingClientRect(),
          _v4 = _v3.left,
          _v5 = _v3.top,
          _v6 = _v2.getBoundingClientRect(),
          _v7 = this.getDraggablePosition(),
          _v8 = _v1.scrollLeft,
          _v9 = _v1.scrollTop;
        this.offsetFromParent = {
          left: _v6.left - _v4 + _v8 - _v7.x * _v0,
          top: _v6.top - _v5 + _v9 - _v7.y * _v0
        };
      }, _v2.prototype.render = function () {
        var _v0,
          _v1 = this,
          _v2 = this.props,
          _v3 = _v2.disableDragging,
          _v4 = _v2.style,
          _v5 = _v2.dragHandleClassName,
          _v6 = _v2.position,
          _v7 = _v2.onMouseDown,
          _v8 = _v2.onMouseUp,
          _v9 = _v2.dragAxis,
          _v10 = _v2.dragGrid,
          _v11 = _v2.bounds,
          _v12 = _v2.enableUserSelectHack,
          _v13 = _v2.cancel,
          _v14 = _v2.children,
          _v15 = (_v2.onResizeStart, _v2.onResize, _v2.onResizeStop, _v2.onDragStart, _v2.onDrag, _v2.onDragStop, _v2.resizeHandleStyles),
          _v16 = _v2.resizeHandleClasses,
          _v17 = _v2.resizeHandleComponent,
          _v18 = _v2.enableResizing,
          _v19 = _v2.resizeGrid,
          _v20 = _v2.resizeHandleWrapperClass,
          _v21 = _v2.resizeHandleWrapperStyle,
          _v22 = _v2.scale,
          _v23 = _v2.allowAnyClick,
          _v24 = _v2.dragPositionOffset,
          _v25 = function (_v0, _v1) {
            var _v2 = {};
            for (var _v3 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v3) && 0 > _v1.indexOf(_v3) && (_v2[_v3] = _v0[_v3]);
            if (null != _v0 && "function" == typeof Object.getOwnPropertySymbols) for (var _v4 = 0, _v3 = Object.getOwnPropertySymbols(_v0); _v4 < _v3.length; _v4++) 0 > _v1.indexOf(_v3[_v4]) && Object.prototype.propertyIsEnumerable.call(_v0, _v3[_v4]) && (_v2[_v3[_v4]] = _v0[_v3[_v4]]);
            return _v2;
          }(_v2, ["disableDragging", "style", "dragHandleClassName", "position", "onMouseDown", "onMouseUp", "dragAxis", "dragGrid", "bounds", "enableUserSelectHack", "cancel", "children", "onResizeStart", "onResize", "onResizeStop", "onDragStart", "onDrag", "onDragStop", "resizeHandleStyles", "resizeHandleClasses", "resizeHandleComponent", "enableResizing", "resizeGrid", "resizeHandleWrapperClass", "resizeHandleWrapperStyle", "scale", "allowAnyClick", "dragPositionOffset"]),
          _v26 = this.props.default ? _v66({}, this.props.default) : void 0;
        delete _v25.default;
        var _v27 = _v66(_v66(_v66({}, _v67), _v3 || _v5 ? {
            cursor: "auto"
          } : {
            cursor: "move"
          }), _v4),
          _v28 = this.offsetFromParent,
          _v29 = _v28.left,
          _v30 = _v28.top;
        _v6 && (_v0 = {
          x: _v6.x - _v29,
          y: _v6.y - _v30
        });
        var _v31 = this.state.resizing ? void 0 : _v0,
          _v32 = this.state.resizing ? "both" : _v9;
        return (0, _v19.createElement)(_v44.default, {
          ref: function (_v0) {
            _v0 && (_v1.draggable = _v0);
          },
          handle: _v5 ? ".".concat(_v5) : void 0,
          defaultPosition: _v26,
          onMouseDown: _v7,
          onMouseUp: _v8,
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop,
          axis: _v32,
          disabled: _v3,
          grid: _v10,
          bounds: _v11 ? this.state.bounds : void 0,
          position: _v31,
          enableUserSelectHack: _v12,
          cancel: _v13,
          scale: _v22,
          allowAnyClick: _v23,
          nodeRef: this.resizableElement,
          positionOffset: _v24
        }, (0, _v19.createElement)(_v64, _v66({}, _v25, {
          ref: function (_v0) {
            _v0 && (_v1.resizable = _v0, _v1.resizableElement.current = _v0.resizable);
          },
          defaultSize: _v26,
          size: this.props.size,
          enable: "boolean" == typeof _v18 ? {
            bottom: _v18,
            bottomLeft: _v18,
            bottomRight: _v18,
            left: _v18,
            right: _v18,
            top: _v18,
            topLeft: _v18,
            topRight: _v18
          } : _v18,
          onResizeStart: this.onResizeStart,
          onResize: this.onResize,
          onResizeStop: this.onResizeStop,
          style: _v27,
          minWidth: this.props.minWidth,
          minHeight: this.props.minHeight,
          maxWidth: this.state.resizing ? this.state.maxWidth : this.props.maxWidth,
          maxHeight: this.state.resizing ? this.state.maxHeight : this.props.maxHeight,
          grid: _v19,
          handleWrapperClass: _v20,
          handleWrapperStyle: _v21,
          lockAspectRatio: this.props.lockAspectRatio,
          lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth,
          lockAspectRatioExtraHeight: this.props.lockAspectRatioExtraHeight,
          handleStyles: _v15,
          handleClasses: _v16,
          handleComponent: _v17,
          scale: this.props.scale
        }), _v14));
      }, _v2.defaultProps = {
        maxWidth: Number.MAX_SAFE_INTEGER,
        maxHeight: Number.MAX_SAFE_INTEGER,
        scale: 1,
        onResizeStart: function () {},
        onResize: function () {},
        onResizeStop: function () {},
        onDragStart: function () {},
        onDrag: function () {},
        onDragStop: function () {}
      }, _v2;
    }(_v19.PureComponent),
    _v69 = _v0.i(0);
  function _v70(_v0, _v1) {
    return {
      width: Math.max(_v0 * window.innerWidth, 480),
      height: Math.max(_v1 * window.innerHeight, 240)
    };
  }
  let _v71 = "teleprompter-drag-anchor",
    _v72 = {
      position: "fixed",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 990,
      pointerEvents: "none"
    },
    _v73 = {
      pointerEvents: "auto"
    },
    _v74 = {
      right: {
        width: "8px",
        right: "-5px"
      }
    },
    _v75 = ({
      children: _v0
    }) => {
      let _v1,
        _v2,
        _v3,
        {
          trackUserInteractionEvent: _v4
        } = _v35(),
        {
          width: _v5,
          height: _v6,
          positionX: _v7,
          positionY: _v8,
          updateBoundaries: _v9
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          width: _v0.persistentData.width,
          height: _v0.persistentData.height,
          positionX: _v0.persistentData.positionX,
          positionY: _v0.persistentData.positionY,
          updateBoundaries: _v0.updateBoundaries
        }))),
        _v10 = function () {
          let [_v0, _v1] = (0, _v19.useState)({
            width: window.innerWidth,
            height: window.innerHeight
          });
          return (0, _v19.useLayoutEffect)(() => {
            let _v0 = () => {
              _v1({
                width: window.innerWidth,
                height: window.innerHeight
              });
            };
            return window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
          }, []), _v0;
        }(),
        [_v11, _v12] = (0, _v19.useState)(() => _v70(_v5, _v6)),
        [_v13, _v14] = (0, _v19.useState)(() => (0, _v69.positionFromPercentage)(_v7, _v8, _v11.width, _v11.height)),
        _v15 = (0, _v19.useRef)(void 0),
        {
          showPopOver: _v16,
          temporaryHidePopOver: _v17
        } = (_v1 = (0, _v19.useRef)(!1), _v2 = (0, _v40.useTeleprompterStore)(_v0 => _v0.isPopOverVisible), _v3 = (0, _v40.useTeleprompterStore)(_v0 => _v0.setIsPopOverVisible), {
          showPopOver: () => {
            _v1.current && (_v1.current = !1, _v3(!0));
          },
          temporaryHidePopOver: () => {
            _v2 && (_v1.current = !0, _v3(!1));
          }
        });
      (0, _v19.useEffect)(() => {
        let _v0 = _v70(_v5, _v6);
        _v12(_v0), _v14((0, _v69.positionFromPercentage)(_v7, _v8, _v0.width, _v0.height));
      }, [_v6, _v7, _v8, _v5, _v10]), (0, _v19.useEffect)(() => {
        _v4({
          name: "teleprompter",
          eventType: "view",
          location: "teleprompter"
        });
      }, [_v4]);
      let _v18 = (0, _v19.useCallback)((_v0, {
          x: _v1,
          y: _v2
        }) => {
          _v15.current = {
            x: _v1,
            y: _v2
          }, _v17();
        }, [_v17]),
        _v19 = (0, _v19.useCallback)((_v0, {
          x: _v1,
          y: _v2,
          node: _v3
        }) => {
          if (_v15.current) {
            if (Math.floor(_v1) !== Math.floor(_v15.current.x) || Math.floor(_v2) !== Math.floor(_v15.current.y)) {
              _v16(), _v14({
                x: _v1,
                y: _v2
              });
              let {
                x: _v0,
                y: _v1
              } = (0, _v69.positionToPercentage)(_v1, _v2, _v3.clientWidth, _v3.clientHeight);
              _v9({
                positionX: _v0,
                positionY: _v1
              }), _v4({
                name: "move_teleprompter",
                eventType: "drag_and_drop",
                location: "teleprompter"
              });
            }
            _v15.current = void 0;
          }
        }, [_v16, _v4, _v9]),
        _v20 = (0, _v19.useCallback)((_v0, _v1, _v2, _v3, {
          x: _v4,
          y: _v5
        }) => {
          if (0 !== _v3.width || 0 !== _v3.height) {
            var _v6, _v7;
            _v14({
              x: _v4,
              y: _v5
            }), _v12({
              width: _v2.clientWidth,
              height: _v2.clientHeight
            });
            let {
              x: _v0,
              y: _v1
            } = (0, _v69.positionToPercentage)(_v4, _v5, _v2.clientWidth, _v2.clientHeight);
            _v9({
              positionX: _v0,
              positionY: _v1,
              ...(_v6 = _v2.clientWidth, _v7 = _v2.clientHeight, {
                width: _v6 / window.innerWidth,
                height: _v7 / window.innerHeight
              })
            }), _v4({
              name: "resize_teleprompter",
              eventType: "drag_and_drop",
              location: "teleprompter"
            });
          }
          _v16();
        }, [_v16, _v4, _v9]),
        _v21 = (0, _v19.useCallback)(() => {
          _v17();
        }, [_v17]);
      return (0, _v18.jsx)("div", {
        style: _v72,
        children: (0, _v18.jsx)(_v68, {
          style: _v73,
          resizeHandleStyles: _v74,
          bounds: "parent",
          position: _v13,
          size: _v11,
          minWidth: 480,
          minHeight: 240,
          dragHandleClassName: _v71,
          onDragStart: _v18,
          onDragStop: _v19,
          onResizeStop: _v20,
          onResizeStart: _v21,
          children: _v0
        })
      });
    };
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = window.navigator.userAgent.indexOf("Safari") > -1 && -1 === window.navigator.userAgent.indexOf("Chrome"),
    _v79 = (_v0, _v1, _v2) => Math.abs(_v0 - _v1) <= _v2;
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  let _v87 = _v84.Extension.create({
    name: "placeholder",
    addOptions: () => ({
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    }),
    addProseMirrorPlugins() {
      return [new _v85.Plugin({
        key: new _v85.PluginKey("placeholder"),
        props: {
          decorations: ({
            doc: _v0,
            selection: _v1
          }) => {
            let _v2 = this.editor.isEditable || !this.options.showOnlyWhenEditable,
              {
                anchor: _v3
              } = _v1,
              _v4 = [];
            if (!_v2) return null;
            let _v5 = this.editor.isEmpty;
            return _v0.descendants((_v0, _v1) => {
              let _v2 = _v3 >= _v1 && _v3 <= _v1 + _v0.nodeSize,
                _v3 = !_v0.isLeaf && (0, _v84.isNodeEmpty)(_v0);
              if ((_v2 || !this.options.showOnlyCurrent) && _v3) {
                let _v0 = [this.options.emptyNodeClass];
                _v5 && _v0.push(this.options.emptyEditorClass);
                let _v1 = _v86.Decoration.node(_v1, _v1 + _v0.nodeSize, {
                  class: _v0.join(" "),
                  "data-placeholder": "function" == typeof this.options.placeholder ? this.options.placeholder({
                    editor: this.editor,
                    node: _v0,
                    pos: _v1,
                    hasAnchor: _v2
                  }) : this.options.placeholder
                });
                _v4.push(_v1);
              }
              return this.options.includeChildren;
            }), _v86.DecorationSet.create(_v0, _v4);
          }
        }
      })];
    }
  });
  var _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  let _v91 = {};
  function _v92(_v0, _v1) {
    "string" != typeof _v1 && (_v1 = _v92.defaultChars);
    let _v2 = function (_v0) {
      let _v1 = _v91[_v0];
      if (_v1) return _v1;
      _v1 = _v91[_v0] = [];
      for (let _v0 = 0; _v0 < 128; _v0++) {
        let _v0 = String.fromCharCode(_v0);
        _v1.push(_v0);
      }
      for (let _v0 = 0; _v0 < _v0.length; _v0++) {
        let _v0 = _v0.charCodeAt(_v0);
        _v1[_v0] = "%" + ("0" + _v0.toString(16).toUpperCase()).slice(-2);
      }
      return _v1;
    }(_v1);
    return _v0.replace(/(%[a-f0-9]{2})+/gi, function (_v0) {
      let _v1 = "";
      for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0 += 3) {
        let _v0 = parseInt(_v0.slice(_v0 + 1, _v0 + 3), 16);
        if (_v0 < 128) {
          _v1 += _v2[_v0];
          continue;
        }
        if ((224 & _v0) == 192 && _v0 + 3 < _v1) {
          let _v0 = parseInt(_v0.slice(_v0 + 4, _v0 + 6), 16);
          if ((192 & _v0) == 128) {
            let _v0 = _v0 << 6 & 0 | 63 & _v0;
            _v0 < 128 ? _v1 += "��" : _v1 += String.fromCharCode(_v0), _v0 += 3;
            continue;
          }
        }
        if ((240 & _v0) == 224 && _v0 + 6 < _v1) {
          let _v0 = parseInt(_v0.slice(_v0 + 4, _v0 + 6), 16),
            _v1 = parseInt(_v0.slice(_v0 + 7, _v0 + 9), 16);
          if ((192 & _v0) == 128 && (192 & _v1) == 128) {
            let _v0 = _v0 << 12 & 0 | _v0 << 6 & 0 | 63 & _v1;
            _v0 < 0 || _v0 >= 0 && _v0 <= 0 ? _v1 += "���" : _v1 += String.fromCharCode(_v0), _v0 += 6;
            continue;
          }
        }
        if ((248 & _v0) == 240 && _v0 + 9 < _v1) {
          let _v0 = parseInt(_v0.slice(_v0 + 4, _v0 + 6), 16),
            _v1 = parseInt(_v0.slice(_v0 + 7, _v0 + 9), 16),
            _v2 = parseInt(_v0.slice(_v0 + 10, _v0 + 12), 16);
          if ((192 & _v0) == 128 && (192 & _v1) == 128 && (192 & _v2) == 128) {
            let _v0 = _v0 << 18 & 0 | _v0 << 12 & 0 | _v1 << 6 & 0 | 63 & _v2;
            _v0 < 0 || _v0 > 0 ? _v1 += "����" : (_v0 -= 0, _v1 += String.fromCharCode(0 + (_v0 >> 10), 0 + (0 & _v0))), _v0 += 9;
            continue;
          }
        }
        _v1 += "�";
      }
      return _v1;
    });
  }
  _v92.defaultChars = ";/?:@&=+$,#", _v92.componentChars = "";
  let _v93 = {};
  function _v94(_v0, _v1, _v2) {
    "string" != typeof _v1 && (_v2 = _v1, _v1 = _v94.defaultChars), void 0 === _v2 && (_v2 = !0);
    let _v3 = function (_v0) {
        let _v1 = _v93[_v0];
        if (_v1) return _v1;
        _v1 = _v93[_v0] = [];
        for (let _v0 = 0; _v0 < 128; _v0++) {
          let _v0 = String.fromCharCode(_v0);
          /^[0-9a-z]$/i.test(_v0) ? _v1.push(_v0) : _v1.push("%" + ("0" + _v0.toString(16).toUpperCase()).slice(-2));
        }
        for (let _v0 = 0; _v0 < _v0.length; _v0++) _v1[_v0.charCodeAt(_v0)] = _v0[_v0];
        return _v1;
      }(_v1),
      _v4 = "";
    for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
      let _v0 = _v0.charCodeAt(_v0);
      if (_v2 && 37 === _v0 && _v0 + 2 < _v1 && /^[0-9a-f]{2}$/i.test(_v0.slice(_v0 + 1, _v0 + 3))) {
        _v4 += _v0.slice(_v0, _v0 + 3), _v0 += 2;
        continue;
      }
      if (_v0 < 128) {
        _v4 += _v3[_v0];
        continue;
      }
      if (_v0 >= 0 && _v0 <= 0) {
        if (_v0 >= 0 && _v0 <= 0 && _v0 + 1 < _v1) {
          let _v0 = _v0.charCodeAt(_v0 + 1);
          if (_v0 >= 0 && _v0 <= 0) {
            _v4 += encodeURIComponent(_v0[_v0] + _v0[_v0 + 1]), _v0++;
            continue;
          }
        }
        _v4 += "%EF%BF%BD";
        continue;
      }
      _v4 += encodeURIComponent(_v0[_v0]);
    }
    return _v4;
  }
  function _v95(_v0) {
    let _v1 = "";
    return _v1 += _v0.protocol || "", _v1 += _v0.slashes ? "//" : "", _v1 += _v0.auth ? _v0.auth + "@" : "", _v0.hostname && -1 !== _v0.hostname.indexOf(":") ? _v1 += "[" + _v0.hostname + "]" : _v1 += _v0.hostname || "", _v1 += _v0.port ? ":" + _v0.port : "", _v1 += _v0.pathname || "", _v1 += _v0.search || "", _v1 += _v0.hash || "";
  }
  function _v96() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
  }
  _v94.defaultChars = ";/?:@&=+$,-_.!~*'()#", _v94.componentChars = "-_.!~*'()";
  let _v97 = /^([a-z0-9.+-]+:)/i,
    _v98 = /:[0-9]*$/,
    _v99 = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
    _v100 = ["%", "/", "?", ";", "#"].concat(["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"]))),
    _v101 = ["/", "?", "#"],
    _v102 = /^[+a-z0-9A-Z_-]{0,63}$/,
    _v103 = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    _v104 = {
      javascript: !0,
      "javascript:": !0
    },
    _v105 = {
      http: !0,
      https: !0,
      ftp: !0,
      gopher: !0,
      file: !0,
      "http:": !0,
      "https:": !0,
      "ftp:": !0,
      "gopher:": !0,
      "file:": !0
    };
  _v96.prototype.parse = function (_v0, _v1) {
    let _v2,
      _v3,
      _v4,
      _v5 = _v0;
    if (_v5 = _v5.trim(), !_v1 && 1 === _v0.split("#").length) {
      let _v0 = _v99.exec(_v5);
      if (_v0) return this.pathname = _v0[1], _v0[2] && (this.search = _v0[2]), this;
    }
    let _v6 = _v97.exec(_v5);
    if (_v6 && (_v2 = (_v6 = _v6[0]).toLowerCase(), this.protocol = _v6, _v5 = _v5.substr(_v6.length)), (_v1 || _v6 || _v5.match(/^\/\/[^@\/]+@[^@\/]+/)) && (_v4 = "//" === _v5.substr(0, 2)) && !(_v6 && _v104[_v6]) && (_v5 = _v5.substr(2), this.slashes = !0), !_v104[_v6] && (_v4 || _v6 && !_v105[_v6])) {
      let _v0,
        _v1,
        _v2 = -1;
      for (let _v0 = 0; _v0 < _v101.length; _v0++) -1 !== (_v3 = _v5.indexOf(_v101[_v0])) && (-1 === _v2 || _v3 < _v2) && (_v2 = _v3);
      -1 !== (_v1 = -1 === _v2 ? _v5.lastIndexOf("@") : _v5.lastIndexOf("@", _v2)) && (_v0 = _v5.slice(0, _v1), _v5 = _v5.slice(_v1 + 1), this.auth = _v0), _v2 = -1;
      for (let _v0 = 0; _v0 < _v100.length; _v0++) -1 !== (_v3 = _v5.indexOf(_v100[_v0])) && (-1 === _v2 || _v3 < _v2) && (_v2 = _v3);
      -1 === _v2 && (_v2 = _v5.length), ":" === _v5[_v2 - 1] && _v2--;
      let _v3 = _v5.slice(0, _v2);
      _v5 = _v5.slice(_v2), this.parseHost(_v3), this.hostname = this.hostname || "";
      let _v4 = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
      if (!_v4) {
        let _v0 = this.hostname.split(/\./);
        for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
          let _v0 = _v0[_v0];
          if (_v0 && !_v0.match(_v102)) {
            let _v0 = "";
            for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v0.charCodeAt(_v0) > 127 ? _v0 += "x" : _v0 += _v0[_v0];
            if (!_v0.match(_v102)) {
              let _v0 = _v0.slice(0, _v0),
                _v1 = _v0.slice(_v0 + 1),
                _v2 = _v0.match(_v103);
              _v2 && (_v0.push(_v2[1]), _v1.unshift(_v2[2])), _v1.length && (_v5 = _v1.join(".") + _v5), this.hostname = _v0.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > 255 && (this.hostname = ""), _v4 && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    let _v7 = _v5.indexOf("#");
    -1 !== _v7 && (this.hash = _v5.substr(_v7), _v5 = _v5.slice(0, _v7));
    let _v8 = _v5.indexOf("?");
    return -1 !== _v8 && (this.search = _v5.substr(_v8), _v5 = _v5.slice(0, _v8)), _v5 && (this.pathname = _v5), _v105[_v2] && this.hostname && !this.pathname && (this.pathname = ""), this;
  }, _v96.prototype.parseHost = function (_v0) {
    let _v1 = _v98.exec(_v0);
    _v1 && (":" !== (_v1 = _v1[0]) && (this.port = _v1.substr(1)), _v0 = _v0.substr(0, _v0.length - _v1.length)), _v0 && (this.hostname = _v0);
  };
  let _v106 = function (_v0, _v1) {
    if (_v0 && _v0 instanceof _v96) return _v0;
    let _v2 = new _v96();
    return _v2.parse(_v0, _v1), _v2;
  };
  _v0.s([], 0), _v0.i(0), _v0.s(["decode", 0, _v92, "encode", 0, _v94, "format", 0, _v95, "parse", 0, _v106], 0);
  var _v107 = _v0.i(0);
  let _v108 = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    _v109 = /[\0-\x1F\x7F-\x9F]/,
    _v110 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,
    _v111 = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,
    _v112 = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  _v0.s([], 0), _v0.i(0), _v0.s(["Any", 0, _v108, "Cc", 0, _v109, "Cf", 0, /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, "P", 0, _v110, "S", 0, _v111, "Z", 0, _v112], 0);
  var _v113 = _v0.i(0);
  let _v114 = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(_v0 => _v0.charCodeAt(0))),
    _v115 = new Uint16Array("Ȁaglq	\x15\x18\x1bɭ\x0f\0\0\x12p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(_v0 => _v0.charCodeAt(0))),
    _v116 = new Map([[0, 0], [128, 0], [130, 0], [131, 402], [132, 0], [133, 0], [134, 0], [135, 0], [136, 710], [137, 0], [138, 352], [139, 0], [140, 338], [142, 381], [145, 0], [146, 0], [147, 0], [148, 0], [149, 0], [150, 0], [151, 0], [152, 732], [153, 0], [154, 353], [155, 0], [156, 339], [158, 382], [159, 376]]),
    _v117 = null != (_v11 = String.fromCodePoint) ? _v11 : function (_v0) {
      let _v1 = "";
      return _v0 > 0 && (_v0 -= 0, _v1 += String.fromCharCode(_v0 >>> 10 & 0 | 0), _v0 = 0 | 0 & _v0), _v1 += String.fromCharCode(_v0);
    };
  function _v118(_v0) {
    return _v0 >= _v12.ZERO && _v0 <= _v12.NINE;
  }
  (_v5 = _v12 || (_v12 = {}))[_v5.NUM = 35] = "NUM", _v5[_v5.SEMI = 59] = "SEMI", _v5[_v5.EQUALS = 61] = "EQUALS", _v5[_v5.ZERO = 48] = "ZERO", _v5[_v5.NINE = 57] = "NINE", _v5[_v5.LOWER_A = 97] = "LOWER_A", _v5[_v5.LOWER_F = 102] = "LOWER_F", _v5[_v5.LOWER_X = 120] = "LOWER_X", _v5[_v5.LOWER_Z = 122] = "LOWER_Z", _v5[_v5.UPPER_A = 65] = "UPPER_A", _v5[_v5.UPPER_F = 70] = "UPPER_F", _v5[_v5.UPPER_Z = 90] = "UPPER_Z", (_v6 = _v13 || (_v13 = {}))[_v6.VALUE_LENGTH = 0] = "VALUE_LENGTH", _v6[_v6.BRANCH_LENGTH = 0] = "BRANCH_LENGTH", _v6[_v6.JUMP_TABLE = 127] = "JUMP_TABLE", (_v7 = _v14 || (_v14 = {}))[_v7.EntityStart = 0] = "EntityStart", _v7[_v7.NumericStart = 1] = "NumericStart", _v7[_v7.NumericDecimal = 2] = "NumericDecimal", _v7[_v7.NumericHex = 3] = "NumericHex", _v7[_v7.NamedEntity = 4] = "NamedEntity", (_v8 = _v15 || (_v15 = {}))[_v8.Legacy = 0] = "Legacy", _v8[_v8.Strict = 1] = "Strict", _v8[_v8.Attribute = 2] = "Attribute";
  class _v119 {
    constructor(_v0, _v1, _v2) {
      this.decodeTree = _v0, this.emitCodePoint = _v1, this.errors = _v2, this.state = _v14.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = _v15.Strict;
    }
    startEntity(_v0) {
      this.decodeMode = _v0, this.state = _v14.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
    }
    write(_v0, _v1) {
      switch (this.state) {
        case _v14.EntityStart:
          if (_v0.charCodeAt(_v1) === _v12.NUM) return this.state = _v14.NumericStart, this.consumed += 1, this.stateNumericStart(_v0, _v1 + 1);
          return this.state = _v14.NamedEntity, this.stateNamedEntity(_v0, _v1);
        case _v14.NumericStart:
          return this.stateNumericStart(_v0, _v1);
        case _v14.NumericDecimal:
          return this.stateNumericDecimal(_v0, _v1);
        case _v14.NumericHex:
          return this.stateNumericHex(_v0, _v1);
        case _v14.NamedEntity:
          return this.stateNamedEntity(_v0, _v1);
      }
    }
    stateNumericStart(_v0, _v1) {
      return _v1 >= _v0.length ? -1 : (32 | _v0.charCodeAt(_v1)) === _v12.LOWER_X ? (this.state = _v14.NumericHex, this.consumed += 1, this.stateNumericHex(_v0, _v1 + 1)) : (this.state = _v14.NumericDecimal, this.stateNumericDecimal(_v0, _v1));
    }
    addToNumericResult(_v0, _v1, _v2, _v3) {
      if (_v1 !== _v2) {
        let _v0 = _v2 - _v1;
        this.result = this.result * Math.pow(_v3, _v0) + parseInt(_v0.substr(_v1, _v0), _v3), this.consumed += _v0;
      }
    }
    stateNumericHex(_v0, _v1) {
      let _v2 = _v1;
      for (; _v1 < _v0.length;) {
        var _v3;
        let _v0 = _v0.charCodeAt(_v1);
        if (!_v118(_v0) && (!((_v3 = _v0) >= _v12.UPPER_A) || !(_v3 <= _v12.UPPER_F)) && (!(_v3 >= _v12.LOWER_A) || !(_v3 <= _v12.LOWER_F))) return this.addToNumericResult(_v0, _v2, _v1, 16), this.emitNumericEntity(_v0, 3);
        _v1 += 1;
      }
      return this.addToNumericResult(_v0, _v2, _v1, 16), -1;
    }
    stateNumericDecimal(_v0, _v1) {
      let _v2 = _v1;
      for (; _v1 < _v0.length;) {
        let _v0 = _v0.charCodeAt(_v1);
        if (!_v118(_v0)) return this.addToNumericResult(_v0, _v2, _v1, 10), this.emitNumericEntity(_v0, 2);
        _v1 += 1;
      }
      return this.addToNumericResult(_v0, _v2, _v1, 10), -1;
    }
    emitNumericEntity(_v0, _v1) {
      var _v2, _v3, _v4;
      if (this.consumed <= _v1) return null == (_v2 = this.errors) || _v2.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      if (_v0 === _v12.SEMI) this.consumed += 1;else if (this.decodeMode === _v15.Strict) return 0;
      return this.emitCodePoint((_v3 = this.result) >= 0 && _v3 <= 0 || _v3 > 0 ? 0 : null != (_v4 = _v116.get(_v3)) ? _v4 : _v3, this.consumed), this.errors && (_v0 !== _v12.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
    }
    stateNamedEntity(_v0, _v1) {
      let {
          decodeTree: _v2
        } = this,
        _v3 = _v2[this.treeIndex],
        _v4 = (_v3 & _v13.VALUE_LENGTH) >> 14;
      for (; _v1 < _v0.length; _v1++, this.excess++) {
        let _v0 = _v0.charCodeAt(_v1);
        if (this.treeIndex = function (_v0, _v1, _v2, _v3) {
          let _v4 = (_v1 & _v13.BRANCH_LENGTH) >> 7,
            _v5 = _v1 & _v13.JUMP_TABLE;
          if (0 === _v4) return 0 !== _v5 && _v3 === _v5 ? _v2 : -1;
          if (_v5) {
            let _v0 = _v3 - _v5;
            return _v0 < 0 || _v0 >= _v4 ? -1 : _v0[_v2 + _v0] - 1;
          }
          let _v6 = _v2,
            _v7 = _v6 + _v4 - 1;
          for (; _v6 <= _v7;) {
            let _v0 = _v6 + _v7 >>> 1,
              _v1 = _v0[_v0];
            if (_v1 < _v3) _v6 = _v0 + 1;else {
              if (!(_v1 > _v3)) return _v0[_v0 + _v4];
              _v7 = _v0 - 1;
            }
          }
          return -1;
        }(_v2, _v3, this.treeIndex + Math.max(1, _v4), _v0), this.treeIndex < 0) return 0 === this.result || this.decodeMode === _v15.Attribute && (0 === _v4 || function (_v0) {
          var _v1;
          return _v0 === _v12.EQUALS || (_v1 = _v0) >= _v12.UPPER_A && _v1 <= _v12.UPPER_Z || _v1 >= _v12.LOWER_A && _v1 <= _v12.LOWER_Z || _v118(_v1);
        }(_v0)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (0 != (_v4 = ((_v3 = _v2[this.treeIndex]) & _v13.VALUE_LENGTH) >> 14)) {
          if (_v0 === _v12.SEMI) return this.emitNamedEntityData(this.treeIndex, _v4, this.consumed + this.excess);
          this.decodeMode !== _v15.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
      }
      return -1;
    }
    emitNotTerminatedNamedEntity() {
      var _v0;
      let {
          result: _v1,
          decodeTree: _v2
        } = this,
        _v3 = (_v2[_v1] & _v13.VALUE_LENGTH) >> 14;
      return this.emitNamedEntityData(_v1, _v3, this.consumed), null == (_v0 = this.errors) || _v0.missingSemicolonAfterCharacterReference(), this.consumed;
    }
    emitNamedEntityData(_v0, _v1, _v2) {
      let {
        decodeTree: _v3
      } = this;
      return this.emitCodePoint(1 === _v1 ? _v3[_v0] & ~_v13.VALUE_LENGTH : _v3[_v0 + 1], _v2), 3 === _v1 && this.emitCodePoint(_v3[_v0 + 2], _v2), _v2;
    }
    end() {
      var _v0;
      switch (this.state) {
        case _v14.NamedEntity:
          return 0 !== this.result && (this.decodeMode !== _v15.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case _v14.NumericDecimal:
          return this.emitNumericEntity(0, 2);
        case _v14.NumericHex:
          return this.emitNumericEntity(0, 3);
        case _v14.NumericStart:
          return null == (_v0 = this.errors) || _v0.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case _v14.EntityStart:
          return 0;
      }
    }
  }
  function _v120(_v0) {
    let _v1 = "",
      _v2 = new _v119(_v0, _v0 => _v1 += _v117(_v0));
    return function (_v0, _v1) {
      let _v2 = 0,
        _v3 = 0;
      for (; (_v3 = _v0.indexOf("&", _v3)) >= 0;) {
        _v1 += _v0.slice(_v2, _v3), _v2.startEntity(_v1);
        let _v0 = _v2.write(_v0, _v3 + 1);
        if (_v0 < 0) {
          _v2 = _v3 + _v2.end();
          break;
        }
        _v2 = _v3 + _v0, _v3 = 0 === _v0 ? _v2 + 1 : _v2;
      }
      let _v4 = _v1 + _v0.slice(_v2);
      return _v1 = "", _v4;
    };
  }
  let _v121 = _v120(_v114);
  function _v122(_v0, _v1 = _v15.Legacy) {
    return _v121(_v0, _v1);
  }
  _v120(_v115);
  let _v123 = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]);
  function _v124(_v0, _v1) {
    return function (_v0) {
      let _v1,
        _v2 = 0,
        _v3 = "";
      for (; _v1 = _v0.exec(_v0);) _v2 !== _v1.index && (_v3 += _v0.substring(_v2, _v1.index)), _v3 += _v1.get(_v1[0].charCodeAt(0)), _v2 = _v1.index + 1;
      return _v3 + _v0.substring(_v2);
    };
  }
  String.prototype.codePointAt, _v124(/[&<>'"]/g, _v123), _v124(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), _v124(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]])), (_v9 = _v16 || (_v16 = {}))[_v9.XML = 0] = "XML", _v9[_v9.HTML = 1] = "HTML", (_v10 = _v17 || (_v17 = {}))[_v10.UTF8 = 0] = "UTF8", _v10[_v10.ASCII = 1] = "ASCII", _v10[_v10.Extensive = 2] = "Extensive", _v10[_v10.Attribute = 3] = "Attribute", _v10[_v10.Text = 4] = "Text";
  let _v125 = Object.prototype.hasOwnProperty;
  function _v126(_v0) {
    let _v1 = Array.prototype.slice.call(arguments, 1);
    return _v1.forEach(function (_v0) {
      if (_v0) {
        if ("object" != typeof _v0) throw TypeError(_v0 + "must be object");
        Object.keys(_v0).forEach(function (_v0) {
          _v0[_v0] = _v0[_v0];
        });
      }
    }), _v0;
  }
  function _v127(_v0, _v1, _v2) {
    return [].concat(_v0.slice(0, _v1), _v2, _v0.slice(_v1 + 1));
  }
  function _v128(_v0) {
    return (!(_v0 >= 0) || !(_v0 <= 0)) && (!(_v0 >= 0) || !(_v0 <= 0)) && (0 & _v0) != 0 && (0 & _v0) != 0 && (!(_v0 >= 0) || !(_v0 <= 8)) && 11 !== _v0 && (!(_v0 >= 14) || !(_v0 <= 31)) && (!(_v0 >= 127) || !(_v0 <= 159)) && !(_v0 > 0) && !0;
  }
  function _v129(_v0) {
    return _v0 > 0 ? String.fromCharCode(0 + ((_v0 -= 0) >> 10), 0 + (0 & _v0)) : String.fromCharCode(_v0);
  }
  let _v130 = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,
    _v131 = RegExp(_v130.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"),
    _v132 = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
  function _v133(_v0) {
    return 0 > _v0.indexOf("\\") && 0 > _v0.indexOf("&") ? _v0 : _v0.replace(_v131, function (_v0, _v1, _v2) {
      if (_v1) return _v1;
      if (35 === _v2.charCodeAt(0) && _v132.test(_v2)) {
        let _v0 = "x" === _v2[1].toLowerCase() ? parseInt(_v2.slice(2), 16) : parseInt(_v2.slice(1), 10);
        return _v128(_v0) ? _v129(_v0) : _v0;
      }
      let _v3 = _v122(_v0);
      return _v3 !== _v0 ? _v3 : _v0;
    });
  }
  let _v134 = /[&<>"]/,
    _v135 = /[&<>"]/g,
    _v136 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
  function _v137(_v0) {
    return _v136[_v0];
  }
  function _v138(_v0) {
    return _v134.test(_v0) ? _v0.replace(_v135, _v137) : _v0;
  }
  let _v139 = /[.?*+^$[\]\\(){}|-]/g;
  function _v140(_v0) {
    switch (_v0) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function _v141(_v0) {
    if (_v0 >= 0 && _v0 <= 0) return !0;
    switch (_v0) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 0:
      case 0:
      case 0:
      case 0:
        return !0;
    }
    return !1;
  }
  function _v142(_v0) {
    return _v110.test(_v0) || _v111.test(_v0);
  }
  function _v143(_v0) {
    switch (_v0) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  function _v144(_v0) {
    return (_v0 = _v0.trim().replace(/\s+/g, " ")).toLowerCase().toUpperCase();
  }
  _v0.s(["arrayReplaceAt", 0, _v127, "assign", 0, _v126, "escapeHtml", 0, _v138, "escapeRE", 0, function (_v0) {
    return _v0.replace(_v139, "\\$&");
  }, "fromCodePoint", 0, _v129, "has", 0, function (_v0, _v1) {
    return _v125.call(_v0, _v1);
  }, "isMdAsciiPunct", 0, _v143, "isPunctChar", 0, _v142, "isSpace", 0, _v140, "isString", 0, function (_v0) {
    return "[object String]" === Object.prototype.toString.call(_v0);
  }, "isValidEntityCode", 0, _v128, "isWhiteSpace", 0, _v141, "lib", 0, {
    mdurl: _v107,
    ucmicro: _v113
  }, "normalizeReference", 0, _v144, "unescapeAll", 0, _v133, "unescapeMd", 0, function (_v0) {
    return 0 > _v0.indexOf("\\") ? _v0 : _v0.replace(_v130, "$1");
  }], 0);
  var _v145 = _v0.i(0);
  _v0.s([], 0), _v0.i(0), _v0.s(["parseLinkDestination", 0, function (_v0, _v1, _v2) {
    let _v3,
      _v4 = _v1,
      _v5 = {
        ok: !1,
        pos: 0,
        str: ""
      };
    if (60 === _v0.charCodeAt(_v4)) {
      for (_v4++; _v4 < _v2 && 10 !== (_v3 = _v0.charCodeAt(_v4)) && 60 !== _v3;) {
        if (62 === _v3) {
          _v5.pos = _v4 + 1, _v5.str = _v133(_v0.slice(_v1 + 1, _v4)), _v5.ok = !0;
          break;
        }
        if (92 === _v3 && _v4 + 1 < _v2) {
          _v4 += 2;
          continue;
        }
        _v4++;
      }
      return _v5;
    }
    let _v6 = 0;
    for (; _v4 < _v2 && 32 !== (_v3 = _v0.charCodeAt(_v4)) && !(_v3 < 32) && 127 !== _v3;) {
      if (92 === _v3 && _v4 + 1 < _v2) {
        if (32 === _v0.charCodeAt(_v4 + 1)) break;
        _v4 += 2;
        continue;
      }
      if (40 === _v3 && ++_v6 > 32) return _v5;
      if (41 === _v3) {
        if (0 === _v6) break;
        _v6--;
      }
      _v4++;
    }
    return _v1 === _v4 || 0 !== _v6 || (_v5.str = _v133(_v0.slice(_v1, _v4)), _v5.pos = _v4, _v5.ok = !0), _v5;
  }, "parseLinkLabel", 0, function (_v0, _v1, _v2) {
    let _v3,
      _v4,
      _v5,
      _v6,
      _v7 = _v0.posMax,
      _v8 = _v0.pos;
    for (_v0.pos = _v1 + 1, _v3 = 1; _v0.pos < _v7;) {
      if (93 === (_v5 = _v0.src.charCodeAt(_v0.pos)) && 0 == --_v3) {
        _v4 = !0;
        break;
      }
      if (_v6 = _v0.pos, _v0.md.inline.skipToken(_v0), 91 === _v5) {
        if (_v6 === _v0.pos - 1) _v3++;else if (_v2) return _v0.pos = _v8, -1;
      }
    }
    let _v9 = -1;
    return _v4 && (_v9 = _v0.pos), _v0.pos = _v8, _v9;
  }, "parseLinkTitle", 0, function (_v0, _v1, _v2, _v3) {
    let _v4,
      _v5 = _v1,
      _v6 = {
        ok: !1,
        can_continue: !1,
        pos: 0,
        str: "",
        marker: 0
      };
    if (_v3) _v6.str = _v3.str, _v6.marker = _v3.marker;else {
      if (_v5 >= _v2) return _v6;
      let _v0 = _v0.charCodeAt(_v5);
      if (34 !== _v0 && 39 !== _v0 && 40 !== _v0) return _v6;
      _v1++, _v5++, 40 === _v0 && (_v0 = 41), _v6.marker = _v0;
    }
    for (; _v5 < _v2;) {
      if ((_v4 = _v0.charCodeAt(_v5)) === _v6.marker) return _v6.pos = _v5 + 1, _v6.str += _v133(_v0.slice(_v1, _v5)), _v6.ok = !0, _v6;
      if (40 === _v4 && 41 === _v6.marker) return _v6;
      92 === _v4 && _v5 + 1 < _v2 && _v5++, _v5++;
    }
    return _v6.can_continue = !0, _v6.str += _v133(_v0.slice(_v1, _v5)), _v6;
  }], 0);
  var _v146 = _v0.i(0);
  let _v147 = {};
  function _v148() {
    this.rules = _v126({}, _v147);
  }
  function _v149() {
    this.__rules__ = [], this.__cache__ = null;
  }
  function _v150(_v0, _v1, _v2) {
    this.type = _v0, this.tag = _v1, this.attrs = null, this.map = null, this.nesting = _v2, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
  }
  function _v151(_v0, _v1, _v2) {
    this.src = _v0, this.env = _v2, this.tokens = [], this.inlineMode = !1, this.md = _v1;
  }
  _v147.code_inline = function (_v0, _v1, _v2, _v3, _v4) {
    let _v5 = _v0[_v1];
    return "<code" + _v4.renderAttrs(_v5) + ">" + _v138(_v5.content) + "</code>";
  }, _v147.code_block = function (_v0, _v1, _v2, _v3, _v4) {
    let _v5 = _v0[_v1];
    return "<pre" + _v4.renderAttrs(_v5) + "><code>" + _v138(_v0[_v1].content) + "</code></pre>\n";
  }, _v147.fence = function (_v0, _v1, _v2, _v3, _v4) {
    let _v5,
      _v6 = _v0[_v1],
      _v7 = _v6.info ? _v133(_v6.info).trim() : "",
      _v8 = "",
      _v9 = "";
    if (_v7) {
      let _v0 = _v7.split(/(\s+)/g);
      _v8 = _v0[0], _v9 = _v0.slice(2).join("");
    }
    if (0 === (_v5 = _v2.highlight && _v2.highlight(_v6.content, _v8, _v9) || _v138(_v6.content)).indexOf("<pre")) return _v5 + "\n";
    if (_v7) {
      let _v0 = _v6.attrIndex("class"),
        _v1 = _v6.attrs ? _v6.attrs.slice() : [];
      return _v0 < 0 ? _v1.push(["class", _v2.langPrefix + _v8]) : (_v1[_v0] = _v1[_v0].slice(), _v1[_v0][1] += " " + _v2.langPrefix + _v8), `<pre><code${_v4.renderAttrs({
        attrs: _v1
      })}>${_v5}</code></pre>
`;
    }
    return `<pre><code${_v4.renderAttrs(_v6)}>${_v5}</code></pre>
`;
  }, _v147.image = function (_v0, _v1, _v2, _v3, _v4) {
    let _v5 = _v0[_v1];
    return _v5.attrs[_v5.attrIndex("alt")][1] = _v4.renderInlineAsText(_v5.children, _v2, _v3), _v4.renderToken(_v0, _v1, _v2);
  }, _v147.hardbreak = function (_v0, _v1, _v2) {
    return _v2.xhtmlOut ? "<br />\n" : "<br>\n";
  }, _v147.softbreak = function (_v0, _v1, _v2) {
    return _v2.breaks ? _v2.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
  }, _v147.text = function (_v0, _v1) {
    return _v138(_v0[_v1].content);
  }, _v147.html_block = function (_v0, _v1) {
    return _v0[_v1].content;
  }, _v147.html_inline = function (_v0, _v1) {
    return _v0[_v1].content;
  }, _v148.prototype.renderAttrs = function (_v0) {
    let _v1, _v2, _v3;
    if (!_v0.attrs) return "";
    for (_v1 = 0, _v3 = "", _v2 = _v0.attrs.length; _v1 < _v2; _v1++) _v3 += " " + _v138(_v0.attrs[_v1][0]) + '="' + _v138(_v0.attrs[_v1][1]) + '"';
    return _v3;
  }, _v148.prototype.renderToken = function (_v0, _v1, _v2) {
    let _v3 = _v0[_v1],
      _v4 = "";
    if (_v3.hidden) return "";
    _v3.block && -1 !== _v3.nesting && _v1 && _v0[_v1 - 1].hidden && (_v4 += "\n"), _v4 += (-1 === _v3.nesting ? "</" : "<") + _v3.tag, _v4 += this.renderAttrs(_v3), 0 === _v3.nesting && _v2.xhtmlOut && (_v4 += " /");
    let _v5 = !1;
    if (_v3.block && (_v5 = !0, 1 === _v3.nesting && _v1 + 1 < _v0.length)) {
      let _v0 = _v0[_v1 + 1];
      "inline" === _v0.type || _v0.hidden ? _v5 = !1 : -1 === _v0.nesting && _v0.tag === _v3.tag && (_v5 = !1);
    }
    return _v4 + (_v5 ? ">\n" : ">");
  }, _v148.prototype.renderInline = function (_v0, _v1, _v2) {
    let _v3 = "",
      _v4 = this.rules;
    for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
      let _v0 = _v0[_v0].type;
      void 0 !== _v4[_v0] ? _v3 += _v4[_v0](_v0, _v0, _v1, _v2, this) : _v3 += this.renderToken(_v0, _v0, _v1);
    }
    return _v3;
  }, _v148.prototype.renderInlineAsText = function (_v0, _v1, _v2) {
    let _v3 = "";
    for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) switch (_v0[_v0].type) {
      case "text":
      case "html_inline":
      case "html_block":
        _v3 += _v0[_v0].content;
        break;
      case "image":
        _v3 += this.renderInlineAsText(_v0[_v0].children, _v1, _v2);
        break;
      case "softbreak":
      case "hardbreak":
        _v3 += "\n";
    }
    return _v3;
  }, _v148.prototype.render = function (_v0, _v1, _v2) {
    let _v3 = "",
      _v4 = this.rules;
    for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) {
      let _v0 = _v0[_v0].type;
      "inline" === _v0 ? _v3 += this.renderInline(_v0[_v0].children, _v1, _v2) : void 0 !== _v4[_v0] ? _v3 += _v4[_v0](_v0, _v0, _v1, _v2, this) : _v3 += this.renderToken(_v0, _v0, _v1, _v2);
    }
    return _v3;
  }, _v149.prototype.__find__ = function (_v0) {
    for (let _v0 = 0; _v0 < this.__rules__.length; _v0++) if (this.__rules__[_v0].name === _v0) return _v0;
    return -1;
  }, _v149.prototype.__compile__ = function () {
    let _v0 = this,
      _v1 = [""];
    _v0.__rules__.forEach(function (_v0) {
      _v0.enabled && _v0.alt.forEach(function (_v0) {
        0 > _v1.indexOf(_v0) && _v1.push(_v0);
      });
    }), _v0.__cache__ = {}, _v1.forEach(function (_v0) {
      _v0.__cache__[_v0] = [], _v0.__rules__.forEach(function (_v0) {
        !_v0.enabled || _v0 && 0 > _v0.alt.indexOf(_v0) || _v0.__cache__[_v0].push(_v0.fn);
      });
    });
  }, _v149.prototype.at = function (_v0, _v1, _v2) {
    let _v3 = this.__find__(_v0);
    if (-1 === _v3) throw Error("Parser rule not found: " + _v0);
    this.__rules__[_v3].fn = _v1, this.__rules__[_v3].alt = (_v2 || {}).alt || [], this.__cache__ = null;
  }, _v149.prototype.before = function (_v0, _v1, _v2, _v3) {
    let _v4 = this.__find__(_v0);
    if (-1 === _v4) throw Error("Parser rule not found: " + _v0);
    this.__rules__.splice(_v4, 0, {
      name: _v1,
      enabled: !0,
      fn: _v2,
      alt: (_v3 || {}).alt || []
    }), this.__cache__ = null;
  }, _v149.prototype.after = function (_v0, _v1, _v2, _v3) {
    let _v4 = this.__find__(_v0);
    if (-1 === _v4) throw Error("Parser rule not found: " + _v0);
    this.__rules__.splice(_v4 + 1, 0, {
      name: _v1,
      enabled: !0,
      fn: _v2,
      alt: (_v3 || {}).alt || []
    }), this.__cache__ = null;
  }, _v149.prototype.push = function (_v0, _v1, _v2) {
    this.__rules__.push({
      name: _v0,
      enabled: !0,
      fn: _v1,
      alt: (_v2 || {}).alt || []
    }), this.__cache__ = null;
  }, _v149.prototype.enable = function (_v0, _v1) {
    Array.isArray(_v0) || (_v0 = [_v0]);
    let _v2 = [];
    return _v0.forEach(function (_v0) {
      let _v1 = this.__find__(_v0);
      if (_v1 < 0) {
        if (_v1) return;
        throw Error("Rules manager: invalid rule name " + _v0);
      }
      this.__rules__[_v1].enabled = !0, _v2.push(_v0);
    }, this), this.__cache__ = null, _v2;
  }, _v149.prototype.enableOnly = function (_v0, _v1) {
    Array.isArray(_v0) || (_v0 = [_v0]), this.__rules__.forEach(function (_v0) {
      _v0.enabled = !1;
    }), this.enable(_v0, _v1);
  }, _v149.prototype.disable = function (_v0, _v1) {
    Array.isArray(_v0) || (_v0 = [_v0]);
    let _v2 = [];
    return _v0.forEach(function (_v0) {
      let _v1 = this.__find__(_v0);
      if (_v1 < 0) {
        if (_v1) return;
        throw Error("Rules manager: invalid rule name " + _v0);
      }
      this.__rules__[_v1].enabled = !1, _v2.push(_v0);
    }, this), this.__cache__ = null, _v2;
  }, _v149.prototype.getRules = function (_v0) {
    return null === this.__cache__ && this.__compile__(), this.__cache__[_v0] || [];
  }, _v150.prototype.attrIndex = function (_v0) {
    if (!this.attrs) return -1;
    let _v1 = this.attrs;
    for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) if (_v1[_v0][0] === _v0) return _v0;
    return -1;
  }, _v150.prototype.attrPush = function (_v0) {
    this.attrs ? this.attrs.push(_v0) : this.attrs = [_v0];
  }, _v150.prototype.attrSet = function (_v0, _v1) {
    let _v2 = this.attrIndex(_v0),
      _v3 = [_v0, _v1];
    _v2 < 0 ? this.attrPush(_v3) : this.attrs[_v2] = _v3;
  }, _v150.prototype.attrGet = function (_v0) {
    let _v1 = this.attrIndex(_v0),
      _v2 = null;
    return _v1 >= 0 && (_v2 = this.attrs[_v1][1]), _v2;
  }, _v150.prototype.attrJoin = function (_v0, _v1) {
    let _v2 = this.attrIndex(_v0);
    _v2 < 0 ? this.attrPush([_v0, _v1]) : this.attrs[_v2][1] = this.attrs[_v2][1] + " " + _v1;
  }, _v151.prototype.Token = _v150;
  let _v152 = /\r\n?|\n/g,
    _v153 = /\0/g,
    _v154 = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
    _v155 = /\((c|tm|r)\)/i,
    _v156 = /\((c|tm|r)\)/ig,
    _v157 = {
      c: "©",
      r: "®",
      tm: "™"
    };
  function _v158(_v0, _v1) {
    return _v157[_v1.toLowerCase()];
  }
  let _v159 = /['"]/,
    _v160 = /['"]/g;
  function _v161(_v0, _v1, _v2) {
    return _v0.slice(0, _v1) + _v2 + _v0.slice(_v1 + 1);
  }
  let _v162 = [["normalize", function (_v0) {
    let _v1;
    _v1 = (_v1 = _v0.src.replace(_v152, "\n")).replace(_v153, "�"), _v0.src = _v1;
  }], ["block", function (_v0) {
    let _v1;
    _v0.inlineMode ? ((_v1 = new _v0.Token("inline", "", 0)).content = _v0.src, _v1.map = [0, 1], _v1.children = [], _v0.tokens.push(_v1)) : _v0.md.block.parse(_v0.src, _v0.md, _v0.env, _v0.tokens);
  }], ["inline", function (_v0) {
    let _v1 = _v0.tokens;
    for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
      let _v0 = _v1[_v0];
      "inline" === _v0.type && _v0.md.inline.parse(_v0.content, _v0.md, _v0.env, _v0.children);
    }
  }], ["linkify", function (_v0) {
    let _v1 = _v0.tokens;
    if (_v0.md.options.linkify) for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) {
      if ("inline" !== _v1[_v0].type || !_v0.md.linkify.pretest(_v1[_v0].content)) continue;
      let _v0 = _v1[_v0].children,
        _v1 = 0;
      for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) {
        let _v0 = _v0[_v0];
        if ("link_close" === _v0.type) {
          for (_v0--; _v0[_v0].level !== _v0.level && "link_open" !== _v0[_v0].type;) _v0--;
          continue;
        }
        if ("html_inline" === _v0.type) {
          var _v2, _v3;
          _v2 = _v0.content, /^<a[>\s]/i.test(_v2) && _v1 > 0 && _v1--, _v3 = _v0.content, /^<\/a\s*>/i.test(_v3) && _v1++;
        }
        if (!(_v1 > 0) && "text" === _v0.type && _v0.md.linkify.test(_v0.content)) {
          let _v0 = _v0.content,
            _v1 = _v0.md.linkify.match(_v0),
            _v2 = [],
            _v3 = _v0.level,
            _v4 = 0;
          _v1.length > 0 && 0 === _v1[0].index && _v0 > 0 && "text_special" === _v0[_v0 - 1].type && (_v1 = _v1.slice(1));
          for (let _v0 = 0; _v0 < _v1.length; _v0++) {
            let _v0 = _v1[_v0].url,
              _v1 = _v0.md.normalizeLink(_v0);
            if (!_v0.md.validateLink(_v1)) continue;
            let _v2 = _v1[_v0].text;
            _v2 = _v1[_v0].schema ? "mailto:" !== _v1[_v0].schema || /^mailto:/i.test(_v2) ? _v0.md.normalizeLinkText(_v2) : _v0.md.normalizeLinkText("mailto:" + _v2).replace(/^mailto:/, "") : _v0.md.normalizeLinkText("http://" + _v2).replace(/^http:\/\//, "");
            let _v3 = _v1[_v0].index;
            if (_v3 > _v4) {
              let _v0 = new _v0.Token("text", "", 0);
              _v0.content = _v0.slice(_v4, _v3), _v0.level = _v3, _v2.push(_v0);
            }
            let _v4 = new _v0.Token("link_open", "a", 1);
            _v4.attrs = [["href", _v1]], _v4.level = _v3++, _v4.markup = "linkify", _v4.info = "auto", _v2.push(_v4);
            let _v5 = new _v0.Token("text", "", 0);
            _v5.content = _v2, _v5.level = _v3, _v2.push(_v5);
            let _v6 = new _v0.Token("link_close", "a", -1);
            _v6.level = --_v3, _v6.markup = "linkify", _v6.info = "auto", _v2.push(_v6), _v4 = _v1[_v0].lastIndex;
          }
          if (_v4 < _v0.length) {
            let _v0 = new _v0.Token("text", "", 0);
            _v0.content = _v0.slice(_v4), _v0.level = _v3, _v2.push(_v0);
          }
          _v1[_v0].children = _v0 = _v127(_v0, _v0, _v2);
        }
      }
    }
  }], ["replacements", function (_v0) {
    let _v1;
    if (_v0.md.options.typographer) for (_v1 = _v0.tokens.length - 1; _v1 >= 0; _v1--) "inline" === _v0.tokens[_v1].type && (_v155.test(_v0.tokens[_v1].content) && function (_v0) {
      let _v1 = 0;
      for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) {
        let _v0 = _v0[_v0];
        "text" !== _v0.type || _v1 || (_v0.content = _v0.content.replace(_v156, _v158)), "link_open" === _v0.type && "auto" === _v0.info && _v1--, "link_close" === _v0.type && "auto" === _v0.info && _v1++;
      }
    }(_v0.tokens[_v1].children), _v154.test(_v0.tokens[_v1].content) && function (_v0) {
      let _v1 = 0;
      for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) {
        let _v0 = _v0[_v0];
        "text" === _v0.type && !_v1 && _v154.test(_v0.content) && (_v0.content = _v0.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), "link_open" === _v0.type && "auto" === _v0.info && _v1--, "link_close" === _v0.type && "auto" === _v0.info && _v1++;
      }
    }(_v0.tokens[_v1].children));
  }], ["smartquotes", function (_v0) {
    if (_v0.md.options.typographer) for (let _v0 = _v0.tokens.length - 1; _v0 >= 0; _v0--) "inline" === _v0.tokens[_v0].type && _v159.test(_v0.tokens[_v0].content) && function (_v0, _v1) {
      let _v2,
        _v3 = [];
      for (let _v0 = 0; _v0 < _v0.length; _v0++) {
        let _v0 = _v0[_v0],
          _v1 = _v0[_v0].level;
        for (_v2 = _v3.length - 1; _v2 >= 0 && !(_v3[_v2].level <= _v1); _v2--);
        if (_v3.length = _v2 + 1, "text" !== _v0.type) continue;
        let _v2 = _v0.content,
          _v3 = 0,
          _v4 = _v2.length;
        e: for (; _v3 < _v4;) {
          _v160.lastIndex = _v3;
          let _v0 = _v160.exec(_v2);
          if (!_v0) break;
          let _v1 = !0,
            _v2 = !0;
          _v3 = _v0.index + 1;
          let _v3 = "'" === _v0[0],
            _v4 = 32;
          if (_v0.index - 1 >= 0) _v4 = _v2.charCodeAt(_v0.index - 1);else for (_v2 = _v0 - 1; _v2 >= 0 && "softbreak" !== _v0[_v2].type && "hardbreak" !== _v0[_v2].type; _v2--) if (_v0[_v2].content) {
            _v4 = _v0[_v2].content.charCodeAt(_v0[_v2].content.length - 1);
            break;
          }
          let _v5 = 32;
          if (_v3 < _v4) _v5 = _v2.charCodeAt(_v3);else for (_v2 = _v0 + 1; _v2 < _v0.length && "softbreak" !== _v0[_v2].type && "hardbreak" !== _v0[_v2].type; _v2++) if (_v0[_v2].content) {
            _v5 = _v0[_v2].content.charCodeAt(0);
            break;
          }
          let _v6 = _v143(_v4) || _v142(String.fromCharCode(_v4)),
            _v7 = _v143(_v5) || _v142(String.fromCharCode(_v5)),
            _v8 = _v141(_v4),
            _v9 = _v141(_v5);
          if (_v9 ? _v1 = !1 : _v7 && !(_v8 || _v6) && (_v1 = !1), _v8 ? _v2 = !1 : _v6 && !(_v9 || _v7) && (_v2 = !1), 34 === _v5 && '"' === _v0[0] && _v4 >= 48 && _v4 <= 57 && (_v2 = _v1 = !1), _v1 && _v2 && (_v1 = _v6, _v2 = _v7), !_v1 && !_v2) {
            _v3 && (_v0.content = _v161(_v0.content, _v0.index, "’"));
            continue;
          }
          if (_v2) for (_v2 = _v3.length - 1; _v2 >= 0; _v2--) {
            let _v0 = _v3[_v2];
            if (_v3[_v2].level < _v1) break;
            if (_v0.single === _v3 && _v3[_v2].level === _v1) {
              let _v0, _v1;
              _v0 = _v3[_v2], _v3 ? (_v0 = _v1.md.options.quotes[2], _v1 = _v1.md.options.quotes[3]) : (_v0 = _v1.md.options.quotes[0], _v1 = _v1.md.options.quotes[1]), _v0.content = _v161(_v0.content, _v0.index, _v1), _v0[_v0.token].content = _v161(_v0[_v0.token].content, _v0.pos, _v0), _v3 += _v1.length - 1, _v0.token === _v0 && (_v3 += _v0.length - 1), _v4 = (_v2 = _v0.content).length, _v3.length = _v2;
              continue e;
            }
          }
          _v1 ? _v3.push({
            token: _v0,
            pos: _v0.index,
            single: _v3,
            level: _v1
          }) : _v2 && _v3 && (_v0.content = _v161(_v0.content, _v0.index, "’"));
        }
      }
    }(_v0.tokens[_v0].children, _v0);
  }], ["text_join", function (_v0) {
    let _v1,
      _v2,
      _v3 = _v0.tokens,
      _v4 = _v3.length;
    for (let _v0 = 0; _v0 < _v4; _v0++) {
      if ("inline" !== _v3[_v0].type) continue;
      let _v0 = _v3[_v0].children,
        _v1 = _v0.length;
      for (_v1 = 0; _v1 < _v1; _v1++) "text_special" === _v0[_v1].type && (_v0[_v1].type = "text");
      for (_v1 = _v2 = 0; _v1 < _v1; _v1++) "text" === _v0[_v1].type && _v1 + 1 < _v1 && "text" === _v0[_v1 + 1].type ? _v0[_v1 + 1].content = _v0[_v1].content + _v0[_v1 + 1].content : (_v1 !== _v2 && (_v0[_v2] = _v0[_v1]), _v2++);
      _v1 !== _v2 && (_v0.length = _v2);
    }
  }]];
  function _v163() {
    this.ruler = new _v149();
    for (let _v0 = 0; _v0 < _v162.length; _v0++) this.ruler.push(_v162[_v0][0], _v162[_v0][1]);
  }
  function _v164(_v0, _v1, _v2, _v3) {
    this.src = _v0, this.md = _v1, this.env = _v2, this.tokens = _v3, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
    let _v4 = this.src;
    for (let _v0 = 0, _v1 = 0, _v2 = 0, _v3 = 0, _v4 = _v4.length, _v5 = !1; _v1 < _v4; _v1++) {
      let _v0 = _v4.charCodeAt(_v1);
      if (!_v5) if (_v140(_v0)) {
        _v2++, 9 === _v0 ? _v3 += 4 - _v3 % 4 : _v3++;
        continue;
      } else _v5 = !0;
      (10 === _v0 || _v1 === _v4 - 1) && (10 !== _v0 && _v1++, this.bMarks.push(_v0), this.eMarks.push(_v1), this.tShift.push(_v2), this.sCount.push(_v3), this.bsCount.push(0), _v5 = !1, _v2 = 0, _v3 = 0, _v0 = _v1 + 1);
    }
    this.bMarks.push(_v4.length), this.eMarks.push(_v4.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
  }
  function _v165(_v0, _v1) {
    let _v2 = _v0.bMarks[_v1] + _v0.tShift[_v1],
      _v3 = _v0.eMarks[_v1];
    return _v0.src.slice(_v2, _v3);
  }
  function _v166(_v0) {
    let _v1 = [],
      _v2 = _v0.length,
      _v3 = 0,
      _v4 = _v0.charCodeAt(_v3),
      _v5 = !1,
      _v6 = 0,
      _v7 = "";
    for (; _v3 < _v2;) 124 === _v4 && (_v5 ? (_v7 += _v0.substring(_v6, _v3 - 1), _v6 = _v3) : (_v1.push(_v7 + _v0.substring(_v6, _v3)), _v7 = "", _v6 = _v3 + 1)), _v5 = 92 === _v4, _v3++, _v4 = _v0.charCodeAt(_v3);
    return _v1.push(_v7 + _v0.substring(_v6)), _v1;
  }
  function _v167(_v0, _v1) {
    let _v2 = _v0.eMarks[_v1],
      _v3 = _v0.bMarks[_v1] + _v0.tShift[_v1],
      _v4 = _v0.src.charCodeAt(_v3++);
    return 42 !== _v4 && 45 !== _v4 && 43 !== _v4 || _v3 < _v2 && !_v140(_v0.src.charCodeAt(_v3)) ? -1 : _v3;
  }
  function _v168(_v0, _v1) {
    let _v2 = _v0.bMarks[_v1] + _v0.tShift[_v1],
      _v3 = _v0.eMarks[_v1],
      _v4 = _v2;
    if (_v4 + 1 >= _v3) return -1;
    let _v5 = _v0.src.charCodeAt(_v4++);
    if (_v5 < 48 || _v5 > 57) return -1;
    for (;;) {
      if (_v4 >= _v3) return -1;
      if ((_v5 = _v0.src.charCodeAt(_v4++)) >= 48 && _v5 <= 57) {
        if (_v4 - _v2 >= 10) return -1;
        continue;
      }
      if (41 === _v5 || 46 === _v5) break;
      return -1;
    }
    return _v4 < _v3 && !_v140(_v5 = _v0.src.charCodeAt(_v4)) ? -1 : _v4;
  }
  _v163.prototype.process = function (_v0) {
    let _v1 = this.ruler.getRules("");
    for (let _v0 = 0, _v1 = _v1.length; _v0 < _v1; _v0++) _v1[_v0](_v0);
  }, _v163.prototype.State = _v151, _v164.prototype.push = function (_v0, _v1, _v2) {
    let _v3 = new _v150(_v0, _v1, _v2);
    return _v3.block = !0, _v2 < 0 && this.level--, _v3.level = this.level, _v2 > 0 && this.level++, this.tokens.push(_v3), _v3;
  }, _v164.prototype.isEmpty = function (_v0) {
    return this.bMarks[_v0] + this.tShift[_v0] >= this.eMarks[_v0];
  }, _v164.prototype.skipEmptyLines = function (_v0) {
    for (let _v0 = this.lineMax; _v0 < _v0 && !(this.bMarks[_v0] + this.tShift[_v0] < this.eMarks[_v0]); _v0++);
    return _v0;
  }, _v164.prototype.skipSpaces = function (_v0) {
    for (let _v0 = this.src.length; _v0 < _v0 && _v140(this.src.charCodeAt(_v0)); _v0++);
    return _v0;
  }, _v164.prototype.skipSpacesBack = function (_v0, _v1) {
    if (_v0 <= _v1) return _v0;
    for (; _v0 > _v1;) if (!_v140(this.src.charCodeAt(--_v0))) return _v0 + 1;
    return _v0;
  }, _v164.prototype.skipChars = function (_v0, _v1) {
    for (let _v0 = this.src.length; _v0 < _v0 && this.src.charCodeAt(_v0) === _v1; _v0++);
    return _v0;
  }, _v164.prototype.skipCharsBack = function (_v0, _v1, _v2) {
    if (_v0 <= _v2) return _v0;
    for (; _v0 > _v2;) if (_v1 !== this.src.charCodeAt(--_v0)) return _v0 + 1;
    return _v0;
  }, _v164.prototype.getLines = function (_v0, _v1, _v2, _v3) {
    if (_v0 >= _v1) return "";
    let _v4 = Array(_v1 - _v0);
    for (let _v0 = 0, _v1 = _v0; _v1 < _v1; _v1++, _v0++) {
      let _v0,
        _v1 = 0,
        _v2 = this.bMarks[_v1],
        _v3 = _v2;
      for (_v0 = _v1 + 1 < _v1 || _v3 ? this.eMarks[_v1] + 1 : this.eMarks[_v1]; _v3 < _v0 && _v1 < _v2;) {
        let _v0 = this.src.charCodeAt(_v3);
        if (_v140(_v0)) 9 === _v0 ? _v1 += 4 - (_v1 + this.bsCount[_v1]) % 4 : _v1++;else if (_v3 - _v2 < this.tShift[_v1]) _v1++;else break;
        _v3++;
      }
      _v1 > _v2 ? _v4[_v0] = Array(_v1 - _v2 + 1).join(" ") + this.src.slice(_v3, _v0) : _v4[_v0] = this.src.slice(_v3, _v0);
    }
    return _v4.join("");
  }, _v164.prototype.Token = _v150;
  let _v169 = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
    _v170 = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
    _v171 = RegExp("^(?:" + _v169 + "|" + _v170 + "|<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->|<[?][\\s\\S]*?[?]>|<![A-Za-z][^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),
    _v172 = RegExp("^(?:" + _v169 + "|" + _v170 + ")"),
    _v173 = [[/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0], [/^<!--/, /-->/, !0], [/^<\?/, /\?>/, !0], [/^<![A-Z]/, />/, !0], [/^<!\[CDATA\[/, /\]\]>/, !0], [RegExp("^</?(address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?=(\\s|/?>|$))", "i"), /^$/, !0], [RegExp(_v172.source + "\\s*$"), /^$/, !1]],
    _v174 = [["table", function (_v0, _v1, _v2, _v3) {
      let _v4;
      if (_v1 + 2 > _v2) return !1;
      let _v5 = _v1 + 1;
      if (_v0.sCount[_v5] < _v0.blkIndent || _v0.sCount[_v5] - _v0.blkIndent >= 4) return !1;
      let _v6 = _v0.bMarks[_v5] + _v0.tShift[_v5];
      if (_v6 >= _v0.eMarks[_v5]) return !1;
      let _v7 = _v0.src.charCodeAt(_v6++);
      if (124 !== _v7 && 45 !== _v7 && 58 !== _v7 || _v6 >= _v0.eMarks[_v5]) return !1;
      let _v8 = _v0.src.charCodeAt(_v6++);
      if (124 !== _v8 && 45 !== _v8 && 58 !== _v8 && !_v140(_v8) || 45 === _v7 && _v140(_v8)) return !1;
      for (; _v6 < _v0.eMarks[_v5];) {
        let _v0 = _v0.src.charCodeAt(_v6);
        if (124 !== _v0 && 45 !== _v0 && 58 !== _v0 && !_v140(_v0)) return !1;
        _v6++;
      }
      let _v9 = _v165(_v0, _v1 + 1),
        _v10 = _v9.split("|"),
        _v11 = [];
      for (let _v0 = 0; _v0 < _v10.length; _v0++) {
        let _v0 = _v10[_v0].trim();
        if (!_v0) if (0 === _v0 || _v0 === _v10.length - 1) continue;else return !1;
        if (!/^:?-+:?$/.test(_v0)) return !1;
        58 === _v0.charCodeAt(_v0.length - 1) ? _v11.push(58 === _v0.charCodeAt(0) ? "center" : "right") : 58 === _v0.charCodeAt(0) ? _v11.push("left") : _v11.push("");
      }
      if (-1 === (_v9 = _v165(_v0, _v1).trim()).indexOf("|") || _v0.sCount[_v1] - _v0.blkIndent >= 4) return !1;
      (_v10 = _v166(_v9)).length && "" === _v10[0] && _v10.shift(), _v10.length && "" === _v10[_v10.length - 1] && _v10.pop();
      let _v12 = _v10.length;
      if (0 === _v12 || _v12 !== _v11.length) return !1;
      if (_v3) return !0;
      let _v13 = _v0.parentType;
      _v0.parentType = "table";
      let _v14 = _v0.md.block.ruler.getRules("blockquote"),
        _v15 = _v0.push("table_open", "table", 1),
        _v16 = [_v1, 0];
      _v15.map = _v16, _v0.push("thead_open", "thead", 1).map = [_v1, _v1 + 1], _v0.push("tr_open", "tr", 1).map = [_v1, _v1 + 1];
      for (let _v0 = 0; _v0 < _v10.length; _v0++) {
        let _v0 = _v0.push("th_open", "th", 1);
        _v11[_v0] && (_v0.attrs = [["style", "text-align:" + _v11[_v0]]]);
        let _v1 = _v0.push("inline", "", 0);
        _v1.content = _v10[_v0].trim(), _v1.children = [], _v0.push("th_close", "th", -1);
      }
      _v0.push("tr_close", "tr", -1), _v0.push("thead_close", "thead", -1);
      let _v17 = 0;
      for (_v5 = _v1 + 2; _v5 < _v2 && !(_v0.sCount[_v5] < _v0.blkIndent); _v5++) {
        let _v0 = !1;
        for (let _v0 = 0, _v1 = _v14.length; _v0 < _v1; _v0++) if (_v14[_v0](_v0, _v5, _v2, !0)) {
          _v0 = !0;
          break;
        }
        if (_v0 || !(_v9 = _v165(_v0, _v5).trim()) || _v0.sCount[_v5] - _v0.blkIndent >= 4 || ((_v10 = _v166(_v9)).length && "" === _v10[0] && _v10.shift(), _v10.length && "" === _v10[_v10.length - 1] && _v10.pop(), (_v17 += _v12 - _v10.length) > 0)) break;
        _v5 === _v1 + 2 && (_v0.push("tbody_open", "tbody", 1).map = _v4 = [_v1 + 2, 0]), _v0.push("tr_open", "tr", 1).map = [_v5, _v5 + 1];
        for (let _v0 = 0; _v0 < _v12; _v0++) {
          let _v0 = _v0.push("td_open", "td", 1);
          _v11[_v0] && (_v0.attrs = [["style", "text-align:" + _v11[_v0]]]);
          let _v1 = _v0.push("inline", "", 0);
          _v1.content = _v10[_v0] ? _v10[_v0].trim() : "", _v1.children = [], _v0.push("td_close", "td", -1);
        }
        _v0.push("tr_close", "tr", -1);
      }
      return _v4 && (_v0.push("tbody_close", "tbody", -1), _v4[1] = _v5), _v0.push("table_close", "table", -1), _v16[1] = _v5, _v0.parentType = _v13, _v0.line = _v5, !0;
    }, ["paragraph", "reference"]], ["code", function (_v0, _v1, _v2) {
      if (_v0.sCount[_v1] - _v0.blkIndent < 4) return !1;
      let _v3 = _v1 + 1,
        _v4 = _v3;
      for (; _v3 < _v2;) {
        if (_v0.isEmpty(_v3)) {
          _v3++;
          continue;
        }
        if (_v0.sCount[_v3] - _v0.blkIndent >= 4) {
          _v4 = ++_v3;
          continue;
        }
        break;
      }
      _v0.line = _v4;
      let _v5 = _v0.push("code_block", "code", 0);
      return _v5.content = _v0.getLines(_v1, _v4, 4 + _v0.blkIndent, !1) + "\n", _v5.map = [_v1, _v0.line], !0;
    }], ["fence", function (_v0, _v1, _v2, _v3) {
      let _v4 = _v0.bMarks[_v1] + _v0.tShift[_v1],
        _v5 = _v0.eMarks[_v1];
      if (_v0.sCount[_v1] - _v0.blkIndent >= 4 || _v4 + 3 > _v5) return !1;
      let _v6 = _v0.src.charCodeAt(_v4);
      if (126 !== _v6 && 96 !== _v6) return !1;
      let _v7 = _v4,
        _v8 = (_v4 = _v0.skipChars(_v4, _v6)) - _v7;
      if (_v8 < 3) return !1;
      let _v9 = _v0.src.slice(_v7, _v4),
        _v10 = _v0.src.slice(_v4, _v5);
      if (96 === _v6 && _v10.indexOf(String.fromCharCode(_v6)) >= 0) return !1;
      if (_v3) return !0;
      let _v11 = _v1,
        _v12 = !1;
      for (; !(++_v11 >= _v2) && (!((_v4 = _v7 = _v0.bMarks[_v11] + _v0.tShift[_v11]) < (_v5 = _v0.eMarks[_v11])) || !(_v0.sCount[_v11] < _v0.blkIndent));) {
        ;
        if (!(_v0.src.charCodeAt(_v4) !== _v6 || _v0.sCount[_v11] - _v0.blkIndent >= 4 || (_v4 = _v0.skipChars(_v4, _v6)) - _v7 < _v8) && !((_v4 = _v0.skipSpaces(_v4)) < _v5)) {
          _v12 = !0;
          break;
        }
      }
      _v8 = _v0.sCount[_v1], _v0.line = _v11 + +!!_v12;
      let _v13 = _v0.push("fence", "code", 0);
      return _v13.info = _v10, _v13.content = _v0.getLines(_v1 + 1, _v11, _v8, !0), _v13.markup = _v9, _v13.map = [_v1, _v0.line], !0;
    }, ["paragraph", "reference", "blockquote", "list"]], ["blockquote", function (_v0, _v1, _v2, _v3) {
      let _v4,
        _v5 = _v0.bMarks[_v1] + _v0.tShift[_v1],
        _v6 = _v0.eMarks[_v1],
        _v7 = _v0.lineMax;
      if (_v0.sCount[_v1] - _v0.blkIndent >= 4 || 62 !== _v0.src.charCodeAt(_v5)) return !1;
      if (_v3) return !0;
      let _v8 = [],
        _v9 = [],
        _v10 = [],
        _v11 = [],
        _v12 = _v0.md.block.ruler.getRules("blockquote"),
        _v13 = _v0.parentType;
      _v0.parentType = "blockquote";
      let _v14 = !1;
      for (_v4 = _v1; _v4 < _v2; _v4++) {
        let _v0 = _v0.sCount[_v4] < _v0.blkIndent;
        if ((_v5 = _v0.bMarks[_v4] + _v0.tShift[_v4]) >= (_v6 = _v0.eMarks[_v4])) break;
        if (62 === _v0.src.charCodeAt(_v5++) && !_v0) {
          let _v0,
            _v1,
            _v2 = _v0.sCount[_v4] + 1;
          32 === _v0.src.charCodeAt(_v5) ? (_v5++, _v2++, _v1 = !1, _v0 = !0) : 9 === _v0.src.charCodeAt(_v5) ? (_v0 = !0, (_v0.bsCount[_v4] + _v2) % 4 == 3 ? (_v5++, _v2++, _v1 = !1) : _v1 = !0) : _v0 = !1;
          let _v3 = _v2;
          for (_v8.push(_v0.bMarks[_v4]), _v0.bMarks[_v4] = _v5; _v5 < _v6;) {
            let _v0 = _v0.src.charCodeAt(_v5);
            if (_v140(_v0)) 9 === _v0 ? _v3 += 4 - (_v3 + _v0.bsCount[_v4] + +!!_v1) % 4 : _v3++;else break;
            _v5++;
          }
          _v14 = _v5 >= _v6, _v9.push(_v0.bsCount[_v4]), _v0.bsCount[_v4] = _v0.sCount[_v4] + 1 + +!!_v0, _v10.push(_v0.sCount[_v4]), _v0.sCount[_v4] = _v3 - _v2, _v11.push(_v0.tShift[_v4]), _v0.tShift[_v4] = _v5 - _v0.bMarks[_v4];
          continue;
        }
        if (_v14) break;
        let _v1 = !1;
        for (let _v0 = 0, _v1 = _v12.length; _v0 < _v1; _v0++) if (_v12[_v0](_v0, _v4, _v2, !0)) {
          _v1 = !0;
          break;
        }
        if (_v1) {
          _v0.lineMax = _v4, 0 !== _v0.blkIndent && (_v8.push(_v0.bMarks[_v4]), _v9.push(_v0.bsCount[_v4]), _v11.push(_v0.tShift[_v4]), _v10.push(_v0.sCount[_v4]), _v0.sCount[_v4] -= _v0.blkIndent);
          break;
        }
        _v8.push(_v0.bMarks[_v4]), _v9.push(_v0.bsCount[_v4]), _v11.push(_v0.tShift[_v4]), _v10.push(_v0.sCount[_v4]), _v0.sCount[_v4] = -1;
      }
      let _v15 = _v0.blkIndent;
      _v0.blkIndent = 0;
      let _v16 = _v0.push("blockquote_open", "blockquote", 1);
      _v16.markup = ">";
      let _v17 = [_v1, 0];
      _v16.map = _v17, _v0.md.block.tokenize(_v0, _v1, _v4), _v0.push("blockquote_close", "blockquote", -1).markup = ">", _v0.lineMax = _v7, _v0.parentType = _v13, _v17[1] = _v0.line;
      for (let _v0 = 0; _v0 < _v11.length; _v0++) _v0.bMarks[_v0 + _v1] = _v8[_v0], _v0.tShift[_v0 + _v1] = _v11[_v0], _v0.sCount[_v0 + _v1] = _v10[_v0], _v0.bsCount[_v0 + _v1] = _v9[_v0];
      return _v0.blkIndent = _v15, !0;
    }, ["paragraph", "reference", "blockquote", "list"]], ["hr", function (_v0, _v1, _v2, _v3) {
      let _v4 = _v0.eMarks[_v1];
      if (_v0.sCount[_v1] - _v0.blkIndent >= 4) return !1;
      let _v5 = _v0.bMarks[_v1] + _v0.tShift[_v1],
        _v6 = _v0.src.charCodeAt(_v5++);
      if (42 !== _v6 && 45 !== _v6 && 95 !== _v6) return !1;
      let _v7 = 1;
      for (; _v5 < _v4;) {
        let _v0 = _v0.src.charCodeAt(_v5++);
        if (_v0 !== _v6 && !_v140(_v0)) return !1;
        _v0 === _v6 && _v7++;
      }
      if (_v7 < 3) return !1;
      if (_v3) return !0;
      _v0.line = _v1 + 1;
      let _v8 = _v0.push("hr", "hr", 0);
      return _v8.map = [_v1, _v0.line], _v8.markup = Array(_v7 + 1).join(String.fromCharCode(_v6)), !0;
    }, ["paragraph", "reference", "blockquote", "list"]], ["list", function (_v0, _v1, _v2, _v3) {
      let _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10,
        _v11 = _v1,
        _v12 = !0;
      if (_v0.sCount[_v11] - _v0.blkIndent >= 4 || _v0.listIndent >= 0 && _v0.sCount[_v11] - _v0.listIndent >= 4 && _v0.sCount[_v11] < _v0.blkIndent) return !1;
      let _v13 = !1;
      if (_v3 && "paragraph" === _v0.parentType && _v0.sCount[_v11] >= _v0.blkIndent && (_v13 = !0), (_v10 = _v168(_v0, _v11)) >= 0) {
        if (_v8 = !0, _v6 = _v0.bMarks[_v11] + _v0.tShift[_v11], _v9 = Number(_v0.src.slice(_v6, _v10 - 1)), _v13 && 1 !== _v9) return !1;
      } else {
        if (!((_v10 = _v167(_v0, _v11)) >= 0)) return !1;
        _v8 = !1;
      }
      if (_v13 && _v0.skipSpaces(_v10) >= _v0.eMarks[_v11]) return !1;
      if (_v3) return !0;
      let _v14 = _v0.src.charCodeAt(_v10 - 1),
        _v15 = _v0.tokens.length;
      _v8 ? (_v7 = _v0.push("ordered_list_open", "ol", 1), 1 !== _v9 && (_v7.attrs = [["start", _v9]])) : _v7 = _v0.push("bullet_list_open", "ul", 1);
      let _v16 = [_v11, 0];
      _v7.map = _v16, _v7.markup = String.fromCharCode(_v14);
      let _v17 = !1,
        _v18 = _v0.md.block.ruler.getRules("list"),
        _v19 = _v0.parentType;
      for (_v0.parentType = "list"; _v11 < _v2;) {
        let _v0;
        _v5 = _v10, _v4 = _v0.eMarks[_v11];
        let _v1 = _v0.sCount[_v11] + _v10 - (_v0.bMarks[_v11] + _v0.tShift[_v11]),
          _v2 = _v1;
        for (; _v5 < _v4;) {
          let _v0 = _v0.src.charCodeAt(_v5);
          if (9 === _v0) _v2 += 4 - (_v2 + _v0.bsCount[_v11]) % 4;else if (32 === _v0) _v2++;else break;
          _v5++;
        }
        let _v3 = _v5;
        (_v0 = _v3 >= _v4 ? 1 : _v2 - _v1) > 4 && (_v0 = 1);
        let _v4 = _v1 + _v0;
        (_v7 = _v0.push("list_item_open", "li", 1)).markup = String.fromCharCode(_v14);
        let _v5 = [_v11, 0];
        _v7.map = _v5, _v8 && (_v7.info = _v0.src.slice(_v6, _v10 - 1));
        let _v6 = _v0.tight,
          _v7 = _v0.tShift[_v11],
          _v8 = _v0.sCount[_v11],
          _v9 = _v0.listIndent;
        if (_v0.listIndent = _v0.blkIndent, _v0.blkIndent = _v4, _v0.tight = !0, _v0.tShift[_v11] = _v3 - _v0.bMarks[_v11], _v0.sCount[_v11] = _v2, _v3 >= _v4 && _v0.isEmpty(_v11 + 1) ? _v0.line = Math.min(_v0.line + 2, _v2) : _v0.md.block.tokenize(_v0, _v11, _v2, !0), (!_v0.tight || _v17) && (_v12 = !1), _v17 = _v0.line - _v11 > 1 && _v0.isEmpty(_v0.line - 1), _v0.blkIndent = _v0.listIndent, _v0.listIndent = _v9, _v0.tShift[_v11] = _v7, _v0.sCount[_v11] = _v8, _v0.tight = _v6, (_v7 = _v0.push("list_item_close", "li", -1)).markup = String.fromCharCode(_v14), _v11 = _v0.line, _v5[1] = _v11, _v11 >= _v2 || _v0.sCount[_v11] < _v0.blkIndent || _v0.sCount[_v11] - _v0.blkIndent >= 4) break;
        let _v10 = !1;
        for (let _v0 = 0, _v1 = _v18.length; _v0 < _v1; _v0++) if (_v18[_v0](_v0, _v11, _v2, !0)) {
          _v10 = !0;
          break;
        }
        if (_v10) break;
        if (_v8) {
          if ((_v10 = _v168(_v0, _v11)) < 0) break;
          _v6 = _v0.bMarks[_v11] + _v0.tShift[_v11];
        } else if ((_v10 = _v167(_v0, _v11)) < 0) break;
        if (_v14 !== _v0.src.charCodeAt(_v10 - 1)) break;
      }
      return (_v7 = _v8 ? _v0.push("ordered_list_close", "ol", -1) : _v0.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(_v14), _v16[1] = _v11, _v0.line = _v11, _v0.parentType = _v19, _v12 && function (_v0, _v1) {
        let _v2 = _v0.level + 2;
        for (let _v0 = _v1 + 2, _v1 = _v0.tokens.length - 2; _v0 < _v1; _v0++) _v0.tokens[_v0].level === _v2 && "paragraph_open" === _v0.tokens[_v0].type && (_v0.tokens[_v0 + 2].hidden = !0, _v0.tokens[_v0].hidden = !0, _v0 += 2);
      }(_v0, _v15), !0;
    }, ["paragraph", "reference", "blockquote"]], ["reference", function (_v0, _v1, _v2, _v3) {
      let _v4,
        _v5 = _v0.bMarks[_v1] + _v0.tShift[_v1],
        _v6 = _v0.eMarks[_v1],
        _v7 = _v1 + 1;
      if (_v0.sCount[_v1] - _v0.blkIndent >= 4 || 91 !== _v0.src.charCodeAt(_v5)) return !1;
      function _v8(_v0) {
        let _v1 = _v0.lineMax;
        if (_v0 >= _v1 || _v0.isEmpty(_v0)) return null;
        let _v2 = !1;
        if (_v0.sCount[_v0] - _v0.blkIndent > 3 && (_v2 = !0), _v0.sCount[_v0] < 0 && (_v2 = !0), !_v2) {
          let _v0 = _v0.md.block.ruler.getRules("reference"),
            _v1 = _v0.parentType;
          _v0.parentType = "reference";
          let _v2 = !1;
          for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) if (_v0[_v0](_v0, _v0, _v1, !0)) {
            _v2 = !0;
            break;
          }
          if (_v0.parentType = _v1, _v2) return null;
        }
        let _v3 = _v0.bMarks[_v0] + _v0.tShift[_v0],
          _v4 = _v0.eMarks[_v0];
        return _v0.src.slice(_v3, _v4 + 1);
      }
      let _v9 = _v0.src.slice(_v5, _v6 + 1);
      _v6 = _v9.length;
      let _v10 = -1;
      for (_v5 = 1; _v5 < _v6; _v5++) {
        let _v0 = _v9.charCodeAt(_v5);
        if (91 === _v0) return !1;
        if (93 === _v0) {
          _v10 = _v5;
          break;
        }
        if (10 === _v0) {
          let _v0 = _v8(_v7);
          null !== _v0 && (_v9 += _v0, _v6 = _v9.length, _v7++);
        } else if (92 === _v0 && ++_v5 < _v6 && 10 === _v9.charCodeAt(_v5)) {
          let _v0 = _v8(_v7);
          null !== _v0 && (_v9 += _v0, _v6 = _v9.length, _v7++);
        }
      }
      if (_v10 < 0 || 58 !== _v9.charCodeAt(_v10 + 1)) return !1;
      for (_v5 = _v10 + 2; _v5 < _v6; _v5++) {
        let _v0 = _v9.charCodeAt(_v5);
        if (10 === _v0) {
          let _v0 = _v8(_v7);
          null !== _v0 && (_v9 += _v0, _v6 = _v9.length, _v7++);
        } else if (_v140(_v0)) ;else break;
      }
      let _v11 = _v0.md.helpers.parseLinkDestination(_v9, _v5, _v6);
      if (!_v11.ok) return !1;
      let _v12 = _v0.md.normalizeLink(_v11.str);
      if (!_v0.md.validateLink(_v12)) return !1;
      let _v13 = _v5 = _v11.pos,
        _v14 = _v7,
        _v15 = _v5;
      for (; _v5 < _v6; _v5++) {
        let _v0 = _v9.charCodeAt(_v5);
        if (10 === _v0) {
          let _v0 = _v8(_v7);
          null !== _v0 && (_v9 += _v0, _v6 = _v9.length, _v7++);
        } else if (_v140(_v0)) ;else break;
      }
      let _v16 = _v0.md.helpers.parseLinkTitle(_v9, _v5, _v6);
      for (; _v16.can_continue;) {
        let _v0 = _v8(_v7);
        if (null === _v0) break;
        _v9 += _v0, _v5 = _v6, _v6 = _v9.length, _v7++, _v16 = _v0.md.helpers.parseLinkTitle(_v9, _v5, _v6, _v16);
      }
      for (_v5 < _v6 && _v15 !== _v5 && _v16.ok ? (_v4 = _v16.str, _v5 = _v16.pos) : (_v4 = "", _v5 = _v13, _v7 = _v14); _v5 < _v6 && _v140(_v9.charCodeAt(_v5));) _v5++;
      if (_v5 < _v6 && 10 !== _v9.charCodeAt(_v5) && _v4) for (_v4 = "", _v5 = _v13, _v7 = _v14; _v5 < _v6 && _v140(_v9.charCodeAt(_v5));) _v5++;
      if (_v5 < _v6 && 10 !== _v9.charCodeAt(_v5)) return !1;
      let _v17 = _v144(_v9.slice(1, _v10));
      return !!_v17 && (!!_v3 || (void 0 === _v0.env.references && (_v0.env.references = {}), void 0 === _v0.env.references[_v17] && (_v0.env.references[_v17] = {
        title: _v4,
        href: _v12
      }), _v0.line = _v7, !0));
    }], ["html_block", function (_v0, _v1, _v2, _v3) {
      let _v4 = _v0.bMarks[_v1] + _v0.tShift[_v1],
        _v5 = _v0.eMarks[_v1];
      if (_v0.sCount[_v1] - _v0.blkIndent >= 4 || !_v0.md.options.html || 60 !== _v0.src.charCodeAt(_v4)) return !1;
      let _v6 = _v0.src.slice(_v4, _v5),
        _v7 = 0;
      for (; _v7 < _v173.length && !_v173[_v7][0].test(_v6); _v7++);
      if (_v7 === _v173.length) return !1;
      if (_v3) return _v173[_v7][2];
      let _v8 = _v1 + 1;
      if (!_v173[_v7][1].test(_v6)) {
        for (; _v8 < _v2 && !(_v0.sCount[_v8] < _v0.blkIndent); _v8++) if (_v4 = _v0.bMarks[_v8] + _v0.tShift[_v8], _v5 = _v0.eMarks[_v8], _v6 = _v0.src.slice(_v4, _v5), _v173[_v7][1].test(_v6)) {
          0 !== _v6.length && _v8++;
          break;
        }
      }
      _v0.line = _v8;
      let _v9 = _v0.push("html_block", "", 0);
      return _v9.map = [_v1, _v8], _v9.content = _v0.getLines(_v1, _v8, _v0.blkIndent, !0), !0;
    }, ["paragraph", "reference", "blockquote"]], ["heading", function (_v0, _v1, _v2, _v3) {
      let _v4 = _v0.bMarks[_v1] + _v0.tShift[_v1],
        _v5 = _v0.eMarks[_v1];
      if (_v0.sCount[_v1] - _v0.blkIndent >= 4) return !1;
      let _v6 = _v0.src.charCodeAt(_v4);
      if (35 !== _v6 || _v4 >= _v5) return !1;
      let _v7 = 1;
      for (_v6 = _v0.src.charCodeAt(++_v4); 35 === _v6 && _v4 < _v5 && _v7 <= 6;) _v7++, _v6 = _v0.src.charCodeAt(++_v4);
      if (_v7 > 6 || _v4 < _v5 && !_v140(_v6)) return !1;
      if (_v3) return !0;
      _v5 = _v0.skipSpacesBack(_v5, _v4);
      let _v8 = _v0.skipCharsBack(_v5, 35, _v4);
      _v8 > _v4 && _v140(_v0.src.charCodeAt(_v8 - 1)) && (_v5 = _v8), _v0.line = _v1 + 1;
      let _v9 = _v0.push("heading_open", "h" + String(_v7), 1);
      _v9.markup = "########".slice(0, _v7), _v9.map = [_v1, _v0.line];
      let _v10 = _v0.push("inline", "", 0);
      return _v10.content = _v0.src.slice(_v4, _v5).trim(), _v10.map = [_v1, _v0.line], _v10.children = [], _v0.push("heading_close", "h" + String(_v7), -1).markup = "########".slice(0, _v7), !0;
    }, ["paragraph", "reference", "blockquote"]], ["lheading", function (_v0, _v1, _v2) {
      let _v3,
        _v4 = _v0.md.block.ruler.getRules("paragraph");
      if (_v0.sCount[_v1] - _v0.blkIndent >= 4) return !1;
      let _v5 = _v0.parentType;
      _v0.parentType = "paragraph";
      let _v6 = 0,
        _v7 = _v1 + 1;
      for (; _v7 < _v2 && !_v0.isEmpty(_v7); _v7++) {
        if (_v0.sCount[_v7] - _v0.blkIndent > 3) continue;
        if (_v0.sCount[_v7] >= _v0.blkIndent) {
          let _v0 = _v0.bMarks[_v7] + _v0.tShift[_v7],
            _v1 = _v0.eMarks[_v7];
          if (_v0 < _v1 && (45 === (_v3 = _v0.src.charCodeAt(_v0)) || 61 === _v3) && (_v0 = _v0.skipChars(_v0, _v3), (_v0 = _v0.skipSpaces(_v0)) >= _v1)) {
            _v6 = 61 === _v3 ? 1 : 2;
            break;
          }
        }
        if (_v0.sCount[_v7] < 0) continue;
        let _v0 = !1;
        for (let _v0 = 0, _v1 = _v4.length; _v0 < _v1; _v0++) if (_v4[_v0](_v0, _v7, _v2, !0)) {
          _v0 = !0;
          break;
        }
        if (_v0) break;
      }
      if (!_v6) return !1;
      let _v8 = _v0.getLines(_v1, _v7, _v0.blkIndent, !1).trim();
      _v0.line = _v7 + 1;
      let _v9 = _v0.push("heading_open", "h" + String(_v6), 1);
      _v9.markup = String.fromCharCode(_v3), _v9.map = [_v1, _v0.line];
      let _v10 = _v0.push("inline", "", 0);
      return _v10.content = _v8, _v10.map = [_v1, _v0.line - 1], _v10.children = [], _v0.push("heading_close", "h" + String(_v6), -1).markup = String.fromCharCode(_v3), _v0.parentType = _v5, !0;
    }], ["paragraph", function (_v0, _v1, _v2) {
      let _v3 = _v0.md.block.ruler.getRules("paragraph"),
        _v4 = _v0.parentType,
        _v5 = _v1 + 1;
      for (_v0.parentType = "paragraph"; _v5 < _v2 && !_v0.isEmpty(_v5); _v5++) {
        if (_v0.sCount[_v5] - _v0.blkIndent > 3 || _v0.sCount[_v5] < 0) continue;
        let _v0 = !1;
        for (let _v0 = 0, _v1 = _v3.length; _v0 < _v1; _v0++) if (_v3[_v0](_v0, _v5, _v2, !0)) {
          _v0 = !0;
          break;
        }
        if (_v0) break;
      }
      let _v6 = _v0.getLines(_v1, _v5, _v0.blkIndent, !1).trim();
      _v0.line = _v5, _v0.push("paragraph_open", "p", 1).map = [_v1, _v0.line];
      let _v7 = _v0.push("inline", "", 0);
      return _v7.content = _v6, _v7.map = [_v1, _v0.line], _v7.children = [], _v0.push("paragraph_close", "p", -1), _v0.parentType = _v4, !0;
    }]];
  function _v175() {
    this.ruler = new _v149();
    for (let _v0 = 0; _v0 < _v174.length; _v0++) this.ruler.push(_v174[_v0][0], _v174[_v0][1], {
      alt: (_v174[_v0][2] || []).slice()
    });
  }
  function _v176(_v0, _v1, _v2, _v3) {
    this.src = _v0, this.env = _v2, this.md = _v1, this.tokens = _v3, this.tokens_meta = Array(_v3.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
  }
  _v175.prototype.tokenize = function (_v0, _v1, _v2) {
    let _v3 = this.ruler.getRules(""),
      _v4 = _v3.length,
      _v5 = _v0.md.options.maxNesting,
      _v6 = _v1,
      _v7 = !1;
    for (; _v6 < _v2 && (_v0.line = _v6 = _v0.skipEmptyLines(_v6), !(_v6 >= _v2) && !(_v0.sCount[_v6] < _v0.blkIndent));) {
      if (_v0.level >= _v5) {
        _v0.line = _v2;
        break;
      }
      let _v0 = _v0.line,
        _v1 = !1;
      for (let _v0 = 0; _v0 < _v4; _v0++) if (_v1 = _v3[_v0](_v0, _v6, _v2, !1)) {
        if (_v0 >= _v0.line) throw Error("block rule didn't increment state.line");
        break;
      }
      if (!_v1) throw Error("none of the block rules matched");
      _v0.tight = !_v7, _v0.isEmpty(_v0.line - 1) && (_v7 = !0), (_v6 = _v0.line) < _v2 && _v0.isEmpty(_v6) && (_v7 = !0, _v0.line = ++_v6);
    }
  }, _v175.prototype.parse = function (_v0, _v1, _v2, _v3) {
    if (!_v0) return;
    let _v4 = new this.State(_v0, _v1, _v2, _v3);
    this.tokenize(_v4, _v4.line, _v4.lineMax);
  }, _v175.prototype.State = _v164, _v176.prototype.pushPending = function () {
    let _v0 = new _v150("text", "", 0);
    return _v0.content = this.pending, _v0.level = this.pendingLevel, this.tokens.push(_v0), this.pending = "", _v0;
  }, _v176.prototype.push = function (_v0, _v1, _v2) {
    this.pending && this.pushPending();
    let _v3 = new _v150(_v0, _v1, _v2),
      _v4 = null;
    return _v2 < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), _v3.level = this.level, _v2 > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], _v4 = {
      delimiters: this.delimiters
    }), this.pendingLevel = this.level, this.tokens.push(_v3), this.tokens_meta.push(_v4), _v3;
  }, _v176.prototype.scanDelims = function (_v0, _v1) {
    let _v2 = this.posMax,
      _v3 = this.src.charCodeAt(_v0),
      _v4 = _v0 > 0 ? this.src.charCodeAt(_v0 - 1) : 32,
      _v5 = _v0;
    for (; _v5 < _v2 && this.src.charCodeAt(_v5) === _v3;) _v5++;
    let _v6 = _v5 - _v0,
      _v7 = _v5 < _v2 ? this.src.charCodeAt(_v5) : 32,
      _v8 = _v143(_v4) || _v142(String.fromCharCode(_v4)),
      _v9 = _v143(_v7) || _v142(String.fromCharCode(_v7)),
      _v10 = _v141(_v4),
      _v11 = _v141(_v7),
      _v12 = !_v11 && (!_v9 || _v10 || _v8),
      _v13 = !_v10 && (!_v8 || _v11 || _v9);
    return {
      can_open: _v12 && (_v1 || !_v13 || _v8),
      can_close: _v13 && (_v1 || !_v12 || _v9),
      length: _v6
    };
  }, _v176.prototype.Token = _v150;
  let _v177 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i,
    _v178 = [];
  for (let _v0 = 0; _v0 < 256; _v0++) _v178.push(0);
  function _v179(_v0, _v1) {
    let _v2,
      _v3 = [],
      _v4 = _v1.length;
    for (let _v0 = 0; _v0 < _v4; _v0++) {
      let _v0 = _v1[_v0];
      if (126 !== _v0.marker || -1 === _v0.end) continue;
      let _v1 = _v1[_v0.end];
      (_v2 = _v0.tokens[_v0.token]).type = "s_open", _v2.tag = "s", _v2.nesting = 1, _v2.markup = "~~", _v2.content = "", (_v2 = _v0.tokens[_v1.token]).type = "s_close", _v2.tag = "s", _v2.nesting = -1, _v2.markup = "~~", _v2.content = "", "text" === _v0.tokens[_v1.token - 1].type && "~" === _v0.tokens[_v1.token - 1].content && _v3.push(_v1.token - 1);
    }
    for (; _v3.length;) {
      let _v0 = _v3.pop(),
        _v1 = _v0 + 1;
      for (; _v1 < _v0.tokens.length && "s_close" === _v0.tokens[_v1].type;) _v1++;
      _v0 !== --_v1 && (_v2 = _v0.tokens[_v1], _v0.tokens[_v1] = _v0.tokens[_v0], _v0.tokens[_v0] = _v2);
    }
  }
  "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function (_v0) {
    _v178[_v0.charCodeAt(0)] = 1;
  });
  function _v180(_v0, _v1) {
    let _v2 = _v1.length;
    for (let _v0 = _v2 - 1; _v0 >= 0; _v0--) {
      let _v0 = _v1[_v0];
      if (95 !== _v0.marker && 42 !== _v0.marker || -1 === _v0.end) continue;
      let _v1 = _v1[_v0.end],
        _v2 = _v0 > 0 && _v1[_v0 - 1].end === _v0.end + 1 && _v1[_v0 - 1].marker === _v0.marker && _v1[_v0 - 1].token === _v0.token - 1 && _v1[_v0.end + 1].token === _v1.token + 1,
        _v3 = String.fromCharCode(_v0.marker),
        _v4 = _v0.tokens[_v0.token];
      _v4.type = _v2 ? "strong_open" : "em_open", _v4.tag = _v2 ? "strong" : "em", _v4.nesting = 1, _v4.markup = _v2 ? _v3 + _v3 : _v3, _v4.content = "";
      let _v5 = _v0.tokens[_v1.token];
      _v5.type = _v2 ? "strong_close" : "em_close", _v5.tag = _v2 ? "strong" : "em", _v5.nesting = -1, _v5.markup = _v2 ? _v3 + _v3 : _v3, _v5.content = "", _v2 && (_v0.tokens[_v1[_v0 - 1].token].content = "", _v0.tokens[_v1[_v0.end + 1].token].content = "", _v0--);
    }
  }
  let _v181 = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,
    _v182 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/,
    _v183 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,
    _v184 = /^&([a-z][a-z0-9]{1,31});/i;
  function _v185(_v0) {
    let _v1 = {},
      _v2 = _v0.length;
    if (!_v2) return;
    let _v3 = 0,
      _v4 = -2,
      _v5 = [];
    for (let _v0 = 0; _v0 < _v2; _v0++) {
      let _v0 = _v0[_v0];
      if (_v5.push(0), (_v0[_v3].marker !== _v0.marker || _v4 !== _v0.token - 1) && (_v3 = _v0), _v4 = _v0.token, _v0.length = _v0.length || 0, !_v0.close) continue;
      _v1.hasOwnProperty(_v0.marker) || (_v1[_v0.marker] = [-1, -1, -1, -1, -1, -1]);
      let _v1 = _v1[_v0.marker][3 * !!_v0.open + _v0.length % 3],
        _v2 = _v3 - _v5[_v3] - 1,
        _v3 = _v2;
      for (; _v2 > _v1; _v2 -= _v5[_v2] + 1) {
        let _v0 = _v0[_v2];
        if (_v0.marker === _v0.marker && _v0.open && _v0.end < 0) {
          let _v0 = !1;
          if ((_v0.close || _v0.open) && (_v0.length + _v0.length) % 3 == 0 && (_v0.length % 3 != 0 || _v0.length % 3 != 0) && (_v0 = !0), !_v0) {
            let _v0 = _v2 > 0 && !_v0[_v2 - 1].open ? _v5[_v2 - 1] + 1 : 0;
            _v5[_v0] = _v0 - _v2 + _v0, _v5[_v2] = _v0, _v0.open = !1, _v0.end = _v0, _v0.close = !1, _v3 = -1, _v4 = -2;
            break;
          }
        }
      }
      -1 !== _v3 && (_v1[_v0.marker][3 * !!_v0.open + (_v0.length || 0) % 3] = _v3);
    }
  }
  let _v186 = [["text", function (_v0, _v1) {
      let _v2 = _v0.pos;
      for (; _v2 < _v0.posMax && !function (_v0) {
        switch (_v0) {
          case 10:
          case 33:
          case 35:
          case 36:
          case 37:
          case 38:
          case 42:
          case 43:
          case 45:
          case 58:
          case 60:
          case 61:
          case 62:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 125:
          case 126:
            return !0;
          default:
            return !1;
        }
      }(_v0.src.charCodeAt(_v2));) _v2++;
      return _v2 !== _v0.pos && (_v1 || (_v0.pending += _v0.src.slice(_v0.pos, _v2)), _v0.pos = _v2, !0);
    }], ["linkify", function (_v0, _v1) {
      if (!_v0.md.options.linkify || _v0.linkLevel > 0) return !1;
      let _v2 = _v0.pos;
      if (_v2 + 3 > _v0.posMax || 58 !== _v0.src.charCodeAt(_v2) || 47 !== _v0.src.charCodeAt(_v2 + 1) || 47 !== _v0.src.charCodeAt(_v2 + 2)) return !1;
      let _v3 = _v0.pending.match(_v177);
      if (!_v3) return !1;
      let _v4 = _v3[1],
        _v5 = _v0.md.linkify.matchAtStart(_v0.src.slice(_v2 - _v4.length));
      if (!_v5) return !1;
      let _v6 = _v5.url;
      if (_v6.length <= _v4.length) return !1;
      let _v7 = _v6.length;
      for (; _v7 > 0 && 42 === _v6.charCodeAt(_v7 - 1);) _v7--;
      _v7 !== _v6.length && (_v6 = _v6.slice(0, _v7));
      let _v8 = _v0.md.normalizeLink(_v6);
      if (!_v0.md.validateLink(_v8)) return !1;
      if (!_v1) {
        _v0.pending = _v0.pending.slice(0, -_v4.length);
        let _v0 = _v0.push("link_open", "a", 1);
        _v0.attrs = [["href", _v8]], _v0.markup = "linkify", _v0.info = "auto", _v0.push("text", "", 0).content = _v0.md.normalizeLinkText(_v6);
        let _v1 = _v0.push("link_close", "a", -1);
        _v1.markup = "linkify", _v1.info = "auto";
      }
      return _v0.pos += _v6.length - _v4.length, !0;
    }], ["newline", function (_v0, _v1) {
      let _v2 = _v0.pos;
      if (10 !== _v0.src.charCodeAt(_v2)) return !1;
      let _v3 = _v0.pending.length - 1,
        _v4 = _v0.posMax;
      if (!_v1) if (_v3 >= 0 && 32 === _v0.pending.charCodeAt(_v3)) {
        if (_v3 >= 1 && 32 === _v0.pending.charCodeAt(_v3 - 1)) {
          let _v0 = _v3 - 1;
          for (; _v0 >= 1 && 32 === _v0.pending.charCodeAt(_v0 - 1);) _v0--;
          _v0.pending = _v0.pending.slice(0, _v0), _v0.push("hardbreak", "br", 0);
        } else _v0.pending = _v0.pending.slice(0, -1), _v0.push("softbreak", "br", 0);
      } else _v0.push("softbreak", "br", 0);
      for (_v2++; _v2 < _v4 && _v140(_v0.src.charCodeAt(_v2));) _v2++;
      return _v0.pos = _v2, !0;
    }], ["escape", function (_v0, _v1) {
      let _v2 = _v0.pos,
        _v3 = _v0.posMax;
      if (92 !== _v0.src.charCodeAt(_v2) || ++_v2 >= _v3) return !1;
      let _v4 = _v0.src.charCodeAt(_v2);
      if (10 === _v4) {
        for (_v1 || _v0.push("hardbreak", "br", 0), _v2++; _v2 < _v3 && _v140(_v4 = _v0.src.charCodeAt(_v2));) _v2++;
        return _v0.pos = _v2, !0;
      }
      let _v5 = _v0.src[_v2];
      if (_v4 >= 0 && _v4 <= 0 && _v2 + 1 < _v3) {
        let _v0 = _v0.src.charCodeAt(_v2 + 1);
        _v0 >= 0 && _v0 <= 0 && (_v5 += _v0.src[_v2 + 1], _v2++);
      }
      let _v6 = "\\" + _v5;
      if (!_v1) {
        let _v0 = _v0.push("text_special", "", 0);
        _v4 < 256 && 0 !== _v178[_v4] ? _v0.content = _v5 : _v0.content = _v6, _v0.markup = _v6, _v0.info = "escape";
      }
      return _v0.pos = _v2 + 1, !0;
    }], ["backticks", function (_v0, _v1) {
      let _v2,
        _v3 = _v0.pos;
      if (96 !== _v0.src.charCodeAt(_v3)) return !1;
      let _v4 = _v3;
      _v3++;
      let _v5 = _v0.posMax;
      for (; _v3 < _v5 && 96 === _v0.src.charCodeAt(_v3);) _v3++;
      let _v6 = _v0.src.slice(_v4, _v3),
        _v7 = _v6.length;
      if (_v0.backticksScanned && (_v0.backticks[_v7] || 0) <= _v4) return _v1 || (_v0.pending += _v6), _v0.pos += _v7, !0;
      let _v8 = _v3;
      for (; -1 !== (_v2 = _v0.src.indexOf("`", _v8));) {
        for (_v8 = _v2 + 1; _v8 < _v5 && 96 === _v0.src.charCodeAt(_v8);) _v8++;
        let _v0 = _v8 - _v2;
        if (_v0 === _v7) {
          if (!_v1) {
            let _v0 = _v0.push("code_inline", "code", 0);
            _v0.markup = _v6, _v0.content = _v0.src.slice(_v3, _v2).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
          }
          return _v0.pos = _v8, !0;
        }
        _v0.backticks[_v0] = _v2;
      }
      return _v0.backticksScanned = !0, _v1 || (_v0.pending += _v6), _v0.pos += _v7, !0;
    }], ["strikethrough", function (_v0, _v1) {
      let _v2 = _v0.pos,
        _v3 = _v0.src.charCodeAt(_v2);
      if (_v1 || 126 !== _v3) return !1;
      let _v4 = _v0.scanDelims(_v0.pos, !0),
        _v5 = _v4.length,
        _v6 = String.fromCharCode(_v3);
      if (_v5 < 2) return !1;
      _v5 % 2 && (_v0.push("text", "", 0).content = _v6, _v5--);
      for (let _v0 = 0; _v0 < _v5; _v0 += 2) _v0.push("text", "", 0).content = _v6 + _v6, _v0.delimiters.push({
        marker: _v3,
        length: 0,
        token: _v0.tokens.length - 1,
        end: -1,
        open: _v4.can_open,
        close: _v4.can_close
      });
      return _v0.pos += _v4.length, !0;
    }], ["emphasis", function (_v0, _v1) {
      let _v2 = _v0.pos,
        _v3 = _v0.src.charCodeAt(_v2);
      if (_v1 || 95 !== _v3 && 42 !== _v3) return !1;
      let _v4 = _v0.scanDelims(_v0.pos, 42 === _v3);
      for (let _v0 = 0; _v0 < _v4.length; _v0++) _v0.push("text", "", 0).content = String.fromCharCode(_v3), _v0.delimiters.push({
        marker: _v3,
        length: _v4.length,
        token: _v0.tokens.length - 1,
        end: -1,
        open: _v4.can_open,
        close: _v4.can_close
      });
      return _v0.pos += _v4.length, !0;
    }], ["link", function (_v0, _v1) {
      let _v2,
        _v3,
        _v4,
        _v5,
        _v6 = "",
        _v7 = "",
        _v8 = _v0.pos,
        _v9 = !0;
      if (91 !== _v0.src.charCodeAt(_v0.pos)) return !1;
      let _v10 = _v0.pos,
        _v11 = _v0.posMax,
        _v12 = _v0.pos + 1,
        _v13 = _v0.md.helpers.parseLinkLabel(_v0, _v0.pos, !0);
      if (_v13 < 0) return !1;
      let _v14 = _v13 + 1;
      if (_v14 < _v11 && 40 === _v0.src.charCodeAt(_v14)) {
        for (_v9 = !1, _v14++; _v14 < _v11 && (_v140(_v2 = _v0.src.charCodeAt(_v14)) || 10 === _v2); _v14++);
        if (_v14 >= _v11) return !1;
        if (_v8 = _v14, (_v4 = _v0.md.helpers.parseLinkDestination(_v0.src, _v14, _v0.posMax)).ok) {
          for (_v6 = _v0.md.normalizeLink(_v4.str), _v0.md.validateLink(_v6) ? _v14 = _v4.pos : _v6 = "", _v8 = _v14; _v14 < _v11 && (_v140(_v2 = _v0.src.charCodeAt(_v14)) || 10 === _v2); _v14++);
          if (_v4 = _v0.md.helpers.parseLinkTitle(_v0.src, _v14, _v0.posMax), _v14 < _v11 && _v8 !== _v14 && _v4.ok) for (_v7 = _v4.str, _v14 = _v4.pos; _v14 < _v11 && (_v140(_v2 = _v0.src.charCodeAt(_v14)) || 10 === _v2); _v14++);
        }
        (_v14 >= _v11 || 41 !== _v0.src.charCodeAt(_v14)) && (_v9 = !0), _v14++;
      }
      if (_v9) {
        if (void 0 === _v0.env.references) return !1;
        if (_v14 < _v11 && 91 === _v0.src.charCodeAt(_v14) ? (_v8 = _v14 + 1, (_v14 = _v0.md.helpers.parseLinkLabel(_v0, _v14)) >= 0 ? _v3 = _v0.src.slice(_v8, _v14++) : _v14 = _v13 + 1) : _v14 = _v13 + 1, _v3 || (_v3 = _v0.src.slice(_v12, _v13)), !(_v5 = _v0.env.references[_v144(_v3)])) return _v0.pos = _v10, !1;
        _v6 = _v5.href, _v7 = _v5.title;
      }
      if (!_v1) {
        _v0.pos = _v12, _v0.posMax = _v13;
        let _v0 = _v0.push("link_open", "a", 1),
          _v1 = [["href", _v6]];
        _v0.attrs = _v1, _v7 && _v1.push(["title", _v7]), _v0.linkLevel++, _v0.md.inline.tokenize(_v0), _v0.linkLevel--, _v0.push("link_close", "a", -1);
      }
      return _v0.pos = _v14, _v0.posMax = _v11, !0;
    }], ["image", function (_v0, _v1) {
      let _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10 = "",
        _v11 = _v0.pos,
        _v12 = _v0.posMax;
      if (33 !== _v0.src.charCodeAt(_v0.pos) || 91 !== _v0.src.charCodeAt(_v0.pos + 1)) return !1;
      let _v13 = _v0.pos + 2,
        _v14 = _v0.md.helpers.parseLinkLabel(_v0, _v0.pos + 1, !1);
      if (_v14 < 0) return !1;
      if ((_v5 = _v14 + 1) < _v12 && 40 === _v0.src.charCodeAt(_v5)) {
        for (_v5++; _v5 < _v12 && (_v140(_v2 = _v0.src.charCodeAt(_v5)) || 10 === _v2); _v5++);
        if (_v5 >= _v12) return !1;
        for (_v9 = _v5, (_v7 = _v0.md.helpers.parseLinkDestination(_v0.src, _v5, _v0.posMax)).ok && (_v10 = _v0.md.normalizeLink(_v7.str), _v0.md.validateLink(_v10) ? _v5 = _v7.pos : _v10 = ""), _v9 = _v5; _v5 < _v12 && (_v140(_v2 = _v0.src.charCodeAt(_v5)) || 10 === _v2); _v5++);
        if (_v7 = _v0.md.helpers.parseLinkTitle(_v0.src, _v5, _v0.posMax), _v5 < _v12 && _v9 !== _v5 && _v7.ok) for (_v8 = _v7.str, _v5 = _v7.pos; _v5 < _v12 && (_v140(_v2 = _v0.src.charCodeAt(_v5)) || 10 === _v2); _v5++);else _v8 = "";
        if (_v5 >= _v12 || 41 !== _v0.src.charCodeAt(_v5)) return _v0.pos = _v11, !1;
        _v5++;
      } else {
        if (void 0 === _v0.env.references) return !1;
        if (_v5 < _v12 && 91 === _v0.src.charCodeAt(_v5) ? (_v9 = _v5 + 1, (_v5 = _v0.md.helpers.parseLinkLabel(_v0, _v5)) >= 0 ? _v4 = _v0.src.slice(_v9, _v5++) : _v5 = _v14 + 1) : _v5 = _v14 + 1, _v4 || (_v4 = _v0.src.slice(_v13, _v14)), !(_v6 = _v0.env.references[_v144(_v4)])) return _v0.pos = _v11, !1;
        _v10 = _v6.href, _v8 = _v6.title;
      }
      if (!_v1) {
        _v3 = _v0.src.slice(_v13, _v14);
        let _v0 = [];
        _v0.md.inline.parse(_v3, _v0.md, _v0.env, _v0);
        let _v1 = _v0.push("image", "img", 0),
          _v2 = [["src", _v10], ["alt", ""]];
        _v1.attrs = _v2, _v1.children = _v0, _v1.content = _v3, _v8 && _v2.push(["title", _v8]);
      }
      return _v0.pos = _v5, _v0.posMax = _v12, !0;
    }], ["autolink", function (_v0, _v1) {
      let _v2 = _v0.pos;
      if (60 !== _v0.src.charCodeAt(_v2)) return !1;
      let _v3 = _v0.pos,
        _v4 = _v0.posMax;
      for (;;) {
        if (++_v2 >= _v4) return !1;
        let _v0 = _v0.src.charCodeAt(_v2);
        if (60 === _v0) return !1;
        if (62 === _v0) break;
      }
      let _v5 = _v0.src.slice(_v3 + 1, _v2);
      if (_v182.test(_v5)) {
        let _v0 = _v0.md.normalizeLink(_v5);
        if (!_v0.md.validateLink(_v0)) return !1;
        if (!_v1) {
          let _v0 = _v0.push("link_open", "a", 1);
          _v0.attrs = [["href", _v0]], _v0.markup = "autolink", _v0.info = "auto", _v0.push("text", "", 0).content = _v0.md.normalizeLinkText(_v5);
          let _v1 = _v0.push("link_close", "a", -1);
          _v1.markup = "autolink", _v1.info = "auto";
        }
        return _v0.pos += _v5.length + 2, !0;
      }
      if (_v181.test(_v5)) {
        let _v0 = _v0.md.normalizeLink("mailto:" + _v5);
        if (!_v0.md.validateLink(_v0)) return !1;
        if (!_v1) {
          let _v0 = _v0.push("link_open", "a", 1);
          _v0.attrs = [["href", _v0]], _v0.markup = "autolink", _v0.info = "auto", _v0.push("text", "", 0).content = _v0.md.normalizeLinkText(_v5);
          let _v1 = _v0.push("link_close", "a", -1);
          _v1.markup = "autolink", _v1.info = "auto";
        }
        return _v0.pos += _v5.length + 2, !0;
      }
      return !1;
    }], ["html_inline", function (_v0, _v1) {
      let _v2;
      if (!_v0.md.options.html) return !1;
      let _v3 = _v0.posMax,
        _v4 = _v0.pos;
      if (60 !== _v0.src.charCodeAt(_v4) || _v4 + 2 >= _v3) return !1;
      let _v5 = _v0.src.charCodeAt(_v4 + 1);
      if (33 !== _v5 && 63 !== _v5 && 47 !== _v5 && (!((_v2 = 32 | _v5) >= 97) || !(_v2 <= 122))) return !1;
      let _v6 = _v0.src.slice(_v4).match(_v171);
      if (!_v6) return !1;
      if (!_v1) {
        var _v7, _v8;
        let _v0 = _v0.push("html_inline", "", 0);
        _v0.content = _v6[0], _v7 = _v0.content, /^<a[>\s]/i.test(_v7) && _v0.linkLevel++, _v8 = _v0.content, /^<\/a\s*>/i.test(_v8) && _v0.linkLevel--;
      }
      return _v0.pos += _v6[0].length, !0;
    }], ["entity", function (_v0, _v1) {
      let _v2 = _v0.pos,
        _v3 = _v0.posMax;
      if (38 !== _v0.src.charCodeAt(_v2) || _v2 + 1 >= _v3) return !1;
      if (35 === _v0.src.charCodeAt(_v2 + 1)) {
        let _v0 = _v0.src.slice(_v2).match(_v183);
        if (_v0) {
          if (!_v1) {
            let _v0 = "x" === _v0[1][0].toLowerCase() ? parseInt(_v0[1].slice(1), 16) : parseInt(_v0[1], 10),
              _v1 = _v0.push("text_special", "", 0);
            _v1.content = _v128(_v0) ? _v129(_v0) : _v129(0), _v1.markup = _v0[0], _v1.info = "entity";
          }
          return _v0.pos += _v0[0].length, !0;
        }
      } else {
        let _v0 = _v0.src.slice(_v2).match(_v184);
        if (_v0) {
          let _v0 = _v122(_v0[0]);
          if (_v0 !== _v0[0]) {
            if (!_v1) {
              let _v0 = _v0.push("text_special", "", 0);
              _v0.content = _v0, _v0.markup = _v0[0], _v0.info = "entity";
            }
            return _v0.pos += _v0[0].length, !0;
          }
        }
      }
      return !1;
    }]],
    _v187 = [["balance_pairs", function (_v0) {
      let _v1 = _v0.tokens_meta,
        _v2 = _v0.tokens_meta.length;
      _v185(_v0.delimiters);
      for (let _v0 = 0; _v0 < _v2; _v0++) _v1[_v0] && _v1[_v0].delimiters && _v185(_v1[_v0].delimiters);
    }], ["strikethrough", function (_v0) {
      let _v1 = _v0.tokens_meta,
        _v2 = _v0.tokens_meta.length;
      _v179(_v0, _v0.delimiters);
      for (let _v0 = 0; _v0 < _v2; _v0++) _v1[_v0] && _v1[_v0].delimiters && _v179(_v0, _v1[_v0].delimiters);
    }], ["emphasis", function (_v0) {
      let _v1 = _v0.tokens_meta,
        _v2 = _v0.tokens_meta.length;
      _v180(_v0, _v0.delimiters);
      for (let _v0 = 0; _v0 < _v2; _v0++) _v1[_v0] && _v1[_v0].delimiters && _v180(_v0, _v1[_v0].delimiters);
    }], ["fragments_join", function (_v0) {
      let _v1,
        _v2,
        _v3 = 0,
        _v4 = _v0.tokens,
        _v5 = _v0.tokens.length;
      for (_v1 = _v2 = 0; _v1 < _v5; _v1++) _v4[_v1].nesting < 0 && _v3--, _v4[_v1].level = _v3, _v4[_v1].nesting > 0 && _v3++, "text" === _v4[_v1].type && _v1 + 1 < _v5 && "text" === _v4[_v1 + 1].type ? _v4[_v1 + 1].content = _v4[_v1].content + _v4[_v1 + 1].content : (_v1 !== _v2 && (_v4[_v2] = _v4[_v1]), _v2++);
      _v1 !== _v2 && (_v4.length = _v2);
    }]];
  function _v188() {
    this.ruler = new _v149();
    for (let _v0 = 0; _v0 < _v186.length; _v0++) this.ruler.push(_v186[_v0][0], _v186[_v0][1]);
    this.ruler2 = new _v149();
    for (let _v0 = 0; _v0 < _v187.length; _v0++) this.ruler2.push(_v187[_v0][0], _v187[_v0][1]);
  }
  function _v189(_v0) {
    let _v1 = Array.prototype.slice.call(arguments, 1);
    return _v1.forEach(function (_v0) {
      _v0 && Object.keys(_v0).forEach(function (_v0) {
        _v0[_v0] = _v0[_v0];
      });
    }), _v0;
  }
  function _v190(_v0) {
    return Object.prototype.toString.call(_v0);
  }
  function _v191(_v0) {
    return "[object Function]" === _v190(_v0);
  }
  function _v192(_v0) {
    return _v0.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  _v188.prototype.skipToken = function (_v0) {
    let _v1 = _v0.pos,
      _v2 = this.ruler.getRules(""),
      _v3 = _v2.length,
      _v4 = _v0.md.options.maxNesting,
      _v5 = _v0.cache;
    if (void 0 !== _v5[_v1]) {
      _v0.pos = _v5[_v1];
      return;
    }
    let _v6 = !1;
    if (_v0.level < _v4) {
      for (let _v0 = 0; _v0 < _v3; _v0++) if (_v0.level++, _v6 = _v2[_v0](_v0, !0), _v0.level--, _v6) {
        if (_v1 >= _v0.pos) throw Error("inline rule didn't increment state.pos");
        break;
      }
    } else _v0.pos = _v0.posMax;
    !_v6 && _v0.pos++, _v5[_v1] = _v0.pos;
  }, _v188.prototype.tokenize = function (_v0) {
    let _v1 = this.ruler.getRules(""),
      _v2 = _v1.length,
      _v3 = _v0.posMax,
      _v4 = _v0.md.options.maxNesting;
    for (; _v0.pos < _v3;) {
      let _v0 = _v0.pos,
        _v1 = !1;
      if (_v0.level < _v4) {
        for (let _v0 = 0; _v0 < _v2; _v0++) if (_v1 = _v1[_v0](_v0, !1)) {
          if (_v0 >= _v0.pos) throw Error("inline rule didn't increment state.pos");
          break;
        }
      }
      if (_v1) {
        if (_v0.pos >= _v3) break;
        continue;
      }
      _v0.pending += _v0.src[_v0.pos++];
    }
    _v0.pending && _v0.pushPending();
  }, _v188.prototype.parse = function (_v0, _v1, _v2, _v3) {
    let _v4 = new this.State(_v0, _v1, _v2, _v3);
    this.tokenize(_v4);
    let _v5 = this.ruler2.getRules(""),
      _v6 = _v5.length;
    for (let _v0 = 0; _v0 < _v6; _v0++) _v5[_v0](_v4);
  }, _v188.prototype.State = _v176;
  let _v193 = {
      fuzzyLink: !0,
      fuzzyEmail: !0,
      fuzzyIP: !1
    },
    _v194 = {
      "http:": {
        validate: function (_v0, _v1, _v2) {
          let _v3 = _v0.slice(_v1);
          return (_v2.re.http || (_v2.re.http = RegExp("^\\/\\/" + _v2.re.src_auth + _v2.re.src_host_port_strict + _v2.re.src_path, "i")), _v2.re.http.test(_v3)) ? _v3.match(_v2.re.http)[0].length : 0;
        }
      },
      "https:": "http:",
      "ftp:": "http:",
      "//": {
        validate: function (_v0, _v1, _v2) {
          let _v3 = _v0.slice(_v1);
          return (_v2.re.no_http || (_v2.re.no_http = RegExp("^" + _v2.re.src_auth + "(?:localhost|(?:(?:" + _v2.re.src_domain + ")\\.)+" + _v2.re.src_domain_root + ")" + _v2.re.src_port + _v2.re.src_host_terminator + _v2.re.src_path, "i")), _v2.re.no_http.test(_v3)) ? _v1 >= 3 && ":" === _v0[_v1 - 3] || _v1 >= 3 && "/" === _v0[_v1 - 3] ? 0 : _v3.match(_v2.re.no_http)[0].length : 0;
        }
      },
      "mailto:": {
        validate: function (_v0, _v1, _v2) {
          let _v3 = _v0.slice(_v1);
          return (_v2.re.mailto || (_v2.re.mailto = RegExp("^" + _v2.re.src_email_name + "@" + _v2.re.src_host_strict, "i")), _v2.re.mailto.test(_v3)) ? _v3.match(_v2.re.mailto)[0].length : 0;
        }
      }
    },
    _v195 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function _v196() {
    return function (_v0, _v1) {
      _v1.normalize(_v0);
    };
  }
  function _v197(_v0) {
    var _v1;
    let _v2,
      _v3,
      _v4 = (_v1 = _v0.__opts__, _v1 = _v1 || {}, (_v2 = {}).src_Any = _v108.source, _v2.src_Cc = _v109.source, _v2.src_Z = _v112.source, _v2.src_P = _v110.source, _v2.src_ZPCc = [_v2.src_Z, _v2.src_P, _v2.src_Cc].join("|"), _v2.src_ZCc = [_v2.src_Z, _v2.src_Cc].join("|"), _v2.src_pseudo_letter = "(?:(?!" + (_v3 = "[><｜]") + "|" + _v2.src_ZPCc + ")" + _v2.src_Any + ")", _v2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", _v2.src_auth = "(?:(?:(?!" + _v2.src_ZCc + "|[@/\\[\\]()]).)+@)?", _v2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", _v2.src_host_terminator = "(?=$|" + _v3 + "|" + _v2.src_ZPCc + ")(?!" + (_v1["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + _v2.src_ZPCc + "))", _v2.src_path = "(?:[/?#](?:(?!" + _v2.src_ZCc + "|" + _v3 + "|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!" + _v2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + _v2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + _v2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + _v2.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + _v2.src_ZCc + "|[']).)+\\'|\\'(?=" + _v2.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + _v2.src_ZCc + "|[.]|$)|" + (_v1["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + _v2.src_ZCc + "|$)|;(?!" + _v2.src_ZCc + "|$)|\\!+(?!" + _v2.src_ZCc + "|[!]|$)|\\?(?!" + _v2.src_ZCc + "|[?]|$))+|\\/)?", _v2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', _v2.src_xn = "xn--[a-z0-9\\-]{1,59}", _v2.src_domain_root = "(?:" + _v2.src_xn + "|" + _v2.src_pseudo_letter + "{1,63})", _v2.src_domain = "(?:" + _v2.src_xn + "|(?:" + _v2.src_pseudo_letter + ")|(?:" + _v2.src_pseudo_letter + "(?:-|" + _v2.src_pseudo_letter + "){0,61}" + _v2.src_pseudo_letter + "))", _v2.src_host = "(?:(?:(?:(?:" + _v2.src_domain + ")\\.)*" + _v2.src_domain + "))", _v2.tpl_host_fuzzy = "(?:" + _v2.src_ip4 + "|(?:(?:(?:" + _v2.src_domain + ")\\.)+(?:%TLDS%)))", _v2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + _v2.src_domain + ")\\.)+(?:%TLDS%))", _v2.src_host_strict = _v2.src_host + _v2.src_host_terminator, _v2.tpl_host_fuzzy_strict = _v2.tpl_host_fuzzy + _v2.src_host_terminator, _v2.src_host_port_strict = _v2.src_host + _v2.src_port + _v2.src_host_terminator, _v2.tpl_host_port_fuzzy_strict = _v2.tpl_host_fuzzy + _v2.src_port + _v2.src_host_terminator, _v2.tpl_host_port_no_ip_fuzzy_strict = _v2.tpl_host_no_ip_fuzzy + _v2.src_port + _v2.src_host_terminator, _v2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + _v2.src_ZPCc + "|>|$))", _v2.tpl_email_fuzzy = "(^|" + _v3 + '|"|\\(|' + _v2.src_ZCc + ")(" + _v2.src_email_name + "@" + _v2.tpl_host_fuzzy_strict + ")", _v2.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + _v2.src_ZPCc + "))((?![$+<=>^`|｜])" + _v2.tpl_host_port_fuzzy_strict + _v2.src_path + ")", _v2.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + _v2.src_ZPCc + "))((?![$+<=>^`|｜])" + _v2.tpl_host_port_no_ip_fuzzy_strict + _v2.src_path + ")", _v0.re = _v2),
      _v5 = _v0.__tlds__.slice();
    function _v6(_v0) {
      return _v0.replace("%TLDS%", _v4.src_tlds);
    }
    _v0.onCompile(), _v0.__tlds_replaced__ || _v5.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), _v5.push(_v4.src_xn), _v4.src_tlds = _v5.join("|"), _v4.email_fuzzy = RegExp(_v6(_v4.tpl_email_fuzzy), "i"), _v4.link_fuzzy = RegExp(_v6(_v4.tpl_link_fuzzy), "i"), _v4.link_no_ip_fuzzy = RegExp(_v6(_v4.tpl_link_no_ip_fuzzy), "i"), _v4.host_fuzzy_test = RegExp(_v6(_v4.tpl_host_fuzzy_test), "i");
    let _v7 = [];
    function _v8(_v0, _v1) {
      throw Error('(LinkifyIt) Invalid schema "' + _v0 + '": ' + _v1);
    }
    _v0.__compiled__ = {}, Object.keys(_v0.__schemas__).forEach(function (_v0) {
      let _v1 = _v0.__schemas__[_v0];
      if (null === _v1) return;
      let _v2 = {
        validate: null,
        link: null
      };
      if (_v0.__compiled__[_v0] = _v2, "[object Object]" === _v190(_v1)) {
        if ("[object RegExp]" === _v190(_v1.validate)) {
          var _v3;
          _v3 = _v1.validate, _v2.validate = function (_v0, _v1) {
            let _v2 = _v0.slice(_v1);
            return _v3.test(_v2) ? _v2.match(_v3)[0].length : 0;
          };
        } else _v191(_v1.validate) ? _v2.validate = _v1.validate : _v8(_v0, _v1);
        _v191(_v1.normalize) ? _v2.normalize = _v1.normalize : _v1.normalize ? _v8(_v0, _v1) : _v2.normalize = _v196();
        return;
      }
      "[object String]" === _v190(_v1) ? _v7.push(_v0) : _v8(_v0, _v1);
    }), _v7.forEach(function (_v0) {
      _v0.__compiled__[_v0.__schemas__[_v0]] && (_v0.__compiled__[_v0].validate = _v0.__compiled__[_v0.__schemas__[_v0]].validate, _v0.__compiled__[_v0].normalize = _v0.__compiled__[_v0.__schemas__[_v0]].normalize);
    }), _v0.__compiled__[""] = {
      validate: null,
      normalize: _v196()
    };
    let _v9 = Object.keys(_v0.__compiled__).filter(function (_v0) {
      return _v0.length > 0 && _v0.__compiled__[_v0];
    }).map(_v192).join("|");
    _v0.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + _v4.src_ZPCc + "))(" + _v9 + ")", "i"), _v0.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + _v4.src_ZPCc + "))(" + _v9 + ")", "ig"), _v0.re.schema_at_start = RegExp("^" + _v0.re.schema_search.source, "i"), _v0.re.pretest = RegExp("(" + _v0.re.schema_test.source + ")|(" + _v0.re.host_fuzzy_test.source + ")|@", "i"), _v0.__index__ = -1, _v0.__text_cache__ = "";
  }
  function _v198(_v0, _v1) {
    let _v2 = _v0.__index__,
      _v3 = _v0.__last_index__,
      _v4 = _v0.__text_cache__.slice(_v2, _v3);
    this.schema = _v0.__schema__.toLowerCase(), this.index = _v2 + _v1, this.lastIndex = _v3 + _v1, this.raw = _v4, this.text = _v4, this.url = _v4;
  }
  function _v199(_v0, _v1) {
    let _v2 = new _v198(_v0, _v1);
    return _v0.__compiled__[_v2.schema].normalize(_v2, _v0), _v2;
  }
  function _v200(_v0, _v1) {
    if (!(this instanceof _v200)) return new _v200(_v0, _v1);
    !_v1 && Object.keys(_v0 || {}).reduce(function (_v0, _v1) {
      return _v0 || _v193.hasOwnProperty(_v1);
    }, !1) && (_v1 = _v0, _v0 = {}), this.__opts__ = _v189({}, _v193, _v1), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = _v189({}, _v194, _v0), this.__compiled__ = {}, this.__tlds__ = _v195, this.__tlds_replaced__ = !1, this.re = {}, _v197(this);
  }
  _v200.prototype.add = function (_v0, _v1) {
    return this.__schemas__[_v0] = _v1, _v197(this), this;
  }, _v200.prototype.set = function (_v0) {
    return this.__opts__ = _v189(this.__opts__, _v0), this;
  }, _v200.prototype.test = function (_v0) {
    let _v1, _v2, _v3, _v4, _v5, _v6, _v7, _v8;
    if (this.__text_cache__ = _v0, this.__index__ = -1, !_v0.length) return !1;
    if (this.re.schema_test.test(_v0)) {
      for ((_v7 = this.re.schema_search).lastIndex = 0; null !== (_v1 = _v7.exec(_v0));) if (_v4 = this.testSchemaAt(_v0, _v1[2], _v7.lastIndex)) {
        this.__schema__ = _v1[2], this.__index__ = _v1.index + _v1[1].length, this.__last_index__ = _v1.index + _v1[0].length + _v4;
        break;
      }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (_v8 = _v0.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || _v8 < this.__index__) && null !== (_v2 = _v0.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (_v5 = _v2.index + _v2[1].length, (this.__index__ < 0 || _v5 < this.__index__) && (this.__schema__ = "", this.__index__ = _v5, this.__last_index__ = _v2.index + _v2[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && _v0.indexOf("@") >= 0 && null !== (_v3 = _v0.match(this.re.email_fuzzy)) && (_v5 = _v3.index + _v3[1].length, _v6 = _v3.index + _v3[0].length, (this.__index__ < 0 || _v5 < this.__index__ || _v5 === this.__index__ && _v6 > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = _v5, this.__last_index__ = _v6)), this.__index__ >= 0;
  }, _v200.prototype.pretest = function (_v0) {
    return this.re.pretest.test(_v0);
  }, _v200.prototype.testSchemaAt = function (_v0, _v1, _v2) {
    return this.__compiled__[_v1.toLowerCase()] ? this.__compiled__[_v1.toLowerCase()].validate(_v0, _v2, this) : 0;
  }, _v200.prototype.match = function (_v0) {
    let _v1 = [],
      _v2 = 0;
    this.__index__ >= 0 && this.__text_cache__ === _v0 && (_v1.push(_v199(this, _v2)), _v2 = this.__last_index__);
    let _v3 = _v2 ? _v0.slice(_v2) : _v0;
    for (; this.test(_v3);) _v1.push(_v199(this, _v2)), _v3 = _v3.slice(this.__last_index__), _v2 += this.__last_index__;
    return _v1.length ? _v1 : null;
  }, _v200.prototype.matchAtStart = function (_v0) {
    if (this.__text_cache__ = _v0, this.__index__ = -1, !_v0.length) return null;
    let _v1 = this.re.schema_at_start.exec(_v0);
    if (!_v1) return null;
    let _v2 = this.testSchemaAt(_v0, _v1[2], _v1[0].length);
    return _v2 ? (this.__schema__ = _v1[2], this.__index__ = _v1.index + _v1[1].length, this.__last_index__ = _v1.index + _v1[0].length + _v2, _v199(this, 0)) : null;
  }, _v200.prototype.tlds = function (_v0, _v1) {
    return (_v0 = Array.isArray(_v0) ? _v0 : [_v0], _v1) ? this.__tlds__ = this.__tlds__.concat(_v0).sort().filter(function (_v0, _v1, _v2) {
      return _v0 !== _v2[_v1 - 1];
    }).reverse() : (this.__tlds__ = _v0.slice(), this.__tlds_replaced__ = !0), _v197(this), this;
  }, _v200.prototype.normalize = function (_v0) {
    _v0.schema || (_v0.url = "http://" + _v0.url), "mailto:" !== _v0.schema || /^mailto:/i.test(_v0.url) || (_v0.url = "mailto:" + _v0.url);
  }, _v200.prototype.onCompile = function () {};
  let _v201 = /^xn--/,
    _v202 = /[^\0-\x7F]/,
    _v203 = /[\x2E\u3002\uFF0E\uFF61]/g,
    _v204 = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    },
    _v205 = Math.floor,
    _v206 = String.fromCharCode;
  function _v207(_v0) {
    throw RangeError(_v204[_v0]);
  }
  function _v208(_v0, _v1) {
    let _v2 = _v0.split("@"),
      _v3 = "";
    return _v2.length > 1 && (_v3 = _v2[0] + "@", _v0 = _v2[1]), _v3 + function (_v0, _v1) {
      let _v2 = [],
        _v3 = _v0.length;
      for (; _v3--;) _v2[_v3] = _v1(_v0[_v3]);
      return _v2;
    }((_v0 = _v0.replace(_v203, ".")).split("."), _v1).join(".");
  }
  let _v209 = function (_v0, _v1) {
      return _v0 + 22 + 75 * (_v0 < 26) - ((0 != _v1) << 5);
    },
    _v210 = function (_v0, _v1, _v2) {
      let _v3 = 0;
      for (_v0 = _v2 ? _v205(_v0 / 700) : _v0 >> 1, _v0 += _v205(_v0 / _v1); _v0 > 455; _v3 += 36) _v0 = _v205(_v0 / 35);
      return _v205(_v3 + 36 * _v0 / (_v0 + 38));
    },
    _v211 = function (_v0) {
      let _v1 = [],
        _v2 = _v0.length,
        _v3 = 0,
        _v4 = 128,
        _v5 = 72,
        _v6 = _v0.lastIndexOf("-");
      _v6 < 0 && (_v6 = 0);
      for (let _v0 = 0; _v0 < _v6; ++_v0) _v0.charCodeAt(_v0) >= 128 && _v207("not-basic"), _v1.push(_v0.charCodeAt(_v0));
      for (let _v0 = _v6 > 0 ? _v6 + 1 : 0; _v0 < _v2;) {
        let _v0 = _v3;
        for (let _v0 = 1, _v1 = 36;; _v1 += 36) {
          var _v7;
          _v0 >= _v2 && _v207("invalid-input");
          let _v0 = (_v7 = _v0.charCodeAt(_v0++)) >= 48 && _v7 < 58 ? 26 + (_v7 - 48) : _v7 >= 65 && _v7 < 91 ? _v7 - 65 : _v7 >= 97 && _v7 < 123 ? _v7 - 97 : 36;
          _v0 >= 36 && _v207("invalid-input"), _v0 > _v205((0 - _v3) / _v0) && _v207("overflow"), _v3 += _v0 * _v0;
          let _v1 = _v1 <= _v5 ? 1 : _v1 >= _v5 + 26 ? 26 : _v1 - _v5;
          if (_v0 < _v1) break;
          let _v2 = 36 - _v1;
          _v0 > _v205(0 / _v2) && _v207("overflow"), _v0 *= _v2;
        }
        let _v1 = _v1.length + 1;
        _v5 = _v210(_v3 - _v0, _v1, 0 == _v0), _v205(_v3 / _v1) > 0 - _v4 && _v207("overflow"), _v4 += _v205(_v3 / _v1), _v3 %= _v1, _v1.splice(_v3++, 0, _v4);
      }
      return String.fromCodePoint(..._v1);
    },
    _v212 = function (_v0) {
      let _v1 = [],
        _v2 = (_v0 = function (_v0) {
          let _v1 = [],
            _v2 = 0,
            _v3 = _v0.length;
          for (; _v2 < _v3;) {
            let _v0 = _v0.charCodeAt(_v2++);
            if (_v0 >= 0 && _v0 <= 0 && _v2 < _v3) {
              let _v0 = _v0.charCodeAt(_v2++);
              (0 & _v0) == 0 ? _v1.push(((0 & _v0) << 10) + (0 & _v0) + 0) : (_v1.push(_v0), _v2--);
            } else _v1.push(_v0);
          }
          return _v1;
        }(_v0)).length,
        _v3 = 128,
        _v4 = 0,
        _v5 = 72;
      for (let _v0 of _v0) _v0 < 128 && _v1.push(_v206(_v0));
      let _v6 = _v1.length,
        _v7 = _v6;
      for (_v6 && _v1.push("-"); _v7 < _v2;) {
        let _v0 = 0;
        for (let _v0 of _v0) _v0 >= _v3 && _v0 < _v0 && (_v0 = _v0);
        let _v1 = _v7 + 1;
        for (let _v0 of (_v0 - _v3 > _v205((0 - _v4) / _v1) && _v207("overflow"), _v4 += (_v0 - _v3) * _v1, _v3 = _v0, _v0)) if (_v0 < _v3 && ++_v4 > 0 && _v207("overflow"), _v0 === _v3) {
          let _v0 = _v4;
          for (let _v0 = 36;; _v0 += 36) {
            let _v0 = _v0 <= _v5 ? 1 : _v0 >= _v5 + 26 ? 26 : _v0 - _v5;
            if (_v0 < _v0) break;
            let _v1 = _v0 - _v0,
              _v2 = 36 - _v0;
            _v1.push(_v206(_v209(_v0 + _v1 % _v2, 0))), _v0 = _v205(_v1 / _v2);
          }
          _v1.push(_v206(_v209(_v0, 0))), _v5 = _v210(_v4, _v1, _v7 === _v6), _v4 = 0, ++_v7;
        }
        ++_v4, ++_v3;
      }
      return _v1.join("");
    },
    _v213 = {
      default: {
        options: {
          html: !1,
          xhtmlOut: !1,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          typographer: !1,
          quotes: "“”‘’",
          highlight: null,
          maxNesting: 100
        },
        components: {
          core: {},
          block: {},
          inline: {}
        }
      },
      zero: {
        options: {
          html: !1,
          xhtmlOut: !1,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          typographer: !1,
          quotes: "“”‘’",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {
            rules: ["normalize", "block", "inline", "text_join"]
          },
          block: {
            rules: ["paragraph"]
          },
          inline: {
            rules: ["text"],
            rules2: ["balance_pairs", "fragments_join"]
          }
        }
      },
      commonmark: {
        options: {
          html: !0,
          xhtmlOut: !0,
          breaks: !1,
          langPrefix: "language-",
          linkify: !1,
          typographer: !1,
          quotes: "“”‘’",
          highlight: null,
          maxNesting: 20
        },
        components: {
          core: {
            rules: ["normalize", "block", "inline", "text_join"]
          },
          block: {
            rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
          },
          inline: {
            rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
            rules2: ["balance_pairs", "emphasis", "fragments_join"]
          }
        }
      }
    },
    _v214 = /^(vbscript|javascript|file|data):/,
    _v215 = /^data:image\/(gif|png|jpeg|webp);/;
  function _v216(_v0) {
    let _v1 = _v0.trim().toLowerCase();
    return !_v214.test(_v1) || _v215.test(_v1);
  }
  let _v217 = ["http:", "https:", "mailto:"];
  function _v218(_v0) {
    let _v1 = _v106(_v0, !0);
    if (_v1.hostname && (!_v1.protocol || _v217.indexOf(_v1.protocol) >= 0)) try {
      var _v2;
      _v2 = _v1.hostname, _v1.hostname = _v208(_v2, function (_v0) {
        return _v202.test(_v0) ? "xn--" + _v212(_v0) : _v0;
      });
    } catch (_v0) {}
    return _v94(_v95(_v1));
  }
  function _v219(_v0) {
    let _v1 = _v106(_v0, !0);
    if (_v1.hostname && (!_v1.protocol || _v217.indexOf(_v1.protocol) >= 0)) try {
      var _v2;
      _v2 = _v1.hostname, _v1.hostname = _v208(_v2, function (_v0) {
        return _v201.test(_v0) ? _v211(_v0.slice(4).toLowerCase()) : _v0;
      });
    } catch (_v0) {}
    return _v92(_v95(_v1), _v92.defaultChars + "%");
  }
  function _v220(_v0, _v1) {
    if (!(this instanceof _v220)) return new _v220(_v0, _v1);
    _v1 || _v145.isString(_v0) || (_v1 = _v0 || {}, _v0 = "default"), this.inline = new _v188(), this.block = new _v175(), this.core = new _v163(), this.renderer = new _v148(), this.linkify = new _v200(), this.validateLink = _v216, this.normalizeLink = _v218, this.normalizeLinkText = _v219, this.utils = _v145, this.helpers = _v145.assign({}, _v146), this.options = {}, this.configure(_v0), _v1 && this.set(_v1);
  }
  _v220.prototype.set = function (_v0) {
    return _v145.assign(this.options, _v0), this;
  }, _v220.prototype.configure = function (_v0) {
    let _v1 = this;
    if (_v145.isString(_v0)) {
      let _v0 = _v0;
      if (!(_v0 = _v213[_v0])) throw Error('Wrong `markdown-it` preset "' + _v0 + '", check name');
    }
    if (!_v0) throw Error("Wrong `markdown-it` preset, can't be empty");
    return _v0.options && _v1.set(_v0.options), _v0.components && Object.keys(_v0.components).forEach(function (_v0) {
      _v0.components[_v0].rules && _v1[_v0].ruler.enableOnly(_v0.components[_v0].rules), _v0.components[_v0].rules2 && _v1[_v0].ruler2.enableOnly(_v0.components[_v0].rules2);
    }), this;
  }, _v220.prototype.enable = function (_v0, _v1) {
    let _v2 = [];
    Array.isArray(_v0) || (_v0 = [_v0]), ["core", "block", "inline"].forEach(function (_v0) {
      _v2 = _v2.concat(this[_v0].ruler.enable(_v0, !0));
    }, this), _v2 = _v2.concat(this.inline.ruler2.enable(_v0, !0));
    let _v3 = _v0.filter(function (_v0) {
      return 0 > _v2.indexOf(_v0);
    });
    if (_v3.length && !_v1) throw Error("MarkdownIt. Failed to enable unknown rule(s): " + _v3);
    return this;
  }, _v220.prototype.disable = function (_v0, _v1) {
    let _v2 = [];
    Array.isArray(_v0) || (_v0 = [_v0]), ["core", "block", "inline"].forEach(function (_v0) {
      _v2 = _v2.concat(this[_v0].ruler.disable(_v0, !0));
    }, this), _v2 = _v2.concat(this.inline.ruler2.disable(_v0, !0));
    let _v3 = _v0.filter(function (_v0) {
      return 0 > _v2.indexOf(_v0);
    });
    if (_v3.length && !_v1) throw Error("MarkdownIt. Failed to disable unknown rule(s): " + _v3);
    return this;
  }, _v220.prototype.use = function (_v0) {
    let _v1 = [this].concat(Array.prototype.slice.call(arguments, 1));
    return _v0.apply(_v0, _v1), this;
  }, _v220.prototype.parse = function (_v0, _v1) {
    if ("string" != typeof _v0) throw Error("Input data should be a String");
    let _v2 = new this.core.State(_v0, this, _v1);
    return this.core.process(_v2), _v2.tokens;
  }, _v220.prototype.render = function (_v0, _v1) {
    return _v1 = _v1 || {}, this.renderer.render(this.parse(_v0, _v1), this.options, _v1);
  }, _v220.prototype.parseInline = function (_v0, _v1) {
    let _v2 = new this.core.State(_v0, this, _v1);
    return _v2.inlineMode = !0, this.core.process(_v2), _v2.tokens;
  }, _v220.prototype.renderInline = function (_v0, _v1) {
    return _v1 = _v1 || {}, this.renderer.render(this.parseInline(_v0, _v1), this.options, _v1);
  };
  let _v221 = new _v90.Schema({
    nodes: {
      doc: {
        content: "block+"
      },
      paragraph: {
        content: "inline*",
        group: "block",
        parseDOM: [{
          tag: "p"
        }],
        toDOM: () => ["p", 0]
      },
      blockquote: {
        content: "block+",
        group: "block",
        parseDOM: [{
          tag: "blockquote"
        }],
        toDOM: () => ["blockquote", 0]
      },
      horizontal_rule: {
        group: "block",
        parseDOM: [{
          tag: "hr"
        }],
        toDOM: () => ["div", ["hr"]]
      },
      heading: {
        attrs: {
          level: {
            default: 1
          }
        },
        content: "(text | image)*",
        group: "block",
        defining: !0,
        parseDOM: [{
          tag: "h1",
          attrs: {
            level: 1
          }
        }, {
          tag: "h2",
          attrs: {
            level: 2
          }
        }, {
          tag: "h3",
          attrs: {
            level: 3
          }
        }, {
          tag: "h4",
          attrs: {
            level: 4
          }
        }, {
          tag: "h5",
          attrs: {
            level: 5
          }
        }, {
          tag: "h6",
          attrs: {
            level: 6
          }
        }],
        toDOM: _v0 => ["h" + _v0.attrs.level, 0]
      },
      code_block: {
        content: "text*",
        group: "block",
        code: !0,
        defining: !0,
        marks: "",
        attrs: {
          params: {
            default: ""
          }
        },
        parseDOM: [{
          tag: "pre",
          preserveWhitespace: "full",
          getAttrs: _v0 => ({
            params: _v0.getAttribute("data-params") || ""
          })
        }],
        toDOM: _v0 => ["pre", _v0.attrs.params ? {
          "data-params": _v0.attrs.params
        } : {}, ["code", 0]]
      },
      ordered_list: {
        content: "list_item+",
        group: "block",
        attrs: {
          order: {
            default: 1
          },
          tight: {
            default: !1
          }
        },
        parseDOM: [{
          tag: "ol",
          getAttrs: _v0 => ({
            order: _v0.hasAttribute("start") ? +_v0.getAttribute("start") : 1,
            tight: _v0.hasAttribute("data-tight")
          })
        }],
        toDOM: _v0 => ["ol", {
          start: 1 == _v0.attrs.order ? null : _v0.attrs.order,
          "data-tight": _v0.attrs.tight ? "true" : null
        }, 0]
      },
      bullet_list: {
        content: "list_item+",
        group: "block",
        attrs: {
          tight: {
            default: !1
          }
        },
        parseDOM: [{
          tag: "ul",
          getAttrs: _v0 => ({
            tight: _v0.hasAttribute("data-tight")
          })
        }],
        toDOM: _v0 => ["ul", {
          "data-tight": _v0.attrs.tight ? "true" : null
        }, 0]
      },
      list_item: {
        content: "block+",
        defining: !0,
        parseDOM: [{
          tag: "li"
        }],
        toDOM: () => ["li", 0]
      },
      text: {
        group: "inline"
      },
      image: {
        inline: !0,
        attrs: {
          src: {},
          alt: {
            default: null
          },
          title: {
            default: null
          }
        },
        group: "inline",
        draggable: !0,
        parseDOM: [{
          tag: "img[src]",
          getAttrs: _v0 => ({
            src: _v0.getAttribute("src"),
            title: _v0.getAttribute("title"),
            alt: _v0.getAttribute("alt")
          })
        }],
        toDOM: _v0 => ["img", _v0.attrs]
      },
      hard_break: {
        inline: !0,
        group: "inline",
        selectable: !1,
        parseDOM: [{
          tag: "br"
        }],
        toDOM: () => ["br"]
      }
    },
    marks: {
      em: {
        parseDOM: [{
          tag: "i"
        }, {
          tag: "em"
        }, {
          style: "font-style=italic"
        }, {
          style: "font-style=normal",
          clearMark: _v0 => "em" == _v0.type.name
        }],
        toDOM: () => ["em"]
      },
      strong: {
        parseDOM: [{
          tag: "strong"
        }, {
          tag: "b",
          getAttrs: _v0 => "normal" != _v0.style.fontWeight && null
        }, {
          style: "font-weight=400",
          clearMark: _v0 => "strong" == _v0.type.name
        }, {
          style: "font-weight",
          getAttrs: _v0 => /^(bold(er)?|[5-9]\d{2,})$/.test(_v0) && null
        }],
        toDOM: () => ["strong"]
      },
      link: {
        attrs: {
          href: {},
          title: {
            default: null
          }
        },
        inclusive: !1,
        parseDOM: [{
          tag: "a[href]",
          getAttrs: _v0 => ({
            href: _v0.getAttribute("href"),
            title: _v0.getAttribute("title")
          })
        }],
        toDOM: _v0 => ["a", _v0.attrs]
      },
      code: {
        code: !0,
        parseDOM: [{
          tag: "code"
        }],
        toDOM: () => ["code"]
      }
    }
  });
  class _v222 {
    constructor(_v0, _v1) {
      this.schema = _v0, this.tokenHandlers = _v1, this.stack = [{
        type: _v0.topNodeType,
        attrs: null,
        content: [],
        marks: _v90.Mark.none
      }];
    }
    top() {
      return this.stack[this.stack.length - 1];
    }
    push(_v0) {
      this.stack.length && this.top().content.push(_v0);
    }
    addText(_v0) {
      if (!_v0) return;
      let _v1 = this.top(),
        _v2 = _v1.content,
        _v3 = _v2[_v2.length - 1],
        _v4 = this.schema.text(_v0, _v1.marks),
        _v5;
      _v3 && (_v5 = function (_v0, _v1) {
        if (_v0.isText && _v1.isText && _v90.Mark.sameSet(_v0.marks, _v1.marks)) return _v0.withText(_v0.text + _v1.text);
      }(_v3, _v4)) ? _v2[_v2.length - 1] = _v5 : _v2.push(_v4);
    }
    openMark(_v0) {
      let _v1 = this.top();
      _v1.marks = _v0.addToSet(_v1.marks);
    }
    closeMark(_v0) {
      let _v1 = this.top();
      _v1.marks = _v0.removeFromSet(_v1.marks);
    }
    parseTokens(_v0) {
      for (let _v0 = 0; _v0 < _v0.length; _v0++) {
        let _v0 = _v0[_v0],
          _v1 = this.tokenHandlers[_v0.type];
        if (!_v1) throw Error("Token type `" + _v0.type + "` not supported by Markdown parser");
        _v1(this, _v0, _v0, _v0);
      }
    }
    addNode(_v0, _v1, _v2) {
      let _v3 = this.top(),
        _v4 = _v0.createAndFill(_v1, _v2, _v3 ? _v3.marks : []);
      return _v4 ? (this.push(_v4), _v4) : null;
    }
    openNode(_v0, _v1) {
      this.stack.push({
        type: _v0,
        attrs: _v1,
        content: [],
        marks: _v90.Mark.none
      });
    }
    closeNode() {
      let _v0 = this.stack.pop();
      return this.addNode(_v0.type, _v0.attrs, _v0.content);
    }
  }
  function _v223(_v0, _v1, _v2, _v3) {
    return _v0.getAttrs ? _v0.getAttrs(_v1, _v2, _v3) : _v0.attrs instanceof Function ? _v0.attrs(_v1) : _v0.attrs;
  }
  function _v224(_v0, _v1) {
    return _v0.noCloseToken || "code_inline" == _v1 || "code_block" == _v1 || "fence" == _v1;
  }
  function _v225(_v0) {
    return "\n" == _v0[_v0.length - 1] ? _v0.slice(0, _v0.length - 1) : _v0;
  }
  function _v226() {}
  function _v227(_v0, _v1) {
    for (; ++_v1 < _v0.length;) if ("list_item_open" != _v0[_v1].type) return _v0[_v1].hidden;
    return !1;
  }
  new class {
    constructor(_v0, _v1, _v2) {
      this.schema = _v0, this.tokenizer = _v1, this.tokens = _v2, this.tokenHandlers = function (_v0, _v1) {
        let _v2 = Object.create(null);
        for (let _v0 in _v1) {
          let _v0 = _v1[_v0];
          if (_v0.block) {
            let _v0 = _v0.nodeType(_v0.block);
            _v224(_v0, _v0) ? _v2[_v0] = (_v0, _v1, _v2, _v3) => {
              _v0.openNode(_v0, _v223(_v0, _v1, _v2, _v3)), _v0.addText(_v225(_v1.content)), _v0.closeNode();
            } : (_v2[_v0 + "_open"] = (_v0, _v1, _v2, _v3) => _v0.openNode(_v0, _v223(_v0, _v1, _v2, _v3)), _v2[_v0 + "_close"] = _v0 => _v0.closeNode());
          } else if (_v0.node) {
            let _v0 = _v0.nodeType(_v0.node);
            _v2[_v0] = (_v0, _v1, _v2, _v3) => _v0.addNode(_v0, _v223(_v0, _v1, _v2, _v3));
          } else if (_v0.mark) {
            let _v0 = _v0.marks[_v0.mark];
            _v224(_v0, _v0) ? _v2[_v0] = (_v0, _v1, _v2, _v3) => {
              _v0.openMark(_v0.create(_v223(_v0, _v1, _v2, _v3))), _v0.addText(_v225(_v1.content)), _v0.closeMark(_v0);
            } : (_v2[_v0 + "_open"] = (_v0, _v1, _v2, _v3) => _v0.openMark(_v0.create(_v223(_v0, _v1, _v2, _v3))), _v2[_v0 + "_close"] = _v0 => _v0.closeMark(_v0));
          } else if (_v0.ignore) _v224(_v0, _v0) ? _v2[_v0] = _v226 : (_v2[_v0 + "_open"] = _v226, _v2[_v0 + "_close"] = _v226);else throw RangeError("Unrecognized parsing spec " + JSON.stringify(_v0));
        }
        return _v2.text = (_v0, _v1) => _v0.addText(_v1.content), _v2.inline = (_v0, _v1) => _v0.parseTokens(_v1.children), _v2.softbreak = _v2.softbreak || (_v0 => _v0.addText(" ")), _v2;
      }(_v0, _v2);
    }
    parse(_v0, _v1 = {}) {
      let _v2 = new _v222(this.schema, this.tokenHandlers),
        _v3;
      _v2.parseTokens(this.tokenizer.parse(_v0, _v1));
      do _v3 = _v2.closeNode(); while (_v2.stack.length);
      return _v3 || this.schema.topNodeType.createAndFill();
    }
  }(_v221, _v220("commonmark", {
    html: !1
  }), {
    blockquote: {
      block: "blockquote"
    },
    paragraph: {
      block: "paragraph"
    },
    list_item: {
      block: "list_item"
    },
    bullet_list: {
      block: "bullet_list",
      getAttrs: (_v0, _v1, _v2) => ({
        tight: _v227(_v1, _v2)
      })
    },
    ordered_list: {
      block: "ordered_list",
      getAttrs: (_v0, _v1, _v2) => ({
        order: +_v0.attrGet("start") || 1,
        tight: _v227(_v1, _v2)
      })
    },
    heading: {
      block: "heading",
      getAttrs: _v0 => ({
        level: +_v0.tag.slice(1)
      })
    },
    code_block: {
      block: "code_block",
      noCloseToken: !0
    },
    fence: {
      block: "code_block",
      getAttrs: _v0 => ({
        params: _v0.info || ""
      }),
      noCloseToken: !0
    },
    hr: {
      node: "horizontal_rule"
    },
    image: {
      node: "image",
      getAttrs: _v0 => ({
        src: _v0.attrGet("src"),
        title: _v0.attrGet("title") || null,
        alt: _v0.children[0] && _v0.children[0].content || null
      })
    },
    hardbreak: {
      node: "hard_break"
    },
    em: {
      mark: "em"
    },
    strong: {
      mark: "strong"
    },
    link: {
      mark: "link",
      getAttrs: _v0 => ({
        href: _v0.attrGet("href"),
        title: _v0.attrGet("title") || null
      })
    },
    code_inline: {
      mark: "code",
      noCloseToken: !0
    }
  });
  let _v228 = {
      open: "",
      close: "",
      mixable: !0
    },
    _v229 = new class {
      constructor(_v0, _v1, _v2 = {}) {
        this.nodes = _v0, this.marks = _v1, this.options = _v2;
      }
      serialize(_v0, _v1 = {}) {
        _v1 = Object.assign({}, this.options, _v1);
        let _v2 = new _v231(this.nodes, this.marks, _v1);
        return _v2.renderContent(_v0), _v2.out;
      }
    }({
      blockquote(_v0, _v1) {
        _v0.wrapBlock("> ", null, _v1, () => _v0.renderContent(_v1));
      },
      code_block(_v0, _v1) {
        let _v2 = _v1.textContent.match(/`{3,}/gm),
          _v3 = _v2 ? _v2.sort().slice(-1)[0] + "`" : "```";
        _v0.write(_v3 + (_v1.attrs.params || "") + "\n"), _v0.text(_v1.textContent, !1), _v0.write("\n"), _v0.write(_v3), _v0.closeBlock(_v1);
      },
      heading(_v0, _v1) {
        _v0.write(_v0.repeat("#", _v1.attrs.level) + " "), _v0.renderInline(_v1, !1), _v0.closeBlock(_v1);
      },
      horizontal_rule(_v0, _v1) {
        _v0.write(_v1.attrs.markup || "---"), _v0.closeBlock(_v1);
      },
      bullet_list(_v0, _v1) {
        _v0.renderList(_v1, "  ", () => (_v1.attrs.bullet || "*") + " ");
      },
      ordered_list(_v0, _v1) {
        let _v2 = _v1.attrs.order || 1,
          _v3 = String(_v2 + _v1.childCount - 1).length,
          _v4 = _v0.repeat(" ", _v3 + 2);
        _v0.renderList(_v1, _v4, _v0 => {
          let _v1 = String(_v2 + _v0);
          return _v0.repeat(" ", _v3 - _v1.length) + _v1 + ". ";
        });
      },
      list_item(_v0, _v1) {
        _v0.renderContent(_v1);
      },
      paragraph(_v0, _v1) {
        _v0.renderInline(_v1), _v0.closeBlock(_v1);
      },
      image(_v0, _v1) {
        _v0.write("![" + _v0.esc(_v1.attrs.alt || "") + "](" + _v1.attrs.src.replace(/[\(\)]/g, "\\$&") + (_v1.attrs.title ? ' "' + _v1.attrs.title.replace(/"/g, '\\"') + '"' : "") + ")");
      },
      hard_break(_v0, _v1, _v2, _v3) {
        for (let _v0 = _v3 + 1; _v0 < _v2.childCount; _v0++) if (_v2.child(_v0).type != _v1.type) return void _v0.write("\\\n");
      },
      text(_v0, _v1) {
        _v0.text(_v1.text, !_v0.inAutolink);
      }
    }, {
      em: {
        open: "*",
        close: "*",
        mixable: !0,
        expelEnclosingWhitespace: !0
      },
      strong: {
        open: "**",
        close: "**",
        mixable: !0,
        expelEnclosingWhitespace: !0
      },
      link: {
        open: (_v0, _v1, _v2, _v3) => (_v0.inAutolink = function (_v0, _v1, _v2) {
          if (_v0.attrs.title || !/^\w+:/.test(_v0.attrs.href)) return !1;
          let _v3 = _v1.child(_v2);
          return !!_v3.isText && _v3.text == _v0.attrs.href && _v3.marks[_v3.marks.length - 1] == _v0 && (_v2 == _v1.childCount - 1 || !_v0.isInSet(_v1.child(_v2 + 1).marks));
        }(_v1, _v2, _v3), _v0.inAutolink ? "<" : "["),
        close(_v0, _v1, _v2, _v3) {
          let {
            inAutolink: _v4
          } = _v0;
          return _v0.inAutolink = void 0, _v4 ? ">" : "](" + _v1.attrs.href.replace(/[\(\)"]/g, "\\$&") + (_v1.attrs.title ? ` "${_v1.attrs.title.replace(/"/g, '\\"')}"` : "") + ")";
        },
        mixable: !0
      },
      code: {
        open: (_v0, _v1, _v2, _v3) => _v230(_v2.child(_v3), -1),
        close: (_v0, _v1, _v2, _v3) => _v230(_v2.child(_v3 - 1), 1),
        escape: !1
      }
    });
  function _v230(_v0, _v1) {
    let _v2 = /`+/g,
      _v3,
      _v4 = 0;
    if (_v0.isText) for (; _v3 = _v2.exec(_v0.text);) _v4 = Math.max(_v4, _v3[0].length);
    let _v5 = _v4 > 0 && _v1 > 0 ? " `" : "`";
    for (let _v0 = 0; _v0 < _v4; _v0++) _v5 += "`";
    return _v4 > 0 && _v1 < 0 && (_v5 += " "), _v5;
  }
  class _v231 {
    constructor(_v0, _v1, _v2) {
      this.nodes = _v0, this.marks = _v1, this.options = _v2, this.delim = "", this.out = "", this.closed = null, this.inAutolink = void 0, this.atBlockStart = !1, this.inTightList = !1, void 0 === this.options.tightLists && (this.options.tightLists = !1), void 0 === this.options.hardBreakNodeName && (this.options.hardBreakNodeName = "hard_break");
    }
    flushClose(_v0 = 2) {
      if (this.closed) {
        if (this.atBlank() || (this.out += "\n"), _v0 > 1) {
          let _v0 = this.delim,
            _v1 = /\s+$/.exec(_v0);
          _v1 && (_v0 = _v0.slice(0, _v0.length - _v1[0].length));
          for (let _v0 = 1; _v0 < _v0; _v0++) this.out += _v0 + "\n";
        }
        this.closed = null;
      }
    }
    getMark(_v0) {
      let _v1 = this.marks[_v0];
      if (!_v1) {
        if (!1 !== this.options.strict) throw Error(`Mark type \`${_v0}\` not supported by Markdown renderer`);
        _v1 = _v228;
      }
      return _v1;
    }
    wrapBlock(_v0, _v1, _v2, _v3) {
      let _v4 = this.delim;
      this.write(null != _v1 ? _v1 : _v0), this.delim += _v0, _v3(), this.delim = _v4, this.closeBlock(_v2);
    }
    atBlank() {
      return /(^|\n)$/.test(this.out);
    }
    ensureNewLine() {
      this.atBlank() || (this.out += "\n");
    }
    write(_v0) {
      this.flushClose(), this.delim && this.atBlank() && (this.out += this.delim), _v0 && (this.out += _v0);
    }
    closeBlock(_v0) {
      this.closed = _v0;
    }
    text(_v0, _v1 = !0) {
      let _v2 = _v0.split("\n");
      for (let _v0 = 0; _v0 < _v2.length; _v0++) this.write(), !_v1 && "[" == _v2[_v0][0] && /(^|[^\\])\!$/.test(this.out) && (this.out = this.out.slice(0, this.out.length - 1) + "\\!"), this.out += _v1 ? this.esc(_v2[_v0], this.atBlockStart) : _v2[_v0], _v0 != _v2.length - 1 && (this.out += "\n");
    }
    render(_v0, _v1, _v2) {
      if (this.nodes[_v0.type.name]) this.nodes[_v0.type.name](this, _v0, _v1, _v2);else if (!1 !== this.options.strict) throw Error("Token type `" + _v0.type.name + "` not supported by Markdown renderer");else !_v0.type.isLeaf && (_v0.type.inlineContent ? this.renderInline(_v0) : this.renderContent(_v0), _v0.isBlock && this.closeBlock(_v0));
    }
    renderContent(_v0) {
      _v0.forEach((_v0, _v1, _v2) => this.render(_v0, _v0, _v2));
    }
    renderInline(_v0, _v1 = !0) {
      this.atBlockStart = _v1;
      let _v2 = [],
        _v3 = "",
        _v4 = (_v0, _v1, _v2) => {
          let _v3 = _v0 ? _v0.marks : [];
          _v0 && _v0.type.name === this.options.hardBreakNodeName && (_v3 = _v3.filter(_v0 => {
            if (_v2 + 1 == _v0.childCount) return !1;
            let _v1 = _v0.child(_v2 + 1);
            return _v0.isInSet(_v1.marks) && (!_v1.isText || /\S/.test(_v1.text));
          }));
          let _v4 = _v3;
          if (_v3 = "", _v0 && _v0.isText && _v3.some(_v0 => {
            let _v1 = this.getMark(_v0.type.name);
            return _v1 && _v1.expelEnclosingWhitespace && !_v0.isInSet(_v2);
          })) {
            let [_v0, _v1, _v2] = /^(\s*)(.*)$/m.exec(_v0.text);
            _v1 && (_v4 += _v1, (_v0 = _v2 ? _v0.withText(_v2) : null) || (_v3 = _v2));
          }
          if (_v0 && _v0.isText && _v3.some(_v0 => {
            let _v1 = this.getMark(_v0.type.name);
            return _v1 && _v1.expelEnclosingWhitespace && !this.isMarkAhead(_v0, _v2 + 1, _v0);
          })) {
            let [_v0, _v1, _v2] = /^(.*?)(\s*)$/m.exec(_v0.text);
            _v2 && (_v3 = _v2, (_v0 = _v1 ? _v0.withText(_v1) : null) || (_v3 = _v2));
          }
          let _v5 = _v3.length ? _v3[_v3.length - 1] : null,
            _v6 = _v5 && !1 === this.getMark(_v5.type.name).escape,
            _v7 = _v3.length - !!_v6;
          t: for (let _v0 = 0; _v0 < _v7; _v0++) {
            let _v0 = _v3[_v0];
            if (!this.getMark(_v0.type.name).mixable) break;
            for (let _v0 = 0; _v0 < _v2.length; _v0++) {
              let _v0 = _v2[_v0];
              if (!this.getMark(_v0.type.name).mixable) break;
              if (_v0.eq(_v0)) {
                _v0 > _v0 ? _v3 = _v3.slice(0, _v0).concat(_v0).concat(_v3.slice(_v0, _v0)).concat(_v3.slice(_v0 + 1, _v7)) : _v0 > _v0 && (_v3 = _v3.slice(0, _v0).concat(_v3.slice(_v0 + 1, _v0)).concat(_v0).concat(_v3.slice(_v0, _v7)));
                continue t;
              }
            }
          }
          let _v8 = 0;
          for (; _v8 < Math.min(_v2.length, _v7) && _v3[_v8].eq(_v2[_v8]);) ++_v8;
          for (; _v8 < _v2.length;) this.text(this.markString(_v2.pop(), !1, _v0, _v2), !1);
          if (_v4 && this.text(_v4), _v0) {
            for (; _v2.length < _v7;) {
              let _v0 = _v3[_v2.length];
              _v2.push(_v0), this.text(this.markString(_v0, !0, _v0, _v2), !1), this.atBlockStart = !1;
            }
            _v6 && _v0.isText ? this.text(this.markString(_v5, !0, _v0, _v2) + _v0.text + this.markString(_v5, !1, _v0, _v2 + 1), !1) : this.render(_v0, _v0, _v2), this.atBlockStart = !1;
          }
          (null == _v0 ? void 0 : _v0.isText) && _v0.nodeSize > 0 && (this.atBlockStart = !1);
        };
      _v0.forEach(_v4), _v4(null, 0, _v0.childCount), this.atBlockStart = !1;
    }
    renderList(_v0, _v1, _v2) {
      this.closed && this.closed.type == _v0.type ? this.flushClose(3) : this.inTightList && this.flushClose(1);
      let _v3 = void 0 !== _v0.attrs.tight ? _v0.attrs.tight : this.options.tightLists,
        _v4 = this.inTightList;
      this.inTightList = _v3, _v0.forEach((_v0, _v1, _v2) => {
        _v2 && _v3 && this.flushClose(1), this.wrapBlock(_v1, _v2(_v2), _v0, () => this.render(_v0, _v0, _v2));
      }), this.inTightList = _v4;
    }
    esc(_v0, _v1 = !1) {
      return _v0 = _v0.replace(/[`*\\~\[\]_]/g, (_v0, _v1) => "_" == _v0 && _v1 > 0 && _v1 + 1 < _v0.length && _v0[_v1 - 1].match(/\w/) && _v0[_v1 + 1].match(/\w/) ? _v0 : "\\" + _v0), _v1 && (_v0 = _v0.replace(/^(\+[ ]|[\-*>])/, "\\$&").replace(/^(\s*)(#{1,6})(\s|$)/, "$1\\$2$3").replace(/^(\s*\d+)\.\s/, "$1\\. ")), this.options.escapeExtraCharacters && (_v0 = _v0.replace(this.options.escapeExtraCharacters, "\\$&")), _v0;
    }
    quote(_v0) {
      let _v1 = -1 == _v0.indexOf('"') ? '""' : -1 == _v0.indexOf("'") ? "''" : "()";
      return _v1[0] + _v0 + _v1[1];
    }
    repeat(_v0, _v1) {
      let _v2 = "";
      for (let _v0 = 0; _v0 < _v1; _v0++) _v2 += _v0;
      return _v2;
    }
    markString(_v0, _v1, _v2, _v3) {
      let _v4 = this.getMark(_v0.type.name),
        _v5 = _v1 ? _v4.open : _v4.close;
      return "string" == typeof _v5 ? _v5 : _v5(this, _v0, _v2, _v3);
    }
    getEnclosingWhitespace(_v0) {
      return {
        leading: (_v0.match(/^(\s+)/) || [void 0])[0],
        trailing: (_v0.match(/(\s+)$/) || [void 0])[0]
      };
    }
    isMarkAhead(_v0, _v1, _v2) {
      for (;; _v1++) {
        if (_v1 >= _v0.childCount) return !1;
        let _v0 = _v0.child(_v1);
        if (_v0.type.name != this.options.hardBreakNodeName) return _v2.isInSet(_v0.marks);
        _v1++;
      }
    }
  }
  var _v232 = _v0.i(0),
    _v233 = Object.defineProperty,
    _v234 = (_v0, _v1, _v2) => {
      let _v3;
      return (_v3 = "symbol" != typeof _v1 ? _v1 + "" : _v1) in _v0 ? _v233(_v0, _v3, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _v2
      }) : _v0[_v3] = _v2, _v2;
    };
  let _v235 = _v84.Extension.create({
      name: "markdownTightLists",
      addOptions: () => ({
        tight: !0,
        tightClass: "tight",
        listTypes: ["bulletList", "orderedList"]
      }),
      addGlobalAttributes() {
        return [{
          types: this.options.listTypes,
          attributes: {
            tight: {
              default: this.options.tight,
              parseHTML: _v0 => "true" === _v0.getAttribute("data-tight") || !_v0.querySelector("p"),
              renderHTML: _v0 => ({
                class: _v0.tight ? this.options.tightClass : null,
                "data-tight": _v0.tight ? "true" : null
              })
            }
          }
        }];
      },
      addCommands() {
        var _v0 = this;
        return {
          toggleTight: function () {
            let _v0 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            return _v0 => {
              let {
                editor: _v1,
                commands: _v2
              } = _v0;
              return _v0.options.listTypes.some(_v0 => function (_v0) {
                if (!_v1.isActive(_v0)) return !1;
                let _v1 = _v1.getAttributes(_v0);
                return _v2.updateAttributes(_v0, {
                  tight: null != _v0 ? _v0 : !(null != _v1 && _v1.tight)
                });
              }(_v0));
            };
          }
        };
      }
    }),
    _v236 = _v220();
  function _v237(_v0, _v1) {
    return _v236.inline.State.prototype.scanDelims.call({
      src: _v0,
      posMax: _v0.length
    }), new _v236.inline.State(_v0, null, null, []).scanDelims(_v1, !0);
  }
  function _v238(_v0, _v1, _v2, _v3) {
    let _v4 = _v0.substring(0, _v2) + _v0.substring(_v2 + _v1.length);
    return _v4.substring(0, _v2 + _v3) + _v1 + _v4.substring(_v2 + _v3);
  }
  class _v239 extends _v231 {
    constructor(_v0, _v1, _v2) {
      super(_v0, _v1, null != _v2 ? _v2 : {}), _v234(this, "inTable", !1), this.inlines = [];
    }
    render(_v0, _v1, _v2) {
      super.render(_v0, _v1, _v2);
      let _v3 = this.inlines[this.inlines.length - 1];
      if (null != _v3 && _v3.start && null != _v3 && _v3.end) {
        var _v4;
        let _v0,
          {
            delimiter: _v1,
            start: _v2,
            end: _v3
          } = this.normalizeInline(_v3);
        this.out = (_v4 = this.out, (_v0 = function (_v0, _v1, _v2, _v3) {
          let _v4 = _v3,
            _v5 = _v0;
          for (; _v4 > _v2 && !_v237(_v5, _v4).can_close;) _v5 = _v238(_v5, _v1, _v4, -1), _v4--;
          return {
            text: _v5,
            from: _v2,
            to: _v4
          };
        }((_v0 = function (_v0, _v1, _v2, _v3) {
          let _v4 = _v2,
            _v5 = _v0;
          for (; _v4 < _v3 && !_v237(_v5, _v4).can_open;) _v5 = _v238(_v5, _v1, _v4, 1), _v4++;
          return {
            text: _v5,
            from: _v4,
            to: _v3
          };
        }((_v0 = {
          text: _v4,
          from: _v2,
          to: _v3
        }).text, _v1, _v0.from, _v0.to)).text, _v1, _v0.from, _v0.to)).to - _v0.from < _v1.length + 1 && (_v0.text = _v0.text.substring(0, _v0.from) + _v0.text.substring(_v0.to + _v1.length)), _v0.text), this.inlines.pop();
      }
    }
    markString(_v0, _v1, _v2, _v3) {
      let _v4 = this.marks[_v0.type.name];
      if (_v4.expelEnclosingWhitespace) if (_v1) this.inlines.push({
        start: this.out.length,
        delimiter: _v4.open
      });else {
        let _v0 = this.inlines.pop();
        this.inlines.push({
          ..._v0,
          end: this.out.length
        });
      }
      return super.markString(_v0, _v1, _v2, _v3);
    }
    normalizeInline(_v0) {
      let {
        start: _v1,
        end: _v2
      } = _v0;
      for (; this.out.charAt(_v1).match(/\s/);) _v1++;
      return {
        ..._v0,
        start: _v1
      };
    }
  }
  let _v240 = _v84.Mark.create({
    name: "markdownHTMLMark",
    addStorage: () => ({
      markdown: {
        serialize: {
          open(_v0, _v1) {
            var _v2, _v3;
            return this.editor.storage.markdown.options.html ? null != (_v2 = null == (_v3 = _v241(_v1)) ? void 0 : _v3[0]) ? _v2 : "" : (console.warn(`Tiptap Markdown: "${_v1.type.name}" mark is only available in html mode`), "");
          },
          close(_v0, _v1) {
            var _v2, _v3;
            return this.editor.storage.markdown.options.html && null != (_v2 = null == (_v3 = _v241(_v1)) ? void 0 : _v3[1]) ? _v2 : "";
          }
        },
        parse: {}
      }
    })
  });
  function _v241(_v0) {
    let _v1 = _v0.type.schema,
      _v2 = _v1.text(" ", [_v0]),
      _v3 = (0, _v84.getHTMLFromFragment)(_v90.Fragment.from(_v2), _v1).match(/^(<.*?>) (<\/.*?>)$/);
    return _v3 ? [_v3[1], _v3[2]] : null;
  }
  function _v242(_v0) {
    let _v1 = `<body>${_v0}</body>`;
    return new window.DOMParser().parseFromString(_v1, "text/html").body;
  }
  let _v243 = _v84.Node.create({
      name: "markdownHTMLNode",
      addStorage: () => ({
        markdown: {
          serialize(_v0, _v1, _v2) {
            var _v3, _v4;
            let _v5, _v6, _v7;
            this.editor.storage.markdown.options.html ? _v0.write((_v3 = _v1, _v4 = _v2, _v5 = _v3.type.schema, _v6 = (0, _v84.getHTMLFromFragment)(_v90.Fragment.from(_v3), _v5), _v3.isBlock && (_v4 instanceof _v90.Fragment || _v4.type.name === _v5.topNodeType.name) ? ((_v7 = _v242(_v6).firstElementChild).innerHTML = _v7.innerHTML.trim() ? `
${_v7.innerHTML}
` : `
`, _v7.outerHTML) : _v6)) : (console.warn(`Tiptap Markdown: "${_v1.type.name}" node is only available in html mode`), _v0.write(`[${_v1.type.name}]`)), _v1.isBlock && _v0.closeBlock(_v1);
          },
          parse: {}
        }
      })
    }),
    _v244 = _v84.Node.create({
      name: "blockquote"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v229.nodes.blockquote,
          parse: {}
        }
      })
    }),
    _v245 = _v84.Node.create({
      name: "bulletList"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize(_v0, _v1) {
            return _v0.renderList(_v1, "  ", () => (this.editor.storage.markdown.options.bulletListMarker || "-") + " ");
          },
          parse: {}
        }
      })
    }),
    _v246 = _v84.Node.create({
      name: "codeBlock"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize(_v0, _v1) {
            _v0.write("```" + (_v1.attrs.language || "") + "\n"), _v0.text(_v1.textContent, !1), _v0.ensureNewLine(), _v0.write("```"), _v0.closeBlock(_v1);
          },
          parse: {
            setup(_v0) {
              var _v1;
              _v0.set({
                langPrefix: null != (_v1 = this.options.languageClassPrefix) ? _v1 : "language-"
              });
            },
            updateDOM(_v0) {
              _v0.innerHTML = _v0.innerHTML.replace(/\n<\/code><\/pre>/g, "</code></pre>");
            }
          }
        }
      })
    }),
    _v247 = _v84.Node.create({
      name: "hardBreak"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize(_v0, _v1, _v2, _v3) {
            for (let _v0 = _v3 + 1; _v0 < _v2.childCount; _v0++) if (_v2.child(_v0).type != _v1.type) return void _v0.write(_v0.inTable ? _v243.storage.markdown.serialize.call(this, _v0, _v1, _v2) : "\\\n");
          },
          parse: {}
        }
      })
    }),
    _v248 = _v84.Node.create({
      name: "heading"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v229.nodes.heading,
          parse: {}
        }
      })
    }),
    _v249 = _v84.Node.create({
      name: "horizontalRule"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v229.nodes.horizontal_rule,
          parse: {}
        }
      })
    }),
    _v250 = _v84.Node.create({
      name: "image"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v229.nodes.image,
          parse: {}
        }
      })
    }),
    _v251 = _v84.Node.create({
      name: "listItem"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v229.nodes.list_item,
          parse: {}
        }
      })
    }),
    _v252 = _v84.Node.create({
      name: "orderedList"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize(_v0, _v1, _v2, _v3) {
            let _v4 = _v1.attrs.start || 1,
              _v5 = String(_v4 + _v1.childCount - 1).length,
              _v6 = _v0.repeat(" ", _v5 + 2),
              _v7 = function (_v0, _v1, _v2) {
                let _v3 = 0;
                for (; _v2 - _v3 > 0 && _v1.child(_v2 - _v3 - 1).type.name === _v0.type.name; _v3++);
                return _v3;
              }(_v1, _v2, _v3) % 2 ? ") " : ". ";
            _v0.renderList(_v1, _v6, _v0 => {
              let _v1 = String(_v4 + _v0);
              return _v0.repeat(" ", _v5 - _v1.length) + _v1 + _v7;
            });
          },
          parse: {}
        }
      })
    }),
    _v253 = _v84.Node.create({
      name: "paragraph"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v229.nodes.paragraph,
          parse: {}
        }
      })
    });
  function _v254(_v0) {
    var _v1, _v2;
    return null != (_v1 = null == _v0 || null == (_v2 = _v0.content) ? void 0 : _v2.content) ? _v1 : [];
  }
  let _v255 = _v84.Node.create({
    name: "table"
  }).extend({
    addStorage: () => ({
      markdown: {
        serialize(_v0, _v1, _v2) {
          let _v3, _v4, _v5;
          (_v4 = (_v3 = _v254(_v1))[0], _v5 = _v3.slice(1), _v254(_v4).some(_v0 => "tableHeader" !== _v0.type.name || _v256(_v0) || _v0.childCount > 1) || _v5.some(_v0 => _v254(_v0).some(_v0 => "tableHeader" === _v0.type.name || _v256(_v0) || _v0.childCount > 1))) ? _v243.storage.markdown.serialize.call(this, _v0, _v1, _v2) : (_v0.inTable = !0, _v1.forEach((_v0, _v1, _v2) => {
            if (_v0.write("| "), _v0.forEach((_v0, _v1, _v2) => {
              _v2 && _v0.write(" | ");
              let _v3 = _v0.firstChild;
              _v3.textContent.trim() && _v0.renderInline(_v3);
            }), _v0.write(" |"), _v0.ensureNewLine(), !_v2) {
              let _v0 = Array.from({
                length: _v0.childCount
              }).map(() => "---").join(" | ");
              _v0.write(`| ${_v0} |`), _v0.ensureNewLine();
            }
          }), _v0.closeBlock(_v1), _v0.inTable = !1);
        },
        parse: {}
      }
    })
  });
  function _v256(_v0) {
    return _v0.attrs.colspan > 1 || _v0.attrs.rowspan > 1;
  }
  let _v257 = _v84.Node.create({
      name: "taskItem"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize(_v0, _v1) {
            let _v2 = _v1.attrs.checked ? "[x]" : "[ ]";
            _v0.write(`${_v2} `), _v0.renderContent(_v1);
          },
          parse: {
            updateDOM(_v0) {
              [..._v0.querySelectorAll(".task-list-item")].forEach(_v0 => {
                let _v1 = _v0.querySelector("input");
                _v0.setAttribute("data-type", "taskItem"), _v1 && (_v0.setAttribute("data-checked", _v1.checked), _v1.remove());
              });
            }
          }
        }
      })
    }),
    _v258 = _v84.Node.create({
      name: "taskList"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v245.storage.markdown.serialize,
          parse: {
            setup(_v0) {
              _v0.use(_v232.default);
            },
            updateDOM(_v0) {
              [..._v0.querySelectorAll(".contains-task-list")].forEach(_v0 => {
                _v0.setAttribute("data-type", "taskList");
              });
            }
          }
        }
      })
    }),
    _v259 = [_v244, _v245, _v246, _v247, _v248, _v249, _v243, _v250, _v251, _v252, _v253, _v255, _v257, _v258, _v84.Node.create({
      name: "text"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize(_v0, _v1) {
            var _v2;
            _v0.text(null == (_v2 = _v1.text) ? void 0 : _v2.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
          },
          parse: {}
        }
      })
    }), _v84.Mark.create({
      name: "bold"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v229.marks.strong,
          parse: {}
        }
      })
    }), _v84.Mark.create({
      name: "code"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v229.marks.code,
          parse: {}
        }
      })
    }), _v240, _v84.Mark.create({
      name: "italic"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v229.marks.em,
          parse: {}
        }
      })
    }), _v84.Mark.create({
      name: "link"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: _v229.marks.link,
          parse: {}
        }
      })
    }), _v84.Mark.create({
      name: "strike"
    }).extend({
      addStorage: () => ({
        markdown: {
          serialize: {
            open: "~~",
            close: "~~",
            expelEnclosingWhitespace: !0
          },
          parse: {}
        }
      })
    })];
  function _v260(_v0) {
    var _v1, _v2;
    let _v3 = null == (_v1 = _v0.storage) ? void 0 : _v1.markdown,
      _v4 = null == (_v2 = _v259.find(_v0 => _v0.name === _v0.name)) ? void 0 : _v2.storage.markdown;
    return _v3 || _v4 ? {
      ..._v4,
      ..._v3
    } : null;
  }
  class _v261 {
    constructor(_v0) {
      _v234(this, "editor", null), this.editor = _v0;
    }
    serialize(_v0) {
      let _v1 = new _v239(this.nodes, this.marks, {
        hardBreakNodeName: _v247.name
      });
      return _v1.renderContent(_v0), _v1.out;
    }
    get nodes() {
      var _v0;
      return {
        ...Object.fromEntries(Object.keys(this.editor.schema.nodes).map(_v0 => [_v0, this.serializeNode(_v243)])),
        ...Object.fromEntries(null != (_v0 = this.editor.extensionManager.extensions.filter(_v0 => "node" === _v0.type && this.serializeNode(_v0)).map(_v0 => [_v0.name, this.serializeNode(_v0)])) ? _v0 : [])
      };
    }
    get marks() {
      var _v0;
      return {
        ...Object.fromEntries(Object.keys(this.editor.schema.marks).map(_v0 => [_v0, this.serializeMark(_v240)])),
        ...Object.fromEntries(null != (_v0 = this.editor.extensionManager.extensions.filter(_v0 => "mark" === _v0.type && this.serializeMark(_v0)).map(_v0 => [_v0.name, this.serializeMark(_v0)])) ? _v0 : [])
      };
    }
    serializeNode(_v0) {
      var _v1;
      return null == (_v1 = _v260(_v0)) || null == (_v1 = _v1.serialize) ? void 0 : _v1.bind({
        editor: this.editor,
        options: _v0.options
      });
    }
    serializeMark(_v0) {
      var _v1;
      let _v2 = null == (_v1 = _v260(_v0)) ? void 0 : _v1.serialize;
      return _v2 ? {
        ..._v2,
        open: "function" == typeof _v2.open ? _v2.open.bind({
          editor: this.editor,
          options: _v0.options
        }) : _v2.open,
        close: "function" == typeof _v2.close ? _v2.close.bind({
          editor: this.editor,
          options: _v0.options
        }) : _v2.close
      } : null;
    }
  }
  class _v262 {
    constructor(_v0, _v1) {
      _v234(this, "editor", null), _v234(this, "md", null);
      let {
        html: _v2,
        linkify: _v3,
        breaks: _v4
      } = _v1;
      this.editor = _v0, this.md = this.withPatchedRenderer(_v220({
        html: _v2,
        linkify: _v3,
        breaks: _v4
      }));
    }
    parse(_v0) {
      let {
        inline: _v1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if ("string" == typeof _v0) {
        this.editor.extensionManager.extensions.forEach(_v0 => {
          var _v1;
          return null == (_v1 = _v260(_v0)) || null == (_v1 = _v1.parse) || null == (_v1 = _v1.setup) ? void 0 : _v1.call({
            editor: this.editor,
            options: _v0.options
          }, this.md);
        });
        let _v0 = _v242(this.md.render(_v0));
        return this.editor.extensionManager.extensions.forEach(_v0 => {
          var _v1;
          return null == (_v1 = _v260(_v0)) || null == (_v1 = _v1.parse) || null == (_v1 = _v1.updateDOM) ? void 0 : _v1.call({
            editor: this.editor,
            options: _v0.options
          }, _v0);
        }), this.normalizeDOM(_v0, {
          inline: _v1,
          content: _v0
        }), _v0.innerHTML;
      }
      return _v0;
    }
    normalizeDOM(_v0, _v1) {
      let {
        inline: _v2,
        content: _v3
      } = _v1;
      return this.normalizeBlocks(_v0), _v0.querySelectorAll("*").forEach(_v0 => {
        var _v1;
        (null == (_v1 = _v0.nextSibling) ? void 0 : _v1.nodeType) !== Node.TEXT_NODE || _v0.closest("pre") || (_v0.nextSibling.textContent = _v0.nextSibling.textContent.replace(/^\n/, ""));
      }), _v2 && this.normalizeInline(_v0, _v3), _v0;
    }
    normalizeBlocks(_v0) {
      let _v1 = Object.values(this.editor.schema.nodes).filter(_v0 => _v0.isBlock).map(_v0 => {
        var _v1;
        return null == (_v1 = _v0.spec.parseDOM) ? void 0 : _v1.map(_v0 => _v0.tag);
      }).flat().filter(Boolean).join(",");
      _v1 && [..._v0.querySelectorAll(_v1)].forEach(_v0 => {
        _v0.parentElement.matches("p") && function (_v0) {
          let _v1 = _v0.parentElement,
            _v2 = _v1.cloneNode();
          for (; _v1.firstChild && _v1.firstChild !== _v0;) _v2.appendChild(_v1.firstChild);
          _v2.childNodes.length > 0 && _v1.parentElement.insertBefore(_v2, _v1), _v1.parentElement.insertBefore(_v0, _v1), 0 === _v1.childNodes.length && _v1.remove();
        }(_v0);
      });
    }
    normalizeInline(_v0, _v1) {
      var _v2, _v3, _v4, _v5, _v6;
      if (null != (_v2 = _v0.firstElementChild) && _v2.matches("p")) {
        let _v0 = _v0.firstElementChild,
          {
            nextElementSibling: _v1
          } = _v0,
          _v2 = null != (_v3 = null == (_v4 = _v1.match(/^\s+/)) ? void 0 : _v4[0]) ? _v3 : "",
          _v3 = _v1 ? "" : null != (_v5 = null == (_v6 = _v1.match(/\s+$/)) ? void 0 : _v6[0]) ? _v5 : "";
        if (_v1.match(/^\n\n/)) {
          _v0.innerHTML = `${_v0.innerHTML}${_v3}`;
          return;
        }
        let _v4 = _v0.parentNode;
        for (; _v0.firstChild;) _v4.insertBefore(_v0.firstChild, _v0);
        _v4.removeChild(_v0), _v0.innerHTML = `${_v2}${_v0.innerHTML}${_v3}`;
      }
    }
    withPatchedRenderer(_v0) {
      let _v1 = _v0 => function () {
        let _v0 = _v0(...arguments);
        return "\n" === _v0 ? _v0 : "\n" === _v0[_v0.length - 1] ? _v0.slice(0, -1) : _v0;
      };
      return _v0.renderer.rules.hardbreak = _v1(_v0.renderer.rules.hardbreak), _v0.renderer.rules.softbreak = _v1(_v0.renderer.rules.softbreak), _v0.renderer.rules.fence = _v1(_v0.renderer.rules.fence), _v0.renderer.rules.code_block = _v1(_v0.renderer.rules.code_block), _v0.renderer.renderToken = _v1(_v0.renderer.renderToken.bind(_v0.renderer)), _v0;
    }
  }
  let _v263 = _v84.Extension.create({
      name: "markdownClipboard",
      addOptions: () => ({
        transformPastedText: !1,
        transformCopiedText: !1
      }),
      addProseMirrorPlugins() {
        return [new _v85.Plugin({
          key: new _v85.PluginKey("markdownClipboard"),
          props: {
            clipboardTextParser: (_v0, _v1, _v2) => {
              if (_v2 || !this.options.transformPastedText) return null;
              let _v3 = this.editor.storage.markdown.parser.parse(_v0, {
                inline: !0
              });
              return _v90.DOMParser.fromSchema(this.editor.schema).parseSlice(_v242(_v3), {
                preserveWhitespace: !0,
                context: _v1
              });
            },
            clipboardTextSerializer: _v0 => this.options.transformCopiedText ? this.editor.storage.markdown.serializer.serialize(_v0.content) : null
          }
        })];
      }
    }),
    _v264 = _v84.Extension.create({
      name: "markdown",
      priority: 50,
      addOptions: () => ({
        html: !0,
        tightLists: !0,
        tightListClass: "tight",
        bulletListMarker: "-",
        linkify: !1,
        breaks: !1,
        transformPastedText: !1,
        transformCopiedText: !1
      }),
      addCommands() {
        let _v0 = _v84.extensions.Commands.config.addCommands();
        return {
          setContent: (_v0, _v1, _v2) => _v0 => _v0.setContent(_v0.editor.storage.markdown.parser.parse(_v0), _v1, _v2)(_v0),
          insertContentAt: (_v0, _v1, _v2) => _v0 => _v0.insertContentAt(_v0, _v0.editor.storage.markdown.parser.parse(_v1, {
            inline: !0
          }), _v2)(_v0)
        };
      },
      onBeforeCreate() {
        this.editor.storage.markdown = {
          options: {
            ...this.options
          },
          parser: new _v262(this.editor, this.options),
          serializer: new _v261(this.editor),
          getMarkdown: () => this.editor.storage.markdown.serializer.serialize(this.editor.state.doc)
        }, this.editor.options.initialContent = this.editor.options.content, this.editor.options.content = this.editor.storage.markdown.parser.parse(this.editor.options.content);
      },
      onCreate() {
        this.editor.options.content = this.editor.options.initialContent, delete this.editor.options.initialContent;
      },
      addStorage: () => ({}),
      addExtensions() {
        return [_v235.configure({
          tight: this.options.tightLists,
          tightClass: this.options.tightListClass
        }), _v263.configure({
          transformPastedText: this.options.transformPastedText,
          transformCopiedText: this.options.transformCopiedText
        })];
      }
    }),
    _v265 = "record-studio-toggle-generator-panel-button",
    _v266 = "record-studio-generator-panel-container",
    _v267 = "record-studio-configure-modifiers-popover-option",
    _v268 = {
      USER_PROMPT_INPUT: "record-studio-generator-panel-user-prompt-input",
      CONFIGURE_PROMPT_MODIFIERS_POPOVER: {
        POPOVER_CONTAINER: "record-studio-configure-modifiers-popover-container"
      },
      ACTIONS: {
        CONFIGURE_PROMPT_MODIFIERS: "record-studio-configure-modifiers-button",
        LEGAL_INFO: "record-studio-legal-info-button",
        START_GENERATING: "record-studio-start-generating-button"
      }
    },
    _v269 = {
      SAMPLE_PROMPTS_ROW: "record-studio-sample-prompts-row",
      SAMPLE_PROMPT_BUTTON: "record-studio-sample-prompt-button"
    };
  var _v270 = _v0.i(0);
  function _v271() {
    let _v0 = (0, _v40.useTeleprompterStore)(_v0 => _v0.updatePersistentData),
      {
        updateCurrentSessionData: _v1,
        currentSessionData: _v2
      } = (0, _v77.useSession)();
    return (0, _v19.useCallback)((_v0, _v1, _v2 = _v1) => {
      let _v3 = {
        ..._v2
      };
      _v1({
        teleprompterRawContent: _v1,
        teleprompterTextContent: _v2
      }), _v0(_v0 => ({
        contentLength: _v2.length,
        contentSource: function (_v0, _v1, _v2, _v3) {
          let _v4 = _v2.length,
            _v5 = _v0.length;
          if (_v2 === _v0 || _v3 === _v1) return _v1;
          if (!(_v4 > _v5 ? !_v5 || !_v2.includes(_v0) : _v4 < _v5 ? !_v4 || !_v0.includes(_v2) : 1 === _v4) || _v4 > 50 && 1 === Math.abs(_v4 - _v5)) {
            if ("generated" === _v3) return "generated";
            switch (_v1) {
              case "generated":
              case "manipulated":
                return "manipulated";
              case "manual":
                return "manual";
              case null:
                return _v3;
            }
            return;
          }
          return _v3;
        }(_v3.teleprompterTextContent, _v0.contentSource, _v2, _v0)
      }));
    }, [_v2, _v1, _v0]);
  }
  let _v272 = ({
    onCharacterReceived: _v0,
    placeholderText: _v1,
    scrollWrapRef: _v2,
    initialScrollTop: _v3
  }) => {
    let [_v4, _v5] = (0, _v19.useState)(!1),
      [_v6, _v7] = (0, _v19.useState)(!1),
      _v8 = (0, _v19.useRef)(null),
      _v9 = (0, _v19.useRef)(!1),
      {
        currentSessionData: _v10
      } = (0, _v77.useSession)(),
      {
        trackUserInteractionEvent: _v11
      } = _v35(),
      {
        client: _v12,
        getClientAnalyticContext: _v13
      } = (0, _v19.useContext)(_v30),
      {
        sendAddScriptToTeleprompterBpEvent: _v14
      } = (0, _v270.useTeleprompterAnalytics)({
        element: "text",
        feature: "teleprompter",
        location: "modal"
      }, _v12, _v13),
      {
        isPopOverVisible: _v15,
        setIsPopOverVisible: _v16,
        promptRequestStatus: _v17,
        receivedPromptCharacters: _v18,
        setIsFollowupPromptShown: _v19,
        setIsGeneratePanelShown: _v20
      } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
        isPopOverVisible: _v0.isPopOverVisible,
        setIsPopOverVisible: _v0.setIsPopOverVisible,
        receivedPromptCharacters: _v0.receivedPromptCharacters,
        promptRequestStatus: _v0.promptRequestStatus,
        setIsFollowupPromptShown: _v0.setIsFollowupPromptShown,
        setIsGeneratePanelShown: _v0.setIsGeneratePanelShown
      }))),
      _v21 = "started" === _v17,
      _v22 = !_v21,
      _v23 = null !== _v18,
      _v24 = _v23 ? _v18 : _v10.teleprompterRawContent,
      _v25 = _v23 ? _v18 : _v10.teleprompterTextContent,
      _v26 = _v271(),
      _v27 = (0, _v88.useEditor)({
        editable: _v22,
        onFocus: () => {
          _v15 && _v16(!1), _v20(!1);
        },
        onUpdate: ({
          editor: _v0
        }) => {
          let _v1 = _v0.getHTML(),
            _v2 = _v0.getText();
          _v2.current && !_v6 && (_v2.current.scrollTop = _v3, _v7(!0)), _v4 ? _v26("manual", _v1, _v2) : (_v26("manual", _v24, _v25), _v0.commands.setContent(_v24), _v5(!0)), _v24 !== _v1 && _v0.isFocused && (_v19(!0), _v9.current || (_v14(), _v11({
            name: "add_script_to_teleprompter",
            eventType: "type",
            location: "teleprompter"
          }), _v9.current = !0));
        },
        extensions: [_v89.default, _v264.configure({
          breaks: !0,
          bulletListMarker: "-"
        }), _v87.configure({
          placeholder: _v1
        })],
        editorProps: {
          handleDOMEvents: {
            drop: (_v0, _v1) => {
              _v1.preventDefault();
            }
          }
        },
        content: _v24
      });
    return (0, _v19.useEffect)(() => {
      _v27?.setEditable(_v22), _v22 && _v27?.commands.focus("end");
    }, [_v22, _v27]), (0, _v19.useEffect)(() => {
      _v24 && _v27?.getText() !== _v24 && _v27 && _v21 && (_v27.commands.setContent(_v24), _v8.current && _v0?.(_v8.current.scrollHeight));
    }, [_v24, _v22, _v27, _v21, _v0]), (0, _v18.jsx)(_v22.VStack, {
      justifyContent: "space-between",
      overflow: "hidden",
      alignItems: "flex-start",
      onMouseDown: _v0 => _v0.stopPropagation(),
      children: (0, _v18.jsx)(_v80.Box, {
        w: "100%",
        h: "100%",
        lineHeight: 1.5,
        outline: "none",
        fontSize: "inherit",
        ref: _v8,
        sx: {
          div: {
            height: "100%",
            ".ProseMirror": {
              outline: "none",
              height: "100%"
            }
          },
          ".ProseMirror p.is-editor-empty:first-of-type::before": {
            content: `"${_v1}"`,
            color: "input-stroke",
            float: "left",
            height: 0,
            pointerEvents: "none"
          },
          ".ProseMirror > :not(ol):not(ul):not(pre):last-child::after,.ProseMirror > ul:last-child > li:last-child > p:last-child::after,.ProseMirror > ol:last-child > li:last-child > p:last-child::after": {
            content: '"▋"',
            color: _v23 ? "black" : "transparent",
            animation: "blink 1s infinite",
            marginLeft: (0, _v82.rem)(4)
          },
          "@keyframes blink": {
            "0%": {
              opacity: 1
            },
            "50%": {
              opacity: 0
            },
            "100%": {
              opacity: 1
            }
          }
        },
        children: (0, _v18.jsx)(_v88.EditorContent, {
          "data-testid": "record-studio-teleprompter-editor",
          editor: _v27
        })
      })
    });
  };
  var _v273 = _v0.i(0),
    _v274 = _v0.i(0),
    _v275 = _v0.i(0),
    _v276 = _v0.i(0),
    _v277 = _v0.i(0),
    _v278 = _v0.i(0),
    _v279 = _v0.i(0),
    _v280 = _v0.i(0),
    _v281 = _v0.i(0);
  let _v282 = _v0 => (0, _v18.jsx)(_v26.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v18.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m10.074 5-2.999 7.5h5.929L10.08 5h-.007Zm5.333 8.159a.933.933 0 0 0-.017-.043l-3.577-9.179-.001-.002A1.474 1.474 0 0 0 10.44 3h-.723c-.604 0-1.148.37-1.37.931l-3.669 9.177a1 1 0 0 0-.017.042l-2.59 6.479a1 1 0 1 0 1.857.742L6.276 14.5h7.507l2.285 5.863a1 1 0 0 0 1.863-.726l-2.524-6.478ZM16 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z",
        fill: "currentColor"
      })
    }),
    _v283 = _v0 => (0, _v18.jsx)(_v26.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v18.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "m10.074 5-2.999 7.5h5.929L10.08 5h-.007Zm3.709 9.5H6.276l-2.348 5.871a1 1 0 1 1-1.857-.742L8.347 3.93A1.474 1.474 0 0 1 9.717 3h.723c.606 0 1.15.371 1.372.935v.002l6.12 15.7a1 1 0 1 1-1.864.726L13.783 14.5ZM19 7a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V8a1 1 0 0 1 1-1Z",
        fill: "currentColor"
      })
    });
  var _v284 = _v0.i(0),
    _v285 = _v0.i(0),
    _v286 = _v0.i(0),
    _v287 = _v0.i(0),
    _v288 = _v0.i(0),
    _v289 = _v0.i(0);
  let _v290 = () => {
      let {
          isScrollingActive: _v0,
          updateScrollingState: _v1
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          isScrollingActive: "active" === _v0.scrollingState,
          updateScrollingState: _v0.updateScrollingState
        }))),
        {
          currentSessionData: _v2
        } = (0, _v77.useSession)(),
        _v3 = 0 === _v2.teleprompterTextContent.length,
        _v4 = (0, _v19.useMemo)(() => _v0 ? _v31.translations.tooltips.scrollButtons.pause : _v31.translations.tooltips.scrollButtons.play, [_v0]);
      return (0, _v18.jsxs)(_v18.Fragment, {
        children: [(0, _v18.jsx)(_v279.Tooltip, {
          label: _v3 ? void 0 : _v4,
          shouldWrapChildren: !0,
          children: (0, _v18.jsx)(_v274.IconButton, {
            variant: "tertiary",
            size: "sm",
            onClick: () => {
              _v0 ? _v1("paused") : _v1("active");
            },
            isDisabled: _v3,
            icon: _v0 ? (0, _v18.jsx)(_v288.Pause, {
              boxSize: _v291
            }) : (0, _v18.jsx)(_v287.Play, {
              boxSize: _v291
            }),
            "aria-label": "start-stop-scroll-button"
          })
        }), (0, _v18.jsx)(_v279.Tooltip, {
          label: _v3 ? void 0 : _v31.translations.tooltips.scrollButtons.reset,
          shouldWrapChildren: !0,
          children: (0, _v18.jsx)(_v274.IconButton, {
            variant: "tertiary",
            size: "sm",
            onClick: () => {
              _v1("disabled");
            },
            isDisabled: _v3,
            icon: (0, _v18.jsx)(_v289.Reset, {
              boxSize: _v291
            }),
            "aria-label": "reset-scroll-button"
          })
        })]
      });
    },
    _v291 = `${(0, _v82.rem)(20)} !important`,
    _v292 = ({
      popOut: _v0,
      isPoppedOut: _v1,
      showUpsell: _v2,
      setForceDisposeSpeechRecognition: _v3,
      client: _v4,
      isGuestUser: _v5,
      getClientAnalyticContext: _v6
    }) => {
      let {
          increase: _v7,
          decrease: _v8
        } = (() => {
          let _v0 = (0, _v33.useLogger)("useDynamicFontSize"),
            {
              trackUserInteractionEvent: _v1
            } = _v35(),
            {
              fontSize: _v2,
              updatePersistentData: _v3
            } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
              updatePersistentData: _v0.updatePersistentData,
              fontSize: _v0.persistentData.fontSize
            })));
          return {
            decrease: () => {
              let _v0 = _v2 - 2;
              _v0 >= 2 && (_v3({
                fontSize: _v0
              }), _v1({
                name: "decrease_text_size",
                eventType: "click",
                location: "teleprompter"
              }), _v0.info("decrease text size", {
                size: _v0
              }));
            },
            increase: () => {
              let _v0 = _v2 + 2;
              _v0 <= 60 && (_v3({
                fontSize: _v0
              }), _v1({
                name: "increase_text_size",
                eventType: "click",
                location: "teleprompter"
              }), _v0.info("increase text size", {
                size: _v0
              }));
            },
            fontSize: _v2
          };
        })(),
        {
          trackUserInteractionEvent: _v9,
          trackTeleprompterUpgrade: _v10
        } = _v35(),
        {
          sendToggleTeleprompterBpEvent: _v11
        } = (0, _v270.useTeleprompterAnalytics)({
          element: "icon",
          feature: "teleprompter",
          location: "modal_upper_banner"
        }, _v4, _v6),
        _v12 = (0, _v40.useTeleprompterStore)(_v0 => "started" === _v0.promptRequestStatus),
        {
          toggleTeleprompter: _v13
        } = (0, _v286.useTeleprompter)(_v5),
        {
          isSpeechRecognitionSupported: _v14,
          autoScrollSpeed: _v15,
          getAvailableScrollModes: _v16,
          setCertainMode: _v17,
          autoEvaluatedForCurrentInput: _v18
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(({
          persistentData: _v0,
          getAvailableScrollModes: _v1,
          setCertainMode: _v2,
          scrollModeForInput: _v3
        }) => ({
          isSpeechRecognitionSupported: _v0.isSpeechRecognitionSupported,
          autoEvaluatedForCurrentInput: _v3,
          autoScrollSpeed: _v0.autoScrollSpeed,
          getAvailableScrollModes: _v1,
          setCertainMode: _v2
        }))),
        {
          mode: _v19
        } = (0, _v76.useScrollMode)(),
        _v20 = (0, _v19.useCallback)(_v0 => {
          _v17(_v0) && _v9({
            name: "change_teleprompter_speed",
            eventType: "click",
            location: "teleprompter"
          });
        }, [_v17, _v9]),
        _v21 = (0, _v19.useCallback)(() => {
          _v13(!1), _v11(!1), _v9({
            name: "close_teleprompter",
            eventType: "click",
            location: "teleprompter"
          }), _v2 && _v10({
            copy: "dismiss",
            actionType: "dismiss"
          });
        }, [_v11, _v2, _v13, _v10, _v9]),
        _v22 = (0, _v19.useCallback)(() => {
          _v3(!0), setTimeout(() => {
            window.opener?.postMessage("popIn");
          }, 333);
        }, [_v3]),
        _v23 = (0, _v19.useMemo)(() => _v16(_v14).map(_v0 => ({
          ..._v0,
          label: "dictationBased" === _v0.mode ? _v31.translations.dictationBasedScroll : 0 === _v0.speed ? _v31.translations.speedOff : `${_v0.speed}x`,
          isDisabled: "dictationBased" === _v0.mode && "staticSpeed" === _v18
        })), [_v18, _v16, _v14]),
        _v24 = (0, _v19.useMemo)(() => _v23.find(_v0 => _v0.mode === _v19 && ("staticSpeed" !== _v0.mode || _v0.speed === _v15))?.label, [_v15, _v19, _v23]),
        _v25 = _v2 || _v12;
      return (0, _v18.jsx)(_v81.Flex, {
        w: "100%",
        h: 56,
        paddingX: (0, _v82.rem)(24),
        justifyContent: "flex-end",
        alignItems: "center",
        children: (0, _v18.jsxs)(_v23.HStack, {
          children: ["live" === _v4 && (0, _v18.jsx)(_v290, {}), (0, _v18.jsxs)(_v275.Menu, {
            children: [(0, _v18.jsx)(_v279.Tooltip, {
              label: _v31.translations.tooltips.speed,
              children: (0, _v18.jsx)(_v276.MenuButton, {
                as: _v273.Button,
                variant: "tertiary",
                size: "sm",
                leftIcon: (0, _v18.jsx)(_v280.Clock, {
                  boxSize: _v291
                }),
                isDisabled: _v25,
                isLoading: "uncertain" === _v19,
                children: _v24
              })
            }), (0, _v18.jsx)(_v278.MenuList, {
              children: _v23.map(({
                isDisabled: _v0,
                label: _v1,
                ..._v2
              }) => (0, _v18.jsx)(_v277.MenuItem, {
                onClick: () => _v20(_v2),
                isDisabled: _v0,
                children: _v1
              }, _v1))
            })]
          }), (0, _v18.jsx)(_v279.Tooltip, {
            label: _v31.translations.tooltips.decreaseFontSize,
            children: (0, _v18.jsx)(_v274.IconButton, {
              variant: "tertiary",
              size: "sm",
              onClick: _v8,
              isDisabled: _v25,
              icon: (0, _v18.jsx)(_v282, {
                boxSize: _v291
              }),
              "aria-label": "font-size-decrease-button"
            })
          }), (0, _v18.jsx)(_v279.Tooltip, {
            label: _v31.translations.tooltips.increaseFontSize,
            children: (0, _v18.jsx)(_v274.IconButton, {
              variant: "tertiary",
              size: "sm",
              onClick: _v7,
              isDisabled: _v25,
              icon: (0, _v18.jsx)(_v283, {
                boxSize: _v291
              }),
              "aria-label": "font-size-increase-button"
            })
          }), _v78 && (0, _v18.jsx)(_v274.IconButton, {
            variant: "tertiary",
            size: "sm",
            onClick: _v1 ? _v22 : _v0,
            isDisabled: _v25,
            icon: _v1 ? (0, _v18.jsx)(_v284.PopIn, {
              boxSize: _v291
            }) : (0, _v18.jsx)(_v285.PopOut, {
              boxSize: _v291
            }),
            "aria-label": "toggle-popped-out-teleprompter-button"
          }), !_v1 && (0, _v18.jsx)(_v279.Tooltip, {
            label: _v31.translations.tooltips.close,
            children: (0, _v18.jsx)(_v274.IconButton, {
              variant: "tertiary",
              size: "sm",
              onClick: _v21,
              icon: (0, _v18.jsx)(_v281.CloseX, {}),
              "aria-label": "close-button"
            })
          })]
        })
      });
    };
  var _v293 = _v0.i(0),
    _v294 = _v0.i(0),
    _v295 = _v0.i(0);
  let _v296 = ({
      message: _v0,
      title: _v1,
      onClose: _v2,
      status: _v3
    }) => (0, _v18.jsxs)(_v293.Alert, {
      w: "auto",
      status: _v3,
      minWidth: (0, _v82.rem)(200),
      onClose: _v2,
      marginX: "300",
      children: [(0, _v18.jsx)(_v295.AlertTitle, {
        fontSize: "heading-xs",
        children: _v1
      }), (0, _v18.jsx)(_v294.AlertDescription, {
        fontSize: "body-sm",
        children: _v0
      })]
    }),
    _v297 = ({
      visibleNotices: _v0
    }) => (0, _v18.jsx)(_v18.Fragment, {
      children: _v0.map(({
        notice: _v0,
        message: _v1,
        onClose: _v2,
        title: _v3
      }) => (0, _v18.jsx)(_v296, {
        title: _v3,
        message: _v1,
        status: "info",
        onClose: _v2
      }, _v0))
    });
  var _v298 = _v0.i(0),
    _v299 = _v0.i(0);
  function _v300(_v0, _v1) {
    let [_v2, _v3] = (0, _v19.useState)(!1);
    return (0, _v19.useEffect)(() => {
      let _v0;
      return _v0 && !_v2 ? _v3(!0) : !_v0 && _v2 && (_v0 = setTimeout(() => _v3(!1), _v1)), () => clearTimeout(_v0);
    }, [_v0, _v1, _v2]), _v2;
  }
  var _v301 = _v0.i(0),
    _v302 = _v0.i(0),
    _v303 = _v0.i(0),
    _v304 = _v0.i(0),
    _v305 = _v0.i(0),
    _v306 = _v0.i(0),
    _v307 = _v0.i(0),
    _v308 = _v0.i(0),
    _v309 = _v0.i(0);
  let _v310 = _v0 => {
      let {
          label: _v1,
          options: _v2,
          modifierKey: _v3
        } = _v0,
        {
          trackUserInteractionEvent: _v4
        } = _v35(),
        {
          updatePersistentData: _v5,
          modifiers: _v6
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          updatePersistentData: _v0.updatePersistentData,
          modifiers: _v0.persistentData.scriptGeneratorModifiers
        }))),
        _v7 = _v6[_v3];
      return (0, _v18.jsxs)(_v22.VStack, {
        mt: "tone" === _v3 ? (0, _v82.rem)(15) : 0,
        fontWeight: 700,
        alignItems: "flex-start",
        w: "100%",
        children: [(0, _v18.jsx)(_v21.Text, {
          variant: "heading-sm",
          children: _v1
        }), (0, _v18.jsx)(_v309.Wrap, {
          children: _v2.map(_v0 => {
            let _v1,
              _v2 = _v0.value === _v7 || !!(_v0.isDefaultOption && "default" === _v7);
            return (0, _v18.jsx)(_v80.Box, {
              "data-testid": `${_v0.label}_${_v267}`,
              onClick: (_v1 = _v0.value, () => {
                _v5({
                  scriptGeneratorModifiers: {
                    ..._v6,
                    [_v3]: _v6[_v3] === _v1 ? "unset" : _v1
                  }
                }), _v4({
                  name: "tone" === _v3 ? "script_tone" : "script_duration",
                  eventType: "select",
                  value: _v1,
                  location: "teleprompter"
                });
              }),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              w: (0, _v82.rem)(92),
              h: (0, _v82.rem)(32),
              bg: "stroke",
              background: _v2 ? "input-stroke-hover" : "transparent",
              borderRadius: (0, _v82.rem)(6),
              borderWidth: (0, _v82.rem)(1),
              borderStyle: "solid",
              borderColor: "input-stroke-hover",
              cursor: "pointer",
              textAlign: "center",
              userSelect: "none",
              _hover: {
                transition: "170ms",
                bg: "input-stroke"
              },
              children: (0, _v18.jsx)(_v21.Text, {
                variant: "heading-xs",
                children: _v0.label
              })
            }, _v0.value);
          })
        })]
      });
    },
    _v311 = () => (0, _v18.jsxs)(_v18.Fragment, {
      children: [(0, _v18.jsx)(_v310, {
        modifierKey: "duration",
        label: _v308.DURATION_SECTION.label,
        options: _v308.DURATION_SECTION.options
      }), (0, _v18.jsx)(_v310, {
        modifierKey: "tone",
        label: _v308.TONE_SECTION.label,
        options: _v308.TONE_SECTION.options
      })]
    }),
    _v312 = ({
      isDisabled: _v0
    }) => {
      let {
          trackUserInteractionEvent: _v1
        } = _v35(),
        _v2 = (0, _v19.useRef)(null),
        _v3 = (0, _v19.useRef)(null),
        {
          isPopOverVisible: _v4,
          setIsPopOverVisible: _v5
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          isPopOverVisible: _v0.isPopOverVisible,
          setIsPopOverVisible: _v0.setIsPopOverVisible
        }))),
        {
          client: _v6,
          getClientAnalyticContext: _v7
        } = (0, _v19.useContext)(_v30),
        {
          sendOpenTeleprompterScriptSettingsBpEvent: _v8
        } = (0, _v270.useTeleprompterAnalytics)({
          element: "icon",
          feature: "teleprompter",
          location: "modal_bottom_banner"
        }, _v6, _v7);
      (0, _v305.useOutsideClick)({
        ref: _v2,
        handler: _v0 => {
          !_v4 || _v0.target && _v3.current?.contains(_v0.target) || _v0.target && !_v2.current?.contains(_v0.target) && (_v5(!1), _v0.stopPropagation());
        },
        enabled: !0
      });
      let _v9 = (0, _v306.useColorModeValue)("rgba(244, 246, 248, 0.7)", "rgba(37, 45, 53, 0.7)");
      return (0, _v18.jsxs)(_v302.Popover, {
        isOpen: _v4,
        placement: "top-end",
        offset: [50, 10],
        children: [(0, _v18.jsx)(_v303.PopoverTrigger, {
          children: (0, _v18.jsx)(_v274.IconButton, {
            "aria-label": "open-modifiers",
            onClick: () => {
              let _v0 = !_v4;
              _v0 && (_v8(), _v1({
                name: "open_script_settings",
                eventType: "click",
                location: "teleprompter"
              })), _v5(_v0);
            },
            ref: _v3,
            isActive: _v4,
            variant: "tertiary",
            size: "sm",
            isDisabled: _v0,
            icon: (0, _v18.jsx)(_v307.FiltersLevers, {}),
            "data-testid": _v268.ACTIONS.CONFIGURE_PROMPT_MODIFIERS,
            sx: {
              svg: {
                width: (0, _v82.rem)(20),
                height: (0, _v82.rem)(20)
              }
            }
          })
        }), (0, _v18.jsx)(_v304.PopoverContent, {
          sx: {
            backgroundColor: `${_v9} !important`,
            backdropFilter: "blur(var(--vimeo-blur-lg))"
          },
          children: (0, _v18.jsx)(_v22.VStack, {
            p: (0, _v82.rem)(15),
            width: (0, _v82.rem)(322),
            ref: _v2,
            "data-testid": _v268.CONFIGURE_PROMPT_MODIFIERS_POPOVER.POPOVER_CONTAINER,
            children: (0, _v18.jsx)(_v311, {})
          })
        })]
      });
    };
  var _v313 = _v0.i(0),
    _v314 = _v0.i(0);
  let _v315 = ({
    children: _v0,
    isDisabled: _v1,
    onGenerate: _v2,
    onClick: _v3
  }) => {
    let {
        trackUserInteractionEvent: _v4
      } = _v35(),
      _v5 = (0, _v19.useRef)(!1),
      _v6 = (0, _v314.useHasMounted)(),
      {
        currentSessionData: _v7,
        updateCurrentSessionData: _v8
      } = (0, _v77.useSession)();
    return (0, _v18.jsxs)(_v81.Flex, {
      paddingY: (0, _v82.rem)(12),
      alignItems: "center",
      h: "100%",
      children: [(0, _v18.jsx)(_v313.Input, {
        _focus: {
          outline: "none"
        },
        _disabled: {
          backgroundColor: "transparent",
          border: "none"
        },
        _hover: {
          outline: "none"
        },
        outline: "none",
        borderRadius: 0,
        border: 0,
        fontSize: (0, _v82.rem)(14),
        margin: 0,
        padding: 0,
        h: "100%",
        placeholder: _v31.translations.script.generate.promptPlaceholder,
        value: _v7.scriptGeneratorPrompt,
        onKeyDown: _v0 => {
          "Enter" === _v0.key && _v2();
        },
        onChange: _v0 => {
          _v8({
            scriptGeneratorPrompt: _v0.target.value
          }), !_v5.current && _v6 && (_v4({
            name: "add_script_to_generator",
            eventType: "click",
            location: "teleprompter"
          }), _v5.current = !0);
        },
        onClick: _v3,
        onDrop: _v0 => {
          _v0.preventDefault();
        },
        maxLength: 512,
        isDisabled: _v1,
        backgroundColor: "transparent",
        "data-testid": _v268.USER_PROMPT_INPUT
      }), _v0]
    });
  };
  var _v316 = _v0.i(0),
    _v317 = _v0.i(0),
    _v318 = _v0.i(0);
  let _v319 = ({
    isDisabled: _v0
  }) => (0, _v18.jsxs)(_v302.Popover, {
    placement: "top",
    trigger: "hover",
    children: [(0, _v18.jsx)(_v303.PopoverTrigger, {
      children: (0, _v18.jsx)(_v274.IconButton, {
        variant: "tertiary",
        size: "sm",
        isDisabled: _v0,
        "data-testid": _v268.ACTIONS.LEGAL_INFO,
        "aria-label": "open-legal-info",
        icon: (0, _v18.jsx)(_v317.InfoCircle, {}),
        sx: {
          svg: {
            width: (0, _v82.rem)(20),
            height: (0, _v82.rem)(20)
          }
        }
      })
    }), (0, _v18.jsx)(_v304.PopoverContent, {
      padding: "100",
      children: (0, _v18.jsx)(_v21.Text, {
        color: "text-primary",
        variant: "body-md",
        children: (0, _v318.translate)({
          singular: "Your use of this feature is governed by our {LINK}Vimeo AI Addendum.{/LINK}",
          replacements: {
            LINK: _v0 => (0, _v18.jsxs)(_v316.Link, {
              fontSize: 14,
              variant: "inline-primary",
              target: "_blank",
              href: "https://vimeo.com/terms/ai-addendum",
              children: [(0, _v18.jsx)("br", {}), " ", _v0]
            }, "link")
          },
          dictionary: {
            es: {
              singular: "El uso de esta función se rige por nuestro {LINK}Apéndice de Vimeo AI.{/LINK}"
            },
            "de-DE": {
              singular: "Die Nutzung dieser Funktion unterliegt unserem {LINK}Vimeo AI-Zusatz.{/LINK}"
            },
            "fr-FR": {
              singular: "L'utilisation de cette fonctionnalité est régie par notre {LINK}Addenda relatif à l'IA Vimeo.{/LINK}"
            },
            "ja-JP": {
              singular: "お客様によるこの機能の使用は、{LINK}Vimeo AI補遺契約{/LINK}に準拠します。"
            },
            "ko-KR": {
              singular: "이 기능을 사용할 때는 {LINK}Vimeo AI 부록{/LINK}이 적용됩니다."
            },
            "pt-BR": {
              singular: "O uso desse recurso é regido por nosso {LINK}Adendo do Vimeo AI{/LINK}."
            },
            "zh-CN": {
              singular: "使用此功能须遵守我们的 {LINK}Vimeo AI 附录。{/LINK}"
            }
          }
        })
      })
    })]
  });
  var _v320 = _v0.i(0),
    _v321 = _v0.i(0),
    _v322 = _v0.i(0);
  let _v323 = ({
    setStep: _v0
  } = {}) => {
    let _v1 = (0, _v33.useLogger)("useScriptGenerator"),
      {
        client: _v2,
        isGuestUser: _v3,
        guestUserInfo: _v4
      } = (0, _v19.useContext)(_v30),
      _v5 = _v271(),
      {
        updateCurrentSessionData: _v6
      } = (0, _v77.useSession)(),
      _v7 = (0, _v320.useGctlConfig)(),
      {
        locale: _v8,
        teamUser: _v9,
        jwt: _v10
      } = (0, _v19.useContext)(_v29.ViewerContext) ?? {};
    (0, _v19.useEffect)(() => {
      _v322.fetchHelper.initialize({
        baseUrl: _v7.baseUrl,
        xVimeoPage: _v7.xVimeoPage,
        locale: _v7.locale
      });
    }, [_v7]);
    let _v11 = _v0 => {
        _v6({
          scriptGeneratorIsSurveyShown: _v0
        });
      },
      {
        setReceivedCharacters: _v12,
        setPromptRequestStatus: _v13,
        setPromptRequestAbortController: _v14,
        isPrivacyLinkWasShowed: _v15,
        surveyThumbsSelected: _v16,
        modifiers: _v17,
        setPromptError: _v18,
        promptRequestAbortController: _v19,
        updatePersistentData: _v20
      } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
        promptRequestAbortController: _v0.promptRequestAbortController,
        setPromptError: _v0.setPromptError,
        setPromptRequestStatus: _v0.setPromptRequestStatus,
        setPromptRequestAbortController: _v0.setPromptRequestAbortController,
        setReceivedCharacters: _v0.setReceivedCharacters,
        modifiers: _v0.persistentData.scriptGeneratorModifiers,
        surveyThumbsSelected: _v0.persistentData.surveyThumbsSelected,
        isPrivacyLinkWasShowed: _v0.persistentData.isPrivacyLinkWasShowed,
        updatePersistentData: _v0.updatePersistentData
      }))),
      _v21 = async _v0 => {
        let _v1 = "";
        _v1.info("making script generation request", {
          modifiers: _v0.modifiers ?? null,
          teamId: _v0.teamId ?? null,
          lang: _v0.lang ?? null
        });
        try {
          let _v0;
          _v19?.abort(), _v11(!1);
          let {
            isValid: _v1,
            message: _v2
          } = _v321.validateBody(_v0);
          if (!_v1 && _v2) return void _v13("failed");
          _v13("started");
          let _v3 = new AbortController();
          if (_v14(_v3), _v3 && "live" === _v2 ? (_v0.liveGuestInfo = _v4, _v0 = await _v321.makeGuestRequest(_v0, _v3.signal, _v10 ?? "")) : _v0 = await _v321.makeRequest(_v0, _v3.signal), _v0.ok) {
            let _v0 = _v321.getReader(_v0);
            if (!_v0) {
              _v13("failed"), _v1.warn("script generation failed - missing reader");
              return;
            }
            if (_v1.info("script generation has successful response"), await _v321.readResponse(_v0, _v0 => {
              _v15 || _v20({
                isPrivacyLinkWasShowed: !0
              }), "" === _v1 && (_v18(null), _v0?.("editor")), _v1 += _v0, _v12(_v1);
            }), _v1.length > 0) _v13("finished");else {
              _v13("failed"), _v1.warn("script generation failed - response is empty");
              return;
            }
            _v16 || _v11(!0);
          } else {
            let _v0 = await _v0.json();
            if (5 === _v0.errorCode) _v21({
              ..._v0,
              chatPayload: _v0.chatPayload?.slice(_v0.chatPayload.length - 1)
            });else {
              _v0?.("editor"), _v13("failed");
              let _v0 = _v321.getErrorByCode(_v0.errorCode);
              _v18(_v0), _v1.warn("script generation failed", {
                errorCode: _v0.errorCode
              });
            }
          }
        } catch (_v0) {
          if ("AbortError" === _v0.name) {
            _v13("finished"), _v1.warn("script generation aborted");
            return;
          }
          _v0?.("editor"), _v13("failed");
          let _v1 = _v321.getUnexpectedError(!!_v1.length);
          _v18(_v1), _v1.error(Error("script generation failed"), {
            category: _v34.SCRIPT_GENERATOR,
            method: "makePromptRequest",
            component: "useScriptGenerator",
            data: {
              error: _v0,
              promptError: _v1
            }
          });
        } finally {
          _v0.chatPayload && _v1.length && _v6({
            conversationHistory: [..._v0.chatPayload, {
              role: "assistant",
              content: _v1
            }]
          }), _v1 && _v5("generated", _v1), _v12(null);
        }
      };
    return {
      makePromptRequest: _v21,
      getPromptRequestBody: (_v0, _v1, _v2) => {
        let _v3 = {
          style: _v321.getTone(_v17.tone),
          duration: _v2 ?? _v321.getDuration(_v17.duration)
        };
        _v308.SHOULD_ATTACH_CONVERSETION_HISTORY || (_v1 = []);
        let _v4 = {
          chatPayload: [..._v1, {
            role: "user",
            content: _v0
          }],
          modifiers: _v3
        };
        return _v9?.ownerId && (_v4.teamId = _v9?.ownerId), _v8 && (_v4.lang = _v8.split("-")[0]), _v4;
      }
    };
  };
  var _v324 = _v0.i(0);
  let _v325 = ({
      categoryKey: _v0,
      categoryLabel: _v1,
      isDisabled: _v2,
      onClick: _v3
    }) => {
      let _v4 = (0, _v306.useColorModeValue)("rgba(35, 49, 59, 0.1)", "rgba(239, 239, 239, 0.1)");
      return (0, _v18.jsx)(_v273.Button, {
        backgroundColor: _v4,
        color: "text-primary",
        size: "sm",
        minW: (0, _v82.rem)(96),
        maxW: (0, _v82.rem)(200),
        flex: 1,
        _hover: {
          backgroundColor: (0, _v306.useColorModeValue)("rgba(35, 49, 59, 0.13)", "rgba(239, 239, 239, 0.13)")
        },
        _active: {
          backgroundColor: "input-fill"
        },
        _disabled: {
          backgroundColor: _v4
        },
        onClick: _v3,
        isDisabled: _v2,
        "data-testid": `${_v269.SAMPLE_PROMPT_BUTTON}__${_v0}`,
        children: (0, _v18.jsx)(_v324.Paragraph, {
          size: "sm",
          children: _v1
        })
      });
    },
    _v326 = {
      longerCustomInput: (0, _v318.translate)({
        singular: "Make longer",
        dictionary: {
          es: {
            singular: "Ampliar"
          },
          "de-DE": {
            singular: "Länger machen"
          },
          "fr-FR": {
            singular: "Rallonger"
          },
          "ja-JP": {
            singular: "長くする"
          },
          "ko-KR": {
            singular: "더 길게 만들기"
          },
          "pt-BR": {
            singular: "Alongar script"
          },
          "zh-CN": {
            singular: "加长"
          }
        }
      }),
      shorterCustomInput: (0, _v318.translate)({
        singular: "Make shorter",
        dictionary: {
          es: {
            singular: "Reducir"
          },
          "de-DE": {
            singular: "Kürzer machen"
          },
          "fr-FR": {
            singular: "Raccourcir"
          },
          "ja-JP": {
            singular: "短くする"
          },
          "ko-KR": {
            singular: "더 짧게 만들기"
          },
          "pt-BR": {
            singular: "Encurtar script"
          },
          "zh-CN": {
            singular: "缩短"
          }
        }
      }),
      tryAgain: (0, _v318.translate)({
        singular: "Try again",
        dictionary: {
          es: {
            singular: "Intentar de nuevo"
          },
          "de-DE": {
            singular: "Nochmal versuchen"
          },
          "fr-FR": {
            singular: "Veuillez réessayer"
          },
          "ja-JP": {
            singular: "再試行してください"
          },
          "ko-KR": {
            singular: "다시 시도하세요"
          },
          "pt-BR": {
            singular: "Tente de novo"
          },
          "zh-CN": {
            singular: "再试一次"
          }
        }
      }),
      shorter: (0, _v318.translate)({
        singular: "Make shorter",
        dictionary: {
          es: {
            singular: "Reducir"
          },
          "de-DE": {
            singular: "Kürzer machen"
          },
          "fr-FR": {
            singular: "Raccourcir"
          },
          "ja-JP": {
            singular: "短くする"
          },
          "ko-KR": {
            singular: "더 짧게 만들기"
          },
          "pt-BR": {
            singular: "Encurtar script"
          },
          "zh-CN": {
            singular: "缩短"
          }
        }
      }),
      longer: (0, _v318.translate)({
        singular: "Make longer",
        dictionary: {
          es: {
            singular: "Ampliar"
          },
          "de-DE": {
            singular: "Länger machen"
          },
          "fr-FR": {
            singular: "Rallonger"
          },
          "ja-JP": {
            singular: "長くする"
          },
          "ko-KR": {
            singular: "더 길게 만들기"
          },
          "pt-BR": {
            singular: "Alongar script"
          },
          "zh-CN": {
            singular: "加长"
          }
        }
      }),
      showSamplePrompts: (0, _v318.translate)({
        singular: "Sample prompts",
        dictionary: {
          es: {
            singular: "Indicaciones de muestreo"
          },
          "de-DE": {
            singular: "Beispielaufforderungen"
          },
          "fr-FR": {
            singular: "Fréquence d'échantillonnage"
          },
          "ja-JP": {
            singular: "サンプルプロンプト"
          },
          "ko-KR": {
            singular: "샘플 프롬프트"
          },
          "pt-BR": {
            singular: "Exemplos de instruções"
          },
          "zh-CN": {
            singular: "提示示例"
          }
        }
      })
    },
    _v327 = {
      demo: {
        label: (0, _v318.translate)({
          singular: "Demo",
          dictionary: {
            es: {
              singular: "DEMOSTRACIÓN"
            },
            "de-DE": {
              singular: "DEMO"
            },
            "fr-FR": {
              singular: "DÉMO"
            },
            "ja-JP": {
              singular: "デモ"
            },
            "ko-KR": {
              singular: "데모"
            },
            "pt-BR": {
              singular: "DEMONSTRAÇÃO"
            },
            "zh-CN": {
              singular: "演示"
            }
          }
        }),
        options: [(0, _v318.translate)({
          singular: "A hands-on product demonstration showcasing the top three features.",
          dictionary: {
            es: {
              singular: "Una demostración práctica del producto que presente las tres características principales."
            },
            "de-DE": {
              singular: "Eine praktische Produktdemonstration, in der die drei wichtigsten Funktionen vorgestellt werden."
            },
            "fr-FR": {
              singular: "Une démonstration pratique du produit qui présente ses trois principales caractéristiques."
            },
            "ja-JP": {
              singular: "上位3つの機能を紹介する実践的な製品デモ。"
            },
            "ko-KR": {
              singular: "주요 세 가지 기능을 직접 시연하는 제품 데모입니다."
            },
            "pt-BR": {
              singular: "Roteiro para uma demonstração prática do produto mostrando os três principais recursos."
            },
            "zh-CN": {
              singular: "一个产品亲手操作演示，展示最重要的三大功能。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A quick product overview, emphasizing its compatibility with industry standards.",
          dictionary: {
            es: {
              singular: "Una breve descripción general del producto que haga hincapié en su compatibilidad con los estándares de la industria."
            },
            "de-DE": {
              singular: "Eine kurze Produktübersicht, die die Kompatibilität mit Industriestandards hervorhebt."
            },
            "fr-FR": {
              singular: "Une présentation rapide du produit qui met en avant sa compatibilité avec les normes du secteur."
            },
            "ja-JP": {
              singular: "業界標準との互換性を際立たせる、製品の概要の簡単な説明。"
            },
            "ko-KR": {
              singular: "업계 표준과의 호환성을 강조한 간략한 제품 개요입니다."
            },
            "pt-BR": {
              singular: "Visão geral rápida do produto, enfatizando sua compatibilidade com os padrões do setor."
            },
            "zh-CN": {
              singular: "简要介绍产品，强调其与行业标准的相容性。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A product demo targeting potential users who are new to our platform.",
          dictionary: {
            es: {
              singular: "Una demostración del producto dirigida a usuarios potenciales que sean nuevos en nuestra plataforma."
            },
            "de-DE": {
              singular: "Eine Produktdemo für potenzielle Benutzer, die neu auf unserer Plattform sind."
            },
            "fr-FR": {
              singular: "Une démonstration de produit destinée à des utilisateurs potentiels qui ne connaissent pas encore notre plateforme."
            },
            "ja-JP": {
              singular: "当社のプラットフォームを初めて利用する潜在的なユーザーを対象とする製品デモ。"
            },
            "ko-KR": {
              singular: "플랫폼을 처음 사용하는 잠재 사용자를 위한 제품 데모입니다."
            },
            "pt-BR": {
              singular: "Demonstração de produto direcionada a usuários em potencial que são novos na nossa plataforma."
            },
            "zh-CN": {
              singular: "针对初次使用我们平台的潜在用户进行产品演示。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A product deep dive, focusing on advanced functionalities and use cases.",
          dictionary: {
            es: {
              singular: "Un análisis detallado del producto que se centre en las funcionalidades avanzadas y los casos de uso."
            },
            "de-DE": {
              singular: "Eine Produktstudie, die sich auf erweiterte Funktionen und Anwendungsfälle konzentriert."
            },
            "fr-FR": {
              singular: "Une étude approfondie d'un produit qui se concentre sur les fonctionnalités avancées et les cas d'utilisation."
            },
            "ja-JP": {
              singular: "高度な機能や使用事例に焦点を当てた、製品を深く掘り下げる説明。"
            },
            "ko-KR": {
              singular: "고급 기능과 사용 사례에 초점을 맞춘 제품 심층 분석입니다."
            },
            "pt-BR": {
              singular: "Análise aprofundada do produto, com foco em funcionalidades avançadas e casos de uso."
            },
            "zh-CN": {
              singular: "一份产品深度分析，重点介绍高级功能和用例。"
            }
          }
        })]
      },
      marketing: {
        label: (0, _v318.translate)({
          singular: "Marketing",
          dictionary: {
            "ja-JP": {
              singular: "マーケティング"
            },
            "ko-KR": {
              singular: "마케팅"
            },
            "zh-CN": {
              singular: "营销"
            }
          }
        }),
        options: [(0, _v318.translate)({
          singular: "A storytelling marketing video, highlighting a customer success story related to our product.",
          dictionary: {
            es: {
              singular: "Un video de marketing narrativo que destaque la historia de éxito de un cliente relacionada con nuestro producto."
            },
            "de-DE": {
              singular: "Ein Storytelling-Marketingvideo, das eine Erfolgsgeschichte eines Kunden zu unserem Produkt zeigt."
            },
            "fr-FR": {
              singular: "Une vidéo de marketing narratif qui met en lumière un parcours de réussite client en rapport avec notre produit."
            },
            "ja-JP": {
              singular: "当社の製品に関連するユーザーの成功事例に焦点を当てた、ストーリーテリングのマーケティング動画。"
            },
            "ko-KR": {
              singular: "제품 관련 고객의 성공 사례를 부각하는 스토리텔링 마케팅 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de marketing, destacando uma história de sucesso de um cliente relacionada ao nosso produto."
            },
            "zh-CN": {
              singular: "一个故事形式的营销视频，重点介绍与我们的产品相关的客户成功故事。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A seasonal marketing video, tying our product to current trends and festivities.",
          dictionary: {
            es: {
              singular: "Un video de marketing de temporada que vincule nuestro producto a las tendencias y festividades actuales."
            },
            "de-DE": {
              singular: "Ein saisonales Marketingvideo, das unser Produkt mit aktuellen Trends und Festivitäten in Verbindung bringt."
            },
            "fr-FR": {
              singular: "Une vidéo de marketing saisonnier qui lie notre produit aux tendances et festivités actuelles."
            },
            "ja-JP": {
              singular: "当社の製品を現在のトレンドや行事に結び付ける、季節のマーケティング動画。"
            },
            "ko-KR": {
              singular: "최신 트렌드와 축제에 제품을 연결하는 시즌별 마케팅 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de marketing sazonal, associando o produto às tendências e festividades do momento."
            },
            "zh-CN": {
              singular: "一个季节性营销视频，将我们的产品与当前的热点和节日联系起来。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A comparison video, showcasing how our product outperforms competitors.",
          dictionary: {
            es: {
              singular: "Un video comparativo que presente cómo nuestro producto supera a la competencia."
            },
            "de-DE": {
              singular: "Ein Vergleichsvideo, das zeigt, wie unser Produkt die Konkurrenz übertrifft."
            },
            "fr-FR": {
              singular: "Une vidéo de comparaison qui montre pourquoi notre produit surpasse ses concurrents."
            },
            "ja-JP": {
              singular: "当社の製品が競合他社よりも優れていることを紹介する比較動画。"
            },
            "ko-KR": {
              singular: "제품이 경쟁사 대비 어떻게 우위를 점하는지 보여주는 비교 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo comparativo, mostrando como nosso produto supera a concorrência."
            },
            "zh-CN": {
              singular: "一个对比视频，展示我们的产品如何优于竞争对手。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A script for a teaser video, building anticipation for an upcoming product launch.",
          dictionary: {
            es: {
              singular: "Un guion para un video de adelanto que genere anticipación para el próximo lanzamiento de un producto."
            },
            "de-DE": {
              singular: "Ein Skript für ein Teaser-Video, das die Vorfreude auf eine bevorstehende Produkteinführung steigert."
            },
            "fr-FR": {
              singular: "Un script pour une vidéo teaser destinée à susciter l'enthousiasme pour le lancement d'un produit."
            },
            "ja-JP": {
              singular: "近々発売される製品への期待感を高めるティザー動画のスクリプト。"
            },
            "ko-KR": {
              singular: "곧 출시 예정인 새 제품에 대한 기대감을 불러일으키는 티저 동영상 대본입니다."
            },
            "pt-BR": {
              singular: "Roteiro para um vídeo de teaser, criando expectativa para o lançamento próximo de um produto."
            },
            "zh-CN": {
              singular: "一个预告片脚本，为即将推出的产品营造期待氛围。"
            }
          }
        })]
      },
      presentation: {
        label: (0, _v318.translate)({
          singular: "Presentation",
          dictionary: {
            es: {
              singular: "Presentación"
            },
            "de-DE": {
              singular: "Präsentation"
            },
            "fr-FR": {
              singular: "Présentation"
            },
            "ja-JP": {
              singular: "プレゼンテーション"
            },
            "ko-KR": {
              singular: "프레젠테이션"
            },
            "pt-BR": {
              singular: "Apresentação"
            },
            "zh-CN": {
              singular: "介绍"
            }
          }
        }),
        options: [(0, _v318.translate)({
          singular: "A data-driven presentation, incorporating charts and graphs to support key points.",
          dictionary: {
            es: {
              singular: "Una presentación basada en datos que incorpore cuadros y gráficos para apoyar los puntos clave."
            },
            "de-DE": {
              singular: "Eine datengestützte Präsentation mit Diagrammen und Grafiken, um die wichtigsten Punkte zu untermauern."
            },
            "fr-FR": {
              singular: "Une présentation axée sur les données qui incorpore des tableaux et des graphiques pour étayer les points clés."
            },
            "ja-JP": {
              singular: "重要なポイントを裏付ける表やグラフを組み込んだデータ主導型プレゼンテーション。"
            },
            "ko-KR": {
              singular: "핵심 내용을 뒷받침하는 차트와 그래프를 포함한 데이터 기반 프리젠테이션입니다."
            },
            "pt-BR": {
              singular: "Roteiro para uma apresentação baseada em dados, incorporando tabelas e gráficos para apoiar os pontos-chave."
            },
            "zh-CN": {
              singular: "以数据为导向的演示，结合图表和图形来支持关键要点。"
            }
          }
        }), (0, _v318.translate)({
          singular: "An interactive presentation, encouraging audience participation and questions.",
          dictionary: {
            es: {
              singular: "Una presentación interactiva que fomente la participación y las preguntas de la audiencia."
            },
            "de-DE": {
              singular: "Eine interaktive Präsentation, die das Publikum zum Mitmachen und Fragen animiert."
            },
            "fr-FR": {
              singular: "Une présentation interactive qui encourage la participation et les questions du public."
            },
            "ja-JP": {
              singular: "聴衆の参加や質問を促すインタラクティブなプレゼンテーション。"
            },
            "ko-KR": {
              singular: "청중의 참여와 질문을 유도하는 인터랙티브 프리젠테이션입니다."
            },
            "pt-BR": {
              singular: "Apresentação interativa, convidando o público a participar e fazer perguntas."
            },
            "zh-CN": {
              singular: "一个互动演示，鼓励观众参与和提问。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A thought leadership presentation, sharing insights on future industry trends.",
          dictionary: {
            es: {
              singular: "Una presentación de liderazgo de pensamiento que brinde información sobre las tendencias futuras de la industria."
            },
            "de-DE": {
              singular: "Eine Thought-Leadership-Präsentation, die Einblicke in zukünftige Branchentrends gibt."
            },
            "fr-FR": {
              singular: "Une présentation de leadership qui partage des perspectives sur les futures tendances du secteur."
            },
            "ja-JP": {
              singular: "将来の業界トレンドについての知見を共有するソートリーダーシッププレゼンテーション。"
            },
            "ko-KR": {
              singular: "미래 산업 트렌드에 대한 인사이트를 공유하는 선도적 사고 프리젠테이션입니다."
            },
            "pt-BR": {
              singular: "Apresentação de liderança inovadora, compartilhando informações sobre tendências para o futuro do setor."
            },
            "zh-CN": {
              singular: "思想领袖演讲，分享对未来行业趋势的见解。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A case study presentation, illustrating real-world examples of success using our platform.",
          dictionary: {
            es: {
              singular: "Una presentación de un estudio de caso que ilustre ejemplos reales de éxito con el uso de nuestra plataforma."
            },
            "de-DE": {
              singular: "Eine Fallstudienpräsentation, die reale Erfolgsbeispiele mit unserer Plattform veranschaulicht."
            },
            "fr-FR": {
              singular: "Une présentation d'étude de cas qui montre des exemples de réussite concrets grâce à notre plateforme."
            },
            "ja-JP": {
              singular: "当社のプラットフォームを使用して実際に成功した事例を紹介するケーススタディプレゼンテーション。"
            },
            "ko-KR": {
              singular: "회사 플랫폼을 사용한 실제 성공 사례를 보여주는 사례 연구 프리젠테이션입니다."
            },
            "pt-BR": {
              singular: "Apresentação de um estudo de caso, ilustrando exemplos reais de sucesso com o uso da plataforma."
            },
            "zh-CN": {
              singular: "一个案例研究演示，介绍使用我们的平台取得成功的真实案例。"
            }
          }
        })]
      },
      testimonial: {
        label: (0, _v318.translate)({
          singular: "Testimonial",
          dictionary: {
            es: {
              singular: "Testimonio"
            },
            "de-DE": {
              singular: "Referenz"
            },
            "fr-FR": {
              singular: "Témoignage"
            },
            "ja-JP": {
              singular: "ユーザーの声"
            },
            "ko-KR": {
              singular: "사용 소감"
            },
            "pt-BR": {
              singular: "Depoimento"
            },
            "zh-CN": {
              singular: "感言"
            }
          }
        }),
        options: [(0, _v318.translate)({
          singular: "A video featuring a long-time customer, discussing their journey and loyalty to our brand.",
          dictionary: {
            es: {
              singular: "Un video que presente a un cliente de larga data que hable sobre su experiencia y su lealtad a nuestra marca."
            },
            "de-DE": {
              singular: "Ein Video mit einem langjährigen Kunden, der über seine Erfahrungen und seine Treue zu unserer Marke spricht."
            },
            "fr-FR": {
              singular: "Une vidéo mettant en scène un client de longue date qui évoque son parcours et sa fidélité vis-à-vis de notre marque."
            },
            "ja-JP": {
              singular: "長年のユーザーを特集し、彼らの歩みや当社ブランドへのロイヤリティについて語る動画。"
            },
            "ko-KR": {
              singular: "오랜 세월 동안 브랜드와 함께 해온 충성 고객의 사용 여정을 담은 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo com um cliente de longa data, abordando sua experiência e fidelidade à marca."
            },
            "zh-CN": {
              singular: "该视频中有一位长期客户讲述了其心路历程以及对我们品牌的坚持。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A video capturing spontaneous customer testimonials at a recent event or product launch.",
          dictionary: {
            es: {
              singular: "Un video que capture testimonios espontáneos de clientes en un evento reciente o en el lanzamiento de un producto."
            },
            "de-DE": {
              singular: "Ein Video, das spontane Kundenstimmen von einer Veranstaltung oder einer Produkteinführung einfängt."
            },
            "fr-FR": {
              singular: "Une vidéo qui montre des témoignages spontanés de clients lors d'un événement récent ou du lancement d'un produit."
            },
            "ja-JP": {
              singular: "最近のイベントや製品発表会での顧客の自発的な声を収録した動画。"
            },
            "ko-KR": {
              singular: "최근 이벤트나 제품 출시에서 고객의 자발적인 후기를 담은 영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo registrando depoimentos espontâneos de clientes em um evento recente ou lançamento de produto."
            },
            "zh-CN": {
              singular: "一个视频，记录最近的活动或产品发布会上客户的自发感言。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A script for a video featuring a customer from a niche industry, emphasizing product versatility.",
          dictionary: {
            es: {
              singular: "Un guion para un video que presente a un cliente de un nicho de la industria y enfatice la versatilidad del producto."
            },
            "de-DE": {
              singular: "Ein Drehbuch für ein Video mit einem Kunden aus einer Nischenbranche, der die Produktvielfalt betont."
            },
            "fr-FR": {
              singular: "Un script pour une vidéo mettant en scène un client d'un secteur de niche et soulignant la polyvalence des produits."
            },
            "ja-JP": {
              singular: "ニッチな業界のユーザーを特集し、製品の多様性を強調する動画のスクリプト。"
            },
            "ko-KR": {
              singular: "특정 산업 분야의 고객이 제품을 다양하게 활용하는 모습이 담긴 동영상 대본입니다."
            },
            "pt-BR": {
              singular: "Roteiro para um vídeo com um cliente de um nicho de mercado, enfatizando a versatilidade do produto."
            },
            "zh-CN": {
              singular: "一个以特定细分行业的客户为主角的视频脚本，强调产品的多功能性。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A customer testimonial series, showcasing diverse perspectives and use cases.",
          dictionary: {
            es: {
              singular: "Una serie de testimonios de clientes que muestren diversas perspectivas y casos de uso."
            },
            "de-DE": {
              singular: "Eine Reihe von Kundenberichten, in denen verschiedene Perspektiven und Anwendungsfälle vorgestellt werden."
            },
            "fr-FR": {
              singular: "Une série de témoignages de clients qui présente une variété de perspectives et de cas d'utilisation."
            },
            "ja-JP": {
              singular: "さまざまな視点と使用例を紹介するユーザーの声シリーズ。"
            },
            "ko-KR": {
              singular: "다양한 관점과 사용 사례를 소개하는 고객 추천 시리즈입니다."
            },
            "pt-BR": {
              singular: "Série de depoimentos de clientes, apresentando diversas perspectivas e casos de uso."
            },
            "zh-CN": {
              singular: "一个客户感言系列，展示不同的视角和用例。"
            }
          }
        })]
      },
      training: {
        label: (0, _v318.translate)({
          singular: "Training",
          dictionary: {
            es: {
              singular: "Capacitación"
            },
            "fr-FR": {
              singular: "Formation"
            },
            "ja-JP": {
              singular: "トレーニング"
            },
            "ko-KR": {
              singular: "트레이닝"
            },
            "pt-BR": {
              singular: "Treinamento"
            },
            "zh-CN": {
              singular: "培训"
            }
          }
        }),
        options: [(0, _v318.translate)({
          singular: "A role-specific training video, tailored for customer support teams using our platform.",
          dictionary: {
            es: {
              singular: "Un video de capacitación para funciones específicas diseñado para los equipos de asistencia que utilizan nuestra plataforma."
            },
            "de-DE": {
              singular: "Ein rollenspezifisches Schulungsvideo, das auf Kundensupport-Teams zugeschnitten ist, die unsere Plattform nutzen."
            },
            "fr-FR": {
              singular: "Une vidéo de formation spécifique à un rôle, adaptée aux équipes d'assistance à la clientèle qui utilisent notre plateforme."
            },
            "ja-JP": {
              singular: "当社のプラットフォームを使用するカスタマーサポートチーム向けの、役割別のトレーニング動画。"
            },
            "ko-KR": {
              singular: "플랫폼을 사용하는 고객 지원팀을 위한 직무별 교육 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de treinamento específico para a função, feito sob medida para as equipes de suporte ao cliente que usam a plataforma."
            },
            "zh-CN": {
              singular: "针对特定角色的培训视频，专为使用我们平台的客户支持团队量身定制。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A policy update training video, ensuring all employees are informed and compliant.",
          dictionary: {
            es: {
              singular: "Un video de capacitación sobre actualización de políticas que garantice que todos los empleados estén informados y cumplan la normativa."
            },
            "de-DE": {
              singular: "Ein Schulungsvideo zur Aktualisierung der Richtlinien, das sicherstellt, dass alle Mitarbeiter informiert sind und die Richtlinien einhalten."
            },
            "fr-FR": {
              singular: "Une vidéo de formation sur la modification d'une politique, afin que tous les employés soient informés et respectent les règles."
            },
            "ja-JP": {
              singular: "全従業員への周知とコンプライアンス遵守を徹底するための、ポリシー更新に関するトレーニング動画。"
            },
            "ko-KR": {
              singular: "모든 직원의 숙지와 준수를 장려하는 정책 업데이트 교육 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de treinamento sobre atualizações de política, garantindo que todos os funcionários estejam cientes e em conformidade."
            },
            "zh-CN": {
              singular: "一个政策更新培训视频，确保所有员工了解并遵守政策。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A script for a new feature training video, guiding users through its implementation and benefits.",
          dictionary: {
            es: {
              singular: "Un guion para un video de capacitación sobre una nueva función que guíe a los usuarios a través de su implementación y sus beneficios."
            },
            "de-DE": {
              singular: "Ein Skript für ein Schulungsvideo zu einer neuen Funktion, das die Benutzer durch die Implementierung und die Vorteile führt."
            },
            "fr-FR": {
              singular: "Un script pour une vidéo de formation à une nouvelle fonctionnalité qui aide les utilisateurs à la mettre en œuvre et à profiter de ses avantages."
            },
            "ja-JP": {
              singular: "新機能の実装と利点をユーザーに案内する、新機能トレーニング動画のスクリプト。"
            },
            "ko-KR": {
              singular: "새 기능의 사용 방법과 장점을 사용자에게 안내하는 신 기능 교육 동영상입니다."
            },
            "pt-BR": {
              singular: "Roteiro para um novo vídeo de treinamento de recursos, orientando os usuários sobre sua implementação e benefícios."
            },
            "zh-CN": {
              singular: "一个新功能培训视频脚本，指导用户了解新功能的实现及其优势。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A compliance training video, covering industry regulations and best practices.",
          dictionary: {
            es: {
              singular: "Un video de capacitación sobre cumplimiento que cubra las regulaciones y las prácticas recomendadas de la industria."
            },
            "de-DE": {
              singular: "Ein Schulungsvideo über die Einhaltung von Vorschriften und Best Practices in der Branche."
            },
            "fr-FR": {
              singular: "Une vidéo de formation à la conformité qui aborde les réglementations et les bonnes pratiques du secteur."
            },
            "ja-JP": {
              singular: "業界の規制とベストプラクティスを網羅したコンプライアンストレーニング動画。"
            },
            "ko-KR": {
              singular: "업계 규정 및 모범 사례를 다루는 규정 준수 교육 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de treinamento de conformidade, abordando as regulamentações e as práticas recomendadas do setor."
            },
            "zh-CN": {
              singular: "一个合规培训视频，涵盖行业法规和最佳实践。"
            }
          }
        })]
      },
      internalComms: {
        label: (0, _v318.translate)({
          singular: "Internal Comms",
          dictionary: {
            es: {
              singular: "Comunicaciones internas"
            },
            "de-DE": {
              singular: "Interne Kommunikation"
            },
            "fr-FR": {
              singular: "Communications internes"
            },
            "ja-JP": {
              singular: "内部コミュニケーション"
            },
            "ko-KR": {
              singular: "내부 커뮤니케이션"
            },
            "pt-BR": {
              singular: "Comunicações internas"
            },
            "zh-CN": {
              singular: "内部通信"
            }
          }
        }),
        options: [(0, _v318.translate)({
          singular: "A quarterly review video, summarizing financial achievements and future goals.",
          dictionary: {
            es: {
              singular: "Un video de revisión trimestral que resuma los logros financieros y las metas futuras."
            },
            "de-DE": {
              singular: "Ein vierteljährliches Rückblicksvideo, das die finanziellen Erfolge und zukünftigen Ziele zusammenfasst."
            },
            "fr-FR": {
              singular: "Une vidéo d'évaluation trimestrielle qui résume les réalisations financières et les objectifs futurs."
            },
            "ja-JP": {
              singular: "財務上の成果と今後の目標を要約する四半期ごとのレビュー動画。"
            },
            "ko-KR": {
              singular: "재무 성과와 미래 목표를 정리한 분기별 검토 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de revisão trimestral, resumindo os resultados financeiros e as metas para o futuro."
            },
            "zh-CN": {
              singular: "一个季度回顾视频，总结财务成果和未来目标。"
            }
          }
        }), (0, _v318.translate)({
          singular: "An employee recognition video, acknowledging outstanding contributions within the company.",
          dictionary: {
            es: {
              singular: "Un video de reconocimiento a los empleados en el que se reconozcan las contribuciones sobresalientes dentro de la empresa."
            },
            "de-DE": {
              singular: "Ein Mitarbeiterempfehlungsvideo, in dem herausragende Leistungen innerhalb des Unternehmens gewürdigt werden."
            },
            "fr-FR": {
              singular: "Une vidéo qui souligne les contributions exceptionnelles des employés au sein de l'entreprise."
            },
            "ja-JP": {
              singular: "社内の優れた貢献を認める従業員を表彰する動画。"
            },
            "ko-KR": {
              singular: "회사에 공로가 큰 직원을 인정하는 직원 표창 동영상입니다."
            },
            "pt-BR": {
              singular: "Roteiro para um vídeo de reconhecimento de funcionários, identificando contribuições excepcionais dentro da empresa."
            },
            "zh-CN": {
              singular: "员工表彰视频，认可员工在公司做出的突出贡献。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A crisis communication video, addressing concerns and outlining mitigation strategies.",
          dictionary: {
            es: {
              singular: "Un video de comunicación de crisis que aborde las inquietudes y describa las estrategias de mitigación."
            },
            "de-DE": {
              singular: "Ein Video zur Krisenkommunikation, das Bedenken anspricht und Strategien zur Schadensbegrenzung aufzeigt."
            },
            "fr-FR": {
              singular: "Une vidéo de communication de crise qui aborde les problèmes et propose des stratégies pour les résoudre."
            },
            "ja-JP": {
              singular: "懸念事項を取り上げ、緩和策の概要を説明する、クライシスコミュニケーション動画。"
            },
            "ko-KR": {
              singular: "우려 사항에 대응하고 완화 전략을 제시하는 위기 대응 커뮤니케이션 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de comunicação sobre crises, abordando preocupações e delineando estratégias de mitigação."
            },
            "zh-CN": {
              singular: "一个危机沟通视频，解决大家的担忧并概述缓解策略。"
            }
          }
        }), (0, _v318.translate)({
          singular: "An innovation update, discussing the latest technological advancements within our platform.",
          dictionary: {
            es: {
              singular: "Una actualización de las innovaciones que analice los últimos avances tecnológicos dentro de nuestra plataforma."
            },
            "de-DE": {
              singular: "Ein Innovations-Update, in dem die neuesten technologischen Fortschritte auf unserer Plattform vorgestellt werden."
            },
            "fr-FR": {
              singular: "Une nouveauté concernant l'innovation qui se concentre sur les dernières avancées technologiques de notre plateforme."
            },
            "ja-JP": {
              singular: "当社のプラットフォーム内の最新の技術的進歩について議論する、イノベーション最新情報。"
            },
            "ko-KR": {
              singular: "플랫폼의 최신 기술 혁신 내용을 소개하는 기술 혁신 업데이트입니다."
            },
            "pt-BR": {
              singular: "Roteiro para uma atualização de inovação, discutindo os últimos avanços tecnológicos na nossa plataforma."
            },
            "zh-CN": {
              singular: "一条关于创新的最新动态，讨论我们平台内最新的技术进步。"
            }
          }
        })]
      },
      bugReport: {
        label: (0, _v318.translate)({
          singular: "Bug Report",
          dictionary: {
            es: {
              singular: "Informe de errores"
            },
            "de-DE": {
              singular: "Fehlerbericht"
            },
            "fr-FR": {
              singular: "Rapport de bogue"
            },
            "ja-JP": {
              singular: "バグレポート"
            },
            "ko-KR": {
              singular: "버그 보고"
            },
            "pt-BR": {
              singular: "Relatório de falha"
            },
            "zh-CN": {
              singular: "错误报告"
            }
          }
        }),
        options: [(0, _v318.translate)({
          singular: "A critical bug report video, emphasizing the urgency and potential impact on users.",
          dictionary: {
            es: {
              singular: "Un video de informe de errores críticos que enfatice la urgencia y el impacto potencial en los usuarios."
            },
            "de-DE": {
              singular: "Ein Video zur Meldung kritischer Fehler, das die Dringlichkeit und die möglichen Auswirkungen auf die Benutzer hervorhebt."
            },
            "fr-FR": {
              singular: "Une vidéo de signalement de bogue critique, qui met l'accent sur le caractère urgent du problème et l'impact potentiel sur les utilisateurs."
            },
            "ja-JP": {
              singular: "緊急性とユーザーへの潜在的な影響を力説する、重大なバグレポート動画。"
            },
            "ko-KR": {
              singular: "사용자에게 미칠 수 있는 긴급성과 잠재적 영향을 강조하는 중요 버그 보고 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de relatório de um bug crítico, enfatizando a urgência e o impacto potencial sobre os usuários."
            },
            "zh-CN": {
              singular: "关键错误报告视频，强调其紧迫性和对用户的潜在影响。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A comprehensive bug report, including detailed steps to reproduce the issue.",
          dictionary: {
            es: {
              singular: "Un informe de errores completo que incluya los pasos detallados para reproducir el problema."
            },
            "de-DE": {
              singular: "Ein umfassender Fehlerbericht, einschließlich detaillierter Schritte, um das Problem zu reproduzieren."
            },
            "fr-FR": {
              singular: "Un rapport de bogue complet qui inclut des étapes détaillées pour reproduire le problème."
            },
            "ja-JP": {
              singular: "問題を再現するための詳細な手順を含む、包括的なバグレポート。"
            },
            "ko-KR": {
              singular: "자세한 문제 재현 단계를 포함한 포괄적인 버그 보고입니다."
            },
            "pt-BR": {
              singular: "Roteiro para um relatório de falha abrangente, incluindo etapas detalhadas para reproduzir o problema."
            },
            "zh-CN": {
              singular: "全面的错误报告，包括重现问题的详细步骤。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A bug fix confirmation video, expressing gratitude to users for their patience.",
          dictionary: {
            es: {
              singular: "Un video de confirmación de la corrección de un error en el que se agradezca a los usuarios su paciencia."
            },
            "de-DE": {
              singular: "Ein Video zur Bestätigung der Fehlerbehebung, in dem wir uns bei den Benutzern für ihre Geduld bedanken."
            },
            "fr-FR": {
              singular: "Une vidéo pour confirmer la correction d'un bogue et remercier les utilisateurs pour leur patience."
            },
            "ja-JP": {
              singular: "ユーザーの忍耐に感謝の意を表するバグ修正確認動画。"
            },
            "ko-KR": {
              singular: "사용자의 인내에 감사를 표하는 버그 수정 확인 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de confirmação de correção de bug, expressando gratidão aos usuários pela paciência."
            },
            "zh-CN": {
              singular: "一个错误修复确认视频，对用户的耐心表示感谢。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A preventive bug report, addressing potential issues before they impact users.",
          dictionary: {
            es: {
              singular: "Un informe de errores preventivo que aborde posibles problemas antes de que afecten a los usuarios."
            },
            "de-DE": {
              singular: "Ein präventiver Fehlerbericht, der potenzielle Probleme behebt, bevor sie sich auf die Benutzer auswirken."
            },
            "fr-FR": {
              singular: "Un rapport de bogue préventif qui aborde les problèmes potentiels avant qu'ils n'affectent les utilisateurs."
            },
            "ja-JP": {
              singular: "ユーザーに影響を及ぼす前に潜在的な問題に対処する、予防的バグレポート。"
            },
            "ko-KR": {
              singular: "사용자에게 영향을 미치기 전 잠재적 문제를 미리 해결하는 예방적 버그 보고입니다."
            },
            "pt-BR": {
              singular: "Relatório de bug preventivo, abordando possíveis problemas antes que eles afetem os usuários."
            },
            "zh-CN": {
              singular: "一个预防性错误报告，旨在及时纠正错误，防止潜在问题影响用户。"
            }
          }
        })]
      },
      howTo: {
        label: (0, _v318.translate)({
          singular: "How-to",
          dictionary: {
            es: {
              singular: "Cómo hacerlo"
            },
            "de-DE": {
              singular: "Kurzanleitung"
            },
            "fr-FR": {
              singular: "Guides"
            },
            "ja-JP": {
              singular: "ハウツー"
            },
            "ko-KR": {
              singular: "안내 영상"
            },
            "pt-BR": {
              singular: "Guias práticos"
            },
            "zh-CN": {
              singular: "操作方法"
            }
          }
        }),
        options: [(0, _v318.translate)({
          singular: "A troubleshooting how-to video, addressing common user issues and resolutions.",
          dictionary: {
            es: {
              singular: "Un video instructivo de solución de problemas que aborde problemas comunes de los usuarios y sus soluciones."
            },
            "de-DE": {
              singular: "Ein Anleitungsvideo zur Fehlerbehebung, in dem häufige Benutzerprobleme und -lösungen behandelt werden."
            },
            "fr-FR": {
              singular: "Une vidéo de dépannage qui aborde les problèmes courants des utilisateurs et la façon de les résoudre."
            },
            "ja-JP": {
              singular: "ユーザーの一般的な問題と解決策を説明するトラブルシューティングのハウツー動画。"
            },
            "ko-KR": {
              singular: "사용자가 자주 맞닥뜨리는 문제와 해결책을 다룬 문제 해결 방법에 관한 동영상입니다."
            },
            "pt-BR": {
              singular: "Roteiro para um vídeo de instruções sobre solução de problemas, abordando problemas e soluções comuns dos usuários."
            },
            "zh-CN": {
              singular: "一个故障排除操作视频，解决常见的用户问题并提供解决方案。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A quick tips how-to video, providing time-saving tricks for experienced users.",
          dictionary: {
            es: {
              singular: "Un video instructivo con consejos rápidos que proporcione trucos para ahorrar tiempo a los usuarios experimentados."
            },
            "de-DE": {
              singular: "Ein Anleitungsvideo mit Kurztipps und zeitsparenden Tricks für erfahrene Benutzer."
            },
            "fr-FR": {
              singular: "Une vidéo de conseils rapides qui propose des astuces aux utilisateurs expérimentés pour leur faire gagner du temps."
            },
            "ja-JP": {
              singular: "経験豊富なユーザーに時間節約のヒントを提供する、簡単なヒントのハウツー動画。"
            },
            "ko-KR": {
              singular: "숙련된 사용자들의 시간 절약을 위한 실용적인 사용법 동영상입니다."
            },
            "pt-BR": {
              singular: "Roteiro para um vídeo de instruções rápidas com dicas, fornecendo truques que economizam tempo para usuários experientes."
            },
            "zh-CN": {
              singular: "一个操作技巧视频，为有经验的用户提供节省时间的技巧。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A beginner-friendly how-to video, covering the basics of our platform.",
          dictionary: {
            es: {
              singular: "Un video instructivo para principiantes que cubra los conceptos básicos de nuestra plataforma."
            },
            "de-DE": {
              singular: "Ein einsteigerfreundliches Anleitungsvideo, das die Grundlagen unserer Plattform erklärt."
            },
            "fr-FR": {
              singular: "Une vidéo pratique adaptée aux débutants qui présente les bases de notre plateforme."
            },
            "ja-JP": {
              singular: "当社プラットフォームの基本をカバーする初心者向けのハウツー動画。"
            },
            "ko-KR": {
              singular: "플랫폼의 기본 사항을 설명하는 초보자 친화적인 사용법 동영상입니다."
            },
            "pt-BR": {
              singular: "Roteiro para um vídeo de instruções para iniciantes, abordando os fundamentos da nossa plataforma."
            },
            "zh-CN": {
              singular: "初级入门视频，介绍我们平台的基础知识。"
            }
          }
        }), (0, _v318.translate)({
          singular: "An advanced how-to video, catering to users looking to maximize efficiency and productivity.",
          dictionary: {
            es: {
              singular: "Un video instructivo avanzado para los usuarios que busquen maximizar la eficiencia y la productividad."
            },
            "de-DE": {
              singular: "Ein fortgeschrittenes Anleitungsvideo, das sich an Benutzer richtet, die ihre Effizienz und Produktivität maximieren möchten."
            },
            "fr-FR": {
              singular: "Une vidéo didactique avancée destinée aux utilisateurs qui souhaitent optimiser leur efficacité et leur productivité."
            },
            "ja-JP": {
              singular: "効率と生産性を最大限に高めたいユーザー向けの高度なハウツー動画。"
            },
            "ko-KR": {
              singular: "효율성과 생산성 최대를 원하는 사용자를 위한 고급 사용법 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de instruções avançado, voltado para usuários que buscam maximizar a eficiência e produtividade."
            },
            "zh-CN": {
              singular: "进阶入门视频，适合希望最大限度提高效率和工作能力的用户。"
            }
          }
        })]
      },
      interview: {
        label: (0, _v318.translate)({
          singular: "Interview",
          dictionary: {
            es: {
              singular: "Entrevista"
            },
            "ja-JP": {
              singular: "インタビュー"
            },
            "ko-KR": {
              singular: "인터뷰"
            },
            "pt-BR": {
              singular: "Entrevista"
            },
            "zh-CN": {
              singular: "访谈"
            }
          }
        }),
        options: [(0, _v318.translate)({
          singular: "An industry expert interview, discussing current trends and future predictions.",
          dictionary: {
            es: {
              singular: "Una entrevista a un experto de la industria que analice las tendencias actuales y las predicciones futuras."
            },
            "de-DE": {
              singular: "Ein Interview mit einem Branchenexperten, in dem es um aktuelle Trends und Zukunftsprognosen geht."
            },
            "fr-FR": {
              singular: "L'interview d'un expert du secteur qui aborde les tendances actuelles et les prévisions."
            },
            "ja-JP": {
              singular: "現在のトレンドと将来の予測について話し合う、業界専門家インタビュー。"
            },
            "ko-KR": {
              singular: "현재 트렌드와 미래 예측에 대해 논의하는 업계 전문가 인터뷰입니다."
            },
            "pt-BR": {
              singular: "Entrevista com um especialista do setor, discutindo as tendências atuais e previsões para o futuro."
            },
            "zh-CN": {
              singular: "行业专家访谈，讨论当前趋势和未来预测。"
            }
          }
        }), (0, _v318.translate)({
          singular: "An employee spotlight interview, highlighting individual contributions and experiences.",
          dictionary: {
            es: {
              singular: "Una entrevista a un empleado destacado que resalte las contribuciones y experiencias individuales."
            },
            "de-DE": {
              singular: "Ein Interview mit Mitarbeitern im Rampenlicht, in dem individuelle Beiträge und Erfahrungen hervorgehoben werden."
            },
            "fr-FR": {
              singular: "Un entretien avec un employé qui met en lumière les contributions et les expériences individuelles."
            },
            "ja-JP": {
              singular: "個人の貢献や経験に焦点を当てた、社員のスポットライトインタビュー。"
            },
            "ko-KR": {
              singular: "개별 직원의 공헌과 경험을 부각하는 직원 스포트라이트 인터뷰입니다."
            },
            "pt-BR": {
              singular: "Entrevista de funcionário em destaque, apontando suas contribuições e experiências individuais."
            },
            "zh-CN": {
              singular: "一场员工焦点访谈，重点介绍个人贡献和经验。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A panel discussion, featuring multiple experts sharing diverse perspectives.",
          dictionary: {
            es: {
              singular: "Un panel de discusión con varios expertos que compartan diversas perspectivas."
            },
            "de-DE": {
              singular: "Eine Podiumsdiskussion mit mehreren Experten, die unterschiedliche Perspektiven einbringen."
            },
            "fr-FR": {
              singular: "Une table ronde réunissant plusieurs experts qui partagent des points de vue différents."
            },
            "ja-JP": {
              singular: "複数の専門家が多様な視点を共有する、パネルディスカッション。"
            },
            "ko-KR": {
              singular: "다양한 관점을 제시하는 여러 전문가로 구성된 패널 토론회입니다."
            },
            "pt-BR": {
              singular: "Painel de discussão, com vários especialistas compartilhando perspectivas diversas."
            },
            "zh-CN": {
              singular: "小组讨论，由多位专家分享不同观点。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A user success story interview, exploring how our platform has transformed their business.",
          dictionary: {
            es: {
              singular: "Una entrevista sobre la historia de éxito de un usuario que indague sobre cómo nuestra plataforma ha transformado su negocio."
            },
            "de-DE": {
              singular: "Ein Interview über die Erfolgsgeschichte eines Nutzers, in dem es darum geht, wie unsere Plattform sein Geschäft verändert hat."
            },
            "fr-FR": {
              singular: "L'interview d'un utilisateur qui présente la façon dont notre plateforme a transformé son entreprise."
            },
            "ja-JP": {
              singular: "当社のプラットフォームがユーザーのビジネスをどのように変えたかを探る、サクセスストーリーインタビュー。"
            },
            "ko-KR": {
              singular: "회사 플랫폼이 사용자의 비즈니스를 어떻게 변화시켰는지 탐구하는 사용자 성공 사례 인터뷰입니다."
            },
            "pt-BR": {
              singular: "Entrevista sobre a história de sucesso de um usuário, explorando como a plataforma transformou seu negócio."
            },
            "zh-CN": {
              singular: "一场用户成功案例访谈，探讨我们的平台如何改变了他们的业务模式。"
            }
          }
        })]
      },
      announcement: {
        label: (0, _v318.translate)({
          singular: "Announcement",
          dictionary: {
            es: {
              singular: "Anuncio"
            },
            "de-DE": {
              singular: "Ankündigung"
            },
            "fr-FR": {
              singular: "Annonce"
            },
            "ja-JP": {
              singular: "お知らせ"
            },
            "ko-KR": {
              singular: "발표"
            },
            "pt-BR": {
              singular: "Comunicado"
            },
            "zh-CN": {
              singular: "公告"
            }
          }
        }),
        options: [(0, _v318.translate)({
          singular: "A merger or acquisition announcement video, addressing the benefits and changes.",
          dictionary: {
            es: {
              singular: "Un video de anuncio de fusión o adquisición que aborde los beneficios y los cambios."
            },
            "de-DE": {
              singular: "Ein Video zur Ankündigung einer Fusion oder Übernahme, in dem die Vorteile und Veränderungen erläutert werden."
            },
            "fr-FR": {
              singular: "Une vidéo d'annonce de fusion ou d'acquisition qui aborde les avantages et les changements."
            },
            "ja-JP": {
              singular: "メリットや変更点を説明する、合併・買収の発表動画。"
            },
            "ko-KR": {
              singular: "합병 또는 인수에 따른 혜택과 변화를 설명하는 합병 또는 인수 발표 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de anúncio de uma fusão ou aquisição, abordando os benefícios e as mudanças."
            },
            "zh-CN": {
              singular: "并购公告视频，介绍好处和变化。"
            }
          }
        }), (0, _v318.translate)({
          singular: "An anniversary celebration video, reflecting on company achievements over the years.",
          dictionary: {
            es: {
              singular: "Un video de celebración de aniversario que refleje los logros de la empresa a lo largo de los años."
            },
            "de-DE": {
              singular: "Ein Jubiläumsvideo, in dem die Leistungen des Unternehmens über die Jahre hinweg reflektiert werden."
            },
            "fr-FR": {
              singular: "Une vidéo de célébration d'un anniversaire qui illustre les accomplissements de l'entreprise au fil des années."
            },
            "ja-JP": {
              singular: "長年にわたる会社の業績を振り返る記念日の祝賀の動画。"
            },
            "ko-KR": {
              singular: "지난 몇 년 동안의 회사 성과를 되돌아보는 기념일 축하 동영상입니다."
            },
            "pt-BR": {
              singular: "Vídeo de comemoração de aniversário, avaliando as conquistas da empresa ao longo dos anos."
            },
            "zh-CN": {
              singular: "一个周年庆典视频，回顾公司多年来取得的成就。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A script for a sustainability initiative announcement, showcasing our commitment to environmental responsibility.",
          dictionary: {
            es: {
              singular: "Un guion para el anuncio de una iniciativa de sostenibilidad que muestre nuestro compromiso con la responsabilidad ambiental."
            },
            "de-DE": {
              singular: "Ein Skript für eine Ankündigung einer Nachhaltigkeitsinitiative, die unser Engagement für die Umwelt verdeutlicht."
            },
            "fr-FR": {
              singular: "Un script pour une annonce d'initiative de développement durable qui met en avant notre engagement en matière de responsabilité environnementale."
            },
            "ja-JP": {
              singular: "環境責任への当社のコミットメントを紹介する、サステナビリティへの取り組みを発表するためのスクリプト。"
            },
            "ko-KR": {
              singular: "환경 보호 노력과 실천을 보여주는 지속 가능성 이니셔티브 발표 대본입니다."
            },
            "pt-BR": {
              singular: "Roteiro para o anúncio de uma iniciativa de sustentabilidade, mostrando nosso compromisso com a responsabilidade ambiental."
            },
            "zh-CN": {
              singular: "一个可持续发展倡议公告的脚本，展示我们的环境责任承诺。"
            }
          }
        }), (0, _v318.translate)({
          singular: "A community engagement announcement, promoting our involvement in local or global causes.",
          dictionary: {
            es: {
              singular: "Un anuncio de interacción con la comunidad que promueva nuestra participación en causas locales o globales."
            },
            "de-DE": {
              singular: "Eine Ankündigung des gesellschaftlichen Engagements, die unser Engagement für lokale oder globale Belange fördert."
            },
            "fr-FR": {
              singular: "Une annonce d'engagement communautaire qui met en avant notre contribution à des causes locales ou mondiales."
            },
            "ja-JP": {
              singular: "地域または世界的な活動への関与を促すコミュニティの活動への参加案内。"
            },
            "ko-KR": {
              singular: "지역사회나 전 세계적인 대의에 대한 참여를 홍보하는 커뮤니티 참여 발표입니다."
            },
            "pt-BR": {
              singular: "Anúncio de iniciativa comunitária, promovendo nosso envolvimento em causas locais ou globais."
            },
            "zh-CN": {
              singular: "一份社区参与公告，鼓励我们参与本地或全球事业。"
            }
          }
        })]
      }
    },
    _v328 = [{
      categoryLabel: _v326.shorter,
      categoryKey: "shorterCustomInput"
    }, {
      categoryLabel: _v326.longer,
      categoryKey: "longerCustomInput"
    }, {
      categoryLabel: _v326.showSamplePrompts,
      categoryKey: "showSamplePrompts"
    }],
    _v329 = [{
      categoryLabel: _v326.shorter,
      categoryKey: "shorter"
    }, {
      categoryLabel: _v326.longer,
      categoryKey: "longer"
    }, {
      categoryLabel: _v326.tryAgain,
      categoryKey: "tryAgain"
    }],
    _v330 = () => {
      let {
          currentSessionData: _v0,
          updateCurrentSessionData: _v1
        } = (0, _v77.useSession)(),
        {
          makePromptRequest: _v2,
          getPromptRequestBody: _v3
        } = _v323(),
        {
          trackUserInteractionEvent: _v4
        } = _v35(),
        _v5 = (0, _v33.useLogger)("FollowupPrompts"),
        {
          setIsFollowupPromptShown: _v6,
          promptRequestStatus: _v7,
          contentSource: _v8
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          setIsFollowupPromptShown: _v0.setIsFollowupPromptShown,
          promptRequestStatus: _v0.promptRequestStatus,
          contentSource: _v0.persistentData.contentSource,
          modifiers: _v0.persistentData.scriptGeneratorModifiers,
          updatePersistentData: _v0.updatePersistentData
        }))),
        _v9 = _v0.teleprompterTextContent,
        _v10 = 0 === _v9.length;
      (0, _v19.useEffect)(() => {
        _v10 && _v6(!1);
      }, [_v10, _v6]);
      let _v11 = _v8 && ["generated", "manipulated"].includes(_v8);
      return (0, _v18.jsx)(_v81.Flex, {
        flexDir: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        height: (0, _v82.rem)(40),
        overflow: "hidden",
        width: "85%",
        gap: (0, _v82.rem)(10),
        children: (_v11 ? _v329 : _v328).map(({
          categoryLabel: _v0,
          categoryKey: _v1
        }) => (0, _v18.jsx)(_v325, {
          categoryKey: _v1,
          categoryLabel: _v0,
          onClick: async () => {
            if ("started" === _v7 || _v10) return;
            _v4({
              name: "script_prompt_example",
              eventType: "select",
              value: `foollow_up_prompt_${_v1.replace(/([A-Z])/g, (_v0, _v1) => "_" + _v1.toLowerCase()).replace(/^_/, "")}`,
              location: "teleprompter"
            }), _v5.debug("selected script follow-up prompt", {
              followUpCategoryKey: _v1
            });
            let _v0 = _v308.SHOULD_ATTACH_CONVERSETION_HISTORY ? _v0 : `${_v0} following text: "${_v9}"`,
              _v1 = _v308.SHOULD_ATTACH_CONVERSETION_HISTORY ? void 0 : "unset";
            switch (_v1) {
              case "longerCustomInput":
              case "shorterCustomInput":
                {
                  _v1({
                    scriptGeneratorPrompt: _v0
                  }), _v6(!0);
                  let _v0 = _v0.conversationHistory.concat({
                    role: "user",
                    content: _v0
                  });
                  return _v2(_v3(_v0, _v0, _v1));
                }
              case "longer":
              case "shorter":
                return _v1({
                  scriptGeneratorPrompt: _v0
                }), _v6(!0), _v2(_v3(_v0, _v0.conversationHistory, _v1));
              case "showSamplePrompts":
              case "tryAgain":
                return _v6(!1);
            }
          },
          isDisabled: "started" === _v7
        }, _v1))
      });
    },
    _v331 = ["demo", "marketing", "bugReport", "internalComms", "training", "presentation", "testimonial", "howTo", "interview", "announcement"],
    _v332 = () => {
      let _v0 = (0, _v33.useLogger)("SamplePrompts"),
        {
          updateCurrentSessionData: _v1
        } = (0, _v77.useSession)(),
        {
          trackUserInteractionEvent: _v2
        } = _v35(),
        _v3 = (0, _v40.useTeleprompterStore)(_v0 => _v0.promptRequestStatus),
        _v4 = function () {
          let _v0 = (0, _v33.useLogger)("useShuffleSamplePrompts"),
            {
              currentSessionData: _v1,
              currentSessionId: _v2,
              updateCurrentSessionData: _v3
            } = (0, _v77.useSession)();
          return (0, _v19.useEffect)(() => {
            if (_v2 && void 0 === _v1.randomizedSamplePrompts) {
              let _v0,
                _v1 = (_v0 = {}, function (_v0) {
                  let _v1,
                    _v2,
                    _v3,
                    _v4 = [..._v0];
                  for (_v3 = _v4.length - 1; _v3 > 0; _v3--) _v2 = Math.floor(Math.random() * (_v3 + 1)), _v1 = _v4[_v3], _v4[_v3] = _v4[_v2], _v4[_v2] = _v1;
                  return _v4;
                }(_v331).slice().forEach(_v0 => {
                  let _v1 = Math.floor(4 * Math.random()) + 0;
                  _v0[_v0] = {
                    promptIndex: _v1
                  };
                }), _v0);
              _v0.debug("defined randomized sample prompts: ", {
                currentSessionId: _v2,
                shuffledPrompts: _v1
              }), _v3({
                randomizedSamplePrompts: _v1
              });
            }
          }, [_v2, _v1.randomizedSamplePrompts, _v3, _v0]), _v1.randomizedSamplePrompts;
        }();
      (0, _v19.useEffect)(() => {
        _v2({
          name: "open_prompt_example",
          eventType: "view",
          location: "teleprompter"
        });
      }, [_v2]);
      let _v5 = (0, _v19.useCallback)((_v0, _v1) => {
          _v1({
            scriptGeneratorPrompt: _v1
          }), _v2({
            name: "script_prompt_example",
            eventType: "select",
            value: _v0,
            location: "teleprompter"
          });
        }, [_v2, _v1]),
        _v6 = (0, _v19.useMemo)(() => {
          if (!_v4) return [];
          let _v0 = [];
          return Object.entries(_v4).forEach(([_v0, {
            promptIndex: _v1
          }]) => {
            let _v2 = _v327[_v0];
            void 0 === _v2.options[_v1] ? _v0.error(TypeError(`translationsError: sample prompt of category ${_v0} is "undefined"`), {
              category: _v34.UNEXPECTED,
              method: "useMemo",
              component: "SamplePrompts",
              data: {
                translationForCategoryOptions: _v2.options,
                promptIndex: _v1
              }
            }) : _v0.push({
              categoryKey: _v0,
              categoryLabel: _v2.label,
              samplePrompt: _v2.options[_v1]
            });
          }), _v0;
        }, [_v0, _v4]);
      return _v6.length ? (0, _v18.jsx)(_v81.Flex, {
        "data-testid": _v269.SAMPLE_PROMPTS_ROW,
        flexDir: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        height: (0, _v82.rem)(40),
        overflow: "hidden",
        width: "85%",
        gap: (0, _v82.rem)(10),
        children: _v6.map(({
          categoryLabel: _v0,
          categoryKey: _v1,
          samplePrompt: _v2
        }) => (0, _v18.jsx)(_v325, {
          categoryKey: _v1,
          categoryLabel: _v0,
          onClick: () => _v5(_v0, _v2),
          isDisabled: "started" === _v3
        }, _v1))
      }) : null;
    },
    _v333 = () => {
      let {
        isFollowupPromptShown: _v0,
        promptRequestStarted: _v1
      } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
        promptRequestStarted: "started" === _v0.promptRequestStatus,
        isFollowupPromptShown: _v0.isFollowupPromptShown
      })));
      return (0, _v18.jsxs)(_v81.Flex, {
        justifyContent: "space-between",
        w: "100%",
        children: [_v0 ? (0, _v18.jsx)(_v330, {}) : (0, _v18.jsx)(_v332, {}), (0, _v18.jsx)(_v81.Flex, {
          children: (0, _v18.jsx)(_v319, {
            isDisabled: _v1
          })
        })]
      });
    };
  var _v334 = _v0.i(0);
  let _v335 = _v0 => {
      let {
          buttonRef: _v1
        } = _v0,
        {
          makePromptRequest: _v2,
          getPromptRequestBody: _v3
        } = _v323(),
        {
          trackUserInteractionEvent: _v4
        } = _v35(),
        {
          currentSessionData: {
            scriptGeneratorPrompt: _v5,
            conversationHistory: _v6
          }
        } = (0, _v77.useSession)(),
        {
          client: _v7,
          getClientAnalyticContext: _v8,
          onScriptGenerationStarted: _v9
        } = (0, _v19.useContext)(_v30),
        {
          sendGenerateTeleprompterScriptBpEvent: _v10
        } = (0, _v270.useTeleprompterAnalytics)({
          element: "icon",
          feature: "teleprompter",
          location: "modal_bottom_banner"
        }, _v7, _v8),
        {
          setIsFollowupPromptShown: _v11,
          setIsPopOverVisible: _v12,
          promptRequestStatus: _v13
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          setIsFollowupPromptShown: _v0.setIsFollowupPromptShown,
          setIsPopOverVisible: _v0.setIsPopOverVisible,
          promptRequestStatus: _v0.promptRequestStatus
        }))),
        _v14 = async () => {
          if ("started" === _v13) return;
          _v12(!1), _v10(), _v4({
            name: "generate_script",
            eventType: "click",
            location: "teleprompter"
          }), _v9();
          let _v0 = _v3(_v5, _v6);
          await _v2(_v0), _v11(!0);
        },
        _v15 = 0 === _v5.length || _v5.length > 512,
        _v16 = (0, _v306.useColorModeValue)("gray.800", "gray.50"),
        _v17 = (0, _v306.useColorModeValue)("var(--vimeo-colors-gray-900)", "var(--vimeo-colors-gray-0)");
      return (0, _v18.jsx)(_v274.IconButton, {
        "aria-label": "start-generation-button",
        size: "sm",
        variant: "primary",
        ref: _v1,
        isDisabled: _v15,
        isLoading: "started" === _v13,
        onClick: _v14,
        icon: (0, _v18.jsx)(_v334.ArrowUp, {}),
        backgroundColor: _v16,
        "data-testid": _v268.ACTIONS.START_GENERATING,
        _active: {
          backgroundColor: _v17
        },
        _hover: {
          backgroundColor: _v17
        },
        sx: {
          ".chakra-button__spinner": {
            color: "surface"
          },
          svg: {
            width: (0, _v82.rem)(20),
            height: (0, _v82.rem)(20),
            path: {
              fill: "surface"
            }
          }
        }
      });
    },
    _v336 = _v0 => {
      let {
          shouldBeShown: _v1
        } = _v0,
        _v2 = (0, _v19.useRef)(null),
        {
          promptRequestStarted: _v3,
          setIsPopoverVisible: _v4
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          promptRequestStarted: "started" === _v0.promptRequestStatus,
          setIsPopoverVisible: _v0.setIsPopOverVisible
        })));
      return (0, _v18.jsx)(_v299.Fade, {
        enterDuration: "2xl",
        in: _v1,
        children: (0, _v18.jsxs)(_v81.Flex, {
          "data-testid": _v266,
          zIndex: 10,
          flexDir: "column",
          backgroundColor: "input-fill",
          borderRadius: "input-sm",
          margin: 12,
          padding: 12,
          children: [(0, _v18.jsx)(_v333, {}), (0, _v18.jsx)(_v81.Flex, {
            flexDir: "column",
            alignItems: "stretch",
            onMouseDown: _v0 => _v0.stopPropagation(),
            children: (0, _v18.jsx)(_v315, {
              isDisabled: _v3,
              onClick: () => {
                _v4(!1);
              },
              onGenerate: () => {
                _v2.current?.click();
              },
              children: (0, _v18.jsxs)(_v81.Flex, {
                flexDir: "row",
                alignItems: "center",
                gap: (0, _v82.rem)(10),
                children: [(0, _v18.jsx)(_v312, {}), (0, _v18.jsx)(_v335, {
                  buttonRef: _v2
                })]
              })
            })
          })]
        })
      });
    };
  var _v337 = _v0.i(0),
    _v338 = _v0.i(0),
    _v339 = _v0.i(0),
    _v340 = _v0.i(0),
    _v341 = _v0.i(0),
    _v342 = _v0.i(0),
    _v343 = _v0.i(0),
    _v344 = _v0.i(0),
    _v345 = _v0.i(0),
    _v346 = _v0.i(0),
    _v347 = _v0.i(0),
    _v348 = _v0.i(0);
  let _v349 = ({
      header: _v0,
      placeholder: _v1,
      onSubmit: _v2,
      onClose: _v3,
      button: _v4,
      onInputChange: _v5
    }) => (0, _v18.jsxs)(_v341.Modal, {
      isOpen: !0,
      onClose: _v3,
      children: [(0, _v18.jsx)(_v347.ModalOverlay, {}), (0, _v18.jsxs)(_v344.ModalContent, {
        maxWidth: (0, _v82.rem)(600),
        children: [(0, _v18.jsx)(_v343.ModalCloseButton, {}), (0, _v18.jsx)(_v346.ModalHeader, {
          children: (0, _v18.jsx)(_v340.Header, {
            size: "md",
            children: _v0
          })
        }), (0, _v18.jsx)(_v342.ModalBody, {
          children: (0, _v18.jsx)(_v348.Textarea, {
            onChange: _v5,
            placeholder: _v1,
            minHeight: (0, _v82.rem)(150),
            width: "100%",
            resize: "none"
          })
        }), (0, _v18.jsx)(_v345.ModalFooter, {
          children: (0, _v18.jsx)(_v273.Button, {
            onClick: _v2,
            children: _v4
          })
        })]
      })]
    }),
    _v350 = () => {
      let {
          trackUserInteractionEvent: _v0
        } = _v35(),
        {
          updateCurrentSessionData: _v1
        } = (0, _v77.useSession)(),
        [_v2, _v3] = (0, _v19.useState)(""),
        {
          updatePersistentData: _v4,
          surveyThumbsSelected: _v5
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          updatePersistentData: _v0.updatePersistentData,
          surveyThumbsSelected: _v0.persistentData.surveyThumbsSelected
        })));
      return (0, _v18.jsxs)(_v18.Fragment, {
        children: [!!_v5 && (0, _v18.jsx)(_v349, {
          onInputChange: _v0 => {
            _v3(_v0.target.value);
          },
          placeholder: _v31.translations.survey.placeholder,
          header: _v31.translations.survey.header,
          button: _v31.translations.survey.button,
          onSubmit: () => {
            _v0({
              name: "submit_script_feedback",
              eventType: "click",
              value: _v2,
              location: "survey_modal"
            }), _v0({
              name: "rate_script",
              eventType: "click",
              value: _v5,
              location: "survey_modal"
            }), _v1({
              scriptGeneratorIsSurveyShown: !1
            });
          },
          onClose: () => {
            _v0({
              name: "rate_script",
              eventType: "click",
              value: _v5,
              location: "survey_modal"
            }), _v1({
              scriptGeneratorIsSurveyShown: !1
            });
          }
        }), (0, _v18.jsx)(_v337.SlideFade, {
          enterDuration: "xl",
          in: !0,
          offsetX: 300,
          children: (0, _v18.jsxs)(_v81.Flex, {
            mr: 20,
            justifyContent: "center",
            alignItems: "center",
            children: [(0, _v18.jsx)(_v339.ThumbUp, {
              mr: "75",
              onClick: () => {
                _v4({
                  surveyThumbsSelected: "like"
                });
              }
            }), (0, _v18.jsx)(_v338.ThumbDown, {
              onClick: () => {
                _v4({
                  surveyThumbsSelected: "dislike"
                });
              }
            })]
          })
        })]
      });
    },
    _v351 = () => {
      let {
          currentSessionData: _v0
        } = (0, _v77.useSession)(),
        {
          trackUserInteractionEvent: _v1
        } = _v35(),
        {
          isReceivingCharacters: _v2,
          panelShouldBeShown: _v3,
          promptRequestStatus: _v4,
          promptRequestAbortController: _v5,
          resetPromptStatus: _v6,
          setIsGeneratePanelShown: _v7
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          isReceivingCharacters: null !== _v0.receivedPromptCharacters,
          panelShouldBeShown: _v0.isGeneratePanelShown,
          promptRequestAbortController: _v0.promptRequestAbortController,
          promptRequestStatus: _v0.promptRequestStatus,
          resetPromptStatus: _v0.resetPromptStatus,
          setIsGeneratePanelShown: _v0.setIsGeneratePanelShown
        }))),
        _v8 = (() => {
          let _v0 = (0, _v19.useContext)(_v29.ViewerContext),
            {
              isGuestUser: _v1,
              client: _v2
            } = (0, _v19.useContext)(_v30),
            _v3 = (0, _v36.useShowTeleprompterUpsell)(_v1),
            {
              capabilities: {
                enableAiScriptGeneration: _v4
              },
              ready: _v5
            } = (0, _v301.useCapability)(["enableAiScriptGeneration"], _v0?.teamUser?.ownerId);
          return !!_v1 && "live" === _v2 || !!_v3 || !!_v5 && !!_v4;
        })(),
        {
          client: _v9,
          getClientAnalyticContext: _v10
        } = (0, _v19.useContext)(_v30),
        {
          sendOpenTeleprompterScriptGeneratorBpEvent: _v11
        } = (0, _v270.useTeleprompterAnalytics)({
          element: "icon",
          feature: "teleprompter",
          location: "modal_bottom_banner"
        }, _v9, _v10),
        {
          scriptGeneratorIsSurveyShown: _v12
        } = _v0,
        _v13 = _v300(_v3, 300),
        _v14 = (0, _v19.useCallback)(() => {
          _v5?.abort();
        }, [_v5]);
      (0, _v19.useEffect)(() => _v6, [_v6]), (0, _v19.useEffect)(() => {
        _v2 && !_v40.useTeleprompterStore.getState().isPopOverVisible && _v7(!1);
      }, [_v2, _v7]);
      let _v15 = (0, _v19.useCallback)(() => {
          _v7(!0), _v11(), _v1({
            name: "open_script_generator",
            eventType: "click",
            location: "teleprompter"
          });
        }, [_v11, _v1, _v7]),
        _v16 = "started" === _v4;
      return _v8 ? (0, _v18.jsxs)(_v18.Fragment, {
        children: [_v13 && (0, _v18.jsx)(_v336, {
          shouldBeShown: _v3
        }), !_v3 && (0, _v18.jsxs)(_v80.Box, {
          position: "absolute",
          bottom: (0, _v82.rem)(20),
          right: (0, _v82.rem)(12),
          overflow: "hidden",
          borderRadius: (0, _v82.rem)(6),
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          zIndex: 100,
          children: [_v16 && (0, _v18.jsx)(_v273.Button, {
            variant: "secondary",
            size: "sm",
            mr: (0, _v82.rem)(8),
            onClick: _v14,
            children: _v31.translations.script.editor.stopGenerationButton
          }), _v12 && "finished" === _v4 && (0, _v18.jsx)(_v350, {}), (0, _v18.jsx)(_v299.Fade, {
            enterDuration: "2xl",
            in: !_v3,
            children: (0, _v18.jsx)(_v279.Tooltip, {
              label: _v31.translations.tooltips.generateScript,
              children: (0, _v18.jsx)(_v80.Box, {
                "data-testid": _v265,
                children: (0, _v18.jsx)(_v298.AiActionBarButton, {
                  onClick: _v15,
                  isDisabled: _v16,
                  label: ""
                })
              })
            })
          })]
        })]
      }) : null;
    };
  function _v352(_v0) {
    let {
      width: _v1,
      height: _v2,
      poppedOutWidth: _v3,
      poppedOutHeight: _v4
    } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(({
      persistentData: {
        width: _v0,
        height: _v1,
        poppedOutWidth: _v2,
        poppedOutHeight: _v3
      }
    }) => ({
      width: _v0,
      height: _v1,
      poppedOutWidth: _v2,
      poppedOutHeight: _v3
    })));
    return _v0 ? {
      width: _v3,
      height: _v4
    } : _v70(_v1, _v2);
  }
  let [_v353, _v354] = [0, .75],
    _v355 = ({
      isPoppedOut: _v0,
      contentWrapperRef: _v1,
      fontSize: _v2
    }) => {
      let {
          spacerHeight: _v3,
          setSpacerHeight: _v4
        } = function (_v0, _v1) {
          let _v2 = _v352(_v0).height,
            {
              panelShouldBeShown: _v3,
              spacerHeight: _v4,
              setSpacerHeight: _v5
            } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
              spacerHeight: _v0.spacerHeight,
              setSpacerHeight: _v0.setSpacerHeight,
              panelShouldBeShown: _v0.isGeneratePanelShown
            }))),
            _v6 = _v300(_v3, 300);
          return (0, _v19.useEffect)(() => {
            let _v0 = _v1.current?.offsetHeight;
            _v0 && _v5(_v0 => {
              let _v1 = Math.round(Math.min(_v0 * _v354, _v0 - 0));
              return 0 === _v0 ? Math.max(Math.round(_v2 * _v353), 0) : _v0 > _v1 ? _v1 : _v0;
            });
          }, [_v2, _v1, _v5, _v6]), {
            spacerHeight: _v4,
            setSpacerHeight: _v5
          };
        }(_v0, _v1),
        {
          onMouseDown: _v5,
          onMouseUp: _v6,
          setHandleRef: _v7
        } = function (_v0, _v1) {
          let _v2 = (0, _v19.useRef)(null),
            _v3 = (0, _v19.useRef)(void 0),
            _v4 = (0, _v19.useCallback)(_v0 => {
              let _v1 = _v1.current;
              if (_v2.current && _v1 && _v3.current) {
                let _v0 = _v0.clientY - _v3.current.y,
                  {
                    offsetHeight: _v1
                  } = _v1,
                  _v2 = _v2.current.offsetTop + _v0,
                  _v3 = Math.round(Math.min(_v1 * _v354, _v1 - 0));
                _v2 >= 0 && _v2 <= _v3 && (_v0(() => _v2), _v3.current = {
                  x: _v0.clientX,
                  y: _v0.clientY
                });
              }
            }, [_v0, _v1]),
            {
              onMouseDown: _v5,
              onMouseUp: _v6
            } = function (_v0, _v1) {
              let [_v2, _v3] = (0, _v19.useState)(!1),
                _v4 = (0, _v19.useCallback)(() => _v3(!1), []),
                _v5 = (0, _v19.useCallback)(() => _v3(!0), []),
                _v6 = (0, _v19.useCallback)(_v0 => {
                  _v0.preventDefault(), _v1(_v0);
                }, [_v1]);
              return (0, _v19.useEffect)(() => (document.addEventListener("mouseup", _v4), () => document.removeEventListener("mouseup", _v4)), [_v4]), (0, _v19.useEffect)(() => (_v2 && document.addEventListener("mousemove", _v6), () => {
                document.removeEventListener("mousemove", _v6);
              }), [_v2, _v6, _v0]), {
                onMouseDown: _v5,
                onMouseUp: _v4
              };
            }(_v1, _v4),
            _v7 = (0, _v19.useCallback)(_v0 => {
              _v0.stopPropagation(), _v5(), _v3.current = {
                x: _v0.clientX,
                y: _v0.clientY
              };
            }, [_v5]);
          return {
            onMouseDown: _v7,
            onMouseUp: (0, _v19.useCallback)(() => {
              _v6(), _v3.current = void 0;
            }, [_v6]),
            setHandleRef: (0, _v19.useCallback)(_v0 => {
              _v2.current = _v0;
            }, [])
          };
        }(_v4, _v1),
        _v8 = (0, _v40.useTeleprompterStore)(_v0 => "started" === _v0.promptRequestStatus),
        _v9 = (0, _v306.useColorModeValue)("rgb(101, 121, 135)", "rgb(222, 228, 233)");
      return (0, _v18.jsx)(_v80.Box, {
        ref: _v7,
        fontSize: _v2,
        position: "absolute",
        left: "0",
        right: "0",
        height: "1.5em",
        zIndex: 10,
        width: "0",
        transition: "opacity 0.2s ease-in-out",
        opacity: +!_v8,
        pointerEvents: _v8 ? "none" : "auto",
        top: `${_v3}px`,
        children: (0, _v18.jsx)(_v80.Box, {
          position: "absolute",
          left: "0",
          top: "20%",
          bottom: "20%",
          cursor: "ns-resize",
          zIndex: 10,
          width: (0, _v82.rem)(20),
          display: "flex",
          alignItems: "center",
          onMouseDown: _v5,
          onMouseUp: _v6,
          children: (0, _v18.jsx)(_v80.Box, {
            background: _v9,
            position: "absolute",
            height: "14px",
            width: "7px",
            sx: {
              "&:after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "7px",
                borderStyle: "solid",
                borderWidth: "7px 0 7px 7px",
                borderColor: `transparent transparent transparent ${_v9}`
              }
            }
          })
        })
      });
    };
  function _v356(_v0, _v1, _v2, _v3, _v4, _v5) {
    let _v6,
      _v7 = Object.entries(_v1),
      _v8 = "top" === _v2,
      _v9 = _v5();
    for (let [_v0, _v1] of _v8 ? _v7.slice(0, _v0 + 1).reverse() : _v7.slice(_v0, _v1.length)) {
      let _v0 = !1;
      if (_v1.forEach(_v0 => {
        _v0 || (_v9(_v0) - _v3 + _v0.offsetHeight * _v365 < _v4() ? _v8 && _v6 && (_v0 = !0) : (_v6 = parseInt(_v0), _v8 || (_v0 = !0)));
      }), _v0) break;
    }
    return void 0 === _v6 && "bottom" === _v2 ? _v1.length : _v6;
  }
  function _v357() {
    let _v0 = window.webkitSpeechRecognition || window.SpeechRecognition;
    if (!_v0) throw Error("SpeechRecognition is not supported by the browser");
    return new _v0();
  }
  let _v358 = (_v1 = !1, async () => {
    let _v0 = (0, _v33.getLogger)("checkSpeechRecognitionSupport");
    if (_v1) return void _v0.info("skip check.");
    _v1 = !0, _v0.debug("run check.");
    let _v1 = await _v359();
    return _v1 = !1, _v0.debug("awaited check result.", {
      supportStatus: _v1
    }), _v1;
  });
  async function _v359() {
    let _v0,
      _v1 = (0, _v33.getLogger)("checkSpeechRecognitionSupport");
    return new Promise(_v0 => {
      try {
        let _v0 = _v357();
        _v0.lang = "en-US", _v0.onerror = ({
          error: _v0
        }) => {
          _v1.warn("SR.onerror", {
            error: _v0
          }), _v0.stop(), clearTimeout(_v0), "no-speech" === _v0 ? _v0(!0) : _v0(!1);
        }, _v0.onsoundstart = () => {
          _v1.debug("SR.onsoundstart"), _v0.stop(), clearTimeout(_v0), _v0(!0);
        }, _v0.start(), _v0 = setTimeout(() => {
          _v0.stop(), _v1.debug("SR.onTimerFinished"), _v0(!0);
        }, 0);
      } catch (_v0) {
        _v1.warn("SR.caughtError ", {
          err: _v0
        }), clearTimeout(_v0), _v0(!1);
      }
    });
  }
  function _v360(_v0) {
    return _v0.trim().toLocaleLowerCase().replace(/[^a-z]/gi, "");
  }
  function _v361(_v0) {
    let _v1 = _v0.trim().split(/\s+/).filter(Boolean).map(_v0 => ({
        word: _v0,
        containLetters: !!_v360(_v0)
      })).reduce((_v0, _v1) => {
        let _v2 = _v0[_v0.length - 1];
        return void 0 === _v2 ? _v0.concat(_v1) : (_v2.containLetters ? _v0.push(_v1) : _v2.containLetters || (_v0.pop(), _v0.push({
          word: [_v2.word, _v1.word].join(" "),
          containLetters: _v1.containLetters
        })), _v0);
      }, []),
      _v2 = _v1.slice(0, _v1.length - 2),
      [_v3, _v4] = _v1.slice(-2);
    return _v4 && !_v4.containLetters && _v3?.containLetters ? _v2.concat({
      word: [_v3.word, _v4.word].join(" "),
      containLetters: !0
    }).map(_v0 => _v0.word) : _v1.map(_v0 => _v0.word);
  }
  var _v362 = _v0.i(0);
  function _v363(_v0, _v1) {
    let _v2 = (0, _v362.distance)(_v0, _v1),
      _v3 = Math.max(_v0.length, _v1.length);
    return {
      similarityRounded: Math.round((_v3 - _v2) / _v3 * 100) / 100,
      longestWord: _v3,
      editDistance: _v2
    };
  }
  function _v364(_v0) {
    let _v1 = 0,
      _v2 = 0;
    for (let {
      referenceWord: _v0,
      similarity: _v1
    } of _v0) _v1 += _v0.length, _v2 += _v1 * _v0.length;
    return 0 === _v1 ? 0 : _v2 / _v1;
  }
  let _v365 = .5,
    _v366 = (0, _v19.memo)(_v0 => {
      var _v1;
      let _v2,
        {
          children: _v3,
          wordsRefsList: _v4,
          scrollWrapRef: _v5,
          micEnabled: _v6,
          forceDisposeSpeechRecognition: _v7 = !1
        } = _v0,
        _v8 = (0, _v19.useRef)(null),
        _v9 = (0, _v19.useRef)(0),
        _v10 = (0, _v33.useLogger)("TeleprompterContent"),
        {
          textProgress: _v11,
          words: _v12,
          setIsRecognitionActive: _v13,
          setTextProgress: _v14,
          setCertainMode: _v15,
          isScrollingActive: _v16,
          isSpeechRecognitionSupported: _v17
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          textProgress: _v0.textProgress,
          words: _v0.words,
          setIsRecognitionActive: _v0.setIsRecognitionActive,
          setTextProgress: _v0.setTextProgress,
          isSpeechRecognitionSupported: _v0.persistentData.isSpeechRecognitionSupported,
          setCertainMode: _v0.setCertainMode,
          isScrollingActive: "active" === _v0.scrollingState
        }))),
        {
          mode: _v18,
          source: _v19
        } = (0, _v76.useScrollMode)();
      (0, _v19.useEffect)(() => {
        _v10.info("Teleprompter scroll source changed: ", {
          source: _v19
        });
      }, [_v10, _v19]), (0, _v19.useEffect)(() => {
        _v10.info("Teleprompter scroll mode changed: ", {
          scrollMode: _v18
        });
      }, [_v10, _v18]);
      let _v20 = "dictationBased" === _v18,
        {
          start: _v21,
          stop: _v22,
          initRecognition: _v23,
          isInitialised: _v24,
          recognitionState: _v25,
          resetSessionState: _v26,
          disposeRecognition: _v27
        } = function (_v0, _v1, _v2, _v3) {
          let _v4 = (0, _v33.useLogger)("useSpeechRecognition"),
            _v5 = (0, _v19.useRef)(null),
            _v6 = (0, _v19.useContext)(_v29.ViewerContext),
            _v7 = _v6?.locale ?? "en",
            [_v8, _v9] = (0, _v19.useState)("inactive"),
            [_v10, _v11] = (0, _v19.useState)(!1),
            _v12 = (0, _v40.useTeleprompterStore)(({
              audioTrack: _v0
            }) => _v0);
          (0, _v19.useEffect)(() => {
            _v4.debug("useEffect: setAudioTrack", {
              id: _v12?.id,
              recognitionState: _v5?.current?.state.type
            }), _v5.current?.setAudioTrack(_v12);
          }, [_v12, _v4]);
          let _v13 = (0, _v19.useCallback)(() => {
              if (!_v5.current && _v3 && _v0) try {
                _v4.debug("initialize speech recognition"), _v5.current = function (_v0, _v1, _v2, _v3, _v4, _v5) {
                  var _v6, _v7;
                  let _v8,
                    _v9,
                    _v10,
                    _v11,
                    _v12,
                    _v13,
                    _v14,
                    _v15,
                    _v16,
                    _v17,
                    _v18,
                    _v19,
                    _v20,
                    _v21,
                    _v22,
                    _v23 = _v0.map(_v360),
                    _v24 = {
                      current: _v1
                    },
                    _v25 = () => ({
                      breadthOfSearch: 5,
                      recognizers: []
                    }),
                    _v26 = _v25(),
                    {
                      processRecognitionResult: _v27,
                      reset: _v28
                    } = (_v6 = _v0 => {
                      let _v1 = function (_v0, _v1, _v2, _v3) {
                        if (_v3 === _v1.length) return null;
                        let _v4 = _v1[_v3],
                          _v5 = _v360(_v0.content);
                        if (_v2.recognizers.length > 0) {
                          for (let _v0 of _v2.recognizers) "addition" === _v0.type ? _v0.sendNextWord(_v0, _v5) : _v0.updateWordAtIndex(_v0, _v5);
                          let _v0 = [],
                            _v1 = [];
                          _v2.recognizers.forEach(_v0 => {
                            let _v1 = _v0.getState();
                            if (_v1.isCompleted) {
                              let _v0 = 3 === _v1.results.length ? .5 : .6;
                              _v1.weightedSimilarity > _v0 && _v0.push(_v1);
                            } else _v1.push(_v0);
                          }), _v2.recognizers = _v1;
                          let _v2 = _v0.sort((_v0, _v1) => _v0.startAtIndex - _v1.startAtIndex);
                          if (_v2[0]) return {
                            nextIndex: _v2[0].endIndex
                          };
                        }
                        if (_v5 === _v4 || _v363(_v5, _v4).similarityRounded > .7) return {
                          nextIndex: _v3 + 1
                        };
                        if ("correction" === _v0.type || _v3 === _v1.length - 1) return null;
                        _v2.breadthOfSearch < 12 && (_v2.breadthOfSearch += _v2.breadthOfSearch < 8.5 ? 1 : 2);
                        let _v6 = Math.min(_v3 + _v2.breadthOfSearch, _v1.length - 1),
                          _v7 = [];
                        for (let _v0 = _v3; _v0 <= _v6; _v0++) {
                          let _v0 = function (_v0, _v1) {
                            let _v2 = {
                              isCompleted: !1,
                              startAtIndex: _v0,
                              results: []
                            };
                            function _v3(_v0, _v1) {
                              let _v2 = _v1[_v0 + _v0],
                                _v3 = _v363(_v1, _v2).similarityRounded;
                              if (_v2.results[_v0] = {
                                recognizedWord: _v1,
                                similarity: _v3,
                                referenceWord: _v2
                              }, _v2.results.length < 2) return;
                              let _v4 = _v364(_v2.results);
                              (_v4 > .6 || 3 === _v2.results.length) && (_v2 = {
                                ..._v2,
                                weightedSimilarity: _v4,
                                isCompleted: !0,
                                endIndex: _v0 + _v2.results.length
                              });
                            }
                            return {
                              updateWordAtIndex: (_v0, _v1) => {
                                let _v2 = _v2.results.length - 1,
                                  _v3 = "correction" === _v0.type ? _v2 : -1;
                                "correction" === _v0.type && _v0.relativeCorrectionIndex && (_v3 = _v2 - _v0.relativeCorrectionIndex), _v3 < 0 || void 0 === _v2.results[_v3] || _v2.results[_v3].recognizedWord !== _v1 && _v3(_v3, _v1);
                              },
                              sendNextWord: (_v0, _v1) => {
                                let _v2 = _v2.results.length;
                                if (_v1.length - 1 < _v0 + _v2) {
                                  _v2 = {
                                    ..._v2,
                                    isCompleted: !0,
                                    weightedSimilarity: _v364(_v2.results),
                                    endIndex: _v0 + _v2.results.length
                                  };
                                  return;
                                }
                                _v3(_v2, _v1);
                              },
                              getState: () => _v2
                            };
                          }(_v0, _v1);
                          _v0.sendNextWord(_v0, _v5), _v7.push(_v0);
                        }
                        return _v2.recognizers = _v7.concat(_v2.recognizers), null;
                      }(_v0, _v23, _v26, _v24.current);
                      return null !== _v1 && (_v26 = _v25()), _v1;
                    }, _v8 = [], {
                      processRecognitionResult: (_v0, _v1) => {
                        if (!_v0.finalizedTokens.length && !_v0.interimTokens.length) return;
                        let _v2 = _v0.finalizedTokens.concat(_v0.interimTokens).join(" ").split(/\s+/),
                          _v3 = _v8.length - 1,
                          _v4 = _v2.length < _v8.length;
                        if (_v4) _v3 = _v2.length - 1;else {
                          let _v0 = Math.max(_v3 - 2, 0);
                          for (let _v0 = _v8.length - 1; _v0 >= _v0; _v0--) void 0 !== _v2[_v0] && _v8[_v0] !== _v2[_v0] && (_v3 = _v0);
                        }
                        for (let _v0 = _v3; _v0 < _v2.length; _v0++) {
                          let _v0 = _v4 || _v0 >= _v8.length ? "addition" : _v0 <= _v8.length - 1 && _v2[_v0] !== _v8[_v0] ? "correction" : null;
                          if (!_v0 || _v9 === _v0) continue;
                          let _v1 = _v6({
                            type: _v0,
                            content: _v2[_v0],
                            index: _v0,
                            relativeCorrectionIndex: "correction" === _v0 ? _v8.length - 1 - _v0 : void 0,
                            sequence: _v2
                          });
                          null !== _v1 && (_v9 = _v0, _v1.current = _v1.nextIndex), _v8 = _v2.slice(0, _v0 + 1);
                        }
                      },
                      reset: () => {
                        _v8 = [], _v9 = void 0;
                      }
                    }),
                    _v29 = (_v7 = _v0 => {
                      if (_v3(_v0.type), "active" === _v0.type) {
                        let _v0 = _v24.current;
                        _v27(_v0, _v24), _v24.current !== _v0 && _v2(_v24.current);
                      }
                    }, _v10 = (0, _v33.getLogger)("initSpeechRecognition"), _v11 = Array.from(new Set(_v23)).slice(0, 780), _v12 = `#JSGF V1.0; grammar word; public <word> = ${_v11.join(" | ")};`, _v13 = 0, _v14 = !0, _v15 = null, _v16 = _v357(), (_v17 = function () {
                      try {
                        let _v0 = window.webkitSpeechGrammarList || window.SpeechGrammarList;
                        if (!_v0) return;
                        return new _v0();
                      } catch (_v0) {
                        (0, _v33.getLogger)("createGrammarList").warn("error during instantiation of SpeechGrammarList", {
                          error: _v0
                        });
                      }
                    }()) && (_v17.addFromString(_v12, 1), _v16.grammars = _v17, _v10.debug("SR. added grammar list", {
                      numberOfWords: _v11.length
                    })), _v16.continuous = !0, _v16.interimResults = !0, _v16.lang = _v29.Locales[_v5] ?? "en-US", _v16.maxAlternatives = 1, _v18 = {
                      type: "inactive",
                      interimTokens: [],
                      finalizedTokens: [],
                      error: void 0
                    }, _v19 = _v0 => {
                      Object.assign(_v18, _v0), _v7(_v18);
                    }, _v20 = () => {
                      _v15 && "audio" === _v15.kind && "live" === _v15.readyState ? _v16.start(_v15) : _v16.start();
                    }, _v21 = () => {
                      _v16.onresult = null, _v16.onspeechend = null, _v16.onerror = null, _v16.onend = null, _v16.onstart = null;
                    }, _v22 = () => {
                      _v16.onresult = _v0 => {
                        let _v1 = [],
                          _v2 = [];
                        for (let _v0 = 0; _v0 < _v0.results.length; _v0++) {
                          let _v0 = _v0.results[_v0],
                            {
                              isFinal: _v1
                            } = _v0,
                            {
                              transcript: _v2
                            } = _v0[0];
                          _v2.length && (_v1 && void 0 === _v18.finalizedTokens[_v0] && _v2.push(_v2), _v1 || _v1.push(_v2));
                        }
                        (_v1.length || _v2.length) && _v19({
                          finalizedTokens: _v18.finalizedTokens.concat(_v2),
                          interimTokens: _v1
                        });
                      }, _v16.onspeechend = _v0 => {
                        _v10.debug("SR.onspeechend", {
                          event: _v0
                        }), _v14 || _v19({
                          error: "no-speech"
                        });
                      }, _v16.onerror = ({
                        error: _v0,
                        message: _v1
                      }) => {
                        _v10.debug("SR.onerror", {
                          errCode: _v0,
                          message: _v1
                        }), _v14 || _v19({
                          error: _v0
                        });
                      }, _v16.onend = _v0 => {
                        _v10.debug("SR.onend", {
                          event: _v0
                        });
                        let _v1 = _v18.error;
                        if ("active" === _v18.type && ["no-speech", "network"].includes(_v1) && _v13 < 10 && (_v13++, 1)) {
                          _v10.debug("SR.handledError", {
                            retriesUsed: _v13,
                            errorCode: _v18.error,
                            networkTimeoutHandled: "network" === _v1,
                            noSpeechHandled: "no-speech" === _v1
                          }), _v28(), _v20();
                          return;
                        }
                        _v18.error && _v4(_v18.error), _v21(), _v19({
                          type: "inactive"
                        });
                      }, _v16.onstart = _v0 => {
                        _v10.debug("SR.onstart", {
                          event: _v0
                        }), _v19({
                          type: "active",
                          error: void 0,
                          interimTokens: [],
                          finalizedTokens: []
                        });
                      }, _v20(), _v14 = !1, _v13 = 0;
                    }, {
                      state: _v18,
                      start: _v22,
                      stop: () => {
                        _v16.stop(), _v14 = !0;
                      },
                      setAudioTrack: _v0 => {
                        _v15 = _v0, _v14 || (_v21(), _v16.onend = _v22, _v16.abort());
                      }
                    });
                  return {
                    ..._v29,
                    start: () => {
                      _v28(), _v29.start();
                    },
                    resetSession: _v0 => {
                      _v24.current = _v0, _v26 = _v25();
                    }
                  };
                }(_v0, _v40.useTeleprompterStore.getState().textProgress, _v1, _v9, _v2, _v7), _v5.current.setAudioTrack(_v40.useTeleprompterStore.getState().audioTrack), _v11(!0);
              } catch (_v0) {
                _v4.error(_v0, {
                  category: _v34.UNEXPECTED,
                  method: "initRecognition",
                  component: "useSpeechRecognition",
                  data: {
                    hint: "error during speech recognition initialisation"
                  }
                });
              }
            }, [_v3, _v7, _v4, _v2, _v1, _v0]),
            _v14 = (0, _v19.useCallback)(() => {
              "active" === _v5.current?.state.type ? _v4.debug("Speech Recognition already [active]") : (_v5.current?.start(), _v4.debug("SpeechRecognitionSessionHandle [start]"));
            }, [_v4]),
            _v15 = (0, _v19.useCallback)(() => {
              "inactive" === _v5.current?.state.type ? _v4.debug("Speech Recognition already [inactive]") : (_v5.current?.stop(), _v4.debug("SpeechRecognitionSessionHandle [stop]"));
            }, [_v4]);
          return {
            initRecognition: _v13,
            disposeRecognition: (0, _v19.useCallback)(() => {
              _v5.current?.stop(), _v5.current = null, _v11(!1), _v4.debug("disposed speech recognition");
            }, [_v4]),
            start: _v14,
            stop: _v15,
            isInitialised: _v10,
            resetSessionState: (0, _v19.useCallback)(_v0 => {
              _v5.current?.resetSession(_v0);
            }, []),
            recognitionState: _v8
          };
        }(_v12, _v14, (_v1 = _v0 => {
          _v10.warn("speech recognition error caught", {
            errorCode: _v0,
            isDictationMode: _v20
          }), _v20 && _v15({
            mode: "staticSpeed",
            speed: 1
          });
        }, _v2 = (0, _v19.useRef)(_v1), (0, _v19.useEffect)(() => {
          _v2.current = _v1;
        }, [_v1]), (0, _v19.useCallback)(_v0 => _v2.current(_v0), [])), _v17);
      (0, _v19.useEffect)(() => {
        if (!_v6) return;
        let _v0 = function (_v0, _v1 = 0) {
          let _v2 = setTimeout(() => {
            _v2 = null, _v0.init();
          }, _v1);
          return {
            stop: () => {
              _v2 ? clearTimeout(_v2) : _v0.dispose();
            }
          };
        }({
          init: _v23,
          dispose: _v27
        }, 500);
        return () => _v0.stop();
      }, [_v27, _v23, _v6]), (0, _v19.useEffect)(() => {
        _v7 && _v27();
      }, [_v27, _v7]), (0, _v19.useEffect)(() => {
        _v6 && _v24 && (_v20 && _v16 ? _v21() : _v22());
      }, [_v20, _v16, _v21, _v22, _v24, _v6, _v10]);
      let _v28 = (0, _v19.useCallback)(() => _v40.useTeleprompterStore.getState().spacerHeight, []),
        _v29 = (0, _v19.useCallback)(() => {
          let _v0 = _v8.current?.getBoundingClientRect() ?? {
            y: 0
          };
          return _v0 => _v0.getBoundingClientRect().y - _v0.y + _v28();
        }, [_v28]),
        _v30 = (0, _v19.useCallback)(_v0 => {
          let {
              scrollTop: _v1
            } = _v0.target,
            _v2 = _v9.current > _v1 ? "top" : "bottom";
          _v9.current = _v1;
          let _v3 = _v356(_v11, _v4.current ?? [], _v2, _v1, _v28, _v29);
          void 0 !== _v3 && _v3 !== _v11 && (_v14(_v3), _v26(_v3));
        }, [_v14, _v11, _v26, _v4, _v29, _v28]),
        _v31 = (0, _v19.useRef)(() => _v356(_v11, _v4.current ?? [], "bottom", _v5.current?.scrollTop ?? 0, _v28, _v29));
      (0, _v19.useEffect)(() => {
        let _v0 = _v31.current() ?? 0;
        return _v14(_v0), _v26(_v0), () => {
          _v14(0), _v13(!1);
        };
      }, [_v14, _v13, _v26, _v4]), (0, _v19.useEffect)(() => {
        let _v0 = _v5.current;
        return _v0?.addEventListener("scroll", _v30), () => _v0?.removeEventListener("scroll", _v30);
      }, [_v30, _v5]), (0, _v19.useEffect)(() => {
        let _v0 = _v20 && _v16,
          _v1 = _v5.current;
        if (!_v0 || !_v1 || _v1.scrollHeight === _v1.clientHeight || !_v4.current?.length) return;
        let _v2 = _v11 === _v4.current.length,
          _v3 = _v2 ? _v11 - 1 : _v11,
          _v4 = _v4.current[_v3]?.[0],
          _v5 = _v29();
        if (_v4 && _v1) {
          let _v0 = _v5(_v4) - _v28() - _v4.offsetHeight * (1 - _v365);
          _v2 && (_v0 += _v4.offsetHeight), (_v0 = Math.round(_v0)) > _v1.scrollTop && (_v1.scrollTop = Math.min(_v1.scrollHeight, _v0));
        }
      }, [_v11, _v20, _v16, _v5, _v4, _v29, _v28]);
      let _v32 = _v20 && _v16 && "active" === _v25;
      return (0, _v19.useEffect)(() => {
        _v13(_v32);
      }, [_v32, _v13]), (0, _v18.jsx)("div", {
        ref: _v8,
        children: _v3
      });
    }),
    _v367 = {
      "p > br": {
        height: "1.5em",
        lineHeight: "90%"
      },
      "p:empty": {
        height: "1.5em"
      },
      "s *": {
        textDecoration: "line-through"
      },
      code: {
        whiteSpace: "normal"
      }
    },
    _v368 = {
      ol: {
        listStyleType: "decimal",
        li: {
          marginLeft: "2em",
          marginBottom: "0.5em"
        }
      },
      ul: {
        listStyleType: "disc",
        li: {
          marginLeft: "2em",
          marginBottom: "0.5em"
        }
      }
    };
  var _v369 = _v0.i(0),
    _v370 = _v0.i(0),
    _v371 = _v0.i(0);
  let _v372 = ({
      children: _v0,
      wordIndex: _v1
    }) => {
      let _v2 = (0, _v40.useTeleprompterStore)(_v0 => _v0.textProgress);
      return (0, _v18.jsx)(_v80.Box, {
        as: "li",
        sx: {
          "::marker": {
            color: _v1 < _v2 ? "text-secondary" : "text-primary"
          }
        },
        children: _v0
      });
    },
    _v373 = {
      ":before": {
        content: '"\\007c"',
        display: "inline-block",
        animtaion: "blink 2s infinite",
        position: "absolute",
        left: (0, _v82.rem)(-5),
        top: 0,
        bottom: "0",
        marginLeft: 0,
        "@keyframes blink": {
          "0%": {
            opacity: 1
          },
          "50%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        }
      }
    },
    _v374 = {
      ":after": {
        content: '"\\00a0"'
      }
    },
    _v375 = _v0 => {
      let {
          setRef: _v1,
          wordIndex: _v2,
          wordPart: _v3,
          trailing: _v4
        } = _v0,
        {
          textProgress: _v5,
          isRecognitionActive: _v6,
          isScrollingActive: _v7,
          fontSize: _v8
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          isScrollingActive: "active" === _v0.scrollingState,
          isRecognitionActive: _v0.isRecognitionActive,
          textProgress: _v0.textProgress,
          fontSize: _v0.persistentData.fontSize
        }))),
        _v9 = _v2 < _v5,
        _v10 = _v2 === _v5 && _v6 && !_v4,
        _v11 = (0, _v19.useCallback)(_v0 => {
          _v0 && _v1(_v0, _v2);
        }, [_v1, _v2]);
      return (0, _v18.jsx)(_v80.Box, {
        ref: _v11,
        position: "relative",
        display: "inline-block",
        sx: _v10 ? {
          ..._v374,
          ..._v373
        } : {
          ..._v374
        },
        transition: _v7 ? "color ease-in-out 200ms;" : "",
        color: _v9 ? "text-secondary" : "text-primary",
        marginLeft: _v4 ? "-0.25em" : "",
        zIndex: "initial",
        fontSize: _v8,
        children: _v3
      });
    },
    _v376 = ({
      textContent: _v0,
      rawContent: _v1,
      setRefForWord: _v2
    }) => {
      let _v3 = (0, _v33.useLogger)("EditorLayoutParser"),
        _v4 = (0, _v40.useTeleprompterStore)(_v0 => _v0.setWords),
        _v5 = (0, _v19.useRef)([]),
        _v6 = (0, _v19.useRef)([]);
      (0, _v19.useEffect)(() => () => _v4(null), [_v4]);
      let _v7 = (0, _v19.useCallback)(_v0 => {
          _v6.current = _v361(_v5.current.map(_v0 => _v0.charactersRaw).concat(_v0.data).join(""));
        }, []),
        _v8 = (0, _v19.useCallback)(_v0 => {
          let _v1 = {
              trailingWordPart: !1,
              kind: "content",
              charactersRaw: _v0.data,
              words: []
            },
            _v2 = [..._v6.current];
          _v7(_v0);
          let _v3 = _v2.length - 1,
            _v4 = _v2[_v3],
            _v5 = _v6.current[_v3],
            _v6 = [];
          if (_v4 !== _v5) {
            _v1.trailingWordPart = !0, _v1.startWordIndex = _v3;
            let _v0 = _v5.slice(_v4.length, _v5.length);
            _v1.words.push(_v0), _v6 = [(0, _v18.jsx)(_v375, {
              setRef: _v2,
              wordIndex: _v3,
              wordPart: _v0,
              trailing: !0
            }, `${_v3}${_v0}`)];
          } else _v1.startWordIndex = _v2.length;
          return _v6.current.slice(_v2.length).forEach((_v0, _v1) => {
            let _v2 = _v2.length;
            _v1.words.push(_v0), _v6.push((0, _v18.jsx)(_v375, {
              setRef: _v2,
              wordIndex: _v2 + _v1,
              wordPart: _v0
            }, `${_v2 + _v1}${_v0}`));
          }), _v5.current.push(_v1), (0, _v18.jsx)(_v18.Fragment, {
            children: _v6
          });
        }, [_v2, _v7]),
        _v9 = (0, _v19.useMemo)(() => ({
          replace: _v0 => {
            if (_v0 instanceof _v371.Text && _v0.data.length) return _v8(_v0);
            if (_v0 instanceof _v371.Element && "br" === _v0.tagName) _v5.current.push({
              charactersRaw: " ",
              kind: "whitespace"
            });else if (_v0 instanceof _v371.Element && _v5.current.length && (["p", "code"].includes(_v0.tagName) || /^h[1-6]$/.test(_v0.tagName))) {
              _v5.current.push({
                charactersRaw: " ",
                kind: "whitespace"
              });
              let _v0 = `${_v0.tagName}`;
              return (0, _v18.jsx)(_v0, {
                children: _v0.children.length ? (0, _v371.domToReact)(_v0.children, _v9) : (0, _v18.jsx)("br", {})
              });
            } else if (_v0 instanceof _v371.Element && "li" === _v0.tagName) return (0, _v18.jsx)(_v372, {
              wordIndex: _v6.current.length,
              children: (0, _v371.domToReact)(_v0.children, _v9)
            });
          }
        }), [_v8]),
        _v10 = (0, _v19.useMemo)(() => {
          _v5.current = [], _v6.current = [];
          let _v0 = null;
          try {
            _v0 = (0, _v370.default)(_v1, _v9);
          } catch (_v0) {
            _v3.error(Error("An error occurred when parsing editor's HTML content with html-react-parser"), {
              category: _v34.SCRIPT_GENERATOR,
              method: "useMemo",
              component: "EditorLayoutParser",
              data: {
                error: _v0
              }
            }), _v0 = null;
          }
          let _v1 = _v5.current.filter(_v0 => "content" === _v0.kind);
          return _v0 && _v6.current.length && _v1.length ? _v0 : (_v6.current = _v361(_v0), _v6.current.map((_v0, _v1) => (0, _v18.jsx)(_v375, {
            setRef: _v2,
            wordIndex: _v1,
            wordPart: _v0
          }, `${_v1}${_v0}`)));
        }, [_v1, _v9, _v3, _v0, _v2]);
      return (0, _v19.useEffect)(() => {
        _v4(_v6.current);
      }, [_v4, _v10]), (0, _v18.jsx)(_v18.Fragment, {
        children: _v10
      });
    },
    _v377 = {
      0: 0,
      .5: .75,
      1: 1,
      1.5: 1.5,
      2: 2.25
    },
    _v378 = (0, _v19.memo)(({
      children: _v0,
      isScrollingActive: _v1,
      scrollWrapRef: _v2,
      isPoppedOut: _v3
    }) => {
      let {
          spacerHeight: _v4,
          autoScrollPaused: _v5,
          fontSize: _v6,
          autoScrollSpeed: _v7,
          setIsGeneratePanelShown: _v8
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          spacerHeight: _v0.spacerHeight,
          autoScrollPaused: _v0.scrollPaused,
          fontSize: _v0.persistentData.fontSize,
          autoScrollSpeed: _v0.persistentData.autoScrollSpeed,
          setIsGeneratePanelShown: _v0.setIsGeneratePanelShown
        }))),
        {
          mode: _v9
        } = (0, _v76.useScrollMode)();
      (({
        container: _v0,
        speed: _v1 = 1,
        isEnabled: _v2,
        fontSize: _v3,
        teleprompterWidth: _v4
      }) => {
        let _v5 = (0, _v19.useRef)(null),
          _v6 = _v78 ? 1 : 1 / (window.devicePixelRatio > 0 ? window.devicePixelRatio : 1),
          _v7 = (0, _v19.useMemo)(() => function ({
            speed: _v0 = 1,
            fontSize: _v1,
            teleprompterWidth: _v2,
            scrollStepPx: _v3
          }) {
            let _v4 = 1.5 * _v1 * (3 * 4.7 / (_v2 / _v1 * 2)) * _v377[_v0] / _v3;
            return 0 === _v4 ? null : Math.round(0 / _v4);
          }({
            fontSize: _v3,
            teleprompterWidth: _v4,
            speed: _v1,
            scrollStepPx: _v6
          }), [_v3, _v4, _v1, _v6]),
          _v8 = (0, _v19.useCallback)(_v0 => {
            32 === _v0.keyCode && _v0.preventDefault();
          }, []),
          _v9 = (0, _v19.useCallback)(() => {
            _v5.current && clearInterval(_v5.current), _v0.current && _v0.current.removeEventListener("keydown", _v8);
          }, [_v8, _v0]),
          _v10 = (0, _v19.useCallback)(() => {
            if (_v5.current && _v0.current) {
              let _v0 = _v0.current.scrollTop + _v6;
              _v0.current.scrollTop = _v0, _v0.current.scrollHeight === _v0 && clearInterval(_v5.current);
            }
          }, [_v0, _v6]);
        return (0, _v19.useEffect)(() => {
          if (_v0.current) return _v2 && null !== _v7 && (_v0.current.addEventListener("keydown", _v8), _v5.current = setInterval(() => _v10(), _v7)), _v9;
        }, [_v0, _v9, _v2, _v10, _v8, _v7]);
      })({
        container: _v2,
        isEnabled: "staticSpeed" === _v9 && 0 !== _v7 && _v1 && !_v5,
        speed: _v7,
        teleprompterWidth: _v352(_v3).width,
        fontSize: _v6
      });
      let _v10 = (0, _v19.useCallback)(_v0 => {
          _v8(!1), _v0.nativeEvent.offsetX > _v0.currentTarget.clientWidth && _v0.stopPropagation();
        }, [_v8]),
        _v11 = Math.max((_v2.current?.offsetHeight ?? 0) - _v4, 0),
        _v12 = (0, _v306.useColorModeValue)("rgba(26, 46, 59, 0.4)", "rgba(255, 255, 255, 0.1)");
      return (0, _v18.jsx)(_v80.Box, {
        fontSize: _v6,
        paddingX: (0, _v82.rem)(20),
        position: "relative",
        overflowY: "auto",
        scrollBehavior: _v1 && "dictationBased" === _v9 ? "smooth" : "initial",
        height: "100%",
        lineHeight: 1.5,
        outline: "none",
        boxSizing: "border-box",
        sx: {
          "::-webkit-scrollbar": {
            backgroundColor: "transparent",
            width: (0, _v82.rem)(4)
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: _v12,
            borderRadius: (0, _v82.rem)(8)
          }
        },
        "data-testid": "record-studio-teleprompter-scroll-container",
        onMouseDown: _v10,
        ref: _v2,
        paddingTop: `${_v4}px`,
        paddingBottom: `${_v11}px`,
        children: _v0
      });
    }),
    _v379 = ({
      audioMuted: _v0,
      defaultMicSelected: _v1,
      micId: _v2 = null,
      session: _v3,
      client: _v4 = "record_studio",
      getClientAnalyticContext: _v5 = () => ({}),
      visibleNotices: _v6 = [],
      logger: _v7,
      onUserInteractionEvent: _v8 = () => _v2,
      onScriptGenerationError: _v9,
      onScriptGenerationStarted: _v10 = () => _v2,
      isPoppedOut: _v11 = !1,
      popOut: _v12,
      guestUserInfo: _v13
    }) => {
      let _v14,
        _v15,
        _v16,
        _v17,
        _v18 = (0, _v83.useIsVpaas)(),
        {
          currentSessionData: _v19
        } = (0, _v77.useSession)(),
        [_v20, _v21] = (0, _v19.useState)(!1),
        _v22 = (0, _v19.useRef)(null),
        _v23 = (0, _v19.useRef)(null),
        _v24 = (0, _v19.useRef)(_v23.current?.scrollTop ?? 0),
        _v25 = (_v14 = (0, _v40.useTeleprompterStore)(_v0 => _v0.setIsMicrophonePermissionsGranted), _v15 = (0, _v19.useCallback)(_v0 => {
          _v14("granted" === _v0);
        }, [_v14]), _v16 = (0, _v40.useTeleprompterStore)(_v0 => _v0.isMicrophonePermissionsGranted), _v17 = (0, _v19.useCallback)(async () => await window.navigator.permissions.query({
          name: "microphone"
        }), []), (0, _v19.useEffect)(() => {
          let _v0;
          return _v17().then(_v0 => {
            _v15(_v0.state), _v0.onchange = function () {
              _v15(this.state);
            }, _v0 = _v0;
          }), () => {
            _v0 && (_v0.onchange = null);
          };
        }, [_v17, _v15]), _v16),
        _v26 = !!_v13,
        _v27 = (0, _v36.useShowTeleprompterUpsell)(_v26) && !_v18,
        {
          scriptGeneratorError: _v28,
          setPromptError: _v29,
          setScrollPaused: _v30,
          isScrollingActive: _v31,
          fontSize: _v32,
          scrollingState: _v33
        } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
          scriptGeneratorError: _v0.promptRequestError,
          setPromptError: _v0.setPromptError,
          setScrollPaused: _v0.setScrollPaused,
          isScrollingActive: _v11 ? "active" === _v0.persistentData.poppedOutScrollingState : "active" === _v0.scrollingState,
          scrollingState: _v0.scrollingState,
          fontSize: _v0.persistentData.fontSize,
          teleprompterUpsellShown: _v0.isUpsellModalShown
        })));
      !function (_v0 = !1) {
        let _v1 = (0, _v369.useViewer)(),
          _v2 = (0, _v33.useLogger)("useSetDefaultScrollMode"),
          {
            alignPersistScrollWithRecognitionSupport: _v3,
            isSpeechRecognitionSupported: _v4,
            isMicrophonePermissionsGranted: _v5,
            updateTeleprompterData: _v6
          } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
            updateTeleprompterData: _v0.updatePersistentData,
            alignPersistScrollWithRecognitionSupport: _v0.alignScrollModeWithAccount,
            isSpeechRecognitionSupported: _v0.persistentData.isSpeechRecognitionSupported,
            isMicrophonePermissionsGranted: _v0.isMicrophonePermissionsGranted
          })));
        (0, _v19.useEffect)(() => {
          _v3();
        }, [_v1?.user, _v3, _v4]), (0, _v19.useEffect)(() => {
          _v5 && null === _v4 && (_v78 && !_v0 && _v2.info("skip SpeechRecognition check for non-default microphone on Safari", {
            defaultMicSelected: _v0
          }), (async () => {
            let _v0 = await _v358();
            void 0 !== _v0 && _v6({
              isSpeechRecognitionSupported: _v0
            });
          })());
        }, [_v0, _v5, _v4, _v2, _v6]);
      }(_v1), function (_v0, _v1 = !1) {
        let _v2 = (0, _v33.useLogger)("useSetDynamicScrollMode"),
          {
            isMicrophonePermissionsGranted: _v3,
            setScrollForInput: _v4
          } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
            isMicrophonePermissionsGranted: _v0.isMicrophonePermissionsGranted,
            setScrollForInput: _v0.setScrollForInput
          })));
        (0, _v19.useEffect)(() => {
          if (!_v78 || !_v3) return;
          let _v0 = _v1 ? void 0 : "staticSpeed";
          _v2.info("scroll mode changed for an input:", {
            defaultMicSelected: _v1,
            micId: _v0,
            mode: _v0
          }), _v4(_v0);
        }, [_v4, _v1, _v3, _v2, _v0]);
      }(_v2, _v1), (0, _v33.useLogger)("Teleprompter", _v7), (0, _v19.useEffect)(() => {
        _v9 && _v28 && _v9(_v28);
      }, [_v9, _v28]);
      let _v34 = (0, _v19.useCallback)(() => _v29(null), [_v29]),
        _v35 = (0, _v19.useCallback)(() => _v30(!0), [_v30]),
        _v36 = (0, _v19.useCallback)(() => _v30(!1), [_v30]),
        _v37 = (0, _v19.useRef)([]),
        _v38 = (0, _v19.useCallback)((_v0, _v1) => {
          _v37.current[_v1] || (_v37.current[_v1] = []), _v37.current[_v1].includes(_v0) || _v37.current[_v1].push(_v0);
        }, []),
        [_v39, _v40] = (0, _v19.useState)(!_v31),
        [, _v41] = (0, _v19.useTransition)(),
        _v42 = "disabled" === _v33,
        _v43 = "disabled" === _v33 || "paused" === _v33 && "live" === _v4;
      return (0, _v19.useEffect)(() => {
        _v42 && (_v37.current = []);
      }, [_v42]), (0, _v19.useEffect)(() => {
        _v41(() => {
          "live" === _v4 && "paused" === _v33 ? _v24.current = _v23.current?.scrollTop ?? 0 : _v24.current = 0, _v40(_v43);
        });
      }, [_v4, _v33, _v43]), (0, _v18.jsx)(_v30.Provider, {
        value: {
          session: _v3,
          visibleNotices: _v6,
          trackUserInteractionEvent: _v8,
          client: _v4,
          isGuestUser: _v26,
          guestUserInfo: _v13,
          getClientAnalyticContext: _v5,
          onScriptGenerationStarted: _v10
        },
        children: (0, _v18.jsxs)(_v80.Box, {
          "data-testid": "record-studio-teleprompter-container",
          className: _v71,
          width: "100%",
          height: _v11 ? "100vh" : _v27 ? "auto" : "100%",
          borderRadius: _v11 ? 0 : "12px",
          border: "1px",
          borderStyle: "solid",
          borderColor: "stroke",
          userSelect: "none",
          backgroundColor: "fill-blur",
          sx: {
            backdropFilter: "blur(var(--vimeo-blur-lg))"
          },
          children: [(0, _v18.jsx)(_v292, {
            isGuestUser: _v26,
            client: _v4,
            getClientAnalyticContext: _v5,
            isPoppedOut: _v11,
            popOut: _v12,
            showUpsell: _v27,
            setForceDisposeSpeechRecognition: _v21
          }), (0, _v18.jsxs)(_v81.Flex, {
            direction: "column",
            h: "calc(100% - 56px)",
            children: [(0, _v18.jsxs)(_v80.Box, {
              children: [_v6 && (0, _v18.jsx)(_v297, {
                visibleNotices: _v6
              }), _v28 && (0, _v18.jsx)(_v296, {
                message: _v31.translations.script.generate.errors[_v28].text,
                status: "error",
                onClose: _v34
              })]
            }), (0, _v18.jsxs)(_v81.Flex, {
              ref: _v22,
              onMouseEnter: _v35,
              onMouseLeave: _v36,
              onWheel: _v35,
              direction: "column",
              flexBasis: "100%",
              fontWeight: "medium",
              userSelect: "none",
              overflow: "hidden",
              padding: (0, _v82.rem)(2),
              position: "relative",
              sx: {
                ..._v367,
                ..._v368
              },
              children: [(0, _v18.jsx)(_v355, {
                isPoppedOut: _v11,
                contentWrapperRef: _v22,
                fontSize: _v32
              }), (0, _v18.jsx)(_v378, {
                isPoppedOut: _v11,
                scrollWrapRef: _v23,
                isScrollingActive: _v31,
                children: _v39 ? (0, _v18.jsx)(_v272, {
                  scrollWrapRef: _v23,
                  placeholderText: _v31.translations.editorPlaceholder,
                  initialScrollTop: _v24.current
                }) : (0, _v18.jsx)(_v366, {
                  forceDisposeSpeechRecognition: _v20,
                  micEnabled: _v25 && !_v0,
                  scrollWrapRef: _v23,
                  wordsRefsList: _v37,
                  children: (0, _v18.jsx)(_v376, {
                    setRefForWord: _v38,
                    textContent: _v19.teleprompterTextContent,
                    rawContent: _v19.teleprompterRawContent
                  })
                })
              })]
            }), !_v18 && _v39 && (0, _v18.jsx)(_v351, {})]
          })]
        })
      });
    };
  _v0.s(["TeleprompterPoppedOut", 0, _v0 => ((0, _v77.useSession)(_v0.session), (0, _v18.jsx)(_v379, {
    ..._v0,
    isPoppedOut: !0
  })), "TeleprompterRoot", 0, _v0 => {
    let {
        popOut: _v1,
        isPoppedOut: _v2
      } = (() => {
        let [_v0, _v1] = (0, _v19.useState)(null),
          [_v2, _v3] = (0, _v19.useState)(!1),
          _v4 = (0, _v40.useTeleprompterStore)(_v0 => _v0.updatePersistentData),
          _v5 = (0, _v33.useLogger)("usePoppedOutTeleprompter"),
          {
            updateCurrentSessionData: _v6,
            currentSessionData: _v7
          } = (0, _v77.useSession)(),
          {
            trackUserInteractionEvent: _v8
          } = _v35(),
          _v9 = (0, _v19.useCallback)(_v0 => {
            _v4({
              isSpeechRecognitionSupported: _v0
            });
          }, [_v4]),
          {
            poppedOutPositionX: _v10,
            poppedOutPositionY: _v11,
            poppedOutWidth: _v12,
            poppedOutHeight: _v13,
            poppedOutPrevWindowHeight: _v14,
            poppedOutPrevWindowWidth: _v15,
            isSpeechRecognitionSupported: _v16,
            setCertainMode: _v17,
            updateBoundaries: _v18
          } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
            ..._v0.persistentData,
            setCertainMode: _v0.setCertainMode,
            updateBoundaries: _v0.updateBoundaries
          }))),
          {
            mode: _v19
          } = (0, _v76.useScrollMode)(),
          [_v20, _v21] = (0, _v19.useState)(_v16),
          [_v22, _v23] = (0, _v19.useState)(!1),
          _v24 = (0, _v40.useTeleprompterStore)(_v0 => _v0.setIsPoppedOut);
        (0, _v19.useEffect)(() => {
          _v24(!!_v0);
        }, [_v0, _v24]);
        let _v25 = (0, _v19.useCallback)(() => {
            _v4({
              poppedOutPrevWindowWidth: window.screen.width,
              poppedOutPrevWindowHeight: window.screen.height
            }), _v5.info("set window size", {
              width: window.screen.width,
              height: window.screen.height
            });
          }, [_v5, _v4]),
          _v26 = (0, _v19.useCallback)(() => {
            _v8({
              name: "open_teleprompter_new_tab",
              location: "teleprompter",
              eventType: "click"
            });
            let _v0 = !_v78 && _v16;
            _v23("dictationBased" === _v19 && _v78), _v23("dictationBased" === _v19), _v21(_v16), _v9(_v0), _v0?.close();
            let _v1 = window.screen.width,
              _v2 = window.screen.height,
              _v3 = Math.max(_v12, 480),
              _v4 = {
                width: _v3,
                height: Math.max(_v13, 240),
                positionX: _v10 ?? (_v1 - _v3) / 2,
                positionY: _v11 ?? 0
              };
            _v15 && _v15 !== _v1 && (_v15 > _v1 && (_v4.width = Math.max(Math.floor(_v4.width * (_v1 / _v15)), 480)), _v14 && _v14 > _v2 && (_v4.height = Math.max(Math.floor(_v4.height * (_v2 / _v14)), 240)), _v4.positionX = Math.floor(_v4.positionX * (_v1 / _v15)), _v4.positionY = Math.floor(_v4.positionY * (_v2 / _v15)), _v18(_v4, !0)), _v25();
            let _v5 = `scrollbars=no,status=no,location=no,toolbar=no,menubar=no,width=${_v4.width},height=${_v4.height},left=${_v4.positionX},top=${_v4.positionY}`,
              _v6 = window.open(location.href.replace(location.pathname, "/record/teleprompter"), void 0, _v5);
            _v6 && (_v1(_v6), _v3(!0));
          }, [_v16, _v0, _v13, _v10, _v11, _v14, _v15, _v12, _v19, _v9, _v25, _v8, _v18]),
          _v27 = (0, _v19.useCallback)(() => {
            _v0 && (_v3(!1), _v9(_v20), _v0.close());
          }, [_v0, _v20, _v9]);
        (0, _v19.useEffect)(() => {
          _v7.isTeleprompterShown || _v27();
        }, [_v27, _v7.isTeleprompterShown, _v0]), (0, _v19.useEffect)(() => {
          _v22 && (_v2 ? _v17({
            mode: "staticSpeed",
            speed: 1
          }) : (_v17({
            mode: "dictationBased"
          }), _v23(!1)));
        }, [_v2, _v17, _v22]);
        let _v28 = (0, _v19.useCallback)(_v0 => {
          "popIn" === _v0.data && _v27();
        }, [_v27]);
        return (0, _v19.useEffect)(() => {
          !_v0 && _v2 && (_v9(_v20), _v6({
            isTeleprompterShown: !1
          }), _v3(!1));
        }, [_v16, _v2, _v0, _v20, _v9, _v22, _v6]), (0, _v19.useEffect)(() => (window.addEventListener("message", _v28), () => window.removeEventListener("message", _v28)), [_v28]), (0, _v19.useEffect)(() => {
          if (_v0) {
            let _v0 = setInterval(() => {
              _v0 && !_v0.closed ? _v79(_v10 || 0, _v0.screenX, 2) && _v79(_v11 || 0, _v0.screenY, 2) && _v79(_v12, _v0.innerWidth, 2) && _v79(_v13, _v0.innerHeight, 2) || _v18({
                positionX: _v0.screenX,
                positionY: _v0.screenY,
                width: _v0.innerWidth,
                height: _v0.innerHeight
              }, !0) : _v1(null);
            }, 333);
            return () => {
              clearInterval(_v0);
            };
          }
        }, [_v0, _v13, _v10, _v11, _v12, _v18]), (0, _v19.useEffect)(() => {
          let _v0 = () => {
            _v0 && _v6({
              isTeleprompterShown: !1
            }), _v27();
          };
          return window.addEventListener("beforeunload", _v0), () => window.removeEventListener("beforeunload", _v0);
        }, [_v27, _v0, _v6]), {
          popOut: _v26,
          isPoppedOut: !!_v0
        };
      })(),
      {
        currentSessionData: _v3
      } = (0, _v77.useSession)(_v0.session),
      {
        teleprompterUpsellShown: _v4,
        setAudioTrack: _v5
      } = (0, _v40.useTeleprompterStore)((0, _v20.useShallow)(_v0 => ({
        teleprompterUpsellShown: _v0.isUpsellModalShown,
        setAudioTrack: _v0.setAudioTrack
      })));
    return (0, _v19.useEffect)(() => {
      _v5(_v0.audioTrack ?? null);
    }, [_v0.audioTrack, _v5]), (0, _v18.jsxs)(_v18.Fragment, {
      children: [_v3.isTeleprompterShown && !_v2 && (0, _v18.jsx)(_v75, {
        children: (0, _v18.jsx)(_v379, {
          ..._v0,
          popOut: _v1
        })
      }), _v4 && (0, _v18.jsx)(_v43, {})]
    });
  }], 0);
}