{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["showCopyLinkToast", 0, (_v0, {
    id: _v1,
    isSuccess: _v2,
    title: _v3,
    expiresOn: _v4,
    onReset: _v5
  }) => {
    if (!_v0.isActive(_v1)) {
      if (_v2 && void 0 !== _v5 && null != _v4 && (0, _v5.getRemainingDays)(_v4) <= _v5.EXPIRY_SOON_DAYS) return void _v0({
        id: _v1,
        duration: 0,
        isClosable: !0,
        render: _v0 => (0, _v1.jsx)(_v3.ToastRoot, {
          ..._v0,
          variant: "neutral",
          children: (0, _v1.jsxs)(_v2.Center, {
            gap: "sm",
            children: [(0, _v1.jsx)(_v3.ToastTitle, {
              children: _v3
            }), (0, _v1.jsx)(_v3.ToastButton, {
              onClick: () => {
                _v0.closeAll(), _v5();
              },
              children: (0, _v4.translate)({
                singular: "Reset expiration",
                dictionary: {
                  es: {
                    singular: "Restablecer expiración"
                  },
                  "de-DE": {
                    singular: "Ablaufdatum zurücksetzen"
                  },
                  "fr-FR": {
                    singular: "Réinitialiser l'expiration"
                  },
                  "ja-JP": {
                    singular: "有効期限をリセット"
                  },
                  "ko-KR": {
                    singular: "만료 재설정"
                  },
                  "pt-BR": {
                    singular: "Redefinir expiração"
                  },
                  "zh-CN": {
                    singular: "重置到期时间"
                  }
                }
              })
            })]
          })
        })
      });
      _v0({
        title: _v3,
        id: _v1,
        ...(_v2 ? {} : {
          variant: "warning"
        }),
        containerStyle: {
          maxWidth: "100%",
          minWidth: "auto",
          width: "fit-content"
        },
        onCloseComplete: () => _v0.close(_v1)
      });
    }
  }]);
}