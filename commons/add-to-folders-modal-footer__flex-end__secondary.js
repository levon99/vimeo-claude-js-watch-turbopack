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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = ({
    onCancel: _v0,
    onInvite: _v1,
    isLoading: _v2,
    isDisabled: _v3,
    cancelButtonLabel: _v4
  }) => (0, _v1.jsx)(_v17.ModalFooter, {
    className: "add-to-folders-modal-footer",
    pb: (0, _v8.rem)(21),
    children: (0, _v1.jsxs)(_v15.Flex, {
      alignItems: "flex-end",
      gap: (0, _v8.rem)(4),
      children: [(0, _v1.jsx)(_v16.Button, {
        variant: "secondary",
        onClick: _v0,
        children: _v4
      }), (0, _v1.jsx)(_v16.Button, {
        size: "md",
        isLoading: _v2,
        isDisabled: _v3,
        onClick: _v1,
        children: (0, _v11.translate)({
          singular: "Share",
          dictionary: {
            es: {
              singular: "Compartir"
            },
            "de-DE": {
              singular: "Teilen"
            },
            "fr-FR": {
              singular: "Partager"
            },
            "ja-JP": {
              singular: "共有"
            },
            "ko-KR": {
              singular: "공유"
            },
            "pt-BR": {
              singular: "Compartilhar"
            },
            "zh-CN": {
              singular: "分享"
            }
          }
        })
      })]
    })
  });
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  _v0.s(["AddToFoldersModalContent", 0, ({
    teamUsers: _v0,
    onClose: _v1,
    ownerId: _v2,
    onSuccess: _v3,
    actionButtonOverrides: _v4
  }) => {
    let _v5 = (0, _v19.getApplicableFolderPolicies)(_v0),
      _v6 = _v5.length ? _v5[0] : null,
      [_v7, _v8] = (0, _v2.useState)({
        isSelected: !1,
        children: {}
      }),
      [_v9, _v10] = (0, _v2.useState)(!1),
      [_v11, _v12] = (0, _v2.useState)([]),
      [_v13, _v14] = (0, _v2.useState)(_v6),
      _v15 = (0, _v12.useOrionSettingsFields)(["add_to_folders_modal_select_all_folders"]).add_to_folders_modal_select_all_folders,
      _v16 = (0, _v2.useCallback)(_v0 => {
        (!_v0 || _v15) && (_v10(_v0), _v12([]));
      }, [_v15]),
      _v17 = (0, _v2.useMemo)(() => (0, _v20.getSelectedFolderUrisFromTree)(_v7), [_v7]),
      _v18 = (0, _v2.useMemo)(() => new Set(_v11.flatMap(_v0 => _v0.ancestorUris)), [_v11]),
      {
        excludedFolderUrisSet: _v19,
        includedFolderUrisSet: _v20
      } = (0, _v2.useMemo)(() => {
        if (!_v9) return {
          excludedFolderUrisSet: new Set(),
          includedFolderUrisSet: new Set()
        };
        let _v0 = new Set([...(0, _v20.getUnselectedUrisFromTree)(_v7), ..._v11.map(_v0 => _v0.uri)]);
        return {
          excludedFolderUrisSet: _v0,
          includedFolderUrisSet: new Set((0, _v20.getIncludedUrisForSelectAll)(_v7, _v0))
        };
      }, [_v9, _v7, _v11]),
      _v21 = (0, _v2.useCallback)(_v0 => {
        let _v1 = (0, _v20.getFolderPath)(_v0).slice(1).map(_v0 => _v0.uri);
        _v12(_v0 => _v0.some(_v0 => _v0.uri === _v0.uri) ? _v0 : [..._v0, {
          uri: _v0.uri,
          ancestorUris: _v1
        }]);
      }, []),
      _v22 = (0, _v2.useCallback)(_v0 => {
        _v12(_v0 => _v0.length ? _v0.filter(_v0 => _v0.uri !== _v0.uri && !_v0.ancestorUris.includes(_v0.uri)) : _v0);
      }, []),
      [_v23, {
        loading: _v24,
        error: _v25,
        complete: _v26
      }] = (0, _v13.usePutBatchFolderTeamPermissions)(),
      _v27 = (0, _v2.useCallback)(async () => !!_v2 && !!_v13?.uri && (_v9 ? _v23(_v0, [], _v2, _v13.uri, !0, Array.from(_v19), Array.from(_v20)) : !!_v17.length && _v23(_v0, _v17, _v2, _v13.uri)), [_v2, _v17, _v19, _v20, _v13?.uri, _v0, _v23, _v9]);
    return (0, _v2.useEffect)(() => {
      _v26 && !_v25 && _v3();
    }, [_v26, _v25, _v3]), (0, _v1.jsxs)(_v7.ModalContent, {
      boxShadow: "none",
      minHeight: (0, _v8.rem)(350),
      borderRadius: "xl",
      children: [(0, _v1.jsxs)(_v6.ModalHeader, {
        p: 0,
        m: 0,
        children: [(0, _v1.jsx)(_v3.Header, {
          size: "md",
          position: "relative",
          p: (0, _v8.rem)(21),
          pb: "0",
          children: (0, _v11.translate)({
            singular: "Share folders",
            dictionary: {
              es: {
                singular: "Compartir carpetas"
              },
              "de-DE": {
                singular: "Ordner teilen"
              },
              "fr-FR": {
                singular: "Partage de dossiers"
              },
              "ja-JP": {
                singular: "フォルダーを共有"
              },
              "ko-KR": {
                singular: "폴더 공유"
              },
              "pt-BR": {
                singular: "Compartilhar pastas"
              },
              "zh-CN": {
                singular: "分享文件夹"
              }
            }
          })
        }), (0, _v1.jsx)(_v4.IconButton, {
          "aria-label": "close",
          icon: (0, _v1.jsx)(_v10.CloseX, {}),
          size: "sm",
          variant: "tertiary",
          onClick: _v1,
          position: "absolute",
          top: (0, _v8.rem)(16),
          right: (0, _v8.rem)(24)
        })]
      }), (0, _v1.jsxs)(_v5.ModalBody, {
        px: (0, _v8.rem)(21),
        py: 0,
        children: [(0, _v1.jsx)(_v9.Paragraph, {
          size: "lg",
          children: (0, _v11.translate)({
            singular: "Share folders with your team members to start collaborating right away.",
            dictionary: {
              es: {
                singular: "Comparte carpetas con los miembro del equipo para que comiencen a colaborar de inmediato."
              },
              "de-DE": {
                singular: "Teile Ordner mit deinen Teammitgliedern, um sofort mit der Zusammenarbeit zu beginnen."
              },
              "fr-FR": {
                singular: "Partagez des dossiers avec vos collaborateurs pour commencer à collaborer sans plus attendre."
              },
              "ja-JP": {
                singular: "チームメンバーとフォルダーを共有して、すぐにコラボレーションを始めます。"
              },
              "ko-KR": {
                singular: "팀원들과 폴더를 공유하여 바로 협업을 시작하세요."
              },
              "pt-BR": {
                singular: "Compartilhe pastas com os integrantes da equipe para começar a colaborar agora mesmo."
              },
              "zh-CN": {
                singular: "与团队成员分享文件夹，立即开始协作。"
              }
            }
          })
        }), (0, _v1.jsx)(_v14.AddToFoldersModalBodyContent, {
          error: _v25,
          ownerId: _v2,
          selectedFoldersTree: _v7,
          setSelectedFoldersTree: _v8,
          selectedPermissionPolicy: _v13,
          setSelectedPermissionPolicy: _v14,
          applicableFolderPolicies: _v5,
          isSelectAllMode: _v9,
          setIsSelectAllMode: _v16,
          onFolderDeselected: _v21,
          onFolderReselected: _v22,
          excludedFolderUrisSet: _v19,
          includedFolderUrisSet: _v20,
          excludedAncestorUrisSet: _v18
        })]
      }), (0, _v1.jsx)(_v18, {
        onCancel: () => {
          _v1();
        },
        cancelButtonLabel: _v4?.cancelButtonLabel || (0, _v11.translate)({
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
        }),
        isLoading: _v24,
        isDisabled: _v24 || !_v9 && !_v17.length || !_v0.length || !_v13 || !!_v25,
        onInvite: async () => {
          await _v27();
        }
      })]
    });
  }], 0);
}