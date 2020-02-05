Vue.component('settings', {
    template: '<div class="row horizontal-align">' +
        '<div class="col-lg-4 col-md-6 col-sm-12 modal">' +
        '<div class="title-text">Settings</div>' +
        '<form>' +
        '<div>' +
        'Current Username<br>' +
        '<input type="text" name="current-username" class="input-disabled">' +
        '</div>' +
        '<div>' +
        'New Username<br>' +
        '<input type="text" name="current-username" class="form-input">' +
        '</div>' +
        '<input type="submit" value="Save Changes" class="save-button">' +
        '<input type="button" value="Cancel" class="cancel-button">' +
        '</form>' +
        '</div>' +
        '</div>'
});