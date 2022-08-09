import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const HizmetUpdate = () => {
    const url = "http://localhost:8080/api/hizmet/update/"
    let history = useNavigate();
    const [hizmet_id, setHizmet_id] = useState();
    const [hizmet_ad, setHizmet_ad] = useState();

    useEffect(() => {
        setHizmet_id(localStorage.getItem('hizmet_id'))
        setHizmet_ad(localStorage.getItem('hizmet_ad '));
    }, []);

    const update = () => {

        const response = axios.post(url, JSON.stringify({ hizmet_id, hizmet_ad }),
            {
                headers: { 'Content-Type': 'application/json' }
            })
        console.log(hizmet_id, hizmet_ad)
        console.log(response)
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Hizmet ad </label>
                    <input placeholder='Hizmet ad' onChange={(e) => setHizmet_ad(e.target.value)} />
                </Form.Field>
                {/* <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field> */}
                <Button type='submit' value={hizmet_ad} onClick={update}>GÜNCELLE</Button>
            </Form>
        </div>
    )
}

export default HizmetUpdate