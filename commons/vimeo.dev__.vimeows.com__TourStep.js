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
    _v19 = _v0.i(474),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  function _v30({
    step: _v0,
    children: _v1
  }) {
    let {
        registerTarget: _v2,
        unregisterTarget: _v3
      } = (0, _v29.useTourContext)(),
      _v4 = (0, _v4.useCallback)(_v0 => {
        if (null === _v0) return void _v3(_v0._id);
        if (!(_v0 instanceof HTMLElement)) {
          if ("vimeo.dev" === window.location.hostname || window.location.hostname.endsWith(".vimeows.com")) throw Error(`<TourStep step="${_v0._key}"> received a ref that is not a DOM element. Its child must forward its ref to a host element so the tour can measure and highlight it.`);
          return;
        }
        _v2(_v0._id, _v0);
      }, [_v0._id, _v0._key, _v2, _v3]);
    return (0, _v4.cloneElement)(_v1, {
      ref: _v4
    });
  }
  _v0.s(["TourStep", 0, _v30], 0);
  var _v31 = _v0.i(0),
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
    _v59 = _v0.i(0);
  let _v60 = ["createdTime", "metadata.interactions.edit.uri", "metadata.connections.versions.hasInteractive", "link", "user.uri"];
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = new Date("2026-09-18T00:00:00Z"),
    _v64 = _v0 => `/manage/videos/${_v0}`,
    _v65 = ({
      children: _v0,
      dataTestId: _v1,
      onClick: _v2,
      isDisabled: _v3,
      icon: _v4
    }) => (0, _v1.jsx)(_v44.MenuItem, {
      "data-testid": _v1,
      onClick: _v2,
      isDisabled: _v3,
      icon: _v4,
      children: _v0
    }),
    _v66 = (0, _v6.rem)(20),
    _v67 = ({
      disabled: _v0 = !1,
      videoId: _v1,
      reviewId: _v2,
      onReplaceCompleted: _v3,
      isReplacing: _v4
    }) => {
      let _v5,
        {
          showDot: _v6,
          dismissDot: _v7
        } = function () {
          let _v0 = (0, _v39.useViewer)(),
            {
              data: _v1,
              mutate: _v2
            } = (0, _v62.useGetMePreferences)(() => _v0?.user ? {
              select: ["ririd"]
            } : null),
            [_v3] = (0, _v62.usePatchMePreferences)(),
            _v4 = _v0?.user?.createdTime,
            _v5 = !_v4 || new Date(_v4) < _v63,
            _v6 = _v1?.ririd;
          return {
            showDot: _v5 && void 0 !== _v1 && !_v6,
            dismissDot: (0, _v4.useCallback)(() => {
              _v6 || (_v2({
                ririd: !0
              }, {
                revalidate: !1
              }), _v3({
                select: ["ririd"],
                variables: {
                  ririd: 1
                }
              }).then(() => _v2()));
            }, [_v6, _v3, _v2])
          };
        }(),
        [_v8, _v9] = (0, _v4.useState)(!1),
        [_v10, _v11] = (0, _v4.useState)(!1),
        _v12 = (0, _v4.useRef)(!1),
        {
          video: _v13
        } = function (_v0, _v1) {
          let {
            data: _v2,
            mutate: _v3
          } = (0, _v22.useGetVideo)({
            where: {
              videoId: _v0
            },
            select: _v60,
            query: {
              reviewId: _v1,
              password: (0, _v59.getReviewPasswordHashFromCookie)(_v1)
            },
            headers: {
              Accept: _v58.API_ACCEPT_HEADER
            }
          });
          return {
            video: _v2,
            revalidateVideo: _v3
          };
        }(_v1, _v2),
        {
          trackReviewFileActionRedirect: _v14
        } = (0, _v52.useReviewTracking)(),
        {
          replaceEnabled: _v15,
          isLoading: _v16,
          canEditVideo: _v17
        } = (0, _v61.useReplace)(_v1),
        {
          uploads: _v18
        } = (0, _v54.useUploader)(),
        _v19 = _v18.some(_v0 => "replace_clip" === _v0.uploadType && _v0.clipId === String(_v1) && _v53.ACTIVE_UPLOAD_STATES.has(_v0.state));
      (0, _v55.useUploadLifecycle)((_v0, _v1) => {
        _v12.current && "replace_clip" === _v1.uploadType && _v1.clipId === String(_v1) && (_v0 === _v56.STATES.COMPLETED || _v0 === _v56.STATES.FAILED) && (_v12.current = !1, _v0 === _v56.STATES.COMPLETED && _v3?.());
      }, [_v3, _v1]);
      let {
          triggerReplace: _v20,
          replaceInput: _v21,
          replaceModal: _v22
        } = (0, _v57.useReplaceWithModal)(_v1, !0, _v13?.metadata?.connections?.versions?.hasInteractive, _v57.navigateToUpgrade, (_v5 = _v13?.user?.uri) ? parseInt(_v5.split("/")[2], 10) : 0, "review", () => {
          _v12.current = !0;
        }),
        _v23 = [(0, _v1.jsx)(_v65, {
          dataTestId: "replace-video-menu-item",
          icon: (0, _v1.jsx)(_v50.Reset, {
            boxSize: _v66
          }),
          onClick: _v20,
          isDisabled: !_v15 || !_v17 || _v16 || _v4 || _v19,
          children: (0, _v1.jsxs)(_v41.Box, {
            as: "span",
            display: "flex",
            alignItems: "center",
            w: "100%",
            children: [(0, _v23.translate)({
              singular: "Replace",
              dictionary: {
                es: {
                  singular: "Reemplazar"
                },
                "de-DE": {
                  singular: "Ersetzen"
                },
                "fr-FR": {
                  singular: "Remplacer"
                },
                "ja-JP": {
                  singular: "置き換え"
                },
                "ko-KR": {
                  singular: "변경"
                },
                "pt-BR": {
                  singular: "Substituir"
                },
                "zh-CN": {
                  singular: "更换"
                }
              }
            }), _v8 && _v10 && (0, _v1.jsx)(_v51.NewFeatureDot, {
              ml: "auto",
              mr: 2,
              "data-testid": "replace-new-feature-dot"
            })]
          })
        }, "replace-video-menu-item"), (0, _v1.jsx)(_v65, {
          dataTestId: "view-video-page-menu-item",
          icon: (0, _v1.jsx)(_v49.Eye, {
            boxSize: _v66
          }),
          onClick: () => {
            _v14({
              clipId: String(_v1),
              reviewId: _v2,
              redirect: "video_page"
            }), window.open(_v13?.link, "_blank");
          },
          children: (0, _v23.translate)({
            singular: "View video page",
            dictionary: {
              es: {
                singular: "Ver la página del video"
              },
              "de-DE": {
                singular: "Videoseite anzeigen"
              },
              "fr-FR": {
                singular: "Voir la page de la vidéo"
              },
              "ja-JP": {
                singular: "動画ページを表示"
              },
              "ko-KR": {
                singular: "동영상 페이지 보기"
              },
              "pt-BR": {
                singular: "Visualizar página do vídeo"
              },
              "zh-CN": {
                singular: "查看视频页面"
              }
            }
          })
        }, "view-video-page-menu-item"), (0, _v1.jsx)(_v65, {
          dataTestId: "manage-video-menu-item",
          icon: (0, _v1.jsx)(_v47.EditPencil, {
            boxSize: _v66
          }),
          onClick: () => {
            _v14({
              clipId: String(_v1),
              reviewId: _v2,
              redirect: "manage_page"
            }), window.open(_v64(_v1));
          },
          children: (0, _v23.translate)({
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
          })
        }, "manage-video-menu-item")];
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v68, {
          active: _v8,
          disabled: !_v13 || _v0,
          setActive: _v9,
          showDot: _v6,
          dismissDot: _v7,
          setShowDotInMenu: _v11,
          children: _v23
        }), _v21, _v22]
      });
    },
    _v68 = ({
      active: _v0,
      children: _v1,
      disabled: _v2,
      setActive: _v3,
      showDot: _v4,
      dismissDot: _v5,
      setShowDotInMenu: _v6
    }) => (0, _v1.jsxs)(_v42.Menu, {
      isOpen: _v0,
      placement: "bottom",
      onClose: () => {
        _v6(!1), _v3(!1);
      },
      children: [(0, _v1.jsx)(_v46.Tooltip, {
        label: (0, _v23.translate)({
          singular: "File actions",
          dictionary: {
            es: {
              singular: "Acciones de archivo"
            },
            "de-DE": {
              singular: "Dateiaktionen"
            },
            "fr-FR": {
              singular: "Actions du fichier"
            },
            "ja-JP": {
              singular: "ファイル操作"
            },
            "ko-KR": {
              singular: "파일 작업"
            },
            "pt-BR": {
              singular: "Ações de arquivo"
            },
            "zh-CN": {
              singular: "文件操作"
            }
          }
        }),
        children: (0, _v1.jsxs)(_v41.Box, {
          position: "relative",
          display: "inline-flex",
          children: [(0, _v1.jsx)(_v43.MenuButton, {
            as: _v5.IconButton,
            isDisabled: _v2,
            "data-testid": "file-actions-button",
            icon: (0, _v1.jsx)(_v48.EllipsisV, {}),
            onClick: () => {
              !_v0 && _v4 && (_v5(), _v6(!0)), _v0 && _v6(!1), _v3(!_v0);
            },
            "aria-label": (0, _v23.translate)({
              singular: "file-actions",
              dictionary: {
                es: {
                  singular: "acciones del archivo"
                },
                "de-DE": {
                  singular: "Dateiaktionen"
                },
                "fr-FR": {
                  singular: "Actions du fichier"
                },
                "ja-JP": {
                  singular: "ファイル操作"
                },
                "ko-KR": {
                  singular: "파일 작업"
                },
                "pt-BR": {
                  singular: "Ações do arquivo"
                },
                "zh-CN": {
                  singular: "文件操作"
                }
              }
            }),
            variant: "tertiary",
            size: "md"
          }), _v4 && (0, _v1.jsx)(_v51.NewFeatureDot, {
            position: "absolute",
            top: 1,
            right: 1
          })]
        })
      }), (0, _v1.jsx)(_v45.MenuList, {
        minWidth: (0, _v6.rem)(160),
        children: _v1
      })]
    });
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = ({
    videoId: _v0,
    isCommentsPanelOpen: _v1
  }) => {
    var _v2;
    let {
        uploads: _v3
      } = (0, _v54.useUploader)(),
      _v4 = (0, _v15.useToast)(),
      _v5 = (0, _v20.useIsMobile)(),
      _v6 = (0, _v4.useRef)(new Set()),
      _v7 = _v3.length > 0,
      _v8 = (_v2 = _v1 ?? !1, _v5 ? {
        right: "unset !important",
        left: "50% !important",
        transform: "translateX(-50%) !important",
        bottom: `${(0, _v6.rem)(52)} !important`
      } : {
        right: `${_v2 ? (0, _v6.rem)(_v58.COMMENTS_PANEL_WIDTH) : (0, _v6.rem)(30)} !important`,
        left: "auto !important"
      });
    return ((0, _v55.useUploadLifecycle)((_v0, _v1) => {
      if (!(_v0 !== _v56.STATES.COMPLETED && _v0 !== _v56.STATES.FAILED || "replace_clip" !== _v1.uploadType || _v1.clipId !== String(_v0) || _v6.current.has(_v1.id))) {
        if (_v6.current.add(_v1.id), _v0 === _v56.STATES.FAILED) return void _v4({
          render: _v0 => (0, _v1.jsxs)(_v15.ToastRoot, {
            ..._v0,
            variant: "warning",
            children: [(0, _v1.jsx)(_v15.ToastIcon, {}), (0, _v1.jsx)(_v15.ToastTitle, {
              children: (0, _v23.translate)({
                singular: "Upload failed",
                dictionary: {
                  es: {
                    singular: "Error en la subida"
                  },
                  "de-DE": {
                    singular: "Hochladen ist fehlgeschlagen"
                  },
                  "fr-FR": {
                    singular: "Échec de la mise en ligne"
                  },
                  "ja-JP": {
                    singular: "アップロードが失敗しました"
                  },
                  "ko-KR": {
                    singular: "업로드 실패"
                  },
                  "pt-BR": {
                    singular: "Falha no carregamento"
                  },
                  "zh-CN": {
                    singular: "上传失败"
                  }
                }
              })
            })]
          })
        });
        _v4({
          render: _v0 => (0, _v1.jsxs)(_v15.ToastRoot, {
            ..._v0,
            variant: "success",
            children: [(0, _v1.jsx)(_v15.ToastIcon, {}), (0, _v1.jsx)(_v15.ToastTitle, {
              children: (0, _v23.translate)({
                singular: "Video replacement started",
                dictionary: {
                  es: {
                    singular: "Reemplazo de vídeo iniciado"
                  },
                  "de-DE": {
                    singular: "Ersetzen des Videos gestartet"
                  },
                  "fr-FR": {
                    singular: "Remplacement de la vidéo démarré"
                  },
                  "ja-JP": {
                    singular: "動画の差し替えが開始されました"
                  },
                  "ko-KR": {
                    singular: "비디오 교체가 시작되었습니다"
                  },
                  "pt-BR": {
                    singular: "Substituição do vídeo iniciada"
                  },
                  "zh-CN": {
                    singular: "视频替换已开始"
                  }
                }
              })
            })]
          })
        });
      }
    }, [_v0]), _v7) ? (0, _v1.jsx)(_v41.Box, {
      as: _v69.Slide,
      ..._v8,
      direction: "bottom",
      in: _v7,
      zIndex: "200",
      marginBottom: _v7 ? "sm" : void 0,
      children: (0, _v1.jsx)(_v70.ProgressWidgetModule, {
        clipId: String(_v0),
        isShowing: _v7,
        isDisplayOnly: !0,
        showPrivacySettings: !1,
        getPrivacyState: () => ({
          view: void 0,
          password: ""
        }),
        setPrivacy: () => null
      })
    }) : null;
  };
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0);
  let _v75 = ({
      videoId: _v0
    }) => (0, _v1.jsx)("div", {
      style: {
        width: "100%",
        aspectRatio: "394 / 240",
        borderRadius: "16px",
        overflow: "hidden"
      },
      children: (0, _v1.jsx)("iframe", {
        src: `https://player.vimeo.com/video/${_v0}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0`,
        frameBorder: "0",
        allow: "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share",
        referrerPolicy: "strict-origin-when-cross-origin",
        title: "Review preview",
        style: {
          width: "100%",
          height: "100%",
          border: "none",
          display: "block"
        }
      })
    }),
    _v76 = ({
      title: _v0,
      description: _v1,
      videoId: _v2
    }) => (0, _v1.jsxs)(_v9.Flex, {
      direction: "column",
      gap: 3,
      align: "stretch",
      children: [(0, _v1.jsx)(_v10.Text, {
        variant: "heading-md",
        color: "text-primary",
        children: _v0
      }), _v2 && (0, _v1.jsx)(_v75, {
        videoId: _v2
      }), (0, _v1.jsx)(_v10.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: _v1
      })]
    }),
    _v77 = "review-page",
    _v78 = (0, _v74.defineTour)(_v77, {
      player: {
        order: 0,
        placement: "right",
        content: (0, _v1.jsx)(() => (0, _v1.jsx)(_v76, {
          title: (0, _v23.translate)({
            singular: "Comment anywhere on the video",
            dictionary: {
              es: {
                singular: "Comenta en cualquier punto del vídeo"
              },
              "de-DE": {
                singular: "Kommentieren Sie an beliebiger Stelle im Video"
              },
              "fr-FR": {
                singular: "Commentez n'importe où sur la vidéo"
              },
              "ja-JP": {
                singular: "動画の任意の位置にコメント"
              },
              "ko-KR": {
                singular: "동영상 어디에나 댓글 달기"
              },
              "pt-BR": {
                singular: "Comente em qualquer ponto do vídeo"
              },
              "zh-CN": {
                singular: "在视频任意位置发表评论"
              }
            }
          }),
          videoId: 0,
          description: (0, _v23.translate)({
            singular: "Click on the video at any moment along the timeline to leave a timestamped comment, pinned to that exact frame.",
            dictionary: {
              es: {
                singular: "Haz clic en el vídeo en cualquier momento a lo largo de la línea de tiempo para dejar un comentario con marca de tiempo, fijado en ese fotograma exacto."
              },
              "de-DE": {
                singular: "Klicken Sie an einer beliebigen Stelle der Zeitleiste auf das Video, um einen mit Zeitstempel versehenen Kommentar zu hinterlassen, der genau an diesem Frame angeheftet ist."
              },
              "fr-FR": {
                singular: "Cliquez n'importe où sur la timeline de la vidéo pour laisser un commentaire horodaté, épinglé sur l'image correspondante."
              },
              "ja-JP": {
                singular: "タイムライン上の任意の位置をクリックすると、そのフレームに固定されたタイムスタンプ付きコメントを残せます。"
              },
              "ko-KR": {
                singular: "타임라인의 아무 시점에서나 동영상을 클릭하여 그 정확한 프레임에 고정되는 타임스탬프 댓글을 남기세요."
              },
              "pt-BR": {
                singular: "Clique no vídeo a qualquer momento na linha do tempo para deixar um comentário com carimbo de tempo, fixado exatamente naquele quadro."
              },
              "zh-CN": {
                singular: "在时间轴的任意位置点击视频以留下带时间戳的评论，该评论会固定到对应帧。"
              }
            }
          })
        }), {})
      },
      comments: {
        order: 1,
        placement: "auto",
        content: (0, _v1.jsx)(() => (0, _v1.jsx)(_v76, {
          title: (0, _v23.translate)({
            singular: "Everyone's feedback, in one place",
            dictionary: {
              es: {
                singular: "Los comentarios de todos, en un solo lugar"
              },
              "de-DE": {
                singular: "Alle Rückmeldungen an einem Ort"
              },
              "fr-FR": {
                singular: "Tous les retours, réunis en un seul endroit"
              },
              "ja-JP": {
                singular: "全員のフィードバックを一か所に"
              },
              "ko-KR": {
                singular: "모든 사람의 피드백을 한 곳에"
              },
              "pt-BR": {
                singular: "O feedback de todos, em um só lugar"
              },
              "zh-CN": {
                singular: "所有人的反馈，汇聚于一处"
              }
            }
          }),
          description: (0, _v23.translate)({
            singular: "Comments from collaborators lands here as they come in. Reply in a thread, and mark each one Resolved when it's handled.",
            dictionary: {
              es: {
                singular: "Los comentarios de los colaboradores llegan aquí conforme van entrando. Responde en un hilo y marca cada uno como Resolved cuando se haya gestionado."
              },
              "de-DE": {
                singular: 'Kommentare von Kollaboratoren erscheinen hier, sobald sie eingehen. Antworten Sie in einem Thread und markieren Sie jeden als "Erledigt", wenn er bearbeitet wurde.'
              },
              "fr-FR": {
                singular: "Les commentaires des collaborateurs apparaissent ici au fur et à mesure. Répondez dans un fil de discussion et marquez chacun comme Résolu lorsqu'il est traité."
              },
              "ja-JP": {
                singular: "コラボレーターからのコメントは、届き次第ここに表示されます。スレッドで返信し、対応したら各コメントを「Resolved」としてマークしてください。"
              },
              "ko-KR": {
                singular: "협업자의 댓글이 도착하는 대로 여기에 표시됩니다. 스레드로 답글을 달고, 처리되면 각 댓글을 Resolved로 표시하세요."
              },
              "pt-BR": {
                singular: "Os comentários dos colaboradores aparecem aqui assim que chegam. Responda em um tópico e marque cada um como 'Resolvido' quando estiver tratado."
              },
              "zh-CN": {
                singular: "来自协作者的评论会在到达时显示在此。请在讨论线程中回复，并在处理完成后将每条评论标记为“已解决”。"
              }
            }
          })
        }), {})
      },
      copyLink: {
        order: 2,
        placement: "auto",
        content: (0, _v1.jsx)(() => (0, _v1.jsx)(_v76, {
          title: (0, _v23.translate)({
            singular: "Copy a secure review link",
            dictionary: {
              es: {
                singular: "Copiar un enlace seguro para revisión"
              },
              "de-DE": {
                singular: "Sicheren Review-Link kopieren"
              },
              "fr-FR": {
                singular: "Copier un lien de révision sécurisé"
              },
              "ja-JP": {
                singular: "安全なレビューリンクをコピー"
              },
              "ko-KR": {
                singular: "보안 리뷰 링크 복사"
              },
              "pt-BR": {
                singular: "Copiar um link seguro para revisão"
              },
              "zh-CN": {
                singular: "复制安全的审阅链接"
              }
            }
          }),
          description: (0, _v23.translate)({
            singular: "Send it to anyone — they comment without an account, and you stay in control of access.",
            dictionary: {
              es: {
                singular: "Envíalo a cualquier persona — pueden comentar sin una cuenta, y tú mantienes el control del acceso."
              },
              "de-DE": {
                singular: "Senden Sie ihn an beliebige Personen — diese können ohne Konto kommentieren, und Sie behalten die Kontrolle über den Zugriff."
              },
              "fr-FR": {
                singular: "Envoyez-le à n’importe qui — ils peuvent commenter sans compte, et vous gardez le contrôle de l’accès."
              },
              "ja-JP": {
                singular: "誰にでも送信できます — 相手はアカウントなしでコメントでき、アクセスは引き続きあなたが管理します。"
              },
              "ko-KR": {
                singular: "누구에게나 전송하세요 — 계정 없이 댓글을 남길 수 있고, 접근 권한은 계속 귀하가 제어합니다."
              },
              "pt-BR": {
                singular: "Envie-o para qualquer pessoa — elas comentam sem precisar de uma conta, e você mantém o controle de acesso."
              },
              "zh-CN": {
                singular: "将其发送给任何人 — 他们无需账户即可发表评论, 您仍可控制访问权限."
              }
            }
          })
        }), {})
      }
    });
  _v0.s(["REVIEW_TOUR_NAME", 0, _v77, "ReviewTour", 0, _v78], 0);
  var _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0);
  let _v84 = (0, _v2.default)(async () => ({
    default: (await _v0.A(0)).LoginJoinModal
  }), {
    loadableGenerated: {
      modules: [0]
    }
  });
  _v0.s(["ReviewHeader", 0, ({
    videoName: _v0,
    videoId: _v1,
    clipHash: _v2,
    onDownload: _v3,
    isDownloadDisabled: _v4,
    analyticsProps: _v5,
    toggleDrawer: _v6,
    currentVersionSequenceNumber: _v7,
    setIsReplaceOverQuota: _v8,
    totalVersionsCount: _v9,
    reviewStatus: _v10,
    showReviewStatus: _v11,
    reviewId: _v12,
    isCommentsPanelOpen: _v13,
    onReplaceCompleted: _v14,
    versionId: _v15,
    isDeleted: _v16,
    redirectUri: _v17,
    isVideoProcessing: _v18,
    replacementStatus: _v19 = null,
    showComments: _v20 = !0,
    showDownload: _v21 = !0,
    showAllVersions: _v22 = !0,
    showRestore: _v23 = !0,
    showDeleteVersion: _v24 = !0,
    showNewVersion: _v25 = !0
  }) => {
    let _v26 = (0, _v19.useMediaQueryVisibility)(`screen and (max-width: ${(0, _v6.rem)(_v31.BREAKPOINTS.small)})`),
      _v27 = (0, _v20.useIsMobile)(),
      _v28 = (0, _v39.useViewer)(),
      _v29 = _v28?.user,
      {
        data: _v30
      } = (0, _v22.useGetVideo)(() => _v28 && _v12 ? {
        where: {
          videoId: _v1
        },
        query: {
          reviewId: _v12,
          password: (0, _v59.getReviewPasswordHashFromCookie)(_v12)
        },
        select: ["metadata.canBeReplaced", "metadata.interactions.edit.uri"]
      } : null),
      _v31 = !!_v30?.metadata?.interactions?.edit?.uri,
      _v32 = !!_v30?.metadata?.canBeReplaced,
      {
        baseUrl: _v33,
        jwt: _v34
      } = (0, _v21.useGctlConfig)(),
      {
        replaceEnabled: _v35,
        isLoading: _v36
      } = (0, _v61.useReplace)(_v1, _v12),
      [_v37, _v38] = (0, _v4.useState)(),
      _v39 = (0, _v82.formatVersionNumber)(_v7 || _v58.DEFAULT_VERSION_NUMBER),
      [_v40, _v41] = (0, _v4.useState)(!1),
      {
        settings: _v42
      } = (0, _v27.useOrionSettings)(),
      _v43 = (0, _v15.useToast)(),
      {
        setVersions: _v44
      } = (0, _v38.useVersionsStore)(_v0 => ({
        setVersions: _v0.setVersions
      })),
      {
        restoreVersion: _v45,
        isRestoreInProgress: _v46
      } = (0, _v79.useRestoreVersion)(),
      {
        restore: _v47,
        isRestoreInProgress: _v48
      } = (0, _v37.useRestoreVersionWorkflow)(),
      _v49 = _v42.replace_in_review && _v12 && _v32 && _v31,
      _v50 = _v42.new_replace_feature ? _v48 : _v46,
      _v51 = (0, _v4.useCallback)(() => (0, _v35.refreshVersions)(_v1, {
        baseUrl: _v33,
        jwt: _v34,
        reviewId: _v12,
        password: (0, _v59.getReviewPasswordHashFromCookie)(_v12)
      }, _v44), [_v33, _v34, _v12, _v44, _v1]),
      {
        trackRestoreVersion: _v52
      } = (0, _v28.useVideoManageTracking)(),
      {
        allowStatusChange: _v53,
        isDark: _v54,
        showMyLogo: _v55,
        logoUrl: _v56
      } = (0, _v4.useContext)(_v80.ReviewLinkContext);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v3.default, {
        children: (0, _v1.jsx)("title", {
          children: _v0
        })
      }), (0, _v1.jsxs)(_v24.Navigation, {
        id: "review-header",
        position: "sticky",
        minHeight: "64px",
        zIndex: 0,
        top: "0",
        children: [(0, _v1.jsxs)(_v24.Navigation.LeftContent, {
          "data-id": "review-header-left",
          gap: "md",
          children: [_v55 && _v56 ? (0, _v1.jsx)(_v13.Link, {
            href: "/",
            ...(!_v28?.user && {
              pointerEvents: "none"
            }),
            children: (0, _v1.jsx)(_v12.Image, {
              maxWidth: {
                base: (0, _v6.rem)(100),
                md: (0, _v6.rem)(400)
              },
              height: (0, _v6.rem)(40),
              src: _v56,
              alt: "Team Logo"
            })
          }) : (0, _v1.jsx)(_v32.default, {}), !_v26 && (0, _v1.jsx)(_v7.Breadcrumb, {
            maxWidth: "500px",
            children: (0, _v1.jsx)(_v7.BreadcrumbItem, {
              overflow: "hidden",
              whiteSpace: "nowrap",
              children: _v17 ? (0, _v1.jsx)(_v8.BreadcrumbLink, {
                href: _v17,
                children: (0, _v1.jsx)(_v33.OverflowToolTip, {
                  labelToolTip: _v0,
                  placement: "bottom",
                  children: (0, _v1.jsx)(_v10.Text, {
                    variant: "body-md",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    children: _v0
                  })
                })
              }) : (0, _v1.jsx)(_v10.Text, {
                variant: "body-md",
                overflow: "hidden",
                textOverflow: "ellipsis",
                children: _v0
              })
            })
          }), !(_v49 && "complete" === _v19) && (0, _v1.jsx)(_v83.VersionListPicker, {
            videoId: _v1,
            clipHash: _v2,
            allowReplace: _v35,
            analyticsProps: _v5,
            shouldRedirectOnUpload: !0,
            showLoading: _v36,
            activeVersionSequenceNumber: _v7,
            canOnlyComment: _v26 || !_v22 || _v9 < 2 && !!_v12,
            setIsReplaceOverQuota: _v8,
            isCurrentVersionEnabled: !0,
            totalVersionsCount: _v9,
            reviewId: _v12,
            showDownload: _v21,
            showRestore: _v23,
            showDeleteVersion: _v24,
            showNewVersion: _v25,
            isVideoProcessing: _v18
          }), _v49 && "in_progress" === _v19 && (0, _v1.jsxs)(_v9.Flex, {
            alignItems: "center",
            gap: 3,
            whiteSpace: "nowrap",
            children: [(0, _v1.jsx)(_v14.Spinner, {
              size: "sm"
            }), (0, _v1.jsx)(_v10.Text, {
              variant: "heading-xs",
              children: (0, _v23.translate)({
                singular: "Replacing video",
                dictionary: {
                  es: {
                    singular: "Reemplazando vídeo"
                  },
                  "de-DE": {
                    singular: "Video wird ersetzt"
                  },
                  "fr-FR": {
                    singular: "Remplacement de la vidéo"
                  },
                  "ja-JP": {
                    singular: "動画を差し替え中"
                  },
                  "ko-KR": {
                    singular: "비디오 교체 중"
                  },
                  "pt-BR": {
                    singular: "Substituindo o vídeo"
                  },
                  "zh-CN": {
                    singular: "正在替换视频"
                  }
                }
              })
            }), (0, _v1.jsx)(_v13.Link, {
              href: _v64(_v1),
              fontFamily: "heading",
              fontSize: "heading-xs",
              textDecoration: "underline",
              children: (0, _v23.translate)({
                singular: "See progress",
                dictionary: {
                  es: {
                    singular: "Ver progreso"
                  },
                  "de-DE": {
                    singular: "Fortschritt anzeigen"
                  },
                  "fr-FR": {
                    singular: "Voir l'avancement"
                  },
                  "ja-JP": {
                    singular: "進行状況を見る"
                  },
                  "ko-KR": {
                    singular: "진행 상황 보기"
                  },
                  "pt-BR": {
                    singular: "Ver progresso"
                  },
                  "zh-CN": {
                    singular: "查看进度"
                  }
                }
              })
            })]
          }), _v49 && "complete" === _v19 && (0, _v1.jsxs)(_v9.Flex, {
            alignItems: "center",
            gap: 3,
            whiteSpace: "nowrap",
            children: [(0, _v1.jsx)(_v17.Complete, {
              width: (0, _v6.rem)(20),
              color: "status-positive-primary"
            }), (0, _v1.jsx)(_v10.Text, {
              variant: "heading-xs",
              children: (0, _v23.translate)({
                singular: "Replace complete",
                dictionary: {
                  es: {
                    singular: "Reemplazo completado"
                  },
                  "de-DE": {
                    singular: "Ersetzung abgeschlossen"
                  },
                  "fr-FR": {
                    singular: "Remplacement terminé"
                  },
                  "ja-JP": {
                    singular: "置き換えが完了しました"
                  },
                  "ko-KR": {
                    singular: "교체 완료"
                  },
                  "pt-BR": {
                    singular: "Substituição concluída"
                  },
                  "zh-CN": {
                    singular: "替换已完成"
                  }
                }
              })
            }), (0, _v1.jsx)(_v13.Link, {
              href: "#",
              fontFamily: "heading",
              fontSize: "heading-xs",
              textDecoration: "underline",
              onClick: _v0 => {
                _v0.preventDefault(), window.location.reload();
              },
              children: (0, _v23.translate)({
                singular: "See {versionNumber}",
                replacements: {
                  versionNumber: (0, _v82.formatVersionNumber)(_v7)
                },
                dictionary: {
                  es: {
                    singular: "Ver {versionNumber}"
                  },
                  "de-DE": {
                    singular: "Version {versionNumber} anzeigen"
                  },
                  "fr-FR": {
                    singular: "Voir {versionNumber}"
                  },
                  "ja-JP": {
                    singular: "バージョン{versionNumber}を見る"
                  },
                  "ko-KR": {
                    singular: "{versionNumber} 보기"
                  },
                  "pt-BR": {
                    singular: "Ver {versionNumber}"
                  },
                  "zh-CN": {
                    singular: "查看 {versionNumber}"
                  }
                }
              })
            })]
          })]
        }), (0, _v1.jsx)(_v24.Navigation.RightContent, {
          "data-id": "video-versions-header-right",
          justifyContent: "flex-end",
          gap: "sm",
          children: (0, _v1.jsxs)(_v26.LoginJoinModalContext.Provider, {
            value: {
              modal: _v37,
              setModal: _v38
            },
            children: [!_v27 && _v11 && (0, _v1.jsx)(_v73.ReviewStatusMenu, {
              clipId: _v1,
              defaultStatus: _v10 ?? null,
              isReadOnly: !_v53,
              analyticsProps: _v5,
              reviewId: _v12
            }), _v20 && (0, _v1.jsx)(_v5.IconButton, {
              onClick: () => _v6(),
              icon: (0, _v1.jsx)(_v16.CommentList, {}),
              size: "md",
              variant: "tertiary",
              "aria-label": "comments"
            }), _v21 && (0, _v1.jsx)(_v5.IconButton, {
              onClick: () => {
                _v3?.();
              },
              icon: (0, _v1.jsx)(_v18.DownloadImport, {}),
              size: "md",
              variant: "tertiary",
              "aria-label": "download",
              isDisabled: _v4
            }), _v23 && _v15 && !_v16 && (0, _v1.jsx)(_v11.Button, {
              variant: "primary",
              onClick: () => void (_v41(!0), _v5 && (0, _v81.bpStartRestoreVersion)({
                videoId: _v1,
                viewer: _v28,
                currentVersion: _v39,
                chosenVersion: _v39,
                analyticsProps: _v5
              })),
              children: (0, _v23.translate)({
                singular: "Restore this version",
                dictionary: {
                  es: {
                    singular: "Restaurar esta versión"
                  },
                  "de-DE": {
                    singular: "Diese Version wiederherstellen"
                  },
                  "fr-FR": {
                    singular: "Restaurer cette version"
                  },
                  "ja-JP": {
                    singular: "このバージョンを復元"
                  },
                  "ko-KR": {
                    singular: "이 버전 복원"
                  },
                  "pt-BR": {
                    singular: "Restaurar esta versão"
                  }
                }
              })
            }), _v12 && (0, _v1.jsx)(_v30, {
              step: _v78.copyLink,
              children: (0, _v1.jsx)(_v40.CopyReviewLinkButton, {
                surface: "video_review_page",
                clipId: String(_v1)
              })
            }), _v49 && (0, _v1.jsxs)(_v34.default, {
              children: [(0, _v1.jsx)(_v67, {
                videoId: _v1,
                reviewId: _v12,
                onReplaceCompleted: _v14,
                isReplacing: "in_progress" === _v19
              }), (0, _v1.jsx)(_v71, {
                videoId: _v1,
                isCommentsPanelOpen: _v13
              })]
            }), (0, _v1.jsx)(_v25.AccountMenu, {
              hasThemeSupport: !_v54
            }), _v28 && !_v29 && (0, _v1.jsx)(_v84, {})]
          })
        })]
      }), (0, _v1.jsx)(_v72.RestoreConfirmationModal, {
        isOpen: _v40,
        onClose: () => _v41(!1),
        onRestoreVersion: () => {
          if (_v15) {
            if (_v5 && (0, _v81.bpRestoreVersion)({
              videoId: _v1,
              viewer: _v28,
              currentVersion: _v39,
              chosenVersion: _v39,
              analyticsProps: _v5
            }), _v42.new_replace_feature) return void _v47(_v1, _v15).then(async _v0 => {
              await _v51().catch(() => (0, _v36.handleVersionRefreshError)(_v43)), _v41(!1), _v52({
                clipId: String(_v1),
                versionNumber: _v7,
                versionId: String(_v15),
                filename: _v0.filename ?? null,
                filesize: null,
                uploadStatus: _v0.upload?.status ?? null,
                versionTranscodeStatus: _v0.versionTranscodeStatus ?? null,
                status: "succeeded",
                error: null
              }), _v43({
                title: (0, _v23.translate)({
                  singular: "Version restored",
                  dictionary: {
                    es: {
                      singular: "Versión restaurada"
                    },
                    "de-DE": {
                      singular: "Version wiederhergestellt"
                    },
                    "fr-FR": {
                      singular: "Version restaurée"
                    },
                    "ja-JP": {
                      singular: "バージョンを復元しました"
                    },
                    "ko-KR": {
                      singular: "버전이 복원되었습니다."
                    },
                    "pt-BR": {
                      singular: "Versão restaurada"
                    },
                    "zh-CN": {
                      singular: "版本已恢复"
                    }
                  }
                }),
                duration: _v59.TOAST_DURATION,
                isClosable: !1
              });
            }).catch(_v0 => {
              _v43({
                title: (0, _v23.translate)({
                  singular: "Unable to restore",
                  dictionary: {
                    es: {
                      singular: "No se puede restaurar"
                    },
                    "de-DE": {
                      singular: "Wiederherstellung nicht möglich"
                    },
                    "fr-FR": {
                      singular: "Restauration impossible"
                    },
                    "ja-JP": {
                      singular: "復元できません"
                    },
                    "ko-KR": {
                      singular: "복원할 수 없습니다."
                    },
                    "pt-BR": {
                      singular: "Não foi possível restaurar"
                    },
                    "zh-CN": {
                      singular: "无法恢复"
                    }
                  }
                }),
                duration: _v59.TOAST_DURATION,
                isClosable: !1,
                variant: "warning"
              }), _v52({
                clipId: String(_v1),
                versionNumber: _v7,
                versionId: String(_v15),
                filename: null,
                filesize: null,
                uploadStatus: null,
                versionTranscodeStatus: null,
                status: "failed",
                error: _v0 instanceof Error ? _v0.message : String(_v0)
              });
            });
            _v45(_v1, _v15).then(() => {
              _v41(!1);
            });
          }
        },
        isRestoreApiInProgress: _v50
      })]
    });
  }], 0);
}