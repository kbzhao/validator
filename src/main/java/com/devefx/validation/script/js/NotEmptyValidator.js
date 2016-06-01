function NotEmptyValidator(field, errorCode, errorMessage) {
    FieldValidator.apply(this, [field, errorCode, errorMessage]);
    this.isValid = function (request) {
        var value = request.getParameter(field);
        return value != null && value.replace(/\s/ig, "").length != 0;
    };
}