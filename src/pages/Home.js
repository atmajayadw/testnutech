import React, { Component } from 'react'
import Table from '../component/Table'
import Modal from '../component/Modal'
import axios from 'axios'
import { API_URL } from '../utils/constants.js'

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
            editData: false,
            product: false
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
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            nama: this.state.nama,
            harga_beli: this.state.harga_beli,
            harga_jual: this.state.harga_jual,
            foto: this.state.foto,
            stok: this.state.stok,
        }

        axios.post(API_URL + "barang", data)
            .then(res => {
                alert('Berhasil Tambah Data');
                this.getData();
            })
            .catch(error => {
                console.log(error);
            })
        this.clearState()

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

    // checkState = () => {
    //     console.log(this.state)
    // }

    clearState = () => {
        this.setState({
            nama: "",
            harga_jual: 0,
            harga_beli: 0,
            foto: "",
            stok: 0,
            products: []
        })
    }
    render() {
        return (
            <>
                <div className="container mt-5">
                    <h1>CRUD NUTECH</h1>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                        onClick={() => this.handleShow()}>
                        Tambah Data!
                    </button>
                    <Table handleShow={this.handleShow} {...this.state} handleDelete={this.handleDelete} />
                    {/* <button className="btn btn-success" onClick={this.checkState}>Check!</button> */}
                    <Modal {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleEdit={this.handleEdit} />

                </div>
            </>
        )
    }
}

