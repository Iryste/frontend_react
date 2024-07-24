import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';


const Home = () => {
        const [tests, setTests] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
    if (isLoading) {
            fetch('http://127.0.0.1:8000/api/tests')
            .then((res) => res.json())
            .then((data) => {
                setTests(data['hydra:member']);
                setIsLoading(false);
            });
        }
        }, [isLoading]);
        console.log(tests);
        return (!isLoading ? (
                    tests?.map((test) => {
                        return <div key={test?.id} className='info'>
                            <h2 className='titre'>{test.nom}</h2>
                            <span className='desc'>{test.prenom}</span>
                            <span className='email'>{test.email}</span>
                        </div>
                    })
                ) : (
                <Loader />
                )
    )
};

export default Home;














