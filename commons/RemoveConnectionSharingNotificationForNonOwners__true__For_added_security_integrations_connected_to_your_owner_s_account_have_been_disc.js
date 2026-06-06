{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["RemoveConnectionSharingNotificationForNonOwners", 0, ({
    shouldShow: _v0,
    from: _v1,
    ..._v2
  }) => {
    let _v3 = `vimeo_remove_connection_sharing_non_owners_notif_dismissed_${_v1}`,
      {
        isOpen: _v4,
        onClose: _v5
      } = (0, _v4.useDisclosure)({
        defaultIsOpen: _v0 && "true" !== localStorage.getItem(_v3)
      });
    return _v4 ? (0, _v1.jsx)(_v2.Alert, {
      ..._v2,
      onClose: () => {
        localStorage.setItem(_v3, "true"), _v5();
      },
      children: (0, _v1.jsx)(_v3.AlertDescription, {
        children: (0, _v5.translate)({
          singular: "For added security, integrations connected to your owner's account have been disconnected. Please reconnect using your own account.",
          dictionary: {
            es: {
              singular: "Para mayor seguridad, se desconectaron las integraciones conectadas a la cuenta de su propietario. Vuelva a conectarse con su propia cuenta."
            },
            "de-DE": {
              singular: "Aus Sicherheitsgründen wurden die Integrationen, die mit dem Konto Ihres Eigentümers verbunden sind, getrennt. Bitte melden Sie sich mit Ihrem eigenen Konto erneut an."
            },
            "fr-FR": {
              singular: "Pour plus de sécurité, les intégrations connectées au compte du propriétaire ont été déconnectées. Veuillez vous reconnecter en utilisant votre propre compte."
            },
            "ja-JP": {
              singular: "セキュリティ強化のため、所有者アカウントに接続されていたインテグレーションは切断されました。ご自身のアカウントで再接続してください。"
            },
            "ko-KR": {
              singular: "보안을 강화하기 위해 소유자 계정에 연결된 통합이 연결 해제되었습니다. 계정을 사용해 다시 연결하세요."
            },
            "pt-BR": {
              singular: "Para maior segurança, as integrações conectadas à conta do proprietário foram desconectadas. Use a sua conta para reconectar."
            },
            "zh-CN": {
              singular: "为增强安全性，已断开与您所有者账户关联的集成。请使用您自己的账户重新连接。"
            }
          }
        })
      })
    }) : null;
  }]);
}