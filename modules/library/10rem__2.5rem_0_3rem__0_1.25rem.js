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
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  let _v90 = ({
      layout: _v0,
      isLoading: _v1,
      onLoadMore: _v2
    }) => {
      let _v3 = (0, _v5.useRef)(null),
        _v4 = (0, _v89.useOnScreen)(_v3);
      return ((0, _v5.useEffect)(() => {
        _v4 && !_v1 && _v2();
      }, [_v1, _v4, _v2]), _v0 === _v57.LAYOUT.LIST) ? (0, _v1.jsx)(_v86.Box, {
        height: "10rem",
        ref: _v3,
        children: (0, _v1.jsx)(_v88.LoadingStateList, {})
      }) : (0, _v1.jsx)(_v86.Box, {
        height: "10rem",
        ref: _v3
      });
    },
    _v91 = _v0 => {
      let {
        layout: _v1,
        isLoadingMore: _v2,
        canLoadMore: _v3 = !1,
        onActivate: _v4,
        isDropzoneEnabled: _v5 = !1,
        page: _v6 = ""
      } = _v0;
      return _v3 ? (0, _v1.jsx)(_v90, {
        layout: _v1,
        isLoading: _v2,
        onLoadMore: _v4
      }) : _v5 && !_v2 ? (0, _v1.jsx)(_v87.UploadDropzoneHint, {
        page: _v6
      }) : (0, _v1.jsx)(_v86.Box, {
        margin: "2.5rem 0 3rem",
        padding: "0 1.25rem"
      });
    };
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0);
  let _v101 = (0, _v99.default)(() => _v0.A(0).then(_v0 => _v0.FolderSettingsModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v102 = (0, _v5.createContext)({
      setModalContextState: () => console.log("noop")
    }),
    _v103 = ({
      children: _v0
    }) => {
      let [_v1, _v2] = (0, _v5.useState)({
          activeModal: null,
          activeModalState: null
        }),
        _v3 = (0, _v5.useContext)(_v100.ViewerContext),
        _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
        {
          activeModal: _v5,
          activeModalState: _v6
        } = _v1;
      return (0, _v1.jsxs)(_v102.Provider, {
        value: {
          setModalContextState: _v2
        },
        children: [_v0, "FolderSettings" === _v5 && _v4 && (0, _v1.jsx)(_v101, {
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
    _v104 = (0, _v5.lazy)(() => _v0.A(0).then(({
      TeamSwitcherDropzone: _v0
    }) => ({
      default: _v0
    }))),
    _v105 = ({
      owner: _v0,
      set360SourceType: _v1,
      threeSixtyType: _v2,
      isUnifiedLibrary: _v3 = !1
    }) => {
      let {
          setModalContextState: _v4
        } = (0, _v5.useContext)(_v102),
        _v5 = (0, _v97.useTeamUploadClipProperties)(_v0.id);
      return (0, _v1.jsx)(_v6.Flex, {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v5.Suspense, {
          fallback: (0, _v1.jsx)(_v86.Box, {
            paddingTop: "25vh",
            children: (0, _v1.jsx)(_v93.Spinner, {
              size: "xl"
            })
          }),
          children: (0, _v1.jsxs)(_v86.Box, {
            maxWidth: "100%",
            width: "100%",
            children: [(0, _v1.jsx)(_v104, {
              uploadClipProperties: _v5,
              uploadType: "UPLOAD",
              owner: _v0,
              selectedFolderId: null,
              selectedFolder: null,
              libraryEmptyStateContent: (0, _v1.jsxs)(_v6.Flex, {
                flexDirection: "column",
                alignItems: "center",
                children: [_v3 ? (0, _v1.jsx)(_v96.VideosStack, {
                  width: (0, _v92.rem)(64),
                  height: (0, _v92.rem)(64)
                }) : (0, _v1.jsx)(_v95.TeamLibrary, {
                  width: (0, _v92.rem)(64),
                  height: (0, _v92.rem)(64)
                }), (0, _v1.jsx)(_v94.Text, {
                  variant: "heading-lg",
                  margin: `${(0, _v92.rem)(16)} 0`,
                  children: _v3 ? (0, _v23.translate)({
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
                  }) : (0, _v23.translate)({
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
                }), (0, _v1.jsx)(_v86.Box, {
                  width: "65%",
                  children: (0, _v1.jsx)(_v94.Text, {
                    variant: "body-lg",
                    color: "text-secondary",
                    textAlign: "center",
                    children: (0, _v23.translate)({
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
            }), (0, _v1.jsx)(_v98.EmptyStateDropzoneFooter, {
              set360SourceType: _v1,
              threeSixtyType: _v2
            })]
          })
        })
      });
    };
  var _v106 = _v0.i(0),
    _v107 = _v0.i(0);
  let _v108 = ({
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
      margin: `${(0, _v92.rem)(16)} 0`,
      gap: "md",
      children: ["string" == typeof _v1 ? (0, _v1.jsx)(_v106.Header, {
        size: "lg",
        children: _v1
      }) : _v1, "string" == typeof _v3 ? (0, _v1.jsx)(_v107.Paragraph, {
        size: "lg",
        color: "text-secondary",
        marginBottom: "0",
        children: _v3
      }) : _v3]
    }), _v0]
  });
  _v108.SubheaderText = ({
    children: _v0
  }) => (0, _v1.jsx)(_v107.Paragraph, {
    size: "lg",
    color: "text-secondary",
    marginBottom: "0",
    children: _v0
  });
  let _v109 = ({
    isContributor: _v0 = !1
  }) => (0, _v1.jsx)(_v108, {
    header: (0, _v23.translate)({
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
    icon: (0, _v1.jsx)(_v95.TeamLibrary, {
      width: "64px",
      height: "64px"
    }),
    subheader: _v0 ? (0, _v23.translate)({
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
    }) : (0, _v23.translate)({
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
  var _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0);
  let _v113 = _v0 => (0, _v1.jsx)(_v112.Icon, {
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
  var _v114 = _v0.i(0);
  let _v115 = ({
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
      minHeight: (0, _v92.rem)(500),
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "stroke",
      borderRadius: "md",
      children: [(0, _v1.jsxs)(_v6.Flex, {
        flexDirection: "column",
        alignItems: "center",
        gap: "md",
        children: [(0, _v1.jsx)(_v95.TeamLibrary, {
          width: (0, _v92.rem)(64),
          height: (0, _v92.rem)(64)
        }), (0, _v1.jsx)(_v94.Text, {
          variant: "heading-lg",
          children: (0, _v23.translate)({
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
        }), (0, _v1.jsx)(_v86.Box, {
          maxWidth: (0, _v92.rem)(392),
          children: (0, _v1.jsx)(_v94.Text, {
            variant: "body-lg",
            color: "text-secondary",
            textAlign: "center",
            children: (0, _v23.translate)({
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
        width: (0, _v92.rem)(292),
        children: [!_v2 && (0, _v1.jsx)(_v111.Tooltip, {
          label: (0, _v23.translate)({
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
          children: (0, _v1.jsx)(_v86.Box, {
            width: "100%",
            children: (0, _v1.jsx)(_v110.Button, {
              variant: "primary",
              size: "lg",
              width: "100%",
              leftIcon: (0, _v1.jsx)(_v114.PersonUserAdd, {}),
              isDisabled: _v3,
              onClick: _v0,
              children: (0, _v23.translate)({
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
        }), (0, _v1.jsx)(_v110.Button, {
          variant: _v2 ? "secondary" : "tertiary",
          size: "lg",
          width: "100%",
          leftIcon: (0, _v1.jsx)(_v113, {
            transform: "scale(1.125)"
          }),
          onClick: _v1,
          lineHeight: (0, _v92.rem)(0),
          children: (0, _v23.translate)({
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
  var _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0);
  let _v121 = _v0 => (0, _v1.jsx)(_v112.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "m10.71 11.29-2.5-2.5a1.004 1.004 0 0 0-1.42 1.42l.8.79H4V7a1 1 0 0 0-2 0v10a1 1 0 1 0 2 0v-4h3.59l-.8.79a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l2.5-2.5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33ZM21 6a1 1 0 0 0-1 1v4h-3.59l.8-.79a1.005 1.005 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l2.5 2.5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-.8-.79H20v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Z",
        fill: "currentColor"
      })
    }),
    _v122 = ({
      analyticsLink: _v0,
      onAnalyticsClick: _v1,
      showMoveContent: _v2,
      onMoveContent: _v3,
      showMergeLibraries: _v4,
      onMergeLibraries: _v5
    }) => (0, _v1.jsxs)(_v116.Menu, {
      children: [(0, _v1.jsx)(_v117.MenuButton, {
        as: _v7.IconButton,
        "aria-label": (0, _v23.translate)({
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
        icon: (0, _v1.jsx)(_v9.EllipsisV, {}),
        variant: "tertiary",
        size: "md"
      }), (0, _v1.jsxs)(_v119.MenuList, {
        children: [_v0 && (0, _v1.jsx)(_v118.MenuItem, {
          as: "a",
          href: _v0,
          icon: (0, _v1.jsx)(_v120.Analytics, {}),
          "data-testid": "library-header-overflow-menu-analytics",
          onClick: _v1,
          children: (0, _v23.translate)({
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
          })
        }), _v2 && (0, _v1.jsx)(_v118.MenuItem, {
          icon: (0, _v1.jsx)(_v113, {}),
          "data-testid": "library-header-overflow-menu-move-content",
          onClick: _v3,
          children: (0, _v23.translate)({
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
        }), _v4 && (0, _v1.jsx)(_v118.MenuItem, {
          icon: (0, _v1.jsx)(_v121, {}),
          "data-testid": "library-header-overflow-menu-merge-libraries",
          onClick: _v5,
          children: (0, _v23.translate)({
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
      })]
    });
  var _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0);
  let _v128 = ({
    isOpen: _v0,
    onClose: _v1,
    analyticsLink: _v2,
    onAnalyticsClick: _v3,
    showMoveContent: _v4,
    onMoveContent: _v5,
    showNewFolder: _v6,
    showMergeLibraries: _v7,
    onMergeLibraries: _v8
  }) => {
    let {
        setModalContextState: _v9
      } = (0, _v5.useContext)(_v102),
      _v10 = (0, _v5.useContext)(_v100.ViewerContext),
      _v11 = _v10?.teamUser?.ownerId ?? _v10?.user?.id,
      {
        capabilities: _v12
      } = (0, _v19.useCapability)(["hasContentSpaceEnabled"], _v11),
      {
        trackLibraryNewFolderClicked: _v13
      } = (0, _v30.useLibraryTracking)();
    return (0, _v1.jsxs)(_v123.Drawer, {
      placement: "bottom",
      isOpen: _v0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v126.DrawerOverlay, {}), (0, _v1.jsxs)(_v125.DrawerContent, {
        bgColor: "fill-surface",
        margin: "0 auto !important",
        borderTopRadius: "xl",
        borderBottomRadius: "0",
        sx: {
          '&[data-placement="bottom"]': {
            maxWidth: `${(0, _v92.rem)(480)} !important`
          }
        },
        "data-testid": "library-header-overflow-sheet",
        children: [(0, _v1.jsx)(_v6.Flex, {
          justify: "center",
          pt: "2xs",
          pb: "2xs",
          children: (0, _v1.jsx)(_v86.Box, {
            w: (0, _v92.rem)(50),
            h: (0, _v92.rem)(4),
            borderRadius: "3xl",
            bgColor: "stroke"
          })
        }), (0, _v1.jsx)(_v124.DrawerBody, {
          pb: "lg",
          children: (0, _v1.jsxs)(_v6.Flex, {
            direction: "column",
            gap: "2xs",
            children: [_v2 && (0, _v1.jsx)(_v110.Button, {
              as: "a",
              href: _v2,
              variant: "tertiary",
              size: "lg",
              w: "100%",
              justifyContent: "flex-start",
              leftIcon: (0, _v1.jsx)(_v120.Analytics, {}),
              "data-testid": "library-header-overflow-analytics",
              onClick: () => {
                _v3?.(), _v1();
              },
              children: (0, _v23.translate)({
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
              })
            }), _v4 && (0, _v1.jsx)(_v110.Button, {
              variant: "tertiary",
              size: "lg",
              w: "100%",
              justifyContent: "flex-start",
              leftIcon: (0, _v1.jsx)(_v113, {}),
              "data-testid": "library-header-overflow-move-content",
              onClick: () => {
                _v5(), _v1();
              },
              children: (0, _v23.translate)({
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
            }), _v6 && (0, _v1.jsx)(_v110.Button, {
              variant: "tertiary",
              size: "lg",
              w: "100%",
              justifyContent: "flex-start",
              leftIcon: (0, _v1.jsx)(_v127.FolderPlus, {}),
              "data-testid": "library-header-overflow-new-folder",
              onClick: () => {
                _v13({
                  libraryType: (0, _v31.deriveLibraryType)({
                    hasContentSpaceEnabled: !!_v12.hasContentSpaceEnabled
                  })
                }), _v9({
                  activeModal: "FolderSettings",
                  activeModalState: {
                    location: "library_header"
                  }
                }), _v1();
              },
              children: (0, _v23.translate)({
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
              })
            }), _v7 && (0, _v1.jsx)(_v110.Button, {
              variant: "tertiary",
              size: "lg",
              w: "100%",
              justifyContent: "flex-start",
              leftIcon: (0, _v1.jsx)(_v121, {}),
              "data-testid": "library-header-overflow-merge-libraries",
              onClick: () => {
                _v8(), _v1();
              },
              children: (0, _v23.translate)({
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
          })
        })]
      })]
    });
  };
  var _v129 = _v0.i(0),
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
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0);
  let _v150 = ["type", "video.uri", "video.name", "video.duration", "video.pictures.sizes", "video.privacy.view", "video.canMoveToProject", "video.createdTime", "video.lastUserActionEventDate", "video.uploader.name", "video.uploader.pictures.sizes", "video.parentProject.uri", "folder.uri", "folder.name", "folder.createdTime", "folder.lastUserActionEventDate", "folder.metadata.connections.items.total", "folder.metadata.connections.parentFolder.uri"];
  var _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0);
  let _v155 = ({
      item: _v0,
      index: _v1,
      isSelected: _v2,
      onToggleSelect: _v3
    }) => {
      let _v4,
        _v5 = "folder" === _v0.kind,
        _v6 = _v0.privacyView ? (0, _v154.getPrivacyLabel)(_v0.privacyView) : void 0;
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
        children: [(0, _v1.jsx)(_v131.Checkbox, {
          size: "md",
          isChecked: _v2,
          isDisabled: !_v0.canMove,
          onChange: () => _v3(_v0, _v1),
          "aria-label": (0, _v23.translate)({
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
            width: (0, _v92.rem)(72),
            height: (0, _v92.rem)(40),
            borderRadius: "xs",
            bg: "fill-component",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v153.FolderFilled, {
              width: (0, _v92.rem)(20),
              height: (0, _v92.rem)(20)
            })
          }) : (0, _v1.jsx)(_v86.Box, {
            width: (0, _v92.rem)(72),
            height: (0, _v92.rem)(40),
            borderRadius: "xs",
            bg: "fill-component",
            overflow: "hidden",
            flexShrink: 0,
            children: _v0.thumbnailUrl && (0, _v1.jsx)(_v152.Image, {
              src: _v0.thumbnailUrl,
              alt: "",
              width: "100%",
              height: "100%",
              objectFit: "cover"
            })
          }), (0, _v1.jsxs)(_v86.Box, {
            minWidth: 0,
            flex: "1",
            children: [(0, _v1.jsx)(_v94.Text, {
              variant: "body-sm",
              fontWeight: "medium",
              noOfLines: 1,
              children: _v0.name
            }), _v5 ? (0, _v1.jsx)(_v94.Text, {
              variant: "body-sm",
              color: "text-secondary",
              children: (0, _v23.translate)({
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
              children: [(0, _v1.jsx)(_v151.Avatar, {
                size: "xs",
                sx: {
                  width: (0, _v92.rem)(16),
                  height: (0, _v92.rem)(16)
                },
                src: _v0.uploaderAvatarUrl,
                alt: _v0.uploaderName ?? ""
              }), (0, _v1.jsx)(_v94.Text, {
                variant: "body-sm",
                color: "text-secondary",
                noOfLines: 1,
                children: _v0.uploaderName
              })]
            })]
          })]
        }), !_v5 && _v6 && (0, _v1.jsx)(_v94.Text, {
          variant: "body-sm",
          color: "text-secondary",
          flexShrink: 0,
          children: _v6
        }), (0, _v1.jsx)(_v94.Text, {
          variant: "body-sm",
          color: "text-secondary",
          flexShrink: 0,
          minWidth: (0, _v92.rem)(90),
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
    _v156 = _v0 => {
      let _v1 = _v0?.split("/").pop();
      return _v1 ? parseInt(_v1, 10) : void 0;
    },
    _v157 = _v0 => _v0?.[Math.min(2, _v0.length - 1)]?.link ?? _v0?.[0]?.link,
    _v158 = _v0 => {
      if (!_v0) return;
      let _v1 = Date.parse(_v0);
      return Number.isNaN(_v1) ? void 0 : _v1;
    },
    _v159 = ({
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
      let _v9 = (0, _v149.useDebouncedValue)(_v2.trim(), 300),
        _v10 = _v9.length > 0,
        _v11 = (0, _v148.useGetUserProjectItemsInfinite)(() => _v10 ? null : {
          where: {
            userId: _v0,
            projectId: _v1
          },
          select: _v150,
          query: {
            direction: _v4,
            perPage: 25,
            sort: _v3
          }
        }, {
          revalidateOnFocus: !1
        }),
        _v12 = (0, _v147.useGetUserItemsInfinite)(() => _v10 ? {
          where: {
            userId: _v0
          },
          select: _v150,
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
          parentFolderId: _v156(_v0.folder.metadata?.connections?.parentFolder?.uri),
          canMove: !0,
          dateMs: _v158(_v0.folder.lastUserActionEventDate ?? _v0.folder.createdTime),
          itemCount: _v0.folder.metadata?.connections?.items?.total
        }] : _v0.video?.uri ? [{
          kind: "video",
          uri: _v0.video.uri,
          name: _v0.video.name ?? "",
          parentFolderId: _v156(_v0.video.parentProject?.uri),
          canMove: !1 !== _v0.video.canMoveToProject,
          dateMs: _v158(_v0.video.lastUserActionEventDate ?? _v0.video.createdTime),
          thumbnailUrl: _v157(_v0.video.pictures?.sizes),
          uploaderName: _v0.video.uploader?.name,
          uploaderAvatarUrl: _v157(_v0.video.uploader?.pictures?.sizes),
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
        children: (0, _v1.jsx)(_v93.Spinner, {
          size: "lg"
        })
      }) : 0 === _v19.length ? (0, _v1.jsx)(_v6.Flex, {
        justifyContent: "center",
        paddingY: "2xl",
        children: (0, _v1.jsx)(_v94.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v10 ? (0, _v23.translate)({
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
          }) : (0, _v23.translate)({
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
        children: [_v19.map((_v0, _v1) => (0, _v1.jsx)(_v155, {
          item: _v0,
          index: _v1,
          isSelected: _v5.has(_v0.uri),
          onToggleSelect: _v6
        }, _v0.uri)), _v20 && (0, _v1.jsx)(_v6.Flex, {
          ref: _v21,
          justifyContent: "center",
          paddingY: "md",
          children: (0, _v1.jsx)(_v93.Spinner, {
            size: "md"
          })
        })]
      });
    },
    _v160 = (_v0, _v1) => ({
      uri: _v0.uri,
      kind: _v0.kind,
      parentFolderId: _v0.parentFolderId ?? _v1
    }),
    _v161 = ({
      isOpen: _v0,
      onClose: _v1,
      userId: _v2,
      onMoveSuccess: _v3
    }) => {
      let {
          data: _v4,
          error: _v5,
          isLoading: _v6
        } = (0, _v146.useGetUserFoldersPrivateToMe)(() => _v0 ? {
          where: {
            ownerId: _v2
          },
          select: ["uri"]
        } : null),
        _v7 = _v156(_v4?.uri),
        _v8 = (0, _v5.useMemo)(() => [{
          type: "last_user_action_event_date",
          direction: "desc",
          label: (0, _v23.translate)({
            singular: "Last added",
            dictionary: {
              es: {
                singular: "Último agregado"
              },
              "de-DE": {
                singular: "Zuletzt hinzugefügt"
              },
              "fr-FR": {
                singular: "Ajoutées en dernier"
              },
              "ja-JP": {
                singular: "最終追加日"
              },
              "ko-KR": {
                singular: "마지막 추가"
              },
              "pt-BR": {
                singular: "Adicionado por último"
              },
              "zh-CN": {
                singular: "最后添加"
              }
            }
          })
        }, {
          type: "alphabetical",
          direction: "asc",
          label: (0, _v23.translate)({
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
        }] = (0, _v51.useMoveItem)(),
        _v23 = (0, _v52.useNotification)(),
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
                _v0.canMove && (_v2 ? _v1.set(_v0.uri, _v160(_v0, _v7)) : _v1.delete(_v0.uri));
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
              _v2 ? _v1.set(_v0.uri, _v160(_v0, _v7)) : _v1.delete(_v0.uri);
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
              content: (0, _v23.translate)({
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
            content: _v0 ?? (0, _v23.translate)({
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
      return (0, _v1.jsxs)(_v135.Modal, {
        isOpen: _v0,
        onClose: _v26,
        isCentered: !0,
        preserveScrollBarGap: !0,
        children: [(0, _v1.jsx)(_v141.ModalOverlay, {}), (0, _v1.jsxs)(_v138.ModalContent, {
          maxWidth: (0, _v92.rem)(640),
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: {
            base: "auto",
            md: (0, _v92.rem)(680)
          },
          maxHeight: `calc(100vh - ${(0, _v92.rem)(48)})`,
          children: [(0, _v1.jsx)(_v140.ModalHeader, {
            marginBottom: "sm",
            children: (0, _v23.translate)({
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
          }), (0, _v1.jsx)(_v137.ModalCloseButton, {}), (0, _v1.jsxs)(_v86.Box, {
            flexShrink: 0,
            paddingX: "lg",
            paddingBottom: "md",
            borderBottomWidth: "1px",
            borderColor: "stroke",
            children: [(0, _v1.jsxs)(_v130.AlertRoot, {
              variant: "info",
              size: "md",
              borderRadius: "md",
              marginTop: "sm",
              marginBottom: "lg",
              alignItems: "flex-start",
              gap: "sm",
              children: [(0, _v1.jsx)(_v86.Box, {
                flexShrink: 0,
                display: "flex",
                mt: (0, _v92.rem)(2),
                color: "status-info-primary",
                children: (0, _v1.jsx)(_v143.InfoCircleFilled, {
                  width: (0, _v92.rem)(20),
                  height: (0, _v92.rem)(20)
                })
              }), (0, _v1.jsx)(_v129.AlertDescription, {
                children: (0, _v23.translate)({
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
              children: [(0, _v1.jsxs)(_v133.InputGroup, {
                flex: "1",
                children: [(0, _v1.jsx)(_v134.InputLeftElement, {
                  children: (0, _v1.jsx)(_v144.SearchMagnifier, {
                    width: (0, _v92.rem)(16),
                    height: (0, _v92.rem)(16)
                  })
                }), (0, _v1.jsx)(_v132.Input, {
                  value: _v9,
                  onChange: _v0 => _v10(_v0.target.value),
                  placeholder: (0, _v23.translate)({
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
              }), (0, _v1.jsxs)(_v116.Menu, {
                children: [(0, _v1.jsx)(_v117.MenuButton, {
                  as: _v110.Button,
                  variant: "tertiary",
                  size: "sm",
                  display: {
                    base: "none",
                    md: "inline-flex"
                  },
                  leftIcon: (0, _v1.jsx)(_v145.SortSmall, {
                    width: (0, _v92.rem)(16),
                    height: (0, _v92.rem)(16)
                  }),
                  rightIcon: (0, _v1.jsx)(_v142.ChevronDownSmall, {
                    width: (0, _v92.rem)(16),
                    height: (0, _v92.rem)(16)
                  }),
                  children: _v24.label
                }), (0, _v1.jsx)(_v119.MenuList, {
                  children: _v8.map((_v0, _v1) => (0, _v1.jsx)(_v118.MenuItem, {
                    onClick: () => _v12(_v1),
                    children: _v0.label
                  }, _v0.type))
                })]
              })]
            }), (0, _v1.jsxs)(_v6.Flex, {
              alignItems: "center",
              justifyContent: "space-between",
              children: [(0, _v1.jsx)(_v131.Checkbox, {
                size: "md",
                isChecked: _v29,
                isIndeterminate: !_v29 && _v30,
                onChange: _v31,
                isDisabled: 0 === _v27.length,
                children: (0, _v23.translate)({
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
                children: (0, _v1.jsxs)(_v116.Menu, {
                  children: [(0, _v1.jsx)(_v117.MenuButton, {
                    as: _v110.Button,
                    variant: "tertiary",
                    size: "sm",
                    display: {
                      base: "inline-flex",
                      md: "none"
                    },
                    leftIcon: (0, _v1.jsx)(_v145.SortSmall, {
                      width: (0, _v92.rem)(16),
                      height: (0, _v92.rem)(16)
                    }),
                    rightIcon: (0, _v1.jsx)(_v142.ChevronDownSmall, {
                      width: (0, _v92.rem)(16),
                      height: (0, _v92.rem)(16)
                    }),
                    children: _v24.label
                  }), (0, _v1.jsx)(_v119.MenuList, {
                    children: _v8.map((_v0, _v1) => (0, _v1.jsx)(_v118.MenuItem, {
                      onClick: () => _v12(_v1),
                      children: _v0.label
                    }, _v0.type))
                  })]
                })
              })]
            })]
          }), (0, _v1.jsx)(_v136.ModalBody, {
            overflowY: "auto",
            flex: "1",
            minHeight: (0, _v92.rem)(120),
            children: void 0 === _v7 ? _v6 ? (0, _v1.jsx)(_v6.Flex, {
              justifyContent: "center",
              paddingY: "2xl",
              children: (0, _v1.jsx)(_v93.Spinner, {
                size: "lg"
              })
            }) : (0, _v1.jsx)(_v6.Flex, {
              justifyContent: "center",
              paddingY: "2xl",
              children: (0, _v1.jsx)(_v94.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: _v5 ? (0, _v23.translate)({
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
                }) : (0, _v23.translate)({
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
            }) : (0, _v1.jsx)(_v159, {
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
          }), (0, _v1.jsxs)(_v139.ModalFooter, {
            flexDirection: "column",
            alignItems: "stretch",
            gap: "md",
            children: [(0, _v1.jsxs)(_v94.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: [(0, _v1.jsx)(_v86.Box, {
                as: "span",
                fontWeight: "bold",
                color: "text-primary",
                children: (0, _v23.translate)({
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
              }), " ", (0, _v23.translate)({
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
            }), _v33 && (0, _v1.jsx)(_v94.Text, {
              variant: "body-sm",
              color: "text-error",
              children: (0, _v23.translate)({
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
              children: [(0, _v1.jsx)(_v110.Button, {
                variant: "tertiary",
                onClick: _v26,
                isDisabled: _v22,
                width: {
                  base: "100%",
                  md: "auto"
                },
                children: (0, _v23.translate)({
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
              }), (0, _v1.jsx)(_v110.Button, {
                variant: "primary",
                onClick: _v34,
                isDisabled: 0 === _v32 || _v22 || _v33,
                isLoading: _v22,
                width: {
                  base: "100%",
                  md: "auto"
                },
                children: (0, _v23.translate)({
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
  var _v162 = _v0.i(0);
  let _v163 = () => {
    let {
        setModalContextState: _v0
      } = (0, _v5.useContext)(_v102),
      _v1 = (0, _v5.useContext)(_v100.ViewerContext),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      {
        capabilities: _v3
      } = (0, _v19.useCapability)(["hasContentSpaceEnabled"], _v2),
      {
        trackLibraryNewFolderClicked: _v4
      } = (0, _v30.useLibraryTracking)();
    return (0, _v1.jsx)(_v162.NewFolderButton, {
      onClick: () => {
        _v4({
          libraryType: (0, _v31.deriveLibraryType)({
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
  var _v164 = _v0.i(0),
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
    _v189 = _v0.i(0);
  let _v190 = "header",
    _v191 = "video card",
    _v192 = ({
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
      let _v17 = (0, _v171.useIsBokeh)(),
        _v18 = (0, _v5.useContext)(_v100.ViewerContext),
        {
          notifyItemMoveSuccess: _v19,
          notifyItemMoveToWorkspaceSuccess: _v20
        } = (0, _v52.useNotifications)(),
        _v21 = (0, _v39.useAnalyticsEvent)(),
        _v22 = _v173.BPAnalyticsV2.useContentManagamentHoverEvent(),
        _v23 = (0, _v176.usePageName)(),
        {
          getDisplayDateWithTime: _v24
        } = (0, _v183.useFormatDateTime)(),
        _v25 = (0, _v187.useVideoPrivacyBadgeHandlers)({
          surface: "card"
        }),
        _v26 = _v18?.teamUser?.ownerId ?? _v18?.user?.id,
        _v27 = (0, _v97.useTeamUploadClipProperties)(_v26),
        {
          capabilities: _v28
        } = (0, _v19.useCapability)(["canSeeUpsellModalOnShare", "hasVideoReviewPageDemo", "hasMultipleReviewLinks", "hasContentSpaceEnabled"], _v26),
        _v29 = (0, _v31.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v28.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v30
        } = (0, _v30.useLibraryTracking)(),
        _v31 = !!_v28.canSeeUpsellModalOnShare,
        _v32 = !!_v28.hasVideoReviewPageDemo,
        _v33 = !!_v28.hasMultipleReviewLinks;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [!!_v3?.length && _v3.map((_v0, _v1) => {
          if (_v0.marketingVideo) return (0, _v1.jsx)(_v186.MarketingVideoCard, {
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
              _v6 = (0, _v179.getTimestampBySort)(_v15.type, _v0.lastUserActionEventDate ?? "", _v0.createdTime),
              {
                videoPrivacy: _v7,
                variant: _v8,
                onPrivacyBadgeClick: _v9,
                openLockedVideoPaywall: _v10,
                tooltipLabel: _v11
              } = _v25(_v0);
            return (0, _v1.jsx)(_v167.AnalyticsEventProvider, {
              eventData: {
                location: _v191,
                video_privacy: _v0.privacy?.view,
                video_id: String((0, _v175.idFromUri)(_v0.uri)),
                video_app_id: (0, _v175.idFromUri)(_v0.app?.uri) ? String((0, _v175.idFromUri)(_v0.app?.uri)) : null,
                is_video_password_protected: !!_v0.password,
                video_embed_privacy: _v0.privacy?.embed,
                team_owner_id: String((0, _v175.idFromUri)(_v0.user.uri)),
                team_subscription_type: _v0.user.account
              },
              children: (0, _v1.jsx)(_v177.FolderItemDragWrapper, {
                type: _v166.ITEM_TYPES.ROOT_VIDEO,
                uri: _v0.uri,
                parentFolderUri: "root",
                thumbnail: _v0.pictures.sizes[1].link,
                canDrag: _v4,
                isSelected: !!_v1,
                selectedItemURIs: _v12,
                onDrop: _v1,
                setIsUploadDropzoneEnabled: _v14,
                children: (0, _v1.jsx)(_v185.VideoCard, {
                  title: _v0.name,
                  subtitle: _v24(_v6),
                  href: _v5 ?? "",
                  isDefaultPicture: _v0.pictures?.defaultPicture,
                  thumbnailSrc: _v0.pictures?.sizes[3].link,
                  avatarSrc: _v0.uploader?.pictures?.sizes[1].link,
                  avatarName: _v0.uploader?.name,
                  tagText: (0, _v172.secondsToDisplay)(_v0.duration),
                  isSelectable: _v0.isSelectable,
                  titleStyles: {
                    maxWidth: _v57.CONTENT_CARD_TITLE_MAX_WIDTH
                  },
                  isSelected: _v1,
                  configUrl: _v0.configUrl ?? "",
                  clipId: (0, _v175.idFromUri)(_v0?.uri),
                  pageName: _v23,
                  isColdStorage: _v3,
                  isManagedStorage: !0 === _v0.countsTowardManagedStorage,
                  lockedTooltipLabel: _v188.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
                  onLockedClick: _v3 ? _v10 : void 0,
                  onToggleSelected: () => {
                    _v21((0, _v81.genericClick)({
                      copy: `${_v12.size}`,
                      feature: _v81.AnalyticsFeatures.VIDEO_LIBRARY,
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
                  hoverActions: (0, _v1.jsx)(_v182.HoverActions, {
                    type: "video",
                    entity: _v0,
                    canShare: !!((_v0.metadata?.interactions?.invite?.uri || _v31) && !_v0.metadata?.hasMandatoryEmailCapture),
                    hasMoreInfo: !0,
                    onMoreInfo: () => _v8(_v0.uri)
                  }),
                  actionsMenu: (0, _v1.jsx)(_v180.VideoMenu, {
                    video: _v0,
                    feature: _v81.AnalyticsFeatures.VIDEO_LIBRARY,
                    enableOverflowMenuExperiment: !0,
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
                          _v1 = "root" === _v0 ? "/library" : (0, _v78.getFolderPageUriFromApiUri)(_v0.uri);
                        _v20(_v1.name, {
                          label: _v0,
                          workspaceName: _v3
                        }, () => {
                          _v18 && (0, _v164.switchTeam)(_v2, _v18.xsrft).finally(() => {
                            window.location.href = _v1;
                          });
                        });
                      } else "root" !== _v0 && _v19(_v1.name, {
                        label: _v0.name,
                        link: (0, _v78.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    },
                    onDelete: () => {
                      _v0(_v0.uri, _v1, _v3), _v11?.(_v0.uri, "video"), _v21(_v81.VideoActionAnalytics.clickDeleteVideo({
                        live_event_id: null,
                        origin_folder_id: null,
                        origin_type: null,
                        is_my_videos: null,
                        location: _v191
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
                    _v169.BigPictureClient.sendEvent(new _v169.Event("vimeo.click_video_card", 2, {
                      path: window.location.href,
                      entry_page: "team-library",
                      page: "team-library",
                      location: _v191,
                      video_id: String((0, _v175.idFromUri)(_v0.uri)),
                      video_privacy: _v0.privacy?.view,
                      video_embed_privacy: _v0.privacy?.embed,
                      is_preset_applied: null,
                      is_video_password_protected: !!_v0.password,
                      video_app_id: (0, _v175.idFromUri)(_v0.app?.uri) ? String((0, _v175.idFromUri)(_v0.app?.uri)) : null,
                      team_owner_id: String((0, _v175.idFromUri)(_v0.user.uri)),
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
              _v2 = _v15.type === _v57.SORT_OPTION.CREATED ? _v0.folder.createdTime : _v0.folder.lastUserActionEventDate ?? _v0.folder.createdTime;
            return (0, _v1.jsx)(_v178.FolderDropWrapper, {
              dropTarget: _v0.folder,
              dropTargetType: _v166.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v166.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: null != _v26 ? {
                targetUserId: _v26,
                folderId: _v1,
                folderName: _v0.folder.name,
                uploadClipProperties: _v27
              } : void 0,
              children: _v17 ? (0, _v1.jsx)(_v184.DroppableFolderCard, {
                title: _v0.folder?.name,
                subtitle: _v24(_v2),
                folderId: _v1,
                folderOwnerId: _v0,
                tagText: (0, _v189.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
                titleStyles: {
                  maxWidth: _v57.CONTENT_CARD_TITLE_MAX_WIDTH
                },
                href: (0, _v78.getFolderPageUriFromApiUri)(_v0.folder.uri),
                backgroundColor: _v0.folder.settings?.color,
                hoverActions: (0, _v1.jsx)(_v182.HoverActions, {
                  type: "folder",
                  entity: _v0.folder
                }),
                pageName: _v23,
                actionsMenu: (0, _v1.jsx)(_v181.FolderMenu, {
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
                  _v169.BigPictureClient.sendEvent(new _v169.Event("vimeo.click_folder_card", 3, {
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
              }) : (0, _v1.jsx)(_v174.FolderCard, {
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
        }), _v16 && (0, _v1.jsx)(_v170.LoadingCardsGrid, {})]
      });
    };
  function _v193({
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
    return (0, _v1.jsx)(_v167.AnalyticsEventProvider, {
      eventData: {
        location: "center",
        product: "Video Library",
        position_column: null
      },
      children: (0, _v1.jsx)(_v168.ContentGrid, {
        children: (0, _v1.jsx)(_v168.ContentGrid.Body, {
          children: (0, _v1.jsx)(_v192, {
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
  var _v194 = _v0.i(0),
    _v195 = _v0.i(0),
    _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0),
    _v199 = _v0.i(0),
    _v200 = _v0.i(0),
    _v201 = _v0.i(0),
    _v202 = _v0.i(0),
    _v203 = _v0.i(0);
  let _v204 = ["video.allowedPrivacies", "video.app.uri", "video.canMoveToProject", "video.configUrl", "video.contentRatingClass", "video.countsTowardManagedStorage", "video.createdTime", "video.customMetadata", "video.duration", "video.download.link", "video.download.type", "video.download.width", "video.download.height", "video.download.quality", "video.download.size", "video.download.publicName", "video.download.sizeShort", "video.embed.html", "video.embed.sentimentWidgets", "video.filesSize", "video.isColdStorage", "video.isColdPrivacyRestricted", "video.lastUserActionEventDate", "video.link", "video.manageLink", "video.metadata.canBeReplaced", "video.metadata.hasMandatoryEmailCapture", "video.metadata.interactions.edit.uri", "video.metadata.interactions.delete.uri", "video.metadata.interactions.invite.uri", "video.metadata.interactions.legalHold.uri", "video.modifiedTime", "video.name", "video.pictures.defaultPicture", "video.pictures.uri", "video.pictures.sizes", "video.password", "video.privacy.view", "video.privacy.embed", "video.privacy.download", "video.privacy.add", "video.privacy.comments", "video.privacy.originalView", "video.regionalPrivacies", "video.releaseTime", "video.reviewLinks.uri", "video.reviewLinks.expiresOn", "video.reviewPage", "video.status", "video.type", "video.uploader.name", "video.uploader.pictures", "video.uri", "video.user.account", "video.user.uri", "video.user.uploadQuota.lifetime", "video.user.uploadQuota.periodic", "video.user.uploadQuota.space.unit", "folder.createdTime", "folder.isPrivateToUser", "folder.lastUserActionEventDate", "folder.name", "folder.uri", "folder.metadata.connections.items.uri", "folder.metadata.connections.items.total", "folder.metadata.connections.folders.total", "folder.settings", "folder.metadata.interactions.edit", "folder.metadata.interactions.editSettings", "folder.metadata.interactions.delete", "folder.metadata.interactions.invite", "folder.metadata.interactions.moveVideo", "folder.slackIncomingWebhooksId", "type"],
    _v205 = ({
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
        } = (0, _v52.useNotifications)(),
        _v20 = (0, _v39.useAnalyticsEvent)(),
        _v21 = (0, _v176.usePageName)(),
        {
          getDisplayDateWithTime: _v22
        } = (0, _v183.useFormatDateTime)(),
        _v23 = (0, _v5.useContext)(_v100.ViewerContext),
        {
          settings: _v24
        } = (0, _v26.useOrionSettings)(),
        _v25 = (0, _v187.useVideoPrivacyBadgeHandlers)({
          surface: "list"
        }),
        _v26 = _v23?.teamUser?.ownerId ?? _v23?.user?.id,
        {
          capabilities: _v27
        } = (0, _v19.useCapability)(["hasContentSpaceEnabled"], _v26),
        _v28 = (0, _v31.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v27.hasContentSpaceEnabled
        }),
        {
          trackLibraryFolderOpened: _v29
        } = (0, _v30.useLibraryTracking)(),
        _v30 = (0, _v97.useTeamUploadClipProperties)(_v26);
      return (0, _v1.jsx)(_v86.Box, {
        children: _v5?.length ? _v5?.map((_v0, _v1) => {
          if (_v0.marketingVideo) return (0, _v1.jsx)(_v186.MarketingVideoCard, {
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
              _v8 = _v17.type === _v57.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v9 = _v7 && _v7.totalSize > 0 ? (0, _v196.bytesToSize)(_v7.totalSize, 1) : "0MB",
              _v10 = (0, _v201.getFileSizeTooltip)(_v7?.fileSizeType),
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
            return (0, _v1.jsx)(_v202.DraggableListVideo, {
              uri: _v6,
              title: _v3,
              clipId: (0, _v175.idFromUri)(_v6),
              canRename: !0,
              thumbnail: (0, _v1.jsx)(_v195.VideoThumbnail, {
                alt: _v3,
                badgeText: (0, _v172.secondsToDisplay)(_v1),
                isDefaultPicture: _v4?.defaultPicture,
                thumbnailSrc: _v11,
                isLocked: _v12
              }),
              thumbnailSrc: _v11,
              timestamp: _v22(_v8),
              privacy: _v15 ? (0, _v1.jsx)(_v194.ContentCard.VideoPrivacyBadge, {
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
              lockedTooltipLabel: _v188.STORAGE_LIMIT_LOCKED_VIDEO_TOOLTIP_LABEL,
              onLockedClick: _v12 ? _v17 : void 0,
              pageName: _v21,
              onClick: () => {
                _v169.BigPictureClient.sendEvent(new _v169.Event("vimeo.click_video_card", 2, {
                  path: window.location.href,
                  entry_page: "team-library",
                  page: "team-library",
                  location: _v81.AnalyticsLocations.VIDEO_LIST,
                  video_id: String((0, _v175.idFromUri)(_v0.uri)),
                  video_privacy: _v0.privacy?.view,
                  video_embed_privacy: _v0.privacy?.embed,
                  is_preset_applied: null,
                  is_video_password_protected: !!_v0.password,
                  video_app_id: (0, _v175.idFromUri)(_v0.app?.uri) ? String((0, _v175.idFromUri)(_v0.app?.uri)) : null,
                  team_owner_id: String((0, _v175.idFromUri)(_v0.user.uri)),
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
                _v20((0, _v81.genericClick)({
                  copy: `${_v12.size}`,
                  feature: _v81.AnalyticsFeatures.VIDEO_LIBRARY,
                  location: _v81.AnalyticsLocations.VIDEO_LIST,
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
              hoverActions: (0, _v1.jsx)(_v199.ListViewHoverActionsContainer, {
                disableHoverBackground: _v0.isColdStorage,
                children: (0, _v1.jsx)(_v197.TopRightDecoration, {
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
              menuButton: (0, _v1.jsx)(_v180.VideoMenu, {
                video: _v0,
                feature: _v81.AnalyticsFeatures.VIDEO_LIBRARY,
                enableOverflowMenuExperiment: !0,
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
                      _v1 = "root" === _v0 ? "/library" : (0, _v78.getFolderPageUriFromApiUri)(_v0.uri);
                    _v19(_v1.name, {
                      label: _v0,
                      workspaceName: _v3
                    }, () => {
                      _v23 && (0, _v164.switchTeam)(_v2, _v23.xsrft).finally(() => {
                        window.location.href = _v1;
                      });
                    });
                  } else "root" !== _v0 && _v18(_v1.name, {
                    label: _v0.name,
                    link: (0, _v78.getFolderPageUriFromApiUri)(_v0.uri)
                  });
                },
                onDelete: () => {
                  _v0(_v0.uri, _v1, _v5), _v11?.(_v0.uri, "video"), _v20(_v81.VideoActionAnalytics.clickDeleteVideo({
                    live_event_id: null,
                    origin_folder_id: null,
                    origin_type: null,
                    is_my_videos: null,
                    location: _v81.AnalyticsLocations.VIDEO_LIST
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
              type: _v166.ITEM_TYPES.ROOT_VIDEO,
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
              _v1 = _v17.type === _v57.SORT_OPTION.CREATED ? _v0.createdTime : _v0.lastUserActionEventDate || "",
              _v2 = parseInt(_v0.uri.split("/")?.[2]),
              _v3 = parseInt(_v0.folder.uri.split("/")[4]);
            return (0, _v1.jsx)(_v203.DroppableListFolder, {
              dropTarget: _v0,
              dropTargetType: _v166.DROP_TARGET_TYPES.FOLDER_CARD,
              allowedDropEffect: _v166.ALLOWED_DROP_EFFECTS.MOVE,
              dropFileForUploadConfig: _v24.enable_list_view_folder_upload && null != _v26 ? {
                targetUserId: _v26,
                folderId: _v3,
                folderName: _v0.name,
                uploadClipProperties: _v30
              } : void 0,
              isLoading: !!_v7 && _v7.has(_v0.uri),
              href: (0, _v78.getFolderPageUriFromApiUri)(_v0.uri),
              title: _v0.name,
              thumbnail: (0, _v1.jsx)(_v200.FolderRowThumbnail, {
                backgroundColor: _v0.settings?.color
              }),
              subTitle: (0, _v189.numItemsText)(_v0.folder.metadata?.connections?.items?.total),
              timestamp: _v22(_v1),
              privacy: _v15 ? "—" : "",
              shouldShowFileSize: _v16,
              pageName: _v21,
              fileSize: "—",
              folderId: _v3,
              canRename: !0,
              folderOwnerId: _v2,
              hoverActions: (0, _v1.jsx)(_v199.ListViewHoverActionsContainer, {
                children: (0, _v1.jsx)(_v198.FolderTopRightDecoration, {
                  folder: _v0,
                  buttonVariant: "minimal",
                  flexDirection: "row",
                  location: "video_list"
                })
              }),
              menuButton: (0, _v1.jsx)(_v181.FolderMenu, {
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
                _v169.BigPictureClient.sendEvent(new _v169.Event("vimeo.click_folder_card", 3, {
                  path: window.location.href,
                  entry_page: "mvv",
                  page: "mvv",
                  location: _v81.AnalyticsLocations.FOLDER_LIST,
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
        }) : (0, _v1.jsx)(_v6.Flex, {
          direction: "column",
          width: "100%",
          gap: "sm",
          children: (0, _v1.jsx)(_v88.LoadingStateList, {})
        })
      });
    };
  function _v206({
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
    return (0, _v1.jsx)(_v205, {
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
  function _v207({
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
    let _v22 = (0, _v5.useContext)(_v100.ViewerContext),
      _v23 = _v22?.teamUser?.ownerId ?? _v22?.user?.id,
      _v24 = (0, _v97.useTeamUploadClipProperties)(_v23),
      _v25 = _v21 ? (0, _v23.translate)({
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
      }) : (0, _v23.translate)({
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
      } = (0, _v52.useNotifications)(),
      {
        revalidateTopLevelFolders: _v29,
        revalidateFolderItems: _v30,
        revalidateRootItems: _v31
      } = (0, _v50.useRevalidate)(),
      _v32 = (_v0, _v1, _v2, _v3) => {
        _v29(), _v1[0].parentFolder?.uri ? _v30(_v1[0]?.parentFolder?.uri ?? "") : _v31(), "root" !== _v0 && _v30(_v0.uri);
        let _v4 = "root" === _v0 ? _v25 : _v0.name,
          _v5 = "root" === _v0 ? "/library" : (0, _v78.getFolderPageUriFromApiUri)(_v0.uri);
        _v2 && _v3 ? _v27(_v1[0].name, {
          label: _v4,
          workspaceName: _v3
        }, () => {
          _v22 && (0, _v164.switchTeam)(_v2, _v22.xsrft).finally(() => {
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
      } = (0, _v165.useDropFolder)({
        dropTargetType: _v166.DROP_TARGET_TYPES.FOLDER_MENU_ITEM,
        dropTarget: void 0,
        allowedDropEffect: null,
        dropFileForUploadConfig: null != _v23 && _v0 ? {
          targetUserId: _v23,
          folderId: void 0,
          folderName: _v25,
          uploadClipProperties: _v24
        } : void 0
      });
    return (0, _v1.jsx)(_v86.Box, {
      height: "100%",
      width: "100%",
      ref: _v34,
      backgroundColor: _v33 ? "rgba(23, 213, 255, 0.06)" : "transparent",
      borderColor: _v33 ? "vimeoBlue.500" : "transparent",
      borderRadius: "lg",
      borderWidth: ".125rem",
      transition: "background-color 0.2s ease, border-color 0.2s ease",
      children: _v19 === _v57.LAYOUT.GRID ? (0, _v1.jsx)(_v193, {
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
      }) : (0, _v1.jsx)(_v206, {
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
  let _v208 = ["video", "folder"];
  function _v209({
    playerAssetUrls: _v0,
    viewer: _v1
  }) {
    let {
        step: _v2,
        handleDismiss: _v3,
        handleCtaClick: _v4,
        handleErrorClose: _v5
      } = (0, _v76.useViewerAiUpsellModal)("library"),
      [_v6, _v7] = (0, _v5.useState)(null),
      _v8 = (0, _v8.useToast)(),
      [_v9, _v10] = (0, _v55.useSortPreference)(_v57.DEFAULT_SORT, _v57.VL_SORT_LOCAL_STORAGE_KEY),
      [_v11, _v12] = (0, _v56.useDateDisplayPreference)(_v57.DEFAULT_DATE_DISPLAY, _v57.VL_DATE_LOCAL_STORAGE_KEY),
      [_v13, _v14] = (0, _v5.useState)(null),
      [_v15, _v16] = (0, _v5.useState)(!1),
      _v17 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v18 = (0, _v15.useLibraryMergeAnnouncement)("library"),
      _v19 = "becoming" === _v18.active,
      [_v20, _v21] = (0, _v5.useState)(!1),
      _v22 = (0, _v5.useRef)(null),
      [_v23, _v24] = (0, _v5.useState)(!1),
      [_v25, _v26] = (0, _v5.useState)(!1),
      [_v27, _v28] = (0, _v5.useState)(!1),
      _v29 = _v17 && _v1 ? {
        apiUrl: _v1.apiUrl,
        jwt: _v1.jwt,
        ownerId: _v17
      } : void 0,
      _v30 = (0, _v39.useAnalyticsEvent)(),
      {
        trackLibraryPageDisplayed: _v31,
        trackLibraryViewChanged: _v32,
        trackLibraryFilterApplied: _v33,
        trackLibrarySortChanged: _v34
      } = (0, _v30.useLibraryTracking)(),
      {
        trackMergeLibrariesClicked: _v35
      } = (0, _v29.useContentSpaceTracking)(),
      _v36 = (0, _v4.useRouter)(),
      _v37 = {
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
        capabilities: _v38,
        ready: _v39
      } = (0, _v19.useCapability)(["canCreateRootFolders", "canAddTeamMembers", "canSeeUpsellModalOnShare", "privateModeOff", "canManageTeamCollections", "hasVideoReviewPageDemo", "hasEnterprise", "regionalDeliveryPublishContentToChina", "hasMultipleReviewLinks", "hasTeamPrivacy", "coldStorageClips", "canPerformBulkTranslations", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "hasVideoLibraryEmbeddableUploader"], `/users/${_v17}`),
      {
        loading: _v40,
        contentSpaceEnabled: _v41,
        isTeamGateEnabled: _v42,
        isSoleTeamOwner: _v43
      } = (0, _v17.useMergeLibrariesVisible)(`/users/${_v17}`),
      {
        inProgress: _v44
      } = (0, _v16.useLibraryMigrationInProgress)(_v17),
      {
        listingParams: _v45
      } = (0, _v18.usePrivateToMeFolderListingParams)(`/users/${_v17}`),
      _v46 = !!_v38.canGenerateClipTextTranslation,
      _v47 = (!!_v38.canGenerateClipTranslation || _v46) && !!_v38.canPerformBulkTranslations,
      {
        revalidateRootItems: _v48,
        revalidateTopLevelFolders: _v49
      } = (0, _v50.useRevalidate)(),
      {
        setLoadingSideNavFolderURIs: _v50
      } = (0, _v5.useContext)(_v53.VideoLibraryLayoutContext),
      _v51 = (0, _v52.useNotification)(),
      {
        notifyItemMoveSuccess: _v52
      } = (0, _v52.useNotifications)(),
      _v53 = (0, _v5.useRef)(() => void 0),
      {
        openCopyVideoModal: _v54,
        copyVideoModal: _v55
      } = (0, _v73.useCopyVideoFlow)({
        onAfterCopySuccess: (_v0, _v1) => _v53.current(_v1.uri, _v0)
      }),
      _v56 = _v1?.teamUser?.plainTextPermissionLevel,
      _v57 = _v17 === _v1?.user?.id,
      _v58 = _v57 || "Admin" === _v56,
      _v59 = (0, _v36.useGracePeriodBillingUi)({
        orionFlag: "enable_library_grace_period_notifications",
        layout: {
          type: "library"
        }
      }),
      {
        hasColdStorage: _v60
      } = (0, _v84.useUserHasColdStorageVideos)({
        forceEligible: _v59.isStorageSuspended
      }),
      _v61 = !!_v38.coldStorageClips && _v58 || _v60 && _v58,
      {
        settings: _v62
      } = (0, _v26.useOrionSettings)(),
      _v63 = _v62?.cold_privacy_enabled ?? !1,
      {
        hasColdPrivacy: _v64,
        isLoading: _v65
      } = (0, _v83.useUserHasColdPrivacyVideos)({
        enabled: _v63 || _v60
      }),
      _v66 = _v63 && _v64,
      _v67 = (0, _v47.useContentTypeFilter)([..._v208]),
      _v68 = !(0, _v80.isContentTypeSelectionDefault)(_v208, _v67.value) && !(0, _v80.doesSelectionIncludeVideos)(_v208, _v67.value),
      _v69 = !(0, _v80.isContentTypeSelectionDefault)(_v208, _v67.draft) && !(0, _v80.doesSelectionIncludeVideos)(_v208, _v67.draft),
      _v70 = (0, _v49.useVideoAvailabilityFilter)(),
      _v71 = (0, _v46.useClipPrivacyFilter)(["unlisted", "password", "hide_from_vimeo", "team", "private", "public", ...(_v66 ? ["cold_privacy"] : [])], !!_v38?.hasTeamPrivacy),
      _v72 = [..._v71.value],
      _v73 = _v71.value.has("cold_privacy"),
      _v74 = (0, _v80.doesSelectionIncludeVideos)(_v208, _v67.value) && _v70.value.has("restricted") !== _v70.value.has("available") || _v73,
      _v75 = (0, _v48.useCreatedByFilter)(),
      _v76 = !!_v71.isFilterActive || !!_v75.isFilterActive || !!_v70.isFilterActive,
      _v77 = !!_v71.isFilterActive || !!_v75.isFilterActive,
      _v78 = !!_v71.isDraftActive || !!_v75.isDraftActive,
      _v79 = !!_v71.isFilterActive || !!_v75.isFilterActive,
      _v80 = !!_v71.isDraftActive || !!_v75.isDraftActive,
      [_v81, _v82] = (0, _v5.useState)(!0),
      [_v83, _v84] = (0, _v54.useLayoutPreference)(),
      _v85 = !!_v38.canCreateRootFolders,
      _v86 = !!(_v81 && _v58),
      _v87 = _v62?.enable_new_library_drag_and_drop_upload ?? !1,
      _v88 = _v60 || _v66,
      _v89 = _v86 && !_v87,
      _v90 = !!_v38.hasEnterprise,
      _v91 = !_v39 || _v40 ? "" : _v41 ? (0, _v23.translate)({
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
      }) : (0, _v23.translate)({
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
    (0, _v38.useUploadLifecycle)((_v0, _v1) => {
      _v1.clipId && _v48();
    }, []), (0, _v25.useOttRedirect)({
      toast: _v8,
      config: {
        message: (0, _v23.translate)({
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
    let _v92 = (0, _v20.useIsMobile)(),
      _v93 = !!_v41,
      _v94 = !_v58 && _v93,
      {
        data: _v95,
        mutate: _v96,
        setSize: _v97,
        size: _v98
      } = (0, _v22.useGetUserFoldersRootInfinite)(() => {
        let _v0 = _v71.isFilterActive && !_v74 ? _v72.join(",") : void 0,
          _v1 = _v75.isFilterActive ? [..._v75.value].map(_v0 => _v0.userId) : void 0,
          _v2 = _v1?.length ? _v1.join(",") : void 0,
          _v3 = (0, _v80.getContentTypeApiFilterParam)(_v208, _v67.value);
        return _v17 && _v39 && !_v40 ? {
          where: {
            userId: _v17
          },
          select: _v204,
          query: {
            direction: _v9.direction,
            excludePersonalTeamFolder: _v41,
            flattenPrivateToMe: _v45.flattenPrivateToMe,
            excludeSharedVideos: _v94,
            includeColdStorageClips: _v61,
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
      {
        data: _v99
      } = (0, _v22.useGetUserFoldersRoot)(() => _v17 && _v39 && !_v40 ? {
        where: {
          userId: _v17
        },
        select: ["type"],
        query: {
          filter: "video",
          excludePersonalTeamFolder: _v41,
          flattenPrivateToMe: _v45.flattenPrivateToMe,
          excludeSharedVideos: _v94,
          includeColdStorageClips: _v61,
          perPage: 1
        }
      } : null, {
        revalidateOnFocus: !1
      }),
      _v100 = _v99?.total ?? 0,
      _v101 = (0, _v5.useMemo)(() => _v95 ? _v95.flatMap(_v0 => {
        if (!_v0) return [];
        let _v1 = _v0.data.filter(_v0 => (0, _v79.passesLibraryItemClientFilters)({
          clipPrivacyFilter: _v71.value,
          contentTypeOptions: _v208,
          contentTypeSelection: _v67.value,
          item: _v0,
          shouldUseClientPipeline: _v74,
          videoAvailabilityFilter: _v70.value
        }));
        return [{
          ..._v0,
          data: _v1
        }];
      }) : _v95, [_v71.value, _v67.value, _v95, _v74, _v70.value]),
      _v102 = (0, _v5.useCallback)(({
        name: _v0,
        settings: {
          color: _v1
        },
        uri: _v2
      }) => {
        _v96(_v0 => _v0?.map(_v0 => ({
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
      }, [_v96]),
      _v103 = (0, _v5.useCallback)((_v0, _v1) => {
        _v96(_v0 => _v0 ? _v0.map(_v0 => ({
          ..._v0,
          data: _v0.data.map(_v0 => _v0.video?.uri === _v0 ? {
            ..._v0,
            video: _v1(_v0.video)
          } : _v0)
        })) : _v0, !1);
      }, [_v96]),
      _v104 = (0, _v5.useCallback)((_v0, _v1) => {
        let _v2 = !1;
        _v96(_v0 => {
          let _v1 = (0, _v77.insertOptimisticVideoCopy)(_v0, _v0, _v1);
          return _v2 = _v1.inserted, _v1.pages;
        }, !1), _v2 || _v48();
      }, [_v96, _v48]);
    (0, _v5.useEffect)(() => {
      _v53.current = _v104;
    }, [_v104]);
    let _v105 = (0, _v5.useCallback)((_v0, _v1) => {
        _v96(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => _v0?.[_v1]?.uri !== _v0)
        })), !1);
      }, [_v96]),
      _v106 = (0, _v5.useCallback)(_v0 => {
        _v96(_v0 => _v0?.map(_v0 => ({
          ..._v0,
          data: _v0.data.filter(_v0 => {
            let _v1 = _v0.video?.uri || _v0.folder?.uri || _v0.liveEvent?.uri;
            return !!_v1 && !_v0.has(_v1);
          })
        })), !1);
      }, [_v96]),
      [_v107, {
        enhancedSelectItem: _v108,
        enhancedDeselectItem: _v109,
        selectAllItems: _v110,
        selectAllInFolder: _v111,
        syncAllInFolderSelection: _v112,
        deselectAllItems: _v113,
        shiftKeyChange: _v114
      }] = (0, _v85.useSelectedItems)(),
      _v115 = (0, _v5.useCallback)(() => {
        let _v0 = _v67.value,
          _v1 = (0, _v80.isContentTypeOptionChecked)(_v208, _v0, "video"),
          _v2 = _v70.value,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v113();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v67.setSelection((0, _v80.includeVideosInSelection)(_v208, _v0)), _v70.setValue(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v67.setSelection((0, _v80.excludeVideosFromSelection)(_v208, _v0)), _v70.clearFilter();
          return;
        }
        if (_v3 !== _v4) return void _v70.setValue(_v5());
        if (_v3 && _v4) {
          _v70.clearFilter(), _v67.setSelection((0, _v80.excludeVideosFromSelection)(_v208, _v0));
          return;
        }
      }, [_v67, _v113, _v70]),
      _v116 = (0, _v5.useCallback)(() => {
        let _v0 = _v67.draft,
          _v1 = (0, _v80.isContentTypeOptionChecked)(_v208, _v0, "video"),
          _v2 = _v70.draft,
          _v3 = _v2.has("restricted"),
          _v4 = _v2.has("available");
        _v113();
        let _v5 = () => new Set(["restricted", "available"]);
        if (!_v1) {
          _v67.setSelection((0, _v80.includeVideosInSelection)(_v208, _v0), !0), _v70.setDraft(_v5());
          return;
        }
        if (!_v3 && !_v4) {
          _v67.setSelection((0, _v80.excludeVideosFromSelection)(_v208, _v0), !0), _v70.setDraft(new Set());
          return;
        }
        if (_v3 !== _v4) return void _v70.setDraft(_v5());
        if (_v3 && _v4) {
          _v70.setDraft(new Set()), _v67.setSelection((0, _v80.excludeVideosFromSelection)(_v208, _v0), !0);
          return;
        }
      }, [_v67, _v113, _v70]),
      _v117 = _v60 || _v60 ? {
        onVideoParentCheckboxClick: _v115,
        setVideoAvailabilityFilter: _v0 => {
          let _v1 = _v67.value;
          (0, _v80.isContentTypeOptionChecked)(_v208, _v1, "video") || _v67.setSelection((0, _v80.includeVideosInSelection)(_v208, _v1)), _v70.updateFilterValues(_v0);
        },
        showAvailableOption: _v60,
        showRestrictedOption: _v60,
        videoAvailabilityFilter: _v70.value
      } : void 0,
      _v118 = _v60 || _v60 ? {
        onVideoParentCheckboxClick: _v116,
        onVideoAvailabilityChange: _v0 => {
          let _v1 = _v67.draft;
          (0, _v80.isContentTypeOptionChecked)(_v208, _v1, "video") || _v67.setSelection((0, _v80.includeVideosInSelection)(_v208, _v1), !0), _v70.updateFilterValues(_v0, !0);
        },
        showAvailableOption: _v60,
        showRestrictedOption: _v60,
        videoAvailabilityDraft: _v70.draft
      } : void 0,
      _v119 = (0, _v5.useRef)(!1),
      _v120 = (0, _v5.useCallback)(_v0 => {
        "Shift" === _v0.key && (_v119.current = !_v119.current, _v114(_v119.current));
      }, [_v119, _v114]);
    (0, _v5.useEffect)(() => (window.addEventListener("keydown", _v120), window.addEventListener("keyup", _v120), () => {
      window.removeEventListener("keydown", _v120), window.removeEventListener("keyup", _v120);
    }), [_v120]), (0, _v5.useEffect)(() => {
      _v92 || _v16(!1);
    }, [_v92]);
    let _v121 = _v36.query.filter;
    (0, _v5.useEffect)(() => {
      !_v60 || "string" != typeof _v121 || "locked" !== _v121.toLowerCase() || (!_v70.value.has("restricted") || _v70.value.has("available")) && (_v67.setSelection(new Set(["video", "folder"])), _v70.setValue(new Set(["restricted"])));
    }, [_v121, _v60]);
    let _v122 = (0, _v5.useRef)(!1);
    (0, _v5.useEffect)(() => {
      _v122.current || !_v66 || "string" != typeof _v121 || "cold_privacy" === _v121.toLowerCase() && (_v122.current = !0, _v71.value.has("cold_privacy") || _v71.updateFilterValues("cold_privacy"));
    }, [_v121, _v66]), (0, _v5.useEffect)(() => {
      if (!_v60 || (0, _v49.isVideoAvailabilityFilterExplicitlyEngaged)(_v70.value)) return;
      let _v0 = _v67.value;
      if (1 !== _v0.size || !_v0.has("video") || (_v67.setSelection(new Set()), !_v36.isReady)) return;
      let _v1 = _v36.query.filter;
      if ("string" != typeof _v1 || "locked" !== _v1.toLowerCase()) return;
      let _v2 = {
        ..._v36.query
      };
      delete _v2.filter, _v36.replace({
        pathname: _v36.pathname,
        query: _v2
      }, void 0, {
        shallow: !0
      });
    }, [_v70.value, _v67.value, _v60, _v36.isReady, _v36.pathname, _v36.query.filter]);
    let _v123 = _v107.selectedItemURIs,
      _v124 = (0, _v5.useMemo)(() => _v101?.filter(_v0 => !!_v0)?.flatMap(_v0 => _v0.data.filter(_v0 => {
        let _v1 = (0, _v21.camelizeString)(_v0.type);
        return _v0[_v1]?.uri;
      })), [_v101]),
      _v125 = (0, _v5.useMemo)(() => ({
        canDeleteItem: {
          fields: ["video.metadata.interactions.delete.uri"],
          test: _v0 => !!_v0?.video?.metadata?.interactions?.delete
        },
        canMoveItem: {
          fields: ["video.canMoveToProject"],
          test: _v0 => !!_v0?.video?.canMoveToProject
        },
        canChangeItemPrivacy: {
          fields: ["video.metadata.interactions.edit.uri"],
          test: _v0 => !!_v0?.video && !!_v0?.video?.metadata?.interactions?.edit
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
        allItems: _v126,
        canMoveSelection: _v127,
        canDeleteSelection: _v128,
        canChangePrivacySelection: _v129,
        canAddToShowcasesSelection: _v130,
        hasColdStorageSelection: _v131,
        hasLegalHoldSelection: _v132,
        hasReachedMaxSelectionForMove: _v133,
        hasReachedMaxSelectionForPrivacy: _v134,
        hasReachedMaxSelectionForSentimentWidget: _v135,
        hasReachedMaxSelectionForShowcases: _v136,
        canSelectURIs: _v137,
        selectedItems: _v138,
        maxBulkActionSelection: _v139
      } = (0, _v44.useBulkItems)({
        ...(0, _v43.toPredicateFns)(_v125),
        items: _v124,
        selectedURIs: _v123,
        allowColdStorageDeletion: !0
      }),
      _v140 = (0, _v82.useMarketingVideoCard)(),
      _v141 = !!_v38.canManageTeamCollections,
      _v142 = (0, _v5.useCallback)(() => {
        _v110(_v126, _v137);
      }, [_v126, _v137, _v110]),
      [_v143] = (0, _v51.useMoveItem)(),
      [_v144, _v145] = (0, _v5.useState)(new Set());
    (0, _v5.useEffect)(() => {
      !_v92 && _v77 && _v67.setSelection(new Set(["video"]));
    }, [_v92, _v77]), (0, _v5.useEffect)(() => {
      _v78 && _v67.setSelection(new Set(["video"]), !0);
    }, [_v78]);
    let _v146 = _v1?.vimeoHttpsUrl ? _v1?.vimeoHttpsUrl + "/analytics" : void 0,
      _v147 = _v1?.teamUser,
      {
        isDone: _v148,
        isLoadingInitialData: _v149,
        isLoadingMore: _v150
      } = (0, _v37.getInfiniteRequestLoadingState)({
        data: _v95,
        itemsPerPage: 25,
        size: _v98
      }),
      _v151 = _v126?.length === 0,
      _v152 = !!_v67.isFilterApplied,
      _v153 = !_v94,
      _v154 = _v152 || _v76 || (0, _v49.isVideoAvailabilityFilterExplicitlyEngaged)(_v70.value),
      _v155 = _v74 ? _v124?.length : _v101?.[0]?.total,
      _v156 = (0, _v5.useMemo)(() => {
        let _v0 = (_v126?.length ?? 0) > 0;
        return _v140.shouldShow && !_v154 && _v0 ? [{
          type: "video",
          metadata: {
            connections: {}
          },
          isSelected: !1,
          isSelectable: !1,
          marketingVideo: {
            videoId: _v140.videoId,
            entryPoint: "team_library",
            onDismiss: _v140.dismiss
          }
        }, ...(_v126 ?? [])] : _v126;
      }, [_v140.shouldShow, _v140.videoId, _v140.dismiss, _v154, _v126]),
      _v157 = (0, _v5.useRef)(!1);
    (0, _v5.useEffect)(() => {
      if (!_v36.isReady || _v157.current || "1" !== _v36.query.library_merge_toast || void 0 === _v155) return;
      _v157.current = !0, _v51({
        content: (0, _v23.translate)({
          singular: "Your library is now one place. {COUNT} item is here.",
          plural: "Your library is now one place. All {COUNT} items are here.",
          count: _v155,
          replacements: {
            COUNT: _v155
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
        ..._v36.query
      };
      delete _v0.library_merge_toast, _v36.replace({
        pathname: _v36.pathname,
        query: _v0
      }, void 0, {
        shallow: !0
      });
    }, [_v36.isReady, _v36.query.library_merge_toast, _v155]);
    let {
        isEnabled: _v158
      } = (0, _v45.useEnableFolderBulkPrivacy)(),
      _v159 = _v158 && !!_v123.size && !!_v100 && _v100 <= _v139 && !_v154,
      _v160 = !!_v107.isAllInFolderSelected,
      _v161 = (0, _v43.useSelectAllItems)({
        enabled: _v158 && _v160 && !!_v100 && _v100 <= _v139 && !_v154 && !!_v17 && _v39 && !_v40,
        maxItems: _v139,
        source: {
          kind: "root",
          userId: _v17,
          excludePersonalTeamFolder: _v41,
          flattenPrivateToMe: _v45.flattenPrivateToMe,
          excludeSharedVideos: _v94,
          includeColdStorageClips: _v61
        },
        predicates: _v125
      }),
      _v162 = _v160 && !_v161.isReady,
      _v163 = _v160 && _v161.isReady ? _v161 : {
        selectedItems: _v138,
        selectedItemURIs: _v123,
        canAddToShowcasesSelection: _v130,
        canMoveSelection: _v127,
        canDeleteSelection: _v128,
        canChangePrivacySelection: _v129,
        hasColdStorageSelection: _v131,
        hasLegalHoldSelection: _v132,
        hasReachedMaxSelectionForMove: _v133,
        hasReachedMaxSelectionForPrivacy: _v134,
        hasReachedMaxSelectionForSentimentWidget: _v135,
        hasReachedMaxSelectionForShowcases: _v136
      };
    (0, _v5.useEffect)(() => {
      _v160 && _v137.size && _v112(_v126, _v137);
    }, [_v160, _v126, _v137, _v112]);
    let _v164 = _v58 && !!_v146,
      _v165 = !!_v38.hasVideoLibraryEmbeddableUploader && _v58 && !!_v17,
      _v166 = !!_v38.canCreateRootFolders,
      _v167 = _v42 && !_v40 && _v57,
      _v168 = _v42 && !_v40 && _v41 && _v57 && !!_v17,
      _v169 = _v164 || _v168 || _v165 || _v166 || _v167;
    (0, _v28.usePicoEffect)(() => {
      if (!_v39 || void 0 === _v155) return !1;
      let _v0 = (0, _v31.deriveLibraryReferrerPage)(_v36.query.library_referrer);
      _v31({
        libraryType: (0, _v31.deriveLibraryType)({
          hasContentSpaceEnabled: !!_v41
        }),
        libraryItemCount: _v155,
        referrerPage: _v0
      });
    }, [_v39, _v155, _v41, _v36.query.library_referrer], {
      once: !0
    });
    let _v170 = !!(_v57 && _v29 && _v42 && !_v40 && _v43 && _v41),
      _v171 = () => {
        _v35({
          surface: "library_header"
        }), _v24(!0);
      };
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v35.InviteModal, {
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
      }), _v29 && (0, _v1.jsx)(_v13.StartYourTeamFlow, {
        apiConfig: _v29,
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
      }), _v29 && (0, _v1.jsx)(_v12.MergeLibrariesModal, {
        isOpen: _v23,
        onClose: () => _v24(!1),
        userId: _v1?.user?.id,
        apiConfig: _v29,
        onMerged: () => window.location.reload(),
        surface: "library_header"
      }), _v57 && _v17 && (0, _v1.jsx)(_v161, {
        isOpen: _v25,
        onClose: () => _v26(!1),
        userId: _v17,
        onMoveSuccess: _v48
      }), (0, _v1.jsx)(_v103, {
        children: (0, _v1.jsxs)(_v67.Page, {
          children: [(0, _v1.jsxs)(_v67.Page.Main, {
            children: [(0, _v1.jsxs)(_v67.Page.StickyTop, {
              children: [_v59.banner, (0, _v1.jsx)(_v27.ReverseTrialLateBanner, {
                hostLocation: "library"
              }), _v88 && (0, _v1.jsx)(_v24.ColdStorageBanner, {
                surface: "library",
                hasColdStorage: _v60,
                hasColdPrivacy: _v66,
                hasColdPrivacyForTracking: _v64,
                isColdPrivacyLoading: _v65
              }), (0, _v1.jsx)(_v66.PageHeader, {
                actions: (() => {
                  if (!_v169) return;
                  let _v0 = _v167 && _v17 ? (0, _v1.jsx)(_v14.TeamMembersPreview, {
                      ownerId: _v17,
                      viewerName: _v1?.user?.name ?? "",
                      viewerAvatarSrc: _v1?.user?.pictures?.sizes?.[0]?.link,
                      viewerUri: _v1?.user?.uri,
                      contentSpaceEnabled: _v41,
                      isSoleTeamMember: _v43,
                      isLoading: _v40,
                      onStartYourTeam: () => _v21(!0),
                      onInviteMembers: () => _v22.current?.click()
                    }) : null,
                    _v1 = _v165 && _v17 ? (0, _v1.jsx)(_v42.UploadButton, {
                      paywallTrigger: "library_header_upload_button",
                      targetUserId: _v17,
                      testIdPrefix: "library-header-upload-button",
                      onClick: () => _v30((0, _v81.genericClick)({
                        copy: "Upload",
                        feature: "video_library",
                        location: _v190,
                        name: "click_upload_button",
                        page: "library",
                        target: null,
                        target_path: null,
                        click_type: null,
                        device_type: null,
                        type: "general"
                      }, 91))
                    }) : null,
                    _v2 = _v166 ? (0, _v1.jsx)(_v163, {}) : null,
                    _v3 = !!(_v164 && _v146),
                    _v4 = () => _v30((0, _v81.genericClick)({
                      copy: "Analytics",
                      feature: _v81.AnalyticsFeatures.ANALYTICS,
                      location: _v190,
                      name: "click_library_analytics",
                      page: "library",
                      target: _v146 ?? "",
                      target_path: null,
                      type: "general"
                    })),
                    _v5 = _v3 || _v168 || _v170 ? (0, _v1.jsx)(_v122, {
                      analyticsLink: _v3 ? _v146 : void 0,
                      onAnalyticsClick: _v4,
                      showMoveContent: _v168,
                      onMoveContent: () => _v26(!0),
                      showMergeLibraries: _v170,
                      onMergeLibraries: _v171
                    }) : null;
                  if (!_v92) return (0, _v1.jsxs)(_v1.Fragment, {
                    children: [_v0, _v1, _v2, _v5]
                  });
                  let _v6 = _v3 || _v168 || _v166 || _v170;
                  return (0, _v1.jsxs)(_v1.Fragment, {
                    children: [_v0, _v1, _v6 && (0, _v1.jsxs)(_v1.Fragment, {
                      children: [(0, _v1.jsx)(_v7.IconButton, {
                        "aria-label": (0, _v23.translate)({
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
                        icon: (0, _v1.jsx)(_v9.EllipsisV, {}),
                        variant: "tertiary",
                        size: "md",
                        onClick: () => _v28(!0)
                      }), (0, _v1.jsx)(_v128, {
                        isOpen: _v27,
                        onClose: () => _v28(!1),
                        analyticsLink: _v3 ? _v146 : void 0,
                        onAnalyticsClick: _v4,
                        showMoveContent: _v168,
                        onMoveContent: () => _v26(!0),
                        showNewFolder: _v166,
                        showMergeLibraries: _v170,
                        onMergeLibraries: _v171
                      })]
                    })]
                  });
                })(),
                bottomBar: (0, _v1.jsxs)(_v59.FilterSortBar, {
                  checkbox: (0, _v1.jsx)(_v68.CheckboxItemCount, {
                    hasCheckbox: !!_v137.size,
                    isChecked: !!_v123.size,
                    isDisabled: !_v137.size,
                    isIndeterminate: !!_v123.size && _v123.size < _v137.size,
                    isLoading: _v149,
                    onChange: () => {
                      _v123.size ? _v113() : _v142();
                    },
                    selectedItemCount: _v123.size,
                    subtitle: !!_v155 && (_v154 ? (0, _v23.translate)({
                      count: _v155,
                      singular: "{NUM_ITEMS} result",
                      plural: "{NUM_ITEMS} results",
                      replacements: {
                        NUM_ITEMS: _v155
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
                    }) : (0, _v23.translate)({
                      count: _v155,
                      singular: "{NUM_ITEMS} item",
                      plural: "{NUM_ITEMS} items",
                      replacements: {
                        NUM_ITEMS: _v155
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
                  layout: _v83,
                  setLayout: _v0 => {
                    _v84(_v0), _v32({
                      libraryType: (0, _v31.deriveLibraryType)({
                        hasContentSpaceEnabled: !!_v41
                      }),
                      libraryNewView: "GRID_LAYOUT" === _v0 ? "grid" : "list"
                    });
                  },
                  shouldHideViewControls: _v151 && !_v154,
                  sort: _v9,
                  setSort: _v0 => {
                    let _v1 = `${_v9.type.toLowerCase()}_${_v9.direction.toLowerCase()}`,
                      _v2 = `${_v0.type.toLowerCase()}_${_v0.direction.toLowerCase()}`;
                    if (_v10(_v0), _v2 !== _v1) {
                      let _v0 = _v37[_v2];
                      _v0 && _v34({
                        libraryType: (0, _v31.deriveLibraryType)({
                          hasContentSpaceEnabled: !!_v41
                        }),
                        libraryNewSort: _v0
                      });
                    }
                  },
                  setDateDisplay: _v12,
                  sortOptions: _v57.SORT_OPTIONS,
                  isLayoutToggleDisabled: _v151,
                  children: [_v92 && _v153 && (0, _v1.jsxs)(_v6.Flex, {
                    children: [(0, _v1.jsx)(_v61.MobileFilterButton, {
                      isFilterApplied: _v154,
                      onClick: () => {
                        _v16(!0);
                      }
                    }), (0, _v1.jsxs)(_v62.MobileFilterDrawer, {
                      isFilterApplied: _v154,
                      isOpen: _v15,
                      onApplyFilters: () => {
                        let _v0, _v1, _v2, _v3;
                        _v113();
                        let _v4 = (0, _v31.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v41
                          }),
                          _v5 = !(0, _v80.areIdenticalSets)(_v67.draft, _v67.value),
                          _v6 = _v71.isDraftActive && _v71.isDraftUpdated(),
                          _v7 = _v70.isDraftActive && _v70.isDraftUpdated(),
                          _v8 = _v75.isDraftActive && _v75.isDraftUpdated();
                        _v67.commitDraft(), _v71.commitDraft(), _v70.commitDraft(), _v75.commitDraft(), _v0 = !(0, _v80.areIdenticalSets)(_v67.draft, _v67.value), _v1 = _v71.isDraftActive && _v71.isDraftUpdated(), _v2 = _v70.isDraftActive && _v70.isDraftUpdated(), _v3 = _v75.isDraftActive && _v75.isDraftUpdated(), _v0 && _v58.FilterBPEvents.sendApplyFilterEvent("content_type", _v91, _v147, "mobile"), _v1 && _v58.FilterBPEvents.sendApplyFilterEvent("clip_privacy", _v91, _v147, "mobile"), _v2 && _v58.FilterBPEvents.sendApplyFilterEvent("content_type", _v91, _v147, "mobile"), _v3 && _v58.FilterBPEvents.sendApplyFilterEvent("clip_created_by", _v91, _v147, "mobile"), _v5 && _v33({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v6 && _v33({
                          libraryType: _v4,
                          libraryFilterType: "privacy"
                        }), _v7 && _v33({
                          libraryType: _v4,
                          libraryFilterType: "type"
                        }), _v8 && _v33({
                          libraryType: _v4,
                          libraryFilterType: "created_by"
                        }), _v16(!1);
                      },
                      onClearFilters: () => {
                        _v113(), _v67.clearFilter(), _v71.clearFilter(), _v70.clearFilter(), _v75.clearFilter(), _v75.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      onClose: () => {
                        _v67.clearDraft(), _v71.clearDraft(), _v70.clearDraft(), _v75.clearDraft(), _v75.setCreatedByUsersSearchTerm(""), _v16(!1);
                      },
                      children: [(0, _v1.jsx)(_v63.MobileContentTypeFilter, {
                        filter: _v67.draft,
                        onToggle: _v0 => {
                          let _v1 = (0, _v80.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v208, _v67.draft, _v0, (0, _v49.isVideoAvailabilityFilterExplicitlyEngaged)(_v70.draft));
                          _v67.setSelection(_v1, !0), (0, _v80.doesSelectionIncludeVideos)(_v208, _v1) || _v70.setDraft(new Set());
                        },
                        options: _v208,
                        page: _v91,
                        isDisabled: _v80,
                        videoSubmenu: _v118
                      }), _v153 && (0, _v1.jsxs)(_v1.Fragment, {
                        children: [(0, _v1.jsx)(_v64.MobileClipPrivacyFilter, {
                          filter: [..._v71.draft],
                          onChange: _v0 => {
                            _v71.updateFilterValues(_v0, !0);
                          },
                          options: _v71.options,
                          page: _v91,
                          isDisabled: _v69
                        }), !_v75.shouldHideFilter && (0, _v1.jsx)(_v65.MobileCreatedByFilter, {
                          filter: [..._v75.draft],
                          onChange: _v0 => {
                            _v75.updateFilterValues(_v0, !0);
                          },
                          searchQuery: _v75.createdByUsersSearchTerm,
                          setSearchQuery: _v75.setCreatedByUsersSearchTerm,
                          options: _v75.createdByUsers,
                          page: _v91,
                          isDisabled: _v69,
                          isLoadingInitialData: _v75.membersLoadingInitialData,
                          isLoadingMore: _v75.membersLoadingMore,
                          isDone: _v75.membersDone,
                          onLoadMore: _v75.loadMoreMembers
                        })]
                      })]
                    })]
                  }), !_v92 && _v153 && _v154 && (0, _v1.jsx)(_v71.ClearAllFiltersButton, {
                    onClick: () => {
                      _v113(), _v67.clearFilter(), _v71.clearFilter(), _v70.clearFilter(), _v75.clearFilter();
                    }
                  }), !_v92 && _v153 && (0, _v1.jsx)(_v60.ContentTypeFilter, {
                    filter: _v67.value,
                    onToggleType: _v0 => {
                      _v113();
                      let _v1 = (0, _v80.toggleContentTypeSelectionWithAvailabilityAwareFolder)(_v208, _v67.value, _v0, (0, _v49.isVideoAvailabilityFilterExplicitlyEngaged)(_v70.value));
                      (0, _v80.areIdenticalSets)(_v1, _v67.value) || _v33({
                        libraryType: (0, _v31.deriveLibraryType)({
                          hasContentSpaceEnabled: !!_v41
                        }),
                        libraryFilterType: "type"
                      }), _v67.setSelection(_v1), (0, _v80.doesSelectionIncludeVideos)(_v208, _v1) || _v70.clearFilter();
                    },
                    options: _v208,
                    page: _v91,
                    isDisabled: _v79,
                    videoSubmenu: _v117
                  }), !_v92 && _v153 && (0, _v1.jsxs)(_v1.Fragment, {
                    children: [(0, _v1.jsx)(_v70.ClipPrivacyTypeFilter, {
                      filter: [..._v71.value],
                      setFilter: _v0 => {
                        _v113(), _v71.updateFilterValues(_v0), _v33({
                          libraryType: (0, _v31.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v41
                          }),
                          libraryFilterType: "privacy"
                        });
                      },
                      options: _v71.options,
                      page: _v91,
                      isDisabled: _v68
                    }), !_v75.shouldHideFilter && (0, _v1.jsx)(_v72.CreatedByFilter, {
                      filter: [..._v75.value],
                      setFilter: _v0 => {
                        _v113(), _v75.setFilterValues(_v0), _v33({
                          libraryType: (0, _v31.deriveLibraryType)({
                            hasContentSpaceEnabled: !!_v41
                          }),
                          libraryFilterType: "created_by"
                        });
                      },
                      searchQuery: _v75.createdByUsersSearchTerm,
                      setSearchQuery: _v75.setCreatedByUsersSearchTerm,
                      options: _v75.createdByUsers,
                      page: _v91,
                      isDisabled: _v68,
                      isLoadingInitialData: _v75.membersLoadingInitialData,
                      isLoadingMore: _v75.membersLoadingMore,
                      isDone: _v75.membersDone,
                      onLoadMore: _v75.loadMoreMembers
                    })]
                  })]
                }),
                isTitleLoading: !_v39,
                title: _v91
              }), _v159 && (0, _v1.jsx)(_v69.SelectAllBanner, {
                folderName: _v91,
                loadedSelectedCount: _v123.size,
                totalVideosCount: _v100,
                actualSelectedCount: _v161.isReady ? _v161.selectedItemURIs.size : void 0,
                onSelectAllInFolder: _v111,
                onClearSelection: _v113,
                allInFolderEnabled: _v160
              }), "LIST_LAYOUT" === _v83 && !_v151 && (0, _v1.jsx)(_v40.BokehListHeader, {
                setSort: _v10,
                sort: _v9,
                shouldShowPrivacy: _v85,
                shouldShowFileSize: !0,
                setDateDisplay: _v12,
                dateDisplay: _v11
              })]
            }), _v151 ? (0, _v1.jsx)(_v6.Flex, {
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "20px",
              children: _v154 ? (0, _v1.jsx)(_v74.FilterEmptyState, {}) : _v38.canCreateRootFolders ? _v42 && _v41 && _v57 ? (0, _v1.jsx)(_v115, {
                onInvitePeople: () => _v22.current?.click(),
                onMoveContent: () => _v26(!0),
                hasTeamMembers: !_v43,
                isMigrationInProgress: _v44
              }) : (0, _v1.jsx)(_v105, {
                owner: {
                  id: _v17 ?? 0
                },
                set360SourceType: _v14,
                threeSixtyType: _v13,
                isUnifiedLibrary: !_v41
              }) : (0, _v1.jsx)(_v109, {
                isContributor: "Contributor" === _v56 || "ContributorPlus" === _v56
              })
            }) : (0, _v1.jsx)(_v41.UploadDropzone, {
              className: "library-upload-dropzone",
              targetUserId: _v17 ?? 0,
              disabled: !_v89 || _v151 && _v38.canCreateRootFolders,
              topPosition: 205,
              destinationText: _v91 || (0, _v23.translate)({
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
              children: (0, _v1.jsx)(_v210, {
                assetUrls: _v0,
                type: _v33.PlayerType.BarebonePlayer,
                children: (0, _v1.jsx)(_v207, {
                  canUpload: _v86,
                  deselectItem: _v109,
                  handleMoveItemsOnDrop: ({
                    dropTarget: _v0,
                    items: _v1
                  }) => {
                    let _v2 = new Set("");
                    _v2.add(_v0.uri), _v145(_v2), _v50(_v2);
                    let [,, _v3,, _v4] = _v0.uri.split("/");
                    _v143({
                      ownerId: parseInt(_v3, 10),
                      folderId: parseInt(_v4, 10),
                      targetItems: _v1
                    }).then(() => {
                      1 === _v1.length ? (_v109(_v1[0].uri, 0, _v126 || []), _v105(_v1[0].uri, "video")) : (_v113(), _v106(_v123)), _v52(null, {
                        label: _v0.name,
                        link: (0, _v78.getFolderPageUriFromApiUri)(_v0.uri)
                      });
                    }).catch(_v0 => {
                      _v51({
                        content: _v0,
                        status: "error"
                      });
                    }).finally(() => {
                      _v145(new Set()), _v50(new Set());
                    });
                  },
                  hasFolderShareUpsell: !!_v38.canSeeUpsellModalOnShare,
                  hasReviewPageUpsell: !!_v38.hasVideoReviewPageDemo,
                  hasMultipleReviewLinks: !!_v38.hasMultipleReviewLinks,
                  items: _v156,
                  layout: _v83,
                  loadingFolderURIs: _v144,
                  onCopyVideo: _v54,
                  onFolderSettingsChange: _v0 => {
                    _v102(_v0), _v49();
                  },
                  onMoreInfo: _v7,
                  removeItem: _v105,
                  selectedItemURIs: _v123,
                  selectItem: _v108,
                  shouldShowPrivacy: _v85,
                  shouldShowFileSize: !0,
                  sort: _v9,
                  isEnterprise: _v90,
                  setIsUploadDropzoneEnabled: _v82,
                  isLoading: _v149 || !!_v150,
                  hasContentSpaceEnabled: !!_v41
                })
              })
            }), (0, _v1.jsx)(_v91, {
              layout: _v83,
              canLoadMore: !_v148,
              isLoadingMore: _v149 || !!_v150,
              onActivate: () => _v97(_v98 + 1),
              isDropzoneEnabled: _v86 && !(_v151 && _v38.canCreateRootFolders),
              page: _v91
            })]
          }), _v6 && (0, _v1.jsx)(_v67.Page.Panel, {
            children: (0, _v1.jsx)(_v34.ResourceSidePanel, {
              isOpen: !0,
              onClose: () => _v7(null),
              onVideoPrivacyChange: ({
                view: _v0
              }) => _v103(_v6, _v0 => ({
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
      }), (0, _v1.jsx)(_v75.ViewerAiUpsellModal, {
        step: _v19 ? "closed" : _v2,
        onDismiss: _v3,
        onCtaClick: _v4,
        onErrorClose: _v5
      }), (0, _v1.jsx)(_v11.LibrariesBecomingOneModal, {
        isOpen: _v19,
        onClose: () => _v18.dismiss("becoming"),
        userId: _v17,
        mergeDate: _v18.mergeDate
      }), _v55, _v59.modal, (0, _v1.jsx)(_v10.BulkActions, {
        ..._v163,
        isLoading: _v162,
        canUseBulkTranslation: _v47,
        canAddToShowcases: _v141,
        canPublishContentToChina: _v38.regionalDeliveryPublishContentToChina,
        deselectAllItems: _v113,
        removeItems: _v106,
        teamOwnerId: _v17,
        isPrivateModeOn: !_v38.privateModeOff
      })]
    });
  }
  let _v210 = ({
    children: _v0,
    assetUrls: _v1,
    type: _v2
  }) => _v1 ? (0, _v1.jsx)(_v32.PlayerContextProvider, {
    assetUrls: _v1,
    type: _v2,
    children: _v0
  }) : _v0;
  var _v211 = _v0.i(0),
    _v212 = _v0.i(0),
    _v213 = _v0.i(0),
    _v214 = _v0.i(0);
  let _v215 = ({
    playerAssetUrls: _v0
  }) => {
    let _v1 = (0, _v214.useViewer)();
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v209, {
        playerAssetUrls: _v0,
        viewer: _v1
      }), (0, _v1.jsx)(_v3.ManagedAccountsPromo, {}), (0, _v1.jsx)(_v213.VimeoReviewUpsellPromo, {})]
    });
  };
  _v215.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v212.VideoLibraryLayout, {
    hasSideNav: !0,
    hasUploader: _v1.hasUploader,
    sideNavContent: (0, _v1.jsx)(_v211.SideNavContent, {
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
    noIndex: !0,
    inlineViewer: !0,
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v215], 0);
}