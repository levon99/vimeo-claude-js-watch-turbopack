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
    _v24 = _v0.i(0);
  let _v25 = ({
    videoName: _v0,
    createdAt: _v1,
    createdBy: _v2,
    versionType: _v3,
    fileSize: _v4,
    fileName: _v5
  }) => {
    let _v6,
      _v7 = [{
        label: (0, _v6.translate)({
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
        }),
        value: _v0
      }, {
        label: (0, _v6.translate)({
          singular: "Date created",
          dictionary: {
            es: {
              singular: "Fecha de creación"
            },
            "de-DE": {
              singular: "Erstellungsdatum"
            },
            "fr-FR": {
              singular: "Date de création"
            },
            "ja-JP": {
              singular: "作成日"
            },
            "ko-KR": {
              singular: "생성 날짜"
            },
            "pt-BR": {
              singular: "Data de criação"
            },
            "zh-CN": {
              singular: "日期已创建"
            }
          }
        }),
        value: _v1
      }, {
        label: (0, _v6.translate)({
          singular: "Source",
          dictionary: {
            es: {
              singular: "Fuente"
            },
            "de-DE": {
              singular: "Quelle"
            },
            "ja-JP": {
              singular: "ソース"
            },
            "ko-KR": {
              singular: "소스"
            },
            "pt-BR": {
              singular: "Fonte"
            },
            "zh-CN": {
              singular: "来源"
            }
          }
        }),
        value: (_v6 = _v5, "vimeo-create" === _v3 ? _v6 = (0, _v6.translate)({
          singular: "Created with Vimeo",
          dictionary: {
            es: {
              singular: "Creado con Vimeo"
            },
            "de-DE": {
              singular: "Erstellt mit Vimeo"
            },
            "fr-FR": {
              singular: "Créé avec Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoで作成"
            },
            "ko-KR": {
              singular: "Vimeo로 제작"
            },
            "pt-BR": {
              singular: "Criado com o Vimeo"
            },
            "zh-CN": {
              singular: "使用 Vimeo 创建"
            }
          }
        }) : "screen-recording" === _v3 && (_v6 = (0, _v6.translate)({
          singular: "Recorded with Vimeo",
          dictionary: {
            es: {
              singular: "Grabado con Vimeo"
            },
            "de-DE": {
              singular: "Aufgenommen mit Vimeo"
            },
            "fr-FR": {
              singular: "Enregistré avec Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoで録画"
            },
            "ko-KR": {
              singular: "Vimeo로 녹화"
            },
            "pt-BR": {
              singular: "Gravado com o Vimeo"
            },
            "zh-CN": {
              singular: "使用 Vimeo 录制完成"
            }
          }
        })), _v6)
      }, {
        label: (0, _v6.translate)({
          singular: "Created by",
          dictionary: {
            es: {
              singular: "Creado por"
            },
            "de-DE": {
              singular: "Erstellt von"
            },
            "fr-FR": {
              singular: "Créé par"
            },
            "ja-JP": {
              singular: "作成者"
            },
            "ko-KR": {
              singular: "제작:"
            },
            "pt-BR": {
              singular: "Criado por"
            },
            "zh-CN": {
              singular: "创建者"
            }
          }
        }),
        value: _v2
      }, {
        label: (0, _v6.translate)({
          singular: "File size",
          dictionary: {
            es: {
              singular: "Tamaño del archivo"
            },
            "de-DE": {
              singular: "Dateigröße"
            },
            "fr-FR": {
              singular: "Taille du fichier"
            },
            "ja-JP": {
              singular: "ファイルサイズ"
            },
            "ko-KR": {
              singular: "파일 크기"
            },
            "pt-BR": {
              singular: "Tamanho do Arquivo"
            },
            "zh-CN": {
              singular: "文件大小"
            }
          }
        }),
        value: (0, _v23.bytesToSize)(_v4, _v24.FILE_SIZE_DECIMAL_PLACES)
      }];
    return (0, _v1.jsx)(_v3.Flex, {
      direction: "column",
      gap: "lg",
      paddingY: "md",
      paddingX: "lg",
      borderRadius: "20px",
      backgroundColor: "fill-surface",
      children: _v7.map((_v0, _v1) => (0, _v1.jsxs)(_v3.Flex, {
        direction: "column",
        gap: "sm",
        children: [(0, _v1.jsx)(_v22.Text, {
          variant: "heading-sm",
          color: "text-primary",
          children: _v0.label
        }), (0, _v1.jsx)(_v22.Text, {
          variant: "body-md",
          color: "text-primary",
          children: _v0.value
        })]
      }, _v1))
    });
  };
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = () => (0, _v1.jsx)(_v26.Center, {
    w: "100%",
    h: "100%",
    px: 200,
    children: (0, _v1.jsxs)(_v30.VStack, {
      textAlign: "center",
      spacing: "200",
      children: [(0, _v1.jsx)(_v29.Spinner, {
        size: "md",
        mb: 50,
        boxSize: "sm"
      }), (0, _v1.jsx)(_v27.Header, {
        size: {
          base: "lg",
          md: "2xl"
        },
        children: (0, _v6.translate)({
          singular: "This video is processing...",
          dictionary: {
            es: {
              singular: "Este video se está procesando..."
            },
            "de-DE": {
              singular: "Dieses Video wird verarbeitet ..."
            },
            "fr-FR": {
              singular: "Cette vidéo est en cours de traitement..."
            },
            "ja-JP": {
              singular: "この動画は処理中です..."
            },
            "ko-KR": {
              singular: "동영상을 처리하는 중입니다..."
            },
            "pt-BR": {
              singular: "Este vídeo está sendo processado..."
            },
            "zh-CN": {
              singular: "此视频正在处理中..."
            }
          }
        })
      }), (0, _v1.jsx)(_v28.Paragraph, {
        size: {
          base: "md",
          md: "lg"
        },
        px: {
          base: "50",
          md: "200"
        },
        children: (0, _v6.translate)({
          singular: "You'll be able to view it as soon as it's done.",
          dictionary: {
            es: {
              singular: "Podrá verlo en cuanto esté terminado."
            },
            "de-DE": {
              singular: "Sie können es ansehen, sobald es fertig ist."
            },
            "fr-FR": {
              singular: "Vous pourrez la consulter dès qu'il sera terminé."
            },
            "ja-JP": {
              singular: "完了するとすぐに視聴できるようになります。"
            },
            "ko-KR": {
              singular: "완료되는 대로 바로 볼 수 있습니다."
            },
            "pt-BR": {
              singular: "Você poderá visualizá-lo assim que estiver pronto."
            },
            "zh-CN": {
              singular: "一旦完成，您就可以立即查看。"
            }
          }
        })
      })]
    })
  });
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  _v0.s(["ReviewPlayerContainer", 0, function ({
    clipId: _v0,
    clipHash: _v1,
    videoVersionWidth: _v2,
    videoVersionHeight: _v3,
    closeDrawer: _v4,
    isLoading: _v5,
    videoVersionUri: _v6,
    showComments: _v7,
    createdAt: _v8,
    createdBy: _v9,
    videoName: _v10,
    fileName: _v11,
    fileSize: _v12,
    versionType: _v13,
    isDeleted: _v14,
    isReplaceOverQuota: _v15,
    setIsReplaceOverQuota: _v16,
    hasEnterprise: _v17,
    isMobile: _v18,
    clipUserUri: _v19,
    embedPlayerConfigUrl: _v20,
    analyticsProps: _v21,
    showVersionDetails: _v22,
    isPreviousVersion: _v23,
    allowTimecodeComments: _v24,
    playerContainerProps: _v25,
    showResolvedComments: _v26 = !0,
    hasTitleAndDescription: _v27,
    isVideoProcessing: _v28,
    isShowAdvancedPlayBar: _v29,
    clipOwnerId: _v30,
    onPlaybackRateChange: _v31
  }) {
    let _v32 = (0, _v2.useRef)(null),
      _v33 = (0, _v2.useRef)(null),
      _v34 = (0, _v20.useTeamAccentColor)(_v19),
      _v35 = (0, _v33.getClipRequestId)(_v0, _v1),
      {
        reviewId: _v36
      } = (0, _v2.useContext)(_v21.ReviewLinkContext),
      [_v37, _v38] = (0, _v2.useState)(0),
      [_v39, _v40] = (0, _v2.useState)(0),
      _v41 = _v8 && (0, _v5.getFormattedStringFromDateObj)(new Date(_v8), "MMM DD, YYYY") || "",
      [_v42, _v43] = (0, _v2.useState)(!0),
      [_v44, _v45] = (0, _v2.useState)(!1),
      [_v46, _v47] = (0, _v2.useState)(!1),
      _v48 = (0, _v14.useViewer)(),
      _v49 = (0, _v19.useIsReviewTourInCooldown)();
    (0, _v11.useTour)(_v16.ReviewTour, {
      enable: !_v49 && !_v28 && !!_v7 && !_v18 && !!_v36
    });
    let {
        trackReviewVideoPlayed: _v50
      } = (0, _v7.useReviewTracking)(),
      _v51 = _v48?.user?.uploadQuota?.space?.unit === "video_size" ? "storage_limit" : "quota",
      _v52 = ((_v0, _v1) => {
        if (_v0) return "45vh";
        let _v2 = _v24.VERSION_PAGE_HEADER_HEIGHT + 48;
        return _v1 && (_v2 += 64), _v27 ? _v2 += 38 : _v2 += 72, `calc(100vh - ${_v2}px)`;
      })(_v18, _v15);
    (0, _v2.useEffect)(() => {
      if (!_v32.current) return;
      let _v0 = () => {
        _v38(_v32.current?.clientHeight || 0);
      };
      _v0();
      let _v1 = new window.ResizeObserver(_v0);
      return _v1.observe(_v32.current), () => {
        _v1.disconnect();
      };
    }, []);
    let {
        player: _v53
      } = (0, _v8.usePlayer)(_v33, Number(_v0), !0, _v20 ?? "", !1),
      [_v54, _v55] = (0, _v2.useState)(0);
    (0, _v2.useEffect)(() => {
      let _v0 = _v0 => {
          _v55(_v0.seconds);
        },
        _v1 = () => {
          _v50({
            reviewId: _v36 ?? "",
            clipId: _v0,
            clipOwnerId: _v30 ?? null
          });
        };
      return _v53?.ready?.(() => {
        _v47(!0), _v53.on("pause", _v0), _v53.on("seeked", _v0), _v53.on("play", _v1);
      }), () => {
        _v47(!1), _v53?.off && (_v53.off("pause", _v0), _v53.off("seeked", _v0), _v53.off("play", _v1));
      };
    }, [_v53]);
    let _v56 = (0, _v2.useCallback)(_v0 => {
        _v46 && _v53.seekTo(_v0);
      }, [_v53, _v46]),
      _v57 = (0, _v2.useCallback)(() => {
        _v46 && _v53.pause();
      }, [_v53, _v46]),
      _v58 = (0, _v2.useMemo)(() => ({
        headerText: (0, _v6.translate)({
          singular: "Upgrade to unlock more video tools",
          dictionary: {
            es: {
              singular: "Cambie de plan para acceder a más herramientas de video"
            },
            "de-DE": {
              singular: "Upgrade zur Freischaltung weiterer Video-Tools vornehmen"
            },
            "fr-FR": {
              singular: "Mettre à niveau pour débloquer plus d'outils vidéo"
            },
            "ja-JP": {
              singular: "アップグレードして、さらに多くの動画ツールをご利用ください"
            },
            "ko-KR": {
              singular: "업그레이드하여 더 많은 동영상 도구를 이용하세요"
            },
            "pt-BR": {
              singular: "Faça upgrade para acessar mais ferramentas de vídeo"
            }
          }
        }),
        subHeaderText: (0, _v6.translate)({
          singular: "Upgrade for full access to creation tools and more storage for your videos.",
          dictionary: {
            es: {
              singular: "Cambie de plan para tener acceso completo a las herramientas de creación y más espacio de almacenamiento para sus videos."
            },
            "de-DE": {
              singular: "Mit einem Upgrade erhältst du vollen Zugriff auf die Erstellungstools und mehr Speicherplatz für deine Videos."
            },
            "fr-FR": {
              singular: "Passez au niveau supérieur pour obtenir le plein accès aux outils de création et à plus de stockage pour vos vidéos."
            },
            "ja-JP": {
              singular: "アップグレードして動画用の作成ツールとより大きなストレージ容量をフル活用しましょう。"
            },
            "ko-KR": {
              singular: "업그레이드하여 전체 제작 도구와 동영상을 위한 더 많은 저장 공간을 이용하세요."
            },
            "pt-BR": {
              singular: "Faça upgrade para ter acesso completo às ferramentas de criação e mais espaço de armazenamento para seus vídeos."
            }
          }
        })
      }), []),
      _v59 = (0, _v2.useMemo)(() => ({
        params: {
          page: _v32.VIDEO_VERSION_PAGE_NAME,
          feature: _v32.FEATURE_VERSION_HISTORY,
          location: "modal",
          upsell_name: "at_limit_quota"
        },
        paywallTracking: {
          paywallTrigger: "review_player_quota_limit_button",
          paywallLocation: "review_player",
          paywallType: "popup",
          paywallFeature: _v51
        },
        onOpen: () => {
          _v21 && (0, _v32.sendBpUpsellEvent)({
            viewer: _v48,
            analyticsProps: _v21,
            eventName: "vimeo.view_upsell",
            eventVersion: _v32.UPGRADE_VIEW_GROUP_EVENT_VERSION,
            includeViewContext: !0
          });
        },
        onClose: () => {
          _v21 && (0, _v32.sendBpUpsellEvent)({
            viewer: _v48,
            analyticsProps: _v21,
            eventName: "vimeo.close_upsell",
            eventVersion: _v32.UPGRADE_ACTION_GROUP_EVENT_VERSION
          });
        },
        onButtonClick: () => {
          _v21 && (0, _v32.sendBpUpsellEvent)({
            viewer: _v48,
            analyticsProps: _v21,
            eventName: "vimeo.proceed_to_checkout",
            eventVersion: _v32.UPGRADE_ACTION_GROUP_EVENT_VERSION
          });
        }
      }), [_v21, _v51, _v48]),
      _v60 = _v2 && _v3 ? _v2 / _v3 : _v24.DEFAULT_ASPECT_RATIO,
      _v61 = _v25 ?? {
        paddingX: _v18 ? "0px" : "lg",
        paddingBottom: _v18 ? "0px" : "lg",
        paddingTop: _v18 ? "0px" : "lg"
      };
    return (0, _v1.jsxs)(_v3.Flex, {
      width: "100%",
      direction: _v18 ? "column" : "row",
      flexGrow: 1,
      ..._v61,
      children: [(0, _v1.jsxs)(_v3.Flex, {
        direction: "column",
        gap: _v18 ? "md" : "lg",
        width: _v18 ? "100%" : `calc(100% - ${_v7 ? `${_v24.COMMENTS_PANEL_WIDTH + 24}` : "0"}px)`,
        height: _v18 ? "auto" : "100%",
        children: [(0, _v1.jsxs)(_v1.Fragment, {
          children: [_v15 && (0, _v1.jsx)(_v4.Box, {
            display: "flex",
            justifyContent: "center",
            children: (0, _v1.jsx)(_v12.UploadErrorMessage, {
              error: 4,
              isEnterprise: _v17,
              isNewVersionErrorMessage: !0,
              style: {
                marginTop: "0px",
                marginBottom: "0px"
              },
              onClose: () => {
                _v44 && _v45(!1), _v16?.(!1);
              },
              onClickQuotaMessage: () => {
                _v21 && (0, _v32.sendBpUpsellEvent)({
                  viewer: _v48,
                  analyticsProps: _v21,
                  eventName: "vimeo.trigger_upsell",
                  eventVersion: _v32.UPGRADE_ACTION_GROUP_EVENT_VERSION
                }), _v45(!0);
              }
            })
          }), _v28 ? (0, _v1.jsx)(_v4.Box, {
            height: _v52,
            children: (0, _v1.jsx)(_v31, {})
          }) : (0, _v1.jsx)(_v10.TourStep, {
            step: _v16.ReviewTour.player,
            children: (0, _v1.jsx)(_v9.PlayerAdvancedControls, {
              width: "100%",
              player: _v53,
              isShown: !!_v7 && !_v18,
              isShowAdvancedPlayBar: _v29,
              onControlsHeightChange: _v40,
              enableLinks: !0,
              onPlaybackRateChange: _v31,
              children: (0, _v1.jsx)(_v15.ReviewPlayer, {
                videoAspectRatio: _v60,
                playerMaxHeight: `calc(${_v52} - ${_v39}px)`,
                containerRef: _v32,
                isMobile: _v18,
                isDeleted: _v14,
                playerElementRef: _v33,
                player: _v53,
                showComments: !!_v7,
                clipRequestId: _v35,
                teamAccentColor: _v34,
                allowTimecodeComments: _v24,
                isPlayerReady: _v46,
                isShowAdvancedPlayBar: _v29
              })
            })
          })]
        }), _v18 && !_v7 && !_v5 && _v22 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v17.VersionAlert, {
            uri: _v36 ? (0, _v34.buildReviewClipUri)(_v0, _v36) : (0, _v34.formClipManageUri)(_v0, _v1),
            isOpen: _v42,
            closeAlert: () => _v43(!1)
          }), (0, _v1.jsx)(_v25, {
            videoName: _v10 || "",
            createdBy: _v9 || "",
            createdAt: _v41,
            versionType: _v13 || "regular",
            fileSize: _v12 || 0,
            fileName: _v11 || ""
          })]
        })]
      }), _v7 && (0, _v1.jsx)(_v10.TourStep, {
        step: _v16.ReviewTour.comments,
        children: (0, _v1.jsx)(_v18.CommentsPanel, {
          clipId: _v0,
          clipHash: _v1,
          onMomentPlay: _v56,
          videoVersionUri: _v6,
          closeDrawer: _v4,
          isMobile: _v18,
          showComments: _v7,
          playerHeight: _v37,
          analyticsProps: _v21,
          isPreviousVersion: _v23,
          showResolvedComments: _v26,
          commentTimeCode: _v54,
          pausePlayer: _v57
        })
      }), _v44 && _v48 && (0, _v1.jsx)(_v13.default, {
        apiUrl: _v48.apiUrl,
        userConfig: {
          jwt: _v48.jwt,
          userId: _v48.user?.id
        },
        templateType: "default",
        modalConfig: _v58,
        onClose: () => _v45(!1),
        tracking: _v59
      })]
    });
  }], 0);
}