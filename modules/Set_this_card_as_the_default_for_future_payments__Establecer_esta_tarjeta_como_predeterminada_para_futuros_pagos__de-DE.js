{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ({
    isChecked: _v0,
    onChange: _v1,
    showCheckbox: _v2 = !1,
    blockCheckbox: _v3 = !1
  }) => _v2 ? (0, _v1.jsx)(_v2.Box, {
    my: 4,
    children: (0, _v1.jsx)(_v3.Checkbox, {
      isChecked: _v0,
      isDisabled: _v3,
      onChange: _v0 => _v1(_v0.target.checked),
      children: (0, _v4.translate)({
        singular: "Set this card as the default for future payments",
        dictionary: {
          es: {
            singular: "Establecer esta tarjeta como predeterminada para futuros pagos"
          },
          "de-DE": {
            singular: "Legen Sie diese Karte als Standard für zukünftige Zahlungen fest."
          },
          "fr-FR": {
            singular: "Définissez cette carte par défaut pour vos prochains paiements"
          },
          "ja-JP": {
            singular: "このカードを今後の請求のデフォルトの支払い方法として設定する"
          },
          "ko-KR": {
            singular: "이 카드를 향후 기본 결제 수단으로 설정"
          },
          "pt-BR": {
            singular: "Defina este cartão como padrão para pagamentos futuros"
          },
          "zh-CN": {
            singular: "将此卡设为未来的默认付款方式"
          }
        }
      })
    })
  }) : null;
  _v0.s(["SetDefaultPaymentMethodContainer", 0, ({
    isChecked: _v0,
    onChecked: _v1,
    showCheckbox: _v2,
    blockCheckbox: _v3
  }) => (0, _v1.jsx)(_v5, {
    isChecked: _v0,
    onChange: _v1,
    showCheckbox: _v2,
    blockCheckbox: _v3
  })], 0);
}