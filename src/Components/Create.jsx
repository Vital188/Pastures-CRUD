import { useContext } from "react";
import { useState } from "react"
import Animals from "../Data/Animals"
import DataContext from "./DataContext";

function Create () {

const [anim, setAnim] = useState('0');
const {setCreateData} = useContext(DataContext);
const [weight, setWeight] = useState('')

const add = () => {
    setCreateData ({
        anim: parseInt(anim),
        weight
    });
    setAnim('0');
    setWeight('');
}

    return (
<div className="card m-4">
  <h5 className="card-header">Animals weight</h5>
  <div className="card-body">
  <label  className="form-label fw-bold">Animals</label>
  <select className="form-select mb-4" value={anim} onChange={e => setAnim(e.target.value)} aria-label="Default select example">
  <option value={0} disabled>Choose animal from list:</option>
  {
    Animals.map(a => <option key={a.id} value={a.id}>{a.type}</option>)
  }
</select>
<div className="mb-3">
    <label for="exampleInputPassword1" className="form-label fw-bold">Write weight (grams):</label>
    <input type="number" className="form-control" value={weight} onChange={e => setWeight(e.target.value)}  id="exampleInputPassword1"/>
  </div>
  <button type="submit" onClick={add} className="btn btn-primary">Add</button>



</div>
  </div>

    )
}

export default Create