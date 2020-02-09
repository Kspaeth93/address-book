Vue.component('contact-list', {
    template:   '<div class="row">' +
                '    <div class="col-12">' +
                '        <contact-list-item v-for="contact in $root.contacts"' +
                '                   v-bind:name="contact.name"' +
                '                   v-bind:phoneNumber="contact.phoneNumber"' +
                '                   v-bind:key="contact.id">' +
                '        </contact-list-item>' +
                '    </div>' +
                '</div>'
});