{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["EventEditableTitle", 0, function ({
    liveEventId: _v0,
    setCurrentTitle: _v1,
    setIsEditingContentTitle: _v2,
    ..._v3
  }) {
    let [_v4] = (0, _v3.usePatchLiveEvent)(),
      _v5 = (0, _v5.useNotification)(),
      _v6 = (0, _v6.useUpdateContentTitleCache)();
    return (0, _v1.jsx)(_v2.EditableTitle, {
      onChange: _v0 => {
        _v1(_v0);
      },
      onCancel: () => {
        _v2(!1);
      },
      onSubmit: _v0 => {
        _v0 !== _v3.value && _v4({
          where: {
            liveEventId: _v0
          },
          select: ["title"],
          variables: {
            title: _v0
          }
        }).then(() => {
          _v6({
            entity: "event",
            uri: `/live_events/${_v0}`,
            title: _v0
          }), _v5({
            content: (0, _v4.translate)({
              singular: "Event title updated",
              dictionary: {
                es: {
                  singular: "Título del evento actualizado"
                },
                "de-DE": {
                  singular: "Event-Titel aktualisiert"
                },
                "fr-FR": {
                  singular: "Titre de l'événement mis à jour"
                },
                "ja-JP": {
                  singular: "イベントのタイトルが更新されました"
                },
                "ko-KR": {
                  singular: "이벤트 제목이 업데이트되었습니다"
                },
                "pt-BR": {
                  singular: "Título do evento atualizado"
                },
                "zh-CN": {
                  singular: "活动标题已更新"
                }
              }
            })
          });
        }), _v2(!1);
      },
      fontSize: "header-xs",
      fontWeight: "normal",
      maxLength: 128,
      ..._v3
    });
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["ListRow", 0, ({
    title: _v0,
    subTitle: _v1,
    timestamp: _v2,
    thumbnail: _v3,
    privacy: _v4,
    shouldShowFileSize: _v5 = !1,
    fileSize: _v6 = "—",
    fileSizeTooltip: _v7,
    location: _v8,
    href: _v9,
    isSelectable: _v10,
    isSelected: _v11,
    onClick: _v12,
    onMouseEnter: _v13,
    onToggleSelected: _v14,
    hoverActions: _v15,
    menuButton: _v16,
    shouldUseNextLink: _v17 = !0,
    isEditingContentTitle: _v18,
    editableTitle: _v19
  }) => (0, _v1.jsxs)(_v14.ContentRow, {
    listGridColumns: `${(0, _v11.rem)(32)} ${(0, _v11.rem)(150)} 8fr 0.2fr`,
    sx: _v8 ? _v16.responsiveRowSxWithLocation : _v16.responsiveRowSx,
    isSelected: _v11,
    onToggleSelected: _v14,
    cursor: "pointer",
    onClick: _v12,
    onMouseEnter: _v13,
    children: [(0, _v1.jsx)(_v14.ContentRow.Column, {
      hideAtWidth: _v13.bokehTheme.breakpoints.md,
      children: _v10 && (0, _v1.jsx)(_v14.ContentRow.SelectCheckbox, {
        size: "md"
      })
    }), (0, _v1.jsx)(_v14.ContentRow.Column, {
      href: _v9,
      shouldUseNextLink: _v17,
      "data-testid": "row-thumbnail",
      children: _v3
    }), (0, _v1.jsx)(_v14.ContentRow.Column, {
      href: _v9,
      shouldUseNextLink: _v17,
      width: "100%",
      overflow: "auto",
      children: (0, _v1.jsxs)(_v8.Flex, {
        flexDir: "column",
        width: "100%",
        gap: (0, _v11.rem)(4),
        paddingLeft: (0, _v11.rem)(8),
        children: [_v18 && _v19 ? (0, _v1.jsx)(_v7.Box, {
          onClick: _v0 => {
            _v0.preventDefault(), _v0.stopPropagation();
          },
          width: "100%",
          children: _v19
        }) : (0, _v1.jsx)(_v15.OverflowToolTip, {
          labelToolTip: _v0,
          children: (0, _v1.jsx)(_v9.Text, {
            variant: "heading-xs",
            noOfLines: 1,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            "data-testid": "row-title",
            children: _v0
          })
        }), !_v18 && _v1 && (0, _v1.jsx)(_v9.Text, {
          variant: "body-md",
          color: "text-secondary",
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          children: _v1
        })]
      })
    }), _v8 && (0, _v1.jsx)(_v14.ContentRow.Column, {
      href: _v8.href || _v9,
      shouldUseNextLink: _v17,
      hideAtWidth: _v13.bokehTheme.breakpoints.xl,
      width: "100%",
      overflow: "auto",
      onClick: _v8.href ? _v0 => {
        _v0.stopPropagation();
      } : void 0,
      children: (0, _v1.jsx)(_v8.Flex, {
        alignItems: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v9.Text, {
          "data-testid": "row-location",
          variant: "body-md",
          color: "text-secondary",
          noOfLines: 1,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          display: "block",
          _hover: _v8.href ? {
            textDecoration: "underline",
            color: "text-primary"
          } : void 0,
          children: _v8.name
        })
      })
    }), (0, _v1.jsx)(_v14.ContentRow.Column, {
      href: _v9,
      shouldUseNextLink: _v17,
      hideAtWidth: _v13.bokehTheme.breakpoints.xl,
      children: (0, _v1.jsx)(_v8.Flex, {
        alignItems: "center",
        children: (0, _v1.jsx)(_v9.Text, {
          "data-testid": "row-privacy",
          variant: "body-md",
          marginRight: "10px",
          color: "text-secondary",
          children: _v4
        })
      })
    }), (0, _v1.jsx)(_v14.ContentRow.Column, {
      href: _v9,
      shouldUseNextLink: _v17,
      hideAtWidth: _v17.HIDE_FILE_SIZE_COLUMN_BREAKPOINT,
      children: _v5 && (0, _v1.jsxs)(_v9.Text, {
        variant: "body-md",
        color: "text-secondary",
        "data-testid": "row-filesize",
        children: [(0, _v1.jsx)(_v7.Box, {
          as: "span",
          children: _v6
        }), !!_v7 && (0, _v1.jsx)(_v10.Tooltip, {
          label: _v7,
          placement: "top",
          pointerEvents: "all",
          maxWidth: (0, _v11.rem)(265),
          offset: [16, 8],
          children: (0, _v1.jsx)("span", {
            children: (0, _v1.jsx)(_v12.InfoCircle, {
              position: "absolute",
              boxSize: "1rem",
              marginLeft: "sm",
              marginTop: "px"
            })
          })
        })]
      })
    }), (0, _v1.jsx)(_v14.ContentRow.Column, {
      href: _v9,
      shouldUseNextLink: _v17,
      hideAtWidth: _v13.bokehTheme.breakpoints.lg,
      children: (0, _v1.jsx)(_v9.Text, {
        variant: "body-md",
        color: "text-secondary",
        noOfLines: 1,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        display: "block",
        overflow: "hidden",
        "data-testid": "row-date",
        children: _v2
      })
    }), (0, _v1.jsxs)(_v14.ContentRow.Column, {
      justifyColumn: "flex-end",
      children: [(0, _v1.jsx)(_v7.Box, {
        children: _v16
      }), _v15]
    })]
  })], 0);
}