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
                        <li><NavLink to="/"><a className = "bold" href="">ABOUT</a></NavLink></li>
                        <li><NavLink to="/Research"><a href="">RESEARCH</a></NavLink></li>
                        <li><NavLink to="Team"><a href="">TEAM</a></NavLink></li>
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
                    <div className="col-6">
                        <img src="./docs/foto research.jpg" className="imagenAmb" alt="Foto Research" />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="tituloMini">
                                Our Research
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <div className="txtBtn">
                                    Check projects
                                </div>
                            </div>
                            <div className="col-5">
                                <NavLink to="/Research"><img src="./docs/derecha.png" className="btnNext" alt="Foto Research" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row horizontal">
                    <div className="col-6">
                        <div className="row">
                            <div className="tituloMini">
                                Our team
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <div className="txtBtn">
                                    See our team
                                </div>
                            </div>
                            <div className="col-5">
                                <NavLink to="/Team">
                                    <img src="./docs/derecha.png" className="btnNext" alt="Foto Research" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./docs/team.png" className="imagenAmb" alt="Foto Research" />
                    </div>
                </div>
            </div>

        </div >
    </>
    )
}

export default PaginaPrincipal