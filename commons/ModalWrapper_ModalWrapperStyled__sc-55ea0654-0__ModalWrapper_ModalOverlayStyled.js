{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v4;
  let _v12 = _v6.default.div.withConfig({
      displayName: "ModalWrapper__ModalWrapperStyled",
      componentId: "sc-55ea0654-0"
    })`
  position: fixed;
  z-index: ${_v0 => _v0.zIndexStartingPoint};
  top: 0;
  left: 0;
  width: 0;
  display: block;
`,
    _v13 = {
      entered: {
        width: "100%",
        height: "100%"
      },
      exiting: {
        width: "100%",
        height: "100%"
      }
    },
    _v14 = _v6.default.div.withConfig({
      displayName: "ModalWrapper__ModalOverlayStyled",
      componentId: "sc-55ea0654-1"
    })`
  display: ${_v0 => _v0.isOpen ? "flex" : "none"};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${_v0 => _v0.zIndexStartingPoint};
  transition: all ${_v0 => _v0.modalSpeed}ms ease-in-out;
  background-color: rgba(
    0,
    0,
    0,
    ${_v0 => "lighter" === _v0.backgroundOpacity ? .33 : .66}
  );
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  height: 100%;
  opacity: 0;
`,
    _v15 = {
      entered: {
        opacity: "1"
      },
      exiting: {
        opacity: "0"
      }
    },
    _v16 = _v6.default.div.withConfig({
      displayName: "ModalWrapper__ContentWrapperStyled",
      componentId: "sc-55ea0654-2"
    })`
  cursor: default;
  z-index: ${_v0 => _v0.zIndexStartingPoint + 1};
  position: absolute;
  ${_v0 => (_v0 => {
      if ("center" === _v0.modalPosition) return _v6.css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: calc(100% - ${(0, _v3.rem)(40)});
    `;
    })(_v0)};
