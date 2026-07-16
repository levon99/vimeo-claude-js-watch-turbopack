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
    _v12 = _v0.i(0);
  let _v13 = ({
    totalVideos: _v0,
    totalFollowers: _v1,
    textVariant: _v2 = "body-xl",
    videosHref: _v3,
    followersHref: _v4,
    ..._v5
  }) => {
    let _v6 = void 0 !== _v0,
      _v7 = void 0 !== _v1,
      _v8 = _v6 ? (0, _v12.translate)({
        singular: "{COUNT} video",
        plural: "{COUNT} videos",
        count: _v0,
        replacements: {
          COUNT: (0, _v12.humanize)(_v0)
        },
        dictionary: {
          "de-DE": {
            singular: "{COUNT} Video",
            plural: "{COUNT} Videos"
          },
          "fr-FR": {
            singular: "{COUNT} vidéo",
            plural: "{COUNT} vidéos"
          },
          "ja-JP": {
            singular: "{COUNT} 件の動画",
            plural: "{COUNT}件の動画"
          },
          "ko-KR": {
            singular: "동영상 {COUNT}개",
            plural: "동영상 {COUNT}개"
          },
          "pt-BR": {
            singular: "{COUNT} vídeo",
            plural: "{COUNT} vídeos"
          },
          "zh-CN": {
            singular: "{COUNT} 个视频",
            plural: "{COUNT} 个视频"
          }
        }
      }) : "",
      _v9 = _v7 ? (0, _v12.translate)({
        singular: "{COUNT} follower",
        plural: "{COUNT} followers",
        count: _v1,
        replacements: {
          COUNT: (0, _v12.humanize)(_v1)
        },
        dictionary: {
          es: {
            singular: "{COUNT} seguidor",
            plural: "{COUNT} seguidores"
          },
          "de-DE": {
            singular: "{COUNT} Follower",
            plural: "{COUNT} Follower"
          },
          "fr-FR": {
            singular: "{COUNT} abonné",
            plural: "{COUNT} abonnés"
          },
          "ja-JP": {
            singular: "{COUNT} 人のフォロワー",
            plural: "{COUNT} 人のフォロワー"
          },
          "ko-KR": {
            singular: "팔로워 {COUNT}명",
            plural: "팔로워 {COUNT}명"
          },
          "pt-BR": {
            singular: "{COUNT} seguidor",
            plural: "{COUNT} seguidores"
          },
          "zh-CN": {
            singular: "{COUNT} 名粉丝",
            plural: "{COUNT} 名粉丝"
          }
        }
      }) : "";
    return _v6 || _v7 ? (0, _v1.jsxs)(_v9.HStack, {
      spacing: "0",
      ..._v5,
      children: [_v6 ? (0, _v1.jsx)(_v7.Text, {
        variant: _v2,
        fontSize: "text-sm",
        color: "text-secondary",
        textAlign: "center",
        ...(_v3 ? {
          as: "a",
          href: _v3
        } : {}),
        children: _v8
      }) : null, _v6 && _v7 ? (0, _v1.jsx)(_v7.Text, {
        as: "span",
        variant: _v2,
        mx: 50,
        "aria-hidden": "true",
        fontSize: "text-sm",
        color: "text-secondary",
        children: "·"
      }) : null, _v7 ? (0, _v1.jsx)(_v7.Text, {
        variant: _v2,
        fontSize: "text-sm",
        color: "text-secondary",
        textAlign: "center",
        ...(_v4 ? {
          as: "a",
          href: _v4
        } : {}),
        children: _v9
      }) : null]
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  };
  _v0.s(["CoverCard", 0, ({
    name: _v0,
    src: _v1 = "https://i.vimeocdn.com/video/default_640x360",
    srcSet: _v2,
    flairUrl: _v3,
    alt: _v4,
    description: _v5,
    totalVideos: _v6,
    totalFollowers: _v7,
    children: _v8,
    ..._v9
  }) => (0, _v1.jsxs)(_v4.Card, {
    position: "relative",
    p: {
      base: "md",
      md: "lg"
    },
    gap: {
      base: "md",
      md: "lg"
    },
    justifyContent: "flex-end",
    border: "0.5px solid",
    borderColor: "stroke",
    borderRadius: "md",
    overflow: "hidden",
    ..._v9,
    children: [(0, _v1.jsx)(_v10.bokeh.img, {
      alt: _v4 ?? `${_v0} thumbnail`,
      src: _v1,
      srcSet: _v2,
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      objectFit: "cover",
      width: "100%",
      height: "100%"
    }), (0, _v1.jsx)(_v2.Box, {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      background: "linear-gradient(0deg, #000 25%, rgba(0, 0, 0, 0.00) 75%)"
    }), (0, _v1.jsxs)(_v5.DarkMode, {
      children: [(0, _v1.jsxs)(_v8.VStack, {
        spacing: "50",
        px: "100",
        zIndex: "1",
        children: [_v3 && (0, _v1.jsx)(_v10.bokeh.img, {
          alt: _v4 ?? `${_v0} flair`,
          src: _v3,
          width: "96px",
          height: "96px",
          objectFit: "cover",
          borderRadius: "100%"
        }), (0, _v1.jsx)(_v6.Header, {
          as: "h3",
          size: "md",
          color: "text-primary",
          textAlign: "center",
          noOfLines: 2,
          children: _v0
        }), (0, _v1.jsx)(_v13, {
          totalVideos: _v6,
          totalFollowers: _v7,
          justify: "center"
        }), _v5 ? (0, _v1.jsx)(_v7.Text, {
          variant: "body-xl",
          color: "text-primary",
          fontSize: "body-md",
          textAlign: "center",
          noOfLines: 3,
          children: _v5
        }) : null]
      }), (0, _v1.jsx)(_v8.VStack, {
        spacing: {
          base: "75",
          md: "200"
        },
        zIndex: "1",
        children: _v8
      })]
    })]
  }), "StartWatchingButton", 0, _v0 => (0, _v1.jsx)(_v3.Button, {
    w: "100%",
    leftIcon: (0, _v1.jsx)(_v11.PlayFilled, {}),
    variant: "blur",
    ..._v0,
    children: "Start watching"
  }), "VideoAndFollowersCount", 0, _v13]);
}