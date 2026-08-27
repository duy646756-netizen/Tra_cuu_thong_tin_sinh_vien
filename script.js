const danhSachSinhVien = [
    {
        maSinhVien: "2412111037",
        hoTen: "Nguyễn Đức Duy",
        lop: "CT2802",
        nganh: "Công nghệ phần mềm"
    },
    {
        maSinhVien: "2412111038",
        hoTen: "Phạm Văn Long Thành",
        lop: "CT2801",
        nganh: "Công nghệ phần mềm"
    },
    {
        maSinhVien: "2412111039",
        hoTen: "Nguyễn Hải Long",
        lop: "CT2801",
        nganh: "Công nghệ thông tin"
    },
    {
        maSinhVien: "2412111040",
        hoTen: "Nguyễn Thành Đạt",
        lop: "CT2803",
        nganh: "Quản trị kinh doanh"
    }
];

function traCuuSinhVien() {
    const maSinhVien = document
        .getElementById("maSinhVien")
        .value
        .trim()
        .toUpperCase();

    const ketQua = document.getElementById("ketQua");

    if (maSinhVien === "") {
        ketQua.innerHTML = `
            <p>Vui lòng nhập mã sinh viên.</p>
        `;
        return;
    }

    const sinhVien = danhSachSinhVien.find(
        sinhVien => sinhVien.maSinhVien === maSinhVien
    );

    if (sinhVien) {
        ketQua.innerHTML = `
            <h2>Thông tin sinh viên</h2>
            <p><strong>Mã sinh viên:</strong> ${sinhVien.maSinhVien}</p>
            <p><strong>Họ và tên:</strong> ${sinhVien.hoTen}</p>
            <p><strong>Lớp:</strong> ${sinhVien.lop}</p>
            <p><strong>Ngành:</strong> ${sinhVien.nganh}</p>
        `;
    } else {
        ketQua.innerHTML = `
            <p>Không tìm thấy sinh viên có mã: <strong>${maSinhVien}</strong></p>
        `;
    }
}
document.getElementById("maSinhVien").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        traCuuSinhVien();
    }
});