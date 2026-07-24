{
  "use strict";

  let _v1 = ["accepted", "pending"];
  _v0.s(["buildUrlWithSearchParams", 0, (_v0, _v1) => _v1.toString().length ? `${_v0}?${_v1.toString()}` : _v0, "getMemberAvatarLink", 0, _v0 => {
    let _v1 = _v0?.user?.pictures?.sizes;
    return _v1?.at(1)?.link ?? _v1?.at(0)?.link;
  }, "getUserIdFromUri", 0, _v0 => _v0 ? parseInt(_v0.split("/").at(2) ?? "0") : 0, "getWorkspaceUuid", 0, _v0 => {
    let _v1 = _v0.split("/");
    if (3 !== _v1.length) throw Error(`Invalid workspace URI: ${_v0}`);
    return _v1.at(2);
  }, "parseOrganizationMemberUri", 0, _v0 => {
    let _v1 = _v0.match(/^\/organizations\/([a-f0-9-]+)\/members\/([0-9]+)$/i);
    if (!_v1) throw Error(`Invalid organization member URI: ${_v0}`);
    return {
      orgUuid: _v1[1],
      orgMemberId: parseInt(_v1[2])
    };
  }, "parseOrganizationPictureUri", 0, _v0 => {
    let _v1 = _v0.match(/^\/organizations\/([a-f0-9-]+)\/pictures\/([a-f0-9]+)$/i);
    if (!_v1) throw Error(`Invalid organization picture URI: ${_v0}`);
    return {
      organizationUuid: _v1[1],
      pictureUuid: _v1[2]
    };
  }, "parseWorkspaceMemberUri", 0, _v0 => {
    let _v1 = _v0.split("/"),
      _v2 = _v1.at(2);
    return {
      workspaceMemberId: parseInt(_v1.at(4) ?? ""),
      workspaceUuid: _v2
    };
  }, "parseWorkspacePictureUri", 0, _v0 => {
    let _v1 = _v0.match(/^\/workspaces\/([a-f0-9-]+)\/pictures\/([a-f0-9]+)$/i);
    if (!_v1) throw Error(`Invalid workspace picture URI: ${_v0}`);
    return {
      workspaceUuid: _v1[1],
      pictureUuid: _v1[2]
    };
  }, "parseWorkspaceUri", 0, _v0 => {
    let _v1 = _v0.match(/^\/workspaces\/([a-f0-9-]+)$/i);
    if (!_v1) throw Error(`Invalid workspace URI: ${_v0}`);
    return {
      workspaceUuid: _v1[1]
    };
  }, "prepareGctlOptions", 0, _v0 => ({
    baseUrl: _v0.baseUrl,
    headers: {
      "Content-Type": "application/json",
      Authorization: _v0.jwt ? `jwt ${_v0.jwt}` : "",
      "Vimeo-Page": `${_v0.xVimeoPage}`,
      "Accept-Language": _v0.locale ?? "en"
    }
  }), "titleCase", 0, _v0 => _v0.toLowerCase().charAt(0).toUpperCase() + _v0.toLowerCase().slice(1).toLowerCase(), "validateRolesFilterParam", 0, function (_v0, _v1) {
    if (!_v0) return;
    let _v2 = _v0.split(",").map(_v0 => _v0.trim()).filter(_v0 => _v1.includes(_v0));
    return _v2.length > 0 ? _v2 : void 0;
  }, "validateStatusFilterParam", 0, _v0 => _v0 ? _v0.split(",").map(_v0 => _v0.trim()).filter(_v0 => _v1.includes(_v0)) : []]);
}