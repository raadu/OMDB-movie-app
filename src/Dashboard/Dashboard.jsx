import {useEffect, useContext} from 'react';
import DashboardStyle from './Dashboard.scss';
import {MovieContext} from '../contexts/MovieContext'; 

function Dashboard(props) {
    // Context States
    const {movieList, getMovies} = useContext(MovieContext);

    console.log("movielist: ", movieList);
    
    // Get movie list when component mounts
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            Dashboard
        </div>
    );
}

export default Dashboard;