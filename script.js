filterSelection(null);

function filterSelection(key) {
  $.getJSON('./data.json', function (data) {
    let menu = data.menu;

    if (key) {
      menu = menu.filter(function (value) {
        return value.jenis == key; //post.username === 'James"
      });
    }

    $('#post-card')
      .empty()
      .append(
        menu.map(function(each) {
        return `
        <div class="col-md-4">
          <div class="card m-2 shadow-lg">
            <img src= ${each.gambar} class="card-img-top mx-auto" style="width:  200px; height:200px"/>
            <div class="card-body" style="border: 1 solid">
              <h5 class="card-title text-center">${each.nama}</h5>
              <p class="card-text">
                ${each.deskripsi} </br>
 
           
                Harga : ${each.harga}</br>
                Estimasi : ${each.estimasi}
              </p>
            </div>
            <button type="button" class="btn btn-primary mx-auto m-3" style="width: 50%; ">Pesan Sekarang</button> 
          </div>
        </div>`;
        })
      );
  });
}