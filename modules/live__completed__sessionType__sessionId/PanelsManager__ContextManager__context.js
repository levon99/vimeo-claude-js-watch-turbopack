{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  class _v5 extends _v1.ContextManager {
    context = {
      panelActions: (0, _v1.createActions)({
        setLeftPanel: _v0 => {
          this.setContext({
            leftPanel: _v0
          }), window.location.hash = null === _v0 ? _v2.ELeftPanelHash.NONE : String(_v0);
        },
        setRightPanel: _v0 => this.setContext({
          rightPanel: _v0
        }),
        toggleLeftPanel: _v0 => this.setContext(({
          leftPanel: _v0
        }) => ({
          leftPanel: _v0 === _v0 ? null : _v0
        })),
        toggleRightPanel: _v0 => this.setContext(({
          rightPanel: _v0
        }) => ({
          rightPanel: _v0 === _v0 ? null : _v0
        })),
        setEngagementActiveTool: _v0 => this.setContext({
          engagementActiveTool: _v0
        }),
        requestEngagementSubview: _v0 => {
          if (this.context.leftPanel === _v2.ELeftPanelId.ENGAGEMENT && this.context.engagementActiveTool === _v0) {
            this.setContext({
              leftPanel: null
            }), window.location.hash = _v2.ELeftPanelHash.NONE;
            return;
          }
          this.setContext({
            leftPanel: _v2.ELeftPanelId.ENGAGEMENT,
            engagementSubviewRequest: {
              subview: _v0,
              requestId: Date.now()
            }
          }), window.location.hash = String(_v2.ELeftPanelId.ENGAGEMENT);
        },
        clearEngagementSubviewRequest: () => this.setContext({
          engagementSubviewRequest: null
        })
      }),
      leftPanel: null,
      rightPanel: null,
      engagementActiveTool: null,
      engagementSubviewRequest: null
    };
    constructor(_v0) {
      super();
      const _v1 = window.location.hash?.replace(/^#/, ""),
        _v2 = Object.values(_v3.ERightPanelId).includes(_v1) ? _v1 : _v3.ERightPanelId.EVENT_SETTINGS;
      this.context.rightPanel = _v0?.sessionType !== _v4.EComposerSessionType.VENUE ? _v2 : null;
    }
  }
  _v0.s(["PanelsManager", 0, _v5]);
}