{
  "use strict";

  _v0.s(["switchTeam", 0, (_v0, _v1) => fetch("/manage/videos?action=SWITCH_TEAMS", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest"
    },
    body: JSON.stringify({
      team_owner_id: _v0,
      token: _v1
    })
  })]);
}