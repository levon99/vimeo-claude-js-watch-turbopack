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
  let _v9 = new Map(),
    _v10 = new Set(),
    _v11 = {
      subscribe: _v0 => (_v10.add(_v0), () => {
        _v10.delete(_v0);
      }),
      isDismissed: _v0 => !!_v9.get(_v0 ?? null),
      dismiss(_v0) {
        let _v1 = _v0 ?? null;
        _v9.get(_v1) || (_v9.set(_v1, !0), _v10.forEach(_v0 => _v0()));
      },
      reset() {
        _v9.clear(), _v10.forEach(_v0 => _v0());
      }
    },
    _v12 = "vomim";
  _v0.s(["VideoCardOverflowMenuIntroPopover", 0, function ({
    isMenuOpen: _v0,
    enabled: _v1 = !0,
    children: _v2
  }) {
    let {
      isOpen: _v3,
      acknowledge: _v4
    } = function (_v0, _v1) {
      let _v2 = (0, _v8.useOptionalViewer)(),
        _v3 = _v2?.user?.id ?? null,
        _v4 = _v2?.user?.createdTime,
        {
          data: _v5,
          mutate: _v6
        } = (0, _v6.useGetUserPreferences)(() => _v3 && _v1 ? {
          where: {
            userId: _v3
          },
          select: [_v12]
        } : null),
        [_v7] = (0, _v6.usePatchUserPreferences)(),
        _v8 = (0, _v2.useMemo)(() => () => _v11.isDismissed(_v3), [_v3]),
        _v9 = (0, _v2.useSyncExternalStore)(_v11.subscribe, _v8, () => !1),
        _v10 = !!_v4 && new Date(_v4) > new Date("2026-07-20T00:00:00Z"),
        _v11 = void 0 !== _v5,
        _v12 = !!_v5?.[_v12],
        _v13 = _v11 && !_v12 && !_v9 && !_v10,
        _v14 = _v0 && _v1 && _v13,
        _v15 = (0, _v2.useCallback)(() => {
          !_v11.isDismissed(_v3) && (_v11.dismiss(_v3), _v3 && _v7({
            where: {
              userId: _v3
            },
            select: [_v12],
            variables: {
              [_v12]: 1
            }
          }).then(() => _v6()));
        }, [_v3, _v7, _v6]),
        _v16 = (0, _v2.useRef)(_v0);
      return (0, _v2.useEffect)(() => {
        let _v0 = _v16.current && !_v0;
        _v16.current = _v0, _v0 && _v1 && _v13 && _v15();
      }, [_v0, _v1, _v13, _v15]), {
        isOpen: _v14,
        acknowledge: _v15
      };
    }(_v0, _v1);
    return (0, _v1.jsx)(_v3.AnnouncementPopover, {
      isOpen: _v3,
      placement: "left-start",
      anchorWithinChildren: !0,
      onAcknowledge: _v4,
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
        singular: "Your menu, now easier to navigate",
        dictionary: {
          es: {
            singular: "Tu menú, ahora más fácil de navegar"
          },
          "de-DE": {
            singular: "Ihr Menü, jetzt einfacher zu bedienen"
          },
          "fr-FR": {
            singular: "Votre menu, désormais plus facile à parcourir"
          },
          "ja-JP": {
            singular: "メニューがより使いやすくなりました"
          },
          "ko-KR": {
            singular: "메뉴가 이제 더 쉽게 탐색됩니다"
          },
          "pt-BR": {
            singular: "Seu menu, agora mais fácil de navegar"
          },
          "zh-CN": {
            singular: "您的菜单, 现在更易于导航"
          }
        }
      }),
      body: (0, _v7.translate)({
        singular: "We've reorganized it to put your most important actions front and center: nothing removed, just better arranged.",
        dictionary: {
          es: {
            singular: "Lo hemos reorganizado para poner tus acciones más importantes en primer plano: no se ha eliminado nada, solo está mejor ordenado."
          },
          "de-DE": {
            singular: "Wir haben es neu strukturiert, um Ihre wichtigsten Aktionen in den Vordergrund zu rücken: nichts wurde entfernt, nur besser angeordnet."
          },
          "fr-FR": {
            singular: "Nous l'avons réorganisé pour mettre vos actions les plus importantes bien en vue : rien n'a été supprimé, simplement mieux agencé."
          },
          "ja-JP": {
            singular: "最も重要な操作がすぐに見つかるように再編しました: 機能を削除したわけではなく、配置を改善しただけです。"
          },
          "ko-KR": {
            singular: "가장 중요한 작업을 전면에 배치하도록 재구성했습니다: 항목을 제거한 것이 아니라, 단지 더 잘 정돈했습니다."
          },
          "pt-BR": {
            singular: "Reorganizamos tudo para colocar suas ações mais importantes em destaque: nada foi removido, apenas melhor organizado."
          },
          "zh-CN": {
            singular: "我们已重新整理，将您最重要的操作置于显要位置: 未移除任何内容, 只是更合理地排列."
          }
        }
      }),
      children: _v2
    });
  }], 0);
}