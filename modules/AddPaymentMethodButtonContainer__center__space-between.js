{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["AddPaymentMethodButtonContainer", 0, _v0 => {
    let {
      buttonText: _v1,
      isDisabled: _v2,
      isLoading: _v3,
      canSave: _v4,
      onSubmit: _v5,
      onCancel: _v6
    } = _v0;
    return (0, _v1.jsxs)(_v3.Flex, {
      align: "center",
      justify: {
        base: "center",
        md: "space-between"
      },
      direction: {
        base: "column-reverse",
        md: "row"
      },
      gap: {
        base: "8px",
        md: "0"
      },
      width: "100%",
      children: [(0, _v1.jsx)(_v2.Button, {
        variant: "secondary",
        as: "a",
        href: "/settings/billing",
        width: {
          base: "100%",
          md: "auto"
        },
        onClick: _v6,
        children: (0, _v4.translate)({
          singular: "Cancel",
          dictionary: {
            es: {
              singular: "Cancelar"
            },
            "de-DE": {
              singular: "Abbrechen"
            },
            "fr-FR": {
              singular: "Annuler"
            },
            "ja-JP": {
              singular: "キャンセル"
            },
            "ko-KR": {
              singular: "취소"
            },
            "pt-BR": {
              singular: "Cancelar"
            },
            "zh-CN": {
              singular: "取消"
            }
          }
        })
      }), (0, _v1.jsx)(_v2.Button, {
        width: {
          base: "100%",
          md: "auto"
        },
        isLoading: _v3,
        isDisabled: _v2 || !_v4,
        onClick: _v5,
        children: _v1
      })]
    });
  }]);
}