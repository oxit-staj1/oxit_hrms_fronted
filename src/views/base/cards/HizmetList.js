import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const HizmetList = () => {
    const url = "http://localhost:8080/api/hizmet/getall";
    const [hizmets, setHizmets] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setHizmets(response.data.data);
                console.log(response.data.data)
            })
    }, [])

    const setData = (hizmet) => {
        let { hizmet_id, hizmet_ad } = hizmet;
        localStorage.setItem('hizmet_id', hizmet_id);
        localStorage.setItem('hizmet_ad', hizmet_ad);
    }

    const getData = () => {
        axios.get(url)
            .then((getData) => {
                setHizmets(getData.data.data);
            })
    }

    const onDelete = (hizmet_id) => {
        axios.delete(`http://localhost:8080/api/hizmet/delete/${hizmet_id}`)
            .then(() => {
                getData();
            })
    }
    return (
        <div>
            <Table singleLine>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Hizmet Ad </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {hizmets.map((hizmet) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{hizmet.hizmet_ad}</Table.Cell>
                               <div> <Link to='/hizmetupdate'>
                                    <Table.Cell>
                                    <button type="button"class="btn btn-primary" onClick={() => setData(hizmet)}>Güncelle</button>
                                    </Table.Cell>
                                </Link>
                                
                                <button type="button"class="btn btn-warning" onClick={() => onDelete(hizmet.hizmet_id)} >Sil</button>
                                </div>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default HizmetList