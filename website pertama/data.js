const nama = "ghikeal dinnur shiam"
let usia = 1
let generasi;
let Biodata = document.getElementById('Biodata')
console.log(Biodata)

function generatebBiodata()

{

    if (usia > 2 && usia < 10) {
        generasi = "generasi anak anak";
    } else
    if (usia >= 23 && usia < 40) {
        generasi = "generasi dewasa";
    } else
    if (usia < 2) { generasi = "generasi bayi" } else {
        generasi = "generasi tua";
    }

    return Biodata.innerHTML = generasi





}
console.log(nama)
console.log(usia)
generatebBiodata();