`;
  class _v17 extends _v11.Component {
    firstFocusableElement;
    focusableElementList;
    lastFocusableElement;
    previouslyFocusedElement;
    props;
    scrollDistance;
    thisEl;
    componentDidUpdate(_v0) {
      this.props.isOpen !== _v0.isOpen && (this.props.isOpen ? this._openModal() : this.props.isOpen && _v0.isOpen ? this._resetModal() : this._closeModal());
    }
    _bindEvents() {
      document.addEventListener("keydown", this._handleEsc), this.lastFocusableElement && this.firstFocusableElement && (this.lastFocusableElement.addEventListener("keydown", this._handleForwardFocusLooping), this.firstFocusableElement.addEventListener("keydown", this._handleBackwardFocusLooping));
    }
    _closeModal = () => {
      this._unfreezeBodyScroll(), this._resetOriginalFocus(), this._unfreezeBodyScroll(), this._unbindEvents();
    };
    _contentClick = _v0 => {
      _v0.stopPropagation();
    };
    _handleEsc = _v0 => {
      "Esc" !== _v0.key || this.props.noDismiss || this._triggerClose(_v0);
    };
    _handleForwardFocusLooping = _v0 => {
      "Tab" === _v0.key && (this._setFirstFocus(), _v0.preventDefault());
    };
    _handleBackwardFocusLooping = _v0 => {
      _v0.shiftKey && "Tab" === _v0.key && (this._setLastFocus(), _v0.preventDefault());
    };
    _freezeBodyScroll() {
      this.scrollDistance = window.pageYOffset;
      let _v0 = `-${this.scrollDistance}px`;
      document.body.style.position = "fixed", document.body.style.height = "100%", document.body.style.width = "100%", document.body.style.top = _v0;
    }
    _getOriginalFocusedEl() {
      let _v0 = document.activeElement;
      _v0 && (this.previouslyFocusedElement = _v0);
    }
    ref = _v11.default.createRef();
    _openModal = () => {
      this._freezeBodyScroll(), this._bindEvents();
      let _v0 = () => {
        this._bindEvents();
      };
      this.thisEl || (this.thisEl = this.ref.current), this.previouslyFocusedElement || this._getOriginalFocusedEl(), this._setFocusableElementList(_v0.bind(this), !0);
    };
    _overlayClick = _v0 => {
      this.props.noDismiss || this._triggerClose(_v0);
    };
    _resetModal() {
      this._unbindEvents();
      let _v0 = () => {
        this._bindEvents();
      };
      this.thisEl || (this.thisEl = this.ref.current), this._setFocusableElementList(_v0.bind(this), !1);
    }
    _resetOriginalFocus() {
      this.previouslyFocusedElement && this.previouslyFocusedElement.focus();
    }
    _setFocusableElementList(_v0, _v1) {
      if (this.thisEl instanceof Element) {
        let _v0 = this.thisEl.querySelectorAll("a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])");
        _v0.length && (this.focusableElementList = _v0, this.firstFocusableElement = Array.prototype.slice.call(_v0)[0], this.lastFocusableElement = Array.prototype.slice.call(_v0)[_v0.length - 1]);
      }
      "function" == typeof _v0 && _v0(), _v1 && this._setFirstFocus();
    }
    _setFirstFocus() {
      let _v0 = this.props.firstFocusSelector;
      if (this.thisEl instanceof HTMLElement) if (_v0) {
        let _v0 = this.thisEl.querySelector(_v0);
        if (_v0 instanceof HTMLElement) return void _v0.focus();
      } else this.firstFocusableElement && this.firstFocusableElement.focus();
    }
    _setLastFocus() {
      this.lastFocusableElement && this.lastFocusableElement.focus();
    }
    _triggerClose = _v0 => {
      this._closeModal(), "function" == typeof this.props.onCloseEvent && this.props.onCloseEvent(_v0);
    };
    _unbindEvents() {
      document.removeEventListener("keydown", this._handleEsc);
    }
    _unfreezeBodyScroll() {
      document.body.style.position = "", document.body.style.height = "", document.body.style.width = "", document.body.style.top = "", setTimeout(() => {
        window.scrollTo(0, this.scrollDistance);
      }, 2);
    }
    render() {
      let {
        backgroundOpacity: _v0 = "darker",
        children: _v1,
        isOpen: _v2,
        modalPosition: _v3,
        modalSpeed: _v4 = 250,
        mountOnEnter: _v5,
        unmountOnExit: _v6,
        zIndexStartingPoint: _v7 = 0
      } = this.props;
      return (0, _v1.jsx)(_v5.Transition, {
        in: _v2,
        timeout: _v4,
        mountOnEnter: _v5,
        unmountOnExit: _v6,
        nodeRef: this.ref,
        children: _v0 => (0, _v1.jsxs)(_v12, {
          ref: this.ref,
          style: {
            ..._v13[_v0]
          },
          zIndexStartingPoint: _v7,
          children: [(0, _v1.jsx)(_v14, {
            backgroundOpacity: _v0,
            isOpen: _v2,
            onClick: this._overlayClick,
            style: {
              ..._v15[_v0]
            },
            modalSpeed: _v4,
            zIndexStartingPoint: _v7
          }), (0, _v1.jsx)(_v16, {
            onClick: this._contentClick,
            zIndexStartingPoint: _v7,
            modalPosition: _v3,
            children: _v1
          })]
        })
      });
    }
  }
  let _v18 = "86vh",
    _v19 = {
      entering: {
        opacity: "0"
      },
      entered: {
        opacity: "1"
      },
      exiting: {
        opacity: "0"
      }
    },
    _v20 = {
      sm: 340,
      md: 440,
      lg: 660
    },
    _v21 = _v6.default.div.withConfig({
      displayName: "Modal__ModalStyled",
      componentId: "sc-ba0da981-0"
    })`
  position: relative;
  width: 76%;
  margin: 0 auto;
  min-height: ${_v18};
  border-radius: ${(0, _v3.rem)(3)};
  background: ${_v7.white};
  box-shadow: 0 ${(0, _v3.rem)(6)} ${(0, _v3.rem)(10)} 0 rgba(0, 0, 0, 0.12);
  transition: all ${300}ms ease-in;
  opacity: 0;
  @media (min-height: ${(0, _v3.rem)(300)}) {
    min-height: ${(0, _v3.rem)(180)};
    max-height: ${_v18};
  }
  ${_v0 => "sm" === _v0.modalSize ? _v6.css`
        @media screen and (min-width: ${(0, _v3.em)(480)}) {
          width: ${(0, _v3.rem)(_v20.sm)};
        }
      ` : "fluid" === _v0.modalSize ? `
                width: auto;
                overflow: auto;
            ` : _v6.css`
        @media screen and (min-width: ${(0, _v3.em)(768)}) {
          width: ${(0, _v3.rem)(_v20[_v0.modalSize])};
        }
      `};
