{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["TeamMemberInfo", 0, ({
    children: _v0,
    teamEntity: _v1
  }) => {
    let _v2 = _v1.displayName ?? _v1.email,
      _v3 = _v1.pictures?.sizes[1]?.link ?? "/assets/images_v6/avatar_pending.png",
      _v4 = !!_v1.metadata.connections.teamUser && !_v1.metadata.connections.user;
    return (0, _v1.jsx)(_v4.ItemBox, {
      iconBox: (0, _v1.jsx)(_v2.Avatar, {
        size: "sm",
        alt: "member avatar",
        src: _v3,
        nameProps: {
          name: _v2 ?? ""
        }
      }),
      headerTitle: _v2 ?? "",
      subHeaderTitle: _v4 ? (0, _v3.translate)({
        singular: "Pending",
        dictionary: {
          es: {
            singular: "Pendiente"
          },
          "de-DE": {
            singular: "ausstehend"
          },
          "fr-FR": {
            singular: "en attente"
          },
          "ja-JP": {
            singular: "保留中"
          },
          "ko-KR": {
            singular: "보류 중"
          },
          "pt-BR": {
            singular: "Pendente"
          },
          "zh-CN": {
            singular: "待定"
          }
        }
      }) : _v1.email,
      rightTrigger: _v0
    });
  }]);
}