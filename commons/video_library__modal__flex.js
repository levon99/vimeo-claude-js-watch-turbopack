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
  let _v21 = (0, _v2.createContext)({
      openReviewModal: () => {}
    }),
    _v22 = _v0 => !1 !== _v0.isEnabled && (!_v0.expiresOn || new Date(_v0.expiresOn).getTime() > Date.now()),
    _v23 = ({
      clipId: _v0
    }) => ((0, _v17.useInitGlobalStore)({
      clipId: String(_v0),
      trackingContextConfig: {
        pageName: "video_library",
        location: "modal"
      }
    }), (0, _v1.jsx)(_v16.ReviewLinksPanel, {})),
    _v24 = ({
      clipId: _v0,
      onClose: _v1
    }) => (0, _v1.jsxs)(_v3.Modal, {
      isOpen: !0,
      onClose: _v1,
      children: [(0, _v1.jsx)(_v7.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
        width: (0, _v8.rem)(480),
        maxW: (0, _v8.rem)(480),
        children: [(0, _v1.jsx)(_v6.ModalHeader, {
          display: "flex",
          alignItems: "center",
          gap: "2",
          pb: "4",
          children: (0, _v1.jsx)(_v15.HeaderContent, {
            showBackButton: !1,
            showPlusButton: !1,
            disablePlusButton: !0,
            onCloseButtonClick: _v1,
            children: (0, _v10.translate)({
              singular: "Review links",
              dictionary: {
                es: {
                  singular: "Enlaces de revisión"
                },
                "de-DE": {
                  singular: "Review-Links"
                },
                "fr-FR": {
                  singular: "Liens de révision"
                },
                "ja-JP": {
                  singular: "レビューリンク"
                },
                "ko-KR": {
                  singular: "리뷰 링크"
                },
                "pt-BR": {
                  singular: "Links de revisão"
                },
                "zh-CN": {
                  singular: "评论链接"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v4.ModalBody, {
          children: (0, _v1.jsx)(_v18.VideoShareViewStoreProvider, {
            children: (0, _v1.jsx)(_v23, {
              clipId: _v0
            })
          })
        })]
      })]
    }),
    _v25 = ({
      clipId: _v0,
      onError: _v1,
      onManageLinks: _v2
    }) => {
      let {
          reviewLinks: _v3,
          isLoading: _v4,
          canCreateReviewLinks: _v5
        } = (0, _v13.useGetReviewLinks)(_v0, "clip"),
        [_v6, {
          data: _v7,
          error: _v8
        }] = (0, _v9.usePostVideoReviewLinks)(),
        _v9 = (0, _v2.useRef)(!1),
        _v10 = (0, _v2.useRef)(!1),
        _v11 = (0, _v2.useCallback)(_v0 => {
          _v10.current || (_v10.current = !0, window.location.assign((0, _v20.getVideoReviewPageUrl)(_v0, _v0)));
        }, [_v0]);
      return (0, _v2.useEffect)(() => {
        if (_v4 || _v9.current) return;
        _v9.current = !0;
        let _v0 = _v3.find(_v22);
        _v0 ? _v11(_v0.uri) : _v5 ? _v6({
          where: {
            videoId: _v0
          },
          select: ["uri"],
          variables: {}
        }) : _v3.length > 0 ? _v2() : _v1();
      }, [_v4, _v3, _v5, _v0, _v6, _v11, _v1, _v2]), (0, _v2.useEffect)(() => {
        _v7?.uri && _v11(_v7.uri);
      }, [_v7, _v11]), (0, _v2.useEffect)(() => {
        _v8 && _v1();
      }, [_v8, _v1]), null;
    },
    _v26 = ({
      teamOwnerId: _v0,
      presetVideoId: _v1,
      trackDismissal: _v2,
      onDisplayed: _v3,
      onVideoConfirmed: _v4,
      onClose: _v5
    }) => {
      let _v6 = null !== _v1,
        [_v7, _v8] = (0, _v2.useState)(_v1),
        [_v9, _v10] = (0, _v2.useState)(!1);
      (0, _v12.usePicoEffect)(() => {
        _v6 || _v3();
      }, [_v3, _v6], {
        once: !0
      });
      let _v11 = (0, _v2.useRef)(!1);
      (0, _v2.useEffect)(() => {
        _v6 && !_v11.current && (_v11.current = !0, _v4());
      }, [_v6, _v4]);
      let _v12 = (0, _v2.useRef)(!1),
        _v13 = (0, _v2.useRef)(null),
        _v14 = (0, _v2.useCallback)(_v0 => {
          if (!_v0) return;
          let _v1 = Number(_v0.split("/").pop());
          if (_v1) return _v12.current = !0, _v4(), _v8(_v1), new Promise(_v0 => {
            _v13.current = _v0;
          });
        }, [_v4]),
        _v15 = (0, _v2.useCallback)(() => {
          _v13.current?.(), _v12.current = !1, _v8(null), _v5();
        }, [_v5]),
        _v16 = (0, _v2.useCallback)(() => {
          _v13.current?.(), _v10(!0);
        }, []);
      return _v9 && null !== _v7 ? (0, _v1.jsx)(_v24, {
        clipId: _v7,
        onClose: () => {
          _v2("review_links_panel"), _v5();
        }
      }) : _v6 ? null !== _v7 ? (0, _v1.jsx)(_v25, {
        clipId: _v7,
        onError: _v15,
        onManageLinks: _v16
      }) : null : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v14.VideoListModal, {
          closeVideoModal: () => {
            _v12.current || (_v2("select_video_modal"), _v5());
          },
          isVideoListModalOpen: !0,
          resourceId: 0,
          resourceOwnerId: _v0,
          type: "create_review_link",
          selectedVideo: null,
          onSuccess: _v14
        }), null !== _v7 && (0, _v1.jsx)(_v25, {
          clipId: _v7,
          onError: _v15,
          onManageLinks: _v16
        })]
      });
    };
  _v0.s(["ReviewModalProvider", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v19.useViewer)(),
      _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      [_v3, _v4] = (0, _v2.useState)(!1),
      [_v5, _v6] = (0, _v2.useState)(null),
      [_v7, _v8] = (0, _v2.useState)(null),
      {
        trackReviewCtaDismissed: _v9,
        trackReviewEntryPointVideoConfirmed: _v10,
        trackReviewSelectVideoModalDisplayed: _v11
      } = (0, _v11.useMaximizeReviewAdoptionTracking)(),
      _v12 = (0, _v2.useCallback)((_v0, _v1) => {
        _v6(_v0), _v8(_v1?.videoId ?? null), _v4(!0);
      }, []),
      _v13 = (0, _v2.useCallback)(_v0 => {
        _v5 && _v9({
          dismissalStage: _v0,
          entryPoint: _v5
        });
      }, [_v5, _v9]),
      _v14 = (0, _v2.useCallback)(() => {
        _v5 && _v11({
          entryPoint: _v5
        });
      }, [_v5, _v11]),
      _v15 = (0, _v2.useCallback)(() => {
        _v5 && _v10({
          entryPoint: _v5
        });
      }, [_v5, _v10]);
    return (0, _v1.jsxs)(_v21.Provider, {
      value: {
        openReviewModal: _v12
      },
      children: [_v0, _v3 && (0, _v1.jsx)(_v26, {
        teamOwnerId: _v2,
        presetVideoId: _v7,
        trackDismissal: _v13,
        onDisplayed: _v14,
        onVideoConfirmed: _v15,
        onClose: () => _v4(!1)
      })]
    });
  }, "useReviewModal", 0, () => (0, _v2.useContext)(_v21)]);
}