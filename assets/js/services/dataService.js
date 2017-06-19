(function() {
	angular.module('documentReader')
		   .factory('dataService',['$http','$log','$q',
		   	function($http,$log,$q){
		   	return {
		   			getFiles : getFiles,
		   		};
		   	function getFiles(){
		   			return $http.get('assets/files.json')
		   						.then(onSuccess)
		   						.catch(onError);

		   			function onSuccess(response){
		   				return response.data;
		   			}
		   			function onError(response){
		   				return $q.reject('Error ' + response.status);
		   			}
		   		}
		   
	}])
})();
