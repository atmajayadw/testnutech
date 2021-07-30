import React from 'react'

const Modal = ({ handleChange, handleEdit, requestGET, product, handleFile, clearState }) => {
    if (product) {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Data!</h5>
                            <button className="btn btn-danger close-modal" data-dismiss="modal" onClick={clearState}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form id="modal-form">
                                <div className="form-group">
                                    <input type="hidden" defaultValue={product.foto} id="foto_lama" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nama">Nama Barang</label>
                                    <input type="text" className="form-control" id="nama" onChange={(event) => handleChange(event)} defaultValue={product.nama} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="harga_beli">Harga Beli</label>
                                    <input type="number" className="form-control" id="harga_beli" onChange={(event) => handleChange(event)} defaultValue={product.harga_beli} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="harga_jual">Harga Jual</label>
                                    <input type="number" className="form-control" id="harga_jual" onChange={(event) => handleChange(event)} defaultValue={product.harga_jual} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="foto">Foto</label>
                                    <input type="file" className="form-control" id="foto" onChange={(event) => handleFile(event)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stok">Stok</label>
                                    <input type="number" className="form-control" id="stok" onChange={(event) => handleChange(event)} defaultValue={product.stok} required />
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
                            <button className="btn btn-danger" data-dismiss="modal" onClick={clearState}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form id="modal-form">
                                <div className="form-group">
                                    <label htmlFor="nama">Nama Barang</label>
                                    <input type="text" className="form-control" id="nama" onChange={(event) => handleChange(event)} defaultValue="" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="harga_beli">Harga Beli</label>
                                    <input type="number" className="form-control" id="harga_beli" onChange={(event) => handleChange(event)} defaultValue="" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="harga_jual">Harga Jual</label>
                                    <input type="number" className="form-control" id="harga_jual" onChange={(event) => handleChange(event)} defaultValue="" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="foto">Foto</label>
                                    <input type="file" className="form-control" id="foto" onChange={(event) => handleFile(event)} defaultValue="" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stok">Stok</label>
                                    <input type="number" className="form-control" id="stok" onChange={(event) => handleChange(event)} defaultValue="" required />
                                </div>

                                <button type="submit" className="btn btn-primary mt-3" onClick={requestGET} data-dismiss="modal">Tambah!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal