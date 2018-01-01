myapp.controller('whyUsController', function ($scope) {
    var vm = this;
    vm.features = [{
        "featureId": 1,
        "name": "Product Benefits",
        "sortOrder": 1,
        "image": "common/images/myloanworld-logo.png",
        "subFeatures": [{
            "subFeaturesId": 1,
            "name": "Products tailor made for your needs"
        }, {
            "subFeaturesId": 1,
            "name": "Higher loan limits"
        }, {
            "subFeaturesId": 1,
            "name": "Flexible repayment options"
        }]
    }, {
        "featureId": 2,
        "name": "Customer Focused",
        "sortOrder": 2,
        "image": "common/images/myloanworld-logo.png",
        "subFeatures": [{
            "subFeaturesId": 1,
            "name": "A human approach to lending"
        }, {
            "subFeaturesId": 1,
            "name": "Respectful and caring"
        }, {
            "subFeaturesId": 1,
            "name": "World class customer service"
        }]
    }, {
        "featureId": 3,
        "name": "Simple & Easy",
        "sortOrder": 3,
        "image": "common/images/myloanworld-logo.png",
        "subFeatures": [{
            "subFeaturesId": 1,
            "name": "No branch visit required"
        }, {
            "subFeaturesId": 1,
            "name": "Instant loan sanction"
        }, {
            "subFeaturesId": 1,
            "name": "Online loan account management"
        }]
    }];
})