function calculateLuas() {
    // Ambil nilai panjang sisi dari input
    var sideLengthLuas = parseFloat(
      document.getElementById("sideLengthLuas").value
    );
  
    // Validasi input
    if (isNaN(sideLengthLuas) || sideLengthLuas <= 0) {
      alert("Masukkan panjang sisi yang valid.");
      return;
    }
  
    // Hitung luas dan keliling
    var area = sideLengthLuas * sideLengthLuas;
  
    // Tampilkan hasil
    document.getElementById("areaResult").innerText =
      "L = S x S \n L = " +
      sideLengthLuas +
      " x " +
      sideLengthLuas +
      "\n" +
      "L = " +
      area;
  }
  
  function resetLuas() {
    // clear
    document.getElementById("areaResult").innerText = "";
  }
  
  function calculateKeliling() {
    // Ambil nilai panjang sisi dari input
    var sideLengthKeliling = parseFloat(
      document.getElementById("sideLengthKeliling").value
    );
  
    // Validasi input
    if (isNaN(sideLengthKeliling) || sideLengthKeliling <= 0) {
      alert("Masukkan panjang sisi yang valid.");
      return;
    }
  
    // Hitung luas dan keliling
    var perimeter = 4 * sideLengthKeliling;
  
    // Tampilkan hasil
    document.getElementById("perimeterResult").innerText =
      "K = 4 x S \n K = " +
      "4" +
      " x " +
      sideLengthKeliling +
      "\n" +
      "K = " +
      perimeter;
  }
  
  function resetKeliling() {
    // clear
    document.getElementById("perimeterResult").innerText = "";
  }
  