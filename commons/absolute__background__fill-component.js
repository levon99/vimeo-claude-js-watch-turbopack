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
    _v15 = _v0.i(0);
  let _v16 = (0, _v2.default)(async () => {
      let {
        VideoCardPlayer: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v17 = ({
      hasPlayOnHover: _v0,
      clipId: _v1,
      configUrl: _v2,
      playerInitEvent: _v3,
      isHovering: _v4,
      quality: _v5,
      objectFit: _v6,
      setIsPlayerReady: _v7,
      isDefaultPicture: _v8,
      thumbnailSrc: _v9,
      thumbnailSrcSet: _v10,
      aspectRatio: _v11,
      isPlayerReady: _v12,
      isColdStorage: _v13,
      spinnerSize: _v14,
      defaultIconProps: _v15,
      thumbnailClickEvent: _v16,
      isSelectable: _v17,
      selectionType: _v18,
      hoverActions: _v19,
      videoPrivacy: _v20,
      privacyBadgeVariant: _v21,
      onPrivacyBadgeClick: _v22,
      privacyBadgeTooltip: _v23,
      managedStorageIndicator: _v24,
      tagText: _v25,
      tagTextVariant: _v26,
      tagTextStyles: _v27,
      topLeftDecoration: _v28,
      progress: _v29
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v0 && (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsx)(_v6.Box, {
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: "0",
          border: "0",
          children: _v1 && _v2 && (0, _v1.jsx)(_v16, {
            clipId: _v1,
            configUrl: _v2,
            initEvent: _v3,
            isHovering: _v4,
            quality: _v5,
            objectFit: _v6,
            setIsPlayerReady: _v7
          })
        })
      }), _v8 ? (0, _v1.jsx)(_v6.Box, {
        background: "background",
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: "0",
        border: "0",
        borderRadius: "md",
        opacity: _v12 && _v4 ? 0 : 1,
        children: (0, _v1.jsx)(_v6.Box, {
          background: "background",
          opacity: "0.6",
          children: (0, _v1.jsx)(_v14.ContentCard.DefaultThumbnail, {
            background: "fill-component",
            isLocked: _v13,
            onClick: _v16,
            children: (0, _v1.jsx)(_v12.PlayerFilled, {
              color: "text-secondary",
              boxSize: "2xl",
              opacity: "0.4",
              ..._v15
            })
          })
        })
      }) : (0, _v1.jsx)(_v14.ContentCard.Thumbnail, {
        alt: "",
        src: _v9,
        srcSet: _v10,
        aspectRatio: _v11,
        opacity: _v12 && _v4 ? 0 : 1,
        isLocked: _v13,
        onClick: _v16
      }), _v4 && !_v12 && !_v13 && (0, _v1.jsx)(_v7.Flex, {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        background: "transparent",
        onClick: _v16,
        children: (0, _v1.jsx)(_v9.Spinner, {
          size: _v14
        })
      }), _v17 && (0, _v1.jsx)(_v7.Flex, {
        position: "absolute",
        top: "8px",
        left: "8px",
        onClick: _v0 => {
          _v0.stopPropagation();
        },
        children: "checkbox" === _v18 ? (0, _v1.jsx)(_v14.ContentCard.SelectCheckbox, {
          size: "md"
        }) : (0, _v1.jsx)(_v14.ContentCard.SelectRadio, {
          size: "lg"
        })
      }), _v19, (0, _v1.jsx)(_v14.ContentCard.VideoPrivacyBadge, {
        videoPrivacy: _v20,
        variant: _v21,
        onClick: _v22,
        layout: "overlay",
        tooltipLabel: _v23
      }), _v24, (0, _v1.jsx)(_v14.ContentCard.Badge, {
        variant: _v26,
        sx: _v27,
        children: _v25
      }), _v28 && (0, _v1.jsx)(_v14.ContentCard.Badge, {
        bgColor: "transparent",
        backdropFilter: "none",
        top: (0, _v11.rem)(16),
        left: (0, _v11.rem)(8),
        border: "none",
        children: _v28
      }), _v29 > 0 && (0, _v1.jsx)(_v8.Progress, {
        "aria-label": `${_v29}% complete`,
        bottom: "0",
        left: "4px",
        position: "absolute",
        size: "xs",
        value: _v29,
        width: "calc(100% - 8px)",
        sx: {
          bgColor: "gray.500",
          borderTopRadius: "0",
          borderBottomRadius: "md"
        }
      })]
    });
  _v0.s(["VideoCard", 0, ({
    title: _v0,
    subtitle: _v1,
    href: _v2,
    isDefaultPicture: _v3,
    thumbnailSrc: _v4,
    thumbnailSrcSet: _v5,
    avatarSrc: _v6,
    avatarName: _v7,
    showAvatar: _v8 = !0,
    tagText: _v9,
    tagTextStyles: _v10,
    tagTextVariant: _v11,
    actionsMenu: _v12,
    hoverActions: _v13,
    isSelectable: _v14 = !1,
    isSelected: _v15 = !1,
    onClick: _v16,
    onToggleSelected: _v17,
    onMouseEnter: _v18,
    playerInitEvent: _v19 = "hover",
    selectionType: _v20 = "checkbox",
    clipId: _v21,
    configUrl: _v22,
    quality: _v23,
    objectFit: _v24,
    aspectRatio: _v25,
    spinnerSize: _v26 = "md",
    topLeftDecoration: _v27,
    titleStyles: _v28,
    defaultIconProps: _v29,
    tabIndex: _v30,
    creator: _v31,
    shouldUseNextLink: _v32 = !0,
    pageName: _v33 = "",
    hasPlayOnHover: _v34 = !0,
    progress: _v35 = 0,
    hasFollow: _v36,
    followSource: _v37,
    isColdStorage: _v38 = !1,
    lockedTooltipLabel: _v39,
    videoPrivacy: _v40,
    privacyBadgeVariant: _v41 = "default",
    onPrivacyBadgeClick: _v42,
    privacyBadgeTooltip: _v43,
    managedStorageIndicator: _v44,
    editableTitle: _v45,
    isEditingContentTitle: _v46
  }) => {
    let {
        settings: _v47
      } = (0, _v13.useOrionSettings)(),
      [_v48, _v49] = (0, _v3.useState)(!1),
      [_v50, _v51] = (0, _v3.useState)(!1),
      _v52 = "sm" === _v26,
      _v53 = () => {
        _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 151, {
          copy: _v0,
          feature: "video_library",
          location: "video_card",
          name: "video_card_thumbnail",
          page: _v33,
          path: null,
          target: _v2 ?? null,
          target_path: null,
          type: "general",
          click_type: null,
          device_type: null,
          third_party_integration: null
        }));
      },
      _v54 = null;
    if (_v8) {
      let _v0 = (0, _v1.jsx)(_v5.Avatar, {
        alt: _v7 || "",
        size: "xs",
        src: _v6,
        nameProps: {
          name: _v7 || ""
        }
      });
      _v54 = _v7 && _v47.enable_uploader_tooltip ? (0, _v1.jsx)(_v10.Tooltip, {
        label: _v7,
        children: (0, _v1.jsx)(_v6.Box, {
          display: "inline-flex",
          pointerEvents: "auto",
          children: _v0
        })
      }) : _v0;
    }
    return (0, _v1.jsx)(_v14.ContentCard, {
      isSelected: _v15,
      onClick: _v16,
      onToggleSelected: _v17,
      href: _v2,
      ariaLabel: "Video card",
      tabIndex: _v30,
      shouldUseNextLink: _v32,
      hoverZIndex: _v38 && _v39 ? 25 : void 0,
      onMouseEnter: _v0 => {
        _v18?.(_v0), _v34 && _v51(!0);
      },
      onMouseLeave: _v34 ? () => {
        _v51(!1);
      } : void 0,
      isEditingContentTitle: _v46,
      children: (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v14.ContentCard.Body, {
          aspectRatio: _v25,
          children: _v38 && _v39 ? (0, _v1.jsx)(_v15.ColdStorageThumbTooltip, {
            label: _v39,
            compactGridTooltip: _v52,
            children: (0, _v1.jsx)(_v17, {
              hasPlayOnHover: _v34,
              clipId: _v21,
              configUrl: _v22,
              playerInitEvent: _v19,
              isHovering: _v50,
              quality: _v23,
              objectFit: _v24,
              setIsPlayerReady: _v49,
              isDefaultPicture: !!_v3,
              thumbnailSrc: _v4,
              thumbnailSrcSet: _v5,
              aspectRatio: _v25,
              isPlayerReady: _v48,
              isColdStorage: _v38,
              spinnerSize: _v26,
              defaultIconProps: _v29,
              thumbnailClickEvent: _v53,
              isSelectable: _v14,
              selectionType: _v20,
              hoverActions: _v13,
              videoPrivacy: _v40,
              privacyBadgeVariant: _v41,
              onPrivacyBadgeClick: _v42,
              privacyBadgeTooltip: _v43,
              managedStorageIndicator: _v44,
              tagText: _v9,
              tagTextVariant: _v11,
              tagTextStyles: _v10,
              topLeftDecoration: _v27,
              progress: _v35
            })
          }) : (0, _v1.jsx)(_v17, {
            hasPlayOnHover: _v34,
            clipId: _v21,
            configUrl: _v22,
            playerInitEvent: _v19,
            isHovering: _v50,
            quality: _v23,
            objectFit: _v24,
            setIsPlayerReady: _v49,
            isDefaultPicture: !!_v3,
            thumbnailSrc: _v4,
            thumbnailSrcSet: _v5,
            aspectRatio: _v25,
            isPlayerReady: _v48,
            isColdStorage: _v38,
            spinnerSize: _v26,
            defaultIconProps: _v29,
            thumbnailClickEvent: _v53,
            isSelectable: _v14,
            selectionType: _v20,
            hoverActions: _v13,
            videoPrivacy: _v40,
            privacyBadgeVariant: _v41,
            onPrivacyBadgeClick: _v42,
            privacyBadgeTooltip: _v43,
            managedStorageIndicator: _v44,
            tagText: _v9,
            tagTextVariant: _v11,
            tagTextStyles: _v10,
            topLeftDecoration: _v27,
            progress: _v35
          })
        }), (0, _v1.jsx)(_v14.ContentCard.Footer, {
          actions: _v12,
          avatar: _v54,
          title: _v0,
          subtitle: _v1,
          isLocked: _v38,
          titleStyles: _v28,
          creator: _v31,
          href: _v2,
          shouldUseNextLink: _v32,
          onTitleClick: () => {
            _v4.BigPictureClient.sendEvent(new _v4.Event("vimeo.click", 151, {
              copy: _v0,
              feature: "video_library",
              location: "video_card",
              name: "video_card_title",
              page: _v33,
              path: null,
              target: _v2 ?? null,
              target_path: null,
              type: "general",
              click_type: null,
              device_type: null,
              third_party_integration: null
            }));
          },
          editableTitle: _v45,
          isEditingContentTitle: _v46,
          hasFollow: _v36,
          followSource: _v37
        })]
      })
    });
  }]);
}