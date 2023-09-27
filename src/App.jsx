import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import ItemLocation from './components/ItemLocation'
import Head from './components/Head';
import Footer from './components/Footer';
function App() {
    //=================================
    //*Estado para la llamanda de la api.
    const [locationType, setLocationType] = useState({});
    //=================================
    //* Estado del  input.
    const [changeId, setChangeId] = useState(" ")
    //=================================
    //*useEffect con el link de la api. 
    useEffect(() => {
        //*muestra de la carga de los elementos en la pantalla.
        const randomChange = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${randomChange}`)
            .then(res => setLocationType(res.data))
    }, [])
    console.log(locationType);
    //=================================
    //* funcion para la funcinalidad del botton
    //? tambien tiene la funcinalidad para buscat la locacion aleatoria.
    const searchLocation = () => {
        // alert(changeId);
        axios.get(`https://rickandmortyapi.com/api/location/${changeId}`)
            .then(res => setLocationType(res.data));
    }
    //=================================
    //=================================
    //=================================
    //=================================
    //=================================
    //=================================
    //=================================
    return (
        <div className="App">
            <Head />
            <h1>Rick and Morty</h1>
            <div className='container-input'>
                <input
                    type="text"
                    value={changeId}
                    onChange={e => setChangeId(e.target.value)}
                    />
                <button onClick={searchLocation}>Search</button>
            </div>
            <h2>{locationType.name}</h2>
            <ul className='container-location'>
                {
                    locationType.residents?.map(location => (
                        //* key del .map
                        <ItemLocation
                            url={location}
                            key={location}
                        />
                    ))
                }
            </ul>
            <Footer />
        </div>
    )
}

export default App