`,
    _v22 = _v6.default.div.withConfig({
      displayName: "Modal__ContentStyled",
      componentId: "sc-ba0da981-1"
    })`
  max-height: ${_v18};
  overflow: auto;
  padding: ${_v0 => _v0.fullBleed ? 0 : (0, _v3.rem)(20)};
  opacity: 1;
  border-radius: ${(0, _v3.rem)(3)};
  ${_v0 => _v0.hasActionArea ? _v6.css`
          @media screen and (min-width: ${(0, _v3.em)(480)}) {
            max-height: calc(${_v18} - ${(0, _v3.rem)(80)});
          }

          max-height: calc(${_v18} - ${(0, _v3.rem)(134)});
        ` : ""};
`,
    _v23 = _v6.default.div.withConfig({
      displayName: "Modal__ModalCloseButtonWrapperStyled",
      componentId: "sc-ba0da981-2"
    })`
  position: absolute;
  top: ${(0, _v3.rem)(16)};
  right: ${(0, _v3.rem)(16)};
`,
    _v24 = _v6.default.div.withConfig({
      displayName: "Modal__ActionAreaStyled",
      componentId: "sc-ba0da981-3"
    })`
  display: flex;
  flex-wrap: wrap;
  height: ${(0, _v3.rem)(134)};
  padding: ${(0, _v3.rem)(20)} ${(0, _v3.rem)(20)} ${(0, _v3.rem)(12)};
  box-shadow: 0 ${(0, _v3.rem)(4)} ${(0, _v3.rem)(10)} ${(0, _v3.rem)(6)} rgba(0, 0, 0, 0.1);
  z-index: 10;
  position: relative;

  @media screen and (min-width: ${(0, _v3.em)(480)}) {
    height: ${(0, _v3.rem)(80)};
    flex-wrap: nowrap;
  }
`,
    _v25 = (0, _v6.default)(_v8.Button).withConfig({
      displayName: "Modal__$Button",
      componentId: "sc-ba0da981-4"
    })`
  margin: 0.25rem;

  @media screen and (min-width: ${(0, _v3.em)(768)}) {
    margin: 0 0.5rem 0.5rem;
  }
`,
    _v26 = _v6.default.div.withConfig({
      displayName: "Modal__ModalTitleStyled",
      componentId: "sc-ba0da981-5"
    })`
  margin-bottom: ${(0, _v3.rem)(12)};
  padding-right: ${(0, _v3.rem)(8)};
