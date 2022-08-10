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
                console.log(hizmets.length);

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
            <Table class="table table striped">

                <Table.Header>
                    <p>
                    <Table.Row>
                        <Table.HeaderCell>Hizmet Listesi</Table.HeaderCell>

<Table.HeaderCell>

(<a>{hizmets.length}</a>)

</Table.HeaderCell>
                    </Table.Row>
                    </p>
                </Table.Header>

                <Table.Body>
                    {hizmets.map((hizmet) => {
                        return (
                            <Table.Row>
                                <Table.Cell><th>-{hizmet.hizmet_ad .toUpperCase()}</th></Table.Cell>
                                    <Table.Cell>
                                        <p>
                                        <Button type="button" color="btn btn-warning" onClick={() => setData(hizmet)}>Güncelle</Button> <bre></bre>
                                        <Button type="button" color="btn btn-danger" onClick={() => onDelete(hizmet.hizmet_id)}>Sil</Button>
                                        </p>
                                    </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}

export default HizmetList