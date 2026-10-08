{
  "use strict";

  let _v1 = {
    SIMPLIFIED_INTERACTIVE: "simplified_interactive",
    EDITOR: "editor"
  };
  _v0.s(["PRODUCT", 0, _v1], 0);
  let _v2 = () => {
    let _v0 = new URLSearchParams(window.location.search).get("vid");
    return _v0 ? parseInt(_v0, 10) : null;
  };
  _v0.s(["getVimeoVideoId", 0, _v2], 0);
  class _v3 {
    serverUrl = "";
    vimeoSessionId = "";
    teamOwnerId = 0;
    userId = 0;
    api = {
      client: "vimeo"
    };
    privateToMeFolderUri = "";
    videoHash = "";
    userRoleInSharedFolder = "";
    vimeoApiUrl = "";
    jwt = "";
    isShopifyUser = !1;
    isEditingTeamTemplate = !1;
    hasBeenRendered = !1;
    isLocalAutoSaveAllowed = !1;
    isSaveAsAllowed = !1;
    isPendoGuideAllowed = !1;
    isTemplate = !1;
    isEVV = !1;
    initTime = 0;
    previousIsBokeh = void 0;
    authenticate;
    teams = [];
    authStartLogged = !1;
    logAuthStart;
    logAuthEnd;
    videoSessionId;
    isStaff = !1;
    editorProduct = _v1.EDITOR;
    editorQueryParams = {};
    editorFlow = null;
    constructor() {
      this.initTime = performance.now();
    }
    init({
      serverUrl: _v0,
      vimeoSessionId: _v1,
      isShopifyUser: _v2,
      authenticate: _v3,
      logAuthStart: _v4,
      logAuthEnd: _v5
    }) {
      this.logAuthStart = _v4, this.logAuthEnd = _v5, this.serverUrl = _v0, this.isShopifyUser = _v2, this.authenticate = _v3, _v1 && (this.vimeoSessionId = _v1);
    }
    logInitialAuth() {
      !this.authStartLogged && (this.authStartLogged = !0, this.logAuthStart?.(), this.vimeoSessionId && (this.logAuthEnd?.(), this.authStartLogged = !1));
    }
    setTeamOwnerId(_v0) {
      this.teamOwnerId = _v0;
    }
    setVimeoSessionId(_v0) {
      let _v1 = !this.vimeoSessionId && _v0;
      this.vimeoSessionId = _v0, _v1 && this.authStartLogged && (this.logAuthEnd?.(), this.authStartLogged = !1);
    }
    setUserId(_v0) {
      this.userId = _v0;
    }
    setPrivateToMeFolderUri(_v0) {
      this.privateToMeFolderUri = _v0;
    }
    setVideoHash(_v0) {
      this.videoHash = _v0;
    }
    setIsEVV(_v0) {
      this.isEVV = _v0;
    }
    setIsEditingTeamTemplate(_v0) {
      this.isEditingTeamTemplate = _v0;
    }
    setHasBeenRendered(_v0) {
      this.hasBeenRendered = _v0;
    }
    setUserRoleInSharedFolder(_v0) {
      this.userRoleInSharedFolder = _v0 || "";
    }
    setVimeoApiUrl(_v0) {
      this.vimeoApiUrl = _v0;
    }
    setJwt(_v0) {
      this.jwt = _v0;
    }
    setIsLocalAutoSaveAllowed(_v0) {
      this.isLocalAutoSaveAllowed = _v0;
    }
    setIsSaveAsAllowed(_v0) {
      this.isSaveAsAllowed = _v0;
    }
    setIsPendoGuideAllowed(_v0) {
      this.isPendoGuideAllowed = _v0;
    }
    setIsTemplate(_v0) {
      this.isTemplate = _v0;
    }
    setPreviousIsBokeh(_v0) {
      this.previousIsBokeh = _v0;
    }
    setVideoSessionId(_v0) {
      this.videoSessionId = _v0;
    }
    setIsStaff(_v0) {
      this.isStaff = _v0;
    }
    setEditorContext({
      query: _v0,
      product: _v1
    }) {
      this.editorQueryParams = _v0, this.editorProduct = _v1;
    }
    getFlow() {
      return this.editorFlow;
    }
    setFlow(_v0, _v1) {
      let {
          blank: _v2,
          onboardingID: _v3
        } = this.editorQueryParams,
        {
          referrer: _v4
        } = document,
        _v5 = /create\/templates$/.test(_v4) || "true" === _v2,
        _v6 = _v4.includes("create/templates") && !_v4.endsWith("create/templates") && _v0.endsWith("1000"),
        _v7 = !!_v2(),
        _v8 = _v2() && _v0.endsWith("1000"),
        _v9 = _v7 && !_v0.endsWith("1000");
      this.editorProduct === _v1.SIMPLIFIED_INTERACTIVE ? this.editorFlow = "interactive" : _v3 ? this.editorFlow = "seo_tools_campaign" : _v5 ? this.editorFlow = "blank_editor" : _v6 && "team_templates" === _v1 ? this.editorFlow = "team_template" : _v6 && "templates" === _v1 ? this.editorFlow = "template" : _v8 ? this.editorFlow = "edit_vimeo_video" : _v9 && (this.editorFlow = "edit_create_video");
    }
    setTeams(_v0) {
      this.teams = _v0;
    }
    get vimeoApiRequestParams() {
      return {
        baseUrl: `//${this.vimeoApiUrl}`,
        headers: {
          Authorization: `jwt ${this.jwt}`,
          "Content-Type": "application/json"
        }
      };
    }
    getVimeoSessionId() {
      return this.vimeoSessionId;
    }
  }
  let _v4 = new _v3();
  _v0.s(["default", 0, _v4], 0);
}