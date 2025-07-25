//array untuk menyimpan task
let tasks = [];

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
            alert("Mohon isi nama tugas dan tanggal dengan lengkap!");
      }
}

//fungsi untuk nampilkan task di tabel
function TampilTask(){
      const Tabel = document.getElementById("TabelTask").getElementsByTagName('tbody')[0];
      const FilterSkrg = document.getElementById("filter").value;

      Tabel.innerHTML="";
      let Ada = false;
      tasks.forEach((item, index) => {
            if (FilterSkrg === "Filter" || FilterSkrg === "Semua" || item.status === FilterSkrg){
                  const DataBaru = Tabel.insertRow();
                  DataBaru.innerHTML = `
                  <td>${item.namatask}</td>
                  <td>${item.tanggaltask}</td>
                  <td>${item.status}</td>
                  <td>
                        <button class="done" onclick="SelesaiTask(${index});"><i class="fa-solid fa-check"></i></button>
                        <button class="edit" onclick="EditTask(${index});"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="hapus" onclick="HapusTask(${index});"><i class="fa-regular fa-trash-can"></i></button>
                  </td>
                  `;
                  AdaTask = true;
            }
      });

      if (!AdaTask){
            const baris = Tabel.insertRow();
            baris.innerHTML = `<td style="text-align:center;" colspan="4">Anda belum memiliki tugas</td>`;
      }
}

//fungsi untuk menghapus tiap baris task
function HapusTask(index){
      if (confirm("Apakah anda yakin ingin menghapus task ini?")) {
            tasks.splice(index,1);
            TampilTask();
      }
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
      if (confirm("Apakah anda yakin ingin menghapus semuanya?")) {
            tasks = [];
            TampilTask();
            document.getElementById("task").value = "";
            document.getElementById("tanggal").value = "";
            document.getElementById("filter").value = "Filter"; 
      }
}