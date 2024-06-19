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
// Lương
function checkLuongCB(value, errorField, min, max) {
  if (min <= value && value <= max) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = `Lương trong khoảng từ 1tr đến 20tr`;
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
  let nameRegex = /^[a-zA-Z\-]+$/;
  let isValid = nameRegex.test(value);
  if (isValid) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = `Vui lòng nhập bằng chữ !!`;
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
// Mật khẩu
// function checkPassword(value, errorField) {
//   if (value.length < 6 || value.length > 10) {
//     return false;
//   }
//   let hasUpperCase = false;
//   let hasLowerCase = false;
//   let hasDigit = false;
//   for (let i = 0; i < value.lenght; i++) {
//     let char = value[i];
//     if (char >= "a" && char <= "z") {
//       hasLowerCase = true;
//     } else if (char >= "A" && char <= "Z") {
//       hasUpperCase = true;
//     } else if (char >= "0" && char <= "9") {
//       hasDigit = true;
//     }
//   }
//   return hasDigit && hasLowerCase && hasUpperCase;
// }
function checkPassword(value, errorField, min, max) {
  let regexPass =
    /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*))/;
  let isValid = regexPass.test(value);
  if (isValid && min <= value.length && value.length <= max) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = `Vui lòng nhập pass trong khoảng từ ${min} đến ${max}`;
    return false;
  }
}
