import { useState } from "react"
import Create from "./Create"
import DataContext from "./DataContext"
import { useEffect } from "react"
import { create } from "../Functions/localStorage"
import List from "./List"
import { read } from "../Functions/localStorage"
import { destroy } from "../Functions/localStorage"
import Edit from "./Edit"
import { update } from "../Functions/localStorage"

const key = 'animal'

function Fisrtcolumn () {

const [lastUpdate, setLastUpdate] = useState(Date.now());
const [animal, setAnimal] = useState(null)
const [createData, setCreateData] = useState(null);
const [deleteData, setDeleteData] = useState(null);
const [modalData, setModalData] = useState(null);
const [editData, setEditData] = useState(null);


useEffect(() => {
    setAnimal(read(key));
  }, [lastUpdate]);

useEffect(() => {
    if (null === createData) {
      return;
    }
    create(key, createData);
    setLastUpdate(Date.now())
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(key, deleteData.id);
    setLastUpdate(Date.now());
    // makeMsg('Oh no, movie (' + deleteData.title + ') gone!')
  }, [deleteData]);

  // EDIT
  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(key, editData, editData.id);
    setLastUpdate(Date.now())
  }, [editData]);

return (


<DataContext.Provider value={{
setCreateData,
animal,
setDeleteData,
modalData,
setModalData,
setEditData
}}>
<div className="container ">
  <div className="row mt-3">
    <div className="col-6">
      <Create/>
    </div>
    <div className="col-6">
          <List/>
        </div>
  </div>
</div>
<Edit/>
</DataContext.Provider>
)

}

export default Fisrtcolumn