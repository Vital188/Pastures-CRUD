import { useState } from "react"
import Create from "./Create"
import DataContext from "./DataContext"
import { useEffect } from "react"
import { create } from "../Functions/localStorage"
import List from "./List"
import { read } from "../Functions/localStorage"

const key = 'animal'

function Fisrtcolumn () {

const [lastUpdate, setLastUpdate] = useState(Date.now());
const [animal, setAnimal] = useState(null)
const [createData, setCreateData] = useState(null)


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

return (


<DataContext.Provider value={{
setCreateData,
animal
}}>
<div className="container">
  <div className="row">
    <div className="col-6">
      <Create/>
    </div>
    <div className="col-6">
          <List/>
        </div>
  </div>
</div>
</DataContext.Provider>
)

}

export default Fisrtcolumn