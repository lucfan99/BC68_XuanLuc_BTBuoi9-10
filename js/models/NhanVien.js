class NhanVien {
  constructor() {
    this.tknv = "";
    this.name = "";
    this.email = "";
    this.password = "";
    this.datepicker = "";
    this.luongCB = "";
    this.chucvu = "";
    this.gioLam = "";
  }
  //Tính lương
  tongluong = function () {
    let luong = 0;
    let luongcb = this.luongCB * 1;
    if (this.chucvu == "Boss") {
      luong = luongcb * 3;
    } else if (this.chucvu == "Manager") {
      luong = luongcb * 2;
    } else luong = luongcb;
    return luong;
  };
  //loại Nhân viên
  loaiNhanVien = function () {
    let loaiNV;
    if (this.gioLam * 1 >= 192) {
      loaiNV = "Xuất sắc";
    } else if (this.gioLam * 1 >= 176 && this.gioLam * 1 < 192) {
      loaiNV = "Giỏi";
    } else if (this.gioLam * 1 >= 160 && this.gioLam * 1 < 176) {
      loaiNV = "Khá";
    } else {
      loaiNV = " Trung bình";
    }
    return loaiNV;
  };
}
