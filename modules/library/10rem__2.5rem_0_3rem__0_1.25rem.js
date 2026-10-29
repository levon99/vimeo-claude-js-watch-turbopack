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
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = ({
      layout: _v0,
      isLoading: _v1,
      onLoadMore: _v2
    }) => {
      let _v3 = (0, _v5.useRef)(null),
        _v4 = (0, _v84.useOnScreen)(_v3);
      return ((0, _v5.useEffect)(() => {
        _v4 && !_v1 && _v2();
      }, [_v1, _v4, _v2]), _v0 === _v54.LAYOUT.LIST) ? (0, _v1.jsx)(_v81.Box, {
        height: "10rem",
        ref: _v3,
        children: (0, _v1.jsx)(_v83.LoadingStateList, {})
      }) : (0, _v1.jsx)(_v81.Box, {
        height: "10rem",
        ref: _v3
      });
    },
    _v86 = _v0 => {
      let {
          layout: _v1,
          isLoadingMore: _v2,
          canLoadMore: _v3 = !1,
          onActivate: _v4,
          isDropzoneEnabled: _v5 = !1,
          page: _v6 = ""
        } = _v0,
        _v7 = (0, _v25.useUniversalHostingEnabled)();
      return _v3 ? (0, _v1.jsx)(_v85, {
        layout: _v1,
        isLoading: _v2,
        onLoadMore: _v4
      }) : _v5 && !_v2 ? (0, _v1.jsx)(_v82.UploadDropzoneHint, {
        page: _v6,
        universalHostingEnabled: _v7
      }) : (0, _v1.jsx)(_v81.Box, {
        margin: "2.5rem 0 3rem",
        padding: "0 1.25rem"
      });
    };
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = (0, _v94.default)(() => _v0.A(0).then(_v0 => _v0.FolderSettingsModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v97 = (0, _v5.createContext)({
      setModalContextState: () => console.log("noop")
    }),
    _v98 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v5.useState)({
          activeModal: null,
          activeModalState: null
        }),
        _v3 = (0, _v5.useContext)(_v95.ViewerContext),
        _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
        {
          activeModal: _v5,
          activeModalState: _v6
        } = _v1,
        _v7 = (0, _v5.useMemo)(() => ({
          setModalContextState: _v2
        }), []);
      return (0, _v1.jsxs)(_v97.Provider, {
        value: _v7,
        children: [_v0, "FolderSettings" === _v5 && _v4 && (0, _v1.jsx)(_v96, {
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
    _v99 = (0, _v5.lazy)(() => _v0.A(0).then(({
      TeamSwitcherDropzone: _v0
    }) => ({
      default: _v0
    }))),
    _v100 = ({
      owner: _v0,
      set360SourceType: _v1,
      threeSixtyType: _v2,
      isUnifiedLibrary: _v3 = !1
    }) => {
      let {
          setModalContextState: _v4
        } = (0, _v5.useContext)(_v97),
        _v5 = (0, _v92.useTeamUploadClipProperties)(_v0.id);
      return (0, _v1.jsx)(_v6.Flex, {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v5.Suspense, {
          fallback: (0, _v1.jsx)(_v81.Box, {
            paddingTop: "25vh",
            children: (0, _v1.jsx)(_v88.Spinner, {
              size: "xl"
            })
          }),
          children: (0, _v1.jsxs)(_v81.Box, {
            maxWidth: "100%",
            width: "100%",
            children: [(0, _v1.jsx)(_v99, {
              uploadClipProperties: _v5,
              uploadType: "UPLOAD",
              owner: _v0,
              selectedFolderId: null,
              selectedFolder: null,
              libraryEmptyStateContent: (0, _v1.jsxs)(_v6.Flex, {
                flexDirection: "column",
                alignItems: "center",
                children: [_v3 ? (0, _v1.jsx)(_v91.VideosStack, {
                  width: (0, _v87.rem)(64),
                  height: (0, _v87.rem)(64)
                }) : (0, _v1.jsx)(_v90.TeamLibrary, {
                  width: (0, _v87.rem)(64),
                  height: (0, _v87.rem)(64)
                }), (0, _v1.jsx)(_v89.Text, {
                  variant: "heading-lg",
                  margin: `${(0, _v87.rem)(16)} 0`,
                  children: _v3 ? (0, _v21.translate)({
                    singular: "Add content to your library",
                    dictionary: {
                      es: {
                        singular: "Añadir contenido a tu biblioteca"
                      },
                      "de-DE": {
                        singular: "Inhalte zu Ihrer Bibliothek hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter du contenu à votre bibliothèque"
                      },
                      "ja-JP": {
                        singular: "ライブラリにコンテンツを追加"
                      },
                      "ko-KR": {
                        singular: "라이브러리에 콘텐츠 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar conteúdo à sua biblioteca"
                      },
                      "zh-CN": {
                        singular: "将内容添加到您的库"
                      }
                    }
                  }) : (0, _v21.translate)({
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
                }), (0, _v1.jsx)(_v81.Box, {
                  width: "65%",
                  children: (0, _v1.jsx)(_v89.Text, {
                    variant: "body-lg",
                    color: "text-secondary",
                    textAlign: "center",
                    children: (0, _v21.translate)({
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
                _v4({
                  activeModal: "FolderSettings",
                  activeModalState: {
                    location: "empty_state"
                  }
                });
              }
            }), (0, _v1.jsx)(_v93.EmptyStateDropzoneFooter, {
              set360SourceType: _v1,
              threeSixtyType: _v2
            })]
          })
        })
      });
    };
  var _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  let _v103 = ({
    cta: _v0,
    header: _v1,
    icon: _v2,
    subheader: _v3
  }) => (0, _v1.jsxs)(_v6.Flex, {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    children: [_v2, (0, _v1.jsxs)(_v6.Flex, {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      margin: `${(0, _v87.rem)(16)} 0`,
      gap: "md",
      children: ["string" == typeof _v1 ? (0, _v1.jsx)(_v101.Header, {
        size: "lg",
        children: _v1
      }) : _v1, "string" == typeof _v3 ? (0, _v1.jsx)(_v102.Paragraph, {
        size: "lg",
        color: "text-secondary",
        marginBottom: "0",
        children: _v3
      }) : _v3]
    }), _v0]
  });
  _v103.SubheaderText = ({
    children: _v0
  }) => (0, _v1.jsx)(_v102.Paragraph, {
    size: "lg",
    color: "text-secondary",
    marginBottom: "0",
    children: _v0
  });
  let _v104 = ({
    isContributor: _v0 = !1
  }) => (0, _v1.jsx)(_v103, {
    header: (0, _v21.translate)({
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
    icon: (0, _v1.jsx)(_v90.TeamLibrary, {
      width: "64px",
      height: "64px"
    }),
    subheader: _v0 ? (0, _v21.translate)({
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
    }) : (0, _v21.translate)({
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
  var _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0);
  let _v109 = ({
    onInvitePeople: _v0,
    onMoveContent: _v1,
    hasTeamMembers: _v2,
    isMigrationInProgress: _v3 = !1
  }) => (0, _v1.jsx)(_v6.Flex, {
    justifyContent: "center",
    width: "100%",
    children: (0, _v1.jsxs)(_v6.Flex, {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2xl",
      padding: "md",
      width: "100%",
      minHeight: (0, _v87.rem)(500),
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "stroke",
      borderRadius: "md",
      children: [(0, _v1.jsxs)(_v6.Flex, {
        flexDirection: "column",
        alignItems: "center",
        gap: "md",
        children: [(0, _v1.jsx)(_v90.TeamLibrary, {
          width: (0, _v87.rem)(64),
          height: (0, _v87.rem)(64)
        }), (0, _v1.jsx)(_v89.Text, {
          variant: "heading-lg",
          children: (0, _v21.translate)({
            singular: "Your Team Library is ready",
            dictionary: {
              es: {
                singular: "La biblioteca de tu equipo está lista"
              },
              "de-DE": {
                singular: "Ihre Team-Bibliothek ist bereit"
              },
              "fr-FR": {
                singular: "La bibliothèque de votre équipe est prête"
              },
              "ja-JP": {
                singular: "チームライブラリの準備ができました"
              },
              "ko-KR": {
                singular: "팀 라이브러리가 준비되었습니다"
              },
              "pt-BR": {
                singular: "A biblioteca da sua equipe está pronta"
              },
              "zh-CN": {
                singular: "您的团队资料库已准备就绪"
              }
            }
          })
        }), (0, _v1.jsx)(_v81.Box, {
          maxWidth: (0, _v87.rem)(392),
          children: (0, _v1.jsx)(_v89.Text, {
            variant: "body-lg",
            color: "text-secondary",
            textAlign: "center",
            children: (0, _v21.translate)({
              singular: "This is your team's shared space. Collaborate, share content, and keep everyone in one place.",
              dictionary: {
                es: {
                  singular: "Este es el espacio compartido de tu equipo. Colabora, comparte contenido y mantén a todos en un solo lugar."
                },
                "de-DE": {
                  singular: "Dies ist der gemeinsame Bereich Ihres Teams. Arbeiten Sie gemeinsam, teilen Sie Inhalte und halten Sie alle an einem Ort zusammen."
                },
                "fr-FR": {
                  singular: "Voici l'espace partagé de votre équipe. Collaborez, partagez du contenu et rassemblez tout le monde au même endroit."
                },
                "ja-JP": {
                  singular: "ここはチームの共有スペースです。共同で作業し、コンテンツを共有し、メンバー全員を一か所にまとめておきましょう。"
                },
                "ko-KR": {
                  singular: "여기는 팀의 공유 공간입니다. 협업하고, 콘텐츠를 공유하며 모든 구성원을 한곳에 모아두세요."
                },
                "pt-BR": {
                  singular: "Este é o espaço compartilhado da sua equipe. Colabore, compartilhe conteúdo e mantenha todos em um só lugar."
                },
                "zh-CN": {
                  singular: "这是您团队的共享空间。协作、分享内容，并将所有人集中在一处。"
                }
              }
            })
          })
        })]
      }), (0, _v1.jsxs)(_v6.Flex, {
        flexDirection: "column",
        alignItems: "center",
        gap: "sm",
        width: (0, _v87.rem)(292),
        children: [!_v2 && (0, _v1.jsx)(_v106.Tooltip, {
          label: (0, _v21.translate)({
            singular: "You'll be able to add members when your new library is ready.",
            dictionary: {
              es: {
                singular: "Podrás agregar miembros cuando tu nueva biblioteca esté lista."
              },
              "de-DE": {
                singular: "Sie können Mitglieder hinzufügen, sobald Ihre neue Bibliothek bereit ist."
              },
              "fr-FR": {
                singular: "Vous pourrez ajouter des membres lorsque votre nouvelle bibliothèque sera prête."
              },
              "ja-JP": {
                singular: "新しいライブラリが準備できたら、メンバーを追加できるようになります。"
              },
              "ko-KR": {
                singular: "새 라이브러리가 준비되면 멤버를 추가할 수 있습니다."
              },
              "pt-BR": {
                singular: "Você poderá adicionar membros quando sua nova biblioteca estiver pronta."
              },
              "zh-CN": {
                singular: "当您的新媒体库准备就绪后，您将能够添加成员。"
              }
            }
          }),
          isDisabled: !_v3,
          children: (0, _v1.jsx)(_v81.Box, {
            width: "100%",
            children: (0, _v1.jsx)(_v105.Button, {
              variant: "primary",
              size: "lg",
              width: "100%",
              leftIcon: (0, _v1.jsx)(_v108.PersonUserAdd, {}),
              isDisabled: _v3,
              onClick: _v0,
              children: (0, _v21.translate)({
                singular: "Invite people",
                dictionary: {
                  es: {
                    singular: "Invitar personas"
                  },
                  "de-DE": {
                    singular: "Personen einladen"
                  },
                  "fr-FR": {
                    singular: "Inviter des personnes"
                  },
                  "ja-JP": {
                    singular: "メンバーを招待する"
                  },
                  "ko-KR": {
                    singular: "초대"
                  },
                  "pt-BR": {
                    singular: "Convidar pessoas"
                  },
                  "zh-CN": {
                    singular: "邀请他人"
                  }
                }
              })
            })
          })
        }), (0, _v1.jsx)(_v105.Button, {
          variant: _v2 ? "secondary" : "tertiary",
          size: "lg",
          width: "100%",
          leftIcon: (0, _v1.jsx)(_v107.FolderUpload, {
            transform: "scale(1.125)"
          }),
          onClick: _v1,
          lineHeight: (0, _v87.rem)(0),
          children: (0, _v21.translate)({
            singular: "Move content from My Library",
            dictionary: {
              es: {
                singular: "Mover contenido desde Mi biblioteca"
              },
              "de-DE": {
                singular: "Inhalte aus „Meine Bibliothek“ verschieben"
              },
              "fr-FR": {
                singular: "Déplacer le contenu de Ma bibliothèque"
              },
              "ja-JP": {
                singular: "マイライブラリからコンテンツを移動"
              },
              "ko-KR": {
                singular: "내 라이브러리에서 콘텐츠 이동"
              },
              "pt-BR": {
                singular: "Mover conteúdo da Minha Biblioteca"
              },
              "zh-CN": {
                singular: "从“我的资料库”移动内容"
              }
            }
          })
        })]
      })]
    })
  });
  var _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0);
  let _v119 = ({
    rows: _v0
  }) => 0 === _v0.length ? null : (0, _v1.jsxs)(_v114.Menu, {
    children: [(0, _v1.jsx)(_v115.MenuButton, {
      as: _v110.IconButton,
      "aria-label": (0, _v21.translate)({
        singular: "More options",
        dictionary: {
          es: {
            singular: "Más opciones"
          },
          "de-DE": {
            singular: "Mehr Optionen"
          },
          "fr-FR": {
            singular: "Plus d'options"
          },
          "ja-JP": {
            singular: "その他のオプション"
          },
          "ko-KR": {
            singular: "옵션 더 보기"
          },
          "pt-BR": {
            singular: "Mais opções"
          },
          "zh-CN": {
            singular: "更多选项"
          }
        }
      }),
      "data-testid": "library-header-overflow-menu-button",
      icon: (0, _v1.jsx)(_v118.EllipsisV, {}),
      variant: "tertiary",
      size: "md"
    }), (0, _v1.jsx)(_v117.MenuList, {
      children: _v0.map(_v0 => (0, _v1.jsx)(_v116.MenuItem, {
        ...(_v0.href ? {
          as: "a",
          href: _v0.href
        } : {}),
        icon: _v0.icon,
        "data-testid": _v0.testId,
        onClick: _v0.onClick,
        children: _v0.label
      }, _v0.testId))
    })]
  });
  var _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0);
  let _v124 = ({
      rows: _v0
    }) => {
      let [_v1, _v2] = (0, _v5.useState)(!1);
      if (0 === _v0.length) return null;
      let _v3 = () => _v2(!1);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v110.IconButton, {
          "aria-label": (0, _v21.translate)({
            singular: "More options",
            dictionary: {
              es: {
                singular: "Más opciones"
              },
              "de-DE": {
                singular: "Mehr Optionen"
              },
              "fr-FR": {
                singular: "Plus d'options"
              },
              "ja-JP": {
                singular: "その他のオプション"
              },
              "ko-KR": {
                singular: "옵션 더 보기"
              },
              "pt-BR": {
                singular: "Mais opções"
              },
              "zh-CN": {
                singular: "更多选项"
              }
            }
          }),
          "data-testid": "library-header-overflow-button",
          icon: (0, _v1.jsx)(_v118.EllipsisV, {}),
          variant: "tertiary",
          size: "md",
          onClick: () => _v2(!0)
        }), (0, _v1.jsxs)(_v120.Drawer, {
          placement: "bottom",
          isOpen: _v1,
          onClose: _v3,
          children: [(0, _v1.jsx)(_v123.DrawerOverlay, {}), (0, _v1.jsxs)(_v122.DrawerContent, {
            bgColor: "fill-surface",
            margin: "0 auto !important",
            borderTopRadius: "xl",
            borderBottomRadius: "0",
            sx: {
              '&[data-placement="bottom"]': {
                maxWidth: `${(0, _v87.rem)(480)} !important`
              }
            },
            "data-testid": "library-header-overflow-sheet",
            children: [(0, _v1.jsx)(_v6.Flex, {
              justify: "center",
              pt: "2xs",
              pb: "2xs",
              children: (0, _v1.jsx)(_v81.Box, {
                w: (0, _v87.rem)(50),
                h: (0, _v87.rem)(4),
                borderRadius: "3xl",
                bgColor: "stroke"
              })
            }), (0, _v1.jsx)(_v121.DrawerBody, {
              pb: "lg",
              children: (0, _v1.jsx)(_v6.Flex, {
                direction: "column",
                gap: "2xs",
                children: _v0.map(_v0 => (0, _v1.jsx)(_v105.Button, {
                  ...(_v0.href ? {
                    as: "a",
                    href: _v0.href
                  } : {}),
                  variant: "tertiary",
                  size: "lg",
                  w: "100%",
                  justifyContent: "flex-start",
                  leftIcon: _v0.icon,
                  "data-testid": _v0.testId,
                  onClick: () => {
                    _v0.onClick?.(), _v3();
                  },
                  children: _v0.label
                }, _v0.testId))
              })
            })]
          })]
        })]
      });
    },
    _v125 = ({
      row: _v0,
      withTooltip: _v1
    }) => {
      let _v2 = (0, _v1.jsx)(_v110.IconButton, {
        "aria-label": _v0.label,
        ...(_v0.href ? {
          as: "a",
          href: _v0.href
        } : {}),
        "data-testid": _v0.testId,
        icon: _v0.icon,
        variant: "tertiary",
        size: "md",
        onClick: _v0.onClick
      });
      return _v1 ? (0, _v1.jsx)(_v106.Tooltip, {
        label: _v0.label,
        placement: "top",
        children: _v2
      }) : _v2;
    },
    _v126 = ({
      teamPreview: _v0,
      uploadAction: _v1,
      newFolderAction: _v2,
      isMobile: _v3,
      analyticsLink: _v4,
      showMoveContent: _v5,
      onMoveContent: _v6,
      showNewFolder: _v7,
      showMergeLibraries: _v8,
      onMergeLibraries: _v9,
      rowsAreFinal: _v10
    }) => {
      let {
          setModalContextState: _v11
        } = (0, _v5.useContext)(_v97),
        _v12 = (0, _v5.useContext)(_v95.ViewerContext),
        _v13 = _v12?.teamUser?.ownerId ?? _v12?.user?.id,
        {
          capabilities: _v14
        } = (0, _v17.useCapability)(["hasContentSpaceEnabled"], _v13),
        {
          trackLibraryNewFolderClicked: _v15
        } = (0, _v29.useLibraryTracking)(),
        _v16 = (({
          testIdPrefix: _v0,
          analytics: _v1,
          moveContent: _v2,
          newFolder: _v3,
          mergeLibraries: _v4
        }) => {
          let _v5 = [];
          return _v1 && _v5.push({
            icon: (0, _v1.jsx)(_v111.Analytics, {}),
            label: (0, _v21.translate)({
              singular: "Analytics",
              dictionary: {
                es: {
                  singular: "Análisis"
                },
                "de-DE": {
                  singular: "Analytik"
                },
                "fr-FR": {
                  singular: "Analyses"
                },
                "ja-JP": {
                  singular: "分析"
                },
                "ko-KR": {
                  singular: "애널리틱스"
                },
                "pt-BR": {
                  singular: "Análises"
                },
                "zh-CN": {
                  singular: "分析"
                }
              }
            }),
            href: _v1.href,
            onClick: _v1.onClick,
            testId: `${_v0}-analytics`
          }), _v2 && _v5.push({
            icon: (0, _v1.jsx)(_v107.FolderUpload, {}),
            label: (0, _v21.translate)({
              singular: "Move content from My Library",
              dictionary: {
                es: {
                  singular: "Mover contenido desde Mi biblioteca"
                },
                "de-DE": {
                  singular: "Inhalte aus „Meine Bibliothek“ verschieben"
                },
                "fr-FR": {
                  singular: "Déplacer le contenu de Ma bibliothèque"
                },
                "ja-JP": {
                  singular: "マイライブラリからコンテンツを移動"
                },
                "ko-KR": {
                  singular: "내 라이브러리에서 콘텐츠 이동"
                },
                "pt-BR": {
                  singular: "Mover conteúdo da Minha Biblioteca"
                },
                "zh-CN": {
                  singular: "从“我的资料库”移动内容"
                }
              }
            }),
            onClick: _v2.onClick,
            testId: `${_v0}-move-content`
          }), _v3 && _v5.push({
            icon: (0, _v1.jsx)(_v113.FolderPlus, {}),
            label: (0, _v21.translate)({
              singular: "New folder",
              dictionary: {
                es: {
                  singular: "Carpeta nueva"
                },
                "de-DE": {
                  singular: "Neuer Ordner"
                },
                "fr-FR": {
                  singular: "Nouveau dossier"
                },
                "ja-JP": {
                  singular: "新しいフォルダー"
                },
                "ko-KR": {
                  singular: "새 폴더"
                },
                "pt-BR": {
                  singular: "Nova pasta"
                },
                "zh-CN": {
                  singular: "新文件夹"
                }
              }
            }),
            onClick: _v3.onClick,
            testId: `${_v0}-new-folder`
          }), _v4 && _v5.push({
            icon: (0, _v1.jsx)(_v112.ArrowsMerge, {}),
            label: (0, _v21.translate)({
              singular: "Merge libraries",
              dictionary: {
                es: {
                  singular: "Fusionar bibliotecas"
                },
                "de-DE": {
                  singular: "Bibliotheken zusammenführen"
                },
                "fr-FR": {
                  singular: "Fusionner les bibliothèques"
                },
                "ja-JP": {
                  singular: "ライブラリを統合"
                },
                "ko-KR": {
                  singular: "라이브러리 병합"
                },
                "pt-BR": {
                  singular: "Mesclar bibliotecas"
                },
                "zh-CN": {
                  singular: "合并资料库"
                }
              }
            }),
            onClick: _v4.onClick,
            testId: `${_v0}-merge-libraries`
          }), _v5;
        })({
          testIdPrefix: _v3 ? "library-header-overflow" : "library-header-overflow-menu",
          analytics: _v4 ? {
            href: _v4
          } : void 0,
          moveContent: _v5 ? {
            onClick: _v6
          } : void 0,
          newFolder: _v3 && _v7 ? {
            onClick: () => {
              _v15({
                libraryType: (0, _v30.deriveLibraryType)({
                  hasContentSpaceEnabled: !!_v14.hasContentSpaceEnabled
                })
              }), _v11({
                activeModal: "FolderSettings",
                activeModalState: {
                  location: "library_header"
                }
              });
            }
          } : void 0,
          mergeLibraries: _v8 ? {
            onClick: _v9
          } : void 0
        }),
        _v17 = _v10 && 1 === _v16.length ? _v16[0] : void 0,
        _v18 = _v10 && _v16.length > 1;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v0, _v17 && (0, _v1.jsx)(_v125, {
          row: _v17,
          withTooltip: !_v3
        }), _v1, !_v3 && _v2, _v18 && (_v3 ? (0, _v1.jsx)(_v124, {
          rows: _v16
        }) : (0, _v1.jsx)(_v119, {
          rows: _v16
        }))]
      });
    };
  var _v127 = _v0.i(0),
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
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0);
  let _v148 = ["type", "video.uri", "video.name", "video.duration", "video.pictures.sizes", "video.privacy.view", "video.canMoveToProject", "video.createdTime", "video.lastUserActionEventDate", "video.uploader.name", "video.uploader.pictures.sizes", "video.parentProject.uri", "folder.uri", "folder.name", "folder.createdTime", "folder.lastUserActionEventDate", "folder.metadata.connections.items.total", "folder.metadata.connections.parentFolder.uri"];
  var _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0);
  let _v153 = ({
      item: _v0,
      index: _v1,
      isSelected: _v2,
      onToggleSelect: _v3
    }) => {
      let _v4,
        _v5 = "folder" === _v0.kind,
        _v6 = _v0.privacyView ? (0, _v152.getPrivacyLabel)(_v0.privacyView) : void 0;
      return (0, _v1.jsxs)(_v6.Flex, {
        alignItems: "center",
        gap: "md",
        paddingX: "sm",
        paddingY: "xs",
        borderRadius: "sm",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: _v2 ? "stroke" : "transparent",
        bg: _v2 ? "fill-component" : void 0,
        _hover: {
          bg: "fill-component"
        },
        opacity: _v0.canMove ? 1 : .5,
        children: [(0, _v1.jsx)(_v129.Checkbox, {
          size: "md",
          isChecked: _v2,
          isDisabled: !_v0.canMove,
          onChange: () => _v3(_v0, _v1),
          "aria-label": (0, _v21.translate)({
            singular: "Select {name}",
            replacements: {
              name: _v0.name
            },
            dictionary: {
              es: {
                singular: "Seleccionar {name}"
              },
              "de-DE": {
                singular: "{name} auswählen"
              },
              "fr-FR": {
                singular: "Sélectionner {name}"
              },
              "ja-JP": {
                singular: "{name}を選択"
              },
              "ko-KR": {
                singular: "{name} 선택"
              },
              "pt-BR": {
                singular: "Selecionar {name}"
              },
              "zh-CN": {
                singular: "选择 {name}"
              }
            }
          })
        }), (0, _v1.jsxs)(_v6.Flex, {
          alignItems: "center",
          gap: "md",
          flex: "1",
          minWidth: 0,
          children: [_v5 ? (0, _v1.jsx)(_v6.Flex, {
            alignItems: "center",
            justifyContent: "center",
            width: (0, _v87.rem)(72),
            height: (0, _v87.rem)(40),
            borderRadius: "xs",
            bg: "fill-component",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v151.FolderFilled, {
              width: (0, _v87.rem)(20),
              height: (0, _v87.rem)(20)
            })
          }) : (0, _v1.jsx)(_v81.Box, {
            width: (0, _v87.rem)(72),
            height: (0, _v87.rem)(40),
            borderRadius: "xs",
            bg: "fill-component",
            overflow: "hidden",
            flexShrink: 0,
            children: _v0.thumbnailUrl && (0, _v1.jsx)(_v150.Image, {
              src: _v0.thumbnailUrl,
              alt: "",
              width: "100%",
              height: "100%",
              objectFit: "cover"
            })
          }), (0, _v1.jsxs)(_v81.Box, {
            minWidth: 0,
            flex: "1",
            children: [(0, _v1.jsx)(_v89.Text, {
              variant: "body-sm",
              fontWeight: "medium",
              noOfLines: 1,
              children: _v0.name
            }), _v5 ? (0, _v1.jsx)(_v89.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: (0, _v21.translate)({
                singular: "{COUNT} item",
                plural: "{COUNT} items",
                count: _v0.itemCount ?? 0,
                replacements: {
                  COUNT: _v0.itemCount ?? 0
                },
                dictionary: {
                  es: {
                    singular: "{COUNT} elemento",
                    plural: "{COUNT} elementos"
                  },
                  "de-DE": {
                    singular: "{COUNT} Element",
                    plural: "{COUNT} Elemente"
                  },
                  "fr-FR": {
                    singular: "{COUNT} élément",
                    plural: "{COUNT} éléments"
                  },
                  "ja-JP": {
                    singular: "{COUNT} 件のアイテム",
                    plural: "{COUNT} 件のアイテム"
                  },
                  "ko-KR": {
                    singular: "{COUNT}개 항목",
                    plural: "{COUNT}개 항목"
                  },
                  "pt-BR": {
                    singular: "{COUNT} iten",
                    plural: "{COUNT} itens"
                  },
                  "zh-CN": {
                    singular: "{COUNT} 项",
                    plural: "{COUNT} 项"
                  }
                }
              })
            }) : (_v0.uploaderName || _v0.uploaderAvatarUrl) && (0, _v1.jsxs)(_v6.Flex, {
              alignItems: "center",
              gap: "xs",
              children: [(0, _v1.jsx)(_v149.Avatar, {
                size: "xs",
                sx: {
                  width: (0, _v87.rem)(16),
                  height: (0, _v87.rem)(16)
                },
                src: _v0.uploaderAvatarUrl,
                alt: _v0.uploaderName ?? ""
              }), (0, _v1.jsx)(_v89.Text, {
                variant: "body-sm",
                color: "text-secondary",
                noOfLines: 1,
                children: _v0.uploaderName
              })]
            })]
          })]
        }), !_v5 && _v6 && (0, _v1.jsx)(_v89.Text, {
          variant: "body-sm",
          color: "text-secondary",
          flexShrink: 0,
          children: _v6
        }), (0, _v1.jsx)(_v89.Text, {
          variant: "body-sm",
          color: "text-secondary",
          flexShrink: 0,
          minWidth: (0, _v87.rem)(90),
          marginLeft: "md",
          display: {
            base: "none",
            md: "block"
          },
          children: void 0 === (_v4 = _v0.dateMs) ? "" : new Intl.DateTimeFormat(void 0, {
            month: "short",
            day: "numeric",
            year: "numeric"
          }).format(new Date(_v4))
        })]
      });
    },
    _v154 = _v0 => {
      let _v1 = _v0?.split("/").pop();
      return _v1 ? parseInt(_v1, 10) : void 0;
    },
    _v155 = _v0 => _v0?.[Math.min(2, _v0.length - 1)]?.link ?? _v0?.[0]?.link,
    _v156 = _v0 => {
      if (!_v0) return;
      let _v1 = Date.parse(_v0);
      return Number.isNaN(_v1) ? void 0 : _v1;
    },
    _v157 = ({
      userId: _v0,
      folderId: _v1,
      search: _v2,
      sort: _v3,
      direction: _v4,
      selectedUris: _v5,
      onToggleSelect: _v6,
      onVisibleItemsChange: _v7,
      reloadToken: _v8
    }) => {
      let _v9 = (0, _v145.useDebouncedValue)(_v2.trim(), 300),
        _v10 = _v9.length > 0,
        _v11 = (0, _v147.useGetUserProjectItemsInfinite)(() => _v10 ? null : {
          where: {
            userId: _v0,
            projectId: _v1
          },
          select: _v148,
          query: {
            direction: _v4,
            perPage: 25,
            sort: _v3
          }
        }, {
          revalidateOnFocus: !1
        }),
        _v12 = (0, _v146.useGetUserItemsInfinite)(() => _v10 ? {
          where: {
            userId: _v0
          },
          select: _v148,
          query: {
            direction: _v4,
            sort: _v3,
            perPage: 25,
            includeFolderIds: String(_v1),
            query: _v9,
            precision: 3
          },
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4"
          }
        } : null, {
          revalidateOnFocus: !1,
          revalidateFirstPage: !1
        }),
        {
          data: _v13,
          size: _v14,
          setSize: _v15,
          isLoading: _v16,
          isValidating: _v17,
          mutate: _v18
        } = _v10 ? _v12 : _v11,
        _v19 = (0, _v5.useMemo)(() => _v13 ? _v13.flatMap(_v0 => _v0.data.flatMap(_v0 => _v0.folder?.uri ? [{
          kind: "folder",
          uri: _v0.folder.uri,
          name: _v0.folder.name ?? "",
          parentFolderId: _v154(_v0.folder.metadata?.connections?.parentFolder?.uri),
          canMove: !0,
          dateMs: _v156(_v0.folder.lastUserActionEventDate ?? _v0.folder.createdTime),
          itemCount: _v0.folder.metadata?.connections?.items?.total
        }] : _v0.video?.uri ? [{
          kind: "video",
          uri: _v0.video.uri,
          name: _v0.video.name ?? "",
          parentFolderId: _v154(_v0.video.parentProject?.uri),
          canMove: !1 !== _v0.video.canMoveToProject,
          dateMs: _v156(_v0.video.lastUserActionEventDate ?? _v0.video.createdTime),
          thumbnailUrl: _v155(_v0.video.pictures?.sizes),
          uploaderName: _v0.video.uploader?.name,
          uploaderAvatarUrl: _v155(_v0.video.uploader?.pictures?.sizes),
          privacyView: _v0.video.privacy?.view
        }] : [])) : [], [_v13]);
      (0, _v5.useEffect)(() => {
        _v7(_v19);
      }, [_v19, _v7]), (0, _v5.useEffect)(() => {
        _v8 > 0 && _v18();
      }, [_v8, _v18]);
      let _v20 = !!_v13?.[_v13.length - 1]?.paging?.next,
        _v21 = (0, _v5.useRef)(null);
      return ((0, _v5.useEffect)(() => {
        let _v0 = _v21.current;
        if (!_v0 || !_v20) return;
        let _v1 = new IntersectionObserver(_v0 => {
          _v0[0]?.isIntersecting && !_v17 && _v15(_v14 + 1);
        });
        return _v1.observe(_v0), () => _v1.disconnect();
      }, [_v20, _v17, _v15, _v14]), _v16) ? (0, _v1.jsx)(_v6.Flex, {
        justifyContent: "center",
        paddingY: "2xl",
        children: (0, _v1.jsx)(_v88.Spinner, {
          size: "lg"
        })
      }) : 0 === _v19.length ? (0, _v1.jsx)(_v6.Flex, {
        justifyContent: "center",
        paddingY: "2xl",
        children: (0, _v1.jsx)(_v89.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v10 ? (0, _v21.translate)({
            singular: "No videos or folders match your search",
            dictionary: {
              es: {
                singular: "No hay vídeos ni carpetas que coincidan con tu búsqueda"
              },
              "de-DE": {
                singular: "Keine Videos oder Ordner entsprechen Ihrer Suche"
              },
              "fr-FR": {
                singular: "Aucune vidéo ni dossier ne correspond à votre recherche"
              },
              "ja-JP": {
                singular: "検索に一致する動画またはフォルダはありません"
              },
              "ko-KR": {
                singular: "검색어와 일치하는 비디오나 폴더가 없습니다."
              },
              "pt-BR": {
                singular: "Nenhum vídeo ou pasta corresponde à sua pesquisa"
              },
              "zh-CN": {
                singular: "没有视频或文件夹匹配您的搜索"
              }
            }
          }) : (0, _v21.translate)({
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
        })
      }) : (0, _v1.jsxs)(_v6.Flex, {
        flexDirection: "column",
        gap: "xs",
        children: [_v19.map((_v0, _v1) => (0, _v1.jsx)(_v153, {
          item: _v0,
          index: _v1,
          isSelected: _v5.has(_v0.uri),
          onToggleSelect: _v6
        }, _v0.uri)), _v20 && (0, _v1.jsx)(_v6.Flex, {
          ref: _v21,
          justifyContent: "center",
          paddingY: "md",
          children: (0, _v1.jsx)(_v88.Spinner, {
            size: "md"
          })
        })]
      });
    },
    _v158 = (_v0, _v1) => ({
      uri: _v0.uri,
      kind: _v0.kind,
      parentFolderId: _v0.parentFolderId ?? _v1
    }),
    _v159 = ({
      isOpen: _v0,
      onClose: _v1,
      userId: _v2,
      onMoveSuccess: _v3
    }) => {
      let {
          data: _v4,
          error: _v5,
          isLoading: _v6
        } = (0, _v144.useGetUserFoldersPrivateToMe)(() => _v0 ? {
          where: {
            ownerId: _v2
          },
          select: ["uri"]
        } : null),
        _v7 = _v154(_v4?.uri),
        _v8 = (0, _v5.useMemo)(() => [{
          type: "last_user_action_event_date",
          direction: "desc",
          label: (0, _v21.translate)({
            singular: "Last added",
            dictionary: {
              es: {
                singular: "Más recientemente añadidos"
              },
              "de-DE": {
                singular: "Zuletzt hinzugefügt"
              },
              "fr-FR": {
                singular: "Ajout le plus récent"
              },
              "ja-JP": {
                singular: "最新追加"
              },
              "ko-KR": {
                singular: "최근 추가"
              },
              "pt-BR": {
                singular: "Últimos adicionados"
              },
              "zh-CN": {
                singular: "最近添加"
              }
            }
          })
        }, {
          type: "alphabetical",
          direction: "asc",
          label: (0, _v21.translate)({
            singular: "Alphabetical (A–Z)",
            dictionary: {
              es: {
                singular: "Alfabético (A–Z)"
              },
              "de-DE": {
                singular: "Alphabetisch (A–Z)"
              },
              "fr-FR": {
                singular: "Alphabétique (A–Z)"
              },
              "ja-JP": {
                singular: "アルファベット順（A–Z）"
              },
              "ko-KR": {
                singular: "알파벳순 (A–Z)"
              },
              "pt-BR": {
                singular: "Alfabética (A–Z)"
              },
              "zh-CN": {
                singular: "按字母顺序 (A–Z)"
              }
            }
          })
        }], []),
        [_v9, _v10] = (0, _v5.useState)(""),
        [_v11, _v12] = (0, _v5.useState)(0),
        [_v13, _v14] = (0, _v5.useState)(new Map()),
        [_v15, _v16] = (0, _v5.useState)([]),
        [_v17, _v18] = (0, _v5.useState)(0),
        _v19 = (0, _v5.useRef)(void 0),
        _v20 = (0, _v5.useRef)(!1);
      (0, _v5.useEffect)(() => {
        if (!_v0) return;
        let _v0 = _v0 => {
          _v20.current = _v0.shiftKey;
        };
        return window.addEventListener("keydown", _v0), window.addEventListener("keyup", _v0), () => {
          window.removeEventListener("keydown", _v0), window.removeEventListener("keyup", _v0);
        };
      }, [_v0]), (0, _v5.useEffect)(() => {
        _v19.current = void 0;
      }, [_v9, _v11]);
      let [_v21, {
          loading: _v22
        }] = (0, _v48.useMoveItem)(),
        _v23 = (0, _v49.useNotification)(),
        _v24 = _v8[_v11],
        _v25 = (0, _v5.useCallback)(() => {
          _v10(""), _v12(0), _v14(new Map()), _v16([]), _v18(0), _v19.current = void 0;
        }, []),
        _v26 = (0, _v5.useCallback)(() => {
          _v25(), _v1();
        }, [_v1, _v25]),
        _v27 = (0, _v5.useMemo)(() => _v15.filter(_v0 => _v0.canMove), [_v15]),
        _v28 = (0, _v5.useCallback)((_v0, _v1) => {
          if (void 0 === _v7 || !_v0.canMove) return;
          let _v2 = _v19.current;
          _v14(_v0 => {
            let _v1 = new Map(_v0),
              _v2 = !_v0.has(_v0.uri),
              _v3 = _v0 => {
                _v0.canMove && (_v2 ? _v1.set(_v0.uri, _v158(_v0, _v7)) : _v1.delete(_v0.uri));
              };
            if (_v20.current && void 0 !== _v2) {
              let _v0 = Math.min(_v2, _v1),
                _v1 = Math.max(_v2, _v1);
              for (let _v0 = _v0; _v0 <= _v1; _v0++) {
                let _v0 = _v15[_v0];
                _v0 && _v3(_v0);
              }
            } else _v3(_v0);
            return _v1;
          }), _v19.current = _v1;
        }, [_v7, _v15]),
        _v29 = _v27.length > 0 && _v27.every(_v0 => _v13.has(_v0.uri)),
        _v30 = _v27.some(_v0 => _v13.has(_v0.uri)),
        _v31 = (0, _v5.useCallback)(() => {
          void 0 !== _v7 && _v14(_v0 => {
            let _v1 = new Map(_v0),
              _v2 = !_v27.every(_v0 => _v1.has(_v0.uri));
            return _v27.forEach(_v0 => {
              _v2 ? _v1.set(_v0.uri, _v158(_v0, _v7)) : _v1.delete(_v0.uri);
            }), _v1;
          });
        }, [_v7, _v27]),
        _v32 = _v13.size,
        _v33 = _v32 > 100,
        _v34 = (0, _v5.useCallback)(async () => {
          let _v0;
          if (0 === _v32) return;
          let _v1 = [..._v13.values()],
            _v2 = new Set(),
            _v3 = (_v0, _v1) => {
              _v1.ok ? _v0.forEach(_v0 => _v2.add(_v0)) : _v0 || (_v0 = _v1.error);
            },
            _v4 = new Map();
          for (let {
            parentFolderId: _v0,
            uris: _v1
          } of (_v1.forEach(({
            uri: _v0,
            kind: _v1,
            parentFolderId: _v2
          }) => {
            let _v3 = `${_v2}:${_v1}`,
              _v4 = _v4.get(_v3) ?? {
                parentFolderId: _v2,
                uris: []
              };
            _v4.uris.push(_v0), _v4.set(_v3, _v4);
          }), _v4.values())) {
            let _v0 = await _v21({
              ownerId: _v2,
              folderId: _v0,
              moveToRoot: !0,
              targetItems: _v1.map(_v0 => ({
                uri: _v0
              }))
            });
            _v3(_v1, _v0);
          }
          let _v5 = _v2.size;
          if (_v5 === _v1.length) {
            _v23({
              content: (0, _v21.translate)({
                singular: "Moved {COUNT} item to Team Library.",
                plural: "Moved {COUNT} items to Team Library.",
                count: _v5,
                replacements: {
                  COUNT: _v5
                },
                dictionary: {
                  es: {
                    singular: "Se movió {COUNT} elemento a la Biblioteca del equipo.",
                    plural: "Se movieron {COUNT} elementos a la Biblioteca del equipo."
                  },
                  "de-DE": {
                    singular: "{COUNT} Element in die Team-Bibliothek verschoben.",
                    plural: "{COUNT} Elemente in die Team-Bibliothek verschoben."
                  },
                  "fr-FR": {
                    singular: "Déplacé {COUNT} élément vers la bibliothèque d'équipe.",
                    plural: "Déplacé {COUNT} éléments vers la bibliothèque d'équipe."
                  },
                  "ja-JP": {
                    singular: "{COUNT}件のアイテムをチームライブラリに移動しました。",
                    plural: "{COUNT}件のアイテムをチームライブラリに移動しました。"
                  },
                  "ko-KR": {
                    singular: "{COUNT}개의 항목을 팀 라이브러리로 이동했습니다.",
                    plural: "{COUNT}개의 항목을 팀 라이브러리로 이동했습니다."
                  },
                  "pt-BR": {
                    singular: "Moveu {COUNT} item para a Biblioteca da equipe.",
                    plural: "Moveu {COUNT} itens para a Biblioteca da equipe."
                  },
                  "zh-CN": {
                    singular: "已将 {COUNT} 个项目移至团队资料库。",
                    plural: "已将 {COUNT} 个项目移至团队资料库。"
                  }
                }
              }),
              status: "success"
            }), _v26(), _v3?.();
            return;
          }
          _v5 > 0 && (_v3?.(), _v18(_v0 => _v0 + 1)), _v14(new Map()), _v19.current = void 0, _v23({
            content: _v0 ?? (0, _v21.translate)({
              singular: "Couldn't move your content. Please try again.",
              dictionary: {
                es: {
                  singular: "No se pudo mover tu contenido. Inténtalo de nuevo."
                },
                "de-DE": {
                  singular: "Konnte Ihre Inhalte nicht verschieben. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Impossible de déplacer votre contenu. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "コンテンツを移動できませんでした。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "콘텐츠를 이동할 수 없습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Não foi possível mover seu conteúdo. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "无法移动您的内容。请再试一次。"
                }
              }
            }),
            status: "error"
          });
        }, [_v26, _v21, _v23, _v3, _v13, _v32, _v2]);
      return (0, _v1.jsxs)(_v133.Modal, {
        isOpen: _v0,
        onClose: _v26,
        isCentered: !0,
        preserveScrollBarGap: !0,
        children: [(0, _v1.jsx)(_v139.ModalOverlay, {}), (0, _v1.jsxs)(_v136.ModalContent, {
          maxWidth: (0, _v87.rem)(640),
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: {
            base: "auto",
            md: (0, _v87.rem)(680)
          },
          maxHeight: `calc(100vh - ${(0, _v87.rem)(48)})`,
          children: [(0, _v1.jsx)(_v138.ModalHeader, {
            marginBottom: "sm",
            children: (0, _v21.translate)({
              singular: "Select videos and folders from My Library",
              dictionary: {
                es: {
                  singular: "Seleccionar vídeos y carpetas de Mi biblioteca"
                },
                "de-DE": {
                  singular: "Videos und Ordner aus 'Meine Bibliothek' auswählen"
                },
                "fr-FR": {
                  singular: "Sélectionner des vidéos et des dossiers dans Ma bibliothèque"
                },
                "ja-JP": {
                  singular: "マイライブラリから動画とフォルダを選択"
                },
                "ko-KR": {
                  singular: "내 라이브러리에서 비디오 및 폴더 선택"
                },
                "pt-BR": {
                  singular: "Selecione vídeos e pastas da Minha Biblioteca"
                },
                "zh-CN": {
                  singular: "从我的库中选择视频和文件夹"
                }
              }
            })
          }), (0, _v1.jsx)(_v135.ModalCloseButton, {}), (0, _v1.jsxs)(_v81.Box, {
            flexShrink: 0,
            paddingX: "lg",
            paddingBottom: "md",
            borderBottomWidth: "1px",
            borderColor: "stroke",
            children: [(0, _v1.jsxs)(_v128.AlertRoot, {
              variant: "info",
              size: "md",
              borderRadius: "md",
              marginTop: "sm",
              marginBottom: "lg",
              alignItems: "flex-start",
              gap: "sm",
              children: [(0, _v1.jsx)(_v81.Box, {
                flexShrink: 0,
                display: "flex",
                mt: (0, _v87.rem)(2),
                color: "status-info-primary",
                children: (0, _v1.jsx)(_v141.InfoCircleFilled, {
                  width: (0, _v87.rem)(20),
                  height: (0, _v87.rem)(20)
                })
              }), (0, _v1.jsx)(_v127.AlertDescription, {
                children: (0, _v21.translate)({
                  singular: "Moving changes where a video lives, not who can watch it. Public, password, and only-me links stay exactly as you set them.",
                  dictionary: {
                    es: {
                      singular: "Mover cambia la ubicación del vídeo, no quién puede verlo. Los enlaces públicos, con contraseña y solo yo permanecen exactamente como los configuraste."
                    },
                    "de-DE": {
                      singular: "Beim Verschieben ändert sich der Speicherort eines Videos, nicht aber, wer es ansehen kann. Öffentliche, passwortgeschützte und Nur-ich-Links bleiben genau so, wie Sie sie eingestellt haben."
                    },
                    "fr-FR": {
                      singular: "Le déplacement modifie l'emplacement d'une vidéo, pas qui peut la regarder. Les liens publics, protégés par mot de passe et « Moi uniquement » restent exactement tels que vous les avez définis."
                    },
                    "ja-JP": {
                      singular: "移動は動画の保存場所を変更するもので、視聴できる相手は変わりません。公開リンク、パスワード保護されたリンク、および自分のみのリンクは設定どおり保持されます。"
                    },
                    "ko-KR": {
                      singular: "이동하면 비디오의 저장 위치만 변경되고, 누가 시청할 수 있는지는 변경되지 않습니다. 공개 링크, 비밀번호 링크, '나만 보기' 링크는 설정한 대로 그대로 유지됩니다."
                    },
                    "pt-BR": {
                      singular: "Mover altera onde um vídeo fica, não quem pode assisti-lo. Links públicos, protegidos por senha e 'somente eu' permanecem exatamente como você definiu."
                    },
                    "zh-CN": {
                      singular: "移动仅会更改视频所在位置，不会更改谁可以观看它. 公开、密码和仅限我链接将完全保持为您所设置的."
                    }
                  }
                })
              })]
            }), (0, _v1.jsxs)(_v6.Flex, {
              gap: "sm",
              alignItems: "center",
              marginBottom: "md",
              children: [(0, _v1.jsxs)(_v131.InputGroup, {
                flex: "1",
                children: [(0, _v1.jsx)(_v132.InputLeftElement, {
                  children: (0, _v1.jsx)(_v142.SearchMagnifier, {
                    width: (0, _v87.rem)(16),
                    height: (0, _v87.rem)(16)
                  })
                }), (0, _v1.jsx)(_v130.Input, {
                  value: _v9,
                  onChange: _v0 => _v10(_v0.target.value),
                  placeholder: (0, _v21.translate)({
                    singular: "Search videos and folders",
                    dictionary: {
                      es: {
                        singular: "Buscar vídeos y carpetas"
                      },
                      "de-DE": {
                        singular: "Videos und Ordner durchsuchen"
                      },
                      "fr-FR": {
                        singular: "Rechercher des vidéos et des dossiers"
                      },
                      "ja-JP": {
                        singular: "動画とフォルダを検索"
                      },
                      "ko-KR": {
                        singular: "비디오 및 폴더 검색"
                      },
                      "pt-BR": {
                        singular: "Pesquisar vídeos e pastas"
                      },
                      "zh-CN": {
                        singular: "搜索视频和文件夹"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsxs)(_v114.Menu, {
                children: [(0, _v1.jsx)(_v115.MenuButton, {
                  as: _v105.Button,
                  variant: "tertiary",
                  size: "sm",
                  display: {
                    base: "none",
                    md: "inline-flex"
                  },
                  leftIcon: (0, _v1.jsx)(_v143.SortSmall, {
                    width: (0, _v87.rem)(16),
                    height: (0, _v87.rem)(16)
                  }),
                  rightIcon: (0, _v1.jsx)(_v140.ChevronDownSmall, {
                    width: (0, _v87.rem)(16),
                    height: (0, _v87.rem)(16)
                  }),
                  children: _v24.label
                }), (0, _v1.jsx)(_v117.MenuList, {
                  children: _v8.map((_v0, _v1) => (0, _v1.jsx)(_v116.MenuItem, {
                    onClick: () => _v12(_v1),
                    children: _v0.label
                  }, _v0.type))
                })]
              })]
            }), (0, _v1.jsxs)(_v6.Flex, {
              alignItems: "center",
              justifyContent: "space-between",
              children: [(0, _v1.jsx)(_v129.Checkbox, {
                size: "md",
                isChecked: _v29,
                isIndeterminate: !_v29 && _v30,
                onChange: _v31,
                isDisabled: 0 === _v27.length,
                children: (0, _v21.translate)({
                  singular: "Select all",
                  dictionary: {
                    es: {
                      singular: "Seleccionar todo"
                    },
                    "de-DE": {
                      singular: "Alles auswählen"
                    },
                    "fr-FR": {
                      singular: "Tout sélectionner"
                    },
                    "ja-JP": {
                      singular: "すべて選択"
                    },
                    "ko-KR": {
                      singular: "모두 선택"
                    },
                    "pt-BR": {
                      singular: "Selecionar tudo"
                    },
                    "zh-CN": {
                      singular: "选择所有"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v6.Flex, {
                alignItems: "center",
                gap: "sm",
                children: (0, _v1.jsxs)(_v114.Menu, {
                  children: [(0, _v1.jsx)(_v115.MenuButton, {
                    as: _v105.Button,
                    variant: "tertiary",
                    size: "sm",
                    display: {
                      base: "inline-flex",
                      md: "none"
                    },
                    leftIcon: (0, _v1.jsx)(_v143.SortSmall, {
                      width: (0, _v87.rem)(16),
                      height: (0, _v87.rem)(16)
                    }),
                    rightIcon: (0, _v1.jsx)(_v140.ChevronDownSmall, {
                      width: (0, _v87.rem)(16),
                      height: (0, _v87.rem)(16)
                    }),
                    children: _v24.label
                  }), (0, _v1.jsx)(_v117.MenuList, {
                    children: _v8.map((_v0, _v1) => (0, _v1.jsx)(_v116.MenuItem, {
                      onClick: () => _v12(_v1),
                      children: _v0.label
                    }, _v0.type))
                  })]
                })
              })]
            })]
          }), (0, _v1.jsx)(_v134.ModalBody, {
            overflowY: "auto",
            flex: "1",
            minHeight: (0, _v87.rem)(120),
            children: void 0 === _v7 ? _v6 ? (0, _v1.jsx)(_v6.Flex, {
              justifyContent: "center",
              paddingY: "2xl",
              children: (0, _v1.jsx)(_v88.Spinner, {
                size: "lg"
              })
            }) : (0, _v1.jsx)(_v6.Flex, {
              justifyContent: "center",
              paddingY: "2xl",
              children: (0, _v1.jsx)(_v89.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v5 ? (0, _v21.translate)({
                  singular: "Couldn't load your library. Please try again.",
                  dictionary: {
                    es: {
                      singular: "No se pudo cargar su biblioteca. Por favor, inténtelo de nuevo."
                    },
                    "de-DE": {
                      singular: "Ihre Bibliothek konnte nicht geladen werden. Bitte versuchen Sie es erneut."
                    },
                    "fr-FR": {
                      singular: "Impossible de charger votre bibliothèque. Veuillez réessayer."
                    },
                    "ja-JP": {
                      singular: "ライブラリを読み込めませんでした。もう一度お試しください。"
                    },
                    "ko-KR": {
                      singular: "라이브러리를 불러올 수 없습니다. 다시 시도해 주세요."
                    },
                    "pt-BR": {
                      singular: "Não foi possível carregar sua biblioteca. Por favor, tente novamente."
                    },
                    "zh-CN": {
                      singular: "无法加载您的库。请重试。"
                    }
                  }
                }) : (0, _v21.translate)({
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
              })
            }) : (0, _v1.jsx)(_v157, {
              userId: _v2,
              folderId: _v7,
              search: _v9,
              sort: _v24.type,
              direction: _v24.direction,
              selectedUris: new Set(_v13.keys()),
              onToggleSelect: _v28,
              onVisibleItemsChange: _v16,
              reloadToken: _v17
            }, _v7)
          }), (0, _v1.jsxs)(_v137.ModalFooter, {
            flexDirection: "column",
            alignItems: "stretch",
            gap: "md",
            children: [(0, _v1.jsxs)(_v89.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: [(0, _v1.jsx)(_v81.Box, {
                as: "span",
                fontWeight: "bold",
                color: "text-primary",
                children: (0, _v21.translate)({
                  singular: "{COUNT} item will move to Team Library.",
                  plural: "{COUNT} items will move to Team Library.",
                  count: _v32,
                  replacements: {
                    COUNT: _v32
                  },
                  dictionary: {
                    es: {
                      singular: "{COUNT} elemento se moverá a la Biblioteca del equipo.",
                      plural: "{COUNT} elementos se moverán a la Biblioteca del equipo."
                    },
                    "de-DE": {
                      singular: "{COUNT} Element wird in die Team-Bibliothek verschoben.",
                      plural: "{COUNT} Elemente werden in die Team-Bibliothek verschoben."
                    },
                    "fr-FR": {
                      singular: "{COUNT} élément sera déplacé vers la bibliothèque d'équipe.",
                      plural: "{COUNT} éléments seront déplacés vers la bibliothèque d'équipe."
                    },
                    "ja-JP": {
                      singular: "{COUNT} 件がチームライブラリに移動します。",
                      plural: "{COUNT} 件がチームライブラリに移動します。"
                    },
                    "ko-KR": {
                      singular: "{COUNT}개 항목이 팀 라이브러리로 이동합니다.",
                      plural: "{COUNT}개 항목이 팀 라이브러리로 이동합니다."
                    },
                    "pt-BR": {
                      singular: "{COUNT} item será movido para a Biblioteca da Equipe.",
                      plural: "{COUNT} itens serão movidos para a Biblioteca da Equipe."
                    },
                    "zh-CN": {
                      singular: "{COUNT} 个项目将移至团队库.",
                      plural: "{COUNT} 个项目将移至团队库."
                    }
                  }
                })
              }), " ", (0, _v21.translate)({
                singular: "Each video's privacy stays exactly as you set it.",
                dictionary: {
                  es: {
                    singular: "La privacidad de cada vídeo permanece exactamente como la configuraste."
                  },
                  "de-DE": {
                    singular: "Die Privatsphäre jedes Videos bleibt genau so, wie Sie sie eingestellt haben."
                  },
                  "fr-FR": {
                    singular: "La confidentialité de chaque vidéo reste exactement telle que vous l'avez définie."
                  },
                  "ja-JP": {
                    singular: "各動画のプライバシー設定は、ご指定どおりそのまま保持されます。"
                  },
                  "ko-KR": {
                    singular: "각 비디오의 공개 설정은 사용자가 설정한 대로 그대로 유지됩니다."
                  },
                  "pt-BR": {
                    singular: "A privacidade de cada vídeo permanece exatamente como você definiu."
                  },
                  "zh-CN": {
                    singular: "每个视频的隐私设置将完全保持为您所设置的."
                  }
                }
              })]
            }), _v33 && (0, _v1.jsx)(_v89.Text, {
              variant: "body-sm",
              color: "text-error",
              children: (0, _v21.translate)({
                singular: "You can move up to {COUNT} item at a time.",
                plural: "You can move up to {COUNT} items at a time.",
                count: 100,
                replacements: {
                  COUNT: 100
                },
                dictionary: {
                  es: {
                    singular: "Puedes mover hasta {COUNT} elemento a la vez.",
                    plural: "Puedes mover hasta {COUNT} elementos a la vez."
                  },
                  "de-DE": {
                    singular: "Sie können bis zu {COUNT} Element auf einmal verschieben.",
                    plural: "Sie können bis zu {COUNT} Elemente auf einmal verschieben."
                  },
                  "fr-FR": {
                    singular: "Vous pouvez déplacer jusqu'à {COUNT} élément à la fois.",
                    plural: "Vous pouvez déplacer jusqu'à {COUNT} éléments à la fois."
                  },
                  "ja-JP": {
                    singular: "一度に最大{COUNT}件まで移動できます。",
                    plural: "一度に最大{COUNT}件まで移動できます。"
                  },
                  "ko-KR": {
                    singular: "한 번에 최대 {COUNT}개 항목을 이동할 수 있습니다.",
                    plural: "한 번에 최대 {COUNT}개 항목을 이동할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Você pode mover até {COUNT} item por vez.",
                    plural: "Você pode mover até {COUNT} itens por vez."
                  },
                  "zh-CN": {
                    singular: "您一次最多可移动 {COUNT} 个项目.",
                    plural: "您一次最多可移动 {COUNT} 个项目."
                  }
                }
              })
            }), (0, _v1.jsxs)(_v6.Flex, {
              flexDirection: {
                base: "column",
                md: "row"
              },
              justifyContent: "flex-end",
              gap: "md",
              children: [(0, _v1.jsx)(_v105.Button, {
                variant: "tertiary",
                onClick: _v26,
                isDisabled: _v22,
                width: {
                  base: "100%",
                  md: "auto"
                },
                children: (0, _v21.translate)({
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
              }), (0, _v1.jsx)(_v105.Button, {
                variant: "primary",
                onClick: _v34,
                isDisabled: 0 === _v32 || _v22 || _v33,
                isLoading: _v22,
                width: {
                  base: "100%",
                  md: "auto"
                },
                children: (0, _v21.translate)({
                  singular: "Move to Team Library",
                  dictionary: {
                    es: {
                      singular: "Mover a la Biblioteca del equipo"
                    },
                    "de-DE": {
                      singular: "In die Team-Bibliothek verschieben"
                    },
                    "fr-FR": {
                      singular: "Déplacer vers la bibliothèque d'équipe"
                    },
                    "ja-JP": {
                      singular: "チームライブラリに移動"
                    },
                    "ko-KR": {
                      singular: "팀 라이브러리로 이동"
                    },
                    "pt-BR": {
                      singular: "Mover para Biblioteca da Equipe"
                    },
                    "zh-CN": {
                      singular: "移至团队库"
                    }
                  }
                })
              })]
            })]
          })]
        })]
      });
    };
  var _v160 = _v0.i(0);
  let _v161 = () => {
    let {
        setModalContextState: _v0
      } = (0, _v5.useContext)(_v97),
      _v1 = (0, _v5.useContext)(_v95.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      {
        capabilities: _v3
      } = (0, _v17.useCapability)(["hasContentSpaceEnabled"], _v2),
      {
        trackLibraryNewFolderClicked: _v4
      } = (0, _v29.useLibraryTracking)();
    return (0, _v1.jsx)(_v160.NewFolderButton, {
      onClick: () => {
        _v4({
          libraryType: (0, _v30.deriveLibraryType)({
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
  var _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0),
    _v173 = _v0.i(0),
    _v174 = _v0.i(0),
    _v175 = _v0.i(0),
    _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0),
    _v179 = _v0.i(0),
    _v180 = _v0.i(0),
    _v181 = _v0.i(0),
    _v182 = _v0.i(0),
    _v183 = _v0.i(0),
    _v184 = _v0.i(0),
    _v185 = _v0.i(0),
    _v186 = _v0.i(0),
    _v187 = _v0.i(0),
    _v188 = _v0.i(0),
    _v189 = _v0.i(0),
    _v190 = _v0.i(0);
  let _v191 = ({
    deselectItem: _v0,
    handleMoveItemsOnDrop: _v1,
    items: _v2,
    libraryTitle: _v3,
    onCopyVideo: _v4,
    onFolderSettingsChange: _v5,
    onMoreInfo: _v6,
    onMoveFolderSuccess: _v7,
    onMoveFolderFailure: _v8,
    removeItem: _v9,
    selectedItemURIs: _v10,
    selectItem: _v11,
    setIsUploadDropzoneEnabled: _v12,
    sort: _v13,
    isLoading: _v14 = !1
  }) => {
    let _v15 = (0, _v5.useContext)(_v95.ViewerContext),
      {
        notifyItemMoveSuccess: _v16,
        notifyItemMoveToWorkspaceSuccess: _v17
      } = (0, _v49.useNotifications)(),
      _v18 = (0, _v173.usePageName)(),
      _v19 = (0, _v25.useUniversalHostingEnabled)(),
      _v20 = !!_v15?.teamUser || (_v15?.team?.currentTeamSize ?? 0) > 0,
      {
        getDisplayDateWithTime: _v21
      } = (0, _v181.useFormatDateTime)(),
      _v22 = _v15?.teamUser?.ownerId ?? _v15?.user?.id,
      _v23 = (0, _v92.useTeamUploadClipProperties)(_v22),
      {
        contentSpaceEnabled: _v24
      } = (0, _v169.useContentSpaceEnabled)(_v22),
      {
        capabilities: _v25
      } = (0, _v17.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks", "hasContentSpaceEnabled"], _v22),
      _v26 = (0, _v30.deriveLibraryType)({
        hasContentSpaceEnabled: !!_v25.hasContentSpaceEnabled
      }),
      _v27 = (0, _v186.useVideoPrivacyBadgeHandlers)({
        surface: "card",
        pageSurface: _v24 ? "team_library" : "library"
      }),
      _v28 = (0, _v187.useFilePrivacyBadgeHandlers)({
        surface: _v24 ? "team_library" : "library",
        badgeVariant: "card"
      }),
      _v29 = (0, _v188.useFolderPrivacyBadgeHandlers)({
        surface: _v24 ? "team_library" : "library",
        badgeVariant: "card"
      }),
      {
        trackLibraryFolderOpened: _v30
      } = (0, _v29.useLibraryTracking)(),
      _v31 = !!_v25.canSeeUpsellModalOnShare,
      _v32 = !!_v25.hasVideoReviewPageDemo,
      _v33 = !!_v25.hasMultipleReviewLinks;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [!!_v2?.length && _v2.map((_v0, _v1) => {
        if (_v0.marketingVideo) return (0, _v1.jsx)(_v185.MarketingVideoCard, {
          variant: "grid",
          ..._v0.marketingVideo
        }, "marketing-video-card");
        if (_v0.video) {
          let _v0 = _v0.video,
            _v1 = _v0.isSelected,
            _v2 = !!_v0.metadata?.interactions?.edit?.uri,
            _v3 = _v0.isColdStorage ?? !1,
            _v4 = !!_v0.canMoveToProject && !_v3,
            _v5 = _v3 ? "" : _v2 ? _v0.manageLink : _v0.link,
            _v6 = (0, _v177.getTimestampBySort)(_v13.type, _v0.lastUserActionEventDate ?? "", _v0.createdTime),
            {
              videoPrivacy: _v7,
              variant: _v8,
              onPrivacyBadgeClick: _v9,
              openLockedVideoPaywall: _v10,
              tooltipLabel: _v11
            } = _v27(_v0);
          return (0, _v1.jsx)(_v174.FolderItemDragWrapper, {
            type: _v164.ITEM_TYPES.ROOT_VIDEO,
            uri: _v0.uri,
            parentFolderUri: "root",
            thumbnail: _v0.pictures.sizes[1].link,
            canDrag: _v4,
            isSelected: !!_v1,
            selectedItemURIs: _v10,
            onDrop: _v1,
            setIsUploadDropzoneEnabled: _v12,
            children: (0, _v1.jsx)(_v183.VideoCard, {
              title: _v0.name,
              subtitle: _v21(_v6),
              href: _v5 ?? "",
              isDefaultPicture: _v0.pictures?.defaultPicture,
              thumbnailSrc: _v0.pictures?.sizes[3].link,
              avatarSrc: _v0.uploader?.pictures?.sizes[1].link,
              avatarName: _v0.uploader?.name,
              showAvatarInSubtitle: _v19 && _v20,
              typeIcon: _v19 ? (0, _v1.jsx)(_v167.ContentTypeIcon, {
                category: "video"
              }) : void 0,
              tagText: (0, _v170.secondsToDisplay)(_v0.duration),
              isSelectable: _v0.isSelectable,
              titleStyles: {
                maxWidth: _v54.CONTENT_CARD_TITLE_MAX_WIDTH
              },
              isSelected: _v1,
              configUrl: _v0.configUrl ?? "",
              clipId: (0, _v172.idFromUri)(_v0?.uri),
              pageName: _v18,
              isColdStorage: _v3,
              isManagedStorage: !0 === _v0.countsTowardManagedStorage,
              lockedTooltipLabel: _v189.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
              onLockedClick: _v3 ? _v10 : void 0,
              onToggleSelected: () => {
                _v0.isSelected ? _v0(_v0.uri, _v1, _v2) : _v11(_v0.uri, _v1, _v2);
              },
              hoverActions: (0, _v1.jsx)(_v180.HoverActions, {
                type: "video",
                entity: _v0,
                canShare: !!((_v0.metadata?.interactions?.invite?.uri || _v31) && !_v0.metadata?.hasMandatoryEmailCapture),
                hasMoreInfo: !0,
                onMoreInfo: () => _v6(_v0.uri)
              }),
              actionsMenu: (0, _v1.jsx)(_v178.VideoMenu, {
                video: _v0,
                feature: _v171.AnalyticsFeatures.VIDEO_LIBRARY,
                enableReorganizedOverflowMenu: !0,
                onCopyVideo: _v4 ? () => _v4(_v0) : void 0,
                onMoreInfo: () => _v6(_v0.uri),
                onMoveSuccess: ({
                  selectedDestination: _v0,
                  video: _v1,
                  destinationWorkspaceId: _v2,
                  destinationWorkspaceName: _v3
                }) => {
                  if (_v0(_v1.uri, _v1, _v2), _v9?.(_v1.uri, "video"), _v2 && _v3) {
                    let _v0 = "root" === _v0 ? _v3 : _v0.name,
                      _v1 = "root" === _v0 ? "/library" : (0, _v74.getFolderPageUriFromApiUri)(_v0.uri);
                    _v17(_v1.name, {
                      label: _v0,
                      workspaceName: _v3
                    }, () => {
                      _v15 && (0, _v162.switchTeam)(_v2, _v15.xsrft).finally(() => {
                        window.location.href = _v1;
                      });
                    });
                  } else "root" !== _v0 && _v16(_v1.name, {
                    label: _v0.name,
                    link: (0, _v74.getFolderPageUriFromApiUri)(_v0.uri)
                  });
                },
                onDelete: () => {
                  _v0(_v0.uri, _v1, _v2), _v9?.(_v0.uri, "video");
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
              videoPrivacy: _v7,
              privacyBadgeVariant: _v8,
              privacyBadgeTooltip: _v11,
              onPrivacyBadgeClick: _v9
            })
          }, _v0.uri);
        }
        if (_v0.folder) {
          let _v0 = parseInt(_v0.folder.uri.split("/")?.[2]),
            _v1 = parseInt(_v0.folder.uri.split("/")[4]),
            {
              folderPrivacy: _v2,
              onPrivacyBadgeClick: _v3
            } = _v29(_v0.folder),
            _v4 = _v13.type === _v54.SORT_OPTION.CREATED ? _v0.folder.createdTime : _v0.folder.lastUserActionEventDate ?? _v0.folder.createdTime;
          return (0, _v1.jsx)(_v175.FolderDropWrapper, {
            dropTarget: _v0.folder,
            dropTargetType: _v164.DROP_TARGET_TYPES.FOLDER_CARD,
            allowedDropEffect: _v164.ALLOWED_DROP_EFFECTS.MOVE,
            dropFileForUploadConfig: null != _v22 ? {
              targetUserId: _v22,
              folderId: _v1,
              folderName: _v0.folder.name,
              uploadClipProperties: _v23,
              surface: (0, _v176.getLibraryUploadSurface)({
                contentSpaceEnabled: _v24,
                isPrivateToUser: _v0.folder?.isPrivateToUser
              })
            } : void 0,
            children: (0, _v1.jsx)(_v182.DroppableFolderCard, {
              title: _v0.folder?.name,
              subtitle: _v21(_v4),
              folderId: _v1,
              folderOwnerId: _v0,
              tagText: (0, _v190.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
              titleStyles: {
                maxWidth: _v54.CONTENT_CARD_TITLE_MAX_WIDTH
              },
              href: (0, _v74.getFolderPageUriFromApiUri)(_v0.folder.uri),
              backgroundColor: _v0.folder.settings?.color,
              hoverActions: (0, _v1.jsx)(_v180.HoverActions, {
                type: "folder",
                entity: _v0.folder
              }),
              pageName: _v18,
              privacyBadge: (0, _v1.jsx)(_v166.ContentCard.PrivacyBadge, {
                privacy: _v2,
                layout: "overlay",
                onClick: _v3
              }),
              actionsMenu: (0, _v1.jsx)(_v179.FolderMenu, {
                folder: _v0.folder,
                onSettingsChange: _v5,
                onMoveSuccess: _v7,
                onMoveFailure: _v8,
                analytics: {
                  product: "Workflow",
                  feature: "video_library",
                  location: "folder_card"
                },
                libraryType: _v26
              }),
              onClick: () => {
                _v30({
                  folderUri: _v0.folder?.uri,
                  isPrivateToUser: _v0.folder?.isPrivateToUser
                });
              }
            })
          }, _v0.folder.uri);
        }
        if (_v0.file) {
          let _v0 = _v0.file,
            _v1 = _v0.isSelected,
            _v2 = `/manage/files/${_v0.publicId}`,
            {
              filePrivacy: _v3,
              onPrivacyBadgeClick: _v4
            } = _v28(_v0);
          return (0, _v1.jsx)(_v174.FolderItemDragWrapper, {
            type: _v164.ITEM_TYPES.FILE,
            uri: _v0.uri,
            parentFolderUri: "root",
            thumbnail: _v0.thumbnail?.url ?? "",
            canDrag: _v0.canUserEdit,
            isSelected: _v1,
            selectedItemURIs: _v10,
            onDrop: _v1,
            setIsUploadDropzoneEnabled: _v12,
            children: (0, _v1.jsx)(_v184.FileCard, {
              file: _v0,
              menuContext: "team_library",
              title: _v0.name,
              subtitle: _v0.createdTime ? _v21(_v0.createdTime) : void 0,
              href: _v2,
              avatarSrc: _v0.uploader?.pictures?.sizes?.[1]?.link,
              avatarName: _v0.uploader?.name,
              contentType: _v0.contentType,
              thumbnailSrc: _v0.thumbnail?.url,
              showAvatarInSubtitle: _v19 && _v20,
              typeIcon: _v19 ? (0, _v1.jsx)(_v167.ContentTypeIcon, {
                category: (0, _v167.getContentTypeCategory)(_v0.contentType)
              }) : void 0,
              titleStyles: {
                maxWidth: _v54.CONTENT_CARD_TITLE_MAX_WIDTH
              },
              isSelectable: _v19,
              isSelected: _v1,
              onToggleSelected: () => {
                _v1 ? _v0(_v0.uri, _v1, _v2) : _v11(_v0.uri, _v1, _v2);
              },
              onDeleted: () => {
                _v0(_v0.uri, _v1, _v2), _v9?.(_v0.uri, "file");
              },
              hoverActions: (0, _v1.jsx)(_v180.HoverActions, {
                type: "file",
                entity: _v0
              }),
              filePrivacy: _v3,
              onPrivacyBadgeClick: _v4
            }, _v0.uri)
          }, _v0.uri);
        }
        return (0, _v1.jsx)(_v1.Fragment, {});
      }), _v14 && (0, _v1.jsx)(_v168.LoadingCardsGrid, {})]
    });
  };
  function _v192({
    deselectItem: _v0,
    handleMoveItemsOnDrop: _v1,
    items: _v2 = [],
    libraryTitle: _v3,
    onCopyVideo: _v4,
    onMoreInfo: _v5,
    onFolderSettingsChange: _v6,
    onMoveFolderSuccess: _v7,
    onMoveFolderFailure: _v8,
    removeItem: _v9,
    selectedItemURIs: _v10,
    selectItem: _v11,
    setIsUploadDropzoneEnabled: _v12,
    sort: _v13,
    isLoading: _v14 = !1
  }) {
    return (0, _v1.jsx)(_v165.ContentGrid, {
      children: (0, _v1.jsx)(_v165.ContentGrid.Body, {
        children: (0, _v1.jsx)(_v191, {
          deselectItem: _v0,
          handleMoveItemsOnDrop: _v1,
          items: _v2,
          libraryTitle: _v3,
          onCopyVideo: _v4,
          onFolderSettingsChange: _v6,
          onMoreInfo: _v5,
          onMoveFolderSuccess: _v7,
          onMoveFolderFailure: _v8,
          removeItem: _v9,
          selectedItemURIs: _v10,
          selectItem: _v11,
          setIsUploadDropzoneEnabled: _v12,
          sort: _v13,
          isLoading: _v14
        })
      })
    });
  }
  var _v193 = _v0.i(0),
    _v194 = _v0.i(0),
    _v195 = _v0.i(0),
    _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0),
    _v199 = _v0.i(0),
    _v200 = _v0.i(0),
    _v201 = _v0.i(0),
    _v202 = _v0.i(0),
    _v203 = _v0.i(0),
    _v204 = _v0.i(0),
    _v205 = _v0.i(0),
    _v206 = _v0.i(0);
  let _v207 = ["video.allowedPrivacies", "video.app.uri", "video.canMoveToProject", "video.configUrl", "video.contentRatingClass", "video.countsTowardManagedStorage", "video.createdTime", "video.customMetadata", "video.duration", "video.embed.sentimentWidgets", "video.filesSize", "video.isColdStorage", "video.isColdPrivacyRestricted", "video.lastUserActionEventDate", "video.link", "video.manageLink", "video.metadata.canBeReplaced", "video.metadata.hasMandatoryEmailCapture", "video.metadata.interactions.edit.uri", "video.metadata.interactions.delete.uri", "video.metadata.interactions.invite.uri", "video.metadata.interactions.legalHold.uri", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.uri", "video.pictures.sizes", "video.password", "video.privacy.view", "video.privacy.embed", "video.privacy.download", "video.privacy.add", "video.privacy.comments", "video.privacy.originalView", "video.regionalPrivacies", "video.releaseTime", "video.reviewLinks.uri", "video.reviewLinks.expiresOn", "video.reviewPage", "video.status", "video.type", "video.uploader.name", "video.uploader.pictures", "video.uri", "video.user.account", "video.user.uri", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "file.allowDownloads", "file.canUserDelete", "file.canUserEdit", "file.contentType", "file.createdTime", "file.downloadUrl", "file.fileSize", "file.isColdStorage", "file.modifiedTime", "file.isRecentlyDeleted", "file.name", "file.parentFolder.isPrivateToUser", "file.parentFolder.uri", "file.password", "file.privacy", "file.publicId", "file.thumbnail.url", "file.uri", "file.uploadState", "file.uploader.name", "file.uploader.pictures", "folder.createdTime", "folder.isPrivateToUser", "folder.lastUserActionEventDate", "folder.name", "folder.privacy", "folder.uri", "folder.metadata.connections.items.uri", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.settings", "folder.metadata.interactions.edit", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.delete", "folder.metadata.interactions.invite", "folder.metadata.interactions.moveVideo", "folder.slackIncomingWebhooksId", "type"],
    _v208 = ({
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
        } = (0, _v49.useNotifications)(),
        _v20 = (0, _v173.usePageName)(),
        {
          getDisplayDateWithTime: _v21
        } = (0, _v181.useFormatDateTime)(),
        _v22 = (0, _v5.useContext)(_v95.ViewerContext),
        _v23 = (0, _v24.useOrionSettingsFields)(["enable_list_view_folder_upload"]),
        _v24 = (0, _v25.useUniversalHostingEnabled)(),
        _v25 = _v22?.teamUser?.ownerId ?? _v22?.user?.id,
        {
          contentSpaceEnabled: _v26
        } = (0, _v169.useContentSpaceEnabled)(_v25),
        {
          capabilities: _v27
        } = (0, _v17.useCapability)(["hasContentSpaceEnabled"], _v25),
        _v28 = (0, _v30.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v27.hasContentSpaceEnabled
        }),
        _v29 = (0, _v186.useVideoPrivacyBadgeHandlers)({
          surface: "list",
          pageSurface: _v26 ? "team_library" : "library"
        }),
        _v30 = (0, _v187.useFilePrivacyBadgeHandlers)({
          surface: _v26 ? "team_library" : "library",
          badgeVariant: "list"
        }),
        _v31 = (0, _v188.useFolderPrivacyBadgeHandlers)({
          surface: _v26 ? "team_library" : "library",
          badgeVariant: "list"
        }),
        {
          trackLibraryFolderOpened: _v32
        } = (0, _v29.useLibraryTracking)(),
        _v33 = (0, _v92.useTeamUploadClipProperties)(_v25),
        _v34 = (0, _v49.useNotification)(),
        {
          openFolderDefaultsModal: _v35
        } = (0, _v200.useFolderDefaultsModal)(),
        _v36 = (0, _v21.translate)({
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
        _v37 = _v5?.find(_v0 => _v0.folder?.uri)?.folder?.uri;
      return (0, _v1.jsx)(_v81.Box, {
        children: _v5?.length ? _v5?.map((_v0, _v1) => {
          if (_v0.marketingVideo) return (0, _v1.jsx)(_v185.MarketingVideoCard, {
            variant: "list",
            ..._v0.marketingVideo
          }, "marketing-video-card");
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
              _v8 = _v17.type === _v54.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v9 = _v7 && _v7.totalSize > 0 ? (0, _v194.bytesToSize)(_v7.totalSize, 1) : "0MB",
              _v10 = (0, _v202.getFileSizeTooltip)(_v7?.fileSizeType),
              _v11 = _v4?.sizes[3].link,
              _v12 = _v0.isColdStorage ?? !1,
              _v13 = !!_v0.canMoveToProject && !_v12,
              {
                videoPrivacy: _v14,
                variant: _v15,
                onPrivacyBadgeClick: _v16,
                openLockedVideoPaywall: _v17,
                tooltipLabel: _v18
              } = _v29(_v0);
            return (0, _v1.jsx)(_v203.DraggableListVideo, {
              uri: _v6,
              title: _v3,
              clipId: (0, _v172.idFromUri)(_v6),
              canRename: !0,
              thumbnail: (0, _v1.jsx)(_v193.VideoThumbnail, {
                alt: _v3,
                badgeText: (0, _v170.secondsToDisplay)(_v1),
                isDefaultPicture: _v4?.defaultPicture,
                thumbnailSrc: _v11,
                isLocked: _v12
              }),
              thumbnailSrc: _v11,
              timestamp: _v21(_v8),
              subTitle: _v24 ? (0, _v1.jsxs)(_v6.Flex, {
                alignItems: "center",
                gap: "xs",
                children: [(0, _v1.jsx)(_v167.ContentTypeIcon, {
                  category: "video",
                  size: "sm"
                }), (0, _v1.jsx)(_v89.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  noOfLines: 1,
                  children: `\xb7 ${_v21(_v0.createdTime)}`
                })]
              }) : void 0,
              privacy: _v15 ? (0, _v1.jsx)(_v166.ContentCard.PrivacyBadge, {
                privacy: _v14,
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
              lockedTooltipLabel: _v189.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
              onLockedClick: _v12 ? _v17 : void 0,
              pageName: _v20,
              onToggleSelected: () => {
                _v0.isSelected ? _v0(_v6, _v1, _v5) : _v13(_v6, _v1, _v5);
              },
              shouldShowFileSize: _v16,
              fileSizeTooltip: _v10 ?? void 0,
              fileSize: _v9,
              isManagedStorage: !0 === _v0.countsTowardManagedStorage,
              hoverActions: (0, _v1.jsx)(_v199.ListViewHoverActionsContainer, {
                disableHoverBackground: _v0.isColdStorage,
                children: (0, _v1.jsx)(_v197.VideoTopRightDecoration, {
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
              menuButton: (0, _v1.jsx)(_v178.VideoMenu, {
                video: _v0,
                feature: _v171.AnalyticsFeatures.VIDEO_LIBRARY,
                enableReorganizedOverflowMenu: !0,
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
                      _v1 = "root" === _v0 ? "/library" : (0, _v74.getFolderPageUriFromApiUri)(_v0.uri);
                    _v19(_v1.name, {
                      label: _v0,
                      workspaceName: _v3
                    }, () => {
                      _v22 && (0, _v162.switchTeam)(_v2, _v22.xsrft).finally(() => {
                        window.location.href = _v1;
                      });
                    });
                  } else "root" !== _v0 && _v18(_v1.name, {
                    label: _v0.name,
                    link: (0, _v74.getFolderPageUriFromApiUri)(_v0.uri)
                  });
                },
                onDelete: () => {
                  _v0(_v0.uri, _v1, _v5), _v11?.(_v0.uri, "video");
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
              type: _v164.ITEM_TYPES.ROOT_VIDEO,
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
              _v1 = _v17.type === _v54.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v2 = parseInt(_v0.uri.split("/")?.[2]),
              _v3 = parseInt(_v0.folder.uri.split("/")[4]),
              {
                folderPrivacy: _v4,
                onPrivacyBadgeClick: _v5
              } = _v31(_v0),
              _v6 = (0, _v1.jsx)(_v179.FolderMenu, {
                folder: _v0,
                analytics: {
                  product: "Video Library",
                  feature: "video_library",
                  location: "folder_card"
                },
                onMoveSuccess: _v10,
                libraryType: _v28
              });
            return (0, _v1.jsx)(_v204.DroppableListFolder, {
              dropTarget: _v0,
              dropTargetType: _v164.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v164.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: _v23.enable_list_view_folder_upload && null != _v25 ? {
                targetUserId: _v25,
                folderId: _v3,
                folderName: _v0.name,
                uploadClipProperties: _v33,
                surface: (0, _v176.getLibraryUploadSurface)({
                  contentSpaceEnabled: _v26,
                  isPrivateToUser: _v0.folder?.isPrivateToUser
                })
              } : void 0,
              isLoading: !!_v7 && _v7.has(_v0.uri),
              href: (0, _v74.getFolderPageUriFromApiUri)(_v0.uri),
              title: _v0.name,
              thumbnail: (0, _v1.jsx)(_v201.FolderRowThumbnail, {
                backgroundColor: _v0.settings?.color
              }),
              subTitle: (0, _v190.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
              timestamp: _v21(_v1),
              privacy: _v15 ? (0, _v1.jsx)(_v166.ContentCard.PrivacyBadge, {
                privacy: _v4,
                layout: "inline",
                onClick: _v5
              }) : "",
              shouldShowFileSize: _v16,
              pageName: _v20,
              fileSize: "—",
              folderId: _v3,
              canRename: !0,
              folderOwnerId: _v2,
              hoverActions: (0, _v1.jsx)(_v199.ListViewHoverActionsContainer, {
                children: (0, _v1.jsx)(_v196.FolderTopRightDecoration, {
                  folder: _v0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list"
                })
              }),
              menuButton: _v0.uri === _v37 ? (0, _v1.jsx)(_v195.FolderDefaultsIntroPopover, {
                announcementId: "folder_defaults_library",
                ownerId: _v2,
                enabled: (0, _v198.getFolderPermissions)(_v0).canEditSettings,
                placement: "left-start",
                anchorDisplay: "inline-flex",
                onSetDefaults: () => {
                  _v35({
                    folderId: _v3,
                    ownerId: _v2,
                    isFolderOwner: parseInt(_v22?.user?.uri?.split("/").pop() ?? "", 10) === _v2,
                    presetId: _v0.settings?.embedPresetId ?? null,
                    isInheritanceEnabled: _v0.settings?.isEmbedPresetInheritanceEnabled,
                    location: _v171.AnalyticsLocations.FOLDER_LIST,
                    feature: _v171.AnalyticsFeatures.VIDEO_LIBRARY,
                    page: _v20.toUpperCase(),
                    onSave: () => {
                      _v34({
                        content: _v36,
                        status: ""
                      });
                    }
                  });
                },
                children: _v6
              }) : _v6,
              onClick: () => {
                _v32({
                  folderUri: _v0.folder?.uri,
                  isPrivateToUser: _v0.folder?.isPrivateToUser
                });
              },
              v2PageName: "video_library"
            }, _v0.uri);
          }
          if (_v0.file) {
            let {
                file: _v0
              } = _v0,
              _v1 = `/manage/files/${_v0.publicId}`,
              _v2 = null != _v0.fileSize && _v0.fileSize > 0 ? String((0, _v194.bytesToSize)(_v0.fileSize, 1)) : void 0,
              _v3 = _v17.type === _v54.SORT_OPTION.CREATED ? _v0.createdTime : _v0.modifiedTime,
              {
                filePrivacy: _v4,
                onPrivacyBadgeClick: _v5
              } = _v30(_v0);
            return (0, _v1.jsx)(_v206.FileListRow, {
              file: _v0,
              menuContext: "team_library",
              title: _v0.name,
              subTitle: _v0.createdTime ? (0, _v1.jsxs)(_v6.Flex, {
                alignItems: "center",
                gap: "xs",
                children: [(0, _v1.jsx)(_v167.ContentTypeIcon, {
                  category: (0, _v167.getContentTypeCategory)(_v0.contentType),
                  size: "sm"
                }), (0, _v1.jsx)(_v89.Text, {
                  variant: "body-sm",
                  color: "text-tertiary",
                  noOfLines: 1,
                  children: `\xb7 ${_v21(_v0.createdTime)}`
                })]
              }) : void 0,
              timestamp: _v3 ? _v21(_v3) : "",
              thumbnail: (0, _v1.jsx)(_v205.FileRowThumbnail, {
                name: _v0.name,
                contentType: _v0.contentType,
                thumbnailSrc: _v0.thumbnail?.url,
                publicId: _v0.publicId
              }),
              shouldShowFileSize: _v16,
              fileSize: _v2,
              privacy: _v15 ? (0, _v1.jsx)(_v166.ContentCard.PrivacyBadge, {
                privacy: _v4,
                layout: "inline",
                onClick: _v5
              }) : void 0,
              href: _v1,
              isSelectable: _v24,
              isSelected: _v0.isSelected,
              type: _v164.ITEM_TYPES.FILE,
              parentFolderUri: "root",
              canDrag: _v0.canUserEdit,
              selectedItemURIs: _v12,
              onDrop: _v1,
              setIsUploadDropzoneEnabled: _v14,
              onToggleSelected: () => {
                _v0.isSelected ? _v0(_v0.uri, _v1, _v5) : _v13(_v0.uri, _v1, _v5);
              },
              onDeleted: () => {
                _v0(_v0.uri, _v1, _v5), _v11?.(_v0.uri, "file");
              }
            }, _v0.uri);
          }
          return (0, _v1.jsx)(_v1.Fragment, {});
        }) : (0, _v1.jsx)(_v6.Flex, {
          direction: "column",
          width: "100%",
          gap: "sm",
          children: (0, _v1.jsx)(_v83.LoadingStateList, {})
        })
      });
    };
  function _v209({
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
    removeItem: _v11,
    selectedItemURIs: _v12 = new Set(),
    selectItem: _v13,
    setIsUploadDropzoneEnabled: _v14,
    shouldShowPrivacy: _v15 = !1,
    shouldShowFileSize: _v16 = !1,
    sort: _v17
  }) {
    return (0, _v1.jsx)(_v208, {
      deselectItem: _v0,
      handleMoveItemsOnDrop: _v1,
      libraryTitle: _v6,
      loadingFolderURIs: _v7,
      items: _v5,
      onCopyVideo: _v8,
      selectItem: _v13,
      selectedItemURIs: _v12,
      shouldShowPrivacy: _v15,
      shouldShowFileSize: _v16,
      setIsUploadDropzoneEnabled: _v14,
      sort: _v17,
      onMoreInfo: _v9,
      onMoveFolderSuccess: _v10,
      removeItem: _v11,
      hasFolderShareUpsell: _v2,
      hasReviewPageUpsell: _v3,
      hasMultipleReviewLinks: _v4
    });
  }
  function _v210({
    canUpload: _v0,
    deselectItem: _v1,
    handleMoveItemsOnDrop: _v2,
    hasFolderShareUpsell: _v3,
    hasReviewPageUpsell: _v4,
    hasMultipleReviewLinks: _v5,
    items: _v6,
    loadingFolderURIs: _v7 = new Set(),
    onCopyVideo: _v8,
    onFolderSettingsChange: _v9,
    onMoreInfo: _v10,
    removeItem: _v11,
    selectedItemURIs: _v12,
    selectItem: _v13,
    setIsUploadDropzoneEnabled: _v14,
    shouldShowPrivacy: _v15 = !1,
    shouldShowFileSize: _v16 = !1,
    sort: _v17,
    layout: _v18,
    isLoading: _v19 = !1,
    hasContentSpaceEnabled: _v20
  }) {
    let _v21 = (0, _v5.useContext)(_v95.ViewerContext),
      _v22 = _v21?.teamUser?.ownerId ?? _v21?.user?.id,
      _v23 = (0, _v92.useTeamUploadClipProperties)(_v22),
      _v24 = _v20 ? (0, _v21.translate)({
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
      }) : (0, _v21.translate)({
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
        notifyItemMoveSuccess: _v25,
        notifyItemMoveToWorkspaceSuccess: _v26,
        notifyItemMoveFailure: _v27
      } = (0, _v49.useNotifications)(),
      {
        revalidateTopLevelFolders: _v28,
        revalidateFolderItems: _v29,
        revalidateRootItems: _v30
      } = (0, _v47.useRevalidate)(),
      _v31 = (_v0, _v1, _v2, _v3) => {
        _v28(), _v1[0].parentFolder?.uri ? _v29(_v1[0]?.parentFolder?.uri ?? "") : _v30(), "root" !== _v0 && _v29(_v0.uri);
        let _v4 = "root" === _v0 ? _v24 : _v0.name,
          _v5 = "root" === _v0 ? "/library" : (0, _v74.getFolderPageUriFromApiUri)(_v0.uri);
        _v2 && _v3 ? _v26(_v1[0].name, {
          label: _v4,
          workspaceName: _v3
        }, () => {
          _v21 && (0, _v162.switchTeam)(_v2, _v21.xsrft).finally(() => {
            window.location.href = _v5;
          });
        }) : _v25(_v1[0].name, {
          label: _v4,
          link: _v5
        });
      },
      {
        draggableItemIsHovering: _v32,
        dropRef: _v33
      } = (0, _v163.useDropFolder)({
        dropTargetType: _v164.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
        dropTarget: void 0,
        allowedDropEffect: null,
        dropFileForUploadConfig: null != _v22 && _v0 ? {
          targetUserId: _v22,
          folderId: void 0,
          folderName: _v24,
          uploadClipProperties: _v23,
          surface: _v20 ? "teamlibrary" : "library"
        } : void 0
      });
    return (0, _v1.jsx)(_v81.Box, {
      height: "100%",
      width: "100%",
      ref: _v33,
      backgroundColor: _v32 ? "rgba(23, 213, 255, 0.06)" : "transparent",
      borderColor: _v32 ? "vimeoBlue.500" : "transparent",
      borderRadius: "lg",
      borderWidth: ".125rem",
      transition: "background-color 0.2s ease, border-color 0.2s ease",
      children: _v18 === _v54.LAYOUT.GRID ? (0, _v1.jsx)(_v192, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        items: _v6,
        libraryTitle: _v24,
        onCopyVideo: _v8,
        onFolderSettingsChange: _v9,
        onMoreInfo: _v10,
        onMoveFolderSuccess: _v31,
        onMoveFolderFailure: (_v0, _v1) => {
          _v27(_v1[0].name, "root" === _v0 ? _v24 : _v0.name);
        },
        removeItem: _v11,
        selectedItemURIs: _v12,
        selectItem: _v13,
        setIsUploadDropzoneEnabled: _v14,
        sort: _v17,
        isLoading: _v19
      }) : (0, _v1.jsx)(_v209, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        hasFolderShareUpsell: _v3,
        hasReviewPageUpsell: _v4,
        hasMultipleReviewLinks: _v5,
        items: _v6,
        libraryTitle: _v24,
        loadingFolderURIs: _v7,
        onCopyVideo: _v8,
        removeItem: _v11,
        selectedItemURIs: _v12,
        selectItem: _v13,
        setIsUploadDropzoneEnabled: _v14,
        shouldShowPrivacy: _v15,
        shouldShowFileSize: _v16,
        sort: _v17,
        onMoreInfo: _v10,
        onMoveFolderSuccess: _v31
      })
    });
  }
  let _v211 = ["video", "folder"],
    _v212 = ["video", "folder", "file"];
  function _v213({
    playerAssetUrls: _v0,
    viewer: _v1
  }) {
    let {
        step: _v2,
        handleDismiss: _v3,
        handleCtaClick: _v4,
        handleErrorClose: _v5
      } = (0, _v72.useViewerAiUpsellModal)("library"),
      [_v6, _v7] = (0, _v5.useState)(null),
      _v8 = (0, _v7.useToast)(),
      [_v9, _v10] = (0, _v52.useSortPreference)(_v54.DEFAULT_SORT, _v54.VL_SORT_LOCAL_STORAGE_KEY),
      [_v11, _v12] = (0, _v53.useDateDisplayPreference)(_v54.DEFAULT_DATE_DISPLAY, _v54.VL_DATE_LOCAL_STORAGE_KEY),
      [_v13, _v14] = (0, _v5.useState)(null),
      [_v15, _v16] = (0, _v5.useState)(!1),
      _v17 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v18 = (0, _v13.useLibraryMergeAnnouncement)("library"),
      _v19 = "becoming" === _v18.active,
      [_v20, _v21] = (0, _v5.useState)(!1),
      _v22 = (0, _v5.useRef)(null),
      [_v23, _v24] = (0, _v5.useState)(!1),
      [_v25, _v26] = (0, _v5.useState)(!1),
      _v27 = _v17 && _v1 ? {
        apiUrl: _v1.apiUrl,
        jwt: _v1.jwt,
        ownerId: _v17
      } : void 0,
      {
        trackLibraryPageDisplayed: _v28,
        trackLibraryViewChanged: _v29,
        trackLibraryFilterApplied: _v30,
        trackLibrarySortChanged: _v31
      } = (0, _v29.useLibraryTracking)(),
      {
        trackMergeLibrariesClicked: _v32
      } = (0, _v28.useContentSpaceTracking)(),
      _v33 = (0, _v4.useRouter)(),
      _v34 = {
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
        capabilities: _v35,
        ready: _v36
      } = (0, _v17.useCapability)(["canCreateRootFolders", "canAddTeamMembers", "canSeeUpsellModalOnShare", "privateModeOff", "canManageTeamCollections", "hasVideoReviewPageDemo", "hasEnterprise", "regionalDeliveryPublishContentToChina", "hasMultipleReviewLinks", "hasTeamPrivacy", "coldStorageClips", "coldStorageFiles", "canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasVideoLibraryEmbeddableUploader"], `/users/${_v17}`),
      {
        loading: _v37,
        contentSpaceEnabled: _v38,
        isTeamGateEnabled: _v39,
        isSoleTeamOwner: _v40
      } = (0, _v15.useMergeLibrariesVisible)(`/users/${_v17}`),
      {
        inProgress: _v41
      } = (0, _v14.useLibraryMigrationInProgress)(_v17),
      {
        listingParams: _v42
      } = (0, _v16.usePrivateToMeFolderListingParams)(`/users/${_v17}`),
      _v43 = !!_v35.canGenerateClipTextTranslation,
      _v44 = (!!_v35.canGenerateClipTranslation || _v43) && !!_v35.canPerformBulkTranslations,
      {
        revalidateRootItems: _v45,
        revalidateTopLevelFolders: _v46
      } = (0, _v47.useRevalidate)(),
      {
        setLoadingSideNavFolderURIs: _v47
      } = (0, _v5.useContext)(_v50.VideoLibraryLayoutContext),
      _v48 = (0, _v49.useNotification)(),
      {
        notifyItemMoveSuccess: _v49
      } = (0, _v49.useNotifications)(),
      _v50 = (0, _v5.useRef)(() => void 0),
      {
        openCopyVideoModal: _v51,
        copyVideoModal: _v52
      } = (0, _v69.useCopyVideoFlow)({
        onAfterCopySuccess: (_v0, _v1) => _v50.current(_v1.uri, _v0)
      }),
      _v53 = _v1?.teamUser?.plainTextPermissionLevel,
      _v54 = _v17 === _v1?.user?.id,
      _v55 = _v54 || "Admin" === _v53,
      _v56 = (0, _v35.useGracePeriodBillingUi)({
        orionFlag: "enable_library_grace_period_notifications",
        layout: {
          type: "library"
        }
      }),
      {
        hasColdStorage: _v57
      } = (0, _v79.useUserHasColdStorageVideos)({
        forceEligible: _v56.isStorageSuspended
      }),
      _v58 = !!_v35.coldStorageClips && _v55 || _v57 && _v55,
      _v59 = !!_v35.coldStorageFiles && _v55,
      {
        hasColdPrivacy: _v60,
        isLoading: _v61
      } = (0, _v78.useUserHasColdPrivacyVideos)({
        enabled: !0
      }),
      _v62 = (0, _v25.useUniversalHostingEnabled)(),
      _v63 = (0, _v5.useMemo)(() => _v62 ? _v212 : _v211, [_v62]),
      _v64 = (0, _v44.useContentTypeFilter)([..._v63]),
      _v65 = !(0, _v76.isContentTypeSelectionDefault)(_v63, _v64.value) && !(0, _v76.doesSelectionIncludeVideos)(_v63, _v64.value),
      _v66 = !(0, _v76.isContentTypeSelectionDefault)(_v63, _v64.draft) && !(0, _v76.doesSelectionIncludeVideos)(_v63, _v64.draft),
      _v67 = (0, _v46.useVideoAvailabilityFilter)(),
      _v68 = (0, _v43.useClipPrivacyFilter)(["unlisted", "password", "hide_from_vimeo", "team", "private", "public", ...(_v60 ? ["cold_privacy"] : [])], !!_v35?.hasTeamPrivacy),
      _v69 = [..._v68.value],
      _v70 = _v68.value.has("cold_privacy"),
      _v71 = (0, _v76.doesSelectionIncludeVideos)(_v63, _v64.value) && _v67.value.has("restricted") !== _v67.value.has("available") || _v70,
      _v72 = (0, _v45.useCreatedByFilter)(),
      _v73 = !!_v68.isFilterActive || !!_v72.isFilterActive || !!_v67.isFilterActive,
      _v74 = !!_v68.isFilterActive || !!_v72.isFilterActive,
      _v75 = !!_v68.isDraftActive || !!_v72.isDraftActive,
      _v76 = !!_v68.isFilterActive || !!_v72.isFilterActive,
      _v77 = !!_v68.isDraftActive || !!_v72.isDraftActive,
      [_v78, _v79] = (0, _v5.useState)(!0),
      [_v80, _v81] = (0, _v51.useLayoutPreference)(),
      _v82 = !!_v35.canCreateRootFolders,
      _v83 = (0, _v24.useOrionSettingsFields)(["enable_new_library_drag_and_drop_upload"]),
      _v84 = !!(_v78 && _v55),
      _v85 = _v83?.enable_new_library_drag_and_drop_upload ?? !1,
      _v86 = _v57 || _v60,
      _v87 = _v84 && !_v85,
      _v88 = !_v36 || _v37 ? "" : _v38 ? (0, _v21.translate)({
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
      }) : (0, _v21.translate)({
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
      });
    (0, _v23.useOttRedirect)({
      toast: _v8,
      config: {
        message: (0, _v21.translate)({
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
    let _v89 = (0, _v18.useIsMobile)(),
      _v90 = !!_v38,
      _v91 = !_v55 && _v90,
      {
        data: _v92,
        mutate: _v93,
        setSize: _v94,
        size: _v95
      } = (0, _v20.useGetUserFoldersRootInfinite)(() => {
        let _v0 = _v68.isFilterActive && !_v71 ? _v69.join(",") : void 0,
          _v1 = _v72.isFilterActive ? [..._v72.value].map(_v0 => _v0.userId) : void 0,
          _v2 = _v1?.length ? _v1.join(",") : void 0,
          _v3 = (0, _v76.getContentTypeApiFilterParam)(_v63, _v64.value);
        return _v17 && _v36 && !_v37 ? {
          where: {
            userId: _v17
          },
          select: _v207,
          query: {
            direction: _v9.direction,
            excludePersonalTeamFolder: _v38,
            flattenPrivateToMe: _v42.flattenPrivateToMe,
            excludeSharedVideos: _v91,
            includeColdStorageClips: _v58,
            includeColdStorageFiles: _v59,
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
      }, {
        revalidateOnFocus: !1,
        revalidateFirstPage: !1
      });
    (0, _v37.useUploadLifecycle)((_v0, _v1) => {
      (_v1.clipId || _v1.publicId) && (_v93(), _v45());
    }, []);
    let {
        data: _v96
      } = (0, _v20.useGetUserFoldersRoot)(() => _v17 && _v36 && !_v37 ? {
        where: {
          userId: _v17
        },
        select: ["type"],
        query: {
          filter: "video",
          excludePersonalTeamFolder: _v38,
          flattenPrivateToMe: _v42.flattenPrivateToMe,
          excludeSharedVideos: _v91,
          includeColdStorageClips: _v58,
          perPage: 1
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v97 = _v96?.total ?? 0,
      _v98 = (0, _v5.useMemo)(() => _v92 ? _v92.flatMap(_v0 => {
        if (!_v0) return [];
        let _v1 = _v0.data.filter(_v0 => (0, _v75.passesLibraryItemClientFilters)({
          clipPrivacyFilter: _v68.value,
          contentTypeOptions: _v63,
          contentTypeSelection: _v64.value,
          item: _v0,
          shouldUseClientPipeline: _v71,
          videoAvailabilityFilter: _v67.value
        }));
        return [{
          ..._v0,
          data: _v1
        }];
      }) : _v92, [_v68.value, _v64.value, _v63, _v92, _v71, _v67.value]),
      _v99 = (0, _v5.useCallback)(({
        name: _v0,
        settings: {
          color: _v1
        },
        uri: _v2
      }) => {
        _v93(_v0 => _v0?.map(_v0 => ({
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
      }, [_v93]),
      _v100 = (0, _v5.useCallback)((_v0, _v1) => {
        _v93(_v0 => _v0 ? _v0.map(_v0 => ({
          ..._v0,
          data: _v0.data.map(_v0 => _v0.video?.uri === _v0 ? {
            ..._v0,
            video: _v1(_v0.video)
          } : _v0)
        })) : _v0, !1);
      }, [_v93]),
      _v101 = (0, _v5.useCallback)((_v0, _v1) => {
        let _v2 = !1;
        _v93(_v0 => {
          let _v1 = (0, _v73.insertOptimisticVideoCopy)(_v0, _v0, _v1);
          return _v2 = _v1.inserted, _v1.pages;
        }, !1), _v2 || _v45();
      }, [_v93, _v45]);
    (0, _v5.useEffect)(() => {
      _v50.current = _v101;
    }, [_v101]);
    let _v102 = (0, _v5.useCallback)((_v0, _v1) => {
        _v93(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => _v0?.[_v1]?.uri !== _v0)
        })), !1);
      }, [_v93]),
      _v103 = (0, _v5.useCallback)(_v0 => {
        _v93(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => {
            let _v1 = _v0.video?.uri ?? _v0.folder?.uri ?? _v0.liveEvent?.uri ?? _v0.file?.uri;
            return !!_v1 && !_v0.has(_v1);
          })
        })), !1);
      }, [_v93]),
      [_v104, {
        enhancedSelectItem: _v105,
        enhancedDeselectItem: _v106,
        selectAllItems: _v107,
        selectAllInFolder: _v108,
        syncAllInFolderSelection: _v109,
        deselectAllItems: _v110,
        shiftKeyChange: _v111
      }] = (0, _v80.useSelectedItems)(),
      _v112 = (0, _v5.useCallback)(_v0 => {
        _v0.forEach(_v0 => _v106(_v0));
      }, [_v106]),
      _v113 = (0, _v5.useCallback)(() => {
        let _v0 = _v64.value,
          _v1 = (0, _v76.isContentTypeOptionChecked)(_v63, _v0, "video"),
          _v2 = _v67.value,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v110();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v64.setSelection((0, _v76.includeVideosInSelection)(_v63, _v0)), _v67.setValue(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v64.setSelection((0, _v76.excludeVideosFromSelection)(_v63, _v0)), _v67.clearFilter();
          return;
        }
        if (_v3 !== _v4) return void _v67.setValue(_v5());
        if (_v3 && _v4) {
          _v67.clearFilter(), _v64.setSelection((0, _v76.excludeVideosFromSelection)(_v63, _v0));
          return;
        }
      }, [_v64, _v63, _v110, _v67]),
      _v114 = (0, _v5.useCallback)(() => {
        let _v0 = _v64.draft,
          _v1 = (0, _v76.isContentTypeOptionChecked)(_v63, _v0, "video"),
          _v2 = _v67.draft,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v110();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v64.setSelection((0, _v76.includeVideosInSelection)(_v63, _v0), !0), _v67.setDraft(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v64.setSelection((0, _v76.excludeVideosFromSelection)(_v63, _v0), !0), _v67.setDraft(new Set());
          return;
        }
        if (_v3 !== _v4) return void _v67.setDraft(_v5());
        if (_v3 && _v4) {
          _v67.setDraft(new Set()), _v64.setSelection((0, _v76.excludeVideosFromSelection)(_v63, _v0), !0);
          return;
        }
      }, [_v64, _v63, _v110, _v67]),
      _v115 = _v57 || _v57 ? {
        onVideoParentCheckboxClick: _v113,
        setVideoAvailabilityFilter: _v0 => {
          let _v1 = _v64.value;
          (0, _v76.isContentTypeOptionChecked)(_v63, _v1, "video") || _v64.setSelection((0, _v76.includeVideosInSelection)(_v63, _v1)), _v67.updateFilterValues(_v0);
        },
        showAvailableOption: _v57,
        showRestrictedOption: _v57,
        videoAvailabilityFilter: _v67.value
      } : void 0,
      _v116 = _v57 || _v57 ? {
        onVideoParentCheckboxClick: _v114,
        onVideoAvailabilityChange: _v0 => {
          let _v1 = _v64.draft;
          (0, _v76.isContentTypeOptionChecked)(_v63, _v1, "video") || _v64.setSelection((0, _v76.includeVideosInSelection)(_v63, _v1), !0), _v67.updateFilterValues(_v0, !0);
        },
        showAvailableOption: _v57,
        showRestrictedOption: _v57,
        videoAvailabilityDraft: _v67.draft
      } : void 0,
      _v117 = (0, _v5.useRef)(!1),
      _v118 = (0, _v5.useCallback)(_v0 => {
        "Shift" === _v0.key && (_v117.current = !_v117.current, _v111(_v117.current));
      }, [_v117, _v111]);
    (0, _v5.useEffect)(() => (window.addEventListener("keydown", _v118), window.addEventListener("keyup", _v118), () => {
      window.removeEventListener("keydown", _v118), window.removeEventListener("keyup", _v118);
    }), [_v118]), (0, _v5.useEffect)(() => {
      _v89 || _v16(!1);
    }, [_v89]);
    let _v119 = _v33.query.filter;
    (0, _v5.useEffect)(() => {
      !_v57 || "string" != typeof _v119 || "locked" !== _v119.toLowerCase() || (!_v67.value.has("restricted") || _v67.value.has("available")) && (_v64.setSelection(new Set(["video", "folder"])), _v67.setValue(new Set(["restricted"])));
    }, [_v119, _v57]);
    let _v120 = (0, _v5.useRef)(!1);
    (0, _v5.useEffect)(() => {
      _v120.current || !_v60 || "string" != typeof _v119 || "cold_privacy" === _v119.toLowerCase() && (_v120.current = !0, _v68.value.has("cold_privacy") || _v68.updateFilterValues("cold_privacy"));
    }, [_v119, _v60]), (0, _v5.useEffect)(() => {
      if (!_v57 || (0, _v46.isVideoAvailabilityFilterExplicitlyEngaged)(_v67.value)) return;
      let _v0 = _v64.value;
      if (1 !== _v0.size || !_v0.has("video") || (_v64.setSelection(new Set()), !_v33.isReady)) return;
      let _v1 = _v33.query.filter;
      if ("string" != typeof _v1 || "locked" !== _v1.toLowerCase()) return;
      let _v2 = {
        ..._v33.query
      };
      delete _v2.filter, _v33.replace({
        pathname: _v33.pathname,
        query: _v2
      }, void 0, {
        shallow: !0
      });
    }, [_v67.value, _v64.value, _v57, _v33.isReady, _v33.pathname, _v33.query.filter]);
    let _v121 = _v104.selectedItemURIs,
      _v122 = (0, _v5.useMemo)(() => _v98?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.filter(_v0 => {
        if (!_v62 && _v0.file) return !1;
        let _v1 = (0, _v19.camelizeString)(_v0.type);
        return _v0[_v1]?.uri;
      })), [_v98, _v62]),
      _v123 = (0, _v5.useMemo)(() => ({
        canDeleteItem: {
          fields: ["video.metadata.interactions.delete.uri", "file.canUserDelete"],
          test: _v0 => !!_v0?.video?.metadata?.interactions?.delete || !!_v0?.file?.canUserDelete
        },
        canMoveItem: {
          fields: ["video.canMoveToProject", "file.canUserEdit"],
          test: _v0 => !!_v0?.video?.canMoveToProject || !!_v0?.file?.canUserEdit
        },
        canChangeItemPrivacy: {
          fields: ["video.metadata.interactions.edit.uri", "file.canUserEdit"],
          test: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit || !!_v0?.file?.canUserEdit
        },
        canAddToShowcases: {
          fields: ["video.metadata.interactions.edit.uri"],
          test: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit
        },
        hasLegalHold: {
          fields: ["video.metadata.interactions.legalHold.uri"],
          test: _v0 => !!_v0.video?.uri && !!_v0.video?.metadata?.interactions?.legalHold?.uri
        }
      }), []),
      {
        allItems: _v124,
        canMoveSelection: _v125,
        canDeleteSelection: _v126,
        canChangePrivacySelection: _v127,
        canAddToShowcasesSelection: _v128,
        hasColdStorageSelection: _v129,
        hasLegalHoldSelection: _v130,
        hasReachedMaxSelectionForMove: _v131,
        hasReachedMaxSelectionForPrivacy: _v132,
        hasReachedMaxSelectionForSentimentWidget: _v133,
        hasReachedMaxSelectionForShowcases: _v134,
        canSelectURIs: _v135,
        selectedItems: _v136,
        maxBulkActionSelection: _v137
      } = (0, _v42.useBulkItems)({
        ...(0, _v41.toPredicateFns)(_v123),
        items: _v122,
        selectedURIs: _v121,
        allowColdStorageDeletion: !0
      }),
      _v138 = (0, _v77.useMarketingVideoCard)(),
      _v139 = !!_v35.canManageTeamCollections,
      _v140 = (0, _v5.useCallback)(() => {
        _v107(_v124, _v135);
      }, [_v124, _v135, _v107]),
      [_v141] = (0, _v48.useMoveItem)(),
      [_v142, _v143] = (0, _v5.useState)(new Set());
    (0, _v5.useEffect)(() => {
      !_v89 && _v74 && _v64.setSelection(new Set(["video"]));
    }, [_v89, _v74]), (0, _v5.useEffect)(() => {
      _v75 && _v64.setSelection(new Set(["video"]), !0);
    }, [_v75]);
    let _v144 = _v1?.vimeoHttpsUrl ? _v1?.vimeoHttpsUrl + "/analytics" : void 0,
      {
        isDone: _v145,
        isLoadingInitialData: _v146,
        isLoadingMore: _v147
      } = (0, _v36.getInfiniteRequestLoadingState)({
        data: _v92,
        itemsPerPage: 25,
        size: _v95
      }),
      _v148 = !_v146 && 0 === _v124.length,
      _v149 = !!_v64.isFilterApplied,
      _v150 = !_v91,
      _v151 = _v149 || _v73 || (0, _v46.isVideoAvailabilityFilterExplicitlyEngaged)(_v67.value),
      _v152 = _v64.value.size > 1 && _v64.value.size < _v63.length,
      _v153 = _v71 || _v152 ? _v122?.length : _v98?.[0]?.total,
      _v154 = (0, _v5.useMemo)(() => {
        let _v0 = (_v124?.length ?? 0) > 0;
        return _v138.shouldShow && !_v151 && _v0 ? [{
          type: "video",
          metadata: {
            connections: {}
          },
          isSelected: !1,
          isSelectable: !1,
          marketingVideo: {
            videoId: _v138.videoId,
            entryPoint: "team_library",
            onDismiss: _v138.dismiss
          }
        }, ...(_v124 ?? [])] : _v124;
      }, [_v138.shouldShow, _v138.videoId, _v138.dismiss, _v151, _v124]),
      _v155 = (0, _v5.useRef)(!1);
    (0, _v5.useEffect)(() => {
      if (!_v33.isReady || _v155.current || "1" !== _v33.query.library_merge_toast || void 0 === _v153) return;
      _v155.current = !0, _v48({
        content: (0, _v21.translate)({
          singular: "Your library is now one place. {COUNT} item is here.",
          plural: "Your library is now one place. All {COUNT} items are here.",
          count: _v153,
          replacements: {
            COUNT: _v153
          },
          dictionary: {
            es: {
              singular: "Tu biblioteca ahora está en un solo lugar. {COUNT} elemento está aquí.",
              plural: "Tu biblioteca ahora está en un solo lugar. Todos los {COUNT} elementos están aquí."
            },
            "de-DE": {
              singular: "Ihre Bibliothek ist jetzt an einem Ort. {COUNT} Element ist hier.",
              plural: "Ihre Bibliothek ist jetzt an einem Ort. Alle {COUNT} Elemente sind hier."
            },
            "fr-FR": {
              singular: "Votre bibliothèque est désormais en un seul et même endroit. {COUNT} élément est ici.",
              plural: "Votre bibliothèque est désormais en un seul et même endroit. Tous les {COUNT} éléments sont ici."
            },
            "ja-JP": {
              singular: "ライブラリが1か所にまとまりました。 {COUNT}件がここにあります。",
              plural: "ライブラリが1か所にまとまりました。 {COUNT}件すべてがここにあります。"
            },
            "ko-KR": {
              singular: "이제 라이브러리가 한 곳에 모였습니다. {COUNT}개의 항목이 여기에 있습니다.",
              plural: "이제 라이브러리가 한 곳에 모였습니다. 모든 {COUNT}개의 항목이 여기에 있습니다."
            },
            "pt-BR": {
              singular: "Sua biblioteca agora está em um único lugar. {COUNT} item está aqui.",
              plural: "Sua biblioteca agora está em um único lugar. Todos os {COUNT} itens estão aqui."
            },
            "zh-CN": {
              singular: "您的媒体库现在已集中到一个地方. 此处有 {COUNT} 个项目在这里.",
              plural: "您的媒体库现在已集中到一个地方. 所有 {COUNT} 个项目都在这里."
            }
          }
        }),
        status: "success"
      });
      let _v0 = {
        ..._v33.query
      };
      delete _v0.library_merge_toast, _v33.replace({
        pathname: _v33.pathname,
        query: _v0
      }, void 0, {
        shallow: !0
      });
    }, [_v33.isReady, _v33.query.library_merge_toast, _v153]);
    let _v156 = _v136?.filter(_v0 => !!_v0.video)?.length ?? 0,
      _v157 = !!_v156 && !!_v97 && !_v151,
      _v158 = !!_v104.isAllInFolderSelected && _v97 <= _v137,
      _v159 = (0, _v41.useSelectAllItems)({
        enabled: _v158 && !!_v97 && _v97 <= _v137 && !_v151 && !!_v17 && _v36 && !_v37,
        maxItems: _v137,
        source: {
          kind: "root",
          userId: _v17,
          excludePersonalTeamFolder: _v38,
          flattenPrivateToMe: _v42.flattenPrivateToMe,
          excludeSharedVideos: _v91,
          includeColdStorageClips: _v58
        },
        predicates: _v123
      }),
      _v160 = _v158 && !_v159.isReady,
      _v161 = _v158 && _v159.isReady ? _v159 : {
        selectedItems: _v136,
        selectedItemURIs: _v121,
        canAddToShowcasesSelection: _v128,
        canMoveSelection: _v125,
        canDeleteSelection: _v126,
        canChangePrivacySelection: _v127,
        hasColdStorageSelection: _v129,
        hasLegalHoldSelection: _v130,
        hasReachedMaxSelectionForMove: _v131,
        hasReachedMaxSelectionForPrivacy: _v132,
        hasReachedMaxSelectionForSentimentWidget: _v133,
        hasReachedMaxSelectionForShowcases: _v134
      };
    (0, _v5.useEffect)(() => {
      _v158 && _v135.size && _v109(_v124, _v135);
    }, [_v158, _v124, _v135, _v109]);
    let _v162 = _v55 && !!_v144,
      _v163 = !!_v35.hasVideoLibraryEmbeddableUploader && _v55 && !!_v17,
      _v164 = !!_v35.canCreateRootFolders,
      _v165 = _v39 && !_v37 && _v54,
      _v166 = _v39 && !_v37 && _v38 && _v54 && !!_v17,
      _v167 = _v162 || _v166 || _v163 || _v164 || _v165,
      _v168 = (!_v89 || _v36) && !(_v54 && _v37);
    (0, _v27.usePicoEffect)(() => {
      if (!_v36 || void 0 === _v153) return !1;
      let _v0 = (0, _v30.deriveLibraryReferrerPage)(_v33.query.library_referrer);
      _v28({
        libraryType: (0, _v30.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v38
        }),
        libraryItemCount: _v153,
        referrerPage: _v0
      });
    }, [_v36, _v153, _v38, _v33.query.library_referrer], {
      once: !0
    });
    let _v169 = !!(_v54 && _v27 && _v39 && !_v37 && _v40 && _v38),
      _v170 = () => {
        _v32({
          surface: "library_header"
        }), _v24(!0);
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v34.InviteModal, {
        onSuccess: () => window.location.reload(),
        children: (0, _v1.jsx)("button", {
          ref: _v22,
          type: "button",
          "aria-hidden": "true",
          tabIndex: -1,
          style: {
            display: "none"
          }
        })
      }), _v27 && (0, _v1.jsx)(_v11.StartYourTeamFlow, {
        apiConfig: _v27,
        defaultTeamName: _v1?.user?.name ?? "",
        entryPoint: "library_header",
        isOpen: _v20,
        onClose: () => _v21(!1),
        paywall: {
          templateType: "default",
          tracking: {
            params: {
              feature: "teams",
              location: "library_header",
              page: "library",
              upsell_name: "start_team",
              integration: "none"
            },
            paywallTracking: {
              paywallTrigger: "library_header_start_team_button",
              paywallLocation: "library_header",
              paywallType: "popup",
              paywallFeature: "teams"
            }
          }
        }
      }), _v27 && (0, _v1.jsx)(_v10.MergeLibrariesModal, {
        isOpen: _v23,
        onClose: () => _v24(!1),
        userId: _v1?.user?.id,
        apiConfig: _v27,
        onMerged: () => window.location.reload(),
        surface: "library_header"
      }), _v54 && _v17 && (0, _v1.jsx)(_v159, {
        isOpen: _v25,
        onClose: () => _v26(!1),
        userId: _v17,
        onMoveSuccess: _v45
      }), (0, _v1.jsx)(_v98, {
        children: (0, _v1.jsxs)(_v63.Page, {
          children: [(0, _v1.jsxs)(_v63.Page.Main, {
            children: [(0, _v1.jsxs)(_v63.Page.StickyTop, {
              children: [_v56.banner, (0, _v1.jsx)(_v26.ReverseTrialLateBanner, {
                hostLocation: "library"
              }), _v86 && (0, _v1.jsx)(_v22.ColdStorageBanner, {
                surface: "library",
                hasColdStorage: _v57,
                hasColdPrivacy: _v60,
                isColdPrivacyLoading: _v61
              }), (0, _v1.jsx)(_v62.PageHeader, {
                actions: (() => {
                  if (!_v167) return;
                  let _v0 = _v165 && _v17 ? (0, _v1.jsx)(_v12.TeamMembersPreview, {
                      ownerId: _v17,
                      viewerName: _v1?.user?.name ?? "",
                      viewerAvatarSrc: _v1?.user?.pictures?.sizes?.[0]?.link,
                      viewerUri: _v1?.user?.uri,
                      contentSpaceEnabled: _v38,
                      isSoleTeamMember: _v40,
                      canStartTeam: _v54,
                      isLoading: _v37,
                      onStartYourTeam: () => _v21(!0),
                      onInviteMembers: () => _v22.current?.click()
                    }) : null,
                    _v1 = _v163 && _v17 ? (0, _v1.jsx)(_v40.UploadButton, {
                      paywallTrigger: "library_header_upload_button",
                      targetUserId: _v17,
                      testIdPrefix: "library-header-upload-button",
                      surface: _v38 ? "teamlibrary" : "library"
                    }) : null,
                    _v2 = _v164 ? (0, _v1.jsx)(_v161, {}) : null,
                    _v3 = !!(_v162 && _v144);
                  return (0, _v1.jsx)(_v126, {
                    teamPreview: _v0,
                    uploadAction: _v1,
                    newFolderAction: _v2,
                    isMobile: _v89,
                    analyticsLink: _v3 ? _v144 : void 0,
                    showMoveContent: _v166,
                    onMoveContent: () => _v26(!0),
                    showNewFolder: _v164,
                    showMergeLibraries: _v169,
                    onMergeLibraries: _v170,
                    rowsAreFinal: _v168
                  });
                })(),
                bottomBar: (0, _v1.jsxs)(_v55.FilterSortBar, {
                  checkbox: (0, _v1.jsx)(_v64.CheckboxItemCount, {
                    hasCheckbox: !!_v135.size,
                    isChecked: !!_v121.size,
                    isDisabled: !_v135.size,
                    isIndeterminate: !!_v121.size && _v121.size < _v135.size,
                    isLoading: _v146,
                    onChange: () => {
                      _v121.size ? _v110() : _v140();
                    },
                    selectedItemCount: _v121.size,
                    subtitle: !!_v153 && (_v151 ? (0, _v21.translate)({
                      count: _v153,
                      singular: "{NUM_ITEMS} result",
                      plural: "{NUM_ITEMS} results",
                      replacements: {
                        NUM_ITEMS: _v153
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
                    }) : (0, _v21.translate)({
                      count: _v153,
                      singular: "{NUM_ITEMS} item",
                      plural: "{NUM_ITEMS} items",
                      replacements: {
                        NUM_ITEMS: _v153
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
                  layout: _v80,
                  setLayout: _v0 => {
                    _v81(_v0), _v29({
                      libraryType: (0, _v30.deriveLibraryType)({
                        hasContentSpaceEnabled: !!_v38
                      }),
                      libraryNewView: "GRID_LAYOUT" === _v0 ? "grid" : "list"
                    });
                  },
                  shouldHideViewControls: _v148 && !_v151,
                  sort: _v9,
                  setSort: _v0 => {
                    let _v1 = `${_v9.type.toLowerCase()}_${_v9.direction.toLowerCase()}`,
                      _v2 = `${_v0.type.toLowerCase()}_${_v0.direction.toLowerCase()}`;
                    if (_v10(_v0), _v2 !== _v1) {
                      let _v0 = _v34[_v2];
                      _v0 && _v31({
                        libraryType: (0, _v30.deriveLibraryType)({
                          hasContentSpaceEnabled: !!_v38
                        }),
                        libraryNewSort: _v0
                      });
                    }
                  },
                  setDateDisplay: _v12,
                  sortOptions: _v54.SORT_OPTIONS,
                  isLayoutToggleDisabled: _v148,
                  children: [_v89 && _v150 && (0, _v1.jsxs)(_v6.Flex, {
                    children: [(0, _v1.jsx)(_v57.MobileFilterButton, {
                      isFilterApplied: _v151,
                      onClick: () => {
                        _v16(!0);
                      }
                    }), (0, _v1.jsxs)(_v58.MobileFilterDrawer, {
                      isFilterApplied: _v151,
                      isOpen: _v15,
                      onApplyFilters: () => {
                        _v110();
                        let _v0 = (0, _v30.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v38
                          }),
                          _v1 = !(0, _v76.areIdenticalSets)(_v64.draft, _v64.value),
                          _v2 = _v68.isDraftActive && _v68.isDraftUpdated(),
                          _v3 = _v67.isDraftActive && _v67.isDraftUpdated(),
                          _v4 = _v72.isDraftActive && _v72.isDraftUpdated();
                        _v64.commitDraft(), _v68.commitDraft(), _v67.commitDraft(), _v72.commitDraft(), _v1 && _v30({
                          libraryType: _v0,
                          libraryFilterType: "type",
                          appliedContentTypes: [..._v64.draft]
                        }), _v2 && _v30({
                          libraryType: _v0,
                          libraryFilterType: "privacy"
                        }), _v3 && _v30({
                          libraryType: _v0,
                          libraryFilterType: "type",
                          appliedContentTypes: [..._v64.draft]
                        }), _v4 && _v30({
                          libraryType: _v0,
                          libraryFilterType: "created_by"
                        }), _v16(!1);
                      },
                      onClearFilters: () => {
                        _v110(), _v64.clearFilter(), _v68.clearFilter(), _v67.clearFilter(), _v72.clearFilter(), _v72.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      onClose: () => {
                        _v64.clearDraft(), _v68.clearDraft(), _v67.clearDraft(), _v72.clearDraft(), _v72.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      children: [(0, _v1.jsx)(_v59.MobileContentTypeFilter, {
                        filter: _v64.draft,
                        onToggle: _v0 => {
                          let _v1 = (0, _v76.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v63, _v64.draft, _v0, (0, _v46.isVideoAvailabilityFilterExplicitlyEngaged)(_v67.draft));
                          _v64.setSelection(_v1, !0), (0, _v76.doesSelectionIncludeVideos)(_v63, _v1) || _v67.setDraft(new Set());
                        },
                        options: _v63,
                        page: _v88,
                        isDisabled: _v77,
                        videoSubmenu: _v116
                      }), _v150 && (0, _v1.jsxs)(_v1.Fragment, {
                        children: [(0, _v1.jsx)(_v60.MobileClipPrivacyFilter, {
                          filter: [..._v68.draft],
                          onChange: _v0 => {
                            _v68.updateFilterValues(_v0, !0);
                          },
                          options: _v68.options,
                          page: _v88,
                          isDisabled: _v66
                        }), !_v72.shouldHideFilter && (0, _v1.jsx)(_v61.MobileCreatedByFilter, {
                          filter: [..._v72.draft],
                          onChange: _v0 => {
                            _v72.updateFilterValues(_v0, !0);
                          },
                          searchQuery: _v72.createdByUsersSearchTerm,
                          setSearchQuery: _v72.setCreatedByUsersSearchTerm,
                          options: _v72.createdByUsers,
                          page: _v88,
                          isDisabled: _v66,
                          isLoadingInitialData: _v72.membersLoadingInitialData,
                          isLoadingMore: _v72.membersLoadingMore,
                          isDone: _v72.membersDone,
                          onLoadMore: _v72.loadMoreMembers
                        })]
                      })]
                    })]
                  }), !_v89 && _v150 && _v151 && (0, _v1.jsx)(_v67.ClearAllFiltersButton, {
                    onClick: () => {
                      _v110(), _v64.clearFilter(), _v68.clearFilter(), _v67.clearFilter(), _v72.clearFilter();
                    }
                  }), !_v89 && _v150 && (0, _v1.jsx)(_v56.ContentTypeFilter, {
                    filter: _v64.value,
                    onToggleType: _v0 => {
                      _v110();
                      let _v1 = (0, _v76.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v63, _v64.value, _v0, (0, _v46.isVideoAvailabilityFilterExplicitlyEngaged)(_v67.value));
                      (0, _v76.areIdenticalSets)(_v1, _v64.value) || _v30({
                        libraryType: (0, _v30.deriveLibraryType)({
                          hasContentSpaceEnabled: !!_v38
                        }),
                        libraryFilterType: "type",
                        appliedContentTypes: [..._v1]
                      }), _v64.setSelection(_v1), (0, _v76.doesSelectionIncludeVideos)(_v63, _v1) || _v67.clearFilter();
                    },
                    options: _v63,
                    page: _v88,
                    isDisabled: _v76,
                    videoSubmenu: _v115
                  }), !_v89 && _v150 && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v66.ClipPrivacyTypeFilter, {
                      filter: [..._v68.value],
                      setFilter: _v0 => {
                        _v110(), _v68.updateFilterValues(_v0), _v30({
                          libraryType: (0, _v30.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v38
                          }),
                          libraryFilterType: "privacy"
                        });
                      },
                      options: _v68.options,
                      page: _v88,
                      isDisabled: _v65
                    }), !_v72.shouldHideFilter && (0, _v1.jsx)(_v68.CreatedByFilter, {
                      filter: [..._v72.value],
                      setFilter: _v0 => {
                        _v110(), _v72.setFilterValues(_v0), _v30({
                          libraryType: (0, _v30.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v38
                          }),
                          libraryFilterType: "created_by"
                        });
                      },
                      searchQuery: _v72.createdByUsersSearchTerm,
                      setSearchQuery: _v72.setCreatedByUsersSearchTerm,
                      options: _v72.createdByUsers,
                      page: _v88,
                      isDisabled: _v65,
                      isLoadingInitialData: _v72.membersLoadingInitialData,
                      isLoadingMore: _v72.membersLoadingMore,
                      isDone: _v72.membersDone,
                      onLoadMore: _v72.loadMoreMembers
                    })]
                  })]
                }),
                isTitleLoading: !_v36,
                title: _v88
              }), _v157 && (0, _v1.jsx)(_v65.SelectAllBanner, {
                folderName: _v88,
                libraryType: (0, _v30.deriveLibraryType)({
                  hasContentSpaceEnabled: !!_v38
                }),
                loadedSelectedCount: _v156,
                totalVideosCount: _v97,
                actualSelectedCount: _v159.isReady ? _v159.selectedItemURIs.size : void 0,
                showSelectAllInFolderButton: _v97 <= _v137,
                onSelectAllInFolder: _v108,
                onClearSelection: _v110,
                allInFolderEnabled: _v158
              }), "LIST_LAYOUT" === _v80 && !_v148 && (0, _v1.jsx)(_v38.BokehListHeader, {
                setSort: _v10,
                sort: _v9,
                shouldShowPrivacy: _v82,
                shouldShowFileSize: !0,
                setDateDisplay: _v12,
                dateDisplay: _v11
              })]
            }), _v148 ? (0, _v1.jsx)(_v6.Flex, {
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "20px",
              children: _v151 ? (0, _v1.jsx)(_v70.FilterEmptyState, {}) : _v35.canCreateRootFolders ? _v39 && _v38 && _v54 ? (0, _v1.jsx)(_v109, {
                onInvitePeople: () => _v22.current?.click(),
                onMoveContent: () => _v26(!0),
                hasTeamMembers: !_v40,
                isMigrationInProgress: _v41
              }) : (0, _v1.jsx)(_v100, {
                owner: {
                  id: _v17 ?? 0
                },
                set360SourceType: _v14,
                threeSixtyType: _v13,
                isUnifiedLibrary: !_v38
              }) : (0, _v1.jsx)(_v104, {
                isContributor: "Contributor" === _v53 || "ContributorPlus" === _v53
              })
            }) : (0, _v1.jsx)(_v39.UploadDropzone, {
              className: "library-upload-dropzone",
              surface: _v38 ? "teamlibrary" : "library",
              targetUserId: _v17 ?? 0,
              disabled: !_v87 || _v148 && _v35.canCreateRootFolders,
              topPosition: 205,
              destinationText: _v88 || (0, _v21.translate)({
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
              children: (0, _v1.jsx)(_v214, {
                assetUrls: _v0,
                type: _v32.PlayerType.BarebonePlayer,
                children: (0, _v1.jsx)(_v210, {
                  canUpload: _v84,
                  deselectItem: _v106,
                  handleMoveItemsOnDrop: ({
                    dropTarget: _v0,
                    items: _v1
                  }) => {
                    let _v2 = new Set("");
                    _v2.add(_v0.uri), _v143(_v2), _v47(_v2);
                    let [,, _v3,, _v4] = _v0.uri.split("/");
                    _v141({
                      ownerId: parseInt(_v3, 10),
                      folderId: parseInt(_v4, 10),
                      targetItems: _v1
                    }).then(() => {
                      1 === _v1.length ? (_v106(_v1[0].uri, 0, _v124 || []), _v102(_v1[0].uri, _v1[0].uri.includes("/files/") ? "file" : "video")) : (_v110(), _v103(_v121)), _v49(null, {
                        label: _v0.name,
                        link: (0, _v74.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    }).catch(_v0 => {
                      _v48({
                        content: _v0,
                        status: "error"
                      });
                    }).finally(() => {
                      _v143(new Set()), _v47(new Set());
                    });
                  },
                  hasFolderShareUpsell: !!_v35.canSeeUpsellModalOnShare,
                  hasReviewPageUpsell: !!_v35.hasVideoReviewPageDemo,
                  hasMultipleReviewLinks: !!_v35.hasMultipleReviewLinks,
                  items: _v154,
                  layout: _v80,
                  loadingFolderURIs: _v142,
                  onCopyVideo: _v51,
                  onFolderSettingsChange: _v0 => {
                    _v99(_v0), _v46();
                  },
                  onMoreInfo: _v7,
                  removeItem: _v102,
                  selectedItemURIs: _v121,
                  selectItem: _v105,
                  shouldShowPrivacy: _v82,
                  shouldShowFileSize: !0,
                  sort: _v9,
                  setIsUploadDropzoneEnabled: _v79,
                  isLoading: _v146 || !!_v147,
                  hasContentSpaceEnabled: !!_v38
                })
              })
            }), (0, _v1.jsx)(_v86, {
              layout: _v80,
              canLoadMore: !_v145,
              isLoadingMore: _v146 || !!_v147,
              onActivate: () => _v94(_v95 + 1),
              isDropzoneEnabled: _v84 && !(_v148 && _v35.canCreateRootFolders),
              page: _v88
            })]
          }), _v6 && (0, _v1.jsx)(_v63.Page.Panel, {
            children: (0, _v1.jsx)(_v33.ResourceSidePanel, {
              isOpen: !0,
              onClose: () => _v7(null),
              onVideoPrivacyChange: ({
                view: _v0
              }) => _v100(_v6, _v0 => ({
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
        })
      }), (0, _v1.jsx)(_v71.ViewerAiUpsellModal, {
        step: _v19 ? "closed" : _v2,
        onDismiss: _v3,
        onCtaClick: _v4,
        onErrorClose: _v5
      }), (0, _v1.jsx)(_v9.LibrariesBecomingOneModal, {
        isOpen: _v19,
        onClose: () => _v18.dismiss("becoming"),
        userId: _v17,
        mergeDate: _v18.mergeDate
      }), _v52, _v56.modal, (0, _v1.jsx)(_v8.BulkActions, {
        ..._v161,
        isLoading: _v160,
        canUseBulkTranslation: _v44,
        canAddToShowcases: _v139,
        canPublishContentToChina: _v35.regionalDeliveryPublishContentToChina,
        deselectAllItems: _v110,
        deselectItems: _v112,
        removeItems: _v103,
        teamOwnerId: _v17
      })]
    });
  }
  let _v214 = ({
    children: _v0,
    assetUrls: _v1,
    type: _v2
  }) => _v1 ? (0, _v1.jsx)(_v31.PlayerContextProvider, {
    assetUrls: _v1,
    type: _v2,
    children: _v0
  }) : _v0;
  var _v215 = _v0.i(0),
    _v216 = _v0.i(0),
    _v217 = _v0.i(0);
  let _v218 = ({
    playerAssetUrls: _v0
  }) => {
    let _v1 = (0, _v217.useViewer)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v213, {
        playerAssetUrls: _v0,
        viewer: _v1
      }), (0, _v1.jsx)(_v2.BundleIntroModalContainer, {})]
    });
  };
  _v218.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v216.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    searchContentAlignment: _v63.VIDEO_LIBRARY_PAGE_SEARCH_CONTENT_ALIGNMENT,
    sideNavContent: (0, _v1.jsx)(_v215.SideNavContent, {
      surface: "library"
    }),
    sideNavSurface: "library",
    children: _v0
  }), (0, _v3.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !0,
      hasPlayerAPI: !0
    }
  }), {
    requireLogin: !0,
    noIndex: !0,
    inlineViewer: !0,
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v218], 0);
}