

//medicine controller
myapp.controller('medicine-controller', function ($scope, medicineService) {

    //Loads all Medicine records when page loads
    loadMedicines();

    function loadMedicines() {
        var MedicineRecords = medicineService.getAllMedicines();
        MedicineRecords.then(function (d) {
            $scope.Medicines = d.data;
        },
            function () {
                alert("Error occured while fetching medicine list...");
            });
    }

    //save medicine data 
    $scope.save = function () {
        var Medicine = {
            MedNo: $scope.MedNo,
            Name: $scope.Name,           
            Price: $scope.Price,
            Quantity: $scope.Quantity
            
        };
        var saverecords = medicineService.save(Medicine);
        saverecords.then(function (d) {
            if (d.data.success === true) {
                loadMedicines();
                alert("Medicine added successfully");
                $scope.resetSave();
            }
            else { alert("Medicine not added."); }
        },
            function () {
                alert("Error occurred while adding medicine.");
            });
    }

    //reset controls after save operation
    $scope.resetSave = function () {
        $scope.MedNo = '';
        $scope.Name = '';
        $scope.Price = '';
        $scope.Quantity = '';
    }

    //get single record by ID
    $scope.getForUpdate = function (Medicine) {
        $scope.UpdateMedNo = Medicine.ID;
        $scope.UpdateName = Medicine.Name;
        $scope.UpdatePrice = Medicine.Price;
        $scope.UpdateQuantity = Medicine.Quantity;
    }

    //get data for delete confirmation
    $scope.getForDelete = function (Medicine) {
        $scope.UpdateMedNo = Medicine.ID;
        $scope.UpdateName = Medicine.Name;
        $scope.UpdatePrice = Medicine.Price;
        $scope.UpdateQuantity = Medicine.Quantity;
    }

    //update Medicine data
    $scope.update = function () {
        var Medicine = {
            ID: $scope.UpdateMedNo,
            Name: $scope.UpdateName,
            Price: $scope.UpdatePrice,
            Quantity: $scope.UpdateQuantity
        };
        var updaterecords = medicineService.update(Medicine);
        updaterecords.then(function (d) {
            if (d.data.success === true) {
                loadMedicines();
                alert("Medicine updated successfully");
                $scope.resetUpdate();
            }
            else {
                alert("Medicine not updated.");
            }
        },
            function () {
                alert("Error occured while updating medicine record");
            });
    }

    //reset controls after update
    $scope.resetUpdate = function () {
        $scope.UpdateMedNo = '';
        $scope.UpdateName = '';
        $scope.UpdatePrice = '';
        $scope.UpdateQuantity = '';
    }

    //delete Medicine record
    $scope.delete = function (UpdateMedNo) {
        var deleterecord = medicineService.delete($scope.UpdateMedNo);
        deleterecord.then(function (d) {
            if (d.data.success === true) {
                loadMedicines();
                alert("Medicine deleted succussfully");
            }
            else {
                alert("Medicine not deleted.");
            }
        });
    }
});
