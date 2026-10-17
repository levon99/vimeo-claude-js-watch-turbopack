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
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0);
  let _v82 = () => {
    let {
        data: _v0
      } = (() => {
        let {
            query: _v0
          } = (0, _v3.useRouter)(),
          _v1 = "string" == typeof _v0.userId ? parseInt(_v0.userId, 10) : null,
          _v2 = "string" == typeof _v0.folderId ? parseInt(_v0.folderId, 10) : null,
          _v3 = "string" == typeof _v0.reviewId ? _v0.reviewId : void 0,
          _v4 = (0, _v24.getReviewPasswordHashFromCookie)(_v3);
        return (0, _v15.useGetUserProject)(() => _v1 && _v2 ? {
          where: {
            userId: _v1,
            projectId: _v2
          },
          select: _v69.DEFAULT_FOLDER_API_FIELDS,
          query: {
            reviewId: _v3,
            password: _v4
          }
        } : null);
      })(),
      {
        query: _v1
      } = (0, _v3.useRouter)(),
      _v2 = "string" == typeof _v1.userId ? parseInt(_v1.userId, 10) : void 0,
      _v3 = _v0?.user?.uri ?? (_v2 ? `/users/${_v2}` : void 0),
      {
        contentSpaceEnabled: _v4,
        notTeamGatedContentSpaceEnabled: _v5,
        loading: _v6
      } = (0, _v80.useContentSpaceEnabled)(_v3),
      _v7 = !_v6 && _v5 && !_v4,
      _v8 = _v0?.metadata?.connections?.ancestorPath || [];
    if (!_v8.length) return null;
    let _v9 = _v8.length > 3,
      _v10 = [..._v8].reverse(),
      _v11 = _v10.slice(0, -1),
      [_v12] = _v10.slice(-1),
      _v13 = _v10[0]?.uri,
      _v14 = _v0 => ({
        name: _v7 && _v0.uri === _v13 ? (0, _v16.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }) : _v0.name,
        href: (0, _v81.getFolderPageUriFromApiUri)(_v0.uri)
      });
    return (0, _v1.jsxs)(_v71.Breadcrumb, {
      separator: (0, _v1.jsx)(_v78.ChevronRightSmall, {
        color: "text-secondary"
      }),
      display: {
        base: "none",
        md: "block"
      },
      children: [_v9 && (0, _v1.jsx)(_v71.BreadcrumbItem, {
        children: (0, _v1.jsxs)(_v74.Menu, {
          children: [(0, _v1.jsx)(_v75.MenuButton, {
            "aria-label": (0, _v16.translate)({
              singular: "Show folder path",
              dictionary: {
                es: {
                  singular: "Mostrar la ruta de la carpeta"
                },
                "de-DE": {
                  singular: "Ordnerpfad anzeigen"
                },
                "fr-FR": {
                  singular: "Afficher le chemin du dossier"
                },
                "ja-JP": {
                  singular: "フォルダーパスを表示"
                },
                "ko-KR": {
                  singular: "폴더 경로 표시"
                },
                "pt-BR": {
                  singular: "Mostrar caminho da pasta"
                },
                "zh-CN": {
                  singular: "显示文件夹路径"
                }
              }
            }),
            as: _v73.IconButton,
            "data-testid": "folder-breadcrumbs-button",
            icon: (0, _v1.jsx)(_v79.Folder, {}),
            size: "xs",
            variant: "tertiary"
          }), (0, _v1.jsx)(_v77.MenuList, {
            children: _v11.map(_v0 => {
              let {
                name: _v1,
                href: _v2
              } = _v14(_v0);
              return (0, _v1.jsx)(_v76.MenuItem, {
                as: _v70.default,
                href: _v2,
                children: _v1
              }, _v0.uri);
            })
          })]
        })
      }), !_v9 && _v11.map(_v0 => {
        let {
          name: _v1,
          href: _v2
        } = _v14(_v0);
        return (0, _v1.jsx)(_v71.BreadcrumbItem, {
          children: (0, _v1.jsx)(_v72.BreadcrumbLink, {
            as: _v70.default,
            href: _v2,
            children: _v1
          })
        }, _v0.uri);
      }), (0, _v1.jsx)(_v71.BreadcrumbItem, {
        children: (() => {
          let {
            name: _v0,
            href: _v1
          } = _v14(_v12);
          return (0, _v1.jsx)(_v72.BreadcrumbLink, {
            as: _v70.default,
            href: _v1,
            children: _v0
          });
        })()
      }, _v12.uri)]
    });
  };
  var _v83 = _v0.i(0),
    _v84 = _v4,
    _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  class _v87 extends _v84.Component {
    state = {
      error: null
    };
    static getDerivedStateFromError(_v0) {
      return {
        error: _v0
      };
    }
    componentDidCatch(_v0, _v1) {
      window.DD_RUM && window.DD_RUM.onReady(() => {
        window.DD_RUM.addError(_v0, {
          ..._v1
        });
      });
    }
    componentDidUpdate(_v0) {
      this.props.folderId !== _v0.folderId && this.state.error && this.setState({
        ...this.state,
        error: null
      });
    }
    render() {
      let {
        error: _v0
      } = this.state;
      if (_v0) return _v0 instanceof _v14.UnauthorizedError ? this.props.viewer?.user ? (0, _v1.jsx)(_v86.ErrorPage, {
        error: new _v14.UnauthorizedError()
      }) : (0, _v1.jsx)(_v85.BrandedLogin, {
        metaUrl: `/sso/project/${this.props.folderId}/meta`,
        errorConstructor: _v14.UnauthorizedError
      }) : _v0 instanceof _v14.ResourceNotFoundError ? (0, _v1.jsx)(_v86.ErrorPage, {
        error: new _v14.ResourceNotFoundError()
      }) : (0, _v1.jsx)(_v86.ErrorPage, {
        error: _v0
      });
      return this.props.children;
    }
  }
  var _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  let _v90 = ({
    count: _v0,
    isMyLibrary: _v1,
    level: _v2,
    isFiltered: _v3 = !1,
    hasCustomDefaults: _v4 = !1
  }) => {
    let {
      reviewId: _v5
    } = (0, _v4.useContext)(_v89.ReviewLinkContext);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v88.Box, {
        display: {
          base: "inline",
          sm: "none"
        },
        children: _v91(_v0, _v2, _v1, !0, _v3, _v5, _v4)
      }), (0, _v1.jsx)(_v88.Box, {
        display: {
          base: "none",
          sm: "inline"
        },
        children: _v91(_v0, _v2, _v1, !1, _v3, _v5, _v4)
      })]
    });
  };
  function _v91(_v0, _v1, _v2, _v3 = !1, _v4 = !1, _v5, _v6 = !1) {
    var _v7;
    return [_v2 || _v5 ? null : _v3 ? function (_v0) {
      switch (_v0) {
        case "manage":
          return (0, _v16.translate)({
            singular: "Manage access",
            dictionary: {
              es: {
                singular: "Gestionar el acceso"
              },
              "de-DE": {
                singular: "Zugriff verwalten"
              },
              "fr-FR": {
                singular: "Gérer l'accès"
              },
              "ja-JP": {
                singular: "アクセスを管理"
              },
              "ko-KR": {
                singular: "액세스 관리"
              },
              "pt-BR": {
                singular: "Gerenciar acesso"
              },
              "zh-CN": {
                singular: "管理访问"
              }
            }
          });
        case "edit":
          return (0, _v16.translate)({
            singular: "Edit access",
            dictionary: {
              es: {
                singular: "Editar acceso"
              },
              "de-DE": {
                singular: "Zugang bearbeiten"
              },
              "fr-FR": {
                singular: "Modifier l'accès"
              },
              "ja-JP": {
                singular: "編集アクセス"
              },
              "ko-KR": {
                singular: "액세스 권한 편집"
              },
              "pt-BR": {
                singular: "Acesso de edição"
              },
              "zh-CN": {
                singular: "编辑访问权限"
              }
            }
          });
        case "comment":
          return (0, _v16.translate)({
            singular: "Comment access",
            dictionary: {
              es: {
                singular: "Acceso para comentar"
              },
              "de-DE": {
                singular: "Zugriff auf Kommentare"
              },
              "fr-FR": {
                singular: "Accès aux commentaires"
              },
              "ja-JP": {
                singular: "コメントアクセス権"
              },
              "ko-KR": {
                singular: "댓글 액세스 권한"
              },
              "pt-BR": {
                singular: "Acesso aos comentários"
              },
              "zh-CN": {
                singular: "评论权限"
              }
            }
          });
        default:
          return (0, _v16.translate)({
            singular: "View access",
            dictionary: {
              es: {
                singular: "Ver acceso"
              },
              "de-DE": {
                singular: "Zugang anzeigen"
              },
              "fr-FR": {
                singular: "Afficher l'accès"
              },
              "ja-JP": {
                singular: "アクセスを表示"
              },
              "ko-KR": {
                singular: "액세스 보기"
              },
              "pt-BR": {
                singular: "Ver acesso"
              },
              "zh-CN": {
                singular: "查看访问权限"
              }
            }
          });
      }
    }(_v1) : function (_v0) {
      switch (_v0) {
        case "manage":
          return (0, _v16.translate)({
            singular: "You have manage access",
            dictionary: {
              es: {
                singular: "Tiene acceso de administrador"
              },
              "de-DE": {
                singular: "Sie haben Verwaltungszugriff"
              },
              "fr-FR": {
                singular: "Vous avez un accès de gestion"
              },
              "ja-JP": {
                singular: "管理アクセス権を所有しています"
              },
              "ko-KR": {
                singular: "관리 액세스 권한이 있습니다."
              },
              "pt-BR": {
                singular: "Você tem permissão para gerenciar"
              },
              "zh-CN": {
                singular: "您拥有管理权限"
              }
            }
          });
        case "edit":
          return (0, _v16.translate)({
            singular: "You have edit access",
            dictionary: {
              es: {
                singular: "Tiene acceso de edición"
              },
              "de-DE": {
                singular: "Sie haben Bearbeitungszugriff"
              },
              "fr-FR": {
                singular: "Vous avez un accès de modification"
              },
              "ja-JP": {
                singular: "編集アクセス権を所有しています"
              },
              "ko-KR": {
                singular: "편집 액세스 권한이 있습니다."
              },
              "pt-BR": {
                singular: "Você tem permissão para editar"
              },
              "zh-CN": {
                singular: "您拥有编辑权限"
              }
            }
          });
        case "comment":
          return (0, _v16.translate)({
            singular: "You have comment access",
            dictionary: {
              es: {
                singular: "Tiene acceso para comentar"
              },
              "de-DE": {
                singular: "Sie haben Kommentarzugriff"
              },
              "fr-FR": {
                singular: "Vous avez un accès de commentaire"
              },
              "ja-JP": {
                singular: "コメント機能にアクセスできます"
              },
              "ko-KR": {
                singular: "댓글 액세스 권한이 있습니다."
              },
              "pt-BR": {
                singular: "Você tem permissão para comentar"
              },
              "zh-CN": {
                singular: "您拥有评论权限"
              }
            }
          });
        default:
          return (0, _v16.translate)({
            singular: "You have view access",
            dictionary: {
              es: {
                singular: "Tiene acceso de vista"
              },
              "de-DE": {
                singular: "Sie haben Ansichtszugriff"
              },
              "fr-FR": {
                singular: "Vous avez un accès de visualisation"
              },
              "ja-JP": {
                singular: "閲覧アクセス権を所有しています"
              },
              "ko-KR": {
                singular: "보기 권한이 있습니다."
              },
              "pt-BR": {
                singular: "Você tem acesso para ver"
              },
              "zh-CN": {
                singular: "您具有查看权限"
              }
            }
          });
      }
    }(_v1), _v0 > 0 ? (_v7 = _v0, _v4 ? (0, _v16.translate)({
      count: _v7,
      singular: "{NUM_ITEMS} result",
      plural: "{NUM_ITEMS} results",
      replacements: {
        NUM_ITEMS: _v7
      },
      dictionary: {
        es: {
          singular: "{NUM_ITEMS} resultado",
          plural: "{NUM_ITEMS} resultados"
        },
        "de-DE": {
          singular: "{NUM_ITEMS} Ergebnis",
          plural: "{NUM_ITEMS} Ergebnisse"
        },
        "fr-FR": {
          singular: "{NUM_ITEMS} résultat",
          plural: "{NUM_ITEMS} résultats"
        },
        "ja-JP": {
          singular: "{NUM_ITEMS}件の検索結果",
          plural: "{NUM_ITEMS} 件の結果"
        },
        "ko-KR": {
          singular: "검색 결과 {NUM_ITEMS}건",
          plural: "결과 {NUM_ITEMS}개"
        },
        "pt-BR": {
          singular: "{NUM_ITEMS} resultado",
          plural: "{NUM_ITEMS} resultados"
        },
        "zh-CN": {
          singular: "{NUM_ITEMS} 个结果",
          plural: "{NUM_ITEMS} 个结果"
        }
      }
    }) : (0, _v16.translate)({
      count: _v7,
      singular: "{NUM_ITEMS} item",
      plural: "{NUM_ITEMS} items",
      replacements: {
        NUM_ITEMS: _v7
      },
      dictionary: {
        es: {
          singular: "{NUM_ITEMS} elemento",
          plural: "{NUM_ITEMS} elementos"
        },
        "de-DE": {
          singular: "{NUM_ITEMS} Element",
          plural: "{NUM_ITEMS} Elemente"
        },
        "fr-FR": {
          singular: "{NUM_ITEMS} élément",
          plural: "{NUM_ITEMS} éléments"
        },
        "ja-JP": {
          singular: "{NUM_ITEMS} 件のアイテム",
          plural: "{NUM_ITEMS} 件のアイテム"
        },
        "ko-KR": {
          singular: "{NUM_ITEMS}개 항목",
          plural: "{NUM_ITEMS}개 항목"
        },
        "pt-BR": {
          singular: "{NUM_ITEMS} iten",
          plural: "{NUM_ITEMS} itens"
        },
        "zh-CN": {
          singular: "{NUM_ITEMS} 项",
          plural: "{NUM_ITEMS} 项"
        }
      }
    })) : null, _v6 ? (0, _v16.translate)({
      singular: "Custom defaults",
      dictionary: {
        es: {
          singular: "Valores predeterminados personalizados"
        },
        "de-DE": {
          singular: "Benutzerdefinierte Standardeinstellungen"
        },
        "fr-FR": {
          singular: "Paramètres par défaut personnalisés"
        },
        "ja-JP": {
          singular: "カスタムのデフォルト設定"
        },
        "ko-KR": {
          singular: "사용자 지정 기본값"
        },
        "pt-BR": {
          singular: "Padrões personalizados"
        },
        "zh-CN": {
          singular: "自定义默认值"
        }
      }
    }) : null].filter(Boolean).join(" · ");
  }
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0);
  let _v119 = ({
      hasUpsell: _v0,
      onClick: _v1
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v73.IconButton, {
        "aria-label": (0, _v16.translate)({
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
        }),
        "data-testid": "header-share-button-mobile",
        display: {
          base: "inline-flex",
          md: "none"
        },
        icon: (0, _v1.jsx)(_v118.Share, {}),
        variant: _v0 ? "upsell" : "secondary",
        size: "md",
        id: "folder-share-button-mobile",
        onClick: _v1
      }), (0, _v1.jsx)(_v117.Button, {
        "data-testid": "header-share-button",
        display: {
          base: "none",
          md: "inline-flex"
        },
        variant: _v0 ? "upsell" : "secondary",
        size: "md",
        id: "folder-share-button",
        onClick: _v1,
        children: (0, _v16.translate)({
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
    }),
    _v120 = (0, _v2.default)(async () => {
      let {
        Facepile: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      loading: _v94.FacepileLoader,
      ssr: !1
    }),
    _v121 = ({
      ancestorFolders: _v0,
      disableUploads: _v1,
      folderData: _v2,
      folderId: _v3,
      isLinkRecipient: _v4,
      onRename: _v5,
      shouldShowFolderMenu: _v6 = !0,
      userId: _v7,
      viewer: _v8
    }) => {
      let {
          isPersonalTeamFolderAdminView: _v9
        } = (0, _v4.useContext)(_v33.VideoLibraryLayoutContext),
        _v10 = (0, _v105.useNotification)(),
        {
          notifyItemMoveFailure: _v11,
          notifyItemMoveSuccess: _v12,
          notifyItemMoveToWorkspaceSuccess: _v13
        } = (0, _v105.useNotifications)(),
        {
          revalidateTopLevelFolders: _v14,
          revalidateFolderItems: _v15,
          revalidateFolder: _v16,
          revalidateSetOfFolderItems: _v17
        } = (0, _v34.useRevalidate)(),
        {
          openBulkAiModal: _v18
        } = (0, _v92.useBulkAiModal)(),
        {
          openDeleteFolderModal: _v19
        } = (0, _v109.useDeleteFolderModal)(),
        {
          openMoveModal: _v20
        } = (0, _v110.useMoveModal)(),
        {
          openShareFolderModal: _v21
        } = (0, _v111.useShareFolderModal)(),
        _v22 = (0, _v103.useCopyFolderLinkToast)(),
        _v23 = (0, _v104.useManageShareAction)({
          canEdit: (0, _v99.getFolderPermissions)(_v2).canEditSettings,
          entityUri: _v2.uri,
          location: _v69.SHARE_RESOURCE_MVV_HEADER_ENTRY_POINT,
          panel: "INVITE_PANEL"
        }),
        {
          openSlackIntegrationModal: _v24
        } = (0, _v112.useSlackIntegrationModal)(),
        {
          openFolderDefaultsModal: _v25
        } = (0, _v106.useFolderDefaultsModal)(),
        _v26 = (0, _v107.useAcknowledgeFolderDefaultsIntro)(),
        {
          openFolderSettingsModal: _v27
        } = (0, _v108.useFolderSettingsModal)(),
        {
          open: _v28,
          close: _v29
        } = (0, _v113.useUpsellModal)(),
        {
          openBulkPrivacyModal: _v30
        } = (0, _v93.useBulkPrivacyModal)(),
        _v31 = (0, _v11.useIsMobile)(),
        _v32 = _v8?.teamUser?.ownerId || _v8?.user?.id || _v7,
        _v33 = !!_v2?.metadata?.interactions.addSubfolder?.canAddSubfolders,
        _v34 = !!_v2?.metadata.interactions.invite,
        {
          canDelete: _v35,
          canEdit: _v36,
          canEditSettings: _v37,
          canTranslate: _v38
        } = (0, _v99.getFolderPermissions)(_v2),
        {
          contentSpaceEnabled: _v39
        } = (0, _v80.useContentSpaceEnabled)(_v32),
        _v40 = _v2?.isPrivateToUser,
        {
          trackLibraryLevelActionClicked: _v41,
          trackLibraryNewFolderClicked: _v42
        } = (0, _v22.useLibraryTracking)(),
        _v43 = _v0 => _v41({
          libraryType: (0, _v23.deriveLibraryType)({
            hasContentSpaceEnabled: !!_v39,
            isPrivateToUser: _v2?.isPrivateToUser
          }),
          libraryLevelAction: _v0
        }),
        _v44 = _v2?.metadata?.connections?.parentFolder,
        _v45 = !!_v44,
        _v46 = (0, _v116.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
        _v47 = (0, _v16.translate)({
          singular: "Folder defaults saved",
          dictionary: {
            es: {
              singular: "Se guardaron los valores predeterminados de la carpeta."
            },
            "de-DE": {
              singular: "Ordner-Standardeinstellungen gespeichert"
            },
            "fr-FR": {
              singular: "Paramètres par défaut des dossiers enregistrés"
            },
            "ja-JP": {
              singular: "フォルダーのデフォルトが保存されました"
            },
            "ko-KR": {
              singular: "폴더 기본 설정이 저장되었습니다."
            },
            "pt-BR": {
              singular: "Padrões da pasta salvos"
            },
            "zh-CN": {
              singular: "文件夹默认设置已保存"
            }
          }
        }),
        _v48 = _v2?.link ? _v2?.link : `${_v8?.vimeoHttpsUrl}/user/${_v7}/folder/${_v3}`,
        {
          capabilities: _v49
        } = (0, _v10.useCapability)(["canSeeUpsellModalOnShare", "hasExtraEmbedOptions", "hasVideoLibraryEmbeddableUploader", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "clipCreateEmbedPresets", "hasProhibitMultipleReviewLinks", "canPerformBulkTranslations"], _v32),
        _v50 = _v40 && _v2?.metadata?.connections?.ancestorPath?.length === 0,
        _v51 = !_v40 && !_v9 || !_v50 && _v34,
        _v52 = !!_v49.canGenerateClipTextTranslation,
        _v53 = !!_v49.canGenerateClipTranslation,
        _v54 = _v36 && _v38 && (_v53 || _v52) && !!_v49.canPerformBulkTranslations,
        _v55 = _v49.hasExtraEmbedOptions && _v37,
        _v56 = _v39 ? (0, _v16.translate)({
          singular: "Team library",
          dictionary: {
            es: {
              singular: "Biblioteca del equipo"
            },
            "de-DE": {
              singular: "Teambibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque de l'équipe"
            },
            "ja-JP": {
              singular: "チームライブラリ"
            },
            "ko-KR": {
              singular: "팀 라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca da equipe"
            },
            "zh-CN": {
              singular: "团队视频库"
            }
          }
        }) : (0, _v16.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }),
        _v57 = _v8?.user?.uri === _v2?.user?.uri,
        _v58 = _v57 || _v8?.teamUser?.plainTextPermissionLevel === "Admin",
        _v59 = _v57 && _v49.canSeeUpsellModalOnShare,
        _v60 = _v8?.vimeoHttpsUrl ? _v8?.vimeoHttpsUrl + (0, _v81.getFolderAnalyticsPageUriFromApiUri)(_v2?.uri) : void 0,
        {
          handleStarMenuState: _v61
        } = (0, _v114.useStarMenuItem)(),
        {
          isItemStarred: _v62,
          onStarClick: _v63,
          ..._v64
        } = _v61("folder", _v2),
        _v65 = (0, _v4.useCallback)(() => {
          _v62 && _v63?.();
        }, [_v62, _v63]),
        _v66 = _v0 => {
          _v34 ? _v21?.(_v2.uri, _v69.SHARE_RESOURCE_MVV_HEADER_ENTRY_POINT, _v0) : _v59 ? _v28({
            tracking: {
              params: {
                feature: "teams",
                location: "folder_header",
                page: "library_folder",
                upsell_name: "share_folder_with_team"
              },
              paywallTracking: {
                paywallTrigger: "folder_review_header_share_button",
                paywallLocation: "folder_header",
                paywallType: "popup",
                paywallFeature: "collaboration"
              }
            },
            onClose: _v29,
            modalConfig: {
              headerText: (0, _v16.translate)({
                singular: "Upgrade to share",
                dictionary: {
                  es: {
                    singular: "Cambia de membresía para compartir"
                  },
                  "de-DE": {
                    singular: "Zum Teilen Upgrade vornehmen"
                  },
                  "fr-FR": {
                    singular: "Passez au niveau supérieur pour partager"
                  },
                  "ja-JP": {
                    singular: "共有するにはアップグレード"
                  },
                  "ko-KR": {
                    singular: "업그레이드하고 공유하세요"
                  },
                  "pt-BR": {
                    singular: "Faça o upgrade para compartilhar"
                  },
                  "zh-CN": {
                    singular: "升级后即可分享"
                  }
                }
              }),
              subHeaderText: (0, _v16.translate)({
                singular: "Get full access to robust collaboration and privacy tools",
                dictionary: {
                  es: {
                    singular: "Obtenga acceso total a herramientas potentes de colaboración y privacidad"
                  },
                  "de-DE": {
                    singular: "Erhalten Sie vollen Zugriff auf zuverlässige Tools für Zusammenarbeit und Datenschutz"
                  },
                  "fr-FR": {
                    singular: "Accédez à tous les outils performants pour la collaboration et la confidentialité"
                  },
                  "ja-JP": {
                    singular: "強力な共同作業ツールとプライバシーツールにフルアクセス"
                  },
                  "ko-KR": {
                    singular: "강력한 협업 및 개인정보 보호 도구 모두 이용"
                  },
                  "pt-BR": {
                    singular: "Tenha acesso total a ferramentas robustas de colaboração e privacidade"
                  },
                  "zh-CN": {
                    singular: "获取对强大协作和隐私工具的完整访问权限"
                  }
                }
              })
            }
          }) : _v22({
            isSuccess: (0, _v97.default)(_v48),
            onManage: _v23
          });
        },
        {
          reviewId: _v67
        } = (0, _v4.useContext)(_v89.ReviewLinkContext),
        _v68 = !!_v49.hasVideoLibraryEmbeddableUploader && !!_v2?.metadata?.interactions?.uploadVideo && !_v4 && !_v1,
        _v69 = _v60 && _v58 && !_v4 ? (0, _v1.jsx)(_v101.AnalyticsButton, {
          analyticsLink: _v60,
          location: _v98.AnalyticsLocations.MVV_HEADER,
          page: "MVV",
          name: "click_folder_analytics",
          dataTestId: "header-analytics-button"
        }) : null,
        _v70 = _v68 ? (0, _v1.jsx)(_v100.UploadButton, {
          folderId: _v3,
          paywallTrigger: "folder_header_upload_button",
          targetUserId: _v32,
          surface: _v39 ? _v40 ? "my_videos" : "teamlibrary" : "library"
        }) : null,
        _v71 = _v33 && !_v4 ? (0, _v1.jsx)(_v102.NewFolderButton, {
          onClick: () => {
            _v42({
              libraryType: (0, _v23.deriveLibraryType)({
                hasContentSpaceEnabled: !!_v39,
                isPrivateToUser: _v2?.isPrivateToUser
              })
            }), _v27({
              userId: _v32,
              parentFolderUri: _v44?.uri ?? "",
              currentFolderUri: _v2.uri,
              location: _v98.AnalyticsLocations.MVV_HEADER,
              isEditingFromFolderHeader: !0
            });
          },
          dataTestId: "header-new-folder-button",
          dataTestIdMobile: "header-new-folder-button-mobile"
        }) : null;
      if (_v50) return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v69, _v70, _v71]
      });
      let _v72 = () => {
        _v43("folder_setting"), _v25({
          folderId: _v3,
          ownerId: _v32,
          isFolderOwner: _v57,
          presetId: _v2?.settings?.embedPresetId ?? null,
          isInheritanceEnabled: _v2?.settings?.isEmbedPresetInheritanceEnabled,
          displayUpsell: !_v55,
          location: _v98.AnalyticsLocations.MVV_HEADER,
          feature: _v98.AnalyticsFeatures.VIDEO_LIBRARY,
          page: "MVV",
          onSave: () => {
            _v10({
              content: _v47,
              status: ""
            });
          }
        });
      };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [!_v4 && _v6 && (0, _v1.jsx)(_v107.FolderDefaultsIntroPopover, {
          announcementId: "folder_defaults_folder_detail",
          ownerId: _v32,
          enabled: _v37,
          placement: "bottom-end",
          anchorDisplay: "inline-flex",
          onSetDefaults: _v72,
          children: (0, _v1.jsx)(_v95.FolderMenu, {
            canTranslateVideos: _v54,
            handleTranslateVideo: () => {
              _v43("translate_videos"), _v18({
                folderId: _v3,
                isFolder: !0,
                folderName: _v2.name,
                canTranslateText: _v52,
                canTranslateDubbing: _v53,
                onComplete: () => {
                  _v32 && _v46(_v32);
                }
              });
            },
            canDelete: _v35,
            onDelete: () => {
              _v43("delete"), _v19?.(_v2.name, _v3, _v98.AnalyticsLocations.MVV_HEADER, _v44?.uri ?? null, _v32, _v40, !!_v39, _v65);
            },
            canEdit: _v36,
            canEditFolderSettings: _v37,
            onFolderSettings: () => {
              _v43("folder_setting"), _v27({
                userId: _v32,
                parentFolderUri: _v44?.uri ?? "",
                currentFolderUri: _v2.uri,
                location: _v98.AnalyticsLocations.MVV_HEADER,
                isEditingFolder: !0,
                isEditingFromFolderHeader: !0,
                initialColor: _v2?.settings?.color
              });
            },
            onFolderDefaults: () => {
              _v26(), _v72();
            },
            canMove: _v35,
            onMove: () => {
              _v43("move"), _v20({
                activeFolderURI: _v2.uri,
                feature: _v98.AnalyticsFeatures.VIDEO_LIBRARY,
                location: _v98.AnalyticsLocations.MVV_HEADER,
                items: [{
                  name: _v2.name,
                  type: "folder",
                  parentFolder: _v44?.uri ? {
                    uri: _v44.uri,
                    isPrivateToUser: _v40
                  } : void 0,
                  uri: _v2.uri
                }],
                onMoveSuccess: ({
                  selectedDestination: _v0,
                  items: _v1,
                  destinationWorkspaceId: _v2,
                  destinationWorkspaceName: _v3
                }) => {
                  _v14();
                  let _v4 = !!_v1[0].parentFolder?.uri;
                  _v16(_v2.uri), _v4 && _v15(_v1[0]?.parentFolder?.uri ?? ""), "root" !== _v0 && _v15(_v0.uri);
                  let _v5 = "root" === _v0 ? _v56 : _v0.name,
                    _v6 = "root" === _v0 ? _v69.TEAM_LIBRARY_PATH : (0, _v81.getFolderPageUriFromApiUri)(_v0.uri);
                  _v2 && _v3 ? _v13(_v1, {
                    label: _v5,
                    workspaceName: _v3
                  }, () => {
                    _v8 && (0, _v115.switchTeam)(_v2, _v8.xsrft).finally(() => {
                      window.location.href = _v6;
                    });
                  }) : _v12(_v1, {
                    label: _v5,
                    link: _v6
                  });
                },
                onMoveFailure: ({
                  selectedDestination: _v0,
                  items: _v1
                }) => {
                  _v11(_v1[0].name, "root" === _v0 ? _v56 : _v0.name);
                },
                teamOwnerId: _v32
              });
            },
            analyticsPageLink: _v60,
            onClickAnalyticsLink: () => {
              _v43("analytics");
            },
            hasSlackIntegration: !(!_v45 && _v2.isPrivateToUser) && !_v2.useParentSlackSettings,
            isConnectedToSlack: !!_v2.slackIncomingWebhooksId,
            onSlackIntegration: () => {
              _v43("connect_to_slack"), _v24({
                userId: _v32,
                hasSlackIntegration: !!_v2.slackIncomingWebhooksId,
                isSlackNotificationEnabled: !!_v2.isSlackNotificationEnabled,
                folderId: _v3,
                folderName: _v2.name,
                currentFolderUri: _v2.uri,
                async updateSubFolderData(_v0) {
                  _v16(_v2.uri), _v17(_v0), _v44?.uri ? _v15(_v44.uri) : _v14();
                }
              });
            },
            canStar: !_v40 || !!_v0?.length,
            onStarClick: _v63 ? () => {
              _v62 || _v43("add_to_starred"), _v63();
            } : void 0,
            canShare: _v31 && _v34,
            onRename: _v5 ? () => {
              _v43("rename"), _v5();
            } : void 0,
            onShare: () => {
              _v43("share"), _v66();
            },
            canManageReviewLinks: _v31,
            onManageReviewLinks: () => {
              _v43("manage_review_links"), _v66("REVIEW_LINKS_PANEL");
            },
            canBulkPrivacyChange: _v36,
            onBulkPrivacyChange: () => {
              _v30({
                userId: _v32,
                folderUris: [_v2.uri],
                folderName: _v2.name,
                location: "folder_header",
                onSuccess: () => {}
              });
            },
            hasProhibitMultipleReviewLinks: _v49.hasProhibitMultipleReviewLinks,
            onCopyLink: _v31 ? () => {
              _v43("copy_link"), _v22({
                isSuccess: (0, _v97.default)(_v48),
                onManage: _v23
              });
            } : void 0,
            folderLink: _v31 ? _v48 : void 0,
            hasShareUpsell: _v59,
            hasFolderDefaultsUpsell: !_v55,
            ..._v64
          })
        }), _v8?.user && _v51 && !_v4 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v120, {
            resourceUri: _v2.uri,
            onAddPeopleClick: _v66
          }), (0, _v1.jsx)(_v119, {
            hasUpsell: !!_v59,
            onClick: _v66
          })]
        }), _v67 && (0, _v1.jsx)(_v96.CopyReviewLinkButton, {
          surface: "folder_review_page",
          folderId: String(_v3)
        }), _v70, _v71]
      });
    };
  var _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0);
  let _v140 = () => (0, _v1.jsx)(_v139.HintWrapper, {
    children: (0, _v1.jsx)(_v137.Text, {
      variant: "body-md",
      color: "text-secondary",
      children: (0, _v16.translate)({
        singular: "Looking for other videos? Try {LINK}Team library{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v138.Link, {
            href: "/library",
            variant: "inline-secondary",
            fontSize: "inherit",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "¿Está buscando otros videos? Pruebe la {LINK}Biblioteca del equipo{/LINK}"
          },
          "de-DE": {
            singular: "Suchen Sie nach anderen Videos? Werfen Sie einen Blick in die {LINK}Teambibliothek{/LINK}"
          },
          "fr-FR": {
            singular: "Vous recherchez d'autres vidéos ? Essayez la {LINK}bibliothèque d'équipe{/LINK}"
          },
          "ja-JP": {
            singular: "他の動画をお探しですか？{LINK}チームライブラリ{/LINK}をお試しください。"
          },
          "ko-KR": {
            singular: "다른 동영상을 찾고 계신가요? {LINK}팀 라이브러리{/LINK}를 사용해 보세요."
          },
          "pt-BR": {
            singular: "Procurando outros vídeos? Confira a {LINK}Biblioteca da equipe{/LINK}"
          },
          "zh-CN": {
            singular: "在寻找其他视频吗？不妨试用{LINK}团队视频库{/LINK}"
          }
        }
      })
    })
  });
  var _v141 = _v0.i(0);
  let _v142 = _v5.default.div.withConfig({
      displayName: "LoadMore__LoadMoreWrapper",
      componentId: "sc-39ae2d88-0"
    })`
  margin: ${(0, _v134.rem)(40)} 0 ${(0, _v134.rem)(48)};
  padding: 0 1.25rem;
`,
    _v143 = _v0 => {
      let {
          isLoadingMore: _v1,
          canLoadMore: _v2 = !1,
          onClick: _v3,
          isDropzoneEnabled: _v4 = !1,
          page: _v5 = "",
          shouldShowTeamLibraryNotification: _v6 = !1,
          universalHostingEnabled: _v7 = !1
        } = _v0,
        _v8 = _v4 && !_v1;
      if (!_v2) if (_v6) return (0, _v1.jsx)(_v140, {});else if (_v8) return (0, _v1.jsx)(_v141.UploadDropzoneHint, {
        page: _v5,
        universalHostingEnabled: _v7
      });else return (0, _v1.jsx)(_v142, {});
      return (0, _v1.jsx)(_v142, {
        children: (0, _v1.jsx)(_v136.Button, {
          format: "secondary",
          fluid: !0,
          disabled: _v1,
          onClick: _v3,
          children: _v1 ? (0, _v1.jsx)(_v135.Spinner, {}) : (0, _v16.translate)({
            singular: "Load more…",
            dictionary: {
              es: {
                singular: "Cargar más…"
              },
              "de-DE": {
                singular: "Mehr Videos laden.."
              },
              "fr-FR": {
                singular: "Afficher plus…"
              },
              "ja-JP": {
                singular: "もっとロードする…"
              },
              "ko-KR": {
                singular: "더 보기"
              },
              "pt-BR": {
                singular: "Carregar mais…"
              },
              "zh-CN": {
                singular: "加载更多..."
              }
            }
          })
        })
      });
    };
  var _v144 = _v0.i(0),
    _v145 = _v0.i(0);
  let _v146 = _v5.default.h5.withConfig({
      displayName: "WebexFolderEmptyState__HelpLink",
      componentId: "sc-e56c9c55-0"
    })`
  margin-top: ${(0, _v134.rem)(20)};
`,
    _v147 = _v5.default.div.withConfig({
      displayName: "WebexFolderEmptyState__InfoText",
      componentId: "sc-e56c9c55-1"
    })`
  margin-left: 40px;
  text-align: left;
`,
    _v148 = _v5.default.li.withConfig({
      displayName: "WebexFolderEmptyState__Instruction",
      componentId: "sc-e56c9c55-2"
    })`
  display: list-item;
  list-style: disc inside;
  line-height: 200%;
`,
    _v149 = _v5.default.div.withConfig({
      displayName: "WebexFolderEmptyState__Container",
      componentId: "sc-e56c9c55-3"
    })`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: ${(0, _v134.rem)(60)} 0;
`,
    _v150 = _v5.default.img.withConfig({
      displayName: "WebexFolderEmptyState__Image",
      componentId: "sc-e56c9c55-4"
    })`
  width: 40%;
  max-width: ${(0, _v134.rem)(300)};
  margin-right: ${(0, _v134.rem)(40)};
`,
    _v151 = () => {
      let _v0 = "Webex";
      return (0, _v1.jsxs)(_v149, {
        children: [(0, _v1.jsx)(_v150, {
          src: "https://i.vimeocdn.com/custom_asset/c41b7fa74a5b0d8f3cb9956c46e40972",
          alt: "instruction image"
        }), (0, _v1.jsxs)(_v147, {
          children: [(0, _v1.jsx)("h2", {
            children: (0, _v16.translate)({
              singular: "How to record a {appName} meeting",
              replacements: {
                appName: _v0
              },
              dictionary: {
                es: {
                  singular: "Cómo grabar una reunión de {appName}"
                },
                "de-DE": {
                  singular: "So können {appName}-Meetings aufgezeichnet werden"
                },
                "fr-FR": {
                  singular: "Comment enregistrer une réunion {appName}"
                },
                "ja-JP": {
                  singular: "{appName}ミーティングを録画する方法"
                },
                "ko-KR": {
                  singular: "{appName} 회의를 녹화하는 방법"
                },
                "pt-BR": {
                  singular: "Como gravar uma reunião do {appName}"
                },
                "zh-CN": {
                  singular: "如何录制 {appName} 会议"
                }
              }
            })
          }), (0, _v1.jsxs)("ul", {
            children: [(0, _v1.jsx)(_v148, {
              children: (0, _v16.translate)({
                singular: "Confirm that your {appName} account supports cloud recordings.",
                replacements: {
                  appName: _v0
                },
                dictionary: {
                  es: {
                    singular: "Confirma que tu cuenta de {appName} admite grabaciones en la nube."
                  },
                  "de-DE": {
                    singular: "Bestätige, dass dein {appName}-Konto Cloud-Aufnahmen unterstützt."
                  },
                  "fr-FR": {
                    singular: "Confirmez que votre compte {appName} prend en charge les enregistrements dans le Cloud."
                  },
                  "ja-JP": {
                    singular: "{appName}アカウントがクラウド録画に対応していることを確認してください。"
                  },
                  "ko-KR": {
                    singular: "{appName} 계정이 클라우드 녹화를 지원하는지 확인합니다."
                  },
                  "pt-BR": {
                    singular: "Confirme se sua conta do {appName} aceita gravações na nuvem."
                  },
                  "zh-CN": {
                    singular: "确认您的 {appName} 帐户支持云录制。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v148, {
              children: (0, _v16.translate)({
                singular: 'Click "Record in cloud".',
                dictionary: {
                  es: {
                    singular: "Haz clic en Grabar en la nube."
                  },
                  "de-DE": {
                    singular: "Klicke auf „In der Cloud aufnehmen“."
                  },
                  "fr-FR": {
                    singular: "Cliquez sur « Enregistrer dans le Cloud »"
                  },
                  "ja-JP": {
                    singular: "「クラウド録画」をクリックします"
                  },
                  "ko-KR": {
                    singular: "'클라우드에 녹화'를 클릭합니다."
                  },
                  "pt-BR": {
                    singular: 'Clique em "Gravar na nuvem".'
                  },
                  "zh-CN": {
                    singular: "点击“云端录制”。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v148, {
              children: (0, _v16.translate)({
                singular: "Your recordings will automatically save to this folder",
                dictionary: {
                  es: {
                    singular: "Sus grabaciones se guardarán automáticamente en esta carpeta."
                  },
                  "de-DE": {
                    singular: "Deine Aufnahmen werden automatisch in diesem Ordner gespeichert"
                  },
                  "fr-FR": {
                    singular: "Vos enregistrements seront automatiquement sauvegardés dans ce dossier"
                  },
                  "ja-JP": {
                    singular: "録画は自動的にこのフォルダーに保存されます"
                  },
                  "ko-KR": {
                    singular: "녹화본이 이 폴더에 자동으로 저장됩니다."
                  },
                  "pt-BR": {
                    singular: "Suas gravações serão salvas nesta pasta automaticamente"
                  },
                  "zh-CN": {
                    singular: "您的录像将自动保存到此文件夹"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v146, {
            children: (0, _v1.jsx)("a", {
              href: "https://www.vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12427373941649-Record-and-upload-your-Webex-meetings-to-Vimeo",
              children: (0, _v16.translate)({
                singular: "Learn more in the Help Center",
                dictionary: {
                  es: {
                    singular: "Obtén más información en el Centro de ayuda"
                  },
                  "de-DE": {
                    singular: "Erfahren Sie mehr im Help Center"
                  },
                  "fr-FR": {
                    singular: "En savoir plus dans le Centre d'aide"
                  },
                  "ja-JP": {
                    singular: "ヘルプセンターで詳細をご確認ください"
                  },
                  "ko-KR": {
                    singular: "도움말 센터에서 자세히 알아보세요"
                  },
                  "pt-BR": {
                    singular: "Saiba mais na Central de Ajuda"
                  },
                  "zh-CN": {
                    singular: "在帮助中心了解更多"
                  }
                }
              })
            })
          })]
        })]
      });
    },
    _v152 = _v5.default.h5.withConfig({
      displayName: "ZoomFolderEmptyState__HelpLink",
      componentId: "sc-127e1348-0"
    })`
  margin-top: ${(0, _v134.rem)(20)};
`,
    _v153 = _v5.default.div.withConfig({
      displayName: "ZoomFolderEmptyState__InfoText",
      componentId: "sc-127e1348-1"
    })`
  margin-left: 40px;
  text-align: left;
`,
    _v154 = _v5.default.li.withConfig({
      displayName: "ZoomFolderEmptyState__Instruction",
      componentId: "sc-127e1348-2"
    })`
  display: list-item;
  list-style: disc inside;
  line-height: 200%;
`,
    _v155 = _v5.default.div.withConfig({
      displayName: "ZoomFolderEmptyState__Container",
      componentId: "sc-127e1348-3"
    })`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: ${(0, _v134.rem)(60)} 0;
`,
    _v156 = _v5.default.img.withConfig({
      displayName: "ZoomFolderEmptyState__Image",
      componentId: "sc-127e1348-4"
    })`
  width: 40%;
  max-width: ${(0, _v134.rem)(300)};
  margin-right: ${(0, _v134.rem)(40)};
`,
    _v157 = () => (0, _v1.jsxs)(_v155, {
      children: [(0, _v1.jsx)(_v156, {
        src: "https://i.vimeocdn.com/custom_asset/c575706fd67f11e4cc905fb449195a6b",
        alt: "instruction image"
      }), (0, _v1.jsxs)(_v153, {
        children: [(0, _v1.jsx)("h2", {
          children: (0, _v16.translate)({
            singular: "How to record a Zoom meeting",
            dictionary: {
              es: {
                singular: "Cómo grabar una reunión de Zoom"
              },
              "de-DE": {
                singular: "So können Zoom-Meetings aufgezeichnet werden"
              },
              "fr-FR": {
                singular: "Comment enregistrer une réunion Zoom ?"
              },
              "ja-JP": {
                singular: "Zoom会議を記録する方法"
              },
              "ko-KR": {
                singular: "Zoom 회의를 녹화하는 방법"
              },
              "pt-BR": {
                singular: "Como gravar uma reunião do Zoom"
              },
              "zh-CN": {
                singular: "如何录制 Zoom 会议"
              }
            }
          })
        }), (0, _v1.jsxs)("ul", {
          children: [(0, _v1.jsx)(_v154, {
            children: (0, _v16.translate)({
              singular: "Enable cloud recording in Zoom",
              dictionary: {
                es: {
                  singular: "Habilitar la grabación en la nube en Zoom"
                },
                "de-DE": {
                  singular: "Cloud-Aufnahmen für Zoom aktivieren"
                },
                "fr-FR": {
                  singular: "Activer l'enregistrement cloud dans Zoom"
                },
                "ja-JP": {
                  singular: "Zoomでクラウド記録を有効にする"
                },
                "ko-KR": {
                  singular: "Zoom에서 클라우드 기록을 활성화합니다."
                },
                "pt-BR": {
                  singular: "Habilitar a gravação na nuvem no Zoom"
                },
                "zh-CN": {
                  singular: "在 Zoom 中启用云录制"
                }
              }
            })
          }), (0, _v1.jsx)(_v154, {
            children: (0, _v16.translate)({
              singular: 'Click "Record to the cloud"',
              dictionary: {
                es: {
                  singular: "Haz clic en Grabar en la nube."
                },
                "de-DE": {
                  singular: "Klicke auf „Über die Cloud aufnehmen“."
                },
                "fr-FR": {
                  singular: "Cliquez sur « Enregistrer dans le Cloud »"
                },
                "ja-JP": {
                  singular: "「クラウドにレコーディング」をクリックします"
                },
                "ko-KR": {
                  singular: "'클라우드에 기록'을 클릭합니다."
                },
                "pt-BR": {
                  singular: 'Clique em "Gravar na nuvem"'
                },
                "zh-CN": {
                  singular: "点击“录制到云端”"
                }
              }
            })
          }), (0, _v1.jsx)(_v154, {
            children: (0, _v16.translate)({
              singular: "Your recordings will automatically save to this folder",
              dictionary: {
                es: {
                  singular: "Sus grabaciones se guardarán automáticamente en esta carpeta."
                },
                "de-DE": {
                  singular: "Deine Aufnahmen werden automatisch in diesem Ordner gespeichert"
                },
                "fr-FR": {
                  singular: "Vos enregistrements seront automatiquement sauvegardés dans ce dossier"
                },
                "ja-JP": {
                  singular: "録画は自動的にこのフォルダーに保存されます"
                },
                "ko-KR": {
                  singular: "녹화본이 이 폴더에 자동으로 저장됩니다."
                },
                "pt-BR": {
                  singular: "Suas gravações serão salvas nesta pasta automaticamente"
                },
                "zh-CN": {
                  singular: "您的录像将自动保存到此文件夹"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v152, {
          children: (0, _v1.jsx)("a", {
            href: "https://www.vimeo.com/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12427429159185-How-to-record-and-upload-your-Zoom-meetings-to-Vimeo",
            children: (0, _v16.translate)({
              singular: "Learn more in the Help Center",
              dictionary: {
                es: {
                  singular: "Obtén más información en el Centro de ayuda"
                },
                "de-DE": {
                  singular: "Erfahren Sie mehr im Help Center"
                },
                "fr-FR": {
                  singular: "En savoir plus dans le Centre d'aide"
                },
                "ja-JP": {
                  singular: "ヘルプセンターで詳細をご確認ください"
                },
                "ko-KR": {
                  singular: "도움말 센터에서 자세히 알아보세요"
                },
                "pt-BR": {
                  singular: "Saiba mais na Central de Ajuda"
                },
                "zh-CN": {
                  singular: "在帮助中心了解更多"
                }
              }
            })
          })
        })]
      })]
    });
  var _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0);
  let _v168 = () => {
      let {
          hasTeamLibraryContent: _v0,
          isLoading: _v1
        } = (() => {
          let _v0 = (0, _v166.useViewer)(),
            {
              data: _v1,
              isLoading: _v2,
              error: _v3
            } = (0, _v167.useGetUserFoldersRoot)(() => {
              let _v0 = _v0?.teamUser?.ownerId ?? _v0?.user?.id;
              return _v0 ? {
                where: {
                  userId: _v0
                },
                select: ["folder.name", "video.name"],
                query: {
                  perPage: 1,
                  excludePersonalTeamFolder: !0
                },
                headers: {
                  Accept: "application/vnd.vimeo.*+json;version=3.4.1"
                }
              } : null;
            });
          return {
            hasTeamLibraryContent: !!_v1?.data?.length,
            isLoading: _v2,
            error: _v3
          };
        })(),
        {
          hasSharedWithMeContent: _v2,
          isLoading: _v3
        } = (() => {
          let _v0 = (0, _v166.useViewer)(),
            {
              data: _v1,
              isLoading: _v2,
              error: _v3
            } = (0, _v165.useGetUserTeamsSharedItems)(() => _v0?.user?.id ? {
              select: ["type"],
              where: {
                userId: _v0.user.id
              },
              query: {
                perPage: 1
              },
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.1"
              }
            } : null);
          return {
            hasSharedWithMeContent: !!_v1?.data?.length,
            isLoading: _v2,
            error: _v3
          };
        })();
      return _v1 || _v3 ? (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v135.Spinner, {
          size: "xl"
        })
      }) : (0, _v1.jsx)(_v169, {
        title: (0, _v16.translate)({
          singular: "This space is empty",
          dictionary: {
            es: {
              singular: "Este espacio está vacío"
            },
            "de-DE": {
              singular: "Dieser Bereich ist leer"
            },
            "fr-FR": {
              singular: "Cet espace est vide"
            },
            "ja-JP": {
              singular: "このスペースは空です"
            },
            "ko-KR": {
              singular: "이 공간은 비어 있습니다."
            },
            "pt-BR": {
              singular: "Este espaço está vazio"
            },
            "zh-CN": {
              singular: "这个空间是空的"
            }
          }
        }),
        description: _v0 && _v2 ? (0, _v16.translate)({
          singular: "To explore content, try {TEAM_LIBRARY_LINK}Team library{/TEAM_LIBRARY_LINK} or {SHARED_WITH_ME_LINK}Shared with me{/SHARED_WITH_ME_LINK}. To add your own videos, ask an admin to upgrade your role.",
          replacements: {
            SHARED_WITH_ME_LINK: _v0 => (0, _v1.jsx)("u", {
              children: (0, _v1.jsx)(_v70.default, {
                href: "/shared-with-me",
                children: _v0
              })
            }, "shared-with-me-link"),
            TEAM_LIBRARY_LINK: _v0 => (0, _v1.jsx)("u", {
              children: (0, _v1.jsx)(_v70.default, {
                href: "/library",
                children: _v0
              })
            }, "team-library-link")
          },
          dictionary: {
            es: {
              singular: "Para explorar el contenido, pruebe {TEAM_LIBRARY_LINK}Biblioteca del equipo{/TEAM_LIBRARY_LINK} o {SHARED_WITH_ME_LINK}Compartido conmigo{/SHARED_WITH_ME_LINK}. Para agregar sus propios videos, pídale a un administrador que actualice su rol."
            },
            "de-DE": {
              singular: "Um Inhalte zu entdecken, versuchen Sie es mit {TEAM_LIBRARY_LINK}Teambibliothek{/TEAM_LIBRARY_LINK} oder {SHARED_WITH_ME_LINK}Mit mir geteilt{/SHARED_WITH_ME_LINK}. Um eigene Videos hinzuzufügen, bitten Sie einen Admin um ein Upgrade für Ihre Rolle."
            },
            "fr-FR": {
              singular: "Pour explorer le contenu, accédez à la {TEAM_LIBRARY_LINK}bibliothèque d'équipe{/TEAM_LIBRARY_LINK} ou à la section {SHARED_WITH_ME_LINK}Partagé avec moi{/SHARED_WITH_ME_LINK}. Pour ajouter vos propres vidéos, demandez à un administrateur de mettre votre rôle à niveau."
            },
            "ja-JP": {
              singular: "コンテンツを探索するには、{TEAM_LIBRARY_LINK}チームライブラリ{/TEAM_LIBRARY_LINK}または{SHARED_WITH_ME_LINK}共有作品{/SHARED_WITH_ME_LINK}をお試しください。自分の動画を追加するには、管理者に役割のアップグレードを依頼してください。"
            },
            "ko-KR": {
              singular: "콘텐츠를 탐색하려면 {TEAM_LIBRARY_LINK}팀 라이브러리{/TEAM_LIBRARY_LINK} 또는 {SHARED_WITH_ME_LINK}나와 공유된 파일{/SHARED_WITH_ME_LINK}을 사용해보세요. 내 동영상을 추가하려면 관리자에게 역할 업그레이드를 요청하세요."
            },
            "pt-BR": {
              singular: "Para explorar o conteúdo, tente {TEAM_LIBRARY_LINK}Biblioteca da equipe{/TEAM_LIBRARY_LINK} ou {SHARED_WITH_ME_LINK}Compartilhado comigo{/SHARED_WITH_ME_LINK}. Para adicionar seus vídeos, peça a um administrador para atualizar sua função."
            },
            "zh-CN": {
              singular: "要浏览内容，请尝试{TEAM_LIBRARY_LINK}团队视频库{/TEAM_LIBRARY_LINK}或{SHARED_WITH_ME_LINK}与我共享{/SHARED_WITH_ME_LINK}。要添加自己的视频，请让管理员升级您的角色。"
            }
          }
        }) : _v0 ? (0, _v16.translate)({
          singular: "To explore content, go to {TEAM_LIBRARY_LINK}Team library{/TEAM_LIBRARY_LINK}. To add your own videos, ask an admin to upgrade your role.",
          replacements: {
            TEAM_LIBRARY_LINK: _v0 => (0, _v1.jsx)("u", {
              children: (0, _v1.jsx)(_v70.default, {
                href: "/library",
                children: _v0
              })
            })
          },
          dictionary: {
            es: {
              singular: "Para explorar el contenido, vaya a la {TEAM_LIBRARY_LINK}biblioteca del equipo{/TEAM_LIBRARY_LINK}. Para agregar sus propios videos, pídale a un administrador que actualice su rol."
            },
            "de-DE": {
              singular: "Um Inhalte zu erkunden, wechseln Sie zu {TEAM_LIBRARY_LINK}Team-Bibliothek{/TEAM_LIBRARY_LINK}. Um eigene Videos hinzuzufügen, bitten Sie einen Admin um ein Upgrade für Ihre Rolle."
            },
            "fr-FR": {
              singular: "Pour explorer le contenu, accédez à {TEAM_LIBRARY_LINK}bibliothèque de l'équipe{/TEAM_LIBRARY_LINK}. Pour ajouter vos propres vidéos, demandez à un administrateur de mettre votre rôle à niveau."
            },
            "ja-JP": {
              singular: "コンテンツを探索するには、{TEAM_LIBRARY_LINK}チームライブラリ{/TEAM_LIBRARY_LINK}にアクセスしてください。自分の動画を追加するには、管理者に役割のアップグレードを依頼してください。"
            },
            "ko-KR": {
              singular: "콘텐츠를 탐색하려면 {TEAM_LIBRARY_LINK}팀 라이브러리{/TEAM_LIBRARY_LINK}로 이동하세요. 내 동영상을 추가하려면 관리자에게 역할 업그레이드를 요청하세요."
            },
            "pt-BR": {
              singular: "Para explorar o conteúdo, acesse {TEAM_LIBRARY_LINK}Biblioteca da equipe{/TEAM_LIBRARY_LINK}. Para adicionar seus vídeos, peça a um administrador para atualizar sua função."
            },
            "zh-CN": {
              singular: "要浏览内容，请转至{TEAM_LIBRARY_LINK}团队视频库{/TEAM_LIBRARY_LINK}。要添加自己的视频，请让管理员升级您的角色。"
            }
          }
        }) : _v2 ? (0, _v16.translate)({
          singular: "To explore content, go to {SHARED_WITH_ME_LINK}Shared with me{/SHARED_WITH_ME_LINK}. To add your own videos, ask an admin to upgrade your role.",
          replacements: {
            SHARED_WITH_ME_LINK: _v0 => (0, _v1.jsx)("u", {
              children: (0, _v1.jsx)(_v70.default, {
                href: "/shared-with-me",
                children: _v0
              })
            })
          },
          dictionary: {
            es: {
              singular: "Para explorar el contenido, vaya a {SHARED_WITH_ME_LINK}Compartido conmigo{/SHARED_WITH_ME_LINK}. Para agregar sus propios videos, pídale a un administrador que actualice su rol."
            },
            "de-DE": {
              singular: "Um den Inhalt zu entdecken, gehen Sie zu {SHARED_WITH_ME_LINK}Mit mir geteilt{/SHARED_WITH_ME_LINK}. Um eigene Videos hinzuzufügen, bitten Sie einen Admin um ein Upgrade für Ihre Rolle."
            },
            "fr-FR": {
              singular: "Pour explorer le contenu, accédez à {SHARED_WITH_ME_LINK}Partagé avec moi{/SHARED_WITH_ME_LINK}. Pour ajouter vos propres vidéos, demandez à un administrateur de mettre votre rôle à niveau."
            },
            "ja-JP": {
              singular: "コンテンツを探索するには、{SHARED_WITH_ME_LINK}共有作品{/SHARED_WITH_ME_LINK}にアクセスしてください。自分の動画を追加するには、管理者に役割のアップグレードを依頼してください。"
            },
            "ko-KR": {
              singular: "콘텐츠를 탐색하려면 {SHARED_WITH_ME_LINK}나에게 공유됨{/SHARED_WITH_ME_LINK}으로 이동하세요. 내 동영상을 추가하려면 관리자에게 역할 업그레이드를 요청하세요."
            },
            "pt-BR": {
              singular: "Para explorar o conteúdo, acesse {SHARED_WITH_ME_LINK}Compartilhado comigo{/SHARED_WITH_ME_LINK}. Para adicionar seus vídeos, peça a um administrador para atualizar sua função."
            },
            "zh-CN": {
              singular: "如需浏览相关内容，请转至“{SHARED_WITH_ME_LINK}与我分享{/SHARED_WITH_ME_LINK}”栏。若要添加自己的视频，请让管理员升级您的角色。"
            }
          }
        }) : (0, _v16.translate)({
          singular: "To add your own videos, ask an admin to upgrade your role",
          dictionary: {
            es: {
              singular: "Para agregar sus propios videos, pídale a un administrador que actualice su rol."
            },
            "de-DE": {
              singular: "Um eigene Videos hinzuzufügen, bitten Sie einen Admin um ein Upgrade für Ihre Rolle."
            },
            "fr-FR": {
              singular: "Pour ajouter vos propres vidéos, demandez à un administrateur de mettre votre rôle à niveau."
            },
            "ja-JP": {
              singular: "自分の動画を追加するには、管理者に役割のアップグレードを依頼してください"
            },
            "ko-KR": {
              singular: "내 동영상을 추가하려면 관리자에게 역할 업그레이드를 요청하세요."
            },
            "pt-BR": {
              singular: "Para adicionar seus vídeos, peça a um administrador para atualizar sua função"
            },
            "zh-CN": {
              singular: "若要添加自己的视频，请让管理员升级您的角色"
            }
          }
        })
      });
    },
    _v169 = ({
      title: _v0,
      description: _v1,
      icon: _v2
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v2 || (0, _v1.jsx)(_v164.MyLibrary, {
        w: (0, _v163.rem)(64),
        h: (0, _v163.rem)(64)
      }), (0, _v1.jsx)(_v137.Text, {
        variant: {
          base: "heading-md",
          md: "heading-lg"
        },
        margin: {
          base: "1rem 0 0 0",
          md: "1rem 0"
        },
        children: _v0
      }), (0, _v1.jsx)(_v137.Text, {
        display: {
          base: "none",
          md: "block"
        },
        variant: "body-lg",
        color: "text-secondary",
        children: _v1
      })]
    }),
    _v170 = ({
      hasContentSpaceEnabled: _v0,
      canInviteToFolder: _v1,
      folder: _v2,
      isOwner: _v3
    }) => {
      let {
          isPrivateToUser: _v4,
          shouldShowTeamLibraryNotification: _v5
        } = _v2,
        _v6 = (0, _v18.useUniversalHostingEnabled)();
      if (_v0 && _v4) {
        let {
            title: _v0,
            icon: _v1
          } = _v2.metadata.connections.parentFolder ? {
            title: (0, _v16.translate)({
              singular: "It's empty in here",
              dictionary: {
                es: {
                  singular: "No hay nada aquí"
                },
                "de-DE": {
                  singular: "Hier ist nichts zu finden."
                },
                "fr-FR": {
                  singular: "Il n'y a rien par ici"
                },
                "ja-JP": {
                  singular: "ここには何もありません"
                },
                "ko-KR": {
                  singular: "비어 있어요"
                },
                "pt-BR": {
                  singular: "Não há nada aqui"
                },
                "zh-CN": {
                  singular: "这里空荡荡的"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v162.FolderOpen, {
              w: {
                base: "3rem",
                md: "4rem"
              },
              h: {
                base: "3rem",
                md: "4rem"
              }
            })
          } : {
            title: _v6 ? (0, _v16.translate)({
              singular: "Add your own videos and files",
              dictionary: {
                es: {
                  singular: "Añade tus propios vídeos y archivos"
                },
                "de-DE": {
                  singular: "Eigene Videos und Dateien hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajoutez vos propres vidéos et fichiers"
                },
                "ja-JP": {
                  singular: "ご自身の動画やファイルを追加"
                },
                "ko-KR": {
                  singular: "자신의 동영상 및 파일을 추가하세요"
                },
                "pt-BR": {
                  singular: "Adicione seus próprios vídeos e arquivos"
                },
                "zh-CN": {
                  singular: "添加您自己的视频和文件"
                }
              }
            }) : (0, _v16.translate)({
              singular: "Add your own videos",
              dictionary: {
                es: {
                  singular: "Agregue sus propios videos"
                },
                "de-DE": {
                  singular: "Ihre eigenen Videos hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajoutez vos propres vidéos"
                },
                "ja-JP": {
                  singular: "自分の動画を追加"
                },
                "ko-KR": {
                  singular: "내 동영상 추가하기"
                },
                "pt-BR": {
                  singular: "Adicione seus vídeos"
                },
                "zh-CN": {
                  singular: "添加您自己的视频"
                }
              }
            })
          },
          _v2 = _v5 ? (0, _v16.translate)({
            singular: "Looking for videos you already added? Try {LINK}Team library{/LINK}",
            replacements: {
              LINK: _v0 => (0, _v1.jsx)(_v138.Link, {
                href: "/library",
                variant: "inline-secondary",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "¿Está buscando los videos que ya ha agregado? Pruebe la {LINK}Biblioteca del equipo{/LINK}."
              },
              "de-DE": {
                singular: "Suchen Sie nach Videos, die Sie bereits hinzugefügt haben? Werfen Sie einen Blick in die {LINK}Teambibliothek{/LINK}"
              },
              "fr-FR": {
                singular: "Vous cherchez des vidéos que vous avez déjà ajoutées ? Essayez la {LINK}bibliothèque d'équipe{/LINK}"
              },
              "ja-JP": {
                singular: "追加済みの動画をお探しですか？{LINK}チームライブラリ{/LINK}をお試しください"
              },
              "ko-KR": {
                singular: "이미 추가한 동영상을 찾고 계신가요? {LINK}팀 라이브러리{/LINK}를 사용해 보세요."
              },
              "pt-BR": {
                singular: "Procurando vídeos que você já adicionou? Confira a {LINK}Biblioteca da equipe{/LINK}"
              },
              "zh-CN": {
                singular: "在寻找您已添加的视频吗？不妨试用{LINK}团队视频库{/LINK}"
              }
            }
          }) : _v6 ? (0, _v16.translate)({
            singular: "Drop videos and files to upload",
            dictionary: {
              es: {
                singular: "Suelta vídeos y archivos para subirlos"
              },
              "de-DE": {
                singular: "Ziehen Sie Videos und Dateien hierher, um sie hochzuladen"
              },
              "fr-FR": {
                singular: "Déposez des vidéos et des fichiers pour les mettre en ligne"
              },
              "ja-JP": {
                singular: "アップロードする動画やファイルをここにドロップ"
              },
              "ko-KR": {
                singular: "업로드할 동영상 및 파일을 여기에 끌어다 놓으세요"
              },
              "pt-BR": {
                singular: "Arraste vídeos e arquivos para enviar"
              },
              "zh-CN": {
                singular: "将视频和文件拖放以上传"
              }
            }
          }) : (0, _v16.translate)({
            singular: "Drop videos to upload",
            dictionary: {
              es: {
                singular: "Suelte los videos para subirlos"
              },
              "de-DE": {
                singular: "Videos per Drag-and-Drop hochladen"
              },
              "fr-FR": {
                singular: "Déposez des vidéos pour les mettre en ligne"
              },
              "ja-JP": {
                singular: "アップロードする動画をドロップ"
              },
              "ko-KR": {
                singular: "업로드할 동영상을 여기에 놓으세요"
              },
              "pt-BR": {
                singular: "Solte vídeos para carregar"
              },
              "zh-CN": {
                singular: "拖放视频以上传"
              }
            }
          });
        return (0, _v1.jsx)(_v7.Flex, {
          flexDirection: "column",
          alignItems: "center",
          children: (0, _v1.jsx)(_v169, {
            title: _v0,
            description: _v2,
            icon: _v1
          })
        });
      }
      return _v1 || _v3 ? (0, _v1.jsxs)(_v7.Flex, {
        flexDirection: "column",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v162.FolderOpen, {
          width: {
            base: "3rem",
            md: "4rem"
          },
          height: {
            base: "3rem",
            md: "4rem"
          }
        }), (0, _v1.jsx)(_v160.Header, {
          size: {
            base: "md",
            md: "lg"
          },
          margin: {
            base: "1rem 0 0 0",
            md: "1rem 0"
          },
          children: (0, _v16.translate)({
            singular: "It's empty in here",
            dictionary: {
              es: {
                singular: "No hay nada aquí"
              },
              "de-DE": {
                singular: "Hier ist nichts zu finden."
              },
              "fr-FR": {
                singular: "Il n'y a rien par ici"
              },
              "ja-JP": {
                singular: "ここには何もありません"
              },
              "ko-KR": {
                singular: "비어 있어요"
              },
              "pt-BR": {
                singular: "Não há nada aqui"
              },
              "zh-CN": {
                singular: "这里空荡荡的"
              }
            }
          })
        }), (0, _v1.jsx)(_v161.Paragraph, {
          display: {
            base: "none",
            md: "block"
          },
          size: "lg",
          color: "text-secondary",
          children: (0, _v16.translate)({
            singular: "Drop videos to upload. Or, invite team members to collaborate.",
            dictionary: {
              es: {
                singular: "Suelte los videos para subirlos. O invite a los miembros del equipo a colaborar."
              },
              "de-DE": {
                singular: "Laden Sie Videos per Drag-and-Drop hoch oder Teammitglieder zur Zusammenarbeit ein."
              },
              "fr-FR": {
                singular: "Déposez des vidéos pour les mettre en ligne. Vous pouvez également inviter de nouveaux collaborateurs."
              },
              "ja-JP": {
                singular: "動画をドロップしてアップロードします。または、チームメンバーを招待して共同作業を始めましょう。"
              },
              "ko-KR": {
                singular: "업로드할 동영상을 여기에 놓으세요. 팀원을 초대하여 공동 작업을 시작할 수도 있습니다."
              },
              "pt-BR": {
                singular: "Carregue vídeos ou convide integrantes da equipe para colaborar."
              },
              "zh-CN": {
                singular: "拖放视频以上传。或者，邀请团队成员进行协作。"
              }
            }
          })
        })]
      }) : null;
    };
  var _v171 = _v0.i(0),
    _v172 = _v0.i(0);
  let _v173 = ({
      folder: _v0,
      owner: _v1
    }) => {
      let _v2 = _v0?.metadata?.connections?.personalTeamFolderOwner?.uri ?? null,
        {
          data: _v3,
          isLoading: _v4
        } = (0, _v172.useGetUserTeamRole)(() => _v1?.id ? {
          select: ["role"],
          where: {
            userId: _v1.id
          },
          query: {
            inspectedUserUri: _v2
          }
        } : null);
      return _v4 ? (0, _v1.jsx)(_v135.Spinner, {
        size: "xl"
      }) : _v3?.role === "Viewer" ? (0, _v1.jsx)(_v171.VStack, {
        textAlign: "center",
        children: (0, _v1.jsx)(_v169, {
          title: (0, _v16.translate)({
            singular: "This space is empty",
            dictionary: {
              es: {
                singular: "Este espacio está vacío"
              },
              "de-DE": {
                singular: "Dieser Bereich ist leer"
              },
              "fr-FR": {
                singular: "Cet espace est vide"
              },
              "ja-JP": {
                singular: "このスペースは空です"
              },
              "ko-KR": {
                singular: "이 공간은 비어 있습니다."
              },
              "pt-BR": {
                singular: "Este espaço está vazio"
              },
              "zh-CN": {
                singular: "这个空间是空的"
              }
            }
          }),
          description: (0, _v16.translate)({
            singular: "To let this team member add videos, upgrade their role to Contributor or higher",
            dictionary: {
              es: {
                singular: "Para permitir que este miembro del equipo agregue videos, actualice su rol a colaborador o superior"
              },
              "de-DE": {
                singular: "Um diesem Teammitglied das Hinzufügen von Videos zu ermöglichen, aktualisieren Sie seine Rolle auf „Beitragender“ oder höher."
              },
              "fr-FR": {
                singular: "Pour permettre à ce collaborateur d'ajouter des vidéos, faites passer son rôle à Contributeur ou à un niveau supérieur"
              },
              "ja-JP": {
                singular: "このチームメンバーに動画の追加を許可するには、メンバーの役割を投稿者以上にアップグレードしてください"
              },
              "ko-KR": {
                singular: "이 팀원이 동영상을 추가할 수 있도록 하려면 해당 팀원의 역할을 기여자 이상으로 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Para permitir que este integrante da equipe adicione vídeos, faça o upgrade da função dele para Colaborador ou superior"
              },
              "zh-CN": {
                singular: "要允许此团队成员添加视频，请将其角色升级为贡献者或更高级别"
              }
            }
          })
        })
      }) : (0, _v1.jsx)(_v171.VStack, {
        textAlign: "center",
        children: (0, _v1.jsx)(_v169, {
          title: (0, _v16.translate)({
            singular: "This space is empty",
            dictionary: {
              es: {
                singular: "Este espacio está vacío"
              },
              "de-DE": {
                singular: "Dieser Bereich ist leer"
              },
              "fr-FR": {
                singular: "Cet espace est vide"
              },
              "ja-JP": {
                singular: "このスペースは空です"
              },
              "ko-KR": {
                singular: "이 공간은 비어 있습니다."
              },
              "pt-BR": {
                singular: "Este espaço está vazio"
              },
              "zh-CN": {
                singular: "这个空间是空的"
              }
            }
          }),
          description: (0, _v16.translate)({
            singular: "This team member hasn't added any videos yet",
            dictionary: {
              es: {
                singular: "Este miembro del equipo aún no ha agregado ningún video"
              },
              "de-DE": {
                singular: "Dieses Teammitglied hat noch keine Videos hinzugefügt"
              },
              "fr-FR": {
                singular: "Ce collaborateur n'a pas encore ajouté de vidéos"
              },
              "ja-JP": {
                singular: "このチームメンバーはまだ動画を追加していません"
              },
              "ko-KR": {
                singular: "이 팀원은 아직 동영상을 추가하지 않았습니다."
              },
              "pt-BR": {
                singular: "Este integrante da equipe ainda não adicionou nenhum vídeo"
              },
              "zh-CN": {
                singular: "此团队成员尚未添加任何视频"
              }
            }
          })
        })
      });
    },
    _v174 = (0, _v4.lazy)(() => _v0.A(0).then(({
      TeamSwitcherDropzone: _v0
    }) => ({
      default: _v0
    }))),
    _v175 = ({
      owner: _v0,
      folder: _v1,
      set360SourceType: _v2,
      threeSixtyType: _v3,
      defaultFolderId: _v4,
      folderShareUri: _v5,
      hasContentSpaceEnabled: _v6,
      canInviteToFolder: _v7,
      canAllowDownloads: _v8,
      isOwner: _v9
    }) => {
      let {
          isPersonalTeamFolderAdminView: _v10
        } = (0, _v4.useContext)(_v33.VideoLibraryLayoutContext),
        [_v11, _v12] = (0, _v4.useState)(""),
        {
          data: _v13
        } = (0, _v144.useGetUser)(() => _v0?.id ? {
          select: ["preferences.videos"],
          where: {
            userId: _v0.id
          },
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1"
          }
        } : null);
      return _v6 && _v10 ? (0, _v1.jsx)(_v173, {
        folder: _v1,
        owner: _v0
      }) : (0, _v1.jsx)(_v4.Suspense, {
        fallback: (0, _v1.jsx)(_v135.Spinner, {
          size: "xl"
        }),
        children: (0, _v1.jsxs)(_v88.Box, {
          maxWidth: "100%",
          width: "100%",
          children: [_v11 && (0, _v1.jsx)(_v7.Flex, {
            justifyContent: "center",
            children: (0, _v1.jsx)(_v158.UploadErrorMessage, {
              error: _v11,
              onClose: () => _v12("")
            })
          }), (0, _v1.jsx)(_v174, {
            uploadClipProperties: {
              content_rating: _v13?.preferences?.videos?.rating,
              password: _v13?.preferences?.videos?.password,
              privacy: _v13?.preferences?.videos?.privacy ? {
                ..._v13.preferences.videos.privacy,
                download: _v8 ? _v13.preferences.videos.privacy.download : void 0
              } : {},
              spatial: {}
            },
            uploadType: "UPLOAD",
            owner: _v0,
            selectedFolderId: _v4,
            selectedFolder: _v1,
            folderShareUri: _v5,
            onUploadFailure: _v0 => {
              _v12(_v0);
            },
            mvvEmptyStateContent: (0, _v1.jsx)(_v170, {
              canInviteToFolder: _v7,
              folder: _v1,
              hasContentSpaceEnabled: _v6,
              isOwner: _v9
            })
          }), (0, _v1.jsx)(_v159.EmptyStateDropzoneFooter, {
            set360SourceType: _v2,
            threeSixtyType: _v3
          })]
        })
      });
    },
    _v176 = ({
      isContentSpacePrivateToMeFolder: _v0
    }) => _v0 ? (0, _v1.jsx)(_v7.Flex, {
      flexDirection: "column",
      alignItems: "center",
      margin: "auto",
      px: {
        md: (0, _v163.rem)(100),
        xl: (0, _v163.rem)(300),
        "2xl": (0, _v163.rem)(400)
      },
      textAlign: "center",
      maxWidth: (0, _v163.rem)(0),
      children: (0, _v1.jsx)(_v168, {})
    }) : (0, _v1.jsxs)(_v7.Flex, {
      flexDirection: "column",
      alignItems: "center",
      margin: "auto",
      children: [(0, _v1.jsx)(_v162.FolderOpen, {
        w: (0, _v163.rem)(64),
        h: (0, _v163.rem)(64)
      }), (0, _v1.jsx)(_v137.Text, {
        variant: "heading-lg",
        margin: `${(0, _v163.rem)(16)} 0`,
        children: (0, _v16.translate)({
          singular: "This folder is empty",
          dictionary: {
            es: {
              singular: "Esta carpeta está vacía"
            },
            "de-DE": {
              singular: "Dieser Ordner ist leer"
            },
            "fr-FR": {
              singular: "Ce dossier est vide"
            },
            "ja-JP": {
              singular: "このフォルダは空です"
            },
            "ko-KR": {
              singular: "이 폴더는 비어 있습니다."
            },
            "pt-BR": {
              singular: "Esta pasta está vazia"
            },
            "zh-CN": {
              singular: "此文件夹为空"
            }
          }
        })
      }), (0, _v1.jsx)(_v137.Text, {
        variant: "body-lg",
        color: "text-secondary",
        children: (0, _v16.translate)({
          singular: "Nothing has been added to this folder yet",
          dictionary: {
            es: {
              singular: "Aún no se ha agregado nada a esta carpeta"
            },
            "de-DE": {
              singular: "Diesem Ordner wurde noch nichts hinzugefügt."
            },
            "fr-FR": {
              singular: "Aucun élément n'a encore été ajouté à ce dossier"
            },
            "ja-JP": {
              singular: "このフォルダーにはまだ何も追加されていません"
            },
            "ko-KR": {
              singular: "아직 이 폴더에 추가된 항목이 없습니다."
            },
            "pt-BR": {
              singular: "Nada foi adicionado a esta pasta ainda."
            },
            "zh-CN": {
              singular: "尚未向此文件夹添加任何内容"
            }
          }
        })
      })]
    }),
    _v177 = ({
      canEditFolder: _v0,
      defaultFolderId: _v1,
      owner: _v2,
      set360SourceType: _v3,
      threeSixtyType: _v4,
      canInviteToFolder: _v5 = !1,
      folderShareUri: _v6 = "",
      folder: _v7,
      viewer: _v8,
      areFiltersApplied: _v9 = !1
    }) => {
      let {
          data: _v10,
          isLoading: _v11
        } = (0, _v144.useGetUser)(() => _v8?.user?.id ? {
          select: ["metadata.connections.webexUploadFolder", "metadata.connections.zoomUploadFolder"],
          where: {
            userId: _v8.user.id
          }
        } : null),
        {
          capabilities: {
            canAllowDownloads: _v12
          }
        } = (0, _v10.useCapability)(["canAllowDownloads"], _v2?.id),
        {
          contentSpaceEnabled: _v13
        } = (0, _v80.useContentSpaceEnabled)(_v2?.id),
        {
          zoomUploadFolder: _v14,
          webexUploadFolder: _v15
        } = _v10?.metadata?.connections || {};
      return _v11 ? (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 30px",
        w: "100%",
        h: "100%",
        children: (0, _v1.jsx)(_v135.Spinner, {
          size: "xl"
        })
      }) : _v14?.uri === _v6 ? (0, _v1.jsx)(_v157, {}) : _v15?.uri === _v6 ? (0, _v1.jsx)(_v151, {}) : (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        justifyContent: "center",
        w: "100%",
        h: "100%",
        children: _v9 ? (0, _v1.jsx)(_v145.FilterEmptyState, {}) : _v0 ? (0, _v1.jsx)(_v175, {
          owner: _v2,
          folder: _v7,
          defaultFolderId: _v1,
          folderShareUri: _v6,
          set360SourceType: _v3,
          threeSixtyType: _v4,
          canInviteToFolder: _v5,
          canAllowDownloads: _v12,
          hasContentSpaceEnabled: _v13,
          isOwner: !!(_v8?.user?.id && _v8?.user?.id === _v2?.id)
        }) : (0, _v1.jsx)(_v176, {
          isContentSpacePrivateToMeFolder: _v7.isPrivateToUser && !!_v13
        })
      });
    };
  var _v178 = _v0.i(0);
  let _v179 = (0, _v2.default)(() => _v0.A(0).then(_v0 => ({
      default: _v0.GridView
    })), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v180 = (0, _v2.default)(() => _v0.A(0).then(_v0 => ({
      default: _v0.ListView
    })), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v181 = ({
      canEditFolder: _v0 = !1,
      disableUploads: _v1 = !1,
      folderData: _v2,
      folderId: _v3,
      playerAssetUrls: _v4,
      layout: _v5,
      threeSixtyType: _v6,
      setThreeSixtyType: _v7,
      sort: _v8,
      userId: _v9,
      viewer: _v10,
      selectItem: _v11,
      deselectItem: _v12,
      deselectAllItems: _v13,
      selectedItemURIs: _v14,
      folderItems: _v15,
      removeItemFromCacheByUri: _v16,
      removeMultipleItemsFromCacheByURI: _v17,
      insertVideoCopyAfterOriginal: _v18,
      onFolderSettingsChange: _v19,
      isDone: _v20,
      onLoadMore: _v21,
      isLoadingMore: _v22,
      areFiltersApplied: _v23 = !1,
      onMoreInfo: _v24
    }) => {
      let [_v25, _v26] = (0, _v4.useState)(!1),
        [_v27, _v28] = (0, _v4.useState)(!0),
        {
          capabilities: _v29
        } = (0, _v10.useCapability)(["canSeeUpsellModalOnShare", "privateModeOff", "canManageTeamCollections", "hasVideoReviewPageDemo", "regionalDeliveryPublishContentToChina", "hasMultipleReviewLinks"], _v10?.teamUser?.ownerId),
        {
          contentSpaceEnabled: _v30
        } = (0, _v80.useContentSpaceEnabled)(_v10?.teamUser?.ownerId),
        _v31 = (0, _v129.getLibraryUploadSurface)({
          contentSpaceEnabled: !!_v30,
          isPrivateToUser: _v2.isPrivateToUser
        }),
        _v32 = _v10?.teamUser?.ownerId ?? _v10?.user?.id ?? _v9,
        _v33 = _v30 ? (0, _v16.translate)({
          singular: "Team library",
          dictionary: {
            es: {
              singular: "Biblioteca del equipo"
            },
            "de-DE": {
              singular: "Teambibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque de l'équipe"
            },
            "ja-JP": {
              singular: "チームライブラリ"
            },
            "ko-KR": {
              singular: "팀 라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca da equipe"
            },
            "zh-CN": {
              singular: "团队视频库"
            }
          }
        }) : (0, _v16.translate)({
          singular: "Library",
          dictionary: {
            es: {
              singular: "Biblioteca"
            },
            "de-DE": {
              singular: "Bibliothek"
            },
            "fr-FR": {
              singular: "Bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリ"
            },
            "ko-KR": {
              singular: "라이브러리"
            },
            "pt-BR": {
              singular: "Biblioteca"
            },
            "zh-CN": {
              singular: "视频库"
            }
          }
        }),
        _v34 = (0, _v105.useNotification)(),
        {
          notifyItemMoveFailure: _v35,
          notifyItemMoveSuccess: _v36,
          notifyItemMoveToWorkspaceSuccess: _v37
        } = (0, _v105.useNotifications)(),
        {
          setLoadingSideNavFolderURIs: _v38
        } = (0, _v4.useContext)(_v33.VideoLibraryLayoutContext),
        {
          revalidateFolderItems: _v39,
          revalidateTopLevelFolders: _v40,
          revalidateRootItems: _v41
        } = (0, _v34.useRevalidate)(),
        {
          openCopyVideoModal: _v42,
          copyVideoModal: _v43
        } = (0, _v127.useCopyVideoFlow)({
          onAfterCopySuccess: (_v0, _v1) => _v18(_v1.uri, _v0)
        }),
        _v44 = (0, _v178.useIsLinkRecipient)(),
        _v45 = !!(_v27 && _v2.metadata.interactions.uploadVideo && !_v44 && !_v1),
        _v46 = (0, _v122.useOrionSettingsFields)(["enable_new_library_drag_and_drop_upload"]),
        _v47 = _v46?.enable_new_library_drag_and_drop_upload ?? !1,
        _v48 = _v45 && !_v47,
        _v49 = (0, _v18.useUniversalHostingEnabled)(),
        _v50 = (0, _v131.useLiveEventDeleteModal)(),
        _v51 = (0, _v130.useDeleteLiveEvent)({
          onFailure: () => {
            _v50.setIsLoading(!1);
          },
          onSuccess: ({
            uri: _v0
          }) => {
            _v16(_v0), _v34({
              content: (0, _v16.translate)({
                singular: "This event has been deleted",
                dictionary: {
                  es: {
                    singular: "Se ha eliminado este evento"
                  },
                  "de-DE": {
                    singular: "Dieses Event wurde gelöscht"
                  },
                  "fr-FR": {
                    singular: "Cet événement a été supprimé"
                  },
                  "ja-JP": {
                    singular: "このイベントは削除されました"
                  },
                  "ko-KR": {
                    singular: "이 이벤트는 삭제되었습니다."
                  },
                  "pt-BR": {
                    singular: "Este vídeo foi excluído"
                  },
                  "zh-CN": {
                    singular: "此活动已被删除"
                  }
                }
              })
            }), _v50.setIsLoading(!1), _v50.close();
          }
        }),
        _v52 = (0, _v1.jsx)(_v143, {
          canLoadMore: !_v20,
          isLoadingMore: !!_v22,
          onClick: _v21,
          isDropzoneEnabled: _v45,
          page: _v2.name,
          shouldShowTeamLibraryNotification: _v2.shouldShowTeamLibraryNotification,
          universalHostingEnabled: _v49
        }),
        [_v53, {
          loading: _v54
        }] = (0, _v132.useMoveItem)(),
        [_v55, _v56] = (0, _v4.useState)(null),
        [_v57, _v58] = (0, _v4.useState)([]),
        [_v59, _v60] = (0, _v4.useState)(new Set()),
        _v61 = ({
          dropTarget: _v0,
          items: _v1
        }) => {
          if (_v56(_v0), _v58(_v1), _v0) if (!_v2.isPrivateToUser || _v0.isPrivateToUser || _v25) {
            let _v0 = new Set("");
            _v0.add(_v0.uri), _v60(_v0), _v38(_v0);
            let [,, _v1,, _v2] = _v0.uri.split("/");
            _v53({
              ownerId: parseInt(_v1, 10),
              folderId: parseInt(_v2, 10),
              targetItems: _v1
            }).then(() => {
              1 === _v1.length ? (_v12(_v1[0].uri, 0), _v16(_v1[0].uri)) : (_v13(), _v17(_v14)), _v36(null, {
                label: _v0.name,
                link: (0, _v81.getFolderPageUriFromApiUri)(_v0.uri)
              });
            }).catch(_v0 => {
              _v34({
                content: _v0,
                status: "error"
              });
            }).finally(() => {
              _v56(null), _v58([]), _v60(new Set()), _v38(new Set()), _v26(!1), _v1.length > 1 ? _v30.gtm.trackBulkMove() : _v30.gtm.trackVideoMove();
            });
          } else _v26(!0);
        },
        {
          draggableItemIsHovering: _v62,
          dropRef: _v63
        } = (0, _v128.useDropFolder)({
          dropTargetType: _v133.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
          dropTarget: void 0,
          allowedDropEffect: null,
          dropFileForUploadConfig: null != _v32 && _v2.metadata.interactions.uploadVideo ? {
            targetUserId: _v32,
            folderId: _v3,
            folderName: _v2.name,
            surface: _v31
          } : void 0
        });
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v15?.length === 0 && _v20 ? (0, _v1.jsx)(_v177, {
          canEditFolder: _v0,
          defaultFolderId: _v3,
          owner: {
            id: _v32
          },
          set360SourceType: _v7,
          threeSixtyType: _v6,
          canInviteToFolder: !!_v2?.metadata?.interactions.invite,
          folderShareUri: _v2.uri,
          folder: _v2,
          viewer: _v10,
          areFiltersApplied: _v23
        }) : (0, _v1.jsx)(_v126.UploadDropzone, {
          className: "mvv-upload-dropzone",
          surface: _v31,
          targetUserId: _v32,
          selectedFolderId: _v3,
          disabled: !_v48,
          destinationText: _v2.name,
          children: (0, _v1.jsx)(_v88.Box, {
            ref: _v63,
            backgroundColor: _v62 ? "rgba(23, 213, 255, 0.06)" : "transparent",
            borderColor: _v62 ? "vimeoBlue.500" : "transparent",
            borderRadius: "lg",
            borderWidth: ".125rem",
            transition: "background-color 0.2s ease, border-color 0.2s ease",
            flexGrow: 1,
            children: _v5 === _v38.LAYOUT.GRID ? (0, _v1.jsx)(_v123.PlayerContextProvider, {
              assetUrls: _v4,
              type: _v124.PlayerType.BarebonePlayer,
              children: (0, _v1.jsx)(_v179, {
                deselectItem: _v12,
                folder: _v2,
                handleRemoveVideo: _v16,
                hasFolderShareUpsell: !!_v29.canSeeUpsellModalOnShare,
                hasReviewPageLinkUpsell: !!_v29.hasVideoReviewPageDemo,
                projectItems: _v15,
                libraryTitle: _v33,
                contentSpaceEnabled: !!_v30,
                loadMoreCta: _v52,
                onFolderSettingsChange: _v19,
                sortOptions: _v8,
                selectItem: _v11,
                selectedItemURIs: _v14,
                handleMoveItemsOnDrop: _v61,
                onDeleteLiveEvent: (_v0, _v1, _v2) => {
                  _v50.open({
                    onConfirm: () => {
                      _v50.setIsLoading(!0), _v51({
                        title: _v0,
                        uri: _v1,
                        ownerId: _v2
                      });
                    },
                    onDismiss: () => {
                      _v50.close();
                    },
                    name: _v0
                  });
                },
                setIsUploadDropzoneEnabled: _v28,
                onMoveFolderSuccess: (_v0, _v1, _v2, _v3) => {
                  _v40(), _v1[0].parentFolder?.uri ? _v39(_v1[0]?.parentFolder?.uri ?? "") : _v41(), "root" !== _v0 && _v39(_v0.uri);
                  let _v4 = "root" === _v0 ? _v33 : _v0.name,
                    _v5 = "root" === _v0 ? "/library" : (0, _v81.getFolderPageUriFromApiUri)(_v0.uri);
                  _v2 && _v3 ? _v37(_v1[0].name, {
                    label: _v4,
                    workspaceName: _v3
                  }, () => {
                    _v10 && (0, _v115.switchTeam)(_v2, _v10.xsrft).finally(() => {
                      window.location.href = _v5;
                    });
                  }) : _v36(_v1[0].name, {
                    label: _v4,
                    link: _v5
                  });
                },
                onMoveFolderFailure: (_v0, _v1) => {
                  _v35(_v1[0].name, "root" === _v0 ? _v33 : _v0.name);
                },
                baseUrl: _v10?.vimeoHttpsUrl || "",
                hasMultipleReviewLinks: !!_v29.hasMultipleReviewLinks,
                onMoreInfo: _v24,
                onCopyVideo: _v42
              })
            }) : (0, _v1.jsx)(_v180, {
              folder: _v2,
              projectItems: _v15,
              deselectItem: _v12,
              libraryTitle: _v33,
              contentSpaceEnabled: !!_v30,
              loadingFolderURIs: _v59,
              loadMoreCta: _v52,
              selectedItemURIs: _v14,
              selectItem: _v11,
              sort: _v8,
              handleRemoveVideo: _v16,
              handleMoveItemsOnDrop: _v61,
              setIsUploadDropzoneEnabled: _v28,
              hasFolderShareUpsell: !!_v29.canSeeUpsellModalOnShare,
              hasReviewPageLinkUpsell: !!_v29.hasVideoReviewPageDemo,
              hasMultipleReviewLinks: !!_v29.hasMultipleReviewLinks,
              onMoreInfo: _v24,
              onCopyVideo: _v42
            })
          })
        }), _v25 && (0, _v1.jsx)(_v125.MovePrivateVideoConfirmationModal, {
          dropTarget: _v55,
          items: _v57,
          isOpen: _v25,
          setIsOpen: _v26,
          onMoveConfirmation: _v61,
          isLoading: _v54
        }), _v43]
      });
    },
    _v182 = () => (0, _v1.jsx)(_v7.Flex, {
      height: "100vh",
      justifyContent: "center",
      width: "100%",
      top: "0",
      left: "0",
      opacity: "0.7",
      position: "absolute",
      children: (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        children: (0, _v1.jsx)(_v135.Spinner, {
          size: "xl"
        })
      })
    }),
    _v183 = ["video", "folder"],
    _v184 = ["video", "folder", "file"],
    _v185 = (0, _v2.default)(() => _v0.A(0).then(_v0 => ({
      default: _v0.BulkActions
    })), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v186 = (0, _v2.default)(() => _v0.A(0).then(_v0 => ({
      default: _v0.ResourceSidePanel
    })), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v187 = ({
      folderData: _v0,
      folderId: _v1,
      playerAssetUrls: _v2,
      userId: _v3,
      viewer: _v4,
      reviewId: _v5,
      showPasswordPage: _v6 = !1,
      folderShareLinkId: _v7,
      itemHref: _v8
    }) => {
      let _v9 = (0, _v3.useRouter)(),
        _v10 = (0, _v11.useIsMobile)(),
        [_v11, _v12] = (0, _v4.useState)(null),
        {
          revalidateFolderItems: _v13
        } = (0, _v34.useRevalidate)(),
        {
          setIsPersonalTeamFolderAdminView: _v14,
          shouldShowSideNav: _v15
        } = (0, _v4.useContext)(_v33.VideoLibraryLayoutContext),
        {
          setFolderName: _v16
        } = (0, _v4.useContext)(_v26.OmnisearchContext),
        _v17 = _v4?.teamUser?.ownerId || _v4?.user?.id || null,
        {
          capabilities: _v18
        } = (0, _v10.useCapability)(["canManageTeamCollections", "hasContentSpaceEnabled", "regionalDeliveryPublishContentToChina", "privateModeOff", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasTeamPrivacy", "coldStorageClips", "canPerformBulkTranslations", "folderUploadPresets"], null != _v17 ? `/users/${_v17}` : null),
        _v19 = (0, _v37.usePageName)(),
        _v20 = !0 === _v18.folderUploadPresets,
        {
          step: _v21,
          handleDismiss: _v22,
          handleCtaClick: _v23,
          handleErrorClose: _v24
        } = (0, _v59.useViewerAiUpsellModal)("my_library"),
        {
          trackColdStorageUxDisplayed: _v25
        } = (0, _v20.useColdStorageTracking)(),
        {
          trackLibraryPageDisplayed: _v26,
          trackLibraryViewChanged: _v27,
          trackLibrarySortChanged: _v28,
          trackLibraryFilterApplied: _v29
        } = (0, _v22.useLibraryTracking)(),
        {
          hasColdStorage: _v30
        } = (0, _v67.useUserHasColdStorageVideos)(),
        _v31 = _v4?.teamUser?.plainTextPermissionLevel || null,
        _v32 = _v17 === _v4?.user?.id || "Admin" === _v31,
        {
          hasColdPrivacy: _v33,
          isLoading: _v34
        } = (0, _v66.useUserHasColdPrivacyVideos)({
          enabled: !0
        }),
        _v35 = _v30 || _v33,
        _v36 = (0, _v4.useMemo)(() => (0, _v20.deriveColdStorageRestrictions)({
          hasColdStorage: _v30,
          hasColdPrivacy: _v33
        }), [_v30, _v33]);
      (0, _v21.usePicoEffect)(() => {
        if (!_v30 || _v34) return !1;
        _v25({
          surface: "folder_review",
          restrictions: _v36
        });
      }, [_v30, _v34, _v36], {
        once: !0
      });
      let _v37 = !!_v18.coldStorageClips && _v32 || _v30 && _v32,
        _v38 = (0, _v18.useUniversalHostingEnabled)(),
        _v39 = (0, _v4.useMemo)(() => _v38 ? _v184 : _v183, [_v38]),
        _v40 = (0, _v48.useContentTypeFilter)([..._v39]),
        _v41 = (0, _v51.useVideoAvailabilityFilter)(),
        _v42 = (0, _v49.useClipPrivacyFilter)(["unlisted", "password", "hide_from_vimeo", "team", "private", "public", ...(_v33 ? ["cold_privacy"] : [])], !!_v18?.hasTeamPrivacy),
        _v43 = [..._v42.value],
        _v44 = _v42.value.has("cold_privacy"),
        _v45 = (0, _v62.doesSelectionIncludeVideos)(_v39, _v40.value) && _v41.value.has("restricted") !== _v41.value.has("available") || _v44,
        _v46 = !!_v18.canGenerateClipTextTranslation,
        _v47 = (!!_v18.canGenerateClipTranslation || _v46) && !!_v18.canPerformBulkTranslations,
        _v48 = (0, _v50.useCreatedByFilter)(),
        _v49 = _v42.isFilterActive || _v48.isFilterActive || _v41.isFilterActive,
        _v50 = !!_v42.isFilterActive || !!_v48.isFilterActive,
        _v51 = !!_v42.isDraftActive || !!_v48.isDraftActive,
        _v52 = !!_v40.isFilterApplied || _v49 || (0, _v51.isVideoAvailabilityFilterExplicitlyEngaged)(_v41.value);
      (0, _v4.useEffect)(() => {
        if (!_v30 || (0, _v51.isVideoAvailabilityFilterExplicitlyEngaged)(_v41.value)) return;
        let _v0 = _v40.value;
        if (1 !== _v0.size || !_v0.has("video") || (_v40.setSelection(new Set()), !_v9.isReady)) return;
        let _v1 = _v9.query.filter;
        if ("string" != typeof _v1 || "locked" !== _v1.toLowerCase()) return;
        let _v2 = {
          ..._v9.query
        };
        delete _v2.filter, _v9.replace({
          pathname: _v9.pathname,
          query: _v2
        }, void 0, {
          shallow: !0
        });
      }, [_v41.value, _v40.value, _v30, _v9.isReady, _v9.pathname, _v9.query.filter]);
      let _v53 = !(0, _v62.isContentTypeSelectionDefault)(_v39, _v40.value) && !(0, _v62.doesSelectionIncludeVideos)(_v39, _v40.value),
        _v54 = !(0, _v62.isContentTypeSelectionDefault)(_v39, _v40.draft) && !(0, _v62.doesSelectionIncludeVideos)(_v39, _v40.draft),
        [_v55, _v56] = (0, _v4.useState)(!1),
        [_v57, _v58] = (0, _v4.useState)(!1),
        [_v59, _v60] = (0, _v4.useState)(),
        [_v61, _v62] = (0, _v4.useState)(new Set()),
        [_v63, _v64] = (0, _v4.useState)(!1),
        _v65 = (0, _v12.usePrevious)(_v1),
        _v66 = !!_v18?.hasContentSpaceEnabled,
        [_v67, _v68] = (0, _v13.default)(_v69.MVV_VISIT_LOCAL_STORAGE_KEY, 0),
        [_v69, _v70] = (0, _v31.useLayoutPreference)(),
        [_v71, _v72] = (0, _v32.useSortPreference)(_v38.DEFAULT_SORT, _v38.VL_SORT_LOCAL_STORAGE_KEY),
        [_v73, _v74] = (0, _v36.useDateDisplayPreference)(_v38.DEFAULT_DATE_DISPLAY, _v38.VL_DATE_LOCAL_STORAGE_KEY),
        [_v75, _v76] = (0, _v4.useState)(_v0),
        _v77 = (0, _v24.getReviewPasswordHashFromCookie)(_v5),
        _v78 = !!_v5 || !!_v7,
        {
          data: _v79,
          error: _v80
        } = (0, _v15.useGetUserProject)({
          where: {
            userId: _v3,
            projectId: _v1
          },
          select: _v69.DEFAULT_FOLDER_API_FIELDS,
          query: {
            reviewId: _v5,
            password: _v77,
            folderShareLinkId: _v7
          }
        }),
        {
          data: _v81,
          error: _v82,
          size: _v83,
          setSize: _v84,
          mutate: _v85,
          updateVideo: _v86
        } = (({
          userId: _v0,
          folderId: _v1,
          sort: _v2,
          contentType: _v3 = "all",
          clipPrivacyFilters: _v4 = [],
          createdByFilter: _v5 = [],
          reviewId: _v6,
          folderShareLinkId: _v7,
          includeColdStorageClips: _v8 = !1
        }) => {
          let _v9 = _v4.length > 0 ? _v4.join(",") : void 0,
            _v10 = _v5.length > 0 ? _v5.map(_v0 => _v0.userId) : void 0,
            _v11 = _v10?.length ? _v10.join(",") : void 0,
            _v12 = (0, _v24.getReviewPasswordHashFromCookie)(_v6),
            {
              data: _v13,
              error: _v14,
              isLoading: _v15,
              mutate: _v16,
              setSize: _v17,
              size: _v18
            } = (0, _v68.useGetUserProjectItemsInfinite)(() => _v0 && _v1 ? {
              where: {
                userId: _v0,
                projectId: _v1
              },
              select: _v69.DEFAULT_ITEM_API_FIELDS,
              query: {
                direction: _v2.direction,
                sort: _v2.type,
                perPage: _v69.ITEMS_PER_PAGE,
                liveEventType: "all",
                noPadding: !0,
                responsive: !0,
                ...("all" !== _v3 && {
                  filter: _v3
                }),
                clipPrivacyFilters: _v9,
                clipCreatedByFilters: _v11,
                includeColdStorageClips: _v8,
                reviewId: _v6,
                folderShareLinkId: _v7,
                password: _v12
              },
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.1"
              }
            } : null, {
              revalidateAll: !0
            }),
            _v19 = (0, _v4.useCallback)((_v0, _v1) => {
              _v16(_v0 => _v0 ? _v0.map(_v0 => ({
                ..._v0,
                data: _v0.data.map(_v0 => _v0.video?.uri === _v0 ? {
                  ..._v0,
                  video: _v1(_v0.video)
                } : _v0)
              })) : _v0, !1);
            }, [_v16]);
          return {
            data: _v13,
            error: _v14,
            isLoading: _v15,
            mutate: _v16,
            setSize: _v17,
            size: _v18,
            updateVideo: _v19
          };
        })({
          userId: _v3,
          folderId: _v1,
          sort: _v71,
          contentType: (0, _v62.getContentTypeApiFilterParam)(_v39, _v40.value) ?? "all",
          clipPrivacyFilters: _v45 ? [] : _v43,
          createdByFilter: [..._v48.value],
          includeColdStorageClips: _v37,
          reviewId: _v5,
          folderShareLinkId: _v7
        }),
        _v87 = (0, _v4.useMemo)(() => _v81 ? _v81.flatMap(_v0 => {
          if (!_v0) return [];
          let _v1 = _v0.data.filter(_v0 => (0, _v61.passesLibraryItemClientFilters)({
            clipPrivacyFilter: _v42.value,
            contentTypeOptions: _v39,
            contentTypeSelection: _v40.value,
            item: _v0,
            shouldUseClientPipeline: _v45,
            videoAvailabilityFilter: _v41.value
          }));
          return [{
            ..._v0,
            data: _v1
          }];
        }) : _v81, [_v42.value, _v40.value, _v39, _v81, _v45, _v41.value]),
        _v88 = _v40.value.size > 1 && _v40.value.size < _v39.length,
        _v89 = _v45 || _v88 ? _v87?.reduce((_v0, _v1) => _v0 + _v1.data.length, 0) : _v87?.[0]?.total,
        _v90 = (0, _v23.deriveLibraryType)({
          hasContentSpaceEnabled: _v66,
          isPrivateToUser: _v75?.isPrivateToUser
        });
      (0, _v21.usePicoEffect)(() => {
        if (!_v75 || void 0 === _v89) return !1;
        _v26({
          libraryType: _v90,
          libraryItemCount: _v89,
          referrerPage: (0, _v23.deriveLibraryReferrerPage)(_v9.query.library_referrer)
        });
      }, [_v75?.uri, _v90, _v89, _v9.query.library_referrer], {
        once: !0
      });
      let {
          isDone: _v91,
          isLoadingMore: _v92,
          isLoadingInitialData: _v93
        } = (0, _v27.getInfiniteRequestLoadingState)({
          data: _v81,
          error: _v80,
          size: _v83,
          itemsPerPage: _v69.ITEMS_PER_PAGE
        }),
        _v94 = _v71.type === _v38.DEFAULT_SORT.type && _v71.direction === _v38.DEFAULT_SORT.direction,
        _v95 = _v93 && !_v52 && _v94,
        _v96 = !_v95 && !_v78,
        [_v97, _v98] = (0, _v4.useState)(!1),
        [_v99, _v100] = (0, _v4.useState)(_v75?.name ?? "");
      (0, _v4.useEffect)(() => {
        let _v0 = _v67 + 1;
        _v0 >= _v69.SURVEY_VISIT_THRESHOLD && _v30.gtm.trackFolderRepeatVisit(), _v0 <= _v69.MAX_VISITS_TO_COUNT && _v68(_v0);
      }, []);
      let _v101 = _v75?.metadata?.connections?.personalTeamFolderOwner?.uri ?? null,
        _v102 = !!_v75?.metadata?.interactions?.view?.uri,
        _v103 = !!_v75?.metadata?.interactions?.edit?.uri,
        _v104 = !!_v75?.metadata?.interactions?.canComment,
        _v105 = !!_v75?.metadata?.interactions?.editSettings?.uri,
        _v106 = _v75?.metadata?.connections?.ancestorPath,
        _v107 = !!_v75?.metadata?.interactions?.addSubfolder?.canAddSubfolders;
      (0, _v4.useEffect)(() => {
        let _v0 = _v4?.user?.id,
          _v1 = _v4?.teamUser ? _v4?.teamUser.ownerId : _v0,
          _v2 = (0, _v29.idFromUri)(_v101),
          _v3 = (0, _v29.idFromUri)(_v75?.uri),
          _v4 = _v75?.metadata?.connections?.ancestorPath?.some(_v0 => "/shared-with-me" === _v0.uri);
        _v1 === _v3 && _v66 && _v101 && _v0 !== _v2 && _v0 === _v1 && !_v4 && _v14(!0);
      }, [_v66, _v101, _v102, _v4?.user?.id, _v4?.teamUser?.ownerId, _v75?.uri, _v14]), (0, _v4.useEffect)(() => (_v79 && (_v16(_v79.name), _v76(_v79)), () => {
        _v16("");
      }), [_v79]), (0, _v4.useEffect)(() => {
        _v12(null);
      }, [_v1]);
      let [_v108, _v109] = (0, _v4.useState)(null);
      (0, _v28.useUploadLifecycle)((_v0, _v1) => {
        _v1.clipId ? _v75 ? _v13(_v75.uri) : _v9.push(`/manage/videos/${_v1.clipId}/privacy`) : _v1.publicId && _v75 && _v13(_v75.uri);
      }, []);
      let _v110 = _v4?.user?.id === _v3 || _v4?.teamUser?.ownerId === _v3,
        _v111 = _v48.shouldHideFilter || _v75?.isPrivateToUser,
        _v112 = (0, _v4.useMemo)(() => _v87?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.flatMap(_v0 => _v0)), [_v87]),
        _v113 = (0, _v4.useMemo)(() => {
          let _v0 = _v110 || _v7 || _v5 && _v75?.metadata?.interactions?.allowMultipleReviewLinks ? _v112 : _v112?.filter(_v0 => _v0.video?.reviewPage?.active ?? !1);
          return _v38 || !_v0 ? _v0 : _v0.filter(_v0 => !_v0.file);
        }, [_v110, _v112, _v38, _v5, _v7]),
        _v114 = (0, _v4.useMemo)(() => ({
          canAddToShowcases: {
            fields: ["video.metadata.interactions.edit.uri"],
            test: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit
          },
          canChangeItemPrivacy: {
            fields: ["video.metadata.interactions.edit.uri", "file.canUserEdit"],
            test: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit || !!_v0?.file?.canUserEdit
          },
          canDeleteItem: {
            fields: ["video.metadata.interactions.delete.uri", "liveEvent.metadata.interactions.delete", "file.canUserDelete"],
            test: _v0 => !!_v0?.video?.metadata?.interactions?.delete || !!_v0?.liveEvent?.metadata?.interactions?.delete || !!_v0?.file?.canUserDelete
          },
          canMoveItem: {
            fields: ["video.uri", "liveEvent.uri", "file.canUserEdit"],
            test: _v0 => _v103 && (!!_v0?.video || !!_v0?.liveEvent || !!_v0?.file?.canUserEdit)
          },
          hasLegalHold: {
            fields: ["video.metadata.interactions.legalHold.uri"],
            test: _v0 => !!_v0.video?.uri && !!_v0.video?.metadata?.interactions?.legalHold?.uri
          }
        }), [_v103]),
        {
          canDeleteSelection: _v115,
          canMoveSelection: _v116,
          canChangePrivacySelection: _v117,
          hasColdStorageSelection: _v118,
          hasLegalHoldSelection: _v119,
          canSelectURIs: _v120,
          allItems: _v121,
          selectedItems: _v122,
          canAddToShowcasesSelection: _v123,
          hasReachedMaxSelectionForMove: _v124,
          hasReachedMaxSelectionForPrivacy: _v125,
          hasReachedMaxSelectionForSentimentWidget: _v126,
          hasReachedMaxSelectionForShowcases: _v127,
          maxBulkActionSelection: _v128
        } = (0, _v35.useBulkItems)({
          ...(0, _v64.toPredicateFns)(_v114),
          items: _v113,
          selectedURIs: _v61,
          isReadOnly: _v78,
          allowColdStorageDeletion: !0
        }),
        _v129 = (0, _v65.useMarketingVideoCard)(),
        _v130 = !!_v75?.isPrivateToUser && _v106?.length === 0,
        _v131 = _v130 ? (0, _v16.translate)({
          singular: "My library",
          dictionary: {
            es: {
              singular: "Mi biblioteca"
            },
            "de-DE": {
              singular: "Meine Bibliothek"
            },
            "fr-FR": {
              singular: "Ma bibliothèque"
            },
            "ja-JP": {
              singular: "マイ ライブラリ"
            },
            "ko-KR": {
              singular: "내 라이브러리"
            },
            "pt-BR": {
              singular: "Minha Biblioteca"
            },
            "zh-CN": {
              singular: "我的视频库"
            }
          }
        }) : _v99,
        _v132 = (0, _v9.useLibraryMergeAnnouncement)("library", {
          enabled: _v130
        }),
        _v133 = "becoming" === _v132.active,
        _v134 = (0, _v4.useMemo)(() => {
          let _v0 = (_v121?.length ?? 0) > 0;
          return _v130 && _v129.shouldShow && !_v52 && _v0 ? [{
            type: "video",
            metadata: {
              connections: {}
            },
            isSelected: !1,
            isSelectable: !1,
            marketingVideo: {
              videoId: _v129.videoId,
              entryPoint: "my_library",
              onDismiss: _v129.dismiss
            }
          }, ...(_v121 ?? [])] : _v121;
        }, [_v130, _v129.shouldShow, _v129.videoId, _v129.dismiss, _v52, _v121]),
        _v135 = (0, _v4.useCallback)(_v0 => {
          "Shift" === _v0.key && _v58(!_v57);
        }, [_v57]);
      (0, _v4.useEffect)(() => (window.addEventListener("keydown", _v135), window.addEventListener("keyup", _v135), () => {
        window.removeEventListener("keydown", _v135), window.removeEventListener("keyup", _v135);
      }), [_v135]);
      let _v136 = (0, _v4.useCallback)((_v0, _v1) => {
          let _v2 = _v0.video?.uri ?? _v0.liveEvent?.uri ?? _v0.file?.uri;
          _v2 && !_v1.has(_v2) && _v1.add(_v2);
        }, []),
        _v137 = (0, _v4.useCallback)((_v0, _v1) => {
          if (void 0 === _v59) {
            _v62(new Set([_v0])), _v60(_v1);
            return;
          }
          let _v2 = new Set(_v61),
            _v3 = _v59 > _v1,
            _v4 = _v3 ? _v1 : _v59,
            _v5 = _v3 ? _v59 : _v1;
          if (_v57 && null != _v113) for (let _v0 = _v4; _v0 <= _v5; _v0++) _v136(_v113[_v0], _v2);else _v2.add(_v0);
          _v62(_v2), _v60(_v1);
        }, [_v57, _v59, _v60, _v61, _v62, _v113, _v136]),
        _v138 = (0, _v4.useCallback)((_v0, _v1) => {
          let _v2 = new Set(_v61);
          if (void 0 === _v59) {
            _v2.delete(_v0), _v62(_v2), _v64(!1);
            return;
          }
          let _v3 = _v59 > _v1,
            _v4 = _v3 ? _v1 : _v59,
            _v5 = _v3 ? _v59 : _v1;
          if (_v57 && null != _v113) for (let _v0 = _v4; _v0 <= _v5; _v0++) {
            let _v0 = _v113[_v0].video?.uri ?? _v113[_v0].liveEvent?.uri ?? _v113[_v0].file?.uri;
            _v0 && _v2.delete(_v0);
          }
          _v2.delete(_v0), _v62(_v2), _v60(_v1), _v64(!1);
        }, [_v61, _v62, _v59, _v60, _v57, _v113]),
        _v139 = (0, _v4.useCallback)(() => {
          _v62(new Set()), _v60(void 0), _v64(!1);
        }, [_v62]),
        _v140 = (0, _v4.useCallback)(_v0 => {
          _v62(_v0 => {
            let _v1 = new Set(_v0);
            return _v0.forEach(_v0 => _v1.delete(_v0)), _v1;
          }), _v64(!1);
        }, [_v62]),
        _v141 = (0, _v4.useCallback)(() => {
          let _v0 = _v40.value,
            _v1 = (0, _v62.isContentTypeOptionChecked)(_v39, _v0, "video"),
            _v2 = _v41.value,
            _v3 = _v2.has("restricted"),
            _v4 = _v2.has("available");
          _v139();
          let _v5 = () => new Set(["restricted", "available"]);
          if (!_v1) {
            _v40.setSelection((0, _v62.includeVideosInSelection)(_v39, _v0)), _v41.setValue(_v5());
            return;
          }
          if (!_v3 && !_v4) {
            _v40.setSelection((0, _v62.excludeVideosFromSelection)(_v39, _v0)), _v41.clearFilter();
            return;
          }
          if (_v3 !== _v4) return void _v41.setValue(_v5());
          if (_v3 && _v4) {
            _v41.clearFilter(), _v40.setSelection((0, _v62.excludeVideosFromSelection)(_v39, _v0));
            return;
          }
        }, [_v40, _v39, _v139, _v41]),
        _v142 = (0, _v4.useCallback)(() => {
          let _v0 = _v40.draft,
            _v1 = (0, _v62.isContentTypeOptionChecked)(_v39, _v0, "video"),
            _v2 = _v41.draft,
            _v3 = _v2.has("restricted"),
            _v4 = _v2.has("available");
          _v139();
          let _v5 = () => new Set(["restricted", "available"]);
          if (!_v1) {
            _v40.setSelection((0, _v62.includeVideosInSelection)(_v39, _v0), !0), _v41.setDraft(_v5());
            return;
          }
          if (!_v3 && !_v4) {
            _v40.setSelection((0, _v62.excludeVideosFromSelection)(_v39, _v0), !0), _v41.setDraft(new Set());
            return;
          }
          if (_v3 !== _v4) return void _v41.setDraft(_v5());
          if (_v3 && _v4) {
            _v41.setDraft(new Set()), _v40.setSelection((0, _v62.excludeVideosFromSelection)(_v39, _v0), !0);
            return;
          }
        }, [_v40, _v39, _v139, _v41]),
        _v143 = _v30 || _v30 ? {
          onVideoParentCheckboxClick: _v141,
          setVideoAvailabilityFilter: _v0 => {
            let _v1 = _v40.value;
            (0, _v62.isContentTypeOptionChecked)(_v39, _v1, "video") || _v40.setSelection((0, _v62.includeVideosInSelection)(_v39, _v1)), _v41.updateFilterValues(_v0);
          },
          showAvailableOption: _v30,
          showRestrictedOption: _v30,
          videoAvailabilityFilter: _v41.value
        } : void 0,
        _v144 = _v30 || _v30 ? {
          onVideoParentCheckboxClick: _v142,
          onVideoAvailabilityChange: _v0 => {
            let _v1 = _v40.draft;
            (0, _v62.isContentTypeOptionChecked)(_v39, _v1, "video") || _v40.setSelection((0, _v62.includeVideosInSelection)(_v39, _v1), !0), _v41.updateFilterValues(_v0, !0);
          },
          showAvailableOption: _v30,
          showRestrictedOption: _v30,
          videoAvailabilityDraft: _v41.draft
        } : void 0,
        _v145 = (0, _v4.useCallback)(() => {
          _v120.size && _v62(new Set(_v120));
        }, [_v62, _v120]),
        _v146 = (0, _v4.useCallback)(() => _v64(!0), []);
      (0, _v4.useEffect)(() => {
        _v63 && _v120.size && _v62(_v0 => {
          let _v1 = new Set(_v0);
          return _v120.forEach(_v0 => _v1.add(_v0)), _v1.size === _v0.size ? _v0 : _v1;
        });
      }, [_v63, _v120]);
      let _v147 = _v75?.metadata?.connections?.videos?.total ?? 0,
        _v148 = _v63 && _v147 <= _v128,
        _v149 = _v122?.filter(_v0 => !!_v0.video)?.length ?? 0,
        _v150 = !!_v149 && !!_v147 && !_v52,
        _v151 = (0, _v64.useSelectAllItems)({
          enabled: _v148 && !!_v147 && _v147 <= _v128 && !_v52,
          maxItems: _v128,
          source: {
            kind: "project",
            userId: _v3,
            projectId: _v1,
            reviewId: _v5,
            folderShareLinkId: _v7,
            password: _v77,
            includeColdStorageClips: _v37
          },
          predicates: _v114
        }),
        _v152 = _v148 && !_v151.isReady,
        _v153 = _v148 && _v151.isReady ? _v151 : {
          selectedItems: _v122,
          selectedItemURIs: _v61,
          canAddToShowcasesSelection: _v123,
          canMoveSelection: _v116,
          canDeleteSelection: _v115,
          canChangePrivacySelection: _v117,
          hasColdStorageSelection: _v118,
          hasLegalHoldSelection: _v119,
          hasReachedMaxSelectionForMove: _v124,
          hasReachedMaxSelectionForPrivacy: _v125,
          hasReachedMaxSelectionForSentimentWidget: _v126,
          hasReachedMaxSelectionForShowcases: _v127
        };
      (0, _v4.useEffect)(_v139, [_v139, _v75?.uri, _v71.direction, _v71.type]);
      let _v154 = _v0 => {
          _v85(_v0 => _v0?.map(_v0 => ({
            ..._v0,
            data: _v0.data.filter(_v0 => !!_v0.folder || (_v0.liveEvent ? _v0.liveEvent.uri && !_v0.has(_v0.liveEvent.uri) : _v0.video ? _v0.video.uri && !_v0.has(_v0.video.uri) : !_v0.file || _v0.file.uri && !_v0.has(_v0.file.uri)))
          })), !0);
        },
        _v155 = (0, _v4.useCallback)(() => {
          _v139(), _v40.clearFilter(), _v42.clearFilter(), _v41.clearFilter(), _v48.clearFilter();
        }, [_v42, _v40, _v48, _v139, _v41]);
      if ((0, _v4.useEffect)(() => {
        _v1 !== _v65 && _v155();
      }, [_v1, _v65, _v155]), _v80 && !_v78) {
        if (!_v4?.user) throw new _v14.UnauthorizedError();
        throw new _v14.ResourceNotFoundError();
      }
      if (_v82 && !_v78) {
        if (_v85(_v0 => _v0, !1), !_v4?.user) throw new _v14.UnauthorizedError();
        throw new _v14.ResourceNotFoundError();
      }
      return _v75 || _v80 ? _v6 && _v5 ? (0, _v1.jsx)(_v25.PasswordPage, {
        reviewId: _v5
      }) : (0, _v1.jsx)(_v5.ThemeProvider, {
        theme: _v6.applyCustomThemeSVV,
        children: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v8.LibrariesBecomingOneModal, {
            isOpen: _v133,
            onClose: () => _v132.dismiss("becoming"),
            userId: _v17 ?? void 0,
            mergeDate: _v132.mergeDate
          }), (0, _v1.jsxs)(_v41.Page, {
            children: [(0, _v1.jsxs)(_v41.Page.Main, {
              children: [(0, _v1.jsxs)(_v41.Page.StickyTop, {
                children: [(0, _v1.jsx)(_v19.ReverseTrialLateBanner, {
                  hostLocation: "folder"
                }), _v35 && (0, _v1.jsx)(_v17.ColdStorageBanner, {
                  surface: "folder_review",
                  hasColdStorage: _v30,
                  hasColdPrivacy: _v33,
                  isColdPrivacyLoading: _v34
                }), (0, _v1.jsx)(_v42.PageHeader, {
                  actions: (0, _v1.jsx)(_v121, {
                    ancestorFolders: _v106,
                    disableUploads: _v78,
                    folderData: _v75,
                    folderId: _v1,
                    isLinkRecipient: _v78,
                    onRename: () => {
                      _v98(!0);
                    },
                    shouldShowFolderMenu: _v15,
                    userId: _v3,
                    viewer: _v4
                  }),
                  bottomBar: (0, _v1.jsxs)(_v39.FilterSortBar, {
                    checkbox: (0, _v1.jsx)(_v44.CheckboxItemCount, {
                      hasCheckbox: !!_v120.size && !_v78,
                      isChecked: !!_v61.size,
                      isDisabled: !_v120.size,
                      isIndeterminate: !!_v61.size && _v61.size < _v120.size,
                      isLoading: _v93,
                      onChange: () => {
                        _v61.size ? _v139() : _v145();
                      },
                      subtitle: (0, _v1.jsx)(_v90, {
                        count: _v89 ?? 0,
                        isFiltered: _v52,
                        isMyLibrary: !!_v75?.isPrivateToUser && _v106?.length === 0,
                        level: _v105 ? "manage" : _v103 || _v107 ? "edit" : _v104 ? "comment" : "view",
                        hasCustomDefaults: _v20 && _v105 && _v75?.settings?.uploadPreset != null
                      })
                    }),
                    layout: _v69,
                    setLayout: _v0 => {
                      _v70(_v0), _v27({
                        libraryType: _v90,
                        libraryNewView: "GRID_LAYOUT" === _v0 ? "grid" : "list"
                      });
                    },
                    sort: _v71,
                    setSort: _v0 => {
                      let _v1 = `${_v71.type.toLowerCase()}_${_v71.direction.toLowerCase()}`,
                        _v2 = `${_v0.type.toLowerCase()}_${_v0.direction.toLowerCase()}`;
                      if (_v72(_v0), _v2 !== _v1) {
                        let _v0 = {
                          alphabetical_asc: "title_a_to_z",
                          alphabetical_desc: "title_z_to_a",
                          last_user_action_event_date_desc: "last_modified",
                          last_user_action_event_date_asc: "first_modified",
                          date_desc: "last_added",
                          date_asc: "first_added",
                          duration_desc: "longest",
                          duration_asc: "shortest"
                        }[_v2];
                        _v0 && _v28({
                          libraryType: _v90,
                          libraryNewSort: _v0
                        });
                      }
                    },
                    setDateDisplay: _v74,
                    shouldHideViewControls: 0 === _v89 && !_v52,
                    sortOptions: _v38.SORT_OPTIONS,
                    isLayoutToggleDisabled: 0 === _v89,
                    isInitialLoadInProgress: _v95,
                    children: [_v10 && _v96 && (0, _v1.jsxs)(_v7.Flex, {
                      children: [(0, _v1.jsx)(_v53.MobileFilterButton, {
                        isFilterApplied: _v52,
                        onClick: () => {
                          _v56(!0);
                        }
                      }), (0, _v1.jsxs)(_v54.MobileFilterDrawer, {
                        isFilterApplied: _v52,
                        isOpen: _v55,
                        onApplyFilters: () => {
                          _v139();
                          let _v0 = !(0, _v62.areIdenticalSets)(_v40.draft, _v40.value),
                            _v1 = _v42.isDraftActive && _v42.isDraftUpdated(),
                            _v2 = _v41.isDraftActive && _v41.isDraftUpdated(),
                            _v3 = _v48.isDraftActive && _v48.isDraftUpdated();
                          _v40.commitDraft(), _v42.commitDraft(), _v41.commitDraft(), _v48.commitDraft(), _v0 && _v29({
                            libraryType: _v90,
                            libraryFilterType: "type"
                          }), _v1 && _v29({
                            libraryType: _v90,
                            libraryFilterType: "privacy"
                          }), _v2 && _v29({
                            libraryType: _v90,
                            libraryFilterType: "type"
                          }), _v3 && _v29({
                            libraryType: _v90,
                            libraryFilterType: "created_by"
                          }), _v56(!1);
                        },
                        onClearFilters: () => {
                          _v139(), _v40.clearFilter(), _v42.clearFilter(), _v41.clearFilter(), _v48.clearFilter(), _v56(!1);
                        },
                        onClose: () => {
                          _v40.clearDraft(), _v42.clearDraft(), _v41.clearDraft(), _v48.clearDraft(), _v56(!1);
                        },
                        children: [(0, _v1.jsx)(_v55.MobileContentTypeFilter, {
                          filter: _v40.draft,
                          onToggle: _v0 => {
                            let _v1 = (0, _v62.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v39, _v40.draft, _v0, (0, _v51.isVideoAvailabilityFilterExplicitlyEngaged)(_v41.draft));
                            _v40.setSelection(_v1, !0), (0, _v62.doesSelectionIncludeVideos)(_v39, _v1) || _v41.setDraft(new Set());
                          },
                          options: _v39,
                          page: _v19,
                          isDisabled: _v51,
                          videoSubmenu: _v144
                        }), (0, _v1.jsx)(_v56.MobileClipPrivacyFilter, {
                          filter: [..._v42.draft],
                          onChange: _v0 => {
                            _v40.setSelection(new Set(["video"]), !0), _v42.updateFilterValues(_v0, !0);
                          },
                          options: _v42.options,
                          page: _v19,
                          isDisabled: _v54
                        }), !_v48.shouldHideFilter && (0, _v1.jsx)(_v57.MobileCreatedByFilter, {
                          filter: [..._v48.draft],
                          onChange: _v0 => {
                            _v40.setSelection(new Set(["video"]), !0), _v48.updateFilterValues(_v0, !0);
                          },
                          searchQuery: _v48.createdByUsersSearchTerm,
                          setSearchQuery: _v48.setCreatedByUsersSearchTerm,
                          options: _v48.createdByUsers,
                          page: _v19,
                          isDisabled: _v54,
                          isLoadingInitialData: _v48.membersLoadingInitialData,
                          isLoadingMore: _v48.membersLoadingMore,
                          isDone: _v48.membersDone,
                          onLoadMore: _v48.loadMoreMembers
                        })]
                      })]
                    }), !_v10 && _v96 && (0, _v1.jsxs)(_v1.Fragment, {
                      children: [_v52 && (0, _v1.jsx)(_v52.ClearAllFiltersButton, {
                        onClick: _v155
                      }), (0, _v1.jsx)(_v45.ContentTypeFilter, {
                        filter: _v40.value,
                        onToggleType: _v0 => {
                          _v139();
                          let _v1 = (0, _v62.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v39, _v40.value, _v0, (0, _v51.isVideoAvailabilityFilterExplicitlyEngaged)(_v41.value));
                          (0, _v62.areIdenticalSets)(_v1, _v40.value) || _v29({
                            libraryType: _v90,
                            libraryFilterType: "type"
                          }), _v40.setSelection(_v1), (0, _v62.doesSelectionIncludeVideos)(_v39, _v1) || _v41.clearFilter();
                        },
                        options: _v39,
                        page: _v19,
                        isDisabled: _v50,
                        videoSubmenu: _v143
                      }), (0, _v1.jsx)(_v46.ClipPrivacyTypeFilter, {
                        filter: [..._v42.value],
                        setFilter: _v0 => {
                          _v139(), _v40.setSelection(new Set(["video"])), _v42.updateFilterValues(_v0), _v29({
                            libraryType: _v90,
                            libraryFilterType: "privacy"
                          });
                        },
                        options: _v42.options,
                        page: _v19,
                        isDisabled: _v53
                      }), !_v111 && (0, _v1.jsx)(_v47.CreatedByFilter, {
                        filter: [..._v48.value],
                        setFilter: _v0 => {
                          _v139(), _v40.setSelection(new Set(["video"])), _v48.setFilterValues(_v0), _v29({
                            libraryType: _v90,
                            libraryFilterType: "created_by"
                          });
                        },
                        searchQuery: _v48.createdByUsersSearchTerm,
                        setSearchQuery: _v48.setCreatedByUsersSearchTerm,
                        options: _v48.createdByUsers,
                        page: _v19,
                        isDisabled: _v53,
                        isLoadingInitialData: _v48.membersLoadingInitialData,
                        isLoadingMore: _v48.membersLoadingMore,
                        isDone: _v48.membersDone,
                        onLoadMore: _v48.loadMoreMembers
                      })]
                    })]
                  }),
                  breadcrumbs: (0, _v1.jsx)(_v82, {}),
                  editableTitle: (0, _v1.jsx)(_v40.FolderEditableTitle, {
                    folderId: _v1,
                    folderOwnerId: (0, _v29.idFromUri)(_v75?.uri),
                    isEditing: _v97,
                    setCurrentTitle: _v100,
                    setIsEditingContentTitle: _v98,
                    value: _v131,
                    fontSize: {
                      base: "heading-lg",
                      md: "heading-xl"
                    },
                    fontWeight: "bold"
                  }),
                  isEditingTitle: _v97,
                  title: _v131
                }), _v150 && (0, _v1.jsx)(_v63.SelectAllBanner, {
                  folderName: _v131,
                  libraryType: _v90,
                  loadedSelectedCount: _v149,
                  totalVideosCount: _v147,
                  actualSelectedCount: _v151.isReady ? _v151.selectedItemURIs.size : void 0,
                  showSelectAllInFolderButton: _v147 <= _v128,
                  onSelectAllInFolder: _v146,
                  onClearSelection: _v139,
                  allInFolderEnabled: _v148
                }), "LIST_LAYOUT" === _v69 && 0 !== _v89 && (0, _v1.jsx)(_v43.BokehListHeader, {
                  setSort: _v72,
                  sort: _v71,
                  shouldShowPrivacy: !!_v75?.metadata?.interactions?.edit,
                  shouldShowFileSize: !0,
                  setDateDisplay: _v74,
                  dateDisplay: _v73
                })]
              }), _v75 && (0, _v1.jsx)(_v83.FolderShareLinkProvider, {
                folderShareLinkId: _v7,
                itemHref: _v8,
                children: (0, _v1.jsx)(_v181, {
                  threeSixtyType: _v108,
                  setThreeSixtyType: _v109,
                  canEditFolder: _v103,
                  folderData: _v75,
                  folderId: _v1,
                  layout: _v69,
                  playerAssetUrls: _v2,
                  sort: _v71,
                  userId: _v3,
                  viewer: _v4,
                  folderItems: _v134,
                  deselectAllItems: _v139,
                  selectItem: _v137,
                  deselectItem: _v138,
                  selectedItemURIs: _v61,
                  removeItemFromCacheByUri: _v0 => {
                    _v85(_v0 => _v0?.map(_v0 => ({
                      ..._v0,
                      data: _v0.data.filter(_v0 => !!_v0.folder || (_v0.liveEvent ? _v0.liveEvent.uri !== _v0 : _v0.video ? _v0.video.uri !== _v0 : !_v0.file || _v0.file.uri !== _v0))
                    })), !1);
                  },
                  removeMultipleItemsFromCacheByURI: _v154,
                  insertVideoCopyAfterOriginal: (_v0, _v1) => {
                    let _v2 = !1;
                    _v85(_v0 => {
                      let _v1 = (0, _v60.insertOptimisticVideoCopy)(_v0, _v0, _v1);
                      return _v2 = _v1.inserted, _v1.pages;
                    }, !1), !_v2 && _v75 && _v13(_v75.uri);
                  },
                  onFolderSettingsChange: ({
                    name: _v0,
                    settings: {
                      color: _v1
                    },
                    uri: _v2
                  }) => {
                    _v85(_v0 => _v0?.map(_v0 => ({
                      ..._v0,
                      data: _v0.data.map(_v0 => _v0.folder?.uri === _v2 ? {
                        ..._v0,
                        folder: {
                          ..._v0.folder,
                          name: _v0,
                          settings: {
                            ..._v0.folder.settings,
                            color: _v1
                          }
                        }
                      } : _v0)
                    })), !1);
                  },
                  isDone: _v91,
                  isLoadingMore: !!_v92,
                  onLoadMore: () => _v84(_v83 + 1),
                  disableUploads: _v78,
                  areFiltersApplied: _v52,
                  onMoreInfo: _v12
                })
              }), _v75 && (0, _v1.jsx)(_v185, {
                ..._v153,
                isLoading: _v152,
                canUseBulkTranslation: _v47,
                canAddToShowcases: !!_v18.canManageTeamCollections,
                canPublishContentToChina: _v18.regionalDeliveryPublishContentToChina,
                currentFolder: {
                  uri: _v75.uri,
                  isPrivateToUser: _v75.isPrivateToUser,
                  id: _v1
                },
                deselectAllItems: _v139,
                deselectItems: _v140,
                removeItems: _v154,
                teamOwnerId: _v4?.teamUser?.ownerId || _v3,
                revalidateItems: () => _v13(_v75.uri),
                eventData: {
                  page: _v19,
                  folder_id: _v1,
                  folder_share_status: _v75.privacy?.view === "anybody" ? "shared" : "not_shared",
                  is_private_to_me: _v75.isPrivateToUser,
                  is_subfolder: !!_v75.metadata?.connections?.parentFolder,
                  parent_folder_id: _v75.metadata?.connections?.parentFolder?.uri?.split("/").pop() ?? null
                }
              })]
            }), _v11 && (0, _v1.jsx)(_v41.Page.Panel, {
              children: (0, _v1.jsx)(_v186, {
                isOpen: !0,
                onClose: () => _v12(null),
                onVideoPrivacyChange: ({
                  view: _v0
                }) => _v86(_v11, _v0 => ({
                  ..._v0,
                  privacy: {
                    ..._v0.privacy,
                    view: _v0
                  }
                })),
                pageName: "video_library",
                uri: _v11
              })
            })]
          }), (0, _v1.jsx)(_v58.ViewerAiUpsellModal, {
            step: _v133 ? "closed" : _v21,
            onDismiss: _v22,
            onCtaClick: _v23,
            onErrorClose: _v24
          })]
        })
      }) : (0, _v1.jsx)(_v182, {});
    };
  _v0.s(["App", 0, _v0 => (0, _v1.jsx)(_v87, {
    folderId: _v0.folderId,
    viewer: _v0.viewer,
    children: (0, _v1.jsx)(_v187, {
      ..._v0
    }, _v0.folderId)
  })], 0);
  let _v188 = (0, _v4.createContext)({
    locale: "default"
  });
  _v0.s(["ConfigContext", 0, _v188], 0), _v0.s(["setCdnUrl", 0, _v0 => {}], 0);
}