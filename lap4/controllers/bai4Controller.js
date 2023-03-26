window.bai4Controller = function ($scope) {
  $scope.tinhDienTich = function () {
    var a = parseFloat($scope.chieudai);
    var b = parseFloat($scope.chieurong);
    $scope.dienTich = a * b;
    $scope.chuVi = (a + b) * 2;
  };
};