`,
    _v27 = _v6.default.span.withConfig({
      displayName: "Modal__ModalTitleTruncationStyled",
      componentId: "sc-ba0da981-6"
    })`
  display: inline-block;
  width: calc(100% - ${(0, _v3.rem)(40)});
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
  class _v28 extends _v4.default.Component {
    static defaultProps = {
      size: "md",
      dismissButtonFormat: "dark"
    };
    constructor(_v0) {
      super(_v0), this.state = {
        isTruncated: !1
      }, this._setOverflowScroll = (0, _v2.default)(this._setOverflowScroll, 200);
    }
    state;
    componentDidMount() {
      this.props.isShowing && this._openModal();
    }
    componentDidUpdate(_v0) {
      this.props.isShowing && !_v0.isShowing ? this._openModal() : !this.props.isShowing && _v0.isShowing ? this._closeModal() : this.props.isShowing && _v0.isShowing && this._resetModal();
    }
    componentWillUnmount() {
      this.props.isShowing && this._closeModal();
    }
    props;
    thisEl;
    scrollDistance;
    ContentOuterDiv;
    ContentInnerDiv;
    modalRef = _v4.default.createRef();
    _bindEvents() {
      window.addEventListener("resize", this._setOverflowScroll);
    }
    _unbindEvents() {
      window.removeEventListener("resize", this._setOverflowScroll);
    }
    _handleModalClose = () => {
      "function" == typeof this.props.onDismiss && this.props.onDismiss();
    };
    _closeModal() {
      this._unbindEvents();
    }
    _openModal() {
      this._setOverflowScroll(), this._bindEvents();
    }
    _resetModal() {
      this._unbindEvents(), this._bindEvents();
    }
    _setOverflowScroll = () => {
      this.ContentOuterDiv instanceof HTMLDivElement && this.ContentInnerDiv instanceof HTMLDivElement && this.setState({
        isTruncated: this.ContentOuterDiv.offsetHeight < this.ContentInnerDiv.offsetHeight
      });
    };
    render() {
      let {
          children: _v0,
          dismissButtonFormat: _v1,
          firstFocusSelector: _v2,
          fullBleed: _v3,
          hideDismissButton: _v4,
          isShowing: _v5,
          modalCloseLabel: _v6,
          modalDescriptionId: _v7,
          modalLabelId: _v8,
          modalTitle: _v9,
          onDismiss: _v10,
          primaryButtonProps: _v11,
          secondaryButtonProps: _v12,
          fluidButtons: _v13,
          size: _v14,
          zIndexStartingPoint: _v15,
          ..._v16
        } = this.props,
        _v17 = (0, _v1.jsxs)(_v24, {
          children: [_v12 && (0, _v1.jsx)(_v25, {
            ..._v12,
            autoWidth: "fluid",
            format: "secondary",
            size: "md"
          }), (0, _v1.jsx)(_v25, {
            ..._v11,
            autoWidth: "fluid",
            format: "primary",
            size: "md"
          })]
        }),
        _v18 = (0, _v1.jsx)(_v26, {
          children: (0, _v1.jsx)(_v10.Header, {
            size: "4",
            id: _v8,
            element: "h2",
            style: {
              margin: 0
            },
            children: (0, _v1.jsx)(_v27, {
              children: _v9
            })
          })
        }),
        _v19 = (0, _v1.jsx)(_v23, {
          children: (0, _v1.jsx)(_v8.Button, {
            onClick: this._handleModalClose,
            format: "basic",
            variant: "minimalTransparent",
            "data-js-modalCloseButton": !0,
            icon: (0, _v1.jsx)(_v9.DismissX, {})
          })
        }),
        _v20 = (0, _v1.jsx)(_v5.Transition, {
          in: _v5,
          timeout: 300,
          mountOnEnter: !0,
          unmountOnExit: !0,
          nodeRef: this.modalRef,
          children: _v0 => (0, _v1.jsxs)(_v21, {
            ref: this.modalRef,
            ..._v16,
            role: "dialog",
            "aria-labelledby": _v8,
            "aria-describedby": _v7,
            modalSize: _v14,
            style: {
              ..._v19[_v0]
            },
            children: [(0, _v1.jsx)(_v22, {
              ref: _v0 => {
                this.ContentOuterDiv = _v0;
              },
              hasActionArea: !!_v11,
              fullBleed: _v3,
              children: (0, _v1.jsxs)("div", {
                ref: _v0 => {
                  this.ContentInnerDiv = _v0;
                },
                children: [_v9 ? _v18 : null, _v0]
              })
            }), _v11 ? _v17 : null, _v10 && !_v4 ? _v19 : null]
          })
        });
      return (0, _v1.jsx)(_v17, {
        backgroundOpacity: "darker",
        firstFocusSelector: _v2,
        onCloseEvent: _v10,
        isOpen: _v5,
        modalPosition: "center",
        modalSpeed: 300,
        noDismiss: !_v10,
        zIndexStartingPoint: _v15,
        children: _v20
      });
    }
  }
  _v0.s(["Modal", 0, _v28], 0);
}