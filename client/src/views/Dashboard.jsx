import { useState, useEffect } from "react";
import { useParams, useNavigate, Link} from "react-router-dom"
import CurrentPortfolio from "./CurrentPortfolio";
import DashPortfolio from "../components/DashPortfolio";
import ToDo from "./ToDo"

const DashBoard = (props) => {


    return (
        <div>
            <h1>Dashboard</h1>
            <DashPortfolio />
            <div className="dashboardLinks">
                <button className="dashLinkBtn"><Link className="mainLink" to="/add">Add Trade</Link></button>
                <button className="dashLinkBtn"><Link className="mainLink" to="/ledger">Trade Ledger</Link></button>
                <button className="dashLinkBtn"><Link className="mainLink" to="/todo">Add To Do</Link></button>
            </div>
            <ToDo />

        </div>
    )

}

export default DashBoard