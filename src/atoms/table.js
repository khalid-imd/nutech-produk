import Table from "react-bootstrap/Table";

const Tabel = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="text-center">
          <th>No</th>
          <th>Gambar</th>
          <th>Nama Produk</th>
          <th>Harga Jual</th>
          <th>Harga Beli</th>
          <th>Stok</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>botol minum lucu</td>
          <td>Rp. 45.000</td>
          <td>Rp. 35.000</td>
          <td>421</td>
          <td>
            <div className="row">
              <div className="col-6 text-center">ubah</div>
              <div className="col-6 text-center">hapus</div>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Tabel;
