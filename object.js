/*const iqbal = {wajah: "cakep", age: 23, lahir: 99};
console.log(iqbal.wajah);*/

//properties function
function manusia(nama, umur, lahir){
    const data = { nama,
        umur : 20, 
        lahir : 99,
        berat : 60,
        tinggi : 166,
        berat_ideal : function () {return this.tinggi - this.berat}
    };

const kata = "nama saya " + data.nama + " umur saya " + data.umur + " saya lahir tahun " + data.lahir + " Berat idealnya adalah " + data.berat_ideal()

return  kata
};

console.log(manusia("jony", "25", "1998"));

