{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.i(0);
  var _v5 = _v0.i(0),
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
    _v18 = _v0.i(0);
  let _v19 = _v4.default.lazy(async () => {
      let {
        PublishToSocialModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }),
    _v20 = (0, _v2.default)(async () => {
      let {
        Groups: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v21 = (0, _v2.default)(async () => {
      let {
        Channels: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v22 = (0, _v2.default)(async () => {
      let {
        Portfolios: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v23 = (0, _v2.default)(async () => {
      let {
        ExportToLMSModal: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    });
  _v0.s(["PublishModal", 0, ({
    activeModal: _v0,
    closeModal: _v1,
    onPrivacyClick: _v2,
    onGifClick: _v3,
    reloadPlayer: _v4,
    video: _v5,
    videoId: _v6,
    defaultNetwork: _v7
  }) => {
    let _v8 = (0, _v17.useAppSelector)(_v13.clipManageLinkSelector),
      _v9 = (0, _v17.useAppSelector)(_v14.clipEditSessionSelector),
      _v10 = (0, _v17.useAppSelector)(_v16.isRemovingWatermarkSelector),
      _v11 = (0, _v17.useAppSelector)(_v15.clipEmbedPlayerConfigUrlSelector),
      _v12 = (0, _v4.useContext)(_v8.ViewerContext),
      _v13 = _v5.editSession?.isMaxResolution,
      _v14 = (0, _v10.useCoreCreateMigrationStatus)(!!_v5.editSession),
      {
        capabilities: {
          hasPrivateModeOff: _v15,
          hasVideoInEmail: _v16
        }
      } = (0, _v6.useCapability)(["hasPrivateModeOff", "hasVideoInEmail"], _v5.user.uri),
      _v17 = (0, _v3.useRouter)(),
      _v18 = (0, _v11.idFromUri)(_v5.user.uri),
      _v19 = () => {
        _v8 && _v17.replace(_v8, void 0, {
          shallow: !0
        }), _v1();
      },
      _v20 = (0, _v5.useDispatch)(),
      _v21 = (0, _v4.useCallback)(_v0 => {
        _v20((0, _v12.setIsRemovingWatermark)(_v0));
      }, [_v20]),
      _v22 = _v14 && _v9?.hasWatermark && _v10,
      _v23 = (0, _v4.useCallback)(() => {
        _v4(_v11);
      }, [_v4, _v11]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(() => {
        switch (_v0) {
          case "channel":
            return (0, _v1.jsx)(_v21, {
              onClose: _v1,
              videoId: _v6,
              videoName: _v5.name,
              ownerId: _v18,
              pageName: "svv"
            });
          case "embed_in_email":
            return (0, _v1.jsx)(_v7.EmbedInEmailModal, {
              videoId: _v6,
              hasPrivateModeOff: _v15,
              showUpsell: !_v16,
              onClose: _v19,
              onEditPrivacy: _v2,
              onNewGif: _v3
            });
          case "export_for_lms":
            return (0, _v1.jsx)(_v23, {
              onClose: _v1,
              videoId: _v6,
              ownerId: _v18
            });
          case "group":
            return (0, _v1.jsx)(_v20, {
              onClose: _v1,
              videoId: _v6,
              videoName: _v5.name,
              ownerId: _v18,
              pageName: "svv"
            });
          case "portfolio":
            return (0, _v1.jsx)(_v22, {
              onClose: _v1,
              videoId: _v6,
              videoName: _v5.name,
              ownerId: _v18,
              pageName: "svv"
            });
          case "publish_to_social":
            let _v0 = _v12?.user ?? null,
              _v1 = {
                jwt: _v12?.jwt || "",
                url: _v12?.apiUrl || "",
                locale: _v12?.locale || "en",
                owner: _v0 && {
                  id: _v0.id,
                  accountTypeText: _v0.account
                },
                clipOwnerId: _v18
              };
            return (0, _v1.jsx)(_v4.Suspense, {
              fallback: (0, _v1.jsx)(_v1.Fragment, {}),
              children: (0, _v1.jsx)(_v19, {
                clipId: _v6,
                xsrft: _v12?.xsrft || "",
                onSubmit: _v19,
                onCancel: _v19,
                onReset: () => {},
                published: !0,
                imageDir: "https://f.vimeocdn.com/images_v6/",
                isMaxResolution: _v13,
                config: _v1,
                video: _v5,
                setIsRemovingWatermark: _v21,
                hasNewVcUx: _v14,
                analyticsLocation: "svv_publish_menu",
                defaultNetwork: _v7
              })
            });
          case "upgrade_publish":
            return (0, _v1.jsx)(_v18.BlockerModeModal, {
              trigger: "upgrade_publish",
              close: _v1,
              video: _v5,
              videoId: _v6,
              active: !0
            });
          default:
            return (0, _v1.jsx)(_v1.Fragment, {});
        }
      })(), _v22 && (0, _v1.jsx)(_v9.RemoveWatermarkProcessingModal, {
        isActive: _v10,
        videoId: _v6,
        setIsRemovingWatermark: _v21,
        onWatermarkRemoveSuccess: _v23
      })]
    });
  }]);
}