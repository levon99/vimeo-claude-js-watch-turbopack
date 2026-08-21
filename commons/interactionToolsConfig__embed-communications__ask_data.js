{
  "use strict";

  _v0.s(["interactionToolsConfig", 0, {
    CHAT: {
      ASK_TO_DELETE_CHAT_MESSAGE: !0,
      MESSAGE_SENDING_THROTTLE: 500,
      IN_MEMORY_MESSAGES_BUFFER: 50,
      IN_MEMORY_MESSAGES_LIMIT: 100,
      MAX_MESSAGE_LENGTH: 512,
      MESSAGE_UPDATE_THROTTLE: 300
    },
    QNA: {
      MAX_QUESTION_LENGTH: 240,
      MAX_QUESTION_REPLY_LENGTH: 240,
      QNA_POSTED_AT_REFRESH_PERIOD: 0,
      QUESTION_ASKING_THROTTLE: 0,
      QUESTION_REPLY_THROTTLE: 0,
      QNA_REPLIES_UPDATE_THROTTLE: 300,
      JUST_NOW_THRESHOLD: 0
    },
    POLLS: {
      MAX_QUESTION_LENGTH: 120,
      MAX_OPTION_LENGTH: 120,
      MAX_OPTION_COUNT: 4
    },
    EXPORT_DOWNLOAD_THROTTLE_DELAY: 0,
    REGEXP: {
      DEFAULT_LINK: /(?:(?:(?:https?|ftp):)?\/\/)?(?:\S+(?::\S*)?@)?(?:(?:[\da-z\u00A1-\uFFFF][\w\u00A1-\uFFFF-]{0,62})?[\da-z\u00A1-\uFFFF]\.)*(?:(?:\d(?!\.)|[a-z\u00A1-\uFFFF])(?:[\da-z\u00A1-\uFFFF][\w\u00A1-\uFFFF-]{0,62})?[\da-z\u00A1-\uFFFF]\.)+[a-z\u00A1-\uFFFF]{2,}(?::\d{2,5})?(?:[#/?]\S*)?/gi,
      LINK_PROTOCOL: /((https?|ftp):\/\/)/
    },
    AUTHORIZATION: {
      MIN_DISPLAYNAME_LENGTH: 1,
      MAX_DISPLAYNAME_LENGTH: 40,
      ROOM_GUEST_CODE_LENGTH: 36,
      REGISTRANT_COOKIE: _v0 => `${_v0}_webinar_registrant`
    },
    INTERACTION_ROOM_STATUS_POLLING_INTERVAL: 0,
    BROADCAST_CHANNEL: {
      NAME: "embed-communications",
      MESSAGE_TYPE: {
        ASK_DATA: "ask_data",
        NEW_DATA: "new_data"
      }
    }
  }]);
}