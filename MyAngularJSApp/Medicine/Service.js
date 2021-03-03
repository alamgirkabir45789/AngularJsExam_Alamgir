

//Service to get data from medicine mvc controller
myapp.service('medicineService', function ($http) {


    //read medicine
    this.getAllMedicines = function () {
        return $http.get('/Medicine/GetMedicine');
    }

    //add new medicine
    this.save = function (Medicine) {
        var request = $http({
            method: 'post',
            url: '/Medicine/Insert',
            data: Medicine
        });
        return request;
    }

    //update Medicine records
    this.update = function (Medicine) {
        var updaterequest = $http({
            method: 'post',
            url: '/Medicine/Update',
            data: Medicine
        });
        return updaterequest;
    }

    //delete record
    this.delete = function (UpdateMedNo) {
        return $http.post('/Medicine/Delete/' + UpdateMedNo);
    }
});
