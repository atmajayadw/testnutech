import React from 'react'

const Modal = ({ handleChange, handleEdit, handleSubmit, product }) => {
    if (product) {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Data!</h5>
                            <button className="btn btn-danger" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="form-group">
                                    <label htmlFor="nama">Nama Barang</label>
                                    <input type="text" className="form-control" id="nama" onChange={(event) => handleChange(event)} defaultValue={product.nama} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="harga_beli">Harga Beli</label>
                                    <input type="number" className="form-control" id="harga_beli" onChange={(event) => handleChange(event)} defaultValue={product.harga_beli} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="harga_jual">Harga Jual</label>
                                    <input type="number" className="form-control" id="harga_jual" onChange={(event) => handleChange(event)} defaultValue={product.harga_jual} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="foto">Foto</label>
                                    <input type="text" className="form-control" id="foto" onChange={(event) => handleChange(event)} defaultValue={product.foto} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stok">Stok</label>
                                    <input type="number" className="form-control" id="stok" onChange={(event) => handleChange(event)} defaultValue={product.stok} />
                                </div>

                                <button className="btn btn-primary mt-3" onClick={handleEdit} data-dismiss="modal">Edit!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Tambah Data!</h5>
                            <button className="btn btn-danger" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="form-group">
                                    <label htmlFor="nama">Nama Barang</label>
                                    <input type="text" className="form-control" id="nama" onChange={(event) => handleChange(event)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="harga_beli">Harga Beli</label>
                                    <input type="number" className="form-control" id="harga_beli" onChange={(event) => handleChange(event)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="harga_jual">Harga Jual</label>
                                    <input type="number" className="form-control" id="harga_jual" onChange={(event) => handleChange(event)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="foto">Foto</label>
                                    <input type="text" className="form-control" id="foto" onChange={(event) => handleChange(event)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stok">Stok</label>
                                    <input type="number" className="form-control" id="stok" onChange={(event) => handleChange(event)} />
                                </div>

                                <button className="btn btn-primary mt-3" onClick={handleSubmit}>Tambah!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal

// export default class Modal extends Component {
//     render() {
//         return (
//             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Tambah Data!</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">

//                             <form>
//                                 <div className="form-group">
//                                     <label htmlFor="nama">Nama Barang</label>
//                                     <input type="text" className="form-control" id="nama" onChange={(event) => this.props.handleChange(event)} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="harga_beli">Harga Beli</label>
//                                     <input type="number" className="form-control" id="harga_beli" onChange={(event) => this.props.handleChange(event)} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="harga_jual">Harga Jual</label>
//                                     <input type="number" className="form-control" id="harga_jual" onChange={(event) => this.props.handleChange(event)} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="foto">Foto</label>
//                                     <input type="text" className="form-control" id="foto" onChange={(event) => this.props.handleChange(event)} />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="stok">Stok</label>
//                                     <input type="number" className="form-control" id="stok" onChange={(event) => this.props.handleChange(event)} />
//                                 </div>

//                                 <button className="btn btn-primary mt-3" onClick={this.props.handleSubmit}>Tambah!</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
