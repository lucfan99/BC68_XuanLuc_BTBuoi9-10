// check empty value
function checkEmptyValue(value, errorField) {
  // thực hiện kiểm tra lỗi cho người dùng
  if (!value) {
    errorField.innerHTML = "Vui lòng không bỏ trống trường này";
    return false;
  } else {
    errorField.innerHTML = "";
    return true;
  }
}
function checkLengthMatk(value, errorField, min, max) {
  if (min <= value.length && value.length <= max) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = `Vui lòng nhập dữ liệu trong khoảng từ ${min} đến ${max}`;
    return false;
  }
}
function checkLuongCB(value, errorField, min, max) {
  if (min <= value && value <= max) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = `Lương trong khoảng từ ${min} đến ${max}`;
    return false;
  }
}
function checkEmailValue(value, errorField) {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isValid = regexEmail.test(value);
  if (isValid) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = "Vui lòng nhập đúng định dạng email !!";
    return false;
  }
}
// số giờ làm
function checkGioLam(value, errorField, min, max) {
  if (min <= value && value <= max) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = `Giờ làm trong khoảng từ ${min} đến ${max}`;
    return false;
  }
}
// chức vụ
function checkChucVu(value, errorField) {
  if (!value) {
    errorField.innerHTML = "Vui lòng chọn chức vụ hợp lệ !";
    return false;
  } else {
    errorField.innerHTML = "";
    return true;
  }
}
// name
function isNameString(value, errorField) {
  let isValid = typeof value;
  if (isValid == "string") {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = "Tên vui lòng không nhập số ";
    return false;
  }
}
// datepicker
function isDate(value, errorField) {
  let day = $("#datepicker")
    .datepicker({
      dateFormat: "mm-dd-yyyy",
    })
    .boolean();
  if (day != -1) {
    errorField.innerHTML = "";
    return true;
    n;
  } else {
    errorField.innerHTML = "Vui lòng nhập đúng định dạng MM/DD/YYYY";
  }
}
