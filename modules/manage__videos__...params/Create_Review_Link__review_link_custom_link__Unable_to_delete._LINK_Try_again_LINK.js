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
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = ({
    reviewLinks: _v0,
    resourceId: _v1,
    resourceType: _v2,
    resourceOwnerId: _v3,
    setReviewLinkData: _v4,
    setReviewLinkModalMode: _v5,
    setCreateReviewLinkScreen: _v6,
    hideFooter: _v7
  }) => {
    let _v8 = (0, _v13.useToast)(),
      _v9 = (0, _v20.useViewer)(),
      _v10 = (0, _v10.useRef)(""),
      _v11 = (0, _v10.useRef)(!1),
      [_v12, _v13] = (0, _v10.useState)(),
      [_v14, _v15] = (0, _v10.useState)(!1),
      [_v16, _v17] = (0, _v10.useState)(!1),
      _v18 = (0, _v23.useCanUpSell)(),
      {
        upsellModalConfig: _v19,
        upsellTrackingProps: _v20,
        setUpsellAndTriggerEvent: _v21,
        bpTriggerUpsellImpression: _v22
      } = (0, _v26.useUpsellTrackingProps)(_v2),
      [_v23, _v24] = (0, _v10.useState)(void 0),
      {
        trackReviewLinkBpEvent: _v25
      } = (0, _v25.useReviewLinkAnalytics)({
        resourceId: _v1,
        resourceType: _v2,
        location: "Create_Review_Link",
        mode: _v23
      }),
      {
        deleteReviewLink: _v26,
        isDeleteInProgress: _v27,
        isDeleteApiCalled: _v28,
        deleteApiError: _v29
      } = (0, _v24.useDeleteReviewLink)(_v1, _v2),
      _v30 = (_v0, _v1) => {
        _v5?.(_v1), _v4?.(_v0), _v6?.();
      };
    (0, _v10.useEffect)(() => {
      _v18 && _v22("review_link_custom_link");
    }, []), (0, _v10.useEffect)(() => {
      _v28 && !_v27 && (_v8.close(_v10.current), _v29 ? _v10.current = _v8({
        title: (0, _v18.translate)({
          singular: "Unable to delete. {LINK}Try again{/LINK}",
          replacements: {
            LINK: _v0 => (0, _v1.jsx)(_v12.Link, {
              color: "inherit",
              _hover: {
                cursor: "pointer",
                _dark: {
                  color: "inherit"
                }
              },
              onClick: () => {
                _v15(!0);
              },
              fontSize: "body-md",
              variant: "inline-primary",
              children: _v0
            })
          },
          dictionary: {
            es: {
              singular: "No se puede eliminar. {LINK}Vuelva a intentarlo{/LINK}"
            },
            "de-DE": {
              singular: "Kann nicht gelöscht werden. {LINK}Erneut versuchen{/LINK}"
            },
            "fr-FR": {
              singular: "Suppression impossible. {LINK}Réessayez{/LINK}"
            },
            "ja-JP": {
              singular: "削除できません。{LINK}もう一度お試しください{/LINK}"
            },
            "ko-KR": {
              singular: "삭제할 수 없습니다. {LINK}다시 시도하세요.{/LINK}"
            },
            "pt-BR": {
              singular: "Não foi possível excluir. {LINK}Tente novamente{/LINK}"
            },
            "zh-CN": {
              singular: "无法删除。{LINK}请重试{/LINK}"
            }
          }
        }),
        duration: _v27.TOAST_WITH_LINK_DURATION,
        isClosable: !1,
        variant: "warning"
      }) : (_v10.current = _v8({
        title: (0, _v18.translate)({
          singular: "Link deleted",
          dictionary: {
            es: {
              singular: "Enlace eliminado"
            },
            "de-DE": {
              singular: "Link gelöscht"
            },
            "fr-FR": {
              singular: "Lien supprimé"
            },
            "ja-JP": {
              singular: "リンクが削除されました"
            },
            "ko-KR": {
              singular: "링크가 삭제되었습니다."
            },
            "pt-BR": {
              singular: "Link excluído"
            },
            "zh-CN": {
              singular: "链接已删除"
            }
          }
        }),
        duration: _v27.TOAST_DURATION,
        isClosable: !1
      }), _v25("vimeo.delete_review_link", _v12), _v24(void 0), _v13(void 0)));
    }, [_v29, _v28, _v27]), (0, _v10.useEffect)(() => {
      _v1 && _v2 && !_v11.current && (_v25("vimeo.open_review_link_list"), _v11.current = !0);
    }, [_v1, _v2, _v25]);
    let _v31 = _v0.length >= _v9.MAX_REVIEW_LINKS;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v4.Box, {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        children: [(0, _v1.jsxs)(_v4.Box, {
          width: "100%",
          flex: _v7 ? void 0 : "1 1 auto",
          overflowY: _v7 ? void 0 : "auto",
          px: _v7 ? "0px" : "lg",
          height: _v7 ? "unset" : `calc(100% - ${(0, _v5.rem)(57)})`,
          children: [_v18 && (0, _v1.jsxs)(_v4.Box, {
            backgroundColor: "upsell-secondary",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "xs",
            paddingY: "sm",
            paddingX: (0, _v5.rem)(12),
            borderRadius: "sm",
            children: [(0, _v1.jsx)(_v14.Text, {
              variant: "heading-2xs",
              children: (0, _v18.translate)({
                singular: "Unlock more control with custom links for every reviewer",
                dictionary: {
                  es: {
                    singular: "Desbloquee más control con enlaces personalizados para cada revisor."
                  },
                  "de-DE": {
                    singular: "Mit benutzerdefinierten Links für jeden Reviewer hast du mehr Kontrolle"
                  },
                  "fr-FR": {
                    singular: "Obtenez un meilleur contrôle avec des liens personnalisés pour chaque collaborateur"
                  },
                  "ja-JP": {
                    singular: "各レビュアー向けのカスタムリンクで、より詳細にコントロール"
                  },
                  "ko-KR": {
                    singular: "모든 검토자를 위한 커스텀 링크로 더 효과적으로 관리하세요."
                  },
                  "pt-BR": {
                    singular: "Tenha mais controle com links personalizados para cada revisor"
                  },
                  "zh-CN": {
                    singular: "通过为每位审阅者提供自定义链接来获得更多控制权"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.Button, {
              onClick: () => {
                _v21("review_link_custom_link"), _v17(!0);
              },
              variant: "upsell",
              size: "xs",
              children: (0, _v1.jsx)(_v14.Text, {
                variant: "heading-2xs",
                color: "white",
                children: (0, _v18.translate)({
                  singular: "Upgrade",
                  dictionary: {
                    es: {
                      singular: "Actualizar"
                    },
                    "de-DE": {
                      singular: "Upgraden"
                    },
                    "fr-FR": {
                      singular: "Mettre à niveau"
                    },
                    "ja-JP": {
                      singular: "アップグレード"
                    },
                    "ko-KR": {
                      singular: "업그레이드"
                    },
                    "zh-CN": {
                      singular: "升级"
                    }
                  }
                })
              })
            })]
          }), _v31 && (0, _v1.jsx)(_v16.Alert, {
            status: "info",
            size: "sm",
            p: (0, _v5.rem)(8),
            children: (0, _v1.jsx)(_v15.AlertDescription, {
              display: "flex",
              gap: (0, _v5.rem)(8),
              mt: (0, _v5.rem)(5),
              children: (0, _v18.translate)({
                singular: "You’ve reached the limit of {MAX_REVIEW_LINKS} links. Delete one to create another.",
                replacements: {
                  MAX_REVIEW_LINKS: _v9.MAX_REVIEW_LINKS
                },
                dictionary: {
                  es: {
                    singular: "Ha alcanzado el límite de {MAX_REVIEW_LINKS} enlaces. Elimine uno para crear otro."
                  },
                  "de-DE": {
                    singular: "Sie haben das Limit von {MAX_REVIEW_LINKS} Links erreicht. Löschen Sie einen, um einen neuen zu erstellen."
                  },
                  "fr-FR": {
                    singular: "Vous avez atteint la limite de {MAX_REVIEW_LINKS} liens. Supprimez-en un pour pouvoir en créer un autre."
                  },
                  "ja-JP": {
                    singular: "リンクの上限数である{MAX_REVIEW_LINKS}件に達しました。他のリンクを作成するには、既存のリンクを1つ削除してください。"
                  },
                  "ko-KR": {
                    singular: "링크 한도({MAX_REVIEW_LINKS}개)에 도달했습니다. 새 링크를 만들려면 기존 링크를 삭제하세요."
                  },
                  "pt-BR": {
                    singular: "Você atingiu o limite de {MAX_REVIEW_LINKS} links. Exclua um para criar outro."
                  },
                  "zh-CN": {
                    singular: "您已达到 {MAX_REVIEW_LINKS} 链接的上限。删除一个以创建另一个。"
                  }
                }
              })
            })
          }), _v0.map((_v0, _v1) => (0, _v1.jsx)(_v22.ReviewLinkListItem, {
            onDelete: () => {
              _v15(!0), _v13(_v0);
            },
            firstItem: 0 === _v1,
            reviewLink: _v0,
            resourceId: _v1,
            resourceType: _v2,
            resourceOwnerId: _v3,
            onMakeACopyClick: _v30
          }, _v0.uri))]
        }), _v12 && (0, _v1.jsx)(_v21.ReviewLinkDeleteConfirmationModal, {
          isOpen: _v14,
          onCancel: () => {
            _v13(void 0), _v15(!1);
          },
          onDelete: () => (() => {
            if (_v12) {
              let _v0 = (0, _v27.reviewIdFromUri)(_v12.uri);
              _v26(_v0)?.then(() => {
                _v24("delete"), _v15(!1);
              });
            }
          })(),
          reviewLinkName: _v12.name,
          isDeleteApiInProgress: _v27
        }), !_v7 && (0, _v1.jsx)(_v3.Flex, {
          pt: "md",
          px: "lg",
          justifyContent: "flex-end",
          borderTop: "1px solid",
          borderColor: "stroke",
          children: (0, _v1.jsx)(_v11.Button, {
            size: "md",
            variant: "primary",
            leftIcon: (0, _v1.jsx)(_v17.Plus, {}),
            gap: "6px",
            onClick: () => _v6?.(),
            isDisabled: _v18 || _v31,
            children: (0, _v1.jsx)(_v14.Text, {
              variant: "heading-xs",
              children: (0, _v18.translate)({
                singular: "New review link",
                dictionary: {
                  es: {
                    singular: "Nuevo vínculo de revisión"
                  },
                  "de-DE": {
                    singular: "Neuer Review-Link"
                  },
                  "fr-FR": {
                    singular: "Nouveau lien de révision"
                  },
                  "ja-JP": {
                    singular: "新しいレビューリンク"
                  },
                  "ko-KR": {
                    singular: "새 리뷰 링크"
                  },
                  "pt-BR": {
                    singular: "Novo link de revisão"
                  },
                  "zh-CN": {
                    singular: "新的审核链接"
                  }
                }
              })
            })
          })
        })]
      }), _v16 && (0, _v1.jsx)(_v19.default, {
        apiUrl: _v9?.apiUrl,
        userConfig: {
          jwt: _v9?.jwt,
          userId: _v9?.user?.id
        },
        templateType: "default",
        modalConfig: _v19,
        onClose: () => _v17(!1),
        tracking: _v20
      })]
    });
  };
  _v0.s(["ReviewLinks", 0, function ({
    resourceId: _v0,
    resourceType: _v1,
    setCreateReviewLinkScreen: _v2,
    resourceOwnerId: _v3,
    setReviewLinkData: _v4,
    setReviewLinkModalMode: _v5,
    hideFooter: _v6 = !1
  }) {
    let {
        reviewLinks: _v7,
        isLoading: _v8
      } = (0, _v7.useGetReviewLinks)(_v0, _v1),
      _v9 = (0, _v6.useIsMobile)(),
      _v10 = null;
    return _v10 = _v8 ? (0, _v1.jsx)(_v3.Flex, {
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      px: "lg",
      children: (0, _v1.jsx)(_v2.Spinner, {
        size: "lg"
      })
    }) : _v7?.length === 0 ? (0, _v1.jsx)(_v8.ReviewLinksEmptyState, {
      onCreateReviewLinkClick: _v2
    }) : (0, _v1.jsx)(_v28, {
      reviewLinks: _v7,
      resourceId: _v0,
      resourceType: _v1,
      resourceOwnerId: _v3,
      setReviewLinkData: _v4,
      setReviewLinkModalMode: _v5,
      setCreateReviewLinkScreen: _v2,
      hideFooter: _v6
    }), (0, _v1.jsx)(_v4.Box, {
      height: _v6 ? "100%" : _v9 ? (0, _v5.rem)(_v9.REVIEW_LINK_MAX_HEIGHT_FOR_MOBILE) : (0, _v5.rem)(_v9.REVIEW_LINK_MAX_HEIGHT_FOR_DEKSTOP),
      width: "100%",
      minH: (0, _v5.rem)("400"),
      children: _v10
    });
  }], 0);
}