import { useEffect, useContext, Fragment } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { GridList, GridListTile } from "@material-ui/core";
import DashboardStyle from "./Dashboard.module.scss";
import Header from "../Header/Header";

function Dashboard(props) {
  // Context States
  const { movieList, getMovies } = useContext(MovieContext);

  console.log("movielist: ", movieList);

  // Get movie list when component mounts
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={DashboardStyle.root}>
      {movieList ? (
        <GridList cellHeight={300} className={DashboardStyle.gridList} cols={5}>
          {movieList?.map((item) => (
            <GridListTile key={item.imdbID+Math.random()*10}>
              <img
                className={DashboardStyle.image}
                src={item.Poster}
                alt={item.title}
              />
            </GridListTile>
          ))}
        </GridList>
      ) : (
        <div>Not Found</div>
      )}
      </div>
    </Fragment>
  );
}

export default Dashboard;
