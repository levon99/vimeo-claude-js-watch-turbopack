{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = _v0 => (0, _v1.jsx)(_v5.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7Zm9.08.108c-.475-.3-1.08.06-1.08.643v4.497c0 .583.605.944 1.08.645l3.569-2.243c.468-.294.468-1.006 0-1.3L11.08 7.108Z"
      }), (0, _v1.jsx)("path", {
        d: "M5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
      })]
    })
  });
  var _v7 = _v0.i(0);
  _v0.s(["getWatchSectionItems", 0, () => [{
    key: "watch",
    label: (0, _v7.translate)({
      singular: "Watch",
      dictionary: {
        es: {
          singular: "Ver"
        },
        "de-DE": {
          singular: "Anschauen"
        },
        "fr-FR": {
          singular: "Regarder"
        },
        "ja-JP": {
          singular: "鑑賞"
        },
        "ko-KR": {
          singular: "시청하기"
        },
        "pt-BR": {
          singular: "Assistir"
        },
        "zh-CN": {
          singular: "观看"
        }
      }
    }),
    href: "/watch",
    icon: (0, _v1.jsx)(_v4.WatchPlay, {}),
    iconActive: (0, _v1.jsx)(_v6, {}),
    destination: "watch",
    isActive: _v0 => "/watch" === _v0
  }, {
    key: "staff_picks",
    label: (0, _v7.translate)({
      singular: "Staff Picks",
      dictionary: {
        es: {
          singular: "Selecciones del equipo"
        },
        "de-DE": {
          singular: "Empfehlungen des Teams"
        },
        "fr-FR": {
          singular: "Sélections de l'équipe"
        },
        "ja-JP": {
          singular: "スタッフのおすすめ"
        },
        "ko-KR": {
          singular: "스태프 픽"
        },
        "pt-BR": {
          singular: "Escolhas da Equipe"
        },
        "zh-CN": {
          singular: "编辑精选"
        }
      }
    }),
    href: "/channels/staffpicks",
    icon: (0, _v1.jsx)(_v2.StaffPicks, {}),
    iconActive: (0, _v1.jsx)(_v3.StaffPicksFilled, {}),
    destination: "staff_picks",
    isActive: _v0 => _v0.startsWith("/channels/staffpicks")
  }]], 0);
}