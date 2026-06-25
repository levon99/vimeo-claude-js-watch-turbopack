{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = {
      DOWNLOAD_LINKS_RENDERED_RETRY_UI: "DOWNLOAD_LINKS_RENDERED_RETRY_UI",
      USER_RETRIES_GET_LINKS: "USER_RETRIES_GET_LINKS",
      OPEN_AUDIOTRACKS_POPOVER: "OPEN_AUDIOTRACKS_POPOVER",
      CLOSE_AUDIOTRACKS_POPOVER: "CLOSE_AUDIOTRACKS_POPOVER",
      AUDIOTRACKS_SELECTOR_RENDERED_UI: "AUDIOTRACKS_SELECTOR_RENDERED_UI",
      AUDIOTRACKS_SELECTOR_RENDERED_RETRY_UI: "AUDIOTRACKS_SELECTOR_RENDERED_RETRY_UI",
      USER_SELECTED_AUDIOTRACK: "USER_SELECTED_AUDIOTRACK",
      USER_RETRIES_GET_AUDIOTRACKS: "USER_RETRIES_GET_AUDIOTRACKS"
    },
    _v10 = {
      VIDEO_ID_MISSING: "VIDEO_ID_MISSING",
      FETCH_DL_LINKS_FAILED: "FETCH_DL_LINKS_FAILED",
      FETCH_CLIP_FAILED: "FETCH_CLIP_FAILED",
      FETCH_AUDIOTRACKS_FAILED: "FETCH_AUDIOTRACKS_FAILED",
      FETCH_CLIP_METADATA_FAILED: "FETCH_CLIP_METADATA_FAILED",
      VIDEO_VERSION_ID_MISSING: "VIDEO_VERSION_ID_MISSING",
      UI_NO_LINKS_TO_SHOW: "UI_NO_LINKS_TO_SHOW",
      UI_USED_FALLBACK_LINKS: "UI_USED_FALLBACK_LINKS",
      FAILED_VIDEO_TAGGING: "FAILED_VIDEO_TAGGING",
      AUDIOTRACK_MISSING_UPLOAD: "AUDIOTRACK_MISSING_UPLOAD"
    },
    _v11 = "downloads-modal",
    _v12 = {
      APP_TYPE: _v11,
      ALLOW_AUDIOTRACK_SELECTOR: null,
      IS_AB_TEST: null,
      USER_ID: null,
      USER_LOCALE: null,
      LOG_ERRORS_TRACKED: 0,
      LOG_ERRORS_LIMIT: 50,
      SESSION_ID: null,
      STARTED_AT: Date.now(),
      PAGE_NAME: null,
      MODAL_LOCATION: null,
      VIDEO_ID: null
    };
  function _v13() {
    return {
      ..._v14(),
      pageLifeDuration: Date.now() - _v12.STARTED_AT,
      pageErrorsTracked: _v12.LOG_ERRORS_TRACKED,
      pageIsFocused: window.document.hasFocus(),
      screenWidth: window.screen.width,
      screenHeight: window.screen.height
    };
  }
  function _v14() {
    return {
      appType: _v12.APP_TYPE,
      pageSessionId: _v12.SESSION_ID,
      pageSessionLocale: _v12.USER_LOCALE,
      allowAudioTracksSelector: _v12.ALLOW_AUDIOTRACK_SELECTOR,
      isUserInAudioTrackSelectorTest: _v12.IS_AB_TEST,
      videoId: _v12.VIDEO_ID,
      modalLocation: _v12.MODAL_LOCATION
    };
  }
  _v0.s(["APP_TYPE", 0, _v11, "TRACKED_ACTIONS", 0, _v9, "TRACKED_ERRORS", 0, _v10, "trackingConfig", 0, _v12], 0), _v0.s(["getApplicationGlobals", 0, _v14, "getApplicationInfo", 0, _v13, "updateDatadogGlobals", 0, function (_v0) {
    window.DD_RUM && window.DD_RUM.onReady(() => {
      for (let _v0 in _v0) window.DD_RUM.setViewContextProperty(_v0, String(_v0[_v0]));
    });
  }, "updateTrackingConfig", 0, function (_v0) {
    for (let _v0 in _v0) _v12[_v0] = _v0[_v0];
  }], 0);
  let _v15 = location.host.endsWith("vimeo.com");
  function _v16(_v0, _v1) {
    if (!(_v12.LOG_ERRORS_TRACKED <= _v12.LOG_ERRORS_LIMIT)) return console.debug("Skipping error tracking, session facing limit");
    _v12.LOG_ERRORS_TRACKED += 1;
    let _v2 = {
      ..._v1,
      ..._v13()
    };
    _v15 && window.DD_RUM && window.DD_RUM.onReady(() => {
      console.debug("Sending Datadog report", {
        error: _v0,
        errorInfo: _v2,
        globals: window.DD_RUM.getUser() ?? null
      }), window.DD_RUM.addError(_v0, _v2);
    });
  }
  function _v17(_v0, _v1 = {}) {
    try {
      let _v0 = Object.assign({}, _v1, _v13());
      _v15 && window.DD_RUM ? window.DD_RUM.onReady(() => {
        let _v0 = window.DD_RUM.getUser() ?? null;
        console.debug("Sending Datadog action", {
          action: _v0,
          actionInfo: _v0,
          globals: _v0
        }), window.DD_RUM.addAction(_v0, _v0);
      }) : console.debug("Got local Datadog action", {
        action: _v0,
        actionInfo: _v0,
        globals: null
      });
    } catch {}
  }
  function _v18(_v0) {
    return {
      videoId: _v0
    };
  }
  _v0.s(["trackAction", 0, _v17, "trackError", 0, _v16], 0), _v0.s(["mapVideoIdTypeForGCTL", 0, _v18], 0);
  let _v19 = "in_progress",
    _v20 = ["language", "transcode", "type", "upload", "uri", "quota", "provenance", "active", "download"];
  var _v21 = _v0.i(0);
  let _v22 = ["serviceMode", "status", "targetLang", "audiotrackUri", "translationMode"];
  var _v23 = _v0.i(0);
  function _v24(_v0) {
    let _v1,
      _v2 = !1;
    return (..._v0) => (_v2 || (_v2 = !0, _v1 = _v0(..._v0)), _v1);
  }
  let _v25 = {
    downloadLinks: {
      onLinksRetryRendered: _v24(() => _v17(_v9.DOWNLOAD_LINKS_RENDERED_RETRY_UI)),
      userRetriesGetLinks: _v0 => _v17(_v9.USER_RETRIES_GET_LINKS, _v0)
    },
    audioTrackSelector: {
      onSelectorUIRendered: _v24(() => _v17(_v9.AUDIOTRACKS_SELECTOR_RENDERED_UI)),
      onSelectorRetryRendered: _v24(() => _v17(_v9.AUDIOTRACKS_SELECTOR_RENDERED_RETRY_UI)),
      userSelectedAudioTrack: _v0 => _v17(_v9.USER_SELECTED_AUDIOTRACK, _v0),
      userRetriesGetAudiotracks: () => _v17(_v9.USER_RETRIES_GET_AUDIOTRACKS),
      userOpenAudiotracksPopover: _v24(() => _v17(_v9.OPEN_AUDIOTRACKS_POPOVER)),
      userCloseAudiotracksPopover: _v24(() => _v17(_v9.CLOSE_AUDIOTRACKS_POPOVER))
    }
  };
  _v0.s(["trackingHandle", 0, _v25], 0);
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = ({
    onRetry: _v0,
    isLoading: _v1
  }) => (0, _v1.jsxs)(_v26.Flex, {
    justifyContent: "space-between",
    alignItems: "center",
    mt: "sm",
    gap: "md",
    flexDirection: "column",
    children: [(0, _v1.jsx)(_v27.Alert, {
      status: "error",
      children: (0, _v1.jsx)(_v28.AlertDescription, {
        children: (0, _v6.translate)({
          singular: "Unable to load content",
          dictionary: {
            es: {
              singular: "No se puede cargar el contenido"
            },
            "de-DE": {
              singular: "Inhalte können nicht geladen werden"
            },
            "fr-FR": {
              singular: "Impossible de charger le contenu"
            },
            "ja-JP": {
              singular: "コンテンツを読み込めません"
            },
            "ko-KR": {
              singular: "콘텐츠 불러오기 실패"
            },
            "pt-BR": {
              singular: "Não foi possível carregar o conteúdo."
            },
            "zh-CN": {
              singular: "无法加载内容"
            }
          }
        })
      })
    }), (0, _v1.jsx)(_v29.Button, {
      isLoading: _v1,
      onClick: () => {
        _v0();
      },
      size: "sm",
      variant: "primary",
      width: "100%",
      leftIcon: (0, _v1.jsx)(_v30.SyncRefreshFilled, {}),
      children: (0, _v6.translate)({
        singular: "Try again",
        dictionary: {
          es: {
            singular: "Intentar de nuevo"
          },
          "de-DE": {
            singular: "Nochmal versuchen"
          },
          "fr-FR": {
            singular: "Veuillez réessayer"
          },
          "ja-JP": {
            singular: "再試行してください"
          },
          "ko-KR": {
            singular: "다시 시도하세요"
          },
          "pt-BR": {
            singular: "Tente de novo"
          },
          "zh-CN": {
            singular: "再试一次"
          }
        }
      })
    })]
  });
  _v0.s(["TryAgainAlert", 0, _v31], 0);
  let _v32 = {
      main: (0, _v6.translate)({
        singular: "dubbed audio",
        dictionary: {
          es: {
            singular: "audio doblado"
          },
          "de-DE": {
            singular: "synchronisiertes Audio"
          },
          "fr-FR": {
            singular: "Doublage audio"
          },
          "ja-JP": {
            singular: "吹き替え音声"
          },
          "ko-KR": {
            singular: "더빙된 오디오"
          },
          "pt-BR": {
            singular: "áudio dublado"
          },
          "zh-CN": {
            singular: "配音音频"
          }
        }
      }),
      descriptive: (0, _v6.translate)({
        singular: "audio description",
        dictionary: {
          es: {
            singular: "descripción de audio"
          },
          "de-DE": {
            singular: "Audiobeschreibung"
          },
          "fr-FR": {
            singular: "Audiodescription"
          },
          "ja-JP": {
            singular: "音声説明"
          },
          "ko-KR": {
            singular: "오디오 설명"
          },
          "pt-BR": {
            singular: "audiodescrição"
          },
          "zh-CN": {
            singular: "音频描述"
          }
        }
      }),
      commentary: (0, _v6.translate)({
        singular: "commentary",
        dictionary: {
          es: {
            singular: "comentarios"
          },
          "de-DE": {
            singular: "Kommentare"
          },
          "fr-FR": {
            singular: "commentaire"
          },
          "ja-JP": {
            singular: "コメンタリー/解説"
          },
          "ko-KR": {
            singular: "해설"
          },
          "pt-BR": {
            singular: "comentários"
          },
          "zh-CN": {
            singular: "现场解说"
          }
        }
      }),
      ai_generated: (0, _v6.translate)({
        singular: "AI generated",
        dictionary: {
          es: {
            singular: "Generado con IA"
          },
          "de-DE": {
            singular: "KI-generiert"
          },
          "fr-FR": {
            singular: "Généré par l'IA"
          },
          "ja-JP": {
            singular: "AI生成"
          },
          "ko-KR": {
            singular: "인공지능(AI) 생성"
          },
          "pt-BR": {
            singular: "Gerado por IA"
          },
          "zh-CN": {
            singular: "（AI 生成）"
          }
        }
      })
    },
    _v33 = "VALUE_ORIGINAL_AUDIO_TRACK",
    _v34 = {
      cursor: "not-allowed",
      opacity: .5,
      pointerEvents: "none"
    };
  _v0.s(["AudioTrackSelector", 0, ({
    videoID: _v0,
    hasEditRights: _v1,
    setSelectedAudioTrack: _v2,
    selectedAudioTrack: _v3,
    hasVideoTranslations: _v4,
    versionId: _v5,
    videoLanguage: _v6
  }) => {
    let {
        languageCodeToNameMap: _v7
      } = function () {
        let {
          data: _v0
        } = (0, _v23.useGetLanguages)({
          query: {
            filter: "audiotracks"
          },
          select: ["code", "name"]
        });
        return {
          languageCodeToNameMap: (0, _v2.useMemo)(() => _v0?.data?.reduce((_v0, _v1) => (_v0[_v1.code] = _v1.name, _v0), {}) || {}, [_v0])
        };
      }(),
      {
        keepPollingTranslations: _v8,
        translations: _v9
      } = function ({
        videoId: _v0,
        hasVideoTranslations: _v1
      }) {
        let {
            data: _v2,
            mutate: _v3,
            isLoading: _v4,
            isValidating: _v5
          } = (0, _v21.useGetVideoTranslations)(() => _v0 && _v1 ? {
            where: _v18(_v0),
            select: _v22
          } : null),
          _v6 = !!(_v2?.data && _v2?.data.some(_v0 => "full_apply" === _v0.serviceMode && "PRCS" === _v0.status));
        return (0, _v8.usePoll)(_v3, _v6, {
          interval: 0,
          backoff: "linear",
          shouldResetBackoff: _v0 => _v0 > 5
        }), {
          translations: _v2?.data.filter(_v0 => "dubbing" === _v0.translationMode),
          keepPollingTranslations: _v6,
          isFetching: _v4 || _v5
        };
      }({
        videoId: _v0,
        hasVideoTranslations: _v4
      }),
      {
        accessibleAudioTracks: _v10,
        isLoading: _v11,
        getAudioTracks: _v12,
        audioTracksError: _v13
      } = function ({
        videoId: _v0,
        videoVersionId: _v1,
        keepPollingTranslations: _v2,
        translations: _v3,
        exclusiveAccess: _v4
      }) {
        let {
            error: _v5,
            mutate: _v6,
            data: _v7,
            isLoading: _v8,
            isValidating: _v9
          } = (0, _v7.useGetVideoVersionAudiotracks)(() => _v1 && _v0 ? {
            where: {
              ..._v18(_v0),
              versionId: _v1
            },
            select: _v20,
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.10"
            }
          } : null, {
            refreshWhenHidden: !1,
            revalidateOnFocus: !1,
            shouldRetryOnError: !1
          }),
          _v10 = _v7?.data,
          _v11 = _v10?.length !== void 0,
          _v12 = !!_v10?.some(_v0 => _v0.transcode?.status === _v19);
        (0, _v8.usePoll)(_v6, _v12 || _v2, {
          interval: 0,
          backoff: "exponential",
          shouldResetBackoff: _v0 => _v0 > 5
        });
        let _v13 = (0, _v2.useMemo)(() => (_v10 ?? []).filter(_v0 => _v4 || _v0.active).map(_v0 => {
          let {
              code: _v1
            } = _v0.language,
            _v2 = _v3?.find(_v0 => _v0.targetLang === _v1 && "PRCS" === _v0.status),
            _v3 = _v0.transcode?.status === _v19,
            _v4 = _v0.upload?.status === _v19;
          return void 0 === _v0.upload && _v16(Error('Missing "upload" property in audio track.'), {
            uri: _v0.uri,
            method: "useClipAudioTracks",
            trackingTag: _v10.AUDIOTRACK_MISSING_UPLOAD
          }), {
            ..._v0,
            disableReason: _v4 ? "uploading" : _v3 ? "transcoding" : _v2 ? "beingTranslated" : void 0
          };
        }), [_v10, _v4, _v3]);
        return {
          alternateAudioTracks: _v10,
          accessibleAudioTracks: _v13,
          hasValidResponse: _v11,
          audioTracksError: _v5,
          getAudioTracks: _v6,
          isLoading: _v8,
          isValidating: _v9
        };
      }({
        videoId: _v0,
        videoVersionId: _v5,
        keepPollingTranslations: _v8,
        translations: _v9,
        exclusiveAccess: _v1
      }),
      _v14 = (0, _v2.useCallback)(() => {
        _v25.audioTrackSelector.userRetriesGetAudiotracks(), _v12();
      }, [_v12]);
    (0, _v2.useEffect)(() => {
      _v13 && _v16(_v13, {
        videoID: _v0,
        hint: "Failed to fetch clip's alternate audio tracks.",
        method: "useGetVideoVersionAudiotracks",
        trackingTag: _v10.FETCH_AUDIOTRACKS_FAILED
      });
    }, [_v13, _v0]);
    let _v15 = (0, _v2.useMemo)(() => _v10.map(_v0 => {
        let _v1 = _v32[_v0.type] ?? _v0.type,
          _v2 = "ai_generated" === _v0.provenance,
          _v3 = _v2 ? `(${_v32.ai_generated})` : "";
        return {
          label: [`${_v0.language.name}`, _v1, _v3].join(" "),
          value: _v0.uri,
          disableReason: _v0.disableReason,
          isAIGenerated: _v2,
          isOriginalAudio: !1
        };
      }).sort((_v0, _v1) => _v0.label.localeCompare(_v1.label)), [_v10]),
      _v16 = _v6 && _v7 ? _v7[_v6] : _v6,
      _v17 = (0, _v2.useMemo)(() => [{
        label: _v16 ? `${_v16} (${(0, _v6.translate)({
          singular: "original",
          dictionary: {
            es: {
              singular: "Original"
            },
            "de-DE": {
              singular: "Original"
            },
            "fr-FR": {
              singular: "Original"
            },
            "ja-JP": {
              singular: "オリジナルサイズ"
            },
            "ko-KR": {
              singular: "오리지널"
            },
            "pt-BR": {
              singular: "Original"
            },
            "zh-CN": {
              singular: "原创"
            }
          }
        })})` : (0, _v6.translate)({
          singular: "Original audio track",
          dictionary: {
            es: {
              singular: "Pista de audio original"
            },
            "de-DE": {
              singular: "Originale Audiospur"
            },
            "fr-FR": {
              singular: "Piste audio originale"
            },
            "ja-JP": {
              singular: "オリジナルオーディオトラック"
            },
            "ko-KR": {
              singular: "원본 오디오 트랙"
            },
            "pt-BR": {
              singular: "Faixa de áudio original"
            },
            "zh-CN": {
              singular: "原始音频轨道"
            }
          }
        }),
        value: _v33,
        isAIGenerated: !1,
        isOriginalAudio: !0
      }].concat(_v15), [_v15, _v16]),
      _v18 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v0.value[0],
          _v2 = _v17.find(_v0 => _v0.value === _v1);
        _v2({
          value: _v1,
          label: _v2?.label ?? _v1,
          isAIGenerated: !!_v2?.isAIGenerated,
          isOriginalAudio: !!_v2?.isOriginalAudio
        });
      }, [_v17, _v2]),
      _v19 = (0, _v2.useCallback)(({
        open: _v0
      }) => {
        _v0 ? _v25.audioTrackSelector.userOpenAudiotracksPopover() : _v25.audioTrackSelector.userCloseAudiotracksPopover();
      }, []);
    return 0 !== _v15.length || _v13 ? (_v13 ? _v25.audioTrackSelector.onSelectorRetryRendered() : _v25.audioTrackSelector.onSelectorUIRendered(), (0, _v1.jsxs)(_v3.Box, {
      children: [(0, _v1.jsx)(_v5.Text, {
        variant: "heading-xs",
        mb: "md",
        children: (0, _v6.translate)({
          singular: "Audio language",
          dictionary: {
            es: {
              singular: "Idioma del audio"
            },
            "de-DE": {
              singular: "Audiosprache"
            },
            "fr-FR": {
              singular: "Langue audio"
            },
            "ja-JP": {
              singular: "オーディオ言語"
            },
            "ko-KR": {
              singular: "오디오 언어"
            },
            "pt-BR": {
              singular: "Idioma do áudio"
            },
            "zh-CN": {
              singular: "音频语言"
            }
          }
        })
      }), (0, _v1.jsx)(_v4.Select, {
        value: _v3 ? [_v3] : void 0,
        items: _v17,
        disabled: _v11,
        placeholder: (0, _v6.translate)({
          singular: "Original audio track",
          dictionary: {
            es: {
              singular: "Pista de audio original"
            },
            "de-DE": {
              singular: "Originale Audiospur"
            },
            "fr-FR": {
              singular: "Piste audio originale"
            },
            "ja-JP": {
              singular: "オリジナルオーディオトラック"
            },
            "ko-KR": {
              singular: "원본 오디오 트랙"
            },
            "pt-BR": {
              singular: "Faixa de áudio original"
            },
            "zh-CN": {
              singular: "原始音频轨道"
            }
          }
        }),
        size: "md",
        onValueChange: _v18,
        highlightedValue: _v3,
        onOpenChange: _v19,
        children: _v0 => (0, _v1.jsx)(_v4.SelectItem, {
          mt: "sm",
          display: "flex",
          gap: "sm",
          alignItems: "center",
          sx: _v0.disableReason ? _v34 : void 0,
          children: (0, _v1.jsx)(_v4.SelectItemText, {
            children: _v0.label
          })
        })
      }), _v13 && (0, _v1.jsx)(_v31, {
        onRetry: _v14
      })]
    })) : null;
  }, "VALUE_ORIGINAL_AUDIO_TRACK", 0, _v33], 0);
  var _v35 = _v0.i(0);
  _v0.s(["DrmAlert", 0, () => (0, _v1.jsx)(_v27.Alert, {
    status: "warning",
    mb: "md",
    children: (0, _v1.jsx)(_v28.AlertDescription, {
      children: (0, _v6.translate)({
        singular: "Downloaded videos are not protected by digital rights management (DRM). {LINK}Learn more{/LINK}",
        replacements: {
          LINK: _v0 => (0, _v1.jsx)(_v35.Link, {
            title: (0, _v6.translate)({
              singular: "Learn more",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr dazu"
                },
                "fr-FR": {
                  singular: "En savoir plus "
                },
                "ja-JP": {
                  singular: "詳細を見る"
                },
                "ko-KR": {
                  singular: "자세히 보기"
                },
                "pt-BR": {
                  singular: "Saiba mais"
                },
                "zh-CN": {
                  singular: "了解更多"
                }
              }
            }),
            target: "_blank",
            href: "https://vimeo.com/help/zendesk_sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/31622243101969",
            children: _v0
          }, "learn-more-link")
        },
        dictionary: {
          es: {
            singular: "Los videos descargados no están protegidos por la gestión de derechos digitales (DRM). {LINK}Más información{/LINK}"
          },
          "de-DE": {
            singular: "Heruntergeladene Videos sind nicht durch Digital Rights Management (DRM) geschützt. {LINK}Mehr erfahren{/LINK}"
          },
          "fr-FR": {
            singular: "Les vidéos téléchargées ne sont pas protégées par la gestion des droits numériques (DRM). {LINK}En savoir plus{/LINK}"
          },
          "ja-JP": {
            singular: "ダウンロードした動画はデジタル著作権管理（DRM）によって保護されていません。{LINK}詳細はこちら{/LINK}"
          },
          "ko-KR": {
            singular: "다운로드한 동영상은 디지털 저작권 관리(DRM)로 보호되지 않습니다. {LINK}자세히 보기{/LINK}"
          },
          "pt-BR": {
            singular: "Os vídeos baixados não são protegidos pelo gerenciamento de direitos digitais (DRM). {LINK}Saiba mais{/LINK}"
          },
          "zh-CN": {
            singular: "下载的视频不受数字版权管理 (DRM) 保护。{LINK}了解更多{/LINK}"
          }
        }
      })
    })
  })], 0);
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = {
    LINK: _v0 => (0, _v1.jsx)(_v35.Link, {
      href: "/settings/videos/upload_defaults",
      target: "_blank",
      style: {
        textDecoration: "underline"
      },
      children: _v0
    }, "source-file-settings-link")
  };
  _v0.s(["SourceFileBanner", 0, _v0 => {
    let _v1 = (0, _v37.useColorModeValue)("blue.100", "rgba(26, 54, 93, 0.48)");
    return (0, _v1.jsx)(_v3.Box, {
      backgroundColor: _v1,
      borderRadius: "md",
      px: "md",
      py: 3,
      children: (0, _v1.jsxs)(_v36.Paragraph, {
        size: "md",
        color: "text-primary",
        children: [(0, _v1.jsx)("strong", {
          children: (0, _v6.translate)({
            singular: "Original quality",
            dictionary: {
              es: {
                singular: "Calidad original"
              },
              "de-DE": {
                singular: "Originalqualität"
              },
              "fr-FR": {
                singular: "Qualité d'origine"
              },
              "ja-JP": {
                singular: "オリジナル画質"
              },
              "ko-KR": {
                singular: "원본 화질"
              },
              "pt-BR": {
                singular: "Qualidade original"
              },
              "zh-CN": {
                singular: "原始画质"
              }
            }
          })
        }), " · ", "countdown" === _v0.variant ? (0, _v6.translate)({
          singular: "The original file you uploaded will be deleted in {DAYS} day. {LINK}Keep source files available{/LINK}",
          plural: "The original file you uploaded will be deleted in {DAYS} days. {LINK}Keep source files available{/LINK}",
          count: _v0.daysRemaining,
          replacements: {
            DAYS: _v0.daysRemaining,
            ..._v38
          },
          dictionary: {
            es: {
              singular: "El archivo original que subiste será eliminado en {DAYS} día. {LINK}Mantener los archivos fuente disponibles{/LINK}",
              plural: "El archivo original que subiste será eliminado en {DAYS} días. {LINK}Mantener los archivos fuente disponibles{/LINK}"
            },
            "de-DE": {
              singular: "Die Originaldatei, die Sie hochgeladen haben, wird in {DAYS} Tag gelöscht. {LINK}Quelldateien verfügbar halten{/LINK}",
              plural: "Die Originaldatei, die Sie hochgeladen haben, wird in {DAYS} Tagen gelöscht. {LINK}Quelldateien verfügbar halten{/LINK}"
            },
            "fr-FR": {
              singular: "Le fichier original que vous avez téléversé sera supprimé dans {DAYS} jour. {LINK}Conserver les fichiers source disponibles{/LINK}",
              plural: "Le fichier original que vous avez téléversé sera supprimé dans {DAYS} jours. {LINK}Conserver les fichiers source disponibles{/LINK}"
            },
            "ja-JP": {
              singular: "アップロードした元のファイルは{DAYS}日後に削除されます。 {LINK}元ファイルを保持する{/LINK}",
              plural: "アップロードした元のファイルは{DAYS}日後に削除されます。 {LINK}元ファイルを保持する{/LINK}"
            },
            "ko-KR": {
              singular: "업로드하신 원본 파일은 {DAYS}일 후 삭제됩니다. {LINK}원본 파일을 유지해 두세요{/LINK}",
              plural: "업로드하신 원본 파일은 {DAYS}일 후 삭제됩니다. {LINK}원본 파일을 유지해 두세요{/LINK}"
            },
            "pt-BR": {
              singular: "O arquivo original que você enviou será excluído em {DAYS} dia. {LINK}Manter arquivos de origem disponíveis{/LINK}",
              plural: "O arquivo original que você enviou será excluído em {DAYS} dias. {LINK}Manter arquivos de origem disponíveis{/LINK}"
            },
            "zh-CN": {
              singular: "您上传的原始文件将在 {DAYS} 天后被删除. {LINK}保持源文件可用{/LINK}",
              plural: "您上传的原始文件将在 {DAYS} 天后被删除. {LINK}保持源文件可用{/LINK}"
            }
          }
        }) : (0, _v6.translate)({
          singular: "Unavailable. The original file you uploaded was deleted 7 days after upload. {LINK}Enable for future uploads.{/LINK}",
          replacements: _v38,
          dictionary: {
            es: {
              singular: "No disponible. El archivo original que subiste fue eliminado 7 días después de la carga. {LINK}Habilitar para futuras subidas.{/LINK}"
            },
            "de-DE": {
              singular: "Nicht verfügbar. Die Originaldatei, die Sie hochgeladen haben, wurde 7 Tage nach dem Hochladen gelöscht. {LINK}Für zukünftige Uploads aktivieren{/LINK}"
            },
            "fr-FR": {
              singular: "Indisponible. Le fichier original que vous avez téléversé a été supprimé 7 jours après son téléversement. {LINK}Activer pour les futurs téléversements.{/LINK}"
            },
            "ja-JP": {
              singular: "利用できません。アップロードした元のファイルはアップロードから7日後に削除されました。 {LINK}今後のアップロードで有効にする{/LINK}"
            },
            "ko-KR": {
              singular: "이용할 수 없습니다. 업로드하신 원본 파일은 업로드 후 7일 만에 삭제되었습니다. {LINK}향후 업로드를 위해 활성화하세요{/LINK}"
            },
            "pt-BR": {
              singular: "Indisponível. O arquivo original que você enviou foi excluído 7 dias após o envio. {LINK}Habilitar para uploads futuros.{/LINK}"
            },
            "zh-CN": {
              singular: "不可用. 您上传的原始文件在上传后 7 天被删除. {LINK}为今后上传启用{/LINK}"
            }
          }
        })]
      })
    });
  }], 0);
}