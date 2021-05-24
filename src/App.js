import React, {useState, useEffect} from 'react';
import Loading from './components/Loading';
import Index from './components/Index';

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        loading ? 
        <Loading />
        : 
        <Index />
    );
};
export default App;