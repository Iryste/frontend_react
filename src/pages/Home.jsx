import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';


const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
if (isLoading) {
        fetch('http://127.0.0.1:8000/api/tasks')
        .then((res) => res.json())
        .then((data) => {
            setTasks(data['hydra:member']);
            setIsLoading(false);
        });
    }
    }, [isLoading]);
    console.log(tasks);
    return (!isLoading ? (
                tasks?.map((task) => {
                    return <div key={task?.id} className='info'>
                        <h2 className='titre'>{task?.titre}</h2>
                        <span className='desc'>{task?.description}</span>
                    </div>
                })
            ) : (
            <Loader />
            )
)};

export default Home;