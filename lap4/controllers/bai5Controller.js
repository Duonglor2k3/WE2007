window.bai5Controller = function ($scope) {
  $scope.student = {};
  $scope.Grade = function () {
    var diem = parseFloat($scope.student.diem);
    if (diem >= 5) {
      $scope.student.hocLuc = "Đậu";
    } else if (diem >= 0 && diem < 5) {
      $scope.student.hocLuc = "Trượt";
    } else {
      $scope.student.hocLuc = "Vui Lòng Nhập Lại !!";
    }
		// 1 biến chứa các dữ liệu trên để hiển thị
  };
};
