{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10 = _v0.i(0);
  _v0.i(0);
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v12,
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = _v13.default.div.withConfig({
      displayName: "UpsellToast__Toast",
      componentId: "sc-54eeb20d-0"
    })`
  position: absolute;
  right: ${(0, _v19.rem)(16)};
  bottom: ${(0, _v19.rem)(16)};
  padding: ${(0, _v19.rem)(20)};
  border-radius: ${(0, _v19.rem)(6)};
  display: flex;
  z-index: 2;

  ${function ({
      theme: _v0
    }) {
      return "dark" === _v0.name ? _v13.css`
      background-color: ${_v22.bokehTheme.colors.gray["800"]};
      border: 1px solid rgba(255, 255, 255, 0.1);
    ` : _v13.css`
    background-color: ${_v22.bokehTheme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0.5rem 0.5rem 0px;
  `;
    }};
  ${function ({
      isColumn: _v0
    }) {
      return _v0 ? _v13.css`
      width: ${(0, _v19.rem)(320)};
      flex-direction: column;
      align-items: flex-start;
    ` : _v13.css`
    width: auto;
    flex-direction: row;
    align-items: center;
  `;
    }};

  @media screen and (max-width: ${_v0 => (0, _v19.rem)(_v0.mobileBreakpoint)}) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-radius: 0;
    flex-direction: column;
    align-items: flex-start;
  }
`,
    _v27 = (0, _v13.default)(_v25.Header).withConfig({
      displayName: "UpsellToast__Header",
      componentId: "sc-54eeb20d-1"
    })`
  margin: ${_v0 => _v0.hasDescription ? "0.5rem 0" : "0 1.5rem"};

  @media screen and (max-width: ${_v0 => (0, _v19.rem)(_v0.mobileBreakpoint)}) {
    margin: ${_v0 => _v0.hasDescription ? "0.5rem 0" : "1rem 0"};
  }
`,
    _v28 = _v13.default.div.withConfig({
      displayName: "UpsellToast__ButtonsStyled",
      componentId: "sc-54eeb20d-2"
    })`
  display: flex;
  align-items: center;
  width: ${(0, _v19.rem)(280)};

  a {
    text-decoration: none;
  }

  @media screen and (max-width: ${_v0 => (0, _v19.rem)(_v0.mobileBreakpoint)}) {
    width: 100%;
  }
`,
    _v29 = function ({
      title: _v0,
      description: _v1,
      primaryButtonText: _v2,
      primaryButtonHref: _v3,
      primaryButtonIcon: _v4,
      onClickPrimaryButton: _v5,
      secondaryButtonText: _v6,
      secondaryButtonHref: _v7,
      secondaryButtonIcon: _v8,
      onClickSecondaryButton: _v9 = () => {},
      mobileBreakpoint: _v10 = 768,
      impressionTracking: _v11
    }) {
      return (0, _v12.useEffect)(() => {
        _v11 && _v11();
      }, []), (0, _v10.jsxs)(_v26, {
        isColumn: !!_v1,
        mobileBreakpoint: _v10,
        children: [(0, _v10.jsx)(_v27, {
          size: "5",
          hasDescription: !!_v1,
          mobileBreakpoint: _v10,
          children: _v0
        }), !!_v1 && (0, _v10.jsx)(_v24.Paragraph, {
          format: "soft",
          size: "2",
          children: _v1
        }), (0, _v10.jsxs)(_v28, {
          mobileBreakpoint: _v10,
          children: [(0, _v10.jsx)(_v23.Button, {
            element: _v3 ? "a" : "button",
            format: "upsell-new",
            href: _v3,
            icon: _v4 || null,
            onClick: _v5,
            size: "sm",
            style: {
              marginRight: "0.5rem"
            },
            fluid: !0,
            children: _v2
          }), _v6 && (0, _v10.jsx)(_v23.Button, {
            element: _v7 ? "a" : "button",
            format: "secondary",
            href: _v7,
            icon: _v8 || null,
            onClick: _v9,
            size: "sm",
            fluid: !0,
            children: _v6
          })]
        })]
      });
    };
  var _v30 = _v0.i(0),
    _v31 = _v12,
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = _v13.default.div.withConfig({
      displayName: "HiddenAttributes__HiddenAttributesStyled",
      componentId: "sc-c67fead1-0"
    })`
  display: none;
`,
    _v37 = _v0 => {
      let {
        label: _v1,
        labelId: _v2,
        description: _v3,
        descriptionId: _v4
      } = _v0;
      return (0, _v10.jsxs)(_v36, {
        children: [(0, _v10.jsx)("div", {
          id: _v2,
          children: _v1
        }), (0, _v10.jsx)("div", {
          id: _v4,
          children: _v3
        })]
      });
    };
  var _v38 = _v0.i(0);
  let _v39 = _v13.default.div.withConfig({
      displayName: "ModalPlayer__PlayerContentStyled",
      componentId: "sc-7a9fe32e-0"
    })`
  position: relative;
  height: ${_v0 => (0, _v19.rem)(_v0.height)};
  width: ${_v0 => (0, _v19.rem)(_v0.width)};
  background-color: #000;
`,
    _v40 = _v13.default.div.withConfig({
      displayName: "ModalPlayer__PlayerElementStyled",
      componentId: "sc-7a9fe32e-1"
    })`
  width: 100%;
  height: 100%;
  opacity: ${_v0 => +!_v0.isLoading};
  transition: opacity 1ms ease;
`,
    _v41 = _v0 => {
      let {
        config: _v1,
        playerAssetUrls: _v2,
        onPlayerReady: _v3,
        width: _v4,
        height: _v5
      } = _v0;
      return (0, _v10.jsx)(_v38.PlayerManager, {
        configUrl: _v1.url,
        playerAssetUrls: _v2,
        type: _v38.PlayerType.Default,
        children: (0, _v10.jsx)(_v38.Player, {
          configUrl: _v1.url,
          clipId: _v1.id,
          playerId: "lihp_popup_player",
          onReady: _v3,
          children: ({
            element: _v0,
            api: _v1
          }) => (0, _v10.jsx)(_v39, {
            width: _v4,
            height: _v5,
            children: (0, _v10.jsx)(_v40, {
              isLoading: !_v1,
              children: _v0
            })
          })
        })
      });
    },
    _v42 = _v0 => {
      let {
          text: _v1,
          onClick: _v2,
          href: _v3
        } = _v0,
        _v4 = (0, _v10.jsx)(_v46, {
          onClick: _v2,
          element: _v3 ? "span" : "button",
          children: _v1
        });
      return _v3 ? (0, _v10.jsx)("a", {
        href: _v3,
        children: _v4
      }) : _v4;
    },
    _v43 = _v13.default.div.withConfig({
      displayName: "TextContent__TextContentStyled",
      componentId: "sc-4474bf62-0"
    })`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${(0, _v19.rem)(24)};
`,
    _v44 = (0, _v13.default)(_v25.Header).withConfig({
      displayName: "TextContent__TitleStyled",
      componentId: "sc-4474bf62-1"
    })`
  margin-bottom: ${(0, _v19.rem)(14)};
`,
    _v45 = (0, _v13.default)(_v24.Paragraph).withConfig({
      displayName: "TextContent__DescriptionStyled",
      componentId: "sc-4474bf62-2"
    })`
  margin: 0 ${(0, _v19.rem)(36)} ${(0, _v19.rem)(18)} ${(0, _v19.rem)(36)};

  @media screen and (max-width: ${(0, _v19.rem)(768)}) {
    margin: 0 0 ${(0, _v19.rem)(18)} 0;
  }
`,
    _v46 = (0, _v13.default)(_v23.Button).withConfig({
      displayName: "TextContent__PrimaryButtonStyled",
      componentId: "sc-4474bf62-3"
    })``,
    _v47 = _v0 => {
      let {
        title: _v1,
        description: _v2,
        ctaText: _v3,
        onClickCta: _v4,
        ctaHref: _v5
      } = _v0;
      return (0, _v10.jsxs)(_v43, {
        children: [_v1 && (0, _v10.jsx)(_v44, {
          size: "4",
          children: _v1
        }), _v2 && (0, _v10.jsx)(_v45, {
          size: "2",
          children: _v2
        }), _v3 && (0, _v10.jsx)(_v42, {
          text: _v3,
          onClick: _v4,
          href: _v5
        })]
      });
    },
    _v48 = "video_modal_label",
    _v49 = "video_modal_description";
  class _v50 extends _v31.default.Component {
    player = null;
    state;
    constructor(_v0) {
      super(_v0);
      const {
        height: _v1,
        width: _v2
      } = this.getPlayerDimensions();
      this.state = {
        isMouseOver: !1,
        playerWidth: _v2,
        playerHeight: _v1
      };
    }
    componentDidMount() {
      window.addEventListener("resize", this.handleResize), this.props.isShowing && this.props.onShow && this.props.onShow();
    }
    componentDidUpdate(_v0) {
      !_v0.isShowing && this.props.isShowing && this.props.onShow && this.props.onShow(), !_v0.config && this.props.config && this.resizePlayer();
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
    resizePlayer = () => {
      let {
        width: _v0,
        height: _v1
      } = this.getPlayerDimensions();
      this.setState({
        playerWidth: _v0,
        playerHeight: _v1
      });
    };
    handleResize = (0, _v30.default)(this.resizePlayer, 300);
    showControls = () => {
      this.player && this.player._setControlbarVisibility(!0), this.setState({
        isMouseOver: !0
      });
    };
    hideControls = () => {
      this.player && !this.player.paused && this.player._setControlbarVisibility(!1), this.setState({
        isMouseOver: !1
      });
    };
    initializePlayer = _v0 => {
      this.player = _v0, this.player._overrideControlbarBehavior(!0), this.player._setControlbarVisibility(!1);
    };
    getPlayerDimensions = () => {
      let _v0,
        _v1,
        {
          videoOnly: _v2 = !0
        } = this.props,
        {
          config: _v3,
          maxHeight: _v4 = 700,
          maxWidth: _v5 = _v2 ? 700 : 560
        } = this.props;
      if (!_v3) return {
        height: 0,
        width: 0
      };
      if (_v3.aspectRatio > 1) {
        let _v0 = window.innerWidth - 72;
        _v0 = (_v1 = _v5 > _v0 ? _v0 : _v5) / _v3.aspectRatio;
      } else {
        let _v0 = window.innerHeight - 72;
        _v1 = (_v0 = _v4 > _v0 ? _v0 : _v4) * _v3.aspectRatio;
      }
      return {
        height: _v0,
        width: _v1
      };
    };
    render() {
      let {
        isShowing: _v0,
        config: _v1,
        playerAssetUrls: _v2,
        hiddenLabel: _v3,
        hiddenDescription: _v4,
        dismissButtonFormat: _v5 = "secondary",
        onDismiss: _v6,
        videoOnly: _v7 = !0,
        title: _v8,
        description: _v9,
        ctaText: _v10,
        onClickCta: _v11,
        ctaHref: _v12
      } = this.props;
      return _v1 ? (0, _v10.jsx)(_v13.ThemeProvider, {
        theme: _v35.themes.light,
        children: (0, _v10.jsxs)(_v32.Modal, {
          firstFocusSelector: "lihp_popup_player",
          modalLabelId: _v48,
          modalDescriptionId: _v49,
          modalCloseLabel: (0, _v33.translate)({
            singular: "Close",
            dictionary: {
              es: {
                singular: "Cerrar"
              },
              "de-DE": {
                singular: "Schließen"
              },
              "fr-FR": {
                singular: "Fermer "
              },
              "ja-JP": {
                singular: "閉じる"
              },
              "ko-KR": {
                singular: "닫기"
              },
              "pt-BR": {
                singular: "Fechar"
              },
              "zh-CN": {
                singular: "关闭"
              }
            }
          }),
          isShowing: _v0,
          onDismiss: _v6,
          size: "fluid",
          hideDismissButton: !0,
          fullBleed: !0,
          children: [(0, _v10.jsxs)(_v51, {
            width: this.state.playerWidth,
            children: [(0, _v10.jsxs)(_v52, {
              onMouseEnter: this.showControls,
              onMouseLeave: this.hideControls,
              children: [(0, _v10.jsx)(_v41, {
                onPlayerReady: this.initializePlayer,
                height: this.state.playerHeight,
                width: this.state.playerWidth,
                config: _v1,
                playerAssetUrls: _v2
              }), this.state.isMouseOver && (0, _v10.jsx)(_v53, {
                icon: (0, _v10.jsx)(_v34.DismissX, {}),
                format: _v5,
                size: "md",
                onClick: _v6
              })]
            }), !_v7 && (0, _v10.jsx)(_v47, {
              title: _v8,
              description: _v9,
              ctaText: _v10,
              ctaHref: _v12,
              onClickCta: _v11
            })]
          }), (0, _v10.jsx)(_v37, {
            label: _v3,
            labelId: _v48,
            description: _v4,
            descriptionId: _v49
          })]
        })
      }) : null;
    }
  }
  let _v51 = _v13.default.div.withConfig({
      displayName: "VideoModal__ModalContentStyled",
      componentId: "sc-12f3baa4-0"
    })`
  display: flex;
  flex-direction: column;
  max-width: ${_v0 => (0, _v19.rem)(_v0.width)};
`,
    _v52 = _v13.default.div.withConfig({
      displayName: "VideoModal__PlayerAreaStyled",
      componentId: "sc-12f3baa4-1"
    })`
  position: relative;
`,
    _v53 = (0, _v13.default)(_v23.Button).withConfig({
      displayName: "VideoModal__CloseButtonStyled",
      componentId: "sc-12f3baa4-2"
    })`
  position: absolute;
  top: ${(0, _v19.rem)(12)};
  right: ${(0, _v19.rem)(12)};
  z-index: 5;
`;
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = (0, _v12.forwardRef)(function (_v0, _v1) {
      return _v12.default.createElement("svg", (0, _v63.c)({
        viewBox: "0 0 16.48 16.48",
        ref: _v1
      }, _v0), _v12.default.createElement("path", {
        d: "M12.48 9.24a1 1 0 0 1-.71-1.71l2.12-2.12a2.001 2.001 0 0 0-2.83-2.83L8.95 4.7a1 1 0 0 1-1.41-1.41l2.12-2.12a4.002 4.002 0 0 1 5.66 5.66L13.2 8.95a1 1 0 0 1-.72.29zM4 16.48a4 4 0 0 1-2.83-6.83l2.12-2.12A1 1 0 0 1 4.7 8.94l-2.12 2.13a2.001 2.001 0 0 0 2.83 2.83l2.12-2.12a1 1 0 0 1 1.41 1.41l-2.12 2.12A4 4 0 0 1 4 16.48z",
        fill: "#1a2e3b"
      }), _v12.default.createElement("path", {
        d: "M6.83 10.65a1 1 0 0 1-.71-1.71l2.83-2.83a1 1 0 1 1 1.41 1.41l-2.83 2.83a1 1 0 0 1-.7.3z",
        fill: "#1a2e3b"
      }));
    }),
    _v65 = _v0.i(0);
  let _v66 = (_v0, _v1) => _v0.length > _v1 ? `${_v0.substring(0, _v1)}...` : _v0,
    _v67 = _v0 => {
      let _v1 = {
        shortFilename: _v66(_v0.file_name, 26),
        ..._v0
      };
      return _v0.username && (_v1.shortUsername = _v66(_v0.username, 30)), _v1;
    };
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  function _v73({
    created_on: _v0,
    disabled: _v1,
    id: _v2,
    is_transcoding: _v3,
    onClick: _v4,
    selectedVersion: _v5,
    shortFilename: _v6,
    title: _v7,
    reviewModes: _v8,
    ..._v9
  }) {
    let _v10 = _v2 === _v5.id;
    return (0, _v10.jsxs)(_v75, {
      ariaLabel: _v7,
      onClick: _v4,
      selected: _v10,
      disabled: _v1,
      reviewModes: _v8,
      ..._v9,
      children: [_v10 && (0, _v10.jsx)(_v72.Checkmark, {
        style: {
          marginRight: "1rem"
        }
      }), !_v10 && _v3 && (0, _v10.jsx)(_v71.Spinner, {
        style: {
          marginRight: "1rem"
        }
      }), (0, _v10.jsxs)("div", {
        children: [_v6, (0, _v10.jsx)(_v74, {
          children: _v3 ? "Transcoding" : function (_v0) {
            let _v1 = _v79(_v0),
              _v2 = new Date(Date.now()),
              _v3 = new Date(_v1),
              _v4 = _v3.toLocaleDateString(void 0, {
                month: "long",
                day: "numeric",
                year: "numeric"
              }),
              _v5 = _v3.toLocaleTimeString(void 0, {
                hour: "numeric",
                minute: "numeric"
              }),
              _v6 = _v77(_v2, _v3);
            if (_v6 <= 1) return `${0 === _v6 ? (0, _v33.translate)({
              singular: "Today",
              dictionary: {
                es: {
                  singular: "Hoy"
                },
                "de-DE": {
                  singular: "Heute"
                },
                "fr-FR": {
                  singular: "Aujourd'hui"
                },
                "ja-JP": {
                  singular: "今日"
                },
                "ko-KR": {
                  singular: "오늘"
                },
                "pt-BR": {
                  singular: "Hoje"
                },
                "zh-CN": {
                  singular: "今天"
                }
              }
            }) : (0, _v33.translate)({
              singular: "Yesterday",
              dictionary: {
                es: {
                  singular: "Ayer"
                },
                "de-DE": {
                  singular: "Gestern"
                },
                "fr-FR": {
                  singular: "Hier"
                },
                "ja-JP": {
                  singular: "昨日"
                },
                "ko-KR": {
                  singular: "어제"
                },
                "pt-BR": {
                  singular: "Ontem"
                },
                "zh-CN": {
                  singular: "昨天"
                }
              }
            })} ${_v5}`;
            if (!_v78(_v2, _v3)) return `${_v4} ${_v5}`;
            {
              let _v0 = _v3.toLocaleDateString(void 0, {
                weekday: "long"
              });
              return `Last ${_v0} ${_v5}`;
            }
          }(_v0)
        })]
      })]
    });
  }
  let _v74 = _v13.default.span.withConfig({
      displayName: "VersionItem__Subtext",
      componentId: "sc-e73b56a8-0"
    })`
  display: block;
  color: #919fa9;
  opacity: 0.8;
`,
    _v75 = _v13.default.div.withConfig({
      displayName: "VersionItem__VersionStyled",
      componentId: "sc-e73b56a8-1"
    })`
  display: flex;
  width: 100%;
  position: relative;
  padding: 1rem 1.5rem;
  overflow: hidden;
  align-items: center;
  border-radius: 0.5rem;
  color: ${_v0 => _v0.selected ? (0, _v19.rgba)(_v0.theme.content.color, 1) : (0, _v19.rgba)(_v0.theme.content.color, .75)};
  font-weight: ${_v0 => _v0.selected ? "700" : "400"};
  letter-spacing: ${_v0 => _v0.selected ? "0" : "0.015rem"};
  line-height: 1.5em;
  text-overflow: ellipsis;
  transition: 100ms ease-in-out;
  cursor: pointer;
  ${function ({
      theme: _v0
    }) {
      return "dark" === _v0.name ? _v13.css`
      border: 1px solid ${(0, _v19.rgba)(_v54.white, 0)};
      &:hover {
        border: 1px solid ${(0, _v19.rgba)(_v54.white, .25)};
      }
    ` : _v13.css`
    box-shadow:
      0 0 0 0 rgba(0, 0, 0, 0),
      0 0 0 0 rgba(0, 0, 0, 0);
    &:hover {
      box-shadow:
        0.1rem 0 0.1rem -0.1rem rgba(0, 0, 0, 0.15),
        0.1rem 0.15rem 0.4rem -0.3rem rgba(0, 0, 0, 0.15);
    }
  `;
    }};

  font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;

  svg {
    width: 1.5rem;
    * {
      fill: ${(0, _v54.blue)(500)};
    }
  }

  &:hover {
    color: ${_v0 => _v0.theme.formats.primary};
    transform: translateX(0.25rem) scale(1.01);
    background: linear-gradient(
      to right,
      ${_v0 => _v0.theme.content.background},
      ${_v0 => (0, _v19.mix)(.05, _v0.theme.formats.primary, _v0.theme.content.background)}
    );
  }
`,
    _v76 = _v0 => {
      let _v1 = new Date(Date.UTC(_v0.getFullYear(), _v0.getMonth(), _v0.getDate()));
      _v1.setUTCDate(_v1.getUTCDate() + 4 - (_v1.getUTCDay() || 7));
      let _v2 = new Date(Date.UTC(_v0.getUTCFullYear(), 0, 1));
      return Math.ceil(((_v1.getTime() - _v2.getTime()) / 0 + 1) / 7);
    },
    _v77 = (_v0, _v1) => (_v0.setHours(0, 0, 0, 0), _v1.setHours(0, 0, 0, 0), (_v0.getTime() - _v1.getTime()) / 0),
    _v78 = (_v0, _v1) => _v0.getFullYear() === _v1.getFullYear() && _v76(_v0) - _v76(_v1) == 1,
    _v79 = _v0 => _v0.replace(RegExp(/-/, "g"), "/"),
    _v80 = _v13.default.div.withConfig({
      displayName: "VersionsDropdown__Versions",
      componentId: "sc-6dd80b80-0"
    })`
  background: ${_v0 => _v0.theme.content.background};
  border-radius: 0.5rem;
  overflow-y: auto;
  max-height: calc(100vh - ${(0, _v19.rem)(140)});
`,
    _v81 = _v13.default.div.withConfig({
      displayName: "VersionsDropdown__VersionsDropdownStyled",
      componentId: "sc-6dd80b80-1"
    })`
  @media screen and (max-width: ${(0, _v19.rem)(768)}) {
    display: none;
    margin: 0;
  }
`,
    _v82 = (0, _v13.default)(_v68.ChevronDown).withConfig({
      displayName: "VersionsDropdown__ChevronDownStyled",
      componentId: "sc-6dd80b80-2"
    })`
  transform: ${_v0 => _v0.isFlipped ? "scaleY(-1)" : "none"};
`;
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = "MODAL_PRODUCT_VIDEO",
    _v86 = "MODAL_SHARING_UPSELL",
    _v87 = "MODAL_MINIMAL_UPSELL",
    _v88 = {
      [_v14.Page.Review]: (0, _v33.translate)({
        singular: "Review",
        dictionary: {
          es: {
            singular: "Revisar"
          },
          "de-DE": {
            singular: "Überprüfung"
          },
          "fr-FR": {
            singular: "Révision"
          },
          "ja-JP": {
            singular: "レビュー"
          },
          "ko-KR": {
            singular: "리뷰"
          },
          "pt-BR": {
            singular: "Revisar"
          },
          "zh-CN": {
            singular: "审阅"
          }
        }
      }),
      [_v14.Page.Home]: (0, _v33.translate)({
        singular: "Home",
        dictionary: {
          es: {
            singular: "Inicio"
          },
          "de-DE": {
            singular: "Startseite"
          },
          "fr-FR": {
            singular: "Accueil"
          },
          "ja-JP": {
            singular: "ホーム"
          },
          "ko-KR": {
            singular: "홈"
          },
          "pt-BR": {
            singular: "Página Inicial"
          },
          "zh-CN": {
            singular: "主页"
          }
        }
      }),
      [_v14.Page.VideoManager]: (0, _v33.translate)({
        singular: "Library",
        dictionary: {
          es: {
            singular: "Biblioteca"
          },
          "de-DE": {
            singular: "Bibliothek"
          },
          "fr-FR": {
            singular: "Bibliothèque"
          },
          "ja-JP": {
            singular: "ライブラリ"
          },
          "ko-KR": {
            singular: "라이브러리"
          },
          "pt-BR": {
            singular: "Biblioteca"
          },
          "zh-CN": {
            singular: "视频库"
          }
        }
      }),
      [_v14.Page.Video]: (0, _v33.translate)({
        singular: "Video",
        dictionary: {
          "fr-FR": {
            singular: "Vidéo"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeo"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      [_v14.Page.Settings]: (0, _v33.translate)({
        singular: "Settings",
        dictionary: {
          es: {
            singular: "Configuración"
          },
          "de-DE": {
            singular: "Einstellungen"
          },
          "fr-FR": {
            singular: "Paramètres"
          },
          "ja-JP": {
            singular: "設定"
          },
          "ko-KR": {
            singular: "설정"
          },
          "pt-BR": {
            singular: "Configurações"
          },
          "zh-CN": {
            singular: "设置"
          }
        }
      }),
      [_v14.Page.Upload]: (0, _v33.translate)({
        singular: "Upload",
        dictionary: {
          es: {
            singular: "Subir"
          },
          "de-DE": {
            singular: "Hochladen"
          },
          "fr-FR": {
            singular: "Importer"
          },
          "ja-JP": {
            singular: "アップロード"
          },
          "ko-KR": {
            singular: "업로드"
          },
          "pt-BR": {
            singular: "Carregar"
          },
          "zh-CN": {
            singular: "上传"
          }
        }
      })
    },
    _v89 = (0, _v13.default)(_v83.ChevronRight).withConfig({
      displayName: "Breadcrumbs__ChevronStyled",
      componentId: "sc-cdde352d-0"
    })`
  width: ${(0, _v19.rem)(25)};
  margin: 0;
  margin-right: ${(0, _v19.rem)(8)};
  flex-shrink: 0;
  transform: scaleX(-1);

  path {
    fill: ${(0, _v54.slate)(500)};
    transition: fill 100ms ease;
  }

  @media screen and (max-width: ${(0, _v19.rem)(768)}) {
    width: ${(0, _v19.rem)(36)};

    path {
      fill: ${_v54.white};
    }
  }
`,
    _v90 = _v13.default.div.withConfig({
      displayName: "Breadcrumbs__BreadcrumbsStyled",
      componentId: "sc-cdde352d-1"
    })`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 0 1 auto;
`,
    _v91 = _v13.default.div.withConfig({
      displayName: "DisabledClickOverlay__DisabledClickOverlayStyled",
      componentId: "sc-bebc963d-0"
    })`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 10;
`,
    _v92 = () => (0, _v10.jsx)(_v91, {});
  var _v93 = _v12,
    _v94 = _v0.i(0);
  class _v95 extends _v93.default.Component {
    componentDidMount() {
      this.props.onMount && this.props.onMount();
    }
    render() {
      let {
        allowDownloads: _v0,
        toggleAllowDownloads: _v1
      } = this.props;
      return (0, _v10.jsx)(_v97, {
        format: "primary",
        children: (0, _v10.jsxs)(_v98, {
          children: [(0, _v10.jsx)(_v100, {
            size: "2",
            children: (0, _v33.translate)({
              singular: "To share this file, allow downloads for this video.",
              dictionary: {
                es: {
                  singular: "Para compartir este archivo, permite las descargas de este video."
                },
                "de-DE": {
                  singular: "Lasse Downloads für dieses Video zu, um diese Datei zu teilen."
                },
                "fr-FR": {
                  singular: "Pour partager ce fichier, autorisez les téléchargements pour cette vidéo."
                },
                "ja-JP": {
                  singular: "このファイルを共有するには動画のダウンロードを許可してください。"
                },
                "ko-KR": {
                  singular: "이 파일을 공유하려면 동영상 다운로드를 허용하세요."
                },
                "pt-BR": {
                  singular: "Para compartilhar este arquivo, autorize o download deste vídeo."
                },
                "zh-CN": {
                  singular: "要分享此文件，请允许下载此视频。"
                }
              }
            })
          }), (0, _v10.jsx)(_v99, {
            children: (0, _v10.jsx)("span", {
              onClick: _v1,
              children: (0, _v10.jsx)(_v62.Toggle, {
                label: (0, _v33.translate)({
                  singular: "Allow downloads",
                  dictionary: {
                    es: {
                      singular: "Permitir las descargas"
                    },
                    "de-DE": {
                      singular: "Downloads zulassen"
                    },
                    "fr-FR": {
                      singular: "Autoriser les téléchargements"
                    },
                    "ja-JP": {
                      singular: "ダウンロードを許可"
                    },
                    "ko-KR": {
                      singular: "다운로드 허용"
                    },
                    "pt-BR": {
                      singular: "Permitir downloads"
                    },
                    "zh-CN": {
                      singular: "允许下载"
                    }
                  }
                }),
                name: "allowDownloads",
                id: "download_toggle",
                size: "lg",
                theme: _v35.themes.dark,
                checked: _v0,
                value: "1"
              })
            })
          })]
        })
      });
    }
  }
  let _v96 = (_v0, ..._v1) => _v13.css`
  @media screen and (max-width: ${(0, _v19.rem)(0)}) {
    ${(0, _v13.css)(_v0, ..._v1)}
  }
`,
    _v97 = (0, _v13.default)(_v94.Notice).withConfig({
      displayName: "DisabledDownloadsNotification__NoticeNeutralStyled",
      componentId: "sc-f929bb48-0"
    })`
  background-color: ${(0, _v54.slate)(800)};
  margin-bottom: 0;
  padding-right: ${(0, _v19.rem)(16)};

  ${_v96`
        margin: ${(0, _v19.rem)(10)};
        position: fixed;
        bottom: 0;
        z-index: 20;
        width: auto;
        left: 0;
        right: 0;
    `}
`,
    _v98 = _v13.default.div.withConfig({
      displayName: "DisabledDownloadsNotification__EnableDownloadContentStyled",
      componentId: "sc-f929bb48-1"
    })`
  display: flex;
  justify-content: space-between;

  > * + * {
    margin-left: ${(0, _v19.rem)(16)};

    ${_v96`
            margin-left: 0;
        `}
  }

  ${_v96`
        flex-direction: column;
    `}
`,
    _v99 = _v13.default.div.withConfig({
      displayName: "DisabledDownloadsNotification__ToggleWrapperStyled",
      componentId: "sc-f929bb48-2"
    })`
  margin-left: ${(0, _v19.rem)(32)};

  ${_v96`
        margin-left: 0;
        margin-top: ${(0, _v19.rem)(16)};
    `}

  * {
    font-weight: bold;
    margin-bottom: 0;
  }
`,
    _v100 = (0, _v13.default)(_v24.Paragraph).withConfig({
      displayName: "DisabledDownloadsNotification__ParagraphStyled",
      componentId: "sc-f929bb48-3"
    })`
  color: ${_v54.white};
`,
    _v101 = (0, _v60.rem)(64),
    _v102 = (0, _v60.rem)(78),
    _v103 = _v13.css`
  height: ${_v101};

  @media screen and (max-width: ${(0, _v60.rem)(768)}) {
    height: ${_v102};
  }
`,
    _v104 = _v13.default.div.withConfig({
      displayName: "CreatorNav__CreatorNavStyled",
      componentId: "sc-3b8b524-0"
    })`
  ${_v103}
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 ${(0, _v60.rem)(16)};
  background-color: ${_v54.black};
  flex-shrink: 0;
  flex-wrap: nowrap;
`,
    _v105 = _v13.default.div.withConfig({
      displayName: "CreatorNav__LeftSectionStyled",
      componentId: "sc-3b8b524-1"
    })`
  ${_v103}
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,
    _v106 = (0, _v13.default)(function ({
      selectedVersion: _v0,
      onChange: _v1 = () => {},
      options: _v2 = [],
      reviewModes: _v3 = !1,
      ..._v4
    }) {
      let [_v5, _v6] = (0, _v12.useState)({
          isMenuOpen: !1
        }),
        _v7 = () => _v6(_v0 => ({
          ..._v0,
          isMenuOpen: !1
        })),
        _v8 = (0, _v10.jsxs)(_v80, {
          children: [(0, _v10.jsx)(_v70.Pop.Header, {
            children: (0, _v33.translate)({
              singular: "Version history",
              dictionary: {
                es: {
                  singular: "Historial de versiones"
                },
                "de-DE": {
                  singular: "Versionshistorie"
                },
                "fr-FR": {
                  singular: "Historique des versions"
                },
                "ja-JP": {
                  singular: "バージョン履歴"
                },
                "ko-KR": {
                  singular: "버전 기록"
                },
                "pt-BR": {
                  singular: "Histórico de versões"
                },
                "zh-CN": {
                  singular: "版本历史"
                }
              }
            })
          }), _v2.map(_v0 => (0, _v10.jsx)(_v73, {
            onClick: () => !_v0.is_transcoding && void (_v7(), _v1(_v0)),
            selectedVersion: _v0,
            reviewModes: !0,
            ..._v0
          }))]
        });
      return (0, _v10.jsx)(_v81, {
        ..._v4,
        children: (0, _v10.jsx)(_v69.PopOver, {
          attach: [[100, 0], [0, 0]],
          content: _v8,
          onClick: () => _v6(_v0 => ({
            ..._v0,
            isMenuOpen: !_v0.isMenuOpen
          })),
          onClose: _v7,
          style: {
            width: "20rem"
          },
          children: (0, _v10.jsx)(_v23.Button, {
            fluid: !0,
            format: "secondary",
            icon: (0, _v10.jsx)(_v82, {
              isFlipped: _v5.isMenuOpen
            }),
            iconPosition: "right",
            size: _v3 ? "sm" : "md",
            children: _v0.shortFilename
          })
        })
      });
    }).withConfig({
      displayName: "CreatorNav__VersionsDropdownStyled",
      componentId: "sc-3b8b524-2"
    })`
  @media screen and (max-width: ${(0, _v60.rem)(768)}) {
    display: flex;
  }
`,
    _v107 = _v13.default.div.withConfig({
      displayName: "CreatorNav__RightSectionStyled",
      componentId: "sc-3b8b524-3"
    })`
  ${_v103}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding-left: ${(0, _v60.rem)(4)}; /* Don't chop the toggle */
  margin-left: ${(0, _v60.rem)(16)};
  opacity: ${_v0 => _v0.disabled ? .5 : 1};
`,
    _v108 = _v13.default.div.withConfig({
      displayName: "CreatorNav__WrapPlaceholderStyled",
      componentId: "sc-3b8b524-4"
    })`
  ${_v103};
`,
    _v109 = _v13.default.div.withConfig({
      displayName: "CreatorNav__RightSectionInnerStyled",
      componentId: "sc-3b8b524-5"
    })`
  ${_v103};
  display: flex;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-items: center;
`,
    _v110 = _v13.default.div.withConfig({
      displayName: "CreatorNav__LogoToggleWrapperStyled",
      componentId: "sc-3b8b524-6"
    })`
  margin-right: ${(0, _v60.rem)(20)};

  * {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${(0, _v60.rem)(768)}) {
    display: none;
  }
`,
    _v111 = _v13.css`
  display: inline;
  color: ${_v54.white};
  background-color: ${(0, _v54.grayscale)(800)};
  transition: background-color 100ms ease;
  border: none;
  height: ${(0, _v60.rem)(40)};

  &:hover {
    background-color: ${(0, _v19.darken)(.02, (0, _v54.grayscale)(800))};
  }

  &:active {
    background-color: ${(0, _v19.darken)(.04, (0, _v54.grayscale)(800))};
  }

  &:disabled {
    background-color: ${(0, _v54.grayscale)(800)} !important;
    opacity: 0.6;

    &:hover,
    &:active {
      background-color: ${(0, _v54.grayscale)(800)} !important;
    }
  }
`,
    _v112 = (0, _v13.default)(_v23.Button).withConfig({
      displayName: "CreatorNav__CopyLinkButtonStyled",
      componentId: "sc-3b8b524-7"
    })`
  ${_v111}

  @media screen and (max-width: ${(0, _v60.rem)(768)}) {
    display: none;
  }
`,
    _v113 = (0, _v13.default)(_v23.Button).withConfig({
      displayName: "CreatorNav__MobileCopyLinkButtonStyled",
      componentId: "sc-3b8b524-8"
    })`
  ${_v111}

  display: none;

  @media screen and (max-width: ${(0, _v60.rem)(768)}) {
    display: flex;
    width: ${(0, _v60.rem)(50)};
    height: ${(0, _v60.rem)(50)};
  }
`,
    _v114 = (0, _v13.default)(_v0 => {
      let {
        text: _v1,
        url: _v2,
        onClick: _v3,
        className: _v4
      } = _v0;
      return (0, _v10.jsxs)(_v90, {
        className: _v4,
        id: "breadcrumbs",
        onClick: () => _v3(_v2),
        children: [(0, _v10.jsx)(_v89, {}), (0, _v10.jsx)(_v84.Link, {
          variant: "minimal",
          href: _v2,
          children: _v1
        })]
      });
    }).withConfig({
      displayName: "CreatorNav__BreadcrumbsStyled",
      componentId: "sc-3b8b524-9"
    })`
  margin-right: ${(0, _v60.rem)(20)};
`,
    _v115 = _v0 => {
      let {
          copyLink: _v1,
          toggleLogo: _v2,
          toggleAllowDownloads: _v3,
          initialAllowDownloads: _v4,
          isClipReady: _v5,
          disabled: _v6,
          showLogo: _v7,
          versions: _v8,
          selectedVersion: _v9,
          switchVersion: _v10,
          isDemo: _v11,
          breadcrumb: _v12,
          onShowDownloadToggle: _v13,
          onClickBreadcrumb: _v14,
          hasTeamLogo: _v15
        } = _v0,
        {
          contentSpaceEnabled: _v16
        } = (0, _v61.useContentSpaceEnabled)(),
        _v17 = _v16 ? (0, _v33.translate)({
          singular: "Team library",
          dictionary: {
            es: {
              singular: "Biblioteca del equipo"
            },
            "de-DE": {
              singular: "Teambibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque de l'équipe"
            },
            "ja-JP": {
              singular: "チームライブラリ"
            },
            "ko-KR": {
              singular: "팀 라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca da equipe"
            },
            "zh-CN": {
              singular: "团队视频库"
            }
          }
        }) : (0, _v33.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }),
        _v18 = _v12?.page === _v14.Page.VideoManager ? _v17 : _v88[_v12 ? _v12.page : _v14.Page.Home];
      return (0, _v10.jsxs)(_v104, {
        id: "creator-nav",
        children: [(0, _v10.jsxs)(_v105, {
          children: [(0, _v10.jsx)(_v114, {
            text: _v18,
            url: _v12 ? _v12.url : "/",
            onClick: _v14
          }), _v8.length > 1 && _v9 && (0, _v10.jsx)(_v106, {
            onChange: _v10,
            options: _v8,
            selectedVersion: _v9,
            reviewModes: !0
          }), !_v4 && (0, _v10.jsx)(_v95, {
            allowDownloads: !_v6,
            toggleAllowDownloads: _v3,
            onMount: _v13
          })]
        }), (0, _v10.jsxs)(_v107, {
          disabled: _v6,
          children: [(0, _v10.jsx)(_v108, {}), (0, _v10.jsxs)(_v109, {
            children: [(0, _v10.jsx)(_v110, {
              children: (0, _v10.jsx)(_v62.Toggle, {
                label: _v15 ? (0, _v33.translate)({
                  singular: "Hide logo",
                  dictionary: {
                    es: {
                      singular: "Ocultar el logo"
                    },
                    "de-DE": {
                      singular: "Logo ausblenden"
                    },
                    "fr-FR": {
                      singular: "Masquer le logo"
                    },
                    "ja-JP": {
                      singular: "ロゴを隠す"
                    },
                    "ko-KR": {
                      singular: "로고 숨기기"
                    },
                    "pt-BR": {
                      singular: "Ocultar logo"
                    },
                    "zh-CN": {
                      singular: "隐藏徽标"
                    }
                  }
                }) : (0, _v33.translate)({
                  singular: "Hide Vimeo logo",
                  dictionary: {
                    es: {
                      singular: "Ocultar el logotipo de Vimeo"
                    },
                    "de-DE": {
                      singular: "Video-Logo ausblenden"
                    },
                    "fr-FR": {
                      singular: "Masquer le logo Vimeo"
                    },
                    "ja-JP": {
                      singular: "Vimeoのロゴを非表示にする"
                    },
                    "ko-KR": {
                      singular: "Vimeo 로고 숨기기"
                    },
                    "pt-BR": {
                      singular: "Ocultar o logotipo do Vimeo"
                    },
                    "zh-CN": {
                      singular: "隐藏 Vimeo 徽标"
                    }
                  }
                }),
                name: "toggleLogo",
                id: "toggle_logo",
                size: "lg",
                theme: _v35.themes.dark,
                onChange: _v2,
                checked: !_v7,
                value: ""
              })
            }), _v11 ? (0, _v10.jsxs)(_v10.Fragment, {
              children: [(0, _v10.jsx)(_v65.UpgradeButton, {
                size: "sm",
                onClick: _v1,
                tracking: {
                  upsell_feature_category: "file_transfer_send_file",
                  upsell_specific_feature: "file_transfer_send_file",
                  upsell_badge_location: "send_file_copy_link"
                },
                modalConfig: _v59.includedInAllPlansModalConfig,
                display: {
                  base: "none",
                  md: "inline"
                },
                height: (0, _v60.rem)(40),
                children: (0, _v33.translate)({
                  singular: "Upgrade to copy link",
                  dictionary: {
                    es: {
                      singular: "Adquiera un plan superior para copiar el enlace"
                    },
                    "de-DE": {
                      singular: "Upgrade durchführen, um den Link zu kopieren"
                    },
                    "fr-FR": {
                      singular: "Mettez votre compte à niveau pour copier le lien"
                    },
                    "ja-JP": {
                      singular: "アップグレードしてリンクをコピー"
                    },
                    "ko-KR": {
                      singular: "링크를 복사하려면 업그레이드하세요."
                    },
                    "pt-BR": {
                      singular: "Faça upgrade para copiar o link"
                    },
                    "zh-CN": {
                      singular: "升级以复制链接"
                    }
                  }
                })
              }), (0, _v10.jsx)(_v65.UpgradeButton, {
                size: "md",
                onClick: _v1,
                tracking: {
                  upsell_feature_category: "file_transfer_send_file",
                  upsell_specific_feature: "file_transfer_send_file",
                  upsell_badge_location: "send_file_copy_link"
                },
                modalConfig: _v59.includedInAllPlansModalConfig,
                display: {
                  base: "flex",
                  md: "none"
                },
                width: (0, _v60.rem)(50),
                height: (0, _v60.rem)(50),
                children: (0, _v33.translate)({
                  singular: "Upgrade",
                  dictionary: {
                    es: {
                      singular: "Actualizar"
                    },
                    "de-DE": {
                      singular: "Upgraden"
                    },
                    "fr-FR": {
                      singular: "Mettre à niveau"
                    },
                    "ja-JP": {
                      singular: "アップグレード"
                    },
                    "ko-KR": {
                      singular: "업그레이드"
                    },
                    "zh-CN": {
                      singular: "升级"
                    }
                  }
                })
              })]
            }) : (0, _v10.jsxs)(_v10.Fragment, {
              children: [(0, _v10.jsx)(_v112, {
                size: "sm",
                onClick: _v1,
                format: "secondary",
                theme: _v35.themes.dark,
                disabled: !_v5,
                children: (0, _v33.translate)({
                  singular: "Copy link",
                  dictionary: {
                    es: {
                      singular: "Copiar vínculo"
                    },
                    "de-DE": {
                      singular: "Link kopieren"
                    },
                    "fr-FR": {
                      singular: "Copier le lien"
                    },
                    "ja-JP": {
                      singular: "リンクをコピー"
                    },
                    "ko-KR": {
                      singular: "링크 복사"
                    },
                    "pt-BR": {
                      singular: "Copiar link"
                    },
                    "zh-CN": {
                      singular: "复制链接"
                    }
                  }
                })
              }), (0, _v10.jsx)(_v113, {
                size: "md",
                onClick: _v1,
                format: "secondary",
                theme: _v35.themes.dark,
                disabled: !_v5,
                icon: (0, _v10.jsx)(_v64, {})
              })]
            })]
          }), _v6 && (0, _v10.jsx)(_v92, {})]
        })]
      });
    };
  var _v116 = _v0.i(0);
  let _v117 = _v13.default.div.withConfig({
    displayName: "SlideDownBanner__SlideDownBannerStyled",
    componentId: "sc-b02ed19f-0"
  })`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(0, _v19.rem)(8)} ${(0, _v19.rem)(24)};
  background-color: ${(0, _v54.violet)(400)};
  color: white;
  width: 100%;
  flex-shrink: 0;
  text-align: center;

  p {
    margin-bottom: 0;
    font-weight: 700;
    font-size: ${(0, _v19.rem)(14)};
  }
`;
  (0, _v13.default)(_v84.Link).withConfig({
    displayName: "SlideDownBanner__SlideDownBannerCta",
    componentId: "sc-b02ed19f-1"
  })`
  * {
    color: white;
  }

  &:hover {
    * {
      color: ${(0, _v54.slate)(100)};
    }
  }
`;
  let _v118 = _v13.createGlobalStyle`
  .banner-slidein {
    animation-duration: 200ms;
    animation-name: banner-slidein;
  }
  @keyframes banner-slidein {
    from {
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`,
    _v119 = _v0 => {
      let {
        children: _v1,
        isShowing: _v2,
        className: _v3
      } = _v0;
      return _v2 ? (0, _v10.jsxs)(_v10.Fragment, {
        children: [(0, _v10.jsx)(_v118, {}), (0, _v10.jsx)(_v117, {
          className: `banner-slidein ${_v3}`,
          children: _v1
        })]
      }) : null;
    },
    _v120 = _v0 => {
      let {
        isShowing: _v1,
        onUpgradeClick: _v2
      } = _v0;
      return (0, _v10.jsxs)(_v119, {
        isShowing: _v1,
        children: [(0, _v10.jsx)(_v116.Paragraph, {
          children: (0, _v33.translate)({
            singular: "This is a private demo that only you can see. Upgrade for full access.",
            dictionary: {
              es: {
                singular: "Solo usted puede ver esta demostración privada. Cambie de membresía para obtener acceso total."
              },
              "de-DE": {
                singular: "Dies ist eine private Demo, die nur Sie sehen können. Aktualisieren Sie für vollen Zugriff."
              },
              "fr-FR": {
                singular: "Ceci est une démonstration privée et elle n'est visible que par vous. Mettez à niveau votre compte pour bénéficier d'un accès complet."
              },
              "ja-JP": {
                singular: "これはあなただけが閲覧可能な非公開のデモです。すべての機能を取得するにはアップグレードしてください。"
              },
              "ko-KR": {
                singular: "본인만 볼 수 있는 비공개 데모입니다. 전체 액세스를 원하시면 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Esta é uma demonstração que somente você pode visualizar. Faça upgrade para ter acesso total."
              },
              "zh-CN": {
                singular: "这是私密演示，只有您才能看到。升级以获得完全访问权限。"
              }
            }
          })
        }), (0, _v10.jsx)(_v65.UpgradeButton, {
          size: "sm",
          href: _v2 ? void 0 : "/upgrade",
          onClick: _v2,
          style: {
            marginLeft: (0, _v19.rem)(20)
          },
          tracking: {
            feature: "file_transfer",
            location: "upper_banner",
            upsell_feature_category: "file_transfer_send_file",
            upsell_specific_feature: "file_transfer_send_file",
            upsell_badge_location: "send_file_banner"
          },
          children: (0, _v33.translate)({
            singular: "Upgrade",
            dictionary: {
              es: {
                singular: "Actualizar"
              },
              "de-DE": {
                singular: "Upgraden"
              },
              "fr-FR": {
                singular: "Mettre à niveau"
              },
              "ja-JP": {
                singular: "アップグレード"
              },
              "ko-KR": {
                singular: "업그레이드"
              },
              "zh-CN": {
                singular: "升级"
              }
            }
          })
        })]
      });
    };
  var _v121 = _v12,
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0);
  let _v125 = _v13.default.div.withConfig({
      displayName: "FileDetails__FileDetailsStyled",
      componentId: "sc-21e1b99e-0"
    })`
  font-size: ${_v0 => _v0.isMini ? (0, _v19.rem)(12) : (0, _v19.rem)(18)};
  color: ${_v0 => _v0.isMini ? _v22.bokehTheme.colors.gray["200"] : "inherit"};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;

  @media screen and (max-width: ${(0, _v19.rem)(768)}) {
    font-size: ${_v0 => _v0.isMini ? (0, _v19.rem)(12) : (0, _v19.rem)(16)};
    flex-direction: ${_v0 => !_v0.isMini && _v0.width / _v0.height < 1 ? "column" : "row"};
  }

  *:first-child {
    font-weight: bold;

    @media screen and (max-width: ${(0, _v19.rem)(768)}) {
      margin-bottom: ${_v0 => !_v0.isMini && _v0.width / _v0.height < 1 ? (0, _v19.rem)(4) : "default"};
    }
  }

  * + * {
    &:before {
      content: '|';
      margin: 0 ${_v0 => _v0.isMini ? (0, _v19.rem)(8) : (0, _v19.rem)(10)};

      @media screen and (max-width: ${(0, _v19.rem)(768)}) {
        display: ${_v0 => !_v0.isMini && _v0.width / _v0.height < 1 ? "none" : "default"};
      }
    }
  }
`,
    _v126 = _v0 => {
      let {
        sizeShort: _v1,
        width: _v2,
        height: _v3,
        isMini: _v4
      } = _v0;
      return (0, _v10.jsxs)(_v125, {
        isMini: _v4,
        title: `${_v1} | ${_v2} x ${_v3}`,
        ..._v0,
        children: [(0, _v10.jsx)("span", {
          children: _v1
        }), (0, _v10.jsx)("span", {
          children: `${_v2} x ${_v3}`
        })]
      });
    },
    _v127 = {
      ..._v123.nullVideoContextData,
      ..._v123.nullTeamContext,
      ..._v123.nullUploadContextData
    },
    _v128 = (0, _v13.default)(_v23.Button).withConfig({
      displayName: "DownloadMenuItem__DownloadButtonStyled",
      componentId: "sc-ce78ac30-0"
    })`
  background-color: ${_v22.bokehTheme.colors.gray["600"]};
  color: ${_v22.bokehTheme.colors.white};
`,
    _v129 = _v13.default.a.withConfig({
      displayName: "DownloadMenuItem__DownloadMenuItemStyled",
      componentId: "sc-ce78ac30-1"
    })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(0, _v19.rem)(10)} ${(0, _v19.rem)(21)};
  border-radius: ${(0, _v19.rem)(3)};

  &:not(:last-of-type) {
    margin-bottom: ${(0, _v19.rem)(6)};
  }

  &:hover {
    background-color: ${_v22.bokehTheme.colors.gray["700"]};
    cursor: pointer;

    ${_v128} {
      background-color: ${_v22.bokehTheme.colors.gray["500"]};

      svg path {
        fill: ${_v22.bokehTheme.colors.white};
      }
    }
  }
`,
    _v130 = _v13.default.div.withConfig({
      displayName: "DownloadMenuItem__FileInfoStyled",
      componentId: "sc-ce78ac30-2"
    })`
  margin-right: ${(0, _v19.rem)(10)};
`,
    _v131 = _v13.default.p.withConfig({
      displayName: "DownloadMenuItem__DownloadNameStyled",
      componentId: "sc-ce78ac30-3"
    })`
  color: #fff;
  font-size: ${(0, _v19.rem)(16)};
  font-weight: bold;
  margin-bottom: ${(0, _v19.rem)(8)};
`,
    _v132 = _v0 => {
      let {
          publicName: _v1,
          downloadName: _v2,
          downloadUrl: _v3,
          onItemClick: _v4,
          clipId: _v5,
          location: _v6,
          isOwner: _v7
        } = _v0,
        _v8 = (0, _v124.useAnalyticsEvent)();
      return (0, _v10.jsxs)(_v129, {
        href: _v3,
        download: _v2,
        onClick: () => {
          let _v0;
          _v4(_v1), _v8({
            eventName: "workflow.download_video_file",
            version: 3,
            fields: {
              location: (_v0 = {
                video_id: _v5.toString(),
                location: _v6,
                is_owner: _v7,
                height: null,
                width: null,
                resolution: null,
                aspect_ratio: null,
                quality: null,
                quality_type: null,
                type: null,
                file_size: null,
                third_party_integration: null
              }).location ?? "svv main field",
              ..._v0
            },
            defaultEventFields: _v127
          });
        },
        children: [(0, _v10.jsxs)(_v130, {
          children: [(0, _v10.jsx)(_v131, {
            children: _v1
          }), (0, _v10.jsx)(_v126, {
            isMini: !0,
            ..._v0
          })]
        }), (0, _v10.jsx)(_v128, {
          icon: (0, _v10.jsx)(_v122.DownloadArrow, {}),
          format: "basic",
          variant: "hyperminimal",
          size: "md"
        })]
      });
    };
  function _v133() {
    return (0, _v10.jsx)(_v135, {
      format: "primary",
      children: (0, _v10.jsx)(_v134, {
        children: (0, _v33.translate)({
          singular: "This video is still optimizing, and will be available in high resolution shortly.",
          dictionary: {
            es: {
              singular: "Este video aún se está optimizando; en breve, estará disponible en alta resolución."
            },
            "de-DE": {
              singular: "Die Optimierung dieses Videos läuft noch. Es wird in Kürze in hoher Auflösung verfügbar sein."
            },
            "fr-FR": {
              singular: "Cette vidéo est toujours en cours d'optimisation et sera disponible en haute résolution sous peu."
            },
            "ja-JP": {
              singular: "この動画は最適化中のため、まもなく高解像度でご利用いただけるようになります。"
            },
            "ko-KR": {
              singular: "이 동영상은 최적화 중이며 곧 고해상도로 이용할 수 있습니다."
            },
            "pt-BR": {
              singular: "Este vídeo ainda está otimizando, e estará disponível em alta resolução em breve."
            },
            "zh-CN": {
              singular: "该视频仍在优化中，很快将可观看高清版本。"
            }
          }
        })
      })
    });
  }
  let _v134 = _v13.default.div.withConfig({
      displayName: "MaxResolutionNotice__NoticeText",
      componentId: "sc-fb1beeb8-0"
    })`
  color: black;
  font-size: ${(0, _v19.rem)(14)};
  padding-right: ${(0, _v19.rem)(10)};
`,
    _v135 = (0, _v13.default)(_v94.Notice).withConfig({
      displayName: "MaxResolutionNotice__StyledNotice",
      componentId: "sc-fb1beeb8-1"
    })`
  position: absolute;
  left: 0;
  padding-right: 0;
  margin-bottom: 0;
  background: #c5efff;
  color: #000000;
  max-height: ${(0, _v19.rem)(66)};
`,
    _v136 = _v13.default.div.withConfig({
      displayName: "DownloadMenu__Container",
      componentId: "sc-3320a1bb-0"
    })`
  ${({
      showNotice: _v0
    }) => _v0 && _v13.css`
      transform: translateY(-${(0, _v19.rem)(66)});
    `}
`,
    _v137 = _v13.default.div.withConfig({
      displayName: "DownloadMenu__DownloadMenuStyled",
      componentId: "sc-3320a1bb-1"
    })`
  background-color: ${_v22.bokehTheme.colors.gray["800"]};
  padding: ${(0, _v19.rem)(26)} ${(0, _v19.rem)(10)};
  color: ${_v22.bokehTheme.colors.white};
  position: relative;
`,
    _v138 = (0, _v13.default)(_v25.Header).withConfig({
      displayName: "DownloadMenu__HeaderStyled",
      componentId: "sc-3320a1bb-2"
    })`
  color: ${_v22.bokehTheme.colors.white};
  padding-bottom: ${(0, _v19.rem)(24)};
  margin: 0 ${(0, _v19.rem)(16)} ${(0, _v19.rem)(24)} ${(0, _v19.rem)(16)};
  border-bottom: 1px solid ${_v22.bokehTheme.colors.gray["900"]};
`,
    _v139 = (0, _v13.default)(_v0 => {
      let {
        className: _v1,
        clipId: _v2,
        files: _v3,
        location: _v4,
        showTitle: _v5,
        onItemClick: _v6,
        isOwner: _v7,
        isMaxResolution: _v8 = !0
      } = _v0;
      return (0, _v10.jsxs)(_v136, {
        showNotice: !_v8,
        children: [(0, _v10.jsxs)(_v137, {
          className: _v1,
          children: [_v5 && (0, _v10.jsx)(_v138, {
            size: "4",
            children: (0, _v33.translate)({
              singular: "Download file",
              dictionary: {
                es: {
                  singular: "Descargar el archivo"
                },
                "de-DE": {
                  singular: "Datei herunterladen"
                },
                "fr-FR": {
                  singular: "Télécharger le fichier"
                },
                "ja-JP": {
                  singular: "ファイルをダウンロード"
                },
                "ko-KR": {
                  singular: "파일 다운로드"
                },
                "pt-BR": {
                  singular: "Baixar arquivo"
                },
                "zh-CN": {
                  singular: "下载文件"
                }
              }
            })
          }), _v3.map((_v0, _v1) => (0, _v10.jsx)(_v132, {
            isOwner: _v7,
            clipId: _v2,
            location: _v4,
            onItemClick: _v6,
            ..._v0
          }, _v1))]
        }), !_v8 && (0, _v10.jsx)(_v133, {})]
      });
    }).withConfig({
      displayName: "DownloadButtonMenu__DownloadMenuStyled",
      componentId: "sc-d1896714-0"
    })`
  overflow-x: hidden;
  padding-bottom: 0;
  width: ${(0, _v19.rem)(320)};

  > :last-child {
    margin-bottom: ${(0, _v19.rem)(26)};
  }

  @media screen and (min-width: ${(0, _v19.rem)(768)}) {
    right: 0;
    top: 0;
    max-height: ${(0, _v19.rem)(350)};
    overflow-y: scroll;
  }
`,
    _v140 = (0, _v13.default)(_v23.Button).withConfig({
      displayName: "DownloadButtonMenu__ButtonStyled",
      componentId: "sc-d1896714-1"
    })`
  padding: 0 ${(0, _v19.rem)(70)} 0 ${(0, _v19.rem)(46)};
  width: 100%;

  @media screen and (max-width: ${(0, _v19.rem)(652)}) {
    > * {
      justify-content: left;
    }
  }
`,
    _v141 = _v13.css`
  position: absolute;
  top: ${(0, _v19.rem)(0)};
`,
    _v142 = (0, _v13.default)(_v122.DownloadArrow).withConfig({
      displayName: "DownloadButtonMenu__DownloadArrowStyled",
      componentId: "sc-d1896714-2"
    })`
  left: ${(0, _v19.rem)(16)};
  transform: scale(0.7);
  ${_v141}
`,
    _v143 = (0, _v13.default)(_v68.ChevronDown).withConfig({
      displayName: "DownloadButtonMenu__ChevronDownStyled",
      componentId: "sc-d1896714-3"
    })`
  right: 0;
  ${_v141}
`,
    _v144 = _v0 => {
      let {
        menuAlignment: _v1,
        isLoading: _v2,
        files: _v3,
        onClick: _v4,
        clipId: _v5,
        location: _v6,
        onItemClick: _v7,
        isOwner: _v8,
        isMaxResolution: _v9
      } = _v0;
      return (0, _v10.jsx)(_v69.PopOver, {
        attach: "right" === _v1 ? [[0, 0], [100, 40]] : "bottom",
        content: _v2 ? null : (0, _v10.jsx)(_v139, {
          isOwner: _v8,
          clipId: _v5,
          files: _v3,
          location: _v6,
          onItemClick: _v7,
          isMaxResolution: _v9
        }),
        children: (0, _v10.jsxs)(_v140, {
          title: (0, _v33.translate)({
            singular: "Download",
            dictionary: {
              es: {
                singular: "Descargar"
              },
              "de-DE": {
                singular: "Herunterladen"
              },
              "fr-FR": {
                singular: "Télécharger "
              },
              "ja-JP": {
                singular: "ダウンロード"
              },
              "ko-KR": {
                singular: "다운로드"
              },
              "pt-BR": {
                singular: "Baixar"
              },
              "zh-CN": {
                singular: "下载"
              }
            }
          }),
          format: "primary",
          size: "lg",
          onClick: _v4,
          children: [(0, _v10.jsx)(_v142, {}), (0, _v33.translate)({
            singular: "Download",
            dictionary: {
              es: {
                singular: "Descargar"
              },
              "de-DE": {
                singular: "Herunterladen"
              },
              "fr-FR": {
                singular: "Télécharger "
              },
              "ja-JP": {
                singular: "ダウンロード"
              },
              "ko-KR": {
                singular: "다운로드"
              },
              "pt-BR": {
                singular: "Baixar"
              },
              "zh-CN": {
                singular: "下载"
              }
            }
          }), (0, _v10.jsx)(_v143, {})]
        })
      });
    },
    _v145 = _v13.default.div.withConfig({
      displayName: "FileDetails__FileDetailsStyled",
      componentId: "sc-42cd6c39-0"
    })`
  font-size: ${_v0 => _v0.isMini ? (0, _v19.rem)(12) : (0, _v19.rem)(18)};
  color: ${_v0 => _v0.isMini ? (0, _v54.slate)(200) : "inherit"};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;

  @media screen and (max-width: ${(0, _v19.rem)(652)}) {
    font-size: ${_v0 => _v0.isMini ? (0, _v19.rem)(12) : (0, _v19.rem)(16)};
    flex-direction: ${_v0 => !_v0.isMini && _v0.width / _v0.height < 1 ? "column" : "row"};
  }

  *:first-child {
    font-weight: bold;

    @media screen and (max-width: ${(0, _v19.rem)(652)}) {
      margin-bottom: ${_v0 => !_v0.isMini && _v0.width / _v0.height < 1 ? (0, _v19.rem)(4) : "default"};
    }
  }

  * + * {
    &:before {
      content: '|';
      margin: 0 ${_v0 => _v0.isMini ? (0, _v19.rem)(8) : (0, _v19.rem)(10)};

      @media screen and (max-width: ${(0, _v19.rem)(652)}) {
        display: ${_v0 => !_v0.isMini && _v0.width / _v0.height < 1 ? "none" : "default"};
      }
    }
  }
`,
    _v146 = _v0 => {
      let {
        sizeShort: _v1,
        width: _v2,
        height: _v3,
        isMini: _v4
      } = _v0;
      return (0, _v10.jsxs)(_v145, {
        isMini: _v4,
        title: `${_v1} | ${_v2} x ${_v3}`,
        ..._v0,
        children: [(0, _v10.jsx)("span", {
          children: _v1
        }), (0, _v10.jsx)("span", {
          children: `${_v2} x ${_v3}`
        })]
      });
    };
  (_v1 = {}).Clip = "context_clip", _v1.Review = "context_review", _v1.ReviewDropbox = "context_review_dropbox";
  var _v147 = ((_v2 = {}).Unknown = "unknown", _v2.Ready = "ready", _v2.UploadInProgress = "standby", _v2.UploadErrorBlocked = "blocked", _v2.UploadErrorMove = "internal_error", _v2.UploadInvalidFile = "invalid_file", _v2.UploadComplete = "upload_complete", _v2.UploadErrorQuota = "exceeds_quota", _v2.UploadErrorTotalCap = "exceeds_total_cap", _v2.UploadErrorRestrictedStorage = "exceeds_restricted_storage", _v2.UploadErrorIncomplete = "upload_incomplete", _v2.TranscoderFailed = "failed", _v2.TranscoderStarting = "starting", _v2.TranscoderPending = "pending", _v2.TranscoderFinishing = "finishing", _v2.TranscoderActive = "active", _v2.TranscoderDone = "retrieved", _v2.NetworkError = "network_error", _v2);
  let _v148 = ["ready", "blocked", "internal_error", "invalid_file", "exceeds_quota", "exceeds_total_cap", "exceeds_restricted_storage", "upload_incomplete", "failed", "network_error"];
  var _v149 = ((_v3 = {})[_v3.Review = 0] = "Review", _v3[_v3.ReviewDropbox = 1] = "ReviewDropbox", _v3[_v3.Clip = 2] = "Clip", _v3);
  let _v150 = {
    0: "context_review",
    1: "context_review_dropbox",
    2: "context_clip"
  };
  var _v151 = ((_v4 = {})[_v4.Live = 0] = "Live", _v4[_v4.PostLive = 1] = "PostLive", _v4);
  let _v152 = () => ({
      aspectRatio: void 0,
      title: "",
      description: "",
      isUploading: !1,
      state: _v147.Unknown,
      hasLiveReady: !1,
      toggleState: _v151.PostLive,
      setToggleState: () => void 0
    }),
    _v153 = async (_v0, _v1) => fetch(`/manage/${_v0}/services/status${_v1 ? `?context=${_v1}` : ""}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      }
    }),
    _v154 = (_v0, _v1) => {
      let _v2 = {};
      if (_v0.config.hasLiveAccess) {
        let _v0 = _v0.initialProps.state === _v147.Ready && _v0.isLive;
        _v2 = {
          hasLiveReady: _v0,
          toggleState: _v0 ? _v151.Live : _v151.PostLive
        };
      }
      return {
        ..._v1,
        ..._v0.initialProps,
        ..._v2
      };
    },
    _v155 = async (_v0, _v1) => {
      try {
        let _v0 = await _v153(_v0, _v150[_v1]),
          _v1 = await _v0.json(),
          _v2 = (0, _v16.camelize)(_v1);
        return [_v0, _v2];
      } catch (_v0) {
        throw Error("Failed to get clip status.");
      }
    },
    _v156 = (0, _v12.createContext)(_v152()),
    _v157 = _v0 => {
      let _v1 = _v154(_v0, _v152()),
        {
          clipId: _v2,
          context: _v3,
          initialProps: _v4
        } = _v0,
        [_v5, _v6] = (0, _v12.useState)(_v1),
        _v7 = (0, _v12.useRef)(!1),
        _v8 = (0, _v12.useRef)(void 0),
        _v9 = (0, _v12.useCallback)(_v0 => {
          _v6({
            ..._v5,
            toggleState: _v0
          });
        }, [_v5]),
        _v10 = (0, _v12.useMemo)(() => ({
          ..._v5,
          setToggleState: _v9
        }), [_v5, _v9]),
        _v11 = (0, _v12.useCallback)(_v0 => {
          _v8.current = setTimeout(async () => {
            try {
              let [_v0, _v1] = await _v155(_v0, _v3);
              _v0 === _v0 && (_v6(_v1), -1 >= _v148.indexOf(_v1.state) && _v11(_v0));
            } catch (_v0) {}
          }, 0);
        }, []);
      return (0, _v12.useEffect)(() => (_v8.current && clearTimeout(_v8.current), _v7.current && _v6(_v154(_v0, _v152())), _v7.current || (_v7.current = !0), _v4.state !== _v147.Ready ? _v11(_v2) : _v4.state === _v147.Ready && _v8.current && clearTimeout(_v8.current), () => {
        _v8.current && clearTimeout(_v8.current);
      }), [_v0.initialProps]), (0, _v10.jsx)(_v156.Provider, {
        value: _v10,
        children: _v0.children
      });
    };
  var _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0);
  let _v161 = "#F2F4F5",
    _v162 = "#0088CC",
    _v163 = "#00ADEF",
    _v164 = "#73D2F6",
    _v165 = "#D0D8DB",
    _v166 = "#FF4D4D",
    _v167 = "0.1s ease-in-out",
    _v168 = (0, _v13.default)(({
      className: _v0,
      title: _v1,
      description: _v2,
      state: _v3,
      playerElement: _v4
    }) => {
      if (_v3 === _v147.Ready) return _v4;
      let _v5 = "";
      switch (_v3) {
        case _v147.UploadInProgress:
          _v5 = "Uploading";
          break;
        case _v147.UploadComplete:
        case _v147.TranscoderPending:
          _v5 = "Waiting";
          break;
        case _v147.TranscoderStarting:
          break;
        case _v147.UploadErrorQuota:
        case _v147.UploadErrorTotalCap:
        case _v147.UploadErrorRestrictedStorage:
        case _v147.UploadErrorMove:
        case _v147.UploadInvalidFile:
        case _v147.UploadErrorIncomplete:
        case _v147.TranscoderFailed:
          _v5 = "×";
      }
      return (0, _v10.jsxs)("div", {
        className: _v0,
        children: [(0, _v10.jsxs)(_v170, {
          children: [(0, _v10.jsx)(_v174, {
            animationState: _v179(_v3)
          }), (0, _v10.jsx)(_v176, {
            animationState: _v179(_v3)
          }), (0, _v10.jsx)(_v175, {
            animationState: _v179(_v3)
          }), (0, _v10.jsx)(_v177, {
            animationState: _v179(_v3),
            dangerouslySetInnerHTML: {
              __html: _v5
            }
          })]
        }), (0, _v10.jsxs)(_v178, {
          children: [(0, _v10.jsx)("h2", {
            children: _v1
          }), (0, _v10.jsx)("p", {
            dangerouslySetInnerHTML: {
              __html: (0, _v160.sanitizeDescriptionHtml)(_v2)
            }
          }), _v3 === _v147.TranscoderFailed && (0, _v10.jsx)(_v169, {
            children: (0, _v10.jsx)("a", {
              role: "button",
              href: "/upload",
              children: (0, _v10.jsx)(_v23.Button, {
                element: "span",
                size: "sm",
                children: (0, _v33.translate)({
                  singular: "Retry upload",
                  dictionary: {
                    es: {
                      singular: "Reintentar la carga"
                    },
                    "de-DE": {
                      singular: "Upload erneut probieren"
                    },
                    "fr-FR": {
                      singular: "Retenter la mise en ligne"
                    },
                    "ja-JP": {
                      singular: "アップロードをリトライ"
                    },
                    "ko-KR": {
                      singular: "업로드 재시도"
                    },
                    "pt-BR": {
                      singular: "Tentar carregar de novo"
                    },
                    "zh-CN": {
                      singular: "重试上传"
                    }
                  }
                })
              })
            })
          }), _v3 === _v147.UploadErrorTotalCap && (0, _v10.jsx)(_v169, {
            children: (0, _v10.jsx)("a", {
              role: "button",
              href: (0, _v159.buildUpgradePlanUrl)({
                paywallTrigger: "file_transfer_clip_state_total_cap_exceeded_upgrade_button",
                paywallLocation: "file_transfer",
                paywallFeature: "storage_limit"
              }, {
                paywall: "1"
              }),
              children: (0, _v10.jsx)(_v23.Button, {
                element: "span",
                size: "sm",
                onClick: _v0 => {
                  _v158.FatalAttraction.trackClick({
                    container: "video_settings",
                    component: "upgrade_link",
                    keyword: "quota_exceeded"
                  });
                },
                children: (0, _v33.translate)({
                  singular: "Upgrade",
                  dictionary: {
                    es: {
                      singular: "Actualizar"
                    },
                    "de-DE": {
                      singular: "Upgraden"
                    },
                    "fr-FR": {
                      singular: "Mettre à niveau"
                    },
                    "ja-JP": {
                      singular: "アップグレード"
                    },
                    "ko-KR": {
                      singular: "업그레이드"
                    },
                    "zh-CN": {
                      singular: "升级"
                    }
                  }
                })
              })
            })
          })]
        })]
      });
    }).withConfig({
      displayName: "ClipState__StyledClipState",
      componentId: "sc-25fbb11-0"
    })`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${_v161};
  border-bottom: 1px solid ${"#E3E8E9"};
  opacity: 1;
  transition: all ${_v167};
  padding: ${(0, _v19.rem)(24)};
  justify-content: center;
  overflow: hidden;
`,
    _v169 = _v13.default.div.withConfig({
      displayName: "ClipState__Cta",
      componentId: "sc-25fbb11-1"
    })`
  margin-top: ${(0, _v19.rem)(10)};
`;
  _v13.default.h5.withConfig({
    displayName: "ClipState__HeaderStyled",
    componentId: "sc-25fbb11-2"
  })`
  color: white;
`;
  let _v170 = _v13.default.div.withConfig({
      displayName: "ClipState__Rings",
      componentId: "sc-25fbb11-3"
    })`
  position: relative;
  flex: 0 0 ${(0, _v19.rem)(300)};
  height: ${(0, _v19.rem)(300)};
  align-self: center;
  margin-right: ${(0, _v19.rem)(50)};
  border-radius: ${"50%"};
`,
    _v171 = (0, _v13.default)(({
      animationState: _v0,
      ..._v1
    }) => (0, _v10.jsx)("div", {
      ..._v1
    })).withConfig({
      displayName: "ClipState__Ring",
      componentId: "sc-25fbb11-4"
    })`
  display: ${({
      animationState: _v0
    }) => {
      switch (_v0) {
        case "underway":
        case "failure":
        case "wait":
          return "block";
        default:
          return "none";
      }
    }};
  background-color: ${_v161};
  transition: all ${_v167};
  border-radius: ${"50%"};
`,
    _v172 = _v0 => _v13.css`
  ${_v181} ${_v0} infinite
`,
    _v173 = _v0 => _v13.css`
  ${_v180} ${_v0} infinite
`,
    _v174 = (0, _v13.default)(_v171).withConfig({
      displayName: "ClipState__OuterRing",
      componentId: "sc-25fbb11-5"
    })`
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
  z-index: 1;

  ${_v0 => "failure" === _v0.animationState ? _v13.css`
        top: ${(0, _v19.rem)(304)};
        left: ${(0, _v19.rem)(304)};
        width: ${(0, _v19.rem)(304)};
        height: ${(0, _v19.rem)(304)};
        border: ${(0, _v19.rem)(15)} solid ${_v165};
        border-bottom: ${(0, _v19.rem)(15)} solid ${_v166};
        border-left: ${(0, _v19.rem)(15)} solid ${_v166};
        animation: ${_v173("5s")};
        animation-timing-function: linear;
      ` : "underway" === _v0.animationState ? _v13.css`
        border: ${(0, _v19.rem)(10)} solid ${_v165};
        border-bottom: ${(0, _v19.rem)(10)} solid ${_v162};
        border-left: ${(0, _v19.rem)(10)} solid ${_v162};
        animation: ${_v172("4s")};
        animation-timing-function: linear;
      ` : "wait" === _v0.animationState ? _v13.css`
        border: ${(0, _v19.rem)(15)} solid ${_v165};
        border-bottom: ${(0, _v19.rem)(15)} solid ${_v162};
        border-left: ${(0, _v19.rem)(15)} solid ${_v162};
        animation: ${_v173("18s")};
        animation-timing-function: cubic-bezier(0.32, 0.92, 0.06, 1);
      ` : ""};
`,
    _v175 = (0, _v13.default)(_v171).withConfig({
      displayName: "ClipState__MiddleRing",
      componentId: "sc-25fbb11-6"
    })`
  position: absolute;
  z-index: 2;

  ${_v0 => "underway" === _v0.animationState ? _v13.css`
        top: ${(0, _v19.rem)(45)};
        left: ${(0, _v19.rem)(45)};
        width: ${(0, _v19.rem)(210)};
        height: ${(0, _v19.rem)(210)};
        border: ${(0, _v19.rem)(7)} solid ${_v165};
        border-top: ${(0, _v19.rem)(7)} solid ${_v163};
        border-left: ${(0, _v19.rem)(7)} solid ${_v163};
        animation: ${_v173("2s")};
        animation-timing-function: linear;
        transform: rotate(45deg);
      ` : ""};
`,
    _v176 = (0, _v13.default)(_v171).withConfig({
      displayName: "ClipState__InnerRing",
      componentId: "sc-25fbb11-7"
    })`
  position: absolute;
  z-index: 3;

  ${_v0 => "failure" === _v0.animationState ? _v13.css`
        top: ${(0, _v19.rem)(30)};
        left: ${(0, _v19.rem)(30)};
        width: ${(0, _v19.rem)(240)};
        height: ${(0, _v19.rem)(240)};
        border: ${(0, _v19.rem)(15)} solid ${_v165};
        border-top: ${(0, _v19.rem)(15)} solid ${_v166};
        animation: ${_v172("2s")};
        animation-timing-function: linear;
      ` : "underway" === _v0.animationState ? _v13.css`
        top: ${(0, _v19.rem)(90)};
        left: ${(0, _v19.rem)(90)};
        width: ${(0, _v19.rem)(120)};
        height: ${(0, _v19.rem)(120)};
        border: ${(0, _v19.rem)(4)} solid ${_v165};
        border-top: ${(0, _v19.rem)(4)} solid ${_v164};
        border-left: ${(0, _v19.rem)(4)} solid ${_v164};
        animation: ${_v172("1s")};
        animation-timing-function: linear;
        transform: rotate(45deg);
      ` : "wait" === _v0.animationState ? _v13.css`
        width: ${(0, _v19.rem)(240)};
        height: ${(0, _v19.rem)(240)};
        top: ${(0, _v19.rem)(30)};
        left: ${(0, _v19.rem)(30)};
        border: ${(0, _v19.rem)(10)} solid ${_v165};
        border-top: ${(0, _v19.rem)(10)} solid ${_v163};
        animation: ${_v172("8s")};
        animation-timing-function: cubic-bezier(0.32, 0.92, 0.06, 1);
      ` : ""};
`,
    _v177 = (0, _v13.default)(({
      animationState: _v0,
      ..._v1
    }) => (0, _v10.jsx)("div", {
      ..._v1
    })).withConfig({
      displayName: "ClipState__Message",
      componentId: "sc-25fbb11-8"
    })`
  display: ${({
      animationState: _v0
    }) => {
      switch (_v0) {
        case "underway":
        case "failure":
        case "wait":
          return "block";
        default:
          return "none";
      }
    }};
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  text-align: center;
  padding: 0 ${(0, _v19.rem)(15)};

  ${({
      animationState: _v0
    }) => "failure" !== _v0 ? `
        top: 50%;
        font-size: ${(0, _v19.rem)(40)};
      ` : `
      top: 41%;
      font-size: ${(0, _v19.rem)(200)};
      color: ${_v166};
      font-weight: 700;
    `};
`,
    _v178 = _v13.default.div.withConfig({
      displayName: "ClipState__Status",
      componentId: "sc-25fbb11-9"
    })`
  flex: 1;
  align-self: center;
  color: ${"#4E5A5E"};
  max-width: ${(0, _v19.rem)(480)};
`;
  _v13.default.div.withConfig({
    displayName: "ClipState__Time",
    componentId: "sc-25fbb11-10"
  })`
  margin-top: ${10};
`, _v13.default.div.withConfig({
    displayName: "ClipState__Timer",
    componentId: "sc-25fbb11-11"
  })`
  font-size: ${(0, _v19.rem)(24)};
`;
  let _v179 = _v0 => {
      switch (_v0) {
        case _v147.UploadInProgress:
        case _v147.UploadComplete:
        case _v147.TranscoderPending:
          return "wait";
        case _v147.TranscoderStarting:
        case _v147.TranscoderActive:
        case _v147.TranscoderFinishing:
          return "underway";
        case _v147.UploadErrorQuota:
        case _v147.UploadErrorTotalCap:
        case _v147.UploadErrorRestrictedStorage:
        case _v147.UploadErrorMove:
        case _v147.UploadInvalidFile:
        case _v147.UploadErrorIncomplete:
        case _v147.TranscoderFailed:
          return "failure";
        default:
          return null;
      }
    },
    _v180 = _v13.keyframes`
  0% { transform: rotate(360deg); }
  12.5% { transform: rotate(315deg); }
  25% { transform: rotate(270deg); }
  37.5% { transform: rotate(225deg); }
  50% { transform: rotate(180deg); }
  62.5% { transform: rotate(135deg); }
  75% { transform: rotate(90deg); }
  87.5% { transform: rotate(45deg); }
  100% { transform: rotate(0deg); }
`,
    _v181 = _v13.keyframes`
    0% { transform: rotate(0deg); }
    12.5% { transform: rotate(45deg); }
    25% { transform: rotate(90deg); }
    37.5% { transform: rotate(135deg); }
    50% { transform: rotate(180deg); }
    62.5% { transform: rotate(225deg); }
    75% { transform: rotate(270deg); }
    87.5% { transform: rotate(315deg); }
    100% { transform: rotate(360deg); }
`,
    _v182 = (0, _v13.default)(_v168).withConfig({
      displayName: "LoadingState__ClipStateStyled",
      componentId: "sc-42eb0c59-0"
    })`
  background: ${(0, _v54.grayscale)(850)};
  border: none;
  display: flex;
  align-content: center;
  height: auto;
  position: relative;

  > div {
    background: ${(0, _v54.grayscale)(850)};
    color: white;
    margin-right: 1rem;
    margin-top: 1rem;
    a {
      color: rgb(0, 173, 239);
    }
    > div {
      background: ${(0, _v54.grayscale)(850)};
      font-size: ${(0, _v19.rem)(28)};
    }
    > h2 {
      font-size: ${(0, _v19.rem)(16)};
      color: white;
    }
  }
  > div:nth-child(2) {
    display: none;
    > h2 {
      font-size: ${(0, _v19.rem)(28)};
    }
    > p {
      line-height: ${(0, _v19.rem)(20)};
    }
  }

  @media (min-width: ${(0, _v19.rem)(530)}) {
    > div:nth-child(2) {
      display: inline-block;
    }
  }

  @media (min-width: ${(0, _v19.rem)(768)}) and (max-width: ${(0, _v19.rem)(870)}) {
    > div:nth-child(2) {
      display: none;
    }
  }
`,
    _v183 = _v0 => {
      let {
          clipId: _v1,
          clipStatus: _v2,
          clipStatusConfig: _v3,
          children: _v4
        } = _v0,
        _v5 = _v2.className;
      return (0, _v10.jsx)(_v157, {
        clipId: _v1,
        config: _v3,
        initialProps: _v2,
        context: _v149.Review,
        children: (0, _v10.jsx)(_v156.Consumer, {
          children: _v0 => _v0.state === _v147.Ready ? _v4(_v2) : (0, _v10.jsx)(_v182, {
            className: _v5,
            title: _v0.title,
            description: _v0.description,
            percent: _v0.percent,
            timeLeft: _v0.timeLeft,
            state: _v0.state,
            playerElement: null
          })
        })
      });
    };
  class _v184 extends _v121.default.Component {
    componentDidMount() {
      this.props.onMount();
    }
    render() {
      var _v0, _v1, _v2;
      let _v3,
        {
          isLoading: _v4,
          file: _v5,
          thumbnail: _v6,
          aspectRatio: _v7
        } = this.props;
      return _v4 ? (0, _v10.jsx)(_v192, {
        aspectRatio: _v7,
        children: (0, _v10.jsx)(_v71.Spinner, {})
      }) : (0, _v10.jsxs)(_v192, {
        aspectRatio: _v7,
        children: [(0, _v10.jsx)(_v193, {
          url: _v6
        }), (0, _v10.jsxs)(_v194, {
          children: [(0, _v10.jsxs)(_v195, {
            size: "3",
            aspectRatio: _v7,
            children: [(0, _v10.jsx)("span", {
              children: (_v0 = _v5.baseFileName).length <= 15 ? _v0 : _v0.slice(0, _v0.length - 6)
            }), (0, _v10.jsx)("span", {
              children: (_v1 = _v5.baseFileName, _v3 = (_v2 = _v5.extension) && _v2.length > 0 ? `.${_v2.toLowerCase()}` : "", _v1.length <= 15 ? _v3 : `${_v1.slice(_v1.length - 6)}${_v3}`)
            })]
          }), (0, _v10.jsx)(_v146, {
            ..._v5
          })]
        })]
      });
    }
  }
  let _v185 = _v13.default.div.withConfig({
      displayName: "FileTransferContent__FileTransferContentStyled",
      componentId: "sc-fd00105c-0"
    })`
  width: 100%;
  height: auto;
  padding: 0;
  padding-top: ${_v0 => _v0.hasLogo ? 0 : (0, _v19.rem)(40)};
  padding-bottom: ${(0, _v19.rem)(40)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: ${_v0 => _v0.isCreator ? .666 : 1};
  opacity: ${_v0 => _v0.disabled ? .5 : 1};

  @media screen and (max-width: ${(0, _v19.rem)(652)}) {
    padding: ${(0, _v19.rem)(50)} ${(0, _v19.rem)(16)};
    flex-grow: 0.25;
  }
`,
    _v186 = _v13.default.div.withConfig({
      displayName: "FileTransferContent__InnerContentStyled",
      componentId: "sc-fd00105c-1"
    })`
  width: ${(0, _v19.rem)(620)};
  height: auto;
  display: flex;
  flex-direction: ${_v0 => _v0.aspectRatio > 1 ? "column" : "row-reverse"};
  justify-content: center;

  @media screen and (max-width: ${(0, _v19.rem)(652)}) {
    width: 100%;
    flex-direction: column;
  }
`,
    _v187 = _v13.default.div.withConfig({
      displayName: "FileTransferContent__HeaderStyled",
      componentId: "sc-fd00105c-2"
    })`
  display: flex;
  position: relative;
  flex-direction: ${_v0 => _v0.aspectRatio > 1 ? "row" : "column"};
  justify-content: ${_v0 => _v0.aspectRatio > 1 ? "space-between" : "flex-start"};
  align-items: ${_v0 => _v0.aspectRatio > 1 ? "flex-end" : "flex-start"};
  padding-left: ${_v0 => _v0.aspectRatio > 1 ? 0 : (0, _v19.rem)(20)};
  max-height: ${_v0 => _v0.aspectRatio > 1 ? "none" : (0, _v19.rem)(28 * Math.floor(15.714285714285714) + 60)};
  max-width: ${_v0 => _v0.aspectRatio > 1 ? "one" : (0, _v19.rem)(300)};
  margin-bottom: ${_v0 => _v0.aspectRatio > 1 ? (0, _v19.rem)(20) : 0};
  flex-shrink: 0;

  // Fade out end of last line of text if it would overflow the max height
  ${_v0 => {
      if (_v0.aspectRatio <= 1) return `
                &:after {
                    content: "";
                    position: absolute;

                    // Top is two lines from the bottom of the title section
                    top: ${(0, _v19.rem)(28 * (Math.floor(15.714285714285714) - 1))};
                    right: 0;
                    height: ${(0, _v19.rem)(28)};
                    width: 40%;
                    background: linear-gradient(90deg, rgba(0, 0, 0, 0), ${(0, _v54.grayscale)(850)} 90%);
                }
            `;
    }}

  @media screen and (max-width: ${(0, _v19.rem)(652)}) {
    max-width: none;
    align-items: ${_v0 => _v0.aspectRatio > 1 ? "flex-end" : "center"};
    padding-left: 0;
    max-height: ${(0, _v19.rem)(120)}; // 4 lines
    margin-bottom: ${(0, _v19.rem)(20)};

    &:after {
      top: ${(0, _v19.rem)(90)};
      height: ${(0, _v19.rem)(30)};
    }
  }
`,
    _v188 = _v13.default.div.withConfig({
      displayName: "FileTransferContent__HeaderTextContainerStyled",
      componentId: "sc-fd00105c-3"
    })`
  overflow: hidden;
`,
    _v189 = _v0 => _v13.css`
  display: block;
  margin-right: ${_v0.aspectRatio > 1 ? (0, _v19.rem)(20) : 0};
  text-align: left;
  width: ${_v0.aspectRatio > 1 ? "auto" : "100%"};
  white-space: ${_v0.aspectRatio > 1 ? "nowrap" : "normal"};
  overflow: hidden;
  text-overflow: ellipsis;
`,
    _v190 = (0, _v13.default)(_v25.Header).withConfig({
      displayName: "FileTransferContent__TeamNameStyled",
      componentId: "sc-fd00105c-4"
    })`
  opacity: 0.5;
  margin-bottom: 0;
  ${_v189}
`,
    _v191 = (0, _v13.default)(_v25.Header).withConfig({
      displayName: "FileTransferContent__TitleStyled",
      componentId: "sc-fd00105c-5"
    })`
  font-size: ${(0, _v19.rem)(24)};
  line-height: ${(0, _v19.rem)(28)};
  margin-bottom: ${_v0 => _v0.aspectRatio > 1 ? (0, _v19.rem)(0) : (0, _v19.rem)(12)};
  ${_v189}

  @media screen and (max-width: ${(0, _v19.rem)(652)}) {
    margin: 0;
    white-space: initial;
    font-size: ${(0, _v19.rem)(20)};
    text-align: center;
    line-height: 1.5;
    padding: 0;
  }
`,
    _v192 = _v13.default.div.withConfig({
      displayName: "FileTransferContent__ThumbnailStyled",
      componentId: "sc-fd00105c-6"
    })`
  position: relative;
  width: ${_v0 => (0, _v19.rem)(620 - (_v0.aspectRatio > 1 ? 0 : 300))};
  height: ${_v0 => (0, _v19.rem)((620 - (_v0.aspectRatio > 1 ? 0 : 300)) / _v0.aspectRatio)};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${(0, _v19.rem)(652)}) {
    width: ${_v0 => _v0.aspectRatio > 1 ? "100%" : "50%"};
    height: ${_v0 => _v0.aspectRatio > 1 ? `calc((100vw - 32px) / ${_v0.aspectRatio})` : `calc((50vw - 32px) / ${_v0.aspectRatio})`};
    margin: 0 auto;
  }
`,
    _v193 = _v13.default.div.withConfig({
      displayName: "FileTransferContent__ThumbnailImageStyled",
      componentId: "sc-fd00105c-7"
    })`
  width: 100%;
  height: 100%;
  background: ${_v0 => `linear-gradient(0deg, rgba(0,0,0,0.7), transparent 70%), url(${_v0.url}) no-repeat center`};
  background-size: cover;
`,
    _v194 = _v13.default.div.withConfig({
      displayName: "FileTransferContent__InfoOverlayStyled",
      componentId: "sc-fd00105c-8"
    })`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: ${(0, _v19.rem)(22)};
  color: ${_v54.white};

  @media screen and (max-width: ${(0, _v19.rem)(652)}) {
    margin: ${(0, _v19.rem)(12)};
  }
`,
    _v195 = (0, _v13.default)(_v25.Header).withConfig({
      displayName: "FileTransferContent__FileNameStyled",
      componentId: "sc-fd00105c-9"
    })`
  color: inherit;
  font-weight: 500;
  margin-bottom: ${(0, _v19.rem)(5)};
  display: flex;
  white-space: nowrap;

  *:first-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: auto;
  }

  @media screen and (max-width: ${(0, _v19.rem)(652)}) {
    font-size: ${(0, _v19.rem)(18)};
    display: ${_v0 => _v0.aspectRatio < 1 ? "none" : "default"};
  }
`,
    _v196 = _v13.default.div.withConfig({
      displayName: "FileTransferContent__MobileDownloadButtonStyled",
      componentId: "sc-fd00105c-10"
    })`
  width: 100%;
  margin-top: ${(0, _v19.rem)(16)};

  > * {
    width: 100%;
  }

  @media screen and (min-width: ${(0, _v19.rem)(652)}) {
    display: none;
  }
`,
    _v197 = _v13.default.div.withConfig({
      displayName: "FileTransferContent__DesktopDownloadButtonStyled",
      componentId: "sc-fd00105c-11"
    })`
  @media screen and (max-width: ${(0, _v19.rem)(652)}) {
    display: none;
  }
`,
    _v198 = _v0 => {
      let {
        isCreator: _v1,
        isLoading: _v2,
        hasLogo: _v3,
        files: _v4,
        clip: _v5,
        clipStatus: _v6,
        clipStatusConfig: _v7,
        onClipReady: _v8,
        onClickDownload: _v9,
        onClickDownloadItem: _v10,
        teamName: _v11
      } = _v0;
      return console.group("Clip status"), console.log(_v6), console.groupEnd(), (0, _v10.jsx)(_v185, {
        isCreator: _v1,
        hasLogo: _v3,
        disabled: !_v5.allowDownloads,
        children: (0, _v10.jsxs)(_v186, {
          aspectRatio: _v5.aspectRatio,
          children: [(0, _v10.jsxs)(_v187, {
            aspectRatio: _v5.aspectRatio,
            children: [(0, _v10.jsxs)(_v188, {
              children: [(0, _v10.jsx)(_v190, {
                size: "6",
                aspectRatio: _v5.aspectRatio,
                children: _v11
              }), (0, _v10.jsx)(_v191, {
                size: "1",
                aspectRatio: _v5.aspectRatio,
                children: _v5.title
              })]
            }), (0, _v10.jsx)(_v197, {
              children: (0, _v10.jsx)(_v144, {
                isOwner: _v1,
                menuAlignment: _v5.aspectRatio > 1 ? "right" : "center",
                isLoading: _v2,
                files: _v4,
                clipId: _v5.id,
                location: "file transfer download modal",
                onClick: _v9,
                onItemClick: _v10,
                isMaxResolution: _v5.isMaxResolution
              })
            })]
          }), (0, _v10.jsx)(_v183, {
            clipId: _v5.id,
            clipStatus: _v6,
            clipStatusConfig: _v7,
            children: _v0 => (0, _v10.jsx)(_v184, {
              isLoading: _v2,
              onMount: () => _v8(_v0),
              file: _v4[0],
              thumbnail: _v5.thumbnail,
              aspectRatio: _v5.aspectRatio
            })
          }), (0, _v10.jsx)(_v196, {
            children: (0, _v10.jsx)(_v144, {
              isOwner: _v1,
              menuAlignment: "center",
              isLoading: _v2,
              files: _v4,
              clipId: _v5.id,
              location: "file transfer download modal",
              onClick: _v9,
              onItemClick: _v10,
              isMaxResolution: _v5.isMaxResolution
            })
          })]
        })
      });
    };
  var _v199 = _v0.i(0),
    _v200 = _v0.i(0),
    _v201 = _v0.i(0),
    _v202 = _v0.i(0);
  let _v203 = (0, _v12.forwardRef)(({
    videoFileTransferId: _v0,
    clipId: _v1,
    clipOwnerId: _v2
  }, _v3) => {
    let _v4,
      {
        trackVideoFileTransferPageDisplayed: _v5,
        trackVideoFileTransferLinkCreated: _v6
      } = (_v4 = (0, _v201.usePico)(), {
        trackVideoFileTransferLinkCreated: (0, _v12.useCallback)(_v0 => null !== _v4 && (_v4.track("video_file_transfer_link_created", {
          video_file_transfer_id: _v0.videoFileTransferId,
          clip_id: _v0.clipId,
          clip_owner_id: _v0.clipOwnerId
        }), !0), [_v4]),
        trackVideoFileTransferPageDisplayed: (0, _v12.useCallback)(_v0 => null !== _v4 && (_v4.track("video_file_transfer_page_displayed", {
          video_file_transfer_id: _v0.videoFileTransferId,
          clip_id: _v0.clipId,
          clip_owner_id: _v0.clipOwnerId,
          video_file_transfer_viewer_auth_status: _v0.videoFileTransferViewerAuthStatus
        }), !0), [_v4])
      }),
      _v7 = (0, _v202.useViewer)();
    return (0, _v200.usePicoEffect)(() => {
      if (!_v7) return !1;
      _v5({
        videoFileTransferId: _v0,
        clipId: _v1,
        clipOwnerId: _v2,
        videoFileTransferViewerAuthStatus: (0, _v199.deriveViewerAuthStatus)(_v7)
      });
    }, [_v0, _v1, _v2, _v7], {
      once: !0
    }), (0, _v12.useImperativeHandle)(_v3, () => ({
      trackLinkCreated: _v0 => _v6(_v0)
    }), [_v6]), null;
  });
  _v203.displayName = "FileTransferTracker";
  let _v204 = _v13.default.svg.withConfig({
      displayName: "VimeoLogo__BaseSvg",
      componentId: "sc-f92e75f0-0"
    })`
  path {
    fill: ${(0, _v54.grayscale)(650)};
  }
`,
    _v205 = (0, _v13.default)(_v204).withConfig({
      displayName: "VimeoLogo__LogoFullStyled",
      componentId: "sc-f92e75f0-1"
    })`
  width: ${(0, _v19.rem)(85)};
  height: ${(0, _v19.rem)(30)};
  display: inline-block;

  @media screen and (max-width: ${(0, _v19.rem)(768)}) {
    display: none;
  }
`,
    _v206 = (0, _v13.default)(_v204).withConfig({
      displayName: "VimeoLogo__LogoMiniStyled",
      componentId: "sc-f92e75f0-2"
    })`
  width: ${(0, _v19.rem)(22)};
  height: ${(0, _v19.rem)(26)};
  display: none;

  @media screen and (max-width: ${(0, _v19.rem)(768)}) {
    display: inline-block;
  }
`,
    _v207 = _v0 => (0, _v10.jsxs)("div", {
      children: [(0, _v10.jsxs)(_v205, {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        viewBox: "0 0 441 124.682",
        children: [(0, _v10.jsx)("path", {
          d: "M120.481,27.326c5.462,0,10.188-1.91,14.174-5.728c3.547-3.379,5.392-6.906,5.54-10.583c0.143-2.492-0.815-4.951-2.88-7.378C135.244,1.217,132.662,0,129.562,0c-5.32,0-10.155,1.767-14.511,5.288c-4.356,3.527-6.608,7.204-6.75,11.022C108.002,23.656,112.067,27.326,120.481,27.326z"
        }), (0, _v10.jsx)("path", {
          d: "M434.079,50.16c-5.319-6.925-13.145-10.395-23.475-10.395c-16.097,0-29.455,5.896-40.083,17.688c-9.902,10.614-14.478,22.265-13.733,34.944c0.049,0.932,0.132,1.84,0.229,2.738c-0.554,0.241-1.093,0.483-1.662,0.724c-12.556,5.411-24.147,8.11-34.775,8.11c-5.32,0-9.307-1.839-11.96-5.521c14.316-2.355,26.206-7.876,35.662-16.568c8.854-7.955,12.989-15.689,12.4-23.197c-0.887-11.78-8.562-17.676-23.034-17.676c-15.65,0-29.235,5.909-40.75,17.714c-10.484,10.783-15.805,22.148-15.947,34.103c-0.04,2.005,0.066,3.932,0.3,5.789c-2.477,1.632-4.352,2.456-5.613,2.456c-2.81,0-4.576-0.582-5.314-1.76c-0.737-1.178-1.035-3.308-0.887-6.401c0-1.178,0.919-5.695,2.771-13.565c1.845-7.87,2.841-13.864,2.99-17.987c0.291-6.025-0.894-10.66-3.547-13.896c-3.101-3.974-8.194-5.663-15.281-5.074c-5.902,0.447-11.592,2.66-17.054,6.647c-3.249,2.363-6.569,5.534-9.961,9.521c-1.185,1.036-2.291,2-3.327,2.88c0.143-6.051-1.036-10.705-3.54-13.954c-3.107-3.987-8.272-5.683-15.508-5.094c-8.415,0.738-16.02,4.065-22.809,9.967c-2.958,2.511-5.54,5.469-7.753,8.861c0.291-1.327,0.44-2.731,0.44-4.207c0-4.576-1.185-8.602-3.547-12.071s-5.462-5.055-9.301-4.757c-2.213,0.149-6.42,3.101-12.621,8.854c-8.569,7.974-13.216,12.259-13.954,12.841l5.313,5.98c4.136-2.984,6.647-4.479,7.534-4.479c1.618,0,2.285,1.327,1.994,3.975c-0.143,3.831-0.822,9.164-2.039,16.012c-0.754,4.243-1.298,7.904-1.638,10.988c-0.066,0.055-0.129,0.109-0.196,0.164c-5.32,4.375-9.009,6.556-11.074,6.556c-4.725,0-7.016-3.158-6.867-9.488c2.213-13.824,4.285-25.222,6.207-34.199c0.583-5.294-0.266-9.592-2.55-12.906c-2.291-3.314-5.87-4.744-10.737-4.304c-3.107,0.298-7.832,3.249-14.181,8.86c-2.205,2-4.41,3.996-6.615,5.993c-0.437-10.447-5.204-15.822-14.329-16.09c-13.669-0.44-22.931,7.275-27.779,23.158c2.504-1.074,4.938-1.618,7.301-1.618c5.016,0,7.229,2.822,6.64,8.453c-0.297,3.411-2.511,8.375-6.64,14.899c-4.136,6.523-7.236,9.786-9.301,9.786c-2.66,0-5.094-5.023-7.307-15.081c-0.745-2.951-2.071-10.491-3.987-22.614c-1.773-11.236-6.499-16.485-14.174-15.747c-3.249,0.298-8.123,3.249-14.614,8.86C9.669,53.318,4.867,57.597,0,61.875l4.641,5.98c4.42-3.094,7.003-4.647,7.741-4.647c3.385,0,6.55,5.313,9.501,15.929c2.653,9.733,5.307,19.468,7.961,29.202c3.974,10.621,8.841,15.929,14.588,15.929c9.281,0,20.627-8.719,34.038-26.154C87.892,85.987,93.99,75.74,96.8,67.354c3.72-2.748,6.018-4.146,6.853-4.146c2.653,0,3.987,1.922,3.987,5.754c0,0.738-1.443,6.2-4.324,16.381c-2.88,10.182-4.395,17.709-4.537,22.575c-0.149,4.726,0.997,8.557,3.43,11.508c2.434,2.952,5.941,4.428,10.524,4.428c9.89,0,19.779-4.278,29.675-12.835c0.881-0.772,1.738-1.557,2.573-2.352c0.783,3.312,2.124,6.045,4.07,8.15c4.259,4.569,11.456,6.706,21.592,6.408c-1.353-3.249-1.884-9.003-1.586-17.274c0.44-9.152,2.809-17.941,7.094-26.355s8.278-12.627,11.98-12.627c4.285,0,6.285,2.731,5.987,8.193c-0.149,3.696-0.874,7.903-2.175,12.628c-1.307,4.725-2.032,9.449-2.174,14.174c-0.298,7.534,1.392,12.919,5.081,16.168c4.116,3.689,11.334,5.392,21.638,5.094c-1.541-3.392-2.162-8.266-1.864-14.621c0.44-9.003,3.482-18.304,9.113-27.902c5.333-9.151,9.922-13.733,13.772-13.733c3.56,0,5.263,2.809,5.113,8.414c-0.148,3.688-1.074,8.854-2.771,15.494c-1.695,6.641-2.621,12.316-2.764,17.041c-0.297,10.628,4.35,15.936,13.955,15.936c9.889,0,19.779-4.278,29.675-12.835c0.164-0.144,0.316-0.293,0.479-0.438c0.34,0.586,0.688,1.168,1.068,1.732c5.165,7.967,13.734,11.954,25.695,11.954c16.09,0,31.966-4.492,47.616-13.488c1.756-0.99,3.422-1.979,5.017-2.97c0.986,1.991,2.138,3.866,3.502,5.591c6.052,7.521,14.912,11.281,26.575,11.281c14.025,0,25.767-4.938,35.216-14.815c9.449-9.876,14.466-21.598,15.061-35.163C441.387,64.684,439.102,56.503,434.079,50.16z M305.118,90.003c-0.084-1.909-0.084-2.867,0-2.867c0.143-5.579,2.505-11.417,7.074-17.514s9.062-9.146,13.488-9.146c3.392,0,5.01,1.987,4.867,5.948c-0.149,2.938-2.362,6.764-6.634,11.462C318.606,83.324,312.341,87.362,305.118,90.003z M415.918,73.868c-0.297,7.1-2.434,13.902-6.42,20.413c-4.725,7.845-10.414,11.76-17.055,11.76c-2.958,0-5.249-1.624-6.867-4.88c-1.476-2.809-2.142-6.064-1.993-9.767c0.291-7.54,2.505-14.64,6.647-21.3c4.866-8.136,11.067-12.207,18.601-12.207c2.356,0,4.168,1.67,5.424,4.997S416.067,69.875,415.918,73.868z"
        })]
      }), (0, _v10.jsx)(_v206, {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        viewBox: "0 15 32 23",
        children: (0, _v10.jsx)("path", {
          d: "M31.277,18.832c-0.14,3.052-2.27,7.229-6.39,12.531c-4.259,5.536-7.863,8.306-10.811,8.306c-1.825,0-3.371-1.687-4.633-5.059c-0.843-3.092-1.686-6.185-2.529-9.275c-0.938-3.372-1.943-5.06-3.019-5.06c-0.234,0-1.054,0.494-2.458,1.477l-1.474-1.901c1.546-1.358,3.071-2.717,4.572-4.078c2.062-1.783,3.609-2.72,4.642-2.814c2.438-0.234,3.938,1.433,4.502,5.001c0.608,3.851,1.03,6.246,1.266,7.182c0.704,3.195,1.476,4.791,2.321,4.791c0.657,0,1.641-1.037,2.954-3.108c1.312-2.072,2.015-3.649,2.109-4.732c0.188-1.789-0.516-2.686-2.109-2.686c-0.75,0-1.522,0.173-2.318,0.514c1.54-5.044,4.481-7.495,8.823-7.355C29.945,12.661,31.462,14.75,31.277,18.832z"
        })
      })]
    }),
    _v208 = _v13.default.img.withConfig({
      displayName: "LogoBar__TeamLogo",
      componentId: "sc-f202dace-0"
    })`
  max-height: ${(0, _v19.rem)(45)};
`,
    _v209 = _v13.default.div.withConfig({
      displayName: "LogoBar__LogoBarStyled",
      componentId: "sc-f202dace-1"
    })`
  width: 100%;
  padding: ${(0, _v19.rem)(20)};
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
`,
    _v210 = ({
      teamLogoUrl: _v0
    }) => (0, _v10.jsx)(_v209, {
      children: _v0 ? (0, _v10.jsx)(_v208, {
        src: _v0,
        alt: "team-logo"
      }) : (0, _v10.jsx)(_v207, {})
    }),
    _v211 = _v0 => (0, _v10.jsx)(_v119, {
      isShowing: _v0.isShowing,
      children: (0, _v33.translate)({
        singular: "You′re looking at an older version of this video. Only your team can see the version history.",
        dictionary: {
          es: {
            singular: "Estás viendo una versión antigua de tu video.  Solo tu equipo tiene acceso al historial de versiones."
          },
          "de-DE": {
            singular: "Du siehst gerade eine eine ältere Version dieses Videos.  Nur dein Team kann die Versionshistorie sehen."
          },
          "fr-FR": {
            singular: "Vous regardez une ancienne version de cette vidéo.  Seulement vos collaborateurs peuvent voir l'historique des versions."
          },
          "ja-JP": {
            singular: "現在古いバージョンの動画を視聴中です。あなたのチームだけがこれまでのバージョンを閲覧することができます。"
          },
          "ko-KR": {
            singular: "현재 이 동영상의 이전 버전을 보고 계십니다.  나의 팀만이 버전 기록을 볼 수 있습니다."
          },
          "pt-BR": {
            singular: "Você está vendo uma versão antiga deste vídeo. Somente sua equipe pode ver o histórico de versões."
          },
          "zh-CN": {
            singular: "您正在观看该视频的旧版本。只有您的团队才能查看版本历史记录。"
          }
        }
      })
    });
  var _v212 = ((_v5 = _v212 || {})[_v5.Live = 0] = "Live", _v5[_v5.PostLive = 1] = "PostLive", _v5),
    _v213 = ((_v6 = {}).TYPE_DEMO = "FILE_TRANSFER_DEMO", _v6.TYPE_FULL = "FILE_TRANSFER", _v6),
    _v214 = ((_v7 = {}).LOAD_DOWNLOAD_DATA = "load_download_data", _v7.UPDATE_SETTINGS = "update_settings", _v7.TOGGLE_ALLOW_DOWNLOADS = "toggle_allow_downloads", _v7.LOAD_CONFIG_DATA = "load_config_data", _v7);
  let _v215 = (_v0, _v1) => {
      let _v2,
        _v3 = [];
      for (let _v0 in _v0) if (_v0.hasOwnProperty(_v0)) {
        let _v0 = _v0[_v0];
        switch (_v1 && (_v0 = _v1 + "[" + _v0 + "]"), Object.prototype.toString.call(_v0)) {
          case "[object Object]":
            _v2 = _v215(_v0, _v0);
            break;
          case "[object Array]":
            let _v0 = {};
            if (0 === _v0.length) _v0 = null;else {
              for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) _v0[_v0] = _v0[_v0];
              _v2 = _v215(_v0, _v0);
            }
            break;
          default:
            _v2 = _v0 + "=" + encodeURIComponent(_v0);
        }
        null !== _v0 && _v3.push(_v2);
      }
      return _v3.join("&");
    },
    _v216 = _v0 => new Promise(_v0 => _v0({
      ok: !0,
      json: () => Promise.resolve(_v0)
    })),
    _v217 = (_v0, _v1) => {
      let _v2 = (_v0 => {
          let {
            username: _v1,
            clipId: _v2,
            clipHash: _v3
          } = _v0;
          return `/${_v1}/download/config/${_v2}/${_v3}`;
        })(_v1.match.params),
        _v3 = (_v0 => {
          let {
            username: _v1,
            clipId: _v2,
            clipHash: _v3
          } = _v0;
          return `/${_v1}/download/data/${_v2}/${_v3}`;
        })(_v1.match.params);
      return {
        get: (_v0, _v1, _v2 = {}) => {
          let _v3 = _v0 ? `action=${_v0}` : "",
            _v4 = _v0 === _v214.LOAD_CONFIG_DATA ? _v2 : _v3;
          return _v1 && (_v3 = `${_v3}&${_v215(_v1)}`), fetch(`${_v4}?${_v3}`, {
            method: "GET",
            credentials: "include",
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              ..._v2
            }
          });
        },
        post: (_v0, _v1, _v2 = {}, _v3 = {}) => _v0 === _v213.TYPE_DEMO ? ((_v0, _v1, _v2 = {}) => {
          switch (_v0) {
            case _v214.UPDATE_SETTINGS:
              return _v216(_v1.settings);
            case _v214.TOGGLE_ALLOW_DOWNLOADS:
              return _v216(_v1 && _v1.allow_downloads);
            default:
              return Promise.resolve({
                ok: !1
              });
          }
        })(_v0, _v1, _v3) : (_v0 && (_v3 = {
          ..._v3,
          action: _v0
        }), fetch(`${_v3}?${_v215(_v3)}`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Requested-With": "XMLHttpRequest",
            ..._v2
          },
          body: _v215({
            ..._v1,
            token: _v1.xsrft
          })
        }))
      };
    };
  var _v218 = _v0.i(0),
    _v219 = _v0.i(0),
    _v220 = _v0.i(0),
    _v221 = _v0.i(0),
    _v222 = _v0.i(0),
    _v223 = _v0.i(0),
    _v224 = _v0.i(0);
  let _v225 = (0, _v222.buildThirdPartyIntegrationBpContext)({
      is_partner: !1,
      integration_name: null,
      integration_id: null
    }),
    _v226 = (0, _v220.buildViewBpContext)({
      feature: null,
      view_type: "impression"
    }),
    _v227 = (0, _v221.buildActionBpContext)({
      feature: null,
      action_type: "click"
    }),
    _v228 = () => {
      _v158.FatalAttraction.trackImpression({
        container: "video_transfer",
        component: "allow_downloads_notification"
      });
    },
    _v229 = _v0 => {
      _v158.FatalAttraction.trackClick({
        container: "video_transfer",
        component: "return_to_page",
        keyword: _v0
      });
    },
    _v230 = () => {
      _v158.FatalAttraction.trackClick({
        container: "video_transfer",
        component: "download_menu"
      });
    },
    _v231 = _v0 => {
      _v158.FatalAttraction.trackClick({
        container: "video_transfer",
        component: "download_menu",
        keyword: _v0.toLowerCase().split(" ").join("")
      });
    },
    _v232 = (0, _v18.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v233 = _v13.default.div.withConfig({
      displayName: "FileTransfer__MonoRibbon",
      componentId: "sc-b47fd9ec-0"
    })`
  height: ${(0, _v19.rem)(3)};
  width: 100%;
  background: ${_v0 => _v0.color};
`;
  class _v234 extends _v20.default.Component {
    state = {
      isLoadingFiles: !0,
      files: [],
      clip: this.props.clip,
      showLogo: this.props.showLogo,
      toastMessage: null,
      selectedVersion: this.props.versions.find(_v0 => !!_v0.is_current),
      modal: null,
      initialAllowDownloads: this.props.clip.allowDownloads
    };
    api = _v217(this.props.mode, this.props.apiConfig);
    trackerRef = _v20.default.createRef();
    getTrackingParams() {
      return {
        videoFileTransferId: this.state.clip.fileTransferUrl?.split("/").filter(Boolean).pop() ?? this.state.clip.id.toString(),
        clipId: this.state.clip.id.toString(),
        clipOwnerId: this.props.isCreator ? this.props.viewer?.user?.id?.toString() ?? "" : ""
      };
    }
    componentDidMount() {
      _v158.FatalAttraction.trackPageView();
    }
    fetchDownloadConfig = () => {
      this.setState({
        isLoadingFiles: !0
      });
      let _v0 = {
        version_id: this.state.selectedVersion ? this.state.selectedVersion.id : null
      };
      this.api.get(_v214.LOAD_DOWNLOAD_DATA, _v0).then(_v0 => {
        if (!_v0.ok) throw Error(_v0.status);
        return _v0.json();
      }).then(_v0 => {
        let {
            downloadConfig: _v1,
            thumbnail: _v2
          } = (0, _v16.camelize)(_v0),
          _v3 = _v1.files;
        _v1.sourceFile && _v3.push(_v1.sourceFile), this.setState(({
          clip: _v0
        }) => ({
          isLoadingFiles: !1,
          clip: {
            ..._v0,
            thumbnail: _v2
          },
          files: _v3.reverse()
        }));
      }).catch(_v0 => {
        this.setState({
          toastMessage: (0, _v33.translate)({
            singular: "Oops, something went wrong. Please try again.",
            dictionary: {
              es: {
                singular: "Ups, algo salió mal. Vuelve a intentarlo."
              },
              "de-DE": {
                singular: "Oops, etwas ist schief gelaufen. Bitte versuche es nochmal."
              },
              "fr-FR": {
                singular: "Oups ! Une erreur s'est produite. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "エラーが発生しました。再度お試しください。"
              },
              "ko-KR": {
                singular: "앗, 문제가 발생했습니다. 다시 시도해주세요."
              },
              "pt-BR": {
                singular: "Ops, algo deu errado. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "哎呀，出错了。请重试。"
              }
            }
          })
        });
      });
    };
    toggleLogo = () => {
      console.log("toggleLogo"), this.setState(_v0 => ({
        showLogo: !_v0.showLogo
      }), async () => {
        try {
          let _v0 = await this.api.post(_v214.UPDATE_SETTINGS, {
            settings: {
              vimeo_logo: !!this.state.showLogo
            }
          });
          if (!_v0.ok) throw Error();
          let _v1 = await _v0.json();
          this.setState({
            showLogo: _v1.vimeo_logo,
            toastMessage: (0, _v33.translate)({
              singular: "Updated settings!",
              dictionary: {
                es: {
                  singular: "¡Configuración actualizada!"
                },
                "de-DE": {
                  singular: "Einstellungen wurden aktualisiert!"
                },
                "fr-FR": {
                  singular: "Paramètres mis à jour !"
                },
                "ja-JP": {
                  singular: "設定を更新しました"
                },
                "ko-KR": {
                  singular: "설정 업데이트 완료!"
                },
                "pt-BR": {
                  singular: "Configurações atualizadas!"
                },
                "zh-CN": {
                  singular: "设置已更新！"
                }
              }
            })
          });
        } catch (_v0) {
          this.setState(_v0 => ({
            showLogo: !this.state.showLogo,
            toastMessage: (0, _v33.translate)({
              singular: "Oops, something went wrong. Please try again.",
              dictionary: {
                es: {
                  singular: "Ups, algo salió mal. Vuelve a intentarlo."
                },
                "de-DE": {
                  singular: "Oops, etwas ist schief gelaufen. Bitte versuche es nochmal."
                },
                "fr-FR": {
                  singular: "Oups ! Une erreur s'est produite. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "앗, 문제가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Ops, algo deu errado. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "哎呀，出错了。请重试。"
                }
              }
            })
          }));
        }
      });
    };
    toggleAllowDownloads = () => {
      this.setState(_v0 => ({
        clip: {
          ..._v0.clip,
          allowDownloads: !_v0.clip.allowDownloads
        }
      }), async () => {
        try {
          let _v0 = await this.api.post(_v214.TOGGLE_ALLOW_DOWNLOADS, {
            allow_downloads: this.state.clip.allowDownloads
          });
          if (!_v0.ok) throw Error();
          let _v1 = await _v0.json();
          this.setState(_v0 => ({
            clip: {
              ..._v0.clip,
              allowDownloads: _v1.allowDownloads
            },
            toastMessage: (0, _v33.translate)({
              singular: "Updated settings!",
              dictionary: {
                es: {
                  singular: "¡Configuración actualizada!"
                },
                "de-DE": {
                  singular: "Einstellungen wurden aktualisiert!"
                },
                "fr-FR": {
                  singular: "Paramètres mis à jour !"
                },
                "ja-JP": {
                  singular: "設定を更新しました"
                },
                "ko-KR": {
                  singular: "설정 업데이트 완료!"
                },
                "pt-BR": {
                  singular: "Configurações atualizadas!"
                },
                "zh-CN": {
                  singular: "设置已更新！"
                }
              }
            })
          }));
        } catch (_v0) {
          this.setState(_v0 => ({
            clip: {
              ..._v0.clip,
              allowDownloads: !_v0.clip.allowDownloads
            },
            toastMessage: (0, _v33.translate)({
              singular: "Oops, something went wrong. Please try again.",
              dictionary: {
                es: {
                  singular: "Ups, algo salió mal. Vuelve a intentarlo."
                },
                "de-DE": {
                  singular: "Oops, etwas ist schief gelaufen. Bitte versuche es nochmal."
                },
                "fr-FR": {
                  singular: "Oups ! Une erreur s'est produite. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "エラーが発生しました。再度お試しください。"
                },
                "ko-KR": {
                  singular: "앗, 문제가 발생했습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Ops, algo deu errado. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "哎呀，出错了。请重试。"
                }
              }
            })
          }));
        }
      });
    };
    clipTranscodeComplete = _v0 => {
      let {
        aspectRatio: _v1,
        thumbnailUrl: _v2
      } = _v0;
      this.setState(({
        clip: _v0
      }) => ({
        clip: {
          ..._v0,
          aspectRatio: _v1,
          thumbnail: _v2,
          isTranscoding: !1
        }
      }));
    };
    switchVersion = _v0 => {
      this.setState(_v0 => ({
        selectedVersion: _v0
      }), this.fetchDownloadConfig);
    };
    copyLink = () => {
      if (this.props.mode === _v213.TYPE_DEMO) return void this.setState({
        modal: _v86
      });
      this.trackerRef.current?.trackLinkCreated(this.getTrackingParams());
      let _v0 = (0, _v58.default)(this.state.clip.fileTransferUrl);
      this.setState({
        toastMessage: _v0 ? (0, _v33.translate)({
          singular: "Link copied!",
          dictionary: {
            es: {
              singular: "¡Vínculo copiado!"
            },
            "de-DE": {
              singular: "Link kopiert!"
            },
            "fr-FR": {
              singular: "Lien copié !"
            },
            "ja-JP": {
              singular: "リンクがコピーされました"
            },
            "ko-KR": {
              singular: "링크를 복사했습니다"
            },
            "pt-BR": {
              singular: "Link copiado!"
            },
            "zh-CN": {
              singular: "链接已复制！"
            }
          }
        }) : (0, _v33.translate)({
          singular: "Oops, something went wrong. Please try again.",
          dictionary: {
            es: {
              singular: "Ups, algo salió mal. Vuelve a intentarlo."
            },
            "de-DE": {
              singular: "Oops, etwas ist schief gelaufen. Bitte versuche es nochmal."
            },
            "fr-FR": {
              singular: "Oups ! Une erreur s'est produite. Veuillez réessayer."
            },
            "ja-JP": {
              singular: "エラーが発生しました。再度お試しください。"
            },
            "ko-KR": {
              singular: "앗, 문제가 발생했습니다. 다시 시도해주세요."
            },
            "pt-BR": {
              singular: "Ops, algo deu errado. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "哎呀，出错了。请重试。"
            }
          }
        })
      });
    };
    hideToast = () => {
      this.setState({
        toastMessage: null
      });
    };
    render() {
      let {
          clipStatus: _v0,
          clipStatusConfig: _v1,
          isCreator: _v2,
          canViewSettingsTeamMember: _v3,
          mode: _v4,
          versions: _v5,
          demoUpsellVideoConfig: _v6,
          demoUpsellConfig: _v7,
          breadcrumb: _v8,
          teamSettings: _v9,
          apiConfig: _v10,
          viewer: _v11
        } = this.props,
        {
          showLogo: _v12,
          isLoadingFiles: _v13,
          files: _v14,
          clip: _v15,
          toastMessage: _v16,
          selectedVersion: _v17,
          modal: _v18,
          initialAllowDownloads: _v19
        } = this.state,
        _v20 = _v2 || _v3;
      return (0, _v33.translate)({
        singular: "Transfer video files",
        dictionary: {
          es: {
            singular: "Transfiera archivos de video"
          },
          "de-DE": {
            singular: "Videodateien übertragen"
          },
          "fr-FR": {
            singular: "Transférer des fichiers vidéo"
          },
          "ja-JP": {
            singular: "動画ファイルを転送"
          },
          "ko-KR": {
            singular: "동영상 파일 전송"
          },
          "pt-BR": {
            singular: "Transferir arquivos de vídeo"
          },
          "zh-CN": {
            singular: "传输视频文件"
          }
        }
      }), (0, _v33.translate)({
        singular: "Customizable video player",
        dictionary: {
          es: {
            singular: "Reproductor de video personalizable"
          },
          "de-DE": {
            singular: "Individuell anpassbarer Video-Player "
          },
          "fr-FR": {
            singular: "Player vidéo personnalisable"
          },
          "ja-JP": {
            singular: "カスタマイズ可能な動画プレーヤー"
          },
          "ko-KR": {
            singular: "사용자 지정 가능한 동영상 플레이어"
          },
          "pt-BR": {
            singular: "Video Player customizável"
          },
          "zh-CN": {
            singular: "可定制的视频播放器"
          }
        }
      }), (0, _v33.translate)({
        singular: "Password privacy & unlisted links",
        dictionary: {
          es: {
            singular: "Privacidad de la contraseña y enlaces sin listar"
          },
          "de-DE": {
            singular: "Passwortschutz und nicht gelistete Links"
          },
          "fr-FR": {
            singular: "Confidentialité des mots de passe et liens non répertoriés"
          },
          "ja-JP": {
            singular: "パスワードのプライバシーと限定公開リンク"
          },
          "ko-KR": {
            singular: "비밀번호 보호 및 일부 공개 링크"
          },
          "pt-BR": {
            singular: "Privacidade de senha e links não listados"
          },
          "zh-CN": {
            singular: "密码隐私与未公开发布的链接"
          }
        }
      }), (0, _v33.translate)({
        singular: "Review and collaboration tools",
        dictionary: {
          es: {
            singular: "Herramientas de revisión y colaboración"
          },
          "de-DE": {
            singular: "Tools für Prüfung und Zusammenarbeit"
          },
          "fr-FR": {
            singular: "Outils de collaboration et de révision"
          },
          "ja-JP": {
            singular: "レビュー＆共同作業ツール"
          },
          "ko-KR": {
            singular: "리뷰 및 콜라보레이션 도구"
          },
          "pt-BR": {
            singular: "Ferramentas de revisão e colaboração"
          },
          "zh-CN": {
            singular: "审查和协作工具"
          }
        }
      }), (0, _v33.translate)({
        singular: "Engagement analytics",
        dictionary: {
          es: {
            singular: "Estadísticas de interacción"
          },
          "de-DE": {
            singular: "Analysen zur Interaktion"
          },
          "fr-FR": {
            singular: "Analyses liées à l'implication"
          },
          "ja-JP": {
            singular: "エンゲージメント分析"
          },
          "ko-KR": {
            singular: "참여도 분석"
          },
          "pt-BR": {
            singular: "Análise de engajamento"
          },
          "zh-CN": {
            singular: "参与分析"
          }
        }
      }), (0, _v33.translate)({
        singular: "Branding in the player",
        dictionary: {
          es: {
            singular: "Presencia de la marca en el reproductor"
          },
          "de-DE": {
            singular: "Branding im Player"
          },
          "fr-FR": {
            singular: "Branding dans le lecteur"
          },
          "ja-JP": {
            singular: "プレーヤー内でのブランディング"
          },
          "ko-KR": {
            singular: "플레이어 내 브랜딩"
          },
          "pt-BR": {
            singular: "Presença da marca no player"
          },
          "zh-CN": {
            singular: "播放器中的品牌标识"
          }
        }
      }), (0, _v33.translate)({
        singular: "Third party player support",
        dictionary: {
          es: {
            singular: "Compatibilidad con reproductores de terceros"
          },
          "de-DE": {
            singular: "Support für externe Video-Player"
          },
          "fr-FR": {
            singular: "Prise en charge des lecteurs tiers"
          },
          "ja-JP": {
            singular: "Vimeo以外のプレーヤーにも対応"
          },
          "ko-KR": {
            singular: "타사 플레이어 지원"
          },
          "pt-BR": {
            singular: "Suporte para players de terceiros"
          },
          "zh-CN": {
            singular: "第三方播放器支持"
          }
        }
      }), (0, _v33.translate)({
        singular: "Custom watermark",
        dictionary: {
          es: {
            singular: "Marca de agua personalizada"
          },
          "de-DE": {
            singular: "Benutzerdefiniertes Wasserzeichen"
          },
          "fr-FR": {
            singular: "Filigrane personnalisé"
          },
          "ja-JP": {
            singular: "カスタムウォーターマーク"
          },
          "ko-KR": {
            singular: "커스텀 워터마크"
          },
          "pt-BR": {
            singular: "Marca d´água customizada"
          },
          "zh-CN": {
            singular: "自定义水印"
          }
        }
      }), (0, _v33.translate)({
        singular: "Lead capture",
        dictionary: {
          es: {
            singular: "Captura de oportunidades de venta"
          },
          "de-DE": {
            singular: "Lead-Erfassung"
          },
          "fr-FR": {
            singular: "Collecte d'opportunités commerciales"
          },
          "ja-JP": {
            singular: "リードキャプチャー"
          },
          "ko-KR": {
            singular: "리드 수집"
          },
          "pt-BR": {
            singular: "Captura de lead"
          },
          "zh-CN": {
            singular: "线索捕获"
          }
        }
      }), (0, _v33.translate)({
        singular: "Host livestreamed events",
        dictionary: {
          es: {
            singular: "Organice eventos transmitidos en vivo"
          },
          "de-DE": {
            singular: "Veranstalten Sie Livestream-Events"
          },
          "fr-FR": {
            singular: "Héberger des événements en direct"
          },
          "ja-JP": {
            singular: "ライブ配信イベントを主催"
          },
          "ko-KR": {
            singular: "라이브 스트리밍 이벤트 주최"
          },
          "pt-BR": {
            singular: "Hospedar eventos transmitidos ao vivo"
          },
          "zh-CN": {
            singular: "举办直播活动"
          }
        }
      }), (0, _v33.translate)({
        singular: "Events Q&A, polls, and chat",
        dictionary: {
          es: {
            singular: "Sesión de preguntas y respuestas de eventos, encuestas y chat"
          },
          "de-DE": {
            singular: "Event-Fragerunden, Umfragen und Chat"
          },
          "fr-FR": {
            singular: "Questions-réponses, sondages et discussions des événements"
          },
          "ja-JP": {
            singular: "イベントの質問セッション、アンケート、チャット"
          },
          "ko-KR": {
            singular: "이벤트 Q&A, 투표, 채팅"
          },
          "pt-BR": {
            singular: "Perguntas e respostas, enquetes e chat de eventos"
          },
          "zh-CN": {
            singular: "活动问答、投票和聊天"
          }
        }
      }), (0, _v33.translate)({
        singular: "Stream to multiple destinations",
        dictionary: {
          es: {
            singular: "Transmisión a varios destinos"
          },
          "de-DE": {
            singular: "Stream an mehrere Ziele schicken"
          },
          "fr-FR": {
            singular: "Diffusez des vidéos en streaming vers de multiples destinations"
          },
          "ja-JP": {
            singular: "複数の配信先にストリーム"
          },
          "ko-KR": {
            singular: "여러 목적지로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vários destinos"
          },
          "zh-CN": {
            singular: "串流至多个目的地"
          }
        }
      }), (0, _v33.translate)({
        singular: "Marketing automation integrations",
        dictionary: {
          es: {
            singular: "Integraciones de automatización de marketing"
          },
          "de-DE": {
            singular: "Marketing-Automatisierungsintegrationen"
          },
          "fr-FR": {
            singular: "Intégrations d'automatisation marketing"
          },
          "ja-JP": {
            singular: "マーケティングオートメーションのインテグレーション"
          },
          "ko-KR": {
            singular: "마케팅 자동화 통합"
          },
          "pt-BR": {
            singular: "Integrações de automação de marketing"
          },
          "zh-CN": {
            singular: "营销自动化集成"
          }
        }
      }), (0, _v33.translate)({
        singular: "Custom permissions",
        dictionary: {
          es: {
            singular: "Permisos personalizados"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Berechtigungen"
          },
          "fr-FR": {
            singular: "Autorisations personnalisées"
          },
          "ja-JP": {
            singular: "カスタム権限"
          },
          "ko-KR": {
            singular: "커스텀 권한"
          },
          "pt-BR": {
            singular: "Permissões customizadas"
          },
          "zh-CN": {
            singular: "自定义权限"
          }
        }
      }), (0, _v33.translate)({
        singular: "Advanced AI capabilities",
        dictionary: {
          es: {
            singular: "Capacidades de IA de Advanced"
          },
          "de-DE": {
            singular: "Erweiterte KI-Fähigkeiten"
          },
          "fr-FR": {
            singular: "Capacités d'IA avancées"
          },
          "ja-JP": {
            singular: "高度なAI機能"
          },
          "ko-KR": {
            singular: "고급 AI 기능"
          },
          "pt-BR": {
            singular: "Recursos avançados de IA"
          },
          "zh-CN": {
            singular: "高级 AI 功能"
          }
        }
      }), (0, _v33.translate)({
        singular: "SSO (SAML) and SCIM (OKTA, AZURE)",
        dictionary: {
          es: {
            singular: "SSO (SAML) y SCIM (OKTA, AZURE)"
          },
          "de-DE": {
            singular: "SSO (SAML) und SCIM (OKTA, AZURE)"
          },
          "fr-FR": {
            singular: "SSO (SAML) et SCIM (OKTA, AZURE)"
          },
          "ja-JP": {
            singular: "SSO（SAML）と SCIM（OKTA、AZURE）"
          },
          "ko-KR": {
            singular: "SSO(SAML) 및 SCIM(OKTA, AZURE)"
          },
          "pt-BR": {
            singular: "SSO (SAML) e SCIM (OKTA, AZURE)"
          },
          "zh-CN": {
            singular: "SSO (SAML) 和 SCIM（OKTA、AZURE）"
          }
        }
      }), (0, _v33.translate)({
        singular: "Quality events (backup streams, eCDN)",
        dictionary: {
          es: {
            singular: "Eventos de calidad (transmisiones de respaldo, eCDN)"
          },
          "de-DE": {
            singular: "Hochwertige Events (Backup-Streams, eCDN)"
          },
          "fr-FR": {
            singular: "Événements de qualité (streams de secours, eCDN)"
          },
          "ja-JP": {
            singular: "高品質なイベント（バックアップストリーム、eCDN）"
          },
          "ko-KR": {
            singular: "고품질 이벤트(백업 스트림, eCDN)"
          },
          "pt-BR": {
            singular: "Eventos de qualidade (cópias de segurança da transmissão ao vivo, eCDN)"
          },
          "zh-CN": {
            singular: "高质量活动（备份流、eCDN）"
          }
        }
      }), (0, _v33.translate)({
        singular: "Dedicated support",
        dictionary: {
          es: {
            singular: "Asistencia exclusiva"
          },
          "de-DE": {
            singular: "Dedizierter Support"
          },
          "fr-FR": {
            singular: "Assistance dédiée"
          },
          "ja-JP": {
            singular: "専用のサポート"
          },
          "ko-KR": {
            singular: "전담 지원"
          },
          "pt-BR": {
            singular: "Suporte exclusivo"
          },
          "zh-CN": {
            singular: "专门支持"
          }
        }
      }), (0, _v10.jsxs)(_v235, {
        isDemo: _v4 === _v213.TYPE_DEMO,
        children: [(0, _v10.jsx)(_v203, {
          ref: this.trackerRef,
          ...this.getTrackingParams()
        }), (0, _v10.jsx)(_v120, {
          isShowing: _v4 === _v213.TYPE_DEMO,
          onUpgradeClick: () => {
            this.setState({
              modal: _v87
            });
          }
        }), (0, _v10.jsx)(_v211, {
          isShowing: _v5.length > 1 && !!_v17 && !_v17.is_current
        }), _v20 && (0, _v10.jsx)(_v115, {
          disabled: !_v15.allowDownloads,
          isDemo: _v4 === _v213.TYPE_DEMO,
          showLogo: _v12,
          toggleLogo: () => {
            var _v0;
            _v0 = _v12, _v158.FatalAttraction.trackClick({
              container: "video_transfer",
              keyword: `${_v0 ? "disable" : "enable"}_vimeo_logo`
            }), this.toggleLogo();
          },
          onShowDownloadToggle: _v228,
          toggleAllowDownloads: () => {
            var _v0;
            _v0 = _v15.allowDownloads, _v158.FatalAttraction.trackClick({
              container: "video_transfer",
              component: "allow_downloads_notification",
              keyword: `toggle_${_v0 ? "off" : "on"}`
            }), this.toggleAllowDownloads();
          },
          initialAllowDownloads: _v19,
          versions: _v5,
          selectedVersion: _v17,
          switchVersion: _v0 => {
            _v158.FatalAttraction.trackClick({
              container: "video_transfer",
              keyword: "toggle_version"
            }), this.switchVersion(_v0);
          },
          copyLink: () => {
            _v218.BigPictureClient.sendEvent(new _v218.Event("vimeo.upgrade_action", 27, {
              action_type: "click",
              page: "file_transfer_page",
              location: "copy_file_transfer",
              target: "modal",
              upsell_name: "copy_transfer_link",
              copy: "Copy",
              feature: "file_transfer",
              currency: null,
              device_type: null,
              discount_offer: null,
              duration: null,
              is_discount: null,
              is_new_pricing: null,
              loading_time: null,
              path: null,
              plan_selected: null,
              price: null,
              promo_code_id: null,
              purchase_type: null,
              target_path: null,
              upgrade_flags: null
            })), this.copyLink();
          },
          breadcrumb: _v8,
          onClickBreadcrumb: _v229,
          isClipReady: !_v15.isTranscoding,
          hasTeamLogo: !!_v9?.logoUrl
        }), (0, _v10.jsxs)(_v236, {
          children: [_v9?.accentColor ? (0, _v10.jsx)(_v233, {
            color: _v9.accentColor
          }) : (0, _v10.jsx)(_v57.Ribbon, {
            animate: !1,
            style: {
              height: (0, _v19.rem)(3)
            }
          }), _v12 && (0, _v10.jsx)(_v210, {
            teamLogoUrl: _v9 && _v9.logoUrl
          }), (0, _v10.jsx)(_v198, {
            isCreator: _v20,
            hasLogo: _v12,
            clipStatus: _v0,
            clipStatusConfig: _v1,
            isLoading: _v13,
            files: _v14,
            clip: _v15,
            onClipReady: _v0 => {
              this.clipTranscodeComplete(_v0), this.fetchDownloadConfig();
            },
            onClickDownload: _v230,
            onClickDownloadItem: _v231,
            teamName: _v9 && _v9.teamName
          }), !_v15.allowDownloads && (0, _v10.jsx)(_v92, {})]
        }), _v4 === _v213.TYPE_DEMO && (0, _v10.jsx)(_v50, {
          isShowing: _v18 === _v85,
          config: _v6,
          playerAssetUrls: this.props.playerAssetUrls,
          onDismiss: () => this.setState({
            modal: null
          }),
          hiddenLabel: (0, _v33.translate)({
            singular: "Get full access",
            dictionary: {
              es: {
                singular: "Obtén acceso total"
              },
              "de-DE": {
                singular: "Vollzugriff erhalten"
              },
              "fr-FR": {
                singular: "Obtenez le plein accès"
              },
              "ja-JP": {
                singular: "すべての機能を取得"
              },
              "ko-KR": {
                singular: "전체 액세스 받기"
              },
              "pt-BR": {
                singular: "Obtenha acesso completo"
              },
              "zh-CN": {
                singular: "获得完全访问权限"
              }
            }
          }),
          hiddenDescription: (0, _v33.translate)({
            singular: "Send a private link so people can download your file in multiple resolutions.",
            dictionary: {
              es: {
                singular: "Envía un vínculo privado para que tu archivo se pueda descargar en múltiples resoluciones."
              },
              "de-DE": {
                singular: "Sende einen privaten Link, über den deine Videodatei in verschiedenen Auflösungen heruntergeladen werden kann."
              },
              "fr-FR": {
                singular: "Envoyez un lien privé pour télécharger votre fichier vidéo en différentes résolutions."
              },
              "ja-JP": {
                singular: "プライベートリンクを送信し様々な解像度でファイルをダウンロード。"
              },
              "ko-KR": {
                singular: "사람들이 다양한 해상도로 동영상 파일을 다운로드할 수 있도록 비공개 파일을 전송하세요."
              },
              "pt-BR": {
                singular: "Envie um link privado para que as pessoas possam baixar seu arquivo em várias resoluções."
              },
              "zh-CN": {
                singular: "发送专用链接，用户便可下载不同分辨率的视频。"
              }
            }
          })
        }), _v4 === _v213.TYPE_DEMO && _v18 === _v86 && (0, _v10.jsx)(_v232, {
          apiUrl: _v10.apiUrl,
          userConfig: {
            jwt: _v10.jwt,
            userId: _v10?.user?.id
          },
          templateType: "default",
          onClose: () => this.setState({
            modal: null
          }),
          tracking: {
            params: {
              feature: "file_transfer_send_file",
              location: "Send_file_copy_link",
              page: "File transfer",
              upsell_name: "file_transfer_send_file"
            },
            paywallTracking: {
              paywallTrigger: "file_transfer_copy_link_button",
              paywallLocation: "file_transfer",
              paywallType: "popup",
              paywallFeature: "file_transfer"
            }
          },
          modalConfig: _v59.includedInAllPlansModalConfig
        }), _v18 === _v87 && (0, _v10.jsx)(_v21.LightMode, {
          children: (0, _v10.jsx)(_v232, {
            apiUrl: _v10.apiUrl,
            userConfig: {
              jwt: _v10.jwt,
              userId: _v10?.user?.id
            },
            templateType: "default",
            onClose: () => this.setState({
              modal: null
            }),
            tracking: {
              params: {
                feature: "file_transfer_send_file",
                location: "Send_file_floating",
                page: "File transfer",
                upsell_name: "file_transfer_send_file"
              },
              paywallTracking: {
                paywallTrigger: "file_transfer_floating_upgrade_button",
                paywallLocation: "file_transfer",
                paywallType: "popup",
                paywallFeature: "file_transfer"
              }
            },
            modalConfig: _v59.includedInAllPlansModalConfig
          })
        }), _v4 === _v213.TYPE_DEMO && (0, _v10.jsx)(_v29, {
          title: (0, _v33.translate)({
            singular: "Send files for download",
            dictionary: {
              es: {
                singular: "Enviar archivos para la descarga"
              },
              "de-DE": {
                singular: "Senden Sie Dateien zum Herunterladen"
              },
              "fr-FR": {
                singular: "Envoyer des fichiers à télécharger"
              },
              "ja-JP": {
                singular: "ダウンロード用にファイルを送信"
              },
              "ko-KR": {
                singular: "다운로드할 파일 보내기"
              },
              "pt-BR": {
                singular: "Enviar arquivos para download"
              },
              "zh-CN": {
                singular: "发送文件供下载"
              }
            }
          }),
          description: (0, _v33.translate)({
            singular: "Get a private link to your video that people can download in multiple resolutions.",
            dictionary: {
              es: {
                singular: "Obtenga un enlace privado a su video que las personas puedan descargar en múltiples resoluciones."
              },
              "de-DE": {
                singular: "Sie erhalten einen privaten Link zu Ihrem Video, den die Personen in verschiedenen Auflösungen herunterladen können.chiedenen Auflösungen herunterladen können."
              },
              "fr-FR": {
                singular: "Obtenez un lien privé vers votre vidéo pour permettre son téléchargement avec différentes résolutions."
              },
              "ja-JP": {
                singular: "複数の解像度でダウンロードできる動画へのプライベートリンクを取得します。"
              },
              "ko-KR": {
                singular: "다양한 해상도로 다운로드할 수 있는 동영상의 비공개 링크를 받으세요."
              },
              "pt-BR": {
                singular: "Obtenha um link privado para que as pessoas possam baixar o vídeo em várias resoluções."
              },
              "zh-CN": {
                singular: "获取视频的专用链接，让用户可以下载不同分辨率的视频。"
              }
            }
          }),
          primaryButtonText: (0, _v33.translate)({
            singular: "Upgrade",
            dictionary: {
              es: {
                singular: "Actualizar"
              },
              "de-DE": {
                singular: "Upgraden"
              },
              "fr-FR": {
                singular: "Mettre à niveau"
              },
              "ja-JP": {
                singular: "アップグレード"
              },
              "ko-KR": {
                singular: "업그레이드"
              },
              "zh-CN": {
                singular: "升级"
              }
            }
          }),
          secondaryButtonIcon: (0, _v10.jsx)(_v56.Play, {}),
          onClickSecondaryButton: () => this.setState({
            modal: _v85
          }),
          secondaryButtonText: (0, _v33.translate)({
            singular: "Learn more",
            dictionary: {
              es: {
                singular: "Ver más"
              },
              "de-DE": {
                singular: "Mehr dazu"
              },
              "fr-FR": {
                singular: "En savoir plus "
              },
              "ja-JP": {
                singular: "詳細を見る"
              },
              "ko-KR": {
                singular: "자세히 보기"
              },
              "pt-BR": {
                singular: "Saiba mais"
              },
              "zh-CN": {
                singular: "了解更多"
              }
            }
          }),
          impressionTracking: () => {
            var _v0;
            let _v1, _v2, _v3;
            return _v0 = "download_video_file", _v1 = (0, _v224.buildProductAnalyticsBpContext)({
              feature: "file_transfer",
              location: "bottom",
              product: "collaboration"
            }), _v2 = (0, _v223.buildWebBpContext)({
              page_name: _v0,
              location: null,
              path: window.location.pathname,
              target: "upgrade_page",
              copy: "upgrade",
              referrer_page_name: _v0
            }), _v3 = {
              ..._v226,
              ..._v1,
              ..._v2,
              ..._v225,
              upsell_name: "file_transfer_send_file",
              upsell_feature_category: "file_transfer_send_file",
              upsell_specific_feature: "file_transfer_send_file",
              upsell_badge_location: "send_file_floating"
            }, void (0, _v219.sendBpEventWithContexts)("vimeo.upsell_trigger_impression", _v3);
          },
          onClickPrimaryButton: () => {
            var _v0;
            let _v1, _v2, _v3;
            _v0 = "download_video_file", _v1 = (0, _v224.buildProductAnalyticsBpContext)({
              feature: "file_transfer",
              location: "bottom",
              product: "collaboration"
            }), _v2 = (0, _v223.buildWebBpContext)({
              page_name: _v0,
              location: null,
              path: window.location.pathname,
              target: "upgrade_page",
              copy: "upgrade",
              referrer_page_name: _v0
            }), _v3 = {
              ..._v227,
              ..._v1,
              ..._v2,
              ..._v225,
              upsell_name: "file_transfer_send_file",
              upsell_feature_category: "file_transfer_send_file",
              upsell_specific_feature: "file_transfer_send_file",
              upsell_badge_location: "send_file_floating"
            }, (0, _v219.sendBpEventWithContexts)("vimeo.trigger_upsell", _v3), this.setState({
              modal: _v87
            });
          }
        }), (0, _v10.jsx)(_v55.Notification, {
          status: "neutral",
          showing: !!_v16,
          onComplete: this.hideToast,
          content: _v16 || ""
        })]
      });
    }
  }
  let _v235 = _v13.default.div.withConfig({
      displayName: "FileTransfer__FileTransferStyled",
      componentId: "sc-b47fd9ec-1"
    })`
  position: relative;
  min-height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  background-color: ${(0, _v54.grayscale)(850)};
  border: ${_v0 => _v0.isDemo ? `${(0, _v19.rem)(3)} solid ${(0, _v54.blue)(600)}` : "none"};
  border-top: none;

  @media screen and (max-width: ${(0, _v19.rem)(768)}) {
    border: none;
    padding-bottom: ${_v0 => _v0.isDemo ? (0, _v19.rem)(160) : 0};
  }
`,
    _v236 = _v13.default.div.withConfig({
      displayName: "FileTransfer__ContentAreaStyled",
      componentId: "sc-b47fd9ec-2"
    })`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  background-color: ${(0, _v54.grayscale)(850)};
  flex-grow: 1;
`,
    _v237 = _v13.createGlobalStyle`
  html, body, #file_transfer_mount {
      padding: 0;
      margin: 0;
      height: 100%;
  }
`,
    _v238 = _v13.default.div.withConfig({
      displayName: "AppLoadingState__LoadingPage",
      componentId: "sc-d843ef28-0"
    })`
  min-height: 100vh;
  background: ${_v22.bokehTheme.colors.gray["800"]};
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`,
    _v239 = _v13.default.div.withConfig({
      displayName: "AppLoadingState__LoaderWrapper",
      componentId: "sc-d843ef28-1"
    })`
  text-align: center;
`,
    _v240 = ({
      isLoadingOK: _v0
    }) => (0, _v10.jsxs)(_v10.Fragment, {
      children: [(0, _v10.jsx)(_v57.Ribbon, {
        animate: !1,
        style: {
          height: (0, _v19.rem)(3)
        }
      }), (0, _v10.jsx)(_v237, {}), (0, _v10.jsx)(_v238, {
        children: (0, _v10.jsx)(_v239, {
          children: (0, _v10.jsx)(_v71.Spinner, {})
        })
      }), (0, _v10.jsx)(_v55.Notification, {
        status: "neutral",
        showing: !_v0,
        content: (0, _v33.translate)({
          singular: "Oops, something went wrong. Please try again.",
          dictionary: {
            es: {
              singular: "Ups, algo salió mal. Vuelve a intentarlo."
            },
            "de-DE": {
              singular: "Oops, etwas ist schief gelaufen. Bitte versuche es nochmal."
            },
            "fr-FR": {
              singular: "Oups ! Une erreur s'est produite. Veuillez réessayer."
            },
            "ja-JP": {
              singular: "エラーが発生しました。再度お試しください。"
            },
            "ko-KR": {
              singular: "앗, 문제가 발생했습니다. 다시 시도해주세요."
            },
            "pt-BR": {
              singular: "Ops, algo deu errado. Por favor, tente novamente."
            },
            "zh-CN": {
              singular: "哎呀，出错了。请重试。"
            }
          }
        })
      })]
    });
  var _v241 = _v0.i(0),
    _v242 = _v0.i(0);
  let _v243 = _v13.default.div.withConfig({
      displayName: "style__PrivacyContainerStyled",
      componentId: "sc-f3d9641c-0"
    })`
  background-color: #252525;
  flex: 1 0 auto;
  font-weight: 700;
`,
    _v244 = _v13.default.div.withConfig({
      displayName: "style__PasswordFormWrapper",
      componentId: "sc-f3d9641c-1"
    })`
  display: flex;
  flex-direction: row;
  justify-content: center;
`,
    _v245 = (0, _v13.default)(_v25.Header).withConfig({
      displayName: "style__Header",
      componentId: "sc-f3d9641c-2"
    })`
  margin-top: ${(0, _v19.rem)(137)};
  color: ${_v22.bokehTheme.colors.white};
  font-weight: 700;
  text-align: center;

  @media screen and (max-width: ${(0, _v19.rem)(480)}) {
    font-size: ${(0, _v19.rem)(30)};
  }
`,
    _v246 = (0, _v13.default)(_v242.Password).withConfig({
      displayName: "style__PasswordInput",
      componentId: "sc-f3d9641c-3"
    })`
  flex: 1;
  input {
    height: ${(0, _v19.rem)(40)};
  }
`,
    _v247 = (0, _v13.default)(_v23.Button).withConfig({
      displayName: "style__Button",
      componentId: "sc-f3d9641c-4"
    })`
  margin-left: ${(0, _v19.rem)(5)};
  user-select: none;
  @media screen and (max-width: ${(0, _v19.rem)(480)}) {
    margin-left: 0;
    margin-top: ${(0, _v19.rem)(10)};
  }
`,
    _v248 = _v13.default.div.withConfig({
      displayName: "style__InputWrapper",
      componentId: "sc-f3d9641c-5"
    })`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  font-size: ${(0, _v19.rem)(14)};

  // Set the flex-grow proportion for the iris input's wrapper
  > div:first-child {
    flex: 4;
  }

  @media screen and (max-width: ${(0, _v19.rem)(480)}) {
    flex-direction: column;
  }
`,
    _v249 = _v13.default.div.withConfig({
      displayName: "style__PasswordForm",
      componentId: "sc-f3d9641c-6"
    })`
  display: flex;
  flex-direction: column;
  max-width: ${(0, _v19.rem)(400)};
  flex: 0.47;

  @media screen and (max-width: ${(0, _v19.rem)(768)}) {
    flex: 0.8;
  }

  @media screen and (max-width: ${(0, _v19.rem)(480)}) {
    margin: 0 ${(0, _v19.rem)(20)};
    flex: 1;
  }
`,
    _v250 = (0, _v13.default)(({
      error: _v0,
      className: _v1
    }) => (0, _v10.jsx)(_v94.Notice, {
      format: "negative",
      className: _v1,
      children: _v0
    })).withConfig({
      displayName: "StyledErrorNotification",
      componentId: "sc-97dc1b81-0"
    })`
  margin-top: 0.625rem;
  background-color: ${_v22.bokehTheme.colors.red["50"]};
  color: ${_v22.bokehTheme.colors.gray["600"]};
`;
  var _v251 = ((_v8 = {}).isReview = "is_review", _v8.isFileTransfer = "is_file_transfer", _v8),
    _v252 = ((_v9 = {}).Enter = "Enter", _v9);
  let _v253 = ({
    onUnlock: _v0,
    clipId: _v1,
    xsrft: _v2,
    appId: _v3,
    clipHash: _v4
  }) => {
    let [_v5, _v6] = (0, _v12.useState)(""),
      [_v7, _v8] = (0, _v12.useState)(!1),
      [_v9, _v10] = (0, _v12.useState)(null),
      _v11 = async _v0 => {
        if (_v0.preventDefault(), _v5.length > 0) {
          _v8(!0);
          let _v0 = new FormData();
          _v0.append("password", _v5), _v0.append(_v3, "1"), _v0.append("token", _v2), _v0.append("clip_hash", _v4);
          try {
            (await fetch(`/${_v1}/password`, {
              method: "POST",
              credentials: "include",
              body: _v0
            })).ok ? _v0() : _v10((0, _v33.translate)({
              singular: "Sorry, that password was incorrect. Please try again.",
              dictionary: {
                es: {
                  singular: "Lo sentimos, pero esta contraseña es incorrecta. Inténtalo de nuevo."
                },
                "de-DE": {
                  singular: "Leider ist das Kennwort falsch. Bitte noch einmal versuchen."
                },
                "fr-FR": {
                  singular: "Désolé, ce mot de passe est incorrect. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "パスワードが間違っています。再度お試しください。"
                },
                "ko-KR": {
                  singular: "죄송합니다, 잘못된 비밀번호입니다. 올바른 비밀번호로 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Desculpe, mas a senha estava incorreta. Tente de novo."
                },
                "zh-CN": {
                  singular: "抱歉，密码不正确。请重试。"
                }
              }
            }));
          } catch (_v0) {
            _v10((0, _v33.translate)({
              singular: "Sorry, there was an error",
              dictionary: {
                es: {
                  singular: "Lo sentimos; hubo un error."
                },
                "de-DE": {
                  singular: "Leider ergab sich ein Fehler"
                },
                "fr-FR": {
                  singular: "Désolé, une erreur est survenue"
                },
                "ja-JP": {
                  singular: "エラーが発生しました"
                },
                "ko-KR": {
                  singular: "죄송합니다, 오류가 발생했습니다"
                },
                "pt-BR": {
                  singular: "Desculpe, mas ocorreu um erro"
                },
                "zh-CN": {
                  singular: "抱歉，出错了"
                }
              }
            }));
          }
          _v8(!1);
        }
      };
    return (0, _v10.jsx)(_v13.ThemeProvider, {
      theme: _v35.themes.light,
      children: (0, _v10.jsxs)(_v243, {
        children: [(0, _v10.jsx)(_v57.Ribbon, {
          animate: !1,
          style: {
            height: (0, _v19.rem)(3)
          }
        }), (0, _v10.jsx)(_v244, {
          children: (0, _v10.jsxs)(_v249, {
            children: [(0, _v10.jsx)(_v245, {
              size: "1",
              variant: "normal",
              children: (0, _v33.translate)({
                singular: "This video is private",
                dictionary: {
                  es: {
                    singular: "Este video es privado"
                  },
                  "de-DE": {
                    singular: "Dieses Video ist privat"
                  },
                  "fr-FR": {
                    singular: "Cette vidéo est privée"
                  },
                  "ja-JP": {
                    singular: "この動画はプライベートです。"
                  },
                  "ko-KR": {
                    singular: "이 동영상은 비공개 동영상입니다."
                  },
                  "pt-BR": {
                    singular: "Este vídeo é privado"
                  },
                  "zh-CN": {
                    singular: "此视频为私人视频"
                  }
                }
              })
            }), (0, _v10.jsxs)(_v248, {
              children: [(0, _v10.jsx)(_v246, {
                id: "privacy-password-input",
                placeholder: (0, _v33.translate)({
                  singular: "Enter password",
                  dictionary: {
                    es: {
                      singular: "Ingresar la contraseña"
                    },
                    "de-DE": {
                      singular: "Bitte Kennwort eingeben"
                    },
                    "fr-FR": {
                      singular: "Saisir mot de passe"
                    },
                    "ja-JP": {
                      singular: "パスワードを入力"
                    },
                    "ko-KR": {
                      singular: "비밀번호 입력"
                    },
                    "pt-BR": {
                      singular: "Digite a senha"
                    },
                    "zh-CN": {
                      singular: "输入密码"
                    }
                  }
                }),
                value: _v5,
                onChange: _v0 => _v6(_v0.target.value),
                disabled: _v7,
                onKeyDown: _v0 => {
                  _v0.key === _v252.Enter && _v11(_v0);
                }
              }), (0, _v10.jsx)(_v247, {
                onClick: _v11,
                disabled: _v7,
                size: "md",
                children: (0, _v33.translate)({
                  singular: "Submit",
                  dictionary: {
                    es: {
                      singular: "Enviar"
                    },
                    "de-DE": {
                      singular: "Senden"
                    },
                    "fr-FR": {
                      singular: "Envoyer"
                    },
                    "ja-JP": {
                      singular: "送信"
                    },
                    "ko-KR": {
                      singular: "제출"
                    },
                    "pt-BR": {
                      singular: "Enviar"
                    },
                    "zh-CN": {
                      singular: "提交"
                    }
                  }
                })
              })]
            }), _v9 && (0, _v10.jsx)(_v250, {
              error: _v9
            })]
          })
        })]
      })
    });
  };
  var _v254 = _v0.i(0),
    _v255 = _v0.i(0);
  let _v256 = _v13.createGlobalStyle`
    html {
        box-sizing: border-box;
        padding: 0;
        font-size: 16px;
        font-family: Arial, system-ui, sans-serif;
    }

    body {
        margin: 0;
    }

    *, *:before, *:after {
        box-sizing: inherit
    }

    blockquote, dl, dd, h1, h2, h3, h4, h5, h6, figure, p, pre, ul, li {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }
`;
  function _v257(_v0) {
    let [_v1, _v2] = (0, _v12.useState)(null),
      [_v3, _v4] = (0, _v12.useState)(!0),
      {
        setTheme: _v5
      } = (0, _v12.useContext)(_v15.ThemeDispatchContext),
      _v6 = (0, _v12.useContext)(_v254.ViewerContext),
      {
        match: _v7
      } = _v0,
      {
        jwt: _v8 = "",
        apiUrl: _v9 = "",
        xsrft: _v10 = "",
        user: _v11 = null
      } = _v6 || {},
      _v12 = (0, _v12.useMemo)(() => _v6 && _v7 && {
        match: _v7,
        jwt: _v8,
        apiUrl: _v9,
        xsrft: _v10,
        user: _v11
      }, [_v9, _v8, _v7, _v10, _v11, _v6]),
      _v13 = (0, _v12.useCallback)(() => {
        if (!_v12) return;
        let _v0 = async () => {
          let _v0 = _v217(_v213.TYPE_FULL, _v12);
          try {
            let _v0 = await _v0.get(_v214.LOAD_CONFIG_DATA);
            if (!_v0.ok) throw Error();
            if (_v0.ok && _v0.json) {
              let _v0 = await _v0.json();
              if (!_v0.hasOwnProperty("requirePassword")) {
                var _v1;
                if (_v0.teamSettings?.accentColor) {
                  let _v0 = {
                    ..._v35.themes.dark,
                    formats: {
                      ..._v35.themes.dark.formats,
                      primary: _v0.teamSettings.accentColor
                    }
                  };
                  _v5(_v0);
                } else _v5(_v35.themes.dark);
                _v0.clipStatus = (0, _v16.camelize)(_v0.clipStatus), _v1 = _v0.clip, _v0.clip = _v0.mode === _v213.TYPE_DEMO ? {
                  ..._v1,
                  allowDownloads: !0
                } : {
                  ..._v1,
                  allowDownloads: !!_v1.allowDownloads
                }, _v0.versions = _v0.versions.map(_v67), _v0.demoUpsellConfig = (0, _v16.camelize)(_v0.demoUpsellConfig), _v2(_v0);
              } else _v2(_v0);
            }
          } catch (_v0) {
            _v4(!1);
          }
        };
        _v12 && _v0();
      }, [_v12, _v5]);
    (0, _v12.useEffect)(() => {
      _v13();
    }, [_v13]);
    let _v14 = _v1 && !_v1.hasOwnProperty("requirePassword") ? _v1.clip.title : null,
      _v15 = (0, _v10.jsxs)(_v11.default, {
        children: [(0, _v10.jsx)("title", {
          children: _v14 ? (0, _v241.translate)({
            singular: "{PAGE_TITLE} on Vimeo",
            replacements: {
              PAGE_TITLE: _v14
            },
            dictionary: {
              es: {
                singular: "{PAGE_TITLE} en Vimeo"
              },
              "de-DE": {
                singular: "{PAGE_TITLE} auf Vimeo"
              },
              "fr-FR": {
                singular: "{PAGE_TITLE} sur Vimeo"
              },
              "ja-JP": {
                singular: "{PAGE_TITLE} をVimeoで"
              },
              "ko-KR": {
                singular: "{PAGE_TITLE} — Vimeo에서"
              },
              "pt-BR": {
                singular: "{PAGE_TITLE} no Vimeo"
              },
              "zh-CN": {
                singular: "{PAGE_TITLE} 在 Vimeo 上"
              }
            }
          }) : "Vimeo"
        }), (0, _v10.jsx)("meta", {
          name: "robots",
          content: "noindex, nofollow"
        })]
      });
    return _v1 && _v12 && _v7 ? (_v1.isClipBlocked && _v1.clip.clipUrl && (window.location.href = _v1.clip.clipUrl), (0, _v10.jsxs)(_v10.Fragment, {
      children: [_v15, (0, _v10.jsx)(_v256, {}), _v1.hasOwnProperty("requirePassword") ? (0, _v10.jsx)(_v253, {
        onUnlock: () => _v13(),
        clipId: Number(_v7.params.clipId),
        xsrft: _v10,
        appId: _v251.isFileTransfer,
        clipHash: _v7.params.clipHash
      }) : (0, _v10.jsx)(_v234, {
        ..._v1,
        apiConfig: _v12,
        playerAssetUrls: _v0.playerAssetUrls,
        breadcrumb: _v14.default.get(),
        viewer: _v6
      })]
    })) : (0, _v10.jsxs)(_v10.Fragment, {
      children: [_v15, (0, _v10.jsx)(_v256, {}), (0, _v10.jsx)(_v240, {
        isLoadingOK: _v3
      })]
    });
  }
  _v257.getLayout = _v0 => (0, _v10.jsx)(_v255.ReactRouterLayout, {
    path: "/:username/download/:clipId/:clipHash",
    children: _v0
  }), (0, _v17.withPageSetup)(() => ({
    props: {
      omitEsi: !0
    }
  }), {
    inlineViewer: "all",
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v257], 0);
}