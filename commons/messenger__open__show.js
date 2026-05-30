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
    _v16 = _v0.i(0);
  function _v17() {
    window.zE && (window.zE("messenger", "open"), window.zE("messenger", "show"));
  }
  var _v18 = _v0.i(0);
  _v0.s(["FooterHelpMenu", 0, function ({
    id: _v0 = (0, _v14.createDomName)("footer-help-menu"),
    className: _v1 = (0, _v14.createDomName)("footer-help-menu"),
    composerSessionContext: {
      sessionInfo: {
        value: _v2
      }
    } = (0, _v2.useManager)(_v12.ComposerSessionManager)
  }) {
    let _v3 = !!_v2?.owner?.capabilities?.hasLiveSupportChat,
      {
        isOpen: _v4,
        onOpenPopover: _v5,
        onClosePopover: _v6
      } = (0, _v11.useControlledPopover)(),
      [_v7] = function (_v0) {
        let [_v1, _v2] = (0, _v3.useState)(!1),
          [_v3, _v4] = (0, _v3.useState)({
            name: "",
            email: ""
          }),
          [_v5, _v6] = (0, _v15.useGetMeLazy)(),
          _v7 = (0, _v16.useLocale)();
        return (0, _v3.useEffect)(() => {
          _v5({
            select: ["email", "name"]
          });
        }, []), (0, _v3.useEffect)(() => {
          if (_v6.loading || !_v0) return;
          let {
              data: _v0
            } = _v6,
            _v1 = _v0 && _v0.email && _v0.name;
          _v0 && _v1 && _v0 && (_v2(!0), _v4({
            email: _v0?.email || "",
            name: _v0.name
          }));
        }, [_v6, _v0]), (0, _v3.useEffect)(() => {
          _v1 && (async () => {
            var _v0;
            let _v1 = await fetch("/help/zendesk_messenger_jwt"),
              _v2 = await _v1.json();
            "object" == typeof (_v0 = _v2) && null !== _v0 && "string" == typeof _v0.token && _v0.token.length > 0 && "string" == typeof _v0.widget_key && _v0.widget_key.length > 0 && "string" == typeof _v0.messenger_detection_id && _v0.messenger_detection_id.length > 0 && function ({
              token: _v0,
              widget_key: _v1,
              messenger_detection_id: _v2,
              locale: _v3
            }) {
              let _v4;
              (_v4 = document.createElement("script")).id = "ze-snippet", _v4.src = `https://static.zdassets.com/ekr/snippet.js?key=${_v1}`, document.body.appendChild(_v4), _v4.async = !0, _v4.onload = () => {
                !function ({
                  token: _v0,
                  messenger_detection_id: _v1,
                  locale: _v2
                }) {
                  window.zE && (window.zE(() => {
                    window.zE && (window.zE("messenger:set", "conversationTags", ["messenger_live_page"]), window.zE("messenger:set", "conversationFields", [{
                      id: _v1,
                      value: "messenger_live_page"
                    }]), window.zE("messenger", "loginUser", function (_v0) {
                      _v0(_v0);
                    }), window.zE("messenger:set", "locale", _v2));
                  }), window.zE("messenger:on", "close", function () {
                    window.zE && window.zE("messenger", "hide");
                  }), window.zE("messenger", "hide"));
                }({
                  token: _v0,
                  messenger_detection_id: _v2,
                  locale: _v3
                });
              };
            }({
              token: _v2.token,
              widget_key: _v2.widget_key,
              messenger_detection_id: _v2.messenger_detection_id,
              locale: _v7
            });
          })();
        }, [_v7, _v1, _v3]), [_v1];
      }(_v3),
      _v8 = (0, _v3.useCallback)(_v0 => {
        _v0.preventDefault();
      }, []);
    return (0, _v1.jsxs)(_v5.Menu, {
      isOpen: _v4,
      placement: "end-end",
      closeOnSelect: !0,
      onOpen: _v5,
      onClose: _v6,
      children: [(0, _v1.jsx)(_v18.BokehTooltip, {
        placement: "right",
        label: _v4 ? null : _v13.T_HELP,
        closeOnPointerDown: !0,
        children: (0, _v1.jsx)(_v6.MenuButton, {
          as: _v4.IconButton,
          id: _v0,
          className: _v1,
          "aria-label": "help-menu",
          icon: (0, _v1.jsx)(_v9.QuestionCircle, {}),
          size: "lg",
          variant: "tertiary",
          borderRadius: "50%",
          onFocus: _v8
        })
      }), (0, _v1.jsxs)(_v8.MenuList, {
        children: [_v3 && _v7 ? (0, _v1.jsx)(_v7.MenuItem, {
          id: (0, _v14.createDomName)(_v0, "support-chat"),
          className: (0, _v14.createDomName)(_v1, "support-chat"),
          onClick: _v17,
          children: _v13.T_SUPPORT_CHAT
        }) : null, (0, _v1.jsx)("a", {
          href: _v10.vimeoConfig.SUPPORT.VIMEO_HELP_CENTER,
          target: "_blank",
          rel: "noreferrer",
          children: (0, _v1.jsx)(_v7.MenuItem, {
            id: (0, _v14.createDomName)(_v0, "help-centre"),
            className: (0, _v14.createDomName)(_v1, "help-centre"),
            children: _v13.T_HELP_CENTER_VISIT
          })
        })]
      })]
    });
  }], 0);
}