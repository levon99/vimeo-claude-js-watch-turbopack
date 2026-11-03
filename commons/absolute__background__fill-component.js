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
      isPasswordLocked: _v16,
      spinnerSize: _v17,
      defaultIconProps: _v18,
      thumbnailClickEvent: _v19,
      isSelectable: _v20,
      selectionType: _v21,
      hoverActions: _v22,
      videoPrivacy: _v23,
      privacyBadgeVariant: _v24,
      onPrivacyBadgeClick: _v25,
      privacyBadgeTooltip: _v26,
      managedStorageIndicator: _v27,
      tagText: _v28,
      tagTextVariant: _v29,
      tagTextStyles: _v30,
      topLeftDecoration: _v31,
      topRightDecoration: _v32,
      progress: _v33
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
            onClick: _v19,
            children: (0, _v1.jsx)(_v12.PlayerFilled, {
              color: "text-secondary",
              boxSize: "2xl",
              opacity: "0.4",
              ..._v18
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
        isPasswordLocked: _v16,
        onClick: _v19
      }), _v4 && !_v13 && !_v14 && !_v15 && !_v16 && (0, _v1.jsx)(_v6.Flex, {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "0",
        background: "transparent",
        onClick: _v19,
        children: (0, _v1.jsx)(_v8.Spinner, {
          size: _v17
        })
      }), _v20 && (0, _v1.jsx)(_v6.Flex, {
        position: "absolute",
        top: "8px",
        left: "8px",
        onClick: _v0 => {
          _v0.stopPropagation();
        },
        children: "checkbox" === _v21 ? (0, _v1.jsx)(_v14.ContentCard.SelectCheckbox, {
          size: "md"
        }) : (0, _v1.jsx)(_v14.ContentCard.SelectRadio, {
          size: "lg"
        })
      }), _v22, (0, _v1.jsx)(_v14.ContentCard.PrivacyBadge, {
        privacy: _v23,
        variant: _v24,
        onClick: _v25,
        layout: "overlay",
        tooltipLabel: _v26
      }), _v27, !!_v28 && (0, _v1.jsx)(_v14.ContentCard.Badge, {
        variant: _v29,
        sx: _v30,
        children: _v28
      }), _v31 && (0, _v1.jsx)(_v14.ContentCard.Badge, {
        bgColor: "transparent",
        backdropFilter: "none",
        top: (0, _v11.rem)(16),
        left: (0, _v11.rem)(8),
        border: "none",
        children: _v31
      }), _v32 && (0, _v1.jsx)(_v14.ContentCard.Badge, {
        bgColor: "transparent",
        backdropFilter: "none",
        top: (0, _v11.rem)(16),
        right: (0, _v11.rem)(8),
        bottom: "auto",
        left: "auto",
        border: "none",
        children: _v32
      }), _v33 > 0 && (0, _v1.jsx)(_v7.Progress, {
        "aria-label": `${_v33}% complete`,
        bottom: "0",
        left: "4px",
        position: "absolute",
        size: "xs",
        value: _v33,
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
    topRightDecoration: _v30,
    belowThumbnail: _v31,
    titleStyles: _v32,
    defaultIconProps: _v33,
    tabIndex: _v34,
    creator: _v35,
    shouldUseNextLink: _v36 = !0,
    hasPlayOnHover: _v37 = !0,
    progress: _v38 = 0,
    hasFollow: _v39,
    followSource: _v40,
    isColdStorage: _v41 = !1,
    lockedTooltipLabel: _v42,
    isPasswordLocked: _v43 = !1,
    videoPrivacy: _v44,
    privacyBadgeVariant: _v45 = "default",
    onPrivacyBadgeClick: _v46,
    privacyBadgeTooltip: _v47,
    managedStorageIndicator: _v48,
    editableTitle: _v49,
    isEditingContentTitle: _v50
  }) => {
    let _v51 = (0, _v13.useOrionSetting)("enable_uploader_tooltip"),
      [_v52, _v53] = (0, _v3.useState)(!1),
      [_v54, _v55] = (0, _v3.useState)(!1),
      [_v56, _v57] = (0, _v3.useState)(!1),
      _v58 = "sm" === _v28,
      _v59 = () => void 0,
      _v60 = null,
      _v61 = _v0 => _v7 && _v51 ? (0, _v1.jsx)(_v10.Tooltip, {
        label: _v7,
        children: (0, _v1.jsx)(_v5.Box, {
          display: "inline-flex",
          pointerEvents: "auto",
          children: _v0
        })
      }) : _v0;
    "" !== _v6 && (_v8 || _v9) && (_v60 = _v61((0, _v1.jsx)(_v4.Avatar, {
      alt: _v7 ?? "",
      size: "xs",
      src: _v6,
      nameProps: {
        name: _v7 ?? ""
      }
    })));
    let _v62 = null;
    "" !== _v6 && _v9 && (_v62 = _v61((0, _v1.jsx)(_v5.Box, {
      boxSize: "0.875rem",
      display: "inline-flex",
      children: (0, _v1.jsx)(_v4.Avatar, {
        alt: _v7 ?? "",
        size: "auto",
        src: _v6,
        nameProps: {
          name: _v7 ?? ""
        }
      })
    })));
    let _v63 = _v9 && null != _v62 ? (0, _v1.jsxs)(_v6.Flex, {
      alignItems: "center",
      gap: "xs",
      children: [_v62, (0, _v1.jsx)(_v9.Text, {
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
      tabIndex: _v34,
      shouldUseNextLink: _v36,
      hoverZIndex: _v41 && _v42 || _v35?.showCard ? 25 : void 0,
      onMouseEnter: _v0 => {
        _v20?.(_v0), _v37 && _v57(!0);
      },
      onMouseLeave: _v37 ? () => {
        _v57(!1);
      } : void 0,
      isEditingContentTitle: _v50,
      children: (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v14.ContentCard.Body, {
          aspectRatio: _v27,
          children: _v41 && _v42 ? (0, _v1.jsx)(_v15.ColdStorageThumbTooltip, {
            label: _v42,
            compactGridTooltip: _v58,
            children: (0, _v1.jsx)(_v17, {
              hasPlayOnHover: _v37,
              clipId: _v23,
              configUrl: _v24,
              playerInitEvent: _v21,
              isHovering: _v56,
              quality: _v25,
              objectFit: _v26,
              setIsPlayerReady: _v53,
              setIsPlayerBroken: _v55,
              isDefaultPicture: !!_v3,
              thumbnailSrc: _v4,
              thumbnailSrcSet: _v5,
              aspectRatio: _v27,
              isPlayerReady: _v52,
              isPlayerBroken: _v54,
              isColdStorage: _v41,
              isPasswordLocked: _v43,
              spinnerSize: _v28,
              defaultIconProps: _v33,
              thumbnailClickEvent: _v59,
              isSelectable: _v16,
              selectionType: _v22,
              hoverActions: _v15,
              videoPrivacy: _v44,
              privacyBadgeVariant: _v45,
              onPrivacyBadgeClick: _v46,
              privacyBadgeTooltip: _v47,
              managedStorageIndicator: _v48,
              tagText: _v11,
              tagTextVariant: _v13,
              tagTextStyles: _v12,
              topLeftDecoration: _v29,
              topRightDecoration: _v30,
              progress: _v38
            })
          }) : (0, _v1.jsx)(_v17, {
            hasPlayOnHover: _v37,
            clipId: _v23,
            configUrl: _v24,
            playerInitEvent: _v21,
            isHovering: _v56,
            quality: _v25,
            objectFit: _v26,
            setIsPlayerReady: _v53,
            setIsPlayerBroken: _v55,
            isDefaultPicture: !!_v3,
            thumbnailSrc: _v4,
            thumbnailSrcSet: _v5,
            aspectRatio: _v27,
            isPlayerReady: _v52,
            isPlayerBroken: _v54,
            isColdStorage: _v41,
            isPasswordLocked: _v43,
            spinnerSize: _v28,
            defaultIconProps: _v33,
            thumbnailClickEvent: _v59,
            isSelectable: _v16,
            selectionType: _v22,
            hoverActions: _v15,
            videoPrivacy: _v44,
            privacyBadgeVariant: _v45,
            onPrivacyBadgeClick: _v46,
            privacyBadgeTooltip: _v47,
            managedStorageIndicator: _v48,
            tagText: _v11,
            tagTextVariant: _v13,
            tagTextStyles: _v12,
            topLeftDecoration: _v29,
            topRightDecoration: _v30,
            progress: _v38
          })
        }), _v31, (0, _v1.jsx)(_v14.ContentCard.Footer, {
          actions: _v14,
          avatar: null != _v10 ? void 0 : _v60,
          leadingIcon: _v10,
          title: _v0,
          subtitle: _v63,
          isLocked: _v41,
          titleStyles: _v32,
          creator: _v35,
          href: _v2,
          shouldUseNextLink: _v36,
          onTitleClick: () => void 0,
          editableTitle: _v49,
          isEditingContentTitle: _v50,
          hasFollow: _v39,
          followSource: _v40
        })]
      })
    });
  }]);
}