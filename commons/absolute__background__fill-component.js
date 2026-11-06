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
      onPreviewPlay: _v4,
      isHovering: _v5,
      quality: _v6,
      objectFit: _v7,
      setIsPlayerReady: _v8,
      setIsPlayerBroken: _v9,
      isDefaultPicture: _v10,
      thumbnailSrc: _v11,
      thumbnailSrcSet: _v12,
      thumbnailSizes: _v13,
      aspectRatio: _v14,
      isPlayerReady: _v15,
      isPlayerBroken: _v16,
      isColdStorage: _v17,
      isPasswordLocked: _v18,
      spinnerSize: _v19,
      defaultIconProps: _v20,
      thumbnailClickEvent: _v21,
      isSelectable: _v22,
      selectionType: _v23,
      hoverActions: _v24,
      videoPrivacy: _v25,
      privacyBadgeVariant: _v26,
      onPrivacyBadgeClick: _v27,
      privacyBadgeTooltip: _v28,
      managedStorageIndicator: _v29,
      tagText: _v30,
      tagTextVariant: _v31,
      tagTextStyles: _v32,
      topLeftDecoration: _v33,
      topRightDecoration: _v34,
      progress: _v35
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
            isHovering: _v5,
            onPreviewPlay: _v4,
            quality: _v6,
            objectFit: _v7,
            setIsPlayerReady: _v8,
            setIsPlayerBroken: _v9
          })
        })
      }), _v10 ? (0, _v1.jsx)(_v5.Box, {
        background: "background",
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: "0",
        border: "0",
        borderRadius: "md",
        opacity: _v15 && _v5 ? 0 : 1,
        children: (0, _v1.jsx)(_v5.Box, {
          background: "background",
          opacity: "0.6",
          children: (0, _v1.jsx)(_v14.ContentCard.DefaultThumbnail, {
            background: "fill-component",
            isLocked: _v17,
            onClick: _v21,
            children: (0, _v1.jsx)(_v12.PlayerFilled, {
              color: "text-secondary",
              boxSize: "2xl",
              opacity: "0.4",
              ..._v20
            })
          })
        })
      }) : (0, _v1.jsx)(_v14.ContentCard.Thumbnail, {
        alt: "",
        src: _v11,
        srcSet: _v12,
        sizes: _v13,
        aspectRatio: _v14,
        opacity: _v15 && _v5 ? 0 : 1,
        isLocked: _v17,
        isPasswordLocked: _v18,
        onClick: _v21
      }), _v5 && !_v15 && !_v16 && !_v17 && !_v18 && (0, _v1.jsx)(_v6.Flex, {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        background: "transparent",
        onClick: _v21,
        children: (0, _v1.jsx)(_v8.Spinner, {
          size: _v19
        })
      }), _v22 && (0, _v1.jsx)(_v6.Flex, {
        position: "absolute",
        top: "8px",
        left: "8px",
        onClick: _v0 => {
          _v0.stopPropagation();
        },
        children: "checkbox" === _v23 ? (0, _v1.jsx)(_v14.ContentCard.SelectCheckbox, {
          size: "md"
        }) : (0, _v1.jsx)(_v14.ContentCard.SelectRadio, {
          size: "lg"
        })
      }), _v24, (0, _v1.jsx)(_v14.ContentCard.PrivacyBadge, {
        privacy: _v25,
        variant: _v26,
        onClick: _v27,
        layout: "overlay",
        tooltipLabel: _v28
      }), _v29, !!_v30 && (0, _v1.jsx)(_v14.ContentCard.Badge, {
        variant: _v31,
        sx: _v32,
        children: _v30
      }), _v33 && (0, _v1.jsx)(_v14.ContentCard.Badge, {
        bgColor: "transparent",
        backdropFilter: "none",
        top: (0, _v11.rem)(16),
        left: (0, _v11.rem)(8),
        border: "none",
        children: _v33
      }), _v34 && (0, _v1.jsx)(_v14.ContentCard.Badge, {
        bgColor: "transparent",
        backdropFilter: "none",
        top: (0, _v11.rem)(16),
        right: (0, _v11.rem)(8),
        bottom: "auto",
        left: "auto",
        border: "none",
        children: _v34
      }), _v35 > 0 && (0, _v1.jsx)(_v7.Progress, {
        "aria-label": `${_v35}% complete`,
        bottom: "0",
        left: "4px",
        position: "absolute",
        size: "xs",
        value: _v35,
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
    thumbnailSizes: _v6,
    avatarSrc: _v7,
    avatarName: _v8,
    showAvatar: _v9 = !0,
    showAvatarInSubtitle: _v10 = !1,
    typeIcon: _v11,
    tagText: _v12,
    tagTextStyles: _v13,
    tagTextVariant: _v14,
    actionsMenu: _v15,
    hoverActions: _v16,
    isSelectable: _v17 = !1,
    isSelected: _v18 = !1,
    onClick: _v19,
    onToggleSelected: _v20,
    onMouseEnter: _v21,
    playerInitEvent: _v22 = "hover",
    selectionType: _v23 = "checkbox",
    clipId: _v24,
    configUrl: _v25,
    quality: _v26,
    objectFit: _v27,
    aspectRatio: _v28,
    spinnerSize: _v29 = "md",
    topLeftDecoration: _v30,
    topRightDecoration: _v31,
    belowThumbnail: _v32,
    titleStyles: _v33,
    defaultIconProps: _v34,
    tabIndex: _v35,
    creator: _v36,
    shouldUseNextLink: _v37 = !0,
    hasPlayOnHover: _v38 = !0,
    onPreviewPlay: _v39,
    progress: _v40 = 0,
    hasFollow: _v41,
    followSource: _v42,
    isColdStorage: _v43 = !1,
    lockedTooltipLabel: _v44,
    isPasswordLocked: _v45 = !1,
    videoPrivacy: _v46,
    privacyBadgeVariant: _v47 = "default",
    onPrivacyBadgeClick: _v48,
    privacyBadgeTooltip: _v49,
    managedStorageIndicator: _v50,
    editableTitle: _v51,
    isEditingContentTitle: _v52
  }) => {
    let _v53 = (0, _v13.useOrionSetting)("enable_uploader_tooltip"),
      [_v54, _v55] = (0, _v3.useState)(!1),
      [_v56, _v57] = (0, _v3.useState)(!1),
      [_v58, _v59] = (0, _v3.useState)(!1),
      _v60 = "sm" === _v29,
      _v61 = () => void 0,
      _v62 = null,
      _v63 = _v0 => _v8 && _v53 ? (0, _v1.jsx)(_v10.Tooltip, {
        label: _v8,
        children: (0, _v1.jsx)(_v5.Box, {
          display: "inline-flex",
          pointerEvents: "auto",
          children: _v0
        })
      }) : _v0;
    "" !== _v7 && (_v9 || _v10) && (_v62 = _v63((0, _v1.jsx)(_v4.Avatar, {
      alt: _v8 ?? "",
      size: "xs",
      src: _v7,
      nameProps: {
        name: _v8 ?? ""
      }
    })));
    let _v64 = null;
    "" !== _v7 && _v10 && (_v64 = _v63((0, _v1.jsx)(_v5.Box, {
      boxSize: "0.875rem",
      display: "inline-flex",
      children: (0, _v1.jsx)(_v4.Avatar, {
        alt: _v8 ?? "",
        size: "auto",
        src: _v7,
        nameProps: {
          name: _v8 ?? ""
        }
      })
    })));
    let _v65 = _v10 && null != _v64 ? (0, _v1.jsxs)(_v6.Flex, {
      alignItems: "center",
      gap: "xs",
      children: [_v64, (0, _v1.jsx)(_v9.Text, {
        variant: "body-sm",
        color: "text-tertiary",
        noOfLines: 1,
        children: `\xb7 ${_v1}`
      })]
    }) : _v1;
    return (0, _v1.jsx)(_v14.ContentCard, {
      isSelected: _v18,
      onClick: _v19,
      onToggleSelected: _v20,
      href: _v2,
      ariaLabel: "Video card",
      tabIndex: _v35,
      shouldUseNextLink: _v37,
      hoverZIndex: _v43 && _v44 || _v36?.showCard ? 25 : void 0,
      onMouseEnter: _v0 => {
        _v21?.(_v0), _v38 && _v59(!0);
      },
      onMouseLeave: _v38 ? () => {
        _v59(!1);
      } : void 0,
      isEditingContentTitle: _v52,
      children: (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v14.ContentCard.Body, {
          aspectRatio: _v28,
          children: _v43 && _v44 ? (0, _v1.jsx)(_v15.ColdStorageThumbTooltip, {
            label: _v44,
            compactGridTooltip: _v60,
            children: (0, _v1.jsx)(_v17, {
              hasPlayOnHover: _v38,
              clipId: _v24,
              configUrl: _v25,
              playerInitEvent: _v22,
              onPreviewPlay: _v39,
              isHovering: _v58,
              quality: _v26,
              objectFit: _v27,
              setIsPlayerReady: _v55,
              setIsPlayerBroken: _v57,
              isDefaultPicture: !!_v3,
              thumbnailSrc: _v4,
              thumbnailSrcSet: _v5,
              thumbnailSizes: _v6,
              aspectRatio: _v28,
              isPlayerReady: _v54,
              isPlayerBroken: _v56,
              isColdStorage: _v43,
              isPasswordLocked: _v45,
              spinnerSize: _v29,
              defaultIconProps: _v34,
              thumbnailClickEvent: _v61,
              isSelectable: _v17,
              selectionType: _v23,
              hoverActions: _v16,
              videoPrivacy: _v46,
              privacyBadgeVariant: _v47,
              onPrivacyBadgeClick: _v48,
              privacyBadgeTooltip: _v49,
              managedStorageIndicator: _v50,
              tagText: _v12,
              tagTextVariant: _v14,
              tagTextStyles: _v13,
              topLeftDecoration: _v30,
              topRightDecoration: _v31,
              progress: _v40
            })
          }) : (0, _v1.jsx)(_v17, {
            hasPlayOnHover: _v38,
            clipId: _v24,
            configUrl: _v25,
            playerInitEvent: _v22,
            onPreviewPlay: _v39,
            isHovering: _v58,
            quality: _v26,
            objectFit: _v27,
            setIsPlayerReady: _v55,
            setIsPlayerBroken: _v57,
            isDefaultPicture: !!_v3,
            thumbnailSrc: _v4,
            thumbnailSrcSet: _v5,
            thumbnailSizes: _v6,
            aspectRatio: _v28,
            isPlayerReady: _v54,
            isPlayerBroken: _v56,
            isColdStorage: _v43,
            isPasswordLocked: _v45,
            spinnerSize: _v29,
            defaultIconProps: _v34,
            thumbnailClickEvent: _v61,
            isSelectable: _v17,
            selectionType: _v23,
            hoverActions: _v16,
            videoPrivacy: _v46,
            privacyBadgeVariant: _v47,
            onPrivacyBadgeClick: _v48,
            privacyBadgeTooltip: _v49,
            managedStorageIndicator: _v50,
            tagText: _v12,
            tagTextVariant: _v14,
            tagTextStyles: _v13,
            topLeftDecoration: _v30,
            topRightDecoration: _v31,
            progress: _v40
          })
        }), _v32, (0, _v1.jsx)(_v14.ContentCard.Footer, {
          actions: _v15,
          avatar: null != _v11 ? void 0 : _v62,
          leadingIcon: _v11,
          title: _v0,
          subtitle: _v65,
          isLocked: _v43,
          titleStyles: _v33,
          creator: _v36,
          href: _v2,
          shouldUseNextLink: _v37,
          onTitleClick: () => void 0,
          editableTitle: _v51,
          isEditingContentTitle: _v52,
          hasFollow: _v41,
          followSource: _v42
        })]
      })
    });
  }]);
}