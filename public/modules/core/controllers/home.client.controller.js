'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.alerts=[
			{
			icon:'glyphicon-user',
			colour:'btn-success',
			total:'20,800',
			description:'TOTAL_CUSTOMERS'
		    },
			{
				icon:'glyphicon-calendar',
				colour:'btn-primary',
				total:'8,435',
				description:'UPCOMING - EVENTS'
			},
            {
                icon:'glyphicon-edit',
                colour:'btn-success',
                total:'527',
                description:'New Customers in 24h'
            },
            {
                icon:'glyphicon-record',
                colour:'btn-info',
                total:'85,435',
                description:'Emails-Sent'
            },

            {
                icon:'glyphicon-eye-open',
                colour:'btn-warning',
                total:'268',
                description:'FOLLOW UP REQUIRED'
            },

            {
                icon:'glyphicon-flag',
                colour:'btn-danger',
                total:'348',
                description:'REFERRALS TO MODERATE'
            },


        ];



	}
]);
