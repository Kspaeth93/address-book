Vue.component('contact-list-item', {
    template:   '<div class="text text-light text-medium ui-medium shadow">' +
                '    {{ name }}<br>' +
                '</div>',
    props: [ 'name' ]
});