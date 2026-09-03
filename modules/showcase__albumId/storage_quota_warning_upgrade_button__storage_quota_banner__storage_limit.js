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
    _v9 = _v0.i(0);
  _v0.s(["default", 0, function () {
    let _v0 = (0, _v9.useViewer)(),
      [_v1, _v2] = (0, _v2.useState)(!1);
    (0, _v2.useEffect)(() => {
      let _v0 = _v0?.user?.uploadQuota?.restricted;
      _v0 && _v0.max ? _v2((_v0.used ?? 0) / _v0.max * 100 >= 100) : _v2(!1);
    }, [_v0?.user?.uploadQuota?.restricted]);
    let _v3 = (0, _v8.buildUpgradePlanUrl)({
      paywallTrigger: "storage_quota_warning_upgrade_button",
      paywallLocation: "storage_quota_banner",
      paywallFeature: "storage_limit"
    }, {
      upsell: "storage_quota_banner",
      integration: "none",
      feature: "Storage_at_limit",
      paywall: "1",
      upsellFeatureCategory: "Storage",
      upsellSpecificFeature: "Storage_at_limit"
    });
    return _v1 ? (0, _v1.jsx)(_v3.AlertRoot, {
      backgroundColor: "status-destructive-secondary",
      marginBottom: "0",
      gap: "sm",
      justifyContent: "center",
      p: "sm",
      borderRadius: "none",
      alignItems: "center",
      minH: "24px",
      children: (0, _v1.jsxs)(_v4.AlertDescription, {
        display: "flex",
        gap: "sm",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v5.Text, {
          variant: "body-sm",
          fontWeight: "medium",
          maxWidth: "600px",
          children: (0, _v6.translate)({
            singular: "You've hit the storage limit. Upgrade to keep uploading videos.",
            dictionary: {
              es: {
                singular: "Has alcanzado el límite de almacenamiento. Actualiza tu plan para seguir subiendo videos."
              },
              "de-DE": {
                singular: "Sie haben das Speicherlimit erreicht. Aktualisieren Sie Ihr Konto, um weiterhin Videos hochzuladen."
              },
              "fr-FR": {
                singular: "Vous avez atteint la limite de stockage. Passez à un abonnement supérieur pour continuer à téléverser des vidéos."
              },
              "ja-JP": {
                singular: "ストレージの上限に達しました。アップグレードすると、引き続き動画をアップロードできます。"
              },
              "ko-KR": {
                singular: "저장 용량 한도에 도달했습니다. 계속해서 동영상을 업로드하려면 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Você atingiu o limite de armazenamento. Atualize sua conta para continuar enviando vídeos."
              },
              "zh-CN": {
                singular: "您已达到存储上限。请升级以继续上传视频。"
              }
            }
          })
        }), (0, _v1.jsx)(_v7.UpgradeBadge, {
          href: _v3,
          name: "storage_quota_warning_upgrade_button",
          location: "storage_quota_banner"
        })]
      })
    }) : null;
  }]);
}