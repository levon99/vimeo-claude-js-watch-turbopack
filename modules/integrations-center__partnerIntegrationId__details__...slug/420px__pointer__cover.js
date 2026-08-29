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
    _v21 = _v0.i(0);
  function _v22({
    partnerMedia: _v0
  }) {
    let [_v1, _v2] = (0, _v3.useState)(0),
      _v3 = _v0.map(_v0 => _v0.url);
    return (0, _v1.jsxs)(_v5.Box, {
      children: [(0, _v1.jsx)(_v21.Carousel, {
        size: "md",
        slideCount: _v3.length,
        loop: !0,
        allowMouseDrag: !0,
        height: "420px",
        page: _v1,
        onPageChange: _v0 => _v2(_v0.page),
        children: (0, _v1.jsx)(_v21.CarouselItemGroup, {
          width: "100%",
          height: "100%",
          cursor: "pointer",
          children: _v3.map((_v0, _v1) => (0, _v1.jsx)(_v21.CarouselItem, {
            index: _v1,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${_v0})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            "aria-label": `Image  ${_v1 + 1}`,
            role: "img",
            borderRadius: "lg"
          }, _v1))
        })
      }), (0, _v1.jsx)(_v5.Box, {
        children: (0, _v1.jsx)(_v5.Box, {
          height: "50px",
          whiteSpace: "nowrap",
          overflowX: "scroll",
          overflowY: "hidden",
          textAlign: "center",
          margin: "auto",
          mt: "lg",
          sx: {
            scrollbarWidth: "none"
          },
          children: _v3.map((_v0, _v1) => (0, _v1.jsx)(_v5.Box, {
            as: "img",
            src: _v0,
            alt: "thumbnail" + _v1,
            onClick: () => _v2(_v1),
            display: "inline-block",
            ml: "sm",
            mr: "sm",
            borderRadius: "sm",
            height: "100%",
            cursor: "pointer",
            opacity: _v1 === _v1 ? 1 : .25,
            _hover: {
              opacity: .75
            }
          }, "thumbnail" + _v1))
        })
      })]
    });
  }
  var _v23 = _v0.i(0);
  function _v24({
    keyFeatures: _v0
  }) {
    return (0, _v1.jsxs)(_v5.Box, {
      children: [(0, _v1.jsx)(_v23.Header, {
        variant: "heading-md",
        size: "xl",
        children: (0, _v14.translate)({
          singular: "Key features",
          dictionary: {
            es: {
              singular: "Funciones clave"
            },
            "de-DE": {
              singular: "Die wichtigsten Funktionen"
            },
            "fr-FR": {
              singular: "Fonctionnalités principales"
            },
            "ja-JP": {
              singular: "主な機能"
            },
            "ko-KR": {
              singular: "주요 기능"
            },
            "pt-BR": {
              singular: "Principais recursos"
            },
            "zh-CN": {
              singular: "主要特点"
            }
          }
        })
      }), _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v3.default.Fragment, {
        children: [(0, _v1.jsx)(_v23.Header, {
          size: "xs",
          color: "text-primary",
          mt: "md",
          children: _v0.title
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          color: "text-secondary",
          mt: "xs",
          children: _v0.description
        })]
      }, _v1))]
    });
  }
  let _v25 = ({
    partnerMedia: _v0,
    keyFeatures: _v1,
    helpArticleUrl: _v2
  }) => {
    let _v3 = _v1.length > 0;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v0.length > 0 && (0, _v1.jsx)(_v5.Box, {
        py: "lg",
        children: (0, _v1.jsx)(_v22, {
          partnerMedia: _v0
        })
      }), (_v3 || _v2) && (0, _v1.jsxs)(_v5.Box, {
        background: "surface",
        p: "lg",
        borderRadius: "md",
        mt: "lg",
        children: [_v3 && (0, _v1.jsx)(_v24, {
          keyFeatures: _v1
        }), _v3 && _v2 && (0, _v1.jsx)(_v19.Divider, {
          borderColor: "stroke",
          my: "md",
          width: "100%"
        }), _v2 && (0, _v1.jsx)(_v1.Fragment, {
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            color: "text-primary",
            children: (0, _v14.translate)({
              singular: "Learn how to use this app in the {HELP_CENTER}",
              replacements: {
                HELP_CENTER: (0, _v1.jsx)(_v20.Link, {
                  href: _v2,
                  variant: "brand",
                  children: "Help Center"
                })
              },
              dictionary: {
                es: {
                  singular: "Aprenda a usar esta aplicación en el {HELP_CENTER}"
                },
                "de-DE": {
                  singular: "Erfahren Sie im {HELP_CENTER}, wie Sie diese App verwenden können"
                },
                "fr-FR": {
                  singular: "Découvrez comment utiliser cette application dans le {HELP_CENTER}"
                },
                "ja-JP": {
                  singular: "このアプリの使用方法については{HELP_CENTER}をご覧ください。"
                },
                "ko-KR": {
                  singular: "{HELP_CENTER}에서 앱 사용 방법을 알아보세요."
                },
                "pt-BR": {
                  singular: "Saiba como usar este aplicativo no {HELP_CENTER}"
                },
                "zh-CN": {
                  singular: "了解如何在 {HELP_CENTER} 中使用此应用"
                }
              }
            })
          })
        })]
      })]
    });
  };
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = ({
    aboutComponent: _v0,
    manageComponent: _v1,
    usersComponent: _v2,
    appName: _v3
  }) => {
    let _v4 = (0, _v2.useRouter)(),
      _v5 = _v4?.query?.slug,
      {
        sendManageEvents: _v6
      } = (0, _v31.useTracking)(),
      _v7 = (0, _v3.useCallback)(_v0 => {
        _v4.push({
          query: {
            ..._v4.query,
            slug: _v0
          }
        }, void 0, {
          shallow: !0
        });
      }, [_v4]),
      _v8 = (0, _v3.useMemo)(() => {
        let _v0 = [];
        return _v0 && _v0.push("about"), _v1 && _v0.push("manage"), _v2 && _v0.push("manage-users"), _v0;
      }, [_v0, _v1, _v2]);
    (0, _v3.useEffect)(() => {
      Array.isArray(_v5) && Array.isArray(_v8) && !_v8.includes(_v5[0]) && _v7(_v8[0]);
    }, [_v4, _v5, _v8, _v7]);
    let _v9 = Array.isArray(_v5) && Array.isArray(_v8) && _v8.indexOf(_v5[0]) >= 0 ? _v8.indexOf(_v5[0]) : void 0;
    return (0, _v1.jsxs)(_v26.Tabs, {
      variant: "underline",
      index: _v9,
      onChange: _v0 => {
        1 === _v0 && _v1 && _v6({
          eventName: "vimeo.select_manage_integration_settings",
          integrationName: _v3,
          copy: (0, _v14.translate)({
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
        }), _v7(_v8[_v0]);
      },
      children: [(0, _v1.jsxs)(_v28.TabList, {
        children: [_v0 && (0, _v1.jsx)(_v27.Tab, {
          width: "100%",
          maxWidth: (0, _v11.rem)(240),
          maxW: "fit-content",
          children: (0, _v14.translate)({
            singular: "About",
            dictionary: {
              es: {
                singular: "Acerca de"
              },
              "de-DE": {
                singular: "Über uns"
              },
              "fr-FR": {
                singular: "À propos"
              },
              "ko-KR": {
                singular: "소개"
              },
              "pt-BR": {
                singular: "Sobre"
              },
              "zh-CN": {
                singular: "关于"
              }
            }
          })
        }), _v1 && (0, _v1.jsx)(_v27.Tab, {
          width: "100%",
          maxWidth: (0, _v11.rem)(240),
          maxW: "fit-content",
          children: (0, _v14.translate)({
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
        }), _v2 && (0, _v1.jsx)(_v27.Tab, {
          width: "100%",
          maxWidth: (0, _v11.rem)(240),
          maxW: "fit-content",
          children: (0, _v14.translate)({
            singular: "Users",
            dictionary: {
              es: {
                singular: "Usuarios"
              },
              "de-DE": {
                singular: "Benutzer"
              },
              "fr-FR": {
                singular: "Utilisateurs"
              },
              "ja-JP": {
                singular: "ユーザー"
              },
              "ko-KR": {
                singular: "사용자"
              },
              "pt-BR": {
                singular: "Usuários"
              }
            }
          })
        }), (0, _v1.jsx)(_v26.TabIndicator, {})]
      }), (0, _v1.jsxs)(_v29.TabPanels, {
        children: [_v0 && (0, _v1.jsx)(_v30.TabPanel, {
          children: _v0
        }), _v1 && (0, _v1.jsx)(_v30.TabPanel, {
          children: _v1
        }), _v2 && (0, _v1.jsx)(_v30.TabPanel, {
          children: _v2
        })]
      })]
    });
  };
  var _v33 = _v0.i(0);
  function _v34() {
    return (0, _v1.jsxs)(_v5.Box, {
      width: "60%",
      padding: 4,
      margin: "20%",
      marginTop: 6,
      borderRadius: "lg",
      children: [(0, _v1.jsx)(_v33.Skeleton, {
        variant: "text",
        height: (0, _v11.rem)(40),
        width: (0, _v11.rem)(120)
      }), (0, _v1.jsxs)(_v7.Flex, {
        alignItems: "center",
        flexWrap: "wrap",
        gap: 4,
        marginTop: 4,
        children: [(0, _v1.jsx)(_v33.Skeleton, {
          variant: "circle"
        }), (0, _v1.jsxs)(_v5.Box, {
          flex: "1",
          children: [(0, _v1.jsx)(_v33.Skeleton, {
            variant: "text",
            margin: "sm",
            width: (0, _v11.rem)(240)
          }), (0, _v1.jsx)(_v33.Skeleton, {
            variant: "text",
            margin: "sm",
            width: (0, _v11.rem)(240)
          })]
        })]
      }), (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        gap: "sm",
        paddingTop: "md",
        paddingBottom: "md",
        children: [(0, _v1.jsx)(_v33.Skeleton, {
          variant: "text"
        }), (0, _v1.jsx)(_v33.Skeleton, {
          variant: "text"
        }), (0, _v1.jsx)(_v33.Skeleton, {
          variant: "text",
          width: "75%"
        })]
      }), (0, _v1.jsx)(_v33.Skeleton, {
        variant: "text",
        height: (0, _v11.rem)(480)
      })]
    });
  }
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = ({
    appId: _v0,
    partnerIntegrationId: _v1
  }) => {
    let _v2 = (0, _v3.useContext)(_v36.ViewerContext);
    if (!_v2?.user) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v3 = _v1 === _v37.PARTNER_ID.MS_TEAMS ? {
      msTeamsEncryptedTeamId: "",
      msTeamsEncryptedTeamUserId: "",
      teamOwnerId: _v2.teamUser?.ownerId ?? _v2.user.id,
      adminOnboarding: !1
    } : void 0;
    return (0, _v1.jsxs)(_v5.Box, {
      children: [(0, _v1.jsx)(_v23.Header, {
        mb: "xs",
        size: "xs",
        children: (0, _v14.translate)({
          singular: "Choose default folder for recordings",
          dictionary: {
            es: {
              singular: "Elija la carpeta predeterminada para las grabaciones"
            },
            "de-DE": {
              singular: "Wählen Sie den Standardordner für Aufnahmen aus"
            },
            "fr-FR": {
              singular: "Choisir le dossier par défaut pour les enregistrements"
            },
            "ja-JP": {
              singular: "録画用のデフォルトフォルダーを選択"
            },
            "ko-KR": {
              singular: "녹화본의 기본 폴더 선택"
            },
            "pt-BR": {
              singular: "Escolha a pasta padrão para gravações"
            },
            "zh-CN": {
              singular: "选择默认的录制文件夹"
            }
          }
        })
      }), (0, _v1.jsx)(_v8.Text, {
        variant: "body-md",
        color: "text-secondary",
        display: "inline-block",
        mb: "md",
        children: (0, _v14.translate)({
          singular: "Select the team and folder to store your meeting recordings in.",
          dictionary: {
            es: {
              singular: "Seleccione el equipo y la carpeta donde almacenar las grabaciones de sus reuniones."
            },
            "de-DE": {
              singular: "Wählen Sie das Team und den Ordner aus, in dem Ihre Meeting-Aufzeichnungen gespeichert werden."
            },
            "fr-FR": {
              singular: "Veuillez sélectionner l'équipe et le dossier dans lesquels vous souhaitez stocker vos enregistrements de réunion."
            },
            "ja-JP": {
              singular: "会議の録画を保存するチームとフォルダーを選択してください。"
            },
            "ko-KR": {
              singular: "회의 녹화본을 저장할 팀과 폴더를 선택하세요."
            },
            "pt-BR": {
              singular: "Selecione uma equipe e uma pasta para armazenar as gravações das suas reuniões."
            },
            "zh-CN": {
              singular: "选择要存储会议录音的团队和文件夹。"
            }
          }
        })
      }), (0, _v1.jsx)(_v35.AppSettingsPage, {
        viewer: _v2,
        appId: Number(_v0),
        isSettingsPage: !0,
        msTeamsParams: _v3
      }), (0, _v1.jsx)(_v19.Divider, {
        borderColor: "stroke",
        mt: 2,
        mb: 4
      }), (0, _v1.jsxs)(_v7.Flex, {
        justifyContent: "center",
        alignItems: "center",
        children: [(0, _v1.jsxs)(_v5.Box, {
          width: "100%",
          children: [(0, _v1.jsx)(_v23.Header, {
            mb: "sm",
            size: "xs",
            children: (0, _v14.translate)({
              singular: "Default Privacy",
              dictionary: {
                es: {
                  singular: "Configuración de privacidad predeterminada"
                },
                "de-DE": {
                  singular: "Standardmäßige Datenschutzeinstellungen"
                },
                "fr-FR": {
                  singular: "Confidentialité par défaut"
                },
                "ja-JP": {
                  singular: "デフォルトのプライバシー"
                },
                "ko-KR": {
                  singular: "기본 개인정보 보호 설정"
                },
                "pt-BR": {
                  singular: "Privacidade padrão"
                },
                "zh-CN": {
                  singular: "默认隐私设置"
                }
              }
            })
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            color: "text-secondary",
            display: "inline-block",
            mb: "md",
            children: (0, _v14.translate)({
              singular: "Select the default privacy for your recordings on vimeo",
              dictionary: {
                es: {
                  singular: "Seleccione la configuración privacidad predeterminada para sus grabaciones en Vimeo."
                },
                "de-DE": {
                  singular: "Standard-Datenschutzeinstellungen für Ihre Aufnahmen auf Vimeo wählen"
                },
                "fr-FR": {
                  singular: "Choisissez le niveau de confidentialité par défaut pour vos enregistrements sur Vimeo."
                },
                "ja-JP": {
                  singular: "Vimeoでの録画用にデフォルトのプライバシー設定を選択してください。"
                },
                "ko-KR": {
                  singular: "Vimeo의 녹화에 대한 기본 개인정보 보호 설정을 선택하세요."
                },
                "pt-BR": {
                  singular: "Selecione a privacidade padrão para as suas gravações no Vimeo"
                },
                "zh-CN": {
                  singular: "为您在 Vimeo 上的录制内容选择默认隐私设置"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v35.AppSettingsPage, {
          viewer: _v2,
          appId: Number(_v0),
          isSettingsPage: !0,
          msTeamsParams: _v3,
          step: "PRIVACY_SELECTION"
        })]
      })]
    });
  };
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = "publish_action_upload",
    _v45 = "publish_action_like",
    _v46 = "publish_action_comment",
    _v47 = "publish_action_follow",
    _v48 = "publish_action_create",
    _v49 = "publish_action_add",
    _v50 = "publish_action_watch_later",
    _v51 = "page_id",
    _v52 = [{
      key: _v44,
      text: "Upload a video"
    }, {
      key: _v45,
      text: "Like a video"
    }, {
      key: _v46,
      text: "Leave a comment on a video"
    }, {
      key: _v47,
      text: "Follow a new user, Channel or join a Group"
    }, {
      key: _v48,
      text: "Create a new Channel or Group"
    }, {
      key: _v49,
      text: "Add a video to a Channel or Group"
    }, {
      key: _v50,
      text: "Add a video to my Watch Later queue"
    }],
    _v53 = ({
      partnerIntegrationId: _v0,
      appName: _v1
    }) => {
      let _v2 = _v37.APP_CONFIG[_v0]?.modify,
        _v3 = _v2?.payload?.service,
        {
          xsrft: _v4
        } = (0, _v3.useContext)(_v36.ViewerContext) || {},
        {
          data: _v5
        } = (0, _v43.useFetchAppsData)(),
        _v6 = _v5?.social_apps?.[_v3],
        {
          sendManageEvents: _v7
        } = (0, _v31.useTracking)(),
        [_v8, _v9] = (0, _v3.useState)({}),
        [_v10, _v11] = (0, _v3.useState)(!1),
        [_v12, _v13] = (0, _v3.useState)(!1),
        [_v14, _v15] = (0, _v3.useState)(!1);
      (0, _v3.useEffect)(() => {
        let _v0 = _v6?.publish_actions,
          _v1 = _v6?.page_id,
          _v2 = _v1 ? {
            [_v51]: String(_v1)
          } : {};
        _v0 && _v9({
          [_v44]: _v0.upload,
          [_v45]: _v0.like,
          [_v46]: _v0.comment,
          [_v47]: _v0.follow,
          [_v48]: _v0.create,
          [_v49]: _v0.add,
          [_v50]: _v0.watch_later,
          ..._v2
        });
      }, [_v6]);
      let _v16 = (_v0, _v1) => {
        _v9({
          ..._v8,
          [_v0]: _v1
        });
      };
      if (!_v6) return (0, _v1.jsx)(_v1.Fragment, {});
      let _v17 = _v37.PARTNER_ID.FACEBOOK === _v0,
        _v18 = _v17 && !_v8[_v51];
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v5.Box, {
          children: [(0, _v1.jsxs)(_v23.Header, {
            size: "xs",
            mb: "xs",
            children: ["Auto Publish to ", _v1]
          }), (0, _v1.jsx)(_v39.Paragraph, {
            size: "md",
            color: "text-secondary",
            children: _v37.PARTNER_ID.TWITTER === _v0 && _v6.display_name ? (0, _v14.translate)({
              singular: "Connect your X account and Vimeo will automatically post your chosen actions to your feed. Anyone who tweets your videos will automatically tag @${NAME}.",
              replacements: {
                NAME: _v6.display_name
              },
              dictionary: {
                es: {
                  singular: "Conecte su cuenta de X y Vimeo publicará automáticamente en su feed las acciones que usted elija. Cualquier persona que tuitee sus videos etiquetará automáticamente a @${NAME}."
                },
                "de-DE": {
                  singular: "Verbinden Sie Ihr X-Konto und Vimeo wird automatisch die von Ihnen gewählten Aktionen in Ihrem Feed posten. Jeder, der Ihre Videos postet, wird automatisch mit @${NAME} markiert."
                },
                "fr-FR": {
                  singular: "Connectez votre compte X et Vimeo publiera automatiquement les actions de votre choix sur votre fil d'actualités. Tous ceux qui tweetent vos vidéos tagueront automatiquement @${NAME}."
                },
                "ja-JP": {
                  singular: "Xアカウントを接続すると、あなたが選択したアクションがVimeoによって自動的にフィードに投稿されます。また、他のユーザーがあなたの動画をツイートすると自動的に@${NAME}がタグ付けされます。"
                },
                "ko-KR": {
                  singular: "X 계정에 연결하면 Vimeo는 회원님이 선택한 작업을 자동으로 피드에 게시할 수 있습니다. 회원님의 동영상을 트윗하는 사람은 자동으로 @${NAME}을(를) 태그하게 됩니다."
                },
                "pt-BR": {
                  singular: "Conecte sua conta do X, e o Vimeo publicará automaticamente as ações escolhidas no seu feed. Qualquer pessoa que tuitar os seus vídeos mencionará automaticamente @${NAME}."
                },
                "zh-CN": {
                  singular: "绑定您的 X 账户，Vimeo 将自动把您选择的操作发布到您的订阅源中。任何在推特上发布视频的人都会自动标记 @${NAME}。"
                }
              }
            }) : _v37.PARTNER_ID.LINKEDIN === _v0 ? (0, _v14.translate)({
              singular: "By connecting to your LinkedIn account, Vimeo can automatically publish the actions of your choice to your LinkedIn feed.",
              dictionary: {
                es: {
                  singular: "Al conectarse a su cuenta de LinkedIn, Vimeo puede publicar automáticamente en su feed de LinkedIn las acciones que usted elija."
                },
                "de-DE": {
                  singular: "Indem Sie Ihr LinkedIn-Konto verbinden, kann Vimeo die von Ihnen gewählten Aktionen automatisch in Ihrem LinkedIn-Feed veröffentlichen."
                },
                "fr-FR": {
                  singular: "En se connectant à votre compte LinkedIn, Vimeo pourra publier automatiquement les actions de votre choix sur votre fil LinkedIn."
                },
                "ja-JP": {
                  singular: "LinkedInアカウントと接続すると、あなたが選択したアクションがVimeoによって自動的にLinkedInフィードに公開されます。"
                },
                "ko-KR": {
                  singular: "LinkedIn 계정에 연결하면 Vimeo는 회원님이 선택한 활동을 LinkedIn 피드에 자동으로 게시할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Ao se conectar à sua conta do LinkedIn, o Vimeo pode publicar automaticamente as ações de sua escolha no seu feed do LinkedIn."
                },
                "zh-CN": {
                  singular: "通过关联您的 LinkedIn 帐户，Vimeo 可以自动将您选择的操作发布到您的 LinkedIn 订阅源。"
                }
              }
            }) : _v37.PARTNER_ID.FACEBOOK === _v0 ? (0, _v14.translate)({
              singular: "By connecting to your Facebook account, Vimeo can automatically publish the actions of your choice to your Facebook pages. Only public content can be published on Facebook.",
              dictionary: {
                es: {
                  singular: "Al conectarse a su cuenta de Facebook, Vimeo puede publicar automáticamente en sus páginas de Facebook las acciones que usted elija. Solo se puede publicar contenido público en Facebook."
                },
                "de-DE": {
                  singular: "Durch die Verbindung mit Ihrem Facebook-Konto kann Vimeo die von Ihnen ausgewählten Aktionen automatisch auf Ihren Facebook-Seiten veröffentlichen. Auf Facebook dürfen nur öffentliche Inhalte veröffentlicht werden."
                },
                "fr-FR": {
                  singular: "En se connectant à votre compte Facebook, Vimeo pourra publier automatiquement les actions de votre choix sur vos pages Facebook. Seul le contenu public peut être publié sur Facebook."
                },
                "ja-JP": {
                  singular: "Facebookアカウントと接続すると、あなたが選択したアクションがVimeoによって自動的にFacebookページに公開されます。Facebookに公開されるのは一般公開のコンテンツのみです。"
                },
                "ko-KR": {
                  singular: "Facebook 계정에 연결하면 Vimeo는 회원님이 선택한 활동을 Facebook 페이지에 자동으로 게시할 수 있습니다. 공개 콘텐츠만 Facebook에 게시할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Ao se conectar à sua conta do Facebook, o Vimeo pode publicar automaticamente as ações de sua escolha nas suas páginas do Facebook. Somente conteúdo público pode ser publicado no Facebook."
                },
                "zh-CN": {
                  singular: "通过绑定您的 Facebook 账户，Vimeo 可以自动将您选择的操作发布到您的 Facebook 页面。只有公开内容可以在 Facebook 上发布。"
                }
              }
            }) : _v6.settings_description || ""
          }), _v14 && (0, _v1.jsx)(_v4.Alert, {
            status: "error",
            mt: "md",
            padding: "sm",
            alignItems: "center",
            onClose: () => _v15(!1),
            children: (0, _v1.jsx)(_v39.Paragraph, {
              size: "md",
              children: (0, _v14.translate)({
                singular: "Failed to fetch",
                dictionary: {
                  es: {
                    singular: "Error al recuperar"
                  },
                  "de-DE": {
                    singular: "Abrufen fehlgeschlagen"
                  },
                  "fr-FR": {
                    singular: "Échec de la récupération"
                  },
                  "ja-JP": {
                    singular: "取得できませんでした"
                  },
                  "ko-KR": {
                    singular: "가져오지 못했습니다."
                  },
                  "pt-BR": {
                    singular: "Falha ao buscar"
                  },
                  "zh-CN": {
                    singular: "获取失败"
                  }
                }
              })
            })
          }), _v12 && (0, _v1.jsx)(_v4.Alert, {
            status: "success",
            mt: "md",
            padding: "sm",
            alignItems: "center",
            onClose: () => _v13(!1),
            children: (0, _v1.jsx)(_v39.Paragraph, {
              size: "md",
              children: (0, _v14.translate)({
                singular: "Your settings have been saved!",
                dictionary: {
                  es: {
                    singular: "Se ha guardado su configuración"
                  },
                  "de-DE": {
                    singular: "Deine Einstellungen wurden gespeichert!"
                  },
                  "fr-FR": {
                    singular: "Vos paramètres ont été enregistrés !"
                  },
                  "ja-JP": {
                    singular: "設定内容が保存されました！"
                  },
                  "ko-KR": {
                    singular: "설정이 저장되었습니다!"
                  },
                  "pt-BR": {
                    singular: "Suas configurações foram salvas!"
                  },
                  "zh-CN": {
                    singular: "您的设置已保存！"
                  }
                }
              })
            })
          }), _v17 && (0, _v1.jsx)(_v54, {
            value: "string" == typeof _v8[_v51] ? _v8[_v51] : "",
            onChange: _v16,
            displayName: _v6.display_name || "",
            pages: _v6.pages || []
          }), _v52.map(_v0 => (0, _v1.jsx)(_v40.FormControl, {
            children: (0, _v1.jsx)(_v42.Checkbox, {
              size: "md",
              mt: "md",
              isDisabled: _v18,
              isChecked: !!_v8[_v0.key],
              onChange: _v0 => _v16(_v0.key, _v0.target.checked),
              children: _v0.text
            })
          }, _v0.key)), (0, _v1.jsx)(_v5.Box, {
            textAlign: "right",
            children: (0, _v1.jsx)(_v9.Button, {
              variant: "primary",
              isLoading: _v10,
              onClick: () => {
                _v2 && _v2.url && (_v7({
                  eventName: "vimeo.save_integration_notification_settings",
                  integrationName: _v1,
                  copy: (0, _v14.translate)({
                    singular: "Save",
                    dictionary: {
                      es: {
                        singular: "Guardar"
                      },
                      "de-DE": {
                        singular: "Speichern"
                      },
                      "fr-FR": {
                        singular: "Enregistrer"
                      },
                      "ja-JP": {
                        singular: "保存"
                      },
                      "ko-KR": {
                        singular: "저장"
                      },
                      "pt-BR": {
                        singular: "Salvar"
                      },
                      "zh-CN": {
                        singular: "保存"
                      }
                    }
                  })
                }), _v15(!1), _v13(!1), _v11(!0), fetch(_v2.url, {
                  method: _v2?.method,
                  body: JSON.stringify({
                    ..._v2.payload,
                    ..._v8,
                    token: _v4
                  }),
                  headers: {
                    "Content-type": "application/json"
                  }
                }).then(_v0 => {
                  if (_v0.ok || 200 === _v0.status) return void _v13(!0);
                }).catch(_v0 => {
                  _v15(!0), console.error(_v0);
                }).finally(() => {
                  _v11(!1);
                }));
              },
              mt: "md",
              children: (0, _v14.translate)({
                singular: "Save",
                dictionary: {
                  es: {
                    singular: "Guardar"
                  },
                  "de-DE": {
                    singular: "Speichern"
                  },
                  "fr-FR": {
                    singular: "Enregistrer"
                  },
                  "ja-JP": {
                    singular: "保存"
                  },
                  "ko-KR": {
                    singular: "저장"
                  },
                  "pt-BR": {
                    singular: "Salvar"
                  },
                  "zh-CN": {
                    singular: "保存"
                  }
                }
              })
            })
          })]
        })
      });
    },
    _v54 = ({
      displayName: _v0,
      pages: _v1,
      value: _v2,
      onChange: _v3
    }) => (0, _v1.jsx)(_v5.Box, {
      mt: "md",
      children: (0, _v1.jsx)(_v41.Select, {
        items: [{
          label: _v0,
          value: ""
        }, ..._v1.map(_v0 => ({
          label: _v0.name,
          value: _v0.id
        }))],
        placeholder: (0, _v14.translate)({
          singular: "select page",
          dictionary: {
            es: {
              singular: "seleccionar página"
            },
            "de-DE": {
              singular: "Seite auswählen"
            },
            "fr-FR": {
              singular: "sélectionnez la page"
            },
            "ja-JP": {
              singular: "ページを選択"
            },
            "ko-KR": {
              singular: "페이지 선택"
            },
            "pt-BR": {
              singular: "selecionar página"
            },
            "zh-CN": {
              singular: "选择页面"
            }
          }
        }),
        size: "md",
        value: [_v2],
        onValueChange: _v0 => {
          _v3(_v51, _v0.value[0]);
        }
      })
    });
  var _v55 = _v0.i(0);
  let _v56 = ({
      appId: _v0
    }) => {
      let _v1 = (0, _v3.useContext)(_v36.ViewerContext);
      return _v1 ? (0, _v1.jsxs)(_v5.Box, {
        children: [(0, _v1.jsx)(_v23.Header, {
          mb: "xs",
          size: "xs",
          children: (0, _v14.translate)({
            singular: "Automatically upload from Dropbox",
            dictionary: {
              es: {
                singular: "Subir automáticamente desde Dropbox"
              },
              "de-DE": {
                singular: "Automatischer Upload von Dropbox"
              },
              "fr-FR": {
                singular: "Mettre en ligne automatiquement à partir de la Dropbox"
              },
              "ja-JP": {
                singular: "Dropboxから自動的にアップロード"
              },
              "ko-KR": {
                singular: "드롭박스에서 자동 업로드"
              },
              "pt-BR": {
                singular: "Carregar automaticamente do Dropbox"
              },
              "zh-CN": {
                singular: "自动从 Dropbox 上传"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          color: "text-secondary",
          display: "inline-block",
          mb: "md",
          children: (0, _v14.translate)({
            singular: "Select a Dropbox folder for Vimeo to upload files from. Any new videos in the folder will be automatically uploaded to your selected Vimeo folder.",
            dictionary: {
              es: {
                singular: "Seleccione una carpeta de Dropbox desde la que Vimeo subirá los archivos. Todos los videos nuevos que se agreguen a esa carpeta se subirán automáticamente a la carpeta de Vimeo que haya seleccionado."
              },
              "de-DE": {
                singular: "Wählen Sie einen Dropbox-Ordner für Vimeo aus, von dem Dateien hochgeladen werden sollen. Alle neuen Videos im Ordner werden automatisch in Ihren ausgewählten Vimeo-Ordner hochgeladen."
              },
              "fr-FR": {
                singular: "Sélectionnez un dossier Dropbox à partir duquel Vimeo pourra mettre en ligne des fichiers. Toute nouvelle vidéo dans le dossier sera automatiquement mise en ligne dans le dossier Vimeo sélectionné."
              },
              "ja-JP": {
                singular: "VimeoがどのDropboxフォルダーからファイルをアップロードするのかを選択してください。このフォルダーに入る新しい動画はすべて、選択したVimeoフォルダーに自動的にアップロードされます。"
              },
              "ko-KR": {
                singular: "Vimeo가 파일을 업로드할 Dropbox 폴더를 선택하세요. 폴더의 새 동영상은 선택하신 Vimeo 폴더에 자동으로 업로드됩니다."
              },
              "pt-BR": {
                singular: "Selecione uma pasta do Dropbox a partir da qual o Vimeo vai carregar arquivos. Todos os vídeos novos nessa pasta serão carregados automaticamente para a pasta do Vimeo que você escolher."
              },
              "zh-CN": {
                singular: "选择一个 Dropbox 文件夹，以便 Vimeo 上传文件。该文件夹中的所有新视频将自动上传到您选择的 Vimeo 文件夹。"
              }
            }
          })
        }), (0, _v1.jsx)(_v23.Header, {
          size: "xs",
          mb: "md",
          children: (0, _v14.translate)({
            singular: "Select Dropbox folder",
            dictionary: {
              es: {
                singular: "Seleccione la carpeta de Dropbox"
              },
              "de-DE": {
                singular: "Einen Dropbox-Ordner auswählen"
              },
              "fr-FR": {
                singular: "Sélectionnez le dossier Dropbox"
              },
              "ja-JP": {
                singular: "Dropboxフォルダーを選択"
              },
              "ko-KR": {
                singular: "Dropbox 폴더 선택"
              },
              "pt-BR": {
                singular: "Selecione a Pasta do Dropbox"
              },
              "zh-CN": {
                singular: "选择 Dropbox 文件夹"
              }
            }
          })
        }), (0, _v1.jsx)(_v55.DropboxConnect, {
          isSettingsPage: !0
        }), (0, _v1.jsx)(_v23.Header, {
          size: "xs",
          mb: "md",
          mt: "md",
          children: (0, _v14.translate)({
            singular: "Select Vimeo destination",
            dictionary: {
              es: {
                singular: "Seleccione el destino de Vimeo"
              },
              "de-DE": {
                singular: "Vimeo-Ziel auswählen"
              },
              "fr-FR": {
                singular: "Sélectionnez la destination Vimeo"
              },
              "ja-JP": {
                singular: "Vimeoの保存先を選択"
              },
              "ko-KR": {
                singular: "Vimeo 목적지 선택"
              },
              "pt-BR": {
                singular: "Selecione o destino do Vimeo"
              },
              "zh-CN": {
                singular: "选择 Vimeo 目标位置"
              }
            }
          })
        }), (0, _v1.jsx)(_v35.AppSettingsPage, {
          viewer: _v1,
          appId: Number(_v0),
          isSettingsPage: !0
        })]
      }) : (0, _v1.jsx)(_v1.Fragment, {});
    },
    _v57 = () => {
      let _v0 = (0, _v2.useRouter)();
      return (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v7.Flex, {
          gap: 4,
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          children: [(0, _v1.jsxs)(_v5.Box, {
            children: [(0, _v1.jsx)(_v23.Header, {
              size: "xs",
              mb: "xs",
              children: (0, _v14.translate)({
                singular: "Connect Your Vimeo Library to Hubspot",
                dictionary: {
                  es: {
                    singular: "Conecte su biblioteca de Vimeo a Hubspot"
                  },
                  "de-DE": {
                    singular: "Verbinden Sie Ihre Vimeo-Bibliothek mit HubSpot"
                  },
                  "fr-FR": {
                    singular: "Connectez votre bibliothèque Vimeo à Hubspot"
                  },
                  "ja-JP": {
                    singular: "VimeoライブラリをHubSpotに接続"
                  },
                  "ko-KR": {
                    singular: "Vimeo 라이브러리를 HubSpot에 연결하세요."
                  },
                  "pt-BR": {
                    singular: "Conecte sua Biblioteca do Vimeo ao HubSpot"
                  },
                  "zh-CN": {
                    singular: "将您的 Vimeo 库连接到 HubSpot"
                  }
                }
              })
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v14.translate)({
                singular: "Browse and use your Vimeo videos directly within HubSpot Media Bridge.",
                dictionary: {
                  es: {
                    singular: "Explore y use sus videos de Vimeo directamente dentro de HubSpot Media Bridge."
                  },
                  "de-DE": {
                    singular: "Durchsuchen und verwenden Sie Ihre Vimeo-Videos direkt innerhalb der HubSpot Media Bridge."
                  },
                  "fr-FR": {
                    singular: "Parcourez et utilisez vos vidéos Vimeo directement dans HubSpot Media Bridge."
                  },
                  "ja-JP": {
                    singular: "HubSpot Media Bridge内からVimeoの動画を直接閲覧・使用できます。"
                  },
                  "ko-KR": {
                    singular: "HubSpot Media Bridge에서 Vimeo 동영상을 직접 검색하고 활용하세요."
                  },
                  "pt-BR": {
                    singular: "Explore e use seus vídeos do Vimeo direto no HubSpot Media Bridge."
                  },
                  "zh-CN": {
                    singular: "直接在 HubSpot Media Bridge 中浏览和使用您的 Vimeo 视频。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v8.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v14.translate)({
                singular: "Choose a Vimeo team and folder you want to sync.",
                dictionary: {
                  es: {
                    singular: "Seleccione el equipo y la carpeta de Vimeo que quiera sincronizar."
                  },
                  "de-DE": {
                    singular: "Wählen Sie ein Vimeo-Team und einen Ordner, den Sie synchronisieren möchten."
                  },
                  "fr-FR": {
                    singular: "Veuillez choisir une équipe Vimeo ainsi qu'un dossier à synchroniser."
                  },
                  "ja-JP": {
                    singular: "同期したいVimeoのチームとフォルダーを選択してください。"
                  },
                  "ko-KR": {
                    singular: "동기화할 Vimeo 팀과 폴더를 선택하세요."
                  },
                  "pt-BR": {
                    singular: "Escolha uma equipe do Vimeo e uma pasta para sincronizar."
                  },
                  "zh-CN": {
                    singular: "选择您要同步的 Vimeo 团队和文件夹。"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v9.Button, {
            variant: "secondary",
            size: "md",
            onClick: () => _v0.push("/settings/marketing/provider/hubspot/mediabridge/onboard"),
            children: (0, _v14.translate)({
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
          })]
        })
      });
    };
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = ({
    appName: _v0
  }) => {
    let _v1 = (0, _v2.useRouter)(),
      _v2 = (0, _v18.useViewer)(),
      {
        sendManageEvents: _v3
      } = (0, _v31.useTracking)(),
      _v4 = _v2?.teamUser?.plainTextPermissionLevel?.toUpperCase(),
      _v5 = !_v4 || "ADMIN" === _v4 || "OWNER" === _v4,
      {
        workspaceUuid: _v6,
        organizationUuid: _v7
      } = (0, _v60.useCurrentWorkspaceDetails)(),
      {
        teamSettingsResult: _v8
      } = (0, _v59.useGetTeamSettings)({
        userId: _v5 ? _v2?.teamUser?.ownerId || _v2?.user?.id : void 0,
        orgUuid: _v5 && _v7 ? _v7 : void 0,
        workspaceUuid: _v5 && _v6 ? _v6 : void 0,
        settings: ["publishToSocialAllowedAdmin", "publishToSocialAllowedContributor"]
      }),
      _v9 = (0, _v3.useMemo)(() => _v8 ? _v8.publishToSocialAllowedContributor && _v8.publishToSocialAllowedAdmin ? (0, _v14.translate)({
        singular: "Currently allowed: Contributors, Admins, and Account Owner",
        dictionary: {
          es: {
            singular: "Permitido actualmente: colaboradores, administradores y propietario de la cuenta"
          },
          "de-DE": {
            singular: "Derzeit erlaubt: Mitwirkende, Administratoren und Kontoinhaber."
          },
          "fr-FR": {
            singular: "Autorisations actuelles : Contributeurs, administrateurs et propriétaire du compte"
          },
          "ja-JP": {
            singular: "現在の許可対象：投稿者、管理者、アカウント所有者"
          },
          "ko-KR": {
            singular: "현재 허용됨: 기여자, 관리자, 계정 소유자"
          },
          "pt-BR": {
            singular: "Permissão atual: colaboradores, administradores e proprietário da conta"
          },
          "zh-CN": {
            singular: "当前允许：贡献者、管理员和帐户所有者"
          }
        }
      }) : _v8.publishToSocialAllowedContributor ? (0, _v14.translate)({
        singular: "Currently allowed: Contributors, and Account Owner",
        dictionary: {
          es: {
            singular: "Permitido actualmente: colaboradores y propietario de la cuenta"
          },
          "de-DE": {
            singular: "Derzeit erlaubt: Mitwirkende und Kontoinhaber"
          },
          "fr-FR": {
            singular: "Autorisations actuelles : Contributeurs et propriétaire du compte"
          },
          "ja-JP": {
            singular: "現在の許可対象：投稿者とアカウント所有者"
          },
          "ko-KR": {
            singular: "현재 허용됨: 기여자, 계정 소유자"
          },
          "pt-BR": {
            singular: "Permissão atual: colaboradores e proprietário da conta"
          },
          "zh-CN": {
            singular: "目前允许：贡献者、帐户所有者"
          }
        }
      }) : _v8.publishToSocialAllowedAdmin ? (0, _v14.translate)({
        singular: "Currently allowed: Admin, and Account Owner",
        dictionary: {
          es: {
            singular: "Permitido actualmente: administrador y propietario de la cuenta"
          },
          "de-DE": {
            singular: "Derzeit erlaubt: Admin und Kontoinhaber"
          },
          "fr-FR": {
            singular: "Autorisations actuelles : Administrateur et propriétaire du compte"
          },
          "ja-JP": {
            singular: "現在の許可対象：管理者とアカウント所有者"
          },
          "ko-KR": {
            singular: "현재 허용됨: 관리자, 계정 소유자"
          },
          "pt-BR": {
            singular: "Permissão atual: administrador e proprietário da conta"
          },
          "zh-CN": {
            singular: "当前允许：管理员和帐户所有者"
          }
        }
      }) : (0, _v14.translate)({
        singular: "Currently allowed: Account Owner",
        dictionary: {
          es: {
            singular: "Permitido actualmente: propietario de la cuenta"
          },
          "de-DE": {
            singular: "Derzeit erlaubt: Kontoinhaber"
          },
          "fr-FR": {
            singular: "Autorisations actuelles : Propriétaire du compte"
          },
          "ja-JP": {
            singular: "現在の許可対象：アカウント所有者"
          },
          "ko-KR": {
            singular: "현재 허용됨: 계정 소유자"
          },
          "pt-BR": {
            singular: "Permissão atual: proprietário da conta"
          },
          "zh-CN": {
            singular: "当前允许：帐户所有者"
          }
        }
      }) : "", [_v8]);
    return _v5 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v7.Flex, {
        gap: 4,
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        children: [(0, _v1.jsxs)(_v5.Box, {
          children: [(0, _v1.jsx)(_v23.Header, {
            size: "xs",
            mb: "sm",
            children: (0, _v14.translate)({
              singular: "Publishing permissions by role",
              dictionary: {
                es: {
                  singular: "Permisos de publicación por función"
                },
                "de-DE": {
                  singular: "Veröffentlichungsberechtigungen nach Rolle"
                },
                "fr-FR": {
                  singular: "Autorisations de publication par rôle"
                },
                "ja-JP": {
                  singular: "役割ごとの公開権限"
                },
                "ko-KR": {
                  singular: "역할별 게시 권한"
                },
                "pt-BR": {
                  singular: "Permissões de publicação por função"
                },
                "zh-CN": {
                  singular: "按角色设置发布权限"
                }
              }
            })
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            color: "text-secondary",
            mb: "sm",
            children: (0, _v14.translate)({
              singular: "Control which members can publish to third-party platforms",
              dictionary: {
                es: {
                  singular: "Controle qué miembros pueden publicar en plataformas de terceros"
                },
                "de-DE": {
                  singular: "Kontrollieren Sie, welche Mitglieder auf Drittanbieterplattformen veröffentlichen können."
                },
                "fr-FR": {
                  singular: "Contrôlez quels membres peuvent publier du contenu sur des plateformes tierces"
                },
                "ja-JP": {
                  singular: "どのメンバーがサードパーティのプラットフォームに公開できるかを管理します"
                },
                "ko-KR": {
                  singular: "타사 플랫폼에 게시할 수 있는 멤버 권한을 제어합니다."
                },
                "pt-BR": {
                  singular: "Controle quais membros podem publicar em plataformas de terceiros"
                },
                "zh-CN": {
                  singular: "控制哪些成员可以发布到第三方平台"
                }
              }
            })
          }), (0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            children: _v9
          })]
        }), (0, _v1.jsx)(_v9.Button, {
          variant: "secondary",
          size: "md",
          onClick: () => {
            _v3({
              eventName: "vimeo.edit_integration_privacy",
              integrationName: _v0,
              copy: (0, _v14.translate)({
                singular: "Edit",
                dictionary: {
                  es: {
                    singular: "Editar"
                  },
                  "de-DE": {
                    singular: "Bearbeiten"
                  },
                  "fr-FR": {
                    singular: "Modifier"
                  },
                  "ja-JP": {
                    singular: "編集"
                  },
                  "ko-KR": {
                    singular: "편집"
                  },
                  "pt-BR": {
                    singular: "Editar"
                  },
                  "zh-CN": {
                    singular: "编辑"
                  }
                }
              })
            }), _v6 ? _v1.push(_v61.EXTERNAL_ROUTES.WORKSPACE_MANAGE_PRIVACY_RESTRICTIONS) : _v1.push(_v61.EXTERNAL_ROUTES.MANAGE_PRIVACY_RESTRICTIONS);
          },
          leftIcon: (0, _v1.jsx)(_v58.PopOut, {}),
          children: (0, _v14.translate)({
            singular: "Edit",
            dictionary: {
              es: {
                singular: "Editar"
              },
              "de-DE": {
                singular: "Bearbeiten"
              },
              "fr-FR": {
                singular: "Modifier"
              },
              "ja-JP": {
                singular: "編集"
              },
              "ko-KR": {
                singular: "편집"
              },
              "pt-BR": {
                singular: "Editar"
              },
              "zh-CN": {
                singular: "编辑"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v19.Divider, {
        borderColor: "stroke",
        mt: 4,
        mb: 4
      })]
    }) : null;
  };
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  function _v66({
    method: _v0 = "POST",
    url: _v1,
    text: _v2 = (0, _v14.translate)({
      singular: "Disconnect",
      dictionary: {
        es: {
          singular: "Desconectar"
        },
        "de-DE": {
          singular: "Verbindung unterbrechen"
        },
        "fr-FR": {
          singular: "Se déconnecter"
        },
        "ja-JP": {
          singular: "接続解除"
        },
        "ko-KR": {
          singular: "연결 해제"
        },
        "pt-BR": {
          singular: "Desconectar"
        },
        "zh-CN": {
          singular: "取消关联"
        }
      }
    }),
    payload: _v3 = {},
    appId: _v4,
    appName: _v5,
    isFirstPartyApp: _v6,
    isDisabled: _v7,
    children: _v8
  }) {
    let _v9 = (0, _v2.useRouter)(),
      {
        sendConnectionEvent: _v10
      } = (0, _v31.useTracking)(),
      {
        xsrft: _v11
      } = (0, _v3.useContext)(_v36.ViewerContext) || {},
      [_v12, _v13] = (0, _v3.useState)(!1),
      _v14 = () => {
        _v10({
          isConnect: !1,
          buttonText: _v8 ? void 0 : _v2,
          integrationName: _v5
        }), _v13(!0), fetch(_v1, {
          method: _v0,
          body: JSON.stringify({
            ..._v3,
            token: _v11,
            app_id: _v4
          }),
          headers: {
            "Content-type": "application/json"
          }
        }).then(_v0 => {
          (200 === _v0.status || _v0.ok || _v0.redirected) && (_v6 ? _v9.reload() : _v9.push(_v61.APP_CENTER_ROUTES.MY_APPS));
        }).catch(_v0 => console.error(_v0)).finally(() => {
          _v13(!1);
        });
      };
    return _v8 ? (0, _v1.jsx)("div", {
      onClick: _v14,
      children: _v8
    }) : (0, _v1.jsx)(_v9.Button, {
      variant: "destructive",
      size: "md",
      onClick: _v14,
      isLoading: _v12,
      isDisabled: _v7,
      children: _v2
    });
  }
  let _v67 = ({
    partnerIntegrationId: _v0,
    appName: _v1
  }) => {
    let _v2 = (0, _v2.useRouter)(),
      {
        sendManageEvents: _v3
      } = (0, _v31.useTracking)(),
      {
        data: _v4
      } = (0, _v43.useFetchAppsData)(),
      _v5 = _v4?.ecommerce_apps?.shopify?.shops,
      _v6 = _v37.APP_CONFIG[_v0];
    return _v6.connect && _v6.disconnect ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v23.Header, {
        size: "xs",
        mb: "xs",
        children: (0, _v14.translate)({
          singular: "Embed Vimeo Videos in Your Shopify Store",
          dictionary: {
            es: {
              singular: "Inserte videos de Vimeo en su tienda de Shopify"
            },
            "de-DE": {
              singular: "Vimeo-Videos in Ihren Shopify-Shop einbetten"
            },
            "fr-FR": {
              singular: "Intégrez des vidéos Vimeo dans votre boutique Shopify"
            },
            "ja-JP": {
              singular: "Vimeo動画をShopifyストアに埋め込む"
            },
            "ko-KR": {
              singular: "Shopify 스토어에 Vimeo 동영상을 임베드하세요."
            },
            "pt-BR": {
              singular: "Incorpore vídeos do Vimeo à sua loja da Shopify"
            },
            "zh-CN": {
              singular: "在您的 Shopify 商店中嵌入 Vimeo 视频"
            }
          }
        })
      }), (0, _v1.jsx)(_v8.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: (0, _v14.translate)({
          singular: "Let Vimeo to embed your videos directly into your Shopify store.",
          dictionary: {
            es: {
              singular: "Permita que Vimeo inserte sus videos directamente en su tienda de Shopify."
            },
            "de-DE": {
              singular: "Lassen Sie Vimeo Ihre Videos direkt in Ihren Shopify-Shop einbetten."
            },
            "fr-FR": {
              singular: "Permettez à Vimeo d'intégrer vos vidéos directement dans votre boutique Shopify."
            },
            "ja-JP": {
              singular: "Vimeoを使用して、動画をShopifyストアに直接埋め込みましょう。"
            },
            "ko-KR": {
              singular: "Vimeo를 통해 Shopify 스토어에 동영상을 직접 임베드하세요."
            },
            "pt-BR": {
              singular: "Permita que o Vimeo incorpore seus vídeos direto na sua loja da Shopify."
            },
            "zh-CN": {
              singular: "让 Vimeo 将您的视频直接嵌入到您的 Shopify 商店中。"
            }
          }
        })
      }), (0, _v1.jsxs)(_v7.Flex, {
        gap: "sm",
        flexWrap: "wrap",
        mt: "md",
        mb: "md",
        children: [Array.isArray(_v5) && _v5.map(_v0 => (0, _v1.jsxs)(_v63.Tag, {
          size: "lg",
          children: [(0, _v1.jsx)(_v63.TagLabel, {
            children: _v0.domain
          }), (0, _v1.jsx)(_v66, {
            url: _v6.disconnect.url,
            payload: {
              ..._v6.disconnect.payload,
              shop: _v0.domain
            },
            appName: _v1,
            children: (0, _v1.jsx)(_v63.TagCloseButton, {
              onClick: () => {
                _v3({
                  eventName: "vimeo.delete_shopify_store"
                });
              },
              children: (0, _v1.jsx)(_v64.CloseXSmall, {})
            })
          })]
        }, _v0.domain)), (0, _v1.jsx)(_v9.Button, {
          variant: "primary",
          size: "sm",
          onClick: () => {
            _v6?.connect?.url && (_v3({
              eventName: "vimeo.add_shopify_store",
              copy: (0, _v14.translate)({
                singular: "Add",
                dictionary: {
                  es: {
                    singular: "Agregar"
                  },
                  "de-DE": {
                    singular: "Hinzufügen"
                  },
                  "fr-FR": {
                    singular: "Ajouter"
                  },
                  "ja-JP": {
                    singular: "追加"
                  },
                  "ko-KR": {
                    singular: "추가"
                  },
                  "pt-BR": {
                    singular: "Adicionar"
                  },
                  "zh-CN": {
                    singular: "添加"
                  }
                }
              })
            }), _v2.push(_v6.connect.url));
          },
          leftIcon: (0, _v1.jsx)(_v65.PlusSmall, {}),
          children: (0, _v14.translate)({
            singular: "Add",
            dictionary: {
              es: {
                singular: "Agregar"
              },
              "de-DE": {
                singular: "Hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter"
              },
              "ja-JP": {
                singular: "追加"
              },
              "ko-KR": {
                singular: "추가"
              },
              "pt-BR": {
                singular: "Adicionar"
              },
              "zh-CN": {
                singular: "添加"
              }
            }
          })
        })]
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {});
  };
  function _v68({
    type: _v0,
    appId: _v1,
    partnerIntegrationId: _v2,
    appName: _v3
  }) {
    let _v4 = (0, _v3.useMemo)(() => {
      switch (_v0) {
        case "SettingsAutoArchive":
          return _v1 ? (0, _v1.jsx)(_v38, {
            appId: _v1,
            partnerIntegrationId: _v2
          }) : null;
        case "SettingsAutoPublish":
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v62, {
              appName: _v3
            }), (0, _v1.jsx)(_v53, {
              partnerIntegrationId: _v2,
              appName: _v3
            })]
          });
        case "SettingsHubspotMediaBridge":
          return (0, _v1.jsx)(_v57, {});
        case "SettingsPrivacyRestrictions":
          return (0, _v1.jsx)(_v62, {
            appName: _v3
          });
        case "SettingsShopify":
          return (0, _v1.jsx)(_v67, {
            partnerIntegrationId: _v2,
            appName: _v3
          });
        case "SettingsDropboxAutoUpload":
          return _v1 ? (0, _v1.jsx)(_v56, {
            appId: _v1
          }) : null;
        default:
          return null;
      }
    }, [_v1, _v3, _v2, _v0]);
    return (0, _v1.jsx)(_v5.Box, {
      children: _v4
    });
  }
  var _v69 = _v0.i(0);
  function _v70() {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = (0, _v3.useContext)(_v36.ViewerContext),
      [_v2, _v3] = (0, _v3.useState)(!1),
      _v4 = async () => {
        if (_v1 && !_v2) {
          _v3(!0);
          try {
            let _v0 = _v1.teamUser?.ownerId ?? _v1.user?.id;
            await (0, _v69.deleteTeamAutoArchive)({
              baseUrl: `//${_v1.apiUrl}`,
              headers: {
                Authorization: `jwt ${_v1.jwt}`,
                "Content-Type": "application/json",
                "Vimeo-Page": window.location.pathname,
                "Accept-Language": _v1.locale ?? "en"
              },
              where: {
                userId: Number(_v0)
              }
            }), _v0.reload();
          } finally {
            _v3(!1);
          }
        }
      };
    return (0, _v1.jsxs)(_v7.Flex, {
      gap: 4,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: {
        base: "wrap",
        md: "nowrap"
      },
      children: [(0, _v1.jsxs)(_v5.Box, {
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          mb: "xs",
          children: (0, _v14.translate)({
            singular: "Disconnect all",
            dictionary: {
              es: {
                singular: "Desconectar todo"
              },
              "de-DE": {
                singular: "Alle trennen"
              },
              "fr-FR": {
                singular: "Tout déconnecter"
              },
              "ja-JP": {
                singular: "全員を解除"
              },
              "ko-KR": {
                singular: "모두 연결 해제"
              },
              "pt-BR": {
                singular: "Desconectar para todos"
              },
              "zh-CN": {
                singular: "断开所有"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v14.translate)({
            singular: "This integration will be disconnected for all users. No recordings will be saved in Vimeo, but existing recordings will still be available.",
            dictionary: {
              es: {
                singular: "Esta integración se desconectará para todos los usuarios. No se guardarán grabaciones en Vimeo, pero las grabaciones existentes seguirán disponibles."
              },
              "de-DE": {
                singular: "Diese Integration wird für alle Benutzer getrennt. Es werden keine Aufzeichnungen in Vimeo gespeichert, aber vorhandene Aufzeichnungen sind weiterhin verfügbar."
              },
              "fr-FR": {
                singular: "Cette intégration sera déconnectée pour tous les utilisateurs. Aucun enregistrement ne sera enregistré sur Vimeo, mais les enregistrements existants resteront disponibles."
              },
              "ja-JP": {
                singular: "すべてのユーザーがこの統合から解除されます。録画コンテンツはVimeoに保存されなくなりますが、既存の録画コンテンツは引き続き利用可能です。"
              },
              "ko-KR": {
                singular: "이 통합은 모든 사용자에 대해 연결이 해제됩니다. 녹화는 Vimeo에 저장되지 않지만 기존 녹화는 계속 이용할 수 있습니다."
              },
              "pt-BR": {
                singular: "Esta integração será desconectada para todos os usuários. Nenhuma gravação será salva no Vimeo, mas as gravações existentes continuarão disponíveis."
              },
              "zh-CN": {
                singular: "此集成将为所有用户断开连接。Vimeo 中不会保存任何录像，但现有录像仍然可用。"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v9.Button, {
        variant: "destructive",
        size: "md",
        onClick: _v4,
        isLoading: _v2,
        children: (0, _v14.translate)({
          singular: "Disconnect all",
          dictionary: {
            es: {
              singular: "Desconectar todo"
            },
            "de-DE": {
              singular: "Alle trennen"
            },
            "fr-FR": {
              singular: "Tout déconnecter"
            },
            "ja-JP": {
              singular: "全員を解除"
            },
            "ko-KR": {
              singular: "모두 연결 해제"
            },
            "pt-BR": {
              singular: "Desconectar para todos"
            },
            "zh-CN": {
              singular: "断开所有"
            }
          }
        })
      })]
    });
  }
  function _v71({
    appName: _v0,
    appId: _v1,
    isOwnerOrAdmin: _v2
  }) {
    return (0, _v1.jsxs)(_v7.Flex, {
      gap: 4,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: {
        base: "wrap",
        md: "nowrap"
      },
      children: [(0, _v1.jsxs)(_v5.Box, {
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          mb: "xs",
          children: _v2 ? (0, _v14.translate)({
            singular: "Disconnect me",
            dictionary: {
              es: {
                singular: "Desconectarme"
              },
              "de-DE": {
                singular: "Verbindung trennen"
              },
              "fr-FR": {
                singular: "Me déconnecter"
              },
              "ja-JP": {
                singular: "自分を解除"
              },
              "ko-KR": {
                singular: "나 연결 해제"
              },
              "pt-BR": {
                singular: "Desconectar para mim"
              },
              "zh-CN": {
                singular: "断开我的连接"
              }
            }
          }) : (0, _v14.translate)({
            singular: "Disconnect",
            dictionary: {
              es: {
                singular: "Desconectar"
              },
              "de-DE": {
                singular: "Verbindung unterbrechen"
              },
              "fr-FR": {
                singular: "Se déconnecter"
              },
              "ja-JP": {
                singular: "接続解除"
              },
              "ko-KR": {
                singular: "연결 해제"
              },
              "pt-BR": {
                singular: "Desconectar"
              },
              "zh-CN": {
                singular: "取消关联"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: _v2 ? (0, _v14.translate)({
            singular: "Only you will be disconnected from this integration. Other users will stay connected. Your recordings will no longer be saved in Vimeo, but existing recordings will still be available.",
            dictionary: {
              es: {
                singular: "Solo usted se desconectará de esta integración. Otros usuarios permanecerán conectados. Sus grabaciones ya no se guardarán en Vimeo, pero las grabaciones existentes seguirán estando disponibles."
              },
              "de-DE": {
                singular: "Nur Sie werden von dieser Integration getrennt. Andere Benutzer bleiben verbunden. Ihre Aufnahmen werden nicht mehr in Vimeo gespeichert, bestehende Aufnahmen werden jedoch weiterhin verfügbar sein."
              },
              "fr-FR": {
                singular: "Cette intégration sera déconnectée uniquement pour vous. Les autres utilisateurs resteront connectés. Vos enregistrements ne seront plus enregistrés sur Vimeo, mais les enregistrements existants resteront disponibles."
              },
              "ja-JP": {
                singular: "この統合から解除されるのはあなただけです。他のユーザーに対しては引き続き連携が維持されます。あなたの録画コンテンツはVimeoに保存されなくなりますが、既存の録画コンテンツは引き続き利用可能です。"
              },
              "ko-KR": {
                singular: "회원님만 이 통합에서 연결이 해제됩니다. 다른 사용자는 계속 연결 상태를 유지합니다. 회원님의 녹화는 더 이상 Vimeo에 저장되지 않지만 기존 녹화는 계속 이용할 수 있습니다."
              },
              "pt-BR": {
                singular: "Esta integração será desconectada apenas para você. Outros usuários permanecerão conectados. Suas gravações não serão mais salvas no Vimeo, mas as gravações existentes continuarão disponíveis."
              },
              "zh-CN": {
                singular: "只有您将与此集成断开连接。其他用户将保持连接。您的录制内容将不再保存在 Vimeo 中，但现有录制内容仍然可用。"
              }
            }
          }) : (0, _v14.translate)({
            singular: "Your recordings will no longer be saved in Vimeo. Existing recordings will still be available.",
            dictionary: {
              es: {
                singular: "Sus grabaciones ya no se guardarán en Vimeo. Las grabaciones existentes seguirán estando disponibles."
              },
              "de-DE": {
                singular: "Ihre Aufnahmen werden nicht mehr in Vimeo gespeichert. Vorhandene Aufzeichnungen bleiben weiterhin verfügbar."
              },
              "fr-FR": {
                singular: "Vos enregistrements ne seront plus enregistrés sur Vimeo. Les enregistrements existants resteront disponibles."
              },
              "ja-JP": {
                singular: "あなたの録画コンテンツはVimeoに保存されなくなります。既存の録画コンテンツは引き続き利用可能です。"
              },
              "ko-KR": {
                singular: "녹화가 더 이상 Vimeo에 저장되지 않습니다. 기존 녹화는 계속 이용할 수 있습니다."
              },
              "pt-BR": {
                singular: "Suas gravações não serão mais salvas no Vimeo. As gravações existentes continuarão disponíveis."
              },
              "zh-CN": {
                singular: "您的录制内容将不再保存在 Vimeo 中。现有录制内容仍然可用。"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v66, {
        url: "/settings/apps?action=remove_app",
        appName: _v0,
        appId: _v1,
        isFirstPartyApp: !0,
        text: _v2 ? (0, _v14.translate)({
          singular: "Disconnect me",
          dictionary: {
            es: {
              singular: "Desconectarme"
            },
            "de-DE": {
              singular: "Verbindung trennen"
            },
            "fr-FR": {
              singular: "Me déconnecter"
            },
            "ja-JP": {
              singular: "自分を解除"
            },
            "ko-KR": {
              singular: "나 연결 해제"
            },
            "pt-BR": {
              singular: "Desconectar para mim"
            },
            "zh-CN": {
              singular: "断开我的连接"
            }
          }
        }) : (0, _v14.translate)({
          singular: "Disconnect",
          dictionary: {
            es: {
              singular: "Desconectar"
            },
            "de-DE": {
              singular: "Verbindung unterbrechen"
            },
            "fr-FR": {
              singular: "Se déconnecter"
            },
            "ja-JP": {
              singular: "接続解除"
            },
            "ko-KR": {
              singular: "연결 해제"
            },
            "pt-BR": {
              singular: "Desconectar"
            },
            "zh-CN": {
              singular: "取消关联"
            }
          }
        })
      })]
    });
  }
  function _v72({
    isOwnerOrAdmin: _v0,
    isUserConnected: _v1,
    appName: _v2,
    appId: _v3
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v1 && (0, _v1.jsx)(_v71, {
        appName: _v2,
        appId: _v3,
        isOwnerOrAdmin: _v0
      }), _v1 && _v0 && (0, _v1.jsx)(_v19.Divider, {
        borderColor: "stroke",
        mt: 4,
        mb: 4
      }), _v0 && (0, _v1.jsx)(_v70, {})]
    });
  }
  let _v73 = ({
    partnerEmailId: _v0,
    connectedDate: _v1,
    disconnectConfig: _v2,
    appId: _v3,
    partnerIntegrationId: _v4,
    customSettingsType: _v5,
    appName: _v6,
    isFirstPartyApp: _v7,
    isOwnerOrAdmin: _v8,
    isUserConnected: _v9
  }) => (0, _v1.jsxs)(_v5.Box, {
    padding: "lg",
    marginTop: 6,
    backgroundColor: "fill-surface",
    borderRadius: "md",
    children: [_v0 && _v1 && (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v5.Box, {
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          children: (0, _v14.translate)({
            singular: "Connected account",
            dictionary: {
              es: {
                singular: "Cuenta conectada"
              },
              "de-DE": {
                singular: "Verknüpftes Konto"
              },
              "fr-FR": {
                singular: "Compte connecté"
              },
              "ja-JP": {
                singular: "アカウントを接続しました"
              },
              "ko-KR": {
                singular: "연결된 계정"
              },
              "pt-BR": {
                singular: "Conta conectada"
              },
              "zh-CN": {
                singular: "已连接的账户"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          color: "text-secondary",
          display: "inline-block",
          marginRight: 3,
          children: _v0
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          color: "text-secondary",
          display: "inline-block",
          children: (0, _v14.translate)({
            singular: "Connected on {DATE}",
            replacements: {
              DATE: _v1
            },
            dictionary: {
              es: {
                singular: "Conectado en {DATE}"
              },
              "de-DE": {
                singular: "Verbunden mit {DATE}"
              },
              "fr-FR": {
                singular: "Connecté sur {DATE}"
              },
              "ja-JP": {
                singular: "{DATE}に接続済み"
              },
              "ko-KR": {
                singular: "{DATE}에 연결되었습니다."
              },
              "pt-BR": {
                singular: "Conectado em {DATE}."
              },
              "zh-CN": {
                singular: "已连接到 {DATE}"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v19.Divider, {
        borderColor: "stroke",
        mt: 4,
        mb: 4
      })]
    }), _v9 && _v5 && (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v68, {
        type: _v5,
        partnerIntegrationId: _v4,
        appId: _v3,
        appName: _v6
      }), "SettingsPrivacyRestrictions" !== _v5 && (0, _v1.jsx)(_v19.Divider, {
        borderColor: "stroke",
        mt: 4,
        mb: 4
      })]
    }), _v4 === _v37.PARTNER_ID.MS_TEAMS ? (0, _v1.jsx)(_v72, {
      isOwnerOrAdmin: _v8,
      isUserConnected: _v9,
      appName: _v6,
      appId: _v3
    }) : (0, _v1.jsxs)(_v7.Flex, {
      gap: 4,
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      children: [(0, _v1.jsxs)(_v5.Box, {
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          mb: "xs",
          children: (0, _v14.translate)({
            singular: "Disconnect app",
            dictionary: {
              es: {
                singular: "Desconectar aplicación"
              },
              "de-DE": {
                singular: "App trennen"
              },
              "fr-FR": {
                singular: "Déconnecter l'application"
              },
              "ja-JP": {
                singular: "アプリの接続を解除する"
              },
              "ko-KR": {
                singular: "앱 연결 해제"
              },
              "pt-BR": {
                singular: "Desconectar app"
              },
              "zh-CN": {
                singular: "断开应用程序"
              }
            }
          })
        }), (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v14.translate)({
            singular: "Once disconnected, the app will be deactivated from your account.",
            dictionary: {
              es: {
                singular: "Una vez desconectada, la aplicación se desactivará de su cuenta."
              },
              "de-DE": {
                singular: "Sobald die Verbindung getrennt ist, wird die App von Ihrem Konto deaktiviert."
              },
              "fr-FR": {
                singular: "Une fois déconnectée, l'application sera désactivée de votre compte."
              },
              "ja-JP": {
                singular: "接続が解除されると、このアプリはご利用のアカウントで無効化されます。"
              },
              "ko-KR": {
                singular: "연결이 해제되면 계정에서 앱이 비활성화됩니다."
              },
              "pt-BR": {
                singular: "Uma vez desconectado, o aplicativo será desativado na sua conta."
              },
              "zh-CN": {
                singular: "一旦断开连接，该应用程序将从您的账户中停用。"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v66, {
        ..._v2,
        appName: _v6,
        appId: _v3,
        isFirstPartyApp: _v7,
        isDisabled: _v4 === _v37.PARTNER_ID.SHOPIFY
      })]
    })]
  });
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  function _v77({
    appName: _v0
  }) {
    return (0, _v1.jsxs)(_v74.Breadcrumb, {
      separator: (0, _v1.jsx)(_v76.ChevronRightSmall, {}),
      children: [(0, _v1.jsx)(_v74.BreadcrumbItem, {
        maxW: "9rem",
        children: (0, _v1.jsx)(_v75.BreadcrumbLink, {
          href: _v61.APP_CENTER_ROUTES.LISTING,
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            children: (0, _v14.translate)({
              singular: "Integrations",
              dictionary: {
                es: {
                  singular: "Integraciones"
                },
                "de-DE": {
                  singular: "Integrationen"
                },
                "fr-FR": {
                  singular: "Intégrations"
                },
                "ja-JP": {
                  singular: "統合"
                },
                "ko-KR": {
                  singular: "연동"
                },
                "pt-BR": {
                  singular: "Integrações"
                },
                "zh-CN": {
                  singular: "集成"
                }
              }
            })
          })
        })
      }), (0, _v1.jsx)(_v74.BreadcrumbItem, {
        children: (0, _v1.jsx)(_v75.BreadcrumbLink, {
          isCurrentPage: !0,
          color: "text-primary",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            children: _v0
          })
        })
      })]
    });
  }
  var _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0);
  let _v87 = ({
      hideDisconnectTeam: _v0
    }) => (0, _v1.jsx)(_v83.ManageTeamProvider, {
      children: (0, _v1.jsx)(_v88, {
        hideDisconnectTeam: _v0
      })
    }),
    _v88 = ({
      hideDisconnectTeam: _v0
    }) => {
      let {
          showError: _v1,
          errorType: _v2,
          actionError: _v3,
          hasFetchedTeamDetails: _v4,
          hasFetchedTeamMembers: _v5,
          teamDetails: _v6,
          isTeamDetailsLoading: _v7,
          isTeamMembersLoading: _v8,
          setShowError: _v9,
          fetchTeamDetails: _v10,
          fetchTeamMembers: _v11
        } = (0, _v3.useContext)(_v82.ManageTeamContext),
        _v12 = (0, _v18.useViewer)();
      return ((0, _v3.useEffect)(() => {
        _v12 && !1 === _v7 && !1 === _v4 && _v10(_v12);
      }, [_v12, _v4, _v7, _v10]), (0, _v3.useEffect)(() => {
        _v12 && !1 === _v8 && !1 === _v5 && _v11(_v12);
      }, [_v12, _v5, _v8, _v11]), !_v12 || _v7) ? (0, _v1.jsx)(_v80.Spinner, {
        size: "md"
      }) : !_v12?.user || _v1 && _v2 === _v84.ErrorType.UNAUTHORIZED && _v3 === _v86.ActionErrorType.FetchTeamMembers || (_v2 === _v84.ErrorType.NOT_FOUND || _v2 === _v84.ErrorType.UNAUTHORIZED) && _v3 === _v86.ActionErrorType.FetchTeamDetails || _v6?.status && (_v6.status === _v84.AdminStatus.Disconnected || _v6.status === _v84.AdminStatus.Pending) ? (0, _v1.jsx)(_v16.ErrorPage, {
        error: new _v12.ForbiddenError(_v85.T.PermissionDenied),
        shouldShowSearch: !1
      }) : (0, _v1.jsxs)(_v5.Box, {
        children: [_v1 && (0, _v1.jsx)(_v5.Box, {
          pt: "7",
          children: (0, _v1.jsx)(_v4.Alert, {
            status: "error",
            onClose: () => _v9(!1),
            children: (0, _v1.jsx)(_v79.AlertDescription, {
              children: _v2 === _v84.ErrorType.FORBIDDEN ? _v85.T.Errors.UnauthorizedError : _v85.T.Errors.RequestError
            })
          })
        }), (0, _v1.jsx)(_v5.Box, {
          pb: (0, _v11.rem)(128),
          pt: "4",
          children: (0, _v1.jsx)(_v81.ManageMsTeams, {
            hideDisconnectTeam: _v0
          })
        })]
      });
    };
  function _v89() {
    return (0, _v1.jsx)(_v87, {
      hideDisconnectTeam: !0
    });
  }
  var _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = () => {
      let _v0 = (0, _v3.useRef)(null);
      return (0, _v3.useEffect)(() => {
        _v0 && _v95.default.loadAnimation({
          container: _v0?.current,
          loop: !1,
          autoplay: !0,
          path: "https://f.vimeocdn.com/_misc/lottie_confetti_animation.json"
        });
      }, [_v0]), (0, _v1.jsx)(_v5.Box, {
        ref: _v0,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "popover",
        pointerEvents: "none"
      });
    },
    _v97 = ({
      appName: _v0
    }) => {
      let _v1 = (0, _v2.useRouter)(),
        {
          success: _v2,
          ..._v3
        } = _v1?.query || {},
        _v4 = () => {
          _v1.replace({
            pathname: _v1.pathname,
            query: _v3
          }, void 0, {
            shallow: !0
          });
        };
      return _v2 ? (0, _v1.jsxs)(_v5.Box, {
        children: [(0, _v1.jsx)(_v96, {}), (0, _v1.jsxs)(_v90.Modal, {
          isOpen: !0,
          onClose: _v4,
          children: [(0, _v1.jsx)(_v93.ModalOverlay, {}), (0, _v1.jsx)(_v92.ModalContent, {
            children: (0, _v1.jsx)(_v91.ModalBody, {
              padding: "lg",
              children: (0, _v1.jsxs)(_v7.Flex, {
                flexDirection: "column",
                gap: "md",
                alignItems: "center",
                children: [(0, _v1.jsx)(_v94.CheckSmall, {
                  boxSize: "md",
                  backgroundColor: "green.500",
                  borderRadius: "round",
                  color: "surface"
                }), (0, _v1.jsx)(_v23.Header, {
                  size: "md",
                  children: _v0 ? `Connected to ${_v0}` : "Connected"
                }), (0, _v1.jsxs)(_v39.Paragraph, {
                  color: "text-secondary",
                  textAlign: "center",
                  children: [(0, _v14.translate)({
                    singular: "You’re all set.",
                    dictionary: {
                      es: {
                        singular: "Ya está todo listo."
                      },
                      "de-DE": {
                        singular: "Sie sind jetzt startklar."
                      },
                      "fr-FR": {
                        singular: "Tout est prêt."
                      },
                      "ja-JP": {
                        singular: "これで準備完了です。"
                      },
                      "ko-KR": {
                        singular: "모든 준비가 완료되었습니다."
                      },
                      "pt-BR": {
                        singular: "Tudo pronto."
                      },
                      "zh-CN": {
                        singular: "您已准备就绪。"
                      }
                    }
                  }), (0, _v1.jsx)("br", {}), (0, _v14.translate)({
                    singular: "This integration is now active and ready to use.",
                    dictionary: {
                      es: {
                        singular: "Esta integración ya está activa y lista para usar."
                      },
                      "de-DE": {
                        singular: "Diese Integration ist jetzt aktiv und einsatzbereit."
                      },
                      "fr-FR": {
                        singular: "Cette intégration est maintenant active et prête à être utilisée."
                      },
                      "ja-JP": {
                        singular: "このインテグレーションは現在アクティブで、すぐに使用できます。"
                      },
                      "ko-KR": {
                        singular: "통합 기능이 활성화되어 사용할 수 있습니다."
                      },
                      "pt-BR": {
                        singular: "Esta integração está ativa e pronta para usar."
                      },
                      "zh-CN": {
                        singular: "此集成现已激活并准备好使用。"
                      }
                    }
                  })]
                }), (0, _v1.jsx)(_v9.Button, {
                  width: "100%",
                  variant: "primary",
                  onClick: _v4,
                  children: (0, _v14.translate)({
                    singular: "Done",
                    dictionary: {
                      es: {
                        singular: "Hecho"
                      },
                      "de-DE": {
                        singular: "Fertig"
                      },
                      "fr-FR": {
                        singular: "Terminé"
                      },
                      "ja-JP": {
                        singular: "完了"
                      },
                      "ko-KR": {
                        singular: "완료"
                      },
                      "pt-BR": {
                        singular: "Feito"
                      },
                      "zh-CN": {
                        singular: "已存档"
                      }
                    }
                  })
                })]
              })
            })
          })]
        })]
      }) : (0, _v1.jsx)(_v1.Fragment, {});
    };
  var _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0);
  let _v102 = {
    contentMaxWidth: (0, _v11.rem)(640),
    contentInlineStart: "0px"
  };
  function _v103() {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = _v0?.query?.partnerIntegrationId,
      _v2 = _v37.APP_CONFIG[_v1] || _v37.APP_CONFIG.default,
      _v3 = (0, _v18.useViewer)(),
      {
        isLoading: _v4,
        isAdmin: _v5,
        isOwner: _v6,
        isContributor: _v7,
        isContributorPlus: _v8
      } = (0, _v98.useGetRoleInAnyTeam)(),
      _v9 = !!_v4 || _v5 || _v6 || _v7 || _v8,
      {
        data: _v10,
        isLoading: _v11
      } = (0, _v13.useGetUserIntegration)(() => _v3?.user?.id && _v1 ? {
        where: {
          userId: String(_v3.user.id),
          integrationUuid: _v1
        },
        select: ["uuid", "apiApp.uri", "apiApp.user.name", "apiApp.user.link", "displayName", "thumbnailUrl", "categories", "description", "connectionStatus", "isFirstParty", "partnerMedia", "keyFeatures", "helpArticleUrl"]
      } : null),
      _v12 = _v10?.connectionStatus === _v61.CONNECTION_STATUS.CONNECTED,
      _v13 = _v10?.connectionStatus === _v61.CONNECTION_STATUS.RECONNECT || _v10?.connectionStatus === _v61.CONNECTION_STATUS.ERROR,
      {
        canConnect: _v14,
        hasPermissionToUpsell: _v15
      } = (0, _v101.useNeedUpsell)(),
      _v16 = !_v12 && _v2.upsell ? !_v14(_v2.upsell) : void 0,
      _v17 = _v3?.teamUser,
      _v18 = !_v17 || [_v17.TEAM_PERMISSION.ADMIN, _v17.TEAM_PERMISSION.OWNER].includes(_v17.permissionLevel),
      _v19 = _v1 === _v37.PARTNER_ID.MS_TEAMS,
      {
        isTeamConnected: _v20,
        connectConfig: _v21,
        showMsTeamsManageUser: _v22
      } = (({
        isMsTeamsApp: _v0,
        isOwnerOrAdmin: _v1,
        isUserConnected: _v2
      }) => {
        let _v3 = (0, _v18.useViewer)(),
          _v4 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
          {
            data: _v5,
            isValidating: _v6
          } = (0, _v99.useGetUserAutoArchiveMsTeams)(() => _v0 && !_v2 && _v4 ? {
            select: ["userInviteUrl", "status", "teamOwnerId", "msTeamsEncryptedTeamId"],
            where: {
              userId: _v4
            }
          } : null),
          _v7 = _v0 && (_v2 || _v5?.status === "Completed"),
          _v8 = (0, _v3.useMemo)(() => _v0 ? _v7 ? _v5?.userInviteUrl ? {
            url: _v5?.userInviteUrl,
            text: _v1 ? (0, _v14.translate)({
              singular: "Connect for myself",
              dictionary: {
                es: {
                  singular: "Conectarme"
                },
                "de-DE": {
                  singular: "Für mich selbst verbinden"
                },
                "fr-FR": {
                  singular: "Connecter pour moi"
                },
                "ja-JP": {
                  singular: "自分を連携"
                },
                "ko-KR": {
                  singular: "나 연결"
                },
                "pt-BR": {
                  singular: "Conectar para mim"
                },
                "zh-CN": {
                  singular: "为我自己连接"
                }
              }
            }) : (0, _v14.translate)({
              singular: "Connect",
              dictionary: {
                es: {
                  singular: "Conectar"
                },
                "de-DE": {
                  singular: "Verbinden"
                },
                "fr-FR": {
                  singular: "Connecter"
                },
                "ja-JP": {
                  singular: "接続"
                },
                "ko-KR": {
                  singular: "연결"
                },
                "pt-BR": {
                  singular: "Conectar"
                },
                "zh-CN": {
                  singular: "关联"
                }
              }
            })
          } : void 0 : {
            url: (0, _v100.isCIEnv)() || (0, _v100.isLocalDevEnv)() ? "https://autoarchive-uploader-dev.vimeows.com/init_ms_teams_admin_auth" : "https://autoarchive-uploader.vimeo.com/init_ms_teams_admin_auth",
            text: (0, _v14.translate)({
              singular: "Connect",
              dictionary: {
                es: {
                  singular: "Conectar"
                },
                "de-DE": {
                  singular: "Verbinden"
                },
                "fr-FR": {
                  singular: "Connecter"
                },
                "ja-JP": {
                  singular: "接続"
                },
                "ko-KR": {
                  singular: "연결"
                },
                "pt-BR": {
                  singular: "Conectar"
                },
                "zh-CN": {
                  singular: "关联"
                }
              }
            })
          } : {}, [_v5?.userInviteUrl, _v0, _v1, _v7]);
        return {
          isLoading: _v6,
          isTeamConnected: _v7,
          connectConfig: _v8,
          showMsTeamsManageUser: _v0 && _v7 && _v1
        };
      })({
        isMsTeamsApp: _v19,
        isOwnerOrAdmin: _v18,
        isUserConnected: _v12
      }),
      {
        sendUpsellEvent: _v23
      } = (0, _v31.useTracking)();
    return ((0, _v3.useEffect)(() => {
      _v16 && _v10?.displayName && _v23({
        eventName: "vimeo.upsell_trigger_impression",
        integrationName: _v10.displayName,
        copy: (0, _v14.translate)({
          singular: "Upgrade to connect",
          dictionary: {
            es: {
              singular: "Cambie de plan para conectarse"
            },
            "de-DE": {
              singular: "Upgraden, um eine Verbindung herzustellen"
            },
            "fr-FR": {
              singular: "Mettre à niveau pour se connecter"
            },
            "ja-JP": {
              singular: "アップグレードして接続"
            },
            "ko-KR": {
              singular: "연결하고 업그레이드하기"
            },
            "pt-BR": {
              singular: "Fazer upgrade para conectar"
            },
            "zh-CN": {
              singular: "升级以连接"
            }
          }
        }),
        isAction: !1
      });
    }, [_v10?.displayName, _v23, _v16]), !_v11 && _v1 && _v3) ? _v10 ? (0, _v1.jsxs)(_v5.Box, {
      width: "100%",
      maxWidth: (0, _v11.rem)(640),
      marginTop: "lg",
      marginBottom: "2xl",
      mx: "auto",
      padding: {
        base: 3,
        md: 0
      },
      children: [(0, _v1.jsx)(_v77, {
        appName: _v10.displayName
      }), (0, _v1.jsxs)(_v7.Flex, {
        alignItems: "center",
        flexWrap: "wrap",
        gap: 4,
        marginTop: "md",
        children: [(0, _v1.jsx)(_v6.Image, {
          src: _v10.thumbnailUrl || _v61.DEFAULT_THUMBNAIL_URL,
          alt: "icon",
          boxSize: "100%",
          height: "lg",
          width: "lg"
        }), (0, _v1.jsx)(_v5.Box, {
          flex: "1",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-lg",
            children: _v10.displayName
          })
        }), !_v12 && _v2.connect && !_v16 && _v9 && (0, _v1.jsx)(_v78.Connect, {
          ...(_v19 && _v21?.url ? _v21 : _v2.connect),
          partnerIntegrationId: _v1,
          isReconnect: _v13,
          appName: _v10.displayName
        }), !_v9 && (0, _v1.jsx)(_v10.Tooltip, {
          label: (0, _v14.translate)({
            singular: "You don’t have permission to connect. Ask your admin to upgrade your seat.",
            dictionary: {
              es: {
                singular: "No tiene permiso para conectarse. Solicite a su administrador que actualice su puesto."
              },
              "de-DE": {
                singular: "Sie haben keine Berechtigung zum Verbinden. Bitten Sie Ihren Administrator, Ihre Lizenz zu aktualisieren."
              },
              "fr-FR": {
                singular: "Vous n'êtes pas autorisé à connecter une intégration. Demandez à votre administrateur de mettre votre licence à niveau."
              },
              "ja-JP": {
                singular: "接続する権限がありません。管理者にシートのアップグレードを依頼してください。"
              },
              "ko-KR": {
                singular: "연결할 권한이 없습니다. 관리자에게 사용자 라이선스 업그레이드를 요청하세요."
              },
              "pt-BR": {
                singular: "Você não tem permissão para conectar. Peça para o administrador atualizar a sua licença."
              },
              "zh-CN": {
                singular: "您没有连接权限。请管理员为您升级席位。"
              }
            }
          }),
          placement: "top",
          children: (0, _v1.jsx)(_v9.Button, {
            variant: "primary",
            size: "md",
            isDisabled: !0,
            children: (0, _v14.translate)({
              singular: "Connect",
              dictionary: {
                es: {
                  singular: "Conectar"
                },
                "de-DE": {
                  singular: "Verbinden"
                },
                "fr-FR": {
                  singular: "Connecter"
                },
                "ja-JP": {
                  singular: "接続"
                },
                "ko-KR": {
                  singular: "연결"
                },
                "pt-BR": {
                  singular: "Conectar"
                },
                "zh-CN": {
                  singular: "关联"
                }
              }
            })
          })
        }), _v16 && (0, _v1.jsx)(_v10.Tooltip, {
          label: (0, _v14.translate)({
            singular: "Only owners can upgrade to connect",
            dictionary: {
              es: {
                singular: "Solo los propietarios pueden cambiar de plan para conectarse"
              },
              "de-DE": {
                singular: "Nur Inhaber können ein Upgrade durchführen, um sich zu verbinden."
              },
              "fr-FR": {
                singular: "Seuls les propriétaires peuvent effectuer une mise à niveau pour se connecter"
              },
              "ja-JP": {
                singular: "所有者のみがアップグレードして接続することができます"
              },
              "ko-KR": {
                singular: "소유자만 업그레이드하여 연결할 수 있습니다."
              },
              "pt-BR": {
                singular: "Somente os proprietários podem fazer upgrade para conectar"
              },
              "zh-CN": {
                singular: "只有所有者可以升级以进行连接"
              }
            }
          }),
          isDisabled: _v15,
          children: (0, _v1.jsx)(_v9.Button, {
            variant: "upsell",
            size: "md",
            onClick: () => {
              _v15 && (_v23({
                eventName: "vimeo.trigger_upsell",
                integrationName: _v10?.displayName,
                copy: "Upgrade",
                isAction: !0
              }), _v0.push((0, _v15.buildUpgradePlanUrl)({
                paywallTrigger: "apps_details_upgrade_button",
                paywallLocation: "integrations_center_details",
                paywallFeature: "app_integration"
              })));
            },
            isDisabled: !_v15,
            children: (0, _v14.translate)({
              singular: "Upgrade to connect",
              dictionary: {
                es: {
                  singular: "Cambie de plan para conectarse"
                },
                "de-DE": {
                  singular: "Upgraden, um eine Verbindung herzustellen"
                },
                "fr-FR": {
                  singular: "Mettre à niveau pour se connecter"
                },
                "ja-JP": {
                  singular: "アップグレードして接続"
                },
                "ko-KR": {
                  singular: "연결하고 업그레이드하기"
                },
                "pt-BR": {
                  singular: "Fazer upgrade para conectar"
                },
                "zh-CN": {
                  singular: "升级以连接"
                }
              }
            })
          })
        })]
      }), (0, _v1.jsx)(_v8.Text, {
        variant: "body-lg",
        color: "text-secondary",
        marginTop: "md",
        children: (0, _v100.parseHTMLEntities)(_v10.description || "")
      }), _v2.upsell?.message && (0, _v1.jsx)(_v4.Alert, {
        size: "sm",
        alignItems: "center",
        marginTop: "md",
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          children: _v2.upsell.message
        })
      }), _v13 && (0, _v1.jsx)(_v4.Alert, {
        status: "warning",
        alignItems: "center",
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          children: (0, _v14.translate)({
            singular: "We're having trouble connecting to {NAME}. To restore functionality, please reconnect your account.",
            replacements: {
              NAME: _v10.displayName
            },
            dictionary: {
              es: {
                singular: "Tenemos problemas para conectarnos a {NAME}. Para restaurar la funcionalidad, vuelva a conectar su cuenta."
              },
              "de-DE": {
                singular: "Wir haben Probleme bei der Verbindung mit {NAME}. Um die Funktionalität wiederherzustellen, verbinden Sie Ihr Konto bitte erneut."
              },
              "fr-FR": {
                singular: "Nous rencontrons des difficultés pour nous connecter à {NAME}. Pour restaurer la fonctionnalité, veuillez reconnecter votre compte."
              },
              "ja-JP": {
                singular: "{NAME}に接続できません。機能を復元するには、アカウントを再接続してください。"
              },
              "ko-KR": {
                singular: "{NAME} 연결 중 문제가 발생했습니다. 기능을 복원하려면 계정을 다시 연결하세요."
              },
              "pt-BR": {
                singular: "Não estamos conseguindo nos conectar a {NAME}. Para restaurar a funcionalidade, reconecte a sua conta."
              },
              "zh-CN": {
                singular: "我们在连接 {NAME} 时遇到了问题。要恢复功能，请重新连接您的帐户。"
              }
            }
          })
        })
      }), _v12 || _v20 && _v18 ? (0, _v1.jsx)(_v32, {
        aboutComponent: _v10.isFirstParty && (0, _v1.jsx)(_v25, {
          partnerMedia: _v10.partnerMedia,
          keyFeatures: _v10.keyFeatures,
          helpArticleUrl: _v10.helpArticleUrl
        }),
        manageComponent: (0, _v1.jsx)(_v73, {
          partnerIntegrationId: _v1,
          appId: _v10.apiApp ? _v10.apiApp.uri.split("/").pop() : void 0,
          disconnectConfig: _v2.disconnect,
          appName: _v10.displayName,
          customSettingsType: _v2.modify?.type,
          isFirstPartyApp: _v10.isFirstParty,
          isUserConnected: _v12,
          isOwnerOrAdmin: _v18
        }),
        usersComponent: _v22 && (0, _v1.jsx)(_v89, {}),
        appName: _v10.displayName
      }) : (0, _v1.jsx)(_v25, {
        partnerMedia: _v10.partnerMedia,
        keyFeatures: _v10.keyFeatures,
        helpArticleUrl: _v10.helpArticleUrl
      }), _v12 && (0, _v1.jsx)(_v97, {
        appName: _v10.displayName
      })]
    }) : (0, _v1.jsx)(_v16.ErrorPage, {
      error: new _v12.ResourceNotFoundError()
    }) : (0, _v1.jsx)(_v34, {});
  }
  var _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0);
  let _v110 = () => {
    let _v0 = (0, _v2.useRouter)(),
      _v1 = _v0?.query?.partnerIntegrationId,
      _v2 = _v0?.query?.slug;
    return _v1 ? !_v2 || Array.isArray(_v2) && 1 === _v2.length && _v61.APP_CENTER_DETAILS_SLUG.includes(_v2[0]) ? (0, _v1.jsx)(_v103, {}) : (0, _v1.jsx)(_v16.ErrorPage, {
      error: new _v12.ResourceNotFoundError()
    }) : (0, _v1.jsx)(_v107.default, {});
  };
  _v110.getLayout = _v0 => (0, _v1.jsx)(_v109.VideoLibraryLayout, {
    hasSideNav: !0,
    searchContentAlignment: _v102,
    sideNavContent: (0, _v1.jsx)(_v108.SideNavContent, {
      surface: "home"
    }),
    sideNavSurface: "home",
    children: _v0
  }), (0, _v106.withPageSetup)(async _v0 => {
    try {
      if ((await (0, _v104.fetchAndFormatCapabilties)({
        jwt: _v0.jwt,
        capabilities: ["hasIntegrationCenter"],
        apiUrl: _v0.baseUrl
      })).hasIntegrationCenter) return {
        props: {
          hasThemeSupport: !0,
          hasUploader: !0
        }
      };
      return {
        redirect: {
          destination: "string" == typeof _v0?.query?.partnerIntegrationId && _v37.MARKTING_APPS_UUID.includes(_v0.query.partnerIntegrationId) ? "/settings/marketing/integrations" : "/settings/apps",
          permanent: !1
        }
      };
    } catch (_v0) {
      return _v105.serverLogger.warn({
        err: _v0
      }, "Failed to fetch capabilities"), {
        redirect: {
          destination: "/log_in",
          statusCode: 302
        }
      };
    }
  }, {
    inlineViewer: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v110], 0);
}