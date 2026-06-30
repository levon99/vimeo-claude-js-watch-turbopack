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
    _v9 = _v0.i(0);
  let _v10 = _v0 => (0, _v1.jsx)(_v9.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "m10.71 11.29-2.5-2.5a1.004 1.004 0 0 0-1.42 1.42l.8.79H4V7a1 1 0 0 0-2 0v10a1 1 0 1 0 2 0v-4h3.59l-.8.79a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2.5-2.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33ZM21 6a1 1 0 0 0-1 1v4h-3.59l.8-.79a1.005 1.005 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2.5 2.5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-.8-.79H20v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Z",
      fill: "currentColor"
    })
  });
  var _v11 = _v0.i(0),
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
      } = _v0;
      return _v3 ? (0, _v1.jsx)(_v85, {
        layout: _v1,
        isLoading: _v2,
        onLoadMore: _v4
      }) : _v5 && !_v2 ? (0, _v1.jsx)(_v82.UploadDropzoneHint, {
        page: _v6
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
        } = _v1;
      return (0, _v1.jsxs)(_v97.Provider, {
        value: {
          setModalContextState: _v2
        },
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
      return (0, _v1.jsx)(_v7.Flex, {
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
              libraryEmptyStateContent: (0, _v1.jsxs)(_v7.Flex, {
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
                  children: _v3 ? (0, _v22.translate)({
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
                  }) : (0, _v22.translate)({
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
                    children: (0, _v22.translate)({
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
  }) => (0, _v1.jsxs)(_v7.Flex, {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    children: [_v2, (0, _v1.jsxs)(_v7.Flex, {
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
    header: (0, _v22.translate)({
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
    subheader: _v0 ? (0, _v22.translate)({
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
    }) : (0, _v22.translate)({
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
  var _v105 = _v0.i(0);
  let _v106 = _v0 => (0, _v1.jsx)(_v9.Icon, {
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
  var _v107 = _v0.i(0),
    _v108 = _v0.i(0);
  let _v109 = ({
    targetUserId: _v0,
    onInvitePeople: _v1,
    hasTeamMembers: _v2
  }) => {
    let _v3 = (0, _v5.useRef)(null),
      {
        uploadFiles: _v4,
        isLoading: _v5
      } = (0, _v108.useUploadFileList)({
        targetUserId: _v0,
        paywallTracking: {
          paywallTrigger: "team_library_empty_state_add_content",
          paywallLocation: "video_library",
          paywallType: "popup",
          paywallFeature: "quota"
        }
      });
    return (0, _v1.jsx)(_v7.Flex, {
      justifyContent: "center",
      width: "100%",
      children: (0, _v1.jsxs)(_v7.Flex, {
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
        children: [(0, _v1.jsxs)(_v7.Flex, {
          flexDirection: "column",
          alignItems: "center",
          gap: "md",
          children: [(0, _v1.jsx)(_v90.TeamLibrary, {
            width: (0, _v87.rem)(64),
            height: (0, _v87.rem)(64)
          }), (0, _v1.jsx)(_v89.Text, {
            variant: "heading-lg",
            children: (0, _v22.translate)({
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
              children: (0, _v22.translate)({
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
        }), (0, _v1.jsxs)(_v7.Flex, {
          flexDirection: "column",
          alignItems: "center",
          gap: "sm",
          width: (0, _v87.rem)(292),
          children: [!_v2 && (0, _v1.jsx)(_v6.Button, {
            variant: "primary",
            size: "lg",
            width: "100%",
            leftIcon: (0, _v1.jsx)(_v107.PersonUserAdd, {}),
            onClick: _v1,
            children: (0, _v22.translate)({
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
          }), (0, _v1.jsx)(_v105.FileInput, {
            multiple: !0,
            ref: _v3,
            onChange: _v0 => {
              let _v1 = _v0.target.files;
              _v1?.length && _v4({
                files: _v1,
                targetUserId: _v0,
                folderId: void 0,
                uploadClipProperties: void 0
              }), _v3.current && (_v3.current.value = "");
            },
            isDisabled: _v5,
            sx: {
              display: "none"
            },
            accept: "video/*,.mkv,.m2ts"
          }), (0, _v1.jsx)(_v6.Button, {
            variant: _v2 ? "secondary" : "tertiary",
            size: "lg",
            width: "100%",
            leftIcon: (0, _v1.jsx)(_v106, {}),
            isDisabled: _v5,
            onClick: () => _v3.current?.click(),
            children: (0, _v22.translate)({
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
  };
  var _v110 = _v0.i(0);
  let _v111 = () => {
    let {
        setModalContextState: _v0
      } = (0, _v5.useContext)(_v97),
      _v1 = (0, _v5.useContext)(_v95.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      {
        capabilities: _v3
      } = (0, _v18.useCapability)(["hasContentSpaceEnabled"], _v2),
      {
        trackLibraryNewFolderClicked: _v4
      } = (0, _v28.useLibraryTracking)();
    return (0, _v1.jsx)(_v110.NewFolderButton, {
      onClick: () => {
        _v4({
          libraryType: (0, _v29.deriveLibraryType)({
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
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0),
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
    _v136 = _v0.i(0);
  let _v137 = "header",
    _v138 = "video card",
    _v139 = ({
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
      let _v17 = (0, _v119.useIsBokeh)(),
        _v18 = (0, _v5.useContext)(_v95.ViewerContext),
        {
          notifyItemMoveSuccess: _v19,
          notifyItemMoveToWorkspaceSuccess: _v20
        } = (0, _v49.useNotifications)(),
        _v21 = (0, _v37.useAnalyticsEvent)(),
        _v22 = _v121.BPAnalyticsV2.useContentManagamentHoverEvent(),
        _v23 = (0, _v124.usePageName)(),
        {
          getDisplayDateWithTime: _v24
        } = (0, _v131.useFormatDateTime)(),
        _v25 = (0, _v134.useVideoPrivacyBadgeHandlers)({
          surface: "card"
        }),
        _v26 = _v18?.teamUser?.ownerId ?? _v18?.user?.id,
        _v27 = (0, _v92.useTeamUploadClipProperties)(_v26),
        {
          capabilities: _v28
        } = (0, _v18.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks", "hasContentSpaceEnabled"], _v26),
        _v29 = (0, _v29.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v28.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v30
        } = (0, _v28.useLibraryTracking)(),
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
              _v6 = (0, _v127.getTimestampBySort)(_v15.type, _v0.lastUserActionEventDate ?? "", _v0.createdTime),
              {
                videoPrivacy: _v7,
                variant: _v8,
                onPrivacyBadgeClick: _v9,
                openLockedVideoPaywall: _v10,
                tooltipLabel: _v11
              } = _v25(_v0);
            return (0, _v1.jsx)(_v115.AnalyticsEventProvider, {
              eventData: {
                location: _v138,
                video_privacy: _v0.privacy?.view,
                video_id: String((0, _v123.idFromUri)(_v0.uri)),
                video_app_id: (0, _v123.idFromUri)(_v0.app?.uri) ? String((0, _v123.idFromUri)(_v0.app?.uri)) : null,
                is_video_password_protected: !!_v0.password,
                video_embed_privacy: _v0.privacy?.embed,
                team_owner_id: String((0, _v123.idFromUri)(_v0.user.uri)),
                team_subscription_type: _v0.user.account
              },
              children: (0, _v1.jsx)(_v125.FolderItemDragWrapper, {
                type: _v114.ITEM_TYPES.ROOT_VIDEO,
                uri: _v0.uri,
                parentFolderUri: "root",
                thumbnail: _v0.pictures.sizes[1].link,
                canDrag: _v4,
                isSelected: !!_v1,
                selectedItemURIs: _v12,
                onDrop: _v1,
                setIsUploadDropzoneEnabled: _v14,
                children: (0, _v1.jsx)(_v133.VideoCard, {
                  title: _v0.name,
                  subtitle: _v24(_v6),
                  href: _v5 ?? "",
                  isDefaultPicture: _v0.pictures?.defaultPicture,
                  thumbnailSrc: _v0.pictures?.sizes[3].link,
                  avatarSrc: _v0.uploader?.pictures?.sizes[1].link,
                  avatarName: _v0.uploader?.name,
                  tagText: (0, _v120.secondsToDisplay)(_v0.duration),
                  isSelectable: _v0.isSelectable,
                  titleStyles: {
                    maxWidth: _v54.CONTENT_CARD_TITLE_MAX_WIDTH
                  },
                  isSelected: _v1,
                  configUrl: _v0.configUrl ?? "",
                  clipId: (0, _v123.idFromUri)(_v0?.uri),
                  pageName: _v23,
                  isColdStorage: _v3,
                  isManagedStorage: !0 === _v0.countsTowardManagedStorage,
                  lockedTooltipLabel: _v135.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
                  onLockedClick: _v3 ? _v10 : void 0,
                  onToggleSelected: () => {
                    _v21((0, _v77.genericClick)({
                      copy: `${_v12.size}`,
                      feature: _v77.AnalyticsFeatures.VIDEO_LIBRARY,
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
                  hoverActions: (0, _v1.jsx)(_v130.HoverActions, {
                    type: "video",
                    entity: _v0,
                    canShare: !!(_v0.metadata?.interactions?.invite?.uri || _v31),
                    hasMoreInfo: !0,
                    onMoreInfo: () => _v8(_v0.uri)
                  }),
                  actionsMenu: (0, _v1.jsx)(_v128.VideoMenu, {
                    video: _v0,
                    feature: _v77.AnalyticsFeatures.VIDEO_LIBRARY,
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
                          _v1 = "root" === _v0 ? "/library" : (0, _v74.getFolderPageUriFromApiUri)(_v0.uri);
                        _v20(_v1.name, {
                          label: _v0,
                          workspaceName: _v3
                        }, () => {
                          _v18 && (0, _v112.switchTeam)(_v2, _v18.xsrft).finally(() => {
                            window.location.href = _v1;
                          });
                        });
                      } else "root" !== _v0 && _v19(_v1.name, {
                        label: _v0.name,
                        link: (0, _v74.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    },
                    onDelete: () => {
                      _v0(_v0.uri, _v1, _v3), _v11?.(_v0.uri, "video"), _v21(_v77.VideoActionAnalytics.clickDeleteVideo({
                        live_event_id: null,
                        origin_folder_id: null,
                        origin_type: null,
                        is_my_videos: null,
                        location: _v138
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
                    _v117.BigPictureClient.sendEvent(new _v117.Event("vimeo.click_video_card", 2, {
                      path: window.location.href,
                      entry_page: "team-library",
                      page: "team-library",
                      location: _v138,
                      video_id: String((0, _v123.idFromUri)(_v0.uri)),
                      video_privacy: _v0.privacy?.view,
                      video_embed_privacy: _v0.privacy?.embed,
                      is_preset_applied: null,
                      is_video_password_protected: !!_v0.password,
                      video_app_id: (0, _v123.idFromUri)(_v0.app?.uri) ? String((0, _v123.idFromUri)(_v0.app?.uri)) : null,
                      team_owner_id: String((0, _v123.idFromUri)(_v0.user.uri)),
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
              _v2 = _v15.type === _v54.SORT_OPTION.CREATED ? _v0.folder.createdTime : _v0.folder.lastUserActionEventDate ?? _v0.folder.createdTime;
            return (0, _v1.jsx)(_v126.FolderDropWrapper, {
              dropTarget: _v0.folder,
              dropTargetType: _v114.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v114.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: null != _v26 ? {
                targetUserId: _v26,
                folderId: _v1,
                folderName: _v0.folder.name,
                uploadClipProperties: _v27
              } : void 0,
              children: _v17 ? (0, _v1.jsx)(_v132.DroppableFolderCard, {
                title: _v0.folder?.name,
                subtitle: _v24(_v2),
                folderId: _v1,
                folderOwnerId: _v0,
                tagText: (0, _v136.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
                titleStyles: {
                  maxWidth: _v54.CONTENT_CARD_TITLE_MAX_WIDTH
                },
                href: (0, _v74.getFolderPageUriFromApiUri)(_v0.folder.uri),
                backgroundColor: _v0.folder.settings?.color,
                hoverActions: (0, _v1.jsx)(_v130.HoverActions, {
                  type: "folder",
                  entity: _v0.folder
                }),
                pageName: _v23,
                actionsMenu: (0, _v1.jsx)(_v129.FolderMenu, {
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
                  _v117.BigPictureClient.sendEvent(new _v117.Event("vimeo.click_folder_card", 3, {
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
              }) : (0, _v1.jsx)(_v122.FolderCard, {
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
        }), _v16 && (0, _v1.jsx)(_v118.LoadingCardsGrid, {})]
      });
    };
  function _v140({
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
    return (0, _v1.jsx)(_v115.AnalyticsEventProvider, {
      eventData: {
        location: "center",
        product: "Video Library",
        position_column: null
      },
      children: (0, _v1.jsx)(_v116.ContentGrid, {
        children: (0, _v1.jsx)(_v116.ContentGrid.Body, {
          children: (0, _v1.jsx)(_v139, {
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
  var _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0);
  let _v151 = ["video.allowedPrivacies", "video.app.uri", "video.canMoveToProject", "video.configUrl", "video.contentRatingClass", "video.countsTowardManagedStorage", "video.createdTime", "video.customMetadata", "video.duration", "video.download.link", "video.download.type", "video.download.width", "video.download.height", "video.download.quality", "video.download.size", "video.download.publicName", "video.download.sizeShort", "video.embed.html", "video.embed.sentimentWidgets", "video.filesSize", "video.isColdStorage", "video.isColdPrivacyRestricted", "video.lastUserActionEventDate", "video.link", "video.manageLink", "video.metadata.canBeReplaced", "video.metadata.interactions.edit.uri", "video.metadata.interactions.delete.uri", "video.metadata.interactions.invite.uri", "video.metadata.interactions.legalHold.uri", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.uri", "video.pictures.sizes", "video.password", "video.privacy.view", "video.privacy.embed", "video.privacy.download", "video.privacy.add", "video.privacy.comments", "video.privacy.originalView", "video.regionalPrivacies", "video.releaseTime", "video.reviewLinks.uri", "video.reviewLinks.expiresOn", "video.reviewPage", "video.status", "video.type", "video.uploader.name", "video.uploader.pictures", "video.uri", "video.user.account", "video.user.uri", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "folder.createdTime", "folder.isPrivateToUser", "folder.lastUserActionEventDate", "folder.name", "folder.uri", "folder.metadata.connections.items.uri", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.settings", "folder.metadata.interactions.edit", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.delete", "folder.metadata.interactions.invite", "folder.metadata.interactions.moveVideo", "folder.slackIncomingWebhooksId", "type"],
    _v152 = ({
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
        _v20 = (0, _v37.useAnalyticsEvent)(),
        _v21 = (0, _v124.usePageName)(),
        {
          getDisplayDateWithTime: _v22
        } = (0, _v131.useFormatDateTime)(),
        _v23 = (0, _v5.useContext)(_v95.ViewerContext),
        {
          settings: _v24
        } = (0, _v25.useOrionSettings)(),
        _v25 = (0, _v134.useVideoPrivacyBadgeHandlers)({
          surface: "list"
        }),
        _v26 = _v23?.teamUser?.ownerId ?? _v23?.user?.id,
        {
          capabilities: _v27
        } = (0, _v18.useCapability)(["hasContentSpaceEnabled"], _v26),
        _v28 = (0, _v29.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v27.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v29
        } = (0, _v28.useLibraryTracking)(),
        _v30 = (0, _v92.useTeamUploadClipProperties)(_v26);
      return (0, _v1.jsx)(_v81.Box, {
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
              _v8 = _v17.type === _v54.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v9 = _v7 && _v7.totalSize > 0 ? (0, _v143.bytesToSize)(_v7.totalSize, 1) : "0MB",
              _v10 = (0, _v148.getFileSizeTooltip)(_v7?.fileSizeType),
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
            return (0, _v1.jsx)(_v149.DraggableListVideo, {
              uri: _v6,
              title: _v3,
              clipId: (0, _v123.idFromUri)(_v6),
              canRename: !0,
              thumbnail: (0, _v1.jsx)(_v142.VideoThumbnail, {
                alt: _v3,
                badgeText: (0, _v120.secondsToDisplay)(_v1),
                isDefaultPicture: _v4?.defaultPicture,
                thumbnailSrc: _v11,
                isLocked: _v12
              }),
              thumbnailSrc: _v11,
              timestamp: _v22(_v8),
              privacy: _v15 ? (0, _v1.jsx)(_v141.ContentCard.VideoPrivacyBadge, {
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
              lockedTooltipLabel: _v135.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
              onLockedClick: _v12 ? _v17 : void 0,
              pageName: _v21,
              onClick: () => {
                _v117.BigPictureClient.sendEvent(new _v117.Event("vimeo.click_video_card", 2, {
                  path: window.location.href,
                  entry_page: "team-library",
                  page: "team-library",
                  location: _v77.AnalyticsLocations.VIDEO_LIST,
                  video_id: String((0, _v123.idFromUri)(_v0.uri)),
                  video_privacy: _v0.privacy?.view,
                  video_embed_privacy: _v0.privacy?.embed,
                  is_preset_applied: null,
                  is_video_password_protected: !!_v0.password,
                  video_app_id: (0, _v123.idFromUri)(_v0.app?.uri) ? String((0, _v123.idFromUri)(_v0.app?.uri)) : null,
                  team_owner_id: String((0, _v123.idFromUri)(_v0.user.uri)),
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
                _v20((0, _v77.genericClick)({
                  copy: `${_v12.size}`,
                  feature: _v77.AnalyticsFeatures.VIDEO_LIBRARY,
                  location: _v77.AnalyticsLocations.VIDEO_LIST,
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
              isManagedStorage: !0 === _v0.countsTowardManagedStorage,
              hoverActions: (0, _v1.jsx)(_v146.ListViewHoverActionsContainer, {
                disableHoverBackground: _v0.isColdStorage,
                children: (0, _v1.jsx)(_v144.TopRightDecoration, {
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
              menuButton: (0, _v1.jsx)(_v128.VideoMenu, {
                video: _v0,
                feature: _v77.AnalyticsFeatures.VIDEO_LIBRARY,
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
                      _v23 && (0, _v112.switchTeam)(_v2, _v23.xsrft).finally(() => {
                        window.location.href = _v1;
                      });
                    });
                  } else "root" !== _v0 && _v18(_v1.name, {
                    label: _v0.name,
                    link: (0, _v74.getFolderPageUriFromApiUri)(_v0.uri)
                  });
                },
                onDelete: () => {
                  _v0(_v0.uri, _v1, _v5), _v11?.(_v0.uri, "video"), _v20(_v77.VideoActionAnalytics.clickDeleteVideo({
                    live_event_id: null,
                    origin_folder_id: null,
                    origin_type: null,
                    is_my_videos: null,
                    location: _v77.AnalyticsLocations.VIDEO_LIST
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
              type: _v114.ITEM_TYPES.ROOT_VIDEO,
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
              _v3 = parseInt(_v0.folder.uri.split("/")[4]);
            return (0, _v1.jsx)(_v150.DroppableListFolder, {
              dropTarget: _v0,
              dropTargetType: _v114.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v114.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: _v24.enable_list_view_folder_upload && null != _v26 ? {
                targetUserId: _v26,
                folderId: _v3,
                folderName: _v0.name,
                uploadClipProperties: _v30
              } : void 0,
              isLoading: !!_v7 && _v7.has(_v0.uri),
              href: (0, _v74.getFolderPageUriFromApiUri)(_v0.uri),
              title: _v0.name,
              thumbnail: (0, _v1.jsx)(_v147.FolderRowThumbnail, {
                backgroundColor: _v0.settings?.color
              }),
              subTitle: (0, _v136.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
              timestamp: _v22(_v1),
              privacy: _v15 ? "—" : "",
              shouldShowFileSize: _v16,
              pageName: _v21,
              fileSize: "—",
              folderId: _v3,
              canRename: !0,
              folderOwnerId: _v2,
              hoverActions: (0, _v1.jsx)(_v146.ListViewHoverActionsContainer, {
                children: (0, _v1.jsx)(_v145.FolderTopRightDecoration, {
                  folder: _v0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list"
                })
              }),
              menuButton: (0, _v1.jsx)(_v129.FolderMenu, {
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
                _v117.BigPictureClient.sendEvent(new _v117.Event("vimeo.click_folder_card", 3, {
                  path: window.location.href,
                  entry_page: "mvv",
                  page: "mvv",
                  location: _v77.AnalyticsLocations.FOLDER_LIST,
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
          children: (0, _v1.jsx)(_v83.LoadingStateList, {})
        })
      });
    };
  function _v153({
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
    return (0, _v1.jsx)(_v152, {
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
  function _v154({
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
    let _v22 = (0, _v5.useContext)(_v95.ViewerContext),
      _v23 = _v22?.teamUser?.ownerId ?? _v22?.user?.id,
      _v24 = (0, _v92.useTeamUploadClipProperties)(_v23),
      _v25 = _v21 ? (0, _v22.translate)({
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
      }) : (0, _v22.translate)({
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
      } = (0, _v49.useNotifications)(),
      {
        revalidateTopLevelFolders: _v29,
        revalidateFolderItems: _v30,
        revalidateRootItems: _v31
      } = (0, _v47.useRevalidate)(),
      _v32 = (_v0, _v1, _v2, _v3) => {
        _v29(), _v1[0].parentFolder?.uri ? _v30(_v1[0]?.parentFolder?.uri ?? "") : _v31(), "root" !== _v0 && _v30(_v0.uri);
        let _v4 = "root" === _v0 ? _v25 : _v0.name,
          _v5 = "root" === _v0 ? "/library" : (0, _v74.getFolderPageUriFromApiUri)(_v0.uri);
        _v2 && _v3 ? _v27(_v1[0].name, {
          label: _v4,
          workspaceName: _v3
        }, () => {
          _v22 && (0, _v112.switchTeam)(_v2, _v22.xsrft).finally(() => {
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
      } = (0, _v113.useDropFolder)({
        dropTargetType: _v114.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
        dropTarget: void 0,
        allowedDropEffect: null,
        dropFileForUploadConfig: null != _v23 && _v0 ? {
          targetUserId: _v23,
          folderId: void 0,
          folderName: _v25,
          uploadClipProperties: _v24
        } : void 0
      });
    return (0, _v1.jsx)(_v81.Box, {
      height: "100%",
      width: "100%",
      ref: _v34,
      backgroundColor: _v33 ? "rgba(23, 213, 255, 0.06)" : "transparent",
      borderColor: _v33 ? "vimeoBlue.500" : "transparent",
      borderRadius: "lg",
      borderWidth: ".125rem",
      transition: "background-color 0.2s ease, border-color 0.2s ease",
      children: _v19 === _v54.LAYOUT.GRID ? (0, _v1.jsx)(_v140, {
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
      }) : (0, _v1.jsx)(_v153, {
        deselectItem: _v1,
        handleMoveItemsOnDrop: _v2,
        hasFolderShareUpsell: _v3,
        hasReviewPageUpsell: _v4,
        hasMultipleReviewLinks: _v5,
        items: _v7,
        libraryTitle: _v25,
        loadingFolderURIs: _v8,
        onCopyVideo: _v9,
        removeItem: _v12,
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
  let _v155 = ["video", "folder"];
  function _v156({
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
      _v8 = (0, _v8.useToast)(),
      [_v9, _v10] = (0, _v52.useSortPreference)(_v54.DEFAULT_SORT, _v54.VL_SORT_LOCAL_STORAGE_KEY),
      [_v11, _v12] = (0, _v53.useDateDisplayPreference)(_v54.DEFAULT_DATE_DISPLAY, _v54.VL_DATE_LOCAL_STORAGE_KEY),
      [_v13, _v14] = (0, _v5.useState)(null),
      [_v15, _v16] = (0, _v5.useState)(!1),
      _v17 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      [_v18, _v19] = (0, _v5.useState)(!1),
      _v20 = (0, _v5.useRef)(null),
      [_v21, _v22] = (0, _v5.useState)(!1),
      [_v23, _v24] = (0, _v5.useState)(!1),
      _v25 = _v17 && _v1 ? {
        apiUrl: _v1.apiUrl,
        jwt: _v1.jwt,
        ownerId: _v17
      } : void 0,
      _v26 = (0, _v37.useAnalyticsEvent)(),
      {
        trackLibraryPageDisplayed: _v27,
        trackLibraryViewChanged: _v28,
        trackLibraryFilterApplied: _v29,
        trackLibrarySortChanged: _v30
      } = (0, _v28.useLibraryTracking)(),
      _v31 = (0, _v4.useRouter)(),
      _v32 = {
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
        capabilities: _v33,
        ready: _v34
      } = (0, _v18.useCapability)(["canCreateRootFolders", "canAddTeamMembers", "canSeeUpsellModalOnShare", "privateModeOff", "canManageTeamCollections", "hasVideoReviewPageDemo", "hasEnterprise", "regionalDeliveryPublishContentToChina", "hasMultipleReviewLinks", "hasTeamPrivacy", "coldStorageClips", "canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasVideoLibraryEmbeddableUploader"], `/users/${_v17}`),
      {
        loading: _v35,
        contentSpaceEnabled: _v36,
        isTeamGateEnabled: _v37,
        isSoleTeamOwner: _v38
      } = (0, _v16.useMergeLibrariesVisible)(`/users/${_v17}`),
      {
        listingParams: _v39
      } = (0, _v17.usePrivateToMeFolderListingParams)(`/users/${_v17}`),
      _v40 = !!_v33.canGenerateClipTextTranslation,
      _v41 = (!!_v33.canGenerateClipTranslation || _v40) && !!_v33.canPerformBulkTranslations,
      {
        revalidateRootItems: _v42,
        revalidateTopLevelFolders: _v43
      } = (0, _v47.useRevalidate)(),
      {
        setLoadingSideNavFolderURIs: _v44
      } = (0, _v5.useContext)(_v50.VideoLibraryLayoutContext),
      _v45 = (0, _v49.useNotification)(),
      {
        notifyItemMoveSuccess: _v46
      } = (0, _v49.useNotifications)(),
      _v47 = (0, _v5.useRef)(() => void 0),
      {
        openCopyVideoModal: _v48,
        copyVideoModal: _v49
      } = (0, _v69.useCopyVideoFlow)({
        onAfterCopySuccess: (_v0, _v1) => _v47.current(_v1.uri, _v0)
      }),
      _v50 = _v1?.teamUser?.plainTextPermissionLevel,
      _v51 = _v17 === _v1?.user?.id || "Admin" === _v50,
      _v52 = (0, _v34.useGracePeriodBillingUi)({
        orionFlag: "enable_library_grace_period_notifications",
        layout: {
          type: "library"
        }
      }),
      {
        hasColdStorage: _v53
      } = (0, _v79.useUserHasColdStorageVideos)({
        forceEligible: _v52.isStorageSuspended
      }),
      _v54 = !!_v33.coldStorageClips && _v51 || _v53 && _v51,
      {
        settings: _v55
      } = (0, _v25.useOrionSettings)(),
      _v56 = _v55?.cold_privacy_enabled ?? !1,
      {
        hasColdPrivacy: _v57,
        isLoading: _v58
      } = (0, _v78.useUserHasColdPrivacyVideos)({
        enabled: _v56 || _v53
      }),
      _v59 = _v56 && _v57,
      _v60 = (0, _v44.useContentTypeFilter)([..._v155]),
      _v61 = !(0, _v76.isContentTypeSelectionDefault)(_v155, _v60.value) && !(0, _v76.doesSelectionIncludeVideos)(_v155, _v60.value),
      _v62 = !(0, _v76.isContentTypeSelectionDefault)(_v155, _v60.draft) && !(0, _v76.doesSelectionIncludeVideos)(_v155, _v60.draft),
      _v63 = (0, _v46.useVideoAvailabilityFilter)(),
      _v64 = (0, _v43.useClipPrivacyFilter)(["unlisted", "password", "hide_from_vimeo", "team", "private", "public", ...(_v59 ? ["cold_privacy"] : [])], !!_v33?.hasTeamPrivacy),
      _v65 = [..._v64.value],
      _v66 = _v64.value.has("cold_privacy"),
      _v67 = (0, _v76.doesSelectionIncludeVideos)(_v155, _v60.value) && _v63.value.has("restricted") !== _v63.value.has("available") || _v66,
      _v68 = (0, _v45.useCreatedByFilter)(),
      _v69 = !!_v64.isFilterActive || !!_v68.isFilterActive || !!_v63.isFilterActive,
      _v70 = !!_v64.isFilterActive || !!_v68.isFilterActive,
      _v71 = !!_v64.isDraftActive || !!_v68.isDraftActive,
      _v72 = !!_v64.isFilterActive || !!_v68.isFilterActive,
      _v73 = !!_v64.isDraftActive || !!_v68.isDraftActive,
      [_v74, _v75] = (0, _v5.useState)(!0),
      [_v76, _v77] = (0, _v51.useLayoutPreference)(),
      _v78 = !!_v33.canCreateRootFolders,
      _v79 = !!(_v74 && _v51),
      _v80 = _v55?.enable_new_library_drag_and_drop_upload ?? !1,
      _v81 = _v53 || _v59,
      _v82 = _v79 && !_v80,
      _v83 = !!_v33.hasEnterprise,
      _v84 = !_v34 || _v35 ? "" : _v36 ? (0, _v22.translate)({
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
      }) : (0, _v22.translate)({
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
    (0, _v36.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v42();
    }, []), (0, _v24.useOttRedirect)({
      toast: _v8,
      config: {
        message: (0, _v22.translate)({
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
    let _v85 = (0, _v19.useIsMobile)(),
      _v86 = !!_v36,
      _v87 = !_v51 && _v86,
      {
        data: _v88,
        mutate: _v89,
        setSize: _v90,
        size: _v91
      } = (0, _v21.useGetUserFoldersRootInfinite)(() => {
        let _v0 = _v64.isFilterActive && !_v67 ? _v65.join(",") : void 0,
          _v1 = _v68.isFilterActive ? [..._v68.value].map(_v0 => _v0.userId) : void 0,
          _v2 = _v1?.length ? _v1.join(",") : void 0,
          _v3 = (0, _v76.getContentTypeApiFilterParam)(_v155, _v60.value);
        return _v17 && _v34 && !_v35 ? {
          where: {
            userId: _v17
          },
          select: _v151,
          query: {
            direction: _v9.direction,
            excludePersonalTeamFolder: _v36,
            flattenPrivateToMe: _v39.flattenPrivateToMe,
            excludeSharedVideos: _v87,
            includeColdStorageClips: _v54,
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
      _v92 = (0, _v5.useMemo)(() => _v88 ? _v88.flatMap(_v0 => {
        if (!_v0) return [];
        let _v1 = _v0.data.filter(_v0 => (0, _v75.passesLibraryItemClientFilters)({
          clipPrivacyFilter: _v64.value,
          contentTypeOptions: _v155,
          contentTypeSelection: _v60.value,
          item: _v0,
          shouldUseClientPipeline: _v67,
          videoAvailabilityFilter: _v63.value
        }));
        return [{
          ..._v0,
          data: _v1
        }];
      }) : _v88, [_v64.value, _v60.value, _v88, _v67, _v63.value]),
      _v93 = (0, _v5.useCallback)(({
        name: _v0,
        settings: {
          color: _v1
        },
        uri: _v2
      }) => {
        _v89(_v0 => _v0?.map(_v0 => ({
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
      }, [_v89]),
      _v94 = (0, _v5.useCallback)((_v0, _v1) => {
        _v89(_v0 => _v0 ? _v0.map(_v0 => ({
          ..._v0,
          data: _v0.data.map(_v0 => _v0.video?.uri === _v0 ? {
            ..._v0,
            video: _v1(_v0.video)
          } : _v0)
        })) : _v0, !1);
      }, [_v89]),
      _v95 = (0, _v5.useCallback)((_v0, _v1) => {
        let _v2 = !1;
        _v89(_v0 => {
          let _v1 = (0, _v73.insertOptimisticVideoCopy)(_v0, _v0, _v1);
          return _v2 = _v1.inserted, _v1.pages;
        }, !1), _v2 || _v42();
      }, [_v89, _v42]);
    (0, _v5.useEffect)(() => {
      _v47.current = _v95;
    }, [_v95]);
    let _v96 = (0, _v5.useCallback)((_v0, _v1) => {
        _v89(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => _v0?.[_v1]?.uri !== _v0)
        })), !1);
      }, [_v89]),
      _v97 = (0, _v5.useCallback)(_v0 => {
        _v89(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => {
            let _v1 = _v0.video?.uri || _v0.folder?.uri || _v0.liveEvent?.uri;
            return !!_v1 && !_v0.has(_v1);
          })
        })), !1);
      }, [_v89]),
      [_v98, {
        enhancedSelectItem: _v99,
        enhancedDeselectItem: _v100,
        selectAllItems: _v101,
        deselectAllItems: _v102,
        shiftKeyChange: _v103
      }] = (0, _v80.useSelectedItems)(),
      _v104 = (0, _v5.useCallback)(() => {
        let _v0 = _v60.value,
          _v1 = (0, _v76.isContentTypeOptionChecked)(_v155, _v0, "video"),
          _v2 = _v63.value,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v102();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v60.setSelection((0, _v76.includeVideosInSelection)(_v155, _v0)), _v63.setValue(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v60.setSelection((0, _v76.excludeVideosFromSelection)(_v155, _v0)), _v63.clearFilter();
          return;
        }
        if (_v3 !== _v4) return void _v63.setValue(_v5());
        if (_v3 && _v4) {
          _v63.clearFilter(), _v60.setSelection((0, _v76.excludeVideosFromSelection)(_v155, _v0));
          return;
        }
      }, [_v60, _v102, _v63]),
      _v105 = (0, _v5.useCallback)(() => {
        let _v0 = _v60.draft,
          _v1 = (0, _v76.isContentTypeOptionChecked)(_v155, _v0, "video"),
          _v2 = _v63.draft,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v102();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v60.setSelection((0, _v76.includeVideosInSelection)(_v155, _v0), !0), _v63.setDraft(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v60.setSelection((0, _v76.excludeVideosFromSelection)(_v155, _v0), !0), _v63.setDraft(new Set());
          return;
        }
        if (_v3 !== _v4) return void _v63.setDraft(_v5());
        if (_v3 && _v4) {
          _v63.setDraft(new Set()), _v60.setSelection((0, _v76.excludeVideosFromSelection)(_v155, _v0), !0);
          return;
        }
      }, [_v60, _v102, _v63]),
      _v106 = _v53 || _v53 ? {
        onVideoParentCheckboxClick: _v104,
        setVideoAvailabilityFilter: _v0 => {
          let _v1 = _v60.value;
          (0, _v76.isContentTypeOptionChecked)(_v155, _v1, "video") || _v60.setSelection((0, _v76.includeVideosInSelection)(_v155, _v1)), _v63.updateFilterValues(_v0);
        },
        showAvailableOption: _v53,
        showRestrictedOption: _v53,
        videoAvailabilityFilter: _v63.value
      } : void 0,
      _v107 = _v53 || _v53 ? {
        onVideoParentCheckboxClick: _v105,
        onVideoAvailabilityChange: _v0 => {
          let _v1 = _v60.draft;
          (0, _v76.isContentTypeOptionChecked)(_v155, _v1, "video") || _v60.setSelection((0, _v76.includeVideosInSelection)(_v155, _v1), !0), _v63.updateFilterValues(_v0, !0);
        },
        showAvailableOption: _v53,
        showRestrictedOption: _v53,
        videoAvailabilityDraft: _v63.draft
      } : void 0,
      _v108 = (0, _v5.useRef)(!1),
      _v109 = (0, _v5.useCallback)(_v0 => {
        "Shift" === _v0.key && (_v108.current = !_v108.current, _v103(_v108.current));
      }, [_v108, _v103]);
    (0, _v5.useEffect)(() => (window.addEventListener("keydown", _v109), window.addEventListener("keyup", _v109), () => {
      window.removeEventListener("keydown", _v109), window.removeEventListener("keyup", _v109);
    }), [_v109]), (0, _v5.useEffect)(() => {
      _v85 || _v16(!1);
    }, [_v85]);
    let _v110 = _v31.query.filter;
    (0, _v5.useEffect)(() => {
      !_v53 || "string" != typeof _v110 || "locked" !== _v110.toLowerCase() || (!_v63.value.has("restricted") || _v63.value.has("available")) && (_v60.setSelection(new Set(["video", "folder"])), _v63.setValue(new Set(["restricted"])));
    }, [_v110, _v53]);
    let _v111 = (0, _v5.useRef)(!1);
    (0, _v5.useEffect)(() => {
      _v111.current || !_v59 || "string" != typeof _v110 || "cold_privacy" === _v110.toLowerCase() && (_v111.current = !0, _v64.value.has("cold_privacy") || _v64.updateFilterValues("cold_privacy"));
    }, [_v110, _v59]), (0, _v5.useEffect)(() => {
      if (!_v53 || (0, _v46.isVideoAvailabilityFilterExplicitlyEngaged)(_v63.value)) return;
      let _v0 = _v60.value;
      if (1 !== _v0.size || !_v0.has("video") || (_v60.setSelection(new Set()), !_v31.isReady)) return;
      let _v1 = _v31.query.filter;
      if ("string" != typeof _v1 || "locked" !== _v1.toLowerCase()) return;
      let _v2 = {
        ..._v31.query
      };
      delete _v2.filter, _v31.replace({
        pathname: _v31.pathname,
        query: _v2
      }, void 0, {
        shallow: !0
      });
    }, [_v63.value, _v60.value, _v53, _v31.isReady, _v31.pathname, _v31.query.filter]);
    let _v112 = _v98.selectedItemURIs,
      _v113 = (0, _v5.useMemo)(() => _v92?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.filter(_v0 => {
        let _v1 = (0, _v20.camelizeString)(_v0.type);
        return _v0[_v1]?.uri;
      })), [_v92]),
      {
        allItems: _v114,
        canMoveSelection: _v115,
        canDeleteSelection: _v116,
        canChangePrivacySelection: _v117,
        canAddToShowcasesSelection: _v118,
        hasColdStorageSelection: _v119,
        hasLegalHoldSelection: _v120,
        hasReachedMaxSelectionForMove: _v121,
        hasReachedMaxSelectionForPrivacy: _v122,
        hasReachedMaxSelectionForSentimentWidget: _v123,
        hasReachedMaxSelectionForShowcases: _v124,
        canSelectURIs: _v125,
        selectedItems: _v126
      } = (0, _v42.useBulkItems)({
        canDeleteItem: _v0 => !!_v0?.video?.metadata?.interactions?.delete,
        canMoveItem: _v0 => !!_v0?.video?.canMoveToProject,
        canChangeItemPrivacy: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit,
        canAddToShowcases: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit,
        hasLegalHold: _v0 => !!_v0.video?.uri && !!_v0.video?.metadata?.interactions?.legalHold?.uri,
        items: _v113,
        selectedURIs: _v112,
        allowColdStorageDeletion: !0
      }),
      _v127 = !!_v33.canManageTeamCollections,
      _v128 = (0, _v5.useCallback)(() => {
        _v101(_v114, _v125);
      }, [_v114, _v125, _v101]),
      [_v129] = (0, _v48.useMoveItem)(),
      [_v130, _v131] = (0, _v5.useState)(new Set());
    (0, _v5.useEffect)(() => {
      !_v85 && _v70 && _v60.setSelection(new Set(["video"]));
    }, [_v85, _v70]), (0, _v5.useEffect)(() => {
      _v71 && _v60.setSelection(new Set(["video"]), !0);
    }, [_v71]);
    let _v132 = _v1?.vimeoHttpsUrl ? _v1?.vimeoHttpsUrl + "/analytics" : void 0,
      _v133 = _v1?.teamUser,
      {
        isDone: _v134,
        isLoadingInitialData: _v135,
        isLoadingMore: _v136
      } = (0, _v35.getInfiniteRequestLoadingState)({
        data: _v88,
        itemsPerPage: 25,
        size: _v91
      }),
      _v137 = _v114?.length === 0,
      _v138 = !!_v60.isFilterApplied,
      _v139 = !_v87,
      _v140 = _v138 || _v69 || (0, _v46.isVideoAvailabilityFilterExplicitlyEngaged)(_v63.value),
      _v141 = _v67 ? _v113?.length : _v92?.[0]?.total,
      _v142 = (0, _v5.useRef)(!1);
    (0, _v5.useEffect)(() => {
      if (!_v31.isReady || _v142.current || "1" !== _v31.query.library_merge_toast || void 0 === _v141) return;
      _v142.current = !0, _v45({
        content: (0, _v22.translate)({
          singular: "Your library is now one place. {COUNT} item is here.",
          plural: "Your library is now one place. All {COUNT} items are here.",
          count: _v141,
          replacements: {
            COUNT: _v141
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
        ..._v31.query
      };
      delete _v0.library_merge_toast, _v31.replace({
        pathname: _v31.pathname,
        query: _v0
      }, void 0, {
        shallow: !0
      });
    }, [_v31.isReady, _v31.query.library_merge_toast, _v141]);
    let _v143 = _v51 && !!_v132,
      _v144 = !!_v33.hasVideoLibraryEmbeddableUploader && _v51 && !!_v17,
      _v145 = !!_v33.canCreateRootFolders,
      _v146 = _v37 && !_v35 && _v51,
      _v147 = _v143 || _v144 || _v145 || _v146;
    return (0, _v27.usePicoEffect)(() => {
      if (!_v34 || void 0 === _v141) return !1;
      let _v0 = (0, _v29.deriveLibraryReferrerPage)(_v31.query.library_referrer);
      _v27({
        libraryType: (0, _v29.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v36
        }),
        libraryItemCount: _v141,
        referrerPage: _v0
      });
    }, [_v34, _v141, _v36, _v31.query.library_referrer], {
      once: !0
    }), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v33.InviteModal, {
        onSuccess: () => window.location.reload(),
        children: (0, _v1.jsx)("button", {
          ref: _v20,
          type: "button",
          "aria-hidden": "true",
          tabIndex: -1,
          style: {
            display: "none"
          }
        })
      }), _v25 && (0, _v1.jsx)(_v14.StartYourTeamFlow, {
        apiConfig: _v25,
        defaultTeamName: _v1?.user?.name ?? "",
        isOpen: _v18,
        onClose: () => _v19(!1),
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
      }), _v25 && (0, _v1.jsx)(_v12.DropYourTeamModal, {
        apiConfig: _v25,
        isOpen: _v21,
        onClose: () => _v22(!1),
        onDropped: () => window.location.reload()
      }), _v25 && (0, _v1.jsx)(_v13.MergeLibrariesModal, {
        isOpen: _v23,
        onClose: () => _v24(!1),
        userId: _v1?.user?.id,
        apiConfig: _v25,
        onMerged: () => window.location.reload()
      }), (0, _v1.jsx)(_v98, {
        children: (0, _v1.jsxs)(_v64.Page, {
          children: [(0, _v1.jsxs)(_v64.Page.Main, {
            children: [(0, _v1.jsxs)(_v64.Page.StickyTop, {
              children: [_v52.banner, (0, _v1.jsx)(_v26.ReverseTrialLateBanner, {
                hostLocation: "library"
              }), _v81 && (0, _v1.jsx)(_v23.ColdStorageBanner, {
                surface: "library",
                hasColdStorage: _v53,
                hasColdPrivacy: _v59,
                hasColdPrivacyForTracking: _v57,
                isColdPrivacyLoading: _v58
              }), (0, _v1.jsx)(_v63.PageHeader, {
                actions: _v147 ? (0, _v1.jsxs)(_v1.Fragment, {
                  children: [_v146 && _v17 && (0, _v1.jsx)(_v15.TeamMembersPreview, {
                    ownerId: _v17,
                    viewerName: _v1?.user?.name ?? "",
                    viewerAvatarSrc: _v1?.user?.pictures?.sizes?.[0]?.link,
                    viewerUri: _v1?.user?.uri,
                    contentSpaceEnabled: _v36,
                    isSoleTeamMember: _v38,
                    isLoading: _v35,
                    onStartYourTeam: () => _v19(!0),
                    onInviteMembers: () => _v20.current?.click()
                  }), _v143 && _v132 && (0, _v1.jsx)(_v41.AnalyticsButton, {
                    analyticsLink: _v132,
                    location: _v137,
                    page: "library",
                    name: "click_library_analytics",
                    dataTestId: "library-header-analytics-button"
                  }), _v144 && _v17 && (0, _v1.jsx)(_v40.UploadButton, {
                    paywallTrigger: "library_header_upload_button",
                    targetUserId: _v17,
                    testIdPrefix: "library-header-upload-button",
                    onClick: () => _v26((0, _v77.genericClick)({
                      copy: "Upload",
                      feature: "video_library",
                      location: _v137,
                      name: "click_upload_button",
                      page: "library",
                      target: null,
                      target_path: null,
                      click_type: null,
                      device_type: null,
                      type: "general"
                    }, 91))
                  }), _v145 && (0, _v1.jsx)(_v111, {}), _v25 && _v37 && !_v35 && _v38 && _v36 && (0, _v1.jsx)(_v6.Button, {
                    "data-testid": "library-header-merge-libraries-button",
                    variant: "secondary",
                    size: "md",
                    leftIcon: (0, _v1.jsx)(_v10, {}),
                    onClick: () => _v24(!0),
                    children: (0, _v22.translate)({
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
                    })
                  })]
                }) : void 0,
                bottomBar: (0, _v1.jsxs)(_v56.FilterSortBar, {
                  checkbox: (0, _v1.jsx)(_v65.CheckboxItemCount, {
                    hasCheckbox: !!_v125.size,
                    isChecked: !!_v112.size,
                    isDisabled: !_v125.size,
                    isIndeterminate: !!_v112.size && _v112.size < _v125.size,
                    isLoading: _v135,
                    onChange: () => {
                      _v112.size ? _v102() : _v128();
                    },
                    selectedItemCount: _v112.size,
                    subtitle: !!_v141 && (_v140 ? (0, _v22.translate)({
                      count: _v141,
                      singular: "{NUM_ITEMS} result",
                      plural: "{NUM_ITEMS} results",
                      replacements: {
                        NUM_ITEMS: _v141
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
                    }) : (0, _v22.translate)({
                      count: _v141,
                      singular: "{NUM_ITEMS} item",
                      plural: "{NUM_ITEMS} items",
                      replacements: {
                        NUM_ITEMS: _v141
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
                  layout: _v76,
                  setLayout: _v0 => {
                    _v77(_v0), _v28({
                      libraryType: (0, _v29.deriveLibraryType)({
                        hasContentSpaceEnabled: !!_v36
                      }),
                      libraryNewView: "GRID_LAYOUT" === _v0 ? "grid" : "list"
                    });
                  },
                  shouldHideViewControls: _v137 && !_v140,
                  sort: _v9,
                  setSort: _v0 => {
                    let _v1 = `${_v9.type.toLowerCase()}_${_v9.direction.toLowerCase()}`,
                      _v2 = `${_v0.type.toLowerCase()}_${_v0.direction.toLowerCase()}`;
                    if (_v10(_v0), _v2 !== _v1) {
                      let _v0 = _v32[_v2];
                      _v0 && _v30({
                        libraryType: (0, _v29.deriveLibraryType)({
                          hasContentSpaceEnabled: !!_v36
                        }),
                        libraryNewSort: _v0
                      });
                    }
                  },
                  setDateDisplay: _v12,
                  sortOptions: _v54.SORT_OPTIONS,
                  isLayoutToggleDisabled: _v137,
                  children: [_v85 && _v139 && (0, _v1.jsxs)(_v7.Flex, {
                    children: [(0, _v1.jsx)(_v58.MobileFilterButton, {
                      isFilterApplied: _v140,
                      onClick: () => {
                        _v16(!0);
                      }
                    }), (0, _v1.jsxs)(_v59.MobileFilterDrawer, {
                      isFilterApplied: _v140,
                      isOpen: _v15,
                      onApplyFilters: () => {
                        let _v0, _v1, _v2, _v3;
                        _v102();
                        let _v4 = (0, _v29.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v36
                          }),
                          _v5 = !(0, _v76.areIdenticalSets)(_v60.draft, _v60.value),
                          _v6 = _v64.isDraftActive && _v64.isDraftUpdated(),
                          _v7 = _v63.isDraftActive && _v63.isDraftUpdated(),
                          _v8 = _v68.isDraftActive && _v68.isDraftUpdated();
                        _v60.commitDraft(), _v64.commitDraft(), _v63.commitDraft(), _v68.commitDraft(), _v0 = !(0, _v76.areIdenticalSets)(_v60.draft, _v60.value), _v1 = _v64.isDraftActive && _v64.isDraftUpdated(), _v2 = _v63.isDraftActive && _v63.isDraftUpdated(), _v3 = _v68.isDraftActive && _v68.isDraftUpdated(), _v0 && _v55.FilterBPEvents.sendApplyFilterEvent("content_type", _v84, _v133, "mobile"), _v1 && _v55.FilterBPEvents.sendApplyFilterEvent("clip_privacy", _v84, _v133, "mobile"), _v2 && _v55.FilterBPEvents.sendApplyFilterEvent("content_type", _v84, _v133, "mobile"), _v3 && _v55.FilterBPEvents.sendApplyFilterEvent("clip_created_by", _v84, _v133, "mobile"), _v5 && _v29({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v6 && _v29({
                          libraryType: _v4,
                          libraryFilterType: "privacy"
                        }), _v7 && _v29({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v8 && _v29({
                          libraryType: _v4,
                          libraryFilterType: "created_by"
                        }), _v16(!1);
                      },
                      onClearFilters: () => {
                        _v102(), _v60.clearFilter(), _v64.clearFilter(), _v63.clearFilter(), _v68.clearFilter(), _v68.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      onClose: () => {
                        _v60.clearDraft(), _v64.clearDraft(), _v63.clearDraft(), _v68.clearDraft(), _v68.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      children: [(0, _v1.jsx)(_v60.MobileContentTypeFilter, {
                        filter: _v60.draft,
                        onToggle: _v0 => {
                          let _v1 = (0, _v76.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v155, _v60.draft, _v0, (0, _v46.isVideoAvailabilityFilterExplicitlyEngaged)(_v63.draft));
                          _v60.setSelection(_v1, !0), (0, _v76.doesSelectionIncludeVideos)(_v155, _v1) || _v63.setDraft(new Set());
                        },
                        options: _v155,
                        page: _v84,
                        isDisabled: _v73,
                        videoSubmenu: _v107
                      }), _v139 && (0, _v1.jsxs)(_v1.Fragment, {
                        children: [(0, _v1.jsx)(_v61.MobileClipPrivacyFilter, {
                          filter: [..._v64.draft],
                          onChange: _v0 => {
                            _v64.updateFilterValues(_v0, !0);
                          },
                          options: _v64.options,
                          page: _v84,
                          isDisabled: _v62
                        }), !_v68.shouldHideFilter && (0, _v1.jsx)(_v62.MobileCreatedByFilter, {
                          filter: [..._v68.draft],
                          onChange: _v0 => {
                            _v68.updateFilterValues(_v0, !0);
                          },
                          searchQuery: _v68.createdByUsersSearchTerm,
                          setSearchQuery: _v68.setCreatedByUsersSearchTerm,
                          options: _v68.createdByUsers,
                          page: _v84,
                          isDisabled: _v62,
                          isLoadingInitialData: _v68.membersLoadingInitialData,
                          isLoadingMore: _v68.membersLoadingMore,
                          isDone: _v68.membersDone,
                          onLoadMore: _v68.loadMoreMembers
                        })]
                      })]
                    })]
                  }), !_v85 && _v139 && _v140 && (0, _v1.jsx)(_v67.ClearAllFiltersButton, {
                    onClick: () => {
                      _v102(), _v60.clearFilter(), _v64.clearFilter(), _v63.clearFilter(), _v68.clearFilter();
                    }
                  }), !_v85 && _v139 && (0, _v1.jsx)(_v57.ContentTypeFilter, {
                    filter: _v60.value,
                    onToggleType: _v0 => {
                      _v102();
                      let _v1 = (0, _v76.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v155, _v60.value, _v0, (0, _v46.isVideoAvailabilityFilterExplicitlyEngaged)(_v63.value));
                      (0, _v76.areIdenticalSets)(_v1, _v60.value) || _v29({
                        libraryType: (0, _v29.deriveLibraryType)({
                          hasContentSpaceEnabled: !!_v36
                        }),
                        libraryFilterType: "type"
                      }), _v60.setSelection(_v1), (0, _v76.doesSelectionIncludeVideos)(_v155, _v1) || _v63.clearFilter();
                    },
                    options: _v155,
                    page: _v84,
                    isDisabled: _v72,
                    videoSubmenu: _v106
                  }), !_v85 && _v139 && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v66.ClipPrivacyTypeFilter, {
                      filter: [..._v64.value],
                      setFilter: _v0 => {
                        _v102(), _v64.updateFilterValues(_v0), _v29({
                          libraryType: (0, _v29.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v36
                          }),
                          libraryFilterType: "privacy"
                        });
                      },
                      options: _v64.options,
                      page: _v84,
                      isDisabled: _v61
                    }), !_v68.shouldHideFilter && (0, _v1.jsx)(_v68.CreatedByFilter, {
                      filter: [..._v68.value],
                      setFilter: _v0 => {
                        _v102(), _v68.setFilterValues(_v0), _v29({
                          libraryType: (0, _v29.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v36
                          }),
                          libraryFilterType: "created_by"
                        });
                      },
                      searchQuery: _v68.createdByUsersSearchTerm,
                      setSearchQuery: _v68.setCreatedByUsersSearchTerm,
                      options: _v68.createdByUsers,
                      page: _v84,
                      isDisabled: _v61,
                      isLoadingInitialData: _v68.membersLoadingInitialData,
                      isLoadingMore: _v68.membersLoadingMore,
                      isDone: _v68.membersDone,
                      onLoadMore: _v68.loadMoreMembers
                    })]
                  })]
                }),
                isTitleLoading: !_v34,
                title: _v84
              }), "LIST_LAYOUT" === _v76 && !_v137 && (0, _v1.jsx)(_v38.BokehListHeader, {
                setSort: _v10,
                sort: _v9,
                shouldShowPrivacy: _v78,
                shouldShowFileSize: !0,
                setDateDisplay: _v12,
                dateDisplay: _v11
              })]
            }), _v137 ? (0, _v1.jsx)(_v7.Flex, {
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "20px",
              children: _v140 ? (0, _v1.jsx)(_v70.FilterEmptyState, {}) : _v33.canCreateRootFolders ? _v37 && _v36 ? (0, _v1.jsx)(_v109, {
                targetUserId: _v17 ?? 0,
                onInvitePeople: () => _v20.current?.click(),
                hasTeamMembers: !_v38
              }) : (0, _v1.jsx)(_v100, {
                owner: {
                  id: _v17 ?? 0
                },
                set360SourceType: _v14,
                threeSixtyType: _v13,
                isUnifiedLibrary: !_v36
              }) : (0, _v1.jsx)(_v104, {
                isContributor: "Contributor" === _v50 || "ContributorPlus" === _v50
              })
            }) : (0, _v1.jsx)(_v39.UploadDropzone, {
              className: "library-upload-dropzone",
              targetUserId: _v17 ?? 0,
              disabled: !_v82 || _v137 && _v33.canCreateRootFolders,
              topPosition: 205,
              destinationText: (0, _v22.translate)({
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
              children: (0, _v1.jsx)(_v157, {
                assetUrls: _v0,
                type: _v31.PlayerType.BarebonePlayer,
                children: (0, _v1.jsx)(_v154, {
                  canUpload: _v79,
                  deselectItem: _v100,
                  handleMoveItemsOnDrop: ({
                    dropTarget: _v0,
                    items: _v1
                  }) => {
                    let _v2 = new Set("");
                    _v2.add(_v0.uri), _v131(_v2), _v44(_v2);
                    let [,, _v3,, _v4] = _v0.uri.split("/");
                    _v129({
                      ownerId: parseInt(_v3, 10),
                      folderId: parseInt(_v4, 10),
                      targetItems: _v1
                    }).then(() => {
                      1 === _v1.length ? (_v100(_v1[0].uri, 0, _v114 || []), _v96(_v1[0].uri, "video")) : (_v102(), _v97(_v112)), _v46(null, {
                        label: _v0.name,
                        link: (0, _v74.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    }).catch(_v0 => {
                      _v45({
                        content: _v0,
                        status: "error"
                      });
                    }).finally(() => {
                      _v131(new Set()), _v44(new Set());
                    });
                  },
                  hasFolderShareUpsell: !!_v33.canSeeUpsellModalOnShare,
                  hasReviewPageUpsell: !!_v33.hasVideoReviewPageDemo,
                  hasMultipleReviewLinks: !!_v33.hasMultipleReviewLinks,
                  items: _v114,
                  layout: _v76,
                  loadingFolderURIs: _v130,
                  onCopyVideo: _v48,
                  onFolderSettingsChange: _v0 => {
                    _v93(_v0), _v43();
                  },
                  onMoreInfo: _v7,
                  removeItem: _v96,
                  selectedItemURIs: _v112,
                  selectItem: _v99,
                  shouldShowPrivacy: _v78,
                  shouldShowFileSize: !0,
                  sort: _v9,
                  isEnterprise: _v83,
                  setIsUploadDropzoneEnabled: _v75,
                  isLoading: _v135 || !!_v136,
                  hasContentSpaceEnabled: !!_v36
                })
              })
            }), (0, _v1.jsx)(_v86, {
              layout: _v76,
              canLoadMore: !_v134,
              isLoadingMore: _v135 || !!_v136,
              onActivate: () => _v90(_v91 + 1),
              isDropzoneEnabled: _v79 && !(_v137 && _v33.canCreateRootFolders),
              page: _v84
            })]
          }), _v6 && (0, _v1.jsx)(_v64.Page.Panel, {
            children: (0, _v1.jsx)(_v32.ResourceSidePanel, {
              isOpen: !0,
              onClose: () => _v7(null),
              onVideoPrivacyChange: ({
                view: _v0
              }) => _v94(_v6, _v0 => ({
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
        step: _v2,
        onDismiss: _v3,
        onCtaClick: _v4,
        onErrorClose: _v5
      }), _v49, _v52.modal, (0, _v1.jsx)(_v11.BulkActions, {
        canUseBulkTranslation: _v41,
        canAddToShowcases: _v127,
        canAddToShowcasesSelection: _v118,
        canMoveSelection: _v115,
        canDeleteSelection: _v116,
        canChangePrivacySelection: _v117,
        canPublishContentToChina: _v33.regionalDeliveryPublishContentToChina,
        hasColdStorageSelection: _v119,
        hasLegalHoldSelection: _v120,
        hasReachedMaxSelectionForMove: _v121,
        hasReachedMaxSelectionForPrivacy: _v122,
        hasReachedMaxSelectionForSentimentWidget: _v123,
        hasReachedMaxSelectionForShowcases: _v124,
        deselectAllItems: _v102,
        removeItems: _v97,
        selectedItems: _v126,
        selectedItemURIs: _v112,
        teamOwnerId: _v17,
        isPrivateModeOn: !_v33.privateModeOff
      })]
    });
  }
  let _v157 = ({
    children: _v0,
    assetUrls: _v1,
    type: _v2
  }) => _v1 ? (0, _v1.jsx)(_v30.PlayerContextProvider, {
    assetUrls: _v1,
    type: _v2,
    children: _v0
  }) : _v0;
  var _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0);
  let _v161 = ({
    playerAssetUrls: _v0
  }) => {
    let _v1 = (0, _v160.useViewer)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v156, {
        playerAssetUrls: _v0,
        viewer: _v1
      }), (0, _v1.jsx)(_v3.ManagedAccountsPromo, {}), (0, _v1.jsx)(_v159.VimeoReviewUpsellPromo, {})]
    });
  };
  _v161.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v50.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v1.jsx)(_v158.SideNavContent, {
      surface: "library"
    }),
    sideNavSurface: "library",
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
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v161], 0);
}