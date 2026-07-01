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
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  _v0.s(["ReviewLinkListItem", 0, ({
    reviewLink: _v0,
    onDelete: _v1,
    resourceId: _v2,
    resourceType: _v3,
    firstItem: _v4,
    resourceOwnerId: _v5,
    onMakeACopyClick: _v6
  }) => {
    let _v7,
      _v8 = (0, _v12.useToast)(),
      _v9 = (0, _v2.useRef)(""),
      _v10 = (0, _v26.useCanUpSell)(),
      {
        trackReviewLinksCopied: _v11,
        trackReviewLinksMenuActionClicked: _v12,
        trackReviewLinksToggled: _v13
      } = (0, _v24.useDistributionTracking)(),
      {
        settings: _v14
      } = (0, _v23.useOrionSettings)(),
      [_v15, _v16] = (0, _v2.useState)(void 0),
      {
        trackReviewLinkBpEvent: _v17
      } = (0, _v28.useReviewLinkAnalytics)({
        resourceId: _v2,
        resourceType: _v3,
        location: "Create_Review_Link",
        mode: _v15
      }),
      _v18 = "clip" === _v3 ? (0, _v29.getVideoReviewPageUrl)(_v0.uri, _v2) : "folder" === _v3 && _v5 ? (0, _v29.getFolderReviewPageUrl)(_v0.uri, _v2, _v5) : "",
      {
        editReviewLink: _v19,
        isPatchApiCallInProgress: _v20,
        isPatchApiCalled: _v21,
        isPatchApiError: _v22
      } = (0, _v27.useEditReviewLink)(_v2, _v3),
      [_v23, _v24] = (0, _v2.useState)(_v0.isEnabled),
      _v25 = (_v7 = _v0.expiresOn) && new Date(_v7) < new Date();
    return (0, _v2.useEffect)(() => {
      "copy" === _v15 ? _v17("vimeo.copy_review_link", _v0) : "enable" === _v15 ? _v17("vimeo.enable_review_link", _v0) : "disable" === _v15 && _v17("vimeo.disable_review_link", _v0), _v16(void 0);
    }, [_v15, _v16, _v0, _v17]), (0, _v2.useEffect)(() => {
      _v21 && !_v20 && (_v8.close(_v9.current), _v22 ? _v9.current = _v8({
        title: (0, _v22.translate)({
          singular: "Unable to update. Try again.",
          dictionary: {
            es: {
              singular: "No se puede actualizar. Inténtelo de nuevo."
            },
            "de-DE": {
              singular: "Aktualisierung nicht möglich. Versuchen Sie es erneut."
            },
            "fr-FR": {
              singular: "Mise à jour impossible. Veuillez réessayer."
            },
            "ja-JP": {
              singular: "更新できませんでした。もう一度お試しください。"
            },
            "ko-KR": {
              singular: "업데이트할 수 없습니다. 다시 시도해 주세요."
            },
            "pt-BR": {
              singular: "Não foi possível atualizar. Tente novamente."
            },
            "zh-CN": {
              singular: "无法更新。请重试。"
            }
          }
        }),
        duration: _v29.TOAST_DURATION,
        isClosable: !1,
        variant: "warning"
      }) : _v9.current = _v8({
        title: (0, _v22.translate)({
          singular: "Changes saved",
          dictionary: {
            es: {
              singular: "Guardamos los cambios"
            },
            "de-DE": {
              singular: "Änderungen wurden gespeichert"
            },
            "fr-FR": {
              singular: "Changements sauvegardés"
            },
            "ja-JP": {
              singular: "変更内容が保存されました"
            },
            "ko-KR": {
              singular: "변경 사항 저장 완료"
            },
            "pt-BR": {
              singular: "Alterações salvas"
            },
            "zh-CN": {
              singular: "已保存更改"
            }
          }
        }),
        duration: _v29.TOAST_DURATION,
        isClosable: !1
      }));
    }, [_v22, _v21, _v20]), (0, _v1.jsxs)(_v3.Box, {
      display: "flex",
      height: "60px",
      justifyContent: "space-between",
      borderTop: _v4 ? "none" : "1px solid",
      borderColor: "stroke",
      children: [(0, _v1.jsxs)(_v3.Box, {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2px",
        color: _v25 || !_v23 ? "text-secondary" : "text-primary",
        flexGrow: "1",
        overflow: "hidden",
        children: [(0, _v1.jsxs)(_v3.Box, {
          display: "flex",
          gap: "2px",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v25.OverflowToolTip, {
            labelToolTip: _v0.name,
            placement: "top",
            children: (0, _v1.jsx)(_v10.Text, {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              variant: "body-md",
              children: _v0.name
            })
          }), _v0.password && (0, _v1.jsx)(_v18.LockPassword, {
            boxSize: 12
          })]
        }), (0, _v1.jsxs)(_v3.Box, {
          display: "flex",
          color: "text-secondary",
          gap: "2px",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v14.Clock, {
            boxSize: 12
          }), (0, _v1.jsx)(_v10.Text, {
            variant: "body-sm",
            children: _v25 ? (0, _v22.translate)({
              singular: "Expired",
              dictionary: {
                es: {
                  singular: "Expirado"
                },
                "de-DE": {
                  singular: "Abgelaufen"
                },
                "fr-FR": {
                  singular: "Expiré"
                },
                "ja-JP": {
                  singular: "期限切れ"
                },
                "ko-KR": {
                  singular: "만료됨"
                },
                "pt-BR": {
                  singular: "Expirado"
                },
                "zh-CN": {
                  singular: "已过期"
                }
              }
            }) : _v0.expiresOn ? (0, _v29.formatDate)(_v0.expiresOn) : (0, _v22.translate)({
              singular: "Does not expire",
              dictionary: {
                es: {
                  singular: "No caduca"
                },
                "de-DE": {
                  singular: "Läuft nicht ab"
                },
                "fr-FR": {
                  singular: "N'expire pas"
                },
                "ja-JP": {
                  singular: "有効期限がありません"
                },
                "ko-KR": {
                  singular: "만료되지 않음"
                },
                "pt-BR": {
                  singular: "Não expira"
                },
                "zh-CN": {
                  singular: "不过期"
                }
              }
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v3.Box, {
        display: "flex",
        gap: "8px",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v11.Tooltip, {
          label: (0, _v22.translate)({
            singular: "Copy link",
            dictionary: {
              es: {
                singular: "Copiar vínculo"
              },
              "de-DE": {
                singular: "Link kopieren"
              },
              "fr-FR": {
                singular: "Copier le lien"
              },
              "ja-JP": {
                singular: "リンクをコピー"
              },
              "ko-KR": {
                singular: "링크 복사"
              },
              "pt-BR": {
                singular: "Copiar link"
              },
              "zh-CN": {
                singular: "复制链接"
              }
            }
          }),
          placement: "top",
          children: (0, _v1.jsx)(_v4.IconButton, {
            variant: "tertiary",
            size: "sm",
            "aria-label": "Copy review link",
            icon: (0, _v1.jsx)(_v17.Link, {}),
            onClick: () => void navigator.clipboard.writeText(_v18).then(() => {
              _v11({
                clipId: "clip" === _v3 ? String(_v2) : void 0,
                folderId: "folder" === _v3 ? String(_v2) : void 0,
                reviewId: (0, _v29.reviewIdFromUri)(_v0.uri ?? "") ?? "",
                surface: "review_links_panel"
              }), _v16("copy"), _v8({
                title: (0, _v22.translate)({
                  singular: "Link copied",
                  dictionary: {
                    es: {
                      singular: "Vínculo copiado"
                    },
                    "de-DE": {
                      singular: "Link kopiert"
                    },
                    "fr-FR": {
                      singular: "Lien copié"
                    },
                    "ja-JP": {
                      singular: "リンクがコピーされました"
                    },
                    "ko-KR": {
                      singular: "링크가 복사됐습니다"
                    },
                    "pt-BR": {
                      singular: "Link copiado"
                    },
                    "zh-CN": {
                      singular: "链接已复制"
                    }
                  }
                }),
                duration: _v29.TOAST_DURATION,
                isClosable: !1
              });
            }),
            onFocus: _v0 => _v0.preventDefault()
          })
        }), _v14.enable_review_page_shortcut_from_main && _v18 && (0, _v1.jsx)(_v11.Tooltip, {
          label: (0, _v22.translate)({
            singular: "Review page",
            dictionary: {
              es: {
                singular: "Página de revisión"
              },
              "de-DE": {
                singular: "Überprüfungsseite"
              },
              "fr-FR": {
                singular: "Page de révision"
              },
              "ja-JP": {
                singular: "レビューページ"
              },
              "ko-KR": {
                singular: "검토 페이지"
              },
              "pt-BR": {
                singular: "Página de revisão"
              },
              "zh-CN": {
                singular: "审阅页面"
              }
            }
          }),
          placement: "top",
          children: (0, _v1.jsx)(_v4.IconButton, {
            as: "a",
            href: _v18,
            target: "_blank",
            variant: "tertiary",
            size: "sm",
            "aria-label": "Review page",
            icon: (0, _v1.jsx)(_v19.ReviewCheck, {}),
            onFocus: _v0 => _v0.preventDefault()
          })
        }), (0, _v1.jsxs)(_v5.Menu, {
          children: [(0, _v1.jsx)(_v11.Tooltip, {
            label: (0, _v22.translate)({
              singular: "More",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr"
                },
                "fr-FR": {
                  singular: "Plus"
                },
                "ja-JP": {
                  singular: "詳細"
                },
                "ko-KR": {
                  singular: "더 보기"
                },
                "pt-BR": {
                  singular: "Mais"
                },
                "zh-CN": {
                  singular: "更多"
                }
              }
            }),
            placement: "top",
            children: (0, _v1.jsx)(_v6.MenuButton, {
              onFocus: _v0 => _v0.preventDefault(),
              as: _v4.IconButton,
              "aria-label": "Review link menu",
              icon: (0, _v1.jsx)(_v16.EllipsisV, {}),
              variant: "tertiary",
              size: "sm"
            })
          }), (0, _v1.jsxs)(_v8.MenuList, {
            children: [(0, _v1.jsx)(_v7.MenuItem, {
              icon: (0, _v1.jsx)(_v20.SettingsGear, {}),
              onClick: () => {
                _v12({
                  clipId: String(_v2),
                  reviewId: (0, _v29.reviewIdFromUri)(_v0.uri ?? "") ?? "",
                  reviewLinksAction: "manage"
                }), _v6(_v0, "edit");
              },
              children: (0, _v22.translate)({
                singular: "Manage",
                dictionary: {
                  es: {
                    singular: "Administrar"
                  },
                  "de-DE": {
                    singular: "Verwalten"
                  },
                  "fr-FR": {
                    singular: "Gérer"
                  },
                  "ja-JP": {
                    singular: "管理"
                  },
                  "ko-KR": {
                    singular: "관리"
                  },
                  "pt-BR": {
                    singular: "Gerenciar"
                  },
                  "zh-CN": {
                    singular: "管理"
                  }
                }
              })
            }), _v14.enable_review_page_shortcut_from_main && _v18 && (0, _v1.jsx)(_v7.MenuItem, {
              as: "a",
              href: _v18,
              target: "_blank",
              icon: (0, _v1.jsx)(_v19.ReviewCheck, {}),
              children: (0, _v22.translate)({
                singular: "Review page",
                dictionary: {
                  es: {
                    singular: "Página de revisión"
                  },
                  "de-DE": {
                    singular: "Überprüfungsseite"
                  },
                  "fr-FR": {
                    singular: "Page de révision"
                  },
                  "ja-JP": {
                    singular: "レビューページ"
                  },
                  "ko-KR": {
                    singular: "검토 페이지"
                  },
                  "pt-BR": {
                    singular: "Página de revisão"
                  },
                  "zh-CN": {
                    singular: "审阅页面"
                  }
                }
              })
            }), _v0.password && (0, _v1.jsx)(_v7.MenuItem, {
              icon: (0, _v1.jsx)(_v15.CopyPortrait, {}),
              onClick: () => void (_v0.password && navigator.clipboard.writeText(_v0.password).then(() => _v8({
                title: (0, _v22.translate)({
                  singular: "Password copied",
                  dictionary: {
                    es: {
                      singular: "Contraseña copiada"
                    },
                    "de-DE": {
                      singular: "Passwort kopiert"
                    },
                    "fr-FR": {
                      singular: "Mot de passe copié"
                    },
                    "ja-JP": {
                      singular: "パスワードがコピーされました"
                    },
                    "ko-KR": {
                      singular: "비밀번호 복사 완료"
                    },
                    "pt-BR": {
                      singular: "Senha copiada"
                    },
                    "zh-CN": {
                      singular: "密码已复制"
                    }
                  }
                }),
                duration: _v29.TOAST_DURATION,
                isClosable: !1
              }))),
              children: (0, _v22.translate)({
                singular: "Copy password",
                dictionary: {
                  es: {
                    singular: "Copiar contraseña"
                  },
                  "de-DE": {
                    singular: "Passwort kopieren"
                  },
                  "fr-FR": {
                    singular: "Copier le mot de passe"
                  },
                  "ja-JP": {
                    singular: "パスワードをコピー"
                  },
                  "ko-KR": {
                    singular: "비밀번호 복사"
                  },
                  "pt-BR": {
                    singular: "Copiar senha"
                  },
                  "zh-CN": {
                    singular: "复制密码"
                  }
                }
              })
            }), (0, _v1.jsx)(_v7.MenuItem, {
              isDisabled: _v10,
              icon: (0, _v1.jsx)(_v13.AddMedical, {}),
              onClick: () => {
                _v12({
                  clipId: String(_v2),
                  reviewId: (0, _v29.reviewIdFromUri)(_v0.uri ?? "") ?? "",
                  reviewLinksAction: "make_a_copy"
                }), _v6(_v0, "copy");
              },
              children: (0, _v22.translate)({
                singular: "Make a copy",
                dictionary: {
                  es: {
                    singular: "Hacer una copia"
                  },
                  "de-DE": {
                    singular: "Kopie erstellen"
                  },
                  "fr-FR": {
                    singular: "Faire une copie"
                  },
                  "ja-JP": {
                    singular: "コピーを作る"
                  },
                  "ko-KR": {
                    singular: "사본 만들기"
                  },
                  "pt-BR": {
                    singular: "Fazer uma cópia"
                  },
                  "zh-CN": {
                    singular: "复制"
                  }
                }
              })
            }), (0, _v1.jsx)(_v7.MenuItem, {
              icon: (0, _v1.jsx)(_v21.TrashBin, {}),
              onClick: () => {
                _v12({
                  clipId: String(_v2),
                  reviewId: (0, _v29.reviewIdFromUri)(_v0.uri ?? "") ?? "",
                  reviewLinksAction: "delete"
                }), _v1();
              },
              children: (0, _v22.translate)({
                singular: "Delete",
                dictionary: {
                  es: {
                    singular: "Eliminar"
                  },
                  "de-DE": {
                    singular: "Löschen"
                  },
                  "fr-FR": {
                    singular: "Supprimer"
                  },
                  "ja-JP": {
                    singular: "削除"
                  },
                  "ko-KR": {
                    singular: "삭제"
                  },
                  "pt-BR": {
                    singular: "Excluir"
                  },
                  "zh-CN": {
                    singular: "删除"
                  }
                }
              })
            })]
          })]
        }), (0, _v1.jsx)(_v9.Switch, {
          isDisabled: !!_v25,
          sx: {
            _disabled: {
              opacity: .6
            }
          },
          isChecked: _v23,
          onChange: () => {
            let _v0;
            return _v0 = (0, _v29.reviewIdFromUri)(_v0.uri ?? ""), void (_v13({
              clipId: String(_v2),
              reviewId: (0, _v29.reviewIdFromUri)(_v0.uri ?? "") ?? "",
              reviewLinksNewStatus: !_v23
            }), _v19({
              isEnabled: !_v23
            }, _v0, {
              ..._v0,
              isEnabled: !_v23
            }), _v24(!_v23), _v16(_v23 ? "disable" : "enable"));
          }
        })]
      })]
    });
  }], 0);
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  _v0.s(["useDeleteReviewLink", 0, (_v0, _v1) => ("clip" === _v1 ? _v0 => {
    let [_v1, {
        error: _v2,
        loading: _v3,
        called: _v4
      }] = (0, _v32.useDeleteVideoReviewLink)(),
      {
        revalidateReviewLinks: _v5
      } = (0, _v33.useGetVideoReviewLinks)(_v0),
      {
        cache: _v6,
        mutate: _v7
      } = (0, _v30.useSWRConfig)();
    return {
      deleteReviewLink: _v0 => {
        if (_v0) return _v1({
          where: {
            videoId: _v0,
            reviewLinkId: _v0
          }
        }).then(() => {
          for (let _v0 of (_v5(), _v6.keys())) _v0.includes("reviewLinks") && _v7(_v0);
        });
      },
      deleteApiError: _v2,
      isDeleteInProgress: _v3,
      isDeleteApiCalled: _v4
    };
  } : _v0 => {
    let [_v1, {
        error: _v2,
        loading: _v3,
        called: _v4
      }] = (0, _v31.useDeleteFolderReviewLink)(),
      {
        revalidateReviewLinks: _v5
      } = (0, _v33.useGetFolderReviewLinks)(_v0),
      {
        cache: _v6,
        mutate: _v7
      } = (0, _v30.useSWRConfig)();
    return {
      deleteReviewLink: _v0 => {
        if (_v0) return _v1({
          where: {
            projectId: _v0,
            reviewLinkId: _v0
          }
        }).then(() => {
          for (let _v0 of (_v5(), _v6.keys())) _v0.includes("reviewLinks") && _v7(_v0);
        });
      },
      deleteApiError: _v2,
      isDeleteInProgress: _v3,
      isDeleteApiCalled: _v4
    };
  })(_v0)], 0);
}