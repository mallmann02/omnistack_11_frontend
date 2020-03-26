import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');
    const history = useHistory();


     async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
        } catch (err){
            alert('Erro ao cadastrar novo caso, tente novamente')
        }
    }
    
    return(
        <div className="new-incident-container">
        <div className="content">
             <section>
                 <img src={logoImg} alt="be the hero"/>

                 <h1>Cadastrar novo caso</h1>
                 <p>Descreva o caso detalhadamente para um herói para resolver isso.</p>

                 <Link className="back-link" to="/profile">
                     <FiArrowLeft size={16} color="E02041"/>
                     Voltar para home
                 </Link>
             </section>

             <form onSubmit={handleNewIncident}>
                 <input 
                 value={title}
                 placeholder="Título do caso"
                 onChange={e => setTitle(e.target.value)}
                 />

                 <textarea 
                 value={description}
                 placeholder="Descrição"
                 onChange={e => setDescription(e.target.value)}
                 />
                 
                 <input
                 value={value}
                 placeholder="valor em reais"
                 onChange={e => setValue(e.target.value)}
                 />

               
                 <button className="button" type="submit">
                     Cadastrar
                 </button>
             </form>
        </div>
    </div>
    );
}