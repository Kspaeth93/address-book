Vue.component('login', {
    template:   '<div>' +
                '    <navbar v-bind:username="$root.username"></navbar>' +
                '    <login-modal></login-modal>' +
                '</div>'
});