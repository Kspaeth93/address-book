Vue.component('contacts', {
    template:   '<div>'+
                '    <navbar v-bind:username="$root.username"></navbar>' +
                '    <div>Contacts</div>' +
                '</div>'
});