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
    _v14 = _v0.i(0);
  let _v15 = "wspuid",
    _v16 = _v0 => _v0 ? "/manage/workspace/manage-ai/custom-dictionary" : "/manage/team/manage-ai/custom-dictionary",
    _v17 = {
      live_events: {
        announcementId: "dictionary_intro_live_events",
        flag: "enable_dictionary_intro_live_events_announcement"
      },
      single_video: {
        announcementId: "dictionary_intro_svv",
        flag: "enable_dictionary_intro_svv_announcement"
      },
      workspace_settings: {
        announcementId: "dictionary_settings_intro",
        flag: "enable_dictionary_settings_intro_announcement"
      }
    };
  _v0.s(["AccountDictionaryAnnouncement", 0, ({
    surface: _v0,
    ownerUserId: _v1,
    workspaceUuid: _v2,
    placement: _v3,
    title: _v4,
    body: _v5,
    acknowledgeLabel: _v6,
    onNavigate: _v7,
    anchorProps: _v8,
    children: _v9
  }) => {
    let {
        settings: _v10
      } = (0, _v10.useOrionSettings)(),
      {
        announcementId: _v11,
        flag: _v12
      } = _v17[_v0],
      _v13 = _v10.enable_dictionary_announcements && _v10[_v12] && _v10.enable_account_wide_dictionary_management,
      _v14 = (0, _v13.useAccountDictionaryHasEntries)(_v13 ? _v1 : null),
      _v15 = (_v0 => {
        let {
          data: _v1
        } = (0, _v14.useGetMePreferences)(() => _v0 ? {
          select: [_v15]
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1
        });
        if (void 0 === _v1) return;
        let _v2 = _v1[_v15];
        return _v16("string" == typeof _v2 && _v2.length > 0);
      })(void 0 === _v2 && _v13),
      _v16 = void 0 === _v2 ? _v15 : _v16(_v2.length > 0),
      _v17 = (0, _v2.useRef)(null),
      _v18 = (0, _v12.useOnScreen)(_v17),
      {
        trackDictionaryAnnouncementShown: _v19,
        trackDictionaryAnnouncementCtaClicked: _v20
      } = (0, _v11.useDictionaryAnnouncementTracking)(),
      {
        dismiss: _v21,
        isVisible: _v22
      } = (0, _v3.useAnnouncementOnDisplay)({
        id: _v11,
        isEligible: _v13 && !0 === _v14 && void 0 !== _v16 && _v18
      });
    return (0, _v2.useEffect)(() => {
      _v22 && _v19({
        dictionaryAnnouncementId: _v11,
        dictionaryAnnouncementSurface: _v0
      });
    }, [_v11, _v22, _v0, _v19]), (0, _v1.jsx)(_v4.AnnouncementPopover, {
      isOpen: _v22,
      anchorWithinChildren: !0,
      placement: _v3,
      onAcknowledge: () => {
        _v20({
          dictionaryAnnouncementId: _v11,
          dictionaryAnnouncementSurface: _v0
        }), _v21(), void 0 !== _v16 && _v7(_v16);
      },
      acknowledgeLabel: _v6,
      badge: (0, _v1.jsx)(_v5.Badge, {
        variant: "new",
        size: "sm",
        children: (0, _v1.jsx)(_v8.Text, {
          color: "text-primary",
          variant: "heading-2xs",
          children: (0, _v9.translate)({
            singular: "New",
            dictionary: {
              es: {
                singular: "Nuevo"
              },
              "de-DE": {
                singular: "Neu"
              },
              "fr-FR": {
                singular: "Nouveau"
              },
              "ja-JP": {
                singular: "新規作成"
              },
              "ko-KR": {
                singular: "신규"
              },
              "pt-BR": {
                singular: "Novo"
              },
              "zh-CN": {
                singular: "新"
              }
            }
          })
        })
      }),
      title: _v4,
      body: _v5,
      children: (0, _v1.jsx)(_v7.PopoverAnchor, {
        children: (0, _v1.jsx)(_v6.Box, {
          ref: _v17,
          ..._v8,
          children: _v9
        })
      })
    });
  }], 0);
}