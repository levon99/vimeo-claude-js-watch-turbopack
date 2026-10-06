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
        flag: "enable_dictionary_intro_live_events_announcement",
        requiresExistingEntries: !1
      },
      single_video: {
        announcementId: "dictionary_intro_svv",
        flag: "enable_dictionary_intro_svv_announcement",
        requiresExistingEntries: !1
      },
      workspace_settings: {
        announcementId: "dictionary_settings_intro",
        flag: "enable_dictionary_settings_intro_announcement",
        requiresExistingEntries: !0
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
    let _v10 = (0, _v10.useOrionSettingsFields)(["enable_dictionary_announcements", "enable_account_wide_dictionary_management", "enable_dictionary_intro_live_events_announcement", "enable_dictionary_intro_svv_announcement", "enable_dictionary_settings_intro_announcement"]),
      {
        announcementId: _v11,
        flag: _v12,
        requiresExistingEntries: _v13
      } = _v17[_v0],
      _v14 = _v10.enable_dictionary_announcements && _v10[_v12] && _v10.enable_account_wide_dictionary_management,
      _v15 = (0, _v13.useAccountDictionaryHasEntries)(_v14 ? _v1 : null),
      _v16 = (_v0 => {
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
      })(void 0 === _v2 && _v14),
      _v17 = void 0 === _v2 ? _v16 : _v16(_v2.length > 0),
      _v18 = (0, _v2.useRef)(null),
      _v19 = (0, _v12.useOnScreen)(_v18),
      {
        trackDictionaryAnnouncementShown: _v20,
        trackDictionaryAnnouncementCtaClicked: _v21
      } = (0, _v11.useDictionaryAnnouncementTracking)(),
      {
        dismiss: _v22,
        isVisible: _v23
      } = (0, _v3.useAnnouncementOnDisplay)({
        id: _v11,
        isEligible: _v14 && (_v13 ? !0 === _v15 : !1 === _v15) && void 0 !== _v17 && _v19
      });
    return (0, _v2.useEffect)(() => {
      _v23 && _v20({
        dictionaryAnnouncementId: _v11,
        dictionaryAnnouncementSurface: _v0
      });
    }, [_v11, _v23, _v0, _v20]), (0, _v1.jsx)(_v4.AnnouncementPopover, {
      isOpen: _v23,
      trackingId: _v11,
      anchorWithinChildren: !0,
      placement: _v3,
      onAcknowledge: () => {
        _v21({
          dictionaryAnnouncementId: _v11,
          dictionaryAnnouncementSurface: _v0
        }), _v22(), void 0 !== _v17 && _v7(_v17);
      },
      onClose: _v22,
      showCloseButton: !0,
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
          ref: _v18,
          ..._v8,
          children: _v9
        })
      })
    });
  }], 0);
}