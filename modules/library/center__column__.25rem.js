{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ({
    action: _v0,
    icon: _v1,
    msg: _v2
  }) => (0, _v1.jsx)(_v3.Flex, {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: "4",
    children: (0, _v1.jsxs)(_v3.Flex, {
      flexDirection: "column",
      alignItems: "center",
      gap: "2",
      children: [(0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        alignItems: "center",
        gap: ".25rem",
        children: [_v1 ?? (0, _v1.jsx)(_v5.CircleExclamation, {
          boxSize: "sm",
          color: "text-secondary"
        }), (0, _v1.jsx)(_v4.Text, {
          variant: "heading-sm",
          color: "text-secondary",
          children: _v2 ?? "Something went wrong"
        })]
      }), _v0]
    })
  });
  class _v7 extends _v2.default.Component {
    constructor(_v0) {
      super(_v0), this.state = {
        hasError: !1
      };
    }
    static getDerivedStateFromError() {
      return {
        hasError: !0
      };
    }
    componentDidCatch(_v0, _v1) {
      window.DD_RUM && window.DD_RUM.onReady(() => {
        window.DD_RUM.addError(_v0, {
          ..._v1
        });
      });
    }
    render() {
      return this.state.hasError ? "function" == typeof this.props.fallback ? this.props.fallback({
        clearError: () => this.setState({
          hasError: !1
        })
      }) : this.props.fallback ? this.props.fallback : (0, _v1.jsx)(_v6, {}) : this.props.children;
    }
  }
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = "1rem",
    _v14 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v3.Flex, {
      background: "fill-surface",
      borderRadius: "xl",
      flexDirection: "column",
      height: "100%",
      overflow: "auto",
      position: "relative",
      width: "22.5rem",
      children: _v0
    }),
    _v15 = () => (0, _v1.jsx)(_v8.Box, {
      height: "1px",
      backgroundColor: "stroke",
      width: "100%"
    });
  _v14.Body = ({
    children: _v0
  }) => (0, _v1.jsx)(_v10.VStack, {
    alignItems: "flex-start",
    divider: (0, _v1.jsx)(_v15, {}),
    flex: "1 1 0%",
    gap: "1rem",
    padding: `0 ${_v13}`,
    children: _v0
  }), _v14.CloseButton = ({
    onClose: _v0
  }) => (0, _v1.jsx)(_v9.IconButton, {
    "aria-label": (0, _v12.translate)({
      singular: "Close panel",
      dictionary: {
        es: {
          singular: "Cerrar el panel"
        },
        "de-DE": {
          singular: "Panel schließen"
        },
        "fr-FR": {
          singular: "Fermer le panneau"
        },
        "ja-JP": {
          singular: "パネルを閉じる"
        },
        "ko-KR": {
          singular: "패널 닫기"
        },
        "pt-BR": {
          singular: "Fechar painel"
        },
        "zh-CN": {
          singular: "关闭面板"
        }
      }
    }),
    backgroundColor: "blackAlpha.700",
    _hover: {
      backgroundColor: "blackAlpha.800"
    },
    _active: {
      backgroundColor: "blackAlpha.900"
    },
    blur: "md",
    color: "white",
    icon: (0, _v1.jsx)(_v11.CloseXSmall, {}),
    id: "close-resource-panel-button",
    onClick: _v0,
    position: "absolute",
    right: "0.5rem",
    size: "sm",
    top: "0.5rem",
    zIndex: "10"
  }), _v14.Content = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Flex, {
    flexDirection: "column",
    width: "100%",
    flexGrow: "1",
    height: "100%",
    children: _v0
  }), _v14.Header = ({
    children: _v0
  }) => (0, _v1.jsx)(_v8.Box, {
    marginBottom: "1.5rem",
    children: _v0
  }), _v14.Footer = ({
    children: _v0,
    isSticky: _v1
  }) => (0, _v1.jsx)(_v3.Flex, {
    padding: _v13,
    ...(_v1 ? {
      position: "sticky",
      bottom: 0
    } : {}),
    children: _v0
  });
  let _v16 = ({
      children: _v0,
      onClose: _v1
    }) => (0, _v1.jsxs)(_v14, {
      children: [(0, _v1.jsx)(_v14.CloseButton, {
        onClose: _v1
      }), (0, _v1.jsx)(_v7, {
        children: _v0
      })]
    }),
    _v17 = "video",
    _v18 = /^\/videos\/(\d+)(?::[a-z0-9]+)?$/,
    _v19 = /^\/users\/\d+\/projects\/(\d+)$/,
    _v20 = /^\/users\/\d+\/albums\/(\d+)$/;
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = {
      audio_language_selected_for_download: null,
      collection_type: null,
      distribution_tab: null,
      distribution_type: null,
      embed_config: null,
      embed_custom_dimensions: null,
      embed_layout: null,
      embed_playback_toggles_off: null,
      embed_playback_toggles_on: null,
      is_ai_translated: !1,
      is_internal: !1,
      is_original_language_downloaded: !1,
      is_send_email_notification: !1,
      lms_completion_threshold: null,
      lms_scoring_method: null,
      lms_technical_standard: null,
      number_of_items: null,
      sharee_email: null,
      sharee_entity_permission: null,
      sharee_id: null,
      sharee_team_permission: null,
      target_file_details: null,
      target_quality: null,
      target_resolution: null,
      target_transcript_language: null
    },
    _v25 = {
      is_integration: !1,
      app_id: null,
      integration_id: null,
      integration_name: null,
      integration_type: null,
      is_partner: null,
      managed_user_id: null,
      partner_bucket: null
    };
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = _v0 => {
    let _v1 = (0, _v29.useViewer)(),
      _v2 = _v1?.teamUser ? (0, _v27.buildTeamBpContextFromTeamUser)(_v1.teamUser) : _v1?.team ? (0, _v27.buildTeamBpContextFromTeam)(_v1.team) : (0, _v27.buildTeamBpContext)({
        is_team_member: !1
      });
    return {
      teamContext: _v2,
      webContext: (0, _v28.buildWebBpContext)({
        page_name: _v0,
        path: window.location.pathname,
        referrer: document.referrer
      }),
      thirdPartyIntegrationContext: (0, _v26.buildThirdPartyIntegrationBpContext)(_v25)
    };
  };
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = {
      ask_ai: 0,
      like: 0,
      share: 0,
      watch_later: 0,
      badge: 0,
      byline: 0,
      portrait: 0,
      title: 0,
      airplay: 0,
      audio_tracks: 0,
      cc: 1,
      chapters: 0,
      chromecast: 0,
      fullscreen: 1,
      pip: 0,
      progress_bar: 1,
      quality_selector: 0,
      speed: 0,
      transcript: 0,
      volume: 1,
      vimeo_logo: 0,
      play_button_position: "bottom",
      force_embed: 1
    },
    _v34 = ({
      videoId: _v0
    }) => {
      let {
        data: _v1,
        isLoading: _v2,
        error: _v3,
        mutate: _v4
      } = (0, _v31.useGetVideo)({
        where: {
          videoId: _v0
        },
        select: ["createdTime", "customMetadata", "modifiedTime", "descriptionHtml", "link", "name", "playerEmbedUrl", "manageLink", "metadata.interactions.invite.uri", "metadata.interactions.edit.uri", "metadata.interactions.editPrivacy.uri", "uploader.name", "uploader.pictures.sizes", "password", "pictures.sizes", "privacy.view", "uri", "explicitAccessSummary"],
        query: _v33
      }, {
        revalidateOnFocus: !1
      });
      return {
        data: _v1 ? {
          canEdit: !!_v1?.metadata?.interactions?.edit?.uri,
          canEditPrivacy: !!_v1?.metadata?.interactions?.editPrivacy?.uri,
          canInvite: !!_v1?.metadata?.interactions?.invite?.uri,
          dateCreated: _v1.createdTime,
          dateModified: _v1.modifiedTime,
          description: _v1.descriptionHtml,
          id: _v0,
          isMetadataLocked: (0, _v32.isVideoMetadataLocked)(_v1),
          link: _v1.link,
          manageLink: _v1.manageLink,
          name: _v1.name,
          thumbnailSrc: _v1.pictures?.sizes?.[3]?.link,
          password: _v1.password,
          playerEmbedUrl: _v1?.playerEmbedUrl,
          sharedUsersCount: _v1.explicitAccessSummary?.teamUserCount ?? 0,
          sharedGroupsCount: (_v1.explicitAccessSummary?.teamGroupCount ?? 0) + (_v1.explicitAccessSummary?.allTeamCount ?? 0),
          uploaderAvatarSrc: _v1.uploader?.pictures?.sizes?.[1]?.link,
          uploaderName: _v1.uploader?.name,
          uri: _v1.uri,
          viewPrivacy: _v1.privacy.view
        } : void 0,
        isLoading: _v2,
        error: _v3,
        mutate: _v4
      };
    };
  var _v35 = _v0.i(0);
  let _v36 = () => (0, _v1.jsx)(_v3.Flex, {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    padding: "4",
    children: (0, _v1.jsx)(_v35.Spinner, {
      size: "md"
    })
  });
  var _v37 = _v0.i(0);
  let _v38 = ({
      onReload: _v0
    }) => (0, _v1.jsx)(_v6, {
      msg: "Unable to load video info",
      action: (0, _v1.jsx)(_v37.Button, {
        color: "text-secondary",
        onClick: _v0,
        size: "xs",
        variant: "secondary",
        children: "Reload"
      })
    }),
    _v39 = ({
      children: _v0,
      onReload: _v1
    }) => (0, _v1.jsx)(_v7, {
      fallback: ({
        clearError: _v0
      }) => (0, _v1.jsx)(_v38, {
        onReload: () => {
          _v1?.(), _v0();
        }
      }),
      children: _v0
    });
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = ({
      groupsCount: _v0 = 0,
      membersCount: _v1 = 0,
      isLoading: _v2 = !1,
      isMetadataLocked: _v3 = !1,
      manageLink: _v4,
      onClick: _v5
    }) => {
      let _v6 = (0, _v42.useToast)(),
        _v7 = (0, _v40.useRouter)(),
        _v8 = _v3 ? () => {
          (0, _v43.showVideoMetadataLockedToast)({
            toast: _v6,
            router: _v7,
            managePath: _v4
          });
        } : _v5;
      return _v2 ? (0, _v1.jsx)(_v45, {
        children: (0, _v1.jsx)(_v46, {})
      }) : (0, _v1.jsx)(_v45, {
        children: (0, _v1.jsx)(_v47, {
          groupsCount: _v0,
          membersCount: _v1,
          onClick: _v8
        })
      });
    },
    _v45 = ({
      children: _v0
    }) => (0, _v1.jsxs)(_v3.Flex, {
      "data-testid": "sharing-module",
      flexDirection: "column",
      minHeight: "4rem",
      gap: "1rem",
      children: [(0, _v1.jsx)(_v4.Text, {
        variant: "heading-sm",
        children: (0, _v12.translate)({
          singular: "People with access",
          dictionary: {
            es: {
              singular: "Personas con acceso"
            },
            "de-DE": {
              singular: "Personen mit Zugriff"
            },
            "fr-FR": {
              singular: "Personnes ayant accès"
            },
            "ja-JP": {
              singular: "アクセスできる人"
            },
            "ko-KR": {
              singular: "접근 권한이 있는 사람"
            },
            "pt-BR": {
              singular: "Pessoas com acesso"
            },
            "zh-CN": {
              singular: "具有访问权限的人"
            }
          }
        })
      }), _v0]
    }),
    _v46 = () => (0, _v1.jsx)(_v41.Skeleton, {
      "data-testid": "sharing-module-loading",
      borderRadius: ".5rem",
      width: "100%",
      height: "1.4rem"
    }),
    _v47 = ({
      groupsCount: _v0,
      membersCount: _v1,
      onClick: _v2
    }) => {
      let _v3 = function ({
        groupsCount: _v0,
        membersCount: _v1,
        onClick: _v2
      }) {
        return 0 === _v0 && 0 === _v1 ? _v49({
          onClick: _v2
        }) : _v0 > 0 && 0 === _v1 ? _v50({
          count: _v0,
          onClick: _v2
        }) : 0 === _v0 && _v1 > 0 ? _v51({
          count: _v1,
          onClick: _v2
        }) : 1 === _v0 && 1 === _v1 ? _v52({
          onClick: _v2
        }) : _v0 > 1 && _v1 > 1 ? _v53({
          groupsCount: _v0,
          membersCount: _v1,
          onClick: _v2
        }) : _v0 > 1 && 1 === _v1 ? _v55({
          groupsCount: _v0,
          onClick: _v2
        }) : 1 === _v0 && _v1 > 1 ? _v54({
          membersCount: _v1,
          onClick: _v2
        }) : _v49({
          onClick: _v2
        });
      }({
        groupsCount: _v0,
        membersCount: _v1,
        onClick: _v2
      });
      return (0, _v1.jsx)(_v4.Text, {
        variant: "body-md",
        children: _v3
      });
    },
    _v48 = ({
      children: _v0,
      onClick: _v1
    }) => (0, _v1.jsx)(_v4.Text, {
      "aria-label": (0, _v12.translate)({
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
      as: "button",
      background: "transparent",
      onClick: _v1,
      padding: "0",
      textDecoration: "underline",
      variant: "body-md",
      children: _v0
    }),
    _v49 = ({
      onClick: _v0
    }) => (0, _v1.jsx)(_v48, {
      onClick: _v0,
      children: (0, _v12.translate)({
        singular: "Add people to collaborate",
        dictionary: {
          es: {
            singular: "Agregar personas para colaborar"
          },
          "de-DE": {
            singular: "Personen zur Zusammenarbeit hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter des personnes pour collaborer"
          },
          "ja-JP": {
            singular: "共同作業者を追加"
          },
          "ko-KR": {
            singular: "사람들을 협업에 추가하기"
          },
          "pt-BR": {
            singular: "Adicionar pessoas para colaborar"
          },
          "zh-CN": {
            singular: "添加人员以进行协作"
          }
        }
      })
    }),
    _v50 = ({
      count: _v0,
      onClick: _v1
    }) => (0, _v12.translate)({
      count: _v0,
      plural: "Shared with {LINK}{COUNT} groups{/LINK}",
      singular: "Shared with {LINK}{COUNT} group{/LINK}",
      replacements: {
        COUNT: _v0,
        LINK: _v0 => (0, _v1.jsx)(_v48, {
          onClick: _v1,
          children: _v0
        })
      },
      dictionary: {
        es: {
          singular: "Compartido con {LINK}{COUNT} grupo{/LINK}",
          plural: "Compartido con {LINK}{COUNT} grupos{/LINK}"
        },
        "de-DE": {
          singular: "Geteilt mit {LINK}{COUNT} Gruppe{/LINK}",
          plural: "Geteilt mit {LINK}{COUNT} Gruppen{/LINK}"
        },
        "fr-FR": {
          singular: "Partagé avec {LINK}{COUNT} groupes{/LINK}",
          plural: "Partagé avec {LINK}{COUNT} groupes{/LINK}"
        },
        "ja-JP": {
          singular: "{LINK}{COUNT}グループ{/LINK}と共有",
          plural: "{LINK}{COUNT}グループ{/LINK}と共有"
        },
        "ko-KR": {
          singular: "{LINK}{COUNT}개의 그룹{/LINK}과 공유되었습니다.",
          plural: "{LINK}{COUNT}개의 그룹{/LINK}과 공유되었습니다."
        },
        "pt-BR": {
          singular: "Compartilhado com {LINK}{COUNT} grupo{/LINK}",
          plural: "Compartilhado com {LINK}{COUNT} grupos{/LINK}"
        },
        "zh-CN": {
          singular: "已与 {LINK}{COUNT} 个群组共享 {/LINK}",
          plural: "已与 {LINK}{COUNT} 个群组共享 {/LINK}"
        }
      }
    }),
    _v51 = ({
      count: _v0,
      onClick: _v1
    }) => (0, _v12.translate)({
      count: _v0,
      plural: "Shared with {LINK}{COUNT} members{/LINK}",
      singular: "Shared with {LINK}{COUNT} member{/LINK}",
      replacements: {
        COUNT: _v0,
        LINK: _v0 => (0, _v1.jsx)(_v48, {
          onClick: _v1,
          children: _v0
        })
      },
      dictionary: {
        es: {
          singular: "Compartido con {LINK}{COUNT} miembro{/LINK}",
          plural: "Compartido con {LINK}{COUNT} miembros{/LINK}"
        },
        "de-DE": {
          singular: "Geteilt mit {LINK}{COUNT} Mitglied{/LINK}",
          plural: "Geteilt mit {LINK}{COUNT} Mitgliedern{/LINK}"
        },
        "fr-FR": {
          singular: "Partagé avec {LINK}{COUNT} membre{/LINK}",
          plural: "Partagé avec {LINK}{COUNT} membres{/LINK}"
        },
        "ja-JP": {
          singular: "{LINK}{COUNT}人のメンバー{/LINK}と共有",
          plural: "{LINK}{COUNT}人のメンバー{/LINK}と共有"
        },
        "ko-KR": {
          singular: "{LINK}{COUNT}명의 멤버{/LINK}와 공유되었습니다.",
          plural: "{LINK}{COUNT}명의 멤버{/LINK}와 공유되었습니다."
        },
        "pt-BR": {
          singular: "Compartilhado com {LINK}{COUNT} membro{/LINK}",
          plural: "Compartilhado com {LINK}{COUNT} membros{/LINK}"
        },
        "zh-CN": {
          singular: "已与 {LINK}{COUNT} 位成员共享 {/LINK}",
          plural: "已与 {LINK}{COUNT} 位成员共享 {/LINK}"
        }
      }
    }),
    _v52 = ({
      onClick: _v0
    }) => (0, _v12.translate)({
      singular: "Shared with {LINK}1 member and 1 group{/LINK}",
      replacements: {
        LINK: _v0 => (0, _v1.jsx)(_v48, {
          onClick: _v0,
          children: _v0
        })
      },
      dictionary: {
        es: {
          singular: "Compartido con {LINK}1 miembro y 1 grupo{/LINK}"
        },
        "de-DE": {
          singular: "Geteilt mit {LINK}1 Mitglied und 1 Gruppe{/LINK}"
        },
        "fr-FR": {
          singular: "Partagé avec {LINK}1 membre et 1 groupe{/LINK}"
        },
        "ja-JP": {
          singular: "{LINK}1人のメンバーおよび1グループ{/LINK}と共有"
        },
        "ko-KR": {
          singular: "{LINK}1명의 멤버 및 1개의 그룹{/LINK}과 공유되었습니다."
        },
        "pt-BR": {
          singular: "Compartilhado com {LINK}1 membro e 1 grupo{/LINK}"
        },
        "zh-CN": {
          singular: "已与 {LINK}1 位成员和 1 个群组共享 {/LINK}"
        }
      }
    }),
    _v53 = ({
      groupsCount: _v0,
      membersCount: _v1,
      onClick: _v2
    }) => (0, _v12.translate)({
      singular: "Shared with {LINK}{MEMBER_COUNT} members and {GROUP_COUNT} groups{/LINK}",
      replacements: {
        MEMBER_COUNT: _v1,
        GROUP_COUNT: _v0,
        LINK: _v0 => (0, _v1.jsx)(_v48, {
          onClick: _v2,
          children: _v0
        })
      },
      dictionary: {
        es: {
          singular: "Compartido con {LINK}{MEMBER_COUNT} miembros y {GROUP_COUNT} grupos{/LINK}"
        },
        "de-DE": {
          singular: "Geteilt mit {LINK}{MEMBER_COUNT} Mitgliedern und {GROUP_COUNT} Gruppen{/LINK}"
        },
        "fr-FR": {
          singular: "Partagé avec {LINK}{MEMBER_COUNT} membres et {GROUP_COUNT} groupes{/LINK}"
        },
        "ja-JP": {
          singular: "{LINK}{MEMBER_COUNT}1人のメンバーおよび{GROUP_COUNT}グループ{/LINK}と共有"
        },
        "ko-KR": {
          singular: "{LINK}{MEMBER_COUNT}명의 멤버 및 {GROUP_COUNT}개의 그룹{/LINK}과 공유되었습니다."
        },
        "pt-BR": {
          singular: "Compartilhado com {LINK}{MEMBER_COUNT} membros e {GROUP_COUNT} grupos{/LINK}"
        },
        "zh-CN": {
          singular: "已与 {LINK}{MEMBER_COUNT} 位成员和 {GROUP_COUNT} 个群组共享 {/LINK}"
        }
      }
    }),
    _v54 = ({
      membersCount: _v0,
      onClick: _v1
    }) => (0, _v12.translate)({
      singular: "Shared with {LINK}{COUNT} members and 1 group{/LINK}",
      replacements: {
        COUNT: _v0,
        LINK: _v0 => (0, _v1.jsx)(_v48, {
          onClick: _v1,
          children: _v0
        })
      },
      dictionary: {
        es: {
          singular: "Compartido con {LINK}{COUNT} miembros y 1 grupo{/LINK}"
        },
        "de-DE": {
          singular: "Geteilt mit {LINK}{COUNT} Mitgliedern und 1 Gruppe{/LINK}"
        },
        "fr-FR": {
          singular: "Partagé avec {LINK}{COUNT} membres et 1 groupe{/LINK}"
        },
        "ja-JP": {
          singular: "{LINK}{COUNT}のメンバーおよび1グループ{/LINK}と共有"
        },
        "ko-KR": {
          singular: "{LINK}{COUNT}명의 멤버 및 1개의 그룹{/LINK}과 공유되었습니다."
        },
        "pt-BR": {
          singular: "Compartilhado com {LINK}{COUNT} membros e 1 grupo{/LINK}"
        },
        "zh-CN": {
          singular: "已与 {LINK}{COUNT} 位成员和 1 个群组共享 {/LINK}"
        }
      }
    }),
    _v55 = ({
      groupsCount: _v0,
      onClick: _v1
    }) => (0, _v12.translate)({
      singular: "Shared with {LINK}1 member and {COUNT} groups{/LINK}",
      replacements: {
        COUNT: _v0,
        LINK: _v0 => (0, _v1.jsx)(_v48, {
          onClick: _v1,
          children: _v0
        })
      },
      dictionary: {
        es: {
          singular: "Compartido con {LINK}1 miembro y {COUNT} grupos{/LINK}"
        },
        "de-DE": {
          singular: "Geteilt mit {LINK}1 Mitglied und {COUNT} Gruppen{/LINK}"
        },
        "fr-FR": {
          singular: "Partagé avec {LINK}1 membre et {COUNT} groupes{/LINK}"
        },
        "ja-JP": {
          singular: "{LINK}1人のメンバーおよび{COUNT}グループ{/LINK}と共有"
        },
        "ko-KR": {
          singular: "{LINK}1명의 멤버 및 {COUNT}개의 그룹{/LINK}과 공유되었습니다."
        },
        "pt-BR": {
          singular: "Compartilhado com {LINK}1 membro e {COUNT} grupos{/LINK}"
        },
        "zh-CN": {
          singular: "已与 {LINK}1 位成员和 {COUNT} 个群组共享 {/LINK}"
        }
      }
    }),
    _v56 = ({
      canEdit: _v0 = !1,
      manageLink: _v1,
      viewLink: _v2
    }) => (0, _v1.jsx)(_v37.Button, {
      as: "a",
      href: _v1 ?? _v2,
      variant: "secondary",
      width: "100%",
      children: _v1 ? _v0 ? (0, _v12.translate)({
        singular: "Manage video",
        dictionary: {
          es: {
            singular: "Gestionar video"
          },
          "de-DE": {
            singular: "Video verwalten"
          },
          "fr-FR": {
            singular: "Gérer la vidéo"
          },
          "ja-JP": {
            singular: "動画を管理"
          },
          "ko-KR": {
            singular: "동영상 관리"
          },
          "pt-BR": {
            singular: "Gerenciar vídeo"
          },
          "zh-CN": {
            singular: "管理视频"
          }
        }
      }) : (0, _v12.translate)({
        singular: "Leave feedback",
        dictionary: {
          es: {
            singular: "Dejar comentarios"
          },
          "de-DE": {
            singular: "Feedback geben"
          },
          "fr-FR": {
            singular: "Laisser un commentaire"
          },
          "ja-JP": {
            singular: "フィードバックを残す"
          },
          "ko-KR": {
            singular: "의견 남기기"
          },
          "pt-BR": {
            singular: "Deixar comentários"
          }
        }
      }) : (0, _v12.translate)({
        singular: "Watch video",
        dictionary: {
          es: {
            singular: "Ver video"
          },
          "de-DE": {
            singular: "Video ansehen"
          },
          "fr-FR": {
            singular: "Regarder la vidéo"
          },
          "ja-JP": {
            singular: "動画を見る"
          },
          "ko-KR": {
            singular: "동영상 보기"
          },
          "pt-BR": {
            singular: "Ver vídeo"
          },
          "zh-CN": {
            singular: "观看视频"
          }
        }
      })
    });
  var _v57 = _v0.i(0);
  let _v58 = ({
    videoSrc: _v0
  }) => (0, _v1.jsx)(_v1.Fragment, {
    children: (0, _v1.jsxs)(_v3.Flex, {
      aspectRatio: "16/9",
      borderRadius: "1rem",
      width: "100%",
      marginBottom: "1.5rem",
      flexShrink: "0",
      overflow: "hidden",
      position: "relative",
      children: [(0, _v1.jsx)(_v41.Skeleton, {
        height: "100%",
        width: "100%"
      }), (0, _v1.jsx)(_v8.Box, {
        background: "fill-surface",
        height: "100%",
        width: "100%",
        position: "absolute",
        children: (0, _v1.jsx)(_v57.EmbedPlayer, {
          title: "side-panel-player",
          src: _v0
        })
      })]
    })
  });
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = ({
      isMetadataLocked: _v0 = !1,
      manageLink: _v1,
      privacy: _v2,
      password: _v3,
      videoId: _v4,
      onPrivacyChange: _v5
    }) => {
      let _v6 = (0, _v42.useToast)(),
        _v7 = (0, _v40.useRouter)(),
        {
          trackPrivacyChanged: _v8
        } = (0, _v63.useViewPrivacyChangeTracking)(),
        [_v9, _v10] = (0, _v2.useState)(!1),
        {
          privacyOptions: _v11,
          isLoading: _v12
        } = (0, _v64.useClipPrivacyOptions)(_v4, !1),
        {
          mutate: _v13
        } = _v34({
          videoId: _v4
        }),
        [_v14, {
          loading: _v15
        }] = (0, _v31.usePatchVideo)(),
        _v16 = () => {
          _v6({
            isClosable: !0,
            title: (0, _v12.translate)({
              singular: "Link privacy was not updated",
              dictionary: {
                es: {
                  singular: "No se actualizó la privacidad del enlace"
                },
                "de-DE": {
                  singular: "Der Link-Datenschutz wurde nicht aktualisiert"
                },
                "fr-FR": {
                  singular: "La confidentialité du lien n'a pas été mise à jour"
                },
                "ja-JP": {
                  singular: "リンクのプライバシーは更新されませんでした"
                },
                "ko-KR": {
                  singular: "링크 프라이버시가 업데이트되지 않았습니다."
                },
                "pt-BR": {
                  singular: "A privacidade do link não foi atualizada"
                },
                "zh-CN": {
                  singular: "链接隐私未更新"
                }
              }
            }),
            variant: "warning"
          });
        },
        _v17 = ({
          newPrivacy: _v0,
          newPassword: _v1
        }) => (_v13(_v0 => _v0 ? {
          ..._v0,
          privacy: {
            ..._v0.privacy,
            view: _v0,
            password: _v1 || void 0
          }
        } : _v0, !1), _v14({
          where: {
            videoId: _v4
          },
          select: ["privacy.view", "password"],
          variables: {
            privacy: {
              view: _v0
            },
            password: _v1 || void 0
          }
        }).then(() => {
          _v0 !== _v2 && _v8({
            entityType: "video",
            previousPrivacy: _v2,
            newPrivacy: _v0
          }), _v6({
            isClosable: !0,
            title: (0, _v12.translate)({
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
            })
          }), _v5?.({
            view: _v0,
            password: _v1 || void 0
          });
        }).catch(() => {
          _v16();
        }));
      if (_v12) return (0, _v1.jsx)(_v68, {
        children: (0, _v1.jsx)(_v69, {})
      });
      if (_v0) {
        let _v0 = () => {
          (0, _v43.showVideoMetadataLockedToast)({
            toast: _v6,
            router: _v7,
            managePath: _v1 ?? `/manage/videos/${_v4}`
          });
        };
        return (0, _v1.jsx)(_v68, {
          children: (0, _v1.jsx)(_v60.Tooltip, {
            placement: "top",
            label: (0, _v1.jsx)(_v59.Paragraph, {
              size: "md",
              children: (0, _v12.translate)({
                singular: "To share this video add the required metadata in the video detail page.",
                dictionary: {
                  es: {
                    singular: "Para compartir este video, agrega los metadatos requeridos en la página de detalles del video."
                  },
                  "de-DE": {
                    singular: "Um dieses Video zu teilen, fügen Sie die erforderlichen Metadaten auf der Seite mit den Videodetails hinzu."
                  },
                  "fr-FR": {
                    singular: "Pour partager cette vidéo, ajoutez les métadonnées requises dans la page de détails de la vidéo."
                  },
                  "ja-JP": {
                    singular: "この動画を共有するには、動画の詳細ページに必要なメタデータを追加してください。"
                  },
                  "ko-KR": {
                    singular: "이 비디오를 공유하려면 비디오 상세 페이지에서 필수 메타데이터를 추가하세요."
                  },
                  "pt-BR": {
                    singular: "Para compartilhar este vídeo, adicione os metadados necessários na página de detalhes do vídeo."
                  },
                  "zh-CN": {
                    singular: "要共享此视频，请在视频详情页中添加所需的元数据。"
                  }
                }
              })
            }),
            children: (0, _v1.jsx)(_v8.Box, {
              onClick: _v0,
              cursor: "pointer",
              children: (0, _v1.jsx)(_v62.PrivacyDropdown, {
                isVideoPrivacy: !0,
                activePrivacy: _v9 ? "password" : _v2,
                privacyOptions: _v11,
                onSelect: () => {
                  _v0();
                },
                isDisabled: !0,
                isRedirectUpsell: !0,
                showSelectedPrivacyDescription: !1
              })
            })
          })
        });
      }
      return (0, _v1.jsxs)(_v68, {
        children: [(0, _v1.jsx)(_v66.PrivacyCopyIntroModal, {
          children: (0, _v1.jsx)("div", {
            children: (0, _v1.jsx)(_v62.PrivacyDropdown, {
              isVideoPrivacy: !0,
              activePrivacy: _v9 ? _v65.DEFAULT_PRIVACY_VALUES.PASSWORD : _v2,
              privacyOptions: _v11,
              onSelect: _v0 => {
                _v0 !== _v2 && _v0 !== _v65.DEFAULT_PRIVACY_VALUES.PASSWORD && _v17({
                  newPrivacy: _v0
                }), _v10(_v0 === _v65.DEFAULT_PRIVACY_VALUES.PASSWORD);
              },
              isDisabled: !_v11.length || _v15,
              isRedirectUpsell: !0,
              showSelectedPrivacyDescription: !1
            })
          })
        }), (_v2 === _v65.DEFAULT_PRIVACY_VALUES.PASSWORD || _v9) && (0, _v1.jsx)(_v61.PasswordInput, {
          initialValue: _v3,
          maxLength: 32,
          isLoading: _v15,
          onSave: _v0 => _v17({
            newPrivacy: _v65.DEFAULT_PRIVACY_VALUES.PASSWORD,
            newPassword: _v0
          }),
          onUnmount: _v0 => {
            _v0.isChanged && !_v15 && _v16();
          }
        })]
      });
    },
    _v68 = ({
      children: _v0
    }) => (0, _v1.jsxs)(_v3.Flex, {
      "data-testid": "privacy-module",
      flexDirection: "column",
      gap: "1rem",
      width: "100%",
      children: [(0, _v1.jsx)(_v4.Text, {
        variant: "heading-sm",
        children: (0, _v12.translate)({
          singular: "Privacy",
          dictionary: {
            es: {
              singular: "Privacidad"
            },
            "de-DE": {
              singular: "Datenschutz"
            },
            "fr-FR": {
              singular: "Confidentialité "
            },
            "ja-JP": {
              singular: "プライバシー"
            },
            "ko-KR": {
              singular: "프라이버시"
            },
            "pt-BR": {
              singular: "Privacidade"
            },
            "zh-CN": {
              singular: "隐私"
            }
          }
        })
      }), _v0]
    }),
    _v69 = () => (0, _v1.jsx)(_v41.Skeleton, {
      "data-testid": "privacy-module-loading",
      borderRadius: ".75rem",
      height: "3rem"
    });
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  let _v72 = ({
    name: _v0,
    src: _v1
  }) => (0, _v1.jsxs)(_v3.Flex, {
    gap: "3",
    alignItems: "center",
    children: [(0, _v1.jsx)(_v71.Avatar, {
      alt: _v0 ?? "",
      src: _v1,
      size: "xs",
      nameProps: {
        name: _v0 ?? ""
      }
    }), (0, _v1.jsx)(_v4.Text, {
      variant: "body-sm",
      color: "text-secondary",
      children: _v0
    })]
  });
  var _v73 = _v0.i(0);
  let _v74 = (_v0, _v1) => {
      let _v2 = new Date(_v0);
      return new Intl.DateTimeFormat(_v1, {
        day: "numeric",
        month: "short",
        year: "numeric"
      }).format(_v2);
    },
    _v75 = (_v0, _v1) => {
      let _v2 = new Date(_v0);
      return new Intl.DateTimeFormat(_v1, {
        hour: "numeric",
        minute: "numeric"
      }).format(_v2);
    },
    _v76 = ({
      timestamp: _v0
    }) => {
      let _v1 = (0, _v73.useLocale)(),
        _v2 = _v74(_v0, _v1),
        _v3 = _v75(_v0, _v1);
      return (0, _v1.jsx)(_v4.Text, {
        variant: "body-sm",
        color: "text-secondary",
        children: (0, _v12.translate)({
          singular: "Added on {DATE} at {TIME}",
          replacements: {
            DATE: _v2,
            TIME: _v3
          },
          dictionary: {
            es: {
              singular: "Añadido el {DATE} a las {TIME}"
            },
            "de-DE": {
              singular: "Hinzugefügt am {DATE} um {TIME}"
            },
            "fr-FR": {
              singular: "Ajouté le {DATE} à {TIME}"
            },
            "ja-JP": {
              singular: "追加日時：{DATE} {TIME}"
            },
            "ko-KR": {
              singular: "{DATE}, {TIME}에 추가되었습니다."
            },
            "pt-BR": {
              singular: "Adicionado em {DATE} às {TIME}"
            },
            "zh-CN": {
              singular: "添加时间：{DATE} {TIME}"
            }
          }
        })
      });
    },
    _v77 = ({
      timestamp: _v0
    }) => {
      let _v1 = (0, _v73.useLocale)(),
        _v2 = _v74(_v0, _v1),
        _v3 = _v75(_v0, _v1);
      return (0, _v1.jsx)(_v4.Text, {
        variant: "body-sm",
        color: "text-secondary",
        children: (0, _v12.translate)({
          singular: "Last modified on {DATE} at {TIME}",
          replacements: {
            DATE: _v2,
            TIME: _v3
          },
          dictionary: {
            es: {
              singular: "Última modificación el {DATE} a las {TIME}"
            },
            "de-DE": {
              singular: "Zuletzt geändert am {DATE} um {TIME}"
            },
            "fr-FR": {
              singular: "Dernière modification le {DATE} à {TIME}"
            },
            "ja-JP": {
              singular: "最終変更日時：{DATE} {TIME}"
            },
            "ko-KR": {
              singular: "{DATE}, {TIME}에 마지막으로 수정되었습니다."
            },
            "pt-BR": {
              singular: "Modificado pela última vez em {DATE} às {TIME}"
            },
            "zh-CN": {
              singular: "最后修改时间：{DATE} {TIME}"
            }
          }
        })
      });
    },
    _v78 = ({
      dateCreated: _v0,
      dateModified: _v1,
      description: _v2 = "",
      name: _v3,
      uploaderAvatarSrc: _v4,
      uploaderName: _v5
    }) => (0, _v1.jsxs)(_v3.Flex, {
      flexDirection: "column",
      gap: "4",
      width: "100%",
      children: [(0, _v1.jsx)(_v72, {
        name: _v5,
        src: _v4
      }), (0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        gap: "2",
        wordBreak: "break-word",
        children: [(0, _v1.jsx)(_v4.Text, {
          variant: "heading-md",
          noOfLines: 2,
          children: _v3
        }), (0, _v1.jsx)(_v70.Description, {
          description: _v2,
          numLines: 3
        })]
      }), (0, _v1.jsxs)(_v3.Flex, {
        flexDirection: "column",
        gap: "1",
        children: [_v0 && (0, _v1.jsx)(_v76, {
          timestamp: _v0
        }), _v1 && (0, _v1.jsx)(_v77, {
          timestamp: _v1
        })]
      })]
    }),
    _v79 = ({
      canEdit: _v0 = !1,
      canEditPrivacy: _v1 = !1,
      canInvite: _v2 = !1,
      dateCreated: _v3,
      dateModified: _v4,
      description: _v5,
      id: _v6,
      isMetadataLocked: _v7 = !1,
      manageLink: _v8,
      name: _v9,
      onPrivacyChange: _v10,
      onShare: _v11,
      password: _v12,
      sharedUsersCount: _v13 = 0,
      sharedGroupsCount: _v14 = 0,
      thumbnailSrc: _v15,
      uploaderAvatarSrc: _v16,
      uploaderName: _v17,
      videoSrc: _v18,
      viewLink: _v19,
      viewPrivacy: _v20
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v58, {
        thumbnailSrc: _v15,
        videoSrc: _v18
      }, _v18), (0, _v1.jsxs)(_v14.Body, {
        children: [(0, _v1.jsx)(_v78, {
          dateCreated: _v3,
          dateModified: _v4,
          description: _v5,
          name: _v9,
          uploaderAvatarSrc: _v16,
          uploaderName: _v17
        }), _v2 && (0, _v1.jsx)(_v44, {
          groupsCount: _v14,
          membersCount: _v13,
          onClick: _v11,
          isMetadataLocked: _v7,
          manageLink: _v8
        }), _v1 && (0, _v1.jsx)(_v67, {
          isMetadataLocked: _v7,
          manageLink: _v8,
          onPrivacyChange: _v10,
          password: _v12,
          privacy: _v20,
          videoId: _v6
        })]
      }), (0, _v1.jsx)(_v14.Footer, {
        children: (0, _v1.jsx)(_v56, {
          canEdit: _v0,
          viewLink: _v19,
          manageLink: _v8
        })
      })]
    }),
    _v80 = ({
      onVideoPrivacyChange: _v0,
      pageName: _v1,
      videoId: _v2
    }) => {
      let {
          data: _v3,
          error: _v4,
          isLoading: _v5,
          mutate: _v6
        } = _v34({
          videoId: _v2
        }),
        [_v7, _v8] = (0, _v2.useState)(!1),
        _v9 = (_v0 => {
          let {
              teamContext: _v1,
              thirdPartyIntegrationContext: _v2,
              webContext: _v3
            } = _v30(_v0),
            _v4 = (0, _v22.buildProductAnalyticsBpContext)({
              element: "dropdown",
              product: "video_library",
              feature: "share_video",
              location: "panel",
              flow: "share_video_link"
            });
          return (0, _v2.useCallback)(() => {
            (0, _v23.sendBpEventWithContexts)("vimeo.change_link_privacy", {
              ..._v4,
              ..._v1,
              ..._v2,
              ..._v3
            }, 10);
          }, [_v4, _v1, _v2, _v3]);
        })(_v1),
        _v10 = (_v0 => {
          let {
            teamContext: _v1,
            thirdPartyIntegrationContext: _v2,
            webContext: _v3
          } = _v30(_v0);
          return (0, _v2.useCallback)(() => {
            let _v0 = (0, _v22.buildProductAnalyticsBpContext)({
              copy: "Share",
              element: "button",
              entity_type: "video",
              feature: "share_video",
              flow: "share_video",
              location: "panel",
              product: "video_library"
            });
            (0, _v23.sendBpEventWithContexts)("vimeo.distribute_content", {
              ..._v0,
              ..._v1,
              ..._v2,
              ..._v3
            }, 19, {
              ..._v24,
              distribution_type: "share"
            });
          }, [_v1, _v2, _v3]);
        })(_v1),
        _v11 = (0, _v2.useCallback)(() => {
          _v8(!1), _v6();
        }, [_v6]);
      return _v5 ? (0, _v1.jsx)(_v36, {}) : _v4 || !_v3 ? (0, _v1.jsx)(_v38, {
        onReload: _v6
      }) : (0, _v1.jsxs)(_v39, {
        onReload: _v6,
        children: [(0, _v1.jsx)(_v79, {
          canEdit: _v3.canEdit,
          canEditPrivacy: _v3.canEditPrivacy,
          canInvite: _v3.canInvite,
          dateCreated: _v3.dateCreated,
          dateModified: _v3.dateModified,
          description: _v3.description,
          id: _v3.id,
          isMetadataLocked: _v3.isMetadataLocked,
          manageLink: _v3.manageLink,
          name: _v3.name,
          onShare: () => {
            _v10(), _v8(!0);
          },
          onPrivacyChange: _v0 => {
            _v9(), _v6(), _v0.view && _v0?.({
              view: _v0.view
            });
          },
          password: _v3.password,
          sharedGroupsCount: _v3.sharedGroupsCount,
          sharedUsersCount: _v3.sharedUsersCount,
          thumbnailSrc: _v3.thumbnailSrc,
          uploaderAvatarSrc: _v3.uploaderAvatarSrc,
          uploaderName: _v3.uploaderName,
          videoSrc: _v3.playerEmbedUrl,
          viewLink: _v3.link,
          viewPrivacy: _v3.viewPrivacy
        }), _v7 && (0, _v1.jsx)(_v21.VideoShareViewModule, {
          clipId: _v2.toString(),
          isOpen: _v7,
          onClose: _v11,
          defaultPanel: "INVITE_PANEL",
          transferInlineLinkSurface: "video_setting",
          reviewLinkSurface: "video_setting"
        })]
      });
    },
    _v81 = ({
      onVideoPrivacyChange: _v0,
      pageName: _v1,
      uri: _v2
    }) => {
      let _v3,
        _v4 = (_v3 = _v2.match(_v18)) ? {
          type: _v17,
          id: parseInt(_v3[1], 10)
        } : (_v3 = _v2.match(_v19)) ? {
          type: "folder",
          id: parseInt(_v3[1], 10)
        } : (_v3 = _v2.match(_v20)) ? {
          type: "showcase",
          id: parseInt(_v3[1], 10)
        } : void 0;
      if (_v4?.type === _v17) return (0, _v1.jsx)(_v80, {
        onVideoPrivacyChange: _v0,
        pageName: _v1,
        videoId: _v4.id
      });
      throw Error("Unsupported resource type or malformed uri");
    };
  _v0.s(["ResourceSidePanel", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onVideoPrivacyChange: _v2,
    pageName: _v3,
    uri: _v4
  }) => _v0 ? (0, _v1.jsx)(_v16, {
    onClose: _v1,
    children: (0, _v1.jsx)(_v81, {
      onVideoPrivacyChange: _v2,
      pageName: _v3,
      uri: _v4
    })
  }) : null], 0);
}