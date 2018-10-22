import React, { Component } from 'react';
import Select from 'react-select';

class ListItens extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let features
        if (this.props.pesquisa === null) {
            features = this.props.features
        } else {
            features = this.props.features.filter(ap => {
                if (ap.id === this.props.pesquisa.value) {
                    return ap
                }
            })
        }
        return (
            <div class="container">
                <ul className="list-group list-group-flush">
                    {
                        features.map(
                            item => {
                                if (item.arquivar === this.props.exibirArquivados) {
                                    return (
                                        <li class="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                                            nome: <h2 class="mt-2">{item.nome}</h2>
                                            idade: <h2>{item.idade}</h2>
                                            sexo: <h2>{item.sexo}</h2>
                                            resultado: <h2>{item.resultado}</h2>
                                            id: <h2>{item.id}</h2>
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-outline-warning" onClick={() => this.props.updatePatient(item)} data-toggle="modal" data-target="#editModal">Editar</button>
                                                <button type="button" class="btn btn-outline-danger" hidden={this.props.exibirArquivados} onClick={() => this.props.arquivarUser(item)}>Arquivar</button>
                                            </div>

                                        </li>
                                    )
                                }
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default ListItens