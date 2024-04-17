import { NavLink } from "react-router-dom"

//Página principal donde se puede navegar por todas los ambientes desarrollados
const PaginaPrincipal = () => {


    return (<>
        <div className="row">
            <div className="row">
                <div className="titulo"> Environment and Transportation Research Group</div>
            </div>
            <div className="row">
                <div id="navcontainer">
                    <ul>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">RESEARCH</a></li>
                        <li><a href="#">TEAM</a></li>
                    </ul>
                </div>
            </div>
            <hr className="horizontal"></hr>
            <div className="row">
                <div className="introduccion">Our team conducts economic research on topics related to the environment and transportation.
                    We perform advanced econometrics analysis and use cloud computing, machine learning, and spatial data analysis to work with large-scale datasets,
                    such as semi-structure smartphone Big Data, satellite data, household surveys, and administrative records.
                </div>
            </div>
            <div className="row segundaParte">
                <div className="row horizontal">
                    <div className="col-1 overview">
                            Overview
                    </div>
                </div>
                <hr className="horizontal"></hr> 
                <div className="row horizontal">
                    <div className="col-6 col-md-12">
                    <img src="./docs/foto research.jpg"  className = "imagenAmb" alt="Foto Research" />
                    </div>
                    <div className="col-6 col-md-12">
                        
                    </div>
                </div>
            </div>

        </div >
    </>
    )
}

export default PaginaPrincipal