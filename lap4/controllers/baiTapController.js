window.baiTapController = function ($scope, $routeParams) {
  $scope.chucVu = $routeParams.name; // lấy tên chức vụ
  let chucVu = $scope.chucVu;
  $scope.user = {}; // lưu dữ liệu người dùng
  $scope.kiemtradulieu = {
    name: true,
    gender: true,
    bac: true,
    ngaylam: true,
  }; // kiểm tra dữ liệu người dùng
  $scope.submit = function () {
    let name = $scope.user.name;
    let gender = $scope.user.gender;
    let bac = $scope.user.bac;
    let soNgayLam = $scope.user.ngaylam;

    // Validate dữ liệu người dùng
    if (name == undefined || name == "") {
      $scope.kiemtradulieu.name = false;
    } else {
      $scope.kiemtradulieu.name = true;
    }
    if (gender == undefined || gender == "") {
      $scope.kiemtradulieu.gender = false;
    } else {
      $scope.kiemtradulieu.gender = true;
    }
    if (bac == undefined || bac == "") {
      $scope.kiemtradulieu.bac = false;
    } else {
      $scope.kiemtradulieu.bac = true;
    }
    if (soNgayLam == undefined || soNgayLam == "") {
      $scope.kiemtradulieu.ngaylam = false;
      $scope.loiNgayLam = "Vui lòng nhập số ngày làm";
    } else if (soNgayLam < 0) {
      $scope.kiemtradulieu.ngaylam = false;
      $scope.loiNgayLam = "Vui lòng nhập số ngày làm lớn hơn 0";
    } else if (soNgayLam > 30) {
      $scope.kiemtradulieu.ngaylam = false;
      $scope.loiNgayLam = "Vui lòng nhập số ngày làm nhỏ hơn 30";
    } else {
      $scope.kiemtradulieu.ngaylam = true;
    }

		if(gender == "Nam") {
			var gioiTinh = "Ông";
		} else {
			var gioiTinh = "Bà";
		}
    // Lương Nhân Viên bậc 1 : 700 , bậc 2 : 1200 , bậc 3 : 2400 ; lương Cán Bộ bậc 1 : 2600 , bậc 2 : 3200 , bậc 3 : 3800 ; Lương Quản lí bậc 1 : 4000 , bậc 2 : 5000 , bậc 3 : 6000 ;
    if (chucVu == "Nhân Viên") {
      var luong = 0;
      if (bac == 1) {
        luong = 700 * soNgayLam;
      } else if (bac == 2) {
        luong = 1200 * soNgayLam;
      } else if (bac == 3) {
        luong = 2400 * soNgayLam;
      }
    } else if (chucVu == "Cán Bộ") {
      if (bac == 1) {
        luong = 2600 * soNgayLam;
      } else if (bac == 2) {
        luong = 3200 * soNgayLam;
      } else if (bac == 3) {
        luong = 3800 * soNgayLam;
      }
    } else if (chucVu == "Quản Lý") {
      if (bac == 1) {
        luong = 4000 * soNgayLam;
      } else if (bac == 2) {
        luong = 5000 * soNgayLam;
      } else if (bac == 3) {
        luong = 6000 * soNgayLam;
      }
    }
    // kiểm tra đủ dữ liệu rồi hiển thị
    if (
      $scope.kiemtradulieu.name == true &&
      $scope.kiemtradulieu.gender == true &&
      $scope.kiemtradulieu.bac == true &&
      $scope.kiemtradulieu.ngaylam == true
    ) {
      $scope.hienThi =
        gioiTinh +
        " : " +
        name +
        " là " +
        chucVu +
        "" +
        " bậc " +
        bac +
        " được chi trả " +
        luong;
    }
  };
};
