{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = new Set();
  _v0.s(["closeCallbacks", 0, _v9, "closePrivacyCopyIntroModal", 0, function () {
    _v9.forEach(_v0 => _v0());
  }], 0), _v0.s(["PrivacyCopyIntroModal", 0, function ({
    children: _v0
  }) {
    let {
      isOpen: _v1,
      acknowledge: _v2
    } = function () {
      let _v0 = (0, _v8.useViewer)(),
        _v1 = _v0?.user?.id,
        {
          data: _v2,
          mutate: _v3
        } = (0, _v6.useGetUserPreferences)(() => _v1 ? {
          where: {
            userId: _v1
          },
          select: ["pcim"]
        } : null),
        [_v4, _v5] = (0, _v2.useState)(!1),
        [_v6] = (0, _v6.usePatchUserPreferences)(),
        _v7 = !!_v0?.user?.createdTime && new Date(_v0.user.createdTime) > new Date("2026-07-13T00:00:00Z"),
        _v8 = void 0 !== _v2,
        _v9 = !!_v2?.pcim,
        _v10 = (0, _v2.useCallback)(() => _v5(!0), []),
        _v11 = (0, _v2.useCallback)(() => {
          _v5(!0), _v1 && _v6({
            where: {
              userId: _v1
            },
            select: ["pcim"],
            variables: {
              pcim: 1
            }
          }).then(() => _v3());
        }, [_v1, _v6, _v3]);
      return (0, _v2.useEffect)(() => (_v9.add(_v10), () => {
        _v9.delete(_v10);
      }), [_v10]), {
        isOpen: _v8 && !_v9 && !_v4 && !_v7,
        acknowledge: _v11,
        close: _v10
      };
    }();
    return (0, _v1.jsx)(_v3.AnnouncementPopover, {
      isOpen: _v1,
      onAcknowledge: _v2,
      badge: (0, _v1.jsx)(_v4.Badge, {
        variant: "new",
        size: "sm",
        children: (0, _v1.jsx)(_v5.Text, {
          color: "text-primary",
          variant: "heading-2xs",
          children: (0, _v7.translate)({
            singular: "Update",
            dictionary: {
              es: {
                singular: "Actualizar"
              },
              "de-DE": {
                singular: "Aktualisieren"
              },
              "fr-FR": {
                singular: "Mettre à jour"
              },
              "ja-JP": {
                singular: "アップデート"
              },
              "ko-KR": {
                singular: "업데이트"
              },
              "pt-BR": {
                singular: "Atualizar"
              },
              "zh-CN": {
                singular: "更新"
              }
            }
          })
        })
      }),
      title: (0, _v7.translate)({
        singular: "{EM}Hide from Vimeo{/EM} is now {EM}Embed only{/EM}",
        replacements: {
          EM: _v0 => (0, _v1.jsx)("em", {
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "{EM}Ocultar de Vimeo{/EM} ahora es {EM}Solo para incrustar{/EM}"
          },
          "de-DE": {
            singular: "{EM}Auf Vimeo verbergen{/EM} ist jetzt {EM}Nur Einbetten{/EM}"
          },
          "fr-FR": {
            singular: "{EM}Masquer sur Vimeo{/EM} est désormais {EM}Uniquement intégrable{/EM}"
          },
          "ja-JP": {
            singular: "{EM}Vimeoで非表示{/EM} は現在 {EM}埋め込みのみ{/EM}"
          },
          "ko-KR": {
            singular: "{EM}Hide from Vimeo{/EM}은 이제 {EM}임베드 전용{/EM}입니다."
          },
          "pt-BR": {
            singular: "{EM}Ocultar do Vimeo{/EM} agora é {EM}Somente por incorporação{/EM}"
          },
          "zh-CN": {
            singular: "{EM}从 Vimeo 隐藏{/EM} 现为 {EM}仅限嵌入{/EM}"
          }
        }
      }),
      body: (0, _v7.translate)({
        singular: "Same settings, clearer names. We've updated our privacy labels so it's easier to understand where your videos are shared.",
        dictionary: {
          es: {
            singular: "Mismos ajustes, nombres más claros. Hemos actualizado nuestras etiquetas de privacidad para que sea más fácil comprender dónde se comparten tus videos."
          },
          "de-DE": {
            singular: "Gleiche Einstellungen, klarere Bezeichnungen. Wir haben unsere Datenschutzkennzeichnungen aktualisiert, damit Sie leichter nachvollziehen können, wo Ihre Videos geteilt werden."
          },
          "fr-FR": {
            singular: "Paramètres inchangés, noms clarifiés. Nous avons mis à jour nos libellés de confidentialité pour faciliter la compréhension des lieux où vos vidéos sont partagées."
          },
          "ja-JP": {
            singular: "設定はそのまま、名称はより明確に。プライバシーラベルを更新し、動画がどこで共有されているかをより分かりやすくしました。"
          },
          "ko-KR": {
            singular: "설정은 동일하지만, 이름을 더 명확하게 바꿨습니다. 개인정보 라벨을 업데이트하여 동영상이 어디에 공유되는지 더 쉽게 파악할 수 있습니다."
          },
          "pt-BR": {
            singular: "Mesmas configurações, nomes mais claros. Atualizamos nossos rótulos de privacidade para facilitar a compreensão de onde seus vídeos são compartilhados."
          },
          "zh-CN": {
            singular: "设置保持不变，名称更清晰。我们已更新隐私标签，使您更容易理解视频的共享位置。"
          }
        }
      }),
      children: _v0
    });
  }], 0);
}