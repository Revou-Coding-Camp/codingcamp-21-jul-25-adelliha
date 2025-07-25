//array untuk menyimpan task
let tasks = [];
// let FilterSkrg = "Semua";

//fungsi untuk tambah task
function TambahTask(){
      const task = document.getElementById("task");
      const tanggal = document.getElementById("tanggal");

      if (task.value.trim() != "" && tanggal.value != "") {
            tasks.push({
                  namatask : task.value.trim(),
                  tanggaltask : tanggal.value,
                  status: "Pending"
            });

            TampilTask();

            task.value = "";
            tanggal.value = "";

      } else {
            alert("Mohon isi nama task dan tanggal dengan benar!");
      }
}

//fungsi untuk nampilkan task di tabel
function TampilTask(){
      const Tabel = document.getElementById("TabelTask").getElementsByTagName('tbody')[0];
      const FilterSkrg = document.getElementById("filter").value;

      Tabel.innerHTML="";

      tasks.forEach((item, index) => {
            if (FilterSkrg === "Semua" || item.status === FilterSkrg){
                  const DataBaru = Tabel.insertRow();
                  DataBaru.innerHTML = `
                  <td>${item.namatask}</td>
                  <td>${item.tanggaltask}</td>
                  <td>${item.status}</td>
                  <td>
                        <button onclick="SelesaiTask(${index});">OK</button>
                        <button onclick="EditTask(${index});">Edit</button>
                        <button onclick="HapusTask(${index});">Hapus</button>
                  </td>
                  `;
            }
      });

}

//fungsi untuk menghapus tiap baris task
function HapusTask(index){
      tasks.splice(index,1);
      TampilTask();
}

//fungsi untuk mengubah nama task tiap baris
function EditTask(index){
      const NamaBaru = prompt("Tuliskan nama task baru anda :", tasks[index].namatask);
      if (NamaBaru != null && NamaBaru.trim() != "") {
            tasks[index].namatask = NamaBaru.trim();
            TampilTask();
      }
}

//fungsi untuk mengubah status task menjadi selesai
function SelesaiTask(index){
      tasks[index].status = "Selesai";
      TampilTask();
}

//fungsi untuk memfilter task berdasarkan status
function FilterTask(){
      TampilTask();

}

function HapusSemua(){
      alert("Apakah anda yakin ingin menghapus semuanya?");
      tasks=[];
      TampilTask();
}