{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v2.memo)(({
    creator: _v0
  }) => {
    let {
      name: _v1,
      email: _v2,
      avatarSrc: _v3
    } = _v0;
    return (0, _v1.jsx)(_v4.HStack, {
      justifyContent: "space-between",
      alignItems: "center",
      w: "100%",
      children: (0, _v1.jsx)(_v6.ItemBox, {
        iconBox: (0, _v1.jsx)(_v3.Avatar, {
          size: "sm",
          alt: "owner avatar",
          src: _v3,
          nameProps: {
            name: _v1 ?? ""
          }
        }),
        headerTitle: _v1 ?? "",
        subHeaderTitle: _v2,
        rightTrigger: (0, _v1.jsx)(_v7.RoleMenuHeader, {
          children: (0, _v5.translate)({
            singular: "Owner",
            dictionary: {
              es: {
                singular: "Propietario(a)"
              },
              "de-DE": {
                singular: "Inhaber"
              },
              "fr-FR": {
                singular: "Propriétaire"
              },
              "ja-JP": {
                singular: "所有者"
              },
              "ko-KR": {
                singular: "계정 소유자"
              },
              "pt-BR": {
                singular: "Proprietário"
              },
              "zh-CN": {
                singular: "所有者"
              }
            }
          })
        })
      })
    });
  });
  _v0.s(["CreatorItem", 0, _v8]);
}