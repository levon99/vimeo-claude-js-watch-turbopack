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
    clipId: _v0,
    clipHash: _v1,
    label: _v2,
    onOpen: _v3,
    ..._v4
  }) => {
    let _v5 = (0, _v27.useViewer)(),
      [_v6, _v7] = (0, _v3.useState)(!1),
      {
        data: _v8
      } = (0, _v26.useGetVideo)(() => _v5 && _v6 ? {
        where: {
          videoId: `${_v0}:${_v1}`
        },
        select: ["download.link"]
      } : null, {
        revalidateOnFocus: !1,
        shouldRetryOnError: !1
      }),
      _v9 = _v8?.download?.at(-2)?.link ?? _v8?.download?.at(0)?.link,
      _v10 = (0, _v3.useMemo)(() => _v9 ? (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        gap: "xs",
        w: (0, _v24.rem)(180),
        borderRadius: "sm",
        children: [(0, _v1.jsx)(_v22.AspectRatio, {
          ratio: 16 / 9,
          borderRadius: "xs",
          overflow: "hidden",
          children: (0, _v1.jsx)(_v21.Box, {
            as: "video",
            preload: "auto",
            playsInline: !0,
            muted: !0,
            autoPlay: !0,
            loop: !0,
            src: _v9,
            w: "100%",
            h: "100%",
            objectFit: "cover"
          })
        }), (0, _v1.jsx)(_v23.Text, {
          variant: "body-md",
          textAlign: "center",
          children: _v2
        })]
      }) : _v2, [_v9, _v2]),
      _v11 = (0, _v3.useCallback)(() => {
        _v7(!0), _v3?.();
      }, [_v3]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v6 && _v9 && (0, _v1.jsx)(_v21.Box, {
        as: "video",
        src: _v9,
        preload: "auto",
        display: "none"
      }), (0, _v1.jsx)(_v25.Tooltip, {
        label: _v10,
        p: "sm",
        openDelay: 0,
        onOpen: _v11,
        ..._v4
      })]
    });
  };
  var _v29 = _v0.i(0),
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
    _v57 = _v0.i(0);
  let _v58 = _v0 => ({
      eventName: "vimeo.click",
      version: 91,
      fields: _v0,
      defaultEventFields: {
        third_party_integration: null
      },
      globalAnalyticsToInclude: ["page", "path"]
    }),
    _v59 = _v0 => ({
      eventName: "workflow.open_delete_modal",
      version: 2,
      fields: _v0,
      defaultEventFields: {
        ..._v57.nullTeamContext,
        ..._v57.nullVideoContextData,
        ..._v57.nullUploadContextData,
        location: null
      }
    }),
    _v60 = _v0 => ({
      eventName: "vimeo.bulk_delete_items",
      version: 1,
      fields: _v0,
      globalAnalyticsToInclude: ["page"]
    });
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let {
      ActionButton: _v69
    } = _v20.BulkActionsBar,
    _v70 = ({
      disabled: _v0,
      onClick: _v1
    }) => {
      let _v2 = (0, _v35.useAnalyticsEvent)(),
        _v3 = (0, _v49.usePageName)();
      return (0, _v1.jsx)(_v69, {
        disabled: _v0,
        icon: (0, _v1.jsx)(_v64.Plus, {}),
        label: (0, _v33.translate)({
          singular: "Add to showcases",
          dictionary: {
            es: {
              singular: "Agregar a las presentaciones"
            },
            "de-DE": {
              singular: "Zu Präsentation hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter aux présentations"
            },
            "ja-JP": {
              singular: "ショーケースに追加"
            },
            "ko-KR": {
              singular: "쇼케이스에 추가"
            },
            "pt-BR": {
              singular: "Adicionar às vitrines"
            },
            "zh-CN": {
              singular: "添加到橱窗"
            }
          }
        }),
        onClick: () => {
          _v2(_v58({
            name: "open_add_to_collection",
            location: "bulk_actions_bar",
            feature: "showcases",
            copy: "add to showcase",
            page: "mvv" === _v3 ? "folder_library" : _v3,
            target: null,
            type: "general",
            target_path: null,
            click_type: null,
            device_type: null
          })), _v1();
        }
      });
    },
    _v71 = ({
      disabled: _v0,
      numItemsSelected: _v1,
      onClick: _v2
    }) => {
      let _v3 = (0, _v35.useAnalyticsEvent)(),
        _v4 = (0, _v49.usePageName)().toUpperCase(),
        _v5 = "VLS" === _v4 ? "search" : "video_library";
      return (0, _v1.jsx)(_v69, {
        disabled: _v0,
        icon: (0, _v1.jsx)(_v62.FolderOpen, {}),
        label: (0, _v33.translate)({
          singular: "Move",
          dictionary: {
            es: {
              singular: "Trasladar"
            },
            "de-DE": {
              singular: "Verschieben"
            },
            "fr-FR": {
              singular: "Déplacer"
            },
            "ja-JP": {
              singular: "移動"
            },
            "ko-KR": {
              singular: "이동"
            },
            "pt-BR": {
              singular: "Mover"
            },
            "zh-CN": {
              singular: "移动"
            }
          }
        }),
        onClick: () => {
          _v3(_v58({
            name: "move_item",
            page: _v4,
            feature: _v5,
            location: "bulk_actions_bar",
            copy: `${_v1}`,
            type: "general",
            target: "move_modal",
            target_path: null,
            click_type: null,
            device_type: null
          })), _v2();
        }
      });
    },
    _v72 = ({
      disabled: _v0,
      onClick: _v1
    }) => {
      let _v2 = (0, _v35.useAnalyticsEvent)(),
        _v3 = (0, _v49.usePageName)().toUpperCase();
      return (0, _v1.jsx)(_v69, {
        disabled: _v0,
        icon: (0, _v1.jsx)(_v65.TrashBin, {}),
        label: (0, _v33.translate)({
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
        }),
        onClick: () => {
          _v2(_v59({
            location: "bulk_actions_bar",
            page: _v3
          })), _v1();
        }
      });
    },
    _v73 = ({
      disabled: _v0,
      onClick: _v1
    }) => {
      let _v2 = (0, _v35.useAnalyticsEvent)(),
        _v3 = (0, _v49.usePageName)(),
        _v4 = "vls" === _v3 ? "search" : "video_library";
      return (0, _v1.jsx)(_v69, {
        disabled: _v0,
        icon: (0, _v1.jsx)(_v63.Eye, {}),
        label: (0, _v33.translate)({
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
        }),
        onClick: () => {
          _v2(_v58({
            name: "open_bulk_privacy_modal",
            location: "bulk_actions_bar",
            feature: _v4,
            copy: "privacy",
            page: _v3,
            target: "bulk_privacy_modal",
            type: "general",
            target_path: null,
            click_type: null,
            device_type: null
          })), _v1();
        }
      });
    },
    _v74 = ({
      disabled: _v0,
      onClick: _v1
    }) => (0, _v1.jsx)(_v69, {
      disabled: _v0,
      icon: (0, _v1.jsx)(_v67.AiSparkles, {}),
      label: (0, _v33.translate)({
        singular: "Translate",
        dictionary: {
          es: {
            singular: "Traducir"
          },
          "de-DE": {
            singular: "Übersetzen"
          },
          "fr-FR": {
            singular: "Traduire"
          },
          "ja-JP": {
            singular: "翻訳"
          },
          "ko-KR": {
            singular: "번역합니다."
          },
          "pt-BR": {
            singular: "Traduzir"
          },
          "zh-CN": {
            singular: "翻译"
          }
        }
      }),
      onClick: _v1
    }),
    _v75 = ({
      disabled: _v0,
      label: _v1,
      onClick: _v2
    }) => {
      let _v3 = (0, _v68.useWayfinderPageName)(),
        _v4 = (0, _v2.useRouter)().pathname;
      return (0, _v1.jsx)(_v69, {
        disabled: _v0,
        icon: (0, _v1.jsx)(_v66.Globe, {}),
        label: _v1,
        onClick: () => {
          _v61.BigPictureClient.sendEvent(new _v61.Event("vimeo.click", 137, {
            name: "open_bulk_share_in_china_modal",
            location: "bulk_actions_bar",
            feature: "video_library",
            copy: _v1,
            page: _v3,
            target: null,
            type: "general",
            click_type: null,
            device_type: null,
            path: _v4,
            target_path: null,
            third_party_integration: null
          })), _v2();
        }
      });
    };
  _v0.s(["AddToShowcasesButton", 0, _v70, "BulkShareInChinaButton", 0, _v75, "DeleteButton", 0, _v72, "MoveButton", 0, _v71, "PrivacyButton", 0, _v73, "TranslateButton", 0, _v74], 0);
  let _v76 = _v0 => _v0.replace("users", "user").replace("projects", "folder");
  function _v77(_v0) {
    return void 0 !== _v0;
  }
  function _v78(_v0) {
    return null !== _v0;
  }
  let _v79 = "bulk-actions-bar";
  _v0.s(["BulkActions", 0, ({
    canAddToShowcases: _v0,
    canUseBulkTranslation: _v1,
    canAddToShowcasesSelection: _v2 = !0,
    canMoveSelection: _v3,
    canDeleteSelection: _v4,
    canChangePrivacySelection: _v5,
    canPublishContentToChina: _v6,
    hasColdStorageSelection: _v7 = !1,
    currentFolder: _v8,
    eventData: _v9,
    hasLegalHoldSelection: _v10,
    hasReachedMaxSelectionForMove: _v11,
    hasReachedMaxSelectionForPrivacy: _v12,
    hasReachedMaxSelectionForSentimentWidget: _v13,
    hasReachedMaxSelectionForShowcases: _v14,
    deselectAllItems: _v15,
    removeItems: _v16,
    selectedItems: _v17,
    selectedItemURIs: _v18,
    teamOwnerId: _v19,
    revalidateItems: _v20,
    onBulkBarActionClicked: _v21,
    onBulkDeleteSuccess: _v22,
    onBulkMoveSuccess: _v23,
    isPrivateModeOn: _v24 = !1
  }) => {
    let _v25 = (0, _v3.useContext)(_v56.ViewerContext),
      {
        settings: _v26
      } = (0, _v34.useOrionSettings)(),
      _v27 = (0, _v35.useAnalyticsEvent)(),
      _v28 = (0, _v49.usePageName)(),
      _v29 = (0, _v2.useRouter)().pathname,
      {
        openMoveModal: _v30
      } = (0, _v47.useMoveModal)(),
      {
        openAddToShowcaseModal: _v31,
        closeAddToShowcaseModal: _v32
      } = (0, _v52.useAddToShowcaseModal)(),
      {
        openDeleteVideoModal: _v33,
        closeDeleteVideoModal: _v34
      } = (0, _v48.useDeleteVideoModal)(),
      {
        openBulkPrivacyModal: _v35
      } = (0, _v45.useBulkPrivacyModal)(),
      {
        openBulkPrivacyModal: _v36
      } = (0, _v17.useBulkPrivacyModal)(),
      {
        isEnabled: _v37,
        variant: _v38
      } = (0, _v18.useEnableFolderBulkPrivacy)(),
      {
        openBulkSentimentModal: _v39
      } = (0, _v19.useBulkSentimentModal)(),
      {
        openBulkShareInChinaModal: _v40
      } = (0, _v46.useBulkShareInChinaModal)(),
      _v41 = (0, _v51.useNotification)(),
      _v42 = (0, _v13.useToast)(),
      {
        notifyItemMoveSuccess: _v43,
        notifyItemMoveToWorkspaceSuccess: _v44
      } = (0, _v51.useNotifications)(),
      [_v45, {
        loading: _v46,
        error: _v47,
        called: _v48
      }] = (0, _v32.useDeleteUserVideos)(),
      [_v49, {
        loading: _v50,
        error: _v51,
        called: _v52
      }] = (0, _v31.useDeleteUserProjectItems)(),
      {
        mutateStarredItemsData: _v53
      } = (0, _v54.useStarredItemDataContext)(),
      {
        openBulkAiModal: _v54
      } = (0, _v16.useBulkAiModal)(),
      _v55 = (0, _v55.useActivityCenterStore)(_v0 => _v0.handleNewTranslationJob),
      {
        capabilities: _v56
      } = (0, _v29.useCapability)(["hasContentSpaceEnabled", "canGenerateClipTranslation", "canGenerateClipTextTranslation", "canUseSentimentWidgets"], _v19),
      _v57 = !!_v56.canGenerateClipTextTranslation,
      _v58 = !!_v56.canGenerateClipTranslation,
      _v59 = !!_v56.canUseSentimentWidgets,
      _v60 = _v56?.hasContentSpaceEnabled ? (0, _v33.translate)({
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
      }) : (0, _v33.translate)({
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
      _v61 = (0, _v3.useMemo)(() => _v17 ? _v17.map(_v0 => {
        let _v1 = _v0.video?.uri,
          _v2 = _v0.video?.duration;
        if (_v1 && "number" == typeof _v2) {
          let _v0 = _v1.split("/").filter(Boolean).pop();
          if (_v0) return {
            videoId: _v0,
            duration: _v2
          };
        }
        return null;
      }).filter(_v0 => null !== _v0) : [], [_v17]),
      _v62 = (0, _v3.useMemo)(() => _v17 ? _v17.map(_v0 => {
        let _v1 = _v0.video?.uri,
          _v2 = _v0.video?.duration;
        return _v1 && "number" == typeof _v2 ? {
          uri: _v1,
          name: _v0.video?.name ?? "",
          duration: _v2,
          sentimentWidgets: _v0.video?.embed?.sentimentWidgets
        } : null;
      }).filter(_v78) : [], [_v17]),
      _v63 = !0;
    _v17 && _v17.map(_v0 => {
      if ("live_event" !== _v0.type && !_v0.liveEvent) {
        _v63 = !1;
        return;
      }
    });
    let _v64 = () => {
        if (_v17 && 1 === _v17.length) if (_v63) return _v17[0]?.liveEvent?.title;else return _v17[0]?.video?.name;
        return "";
      },
      [_v65, {
        loading: _v66,
        error: _v67,
        called: _v68
      }] = (0, _v30.useDeleteUserLiveEvents)(),
      {
        revalidateRootItems: _v69
      } = (0, _v50.useRevalidate)(),
      _v70 = (0, _v33.translate)({
        singular: "{NUM_ITEMS_DELETED} item has been deleted",
        plural: "{NUM_ITEMS_DELETED} items are being deleted. It might take a moment.",
        count: _v18.size,
        replacements: {
          NUM_ITEMS_DELETED: _v18.size
        },
        dictionary: {
          es: {
            singular: "Se eliminó {NUM_ITEMS_DELETED} elemento.",
            plural: "Se están eliminando {NUM_ITEMS_DELETED} elementos. Puede tomar un momento."
          },
          "de-DE": {
            singular: "{NUM_ITEMS_DELETED} Element wurde gelöscht.",
            plural: "{NUM_ITEMS_DELETED} Elemente werden gelöscht. Dies kann einen Moment dauern."
          },
          "fr-FR": {
            singular: "{NUM_ITEMS_DELETED} élément a été supprimé",
            plural: "{NUM_ITEMS_DELETED} éléments vont être supprimés. Cela peut prendre quelques instants."
          },
          "ja-JP": {
            singular: "{NUM_ITEMS_DELETED}件のアイテムが削除されました",
            plural: "{NUM_ITEMS_DELETED}件のアイテムを削除しています。少々お待ちください。"
          },
          "ko-KR": {
            singular: "{NUM_ITEMS_DELETED}개 항목이 삭제되었습니다.",
            plural: "{NUM_ITEMS_DELETED}개 항목을 삭제 중입니다. 잠시만 기다려 주세요."
          },
          "pt-BR": {
            singular: "{NUM_ITEMS_DELETED} iten foi excluído",
            plural: "{NUM_ITEMS_DELETED} itens estão sendo excluídos. Aguarde um momento."
          },
          "zh-CN": {
            singular: "已删除 {NUM_ITEMS_DELETED} 个项目",
            plural: "正在删除 {NUM_ITEMS_DELETED} 个项目。这可能需要一些时间。"
          }
        }
      }),
      _v71 = (0, _v33.translate)({
        singular: "{NUM_ITEMS_DELETED} item deleted",
        plural: "{NUM_ITEMS_DELETED} items deleted",
        count: _v18.size,
        replacements: {
          NUM_ITEMS_DELETED: _v18.size
        },
        dictionary: {
          es: {
            singular: "{NUM_ITEMS_DELETED} elemento eliminado",
            plural: "{NUM_ITEMS_DELETED} elementos eliminados"
          },
          "de-DE": {
            singular: "{NUM_ITEMS_DELETED} Element gelöscht",
            plural: "{NUM_ITEMS_DELETED} Elemente gelöscht"
          },
          "fr-FR": {
            singular: "{NUM_ITEMS_DELETED} élément supprimé",
            plural: "{NUM_ITEMS_DELETED} éléments supprimés"
          },
          "ja-JP": {
            singular: "{NUM_ITEMS_DELETED}件のアイテムが削除されました",
            plural: "{NUM_ITEMS_DELETED}件のアイテムが削除されました"
          },
          "ko-KR": {
            singular: "{NUM_ITEMS_DELETED}개 항목 삭제됨",
            plural: "{NUM_ITEMS_DELETED}개 항목 삭제됨"
          },
          "pt-BR": {
            singular: "{NUM_ITEMS_DELETED} iten excluído",
            plural: "{NUM_ITEMS_DELETED} itens excluídos"
          },
          "zh-CN": {
            singular: "{NUM_ITEMS_DELETED} 个项目已删除",
            plural: "{NUM_ITEMS_DELETED} 个项目已删除"
          }
        }
      });
    (0, _v3.useEffect)(() => {
      _v8 && (_v50 && _v33({
        isLoading: _v50,
        numItemsToDelete: _v17 ? _v17.length : 0,
        isLiveEvent: _v63,
        name: _v64()
      }), _v52 && !_v50 && !_v51 && _v18.size > 0 && (_v15(), _v34(), _v16(_v18), _v41({
        content: _v18.size > 20 ? _v70 : _v71,
        status: "success"
      }), _v15()), _v51 && _v33({
        errorComponent: (0, _v1.jsx)(_v4.Alert, {
          status: "error",
          children: (0, _v1.jsx)(_v5.AlertDescription, {
            children: _v51.message
          })
        }),
        isLoading: _v50,
        numItemsToDelete: _v17 ? _v17.length : 0,
        isLiveEvent: !1,
        name: _v64()
      }));
    }, [_v50, _v51, _v52]), (0, _v3.useEffect)(() => {
      !_v8 && (_v46 && _v33({
        isLoading: _v46,
        numItemsToDelete: _v17 ? _v17.length : 0,
        isLiveEvent: !1,
        name: _v64()
      }), _v48 && !_v46 && !_v47 && _v18.size > 0 && (_v15(), _v34(), _v16(_v18), _v41({
        content: _v18.size > 20 ? _v70 : _v71,
        status: "success"
      }), _v15()), _v47 && _v33({
        errorComponent: (0, _v1.jsx)(_v4.Alert, {
          status: "error",
          children: (0, _v1.jsx)(_v5.AlertDescription, {
            children: _v47.message
          })
        }),
        isLoading: _v46,
        numItemsToDelete: _v17 ? _v17.length : 0,
        isLiveEvent: !1,
        name: _v64()
      }));
    }, [_v46, _v47, _v48]), (0, _v3.useEffect)(() => {
      !_v8 && (_v66 && _v33({
        isLoading: _v66,
        numItemsToDelete: _v17 ? _v17.length : 0,
        isLiveEvent: _v63,
        name: _v64()
      }), _v68 && !_v66 && !_v67 && _v18.size > 0 && (_v15(), _v34(), _v16(_v18), _v41({
        content: _v18.size > 20 ? _v70 : _v71,
        status: "success"
      }), _v15()), _v67 && _v33({
        errorComponent: (0, _v1.jsx)(_v4.Alert, {
          status: "error",
          children: (0, _v1.jsxs)(_v5.AlertDescription, {
            children: [" ", _v67.message]
          })
        }),
        isLoading: _v66,
        numItemsToDelete: _v17 ? _v17.length : 0,
        isLiveEvent: _v63,
        name: _v64()
      }));
    }, [_v66, _v67, _v68, _v63]);
    let _v72 = (0, _v3.useMemo)(() => {
        if (_v17) return _v17?.map(_v0 => {
          if (_v0.video) {
            let {
              name: _v0,
              regionalPrivacies: _v1,
              uri: _v2
            } = _v0.video;
            return _v1?.cn === null ? {
              chinaPrivacy: null,
              name: _v0,
              uri: _v2
            } : {
              chinaPrivacy: {
                privacy: _v1?.cn?.privacy,
                uri: _v1?.cn?.uri
              },
              name: _v0,
              uri: _v2
            };
          }
          return null;
        }).filter(_v78);
      }, [_v17]),
      _v73 = (0, _v3.useMemo)(() => !!_v17 && _v17.some(_v0 => _v0.video && (0, _v43.isVideoMetadataLocked)(_v0.video)), [_v17]),
      _v74 = (0, _v3.useCallback)(() => {
        _v42({
          title: (0, _v33.translate)({
            singular: "These videos have missing mandatory custom metadata.",
            dictionary: {
              es: {
                singular: "A estos vídeos les faltan metadatos personalizados obligatorios."
              },
              "de-DE": {
                singular: "Bei diesen Videos fehlen erforderliche benutzerdefinierte Metadaten."
              },
              "fr-FR": {
                singular: "Il manque des métadonnées personnalisées obligatoires pour ces vidéos."
              },
              "ja-JP": {
                singular: "これらの動画には必須のカスタムメタデータが欠落しています。"
              },
              "ko-KR": {
                singular: "이 동영상들에 필수 사용자 지정 메타데이터가 누락되어 있습니다."
              },
              "pt-BR": {
                singular: "Esses vídeos estão sem metadados personalizados obrigatórios."
              },
              "zh-CN": {
                singular: "这些视频缺少必需的自定义元数据。"
              }
            }
          }),
          variant: "warning",
          isClosable: !0,
          position: "bottom-right"
        });
      }, [_v42]),
      {
        num_items: _v75,
        num_videos: _v76,
        num_live_events: _v77
      } = (0, _v3.useMemo)(() => {
        let _v0 = 0,
          _v1 = 0,
          _v2 = 0;
        return _v17?.forEach(_v0 => {
          _v0.video ? _v1++ : _v0.liveEvent && _v2++, _v0++;
        }), {
          num_items: _v0,
          num_videos: _v1,
          num_live_events: _v2
        };
      }, [_v17]),
      _v78 = _v8 ? () => {
        let _v0 = Array.from(_v18).join(",");
        _v19 && _v8 && (_v49({
          where: {
            userId: _v19,
            projectId: _v8.id
          },
          query: {
            uris: _v0,
            shouldDeleteItems: !0,
            ...(_v26.has_recently_deleted ? {
              sendToRecentlyDeleted: !0
            } : {})
          }
        }).finally(() => {
          _v18.size > 1 ? _v42.gtm.trackBulkDelete() : _v42.gtm.trackVideoDelete(), _v53?.();
        }), _v27(_v60({
          location: _v41.AnalyticsLocations.BULK_ACTIONS_BAR,
          method: "delete modal",
          page: _v28,
          folder_id: null,
          folder_share_status: null,
          is_private_to_me: null,
          is_subfolder: !1,
          parent_folder_id: null,
          num_items: _v75,
          num_videos: _v76,
          num_live_events: _v77,
          ..._v9
        })));
      } : _v63 ? () => {
        let _v0 = Array.from(_v18),
          _v1 = _v17?.flatMap(_v0 => _v0.liveEvent ? ["venue" === _v0.liveEvent.eventType ? "venue" : "event"] : []) ?? [];
        _v1.length > 0 && _v22?.({
          types: _v1
        }), _v19 && _v65({
          where: {
            userId: _v19
          },
          variables: {
            events: _v0
          },
          headers: {
            Accept: "application/vnd.vimeo.*+json;version=3.4.4"
          }
        }).finally(() => {
          _v18.size > 1 && _v42.gtm.trackBulkDelete();
        });
      } : () => {
        let _v0 = Array.from(_v18).join(",");
        _v19 && (_v45({
          where: {
            userId: _v19
          },
          query: {
            uris: _v0
          },
          ...(_v26.has_recently_deleted ? {
            variables: {
              sendToRecentlyDeleted: !0
            }
          } : {})
        }).finally(() => {
          _v18.size > 1 ? _v42.gtm.trackBulkDelete() : _v42.gtm.trackVideoDelete(), _v53?.();
        }), _v27(_v60({
          location: _v41.AnalyticsLocations.BULK_ACTIONS_BAR,
          method: "delete modal",
          page: _v28,
          folder_id: null,
          folder_share_status: null,
          is_private_to_me: null,
          is_subfolder: !1,
          parent_folder_id: null,
          num_items: _v75,
          num_videos: _v76,
          num_live_events: _v77,
          ..._v9
        })));
      },
      _v79 = _v8 ? _v50 : _v63 ? _v66 : _v46,
      _v80 = 0 === _v62.length || _v13 || _v7,
      _v81 = (0, _v3.useCallback)(() => {
        !_v80 && _v19 && _v39({
          items: _v62,
          userId: _v19,
          location: _v41.AnalyticsLocations.BULK_ACTIONS_BAR,
          showUpgrade: !_v59,
          onSuccess: () => {
            _v15(), _v20 ? _v20() : _v69();
          }
        });
      }, [_v62, _v19, _v80, _v59, _v39, _v15, _v20, _v69]),
      _v82 = _v18.size;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v7.Flex, {
        id: _v79,
        justifyContent: "center",
        width: "100%"
      }), (0, _v1.jsxs)(_v20.BulkActionsBar, {
        handleDeselectAllItems: () => {
          let _v0 = _v28.toUpperCase();
          _v27(_v58({
            copy: `${_v18.size}`,
            feature: "VLS" === _v0 ? "search" : "video_library",
            location: "bulk_actions_bar",
            name: "select_item",
            page: _v0,
            target: "de-selected",
            type: "general",
            target_path: null,
            click_type: null,
            device_type: null
          })), _v15();
        },
        numItemsSelected: _v82,
        tooltipText: _v14 && _v11 && _v12 ? (0, _v33.translate)({
          singular: "You've reached the selection limit for bulk Move, Privacy, and Add to showcases",
          dictionary: {
            es: {
              singular: "Alcanzó el límite de selección para Mover en lote, Privacidad y Agregar a presentaciones"
            },
            "de-DE": {
              singular: "Sie haben das Auswahllimit für Sammelaktionen, Datenschutz und zum Hinzufügen zu Präsentationen erreicht"
            },
            "fr-FR": {
              singular: "Vous avez atteint la limite de sélection pour le déplacement groupé, la confidentialité et l'ajout aux présentations"
            },
            "ja-JP": {
              singular: "一括移動、プライバシー、ショーケースへの追加の選択上限に達しました"
            },
            "ko-KR": {
              singular: "일괄 이동, 개인정보 보호, 쇼케이스 추가에 대한 선택 한도에 도달했습니다."
            },
            "pt-BR": {
              singular: "Você atingiu o limite de seleção para movimentação, privacidade e adição às vitrines em massa"
            },
            "zh-CN": {
              singular: "您已达到批量移动、隐私和添加到展示的选择上限。"
            }
          }
        }) : _v11 && _v12 ? (0, _v33.translate)({
          singular: "You've reached the selection limit for bulk Move and Privacy",
          dictionary: {
            es: {
              singular: "Alcanzó el límite de selección para Mover en lote y Privacidad"
            },
            "de-DE": {
              singular: "Sie haben das Auswahllimit für Sammelaktionen und Datenschutz erreicht"
            },
            "fr-FR": {
              singular: "Vous avez atteint la limite de sélection pour le déplacement groupé et la confidentialité"
            },
            "ja-JP": {
              singular: "一括移動とプライバシーの選択上限に達しました"
            },
            "ko-KR": {
              singular: "일괄 이동 및 개인정보 보호에 대한 선택 한도에 도달했습니다."
            },
            "pt-BR": {
              singular: "Você atingiu o limite de seleção para movimentação e privacidade em massa"
            },
            "zh-CN": {
              singular: "您已达到批量移动和隐私操作的选择上限"
            }
          }
        }) : _v11 ? (0, _v33.translate)({
          singular: "You've reached the selection limit for bulk Move",
          dictionary: {
            es: {
              singular: "Alcanzó el límite de selección para Mover en lote"
            },
            "de-DE": {
              singular: "Sie haben das Auswahllimit für Sammelaktionen erreicht"
            },
            "fr-FR": {
              singular: "Vous avez atteint la limite de sélection pour le déplacement groupé"
            },
            "ja-JP": {
              singular: "一括移動の選択上限に達しました"
            },
            "ko-KR": {
              singular: "일괄 이동에 대한 선택 한도에 도달했습니다."
            },
            "pt-BR": {
              singular: "Você atingiu o limite de seleção para movimentação em massa"
            },
            "zh-CN": {
              singular: "您已达到批量移动的选择上限。"
            }
          }
        }) : void 0,
        targetElementId: _v79,
        selectedItemsText: 0 === _v82 ? (0, _v33.translate)({
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
        }) : (0, _v33.translate)({
          singular: "{COUNT} item selected",
          plural: "{COUNT} items selected",
          count: _v82,
          replacements: {
            COUNT: _v82
          },
          dictionary: {
            es: {
              singular: "{COUNT} artículo seleccionado",
              plural: "{COUNT} artículos seleccionados"
            },
            "de-DE": {
              singular: "{COUNT} Element ausgewählt",
              plural: "{COUNT} Elemente ausgewählt"
            },
            "fr-FR": {
              singular: "{COUNT} élément sélectionné",
              plural: "{COUNT} éléments sélectionnés"
            },
            "ja-JP": {
              singular: "{COUNT}件のアイテムが選択されました",
              plural: "{COUNT}件のアイテムが選択されました"
            },
            "ko-KR": {
              singular: "{COUNT}개 항목이 선택되었습니다.",
              plural: "{COUNT}개 항목이 선택되었습니다."
            },
            "pt-BR": {
              singular: "{COUNT} iten selecionado",
              plural: "{COUNT} itens selecionados"
            },
            "zh-CN": {
              singular: "已选择 {COUNT} 个项目",
              plural: "已选择 {COUNT} 个项目"
            }
          }
        }),
        children: [(0, _v1.jsx)(_v71, {
          disabled: !_v3 || _v11,
          numItemsSelected: _v18.size,
          onClick: () => {
            if (_v21?.({
              action: "move",
              selectedCount: _v18.size
            }), _v27(_v58({
              name: "move_item",
              page: _v28,
              feature: "vls" === _v28 ? "search" : "video_library",
              location: _v41.AnalyticsLocations.BULK_ACTIONS_BAR,
              copy: `${_v18.size}`,
              type: "general",
              target: "move_modal",
              target_path: null,
              click_type: null,
              device_type: null
            })), !_v17 || !_v19) return;
            let _v0 = _v17.map(_v0 => {
              if (_v0.video) {
                let _v0 = _v8 ?? _v0.video.parentProject ?? void 0;
                return {
                  name: _v0.video.name,
                  type: "video",
                  uri: _v0.video.uri,
                  parentFolder: _v0
                };
              }
              if (_v0.folder) {
                let _v0 = _v8 || (_v0.folder?.metadata?.connections?.parentFolder?.uri ? {
                  uri: _v0.folder.metadata.connections.parentFolder.uri,
                  isPrivateToUser: !!_v0?.folder?.isPrivateToUser
                } : void 0);
                return {
                  name: _v0.folder.name,
                  type: "folder",
                  uri: _v0.folder.uri,
                  parentFolder: _v0
                };
              }
              if (_v0.liveEvent) {
                let _v0 = _v8 ?? void 0;
                return {
                  name: _v0.liveEvent.title,
                  type: "live_event",
                  uri: _v0.liveEvent.uri,
                  parentFolder: _v0
                };
              }
            }).filter(_v77);
            _v30({
              activeFolderURI: _v8?.uri,
              feature: "vls" === _v28 ? "search" : "library",
              location: _v41.AnalyticsLocations.BULK_ACTIONS_BAR,
              items: _v0,
              onMoveSuccess: ({
                items: _v0,
                selectedDestination: _v1,
                destinationWorkspaceId: _v2,
                destinationWorkspaceName: _v3
              }) => {
                let _v4 = _v17?.flatMap(_v0 => _v0.liveEvent ? ["venue" === _v0.liveEvent.eventType ? "venue" : "event"] : []) ?? [];
                _v4.length > 0 && _v23?.({
                  destination: _v2 && _v3 ? "team_library" : "my_library",
                  types: _v4
                });
                let _v5 = "root" === _v1 ? _v60 : _v1.name,
                  _v6 = "root" === _v1 ? "/library" : _v76(_v1.uri);
                _v2 && _v3 ? _v44(_v0, {
                  label: _v5,
                  workspaceName: _v3
                }, () => {
                  _v25 && (0, _v44.switchTeam)(_v2, _v25.xsrft).finally(() => {
                    window.location.href = _v76(_v6);
                  });
                }) : _v43(_v0, {
                  label: _v5,
                  link: _v6
                }), "vls" === _v28 ? _v20?.() : _v16(_v18), _v15();
              },
              teamOwnerId: _v19
            });
          }
        }), (0, _v1.jsx)(_v72, {
          disabled: !_v4,
          onClick: () => {
            _v21?.({
              action: "delete",
              selectedCount: _v18.size
            }), _v27(_v59({
              location: _v41.AnalyticsLocations.BULK_ACTIONS_BAR,
              page: _v28
            })), _v33({
              isLoading: _v79,
              numItemsToDelete: _v17 ? _v17.length : 0,
              onClickDelete: _v78,
              onClickCancel() {
                _v27({
                  eventName: "workflow.delete_video_cancelled",
                  version: 2,
                  fields: {
                    location: _v41.AnalyticsLocations.BULK_ACTIONS_BAR,
                    page: _v28
                  },
                  defaultEventFields: {
                    ..._v57.nullTeamContext,
                    ..._v57.nullVideoContextData,
                    ..._v57.nullUploadContextData,
                    location: null
                  }
                });
              },
              isOnLegalHold: _v10,
              isLiveEvent: _v63,
              name: _v64()
            });
          }
        }), _v5 && (0, _v1.jsx)(_v73, {
          disabled: !_v5 || _v12,
          onClick: () => {
            if (_v73) return void _v74();
            if (_v27(_v58({
              name: "open_bulk_privacy_modal",
              location: _v41.AnalyticsLocations.BULK_ACTIONS_BAR,
              feature: "vls" === _v28 ? "search" : "video_library",
              copy: "privacy",
              page: _v28,
              target: "bulk_privacy_modal",
              type: "general",
              target_path: null,
              click_type: null,
              device_type: null
            })), !_v17 || !_v19) return;
            let _v0 = _v17.map(_v0 => {
              if (_v0.video) {
                let {
                  allowedPrivacies: _v0,
                  password: _v1,
                  uri: _v2,
                  isCopyrightRestricted: _v3
                } = _v0.video;
                return {
                  privacy: {
                    comments: _v0.video.privacy?.comments || "",
                    download: _v0.video.privacy?.download || !1,
                    embed: _v0.video.privacy?.embed || "",
                    view: _v0.video.privacy?.view || ""
                  },
                  allowedPrivacies: _v0,
                  uri: _v2,
                  password: _v1,
                  isCopyrightRestricted: _v3
                };
              }
            }).filter(_v77);
            _v37 ? _v36({
              clips: _v0,
              userId: _v19,
              location: "bulk_action_bar",
              variant: _v38,
              onSuccess: () => {
                _v15(), _v20 ? _v20() : _v69();
              }
            }) : _v35({
              items: _v0,
              userId: _v19,
              location: _v41.AnalyticsLocations.BULK_ACTIONS_BAR,
              isPrivateModeOn: _v24,
              onSuccess: () => {
                _v41({
                  content: (0, _v33.translate)({
                    singular: "Privacy settings have been updated",
                    dictionary: {
                      es: {
                        singular: "Se ha actualizado la configuración de privacidad"
                      },
                      "de-DE": {
                        singular: "Die Datenschutzeinstellungen wurden aktualisiert"
                      },
                      "fr-FR": {
                        singular: "Les paramètres de confidentialité ont été mis à jour"
                      },
                      "ja-JP": {
                        singular: "プライバシー設定が更新されました"
                      },
                      "ko-KR": {
                        singular: "프라이버시 설정이 업데이트되었습니다."
                      },
                      "pt-BR": {
                        singular: "As configurações de privacidade foram atualizadas"
                      },
                      "zh-CN": {
                        singular: "隐私设置已更新"
                      }
                    }
                  }),
                  status: "success"
                }), _v15(), _v20 ? _v20() : _v69();
              }
            });
          }
        }), _v0 && (0, _v1.jsx)(_v70, {
          disabled: !_v2 || _v14,
          numItemsSelected: _v18.size,
          onClick: () => {
            if (!_v17 || !_v19) return;
            let _v0 = [];
            _v17.forEach(_v0 => {
              if (_v0.video) {
                let _v0 = (0, _v53.idFromUri)(_v0.video.uri),
                  _v1 = _v0.video.name;
                _v0.push({
                  id: _v0,
                  name: _v1,
                  type: "video"
                });
              } else if (_v0.liveEvent) {
                let _v0 = (0, _v53.idFromUri)(_v0.liveEvent.uri),
                  _v1 = _v0.liveEvent.title;
                _v0.push({
                  id: _v0,
                  name: _v1,
                  type: "live_event"
                });
              }
            }), _v31({
              onClose: _v32,
              showcaseItems: _v0,
              ownerId: _v19,
              onSuccess: () => {
                _v15();
              },
              pageName: _v28,
              pageUrl: _v29
            });
          }
        }), _v1 && (0, _v1.jsx)(_v74, {
          disabled: !_v61 || 0 === _v61.length || _v7,
          onClick: () => {
            _v61 && 0 !== _v61.length && ((0, _v38.sendBpEventWithContexts)("vimeo.select_translate_bulk", {
              ...(0, _v40.buildActionBpContext)({
                action_type: "click",
                feature: null
              }),
              ...(0, _v36.buildProductAnalyticsBpContext)({
                product: "ai",
                feature: "ai_bulk_translate",
                location: "bulk_actions_bar",
                copy: "translate"
              }),
              ...(0, _v37.buildWebBpContext)({
                page_name: "video_library"
              }),
              ...(0, _v39.buildTeamBpContextFromTeamUser)(_v25?.teamUser)
            }, 1, {
              value: String(_v61.length),
              device_type: "web"
            }), _v54({
              clipItems: _v61,
              isFolder: !1,
              canTranslateText: _v57,
              canTranslateDubbing: _v58,
              onComplete: () => {
                _v19 && _v55(_v19), _v15();
              }
            }));
          }
        }), _v6 && (0, _v1.jsx)(_v75, {
          disabled: !_v6,
          label: (0, _v33.translate)({
            singular: "China access",
            dictionary: {
              es: {
                singular: "Acceso a China"
              },
              "de-DE": {
                singular: "China-Zugang"
              },
              "fr-FR": {
                singular: "Accès à partir de la Chine"
              },
              "ja-JP": {
                singular: "中国でのアクセス"
              },
              "ko-KR": {
                singular: "중국 접근"
              },
              "pt-BR": {
                singular: "Acesso a partir da China"
              },
              "zh-CN": {
                singular: "中国访问权限"
              }
            }
          }),
          onClick: () => {
            _v72 && _v19 && _v40({
              items: _v72,
              userId: _v19,
              onSuccess: () => {
                _v41({
                  content: (0, _v33.translate)({
                    singular: "Processing... This may take a few minutes",
                    dictionary: {
                      es: {
                        singular: "Procesando… Esto puede tardar unos minutos."
                      },
                      "de-DE": {
                        singular: "Wird bearbeitet… Das kann ein paar Minuten dauern."
                      },
                      "fr-FR": {
                        singular: "En cours de traitement… Cela peut prendre quelques minutes."
                      },
                      "ja-JP": {
                        singular: "処理中...これには数分かかる場合があります。"
                      },
                      "ko-KR": {
                        singular: "처리 중... 몇 분 정도 걸릴 수 있습니다."
                      },
                      "pt-BR": {
                        singular: "Processando... Isto pode levar alguns minutos."
                      },
                      "zh-CN": {
                        singular: "正在处理...这可能需要几分钟时间"
                      }
                    }
                  }),
                  status: "info"
                }), _v15(), _v20 ? _v20() : _v69();
              }
            });
          }
        }), (0, _v1.jsxs)(_v9.Menu, {
          placement: "top-end",
          children: [(0, _v1.jsx)(_v10.MenuButton, {
            as: _v8.IconButton,
            "aria-label": (0, _v33.translate)({
              singular: "more actions",
              dictionary: {
                es: {
                  singular: "más acciones"
                },
                "de-DE": {
                  singular: "Weitere Aktionen"
                },
                "fr-FR": {
                  singular: "autres actions"
                },
                "ja-JP": {
                  singular: "その他の操作"
                },
                "ko-KR": {
                  singular: "추가 작업"
                },
                "pt-BR": {
                  singular: "mais ações"
                },
                "zh-CN": {
                  singular: "更多操作"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v14.EllipsisH, {}),
            variant: "tertiary"
          }), (0, _v1.jsx)(_v11.MenuList, {
            p: "xs",
            children: (0, _v1.jsx)(_v28, {
              placement: "left",
              clipId: "1187834625",
              clipHash: "8e5a2b299a",
              label: (0, _v33.translate)({
                singular: "Add an interactive rating element to your video.",
                dictionary: {
                  es: {
                    singular: "Añade un elemento interactivo de calificación a tu vídeo."
                  },
                  "de-DE": {
                    singular: "Fügen Sie Ihrem Video ein interaktives Bewertungselement hinzu."
                  },
                  "fr-FR": {
                    singular: "Ajoutez un élément de notation interactif à votre vidéo."
                  },
                  "ja-JP": {
                    singular: "動画にインタラクティブな評価要素を追加してください。"
                  },
                  "ko-KR": {
                    singular: "동영상에 대화형 평점 요소를 추가하세요."
                  },
                  "pt-BR": {
                    singular: "Adicione um elemento de avaliação interativa ao seu vídeo."
                  },
                  "zh-CN": {
                    singular: "向您的视频添加一个交互式评分元素。"
                  }
                }
              }),
              children: (0, _v1.jsx)(_v12.MenuItem, {
                icon: (0, _v1.jsx)(_v15.Feedback, {}),
                isDisabled: _v80,
                onClick: _v81,
                children: (0, _v1.jsxs)(_v7.Flex, {
                  align: "center",
                  justify: "space-between",
                  width: "100%",
                  gap: "sm",
                  children: [(0, _v33.translate)({
                    singular: "Add video rating",
                    dictionary: {
                      es: {
                        singular: "Agregar calificación de video"
                      },
                      "de-DE": {
                        singular: "Videobewertung hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter un système d'évaluation à la vidéo"
                      },
                      "ja-JP": {
                        singular: "動画の評価を追加"
                      },
                      "ko-KR": {
                        singular: "동영상 평점 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar avaliação do vídeo"
                      },
                      "zh-CN": {
                        singular: "添加视频评分"
                      }
                    }
                  }), !_v59 && (0, _v1.jsx)(_v6.Badge, {
                    size: "sm",
                    variant: "upgrade",
                    children: (0, _v33.translate)({
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
                  })]
                })
              })
            })
          })]
        })]
      })]
    });
  }], 0);
}