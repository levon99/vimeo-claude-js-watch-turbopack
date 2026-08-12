{
  "use strict";

  let _v1 = new class {
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
  }();
  _v0.s(["default", 0, _v1]);
}