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
  let _v21 = ["uri", "name", "description", "link", "duration", "pictures", "configUrl"],
    _v22 = {
      Accept: "application/vnd.vimeo.*+json;version=3.4.1"
    },
    _v23 = new Set(),
    _v24 = {
      borderRadius: "var(--vimeo-radii-lg)",
      backgroundColor: "color-mix(in srgb, var(--vimeo-colors-fill-brand) 9%, var(--vimeo-colors-surface))",
      animation: "marketingCardGlow 2.6s ease-in-out infinite",
      "@keyframes marketingCardGlow": {
        "0%, 100%": {
          boxShadow: "0 0 0 1px color-mix(in srgb, var(--vimeo-colors-fill-brand) 55%, transparent), 0 0 12px 2px color-mix(in srgb, var(--vimeo-colors-fill-brand) 22%, transparent)"
        },
        "50%": {
          boxShadow: "0 0 0 1px color-mix(in srgb, var(--vimeo-colors-fill-brand) 75%, transparent), 0 0 22px 6px color-mix(in srgb, var(--vimeo-colors-fill-brand) 45%, transparent)"
        }
      },
      "@media (prefers-reduced-motion: reduce)": {
        animation: "none",
        boxShadow: "0 0 0 1px color-mix(in srgb, var(--vimeo-colors-fill-brand) 60%, transparent), 0 0 16px 4px color-mix(in srgb, var(--vimeo-colors-fill-brand) 35%, transparent)"
      }
    },
    _v25 = {
      ..._v24,
      borderRadius: "var(--vimeo-radii-md)"
    },
    _v26 = () => (0, _v1.jsx)(_v4.Flex, {
      "aria-hidden": "true",
      flexShrink: 0,
      boxSize: "24px",
      borderRadius: "full",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "var(--vimeo-colors-fill-brand)",
      children: (0, _v1.jsx)(_v10.VimeoV, {
        boxSize: "13px",
        color: "var(--vimeo-colors-white)"
      })
    });
  _v0.s(["MarketingVideoCard", 0, ({
    variant: _v0,
    videoId: _v1,
    entryPoint: _v2,
    onDismiss: _v3
  }) => {
    var _v4;
    let {
        trackLibraryMarketingCardDisplayed: _v5,
        trackLibraryMarketingCardClicked: _v6,
        trackLibraryMarketingCardDismissed: _v7
      } = (0, _v17.useLibraryTracking)(),
      _v8 = Number(_v1),
      {
        data: _v9,
        isLoading: _v10
      } = (0, _v15.useGetVideo)(() => Number.isFinite(_v8) && "" !== _v1 ? {
        where: {
          videoId: _v8
        },
        select: _v21,
        headers: _v22
      } : null),
      [_v11, _v12] = (0, _v2.useState)(!1),
      [_v13, _v14] = (0, _v2.useState)(!1),
      _v15 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      !_v15.current && _v9 && (_v15.current = !0, _v5({
        videoId: _v1,
        entryPoint: _v2
      }));
    }, [_v9, _v1, _v2, _v5]);
    let _v16 = _v9?.link ?? "",
      _v17 = _v9?.name ?? "",
      _v18 = (_v4 = _v9?.pictures?.sizes) && 0 !== _v4.length ? _v4[3]?.link ?? _v4[_v4.length - 1]?.link ?? "" : "",
      _v19 = _v9?.pictures?.defaultPicture ?? !_v18,
      _v20 = _v9?.configUrl ?? "",
      _v21 = _v9?.duration != null ? (0, _v14.secondsToDisplay)(_v9.duration) : "",
      _v22 = (0, _v16.translate)({
        singular: "From Vimeo",
        dictionary: {
          es: {
            singular: "Desde Vimeo"
          },
          "de-DE": {
            singular: "Von Vimeo"
          },
          "fr-FR": {
            singular: "De Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoから"
          },
          "ko-KR": {
            singular: "Vimeo에서"
          },
          "pt-BR": {
            singular: "Do Vimeo"
          },
          "zh-CN": {
            singular: "来自 Vimeo"
          }
        }
      }),
      _v23 = (0, _v16.translate)({
        singular: "Latest improvements",
        dictionary: {
          es: {
            singular: "Últimas mejoras"
          },
          "de-DE": {
            singular: "Neueste Verbesserungen"
          },
          "fr-FR": {
            singular: "Dernières améliorations"
          },
          "ja-JP": {
            singular: "最新の改善点"
          },
          "ko-KR": {
            singular: "최근 개선 사항"
          },
          "pt-BR": {
            singular: "Últimas melhorias"
          },
          "zh-CN": {
            singular: "最新改进"
          }
        }
      }),
      _v24 = (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v3.Box, {
          as: "span",
          color: "vimeoBlue.500",
          children: _v22
        }), ` • ${_v23}`]
      }),
      _v25 = () => {
        _v6({
          videoId: _v1,
          entryPoint: _v2
        });
      },
      _v26 = _v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v7({
          videoId: _v1,
          entryPoint: _v2
        }), _v3();
      };
    if (!_v10 && !_v9) return null;
    if ("grid" === _v0) {
      let _v0 = (0, _v1.jsx)(_v5.IconButton, {
        "aria-label": (0, _v16.translate)({
          singular: "Dismiss",
          dictionary: {
            es: {
              singular: "Descartar"
            },
            "de-DE": {
              singular: "Information verwerfen"
            },
            "fr-FR": {
              singular: "Ignorer"
            },
            "ja-JP": {
              singular: "閉じる"
            },
            "ko-KR": {
              singular: "닫기"
            },
            "pt-BR": {
              singular: "Ignorar"
            },
            "zh-CN": {
              singular: "拒绝"
            }
          }
        }),
        icon: (0, _v1.jsx)(_v9.CloseX, {}),
        size: "sm",
        variant: "ghost",
        color: "var(--vimeo-colors-white)",
        backgroundColor: "var(--vimeo-colors-fill-page-overlay)",
        borderRadius: "sm",
        onClick: _v26
      });
      return (0, _v1.jsx)(_v3.Box, {
        position: "relative",
        sx: _v24,
        onMouseEnter: () => _v12(!0),
        onMouseLeave: () => _v12(!1),
        children: _v10 ? (0, _v1.jsxs)(_v3.Box, {
          padding: "xs",
          children: [(0, _v1.jsx)(_v6.Skeleton, {
            width: "100%",
            sx: {
              aspectRatio: "16 / 9"
            },
            borderRadius: "md"
          }), (0, _v1.jsx)(_v6.Skeleton, {
            height: "16px",
            width: "80%",
            marginTop: "sm"
          }), (0, _v1.jsx)(_v6.Skeleton, {
            height: "14px",
            width: "50%",
            marginTop: "2xs"
          })]
        }) : (0, _v1.jsxs)(_v11.ContentCard, {
          href: _v16,
          onClick: _v25,
          ariaLabel: _v17,
          shouldUseNextLink: !1,
          children: [(0, _v1.jsxs)(_v11.ContentCard.Body, {
            children: [!!_v20 && (0, _v1.jsx)(_v3.Box, {
              position: "absolute",
              inset: "0",
              children: (0, _v1.jsx)(_v12.VideoCardPlayer, {
                clipId: _v8,
                configUrl: _v20,
                initEvent: "hover",
                isHovering: _v11,
                setIsPlayerReady: _v14
              })
            }), (0, _v1.jsx)(_v11.ContentCard.Thumbnail, {
              alt: "",
              src: _v18,
              opacity: _v13 && _v11 ? 0 : 1
            }), _v11 && !_v13 && (0, _v1.jsx)(_v4.Flex, {
              position: "absolute",
              inset: "0",
              alignItems: "center",
              justifyContent: "center",
              children: (0, _v1.jsx)(_v7.Spinner, {
                size: "md"
              })
            }), (0, _v1.jsx)(_v3.Box, {
              position: "absolute",
              top: "sm",
              right: "sm",
              "data-clickable": !0,
              children: _v0
            }), "" !== _v21 && (0, _v1.jsx)(_v11.ContentCard.Badge, {
              children: _v21
            })]
          }), (0, _v1.jsx)(_v11.ContentCard.ComposableFooter, {
            children: (0, _v1.jsx)(_v4.Flex, {
              width: "100%",
              maxWidth: "100%",
              children: (0, _v1.jsxs)(_v4.Flex, {
                direction: "row",
                grow: "1",
                gap: "sm",
                width: "100%",
                children: [(0, _v1.jsx)(_v3.Box, {
                  display: "block",
                  children: (0, _v1.jsx)(_v26, {})
                }), (0, _v1.jsxs)(_v4.Flex, {
                  direction: "column",
                  gap: "xs",
                  minW: 0,
                  width: "100%",
                  children: [(0, _v1.jsx)(_v8.Text, {
                    variant: "heading-xs",
                    noOfLines: 1,
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    display: "block",
                    sx: {
                      maxWidth: _v18.CONTENT_CARD_TITLE_MAX_WIDTH
                    },
                    children: _v17
                  }), (0, _v1.jsx)(_v8.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    noOfLines: 1,
                    children: _v24
                  })]
                })]
              })
            })
          })]
        })
      });
    }
    return _v10 ? (0, _v1.jsxs)(_v4.Flex, {
      alignItems: "center",
      gap: "md",
      paddingY: "sm",
      paddingX: "md",
      sx: _v25,
      children: [(0, _v1.jsx)(_v6.Skeleton, {
        width: "120px",
        height: "68px",
        borderRadius: "sm",
        flexShrink: 0
      }), (0, _v1.jsx)(_v6.Skeleton, {
        height: "16px",
        width: "240px"
      })]
    }) : (0, _v1.jsx)(_v3.Box, {
      sx: _v25,
      children: (0, _v1.jsx)(_v20.DraggableListVideo, {
        type: _v19.ITEM_TYPES.ROOT_VIDEO,
        uri: _v9?.uri ?? "",
        parentFolderUri: "root",
        selectedItemURIs: _v23,
        canDrag: !1,
        onDragEnd: () => void 0,
        isSelectable: !1,
        isSelected: !1,
        title: _v17,
        subTitle: _v24,
        timestamp: "",
        thumbnail: (0, _v1.jsx)(_v13.VideoThumbnail, {
          alt: _v17,
          badgeText: _v21,
          isDefaultPicture: _v19,
          thumbnailSrc: _v18
        }),
        thumbnailSrc: _v18,
        href: _v16,
        pageName: "video_library",
        v2PageName: "video_library",
        clipId: _v8,
        onClick: _v25,
        menuButton: (0, _v1.jsx)(_v5.IconButton, {
          "aria-label": (0, _v16.translate)({
            singular: "Dismiss",
            dictionary: {
              es: {
                singular: "Descartar"
              },
              "de-DE": {
                singular: "Information verwerfen"
              },
              "fr-FR": {
                singular: "Ignorer"
              },
              "ja-JP": {
                singular: "閉じる"
              },
              "ko-KR": {
                singular: "닫기"
              },
              "pt-BR": {
                singular: "Ignorar"
              },
              "zh-CN": {
                singular: "拒绝"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v9.CloseX, {}),
          size: "md",
          variant: "tertiary",
          onClick: _v26
        })
      })
    });
  }]);
}