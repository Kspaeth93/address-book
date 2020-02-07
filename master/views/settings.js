Vue.component('settings', {
    template:   '<div>' +
                '    <navbar v-bind:username="$root.username"></navbar>' +
                '    <settings-modal></settings-modal>' +
                '</div>' 
});