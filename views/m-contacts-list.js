Vue.component('m-contact-list', {
    template:   '<div>' +
                '    <navbar v-bind:username="$root.username"></navbar>' +
                '    <div>Mobile Contact List</div>' +
                '    <contact-toolbar></contact-toolbar>' +
                '    <contact-list></contact-list>' +
                '</div>'
});