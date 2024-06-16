let arrNhanVien = [];

// lấy dữ liệu từ form
function getValueForm() {
  let arrValueNhanVien = document.querySelectorAll(
    "#formNhanVien input, #formNhanVien select"
  );
  let nhanVien = new NhanVien();
  let isValid = true;
  for (let field of arrValueNhanVien) {
    // console.log(field);
    let { value, id } = field;
    nhanVien[id] = value;

    let paren = field.parentElement;
    let errorField = paren.querySelector("span");
    let check = checkEmptyValue(value, errorField);
    isValid &= check;
    if (check && id == "tknv") {
      isValid &= checkLengthMatk(value, errorField, 4, 6);
    }
    if (check && id == "email") {
      isValid &= checkEmailValue(value, errorField);
    }
    // if()
  }
  // console.log(nhanVien);
  if (isValid) {
    return nhanVien;
  }
}

document.getElementById("formNhanVien").onsubmit = function (event) {
  event.preventDefault();
  let nhanVien = getValueForm();
  // console.log(NhanVien);
  if (!nhanVien) {
    return;
  }

  arrNhanVien.push(nhanVien);
  renderSaveReset();
  console.log(arrNhanVien);
};
function renderSaveReset() {
  renderArrNhanVien();
  saveLocalStorage();
  document.getElementById("formNhanVien").reset();
}
//Hiển thị lên giao diện
function renderArrNhanVien(arr = arrNhanVien) {
  let content = "";
  for (let nhanVien of arr) {
    let newArrNV = new NhanVien();
    Object.assign(newArrNV, nhanVien);
    let { tknv, name, email, datepicker, chucvu } = newArrNV;
    content += `
    <tr>
    <td>${tknv}</td>
    <td>${name}</td>
    <td>${email}</td>
    <td>${datepicker}</td>
    <td>${chucvu}</td>
    <td>${newArrNV.tongluong()}</td>
    <td>${newArrNV.loaiNhanVien()}</td>
    <td>
      <button  onclick="deleteNV('${tknv}')" class="btn btn-danger">Xóa</button> 
      <button onclick="getInfoNV('${tknv}')" class="btn btn-warning"  data-toggle="modal" data-target="#myModal"
                    >Sửa</button> 
    </td>
    </tr>
  `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

//Lưu xuống localStorage
function saveLocalStorage(key = "arrNhanVien", value = arrNhanVien) {
  let arrJSON = JSON.stringify(value);
  localStorage.setItem(key, arrJSON);
}
// lấy dữ liệu từ localStorage
function getLocalStorage(key = "arrNhanVien") {
  let arrLC = localStorage.getItem(key);
  if (arrLC) {
    arrNhanVien = JSON.parse(arrLC);
    renderArrNhanVien();
  }
}

getLocalStorage();
//Xóa nhân viên

function deleteNV(maTK) {
  //findIndex
  let indexNV = arrNhanVien.findIndex((item) => {
    return item.tknv == maTK;
  });
  console.log(indexNV);
  if (indexNV != -1) {
    arrNhanVien.splice(indexNV, 1);
    renderArrNhanVien();
    saveLocalStorage();
  }
}

//Hiển thị thông tin nhân viên
function getInfoNV(maTK) {
  // console.log("sửa");
  let index = arrNhanVien.find((item, index) => {
    return item.tknv == maTK;
  });
  // console.log(index);
  if (index) {
    let arrfield = document.querySelectorAll(
      "#formNhanVien input, #formNhanVien select"
    );
    // console.log(arrfield);
    for (let field of arrfield) {
      console.log(field);
      let id = field.id;
      field.value = index[id];
    }
    console.log(arrfield);
    document.getElementById("tknv").readOnly = true;
  }
}

document.getElementById("btnCapNhat").onclick = updateNhanVien;

function updateNhanVien() {
  let nhanVien = getValueForm();

  let index = arrNhanVien.findIndex((item, value) => {
    return item.tknv == nhanVien.tknv;
  });
  if (index != -1) {
    arrNhanVien[index] = nhanVien;
    renderSaveReset();
  }
}
