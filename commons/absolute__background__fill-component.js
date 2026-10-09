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
      setIsPlayerBroken: _v8,
      isDefaultPicture: _v9,
      thumbnailSrc: _v10,
      thumbnailSrcSet: _v11,
      aspectRatio: _v12,
      isPlayerReady: _v13,
      isPlayerBroken: _v14,
      isColdStorage: _v15,
      spinnerSize: _v16,
      defaultIconProps: _v17,
      thumbnailClickEvent: _v18,
      isSelectable: _v19,
      selectionType: _v20,
      hoverActions: _v21,
      videoPrivacy: _v22,
      privacyBadgeVariant: _v23,
      onPrivacyBadgeClick: _v24,
      privacyBadgeTooltip: _v25,
      managedStorageIndicator: _v26,
      tagText: _v27,
      tagTextVariant: _v28,
      tagTextStyles: _v29,
      topLeftDecoration: _v30,
      progress: _v31
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v0 && (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsx)(_v5.Box, {
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
            setIsPlayerReady: _v7,
            setIsPlayerBroken: _v8
          })
        })
      }), _v9 ? (0, _v1.jsx)(_v5.Box, {
        background: "background",
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: "0",
        border: "0",
        borderRadius: "md",
        opacity: _v13 && _v4 ? 0 : 1,
        children: (0, _v1.jsx)(_v5.Box, {
          background: "background",
          opacity: "0.6",
          children: (0, _v1.jsx)(_v14.ContentCard.DefaultThumbnail, {
            background: "fill-component",
            isLocked: _v15,
            onClick: _v18,
            children: (0, _v1.jsx)(_v12.PlayerFilled, {
              color: "text-secondary",
              boxSize: "2xl",
              opacity: "0.4",
              ..._v17
            })
          })
        })
      }) : (0, _v1.jsx)(_v14.ContentCard.Thumbnail, {
        alt: "",
        src: _v10,
        srcSet: _v11,
        aspectRatio: _v12,
        opacity: _v13 && _v4 ? 0 : 1,
        isLocked: _v15,
        onClick: _v18
      }), _v4 && !_v13 && !_v14 && !_v15 && (0, _v1.jsx)(_v6.Flex, {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        background: "transparent",
        onClick: _v18,
        children: (0, _v1.jsx)(_v8.Spinner, {
          size: _v16
        })
      }), _v19 && (0, _v1.jsx)(_v6.Flex, {
        position: "absolute",
        top: "8px",
        left: "8px",
        onClick: _v0 => {
          _v0.stopPropagation();
        },
        children: "checkbox" === _v20 ? (0, _v1.jsx)(_v14.ContentCard.SelectCheckbox, {
          size: "md"
        }) : (0, _v1.jsx)(_v14.ContentCard.SelectRadio, {
          size: "lg"
        })
      }), _v21, (0, _v1.jsx)(_v14.ContentCard.VideoPrivacyBadge, {
        videoPrivacy: _v22,
        variant: _v23,
        onClick: _v24,
        layout: "overlay",
        tooltipLabel: _v25
      }), _v26, (0, _v1.jsx)(_v14.ContentCard.Badge, {
        variant: _v28,
        sx: _v29,
        children: _v27
      }), _v30 && (0, _v1.jsx)(_v14.ContentCard.Badge, {
        bgColor: "transparent",
        backdropFilter: "none",
        top: (0, _v11.rem)(16),
        left: (0, _v11.rem)(8),
        border: "none",
        children: _v30
      }), _v31 > 0 && (0, _v1.jsx)(_v7.Progress, {
        "aria-label": `${_v31}% complete`,
        bottom: "0",
        left: "4px",
        position: "absolute",
        size: "xs",
        value: _v31,
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
    showAvatarInSubtitle: _v9 = !1,
    typeIcon: _v10,
    tagText: _v11,
    tagTextStyles: _v12,
    tagTextVariant: _v13,
    actionsMenu: _v14,
    hoverActions: _v15,
    isSelectable: _v16 = !1,
    isSelected: _v17 = !1,
    onClick: _v18,
    onToggleSelected: _v19,
    onMouseEnter: _v20,
    playerInitEvent: _v21 = "hover",
    selectionType: _v22 = "checkbox",
    clipId: _v23,
    configUrl: _v24,
    quality: _v25,
    objectFit: _v26,
    aspectRatio: _v27,
    spinnerSize: _v28 = "md",
    topLeftDecoration: _v29,
    titleStyles: _v30,
    defaultIconProps: _v31,
    tabIndex: _v32,
    creator: _v33,
    shouldUseNextLink: _v34 = !0,
    hasPlayOnHover: _v35 = !0,
    progress: _v36 = 0,
    hasFollow: _v37,
    followSource: _v38,
    isColdStorage: _v39 = !1,
    lockedTooltipLabel: _v40,
    videoPrivacy: _v41,
    privacyBadgeVariant: _v42 = "default",
    onPrivacyBadgeClick: _v43,
    privacyBadgeTooltip: _v44,
    managedStorageIndicator: _v45,
    editableTitle: _v46,
    isEditingContentTitle: _v47
  }) => {
    let _v48 = (0, _v13.useOrionSetting)("enable_uploader_tooltip"),
      [_v49, _v50] = (0, _v3.useState)(!1),
      [_v51, _v52] = (0, _v3.useState)(!1),
      [_v53, _v54] = (0, _v3.useState)(!1),
      _v55 = "sm" === _v28,
      _v56 = () => void 0,
      _v57 = null;
    if ("" !== _v6 && (_v8 || _v9)) {
      let _v0 = (0, _v1.jsx)(_v4.Avatar, {
        alt: _v7 || "",
        size: "xs",
        src: _v6,
        nameProps: {
          name: _v7 || ""
        }
      });
      _v57 = _v7 && _v48 ? (0, _v1.jsx)(_v10.Tooltip, {
        label: _v7,
        children: (0, _v1.jsx)(_v5.Box, {
          display: "inline-flex",
          pointerEvents: "auto",
          children: _v0
        })
      }) : _v0;
    }
    let _v58 = _v9 && null != _v57 ? (0, _v1.jsxs)(_v6.Flex, {
      alignItems: "center",
      gap: "xs",
      children: [_v57, (0, _v1.jsx)(_v9.Text, {
        variant: "body-sm",
        color: "text-tertiary",
        noOfLines: 1,
        children: `\xb7 ${_v1}`
      })]
    }) : _v1;
    return (0, _v1.jsx)(_v14.ContentCard, {
      isSelected: _v17,
      onClick: _v18,
      onToggleSelected: _v19,
      href: _v2,
      ariaLabel: "Video card",
      tabIndex: _v32,
      shouldUseNextLink: _v34,
      hoverZIndex: _v39 && _v40 || _v33?.showCard ? 25 : void 0,
      onMouseEnter: _v0 => {
        _v20?.(_v0), _v35 && _v54(!0);
      },
      onMouseLeave: _v35 ? () => {
        _v54(!1);
      } : void 0,
      isEditingContentTitle: _v47,
      children: (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v14.ContentCard.Body, {
          aspectRatio: _v27,
          children: _v39 && _v40 ? (0, _v1.jsx)(_v15.ColdStorageThumbTooltip, {
            label: _v40,
            compactGridTooltip: _v55,
            children: (0, _v1.jsx)(_v17, {
              hasPlayOnHover: _v35,
              clipId: _v23,
              configUrl: _v24,
              playerInitEvent: _v21,
              isHovering: _v53,
              quality: _v25,
              objectFit: _v26,
              setIsPlayerReady: _v50,
              setIsPlayerBroken: _v52,
              isDefaultPicture: !!_v3,
              thumbnailSrc: _v4,
              thumbnailSrcSet: _v5,
              aspectRatio: _v27,
              isPlayerReady: _v49,
              isPlayerBroken: _v51,
              isColdStorage: _v39,
              spinnerSize: _v28,
              defaultIconProps: _v31,
              thumbnailClickEvent: _v56,
              isSelectable: _v16,
              selectionType: _v22,
              hoverActions: _v15,
              videoPrivacy: _v41,
              privacyBadgeVariant: _v42,
              onPrivacyBadgeClick: _v43,
              privacyBadgeTooltip: _v44,
              managedStorageIndicator: _v45,
              tagText: _v11,
              tagTextVariant: _v13,
              tagTextStyles: _v12,
              topLeftDecoration: _v29,
              progress: _v36
            })
          }) : (0, _v1.jsx)(_v17, {
            hasPlayOnHover: _v35,
            clipId: _v23,
            configUrl: _v24,
            playerInitEvent: _v21,
            isHovering: _v53,
            quality: _v25,
            objectFit: _v26,
            setIsPlayerReady: _v50,
            setIsPlayerBroken: _v52,
            isDefaultPicture: !!_v3,
            thumbnailSrc: _v4,
            thumbnailSrcSet: _v5,
            aspectRatio: _v27,
            isPlayerReady: _v49,
            isPlayerBroken: _v51,
            isColdStorage: _v39,
            spinnerSize: _v28,
            defaultIconProps: _v31,
            thumbnailClickEvent: _v56,
            isSelectable: _v16,
            selectionType: _v22,
            hoverActions: _v15,
            videoPrivacy: _v41,
            privacyBadgeVariant: _v42,
            onPrivacyBadgeClick: _v43,
            privacyBadgeTooltip: _v44,
            managedStorageIndicator: _v45,
            tagText: _v11,
            tagTextVariant: _v13,
            tagTextStyles: _v12,
            topLeftDecoration: _v29,
            progress: _v36
          })
        }), (0, _v1.jsx)(_v14.ContentCard.Footer, {
          actions: _v14,
          avatar: null != _v10 ? void 0 : _v57,
          leadingIcon: _v10,
          title: _v0,
          subtitle: _v58,
          isLocked: _v39,
          titleStyles: _v30,
          creator: _v33,
          href: _v2,
          shouldUseNextLink: _v34,
          onTitleClick: () => void 0,
          editableTitle: _v46,
          isEditingContentTitle: _v47,
          hasFollow: _v37,
          followSource: _v38
        })]
      })
    });
  }]);
}