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
    _v11 = _v0.i(0);
  let _v12 = ({
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
      boxSize: "xs",
      position: "relative",
      children: [!_v0 && !_v1 && (0, _v1.jsx)(_v8.Center, {
        position: "absolute",
        zIndex: 3,
        top: "2px",
        left: "2px",
        children: (0, _v1.jsx)(_v11.HoverAnimatedIcon, {
          iconName: "heart"
        })
      }), _v0 && !_v1 && (0, _v1.jsx)(_v8.Center, {
        position: "absolute",
        zIndex: 3,
        top: "2px",
        left: "2px",
        children: (0, _v1.jsx)(_v10.HeartFilled, {
          color: "#FB1409",
          boxSize: "sm"
        })
      }), (0, _v1.jsx)(_v8.Center, {
        ref: _v4,
        position: "absolute",
        top: "1px",
        left: "1px",
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
        leftIcon: (0, _v1.jsx)(_v12, {
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
          width: `${.5 * _v9.length}rem`,
          textAlign: "left",
          children: _v9
        }) : null
      })
    });
  }], 0);
}