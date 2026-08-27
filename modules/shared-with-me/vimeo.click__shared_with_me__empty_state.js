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
    _v34 = _v0.i(0);
  let _v35 = ({
    target: _v0
  }) => {
    _v33.BigPictureClient.sendEvent(new _v33.Event("vimeo.click", 150, {
      copy: null,
      feature: "shared_with_me",
      location: "empty_state",
      name: "click_shared_with_me_empty_state",
      page: "shared_with_me",
      path: "/shared-with-me",
      target: _v0,
      target_path: "manage_team" === _v0 ? "/manage/team/members" : "/library",
      type: "general",
      click_type: null,
      device_type: null,
      third_party_integration: null
    }));
  };
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = ({
      areFiltersApplied: _v0,
      hasSharedWithMeV2: _v1 = !1
    }) => {
      let _v2 = (0, _v32.useViewer)(),
        _v3 = (() => {
          let _v0 = (0, _v32.useViewer)(),
            {
              data: _v1
            } = (0, _v42.useGetUserFoldersRoot)(() => {
              let _v0 = _v0?.teamUser?.ownerId ?? _v0?.user?.id;
              return _v0 ? {
                where: {
                  userId: _v0
                },
                select: ["folder.name", "video.name"],
                query: {
                  perPage: 1
                }
              } : null;
            });
          return !!_v1?.data?.length;
        })(),
        {
          capabilities: _v4
        } = (0, _v3.useCapability)(["canAddTeamMembers"], _v2?.teamUser?.ownerId),
        {
          isTeamManagementVisible: _v5,
          loading: _v6
        } = (0, _v40.useTeamManagementVisible)(),
        _v7 = _v6 || _v5,
        _v8 = (_v2?.teamUser?.currentTeamSize || 0) > 0,
        _v9 = !!_v4.canAddTeamMembers && _v7;
      return (0, _v1.jsx)(_v9.Flex, {
        alignItems: "center",
        height: "33.75rem",
        justifyContent: "center",
        children: (0, _v1.jsx)(_v41.EmptyState, {
          header: (0, _v1.jsx)(_v44, {
            areFiltersApplied: _v0
          }),
          icon: _v1 ? (0, _v1.jsx)(_v39.SearchMagnifierFilled, {
            boxSize: "4rem"
          }) : (0, _v1.jsx)(_v38.Users, {
            boxSize: "4rem"
          }),
          subheader: (0, _v1.jsx)(_v45, {
            canManageTeam: _v9,
            isTeamManagementVisible: _v7,
            hasContent: _v3,
            hasTeamMembers: _v8,
            areFiltersApplied: _v0,
            hasSharedWithMeV2: _v1
          })
        })
      });
    },
    _v44 = ({
      areFiltersApplied: _v0
    }) => _v0 ? (0, _v1.jsx)(_v41.EmptyState.Header, {
      children: (0, _v12.translate)({
        singular: "No matching results",
        dictionary: {
          es: {
            singular: "No hay resultados coincidentes"
          },
          "de-DE": {
            singular: "Keine übereinstimmenden Ergebnisse"
          },
          "fr-FR": {
            singular: "Aucun résultat correspondant"
          },
          "ja-JP": {
            singular: "一致する結果がありません"
          },
          "ko-KR": {
            singular: "일치하는 결과가 없습니다."
          },
          "pt-BR": {
            singular: "Nenhum resultado correspondente"
          },
          "zh-CN": {
            singular: "无匹配结果"
          }
        }
      })
    }) : (0, _v1.jsx)(_v41.EmptyState.Header, {
      children: (0, _v12.translate)({
        singular: "Nothing has been shared with you yet",
        dictionary: {
          es: {
            singular: "No han compartido nada con usted todavía"
          },
          "de-DE": {
            singular: "Es wurde noch nichts mit Ihnen geteilt"
          },
          "fr-FR": {
            singular: "Aucun contenu n'a été partagé avec vous pour le moment"
          },
          "ja-JP": {
            singular: "まだ何も共有されていません"
          },
          "ko-KR": {
            singular: "공유된 콘텐츠가 없습니다."
          },
          "pt-BR": {
            singular: "Nada foi compartilhado com você ainda."
          },
          "zh-CN": {
            singular: "尚未与您分享任何内容"
          }
        }
      })
    }),
    _v45 = ({
      canManageTeam: _v0,
      isTeamManagementVisible: _v1,
      hasContent: _v2,
      hasTeamMembers: _v3,
      areFiltersApplied: _v4,
      hasSharedWithMeV2: _v5
    }) => _v4 && _v5 ? (0, _v1.jsx)(_v50, {}) : _v4 ? (0, _v1.jsx)(_v49, {}) : _v3 ? _v2 ? (0, _v1.jsx)(_v47, {}) : _v0 ? (0, _v1.jsx)(_v46, {}) : (0, _v1.jsx)(_v48, {}) : _v1 ? (0, _v1.jsx)(_v46, {}) : (0, _v1.jsx)(_v48, {}),
    _v46 = () => (0, _v1.jsx)(_v36.Text, {
      color: "text-secondary",
      variant: "body-lg",
      children: (0, _v12.translate)({
        singular: "Invite team members to start collaborating. {LINK}Manage team{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v37.Link, {
            href: "/manage/team",
            onClick: () => _v35({
              target: "manage_team"
            }),
            variant: "inline-secondary",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Invite a los miembros del equipo a que empiecen a colaborar. {LINK}Administrar el equipo{/LINK}"
          },
          "de-DE": {
            singular: "Laden Sie Teammitglieder ein, mit der Zusammenarbeit zu beginnen. {LINK}Team verwalten{/LINK}"
          },
          "fr-FR": {
            singular: "Invitez de nouveaux collaborateurs. {LINK}Gérer l'équipe{/LINK}"
          },
          "ja-JP": {
            singular: "チームメンバーを招待して共同作業を開始します。{LINK}チームを管理{/LINK}"
          },
          "ko-KR": {
            singular: "팀원을 초대하여 공동 작업을 시작하세요. {LINK}팀 관리하기{/LINK}"
          },
          "pt-BR": {
            singular: "Convide os membros da equipe para começar a colaborar. {LINK}Gerenciar equipe{/LINK}"
          },
          "zh-CN": {
            singular: "邀请团队成员开始协作。{LINK}管理团队{/LINK}"
          }
        }
      })
    }),
    _v47 = () => (0, _v1.jsx)(_v36.Text, {
      color: "text-secondary",
      variant: "body-lg",
      children: (0, _v12.translate)({
        singular: "Looking for team content? {LINK}Go to Team library{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v37.Link, {
            href: "/library",
            onClick: () => _v35({
              target: "video_library"
            }),
            variant: "inline-secondary",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "¿Busca contenido para el equipo? {LINK}Ir a la biblioteca del equipo{/LINK}"
          },
          "de-DE": {
            singular: "Suchen Sie nach Teaminhalten? {LINK}Zur Teambibliothek{/LINK}"
          },
          "fr-FR": {
            singular: "Vous recherchez du contenu concernant votre équipe ? {LINK}Accéder à la bibliothèque de l'équipe{/LINK}"
          },
          "ja-JP": {
            singular: "チームコンテンツをお探しですか？{LINK}チームライブラリをご覧ください{/LINK}"
          },
          "ko-KR": {
            singular: "팀 콘텐츠를 찾고 계신가요? {LINK}팀 라이브러리로 이동하기{/LINK}"
          },
          "pt-BR": {
            singular: "Procurando conteúdo para equipes? {LINK}Ir para a biblioteca da equipe{/LINK}"
          },
          "zh-CN": {
            singular: "查找团队内容？{LINK}前往团队视频库{/LINK}"
          }
        }
      })
    }),
    _v48 = () => (0, _v1.jsx)(_v36.Text, {
      color: "text-secondary",
      variant: "body-lg",
      children: (0, _v12.translate)({
        singular: "Keep track of all the videos shared with you",
        dictionary: {
          es: {
            singular: "Mantenga un registro de todos los videos compartidos con usted"
          },
          "de-DE": {
            singular: "Behalten Sie den Überblick über alle mit Ihnen geteilten Videos"
          },
          "fr-FR": {
            singular: "Gardez une trace de toutes les vidéos partagées avec vous"
          },
          "ja-JP": {
            singular: "共有されたすべての動画を追跡"
          },
          "ko-KR": {
            singular: "나와 공유된 모든 동영상을 추적하세요."
          },
          "pt-BR": {
            singular: "Acompanhe todos os vídeos compartilhados com você."
          },
          "zh-CN": {
            singular: "跟踪与您共享的所有视频"
          }
        }
      })
    }),
    _v49 = () => (0, _v1.jsx)(_v36.Text, {
      color: "text-secondary",
      variant: "body-lg",
      children: (0, _v12.translate)({
        singular: "Try selecting a different team",
        dictionary: {
          es: {
            singular: "Intente seleccionar otro equipo"
          },
          "de-DE": {
            singular: "Versuchen Sie, ein anderes Team auszuwählen"
          },
          "fr-FR": {
            singular: "Essayez de sélectionner une autre équipe"
          },
          "ja-JP": {
            singular: "別のチームを選択してください"
          },
          "ko-KR": {
            singular: "다른 팀을 선택해 보세요."
          },
          "pt-BR": {
            singular: "Tente selecionar outra equipe."
          },
          "zh-CN": {
            singular: "请尝试选择其他团队"
          }
        }
      })
    }),
    _v50 = () => (0, _v1.jsx)(_v36.Text, {
      color: "text-secondary",
      variant: "body-lg",
      children: (0, _v12.translate)({
        singular: "Try selecting a different filter",
        dictionary: {
          es: {
            singular: "Intente seleccionando un filtro diferente"
          },
          "de-DE": {
            singular: "Versuchen Sie, einen anderen Filter auszuwählen."
          },
          "fr-FR": {
            singular: "Essayez de sélectionner un autre filtre"
          },
          "ja-JP": {
            singular: "別のフィルターを選択してみてください"
          },
          "ko-KR": {
            singular: "다른 필터를 선택해보세요."
          },
          "pt-BR": {
            singular: "Tente selecionar um filtro diferente"
          },
          "zh-CN": {
            singular: "请尝试选择其他过滤器"
          }
        }
      })
    });
  var _v51 = _v0.i(0),
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
    _v63 = _v0.i(0);
  let _v64 = ({
      searchTerm: _v0,
      onClearClick: _v1,
      setSearchTerm: _v2
    }) => (0, _v1.jsxs)(_v60.InputGroup, {
      size: "md",
      width: "auto",
      marginBottom: "sm",
      children: [(0, _v1.jsx)(_v61.InputLeftElement, {
        children: (0, _v1.jsx)(_v62.SearchMagnifier, {
          height: (0, _v55.rem)(20),
          width: (0, _v55.rem)(20),
          color: "text-secondary"
        })
      }), (0, _v1.jsx)(_v59.Input, {
        placeholder: (0, _v12.translate)({
          singular: "Search",
          dictionary: {
            es: {
              singular: "Buscar"
            },
            "de-DE": {
              singular: "Suchen"
            },
            "fr-FR": {
              singular: "Chercher"
            },
            "ja-JP": {
              singular: "検索"
            },
            "ko-KR": {
              singular: "검색"
            },
            "pt-BR": {
              singular: "Pesquisar"
            },
            "zh-CN": {
              singular: "搜索"
            }
          }
        }),
        onChange: _v0 => _v2(_v0.currentTarget.value),
        role: "search",
        width: "100%",
        size: "md",
        variant: "filled",
        value: _v0 || ""
      }), !!_v0 && (0, _v1.jsx)(_v61.InputRightElement, {
        children: (0, _v1.jsx)(_v63.CloseXCircleFilled, {
          height: (0, _v55.rem)(20),
          width: (0, _v55.rem)(20),
          "aria-label": (0, _v12.translate)({
            singular: "Clear all",
            dictionary: {
              es: {
                singular: "Borrar todo"
              },
              "de-DE": {
                singular: "Alle löschen"
              },
              "fr-FR": {
                singular: "Tout supprimer"
              },
              "ja-JP": {
                singular: "すべて削除"
              },
              "ko-KR": {
                singular: "모두 지우기"
              },
              "pt-BR": {
                singular: "Limpar tudo"
              },
              "zh-CN": {
                singular: "清除全部"
              }
            }
          }),
          onClick: _v1,
          cursor: "pointer"
        })
      })]
    }),
    _v65 = ({
      filter: _v0,
      options: _v1,
      isDisabled: _v2 = !1,
      searchQuery: _v3 = "",
      onChange: _v4,
      setSearchQuery: _v5,
      clearFilterSearch: _v6
    }) => {
      let _v7 = (0, _v32.useViewer)(),
        _v8 = _v7?.teamUser,
        _v9 = 0 === _v0.length,
        _v10 = _v0.length > 1,
        _v11 = _v1.map(_v0 => ({
          name: _v0.name,
          userId: _v0.userId,
          avatarLink: _v0.avatarLink
        })),
        _v12 = 0 === _v11.length && "" !== _v3,
        _v13 = _v11.map(_v0 => (0, _v1.jsx)(_v52.Box, {
          "data-testid": `shared-by-filter-${_v0.userId}`,
          padding: "sm",
          alignContent: "center",
          _hover: {
            backgroundColor: "fill-component-hover",
            borderRadius: "0.5rem"
          },
          children: (0, _v1.jsx)(_v53.Checkbox, {
            borderRadius: "sm",
            width: "100%",
            size: "md",
            isChecked: _v0.some(_v0 => _v0.userId === _v0.userId),
            onChange: () => {
              _v4(_v0);
            },
            isDisabled: _v2,
            children: (0, _v1.jsxs)(_v54.HStack, {
              spacing: "sm",
              maxWidth: (0, _v55.rem)(210),
              overflow: "ellipsis",
              whiteSpace: "nowrap",
              children: [(0, _v1.jsx)(_v51.Avatar, {
                size: "sm",
                alt: (0, _v12.translate)({
                  singular: "Profile picture",
                  dictionary: {
                    es: {
                      singular: "Foto del perfil"
                    },
                    "de-DE": {
                      singular: "Profilbild"
                    },
                    "fr-FR": {
                      singular: "Photo de profil"
                    },
                    "ja-JP": {
                      singular: "プロフィール画像"
                    },
                    "ko-KR": {
                      singular: "프로필 이미지"
                    },
                    "pt-BR": {
                      singular: "Foto do perfil"
                    },
                    "zh-CN": {
                      singular: "个人资料图片"
                    }
                  }
                }),
                src: _v0.avatarLink,
                nameProps: {
                  name: _v0.name
                }
              }), (0, _v1.jsx)(_v36.Text, {
                variant: "body-md",
                isTruncated: !0,
                children: _v0.name
              })]
            })
          })
        }, _v0.userId));
      return (0, _v1.jsxs)(_v57.MobileFilter, {
        label: (0, _v58.sharedByFilterLabel)(_v10, _v9, _v0.length, _v0[0]?.name ?? ""),
        onOpen: () => {
          _v30.FilterBPEvents.sendOpenFilterEvent("shared_by", "shared_with_me", _v8, "mobile");
        },
        children: [(0, _v1.jsx)(_v52.Box, {
          paddingTop: "10px",
          children: (0, _v1.jsx)(_v64, {
            searchTerm: _v3,
            setSearchTerm: _v5,
            onClearClick: () => {
              _v5(""), _v6?.();
            }
          })
        }), (0, _v1.jsxs)(_v56.Stack, {
          maxHeight: (0, _v55.rem)(400),
          overflowY: "scroll",
          overflowX: "hidden",
          marginTop: "sm",
          children: [(0, _v1.jsx)(_v52.Box, {
            paddingTop: "sm",
            position: "relative",
            children: _v13
          }), _v12 && (0, _v1.jsxs)(_v52.Box, {
            padding: (0, _v55.rem)(30),
            textAlign: "center",
            children: [(0, _v1.jsx)(_v36.Text, {
              variant: "heading-sm",
              children: (0, _v12.translate)({
                singular: "No matching results",
                dictionary: {
                  es: {
                    singular: "No hay resultados coincidentes"
                  },
                  "de-DE": {
                    singular: "Keine übereinstimmenden Ergebnisse"
                  },
                  "fr-FR": {
                    singular: "Aucun résultat correspondant"
                  },
                  "ja-JP": {
                    singular: "一致する結果がありません"
                  },
                  "ko-KR": {
                    singular: "일치하는 결과가 없습니다."
                  },
                  "pt-BR": {
                    singular: "Nenhum resultado correspondente"
                  },
                  "zh-CN": {
                    singular: "无匹配结果"
                  }
                }
              })
            }), (0, _v1.jsx)(_v36.Text, {
              variant: "body-sm",
              color: "text-secondary",
              marginTop: (0, _v55.rem)(2),
              children: (0, _v12.translate)({
                singular: "Try another search",
                dictionary: {
                  es: {
                    singular: "Pruebe con otra búsqueda"
                  },
                  "de-DE": {
                    singular: "Versuchen Sie eine andere Suche"
                  },
                  "fr-FR": {
                    singular: "Essayez une autre recherche"
                  },
                  "ja-JP": {
                    singular: "別の検索をお試しください"
                  },
                  "ko-KR": {
                    singular: "다르게 검색해 보세요"
                  },
                  "pt-BR": {
                    singular: "Tente outra pesquisa"
                  },
                  "zh-CN": {
                    singular: "尝试其他搜索"
                  }
                }
              })
            })]
          })]
        })]
      });
    };
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = _v0 => (0, _v1.jsx)(_v53.Checkbox, {
    paddingX: "sm",
    borderRadius: "sm",
    width: "100%",
    size: "md",
    _hover: {
      backgroundColor: "fill-component-hover"
    },
    ..._v0
  });
  function _v74({
    name: _v0,
    avatarLink: _v1
  }) {
    return (0, _v1.jsxs)(_v54.HStack, {
      gap: "0",
      paddingY: "sm",
      children: [(0, _v1.jsx)(_v51.Avatar, {
        size: "sm",
        alt: (0, _v12.translate)({
          singular: "Profile picture",
          dictionary: {
            es: {
              singular: "Foto del perfil"
            },
            "de-DE": {
              singular: "Profilbild"
            },
            "fr-FR": {
              singular: "Photo de profil"
            },
            "ja-JP": {
              singular: "プロフィール画像"
            },
            "ko-KR": {
              singular: "프로필 이미지"
            },
            "pt-BR": {
              singular: "Foto do perfil"
            },
            "zh-CN": {
              singular: "个人资料图片"
            }
          }
        }),
        src: _v1,
        nameProps: {
          name: _v0
        }
      }), (0, _v1.jsx)(_v36.Text, {
        variant: "body-md",
        isTruncated: !0,
        marginLeft: "sm",
        children: _v0
      })]
    });
  }
  let _v75 = ({
    isLoading: _v0,
    clearFilterSearch: _v1,
    filter: _v2 = [],
    options: _v3,
    setFilter: _v4,
    searchQuery: _v5,
    setSearchQuery: _v6,
    onLoadMore: _v7,
    isLoadingMore: _v8 = !1,
    isDone: _v9 = !1,
    isLoadingInitialData: _v10 = !1
  }) => {
    let _v11 = (0, _v32.useViewer)(),
      _v12 = _v11?.teamUser,
      [_v13, _v14] = (0, _v8.useState)(!1),
      _v15 = (0, _v8.useRef)(null),
      _v16 = _v3.map(_v0 => ({
        name: _v0.name,
        userId: _v0.userId,
        avatarLink: _v0.avatarLink
      }));
    (0, _v71.useOutsideClick)({
      ref: _v15,
      handler: () => {
        _v14(!1);
      }
    });
    let _v17 = 0 === _v2.length,
      _v18 = _v2.length > 1,
      _v19 = _v2?.[0]?.name ?? "",
      _v20 = 0 === _v16.length && "" !== _v5;
    return (0, _v1.jsx)(_v52.Box, {
      children: (0, _v1.jsxs)(_v67.Menu, {
        isOpen: _v13,
        placement: "bottom-end",
        children: [(0, _v1.jsx)(_v68.MenuButton, {
          as: _v66.Button,
          rightIcon: (0, _v1.jsx)(_v72.ChevronDownSmall, {}),
          variant: "tertiary",
          onClick: () => {
            _v14(!0), _v30.FilterBPEvents.sendOpenFilterEvent("shared_by", "shared_with_me", _v12, "desktop");
          },
          children: (0, _v58.sharedByFilterLabel)(_v18, _v17, _v2.length, _v19)
        }), _v10 || !_v3 ? (0, _v1.jsx)(_v69.MenuList, {
          width: (0, _v55.rem)(300),
          height: (0, _v55.rem)(200),
          children: (0, _v1.jsx)(_v9.Flex, {
            justifyContent: "center",
            alignItems: "center",
            children: (0, _v1.jsx)(_v70.Spinner, {})
          })
        }) : (0, _v1.jsx)(_v69.MenuList, {
          width: (0, _v55.rem)(300),
          maxHeight: (0, _v55.rem)(400),
          position: "relative",
          children: (0, _v1.jsxs)(_v52.Box, {
            ref: _v15,
            children: [(0, _v1.jsx)(_v52.Box, {
              children: (0, _v1.jsx)(_v64, {
                searchTerm: _v5,
                setSearchTerm: _v6,
                onClearClick: () => {
                  _v6(""), _v1?.();
                }
              })
            }), (0, _v1.jsxs)(_v52.Box, {
              maxHeight: (0, _v55.rem)(280),
              overflowY: "auto",
              children: [_v16?.map(_v0 => (0, _v1.jsx)(_v73, {
                isChecked: _v2.some(_v0 => _v0.userId === _v0.userId),
                onChange: () => {
                  _v2.some(_v0 => _v0.userId === _v0.userId) ? _v4(_v2?.filter(_v0 => _v0.userId !== _v0.userId)) : _v4([..._v2, _v0]), _v30.FilterBPEvents.sendApplyFilterEvent("shared_by", "shared_with_me", _v12, "desktop");
                },
                children: (0, _v1.jsx)(_v74, {
                  name: _v0.name,
                  avatarLink: _v0.avatarLink
                })
              }, `shared-by-filter-${_v0.userId}`)), (0, _v1.jsxs)(_v9.Flex, {
                alignItems: "center",
                justifyContent: "center",
                children: [!_v9 && !_v8 && !_v20 && (0, _v1.jsx)(_v66.Button, {
                  variant: "tertiary",
                  rightIcon: (0, _v1.jsx)(_v72.ChevronDownSmall, {}),
                  onClick: () => {
                    _v8 || _v9 || !_v7 || _v7();
                  },
                  isLoading: _v8,
                  children: (0, _v12.translate)({
                    singular: "Load more",
                    dictionary: {
                      es: {
                        singular: "Cargar más"
                      },
                      "de-DE": {
                        singular: "Mehr laden"
                      },
                      "fr-FR": {
                        singular: "Afficher plus"
                      },
                      "ja-JP": {
                        singular: "もっとロードする"
                      },
                      "ko-KR": {
                        singular: "동영상 더 보기"
                      },
                      "pt-BR": {
                        singular: "Carregar mais"
                      },
                      "zh-CN": {
                        singular: "加载更多"
                      }
                    }
                  })
                }), _v8 && (0, _v1.jsx)(_v9.Flex, {
                  justifyContent: "center",
                  alignItems: "center",
                  children: (0, _v1.jsx)(_v70.Spinner, {
                    size: "sm",
                    margin: (0, _v55.rem)(8)
                  })
                })]
              }), _v20 && !_v8 && (0, _v1.jsx)(_v9.Flex, {
                height: (0, _v55.rem)(140),
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                children: (0, _v1.jsxs)(_v56.Stack, {
                  spacing: 8,
                  children: [(0, _v1.jsx)(_v36.Text, {
                    variant: "heading-sm",
                    children: (0, _v12.translate)({
                      singular: "No matching results",
                      dictionary: {
                        es: {
                          singular: "No hay resultados coincidentes"
                        },
                        "de-DE": {
                          singular: "Keine übereinstimmenden Ergebnisse"
                        },
                        "fr-FR": {
                          singular: "Aucun résultat correspondant"
                        },
                        "ja-JP": {
                          singular: "一致する結果がありません"
                        },
                        "ko-KR": {
                          singular: "일치하는 결과가 없습니다."
                        },
                        "pt-BR": {
                          singular: "Nenhum resultado correspondente"
                        },
                        "zh-CN": {
                          singular: "无匹配结果"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v36.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    children: (0, _v12.translate)({
                      singular: "Try another search",
                      dictionary: {
                        es: {
                          singular: "Pruebe con otra búsqueda"
                        },
                        "de-DE": {
                          singular: "Versuchen Sie eine andere Suche"
                        },
                        "fr-FR": {
                          singular: "Essayez une autre recherche"
                        },
                        "ja-JP": {
                          singular: "別の検索をお試しください"
                        },
                        "ko-KR": {
                          singular: "다르게 검색해 보세요"
                        },
                        "pt-BR": {
                          singular: "Tente outra pesquisa"
                        },
                        "zh-CN": {
                          singular: "尝试其他搜索"
                        }
                      }
                    })
                  })]
                })
              })]
            })]
          })
        })]
      })
    });
  };
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = ({
      setSort: _v0,
      sort: _v1
    }) => {
      let _v2 = _v0 => {
        _v0 === _v1.type && _v0({
          ..._v1,
          direction: "asc" === _v1.direction ? "desc" : "asc"
        }), _v0 !== _v1.type && _v0({
          ..._v1,
          type: _v0
        });
      };
      return (0, _v1.jsxs)(_v78.ContentRow, {
        listGridColumns: "1fr",
        disableHover: !0,
        sx: {
          ..._v81,
          gap: "0",
          padding: "0 0.75rem",
          backgroundColor: "fill-component",
          display: {
            base: "none",
            md: "grid"
          }
        },
        minHeight: "md",
        zIndex: "1",
        children: [(0, _v1.jsx)(_v78.ContentRow.Column, {
          children: (0, _v1.jsx)(_v36.Text, {
            variant: "heading-xs",
            children: (0, _v1.jsx)(_v66.Button, {
              color: "text-secondary",
              onClick: () => _v2("alphabetical"),
              rightIcon: "alphabetical" === _v1.type ? (0, _v1.jsx)(_v82, {
                direction: _v1.direction
              }) : void 0,
              size: "sm",
              variant: "tertiary",
              children: (0, _v12.translate)({
                singular: "Title",
                dictionary: {
                  es: {
                    singular: "Título"
                  },
                  "de-DE": {
                    singular: "Titel"
                  },
                  "fr-FR": {
                    singular: "Titre"
                  },
                  "ja-JP": {
                    singular: "タイトル"
                  },
                  "ko-KR": {
                    singular: "제목"
                  },
                  "pt-BR": {
                    singular: "Título"
                  },
                  "zh-CN": {
                    singular: "标题"
                  }
                }
              })
            })
          })
        }), (0, _v1.jsx)(_v78.ContentRow.Column, {
          hideAtWidth: _v79.ListColumnConfig.SharedBy.HideAtWidth,
          children: (0, _v1.jsx)(_v36.Text, {
            variant: "heading-xs",
            children: (0, _v1.jsx)(_v66.Button, {
              color: "text-secondary",
              onClick: () => _v2("shared_user_name"),
              rightIcon: "shared_user_name" === _v1.type ? (0, _v1.jsx)(_v82, {
                direction: _v1.direction
              }) : void 0,
              size: "sm",
              variant: "tertiary",
              children: (0, _v12.translate)({
                singular: "Shared by",
                dictionary: {
                  es: {
                    singular: "Compartido por"
                  },
                  "de-DE": {
                    singular: "Geteilt von"
                  },
                  "fr-FR": {
                    singular: "Partagé par"
                  },
                  "ja-JP": {
                    singular: "共有者"
                  },
                  "ko-KR": {
                    singular: "공유한 사람"
                  },
                  "pt-BR": {
                    singular: "Compartilhado por"
                  },
                  "zh-CN": {
                    singular: "分享者"
                  }
                }
              })
            })
          })
        }), (0, _v1.jsx)(_v78.ContentRow.Column, {
          hideAtWidth: _v79.ListColumnConfig.DateShared.HideAtWidth,
          children: (0, _v1.jsx)(_v66.Button, {
            color: "text-secondary",
            onClick: () => _v2("shared_date"),
            rightIcon: "shared_date" === _v1.type ? (0, _v1.jsx)(_v82, {
              direction: _v1.direction
            }) : void 0,
            size: "sm",
            variant: "tertiary",
            children: (0, _v12.translate)({
              singular: "Date shared",
              dictionary: {
                es: {
                  singular: "Fecha compartida"
                },
                "de-DE": {
                  singular: "Geteiltes Datum"
                },
                "fr-FR": {
                  singular: "Date partagée"
                },
                "ja-JP": {
                  singular: "共有日"
                },
                "ko-KR": {
                  singular: "공유한 날짜"
                },
                "pt-BR": {
                  singular: "Compartilhado em"
                },
                "zh-CN": {
                  singular: "分享日期"
                }
              }
            })
          })
        })]
      });
    },
    _v81 = {
      [`@media screen and (min-width: ${_v79.ListColumnConfig.DateShared.HideAtWidth})`]: {
        gridTemplateColumns: "1fr 15rem"
      },
      [`@media screen and (min-width: ${_v79.ListColumnConfig.SharedBy.HideAtWidth})`]: {
        gridTemplateColumns: "1fr 15rem 15rem"
      }
    },
    _v82 = ({
      direction: _v0
    }) => "asc" === _v0 ? (0, _v1.jsx)(_v77.ArrowUp, {}) : (0, _v1.jsx)(_v76.ArrowDown, {});
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = ({
    isLoading: _v0,
    onChange: _v1,
    options: _v2 = [],
    value: _v3,
    hasSharedWithMeV2: _v4,
    teamFilterAllOption: _v5
  }) => {
    let _v6 = (0, _v32.useViewer)(),
      _v7 = _v6?.teamUser,
      _v8 = _v2.find(_v0 => _v0.value === _v3) || _v5;
    return (0, _v1.jsxs)(_v67.Menu, {
      isLazy: !0,
      placement: "bottom-end",
      children: [(0, _v1.jsx)(_v68.MenuButton, {
        as: _v66.Button,
        "data-id": "shared_with_me_team_filter",
        rightIcon: (0, _v1.jsx)(_v72.ChevronDownSmall, {}),
        variant: "tertiary",
        onClick: () => {
          _v4 ? _v30.FilterBPEvents.sendOpenFilterEvent("team", "shared_with_me", _v7, "desktop") : _v33.BigPictureClient.sendEvent(new _v33.Event("vimeo.click", 150, {
            copy: "all teams",
            feature: "shared_with_me",
            location: "subheader",
            name: "filter_shared_with_me_team",
            page: "shared_with_me",
            path: "/shared-with-me",
            target: "filter popup",
            target_path: null,
            type: "general",
            click_type: null,
            device_type: null,
            third_party_integration: null
          }));
        },
        children: _v8.label
      }), (0, _v1.jsxs)(_v69.MenuList, {
        children: [(0, _v1.jsx)(_v83.MenuGroup, {
          children: _v2.map(_v0 => (0, _v1.jsx)(_v84.MenuItemOption, {
            isChecked: _v8.value === _v0.value,
            onClick: () => {
              _v1(_v0.value), _v4 ? _v30.FilterBPEvents.sendApplyFilterEvent("team", "shared_with_me", _v7, "desktop") : (({
                isTeamSelected: _v0
              }) => {
                _v33.BigPictureClient.sendEvent(new _v33.Event("vimeo.click", 150, {
                  copy: _v0 ? null : "all",
                  feature: "shared_with_me",
                  location: "subheader",
                  name: "apply_filter_shared_with_me_team",
                  page: "shared_with_me",
                  path: "/shared-with-me",
                  target: null,
                  target_path: null,
                  type: "general",
                  click_type: null,
                  device_type: null,
                  third_party_integration: null
                }));
              })({
                isTeamSelected: _v0.value !== _v5.value
              });
            },
            children: _v0.label
          }, _v0.value))
        }), _v0 && (0, _v1.jsx)(_v9.Flex, {
          justifyContent: "center",
          paddingTop: ".5rem",
          children: (0, _v1.jsx)(_v70.Spinner, {
            size: "sm"
          })
        })]
      })]
    });
  };
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0);
  async function _v91({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v89.measureLatency)("getUserTeamsSharedMembers", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/teams/shared/members?${(0, _v90.searchQueryString)(_v3)}&fields=${_v1.map(_v90.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v90.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v90.deepCamelCase)(_v1);
    });
  }
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0);
  function _v97(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v96.useGctlConfig)();
    return (0, _v95.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/teams/shared/members?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v91({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }
  "true" === _v88.default.env.STORYBOOK && (0, _v94.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v96.useGctlConfig)();
    return (0, _v92.default)(_v2 ? `/users/${_v2.where.userId}/teams/shared/members${(0, _v94.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v91({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/teams/shared/members",
    method: "GET"
  }), "true" === _v88.default.env.STORYBOOK && (0, _v94.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v93.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v96.useGctlConfig)(),
      [_v5, _v6] = (0, _v94.useInternalState)();
    return [(0, _v8.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/teams/shared/members${(0, _v94.serializeQuery)(_v0)}`, _v91({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/users/:userId/teams/shared/members",
    method: "GET"
  }), "true" === _v88.default.env.STORYBOOK && (0, _v94.assignMswData)(_v97, {
    endpoint: "/users/:userId/teams/shared/members",
    method: "GET"
  });
  let _v98 = () => {
    let _v0 = (0, _v32.useViewer)(),
      {
        data: _v1,
        error: _v2,
        isLoading: _v3,
        setSize: _v4,
        size: _v5
      } = _v97(() => _v0?.user?.id ? {
        where: {
          userId: _v0.user.id
        },
        select: _v79.API_SHARED_TEAM_MEMBERS_FIELDS,
        query: {
          perPage: _v79.MEMBER_ITEMS_PER_PAGE
        }
      } : null),
      {
        isDone: _v6,
        isLoadingMore: _v7,
        isLoadingInitialData: _v8
      } = (0, _v14.getInfiniteRequestLoadingState)({
        data: _v1,
        error: _v2,
        size: _v5,
        itemsPerPage: _v79.MEMBER_ITEMS_PER_PAGE
      });
    return {
      users: (0, _v8.useMemo)(() => {
        let _v0 = new Set(),
          _v1 = [];
        return _v1 && _v1.forEach(_v0 => {
          _v0?.data.forEach(_v0 => {
            let _v1 = _v0?.uri?.split("/").pop(),
              _v2 = !!_v0?.name && _v0?.name.length > 0,
              _v3 = _v0.has(_v1),
              _v4 = _v0?.pictures?.sizes ? _v0.pictures.sizes[0].link : "";
            _v2 && !_v3 && (_v0.add(_v1), _v1.push({
              name: _v0?.name || "",
              userId: _v1,
              avatarLink: _v4
            }));
          });
        }), _v1;
      }, [_v1]),
      error: _v2,
      isLoading: _v3,
      isLoadingMore: _v7,
      isLoadingInitialData: _v8,
      isDone: _v6,
      setSize: _v4,
      size: _v5
    };
  };
  var _v99 = _v0.i(0);
  let _v100 = () => {
    let _v0 = (0, _v32.useViewer)(),
      {
        data: _v1,
        isLoading: _v2
      } = (0, _v99.useGetUserWorkspaces)(() => _v0?.user?.id ? {
        where: {
          userId: _v0.user.id
        },
        select: ["displayName", "teamOwnerId", "uri"]
      } : null),
      _v3 = _v1?.data,
      _v4 = {};
    return _v3 && (_v4 = _v3.reduce((_v0, _v1) => (_v0[_v1.uri] = _v1.displayName, _v0), {})), {
      isLoading: _v2,
      getTeamOrWorkspaceNameByOwnerUri: function (_v0) {
        return _v4[_v0] ?? "";
      },
      teamsAndWorkspaces: _v3
    };
  };
  var _v101 = _v0.i(0);
  let _v102 = (0, _v7.default)(async () => {
      let {
        SharedItems: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v103 = ["video", "folder", "showcase"];
  function _v104() {
    let _v0 = (0, _v32.useViewer)(),
      _v1 = _v0?.teamUser,
      _v2 = (0, _v10.useIsMobile)(),
      [_v3, _v4] = (0, _v8.useState)(!1),
      [_v5, _v6] = (0, _v8.useState)({
        isOpen: !1,
        teamName: ""
      }),
      [_v7, _v8] = (0, _v16.useLayoutPreference)(),
      [_v9, _v10] = (0, _v17.useSortPreference)(_v79.DEFAULT_SORT, _v18.VL_SWM_SORT_LOCAL_STORAGE_KEY),
      _v11 = function () {
        let {
            isLoading: _v0,
            teamsAndWorkspaces: _v1
          } = _v100(),
          _v2 = _v1 ? _v1.map(_v0 => ({
            label: _v0?.displayName ?? "",
            value: _v0?.teamOwnerId.toString() ?? ""
          })) : [],
          _v3 = {
            label: _v1?.some(_v0 => _v0?.uri.includes("workspaces")) ? _v79.TEAM_FILTER_ALL_WORKSPACES_OPTION_LABEL : _v79.TEAM_FILTER_ALL_TEAMS_OPTION_LABEL,
            value: _v79.TEAM_FILTER_ALL_OPTION_VALUE
          },
          _v4 = [_v3, ..._v2];
        return {
          ...(0, _v87.useFilter)({
            initialValue: _v3.value
          }),
          options: _v4,
          isLoading: _v0,
          teamFilterAllOption: _v3
        };
      }(),
      _v12 = (0, _v25.useContentTypeFilter)([..._v103]),
      _v13 = (() => {
        let _v0 = (0, _v87.useFilter)({
            initialValue: new Set()
          }),
          {
            users: _v1
          } = _v98(),
          [_v2, _v3] = (0, _v8.useState)(""),
          [_v4, _v5] = (0, _v8.useState)(_v1),
          _v6 = (0, _v86.useDebouncedValue)(_v2, 500);
        (0, _v8.useEffect)(() => {
          let _v0 = _v6.trim();
          _v0.length > 0 ? _v5(_v1.filter(_v0 => _v0.name.toLowerCase().includes(_v0.toLowerCase()))) : _v5(_v1);
        }, [_v6, _v1]);
        let _v7 = _v0.draft.size > 0,
          _v8 = _v0.value.size > 0,
          _v9 = _v1.length > 1,
          _v10 = _v2.length > 0 ? _v4 : _v1;
        return {
          ..._v0,
          setFilterValues: (_v0, _v1) => {
            let _v2 = new Set(_v0);
            _v0.setDraft(_v2), _v1 || _v0.setValue(_v2);
          },
          updateFilterValues: (_v0, _v1) => {
            let _v2 = Array.from(_v0.value),
              _v3 = Array.from(_v0.draft),
              _v4 = _v2.map(_v0 => _v0.userId),
              _v5 = _v3.map(_v0 => _v0.userId);
            if (_v1) {
              let _v0 = _v5.includes(_v0.userId) ? _v3.filter(_v0 => _v0.userId !== _v0.userId) : [..._v3, _v0];
              _v0.setDraft(new Set(_v0));
            } else {
              let _v0 = _v4.includes(_v0.userId) ? _v2.filter(_v0 => _v0.userId !== _v0.userId) : [..._v2, _v0];
              _v0.setDraft(new Set(_v0)), _v0.setValue(new Set(_v0));
            }
          },
          clearFilter: () => {
            _v0.setDraft(new Set()), _v0.setValue(new Set()), _v3("");
          },
          searchTerm: _v2,
          setSearchTerm: _v3,
          isFilterActive: _v8,
          isDraftActive: _v7,
          isDraftUpdated: () => {
            let _v0 = Array.from(_v0.value),
              _v1 = Array.from(_v0.draft),
              _v2 = _v0.map(_v0 => _v0.userId),
              _v3 = _v1.map(_v0 => _v0.userId);
            return _v2.length !== _v3.length || !_v2.every(_v0 => _v3.includes(_v0));
          },
          hasSharedTeamMembers: _v9,
          users: _v10
        };
      })(),
      _v14 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
      {
        capabilities: _v15
      } = (0, _v3.useCapability)(["hasSharedWithMeVersionTwo"]),
      _v16 = _v12.isFilterApplied || _v11.isFilterApplied || _v13.isFilterActive,
      {
        teamsAndWorkspaces: _v17,
        isLoading: _v18,
        getTeamOrWorkspaceNameByOwnerUri: _v19
      } = _v100(),
      {
        isLoading: _v20,
        setSize: _v21,
        isLoadingInitialData: _v22,
        isLoadingMore: _v23,
        isDone: _v24
      } = _v98(),
      _v25 = [..._v13.value].flat(),
      _v26 = _v25.length > 0 ? _v25.map(_v0 => _v0.userId).join(",") : void 0,
      _v27 = (0, _v31.getContentTypeApiFilterParam)(_v103, _v12.value),
      {
        data: _v28,
        error: _v29,
        setSize: _v30,
        size: _v31
      } = (0, _v11.useGetUserTeamsSharedItemsInfinite)(() => {
        if (!_v0?.user?.id) return null;
        let _v0 = "all" === _v11.value ? void 0 : _v11.value;
        return {
          where: {
            userId: _v0.user.id
          },
          select: _v79.API_SHARED_ITEMS_FIELDS,
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.1"
          },
          query: {
            noPadding: !0,
            perPage: _v79.ITEMS_PER_PAGE,
            sort: _v9.type,
            direction: _v9.direction,
            teamOwnerId: _v0,
            resourceType: _v27,
            sharedByFilterIds: _v26
          }
        };
      }),
      {
        isDone: _v32,
        isLoadingInitialData: _v33,
        isLoadingMore: _v34
      } = (0, _v14.getInfiniteRequestLoadingState)({
        data: _v28,
        error: _v29,
        size: _v31,
        itemsPerPage: _v79.ITEMS_PER_PAGE
      }),
      _v35 = (0, _v8.useCallback)(() => {
        _v30(_v0 => _v0 + 1);
      }, [_v30]),
      _v36 = (0, _v8.useCallback)(() => {
        _v21(_v0 => _v0 + 1);
      }, [_v21]),
      _v37 = _v28?.[0]?.total,
      _v38 = _v12.isFilterApplied && void 0 === _v27,
      _v39 = (0, _v8.useMemo)(() => {
        if (!_v28) return;
        let _v0 = _v28.flatMap(_v0 => _v0.data);
        return _v38 ? _v0.filter(_v0 => (0, _v31.passesContentTypeSelection)(_v0, _v103, _v12.value)) : _v0;
      }, [_v12.value, _v28, _v38]),
      _v40 = !_v33 && (!_v39 || 0 === _v39.length),
      _v41 = "all" !== _v11.value || _v12.isFilterApplied || _v13.isFilterActive;
    (0, _v8.useEffect)(() => {
      _v2 || _v4(!1);
    }, [_v2]);
    let _v42 = () => {
      _v12.clearFilter(), _v11.clearFilter(), _v13.clearFilter();
    };
    return (0, _v1.jsx)(_v26.Page, {
      children: (0, _v1.jsxs)(_v26.Page.Main, {
        children: [(0, _v1.jsxs)(_v26.Page.StickyTop, {
          children: [(0, _v1.jsx)(_v27.PageHeader, {
            bottomBar: (0, _v1.jsxs)(_v15.FilterSortBar, {
              checkbox: (0, _v1.jsx)(_v28.CheckboxItemCount, {
                isLoading: _v33,
                subtitle: !!_v37 && (_v41 ? (0, _v58.numResultsText)(_v37) : (0, _v58.numItemsText)(_v37))
              }),
              layout: _v7,
              setLayout: _v8,
              setSort: _v10,
              shouldHideViewControls: _v40 && !_v16,
              sortOptions: _v18.SHARED_WITH_ME_SORT_OPTIONS,
              sort: _v9,
              sortTriggerDataId: "shared_with_me_sort",
              children: [!_v2 && (0, _v1.jsxs)(_v1.Fragment, {
                children: [_v15.hasSharedWithMeVersionTwo && _v16 && (0, _v1.jsx)(_v29.ClearAllFiltersButton, {
                  onClick: _v42
                }), (0, _v1.jsx)(_v85, {
                  isLoading: _v18,
                  onChange: _v0 => _v11.setValue(_v0),
                  options: _v11.options,
                  value: _v11.value,
                  teamFilterAllOption: _v11.teamFilterAllOption
                }), _v15.hasSharedWithMeVersionTwo && (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v24.ContentTypeFilter, {
                    filter: _v12.value,
                    onToggleType: _v0 => {
                      _v12.toggle(_v0);
                    },
                    options: _v103,
                    page: "shared-with-me"
                  }), _v13.hasSharedTeamMembers && (0, _v1.jsx)(_v75, {
                    isLoading: _v20,
                    isLoadingInitialData: _v22,
                    isLoadingMore: _v23,
                    isDone: _v24,
                    filter: _v25,
                    setFilter: _v0 => {
                      _v13.setFilterValues(_v0);
                    },
                    options: _v13.users,
                    setSearchQuery: _v13.setSearchTerm,
                    searchQuery: _v13.searchTerm,
                    onLoadMore: _v36
                  })]
                })]
              }), _v2 && (0, _v1.jsxs)(_v9.Flex, {
                children: [(0, _v1.jsx)(_v21.MobileFilterButton, {
                  isFilterApplied: _v41,
                  onClick: () => {
                    _v4(!0);
                  }
                }), (0, _v1.jsxs)(_v22.MobileFilterDrawer, {
                  defaultIndex: _v15.hasSharedWithMeVersionTwo ? void 0 : [0],
                  isFilterApplied: _v41,
                  isOpen: _v3,
                  onApplyFilters: () => {
                    let _v0, _v1, _v2;
                    _v11.commitDraft(), _v12.commitDraft(), _v13.commitDraft(), _v0 = "all" !== _v11.draft && _v11.draft !== _v11.value, _v1 = !(0, _v31.areIdenticalSets)(_v12.draft, _v12.value), _v2 = _v13.isDraftActive && _v13.isDraftUpdated(), _v0 && _v30.FilterBPEvents.sendApplyFilterEvent("team", "shared_with_me", _v1, "mobile"), _v1 && _v30.FilterBPEvents.sendApplyFilterEvent("content_type", "shared_with_me", _v1, "mobile"), _v2 && _v30.FilterBPEvents.sendApplyFilterEvent("shared_by", "shared_with_me", _v1, "mobile"), _v4(!1);
                  },
                  onClearFilters: () => {
                    _v42(), _v4(!1);
                  },
                  onClose: () => {
                    _v11.clearDraft(), _v12.clearDraft(), _v13.clearDraft(), _v4(!1);
                  },
                  children: [(0, _v1.jsx)(_v23.MobileTeamFilter, {
                    isFilterApplied: _v11.isFilterApplied,
                    onChange: _v11.setDraft,
                    options: _v11.options,
                    value: _v11.draft
                  }), _v15.hasSharedWithMeVersionTwo && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v20.MobileContentTypeFilter, {
                      filter: _v12.draft,
                      onToggle: _v0 => {
                        let _v1 = (0, _v31.toggleContentTypeSelection)(_v103, _v12.draft, _v0);
                        _v12.setSelection(_v1, !0);
                      },
                      options: _v103,
                      page: "shared-with-me"
                    }), (0, _v1.jsx)(_v65, {
                      filter: [..._v13.draft],
                      onChange: _v0 => {
                        _v13.updateFilterValues(_v0, !0);
                      },
                      searchQuery: _v13.searchTerm,
                      setSearchQuery: _v13.setSearchTerm,
                      options: _v13.users
                    })]
                  })]
                })]
              })]
            }),
            title: (0, _v12.translate)({
              singular: "Shared with me",
              dictionary: {
                es: {
                  singular: "Compartidos conmigo"
                },
                "de-DE": {
                  singular: "Mit mir geteilt"
                },
                "fr-FR": {
                  singular: "Partagée avec moi"
                },
                "ja-JP": {
                  singular: "共有作品"
                },
                "ko-KR": {
                  singular: "나와 공유된 파일"
                },
                "pt-BR": {
                  singular: "Compartilhado comigo"
                },
                "zh-CN": {
                  singular: "与我分享"
                }
              }
            })
          }), "LIST_LAYOUT" === _v7 && !_v40 && (0, _v1.jsx)(_v80, {
            setSort: _v10,
            sort: _v9
          })]
        }), !_v40 && (0, _v1.jsx)(_v102, {
          isLoading: !!_v34,
          items: _v39,
          layout: _v7,
          onClickItem: (_v0, _v1, _v2) => {
            if ("video" === _v2 && (({
              layout: _v0,
              location: _v1
            }) => {
              _v33.BigPictureClient.sendEvent(new _v33.Event("vimeo.click_video_card", 2, {
                path: "/shared-with-me",
                entry_page: "shared-with-me",
                page: "shared_with_me",
                layout: _v0,
                location: _v1,
                product: "shared with me",
                actor_resource_role: null,
                actor_team_role: null,
                is_preset_applied: null,
                is_video_password_protected: null,
                position_column: null,
                position_row: null,
                target: null,
                team_owner_id: null,
                team_size: null,
                team_subscription_type: null,
                video_app_id: null,
                video_embed_privacy: null,
                video_id: null,
                video_privacy: null,
                video_type: null
              }));
            })({
              layout: "LIST_LAYOUT" === _v7 ? "list" : "grid",
              location: "LIST_LAYOUT" === _v7 ? "video list" : "video card"
            }), "folder" === _v2 && (({
              layout: _v0,
              location: _v1
            }) => {
              _v33.BigPictureClient.sendEvent(new _v33.Event("vimeo.click_folder_card", 3, {
                path: "/shared-with-me",
                entry_page: "shared-with-me",
                page: "shared_with_me",
                layout: _v0,
                location: _v1,
                product: "shared with me",
                actor_resource_role: null,
                actor_team_role: null,
                position_column: null,
                position_row: null,
                team_owner_id: null,
                team_size: null,
                team_subscription_type: null,
                customizations: null,
                folder_id: null,
                folder_share_status: null,
                is_private_to_me: null,
                is_subfolder: null,
                parent_folder_id: null
              }));
            })({
              layout: "LIST_LAYOUT" === _v7 ? "list" : "grid",
              location: "LIST_LAYOUT" === _v7 ? "folder_list" : "folder_card"
            }), "showcase" === _v2 && (({
              layout: _v0,
              showcase_id: _v1,
              teamUser: _v2
            }) => {
              let _v3 = _v34.BPEventService.init(_v2);
              _v3.withTeamCtx().withActionCtx().withThirdPartyIntegrationCtx().withProductAnalyticsCtx({
                feature: "library",
                location: "grid" === _v0 ? "showcase_card" : "showcase_list",
                product: "video_library",
                copy: null,
                element: "grid" === _v0 ? "card" : "list"
              }).withWebCtx({
                target: "showcase_library"
              }), _v3.send({
                eventName: "vimeo.click_showcase",
                version: 1,
                additionalFields: {
                  layout: _v0,
                  showcase_id: _v1
                }
              });
            })({
              layout: "LIST_LAYOUT" === _v7 ? "list" : "grid",
              showcase_id: (0, _v101.idFromUri)(_v1.uri).toString()
            }), _v0 && _v14 && _v17) _v14 !== (0, _v101.idFromUri)(_v1.user.uri) && _v17.some(_v0 => _v0.uri === _v1.user.uri) && (_v0.preventDefault(), _v6({
              isOpen: !0,
              teamName: _v19(_v1.user.uri)
            }), fetch("/manage/videos?action=SWITCH_TEAMS", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
              },
              body: JSON.stringify({
                team_owner_id: (0, _v101.idFromUri)(_v1.user.uri),
                token: _v0.xsrft
              })
            }).finally(() => {
              window.location.href = _v1.manageLink ?? _v1.link;
            }));
          },
          setSort: _v10,
          sort: _v9,
          hasSharedWithMeV2: _v15?.hasSharedWithMeVersionTwo
        }), _v40 && (0, _v1.jsx)(_v43, {
          areFiltersApplied: "all" !== _v11.value || _v12.isFilterApplied,
          hasSharedWithMeV2: _v15?.hasSharedWithMeVersionTwo
        }), !_v32 && !_v34 && (0, _v1.jsx)(_v19.InfiniteScrollTrigger, {
          isLoading: !!_v34,
          onLoadMore: _v35
        }), (0, _v1.jsx)(_v13.TeamSwitchingModal, {
          isOpen: _v5.isOpen,
          onClose: () => _v6({
            isOpen: !1,
            teamName: ""
          }),
          teamName: _v5.teamName
        })]
      })
    });
  }
  var _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0);
  let _v108 = () => {
    let _v0 = (0, _v32.useViewer)(),
      {
        capabilities: _v1,
        error: _v2
      } = (0, _v3.useCapability)(_v0?.team?.ownerId ? ["hasSharedWithMe"] : [], _v0?.team?.ownerId);
    return _v0 && void 0 !== _v1.hasSharedWithMe ? _v2 || !1 === _v1.hasSharedWithMe ? (0, _v1.jsx)(_v105.ErrorPage, {
      error: new _v4.ResourceNotFoundError()
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v2.default, {
        children: (0, _v1.jsx)("title", {
          children: (0, _v6.translate)({
            singular: "Shared with me on Vimeo",
            dictionary: {
              es: {
                singular: "Compartido conmigo en Vimeo"
              },
              "de-DE": {
                singular: "Mit mir auf Vimeo geteilt"
              },
              "fr-FR": {
                singular: "Partagé avec moi sur Vimeo"
              },
              "ja-JP": {
                singular: "Vimeoでの共有作品"
              },
              "ko-KR": {
                singular: "Vimeo에서 나에게 공유됨"
              },
              "pt-BR": {
                singular: "Compartilhado comigo no Vimeo"
              },
              "zh-CN": {
                singular: "在 Vimeo 上与我分享"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v104, {})]
    }) : null;
  };
  (0, _v5.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0
    }
  }), {
    requireLogin: !0,
    inlineViewer: !0
  }), _v108.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v107.VideoLibraryLayout, {
    hasSideNav: !0,
    sideNavContent: (0, _v1.jsx)(_v106.SideNavContent, {
      surface: "home"
    }),
    sideNavSurface: "home",
    hasUploader: _v1.hasUploader,
    searchContentAlignment: _v26.VIDEO_LIBRARY_PAGE_SEARCH_CONTENT_ALIGNMENT,
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v108], 0);
}