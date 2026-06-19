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
    _v77 = _v0.i(0);
  let _v78 = ({
      layout: _v0,
      isLoading: _v1,
      onLoadMore: _v2
    }) => {
      let _v3 = (0, _v5.useRef)(null),
        _v4 = (0, _v77.useOnScreen)(_v3);
      return ((0, _v5.useEffect)(() => {
        _v4 && !_v1 && _v2();
      }, [_v1, _v4, _v2]), _v0 === _v47.LAYOUT.LIST) ? (0, _v1.jsx)(_v74.Box, {
        height: "10rem",
        ref: _v3,
        children: (0, _v1.jsx)(_v76.LoadingStateList, {})
      }) : (0, _v1.jsx)(_v74.Box, {
        height: "10rem",
        ref: _v3
      });
    },
    _v79 = _v0 => {
      let {
        layout: _v1,
        isLoadingMore: _v2,
        canLoadMore: _v3 = !1,
        onActivate: _v4,
        isDropzoneEnabled: _v5 = !1,
        page: _v6 = ""
      } = _v0;
      return _v3 ? (0, _v1.jsx)(_v78, {
        layout: _v1,
        isLoading: _v2,
        onLoadMore: _v4
      }) : _v5 && !_v2 ? (0, _v1.jsx)(_v75.UploadDropzoneHint, {
        page: _v6
      }) : (0, _v1.jsx)(_v74.Box, {
        margin: "2.5rem 0 3rem",
        padding: "0 1.25rem"
      });
    };
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0);
  let _v93 = _v0 => (0, _v1.jsx)(_v92.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H9.004a1 1 0 1 0 0 2h5.587l-8.295 8.285a1 1 0 0 0 0 1.42.999.999 0 0 0 1.42 0L16 9.408v5.587a1 1 0 0 0 1.999 0V7a.999.999 0 0 0-.08-.38Z",
        fill: "currentColor"
      })
    }),
    _v94 = _v0 => (0, _v1.jsx)(_v92.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsxs)("g", {
        fill: "currentColor",
        children: [(0, _v1.jsx)("path", {
          d: "M12.38 9.58a1 1 0 0 1 .33.21l2 2a.998.998 0 0 1 0 1.42.997.997 0 0 1-1.095.219.998.998 0 0 1-.325-.219l-.29-.3v2.59a1 1 0 1 1-2 0v-2.59l-.29.3a1.004 1.004 0 1 1-1.42-1.42l2-2a1 1 0 0 1 .33-.21 1 1 0 0 1 .76 0Z"
        }), (0, _v1.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10.224 6.055C10.021 6.006 9.794 6 9.012 6H7.8c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.82C4 8.361 4 8.942 4 9.8v4.4c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C6.361 18 6.943 18 7.8 18h8.4c.857 0 1.439 0 1.889-.038.438-.035.663-.1.819-.18a2 2 0 0 0 .874-.874c.08-.156.145-.38.18-.819.037-.45.038-1.032.038-1.889v-2.4c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C17.639 8 17.057 8 16.2 8H13a1 1 0 0 1-.707-.293l-.594-.594c-.553-.552-.718-.709-.897-.818a2.002 2.002 0 0 0-.578-.24ZM9.114 4c.635 0 1.114 0 1.577.11a4 4 0 0 1 1.156.48c.406.248.745.588 1.194 1.037l.072.072.301.301h2.827c.805 0 1.47 0 2.01.044.563.046 1.08.145 1.565.392a4 4 0 0 1 1.748 1.748c.247.485.346 1.002.392 1.564.044.541.044 1.206.044 2.01v2.483c0 .805 0 1.47-.044 2.01-.046.563-.145 1.08-.392 1.565a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 15.71 2 15.046 2 14.242V9.758c0-.805 0-1.47.044-2.01.046-.563.145-1.08.392-1.565a4 4 0 0 1 1.748-1.748c.485-.247 1.002-.346 1.564-.392C6.29 4 6.954 4 7.758 4h1.356Z"
        })]
      })
    });
  var _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0);
  let _v100 = _v0 => {
      _v0.preventDefault();
    },
    _v101 = ({
      isOpen: _v0,
      onClose: _v1,
      onBack: _v2,
      apiConfig: _v3,
      teamData: _v4
    }) => {
      let [_v5, _v6] = (0, _v5.useState)(!1),
        [_v7, _v8] = (0, _v5.useState)(""),
        _v9 = () => {
          _v6(!1), _v8("");
        },
        _v10 = () => {
          _v9(), _v1();
        },
        _v11 = async () => {
          if (!_v4) return;
          _v6(!0), _v8("");
          let _v0 = JSON.stringify({
            team_name: _v4.teamName.trim(),
            accent_color: _v4.accentColor,
            logo_uri: (0, _v98.teamLogoUrlToUri)(_v4.logoUrl)
          });
          try {
            await (0, _v98.updateTeamInfo)(_v3, null, _v0), _v10();
          } catch {
            _v8(_v98.defaultError);
          } finally {
            _v6(!1);
          }
        };
      return (0, _v1.jsxs)(_v84.Modal, {
        isOpen: _v0,
        onClose: _v10,
        isCentered: !0,
        children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
          "data-testid": "create-team-library-modal",
          bg: "fill-surface",
          borderRadius: "xl",
          maxW: "488px",
          children: [(0, _v1.jsxs)(_v82.HStack, {
            gap: "sm",
            align: "start",
            pt: "lg",
            pr: "lg",
            pb: "sm",
            pl: "md",
            w: "100%",
            children: [(0, _v1.jsx)(_v8.IconButton, {
              "aria-label": (0, _v16.translate)({
                singular: "Go back",
                dictionary: {
                  es: {
                    singular: "Volver"
                  },
                  "de-DE": {
                    singular: "Zurück"
                  },
                  "fr-FR": {
                    singular: "Retour"
                  },
                  "ja-JP": {
                    singular: "戻る"
                  },
                  "ko-KR": {
                    singular: "돌아가기"
                  },
                  "pt-BR": {
                    singular: "Voltar"
                  },
                  "zh-CN": {
                    singular: "返回"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v91.ArrowLeft, {}),
              variant: "tertiary",
              size: "sm",
              onClick: () => {
                _v9(), (_v2 ?? (() => {}))();
              }
            }), (0, _v1.jsxs)(_v90.VStack, {
              gap: "xs",
              align: "start",
              justify: "center",
              flex: "1 0 0",
              minW: 0,
              children: [(0, _v1.jsx)(_v81.Header, {
                size: "md",
                color: "text-primary",
                children: (0, _v16.translate)({
                  singular: "Create your team library",
                  dictionary: {
                    es: {
                      singular: "Crea la biblioteca de tu equipo"
                    },
                    "de-DE": {
                      singular: "Erstellen Sie Ihre Team-Bibliothek"
                    },
                    "fr-FR": {
                      singular: "Créez votre bibliothèque d’équipe"
                    },
                    "ja-JP": {
                      singular: "チームライブラリを作成してください"
                    },
                    "ko-KR": {
                      singular: "팀 라이브러리를 생성하세요"
                    },
                    "pt-BR": {
                      singular: "Crie a biblioteca da sua equipe"
                    },
                    "zh-CN": {
                      singular: "创建您的团队库"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v88.Paragraph, {
                size: "sm",
                color: "text-secondary",
                children: (0, _v16.translate)({
                  singular: "Your new shared space for your team collaboration.",
                  dictionary: {
                    es: {
                      singular: "Tu nuevo espacio compartido para la colaboración de tu equipo."
                    },
                    "de-DE": {
                      singular: "Ihr neuer gemeinsamer Bereich für die Zusammenarbeit im Team."
                    },
                    "fr-FR": {
                      singular: "Votre nouvel espace partagé pour la collaboration de votre équipe."
                    },
                    "ja-JP": {
                      singular: "チームのコラボレーションのための新しい共有スペースです。"
                    },
                    "ko-KR": {
                      singular: "팀 협업을 위한 새로운 공유 공간입니다."
                    },
                    "pt-BR": {
                      singular: "Seu novo espaço compartilhado para a colaboração da sua equipe."
                    },
                    "zh-CN": {
                      singular: "为团队协作提供的新共享空间。"
                    }
                  }
                })
              })]
            })]
          }), (0, _v1.jsx)(_v85.ModalCloseButton, {
            top: "20px",
            right: "20px"
          }), (0, _v1.jsxs)(_v90.VStack, {
            gap: "lg",
            align: "center",
            justify: "center",
            px: "lg",
            py: "md",
            w: "100%",
            children: [(0, _v1.jsxs)(_v7.Flex, {
              w: "100%",
              maxW: "440px",
              minH: "130px",
              align: "stretch",
              borderRadius: "md",
              overflow: "hidden",
              children: [(0, _v1.jsxs)(_v90.VStack, {
                flex: "1 0 0",
                minW: 0,
                gap: "3",
                align: "start",
                justify: "center",
                px: "5",
                py: "md",
                bg: "fill-component",
                children: [(0, _v1.jsx)(_v7.Flex, {
                  align: "center",
                  justify: "center",
                  bg: "button-secondary-default",
                  borderRadius: "sm",
                  p: "sm",
                  flexShrink: 0,
                  children: (0, _v1.jsx)(_v96.MyLibrary, {})
                }), (0, _v1.jsxs)(_v90.VStack, {
                  gap: "px",
                  align: "start",
                  justify: "center",
                  w: "100%",
                  children: [(0, _v1.jsx)(_v81.Header, {
                    size: "xs",
                    color: "text-primary",
                    children: (0, _v16.translate)({
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
                    })
                  }), (0, _v1.jsx)(_v88.Paragraph, {
                    size: "sm",
                    color: "text-secondary",
                    children: (0, _v16.translate)({
                      singular: "Private • only you",
                      dictionary: {
                        es: {
                          singular: "Privado • solo tú"
                        },
                        "de-DE": {
                          singular: "Privat • nur Sie"
                        },
                        "fr-FR": {
                          singular: "Privée • uniquement vous"
                        },
                        "ja-JP": {
                          singular: "プライベート • あなただけ"
                        },
                        "ko-KR": {
                          singular: "비공개 • 나만"
                        },
                        "pt-BR": {
                          singular: "Privado • apenas você"
                        },
                        "zh-CN": {
                          singular: "私密 • 仅限您"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v1.jsxs)(_v90.VStack, {
                flex: "1 0 0",
                minW: 0,
                gap: "3",
                align: "start",
                justify: "center",
                px: "5",
                py: "md",
                bg: "status-info-secondary",
                children: [(0, _v1.jsxs)(_v82.HStack, {
                  justify: "space-between",
                  align: "start",
                  gap: "sm",
                  w: "100%",
                  flexWrap: "wrap",
                  children: [(0, _v1.jsx)(_v7.Flex, {
                    align: "center",
                    justify: "center",
                    bg: "button-secondary-default",
                    borderRadius: "sm",
                    p: "sm",
                    flexShrink: 0,
                    children: (0, _v1.jsx)(_v10.TeamLibrary, {})
                  }), (0, _v1.jsx)(_v80.Badge, {
                    variant: "new",
                    size: "sm",
                    bgColor: "input-fill",
                    borderColor: "input-fill",
                    color: "text-primary",
                    children: (0, _v16.translate)({
                      singular: "New",
                      dictionary: {
                        es: {
                          singular: "Nuevo"
                        },
                        "de-DE": {
                          singular: "Neu"
                        },
                        "fr-FR": {
                          singular: "Nouveau"
                        },
                        "ja-JP": {
                          singular: "新規作成"
                        },
                        "ko-KR": {
                          singular: "신규"
                        },
                        "pt-BR": {
                          singular: "Novo"
                        },
                        "zh-CN": {
                          singular: "新"
                        }
                      }
                    })
                  })]
                }), (0, _v1.jsxs)(_v90.VStack, {
                  gap: "px",
                  align: "start",
                  justify: "center",
                  w: "100%",
                  children: [(0, _v1.jsx)(_v81.Header, {
                    size: "xs",
                    color: "text-primary",
                    children: (0, _v16.translate)({
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
                    })
                  }), (0, _v1.jsx)(_v88.Paragraph, {
                    size: "sm",
                    color: "text-secondary",
                    children: (0, _v16.translate)({
                      singular: "Shared with your team",
                      dictionary: {
                        es: {
                          singular: "Compartido con tu equipo"
                        },
                        "de-DE": {
                          singular: "Mit Ihrem Team geteilt"
                        },
                        "fr-FR": {
                          singular: "Partagé avec votre équipe"
                        },
                        "ja-JP": {
                          singular: "チームと共有"
                        },
                        "ko-KR": {
                          singular: "팀과 공유됨"
                        },
                        "pt-BR": {
                          singular: "Compartilhado com sua equipe"
                        },
                        "zh-CN": {
                          singular: "与您的团队共享"
                        }
                      }
                    })
                  })]
                })]
              })]
            }), (0, _v1.jsxs)(_v90.VStack, {
              gap: "none",
              align: "start",
              w: "100%",
              children: [(0, _v1.jsx)(_v99.InfoRow, {
                icon: (0, _v1.jsx)(_v97.SplitSlice, {}),
                title: (0, _v16.translate)({
                  singular: "Your space splits in two",
                  dictionary: {
                    es: {
                      singular: "Tu espacio se divide en dos"
                    },
                    "de-DE": {
                      singular: "Ihr Bereich wird in zwei Bereiche aufgeteilt"
                    },
                    "fr-FR": {
                      singular: "Votre espace se divise en deux"
                    },
                    "ja-JP": {
                      singular: "スペースが2つに分かれます"
                    },
                    "ko-KR": {
                      singular: "공간이 둘로 나뉩니다"
                    },
                    "pt-BR": {
                      singular: "Seu espaço se divide em dois"
                    },
                    "zh-CN": {
                      singular: "您的空间将分为两部分"
                    }
                  }
                }),
                description: (0, _v16.translate)({
                  singular: "My Library stays private. Team Library is the shared side.",
                  dictionary: {
                    es: {
                      singular: "Mi biblioteca permanece privada. La biblioteca del equipo es la parte compartida."
                    },
                    "de-DE": {
                      singular: "Meine Bibliothek bleibt privat. Die Team-Bibliothek ist der gemeinsame Bereich."
                    },
                    "fr-FR": {
                      singular: "Ma bibliothèque reste privée. La Bibliothèque d’équipe est la partie partagée."
                    },
                    "ja-JP": {
                      singular: "マイライブラリはプライベートのままです。チームライブラリは共有側です。"
                    },
                    "ko-KR": {
                      singular: "내 라이브러리는 비공개로 유지됩니다. 팀 라이브러리는 공유 공간입니다."
                    },
                    "pt-BR": {
                      singular: "Minha Biblioteca permanece privada. A Biblioteca da Equipe é a parte compartilhada."
                    },
                    "zh-CN": {
                      singular: "“我的库”保持私密。团队库是共享部分。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v99.InfoRow, {
                icon: (0, _v1.jsx)(_v94, {}),
                title: (0, _v16.translate)({
                  singular: "Nothing moves automatically",
                  dictionary: {
                    es: {
                      singular: "Nada se mueve automáticamente"
                    },
                    "de-DE": {
                      singular: "Nichts wird automatisch verschoben"
                    },
                    "fr-FR": {
                      singular: "Rien ne bouge automatiquement"
                    },
                    "ja-JP": {
                      singular: "何も自動で移動しません"
                    },
                    "ko-KR": {
                      singular: "아무 것도 자동으로 이동하지 않습니다"
                    },
                    "pt-BR": {
                      singular: "Nada é movido automaticamente"
                    },
                    "zh-CN": {
                      singular: "不会有任何内容自动移动"
                    }
                  }
                }),
                description: (0, _v16.translate)({
                  singular: "You choose what to share, one folder at a time.",
                  dictionary: {
                    es: {
                      singular: "Tú eliges qué compartir, una carpeta a la vez."
                    },
                    "de-DE": {
                      singular: "Sie entscheiden, was Sie teilen, Ordner für Ordner."
                    },
                    "fr-FR": {
                      singular: "Vous choisissez ce que vous partagez, un dossier à la fois."
                    },
                    "ja-JP": {
                      singular: "共有する項目はフォルダ単位で選択できます。"
                    },
                    "ko-KR": {
                      singular: "공유할 항목은 폴더 단위로 선택하세요."
                    },
                    "pt-BR": {
                      singular: "Você escolhe o que compartilhar, uma pasta por vez."
                    },
                    "zh-CN": {
                      singular: "您可以逐个文件夹选择要共享的内容。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v99.InfoRow, {
                icon: (0, _v1.jsx)(_v95.Lock, {}),
                title: (0, _v16.translate)({
                  singular: "Privacy never changes",
                  dictionary: {
                    es: {
                      singular: "La privacidad nunca cambia"
                    },
                    "de-DE": {
                      singular: "Ihre Datenschutzeinstellungen bleiben unverändert"
                    },
                    "fr-FR": {
                      singular: "La confidentialité ne change jamais"
                    },
                    "ja-JP": {
                      singular: "プライバシー設定はそのままです"
                    },
                    "ko-KR": {
                      singular: "개인정보 보호 설정은 변경되지 않습니다"
                    },
                    "pt-BR": {
                      singular: "A privacidade não muda"
                    },
                    "zh-CN": {
                      singular: "隐私设置保持不变"
                    }
                  }
                }),
                description: (0, _v16.translate)({
                  singular: "Public, password and only-me links stay exactly as you set them.",
                  dictionary: {
                    es: {
                      singular: "Los enlaces públicos, con contraseña y solo para mí permanecen exactamente como los configuraste."
                    },
                    "de-DE": {
                      singular: "Öffentliche, passwortgeschützte und Nur-für-mich-Links bleiben genau so, wie Sie sie eingestellt haben."
                    },
                    "fr-FR": {
                      singular: "Les liens publics, protégés par mot de passe et « seulement moi » restent exactement tels que vous les avez définis."
                    },
                    "ja-JP": {
                      singular: "パブリック、パスワード、および「自分のみ」リンクは設定どおりのままです。"
                    },
                    "ko-KR": {
                      singular: "공개, 비밀번호 및 나만 보기 링크는 설정한 대로 유지됩니다."
                    },
                    "pt-BR": {
                      singular: "Links públicos, com senha e 'somente eu' permanecem exatamente como você os definiu."
                    },
                    "zh-CN": {
                      singular: "公开、密码和仅我可见的链接将完全按您设置的方式保留。"
                    }
                  }
                })
              })]
            })]
          }), (0, _v1.jsxs)(_v90.VStack, {
            gap: "3",
            align: "center",
            pt: "md",
            px: "lg",
            pb: "lg",
            w: "100%",
            children: [_v7 && (0, _v1.jsx)(_v89.Text, {
              fontSize: "0.75rem",
              color: "status-destructive-primary",
              textAlign: "center",
              children: _v7
            }), (0, _v1.jsx)(_v6.Button, {
              variant: "primary",
              size: "md",
              onClick: _v11,
              isLoading: _v5,
              isDisabled: _v5 || !_v4,
              w: "100%",
              "data-testid": "create-team-library-confirm-button",
              children: (0, _v16.translate)({
                singular: "Create Team Library",
                dictionary: {
                  es: {
                    singular: "Crear biblioteca del equipo"
                  },
                  "de-DE": {
                    singular: "Team-Bibliothek erstellen"
                  },
                  "fr-FR": {
                    singular: "Créer la bibliothèque d’équipe"
                  },
                  "ja-JP": {
                    singular: "チームライブラリを作成"
                  },
                  "ko-KR": {
                    singular: "팀 라이브러리 생성"
                  },
                  "pt-BR": {
                    singular: "Criar Biblioteca da Equipe"
                  },
                  "zh-CN": {
                    singular: "创建您的团队库"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v82.HStack, {
              gap: "xs",
              align: "center",
              justify: "center",
              fontSize: "0.8125rem",
              children: [(0, _v1.jsx)(_v83.Link, {
                href: "#",
                onClick: _v100,
                color: "text-primary",
                sx: {
                  textDecoration: "underline"
                },
                children: (0, _v16.translate)({
                  singular: "Learn how Team Library works",
                  dictionary: {
                    es: {
                      singular: "Aprende cómo funciona la biblioteca del equipo"
                    },
                    "de-DE": {
                      singular: "Erfahren Sie, wie die Team-Bibliothek funktioniert"
                    },
                    "fr-FR": {
                      singular: "Découvrez comment fonctionne la Bibliothèque d’équipe"
                    },
                    "ja-JP": {
                      singular: "チームライブラリの仕組みを学ぶ"
                    },
                    "ko-KR": {
                      singular: "팀 라이브러리 작동 방식 알아보기"
                    },
                    "pt-BR": {
                      singular: "Saiba como a Biblioteca da Equipe funciona"
                    },
                    "zh-CN": {
                      singular: "了解团队库如何工作"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v74.Box, {
                as: "span",
                color: "text-primary",
                display: "inline-flex",
                children: (0, _v1.jsx)(_v93, {})
              })]
            })]
          })]
        })]
      });
    };
  var _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0);
  let _v108 = (0, _v106.default)(() => _v0.A(0).then(_v0 => _v0.FolderSettingsModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v109 = (0, _v5.createContext)({
      setModalContextState: () => console.log("noop")
    }),
    _v110 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v5.useState)({
          activeModal: null,
          activeModalState: null
        }),
        _v3 = (0, _v5.useContext)(_v107.ViewerContext),
        _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
        {
          activeModal: _v5,
          activeModalState: _v6
        } = _v1;
      return (0, _v1.jsxs)(_v109.Provider, {
        value: {
          setModalContextState: _v2
        },
        children: [_v0, "FolderSettings" === _v5 && _v4 && (0, _v1.jsx)(_v108, {
          closeModal: () => _v2({
            activeModal: null,
            activeModalState: null
          }),
          currentFolderUri: null,
          isOpen: !0,
          location: _v6.location,
          parentFolderUri: null,
          userId: _v4
        })]
      });
    },
    _v111 = (0, _v5.lazy)(() => _v0.A(0).then(({
      TeamSwitcherDropzone: _v0
    }) => ({
      default: _v0
    }))),
    _v112 = ({
      owner: _v0,
      set360SourceType: _v1,
      threeSixtyType: _v2
    }) => {
      let {
          setModalContextState: _v3
        } = (0, _v5.useContext)(_v109),
        _v4 = (0, _v104.useTeamUploadClipProperties)(_v0.id);
      return (0, _v1.jsx)(_v7.Flex, {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v5.Suspense, {
          fallback: (0, _v1.jsx)(_v74.Box, {
            paddingTop: "25vh",
            children: (0, _v1.jsx)(_v103.Spinner, {
              size: "xl"
            })
          }),
          children: (0, _v1.jsxs)(_v74.Box, {
            maxWidth: "100%",
            width: "100%",
            children: [(0, _v1.jsx)(_v111, {
              uploadClipProperties: _v4,
              uploadType: "UPLOAD",
              owner: _v0,
              selectedFolderId: null,
              selectedFolder: null,
              libraryEmptyStateContent: (0, _v1.jsxs)(_v7.Flex, {
                flexDirection: "column",
                alignItems: "center",
                children: [(0, _v1.jsx)(_v10.TeamLibrary, {
                  width: (0, _v102.rem)(64),
                  height: (0, _v102.rem)(64)
                }), (0, _v1.jsx)(_v89.Text, {
                  variant: "heading-lg",
                  margin: `${(0, _v102.rem)(16)} 0`,
                  children: (0, _v16.translate)({
                    singular: "Add content to share with your team",
                    dictionary: {
                      es: {
                        singular: "Agregue contenido para compartirlo con su equipo"
                      },
                      "de-DE": {
                        singular: "Fügen Sie Inhalte hinzu, um sie mit Ihrem Team zu teilen"
                      },
                      "fr-FR": {
                        singular: "Ajoutez du contenu afin de le partager avec votre équipe"
                      },
                      "ja-JP": {
                        singular: "チームで共有するコンテンツを追加"
                      },
                      "ko-KR": {
                        singular: "팀과 공유할 콘텐츠를 추가하세요."
                      },
                      "pt-BR": {
                        singular: "Adicione conteúdo para compartilhar com sua equipe"
                      },
                      "zh-CN": {
                        singular: "添加内容以与团队共享"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v74.Box, {
                  width: "65%",
                  children: (0, _v1.jsx)(_v89.Text, {
                    variant: "body-lg",
                    color: "text-secondary",
                    textAlign: "center",
                    children: (0, _v16.translate)({
                      singular: "Create a folder or drop videos to upload",
                      dictionary: {
                        es: {
                          singular: "Cree una carpeta o suelte los videos para subirlos"
                        },
                        "de-DE": {
                          singular: "Erstellen Sie einen Ordner oder ziehen Sie Videos zum Hochladen hierher"
                        },
                        "fr-FR": {
                          singular: "Créez un dossier ou glissez-déposez des vidéos pour les mettre en ligne"
                        },
                        "ja-JP": {
                          singular: "フォルダーを作成するか動画をドロップしてアップロード"
                        },
                        "ko-KR": {
                          singular: "폴더를 만들거나 업로드할 동영상을 끌어다 놓으세요."
                        },
                        "pt-BR": {
                          singular: "Crie uma pasta ou carregue um vídeo"
                        },
                        "zh-CN": {
                          singular: "创建文件夹或拖放视频以上传"
                        }
                      }
                    })
                  })
                })]
              }),
              onNewFolderOpen: () => {
                _v3({
                  activeModal: "FolderSettings",
                  activeModalState: {
                    location: "empty_state"
                  }
                });
              }
            }), (0, _v1.jsx)(_v105.EmptyStateDropzoneFooter, {
              set360SourceType: _v1,
              threeSixtyType: _v2
            })]
          })
        })
      });
    },
    _v113 = ({
      cta: _v0,
      header: _v1,
      icon: _v2,
      subheader: _v3
    }) => (0, _v1.jsxs)(_v7.Flex, {
      flexDirection: "column",
      alignItems: "center",
      marginTop: "100px",
      children: [_v2, (0, _v1.jsxs)(_v7.Flex, {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        margin: `${(0, _v102.rem)(16)} 0`,
        gap: "md",
        children: ["string" == typeof _v1 ? (0, _v1.jsx)(_v81.Header, {
          size: "lg",
          children: _v1
        }) : _v1, "string" == typeof _v3 ? (0, _v1.jsx)(_v88.Paragraph, {
          size: "lg",
          color: "text-secondary",
          marginBottom: "0",
          children: _v3
        }) : _v3]
      }), _v0]
    });
  _v113.SubheaderText = ({
    children: _v0
  }) => (0, _v1.jsx)(_v88.Paragraph, {
    size: "lg",
    color: "text-secondary",
    marginBottom: "0",
    children: _v0
  });
  let _v114 = ({
    isContributor: _v0 = !1
  }) => (0, _v1.jsx)(_v113, {
    header: (0, _v16.translate)({
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
    icon: (0, _v1.jsx)(_v10.TeamLibrary, {
      width: "64px",
      height: "64px"
    }),
    subheader: _v0 ? (0, _v16.translate)({
      singular: "Trying to add team content? Upload to My library and share with an admin.",
      dictionary: {
        es: {
          singular: "¿Intenta agregar contenido del equipo? Súbalo a Mi biblioteca y compártalo con un administrador."
        },
        "de-DE": {
          singular: "Versuchen Sie, Teaminhalte hinzuzufügen? In „Meine Bibliothek“ hochladen und mit einem Administrator teilen."
        },
        "fr-FR": {
          singular: "Vous essayez d'ajouter du contenu concernant votre équipe ? Téléchargez-le dans Ma bibliothèque et partagez-le avec un administrateur."
        },
        "ja-JP": {
          singular: "チームコンテンツを追加しようとしていますか？マイライブラリにアップロードして、管理者と共有してください。"
        },
        "ko-KR": {
          singular: "팀 콘텐츠를 추가하려 하시나요? 내 라이브러리에 업로드하고 관리자와 공유하세요."
        },
        "pt-BR": {
          singular: "Tentando adicionar conteúdo para a equipe? Carregue em Minha biblioteca e compartilhe com um administrador."
        },
        "zh-CN": {
          singular: "尝试添加团队内容？上传到我的视频库并与管理员共享。"
        }
      }
    }) : (0, _v16.translate)({
      singular: "No team content has been added yet",
      dictionary: {
        es: {
          singular: "Aún no se ha agregado ningún contenido del equipo"
        },
        "de-DE": {
          singular: "Es wurden noch keine Teaminhalte hinzugefügt"
        },
        "fr-FR": {
          singular: "Aucun contenu d'équipe n'a été ajouté"
        },
        "ja-JP": {
          singular: "チームコンテンツはまだ追加されていません"
        },
        "ko-KR": {
          singular: "아직 팀 콘텐츠가 추가되지 않았습니다."
        },
        "pt-BR": {
          singular: "Nenhum conteúdo de equipe foi adicionado ainda"
        },
        "zh-CN": {
          singular: "尚未添加团队内容"
        }
      }
    })
  });
  var _v115 = _v0.i(0);
  let _v116 = () => {
    let {
        setModalContextState: _v0
      } = (0, _v5.useContext)(_v109),
      _v1 = (0, _v5.useContext)(_v107.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      {
        capabilities: _v3
      } = (0, _v12.useCapability)(["hasContentSpaceEnabled"], _v2),
      {
        trackLibraryNewFolderClicked: _v4
      } = (0, _v22.useLibraryTracking)();
    return (0, _v1.jsx)(_v115.NewFolderButton, {
      onClick: () => {
        _v4({
          libraryType: (0, _v23.deriveLibraryType)({
            hasContentSpaceEnabled: !!_v3.hasContentSpaceEnabled
          })
        }), _v0({
          activeModal: "FolderSettings",
          activeModalState: {
            location: "library_header"
          }
        });
      },
      dataTestId: "library-header-new-folder-button",
      dataTestIdMobile: "library-header-new-folder-button-mobile",
      dataId: "vl_library-header-new-folder-button",
      dataIdMobile: "vl_library-header-new-folder-button-mobile"
    });
  };
  var _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
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
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0);
  let _v142 = "header",
    _v143 = "video card",
    _v144 = ({
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      isEnterprise: _v2,
      items: _v3,
      libraryTitle: _v4,
      loadingFolderURIs: _v5 = new Set(),
      onCopyVideo: _v6,
      onFolderSettingsChange: _v7,
      onMoreInfo: _v8,
      onMoveFolderSuccess: _v9,
      onMoveFolderFailure: _v10,
      removeItem: _v11,
      selectedItemURIs: _v12,
      selectItem: _v13,
      setIsUploadDropzoneEnabled: _v14,
      sort: _v15,
      isLoading: _v16 = !1
    }) => {
      let _v17 = (0, _v124.useIsBokeh)(),
        _v18 = (0, _v5.useContext)(_v107.ViewerContext),
        {
          notifyItemMoveSuccess: _v19,
          notifyItemMoveToWorkspaceSuccess: _v20
        } = (0, _v42.useNotifications)(),
        _v21 = (0, _v30.useAnalyticsEvent)(),
        _v22 = _v126.BPAnalyticsV2.useContentManagamentHoverEvent(),
        _v23 = (0, _v129.usePageName)(),
        {
          getDisplayDateWithTime: _v24
        } = (0, _v136.useFormatDateTime)(),
        _v25 = (0, _v139.useVideoPrivacyBadgeHandlers)({
          surface: "card"
        }),
        _v26 = _v18?.teamUser?.ownerId ?? _v18?.user?.id,
        _v27 = (0, _v104.useTeamUploadClipProperties)(_v26),
        {
          capabilities: _v28
        } = (0, _v12.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks", "hasContentSpaceEnabled"], _v26),
        _v29 = (0, _v23.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v28.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v30
        } = (0, _v22.useLibraryTracking)(),
        _v31 = !!_v28.canSeeUpsellModalOnShare,
        _v32 = !!_v28.hasVideoReviewPageDemo,
        _v33 = !!_v28.hasMultipleReviewLinks;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [!!_v3?.length && _v3.map((_v0, _v1) => {
          if (_v0.video) {
            let _v0 = _v0.video,
              _v1 = _v0.isSelected,
              _v2 = !!_v0.metadata?.interactions?.edit?.uri,
              _v3 = _v0.isColdStorage ?? !1,
              _v4 = !!_v0.canMoveToProject && !_v3,
              _v5 = _v3 ? "" : _v2 ? _v0.manageLink : _v0.link,
              _v6 = (0, _v132.getTimestampBySort)(_v15.type, _v0.lastUserActionEventDate ?? "", _v0.createdTime),
              {
                videoPrivacy: _v7,
                variant: _v8,
                onPrivacyBadgeClick: _v9,
                openLockedVideoPaywall: _v10,
                tooltipLabel: _v11
              } = _v25(_v0);
            return (0, _v1.jsx)(_v120.AnalyticsEventProvider, {
              eventData: {
                location: _v143,
                video_privacy: _v0.privacy?.view,
                video_id: String((0, _v128.idFromUri)(_v0.uri)),
                video_app_id: (0, _v128.idFromUri)(_v0.app?.uri) ? String((0, _v128.idFromUri)(_v0.app?.uri)) : null,
                is_video_password_protected: !!_v0.password,
                video_embed_privacy: _v0.privacy?.embed,
                team_owner_id: String((0, _v128.idFromUri)(_v0.user.uri)),
                team_subscription_type: _v0.user.account
              },
              children: (0, _v1.jsx)(_v130.FolderItemDragWrapper, {
                type: _v119.ITEM_TYPES.ROOT_VIDEO,
                uri: _v0.uri,
                parentFolderUri: "root",
                thumbnail: _v0.pictures.sizes[1].link,
                canDrag: _v4,
                isSelected: !!_v1,
                selectedItemURIs: _v12,
                onDrop: _v1,
                setIsUploadDropzoneEnabled: _v14,
                children: (0, _v1.jsx)(_v138.VideoCard, {
                  title: _v0.name,
                  subtitle: _v24(_v6),
                  href: _v5 ?? "",
                  isDefaultPicture: _v0.pictures?.defaultPicture,
                  thumbnailSrc: _v0.pictures?.sizes[3].link,
                  avatarSrc: _v0.uploader?.pictures?.sizes[1].link,
                  avatarName: _v0.uploader?.name,
                  tagText: (0, _v125.secondsToDisplay)(_v0.duration),
                  isSelectable: _v0.isSelectable,
                  titleStyles: {
                    maxWidth: _v47.CONTENT_CARD_TITLE_MAX_WIDTH
                  },
                  isSelected: _v1,
                  configUrl: _v0.configUrl ?? "",
                  clipId: (0, _v128.idFromUri)(_v0?.uri),
                  pageName: _v23,
                  isColdStorage: _v3,
                  lockedTooltipLabel: _v140.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
                  onLockedClick: _v3 ? _v10 : void 0,
                  onToggleSelected: () => {
                    _v21((0, _v70.genericClick)({
                      copy: `${_v12.size}`,
                      feature: _v70.AnalyticsFeatures.VIDEO_LIBRARY,
                      location: "video_card",
                      name: "select_item",
                      page: _v23,
                      target: _v0.isSelected ? "de-selected" : "selected",
                      type: "general",
                      target_path: null,
                      click_type: null,
                      device_type: null
                    }, 91)), _v0.isSelected ? _v0(_v0.uri, _v1, _v3) : _v13(_v0.uri, _v1, _v3);
                  },
                  hoverActions: (0, _v1.jsx)(_v135.HoverActions, {
                    type: "video",
                    entity: _v0,
                    canShare: !!(_v0.metadata?.interactions?.invite?.uri || _v31),
                    hasMoreInfo: !0,
                    onMoreInfo: () => _v8(_v0.uri)
                  }),
                  actionsMenu: (0, _v1.jsx)(_v133.VideoMenu, {
                    video: _v0,
                    feature: _v70.AnalyticsFeatures.VIDEO_LIBRARY,
                    onCopyVideo: _v6 ? () => _v6(_v0) : void 0,
                    onMoreInfo: () => _v8(_v0.uri),
                    onMoveSuccess: ({
                      selectedDestination: _v0,
                      video: _v1,
                      destinationWorkspaceId: _v2,
                      destinationWorkspaceName: _v3
                    }) => {
                      if (_v0(_v1.uri, _v1, _v3), _v11?.(_v1.uri, "video"), _v2 && _v3) {
                        let _v0 = "root" === _v0 ? _v4 : _v0.name,
                          _v1 = "root" === _v0 ? "/library" : (0, _v67.getFolderPageUriFromApiUri)(_v0.uri);
                        _v20(_v1.name, {
                          label: _v0,
                          workspaceName: _v3
                        }, () => {
                          _v18 && (0, _v117.switchTeam)(_v2, _v18.xsrft).finally(() => {
                            window.location.href = _v1;
                          });
                        });
                      } else "root" !== _v0 && _v19(_v1.name, {
                        label: _v0.name,
                        link: (0, _v67.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    },
                    onDelete: () => {
                      _v0(_v0.uri, _v1, _v3), _v11?.(_v0.uri, "video"), _v21(_v70.VideoActionAnalytics.clickDeleteVideo({
                        live_event_id: null,
                        origin_folder_id: null,
                        origin_type: null,
                        is_my_videos: null,
                        location: _v143
                      }));
                    },
                    analytics: {
                      location: "card",
                      element: "ellipses"
                    },
                    vimeoClickAnalytics: {
                      location: "video_card"
                    },
                    hasMoreInfo: !0,
                    hasReviewPageLinkUpsell: _v32,
                    hasUpsellInShareModal: _v31,
                    hasMultipleReviewLinks: _v33
                  }),
                  onClick: () => {
                    _v122.BigPictureClient.sendEvent(new _v122.Event("vimeo.click_video_card", 2, {
                      path: window.location.href,
                      entry_page: "team-library",
                      page: "team-library",
                      location: _v143,
                      video_id: String((0, _v128.idFromUri)(_v0.uri)),
                      video_privacy: _v0.privacy?.view,
                      video_embed_privacy: _v0.privacy?.embed,
                      is_preset_applied: null,
                      is_video_password_protected: !!_v0.password,
                      video_app_id: (0, _v128.idFromUri)(_v0.app?.uri) ? String((0, _v128.idFromUri)(_v0.app?.uri)) : null,
                      team_owner_id: String((0, _v128.idFromUri)(_v0.user.uri)),
                      team_size: _v18?.teamUser?.currentTeamSize ?? null,
                      team_subscription_type: _v18?.teamUser?.accountType ?? null,
                      actor_team_role: _v18?.teamUser?.plainTextPermissionLevel ?? null,
                      product: "Video Library",
                      video_type: null,
                      actor_resource_role: null,
                      target: null,
                      position_row: null,
                      position_column: null,
                      layout: "grid"
                    }));
                  },
                  onMouseEnter: () => {
                    _v22({
                      entityType: "video",
                      pageName: "video_library"
                    });
                  },
                  videoPrivacy: _v7,
                  privacyBadgeVariant: _v8,
                  privacyBadgeTooltip: _v11,
                  onPrivacyBadgeClick: _v9
                })
              })
            }, _v0.uri);
          }
          if (_v0.folder) {
            let _v0 = parseInt(_v0.folder.uri.split("/")?.[2]),
              _v1 = parseInt(_v0.folder.uri.split("/")[4]),
              _v2 = _v15.type === _v47.SORT_OPTION.CREATED ? _v0.folder.createdTime : _v0.folder.lastUserActionEventDate ?? _v0.folder.createdTime;
            return (0, _v1.jsx)(_v131.FolderDropWrapper, {
              dropTarget: _v0.folder,
              dropTargetType: _v119.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v119.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: null != _v26 ? {
                targetUserId: _v26,
                folderId: _v1,
                folderName: _v0.folder.name,
                uploadClipProperties: _v27
              } : void 0,
              children: _v17 ? (0, _v1.jsx)(_v137.DroppableFolderCard, {
                title: _v0.folder?.name,
                subtitle: _v24(_v2),
                folderId: _v1,
                folderOwnerId: _v0,
                tagText: (0, _v141.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
                titleStyles: {
                  maxWidth: _v47.CONTENT_CARD_TITLE_MAX_WIDTH
                },
                href: (0, _v67.getFolderPageUriFromApiUri)(_v0.folder.uri),
                backgroundColor: _v0.folder.settings?.color,
                hoverActions: (0, _v1.jsx)(_v135.HoverActions, {
                  type: "folder",
                  entity: _v0.folder
                }),
                pageName: _v23,
                actionsMenu: (0, _v1.jsx)(_v134.FolderMenu, {
                  folder: _v0.folder,
                  onSettingsChange: _v7,
                  onMoveSuccess: _v9,
                  onMoveFailure: _v10,
                  analytics: {
                    product: "Workflow",
                    feature: "video_library",
                    location: "folder_card"
                  },
                  libraryType: _v29
                }),
                onClick: () => {
                  _v122.BigPictureClient.sendEvent(new _v122.Event("vimeo.click_folder_card", 3, {
                    path: window.location.href,
                    entry_page: "team-library",
                    page: "team-library",
                    location: "folder card",
                    team_owner_id: String(_v0),
                    team_size: _v18?.teamUser?.currentTeamSize ?? null,
                    team_subscription_type: _v18?.teamUser?.accountType ?? null,
                    actor_team_role: _v18?.teamUser?.plainTextPermissionLevel ?? null,
                    product: "Video Library",
                    actor_resource_role: null,
                    folder_id: _v0.folder?.uri.split("/").pop() ?? null,
                    is_subfolder: null,
                    folder_share_status: null,
                    is_private_to_me: null,
                    parent_folder_id: null,
                    position_row: null,
                    position_column: null,
                    customizations: null,
                    layout: "grid"
                  })), _v30({
                    folderUri: _v0.folder?.uri,
                    isPrivateToUser: _v0.folder?.isPrivateToUser
                  });
                },
                onMouseEnter: () => {
                  _v22({
                    entityType: "folder",
                    pageName: "video_library"
                  });
                }
              }) : (0, _v1.jsx)(_v127.FolderCard, {
                id: `folder-card-${_v0.folder.uri?.split("/")?.pop()}`,
                folderOwnerId: _v0,
                onSettingsChange: _v7,
                isLoading: !!_v5 && _v5.has(_v0.folder.uri),
                headerSize: "6",
                subheaderSize: 100,
                baseUrl: _v18?.vimeoHttpsUrl || "",
                isEnterprise: _v2,
                ..._v0.folder
              }, _v0.folder.uri)
            }, _v0.folder.uri);
          }
          return (0, _v1.jsx)(_v1.Fragment, {});
        }), _v16 && (0, _v1.jsx)(_v123.LoadingCardsGrid, {})]
      });
    };
  function _v145({
    deselectItem: _v0,
    handleMoveItemsOnDrop: _v1,
    isEnterprise: _v2,
    items: _v3 = [],
    libraryTitle: _v4,
    loadingFolderURIs: _v5 = new Set(),
    onCopyVideo: _v6,
    onMoreInfo: _v7,
    onFolderSettingsChange: _v8,
    onMoveFolderSuccess: _v9,
    onMoveFolderFailure: _v10,
    removeItem: _v11,
    selectedItemURIs: _v12,
    selectItem: _v13,
    setIsUploadDropzoneEnabled: _v14,
    sort: _v15,
    isLoading: _v16 = !1
  }) {
    return (0, _v1.jsx)(_v120.AnalyticsEventProvider, {
      eventData: {
        location: "center",
        product: "Video Library",
        position_column: null
      },
      children: (0, _v1.jsx)(_v121.ContentGrid, {
        children: (0, _v1.jsx)(_v121.ContentGrid.Body, {
          children: (0, _v1.jsx)(_v144, {
            deselectItem: _v0,
            handleMoveItemsOnDrop: _v1,
            loadingFolderURIs: _v5,
            isEnterprise: _v2,
            items: _v3,
            libraryTitle: _v4,
            onCopyVideo: _v6,
            onFolderSettingsChange: _v8,
            onMoreInfo: _v7,
            onMoveFolderSuccess: _v9,
            onMoveFolderFailure: _v10,
            removeItem: _v11,
            selectedItemURIs: _v12,
            selectItem: _v13,
            setIsUploadDropzoneEnabled: _v14,
            sort: _v15,
            isLoading: _v16
          })
        })
      })
    });
  }
  var _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0);
  let _v156 = ["video.allowedPrivacies", "video.app.uri", "video.canMoveToProject", "video.configUrl", "video.contentRatingClass", "video.createdTime", "video.customMetadata", "video.duration", "video.download.link", "video.download.type", "video.download.width", "video.download.height", "video.download.quality", "video.download.size", "video.download.publicName", "video.download.sizeShort", "video.embed.html", "video.embed.sentimentWidgets", "video.filesSize", "video.isColdStorage", "video.isColdPrivacyRestricted", "video.lastUserActionEventDate", "video.link", "video.manageLink", "video.metadata.canBeReplaced", "video.metadata.interactions.edit.uri", "video.metadata.interactions.delete.uri", "video.metadata.interactions.invite.uri", "video.metadata.interactions.legalHold.uri", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.uri", "video.pictures.sizes", "video.password", "video.privacy.view", "video.privacy.embed", "video.privacy.download", "video.privacy.add", "video.privacy.comments", "video.privacy.originalView", "video.regionalPrivacies", "video.releaseTime", "video.reviewLinks.uri", "video.reviewPage", "video.status", "video.type", "video.uploader.name", "video.uploader.pictures", "video.uri", "video.user.account", "video.user.uri", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "folder.createdTime", "folder.isPrivateToUser", "folder.lastUserActionEventDate", "folder.name", "folder.uri", "folder.metadata.connections.items.uri", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.settings", "folder.metadata.interactions.edit", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.delete", "folder.metadata.interactions.invite", "folder.metadata.interactions.moveVideo", "folder.slackIncomingWebhooksId", "type"],
    _v157 = ({
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      hasFolderShareUpsell: _v2,
      hasReviewPageUpsell: _v3,
      hasMultipleReviewLinks: _v4,
      items: _v5,
      libraryTitle: _v6,
      loadingFolderURIs: _v7,
      onCopyVideo: _v8,
      onMoreInfo: _v9,
      onMoveFolderSuccess: _v10,
      removeItem: _v11,
      selectedItemURIs: _v12,
      selectItem: _v13,
      setIsUploadDropzoneEnabled: _v14,
      shouldShowPrivacy: _v15 = !1,
      shouldShowFileSize: _v16 = !1,
      sort: _v17
    }) => {
      let {
          notifyItemMoveSuccess: _v18,
          notifyItemMoveToWorkspaceSuccess: _v19
        } = (0, _v42.useNotifications)(),
        _v20 = (0, _v30.useAnalyticsEvent)(),
        _v21 = (0, _v129.usePageName)(),
        {
          getDisplayDateWithTime: _v22
        } = (0, _v136.useFormatDateTime)(),
        _v23 = (0, _v5.useContext)(_v107.ViewerContext),
        {
          settings: _v24
        } = (0, _v19.useOrionSettings)(),
        _v25 = (0, _v139.useVideoPrivacyBadgeHandlers)({
          surface: "list"
        }),
        _v26 = _v23?.teamUser?.ownerId ?? _v23?.user?.id,
        {
          capabilities: _v27
        } = (0, _v12.useCapability)(["hasContentSpaceEnabled"], _v26),
        _v28 = (0, _v23.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v27.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v29
        } = (0, _v22.useLibraryTracking)(),
        _v30 = (0, _v104.useTeamUploadClipProperties)(_v26);
      return (0, _v1.jsx)(_v74.Box, {
        children: _v5?.length ? _v5?.map((_v0, _v1) => {
          if (_v0.video) {
            let {
                video: _v0
              } = _v0,
              {
                duration: _v1,
                link: _v2,
                name: _v3,
                pictures: _v4,
                manageLink: _v5,
                uri: _v6,
                filesSize: _v7
              } = _v0,
              _v8 = _v17.type === _v47.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v9 = _v7 && _v7.totalSize > 0 ? (0, _v148.bytesToSize)(_v7.totalSize, 1) : "0MB",
              _v10 = (0, _v153.getFileSizeTooltip)(_v7?.fileSizeType),
              _v11 = _v4?.sizes[3].link,
              _v12 = _v0.isColdStorage ?? !1,
              _v13 = !!_v0.canMoveToProject && !_v12,
              {
                videoPrivacy: _v14,
                variant: _v15,
                onPrivacyBadgeClick: _v16,
                openLockedVideoPaywall: _v17,
                tooltipLabel: _v18
              } = _v25(_v0);
            return (0, _v1.jsx)(_v154.DraggableListVideo, {
              uri: _v6,
              title: _v3,
              clipId: (0, _v128.idFromUri)(_v6),
              canRename: !0,
              thumbnail: (0, _v1.jsx)(_v147.VideoThumbnail, {
                alt: _v3,
                badgeText: (0, _v125.secondsToDisplay)(_v1),
                isDefaultPicture: _v4?.defaultPicture,
                thumbnailSrc: _v11,
                isLocked: _v12
              }),
              thumbnailSrc: _v11,
              timestamp: _v22(_v8),
              privacy: _v15 ? (0, _v1.jsx)(_v146.ContentCard.VideoPrivacyBadge, {
                videoPrivacy: _v14,
                variant: _v15,
                layout: "inline",
                onClick: _v16,
                tooltipLabel: _v18,
                isDimmed: _v12
              }) : "",
              href: _v12 ? "" : _v5 ?? _v2,
              isLocked: _v12,
              isSelectable: _v0.isSelectable,
              isSelected: _v0.isSelected,
              lockedTooltipLabel: _v140.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
              onLockedClick: _v12 ? _v17 : void 0,
              pageName: _v21,
              onClick: () => {
                _v122.BigPictureClient.sendEvent(new _v122.Event("vimeo.click_video_card", 2, {
                  path: window.location.href,
                  entry_page: "team-library",
                  page: "team-library",
                  location: _v70.AnalyticsLocations.VIDEO_LIST,
                  video_id: String((0, _v128.idFromUri)(_v0.uri)),
                  video_privacy: _v0.privacy?.view,
                  video_embed_privacy: _v0.privacy?.embed,
                  is_preset_applied: null,
                  is_video_password_protected: !!_v0.password,
                  video_app_id: (0, _v128.idFromUri)(_v0.app?.uri) ? String((0, _v128.idFromUri)(_v0.app?.uri)) : null,
                  team_owner_id: String((0, _v128.idFromUri)(_v0.user.uri)),
                  team_size: _v23?.teamUser?.currentTeamSize ?? null,
                  team_subscription_type: _v23?.teamUser?.accountType ?? null,
                  actor_team_role: _v23?.teamUser?.plainTextPermissionLevel ?? null,
                  product: "Video Library",
                  video_type: null,
                  actor_resource_role: null,
                  target: null,
                  position_row: null,
                  position_column: null,
                  layout: "list"
                }));
              },
              onToggleSelected: () => {
                _v20((0, _v70.genericClick)({
                  copy: `${_v12.size}`,
                  feature: _v70.AnalyticsFeatures.VIDEO_LIBRARY,
                  location: _v70.AnalyticsLocations.VIDEO_LIST,
                  name: "select_item",
                  page: _v21,
                  target: _v0.isSelected ? "de-selected" : "selected",
                  type: "general",
                  target_path: null,
                  click_type: null,
                  device_type: null
                }, 91)), _v0.isSelected ? _v0(_v6, _v1, _v5) : _v13(_v6, _v1, _v5);
              },
              shouldShowFileSize: _v16,
              fileSizeTooltip: _v10 ?? void 0,
              fileSize: _v9,
              hoverActions: (0, _v1.jsx)(_v151.ListViewHoverActionsContainer, {
                disableHoverBackground: _v0.isColdStorage,
                children: (0, _v1.jsx)(_v149.TopRightDecoration, {
                  video: _v0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list",
                  canShare: !!(_v0.metadata?.interactions?.invite?.uri || _v2),
                  shareEventAnalyticsOverride: {
                    page: "LIBRARY"
                  },
                  hasVideoInfo: !0,
                  onVideoInfo: () => _v9(_v0.uri)
                })
              }),
              menuButton: (0, _v1.jsx)(_v133.VideoMenu, {
                video: _v0,
                feature: _v70.AnalyticsFeatures.VIDEO_LIBRARY,
                hasMoreInfo: !0,
                hasReviewPageLinkUpsell: _v3,
                hasUpsellInShareModal: _v2,
                hasMultipleReviewLinks: _v4,
                onCopyVideo: _v8 ? () => _v8(_v0) : void 0,
                onMoreInfo: () => _v9(_v0.uri),
                onMoveSuccess: ({
                  selectedDestination: _v0,
                  video: _v1,
                  destinationWorkspaceId: _v2,
                  destinationWorkspaceName: _v3
                }) => {
                  if (_v0(_v1.uri, _v1, _v5), _v11?.(_v1.uri, "video"), _v2 && _v3) {
                    let _v0 = "root" === _v0 ? _v6 : _v0.name,
                      _v1 = "root" === _v0 ? "/library" : (0, _v67.getFolderPageUriFromApiUri)(_v0.uri);
                    _v19(_v1.name, {
                      label: _v0,
                      workspaceName: _v3
                    }, () => {
                      _v23 && (0, _v117.switchTeam)(_v2, _v23.xsrft).finally(() => {
                        window.location.href = _v1;
                      });
                    });
                  } else "root" !== _v0 && _v18(_v1.name, {
                    label: _v0.name,
                    link: (0, _v67.getFolderPageUriFromApiUri)(_v0.uri)
                  });
                },
                onDelete: () => {
                  _v0(_v0.uri, _v1, _v5), _v11?.(_v0.uri, "video"), _v20(_v70.VideoActionAnalytics.clickDeleteVideo({
                    live_event_id: null,
                    origin_folder_id: null,
                    origin_type: null,
                    is_my_videos: null,
                    location: _v70.AnalyticsLocations.VIDEO_LIST
                  }));
                },
                analytics: {
                  location: "video_list",
                  element: "ellipses"
                },
                vimeoClickAnalytics: {
                  location: "video_list"
                }
              }),
              onDragBegin: () => {
                _v14?.(!1);
              },
              onDragEnd: _v1,
              type: _v119.ITEM_TYPES.ROOT_VIDEO,
              selectedItemURIs: _v12,
              canDrag: _v13,
              parentFolderUri: "root",
              v2PageName: "video_library"
            }, _v6);
          }
          if (_v0.folder && _v0.folder.uri) {
            let {
                folder: _v0
              } = _v0,
              _v1 = _v17.type === _v47.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v2 = parseInt(_v0.uri.split("/")?.[2]),
              _v3 = parseInt(_v0.folder.uri.split("/")[4]);
            return (0, _v1.jsx)(_v155.DroppableListFolder, {
              dropTarget: _v0,
              dropTargetType: _v119.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v119.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: _v24.enable_list_view_folder_upload && null != _v26 ? {
                targetUserId: _v26,
                folderId: _v3,
                folderName: _v0.name,
                uploadClipProperties: _v30
              } : void 0,
              isLoading: !!_v7 && _v7.has(_v0.uri),
              href: (0, _v67.getFolderPageUriFromApiUri)(_v0.uri),
              title: _v0.name,
              thumbnail: (0, _v1.jsx)(_v152.FolderRowThumbnail, {
                backgroundColor: _v0.settings?.color
              }),
              subTitle: (0, _v141.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
              timestamp: _v22(_v1),
              privacy: _v15 ? "—" : "",
              shouldShowFileSize: _v16,
              pageName: _v21,
              fileSize: "—",
              folderId: _v3,
              canRename: !0,
              folderOwnerId: _v2,
              hoverActions: (0, _v1.jsx)(_v151.ListViewHoverActionsContainer, {
                children: (0, _v1.jsx)(_v150.FolderTopRightDecoration, {
                  folder: _v0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list"
                })
              }),
              menuButton: (0, _v1.jsx)(_v134.FolderMenu, {
                folder: _v0,
                analytics: {
                  product: "Video Library",
                  feature: "video_library",
                  location: "folder_card"
                },
                onMoveSuccess: _v10,
                libraryType: _v28
              }),
              onClick: () => {
                _v122.BigPictureClient.sendEvent(new _v122.Event("vimeo.click_folder_card", 3, {
                  path: window.location.href,
                  entry_page: "mvv",
                  page: "mvv",
                  location: _v70.AnalyticsLocations.FOLDER_LIST,
                  team_owner_id: String(_v2),
                  team_size: _v23?.teamUser?.currentTeamSize ?? null,
                  team_subscription_type: _v23?.teamUser?.accountType ?? null,
                  actor_team_role: _v23?.teamUser?.plainTextPermissionLevel ?? null,
                  product: "Video Library",
                  actor_resource_role: null,
                  folder_id: _v0.folder?.uri.split("/").pop() ?? null,
                  is_subfolder: null,
                  folder_share_status: null,
                  is_private_to_me: null,
                  parent_folder_id: null,
                  position_row: null,
                  position_column: null,
                  customizations: null,
                  layout: "list"
                })), _v29({
                  folderUri: _v0.folder?.uri,
                  isPrivateToUser: _v0.folder?.isPrivateToUser
                });
              },
              v2PageName: "video_library"
            }, _v0.uri);
          }
          return (0, _v1.jsx)(_v1.Fragment, {});
        }) : (0, _v1.jsx)(_v7.Flex, {
          direction: "column",
          width: "100%",
          gap: "sm",
          children: (0, _v1.jsx)(_v76.LoadingStateList, {})
        })
      });
    };
  function _v158({
    deselectItem: _v0,
    handleMoveItemsOnDrop: _v1,
    hasFolderShareUpsell: _v2,
    hasReviewPageUpsell: _v3,
    hasMultipleReviewLinks: _v4,
    items: _v5,
    libraryTitle: _v6,
    loadingFolderURIs: _v7 = new Set(),
    onCopyVideo: _v8,
    onMoreInfo: _v9,
    onMoveFolderSuccess: _v10,
    selectedItemURIs: _v11 = new Set(),
    selectItem: _v12,
    setIsUploadDropzoneEnabled: _v13,
    shouldShowPrivacy: _v14 = !1,
    shouldShowFileSize: _v15 = !1,
    sort: _v16
  }) {
    return (0, _v1.jsx)(_v157, {
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      libraryTitle: _v6,
      loadingFolderURIs: _v7,
      items: _v5,
      onCopyVideo: _v8,
      selectItem: _v12,
      selectedItemURIs: _v11,
      shouldShowPrivacy: _v14,
      shouldShowFileSize: _v15,
      setIsUploadDropzoneEnabled: _v13,
      sort: _v16,
      onMoreInfo: _v9,
      onMoveFolderSuccess: _v10,
      hasFolderShareUpsell: _v2,
      hasReviewPageUpsell: _v3,
      hasMultipleReviewLinks: _v4
    });
  }
  function _v159({
    canUpload: _v0,
    deselectItem: _v1,
    handleMoveItemsOnDrop: _v2,
    hasFolderShareUpsell: _v3,
    hasReviewPageUpsell: _v4,
    hasMultipleReviewLinks: _v5,
    isEnterprise: _v6,
    items: _v7,
    loadingFolderURIs: _v8 = new Set(),
    onCopyVideo: _v9,
    onFolderSettingsChange: _v10,
    onMoreInfo: _v11,
    removeItem: _v12,
    selectedItemURIs: _v13,
    selectItem: _v14,
    setIsUploadDropzoneEnabled: _v15,
    shouldShowPrivacy: _v16 = !1,
    shouldShowFileSize: _v17 = !1,
    sort: _v18,
    layout: _v19,
    isLoading: _v20 = !1,
    hasContentSpaceEnabled: _v21
  }) {
    let _v22 = (0, _v5.useContext)(_v107.ViewerContext),
      _v23 = _v22?.teamUser?.ownerId ?? _v22?.user?.id,
      _v24 = (0, _v104.useTeamUploadClipProperties)(_v23),
      _v25 = _v21 ? (0, _v16.translate)({
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
      {
        notifyItemMoveSuccess: _v26,
        notifyItemMoveToWorkspaceSuccess: _v27,
        notifyItemMoveFailure: _v28
      } = (0, _v42.useNotifications)(),
      {
        revalidateTopLevelFolders: _v29,
        revalidateFolderItems: _v30,
        revalidateRootItems: _v31
      } = (0, _v40.useRevalidate)(),
      _v32 = (_v0, _v1, _v2, _v3) => {
        _v29(), _v1[0].parentFolder?.uri ? _v30(_v1[0]?.parentFolder?.uri ?? "") : _v31(), "root" !== _v0 && _v30(_v0.uri);
        let _v4 = "root" === _v0 ? _v25 : _v0.name,
          _v5 = "root" === _v0 ? "/library" : (0, _v67.getFolderPageUriFromApiUri)(_v0.uri);
        _v2 && _v3 ? _v27(_v1[0].name, {
          label: _v4,
          workspaceName: _v3
        }, () => {
          _v22 && (0, _v117.switchTeam)(_v2, _v22.xsrft).finally(() => {
            window.location.href = _v5;
          });
        }) : _v26(_v1[0].name, {
          label: _v4,
          link: _v5
        });
      },
      {
        draggableItemIsHovering: _v33,
        dropRef: _v34
      } = (0, _v118.useDropFolder)({
        dropTargetType: _v119.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
        dropTarget: void 0,
        allowedDropEffect: null,
        dropFileForUploadConfig: null != _v23 && _v0 ? {
          targetUserId: _v23,
          folderId: void 0,
          folderName: _v25,
          uploadClipProperties: _v24
        } : void 0
      });
    return (0, _v1.jsx)(_v74.Box, {
      height: "100%",
      width: "100%",
      ref: _v34,
      backgroundColor: _v33 ? "rgba(23, 213, 255, 0.06)" : "transparent",
      borderColor: _v33 ? "vimeoBlue.500" : "transparent",
      borderRadius: "lg",
      borderWidth: ".125rem",
      transition: "background-color 0.2s ease, border-color 0.2s ease",
      children: _v19 === _v47.LAYOUT.GRID ? (0, _v1.jsx)(_v145, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        isEnterprise: _v6,
        items: _v7,
        libraryTitle: _v25,
        loadingFolderURIs: _v8,
        onCopyVideo: _v9,
        onFolderSettingsChange: _v10,
        onMoreInfo: _v11,
        onMoveFolderSuccess: _v32,
        onMoveFolderFailure: (_v0, _v1) => {
          _v28(_v1[0].name, "root" === _v0 ? _v25 : _v0.name);
        },
        removeItem: _v12,
        selectedItemURIs: _v13,
        selectItem: _v14,
        setIsUploadDropzoneEnabled: _v15,
        sort: _v18,
        isLoading: _v20
      }) : (0, _v1.jsx)(_v158, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        hasFolderShareUpsell: _v3,
        hasReviewPageUpsell: _v4,
        hasMultipleReviewLinks: _v5,
        items: _v7,
        libraryTitle: _v25,
        loadingFolderURIs: _v8,
        onCopyVideo: _v9,
        selectedItemURIs: _v13,
        selectItem: _v14,
        setIsUploadDropzoneEnabled: _v15,
        shouldShowPrivacy: _v16,
        shouldShowFileSize: _v17,
        sort: _v18,
        onMoreInfo: _v11,
        onMoveFolderSuccess: _v32
      })
    });
  }
  var _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0);
  let _v168 = ["image/png", "image/x-png", "image/jpeg"],
    _v169 = ["#63b3ed", "#9ecd82", "#feb2b2", "#a686eb"],
    _v170 = ({
      apiConfig: _v0,
      isOpen: _v1,
      onClose: _v2,
      onContinue: _v3
    }) => {
      let [_v4, _v5] = (0, _v5.useState)(""),
        [_v6, _v7] = (0, _v5.useState)(""),
        [_v8, _v9] = (0, _v5.useState)(_v169[0]),
        [_v10, _v11] = (0, _v5.useState)(!1),
        [_v12, _v13] = (0, _v5.useState)(""),
        _v14 = (0, _v5.useRef)(null),
        _v15 = () => {
          _v5(""), _v7(""), _v9(_v169[0]), _v11(!1), _v13(""), _v2();
        },
        _v16 = async _v0 => {
          if (_v13(""), !_v0 || 0 === _v0.length) return;
          let _v1 = _v0[0];
          if (_v1.size > 0 || 0 > _v168.indexOf(_v1.type)) return void _v13((0, _v16.translate)({
            singular: "Please use a JPEG or PNG file under {size}MB.",
            replacements: {
              size: 2
            },
            dictionary: {
              es: {
                singular: "Por favor utiliza un archivo JPEG o PNG de menos de {size}MB."
              },
              "de-DE": {
                singular: "Bitte verwenden Sie eine JPEG- oder PNG-Datei unter {size}MB."
              },
              "fr-FR": {
                singular: "Veuillez utiliser un fichier JPEG ou PNG de moins de {size}MB."
              },
              "ja-JP": {
                singular: "JPEG または PNG 形式で、{size}MB 以下のファイルを使用してください。"
              },
              "ko-KR": {
                singular: "JPEG 또는 PNG 파일을 {size}MB 미만으로 사용해 주세요."
              },
              "pt-BR": {
                singular: "Por favor, use um arquivo JPEG ou PNG com menos de {size}MB."
              },
              "zh-CN": {
                singular: "请使用小于 {size}MB 的 JPEG 或 PNG 文件。"
              }
            }
          }));
          _v11(!0);
          try {
            let _v0 = await (0, _v98.uploadLogo)(_v0, _v1);
            _v7(_v0);
          } catch {
            _v13(_v98.defaultError);
          }
          _v11(!1);
        },
        _v17 = !_v4.trim() || _v10;
      return (0, _v1.jsxs)(_v84.Modal, {
        isOpen: _v1,
        onClose: _v15,
        isCentered: !0,
        children: [(0, _v1.jsx)(_v87.ModalOverlay, {}), (0, _v1.jsxs)(_v86.ModalContent, {
          maxW: (0, _v102.rem)(540),
          borderRadius: (0, _v102.rem)(20),
          children: [(0, _v1.jsxs)(_v166.ModalHeader, {
            children: [(0, _v1.jsx)(_v89.Text, {
              fontSize: (0, _v102.rem)(20),
              fontWeight: "medium",
              color: "text-primary",
              children: (0, _v16.translate)({
                singular: "Start your team",
                dictionary: {
                  es: {
                    singular: "Comience su equipo"
                  },
                  "de-DE": {
                    singular: "Baue dein Team auf"
                  },
                  "fr-FR": {
                    singular: "Lancer votre équipe"
                  },
                  "ja-JP": {
                    singular: "チームを始める"
                  },
                  "ko-KR": {
                    singular: "팀 꾸리기"
                  },
                  "pt-BR": {
                    singular: "Crie sua equipe"
                  },
                  "zh-CN": {
                    singular: "组建团队"
                  }
                }
              })
            }), (0, _v1.jsx)(_v89.Text, {
              marginTop: 1,
              fontSize: (0, _v102.rem)(14),
              color: "text-secondary",
              children: (0, _v16.translate)({
                singular: "Give your team a name, logo and color. You can change these anytime.",
                dictionary: {
                  es: {
                    singular: "Asigna a tu equipo un nombre, un logo y un color. Puedes cambiarlos en cualquier momento."
                  },
                  "de-DE": {
                    singular: "Geben Sie Ihrem Team einen Namen, ein Logo und eine Farbe. Sie können diese jederzeit ändern."
                  },
                  "fr-FR": {
                    singular: "Donnez à votre équipe un nom, un logo et une couleur. Vous pouvez les modifier à tout moment."
                  },
                  "ja-JP": {
                    singular: "チームに名前、ロゴ、カラーを設定してください。これらはいつでも変更できます。"
                  },
                  "ko-KR": {
                    singular: "팀의 이름, 로고 및 색상을 설정하세요. 언제든지 변경할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Dê à sua equipe um nome, logotipo e uma cor. Você pode alterar isso a qualquer momento."
                  },
                  "zh-CN": {
                    singular: "为您的团队设置名称、徽标和颜色。您可以随时更改这些设置。"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v85.ModalCloseButton, {
            "aria-label": (0, _v16.translate)({
              singular: "Close",
              dictionary: {
                es: {
                  singular: "Cerrar"
                },
                "de-DE": {
                  singular: "Schließen"
                },
                "fr-FR": {
                  singular: "Fermer "
                },
                "ja-JP": {
                  singular: "閉じる"
                },
                "ko-KR": {
                  singular: "닫기"
                },
                "pt-BR": {
                  singular: "Fechar"
                },
                "zh-CN": {
                  singular: "关闭"
                }
              }
            })
          }), (0, _v1.jsxs)(_v164.ModalBody, {
            children: [(0, _v1.jsxs)(_v160.FormControl, {
              isRequired: !0,
              children: [(0, _v1.jsx)(_v161.FormLabel, {
                children: (0, _v16.translate)({
                  singular: "Team name",
                  dictionary: {
                    es: {
                      singular: "Nombre del equipo"
                    },
                    "de-DE": {
                      singular: "Teamname"
                    },
                    "fr-FR": {
                      singular: "Nom de l'équipe"
                    },
                    "ja-JP": {
                      singular: "チーム名"
                    },
                    "ko-KR": {
                      singular: "팀 이름"
                    },
                    "pt-BR": {
                      singular: "Nome da equipe"
                    },
                    "zh-CN": {
                      singular: "团队名称"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v163.Input, {
                autoFocus: !0,
                maxLength: 50,
                placeholder: (0, _v16.translate)({
                  singular: "Enter a team name",
                  dictionary: {
                    es: {
                      singular: "Ingresa un nombre para el equipo"
                    },
                    "de-DE": {
                      singular: "Teamnamen eingeben"
                    },
                    "fr-FR": {
                      singular: "Saisissez un nom d'équipe"
                    },
                    "ja-JP": {
                      singular: "チーム名を入力してください"
                    },
                    "ko-KR": {
                      singular: "팀 이름 입력"
                    },
                    "pt-BR": {
                      singular: "Digite o nome da equipe"
                    },
                    "zh-CN": {
                      singular: "输入团队名称"
                    }
                  }
                }),
                value: _v4,
                onChange: _v0 => _v5(_v0.target.value),
                "data-testid": "start-your-team-name-input"
              }), (0, _v1.jsx)(_v89.Text, {
                marginTop: 1,
                fontSize: (0, _v102.rem)(12),
                color: "text-tertiary",
                textAlign: "right",
                children: (0, _v16.translate)({
                  singular: "{current}/{max}",
                  replacements: {
                    current: _v4.length,
                    max: 50
                  }
                })
              })]
            }), (0, _v1.jsxs)(_v160.FormControl, {
              marginTop: 4,
              children: [(0, _v1.jsx)(_v161.FormLabel, {
                children: (0, _v16.translate)({
                  singular: "Team logo",
                  dictionary: {
                    es: {
                      singular: "Logo del equipo"
                    },
                    "de-DE": {
                      singular: "Team-Logo"
                    },
                    "fr-FR": {
                      singular: "Logo de l'équipe"
                    },
                    "ja-JP": {
                      singular: "チームのロゴ"
                    },
                    "ko-KR": {
                      singular: "팀 로고"
                    },
                    "pt-BR": {
                      singular: "Logotipo da equipe"
                    },
                    "zh-CN": {
                      singular: "团队徽标"
                    }
                  }
                })
              }), (0, _v1.jsxs)(_v7.Flex, {
                as: "button",
                type: "button",
                onClick: () => _v14.current?.click(),
                alignItems: "center",
                gap: 4,
                padding: 4,
                width: "100%",
                bg: "fill-surface",
                border: "1px solid",
                borderColor: "input-stroke",
                borderRadius: (0, _v102.rem)(12),
                textAlign: "left",
                "data-testid": "start-your-team-logo-uploader",
                children: [(0, _v1.jsx)(_v7.Flex, {
                  flexShrink: 0,
                  width: (0, _v102.rem)(100),
                  height: (0, _v102.rem)(56),
                  borderRadius: (0, _v102.rem)(8),
                  bg: "fill-component",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  children: _v10 ? (0, _v1.jsx)(_v103.Spinner, {
                    size: "sm"
                  }) : _v6 ? (0, _v1.jsx)(_v162.Image, {
                    src: _v6,
                    alt: (0, _v16.translate)({
                      singular: "Team logo",
                      dictionary: {
                        es: {
                          singular: "Logo del equipo"
                        },
                        "de-DE": {
                          singular: "Team-Logo"
                        },
                        "fr-FR": {
                          singular: "Logo de l'équipe"
                        },
                        "ja-JP": {
                          singular: "チームのロゴ"
                        },
                        "ko-KR": {
                          singular: "팀 로고"
                        },
                        "pt-BR": {
                          singular: "Logotipo da equipe"
                        },
                        "zh-CN": {
                          singular: "团队徽标"
                        }
                      }
                    }),
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }) : (0, _v1.jsx)(_v167.Upload, {
                    color: "text-secondary",
                    boxSize: (0, _v102.rem)(24)
                  })
                }), (0, _v1.jsxs)(_v74.Box, {
                  children: [(0, _v1.jsx)(_v89.Text, {
                    fontSize: (0, _v102.rem)(14),
                    fontWeight: "medium",
                    color: "text-primary",
                    children: (0, _v16.translate)({
                      singular: "Upload picture",
                      dictionary: {
                        es: {
                          singular: "Subir imagen"
                        },
                        "de-DE": {
                          singular: "Bild hochladen"
                        },
                        "fr-FR": {
                          singular: "Téléverser une image"
                        },
                        "ja-JP": {
                          singular: "画像をアップロード"
                        },
                        "ko-KR": {
                          singular: "사진 업로드"
                        },
                        "pt-BR": {
                          singular: "Carregar imagem"
                        },
                        "zh-CN": {
                          singular: "上传图片"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v89.Text, {
                    fontSize: (0, _v102.rem)(12),
                    color: "text-secondary",
                    children: (0, _v16.translate)({
                      singular: "Max size {size}MB",
                      replacements: {
                        size: 2
                      },
                      dictionary: {
                        es: {
                          singular: "Tamaño máximo {size}MB"
                        },
                        "de-DE": {
                          singular: "Maximale Größe {size}MB"
                        },
                        "fr-FR": {
                          singular: "Taille maximale {size}MB"
                        },
                        "ja-JP": {
                          singular: "最大サイズ {size}MB"
                        },
                        "ko-KR": {
                          singular: "최대 {size}MB"
                        },
                        "pt-BR": {
                          singular: "Tamanho máximo {size}MB"
                        },
                        "zh-CN": {
                          singular: "最大 {size}MB"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v1.jsx)("input", {
                ref: _v14,
                type: "file",
                accept: _v168.join(","),
                hidden: !0,
                onChange: _v0 => _v16(_v0.target.files)
              })]
            }), (0, _v1.jsxs)(_v160.FormControl, {
              marginTop: 4,
              children: [(0, _v1.jsx)(_v161.FormLabel, {
                children: (0, _v16.translate)({
                  singular: "Accent color",
                  dictionary: {
                    es: {
                      singular: "Color de contraste"
                    },
                    "de-DE": {
                      singular: "Farbakzent"
                    },
                    "fr-FR": {
                      singular: "Accentuer la couleur"
                    },
                    "ja-JP": {
                      singular: "アクセントカラー"
                    },
                    "ko-KR": {
                      singular: "강조색"
                    },
                    "pt-BR": {
                      singular: "Tom de cor"
                    },
                    "zh-CN": {
                      singular: "强调色"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v7.Flex, {
                gap: 2,
                children: _v169.map(_v0 => {
                  let _v1 = _v0 === _v8;
                  return (0, _v1.jsx)(_v74.Box, {
                    as: "button",
                    type: "button",
                    "aria-label": _v0,
                    "aria-pressed": _v1,
                    onClick: () => _v9(_v0),
                    flexShrink: 0,
                    width: (0, _v102.rem)(32),
                    height: (0, _v102.rem)(32),
                    borderRadius: "full",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid",
                    borderColor: _v1 ? "text-primary" : "transparent",
                    children: (0, _v1.jsx)(_v74.Box, {
                      flexShrink: 0,
                      width: (0, _v102.rem)(24),
                      height: (0, _v102.rem)(24),
                      borderRadius: "full",
                      bg: _v0,
                      border: "1px solid",
                      borderColor: "stroke"
                    })
                  }, _v0);
                })
              })]
            }), _v12 && (0, _v1.jsx)(_v89.Text, {
              marginTop: 3,
              fontSize: (0, _v102.rem)(12),
              color: "status-destructive-primary",
              children: _v12
            })]
          }), (0, _v1.jsxs)(_v165.ModalFooter, {
            gap: 3,
            children: [(0, _v1.jsx)(_v6.Button, {
              variant: "tertiary",
              onClick: _v15,
              children: (0, _v16.translate)({
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
              })
            }), (0, _v1.jsx)(_v6.Button, {
              variant: "primary",
              onClick: () => {
                _v13(""), _v3({
                  teamName: _v4.trim(),
                  accentColor: _v8,
                  logoUrl: _v6
                });
              },
              isDisabled: _v17,
              "data-testid": "start-your-team-continue-button",
              children: (0, _v16.translate)({
                singular: "Continue",
                dictionary: {
                  es: {
                    singular: "Continuar"
                  },
                  "de-DE": {
                    singular: "Weiter"
                  },
                  "fr-FR": {
                    singular: "Continuer"
                  },
                  "ja-JP": {
                    singular: "次へ"
                  },
                  "ko-KR": {
                    singular: "계속"
                  },
                  "pt-BR": {
                    singular: "Continuar"
                  },
                  "zh-CN": {
                    singular: "继续"
                  }
                }
              })
            })]
          })]
        })]
      });
    },
    _v171 = ["video", "folder"];
  function _v172({
    playerAssetUrls: _v0,
    viewer: _v1
  }) {
    let {
        step: _v2,
        handleDismiss: _v3,
        handleCtaClick: _v4,
        handleErrorClose: _v5
      } = (0, _v65.useViewerAiUpsellModal)("library"),
      [_v6, _v7] = (0, _v5.useState)(null),
      _v8 = (0, _v9.useToast)(),
      [_v9, _v10] = (0, _v45.useSortPreference)(_v47.DEFAULT_SORT, _v47.VL_SORT_LOCAL_STORAGE_KEY),
      [_v11, _v12] = (0, _v46.useDateDisplayPreference)(_v47.DEFAULT_DATE_DISPLAY, _v47.VL_DATE_LOCAL_STORAGE_KEY),
      [_v13, _v14] = (0, _v5.useState)(null),
      [_v15, _v16] = (0, _v5.useState)(!1),
      [_v17, _v18] = (0, _v5.useState)(!1),
      _v19 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      [_v20, _v21] = (0, _v5.useState)(!1),
      [_v22, _v23] = (0, _v5.useState)(null),
      [_v24, _v25] = (0, _v5.useState)(0),
      _v26 = _v19 && _v1 ? {
        apiUrl: _v1.apiUrl,
        jwt: _v1.jwt,
        ownerId: _v19
      } : void 0,
      _v27 = (0, _v30.useAnalyticsEvent)(),
      {
        trackLibraryPageDisplayed: _v28,
        trackLibraryViewChanged: _v29,
        trackLibraryFilterApplied: _v30,
        trackLibrarySortChanged: _v31
      } = (0, _v22.useLibraryTracking)(),
      _v32 = (0, _v4.useRouter)(),
      _v33 = {
        alphabetical_asc: "title_a_to_z",
        alphabetical_desc: "title_z_to_a",
        last_user_action_event_date_desc: "last_modified",
        last_user_action_event_date_asc: "first_modified",
        date_desc: "last_added",
        date_asc: "first_added",
        duration_desc: "longest",
        duration_asc: "shortest"
      },
      {
        capabilities: _v34,
        ready: _v35
      } = (0, _v12.useCapability)(["canCreateRootFolders", "canAddTeamMembers", "canSeeUpsellModalOnShare", "privateModeOff", "canManageTeamCollections", "hasVideoReviewPageDemo", "hasContentSpaceEnabled", "hasEnterprise", "regionalDeliveryPublishContentToChina", "hasContentSpaceEnabled", "hasMultipleReviewLinks", "hasTeamPrivacy", "coldStorageClips", "canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasVideoLibraryEmbeddableUploader"], `/users/${_v19}`),
      _v36 = !!_v34.canGenerateClipTextTranslation,
      _v37 = (!!_v34.canGenerateClipTranslation || _v36) && !!_v34.canPerformBulkTranslations,
      {
        revalidateRootItems: _v38,
        revalidateTopLevelFolders: _v39
      } = (0, _v40.useRevalidate)(),
      {
        setLoadingSideNavFolderURIs: _v40
      } = (0, _v5.useContext)(_v43.VideoLibraryLayoutContext),
      _v41 = (0, _v42.useNotification)(),
      {
        notifyItemMoveSuccess: _v42
      } = (0, _v42.useNotifications)(),
      _v43 = (0, _v5.useRef)(() => void 0),
      {
        openCopyVideoModal: _v44,
        copyVideoModal: _v45
      } = (0, _v62.useCopyVideoFlow)({
        onAfterCopySuccess: (_v0, _v1) => _v43.current(_v1.uri, _v0)
      }),
      _v46 = _v1?.teamUser?.plainTextPermissionLevel,
      _v47 = _v19 === _v1?.user?.id || "Admin" === _v46,
      _v48 = (0, _v27.useGracePeriodBillingUi)({
        orionFlag: "enable_library_grace_period_notifications",
        layout: {
          type: "library"
        }
      }),
      {
        hasColdStorage: _v49
      } = (0, _v72.useUserHasColdStorageVideos)({
        forceEligible: _v48.isStorageSuspended
      }),
      _v50 = !!_v34.coldStorageClips && _v47 || _v49 && _v47,
      {
        settings: _v51
      } = (0, _v19.useOrionSettings)(),
      _v52 = _v51?.cold_privacy_enabled ?? !1,
      {
        hasColdPrivacy: _v53,
        isLoading: _v54
      } = (0, _v71.useUserHasColdPrivacyVideos)({
        enabled: _v52 || _v49
      }),
      _v55 = _v52 && _v53,
      _v56 = (0, _v37.useContentTypeFilter)([..._v171]),
      _v57 = !(0, _v69.isContentTypeSelectionDefault)(_v171, _v56.value) && !(0, _v69.doesSelectionIncludeVideos)(_v171, _v56.value),
      _v58 = !(0, _v69.isContentTypeSelectionDefault)(_v171, _v56.draft) && !(0, _v69.doesSelectionIncludeVideos)(_v171, _v56.draft),
      _v59 = (0, _v39.useVideoAvailabilityFilter)(),
      _v60 = (0, _v36.useClipPrivacyFilter)(["unlisted", "password", "hide_from_vimeo", "team", "private", "public", ...(_v55 ? ["cold_privacy"] : [])], !!_v34?.hasTeamPrivacy),
      _v61 = [..._v60.value],
      _v62 = _v60.value.has("cold_privacy"),
      _v63 = (0, _v69.doesSelectionIncludeVideos)(_v171, _v56.value) && _v59.value.has("restricted") !== _v59.value.has("available") || _v62,
      _v64 = (0, _v38.useCreatedByFilter)(),
      _v65 = !!_v60.isFilterActive || !!_v64.isFilterActive || !!_v59.isFilterActive,
      _v66 = !!_v60.isFilterActive || !!_v64.isFilterActive,
      _v67 = !!_v60.isDraftActive || !!_v64.isDraftActive,
      _v68 = !!_v60.isFilterActive || !!_v64.isFilterActive,
      _v69 = !!_v60.isDraftActive || !!_v64.isDraftActive,
      [_v70, _v71] = (0, _v5.useState)(!0),
      [_v72, _v73] = (0, _v44.useLayoutPreference)(),
      _v74 = !!_v34.canCreateRootFolders,
      _v75 = !!(_v70 && _v47),
      _v76 = _v51?.enable_new_library_drag_and_drop_upload ?? !1,
      _v77 = _v51?.enable_content_space_team_gate ?? !1,
      _v78 = _v49 || _v55,
      _v79 = _v75 && !_v76,
      _v80 = !!_v34.hasEnterprise,
      _v81 = _v35 ? _v34?.hasContentSpaceEnabled ? (0, _v16.translate)({
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
      }) : "";
    (0, _v29.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v38();
    }, []), (0, _v18.useOttRedirect)({
      toast: _v8,
      config: {
        message: (0, _v16.translate)({
          singular: "Team library videos are now managed on Vimeo",
          dictionary: {
            es: {
              singular: "Los videos de la biblioteca del equipo ahora se administran en Vimeo"
            },
            "de-DE": {
              singular: "Videos der Teambibliothek werden jetzt auf Vimeo verwaltet"
            },
            "fr-FR": {
              singular: "Les vidéos de la bibliothèque de l'équipe sont désormais gérées sur Vimeo"
            },
            "ja-JP": {
              singular: "チームライブラリの動画がVimeoで管理されるようになりました"
            },
            "ko-KR": {
              singular: "이제 팀 라이브러리 동영상은 Vimeo에서 관리됩니다."
            },
            "pt-BR": {
              singular: "Os vídeos da biblioteca da equipe agora são gerenciados no Vimeo"
            },
            "zh-CN": {
              singular: "团队视频库的视频现在在 Vimeo 上管理"
            }
          }
        })
      }
    });
    let _v82 = (0, _v13.useIsMobile)(),
      _v83 = !!_v34.hasContentSpaceEnabled,
      _v84 = !_v47 && _v83,
      {
        data: _v85,
        mutate: _v86,
        setSize: _v87,
        size: _v88
      } = (0, _v15.useGetUserFoldersRootInfinite)(() => {
        let _v0 = _v60.isFilterActive && !_v63 ? _v61.join(",") : void 0,
          _v1 = _v64.isFilterActive ? [..._v64.value].map(_v0 => _v0.userId) : void 0,
          _v2 = _v1?.length ? _v1.join(",") : void 0,
          _v3 = (0, _v69.getContentTypeApiFilterParam)(_v171, _v56.value);
        return _v19 ? {
          where: {
            userId: _v19
          },
          select: _v156,
          query: {
            direction: _v9.direction,
            excludePersonalTeamFolder: !_v35 || _v83,
            excludeSharedVideos: _v84,
            includeColdStorageClips: _v50,
            ...(_v3 && {
              filter: _v3
            }),
            clipPrivacyFilters: _v0,
            clipCreatedByFilters: _v2,
            noPadding: !0,
            perPage: 25,
            sort: _v9.type,
            responsive: !0
          },
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4"
          }
        } : null;
      }),
      _v89 = (0, _v5.useMemo)(() => _v85 ? _v85.flatMap(_v0 => {
        if (!_v0) return [];
        let _v1 = _v0.data.filter(_v0 => (0, _v68.passesLibraryItemClientFilters)({
          clipPrivacyFilter: _v60.value,
          contentTypeOptions: _v171,
          contentTypeSelection: _v56.value,
          item: _v0,
          shouldUseClientPipeline: _v63,
          videoAvailabilityFilter: _v59.value
        }));
        return [{
          ..._v0,
          data: _v1
        }];
      }) : _v85, [_v60.value, _v56.value, _v85, _v63, _v59.value]),
      _v90 = (0, _v5.useCallback)(({
        name: _v0,
        settings: {
          color: _v1
        },
        uri: _v2
      }) => {
        _v86(_v0 => _v0?.map(_v0 => ({
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
      }, [_v86]),
      _v91 = (0, _v5.useCallback)((_v0, _v1) => {
        _v86(_v0 => _v0 ? _v0.map(_v0 => ({
          ..._v0,
          data: _v0.data.map(_v0 => _v0.video?.uri === _v0 ? {
            ..._v0,
            video: _v1(_v0.video)
          } : _v0)
        })) : _v0, !1);
      }, [_v86]),
      _v92 = (0, _v5.useCallback)((_v0, _v1) => {
        let _v2 = !1;
        _v86(_v0 => {
          let _v1 = (0, _v66.insertOptimisticVideoCopy)(_v0, _v0, _v1);
          return _v2 = _v1.inserted, _v1.pages;
        }, !1), _v2 || _v38();
      }, [_v86, _v38]);
    (0, _v5.useEffect)(() => {
      _v43.current = _v92;
    }, [_v92]);
    let _v93 = (0, _v5.useCallback)((_v0, _v1) => {
        _v86(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => _v0?.[_v1]?.uri !== _v0)
        })), !1);
      }, [_v86]),
      _v94 = (0, _v5.useCallback)(_v0 => {
        _v86(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => {
            let _v1 = _v0.video?.uri || _v0.folder?.uri || _v0.liveEvent?.uri;
            return !!_v1 && !_v0.has(_v1);
          })
        })), !1);
      }, [_v86]),
      [_v95, {
        enhancedSelectItem: _v96,
        enhancedDeselectItem: _v97,
        selectAllItems: _v98,
        deselectAllItems: _v99,
        shiftKeyChange: _v100
      }] = (0, _v73.useSelectedItems)(),
      _v101 = (0, _v5.useCallback)(() => {
        let _v0 = _v56.value,
          _v1 = (0, _v69.isContentTypeOptionChecked)(_v171, _v0, "video"),
          _v2 = _v59.value,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v99();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v56.setSelection((0, _v69.includeVideosInSelection)(_v171, _v0)), _v59.setValue(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v56.setSelection((0, _v69.excludeVideosFromSelection)(_v171, _v0)), _v59.clearFilter();
          return;
        }
        if (_v3 !== _v4) return void _v59.setValue(_v5());
        if (_v3 && _v4) {
          _v59.clearFilter(), _v56.setSelection((0, _v69.excludeVideosFromSelection)(_v171, _v0));
          return;
        }
      }, [_v56, _v99, _v59]),
      _v102 = (0, _v5.useCallback)(() => {
        let _v0 = _v56.draft,
          _v1 = (0, _v69.isContentTypeOptionChecked)(_v171, _v0, "video"),
          _v2 = _v59.draft,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v99();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v56.setSelection((0, _v69.includeVideosInSelection)(_v171, _v0), !0), _v59.setDraft(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v56.setSelection((0, _v69.excludeVideosFromSelection)(_v171, _v0), !0), _v59.setDraft(new Set());
          return;
        }
        if (_v3 !== _v4) return void _v59.setDraft(_v5());
        if (_v3 && _v4) {
          _v59.setDraft(new Set()), _v56.setSelection((0, _v69.excludeVideosFromSelection)(_v171, _v0), !0);
          return;
        }
      }, [_v56, _v99, _v59]),
      _v103 = _v49 || _v49 ? {
        onVideoParentCheckboxClick: _v101,
        setVideoAvailabilityFilter: _v0 => {
          let _v1 = _v56.value;
          (0, _v69.isContentTypeOptionChecked)(_v171, _v1, "video") || _v56.setSelection((0, _v69.includeVideosInSelection)(_v171, _v1)), _v59.updateFilterValues(_v0);
        },
        showAvailableOption: _v49,
        showRestrictedOption: _v49,
        videoAvailabilityFilter: _v59.value
      } : void 0,
      _v104 = _v49 || _v49 ? {
        onVideoParentCheckboxClick: _v102,
        onVideoAvailabilityChange: _v0 => {
          let _v1 = _v56.draft;
          (0, _v69.isContentTypeOptionChecked)(_v171, _v1, "video") || _v56.setSelection((0, _v69.includeVideosInSelection)(_v171, _v1), !0), _v59.updateFilterValues(_v0, !0);
        },
        showAvailableOption: _v49,
        showRestrictedOption: _v49,
        videoAvailabilityDraft: _v59.draft
      } : void 0,
      _v105 = (0, _v5.useRef)(!1),
      _v106 = (0, _v5.useCallback)(_v0 => {
        "Shift" === _v0.key && (_v105.current = !_v105.current, _v100(_v105.current));
      }, [_v105, _v100]);
    (0, _v5.useEffect)(() => (window.addEventListener("keydown", _v106), window.addEventListener("keyup", _v106), () => {
      window.removeEventListener("keydown", _v106), window.removeEventListener("keyup", _v106);
    }), [_v106]), (0, _v5.useEffect)(() => {
      _v82 || _v16(!1);
    }, [_v82]);
    let _v107 = _v32.query.filter;
    (0, _v5.useEffect)(() => {
      !_v49 || "string" != typeof _v107 || "locked" !== _v107.toLowerCase() || (!_v59.value.has("restricted") || _v59.value.has("available")) && (_v56.setSelection(new Set(["video"])), _v59.setValue(new Set(["restricted"])));
    }, [_v107, _v49]);
    let _v108 = (0, _v5.useRef)(!1);
    (0, _v5.useEffect)(() => {
      _v108.current || !_v55 || "string" != typeof _v107 || "cold_privacy" === _v107.toLowerCase() && (_v108.current = !0, _v60.value.has("cold_privacy") || _v60.updateFilterValues("cold_privacy"));
    }, [_v107, _v55]), (0, _v5.useEffect)(() => {
      if (!_v49 || (0, _v39.isVideoAvailabilityFilterExplicitlyEngaged)(_v59.value)) return;
      let _v0 = _v56.value;
      if (1 !== _v0.size || !_v0.has("video") || (_v56.setSelection(new Set()), !_v32.isReady)) return;
      let _v1 = _v32.query.filter;
      if ("string" != typeof _v1 || "locked" !== _v1.toLowerCase()) return;
      let _v2 = {
        ..._v32.query
      };
      delete _v2.filter, _v32.replace({
        pathname: _v32.pathname,
        query: _v2
      }, void 0, {
        shallow: !0
      });
    }, [_v59.value, _v56.value, _v49, _v32.isReady, _v32.pathname, _v32.query.filter]);
    let _v109 = _v95.selectedItemURIs,
      _v110 = (0, _v5.useMemo)(() => _v89?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.filter(_v0 => {
        let _v1 = (0, _v14.camelizeString)(_v0.type);
        return _v0[_v1]?.uri;
      })), [_v89]),
      {
        allItems: _v111,
        canMoveSelection: _v112,
        canDeleteSelection: _v113,
        canChangePrivacySelection: _v114,
        canAddToShowcasesSelection: _v115,
        hasColdStorageSelection: _v116,
        hasLegalHoldSelection: _v117,
        hasReachedMaxSelectionForMove: _v118,
        hasReachedMaxSelectionForPrivacy: _v119,
        hasReachedMaxSelectionForSentimentWidget: _v120,
        hasReachedMaxSelectionForShowcases: _v121,
        canSelectURIs: _v122,
        selectedItems: _v123
      } = (0, _v35.useBulkItems)({
        canDeleteItem: _v0 => !!_v0?.video?.metadata?.interactions?.delete,
        canMoveItem: _v0 => !!_v0?.video?.canMoveToProject,
        canChangeItemPrivacy: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit,
        canAddToShowcases: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit,
        hasLegalHold: _v0 => !!_v0.video?.uri && !!_v0.video?.metadata?.interactions?.legalHold?.uri,
        items: _v110,
        selectedURIs: _v109,
        allowColdStorageDeletion: !0
      }),
      _v124 = !!_v34.canManageTeamCollections && _v115,
      _v125 = (0, _v5.useCallback)(() => {
        _v98(_v111, _v122);
      }, [_v111, _v122, _v98]),
      [_v126] = (0, _v41.useMoveItem)(),
      [_v127, _v128] = (0, _v5.useState)(new Set());
    (0, _v5.useEffect)(() => {
      !_v82 && _v66 && _v56.setSelection(new Set(["video"]));
    }, [_v82, _v66]), (0, _v5.useEffect)(() => {
      _v67 && _v56.setSelection(new Set(["video"]), !0);
    }, [_v67]);
    let _v129 = _v1?.vimeoHttpsUrl ? _v1?.vimeoHttpsUrl + "/analytics" : void 0,
      _v130 = _v1?.teamUser,
      {
        isDone: _v131,
        isLoadingInitialData: _v132,
        isLoadingMore: _v133
      } = (0, _v28.getInfiniteRequestLoadingState)({
        data: _v85,
        itemsPerPage: 25,
        size: _v88
      }),
      _v134 = _v111?.length === 0,
      _v135 = !!_v56.isFilterApplied,
      _v136 = !_v84,
      _v137 = _v135 || _v65 || (0, _v39.isVideoAvailabilityFilterExplicitlyEngaged)(_v59.value),
      _v138 = _v63 ? _v110?.length : _v89?.[0]?.total,
      _v139 = !_v134 || _v137,
      _v140 = _v47 && !!_v129,
      _v141 = !!_v34.hasVideoLibraryEmbeddableUploader && _v47 && !!_v19,
      _v142 = !!_v34.canCreateRootFolders,
      _v143 = _v139 && (_v140 || _v141 || _v142);
    return (0, _v21.usePicoEffect)(() => {
      if (!_v35 || void 0 === _v138) return !1;
      let _v0 = (0, _v23.deriveLibraryReferrerPage)(_v32.query.library_referrer);
      _v28({
        libraryType: (0, _v23.deriveLibraryType)({
          hasContentSpaceEnabled: _v83
        }),
        libraryItemCount: _v138,
        referrerPage: _v0
      });
    }, [_v35, _v138, _v83, _v32.query.library_referrer], {
      once: !0
    }), (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v26 && (0, _v1.jsx)(_v170, {
        apiConfig: _v26,
        isOpen: _v20,
        onClose: () => _v21(!1),
        onContinue: _v0 => {
          _v23(_v0), _v21(!1), _v18(!0);
        }
      }, _v24), (0, _v1.jsxs)(_v110, {
        children: [(0, _v1.jsxs)(_v57.Page, {
          children: [(0, _v1.jsxs)(_v57.Page.Main, {
            children: [(0, _v1.jsxs)(_v57.Page.StickyTop, {
              children: [_v48.banner, (0, _v1.jsx)(_v20.ReverseTrialLateBanner, {
                hostLocation: "library"
              }), _v78 && (0, _v1.jsx)(_v17.ColdStorageBanner, {
                surface: "library",
                hasColdStorage: _v49,
                hasColdPrivacy: _v55,
                hasColdPrivacyForTracking: _v53,
                isColdPrivacyLoading: _v54
              }), (0, _v1.jsx)(_v56.PageHeader, {
                actions: _v143 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [_v140 && _v129 && (0, _v1.jsx)(_v34.AnalyticsButton, {
                    analyticsLink: _v129,
                    location: _v142,
                    page: "library",
                    name: "click_library_analytics",
                    dataTestId: "library-header-analytics-button"
                  }), _v141 && _v19 && (0, _v1.jsx)(_v33.UploadButton, {
                    paywallTrigger: "library_header_upload_button",
                    targetUserId: _v19,
                    testIdPrefix: "library-header-upload-button",
                    onClick: () => _v27((0, _v70.genericClick)({
                      copy: "Upload",
                      feature: "video_library",
                      location: _v142,
                      name: "click_upload_button",
                      page: "library",
                      target: null,
                      target_path: null,
                      click_type: null,
                      device_type: null,
                      type: "general"
                    }, 91))
                  }), _v142 && (0, _v1.jsx)(_v116, {}), _v26 && _v77 && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v8.IconButton, {
                      "aria-label": (0, _v16.translate)({
                        singular: "Start your team",
                        dictionary: {
                          es: {
                            singular: "Comience su equipo"
                          },
                          "de-DE": {
                            singular: "Baue dein Team auf"
                          },
                          "fr-FR": {
                            singular: "Lancer votre équipe"
                          },
                          "ja-JP": {
                            singular: "チームを始める"
                          },
                          "ko-KR": {
                            singular: "팀 꾸리기"
                          },
                          "pt-BR": {
                            singular: "Crie sua equipe"
                          },
                          "zh-CN": {
                            singular: "组建团队"
                          }
                        }
                      }),
                      "data-testid": "library-header-start-your-team-button-mobile",
                      display: {
                        base: "inline-flex",
                        md: "none"
                      },
                      icon: (0, _v1.jsx)(_v10.TeamLibrary, {}),
                      variant: "secondary",
                      size: "md",
                      onClick: () => _v21(!0)
                    }), (0, _v1.jsx)(_v6.Button, {
                      "data-testid": "library-header-start-your-team-button",
                      display: {
                        base: "none",
                        md: "inline-flex"
                      },
                      variant: "secondary",
                      size: "md",
                      onClick: () => _v21(!0),
                      children: (0, _v16.translate)({
                        singular: "Start your team",
                        dictionary: {
                          es: {
                            singular: "Comience su equipo"
                          },
                          "de-DE": {
                            singular: "Baue dein Team auf"
                          },
                          "fr-FR": {
                            singular: "Lancer votre équipe"
                          },
                          "ja-JP": {
                            singular: "チームを始める"
                          },
                          "ko-KR": {
                            singular: "팀 꾸리기"
                          },
                          "pt-BR": {
                            singular: "Crie sua equipe"
                          },
                          "zh-CN": {
                            singular: "组建团队"
                          }
                        }
                      })
                    })]
                  })]
                }) : void 0,
                bottomBar: (0, _v1.jsxs)(_v49.FilterSortBar, {
                  checkbox: (0, _v1.jsx)(_v58.CheckboxItemCount, {
                    hasCheckbox: !!_v122.size,
                    isChecked: !!_v109.size,
                    isDisabled: !_v122.size,
                    isIndeterminate: !!_v109.size && _v109.size < _v122.size,
                    isLoading: _v132,
                    onChange: () => {
                      _v109.size ? _v99() : _v125();
                    },
                    selectedItemCount: _v109.size,
                    subtitle: !!_v138 && (_v137 ? (0, _v16.translate)({
                      count: _v138,
                      singular: "{NUM_ITEMS} result",
                      plural: "{NUM_ITEMS} results",
                      replacements: {
                        NUM_ITEMS: _v138
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
                      count: _v138,
                      singular: "{NUM_ITEMS} item",
                      plural: "{NUM_ITEMS} items",
                      replacements: {
                        NUM_ITEMS: _v138
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
                    }))
                  }),
                  layout: _v72,
                  setLayout: _v0 => {
                    _v73(_v0), _v29({
                      libraryType: (0, _v23.deriveLibraryType)({
                        hasContentSpaceEnabled: _v83
                      }),
                      libraryNewView: "GRID_LAYOUT" === _v0 ? "grid" : "list"
                    });
                  },
                  shouldHideViewControls: _v134 && !_v137,
                  sort: _v9,
                  setSort: _v0 => {
                    let _v1 = `${_v9.type.toLowerCase()}_${_v9.direction.toLowerCase()}`,
                      _v2 = `${_v0.type.toLowerCase()}_${_v0.direction.toLowerCase()}`;
                    if (_v10(_v0), _v2 !== _v1) {
                      let _v0 = _v33[_v2];
                      _v0 && _v31({
                        libraryType: (0, _v23.deriveLibraryType)({
                          hasContentSpaceEnabled: _v83
                        }),
                        libraryNewSort: _v0
                      });
                    }
                  },
                  setDateDisplay: _v12,
                  sortOptions: _v47.SORT_OPTIONS,
                  isLayoutToggleDisabled: _v134,
                  children: [_v82 && _v136 && (0, _v1.jsxs)(_v7.Flex, {
                    children: [(0, _v1.jsx)(_v51.MobileFilterButton, {
                      isFilterApplied: _v137,
                      onClick: () => {
                        _v16(!0);
                      }
                    }), (0, _v1.jsxs)(_v52.MobileFilterDrawer, {
                      isFilterApplied: _v137,
                      isOpen: _v15,
                      onApplyFilters: () => {
                        let _v0, _v1, _v2, _v3;
                        _v99();
                        let _v4 = (0, _v23.deriveLibraryType)({
                            hasContentSpaceEnabled: _v83
                          }),
                          _v5 = !(0, _v69.areIdenticalSets)(_v56.draft, _v56.value),
                          _v6 = _v60.isDraftActive && _v60.isDraftUpdated(),
                          _v7 = _v59.isDraftActive && _v59.isDraftUpdated(),
                          _v8 = _v64.isDraftActive && _v64.isDraftUpdated();
                        _v56.commitDraft(), _v60.commitDraft(), _v59.commitDraft(), _v64.commitDraft(), _v0 = !(0, _v69.areIdenticalSets)(_v56.draft, _v56.value), _v1 = _v60.isDraftActive && _v60.isDraftUpdated(), _v2 = _v59.isDraftActive && _v59.isDraftUpdated(), _v3 = _v64.isDraftActive && _v64.isDraftUpdated(), _v0 && _v48.FilterBPEvents.sendApplyFilterEvent("content_type", _v81, _v130, "mobile"), _v1 && _v48.FilterBPEvents.sendApplyFilterEvent("clip_privacy", _v81, _v130, "mobile"), _v2 && _v48.FilterBPEvents.sendApplyFilterEvent("content_type", _v81, _v130, "mobile"), _v3 && _v48.FilterBPEvents.sendApplyFilterEvent("clip_created_by", _v81, _v130, "mobile"), _v5 && _v30({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v6 && _v30({
                          libraryType: _v4,
                          libraryFilterType: "privacy"
                        }), _v7 && _v30({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v8 && _v30({
                          libraryType: _v4,
                          libraryFilterType: "created_by"
                        }), _v16(!1);
                      },
                      onClearFilters: () => {
                        _v99(), _v56.clearFilter(), _v60.clearFilter(), _v59.clearFilter(), _v64.clearFilter(), _v64.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      onClose: () => {
                        _v56.clearDraft(), _v60.clearDraft(), _v59.clearDraft(), _v64.clearDraft(), _v64.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      children: [(0, _v1.jsx)(_v53.MobileContentTypeFilter, {
                        filter: _v56.draft,
                        onToggle: _v0 => {
                          let _v1 = (0, _v69.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v171, _v56.draft, _v0, (0, _v39.isVideoAvailabilityFilterExplicitlyEngaged)(_v59.draft));
                          _v56.setSelection(_v1, !0), (0, _v69.doesSelectionIncludeVideos)(_v171, _v1) || _v59.setDraft(new Set());
                        },
                        options: _v171,
                        page: _v81,
                        isDisabled: _v69,
                        videoSubmenu: _v104
                      }), _v136 && (0, _v1.jsxs)(_v1.Fragment, {
                        children: [(0, _v1.jsx)(_v54.MobileClipPrivacyFilter, {
                          filter: [..._v60.draft],
                          onChange: _v0 => {
                            _v60.updateFilterValues(_v0, !0);
                          },
                          options: _v60.options,
                          page: _v81,
                          isDisabled: _v58
                        }), !_v64.shouldHideFilter && (0, _v1.jsx)(_v55.MobileCreatedByFilter, {
                          filter: [..._v64.draft],
                          onChange: _v0 => {
                            _v64.updateFilterValues(_v0, !0);
                          },
                          searchQuery: _v64.createdByUsersSearchTerm,
                          setSearchQuery: _v64.setCreatedByUsersSearchTerm,
                          options: _v64.createdByUsers,
                          page: _v81,
                          isDisabled: _v58,
                          isLoadingInitialData: _v64.membersLoadingInitialData,
                          isLoadingMore: _v64.membersLoadingMore,
                          isDone: _v64.membersDone,
                          onLoadMore: _v64.loadMoreMembers
                        })]
                      })]
                    })]
                  }), !_v82 && _v136 && _v137 && (0, _v1.jsx)(_v60.ClearAllFiltersButton, {
                    onClick: () => {
                      _v99(), _v56.clearFilter(), _v60.clearFilter(), _v59.clearFilter(), _v64.clearFilter();
                    }
                  }), !_v82 && _v136 && (0, _v1.jsx)(_v50.ContentTypeFilter, {
                    filter: _v56.value,
                    onToggleType: _v0 => {
                      _v99();
                      let _v1 = (0, _v69.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v171, _v56.value, _v0, (0, _v39.isVideoAvailabilityFilterExplicitlyEngaged)(_v59.value));
                      (0, _v69.areIdenticalSets)(_v1, _v56.value) || _v30({
                        libraryType: (0, _v23.deriveLibraryType)({
                          hasContentSpaceEnabled: _v83
                        }),
                        libraryFilterType: "type"
                      }), _v56.setSelection(_v1), (0, _v69.doesSelectionIncludeVideos)(_v171, _v1) || _v59.clearFilter();
                    },
                    options: _v171,
                    page: _v81,
                    isDisabled: _v68,
                    videoSubmenu: _v103
                  }), !_v82 && _v136 && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v59.ClipPrivacyTypeFilter, {
                      filter: [..._v60.value],
                      setFilter: _v0 => {
                        _v99(), _v60.updateFilterValues(_v0), _v30({
                          libraryType: (0, _v23.deriveLibraryType)({
                            hasContentSpaceEnabled: _v83
                          }),
                          libraryFilterType: "privacy"
                        });
                      },
                      options: _v60.options,
                      page: _v81,
                      isDisabled: _v57
                    }), !_v64.shouldHideFilter && (0, _v1.jsx)(_v61.CreatedByFilter, {
                      filter: [..._v64.value],
                      setFilter: _v0 => {
                        _v99(), _v64.setFilterValues(_v0), _v30({
                          libraryType: (0, _v23.deriveLibraryType)({
                            hasContentSpaceEnabled: _v83
                          }),
                          libraryFilterType: "created_by"
                        });
                      },
                      searchQuery: _v64.createdByUsersSearchTerm,
                      setSearchQuery: _v64.setCreatedByUsersSearchTerm,
                      options: _v64.createdByUsers,
                      page: _v81,
                      isDisabled: _v57,
                      isLoadingInitialData: _v64.membersLoadingInitialData,
                      isLoadingMore: _v64.membersLoadingMore,
                      isDone: _v64.membersDone,
                      onLoadMore: _v64.loadMoreMembers
                    })]
                  })]
                }),
                isTitleLoading: !_v35,
                title: _v81
              }), "LIST_LAYOUT" === _v72 && !_v134 && (0, _v1.jsx)(_v31.BokehListHeader, {
                setSort: _v10,
                sort: _v9,
                shouldShowPrivacy: _v74,
                shouldShowFileSize: !0,
                setDateDisplay: _v12,
                dateDisplay: _v11
              })]
            }), _v134 ? (0, _v1.jsx)(_v7.Flex, {
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "20px",
              children: _v137 ? (0, _v1.jsx)(_v63.FilterEmptyState, {}) : _v34.canCreateRootFolders ? (0, _v1.jsx)(_v112, {
                owner: {
                  id: _v19 ?? 0
                },
                set360SourceType: _v14,
                threeSixtyType: _v13
              }) : (0, _v1.jsx)(_v114, {
                isContributor: "Contributor" === _v46 || "ContributorPlus" === _v46
              })
            }) : (0, _v1.jsx)(_v32.UploadDropzone, {
              className: "library-upload-dropzone",
              targetUserId: _v19 ?? 0,
              disabled: !_v79 || _v134 && _v34.canCreateRootFolders,
              topPosition: 205,
              destinationText: (0, _v16.translate)({
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
              }),
              children: (0, _v1.jsx)(_v173, {
                assetUrls: _v0,
                type: _v25.PlayerType.BarebonePlayer,
                children: (0, _v1.jsx)(_v159, {
                  canUpload: _v75,
                  deselectItem: _v97,
                  handleMoveItemsOnDrop: ({
                    dropTarget: _v0,
                    items: _v1
                  }) => {
                    let _v2 = new Set("");
                    _v2.add(_v0.uri), _v128(_v2), _v40(_v2);
                    let [,, _v3,, _v4] = _v0.uri.split("/");
                    _v126({
                      ownerId: parseInt(_v3, 10),
                      folderId: parseInt(_v4, 10),
                      targetItems: _v1
                    }).then(() => {
                      1 === _v1.length ? (_v97(_v1[0].uri, 0, _v111 || []), _v93(_v1[0].uri, "video")) : (_v99(), _v94(_v109)), _v42(null, {
                        label: _v0.name,
                        link: (0, _v67.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    }).catch(_v0 => {
                      _v41({
                        content: _v0,
                        status: "error"
                      });
                    }).finally(() => {
                      _v128(new Set()), _v40(new Set());
                    });
                  },
                  hasFolderShareUpsell: !!_v34.canSeeUpsellModalOnShare,
                  hasReviewPageUpsell: !!_v34.hasVideoReviewPageDemo,
                  hasMultipleReviewLinks: !!_v34.hasMultipleReviewLinks,
                  items: _v111,
                  layout: _v72,
                  loadingFolderURIs: _v127,
                  onCopyVideo: _v44,
                  onFolderSettingsChange: _v0 => {
                    _v90(_v0), _v39();
                  },
                  onMoreInfo: _v7,
                  removeItem: _v93,
                  selectedItemURIs: _v109,
                  selectItem: _v96,
                  shouldShowPrivacy: _v74,
                  shouldShowFileSize: !0,
                  sort: _v9,
                  isEnterprise: _v80,
                  setIsUploadDropzoneEnabled: _v71,
                  isLoading: _v132 || !!_v133,
                  hasContentSpaceEnabled: _v34.hasContentSpaceEnabled
                })
              })
            }), (0, _v1.jsx)(_v79, {
              layout: _v72,
              canLoadMore: !_v131,
              isLoadingMore: _v132 || !!_v133,
              onActivate: () => _v87(_v88 + 1),
              isDropzoneEnabled: _v75 && !(_v134 && _v34.canCreateRootFolders),
              page: _v81
            })]
          }), _v6 && (0, _v1.jsx)(_v57.Page.Panel, {
            children: (0, _v1.jsx)(_v26.ResourceSidePanel, {
              isOpen: !0,
              onClose: () => _v7(null),
              onVideoPrivacyChange: ({
                view: _v0
              }) => _v91(_v6, _v0 => ({
                ..._v0,
                privacy: {
                  ..._v0.privacy,
                  view: _v0
                }
              })),
              pageName: "video_library",
              uri: _v6
            })
          })]
        }), _v26 && (0, _v1.jsx)(_v101, {
          apiConfig: _v26,
          teamData: _v22,
          isOpen: _v17,
          onClose: () => {
            _v18(!1), _v23(null), _v25(_v0 => _v0 + 1);
          },
          onBack: () => {
            _v18(!1), _v21(!0);
          }
        })]
      }), (0, _v1.jsx)(_v64.ViewerAiUpsellModal, {
        step: _v2,
        onDismiss: _v3,
        onCtaClick: _v4,
        onErrorClose: _v5
      }), _v45, _v48.modal, (0, _v1.jsx)(_v11.BulkActions, {
        canUseBulkTranslation: _v37,
        canAddToShowcases: _v124,
        canMoveSelection: _v112,
        canDeleteSelection: _v113,
        canChangePrivacySelection: _v114,
        canPublishContentToChina: _v34.regionalDeliveryPublishContentToChina && _v114,
        hasColdStorageSelection: _v116,
        hasLegalHoldSelection: _v117,
        hasReachedMaxSelectionForMove: _v118,
        hasReachedMaxSelectionForPrivacy: _v119,
        hasReachedMaxSelectionForSentimentWidget: _v120,
        hasReachedMaxSelectionForShowcases: _v121,
        deselectAllItems: _v99,
        removeItems: _v94,
        selectedItems: _v123,
        selectedItemURIs: _v109,
        teamOwnerId: _v19,
        isPrivateModeOn: !_v34.privateModeOff
      })]
    });
  }
  let _v173 = ({
    children: _v0,
    assetUrls: _v1,
    type: _v2
  }) => _v1 ? (0, _v1.jsx)(_v24.PlayerContextProvider, {
    assetUrls: _v1,
    type: _v2,
    children: _v0
  }) : _v0;
  var _v174 = _v0.i(0);
  let _v175 = ({
    playerAssetUrls: _v0
  }) => {
    let _v1 = (0, _v174.useViewer)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v172, {
        playerAssetUrls: _v0,
        viewer: _v1
      }), (0, _v1.jsx)(_v3.ManagedAccountsPromo, {})]
    });
  };
  _v175.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v43.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    children: _v0
  }), (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0,
      hasPlayerAPI: !0
    }
  }), {
    requireLogin: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v175], 0);
}