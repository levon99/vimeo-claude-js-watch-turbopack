{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.DEFAULT_PRECISION = _v2.SEARCH_PRECISION = _v2.OMNISEARCH_CSAT_KEY = _v2.SEARCH_TYPE_COPY = _v2.SEARCH_TYPE = _v2.OMNISEARCH_ACTIONS = _v2.MAX_VISITS_TO_COUNT = _v2.CLEAR_ALL_BUTTON = _v2.TEMPLATES_BASE_URL = _v2.SEARCH_FIELDS = _v2.DARK_MODE = _v2.MAX_ELIHP_RESULTS = _v2.BP_PLATFORM_ENUMS = _v2.SELECT_OPTION = _v2.TEST_PREFIX = _v2.formEventTypeToAction = _v2.MAX_RECENTLY_MODIFIED = _v2.RESULTS_PER_PAGE = _v2.NUM_RECENT_SEARCHES = _v2.MAX_SUGGESTIONS = _v2.NUM_CACHE_KEYS_PER_CACHE = _v2.SRI_TIMEOUT_MS = _v2.AUTOCOMPLETE_DEBOUNCE_MS = _v2.WITHIN_PIXEL_FETCH = _v2.PREF_HAS_SEEN_KEY = _v2.DESKTOP = _v2.TABLET = _v2.MOBILE = _v2.MyVideosPictureSizesIndex = _v2.KeyCodes = _v2.SearchTypeMap = _v2.SourceAndEntityMap = _v2.EQLTranslationsMap = _v2.ActionTypes = _v2.Layout = _v2.translatedWidgets = _v2.WidgetQualifierToRequestEntity = _v2.ActiveWidgetToRequestEntity = _v2.WidgetQualifier = _v2.WidgetCommand = _v2.WidgetId = _v2.WidgetName = _v2.Item = _v2.SuggestionTypes = _v2.GlobalFontFamily = _v2.EventVersions = _v2.SearchRequestMethods = _v2.SearchRequestEntities = _v2.OmnisearchSearchRequestComponents = _v2.SearchRequestSourceNames = _v2.BigPictureResultTypes = _v2.BigPictureEventTypes = void 0;
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
    _v29,
    _v30,
    _v31,
    _v32,
    _v33,
    _v34 = _v0.r(0);
  (_v3 = _v27 = _v2.BigPictureEventTypes || (_v2.BigPictureEventTypes = {})).SearchRequest = "search_request", _v3.SearchResult = "search_result", _v3.SearchResultInteraction = "search_result_interaction", _v3.VimeoWebGlobal = "vimeo.web_global", _v3.CopyVideoShareLink = "workflow.copy_video_share_link", _v3.SearchResultsFeedback = "vimeo.search_results_feedback", _v3.GenericClick = "vimeo.click", (_v4 = _v2.BigPictureResultTypes || (_v2.BigPictureResultTypes = {})).GlobalSearch = "global_search", _v4.VideoLibrarySearch = "video_library_search", _v4.CcSuggestion = "cc_suggestion", _v4.ocrSuggestion = "ocr_suggestion", _v4.VcTemplateSearch = "vc_template_search", _v4.FolderFilterSuggestion = "folder_filter_suggestion", _v4.RecentVideoSuggestions = "recent_video_suggestion", (_v5 = _v28 = _v2.SearchRequestSourceNames || (_v2.SearchRequestSourceNames = {})).Omnisearch = "omnisearch", _v5.Public = "public", _v5.Vls = "vls", _v5.VlsLocationFilter = "vls_location_filter", _v5.Android = "android", _v5.VideoManager = "video_manager", _v5.Showcase = "showcase", _v5.Player = "player", _v5.VimeoCreate = "vimeo_create", _v5.Api = "api", _v5.Svv = "svv", _v5.CommandPalette = "command_palette", (_v6 = _v2.OmnisearchSearchRequestComponents || (_v2.OmnisearchSearchRequestComponents = {})).V1Heading = "v1.heading", _v6.V1Main = "v1.main", _v6.V1Footer = "v1.footer", (_v7 = _v29 = _v2.SearchRequestEntities || (_v2.SearchRequestEntities = {})).Clip = "clip", _v7.Folder = "folder", _v7.User = "user", _v7.Channel = "channel", _v7.Group = "group", _v7.Creator = "creator", _v7.Job = "job", _v7.Stock = "stock", _v7.Template = "template", _v7.Category = "category", _v7.Caption = "caption", _v7.Ondemand = "ondemand", _v7.Search = "search", _v7.Command = "command", _v7.Type = "type", _v7.Team = "team", _v7.TeamGroup = "team_group", (_v8 = _v2.SearchRequestMethods || (_v2.SearchRequestMethods = {})).Autocomplete = "autocomplete", _v8.Autosuggest = "autosuggest", _v8.Browse = "browse", _v8.Command = "command", _v8.Clipstream = "clipstream", _v8.Sayt = "sayt", _v8.Search = "search", (_v18 = {})[_v27.SearchRequest] = 15, _v18[_v27.SearchResult] = 14, _v18[_v27.SearchResultInteraction] = 8, _v18[_v27.VimeoWebGlobal] = 5, _v18[_v27.CopyVideoShareLink] = 4, _v18[_v27.SearchResultsFeedback] = 1, _v18[_v27.GenericClick] = 111, _v2.EventVersions = _v18, _v2.GlobalFontFamily = '"Helvetica Neue", Helvetica, Arial, sans-serif', (_v9 = _v2.SuggestionTypes || (_v2.SuggestionTypes = {})).VideoManager = "video_manager", _v9.Suggestion = "suggestion", _v9.RecentSearch = "recent_search", (_v10 = _v2.Item || (_v2.Item = {})).Switch = "switch", _v10.Folder = "folder", _v10.Video = "video", _v10.Template = "template", (_v11 = _v30 = _v2.WidgetName || (_v2.WidgetName = {})).switch = "Switch", _v11.video = "Videos", _v11.folder = "Folders", _v11.template = "Templates", (_v12 = _v31 = _v2.WidgetId || (_v2.WidgetId = {})).switch = "switch", _v12.videos = "videos", _v12.folders = "folders", _v12.templates = "templates", (_v32 = _v2.WidgetCommand || (_v2.WidgetCommand = {})).switch = "switch", (_v13 = _v33 = _v2.WidgetQualifier || (_v2.WidgetQualifier = {})).command = "command", _v13.in = "in", _v13.type = "type", (_v19 = {})[_v30.video] = _v29.Clip, _v19[_v30.folder] = _v29.Folder, _v19[_v30.template] = _v29.Template, _v19[_v30.switch] = _v29.Team, _v2.ActiveWidgetToRequestEntity = _v19, (_v20 = {})[_v33.type] = _v29.Type, _v20[_v33.command] = _v29.Command, _v20[_v33.in] = _v29.Folder, _v2.WidgetQualifierToRequestEntity = _v20, _v2.translatedWidgets = function (_v0, _v1, _v2) {
    var _v3;
    return ((_v3 = {})[_v33.type] = [{
      id: _v31.videos,
      bigPictureFilter: "clips",
      displayedText: _v30.video,
      filter: "video",
      qualifier: _v33.type,
      searchField: _v30.video,
      translatedQualifier: _v0("" + _v33.type),
      translatedText: _v0("" + _v30.video),
      csatAction: _v2.OMNISEARCH_ACTIONS.videoFilter
    }, {
      id: _v31.folders,
      bigPictureFilter: "folders",
      displayedText: _v30.folder,
      filter: "folder",
      qualifier: _v33.type,
      searchField: _v30.folder,
      translatedQualifier: _v0("" + _v33.type),
      translatedText: _v0("" + _v30.folder),
      csatAction: _v2.OMNISEARCH_ACTIONS.folderFilter
    }, _v2 && {
      id: _v31.templates,
      bigPictureFilter: "vc_templates",
      displayedText: _v30.template,
      filter: "vc_template",
      qualifier: _v33.type,
      searchField: _v30.template,
      translatedQualifier: _v0("" + _v33.type),
      translatedText: _v0("" + _v30.template),
      csatAction: _v2.OMNISEARCH_ACTIONS.templateFilter
    }].filter(Boolean), _v3[_v33.command] = [{
      id: _v31.switch,
      bigPictureFilter: "switch",
      displayedText: _v32.switch,
      qualifier: _v33.command,
      searchField: _v30.switch,
      translatedQualifier: _v0("" + _v33.command),
      translatedText: _v0("" + _v32.switch),
      csatAction: _v2.OMNISEARCH_ACTIONS.switchCommand
    }], _v3)[_v1];
  }, (_v14 = _v2.Layout || (_v2.Layout = {}))[_v14.Card = 0] = "Card", _v14[_v14.Flat = 1] = "Flat", (_v15 = _v2.ActionTypes || (_v2.ActionTypes = {})).keydownenter = "keydownenter", _v15.keydownspace = "keydownspace", _v15.click = "click", (_v16 = _v2.EQLTranslationsMap || (_v2.EQLTranslationsMap = {}))[_v16.qualifier = 0] = "qualifier", _v16[_v16.argument = 1] = "argument", _v16[_v16.command = 2] = "command";
  var _v35 = ((_v21 = {})[_v29.Clip] = {
    uri: "/search/library",
    queryParam: "filter_type=video",
    getLabel: function (_v0) {
      return void 0 === _v0 && (_v0 = !1), _v0 ? "My library" : "My videos";
    }
  }, _v21[_v29.Folder] = {
    uri: "/search/library",
    label: "My folders",
    queryParam: "filter_type=folder"
  }, _v21[_v29.Search] = {
    uri: "/search/library",
    queryParam: "",
    getLabel: function (_v0) {
      return void 0 === _v0 && (_v0 = !1), _v0 ? "My library" : "My videos";
    }
  }, _v21[_v29.Caption] = {
    uri: "/search/library",
    queryParam: "",
    getLabel: function (_v0) {
      return void 0 === _v0 && (_v0 = !1), _v0 ? "My library" : "My videos";
    }
  }, _v21);
  (_v22 = {})[_v28.Public] = ((_v23 = {})[_v29.Clip] = {
    uri: "/search",
    label: "Vimeo"
  }, _v23[_v29.Channel] = {
    uri: "/search/channel",
    label: "Channels"
  }, _v23[_v29.Group] = {
    uri: "/search/group",
    label: "Groups"
  }, _v23[_v29.User] = {
    uri: "/search/people",
    label: "People"
  }, _v23[_v29.Ondemand] = {
    uri: "/search/ondemand",
    label: "On Demand"
  }, _v23[_v29.Stock] = {
    uri: "/search/stock",
    label: "Stock"
  }, _v23[_v29.Creator] = {
    uri: "/search/marketplace/creator",
    label: "Creators"
  }, _v23[_v29.Job] = {
    uri: "/search/marketplace/job",
    label: "Jobs"
  }, _v23), _v22[_v28.Omnisearch] = _v34.__assign(_v34.__assign({}, _v35), ((_v24 = {})[_v29.Template] = {
    uri: "/create/templates",
    label: "Templates"
  }, _v24)), _v22[_v28.Vls] = _v34.__assign({}, _v35), _v22[_v28.VideoManager] = _v34.__assign({}, _v35), _v22[_v28.Svv] = _v34.__assign({}, _v35), _v22.noResults = {
    label: ""
  }, _v2.SourceAndEntityMap = _v22, _v2.SearchTypeMap = {
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
  }, (_v17 = _v2.KeyCodes || (_v2.KeyCodes = {}))[_v17.Enter = 13] = "Enter", _v17[_v17.Up = 38] = "Up", _v17[_v17.Down = 40] = "Down", _v17[_v17.Esc = 27] = "Esc", _v17[_v17.Tab = 9] = "Tab", _v17[_v17.Space = 32] = "Space", _v17[_v17.Backspace = 8] = "Backspace", _v2.MyVideosPictureSizesIndex = 0, _v2.MOBILE = "23.4375em", _v2.TABLET = "46.875em", _v2.DESKTOP = "68.75em", _v2.PREF_HAS_SEEN_KEY = "srhsot", _v2.WITHIN_PIXEL_FETCH = 100, _v2.AUTOCOMPLETE_DEBOUNCE_MS = 400, _v2.SRI_TIMEOUT_MS = 200, _v2.NUM_CACHE_KEYS_PER_CACHE = 50, _v2.MAX_SUGGESTIONS = 5, _v2.NUM_RECENT_SEARCHES = 5, _v2.RESULTS_PER_PAGE = 5, _v2.MAX_RECENTLY_MODIFIED = 4, _v2.formEventTypeToAction = {
    keydownenter: "keydownenter",
    keydownspace: "keydownspace",
    mousedown: "click"
  }, _v2.TEST_PREFIX = "search-ui-test", _v2.SELECT_OPTION = "select-option", _v2.BP_PLATFORM_ENUMS = new Set(["ios", "android", "web", "tizen_tv", "xbox", "roku", "android_tv"]), _v2.MAX_ELIHP_RESULTS = 5, _v2.DARK_MODE = "dark", (_v25 = {})[_v30.video] = ["video.id", "video.name", "video.uri", "video.last_user_action_event_date", "video.link", "video.review_page.link", "video.pictures", "video.metadata.interactions.edit", "video.manage_link", "video.privacy.view", "meta"], _v25[_v30.folder] = ["folder.name", "folder.uri", "folder.last_user_action_event_date", "folder.metadata.connections.items.uri", "folder.metadata.connections.items.total"], _v25[_v30.switch] = ["owner.uri", "owner.name", "owner.pictures", "team_data.id", "team_data.owner_id", "team_data.logo_uri", "team_data.accent_color", "team_data.team_name", "team_data.pictures.sizes", "user_role", "has_team_management", "team_data.team_showcase_id"], _v2.SEARCH_FIELDS = _v25, _v2.TEMPLATES_BASE_URL = "/create/templates", _v2.CLEAR_ALL_BUTTON = "clear-all", _v2.MAX_VISITS_TO_COUNT = 999, _v2.OMNISEARCH_ACTIONS = {
    changeSearchTerm: "change_search_term",
    clearRecentSearches: "clear_recent_searches",
    folderFilter: "folder_filter",
    videoFilter: "video_filter",
    templateFilter: "template_filter",
    videoClick: "video_click",
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
  }, (_v26 = {})[_v2.SEARCH_TYPE.Vimeo] = "Search all of Vimeo", _v26[_v2.SEARCH_TYPE.MyLibrary] = "Search Library", _v2.SEARCH_TYPE_COPY = _v26, _v2.OMNISEARCH_CSAT_KEY = "omnisearch_csat", _v2.SEARCH_PRECISION = "search_precision", _v2.DEFAULT_PRECISION = 3;
}