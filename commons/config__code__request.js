{
  "use strict";

  _v1.exports = function (_v0, _v1, _v2, _v3, _v4) {
    return _v0.config = _v1, _v2 && (_v0.code = _v2), _v0.request = _v3, _v0.response = _v4, _v0.isAxiosError = !0, _v0.toJSON = function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      };
    }, _v0;
  };
}