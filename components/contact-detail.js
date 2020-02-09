Vue.component('contact-detail', {
    template:   '<div class="text text-light">' +
                '    <div class="text-large spacing">' +
                '        {{ name }}' +
                '    </div>' +
                '    <div class="text-medium italic spacing">' +
                '        {{ address }}' +
                '    </div>' +
                '    <div class="text-medium spacing">' +
                '        [{{ phoneNumberType1 }}] {{ phoneNumber1 }}<br>' +
                '        [{{ phoneNumberType2 }}] {{ phoneNumber2 }}<br>' +
                '        [{{ phoneNumberType3 }}] {{ phoneNumber3 }}' +
                '    </div>' +
                '    <div class="spacing">' +
                '        <input type="button"' +
                '               value="Delete"' +
                '               class="button large-button error-button" />' +
                '    </div>' +
                '</div>',
    props: [
        'name',
        'address',
        'phoneNumber1', 'phoneNumberType1',
        'phoneNumber2', 'phoneNumberType2',
        'phoneNumber3', 'phoneNumberType3' ]
});