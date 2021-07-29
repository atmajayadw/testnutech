import React, { Component } from 'react'
import { API_URL } from '../utils/constants.js'
import axios from 'axios'

export default class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
        }
    }

    render() {
        const { products } = this.props
        return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Foto Barang</th>
                            <th scope="col">Nama Barang</th>
                            <th scope="col">Harga Jual</th>
                            <th scope="col">Harga Beli</th>
                            <th scope="col">Stok</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{product.foto}</td>
                                <td>{product.nama}</td>
                                <td>{product.harga_beli}</td>
                                <td>{product.harga_jual}</td>
                                <td>{product.stok}</td>
                                <td>
                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.props.handleShow(product)}>
                                        Edit
                                    </button>

                                    <button className="btn btn-danger m-1" onClick={() => this.props.handleDelete(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}
