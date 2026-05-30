{
  "use strict";

  let _v1 = {
    VERTICAL: "vertical",
    HORIZONTAL: "horizontal"
  };
  _v0.s(["FlipType", 0, _v1], 0);
  let _v2 = {
    inspector: {
      title: "inspector-title",
      backButton: "inspector-panel-back-btn",
      panel: "inspector-panel"
    },
    sidebar: {
      interactive: {
        hotspots: "hotspots",
        polls: "polls",
        media: "media",
        overlays: "overlays",
        colorPalette: "color-palette",
        iframes: "iframes"
      }
    },
    timeline: {
      layersContainer: "timeline-layers-container",
      transition: "timeline-transition",
      addTransitionButtonPendo: "add-transition-button",
      addTransitionButton: "add-transition-button-stable",
      editTransitionButton: "edit-transition-button"
    },
    header: {
      interactiveOverlayName: "interactive-overlay-name",
      undoRedo: "undo-redo-header"
    },
    contentLoader: "content-loader",
    flipButtonGraphicToolbar: "flip-button-graphic-toolbar",
    horizontalFlipButton: `${_v1.HORIZONTAL}-flip-button`,
    hotspotName: "hotspot-name",
    hotspotStartTime: "hotspot-start-time",
    hotspotEndTime: "hotspot-end-time",
    hotspotHoverOpacitySlider: "hotspot-hover-opacity-slider",
    hotspotHoverOpacitySliderHandle: "hotspot-hover-opacity-slider-handle",
    hotspotHoverOpacityInputSlider: "hotspot-hover-opacity-input-slider",
    hoverStateToolbarButton: "hover-state-button-toolbar",
    hoverSizeSlider: "hover-size-slider",
    hoverSizeSliderHandle: "hover-size-slider-handle",
    hotspotHoverSizeInputSlider: "hotspot-hover-size-input-slider",
    hotspotPauseVideo: "hotspot-pause-video",
    hotspotUrl: "hotspot-url",
    timeTriggerNameInput: "time-trigger-name-input",
    timeTriggerTimeInput: "time-trigger-time-input",
    timeTriggerJumpToTimeInput: "time-trigger-jump-to-time-input",
    timeTriggerActionsList: "time-trigger-actions-list",
    hotspots: {
      toolbar: {
        flipButton: "flip-button-hotspot-toolbar",
        hotspotSettingsButton: "hotspot-settings-button-hotspot-toolbar",
        moreButton: "more-button-hotspot-toolbar",
        opacityButton: "opacity-button-hotspot-toolbar",
        rotateButton: "rotate-button-hotspot-toolbar"
      },
      settings: {
        createNewOverlay: "create-new-overlay",
        editOverlay: "edit-overlay",
        saveAsTemplateMenuItem: "save-as-template-menu-item",
        renameOverlayMenuItem: "rename-overlay-menu-item",
        deleteOverlayMenuItem: "delete-overlay-menu-item",
        overlayThumbnail: "hotspot-overlay-thumbnail",
        hotspotMenuOverlayThumbnail: "hotspot-menu-overlay-thumbnail",
        hotspotUrlValidation: "hotspot-url-validation",
        jumpToTimeInput: "hotspot-jump-to-time",
        jumpToTimeSlider: "jump-to-time-slider",
        hotspotActionsList: "hotspot-actions-list",
        customPayloadDataSwitch: "custom-payload-data-switch",
        customPayloadDataTextarea: "custom-payload-data-textarea",
        customPayloadDataErrorMessage: "custom-payload-data-error-message"
      }
    },
    polls: {
      deletePollAnswer: "delete-poll-answer",
      markAsCorrectOption: "mark-as-correct-option",
      unmarkAsCorrectOption: "unmark-as-correct-option",
      toolbar: {
        settingsButton: "poll-settings-button-poll-toolbar",
        textColorButton: "poll-text-color-poll-toolbar",
        backgroundColorButton: "poll-background-color-poll-toolbar",
        rotateButton: "rotate-button-poll-toolbar",
        animationButton: "animation-button-poll-toolbar"
      },
      inspector: {
        addOption: "poll-add-option",
        addQuestion: "poll-add-question",
        pauseOnShowController: "pause-on-show-controller",
        settingsTab: "poll-settings-tab",
        overviewTab: "poll-overview-tab",
        newPollMenuList: "poll-new-poll-menu-list",
        newPollMenuButton: "poll-new-poll-menu-button",
        overview: {
          addScorecard: "poll-add-scorecard",
          scorecard: "poll-scorecard"
        },
        settings: {
          showCorrectAnswerIfIncorrectSelected: "poll-show-correct-answer-if-incorrect-selected",
          shuffleAnswers: "poll-shuffle-answers",
          questionProgress: "poll-question-progress",
          limitRetakes: "poll-limit-retakes",
          retakesAmount: "poll-retakes-amount"
        }
      }
    },
    button: {
      toolbar: {
        fontButton: "button-font-button-toolbar",
        textButton: "button-text-button-toolbar",
        alignmentButton: "button-alignment-button-toolbar",
        borderRadiusButton: "button-border-radius-button-toolbar",
        borderButton: "button-stroke-button-toolbar",
        fontSizeButton: "button-font-size-button-toolbar",
        dropShadowButton: "button-drop-shadow-button-toolbar",
        animationButton: "button-animation-button-toolbar",
        cornerRadiusController: {
          rectangleButton: "corner-controller-rectangle-button",
          softButton: "corner-controller-soft-button",
          circleButton: "corner-controller-circle-button"
        },
        borderController: {
          noneButton: "none-border-button",
          lightButton: "light-border-button",
          middleweightButton: "middleweight-border-button",
          heavyButton: "heavy-border-button",
          borderColor: "button-border-color-picker"
        },
        alignmentController: {
          leftButton: "left-align-button",
          centerButton: "center-align-button",
          rightButton: "right-align-button",
          topButton: "top-align-button",
          middleButton: "middle-align-button",
          bottomButton: "bottom-align-button"
        },
        soundController: {
          muteButton: "mute-button",
          unmuteButton: "unmute-button"
        }
      }
    },
    overlay: {
      toolbar: {
        editButton: "edit-button-overlay-toolbar"
      },
      renameOverlayModal: {
        content: "rename-overlay-modal-content",
        input: "rename-overlay-input",
        apply: "rename-overlay-apply"
      },
      inspector: {
        categorySelect: "category-select-overlay-inspector"
      }
    },
    iframe: {
      toolbar: {
        linkButton: "link-button-iframe-toolbar",
        animationButton: "animation-button-iframe-toolbar",
        opacityButton: "opacity-button-iframe-toolbar"
      }
    },
    breathAnimation: {
      menu: "breath-animation-menu",
      noneOption: "breath-animation-none-option",
      breathOption: "breath-animation-breath-option"
    },
    animation: {
      imageToolbarButton: "animation-button-image-toolbar"
    },
    shapes: {
      addBackgroundButton: "add-background-button"
    },
    toolbar: "toolbar",
    toolbarSlider: "toolbar-slider",
    toolbarSliderInput: "toolbar-slider-input",
    toolbarSliderHandle: "toolbar-slider-handle",
    mainContainer: "main-container",
    rightClickMenuWrapper: "right-click-menu-wrapper",
    rightClickMenu: "right-click-menu",
    replaceToolbar: "replace-toolbar",
    replaceButton: "replace-button",
    confirmReplaceButton: "confirm-replace-button",
    cancelReplaceButton: "cancel-replace-button",
    timelineEmptyState: "timeline-empty-state",
    selectionLayerLoaderContainer: "selection-layer-loader-container",
    rulerContainer: "ruler-container",
    playheadContainer: "playhead-container",
    timelineContainer: "timeline-container",
    timelineResizeHandle: "timeline-resize-handle",
    inspectorResizeHandle: "inspector-resize-handle",
    footerTopbarContainer: "footer-topbar",
    playhead: "playhead",
    brandLogoSection: "brand-logo-section",
    brandLogosSection: "brand-logos-section",
    brandColorsSection: "brand-colors-section",
    brandFontsSection: "brand-fonts-section",
    brandIntrosSection: "brand-intros-section",
    brandOutrosSection: "brand-outros-section",
    brandSectionExpandButton: "brand-section-expand-button",
    addLogoButton: "add-logo-button",
    editBrandColorPaletteButton: "edit-brand-colors-button",
    brandColorPalette: "brand-color-palette",
    uploadFontsButton: "font-upload-button",
    addToBrandFontsButton: "add-to-brand-fonts-button",
    brandFontItem: "brand-font-item",
    brandFontsAmount: "brand-fonts-amount",
    uploadingFontItem: "uploading-font",
    fontDeleteMessage: "delete-font-message",
    loader: "loader",
    upgradeButton: "upgrade-button",
    addBrandColorsButton: "add-brand-colors-button",
    logoPlaceholder: "logo-placeholder",
    upsellBanner: "upsell-banner",
    upsellBannerUpgradeButton: "upsell-banner-upgrade-button",
    upsellBannerCloseButton: "upsell-banner-close-button",
    verticalFlipButton: `${_v1.VERTICAL}-flip-button`,
    watermark: "watermark",
    cropButton: "crop-button",
    stageContainer: "stage-container",
    canvas: "canvas",
    canvasToolbar: "canvas-toolbar",
    canvasTooltip: "canvas-tooltip",
    centerHeaderContainer: "center-header-container",
    sidebarMidContainer: "sidebar-mid-container",
    guidesContainer: "guides-container",
    gapButton: "gap-button",
    expandedViewUploadedDate: "expanded-view-uploaded-date",
    footer: "footer",
    videoToolbar: "video-toolbar",
    imageToolbar: "image-toolbar",
    soundToolbar: "sound-toolbar",
    solidToolbar: "solid-toolbar",
    fontSaveAsMessage: "save-as-font-message",
    fontController: "font-name-text-toolbar",
    dropShadowController: {
      noneButton: "none-drop-shadow-button",
      softButton: "soft-drop-shadow-button",
      normalButton: "normal-drop-shadow-button",
      strongButton: "strong-drop-shadow-button"
    },
    editTextHighlightButton: "highlight-button",
    removeFillerWordsButton: "remove-filler-words-button",
    removeGapsButton: "remove-gaps-button",
    gapsThresholdSlider: "gaps-threshold-slider",
    transcriptItemHighlight: "transcript-item-highlight",
    canvasRationButton: "canvas-ratio-button",
    firstTranscriptParagraph: "first-transcript-paragraph",
    transcriptBulkRemoveButton: "transcript-bulk-remove-button",
    footerCurrentTime: "footer-current-time",
    footerTotalTime: "footer-total-time",
    transcriptButton: "transcript-button",
    transcriptInspector: {
      searchInput: "transcript-search-input",
      showDeletedWordsButton: "show-deleted-words-button",
      selectionMenu: "transcript-selection-menu",
      itemMenu: {
        restoreButton: "restore-button",
        removeButton: "remove-button"
      }
    },
    saveAsTeamTemplate: {
      modal: "save-as-template-modal",
      input: "save-as-template-input",
      cancelButton: "save-as-template-cancel-button",
      submitButton: "save-as-template-submit-button",
      tryagainButton: "save-as-template-try-again-button"
    },
    scorecard: {
      inspector: {
        titleInput: "scorecard-title-input",
        descriptionInput: "scorecard-description-input",
        showConfettiSwitch: "scorecard-show-confetti-switch",
        showLogoSwitch: "scorecard-show-logo-switch"
      }
    }
  };
  _v0.s(["getTestIdSelector", 0, _v0 => `[data-testid="${_v0}"]`, "testIds", 0, _v2], 0);
}