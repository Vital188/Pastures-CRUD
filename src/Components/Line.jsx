import { useContext } from "react";
import { useState } from "react";
import Animals from "../Data/Animals";
import DataContext from "./DataContext";

function Line({animal}) {

const {setDeleteData, setModalData} = useContext(DataContext);

    return (
        <li className="list-group-item">
        <div className="animal">
            <div className="animal__content">
                <div className="animal__content__name">
                    {Animals.find(an => an.id === animal.anim)?.type}
                </div>
                <div className="animal__content__weight">
                    {animal.weight}
                </div>
            </div>
            <div className="animal__buttons">
                <button  type="button" onClick={() => setModalData(animal)} className="btn btn-outline-success">Edit</button>
                <button  type="button" onClick={() => setDeleteData(animal)} className="btn btn-outline-danger">Delete</button> 
            </div>
        </div>
    </li>
)
}
// onClick={() => setModalData(movie)}
// onClick={() => setModalDelData(movie)}
export default Line;