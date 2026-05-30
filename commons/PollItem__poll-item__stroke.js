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
    _v12 = _v0.i(0);
  _v0.s(["PollItem", 0, function ({
    className: _v0 = (0, _v10.createDomName)("poll-item"),
    isPollShownInActiveScene: _v1,
    isAnyPollPublished: _v2,
    poll: _v3,
    poll: {
      state: _v4,
      question: _v5,
      options: _v6
    },
    canOpenPoll: _v7,
    menuAttach: _v8,
    itemActions: _v9,
    menuActions: _v10,
    childrenControls: _v11
  }) {
    let _v12 = (0, _v5.useColorModeValue)("stroke", "transparent"),
      {
        onMouseEnter: _v13,
        onMouseLeave: _v14,
        isMenuOpen: _v15,
        isItemHovered: _v16,
        onToggleMenu: _v17,
        onCloseMenu: _v18
      } = (0, _v8.useSourceHoverControls)(),
      _v19 = _v6.reduce((_v0, _v1) => _v0 + _v1.votesCount, 0),
      _v20 = _v4 === _v9.EPollState.CLOSED || _v4 === _v9.EPollState.ARCHIVED,
      _v21 = _v4 === _v9.EPollState.ARCHIVED;
    return (0, _v1.jsxs)(_v3.Flex, {
      className: _v0,
      position: "relative",
      padding: (0, _v2.rem)(16),
      rowGap: (0, _v2.rem)(16),
      direction: "column",
      background: "fill-component",
      _hover: {
        background: "fill-component-hover"
      },
      border: "1px solid",
      borderRadius: (0, _v2.rem)(8),
      borderColor: _v12,
      cursor: _v20 ? "default" : "pointer",
      onMouseEnter: _v13,
      onMouseLeave: _v14,
      children: [(0, _v1.jsxs)(_v3.Flex, {
        className: (0, _v10.createDomName)(_v0, "header"),
        justifyContent: "space-between",
        alignItems: "flex-start",
        children: [(0, _v1.jsx)(_v4.Header, {
          className: (0, _v10.createDomName)(_v0, "question"),
          size: "xs",
          minHeight: (0, _v2.rem)(24),
          margin: 0,
          maxWidth: _v21 ? "100%" : "83%",
          children: _v5
        }), (0, _v1.jsx)(_v3.Flex, {
          className: (0, _v10.createDomName)(_v0, "controls"),
          visibility: _v16 ? "visible" : "hidden",
          children: _v21 ? null : (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v11, _v10.length ? (0, _v1.jsx)(_v11.BokehMenu, {
              onClose: _v18,
              placement: _v8,
              className: (0, _v10.createDomName)(_v0, "menu", "button"),
              isOpen: _v15,
              onClick: _v17,
              menuList: (0, _v1.jsx)(_v1.Fragment, {
                children: _v10.map(({
                  label: _v0,
                  key: _v1,
                  onClick: _v2,
                  icon: _v3
                }) => (0, _v1.jsx)(_v12.BokehMenuItem, {
                  className: (0, _v10.createDomName)(_v0, "menu", "item"),
                  onClick: () => {
                    _v2 && _v2(), ["removeFromScene", "addToScene"].includes(_v1) || _v18();
                  },
                  icon: _v3,
                  children: _v0
                }, _v1))
              })
            }) : null]
          })
        })]
      }), _v6.map(_v0 => (0, _v1.jsx)(_v7.PollOptionVotesBar, {
        className: (0, _v10.createDomName)(_v0, "votes"),
        option: _v0,
        state: _v4,
        totalCount: _v19
      }, _v0.id)), (0, _v1.jsx)(_v6.PollItemActions, {
        isPollShownInActiveScene: _v1,
        poll: _v3,
        canOpenPoll: _v7,
        itemActions: _v9,
        isAnyPollPublished: _v2
      })]
    });
  }], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  _v0.s(["usePollPanels", 0, function (_v0) {
    let [_v1, _v2] = (0, _v13.useState)(0),
      {
        activePolls: _v3,
        archivedPolls: _v4
      } = {
        activePolls: (0, _v13.useMemo)(() => Object.values(_v0).filter(_v0 => _v0.state !== _v9.EPollState.ARCHIVED), [_v0]),
        archivedPolls: (0, _v13.useMemo)(() => Object.values(_v0).filter(_v0 => _v0.state === _v9.EPollState.ARCHIVED), [_v0])
      };
    return {
      panels: (0, _v13.useMemo)(() => [{
        id: 0,
        label: (0, _v1.jsxs)(_v3.Flex, {
          gap: (0, _v2.rem)(4),
          children: [(0, _v1.jsx)(_v14.Box, {
            children: _v15.T_ACTIVE
          }), (0, _v1.jsx)(_v14.Box, {
            color: "text-secondary",
            children: _v3.length || null
          })]
        }),
        polls: _v3
      }, {
        id: 1,
        label: (0, _v1.jsxs)(_v3.Flex, {
          gap: (0, _v2.rem)(4),
          children: [(0, _v1.jsx)(_v14.Box, {
            children: _v15.T_ARCHIVED
          }), (0, _v1.jsx)(_v14.Box, {
            color: "text-secondary",
            children: _v4.length || null
          })]
        }),
        polls: _v4
      }], [_v3, _v4]),
      activePolls: _v3,
      archivedPolls: _v4,
      activePanelId: _v1,
      setActivePanelId: _v2
    };
  }], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["PollEmptyState", 0, function ({
    id: _v0 = (0, _v10.createDomName)("poll-empty-state"),
    className: _v1 = (0, _v10.createDomName)("poll-empty-state"),
    control: _v2,
    buttonLabel: _v3,
    description: _v4,
    height: _v5,
    width: _v6,
    maxWidth: _v7,
    padding: _v8,
    sx: _v9,
    onCreateClick: _v10
  }) {
    return (0, _v1.jsx)(_v14.Box, {
      id: _v0,
      className: _v1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: _v5,
      width: _v6,
      padding: _v8,
      sx: _v9,
      children: (0, _v1.jsx)(_v3.Flex, {
        direction: "column",
        maxWidth: _v7,
        children: (0, _v1.jsx)(_v17.EmptyStatePlaceholder, {
          id: (0, _v10.createDomName)(_v0, "empty-placeholder"),
          className: (0, _v10.createDomName)(_v0, "empty-placeholder"),
          flexGrow: 0,
          height: "auto",
          control: _v2,
          buttonLabel: _v3,
          description: _v4,
          icon: (0, _v1.jsx)(_v16.ChartGrowthAlt, {
            boxSize: "lg"
          }),
          onButtonClick: _v10
        })
      })
    });
  }], 0);
}