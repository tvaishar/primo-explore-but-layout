/*
*  BUT NUI footer
*
*/

app.controller ('prmExploreFooterAfterController', ['angularLoad','$sce', function (angularLoad,$sce) {
	
	var vm = this;
	vm.footerLogoUrl = 'custom/' + viewName + '/img/VUT_inverzni_CZ.png';
	
}]);


app.component('prmExploreFooterAfter', {
		bindings: {parentCtrl: '<'},
		controller: 'prmExploreFooterAfterController',
        templateUrl: 'custom/' + viewName + '/html/footer.html'
 });

/* BUT NUI footer end */