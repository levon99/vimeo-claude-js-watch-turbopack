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
    _v16 = _v0.i(0);
  let _v17 = ({
      w: _v0 = "100%",
      h: _v1 = "8px"
    }) => (0, _v1.jsx)(_v16.Skeleton, {
      w: _v0,
      h: _v1,
      borderRadius: "pill",
      bgSize: "200%"
    }),
    _v18 = ({
      w: _v0 = "114px",
      h: _v1 = "64px"
    }) => (0, _v1.jsx)(_v16.Skeleton, {
      w: _v0,
      h: _v1,
      borderRadius: "md",
      bgSize: "200%"
    }),
    _v19 = ({
      w: _v0 = "sm",
      h: _v1 = "2xs"
    }) => (0, _v1.jsx)(_v3.Box, {
      display: "flex",
      width: _v0,
      px: "5px",
      justifyContent: "center",
      children: (0, _v1.jsx)(_v16.Skeleton, {
        h: _v1,
        borderRadius: "md",
        bgSize: "200%"
      })
    }),
    _v20 = ({
      opacity: _v0 = "100%",
      width: _v1 = "100%"
    }) => (0, _v1.jsxs)(_v14.HStack, {
      p: "8px",
      w: "100%",
      display: "flex",
      alignItems: "center",
      opacity: _v0,
      children: [(0, _v1.jsx)(_v19, {
        w: _v1
      }), (0, _v1.jsx)(_v18, {}), (0, _v1.jsxs)(_v15.VStack, {
        spacing: 100,
        flex: 1,
        align: "stretch",
        children: [(0, _v1.jsx)(_v17, {}), (0, _v1.jsx)(_v17, {}), (0, _v1.jsx)(_v17, {
          w: "50%"
        })]
      })]
    }),
    _v21 = ({
      width: _v0 = "100%"
    }) => (0, _v1.jsxs)(_v15.VStack, {
      flexGrow: 1,
      align: "stretch",
      spacing: 75,
      w: "100%",
      children: [(0, _v1.jsx)(_v20, {
        opacity: "100%",
        width: _v0
      }), (0, _v1.jsx)(_v20, {
        opacity: "800%",
        width: _v0
      }), (0, _v1.jsx)(_v20, {
        opacity: "60%",
        width: _v0
      })]
    });
  _v0.s(["VersionSkeleton", 0, _v20, "VersionsSkeleton", 0, _v21], 0);
  let _v22 = (0, _v2.forwardRef)(({
    index: _v0,
    isLastElement: _v1,
    isLoadingMoreVersion: _v2,
    sequenceNumber: _v3,
    uri: _v4,
    setIsVersionMenuActive: _v5,
    sequenceNumberWidth: _v6
  }, _v7) => {
    let [_v8, _v9] = (0, _v2.useState)(!1);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v3.Box, {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "80px",
        p: "sm",
        gap: "sm",
        cursor: "pointer",
        _hover: {
          borderRadius: "md",
          background: "fill-component-hover",
          _dark: {
            background: "fill-component-hover-dark"
          }
        },
        ref: _v1 ? _v7 : void 0,
        onMouseEnter: () => _v9(!0),
        onMouseLeave: () => _v9(!1),
        onClick: () => {
          window.location.href = _v4;
        },
        children: [(0, _v1.jsx)(_v4.Text, {
          id: "version-id",
          variant: "heading-xs",
          p: "sm",
          minW: `${_v6}px`,
          children: (0, _v13.getVersionNumber)(_v3)
        }), (0, _v1.jsx)(_v3.Box, {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "114px",
          height: "64px",
          backgroundColor: "gray.300",
          _dark: {
            backgroundColor: "gray.600"
          },
          borderRadius: "md",
          children: (0, _v1.jsx)(_v3.Box, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "fill-component",
            w: "24px",
            h: "24px",
            borderRadius: "md",
            children: (0, _v1.jsx)(_v10.TrashBin, {
              boxSize: "16px"
            })
          })
        }), (0, _v1.jsx)(_v4.Text, {
          flexGrow: "1",
          variant: "heading-xs",
          color: "text-secondary",
          children: (0, _v12.translate)({
            singular: "This version was deleted",
            dictionary: {
              es: {
                singular: "Esta versión se eliminó."
              },
              "de-DE": {
                singular: "Diese Version wurde gelöscht"
              },
              "fr-FR": {
                singular: "Cette version a été supprimée"
              },
              "ja-JP": {
                singular: "このバージョンは削除されました"
              },
              "ko-KR": {
                singular: "이 버전은 삭제되었습니다."
              },
              "pt-BR": {
                singular: "Essa versão foi excluída"
              },
              "zh-CN": {
                singular: "该版本已被删除"
              }
            }
          })
        }), (0, _v1.jsx)(_v5.Menu, {
          children: ({
            isOpen: _v0
          }) => (0, _v1.jsxs)("div", {
            onClick: _v0 => _v0.stopPropagation(),
            children: [(0, _v1.jsx)(_v7.MenuButton, {
              as: _v9.IconButton,
              "aria-label": "Version menu options",
              icon: (0, _v1.jsx)(_v11.EllipsisV, {}),
              variant: "tertiary",
              size: "sm",
              opacity: {
                base: 1,
                md: _v0 || _v8 ? 1 : 0
              }
            }), (0, _v1.jsx)(_v8.MenuList, {
              minW: "138px",
              backgroundColor: "#f4f6f8",
              _dark: {
                backgroundColor: "#3d4751"
              },
              children: (0, _v1.jsx)(_v6.MenuItem, {
                onClick: () => void (window.location.href = _v4, _v5(!1)),
                children: (0, _v12.translate)({
                  singular: "View",
                  dictionary: {
                    es: {
                      singular: "Ver"
                    },
                    "de-DE": {
                      singular: "Anzeigen"
                    },
                    "fr-FR": {
                      singular: "Voir"
                    },
                    "ja-JP": {
                      singular: "見る"
                    },
                    "ko-KR": {
                      singular: "보기"
                    },
                    "pt-BR": {
                      singular: "Ver"
                    },
                    "zh-CN": {
                      singular: "查看"
                    }
                  }
                })
              })
            })]
          })
        })]
      }, _v0), _v1 && _v2 && (0, _v1.jsx)(_v21, {
        width: `${_v6}px`
      })]
    });
  });
  _v0.s(["DeletedVersion", 0, _v22], 0);
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  _v0.s(["EmptyVersionList", 0, ({
    openFileUpload: _v0,
    isDisabled: _v1
  }) => (0, _v1.jsxs)(_v15.VStack, {
    spacing: "md",
    p: "md",
    width: "235px",
    children: [(0, _v1.jsx)(_v25.CommentList, {
      boxSize: "sm",
      color: "primary"
    }), (0, _v1.jsx)(_v23.Header, {
      textAlign: "center",
      size: "xs",
      color: "text-primary",
      children: (0, _v12.translate)({
        singular: "Add a new version and keep the same link",
        dictionary: {
          es: {
            singular: "Agregar una nueva versión y mantener el mismo enlace"
          },
          "de-DE": {
            singular: "Neue Version hinzufügen und denselben Link beibehalten"
          },
          "fr-FR": {
            singular: "Ajouter une nouvelle version et conserver le même lien"
          },
          "ja-JP": {
            singular: "新しいバージョンを追加して同じリンクを維持する"
          },
          "ko-KR": {
            singular: "새 버전을 추가하고 동일한 링크를 유지합니다"
          },
          "pt-BR": {
            singular: "Adicionar uma nova versão e manter o mesmo link"
          },
          "zh-CN": {
            singular: "添加新版本并保留相同链接"
          }
        }
      })
    }), (0, _v1.jsx)(_v24.Button, {
      onClick: () => {
        _v0();
      },
      size: "xs",
      width: "100%",
      variant: "primary",
      leftIcon: (0, _v1.jsx)(_v26.Plus, {}),
      isDisabled: _v1,
      children: (0, _v12.translate)({
        singular: "New version",
        dictionary: {
          es: {
            singular: "Nueva versión"
          },
          "de-DE": {
            singular: "Neue Version"
          },
          "fr-FR": {
            singular: "Nouvelle version"
          },
          "ja-JP": {
            singular: "新しいバージョン"
          },
          "ko-KR": {
            singular: "새 버전"
          },
          "pt-BR": {
            singular: "Nova versão"
          },
          "zh-CN": {
            singular: "新版本"
          }
        }
      })
    })]
  })], 0);
  var _v27 = _v0.i(0);
  async function _v28(_v0, _v1, _v2) {
    await (0, _v27.deleteVideoVersion)({
      ..._v2,
      where: {
        videoId: _v0,
        versionId: _v1
      }
    });
  }
  _v0.s(["useDeleteVersionWorkflow", 0, function () {
    let [_v0, _v1] = (0, _v2.useState)(!1);
    return {
      deleteVersionWorkflow: (0, _v2.useCallback)(async (_v0, _v1, _v2) => {
        _v1(!0);
        try {
          return await _v28(_v0, _v1, _v2);
        } finally {
          _v1(!1);
        }
      }, []),
      isDeleteInProgress: _v0
    };
  }], 0);
}