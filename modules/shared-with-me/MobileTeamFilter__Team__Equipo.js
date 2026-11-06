{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["MobileTeamFilter", 0, ({
    isFilterApplied: _v0,
    onChange: _v1,
    options: _v2,
    value: _v3
  }) => (0, _v1.jsx)(_v6.MobileFilter, {
    isFilterApplied: !!_v0,
    label: (0, _v5.translate)({
      singular: "Team",
      dictionary: {
        es: {
          singular: "Equipo"
        },
        "fr-FR": {
          singular: "Équipe"
        },
        "ja-JP": {
          singular: "チーム"
        },
        "ko-KR": {
          singular: "팀"
        },
        "pt-BR": {
          singular: "Equipe"
        },
        "zh-CN": {
          singular: "团队"
        }
      }
    }),
    children: (0, _v1.jsx)(_v3.RadioGroup, {
      value: _v3,
      children: (0, _v1.jsx)(_v4.Stack, {
        children: _v2.map(_v0 => (0, _v1.jsx)(_v2.Radio, {
          value: _v0.value,
          padding: "sm",
          onChange: () => _v1(_v0.value),
          children: _v0.label
        }, _v0.value))
      })
    })
  })]);
}