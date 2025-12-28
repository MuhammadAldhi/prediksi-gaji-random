
const btnLogin = document.querySelector('.loginBtn');
const nilaiInput = document.getElementById('inputId');

function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
}

function dataKaryawan() {
    const posisi = ['Manager', 'Supervisor', 'Staff', 'Intern'];
    const indexPosisiR = Math.floor(Math.random() * posisi.length);
    const randomPosisi = posisi[indexPosisiR];
    const inputId = nilaiInput.value;
    console.log(inputId)
    if (inputId !== '' && isNaN(inputId)) {
        if (indexPosisiR > 1) {
            const gajiKecil = formatRupiah(Math.floor(Math.random() * (4000000 - 1000000 + 1)) + 1000000);
            alert(`hallo ${inputId} jabatan anda ${randomPosisi} dan gaji anda ${gajiKecil}`)
        } else {
            const gajiGede = formatRupiah(Math.floor(Math.random() * (20000000 - 10000000)) + 10000000);
            alert(`hallo ${inputId} jabatan anda ${randomPosisi} dan gaji ${gajiGede}`)
        }

    } else {
        alert('masukin nama yang benerr donggg')
    }
}

btnLogin.addEventListener('click', dataKaryawan);
