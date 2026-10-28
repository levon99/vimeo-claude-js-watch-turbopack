{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.DEFAULT_PRECISION = _v2.SEARCH_PRECISION = _v2.OMNISEARCH_CSAT_KEY = _v2.SEARCH_TYPE_COPY = _v2.SEARCH_TYPE = _v2.OMNISEARCH_ACTIONS = _v2.MAX_VISITS_TO_COUNT = _v2.CLEAR_ALL_BUTTON = _v2.TEMPLATES_BASE_URL = _v2.SEARCH_FIELDS = _v2.DARK_MODE = _v2.MAX_ELIHP_RESULTS = _v2.SELECT_OPTION = _v2.TEST_PREFIX = _v2.formEventTypeToAction = _v2.MAX_RECENTLY_MODIFIED = _v2.RESULTS_PER_PAGE = _v2.NUM_RECENT_SEARCHES = _v2.MAX_SUGGESTIONS = _v2.NUM_CACHE_KEYS_PER_CACHE = _v2.SRI_TIMEOUT_MS = _v2.AUTOCOMPLETE_DEBOUNCE_MS = _v2.WITHIN_PIXEL_FETCH = _v2.PREF_HAS_SEEN_KEY = _v2.DESKTOP = _v2.TABLET = _v2.MOBILE = _v2.MyVideosPictureSizesIndex = _v2.KeyCodes = _v2.SearchTypeMap = _v2.SourceAndEntityMap = _v2.EQLTranslationsMap = _v2.ActionTypes = _v2.Layout = _v2.translatedWidgets = _v2.WidgetQualifierToRequestEntity = _v2.ActiveWidgetToRequestEntity = _v2.WidgetQualifier = _v2.WidgetCommand = _v2.WidgetId = _v2.WidgetName = _v2.Item = _v2.SuggestionTypes = _v2.GlobalFontFamily = _v2.SearchRequestEntities = _v2.SearchRequestSourceNames = _v2.ResultTypes = void 0;
  var _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
    _v12,
    _v13,
    _v14,
    _v15,
    _v16,
    _v17,
    _v18,
    _v19,
    _v20,
    _v21,
    _v22,
    _v23,
    _v24,
    _v25,
    _v26,
    _v27,
    _v28,
    _v29 = _v0.r(0);
  (_v3 = _v2.ResultTypes || (_v2.ResultTypes = {})).GlobalSearch = "global_search", _v3.VideoLibrarySearch = "video_library_search", _v3.CcSuggestion = "cc_suggestion", _v3.ocrSuggestion = "ocr_suggestion", _v3.VcTemplateSearch = "vc_template_search", _v3.FolderFilterSuggestion = "folder_filter_suggestion", _v3.RecentVideoSuggestions = "recent_video_suggestion", (_v4 = _v23 = _v2.SearchRequestSourceNames || (_v2.SearchRequestSourceNames = {})).Omnisearch = "omnisearch", _v4.Public = "public", _v4.Vls = "vls", _v4.VlsLocationFilter = "vls_location_filter", _v4.Android = "android", _v4.VideoManager = "video_manager", _v4.Showcase = "showcase", _v4.Player = "player", _v4.VimeoCreate = "vimeo_create", _v4.Api = "api", _v4.Svv = "svv", _v4.CommandPalette = "command_palette", (_v5 = _v24 = _v2.SearchRequestEntities || (_v2.SearchRequestEntities = {})).Clip = "clip", _v5.Folder = "folder", _v5.User = "user", _v5.Channel = "channel", _v5.Group = "group", _v5.Creator = "creator", _v5.Job = "job", _v5.Stock = "stock", _v5.Template = "template", _v5.File = "file", _v5.LiveEvent = "live_event", _v5.Category = "category", _v5.Caption = "caption", _v5.Ondemand = "ondemand", _v5.Search = "search", _v5.Command = "command", _v5.Type = "type", _v5.Team = "team", _v5.TeamGroup = "team_group", _v2.GlobalFontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif', (_v6 = _v2.SuggestionTypes || (_v2.SuggestionTypes = {})).VideoManager = "video_manager", _v6.Suggestion = "suggestion", _v6.RecentSearch = "recent_search", (_v7 = _v2.Item || (_v2.Item = {})).Switch = "switch", _v7.Folder = "folder", _v7.Video = "video", _v7.Template = "template", _v7.File = "file", _v7.LiveEvent = "live_event", (_v8 = _v25 = _v2.WidgetName || (_v2.WidgetName = {})).switch = "Switch", _v8.video = "Videos", _v8.folder = "Folders", _v8.template = "Templates", _v8.files = "Files", (_v9 = _v26 = _v2.WidgetId || (_v2.WidgetId = {})).switch = "switch", _v9.videos = "videos", _v9.folders = "folders", _v9.templates = "templates", _v9.files = "files", (_v27 = _v2.WidgetCommand || (_v2.WidgetCommand = {})).switch = "switch", (_v10 = _v28 = _v2.WidgetQualifier || (_v2.WidgetQualifier = {})).command = "command", _v10.in = "in", _v10.type = "type", (_v15 = {})[_v25.video] = _v24.Clip, _v15[_v25.folder] = _v24.Folder, _v15[_v25.template] = _v24.Template, _v15[_v25.files] = _v24.File, _v15[_v25.switch] = _v24.Team, _v2.ActiveWidgetToRequestEntity = _v15, (_v16 = {})[_v28.type] = _v24.Type, _v16[_v28.command] = _v24.Command, _v16[_v28.in] = _v24.Folder, _v2.WidgetQualifierToRequestEntity = _v16, _v2.translatedWidgets = function (_v0, _v1, _v2) {
    var _v3;
    return ((_v3 = {})[_v28.type] = [{
      id: _v26.videos,
      filterValue: "clips",
      displayedText: _v25.video,
      filter: "video",
      qualifier: _v28.type,
      searchField: _v25.video,
      translatedQualifier: _v0("" + _v28.type),
      translatedText: _v0("" + _v25.video),
      csatAction: _v2.OMNISEARCH_ACTIONS.videoFilter
    }, {
      id: _v26.folders,
      filterValue: "folders",
      displayedText: _v25.folder,
      filter: "folder",
      qualifier: _v28.type,
      searchField: _v25.folder,
      translatedQualifier: _v0("" + _v28.type),
      translatedText: _v0("" + _v25.folder),
      csatAction: _v2.OMNISEARCH_ACTIONS.folderFilter
    }, _v2 && {
      id: _v26.templates,
      filterValue: "vc_templates",
      displayedText: _v25.template,
      filter: "vc_template",
      qualifier: _v28.type,
      searchField: _v25.template,
      translatedQualifier: _v0("" + _v28.type),
      translatedText: _v0("" + _v25.template),
      csatAction: _v2.OMNISEARCH_ACTIONS.templateFilter
    }].filter(Boolean), _v3[_v28.command] = [{
      id: _v26.switch,
      filterValue: "switch",
      displayedText: _v27.switch,
      qualifier: _v28.command,
      searchField: _v25.switch,
      translatedQualifier: _v0("" + _v28.command),
      translatedText: _v0("" + _v27.switch),
      csatAction: _v2.OMNISEARCH_ACTIONS.switchCommand
    }], _v3)[_v1];
  }, (_v11 = _v2.Layout || (_v2.Layout = {}))[_v11.Card = 0] = "Card", _v11[_v11.Flat = 1] = "Flat", (_v12 = _v2.ActionTypes || (_v2.ActionTypes = {})).keydownenter = "keydownenter", _v12.keydownspace = "keydownspace", _v12.click = "click", (_v13 = _v2.EQLTranslationsMap || (_v2.EQLTranslationsMap = {}))[_v13.qualifier = 0] = "qualifier", _v13[_v13.argument = 1] = "argument", _v13[_v13.command = 2] = "command";
  var _v30 = ((_v17 = {})[_v24.Clip] = {
    uri: "/search/library",
    queryParam: "filter_type=video",
    getLabel: function (_v0) {
      return void 0 === _v0 && (_v0 = !1), _v0 ? "My library" : "My videos";
    }
  }, _v17[_v24.Folder] = {
    uri: "/search/library",
    label: "My folders",
    queryParam: "filter_type=folder"
  }, _v17[_v24.Search] = {
    uri: "/search/library",
    queryParam: "",
    getLabel: function (_v0) {
      return void 0 === _v0 && (_v0 = !1), _v0 ? "My library" : "My videos";
    }
  }, _v17[_v24.Caption] = {
    uri: "/search/library",
    queryParam: "",
    getLabel: function (_v0) {
      return void 0 === _v0 && (_v0 = !1), _v0 ? "My library" : "My videos";
    }
  }, _v17);
  (_v18 = {})[_v23.Public] = ((_v19 = {})[_v24.Clip] = {
    uri: "/search",
    label: "Vimeo"
  }, _v19[_v24.Channel] = {
    uri: "/search/channel",
    label: "Channels"
  }, _v19[_v24.Group] = {
    uri: "/search/group",
    label: "Groups"
  }, _v19[_v24.User] = {
    uri: "/search/people",
    label: "People"
  }, _v19[_v24.Ondemand] = {
    uri: "/search/ondemand",
    label: "On Demand"
  }, _v19[_v24.Stock] = {
    uri: "/search/stock",
    label: "Stock"
  }, _v19[_v24.Creator] = {
    uri: "/search/marketplace/creator",
    label: "Creators"
  }, _v19[_v24.Job] = {
    uri: "/search/marketplace/job",
    label: "Jobs"
  }, _v19), _v18[_v23.Omnisearch] = _v29.__assign(_v29.__assign({}, _v30), ((_v20 = {})[_v24.Template] = {
    uri: "/create/templates",
    label: "Templates"
  }, _v20)), _v18[_v23.Vls] = _v29.__assign({}, _v30), _v18[_v23.VideoManager] = _v29.__assign({}, _v30), _v18[_v23.Svv] = _v29.__assign({}, _v30), _v18.noResults = {
    label: ""
  }, _v2.SourceAndEntityMap = _v18, _v2.SearchTypeMap = {
    "search.clip": {
      uri: "/search",
      label: "Vimeo"
    },
    "search.channel": {
      uri: "/search/channel",
      label: "Channels"
    },
    "search.group": {
      uri: "/search/group",
      label: "Groups"
    },
    "search.people": {
      uri: "/search/people",
      label: "People"
    },
    "search.ondemand": {
      uri: "/search/ondemand",
      label: "On Demand"
    },
    "search.stock": {
      uri: "/search/stock",
      label: "Stock"
    },
    "search.marketplace-creator": {
      uri: "/search/marketplace/creator",
      label: "Creators"
    },
    "search.marketplace-job": {
      uri: "/search/marketplace/job",
      label: "Jobs"
    },
    noResults: {
      label: ""
    }
  }, (_v14 = _v2.KeyCodes || (_v2.KeyCodes = {}))[_v14.Enter = 13] = "Enter", _v14[_v14.Up = 38] = "Up", _v14[_v14.Down = 40] = "Down", _v14[_v14.Esc = 27] = "Esc", _v14[_v14.Tab = 9] = "Tab", _v14[_v14.Space = 32] = "Space", _v14[_v14.Backspace = 8] = "Backspace", _v2.MyVideosPictureSizesIndex = 0, _v2.MOBILE = "23.4375em", _v2.TABLET = "46.875em", _v2.DESKTOP = "68.75em", _v2.PREF_HAS_SEEN_KEY = "srhsot", _v2.WITHIN_PIXEL_FETCH = 100, _v2.AUTOCOMPLETE_DEBOUNCE_MS = 400, _v2.SRI_TIMEOUT_MS = 200, _v2.NUM_CACHE_KEYS_PER_CACHE = 50, _v2.MAX_SUGGESTIONS = 5, _v2.NUM_RECENT_SEARCHES = 5, _v2.RESULTS_PER_PAGE = 5, _v2.MAX_RECENTLY_MODIFIED = 4, _v2.formEventTypeToAction = {
    keydownenter: "keydownenter",
    keydownspace: "keydownspace",
    mousedown: "click"
  }, _v2.TEST_PREFIX = "search-ui-test", _v2.SELECT_OPTION = "select-option", _v2.MAX_ELIHP_RESULTS = 5, _v2.DARK_MODE = "dark", (_v21 = {})[_v25.video] = ["video.id", "video.name", "video.uri", "video.last_user_action_event_date", "video.link", "video.review_page.link", "video.pictures", "video.metadata.interactions.edit", "video.manage_link", "video.privacy.view", "meta"], _v21[_v25.folder] = ["folder.name", "folder.uri", "folder.last_user_action_event_date", "folder.metadata.connections.items.uri", "folder.metadata.connections.items.total"], _v21[_v25.files] = ["file.uri", "file.public_id", "file.name", "file.content_type", "file.file_size", "file.thumbnail", "file.upload_state", "file.privacy"], _v21[_v25.switch] = ["owner.uri", "owner.name", "owner.pictures", "team_data.id", "team_data.owner_id", "team_data.logo_uri", "team_data.accent_color", "team_data.team_name", "team_data.pictures.sizes", "user_role", "has_team_management", "team_data.team_showcase_id"], _v2.SEARCH_FIELDS = _v21, _v2.TEMPLATES_BASE_URL = "/create/templates", _v2.CLEAR_ALL_BUTTON = "clear-all", _v2.MAX_VISITS_TO_COUNT = 999, _v2.OMNISEARCH_ACTIONS = {
    changeSearchTerm: "change_search_term",
    clearRecentSearches: "clear_recent_searches",
    folderFilter: "folder_filter",
    videoFilter: "video_filter",
    templateFilter: "template_filter",
    fileFilter: "file_filter",
    videoClick: "video_click",
    fileClick: "file_click",
    folderClick: "folder_click",
    templateClick: "template_click",
    vlsClick: "vls_click",
    serpClick: "serp_click",
    copyLinkClick: "copy_link_click",
    switchCommand: "switch_command",
    typeCommand: "type_command",
    inFolderSearch: "in_folder_search"
  }, _v2.SEARCH_TYPE = {
    MyLibrary: "MyLibrary",
    Vimeo: "Vimeo"
  }, (_v22 = {})[_v2.SEARCH_TYPE.Vimeo] = "Search all of Vimeo", _v22[_v2.SEARCH_TYPE.MyLibrary] = "Search Library", _v2.SEARCH_TYPE_COPY = _v22, _v2.OMNISEARCH_CSAT_KEY = "omnisearch_csat", _v2.SEARCH_PRECISION = "search_precision", _v2.DEFAULT_PRECISION = 3;
}