{
  "use strict";

  var _v1,
    _v2 = ((_v1 = {}).MEMORY = "MEMORY", _v1.SESSION = "SESSION", _v1.LOCAL_STORAGE = "LOCAL_STORAGE", _v1.INDEXED_DB = "INDEXED_DB", _v1);
  _v0.s(["EFirebasePersistenceType", () => _v2], 0);
  let _v3 = {
    AUTH: {
      DEFAULT_PERSISTENCE_TYPE: _v2.MEMORY
    },
    REFS: {
      INTERNAL: {
        CONNECTION_STATE: ".info/connected",
        SERVER_TIME_OFFSET: ".info/serverTimeOffset"
      },
      INTERACTION: {
        CHAT: {
          META: _v0 => `/chats/${_v0}/meta`,
          META_ENABLED: _v0 => `${_v3.REFS.INTERACTION.CHAT.META(_v0)}/enabled`,
          PUBLIC: _v0 => `/chats/${_v0}/chat`,
          GUEST: _v0 => `/backstage/${_v0}/chat`,
          PUBLIC_BANS: _v0 => `/chats/${_v0}/users/bans`
        },
        POLLS: {
          ACTIVE: _v0 => `/chats/${_v0}/meta/activePollId`,
          LIST: _v0 => `/polls/${_v0}/poll`
        },
        QNA: {
          SESSIONS: (_v0, _v1 = "") => `/qna/${_v0}/sessions${_v1 ? `/${_v1}` : ""}`,
          ACTIVE_ID: _v0 => `/chats/${_v0}/meta/activeQnASessionId`,
          MODERATION: _v0 => `/settings/${_v0}/isQnaModerated`,
          ANONYMOUS_QUESTIONS: _v0 => `/settings/${_v0}/isAnonymousQuestionsDisabled`,
          REPLIES_SESSIONS: _v0 => `/qna_replies/${_v0}/sessions`
        }
      },
      STREAM_HEALTH: {
        APP_NAME: _v0 => `live-event-${_v0}`
      },
      COMPOSER: {
        ACTIVE_BROADCASTER: _v0 => `/active_broadcaster/${_v0}`,
        PARTICIPANTS: (_v0, _v1) => `/participants/${_v0}${_v1 ? `/${_v1}` : ""}`,
        SCENE: {
          ACTIVE_SCENE: _v0 => `/active_scene/${_v0}`,
          SCENES: _v0 => `/scenes/${_v0}`,
          SCENE_ORDER: _v0 => `/scenes_order/${_v0}`
        },
        GUESTS: {
          GUESTS: _v0 => `/guests/${_v0}`,
          GUEST_INVITES: _v0 => `/guest_invites/${_v0}`,
          GUEST_SETTINGS: _v0 => `/guest_settings/${_v0}`
        },
        GRAPHICS: {
          ROOT: _v0 => `/graphics/${_v0}`,
          GRAPHICS: (_v0, _v1) => `/graphics/${_v0}/${_v1}`
        },
        THEME: _v0 => `/theme/${_v0}`,
        SNAPSHOTS: _v0 => `/graphics_snapshots/${_v0}`,
        SETTINGS: _v0 => `/composer_settings/${_v0}`,
        DEBUG: {
          DEBUG_INFO: _v0 => `/debug/${_v0}`
        }
      }
    }
  };
  _v0.s(["firebaseConfig", 0, _v3], 0);
}