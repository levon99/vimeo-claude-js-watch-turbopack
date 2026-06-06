{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9 = ((_v1 = {}).ToCustom = "ToCustom", _v1.ToBusiness = "ToBusiness", _v1.ToPro = "ToPro", _v1.None = "None", _v1.ToPricingPlan = "ToPricingPlan", _v1),
    _v10 = ((_v2 = {}).Owner = "Owner", _v2.Admin = "Admin", _v2.Uploader = "Uploader", _v2.Contributor = "Contributor", _v2.ContributorPlus = "Contributor Plus", _v2.Viewer = "Viewer", _v2),
    _v11 = ((_v3 = {}).Password = "password", _v3.Anybody = "anybody", _v3.Contacts = "contacts", _v3.Nobody = "nobody", _v3.Disable = "disable", _v3.Unlisted = "unlisted", _v3.Users = "users", _v3.On_Demand = "ptv", _v3.On_Demand_Hidden = "ptvhide", _v3.Stock = "stock", _v3.Stock_Purchased = "stock_purchased", _v3.Team = "team", _v3),
    _v12 = ((_v4 = {}).folderEdit = "folderEdit", _v4.folderComment = "folderComment", _v4.folderView = "folderView", _v4.folderAdmin = "folderAdmin", _v4.clipEdit = "clipEdit", _v4.clipView = "clipView", _v4.clipAdmin = "clipAdmin", _v4.albumEdit = "albumEdit", _v4.albumView = "albumView", _v4.albumAdmin = "albumAdmin", _v4.albumCreator = "albumCreator", _v4.clipCommenter = "clipCommenter", _v4),
    _v13 = ((_v5 = {}).folderEditor = "Folder Editor", _v5.folderCommenter = "Folder Commenter", _v5.folderViewer = "Folder Viewer", _v5.folderAdmin = "Folder Admin", _v5.clipEditor = "Clip Editor", _v5.clipViewer = "Clip Viewer", _v5.clipAdmin = "Clip Admin", _v5.albumEditor = "Album Editor", _v5.albumViewer = "Album Viewer", _v5.albumAdmin = "Album Admin", _v5.albumCreator = "Album Creator", _v5.clipCommenter = "Clip Commenter", _v5),
    _v14 = ((_v6 = {}).Active = "Active", _v6.Cancelled = "Cancelled", _v6.Lapsed = "Lapsed", _v6),
    _v15 = ((_v7 = {}).free = "free", _v7.starter = "starter", _v7.standard = "standard", _v7.advanced = "advanced", _v7.basic = "basic", _v7.plus = "plus", _v7.producer = "producer", _v7.pro = "pro", _v7.business = "business", _v7.live_premium = "live_premium", _v7.live_pro = "live_pro", _v7.live_business = "live_business", _v7.creator = "creator", _v7.professional = "professional", _v7.studio = "studio", _v7.production = "production", _v7),
    _v16 = ((_v8 = {}).year = "year", _v8.month = "month", _v8);
  let _v17 = {
      PUBLIC: "anybody",
      HIDDEN: "disable",
      PRIVATE: "nobody",
      PASSWORD: "password",
      UNLISTED: "unlisted"
    },
    _v18 = {
      ..._v17,
      CONTACTS: "contacts",
      ON_DEMAND: "ptv",
      ON_DEMAND_HIDDEN: "ptvhide",
      STOCK: "stock",
      STOCK_PURCHASED: "stock_purchased",
      USERS: "users"
    },
    _v19 = [_v18.ON_DEMAND, _v18.ON_DEMAND_HIDDEN, _v18.STOCK, _v18.STOCK_PURCHASED];
  _v0.s(["AccountStatus", () => _v14, "ApplicablePermissionPolicyTypes", () => _v13, "CLIP_PRIVACY", 0, _v18, "DISABLED_PRIVACIES", 0, _v19, "EMAIL_INPUT_EMAIL_TYPE", 0, "email", "EmbedPrivacy", 0, {
    Public: "public",
    Private: "private",
    Whitelist: "whitelist"
  }, "EmbedTypeOptions", 0, {
    Fixed: "fixed",
    Responsive: "responsive"
  }, "LinkShareResourceType", 0, {
    Video: "video",
    Album: "album"
  }, "ModalSubState", 0, {
    Default: "VIMEO_LINK",
    CustomDomain: "CUSTOM_DOMAIN"
  }, "PERMISSION_ACTION_TO_DISPLAY_NAME", 0, {
    folderEdit: "Can edit",
    folderComment: "Can comment",
    folderView: "Can view",
    folderAdmin: "Can manage",
    clipEdit: "Can edit",
    clipView: "Can view",
    clipAdmin: "Can manage",
    albumEdit: "Can edit",
    albumView: "Can view",
    albumAdmin: "Can manage",
    albumCreator: "Can manage",
    clipCommenter: "Can comment"
  }, "PERMISSION_HEIRARCHY", 0, [["Clip Viewer", "Folder Viewer", "Album Viewer"], ["Clip Commenter", "Folder Commenter"], ["Clip Editor", "Folder Editor", "Album Editor"], ["Clip Admin", "Folder Admin", "Album Admin", "Album Creator"]], "PERMISSION_POLICY_GROUPS", 0, {
    VIEW: ["Folder Viewer", "Clip Viewer", "Album Viewer"],
    COMMENT: ["Folder Commenter", "Clip Commenter"],
    EDIT: ["Folder Editor", "Clip Editor", "Album Editor"],
    MANAGE: ["Folder Admin", "Clip Admin", "Album Admin", "Album Creator"]
  }, "PERMISSION_TO_ACTION_MAP", 0, {
    "Folder Viewer": "view",
    "Clip Viewer": "view",
    "Album Viewer": "view",
    "Folder Commenter": "comment",
    "Clip Commenter": "comment",
    "Folder Editor": "edit",
    "Clip Editor": "edit",
    "Album Editor": "edit",
    "Folder Admin": "manage",
    "Clip Admin": "manage",
    "Album Admin": "manage",
    "Album Creator": "manage"
  }, "PERMISSION_TYPES", 0, {
    "Folder Editor": "folderEdit",
    "Folder Viewer": "folderView",
    "Folder Admin": "folderAdmin",
    "Clip Editor": "clipEdit",
    "Clip Viewer": "clipView",
    "Clip Admin": "clipAdmin",
    "Album Editor": "albumEdit",
    "Album Viewer": "albumView",
    "Album Admin": "albumAdmin",
    "Album Creator": "albumCreator",
    "Clip Commenter": "clipCommenter",
    "Folder Commenter": "folderComment"
  }, "PERMISSION_TYPES_TO_DISPLAY_NAME", 0, {
    "Folder Editor": "Can edit",
    "Folder Viewer": "Can view",
    "Folder Admin": "Can manage",
    "Clip Editor": "Can edit",
    "Clip Viewer": "Can view",
    "Clip Admin": "Can manage",
    "Album Editor": "Can edit",
    "Album Viewer": "Can view",
    "Album Admin": "Can manage",
    "Album Creator": "Can manage",
    "Clip Commenter": "Can comment",
    "Folder Commenter": "Can comment"
  }, "PRIVACY_OPTIONS", 0, _v17, "PageMap", 0, {
    home: "single_video_view",
    showcase_cms: "showcase_cms",
    "Viewer Home": "viewer_home",
    library: "video_library",
    my_feed: "my_feed"
  }, "PermissionActions", () => _v12, "PermissionLevel", () => _v10, "ResourcePrivacy", () => _v11, "ResourceType", 0, {
    Video: "video",
    Folder: "folder",
    Uninitialized: "uninitialized",
    Album: "album"
  }, "ShareModalState", 0, {
    Default: "SHARE",
    Embed: "EMBED",
    CustomEmbed: "CUSTOM_EMBED",
    EmbedDomain: "EMBED_DOMAIN",
    Purchase: "PURCHASE",
    CopyLink: "COPY_LINK",
    Upsell: "UPSELL",
    Invitation: "INVITATION",
    PrivacyPassword: "PRIVACY_PASSWORD",
    Settings: "SETTINGS",
    China: "CHINA",
    ManageAccess: "MANAGE_ACCESS",
    CustomizeLinkEdit: "CUSTOMIZE_LINK_EDIT",
    EmbedDomainPrivacy: "EMBED_DOMAIN_PRIVACY",
    Search: "SEARCH",
    PeopleAccessList: "PEOPLE_ACCESS_LIST",
    Social: "SOCIAL",
    InheritedAccessList: "INHERITED_ACCESS_LIST",
    Review: "REVIEW",
    CreateReviewLink: "CREATE_REVIEW_LINK"
  }, "Tier", () => _v15, "Upsells", () => _v9, "UserPlanType", () => _v16]);
}