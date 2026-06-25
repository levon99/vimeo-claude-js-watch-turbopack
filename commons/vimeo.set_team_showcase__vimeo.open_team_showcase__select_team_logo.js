{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = ((_v1 = {}).SET_TEAM_SHOWCASE = "vimeo.set_team_showcase", _v1.OPEN_TEAM_SHOWCASE = "vimeo.open_team_showcase", _v1.UPLOAD_TEAM_LOGO = "select_team_logo", _v1.LOGO_EDIT_BUTTON = "vimeo.logo_edit_button", _v1.SCROLL_TEAM_LOGO = "scroll_team_logo", _v1.REMOVE_TEAM_LOGO = "remove_team_logo", _v1.LOGO_MODAL_CANCEL = "vimeo.click_cancel_logo_button", _v1.TEAM_SETTING_UPDATED = "team_settings_updated", _v1.SET_TEAM_ACCENT_COLOR = "set_team_accent_color", _v1.CHANGE_TEAM_MEMBER_ROLE = "change_team_member_role", _v1.REMOVE_TEAM_MEMBER = "remove_team_member_from_team", _v1.INVITE_NEW_TEAM_MEMBER = "invite_user_to_team", _v1.COPY_TEAM_INVITE_LINK = "vimeo.copy_team_invite_link", _v1.SEND_TEAM_INVITE_REMINDER = "vimeo.team_invite_reminder_sent", _v1.UPSELL_CLICK = "vimeo.click", _v1.GENERAL_CLICK = "vimeo.click", _v1.TOUR_POINT = "vimeo.team_management_onboarding", _v1.MANAGE_TEAM_PAGE_VIEW = "vimeo.team_management_pageview", _v1.ROLE_UPGRADE = "vimeo.team_role_event", _v1),
    _v9 = ((_v2 = {}).MEMBERS = "Team Members Page", _v2.GROUPS = "Team Groups Page", _v2.LOGO_MODAL = "Team Settings Page Logo Modal", _v2.SETTINGS = "Team Settings Page", _v2.INVITE_MODAL = "Invite Team User Modal", _v2),
    _v10 = ((_v3 = {}).INVITE_MODAL = "team_management_invite_modal", _v3.BILLING_PAGE_HEADER = "billing_page_header", _v3.FOLDER_SHARE_MODAL = "folder_share_modal", _v3);
  _v0.s(["AlbumsField", 0, ["name", "link", "privacy.view"], "BILLING_ACTION", 0, "vimeo.billing_action", "BILLING_ACTION_PAGE", 0, "team_membership", "BillingActionLocations", 0, {
    ACCOUNT_USAGE_MODAL_CLOSE_BUTTON: "account_usage_modal_close_button",
    ADD_NEW_CARD_BUTTON: "add_new_card_button",
    ADD_SEATS_BUTTON: "add_seats_button",
    AUTORENEW_ENABLE_MODAL: "autorenew_enable_modal",
    AUTORENEW_TOGGLE_SWITCH: "autorenew_toggle_switch",
    BUSINESS_ACCOUNT_USAGE_MODAL_ENABLE_AUTORENEW_BUTTON: "business_account_usage_modal_enable_autorenew_button",
    BUSINESS_ACCOUNT_USAGE_MODAL_KEEP_AUTORENEW_OFF_BUTTON: "business_account_usage_modal_keep_autorenew_off_button",
    CANCEL_NEXT_SCHEDULED_PAYMENT_BUTTON: "cancel_next_scheduled_payment_button",
    CANCEL_SUBSCRIPTION_BUTTON: "cancel_subscription_button",
    CANCEL_SUBSCRIPTION_OLD_MODAL: "cancel_subscription_old_modal",
    CANCEL_SUBSCRIPTION_MODAL: "cancel_subscription_modal",
    UPDATE_BILLING_ADDRESS_BUTTON: "update_billing_address_button",
    CLOSE_BILLING_ADDRESS_MODAL_BUTTON: "close_billing_address_modal_button",
    CLOSE_PURCHASE_SEATS_MODAL_BUTTON: "close_purchase_seats_modal_button",
    DELETE_SEATS_BUTTON: "delete_seats_button",
    ENABLE_AUTORENEW_BUTTON: "enable_autorenew_button",
    ENABLE_MODAL_AUTORENEW_BUTTON: "enable_modal_enable_autorenew_button",
    ENABLE_MODAL_CLOSE_BUTTON: "enable_modal_close_button",
    OPTOUT_MODAL_CANCEL_OPTOUT_BUTTON: "optout_modal_cancel_optout_button",
    OPTOUT_MODAL_CLOSE_BUTTON: "optout_modal_close_button",
    OPTOUT_MODAL_CONFIRM_OPTOUT_BUTTON: "optout_modal_confirm_optout_button",
    PAGE: "page",
    PAYMENT_METHOD_DROPDOWN: "payment_method_dropdown",
    PAYMENT_METHOD_OPTION: "payment_method_option",
    PERSONAL_ACCOUNT_USAGE_MODAL_CONFIRM_BUTTON: "personal_account_usage_modal_confirm_button",
    PERSONAL_ACCOUNT_USAGE_MODAL_USE_FOR_BUSINESS_BUTTON: "personal_account_usage_modal_use_for_business_button",
    REMOVE_SEATS_MODAL_CONFIRM_DELETE_BUTTON: "remove_seats_modal_confirm_delete_button",
    RENEW_NOW_BUTTON: "renew_now_button",
    SCHEDULE_ONE_TIME_PAYMENT_BUTTON: "schedule_one_time_payment_button",
    SEE_PLAN_DETAILS_BUTTON: "see_plan_details_button",
    UPGRADE_BUTTON: "upgrade_button",
    USER_ENTITY_BUSINESS_RADIO: "user_entity_business_radio",
    USER_ENTITY_PERSONAL_RADIO: "user_entity_personal_radio",
    VIEW_PAST_PURCHASES_BUTTON: "view_past_purchases_button"
  }, "BillingActionTypes", 0, {
    LAND: "land",
    CLICK: "click",
    ERROR: "error",
    SELECT: "select"
  }, "COUNTRY_CODE_CHINA", 0, "CN", "ENABLE_PAGINATION_LIMIT", 0, 300, "EVENT_FEATURE", 0, "team_management", "EVENT_PRODUCT", 0, "Collaboration", "EventLocation", () => _v9, "GROUP_MEMBERS", 0, "groupMembers", "MAX_PURCHASE_SEATS_DEFAULT", 0, 200, "MAX_SEATS_ALLOWED_FOR_FREE_TRIALERS", 0, 6, "MAX_TEAM_SIZE_ALLOWED_PRICING", 0, 200, "MAX_VIDEOS", 0, 25, "MAX_VIEWERS_ALLOWED_FOR_FREE_TRIALERS", 0, 5, "MIN_PURCHASE_SEATS", 0, 1, "OWNER", 0, 1, "RoleUpgradeEvents", 0, {
    APPROVE_ALL: "approve_all",
    APPROVE_REQUEST: "approve_request",
    DENY_REQUEST: "deny_request"
  }, "TAB_IDS", 0, {
    members: "members",
    groups: "groups",
    basics: "basics",
    branding: "branding",
    billing: "billing",
    settings: "settings",
    "manage-ai": "manage-ai",
    "brand-kits": "brand-kits",
    "[brand_kit_id]": "brand-kits",
    "custom-metadata": "custom-metadata"
  }, "TRACK_UPSELL_FEATURE", 0, "contact_us_for_enterprise", "TRACK_UPSELL_LOCATIONS", () => _v10, "TeamEvents", () => _v8], 0);
  var _v11 = _v0.i(0);
  (0, _v6.translate)({
    singular: "Owner",
    dictionary: {
      es: {
        singular: "Propietario(a)"
      },
      "de-DE": {
        singular: "Inhaber"
      },
      "fr-FR": {
        singular: "Propriétaire"
      },
      "ja-JP": {
        singular: "所有者"
      },
      "ko-KR": {
        singular: "계정 소유자"
      },
      "pt-BR": {
        singular: "Proprietário"
      },
      "zh-CN": {
        singular: "所有者"
      }
    }
  }), (0, _v6.translate)({
    singular: "Admin",
    dictionary: {
      es: {
        singular: "Administrador(a)"
      },
      "fr-FR": {
        singular: "Administrateur"
      },
      "ja-JP": {
        singular: "管理者"
      },
      "ko-KR": {
        singular: "관리자"
      },
      "pt-BR": {
        singular: "Administrador"
      },
      "zh-CN": {
        singular: "管理员"
      }
    }
  }), (0, _v6.translate)({
    singular: "Contributor",
    dictionary: {
      es: {
        singular: "Colaborador(a)"
      },
      "de-DE": {
        singular: "Beitragender"
      },
      "fr-FR": {
        singular: "Contributeur"
      },
      "ja-JP": {
        singular: "投稿者"
      },
      "ko-KR": {
        singular: "기여자"
      },
      "pt-BR": {
        singular: "Colaborador"
      },
      "zh-CN": {
        singular: "贡献者"
      }
    }
  }), (0, _v6.translate)({
    singular: "Uploader",
    dictionary: {
      es: {
        singular: "Herramienta para subir videos"
      },
      "ja-JP": {
        singular: "アップローダー"
      },
      "ko-KR": {
        singular: "업로더"
      },
      "pt-BR": {
        singular: "Quem carrega os vídeos"
      },
      "zh-CN": {
        singular: "上传者"
      }
    }
  }), (0, _v6.translate)({
    singular: "Viewer",
    dictionary: {
      es: {
        singular: "Espectador(a)"
      },
      "de-DE": {
        singular: "Zuschauende"
      },
      "fr-FR": {
        singular: "Spectateur"
      },
      "ja-JP": {
        singular: "閲覧者"
      },
      "ko-KR": {
        singular: "뷰어"
      },
      "pt-BR": {
        singular: "Espectador"
      },
      "zh-CN": {
        singular: "观众"
      }
    }
  });
  let _v12 = {
    [_v7.PURCHASE_TRIGGERED_FROM.INVITE_MODAL]: !1,
    [_v7.PURCHASE_TRIGGERED_FROM.ROLE_CHANGE_MENU]: !0,
    [_v7.PURCHASE_TRIGGERED_FROM.BILLING_PAGE_ADD_SEATS]: !0,
    [_v7.PURCHASE_TRIGGERED_FROM.UPSELL_BANNER]: !0
  };
  _v0.s(["convertDateToMMDDYY", 0, _v0 => {
    if (!_v0) return "";
    let _v1 = new Date(_v0),
      _v2 = _v1.getFullYear().toString().substring(2),
      _v3 = (_v1.getMonth() + 1).toString(),
      _v4 = _v1.getDate().toString();
    return (1 === _v3.length ? "0" : "") + _v3 + "/" + (1 === _v4.length ? "0" : "") + _v4 + "/" + _v2;
  }, "formatAmountWithCurrency", 0, (_v0, _v1, _v2) => _v1.length ? new Intl.NumberFormat(navigator.language, {
    minimumFractionDigits: _v2,
    style: "currency",
    currency: _v1
  }).format(_v0).replace(String.fromCharCode(0), " ") : "", "formatDate", 0, _v0 => new Date(null !== _v0.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/) ? _v0 : `${_v0} 12:00:00`).toLocaleDateString(navigator.language || "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), "formatNumber", 0, (_v0, _v1 = 0) => new Intl.NumberFormat(navigator.language, {
    minimumFractionDigits: _v1
  }).format(_v0).replace(String.fromCharCode(0), " "), "getDaysBetween", 0, function (_v0, _v1) {
    let _v2 = "string" == typeof _v0 ? new Date(_v0) : _v0,
      _v3 = Math.ceil((("string" == typeof _v1 ? new Date(_v1) : _v1).getTime() - _v2.getTime()) / 0);
    return _v3 > 0 ? _v3 : 0;
  }, "getIdFromLink", 0, function (_v0, _v1) {
    let _v2 = _v0.length > 0 ? _v0.substring(_v0.lastIndexOf("/") + 1) : "-1";
    return _v1 ? _v2 : parseInt(_v2, 10);
  }, "getTeamPrivacyTranslation", 0, (_v0, _v1) => !_v0 && _v1 ? (0, _v6.translate)({
    singular: "Anyone in this workspace",
    dictionary: {
      es: {
        singular: "Cualquier persona en este espacio de trabajo"
      },
      "de-DE": {
        singular: "Jeder in diesem Workspace"
      },
      "fr-FR": {
        singular: "Tous les membres de cet espace de travail"
      },
      "ja-JP": {
        singular: "このワークスペースにいる全員"
      },
      "ko-KR": {
        singular: "이 워크스페이스의 모든 사용자"
      },
      "pt-BR": {
        singular: "Qualquer pessoa neste espaço de trabalho"
      },
      "zh-CN": {
        singular: "此工作区内的任何人"
      }
    }
  }) : _v0 ? (0, _v6.translate)({
    singular: "Anyone at {TEAM_NAME}",
    replacements: {
      TEAM_NAME: _v0
    },
    dictionary: {
      es: {
        singular: "Cualquier persona en {TEAM_NAME}"
      },
      "de-DE": {
        singular: "Jemand von {TEAM_NAME}"
      },
      "fr-FR": {
        singular: "Tous les membres de {TEAM_NAME}"
      },
      "ja-JP": {
        singular: "{TEAM_NAME}の全員"
      },
      "ko-KR": {
        singular: "{TEAM_NAME}의 모든 사용자"
      },
      "pt-BR": {
        singular: "Qualquer pessoa em {TEAM_NAME}"
      },
      "zh-CN": {
        singular: "{TEAM_NAME} 内的任何人"
      }
    }
  }) : (0, _v6.translate)({
    singular: "All members",
    dictionary: {
      es: {
        singular: "Todos los miembros"
      },
      "de-DE": {
        singular: "Alle Mitglieder"
      },
      "fr-FR": {
        singular: "Tous les membres"
      },
      "ja-JP": {
        singular: "すべてのメンバー"
      },
      "ko-KR": {
        singular: "모든 멤버"
      },
      "pt-BR": {
        singular: "Todos os integrantes"
      },
      "zh-CN": {
        singular: "所有成员"
      }
    }
  }), "handleRemoveMember", 0, (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
    _v0(), _v3({
      currentModalInDisplay: _v11.TeamManagementModals.UNASSIGN_MEMBER_CONFIRM_MODAL,
      data: {
        removeMemberName: _v5 || "",
        deleteFromTeam: _v2,
        removeMemberRole: _v4,
        hasPerSeatPricingModel: _v1,
        onClose: _v6
      }
    });
  }, "isPaymentExpired", 0, _v0 => {
    if (!_v0.lastFour) return !1;
    let _v1 = new Date(),
      _v2 = new Date();
    return _v2.setFullYear(0 + _v0.expirationYear, _v0.expirationMonth - 1, 1), _v2.getTime() < _v1.getTime();
  }, "makeMembershipCall", 0, _v12, "mapMembershipResponse", 0, _v0 => ({
    status: _v11.AccountStatus[(0, _v4.default)(String(_v0.status))],
    tier: _v11.Tier[(0, _v5.default)(String(_v0.tier).replaceAll("_", " ")).replaceAll(" ", "")],
    billingAddress: _v0.billingAddress ? {
      ..._v0.billingAddress,
      line1: _v0.billingAddress.line1 ?? _v0.billingAddress.line_1,
      line2: _v0.billingAddress.line2 ?? _v0.billingAddress.line_2
    } : void 0,
    billingPeriod: _v11.UserPlanType[(0, _v4.default)(String(_v0.billingPeriod))],
    isImpactedByGermanConsumerLaw: _v0?.isImpactedByGermanConsumerLaw,
    isFreeTrial: _v0?.isFreeTrial,
    isReverseFreeTrial: _v0?.isReverseFreeTrial ?? !1,
    userEntity: _v0?.userEntity,
    paymentMethod: _v0.paymentMethod ? {
      ..._v0.paymentMethod
    } : null,
    suggestedPaymentMethod: _v0.paymentMethod ? {
      ..._v0.paymentMethod
    } : null,
    seatCapPaid: _v0.seatCapPaid ?? 200,
    seatCapTrial: _v0.seatCapTrial ?? 6,
    hasAutorenew: _v0.hasAutorenew,
    renewalDate: _v0.renewalDate,
    startDate: _v0.startDate,
    endDate: _v0.endDate,
    originalEndDate: _v0.originalEndDate,
    gracePeriodType: _v0.gracePeriodType,
    isStorageEntitlementSuspended: _v0.isStorageEntitlementSuspended ?? !1,
    pricePerSeat: _v0.pricePerSeat,
    pricePerSeatForDisplay: _v0.pricePerSeatForDisplay,
    additionalSeatPrice: _v0.additionalSeatPrice ?? null,
    additionalSeatPriceForDisplay: _v0.additionalSeatPriceForDisplay ?? null,
    basePlanPrice: _v0.basePlanPrice ?? null,
    basePlanPriceForDisplay: _v0.basePlanPriceForDisplay ?? null,
    subscriptionId: _v0.subscriptionId,
    rejoinOfferEligible: _v0.rejoinOfferEligible ?? !1,
    totalPrice: _v0.totalPrice,
    totalPriceForDisplay: _v0.totalPriceForDisplay,
    currency: _v0.currency,
    currentUnassignedSeatCount: _v0.currentUnassignedSeatCount,
    nextCycle: {
      ..._v0.nextCycle
    },
    seatCount: _v0.seatCount,
    productId: _v0.productId,
    tierForDisplay: _v0.tierForDisplay,
    oneClickRefundEligible: _v0.oneClickRefundEligible,
    latestRefundableTransaction: _v0.latestRefundableTransaction
  }), "tiers", 0, {
    free: "Free",
    starter: "Starter",
    standard: "Standard",
    advanced: "Advanced",
    custom_self_serve: "Custom",
    plus: "Plus",
    producer: "Producer",
    pro: "Pro",
    business: "Business",
    live_premium: "Live Premium",
    live_pro: "Live Pro",
    live_business: "Live Business",
    creator: "Creator",
    professional: "Professional",
    studio: "Studio",
    production: "Production"
  }], 0);
}