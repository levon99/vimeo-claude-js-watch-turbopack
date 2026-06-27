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
    _v18 = _v0.i(0);
  let _v19 = ({
    badge: _v0,
    title: _v1,
    subtitle: _v2,
    avatarLink: _v3,
    additionalActions: _v4,
    actionsSlot: _v5
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v7.Td, {
      children: (0, _v1.jsxs)(_v15.Grid, {
        templateRows: "repeat(2, 1fr)",
        templateColumns: "min-content 1fr",
        columnGap: 2,
        children: [(0, _v1.jsx)(_v16.GridItem, {
          rowSpan: 2,
          colSpan: 1,
          width: "fit-content",
          children: (0, _v1.jsx)(_v14.Center, {
            height: "100%",
            children: (0, _v1.jsx)(_v12.Avatar, {
              alt: "org member",
              size: "sm",
              src: _v3,
              nameProps: {
                name: _v1
              }
            })
          })
        }), (0, _v1.jsx)(_v16.GridItem, {
          rowSpan: 1,
          children: (0, _v1.jsxs)(_v17.HStack, {
            align: "center",
            children: [(0, _v1.jsx)(_v18.Text, {
              variant: "heading-xs",
              children: _v1
            }), _v0 && (0, _v1.jsx)(_v13.Badge, {
              variant: "neutral",
              size: "xs",
              height: "2xs",
              children: _v0
            })]
          })
        }), (0, _v1.jsx)(_v16.GridItem, {
          rowSpan: 1,
          children: (0, _v1.jsx)(_v18.Text, {
            variant: "body-md",
            color: "text-secondary",
            fontWeight: "350",
            children: _v2
          })
        })]
      })
    }), _v4, (0, _v1.jsx)(_v7.Td, {
      children: _v5
    })]
  });
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = ({
    children: _v0,
    onOpenMenu: _v1,
    onCloseMenu: _v2,
    ..._v3
  }) => (0, _v1.jsxs)(_v20.Menu, {
    isLazy: !0,
    onOpen: _v1,
    onClose: _v2,
    placement: "bottom-end",
    children: [(0, _v1.jsx)(_v21.MenuButton, {
      as: _v22.IconButton,
      "aria-label": "more options",
      variant: "tertiary",
      size: "md",
      icon: (0, _v1.jsx)(_v24.EllipsisV, {
        boxSize: "2xs"
      }),
      ..._v3
    }), (0, _v1.jsx)(_v23.MenuList, {
      children: _v0
    })]
  });
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = {
      width: "1%",
      whiteSpace: "nowrap"
    },
    _v31 = {
      width: "100%"
    },
    _v32 = ({
      count: _v0
    }) => (0, _v1.jsx)(_v1.Fragment, {
      children: Array.from({
        length: _v0
      }).map((_v0, _v1) => (0, _v1.jsxs)(_v10.Tr, {
        children: [(0, _v1.jsx)(_v7.Td, {
          colSpan: 2,
          style: {
            borderBottom: "none"
          },
          children: (0, _v1.jsx)(_v4.Skeleton, {
            height: "md",
            width: "100%"
          })
        }), (0, _v1.jsx)(_v7.Td, {
          style: {
            borderBottom: "none"
          },
          children: (0, _v1.jsx)(_v4.Skeleton, {
            height: "md",
            minWidth: "md"
          })
        })]
      }, _v1))
    });
  _v0.s(["MembersList", 0, ({
    members: _v0,
    showCheckboxes: _v1,
    shouldBeSelectable: _v2 = () => !1,
    shouldShowBadge: _v3 = () => !1,
    getBadge: _v4 = _v0 => _v0.role,
    shouldShowOptionsMenu: _v5,
    onOpenMemberOptionsMenu: _v6,
    onCloseMemberOptionsMenu: _v7,
    getMenuContent: _v8,
    getMemberAdditionalActions: _v9,
    headerSlot: _v10,
    isLoading: _v11 = !1,
    loadingMemberSkeletonCount: _v12 = _v26.ORG_MEMBERS_PER_PAGE_ITEM_COUNT,
    isHeaderSticky: _v13 = !1,
    headerHeight: _v14
  }) => {
    let {
        areAllItemsSelected: _v15,
        selectedItems: _v16,
        handleSelectAll: _v17,
        handleUnselectAll: _v18,
        handleSelect: _v19,
        handleUnselect: _v20
      } = (0, _v29.useSelectionContext)(),
      _v21 = (0, _v27.getTranslations)(),
      _v22 = (0, _v11.useToken)("zIndices", "base"),
      _v23 = (0, _v2.useMemo)(() => _v0?.filter(_v0 => _v2(_v0)).map(_v0 => _v0.uri) ?? [], [_v0, _v2]),
      _v24 = (0, _v2.useCallback)(_v0 => {
        _v16.has(_v0) ? _v20(_v0) : _v19(_v0);
      }, [_v16, _v19, _v20]),
      _v25 = (0, _v2.useCallback)(() => {
        _v15 ? _v18() : _v17(_v23);
      }, [_v15, _v18, _v17, _v23]);
    return (0, _v1.jsxs)(_v5.Table, {
      width: "100%",
      sx: {
        tableLayout: "auto",
        fontVariantNumeric: "unset",
        "& tr": {
          display: "table-row"
        },
        "& td,& th": {
          paddingY: "sm",
          paddingX: "xs"
        },
        "& thead tr th": {
          paddingTop: 0
        },
        "& tbody tr:last-child td": {
          paddingBottom: 0
        },
        "& th,& td": {
          ..._v30,
          textAlign: "end"
        },
        [`& th:nth-child(${_v1 ? 2 : 1})`]: {
          ..._v31,
          paddingLeft: 0,
          textAlign: "start"
        },
        [`& td:nth-child(${_v1 ? 2 : 1})`]: {
          ..._v31,
          paddingLeft: "md",
          textAlign: "start"
        },
        "& tr:last-child td": {
          borderBottom: "none"
        }
      },
      children: [(0, _v1.jsx)(_v9.Thead, {
        ...(_v13 ? {
          position: "sticky",
          top: _v14,
          zIndex: _v22 + 1
        } : {}),
        backgroundColor: "surface",
        children: (0, _v1.jsxs)(_v10.Tr, {
          children: [_v1 && (0, _v1.jsx)(_v8.Th, {
            children: (0, _v1.jsx)(_v3.Checkbox, {
              isChecked: _v15,
              isIndeterminate: _v16.size > 0 && !_v15,
              onChange: _v25,
              isDisabled: _v11
            })
          }), _v10]
        })
      }), (0, _v1.jsx)(_v6.Tbody, {
        children: _v11 ? (0, _v1.jsx)(_v32, {
          count: _v12
        }) : _v0.map(_v0 => (0, _v1.jsxs)(_v10.Tr, {
          children: [_v1 && (0, _v1.jsx)(_v7.Td, {
            children: _v2(_v0) && (0, _v1.jsx)(_v3.Checkbox, {
              isChecked: _v16.has(_v0.uri),
              onChange: () => _v24(_v0.uri)
            })
          }), (0, _v1.jsx)(_v19, {
            badge: (_v3(_v0) && _v4(_v0)) ?? null,
            title: "accepted" === _v0.status ? _v0.user?.name ?? "" : _v21.Pending,
            subtitle: _v0?.email,
            avatarLink: (0, _v28.getMemberAvatarLink)(_v0),
            additionalActions: _v9?.(_v0),
            actionsSlot: _v5(_v0) && (0, _v1.jsx)(_v25, {
              onOpenMenu: () => _v6?.(_v0),
              onCloseMenu: () => _v7?.(_v0),
              children: _v8?.(_v0)
            })
          })]
        }, _v0.uri))
      })]
    });
  }], 0), _v0.s(["NoResults", 0, ({
    query: _v0
  }) => {
    let _v1 = (0, _v27.getTranslations)();
    return (0, _v1.jsx)(_v14.Center, {
      py: "xl",
      children: (0, _v1.jsx)(_v18.Text, {
        color: "text-secondary",
        variant: "heading-md",
        children: _v0 ? _v1.NoResultsFor(_v0) : _v1.NoResults
      })
    });
  }], 0);
}