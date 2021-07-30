import React, { Component } from 'react'
import Table from '../component/Table'
import Modal from '../component/Modal'
import axios from 'axios'
import { API_URL } from '../utils/constants.js'

const Back = (props) => (
    <button className="btn btn-secondary" onClick={props.hideBack}>
        Show all data!
    </button>
);

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            nama: "",
            harga_jual: 0,
            harga_beli: 0,
            foto: "",
            stok: 0,
            products: [],
            product: false,
            nama_db: "",
            back: false
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axios.get(API_URL + "barang")
            .then(res => {
                const products = res.data;
                this.setState({ products });
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleShow = (product) => {
        if (product) {
            this.setState({
                product,
                nama: product.nama,
                foto: product.foto,
                harga_beli: product.harga_beli,
                harga_jual: product.harga_jual,
                stok: product.stok
            })
        } else {
            this.clearState();
            document.getElementById("modal-form").reset();

        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    requestGET = (e) => {
        e.preventDefault()
        //Ambil data dari database
        const nama = this.state.nama;
        axios.get(API_URL + "barang?nama=" + nama)
            .then(res => {
                if (res.data.length === 1) {
                    alert('Barang sudah ada!')
                } else if (res.data.length === 0) {
                    this.submitRequest()
                }
            })
    }

    submitRequest = () => {
        //submit POST request
        const nama = this.state.nama
        const harga_beli = this.state.harga_beli
        const harga_jual = this.state.harga_jual
        const stok = this.state.stok
        const foto = this.state.foto.name

        // ini Kalau pake Form Data upload ke REST-SERVER
        // const fd = new FormData();
        // fd.append('file', this.state.foto, this.state.foto.name);
        // fd.append('nama', nama);
        // fd.append('harga_beli', harga_beli);
        // fd.append('harga_jual', harga_jual);
        // fd.append('stok', stok);

        const data = {
            nama: nama,
            harga_beli: harga_beli,
            harga_jual: harga_jual,
            foto: foto,
            stok: stok,
        }

        // ini Kalau pake Form Data upload ke REST-SERVER
        // axios.post(API_URL + "barang", fd)
        axios.post(API_URL + "barang", data)
            .then(res => {
                alert('Berhasil Tambah Data');
                this.getData();
            })
            .catch(error => {
                console.log(error);
            })
        this.clearState();
    }


    handleEdit = (e) => {
        e.preventDefault()
        const data = {
            nama: this.state.nama,
            harga_beli: this.state.harga_beli,
            harga_jual: this.state.harga_jual,
            foto: this.state.foto,
            stok: this.state.stok,
        }

        axios.put(API_URL + "barang/" + this.state.product.id, data)
            .then(res => {
                alert('Berhasil edit data!');
                this.getData();
            })
            .catch(error => {
                console.log(error);
            })
        this.clearState()
    }

    handleDelete = (id) => {
        if (window.confirm("Anda Yakin?")) {
            axios.delete(API_URL + "barang/" + id)
                .then(res => {
                    this.getData();
                })
                .catch(error => {
                    console.log(error);
                })
            alert('Berhasil Hapus Data');
        } else {
            return false;
        }
    }

    handleFile = (event) => {
        const foto = event.target.files[0];

        // validation
        if (foto) {
            if (!foto.name.match(/\.(jpg|png|)$/)) {
                alert('Foto tidak valid.');
                this.setState({
                    foto: ''
                });
                return false;
            }

            if (foto.size > 100000) {
                alert('Size lebih dari 100kb!');
                this.setState({
                    foto: ''
                });
                return false;
            }
        }

        this.setState({
            foto
        })

    }

    clearState = () => {
        document.getElementById("modal-form").reset();
        this.setState({
            id: "",
            nama: "",
            harga_jual: 0,
            harga_beli: 0,
            foto: "",
            stok: 0,
            product: false,
            nama_db: ""
        })
    }

    search = () => {

        let nama = document.getElementById('keyword').value;

        if (nama !== "" || nama !== null) {
            axios.get(API_URL + "barang?nama=" + nama)
                .then(res => {
                    if (res.data.length === 1) {
                        const products = res.data;
                        this.setState({ products, back: true });
                    } else if (res.data.length === 0) {
                        alert('Barang tidak ada!')
                    }
                })



        } else {
            this.getData();
        }

    }

    hideBack = () => {
        this.setState({
            back: false
        })
        this.getData();
        document.getElementById("keyword").value = "";
    }

    render() {
        return (
            <>
                <div className="container mt-5">
                    <h1>CRUD NUTECH</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="keyword" />
                                <div className="input-group-append">
                                    <button className="btn btn-info" onClick={this.search}>Cari!</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            {this.state.back ? <Back hideBack={this.hideBack} /> : null}
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.handleShow()}>
                        Tambah Data!
                    </button>
                    <div className="container" id="container">
                        <Table handleShow={this.handleShow} {...this.state} handleDelete={this.handleDelete} />
                        <Modal {...this.state} handleFile={this.handleFile} handleChange={this.handleChange} requestGET={this.requestGET} handleEdit={this.handleEdit} clearState={this.clearState} />
                    </div>

                </div>
            </>
        )
    }
}

