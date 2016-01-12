app.directive('manufacturer', function() {
    return {
		restrict: 'E',
		scope: {
			info: '=',
            search: '='
		},
		templateUrl: 'assets/js/directives/manufacturer.html'
	};
});