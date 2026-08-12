{
  "use strict";

  let _v1 = {
      WEB: "WEB",
      MOBILE: "MOBILE"
    },
    _v2 = {
      [_v1.WEB]: 0,
      [_v1.MOBILE]: 390
    },
    _v3 = {
      HUGE: "Huge",
      EXTRA_LARGE: "Extra Large",
      LARGE: "Large",
      REGULAR: "Regular"
    },
    _v4 = {
      [_v3.HUGE]: "60px",
      [_v3.EXTRA_LARGE]: "36px",
      [_v3.LARGE]: "22px",
      [_v3.REGULAR]: "16px"
    },
    _v5 = {
      MIXED: "Mixed",
      BOLD: "Bold",
      REGULAR: "Regular",
      ITALIC: "Italic",
      UNDERLINE: "Underline",
      LINK: "Link"
    },
    _v6 = {
      [_v5.MIXED]: "p",
      [_v5.BOLD]: "strong",
      [_v5.REGULAR]: "p",
      [_v5.ITALIC]: "i",
      [_v5.UNDERLINE]: "u"
    },
    _v7 = {
      CONFIRMATION: "CONFIRMATION",
      REMINDER: "REMINDER",
      FOLLOWUP: "FOLLOWUP"
    };
  _v7.CONFIRMATION, _v7.REMINDER, _v7.FOLLOWUP;
  let _v8 = {
      MINUTES: "minutes",
      HOURS: "hours",
      DAYS: "days"
    },
    _v9 = {
      BEFORE: "before",
      AFTER: "after"
    },
    _v10 = {
      value: 1,
      unit: _v8.DAYS,
      direction: _v9.BEFORE
    },
    _v11 = [{
      value: 7,
      unit: _v8.DAYS,
      direction: _v9.BEFORE
    }, {
      value: 3,
      unit: _v8.DAYS,
      direction: _v9.BEFORE
    }, {
      value: 1,
      unit: _v8.DAYS,
      direction: _v9.BEFORE
    }, {
      value: 1,
      unit: _v8.HOURS,
      direction: _v9.BEFORE
    }, {
      value: 10,
      unit: _v8.MINUTES,
      direction: _v9.BEFORE
    }, {
      value: 1,
      unit: _v8.DAYS,
      direction: _v9.AFTER
    }, {
      value: 7,
      unit: _v8.DAYS,
      direction: _v9.AFTER
    }],
    _v12 = {
      [_v8.MINUTES]: 59,
      [_v8.HOURS]: 23,
      [_v8.DAYS]: 90
    },
    _v13 = {
      [_v7.CONFIRMATION]: "Your registration is confirmed",
      [_v7.REMINDER]: "Event Reminder",
      [_v7.FOLLOWUP]: "Event Replay"
    };
  _v0.s(["BROADCAST_ACTIONS", 0, {
    UNDO: "undo",
    REDO: "redo"
  }, "BROADCAST_CHANNEL_NAME", 0, "lead-email-broadcast-channel", "CALENDAR_LIST", 0, ["Google", "Outlook", "iCal"], "CONFIGURABLE_REMINDER_EMAIL_TYPE", 0, "email_event_reminder", "CUSTOM_RANGE_OPTION", 0, "custom_range", "CUSTOM_RANGE_VALUE_MAX", 0, _v12, "DEFAULT_REMINDER_OFFSET", 0, _v10, "EMAIL_ADDRESS", 0, "Email address", "EMAIL_AUTO_SAVE_DEBOUNCED_INTERVAL", 0, 0, "EMAIL_CUSTOMIZATION_FIELDS", 0, ["accentColor", "emailReminders.reminderId", "emailReminders.enabled", "emailReminders.offset.value", "emailReminders.offset.unit", "emailReminders.offset.direction", "emailReminders.content.custom", "emailReminders.content.default", "emailEventReminder_24Hrs.default", "emailPostEventThankYou.custom", "emailPostEventThankYou.default", "emailRegistrationConfirmation.custom", "emailRegistrationConfirmation.default", "emailPreferences", "followUpSendOn", "followUpSender.name", "followUpSender.uri", "from", "logoUri", "pictures", "replyEmail", "senderAddress", "senderPolicyUrl", "useReplyEmail", "useSenderAddress", "useSenderPolicyUrl"], "EMAIL_LIST_FORMAT", 0, {
    BULLETED: "bulletList",
    NUMBERED: "orderedList"
  }, "EMAIL_LOGOS_CACHE_KEY", 0, "email_logo_cache_key", "EMAIL_MAX_LENGTH", 0, {
    SUBJECT: 100,
    FROM: 32,
    LINK: 250,
    BUTTON_TEXT: 50,
    FOOTER_ADDRESS: 100,
    EDITOR_TEXT: 0
  }, "EMAIL_PREVIEW_MODE", 0, _v1, "EMAIL_TEXT_FORMAT", 0, {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right"
  }, "EMAIL_TEXT_SIZE", 0, _v3, "EMAIL_TEXT_SIZE_VALUES", 0, _v4, "EMAIL_TEXT_STYLE", 0, _v5, "EMAIL_TEXT_STYLE_VALUES", 0, _v6, "EMAIL_TEXT_TIP_LINK", 0, "https://vimeo.zendesk.com/hc/articles/4405488058381-Preview-and-customize-your-webinar-s-emails", "EMAIL_TOGGLE_MAP", 0, {
    COLOR: "accentColor",
    CONFIRMATION: "confirmation",
    FOLLOWUP: "followUp",
    FOOTER_REPLY_MAIL: "useReplyEmail",
    FOOTER_COMPANY_ADDRESS: "useSenderAddress",
    FOOTER_POLICY_LINK: "useSenderPolicyUrl"
  }, "EMAIL_TOOLBAR_TYPES", 0, {
    BODY: "BODY",
    BUTTON: "BUTTON",
    TITLE: "TITLE",
    GENERAL: "GENERAL",
    SUBJECT: "SUBJECT"
  }, "EMAIL_TYPES", 0, _v7, "EMAIL_TYPE_TEXT", 0, _v13, "EMAIL_UNDO_REDO_DEBOUNCED_INTERVAL", 0, 0, "ENTITY_STATUS", 0, {
    STARTED: "started",
    ENDED: "ended",
    EMPTY: null
  }, "FALLBACK_PLAYER_CUSTOM_LOGO", 0, "https://i.vimeocdn.com/custom_asset/1529", "KEY_CODES", 0, {
    TAB: "Tab",
    ENTER: "Enter",
    ESCAPE: "Escape"
  }, "LEGACY_REMINDER_ID", 0, "reminder_24_hrs", "LIVE_EVENT_API_FIELDS", 0, ["user", "uri", "title", "link", "metadata", "streamPrivacy", "schedule", "emailQuota", "status", "completedOn"], "MAX_REMINDERS", 0, 10, "PREVIEW_WIDTH", 0, _v2, "REMINDER_DIRECTIONS", 0, _v9, "REMINDER_OFFSET_PRESETS", 0, _v11, "REMINDER_OFFSET_UNITS", 0, _v8, "SUPPORTED_IMAGE_FILES", 0, "image/png,image/x-png,image/jpeg,.jpg,.jpeg,.png", "TABLET_SIZE", 0, 768, "TEST_EMAIL_TEMPLATE", 0, {
    CONFIRMATION: "email_registration_confirmation",
    REMINDER: "email_event_reminder_24_hrs",
    FOLLOWUP: "email_post_event_thank_you"
  }, "TRAIL_STATUS", 0, "free_trial", "VIMEO", 0, "Vimeo", "logoFetchOptions", 0, {
    sizes: "500"
  }], 0);
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  async function _v18({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v16.measureLatency)("getUserTeamLogos", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/team_logos?${(0, _v17.searchQueryString)(_v3)}&fields=${_v1.map(_v17.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  async function _v19({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v16.measureLatency)("postUserTeamLogos", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/team_logos?fields=${_v1.map(_v17.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST"
      });
      if (!_v0.ok) throw new _v17.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v17.deepCamelCase)(_v1);
    });
  }
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  function _v25() {
    let {
        mutate: _v0
      } = (0, _v22.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v24.useGctlConfig)(),
      [_v5, _v6] = (0, _v15.useInternalState)();
    return [(0, _v20.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/team_logos${(0, _v15.serializeQuery)(_v0)}`, _v18({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  function _v26() {
    let {
        baseUrl: _v0,
        jwt: _v1,
        xVimeoPage: _v2,
        locale: _v3
      } = (0, _v24.useGctlConfig)(),
      [_v4, _v5] = (0, _v15.useInternalState)();
    return [(0, _v20.useCallback)(async _v0 => {
      _v5({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v19({
          ..._v0,
          baseUrl: _v0,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : "",
            "Vimeo-Page": `${_v2}`,
            "Accept-Language": _v3 ?? "en"
          }
        });
        _v5({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v5({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v0, _v2, _v1, _v3, _v5]), _v4];
  }
  "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v24.useGctlConfig)();
    return (0, _v21.default)(_v2 ? `/users/${_v2.where.userId}/team_logos${(0, _v15.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v18({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/team_logos",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(_v25, {
    endpoint: "/users/:userId/team_logos",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v24.useGctlConfig)();
    return (0, _v23.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/users/${_v2.where.userId}/team_logos?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v18({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/team_logos",
    method: "GET"
  }), "true" === _v14.default.env.STORYBOOK && (0, _v15.assignMswData)(_v26, {
    endpoint: "/users/:userId/team_logos",
    method: "POST"
  }), _v0.s(["useGetUserTeamLogosLazy", 0, _v25, "usePostUserTeamLogos", 0, _v26], 0);
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  _v0.s(["NumberedList", 0, _v0 => (0, _v27.jsx)(_v28.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v27.jsx)("path", {
      d: "M8 20H5v-.1c0-.5.4-.9.9-.9 1.4 0 2.6-.9 3-2.2.4-1.6-.5-3.3-2.1-3.7-1.3-.4-2.7.2-3.4 1.4-.3.5-.1 1.1.4 1.4.5.3 1.1.1 1.4-.4.3-.5.9-.6 1.4-.3.1.1.2.1.2.2.2.3.2.6.2.9-.2.4-.6.7-1 .7-1.7 0-3 1.3-3 2.9V21c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1Zm4-13h8c.6 0 1-.4 1-1s-.4-1-1-1h-8c-.6 0-1 .4-1 1s.4 1 1 1ZM8 9H7V3c0-.6-.4-1-1-1s-1 .4-1 1v1H4c-.6 0-1 .4-1 1s.4 1 1 1h1v3H4c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1Zm12 7h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1Z",
      fill: "currentColor"
    })
  })], 0);
}