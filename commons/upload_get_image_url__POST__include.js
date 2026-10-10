{
  "use strict";

  let _v1 = async ({
    file: _v0,
    type: _v1,
    id: _v2,
    contentType: _v3
  }) => {
    let _v4 = await fetch("/upload/_get_image_url", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify({
          type: _v1,
          id: _v2
        })
      }).then(_v0 => _v0.json()),
      _v5 = "object" == typeof _v4 ? _v4.url : _v4,
      _v6 = await fetch(_v5, {
        method: "PUT",
        headers: {
          "Content-Type": _v3,
          "X-Requested-With": "XMLHttpRequest"
        },
        body: _v0
      });
    return {
      url: _v5,
      response: _v6
    };
  };
  _v0.s(["uploadImageViaWebController", 0, _v1]);
}