import { NavLink } from "react-router-dom"

const Team = () => {

    return (<>
        <div className="row">
            <div className="row">
                <div className="titulo"> Environment and Transportation Research Group</div>
            </div>
            <div className="row">
                <div id="navcontainer">
                    <ul>
                        <li><NavLink to="/"><a href="">ABOUT</a></NavLink></li>
                        <li><NavLink to="/Research"><a href="">RESEARCH</a></NavLink></li>
                        <li><NavLink to="/Team"><a className="bold">TEAM</a></NavLink></li>
                    </ul>
                </div>
            </div>
            <hr className="horizontal"></hr>
            <div className="row">
                <div className="titulo2">OUR TEAM
                </div>
            </div>
            <div className="row segundaParte">
                <div className="espacio">
                    
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
                                <img src="./docs/derecha.png" className="btnNext" alt="Foto Research" />
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
                                <img src="./docs/derecha.png" className="btnNext" alt="Foto Research" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./docs/foto research.jpg" className="imagenAmb" alt="Foto Research" />
                    </div>
                </div>
            </div>

        </div >
    </>
    )
}




export default Team;