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
    _v20 = _v0.i(0);
  let _v21 = window;
  _v21?.document, _v21?.navigator, _v21?.localStorage, _v21?.sessionStorage;
  var _v22 = _v0.i(0),
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
    _v36 = _v0.i(0);
  async function _v37({
    baseUrl: _v0,
    where: {
      userId: _v1
    },
    ..._v2
  }) {
    return (0, _v36.measureLatency)("postUserArchiveRestoration", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/archive-restoration`, {
        ..._v2,
        method: "POST"
      });
      if (!_v0.ok) throw new _v23.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v23.deepCamelCase)(_v1);
    });
  }
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  function _v40() {
    let {
        mutate: _v0
      } = (0, _v38.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v39.useGctlConfig)(),
      [_v5, _v6] = (0, _v35.useInternalState)();
    return [(0, _v3.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/archive-restoration${(0, _v35.serializeQuery)(_v0)}`, _v37({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v34.default.env.STORYBOOK && (0, _v35.assignMswData)(_v40, {
    endpoint: "/users/:userId/archive-restoration",
    method: "POST"
  });
  var _v41 = _v0.i(0);
  let _v42 = ["createdTime", "filesSize", "filesSize.fileSizeType", "filesSize.totalSize", "name", "pictures.defaultPicture", "pictures.sizes", "uri"],
    _v43 = `${(0, _v18.rem)(150)} 6fr ${(0, _v18.rem)(130)} ${(0, _v18.rem)(105)}`,
    _v44 = () => (0, _v1.jsx)(_v27.ErrorPage, {
      error: new _v22.ResourceNotFoundError()
    });
  function _v45() {
    return (0, _v1.jsxs)(_v19.ContentRow, {
      listGridColumns: _v43,
      cursor: "initial",
      disableHover: !0,
      backgroundColor: "fill-component",
      paddingTop: "0",
      paddingBottom: "0",
      minHeight: "2.5rem",
      display: {
        base: "none",
        sm: "grid"
      },
      children: [(0, _v1.jsx)(_v19.ContentRow.Column, {
        children: null
      }), (0, _v1.jsx)(_v19.ContentRow.Column, {
        children: (0, _v1.jsx)(_v17.Text, {
          variant: "label-sm",
          fontFamily: "heading",
          color: "text-secondary",
          children: (0, _v24.translate)({
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
          })
        })
      }), (0, _v1.jsx)(_v19.ContentRow.Column, {
        children: (0, _v1.jsx)(_v17.Text, {
          variant: "label-sm",
          fontFamily: "heading",
          color: "text-secondary",
          children: (0, _v24.translate)({
            singular: "Uploaded",
            dictionary: {
              es: {
                singular: "Subido el"
              },
              "de-DE": {
                singular: "Hochgeladen"
              },
              "fr-FR": {
                singular: "Mis en ligne"
              },
              "ja-JP": {
                singular: "アップロード時期"
              },
              "ko-KR": {
                singular: "업로드"
              },
              "pt-BR": {
                singular: "Carregado"
              },
              "zh-CN": {
                singular: "已上传"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v19.ContentRow.Column, {
        children: (0, _v1.jsx)(_v17.Text, {
          variant: "label-sm",
          fontFamily: "heading",
          color: "text-secondary",
          children: (0, _v24.translate)({
            singular: "Size",
            dictionary: {
              es: {
                singular: "Tamaño"
              },
              "de-DE": {
                singular: "Größe"
              },
              "fr-FR": {
                singular: "Taille"
              },
              "ja-JP": {
                singular: "サイズ"
              },
              "ko-KR": {
                singular: "크기"
              },
              "pt-BR": {
                singular: "Tamanho"
              },
              "zh-CN": {
                singular: "大小"
              }
            }
          })
        })
      })]
    });
  }
  function _v46({
    videos: _v0
  }) {
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v0.map(_v0 => {
        let _v1 = _v0.pictures?.sizes?.[3]?.link ?? _v0.pictures?.sizes?.[0]?.link,
          _v2 = _v0.filesSize?.totalSize ? (0, _v28.bytesToSize)(_v0.filesSize.totalSize, 1) : (0, _v24.translate)({
            singular: "Unknown",
            dictionary: {
              es: {
                singular: "Desconocido"
              },
              "de-DE": {
                singular: "Unbekannt"
              },
              "fr-FR": {
                singular: "Inconnu"
              },
              "ja-JP": {
                singular: "不明"
              },
              "ko-KR": {
                singular: "알 수 없음"
              },
              "pt-BR": {
                singular: "Desconhecido"
              },
              "zh-CN": {
                singular: "未知"
              }
            }
          }),
          _v3 = _v0.createdTime ? (0, _v25.formatDateToNeededLocale)({
            date: new Date(_v0.createdTime)
          }) : (0, _v24.translate)({
            singular: "Unknown",
            dictionary: {
              es: {
                singular: "Desconocido"
              },
              "de-DE": {
                singular: "Unbekannt"
              },
              "fr-FR": {
                singular: "Inconnu"
              },
              "ja-JP": {
                singular: "不明"
              },
              "ko-KR": {
                singular: "알 수 없음"
              },
              "pt-BR": {
                singular: "Desconhecido"
              },
              "zh-CN": {
                singular: "未知"
              }
            }
          });
        return (0, _v1.jsxs)(_v19.ContentRow, {
          listGridColumns: _v43,
          cursor: "initial",
          disableHover: !0,
          children: [(0, _v1.jsx)(_v19.ContentRow.Column, {
            children: (0, _v1.jsx)(_v20.VideoThumbnail, {
              alt: _v0.name ?? (0, _v24.translate)({
                singular: "Archived video",
                dictionary: {
                  es: {
                    singular: "Video archivado"
                  },
                  "de-DE": {
                    singular: "Archiviertes Video"
                  },
                  "fr-FR": {
                    singular: "Vidéo archivée"
                  },
                  "ja-JP": {
                    singular: "アーカイブ済みの動画"
                  },
                  "ko-KR": {
                    singular: "보관된 동영상"
                  },
                  "pt-BR": {
                    singular: "Vídeo arquivado"
                  },
                  "zh-CN": {
                    singular: "已归档的视频"
                  }
                }
              }),
              badgeText: "",
              isDefaultPicture: _v0.pictures?.defaultPicture,
              thumbnailSrc: _v1
            })
          }), (0, _v1.jsx)(_v19.ContentRow.Column, {
            overflow: "hidden",
            children: (0, _v1.jsx)(_v17.Text, {
              variant: "heading-xs",
              noOfLines: 1,
              children: _v0.name ?? (0, _v24.translate)({
                singular: "Untitled video",
                dictionary: {
                  es: {
                    singular: "Vídeo sin título"
                  },
                  "de-DE": {
                    singular: "Unbenanntes Video"
                  },
                  "fr-FR": {
                    singular: "Vidéo sans titre"
                  },
                  "ja-JP": {
                    singular: "タイトル未設定の動画"
                  },
                  "ko-KR": {
                    singular: "제목 없는 동영상"
                  },
                  "pt-BR": {
                    singular: "Vídeo sem título"
                  },
                  "zh-CN": {
                    singular: "未命名视频"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v19.ContentRow.Column, {
            children: (0, _v1.jsx)(_v17.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v3
            })
          }), (0, _v1.jsx)(_v19.ContentRow.Column, {
            children: (0, _v1.jsx)(_v17.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v2
            })
          })]
        }, _v0.uri);
      })
    });
  }
  function _v47() {
    let _v0,
      _v1 = (0, _v32.useViewer)(),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v3 = !_v1?.teamUser || _v1.teamUser.permissionLevel <= _v31.RECENTLY_DELETED_MAX_PERMISSION_LEVEL,
      _v4 = _v1?.teamUser?.hasPaid ?? _v1?.user?.capabilities.hasPaid ?? !1,
      _v5 = void 0 !== _v2 && _v3 && _v4,
      _v6 = _v5 ? _v2 : void 0,
      {
        error: _v7,
        isDone: _v8,
        isLoadingInitialData: _v9,
        isLoadingMore: _v10,
        loadMore: _v11,
        total: _v12,
        videos: _v13
      } = (_v0 => {
        let {
            data: _v1,
            error: _v2,
            mutate: _v3,
            setSize: _v4,
            size: _v5
          } = (0, _v41.useGetUserVideosInfinite)(() => void 0 === _v0 ? null : {
            where: {
              userId: _v0
            },
            select: _v42,
            query: {
              direction: "asc",
              filter: "cold_storage",
              perPage: 20,
              sort: "date"
            },
            headers: {
              Accept: "application/vnd.vimeo.*+json;version=3.4.1"
            }
          }),
          _v6 = (0, _v3.useMemo)(() => _v1?.flatMap(_v0 => _v0?.data ?? []) ?? [], [_v1]),
          _v7 = _v1?.[_v1.length - 1],
          _v8 = void 0 === _v1 && void 0 === _v2,
          _v9 = _v8 || _v5 > 0 && void 0 !== _v1 && void 0 === _v1[_v5 - 1];
        return {
          error: _v2,
          isDone: void 0 !== _v7 && void 0 === _v7.paging.next,
          isLoadingInitialData: _v8,
          isLoadingMore: _v9,
          loadMore: () => {
            _v4(_v5 + 1);
          },
          mutate: _v3,
          total: _v1?.[0]?.total ?? 0,
          videos: _v6
        };
      })(_v6),
      {
        coldStorageDiskSpace: _v14,
        isLoading: _v15
      } = (_v0 => {
        let {
          data: _v1,
          error: _v2,
          isLoading: _v3,
          mutate: _v4
        } = (0, _v33.useGetUser)(() => void 0 === _v0 ? null : {
          where: {
            userId: _v0
          },
          select: ["uploadQuota.coldStorageDiskSpace"]
        });
        return {
          coldStorageDiskSpace: _v1?.uploadQuota?.coldStorageDiskSpace ?? 0,
          error: _v2,
          isLoading: void 0 !== _v0 && _v3,
          mutate: _v4
        };
      })(_v6),
      {
        error: _v16,
        isLoading: _v17,
        isSubmitted: _v18,
        requestRestoration: _v19
      } = (_v0 => {
        let [_v1, _v2] = _v40(),
          _v3 = (0, _v3.useCallback)(async () => {
            if (void 0 === _v0) throw Error("Missing archive owner");
            await _v1({
              where: {
                userId: _v0
              }
            });
          }, [_v1, _v0]);
        return {
          error: _v2.error,
          isLoading: _v2.loading,
          isSubmitted: _v2.called && null !== _v2.data && null === _v2.error,
          requestRestoration: _v3
        };
      })(_v6),
      {
        trackRestoreClicked: _v20
      } = (_v0 = (0, _v26.usePico)(), {
        trackRestoreClicked: (0, _v3.useCallback)(({
          videoCount: _v0
        }) => {
          null !== _v0 && _v0.track("archive_restoration_restore_clicked", {
            archive_restoration_video_count: _v0
          });
        }, [_v0])
      }),
      [_v21, _v22] = (0, _v3.useState)(!1),
      _v23 = _v7 instanceof _v23.NetworkError && 404 === _v7.status,
      _v24 = null != _v7,
      _v25 = (0, _v3.useCallback)(async () => {
        _v17 || _v18 || (_v20({
          videoCount: _v12
        }), _v22(!1), await _v19());
      }, [_v18, _v17, _v19, _v12, _v20]);
    if (null === _v1 || _v9 || _v15) return (0, _v1.jsx)(_v6.Flex, {
      alignItems: "center",
      justifyContent: "center",
      minHeight: (0, _v18.rem)(400),
      children: (0, _v1.jsx)(_v16.Spinner, {})
    });
    if (!_v5 || _v23 || _v8 && 0 === _v13.length) return (0, _v1.jsx)(_v44, {});
    if (_v24) return (0, _v1.jsx)(_v6.Flex, {
      alignItems: "center",
      justifyContent: "center",
      minHeight: (0, _v18.rem)(400),
      children: (0, _v1.jsxs)(_v6.Flex, {
        direction: "column",
        alignItems: "center",
        gap: "200",
        children: [(0, _v1.jsx)(_v17.Text, {
          variant: "body-lg",
          color: "text-secondary",
          children: (0, _v24.translate)({
            singular: "We could not load your archived videos. Please try again.",
            dictionary: {
              es: {
                singular: "No hemos podido cargar sus vídeos archivados. Por favor, inténtelo de nuevo."
              },
              "de-DE": {
                singular: "Wir konnten Ihre archivierten Videos nicht laden. Bitte versuchen Sie es erneut."
              },
              "fr-FR": {
                singular: "Nous n'avons pas pu charger vos vidéos archivées. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "アーカイブされた動画を読み込めませんでした。もう一度お試しください。"
              },
              "ko-KR": {
                singular: "보관된 동영상을 불러올 수 없습니다. 다시 시도해 주세요."
              },
              "pt-BR": {
                singular: "Não foi possível carregar seus vídeos arquivados. Por favor, tente novamente."
              },
              "zh-CN": {
                singular: "我们无法加载您存档的视频。请再试一次。"
              }
            }
          })
        }), (0, _v1.jsx)(_v5.Button, {
          variant: "primary",
          onClick: () => {
            _v21?.location.reload();
          },
          children: (0, _v24.translate)({
            singular: "Retry",
            dictionary: {
              es: {
                singular: "Reintentar"
              },
              "de-DE": {
                singular: "Neuer Versuch"
              },
              "fr-FR": {
                singular: "Réessayer"
              },
              "ja-JP": {
                singular: "再試行"
              },
              "ko-KR": {
                singular: "재시도"
              },
              "pt-BR": {
                singular: "TENTAR NOVAMENTE"
              },
              "zh-CN": {
                singular: "重试"
              }
            }
          })
        })]
      })
    });
    let _v26 = (0, _v28.bytesToSize)(_v14, 1),
      _v27 = (0, _v24.translate)({
        singular: "{count} video, {size} total",
        plural: "{count} videos, {size} total",
        count: _v12,
        replacements: {
          count: _v12,
          size: _v26
        },
        dictionary: {
          es: {
            singular: "{count} video, {size} en total",
            plural: "{count} videos, {size} en total"
          },
          "de-DE": {
            singular: "{count} Video, {size} insgesamt",
            plural: "{count} Videos, {size} insgesamt"
          },
          "fr-FR": {
            singular: "{count} vidéo, {size} au total",
            plural: "{count} vidéos, {size} au total"
          },
          "ja-JP": {
            singular: "{count} 件の動画、合計 {size}",
            plural: "{count} 件の動画、合計 {size}"
          },
          "ko-KR": {
            singular: "{count}개의 동영상, 총 {size}",
            plural: "{count}개의 동영상, 총 {size}"
          },
          "pt-BR": {
            singular: "{count} vídeo, {size} no total",
            plural: "{count} vídeos, {size} no total"
          },
          "zh-CN": {
            singular: "{count} 个视频, {size} 总计",
            plural: "{count} 个视频, {size} 总计"
          }
        }
      });
    return (0, _v1.jsx)(_v30.Page, {
      children: (0, _v1.jsx)(_v30.Page.Main, {
        children: (0, _v1.jsxs)(_v4.Box, {
          width: "100%",
          maxWidth: (0, _v18.rem)(0),
          margin: "0 auto",
          paddingX: {
            base: "200",
            md: "400"
          },
          paddingY: "400",
          children: [(0, _v1.jsxs)(_v6.Flex, {
            direction: "column",
            gap: "300",
            children: [(0, _v1.jsx)(_v17.Text, {
              variant: "heading-lg",
              as: "h1",
              children: (0, _v24.translate)({
                singular: "Restore archived videos",
                dictionary: {
                  es: {
                    singular: "Restaurar videos archivados"
                  },
                  "de-DE": {
                    singular: "Archivierte Videos wiederherstellen"
                  },
                  "fr-FR": {
                    singular: "Restaurer les vidéos archivées"
                  },
                  "ja-JP": {
                    singular: "アーカイブ済みの動画を復元"
                  },
                  "ko-KR": {
                    singular: "보관된 동영상 복원"
                  },
                  "pt-BR": {
                    singular: "Restaurar vídeos arquivados"
                  },
                  "zh-CN": {
                    singular: "恢复已归档的视频"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v17.Text, {
              variant: "body-lg",
              color: "text-secondary",
              children: [(0, _v24.translate)({
                singular: "Some of your videos are archived. These videos are currently hidden from your library. Click ",
                dictionary: {
                  es: {
                    singular: "Algunos de tus videos están archivados. Estos videos están actualmente ocultos en tu biblioteca. Haz clic "
                  },
                  "de-DE": {
                    singular: "Einige Ihrer Videos sind archiviert. Diese Videos sind derzeit in Ihrer Bibliothek ausgeblendet. Klicken Sie "
                  },
                  "fr-FR": {
                    singular: "Certaines de vos vidéos sont archivées. Ces vidéos sont actuellement masquées dans votre bibliothèque. Cliquez "
                  },
                  "ja-JP": {
                    singular: "一部の動画がアーカイブされています。これらの動画は現在ライブラリから非表示になっています。クリック "
                  },
                  "ko-KR": {
                    singular: "일부 동영상이 보관되어 있습니다. 이러한 동영상은 현재 라이브러리에서 숨겨져 있습니다. 클릭 "
                  },
                  "pt-BR": {
                    singular: "Alguns dos seus vídeos estão arquivados. Esses vídeos estão atualmente ocultos na sua biblioteca. Clique "
                  },
                  "zh-CN": {
                    singular: "您的一些视频已被存档。这些视频当前在您的库中被隐藏。点击 "
                  }
                }
              }), (0, _v1.jsx)(_v17.Text, {
                as: "span",
                variant: "body-lg",
                color: "text-primary",
                fontFamily: "heading",
                children: (0, _v24.translate)({
                  singular: "Restore all",
                  dictionary: {
                    es: {
                      singular: "Restaurar todo"
                    },
                    "de-DE": {
                      singular: "Alle wiederherstellen"
                    },
                    "fr-FR": {
                      singular: "Tout restaurer"
                    },
                    "ja-JP": {
                      singular: "すべてを復元"
                    },
                    "ko-KR": {
                      singular: "모두 복원"
                    },
                    "pt-BR": {
                      singular: "Restaurar tudo"
                    },
                    "zh-CN": {
                      singular: "恢复全部"
                    }
                  }
                })
              }), (0, _v24.translate)({
                singular: " to restore them to your Vimeo library. Restoration happens in the background and may take up to 24 hours. Videos are restored from oldest to newest by date of upload, until you reach the storage limit of your current plan. Videos that do not fit within your storage limit will remain archived.",
                dictionary: {
                  es: {
                    singular: " para restaurarlos en tu biblioteca de Vimeo. La restauración ocurre en segundo plano y puede tardar hasta 24 horas. Los videos se restauran de los más antiguos a los más nuevos por fecha de subida, hasta que alcances el límite de almacenamiento de tu plan actual. Los videos que no quepan dentro de tu límite de almacenamiento permanecerán archivados."
                  },
                  "de-DE": {
                    singular: " um sie in Ihre Vimeo-Bibliothek wiederherzustellen. Die Wiederherstellung läuft im Hintergrund und kann bis zu 24 Stunden dauern. Videos werden nach dem Upload-Datum vom ältesten zum neuesten wiederhergestellt, bis Sie das Speicherlimit Ihres aktuellen Tarifs erreicht haben. Videos, die nicht in Ihr Speicherlimit passen, bleiben archiviert."
                  },
                  "fr-FR": {
                    singular: " pour les restaurer dans votre bibliothèque Vimeo. La restauration s'effectue en arrière-plan et peut prendre jusqu'à 24 heures. Les vidéos sont restaurées de la plus ancienne à la plus récente selon la date de mise en ligne, jusqu'à ce que vous atteigniez la limite de stockage de votre forfait actuel. Les vidéos qui dépassent votre limite de stockage resteront archivées."
                  },
                  "ja-JP": {
                    singular: " をあなたのVimeoライブラリに復元します。復元はバックグラウンドで行われ、完了まで最大24時間かかる場合があります。動画はアップロード日の古いものから新しいものへ順に復元され、現在のプランのストレージ上限に達するまで復元されます。ストレージ上限に収まらない動画はアーカイブのままになります。"
                  },
                  "ko-KR": {
                    singular: " 동영상을 Vimeo 라이브러리에 복원합니다. 복원은 백그라운드에서 진행되며 최대 24시간이 걸릴 수 있습니다. 동영상은 업로드 날짜 기준 오래된 것부터 최신 순으로 복원되며, 현재 요금제의 저장 용량 한도에 도달할 때까지 복원됩니다. 저장 용량에 맞지 않는 동영상은 보관된 상태로 유지됩니다."
                  },
                  "pt-BR": {
                    singular: " para restaurá-los em sua biblioteca do Vimeo. A restauração acontece em segundo plano e pode levar até 24 horas. Os vídeos são restaurados do mais antigo para o mais novo, pela data de envio, até que você alcance o limite de armazenamento do seu plano atual. Vídeos que não couberem no seu limite de armazenamento permanecerão arquivados."
                  },
                  "zh-CN": {
                    singular: " 将它们恢复到您的 Vimeo 库。恢复在后台进行，可能需要长达 24 小时。视频会按上传日期从最旧到最新依次恢复，直到达到您当前方案的存储限额。超出存储限额的视频将保持存档状态。"
                  }
                }
              })]
            }), (0, _v1.jsxs)(_v6.Flex, {
              direction: "column",
              alignItems: "center",
              gap: "200",
              children: [(0, _v1.jsx)(_v17.Text, {
                variant: "heading-sm",
                children: _v27
              }), (0, _v1.jsx)(_v5.Button, {
                isDisabled: _v17 || _v18,
                isLoading: _v17,
                onClick: () => _v22(!0),
                variant: "primary",
                children: _v18 ? (0, _v24.translate)({
                  singular: "Restoration in progress",
                  dictionary: {
                    es: {
                      singular: "Restauración en curso"
                    },
                    "de-DE": {
                      singular: "Wiederherstellung läuft"
                    },
                    "fr-FR": {
                      singular: "Restauration en cours"
                    },
                    "ja-JP": {
                      singular: "復元処理が進行中です"
                    },
                    "ko-KR": {
                      singular: "복원 진행 중"
                    },
                    "pt-BR": {
                      singular: "Restauração em andamento"
                    },
                    "zh-CN": {
                      singular: "恢复进行中"
                    }
                  }
                }) : (0, _v24.translate)({
                  singular: "Restore all",
                  dictionary: {
                    es: {
                      singular: "Restaurar todo"
                    },
                    "de-DE": {
                      singular: "Alle wiederherstellen"
                    },
                    "fr-FR": {
                      singular: "Tout restaurer"
                    },
                    "ja-JP": {
                      singular: "すべてを復元"
                    },
                    "ko-KR": {
                      singular: "모두 복원"
                    },
                    "pt-BR": {
                      singular: "Restaurar tudo"
                    },
                    "zh-CN": {
                      singular: "恢复全部"
                    }
                  }
                })
              }), _v18 && (0, _v1.jsx)(_v17.Text, {
                variant: "body-md",
                color: "text-secondary",
                children: (0, _v24.translate)({
                  singular: "Your videos are being restored. This may take up to 24 hours.",
                  dictionary: {
                    es: {
                      singular: "Tus videos se están restaurando. Esto puede tardar hasta 24 horas."
                    },
                    "de-DE": {
                      singular: "Ihre Videos werden wiederhergestellt. Dies kann bis zu 24 Stunden dauern."
                    },
                    "fr-FR": {
                      singular: "Vos vidéos sont en cours de restauration. Cela peut prendre jusqu'à 24 heures."
                    },
                    "ja-JP": {
                      singular: "動画は復元中です。完了まで最大24時間かかる場合があります。"
                    },
                    "ko-KR": {
                      singular: "동영상이 복원 중입니다. 최대 24시간이 소요될 수 있습니다."
                    },
                    "pt-BR": {
                      singular: "Seus vídeos estão sendo restaurados. Isso pode levar até 24 horas."
                    },
                    "zh-CN": {
                      singular: "您的视频正在恢复。该过程可能需要长达 24 小时。"
                    }
                  }
                })
              }), null != _v16 && (0, _v1.jsx)(_v17.Text, {
                variant: "body-md",
                color: "status-negative-primary",
                role: "alert",
                children: (0, _v24.translate)({
                  singular: "We could not start the restoration. Please try again.",
                  dictionary: {
                    es: {
                      singular: "No pudimos iniciar la restauración. Por favor, inténtalo de nuevo."
                    },
                    "de-DE": {
                      singular: "Wir konnten die Wiederherstellung nicht starten. Bitte versuchen Sie es erneut."
                    },
                    "fr-FR": {
                      singular: "Nous n'avons pas pu démarrer la restauration. Veuillez réessayer."
                    },
                    "ja-JP": {
                      singular: "復元を開始できませんでした。もう一度お試しください。"
                    },
                    "ko-KR": {
                      singular: "복원을 시작할 수 없습니다. 다시 시도해 주세요."
                    },
                    "pt-BR": {
                      singular: "Não foi possível iniciar a restauração. Por favor, tente novamente."
                    },
                    "zh-CN": {
                      singular: "我们无法开始恢复。请重试。"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v45, {}), (0, _v1.jsx)(_v46, {
              videos: _v13
            }), !_v8 && !_v10 && (0, _v1.jsx)(_v29.InfiniteScrollTrigger, {
              isLoading: _v10,
              onLoadMore: _v11
            })]
          }), (0, _v1.jsxs)(_v8.Modal, {
            size: "md",
            isOpen: _v21,
            onClose: () => _v22(!1),
            children: [(0, _v1.jsx)(_v14.ModalOverlay, {}), (0, _v1.jsxs)(_v11.ModalContent, {
              children: [(0, _v1.jsxs)(_v13.ModalHeader, {
                position: "relative",
                children: [(0, _v1.jsx)(_v7.Header, {
                  size: "md",
                  children: (0, _v24.translate)({
                    singular: "Restore archived videos?",
                    dictionary: {
                      es: {
                        singular: "¿Restaurar vídeos archivados?"
                      },
                      "de-DE": {
                        singular: "Archivierte Videos wiederherstellen?"
                      },
                      "fr-FR": {
                        singular: "Restaurer les vidéos archivées ?"
                      },
                      "ja-JP": {
                        singular: "アーカイブ済みの動画を復元しますか？"
                      },
                      "ko-KR": {
                        singular: "보관된 동영상을 복원하시겠습니까?"
                      },
                      "pt-BR": {
                        singular: "Restaurar vídeos arquivados?"
                      },
                      "zh-CN": {
                        singular: "恢复已归档的视频?"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v10.ModalCloseButton, {
                  onClick: () => _v22(!1)
                })]
              }), (0, _v1.jsx)(_v9.ModalBody, {
                children: (0, _v1.jsx)(_v15.Paragraph, {
                  size: "md",
                  children: (0, _v24.translate)({
                    singular: "Your archived videos will be restored to your Vimeo library. Restoration may take up to 24 hours.",
                    dictionary: {
                      es: {
                        singular: "Tus videos archivados se restaurarán en tu biblioteca de Vimeo. La restauración puede tardar hasta 24 horas."
                      },
                      "de-DE": {
                        singular: "Ihre archivierten Videos werden in Ihre Vimeo-Bibliothek wiederhergestellt. Die Wiederherstellung kann bis zu 24 Stunden dauern."
                      },
                      "fr-FR": {
                        singular: "Vos vidéos archivées seront restaurées dans votre bibliothèque Vimeo. La restauration peut prendre jusqu'à 24 heures."
                      },
                      "ja-JP": {
                        singular: "アーカイブされた動画はあなたのVimeoライブラリに復元されます。復元には最大24時間かかる場合があります。"
                      },
                      "ko-KR": {
                        singular: "보관된 동영상이 Vimeo 라이브러리에 복원됩니다. 복원에는 최대 24시간이 걸릴 수 있습니다."
                      },
                      "pt-BR": {
                        singular: "Seus vídeos arquivados serão restaurados em sua biblioteca do Vimeo. A restauração pode levar até 24 horas."
                      },
                      "zh-CN": {
                        singular: "您的已存档视频将恢复到您的 Vimeo 库。恢复可能需要长达 24 小时。"
                      }
                    }
                  })
                })
              }), (0, _v1.jsxs)(_v12.ModalFooter, {
                children: [(0, _v1.jsx)(_v5.Button, {
                  variant: "secondary",
                  onClick: () => _v22(!1),
                  disabled: _v17,
                  children: (0, _v24.translate)({
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
                }), (0, _v1.jsx)(_v5.Button, {
                  variant: "primary",
                  onClick: () => void _v25(),
                  isLoading: _v17,
                  children: (0, _v24.translate)({
                    singular: "Restore all",
                    dictionary: {
                      es: {
                        singular: "Restaurar todo"
                      },
                      "de-DE": {
                        singular: "Alle wiederherstellen"
                      },
                      "fr-FR": {
                        singular: "Tout restaurer"
                      },
                      "ja-JP": {
                        singular: "すべてを復元"
                      },
                      "ko-KR": {
                        singular: "모두 복원"
                      },
                      "pt-BR": {
                        singular: "Restaurar tudo"
                      },
                      "zh-CN": {
                        singular: "恢复全部"
                      }
                    }
                  })
                })]
              })]
            })]
          })]
        })
      })
    });
  }
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = () => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v2.default, {
      children: (0, _v1.jsx)("title", {
        children: (0, _v49.translate)({
          singular: "Restore archived videos",
          dictionary: {
            es: {
              singular: "Restaurar videos archivados"
            },
            "de-DE": {
              singular: "Archivierte Videos wiederherstellen"
            },
            "fr-FR": {
              singular: "Restaurer les vidéos archivées"
            },
            "ja-JP": {
              singular: "アーカイブ済みの動画を復元"
            },
            "ko-KR": {
              singular: "보관된 동영상 복원"
            },
            "pt-BR": {
              singular: "Restaurar vídeos arquivados"
            },
            "zh-CN": {
              singular: "恢复已归档的视频"
            }
          }
        })
      })
    }), (0, _v1.jsx)(_v47, {})]
  });
  _v51.getLayout = (_v0, _v1) => (0, _v1.jsx)(_v50.VideoLibraryLayout, {
    hasSideNav: !1,
    hasUploader: !1,
    children: _v0
  }), (0, _v48.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0,
      hasUploader: !1
    }
  }), {
    requireLogin: !0,
    noIndex: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v51], 0);
}