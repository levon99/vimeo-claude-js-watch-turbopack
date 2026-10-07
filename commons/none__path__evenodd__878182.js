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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = _v0 => (0, _v1.jsx)(_v16.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.087 5.07c1.115.115 2.269-.1 3.563-1.071a1 1 0 0 1 1.6.8v11.25a1 1 0 0 1-.4.8c-1.706 1.28-3.364 1.626-4.969 1.46-1.511-.156-2.943-.77-4.21-1.313l-.065-.028c-1.342-.575-2.512-1.068-3.693-1.19-.999-.103-2.029.059-3.163.792v3.979a1 1 0 1 1-2 0V4.799a1 1 0 0 1 .4-.8c1.706-1.28 3.364-1.626 4.969-1.46 1.511.156 2.943.77 4.21 1.313l.065.028c1.342.575 2.512 1.068 3.693 1.19ZM4.75 14.303a6.548 6.548 0 0 1 3.369-.514c1.511.156 2.943.77 4.21 1.313l.065.028c1.342.575 2.512 1.068 3.693 1.19.999.103 2.029-.06 3.163-.792V6.545a6.549 6.549 0 0 1-3.368.514c-1.512-.156-2.944-.77-4.21-1.313l-.066-.028c-1.342-.575-2.512-1.068-3.693-1.19-.999-.103-2.029.06-3.163.792v8.983Z",
      fill: "currentColor"
    })
  });
  _v0.s(["Flag", 0, _v17], 0);
  var _v18 = _v0.i(0);
  let _v19 = {
      send: _v0.i(0).Send,
      comment: _v14.Comment,
      "3-layers": _v12._3Layers,
      clock: _v13.Clock,
      "download-import": _v15.DownloadImport,
      flag: _v17,
      heart: _v18.Heart
    },
    _v20 = ({
      iconName: _v0
    }) => {
      let _v1 = (0, _v2.useRef)(null),
        _v2 = (0, _v2.useRef)(null),
        {
          colorMode: _v3
        } = (0, _v9.useColorMode)(),
        [_v4, _v5] = (0, _v2.useState)(!1);
      (0, _v2.useEffect)(() => {
        _v2.current && (_v1.current && _v1.current.destroy(), _v1.current = _v7.default.loadAnimation({
          container: _v2?.current,
          loop: !1,
          autoplay: !1,
          path: `https://f.vimeocdn.com/motion/bokeh_${_v0}_${_v3}.json`
        }));
      }, [_v0, _v3]);
      let _v6 = _v19[_v0];
      return (0, _v2.useEffect)(() => {
        let _v0 = _v2.current?.closest(".chakra-button");
        if (!_v0) return () => {};
        let _v1 = () => {
            _v5(!0), _v1.current?.play();
          },
          _v2 = () => {
            _v5(!1), _v1.current?.stop();
          };
        return _v0.addEventListener("mouseenter", _v1), _v0.addEventListener("mouseleave", _v2), () => {
          _v0 && (_v0.removeEventListener("mouseenter", _v1), _v0.removeEventListener("mouseleave", _v2));
        };
      }, []), (0, _v1.jsxs)(_v8.Center, {
        position: "relative",
        boxSize: _v11.bokehTheme.components.Button.sizes?.sm?.svg?.width ?? "20px",
        children: [(0, _v1.jsx)(_v8.Center, {
          display: _v4 ? "none" : "flex",
          children: (0, _v1.jsx)(_v6, {})
        }), (0, _v1.jsx)(_v8.Center, {
          ref: _v2,
          display: _v4 ? "flex" : "none"
        })]
      });
    };
  _v0.s(["HoverAnimatedIcon", 0, _v20], 0);
  let _v21 = ({
    likedVideo: _v0,
    isAnimating: _v1,
    setIsAnimating: _v2
  }) => {
    let _v3 = (0, _v2.useRef)(null),
      _v4 = (0, _v2.useRef)(null),
      {
        colorMode: _v5
      } = (0, _v9.useColorMode)();
    return (0, _v2.useEffect)(() => {
      _v4.current && (_v3.current && _v3.current.destroy(), _v3.current = _v7.default.loadAnimation({
        container: _v4.current,
        loop: !1,
        autoplay: !1,
        path: `https://f.vimeocdn.com/motion/bokeh_heart_click_${_v5}.json`
      }), _v3.current.addEventListener("complete", () => {
        _v2(!1);
      }));
    }, [_v5]), (0, _v2.useEffect)(() => {
      _v1 && _v3.current && (_v3.current.goToAndStop(0, !0), _v3.current.play());
    }, [_v1]), (0, _v1.jsxs)(_v8.Center, {
      boxSize: _v11.bokehTheme.components.Button.sizes?.sm?.svg?.width ?? "20px",
      position: "relative",
      overflow: "visible",
      children: [!_v0 && !_v1 && (0, _v1.jsx)(_v8.Center, {
        position: "absolute",
        zIndex: 3,
        inset: "0",
        children: (0, _v1.jsx)(_v20, {
          iconName: "heart"
        })
      }), _v0 && !_v1 && (0, _v1.jsx)(_v8.Center, {
        position: "absolute",
        zIndex: 3,
        inset: "0",
        children: (0, _v1.jsx)(_v10.HeartFilled, {
          color: "#FB1409",
          boxSize: "sm"
        })
      }), (0, _v1.jsx)(_v8.Center, {
        ref: _v4,
        position: "absolute",
        top: "-1px",
        left: "-1px",
        boxSize: "22px",
        zIndex: 3 * !!_v1,
        opacity: +!!_v1,
        pointerEvents: "none"
      })]
    });
  };
  _v0.s(["AnimatedLikeButton", 0, ({
    isLiked: _v0,
    isDisabled: _v1 = !1,
    likesCount: _v2,
    isLoading: _v3 = !1,
    disableTooltips: _v4 = !1,
    variant: _v5 = "minimal",
    onLikeClick: _v6
  }) => {
    let [_v7, _v8] = (0, _v2.useState)(!1),
      _v9 = (0, _v6.humanize)(_v2 ?? 0);
    return (0, _v1.jsx)(_v5.Tooltip, {
      label: _v0 ? (0, _v6.translate)({
        singular: "Unlike",
        dictionary: {
          es: {
            singular: "Ya no me gusta"
          },
          "de-DE": {
            singular: "Gefällt mir nicht mehr"
          },
          "fr-FR": {
            singular: "Je n'aime plus"
          },
          "ja-JP": {
            singular: "と違い、"
          },
          "ko-KR": {
            singular: "싫어요"
          },
          "pt-BR": {
            singular: "Remover curtida"
          },
          "zh-CN": {
            singular: "不喜欢"
          }
        }
      }) : (0, _v6.translate)({
        singular: "Like",
        dictionary: {
          es: {
            singular: "Me gusta"
          },
          "fr-FR": {
            singular: "J'aime"
          },
          "ja-JP": {
            singular: "いいね"
          },
          "ko-KR": {
            singular: "좋아하기"
          },
          "pt-BR": {
            singular: "Curtir"
          },
          "zh-CN": {
            singular: "喜欢"
          }
        }
      }),
      isDisabled: _v4,
      placement: "top",
      closeOnClick: !1,
      children: (0, _v1.jsx)(_v3.Button, {
        onClick: () => {
          _v3 || (_v0 || _v8(!0), _v6?.());
        },
        variant: _v5,
        size: "sm",
        leftIcon: (0, _v1.jsx)(_v21, {
          likedVideo: _v0,
          isAnimating: _v7,
          setIsAnimating: _v8
        }),
        isDisabled: _v3 || _v1,
        _disabled: {
          opacity: 1
        },
        "data-type": "icon-button",
        zIndex: 1,
        children: _v2 ? (0, _v1.jsx)(_v4.Flex, {
          as: "span",
          minW: `${.5 * _v9.length}rem`,
          justifyContent: "center",
          children: _v9
        }) : null
      })
    });
  }], 0);
}