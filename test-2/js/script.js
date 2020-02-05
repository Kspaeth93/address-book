Vue.component('contact', {
    props: ['contact'],
    template: '<ul>' +
        '<h3>{{ contact.name }}</h3>' +
        '<p><i>Company: {{ contact.company }}<br>' +
        'Address: {{ contact.address }}<br>' +
        'Birthday: {{ contact.birthday }}</i></p>' +
        '<li v-for="info in contact.infos"><b>[{{ info.type }}]</b> {{ info.value }}</li>' +
        '</ul>'
});

var test2 = new Vue({
    el: '#test-2',
    data: {
        contacts: [{
                id: 0,
                name: 'Joanne Susan',
                company: 'Steel Welding Inc.',
                address: '3522 N. Structural Ave. Ste. #340 Truebend, VA 38116',
                birthday: '06/12/1988',
                infos: [{
                        type: 'home',
                        value: '(655) 456-7890'
                    },
                    {
                        type: 'work',
                        value: '(784) 333-4531'
                    },
                    {
                        type: 'cell',
                        value: '(453) 489-1212'
                    }
                ]
            },
            {
                id: 1,
                name: 'Fred Cunningworth',
                company: 'Financial Pros.',
                address: '221 W. Options Pl. Goldshire, CA 23661',
                birthday: '02/22/1974',
                infos: [{
                    type: 'home',
                    value: '(452) 754-1245'
                }]
            },
            {
                id: 2,
                name: 'Spencer McMiller',
                company: 'Fashion & Friends',
                address: '3614 S. Scenic Blvd. East Glossington, VT 71894',
                birthday: '06/03/2001',
                infos: [{
                        type: 'home',
                        value: '(455) 442-1587'
                    },
                    {
                        type: 'work',
                        value: '(436) 689-7751'
                    }
                ]
            }
        ]
    }
});