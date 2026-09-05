{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["ManagedStorageIndicator", 0, ({
    isDimmed: _v0 = !1,
    layout: _v1 = "inline",
    tooltipLabel: _v2
  }) => {
    let _v3 = (0, _v5.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500"),
      _v4 = _v2 ?? (0, _v7.translate)({
        singular: "Private videos count towards your managed storage allowance.",
        dictionary: {
          es: {
            singular: "Los vídeos privados cuentan para su cuota de almacenamiento gestionado."
          },
          "de-DE": {
            singular: "Private Videos werden auf Ihr verwaltetes Speicherkontingent angerechnet."
          },
          "fr-FR": {
            singular: "Les vidéos privées sont prises en compte dans votre quota de stockage géré."
          },
          "ja-JP": {
            singular: "プライベート動画は管理対象ストレージの割り当てに含まれます。"
          },
          "ko-KR": {
            singular: "비공개 동영상은 귀하의 관리형 저장 공간 할당량에 포함됩니다."
          },
          "pt-BR": {
            singular: "Vídeos privados contam para a sua cota de armazenamento gerenciado."
          },
          "zh-CN": {
            singular: "私人视频会计入您托管的存储配额。"
          }
        }
      });
    return "overlay" === _v1 ? (0, _v1.jsx)(_v3.Tooltip, {
      label: _v4,
      placement: "top",
      children: (0, _v1.jsx)(_v2.Box, {
        as: "span",
        alignItems: "center",
        "aria-label": _v4,
        backgroundColor: "blackAlpha.700",
        borderRadius: "xs",
        color: "white",
        "data-clickable": !0,
        display: "inline-flex",
        flexShrink: 0,
        height: (0, _v4.rem)(20),
        justifyContent: "center",
        minWidth: (0, _v4.rem)(20),
        bottom: (0, _v4.rem)(8),
        position: "absolute",
        right: (0, _v4.rem)(60),
        width: (0, _v4.rem)(20),
        zIndex: 1,
        children: (0, _v1.jsx)(_v6.ManagedStorage, {
          "aria-hidden": "true",
          boxSize: (0, _v4.rem)(14)
        })
      })
    }) : (0, _v1.jsx)(_v3.Tooltip, {
      label: _v4,
      placement: "top",
      children: (0, _v1.jsx)(_v2.Box, {
        as: "span",
        alignItems: "center",
        "aria-label": _v4,
        color: _v0 ? _v3 : "text-secondary",
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "center",
        lineHeight: 0,
        position: "relative",
        top: (0, _v4.rem)(-2),
        verticalAlign: "middle",
        children: (0, _v1.jsx)(_v6.ManagedStorage, {
          "aria-hidden": "true",
          boxSize: (0, _v4.rem)(16)
        })
      })
    });
  }]);
}