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
    _v15 = _v0.i(474),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  function _v22({
    step: _v0,
    children: _v1
  }) {
    let {
        registerTarget: _v2,
        unregisterTarget: _v3
      } = (0, _v21.useTourContext)(),
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
  _v0.s(["TourStep", 0, _v22], 0);
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = ({
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
    _v33 = ({
      title: _v0,
      description: _v1,
      videoId: _v2
    }) => (0, _v1.jsxs)(_v30.Flex, {
      direction: "column",
      gap: 3,
      align: "stretch",
      children: [(0, _v1.jsx)(_v9.Text, {
        variant: "heading-md",
        color: "text-primary",
        children: _v0
      }), _v2 && (0, _v1.jsx)(_v32, {
        videoId: _v2
      }), (0, _v1.jsx)(_v9.Text, {
        variant: "body-md",
        color: "text-secondary",
        children: _v1
      })]
    }),
    _v34 = "review-page",
    _v35 = (0, _v31.defineTour)(_v34, {
      player: {
        order: 0,
        placement: "right",
        content: (0, _v1.jsx)(() => (0, _v1.jsx)(_v33, {
          title: (0, _v17.translate)({
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
          description: (0, _v17.translate)({
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
        content: (0, _v1.jsx)(() => (0, _v1.jsx)(_v33, {
          title: (0, _v17.translate)({
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
          description: (0, _v17.translate)({
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
        content: (0, _v1.jsx)(() => (0, _v1.jsx)(_v33, {
          title: (0, _v17.translate)({
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
          description: (0, _v17.translate)({
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
  _v0.s(["REVIEW_TOUR_NAME", 0, _v34, "ReviewTour", 0, _v35], 0);
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = (0, _v2.default)(async () => ({
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
    versionId: _v13,
    isDeleted: _v14,
    redirectUri: _v15,
    isVideoProcessing: _v16,
    showComments: _v17 = !0,
    showDownload: _v18 = !0,
    showAllVersions: _v19 = !0,
    showRestore: _v20 = !0,
    showDeleteVersion: _v21 = !0,
    showNewVersion: _v22 = !0
  }) => {
    let _v23 = (0, _v15.useMediaQueryVisibility)(`screen and (max-width: ${(0, _v6.rem)(_v23.BREAKPOINTS.small)})`),
      _v24 = (0, _v16.useIsMobile)(),
      _v25 = (0, _v26.useViewer)(),
      _v26 = _v25?.user,
      {
        replaceEnabled: _v27,
        isLoading: _v28
      } = (0, _v39.useReplace)(_v1, _v12),
      [_v29, _v30] = (0, _v4.useState)(),
      _v31 = (0, _v36.getVersionNumber)(_v7 || _v38.DEFAULT_VERSION_NUMBER),
      [_v32, _v33] = (0, _v4.useState)(!1),
      {
        restoreVersion: _v34,
        isRestoreInProgress: _v35
      } = (0, _v40.useRestoreVersion)(),
      {
        allowStatusChange: _v36,
        isDark: _v37,
        showMyLogo: _v38,
        logoUrl: _v39
      } = (0, _v4.useContext)(_v41.ReviewLinkContext);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v3.default, {
        children: (0, _v1.jsx)("title", {
          children: _v0
        })
      }), (0, _v1.jsxs)(_v18.Navigation, {
        id: "review-header",
        position: "sticky",
        minHeight: "64px",
        zIndex: 0,
        top: "0",
        children: [(0, _v1.jsxs)(_v18.Navigation.LeftContent, {
          "data-id": "review-header-left",
          gap: "md",
          children: [_v38 && _v39 ? (0, _v1.jsx)(_v12.Link, {
            href: "/",
            ...(!_v25?.user && {
              pointerEvents: "none"
            }),
            children: (0, _v1.jsx)(_v11.Image, {
              maxWidth: {
                base: (0, _v6.rem)(100),
                md: (0, _v6.rem)(400)
              },
              height: (0, _v6.rem)(40),
              src: _v39,
              alt: "Team Logo"
            })
          }) : (0, _v1.jsx)(_v24.default, {}), !_v23 && (0, _v1.jsx)(_v7.Breadcrumb, {
            maxWidth: "500px",
            children: (0, _v1.jsx)(_v7.BreadcrumbItem, {
              overflow: "hidden",
              whiteSpace: "nowrap",
              children: _v15 ? (0, _v1.jsx)(_v8.BreadcrumbLink, {
                href: _v15,
                children: (0, _v1.jsx)(_v25.OverflowToolTip, {
                  labelToolTip: _v0,
                  placement: "bottom",
                  children: (0, _v1.jsx)(_v9.Text, {
                    variant: "body-md",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    children: _v0
                  })
                })
              }) : (0, _v1.jsx)(_v9.Text, {
                variant: "body-md",
                overflow: "hidden",
                textOverflow: "ellipsis",
                children: _v0
              })
            })
          }), (0, _v1.jsx)(_v37.VersionList, {
            videoId: _v1,
            clipHash: _v2,
            allowReplace: _v27,
            analyticsProps: _v5,
            shouldRedirectOnUpload: !0,
            showLoading: _v28,
            activeVersionSequenceNumber: _v7,
            canOnlyComment: _v23 || !_v19 || _v9 < 2 && !!_v12,
            setIsReplaceOverQuota: _v8,
            isCurrentVersionEnabled: !0,
            totalVersionsCount: _v9,
            reviewId: _v12,
            showDownload: _v18,
            showRestore: _v20,
            showDeleteVersion: _v21,
            showNewVersion: _v22,
            isVideoProcessing: _v16
          })]
        }), (0, _v1.jsx)(_v18.Navigation.RightContent, {
          "data-id": "video-versions-header-right",
          justifyContent: "flex-end",
          gap: "sm",
          children: (0, _v1.jsxs)(_v20.LoginJoinModalContext.Provider, {
            value: {
              modal: _v29,
              setModal: _v30
            },
            children: [!_v24 && _v11 && (0, _v1.jsx)(_v29.ReviewStatusMenu, {
              clipId: _v1,
              defaultStatus: _v10 ?? null,
              isReadOnly: !_v36,
              analyticsProps: _v5,
              reviewId: _v12
            }), _v17 && (0, _v1.jsx)(_v5.IconButton, {
              onClick: () => _v6(),
              icon: (0, _v1.jsx)(_v13.CommentList, {}),
              size: "md",
              variant: "tertiary",
              "aria-label": "comments"
            }), _v18 && (0, _v1.jsx)(_v5.IconButton, {
              onClick: () => {
                _v3?.();
              },
              icon: (0, _v1.jsx)(_v14.DownloadImport, {}),
              size: "md",
              variant: "tertiary",
              "aria-label": "download",
              isDisabled: _v4
            }), _v20 && _v13 && !_v14 && (0, _v1.jsx)(_v10.Button, {
              variant: "primary",
              onClick: () => void (_v33(!0), _v5 && (0, _v42.bpStartRestoreVersion)({
                videoId: _v1,
                viewer: _v25,
                currentVersion: _v31,
                chosenVersion: _v31,
                analyticsProps: _v5
              })),
              children: (0, _v17.translate)({
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
            }), _v12 && (0, _v1.jsx)(_v22, {
              step: _v35.copyLink,
              children: (0, _v1.jsx)(_v27.CopyReviewLinkButton, {
                surface: "video_review_page",
                clipId: String(_v1)
              })
            }), (0, _v1.jsx)(_v19.AccountMenu, {
              hasThemeSupport: !_v37
            }), _v25 && !_v26 && (0, _v1.jsx)(_v43, {})]
          })
        })]
      }), (0, _v1.jsx)(_v28.RestoreConfirmationModal, {
        isOpen: _v32,
        onClose: () => _v33(!1),
        onRestoreVersion: () => {
          _v13 && (_v5 && (0, _v42.bpRestoreVersion)({
            videoId: _v1,
            viewer: _v25,
            currentVersion: _v31,
            chosenVersion: _v31,
            analyticsProps: _v5
          }), _v34(_v1, _v13).then(() => {
            _v33(!1);
          }));
        },
        isRestoreApiInProgress: _v35
      })]
    });
  }], 0);
}