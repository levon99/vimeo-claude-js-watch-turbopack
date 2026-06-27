{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8 = ((_v1 = {}).Pending = "pending", _v1.Accepted = "accepted", _v1),
    _v9 = ((_v2 = {})[_v2.PURCHASE_SEATS_MODAL = 0] = "PURCHASE_SEATS_MODAL", _v2[_v2.UNASSIGN_MEMBER_CONFIRM_MODAL = 1] = "UNASSIGN_MEMBER_CONFIRM_MODAL", _v2[_v2.ADD_TO_FOLDERS_MODAL = 2] = "ADD_TO_FOLDERS_MODAL", _v2[_v2.MANAGE_LEARNER_ID = 3] = "MANAGE_LEARNER_ID", _v2[_v2.BACK_ON_YOUR_OWN_MODAL = 4] = "BACK_ON_YOUR_OWN_MODAL", _v2),
    _v10 = ((_v3 = {}).FetchMembershipInfo = "FetchMembershipInfo", _v3.FetchPaymentMethods = "FetchPaymentMethods", _v3.UpdatePaymentMethods = "UpdatePaymentMethods", _v3.UpdatePaymentMethod = "UpdatePaymentMethod", _v3.ShowNotice = "ShowNotice", _v3.ShowBillingPageLinkoutNotice = "ShowBillingPageLinkoutNotice", _v3.FetchTeamInfoInit = "FetchTeamInfoInit", _v3.FetchTeamInfo = "FetchTeamInfo", _v3.FetchTeamInfoComplete = "FetchTeamInfoComplete", _v3.FetchTeamMembersInit = "FetchTeamMembersInit", _v3.FetchTeamMemberInit = "FetchTeamMemberInit", _v3.FetchTeamMemberComplete = "FetchTeamMemberComplete", _v3.FetchTeamMembersComplete = "FetchTeamMembersComplete", _v3.UpdateTeamMember = "UpdateTeamMember", _v3.UpdateTeamBrandings = "UpdateTeamBrandings", _v3.UpdateSearchQuery = "UpdateSearchQuery", _v3.UpdateGroupMembersSearchQuery = "UpdateGroupMembersSearchQuery", _v3.UpdateSort = "UpdateSort", _v3.UpdateDirection = "UpdateDirection", _v3.UpdateRolesFilter = "UpdateRolesFilter", _v3.UpdateStatusesFilter = "UpdateStatusesFilter", _v3.UpdateAccessFilter = "UpdateAccessFilter", _v3.UpdateCurrentPage = "UpdateCurrentPage", _v3.UpdateTeamMemberInit = "UpdateTeamMemberInit", _v3.UpdateTeamMemberComplete = "UpdateTeamMemberComplete", _v3.UpdateIsSSOAvailable = "UpdateIsSSOAvailable", _v3.UpdateTeamMemberCancel = "UpdateTeamMemberCancel", _v3.DeleteTeamMemberComplete = "DeleteTeamMemberComplete", _v3.UpdateHasError = "UpdateHasError", _v3.UpdateHasMembershipInfoLoadFailed = "UpdateHasMembershipInfoLoadFailed", _v3.NotificationForOwnerAdmin = "NotificationForOwnerAdmin", _v3.FetchTeamShowcaseInit = "FetchTeamShowcaseInit", _v3.FetchTeamShowcaseComplete = "FetchTeamShowcaseComplete", _v3.FetchTeamGroupsComplete = "FetchTeamGroupsComplete", _v3.FetchMoreTeamGroupsComplete = "FetchMoreTeamGroupsComplete", _v3.UpdateGroupUsersError = "UpdateGroupUsersError", _v3.TeamGroupsLoading = "TeamGroupsLoading", _v3.UpdateTeamCapabilities = "UpdateTeamCapabilities", _v3.UpdateTeamGroupSort = "UpdateTeamGroupSort", _v3.ClearTeamGroupUsers = "ClearTeamGroupUsers", _v3.UpdateTeamSeatDetails = "UpdateTeamSeatDetails", _v3.UpdateTeamMembersCount = "UpdateTeamMembersCount", _v3.UpdateModalToDisplay = "UpdateModalToDisplay", _v3.UpdateMembershipInfo = "UpdateMembershipInfo", _v3.UpdateUploadQuota = "UpdateUploadQuota", _v3.UpdatePlanQuota = "UpdatePlanQuota", _v3.UpdateSeatCount = "UpdateSeatCount", _v3.UpdatePlanData = "UpdatePlanData", _v3.RemoveUnassignedSeats = "RemoveUnassignedSeats", _v3.UpdateTeamsPageNotice = "UpdateTeamsPageNotice", _v3.UpdateBillingPageNotice = "UpdateBillingPageNotice", _v3.UpdateInvitesRemaining = "UpdateInvitesRemaining", _v3.UpdateIsMembershipLoading = "UpdateIsMembershipLoading", _v3.UpdateIsRemoveSeatsConfirmation = "UpdateIsRemoveSeatsConfirmation", _v3.UpdateIsOperationOngoing = "UpdateIsOperationOngoing", _v3.UpdateIsBillingSettingChangeOngoing = "UpdateIsBillingSettingChangeOngoing", _v3.UpdateIsInviteModalOpen = "UpdateIsInviteModalOpen", _v3.UpdateIsRoleUpgradeRequestsLoaded = "UpdateIsRoleUpgradeRequestsLoaded", _v3.UpdateRoleUpgradeRequests = "UpdateRoleUpgradeRequests", _v3.UpdateSelectedTeamMembers = "UpdateSelectedTeamMembers", _v3.UpdateCancelConfirmationInfo = "UpdateCancelConfirmationInfo", _v3),
    _v11 = ((_v4 = {}).Active = "Active", _v4.Cancelled = "Cancelled", _v4.Lapsed = "Lapsed", _v4),
    _v12 = ((_v5 = {}).Free = "free", _v5.Starter = "starter", _v5.Standard = "standard", _v5.Advanced = "advanced", _v5.CustomSelfServe = "custom_self_serve", _v5.Basic = "basic", _v5.Plus = "plus", _v5.Producer = "producer", _v5.Pro = "pro", _v5.Business = "business", _v5.LivePremium = "live_premium", _v5.LivePro = "live_pro", _v5.LiveBusiness = "live_business", _v5.ProSolution = "pro_solution", _v5.Team = "team", _v5.TeamLive = "team_live", _v5.Creator = "creator", _v5.Core = "core", _v5.Professional = "professional", _v5.Studio = "studio", _v5.Production = "production", _v5),
    _v13 = ((_v6 = {}).Year = "year", _v6.Month = "month", _v6),
    _v14 = ((_v7 = {})[_v7.free = 0] = "free", _v7[_v7.statermonthly = 5] = "statermonthly", _v7[_v7.starteryearly = 60] = "starteryearly", _v7[_v7.standard = 120] = "standard", _v7[_v7.advanced = 240] = "advanced", _v7);
  _v0.s(["AccountStatus", () => _v11, "LegacyTiers", 0, ["basic", "plus", "producer", "pro", "business", "live_premium", "live_pro", "live_business"], "ManageTeamActionTypes", () => _v10, "MemberAccess", 0, {
    CanViewVideosInChina: "can_view_videos_in_china",
    LogsInWithSso: "logs_in_with_sso",
    LogsInWithEmailAndPassword: "logs_in_with_email_and_password",
    HasLearnerId: "has_learner_id"
  }, "MemberStatus", () => _v8, "RepackagedTiers", 0, ["creator", "core", "professional", "studio", "production"], "SolutionTiers", 0, ["pro_solution", "team", "team_live"], "TeamManagementModals", () => _v9, "TeamRole", 0, {
    Owner: "Owner",
    Admin: "Admin",
    Contributor: "Contributor",
    "Contributor Plus": "Contributor Plus",
    Viewer: "Viewer",
    Uploader: "Uploader"
  }, "Tier", () => _v12, "UserEntity", 0, {
    Business: "business",
    Personal: "personal",
    NotAvailable: "not_available"
  }, "UserPlanType", () => _v13, "VideoCaps", () => _v14]);
}