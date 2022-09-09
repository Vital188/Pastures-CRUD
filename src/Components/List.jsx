import { useContext } from "react";
import DataContext from "./DataContext";
import Line from "./Line";

function List () {

    const { animal } = useContext(DataContext);

    return (
        <div className="card m-4">
          <h5 className="card-header">Pasture</h5>
          <div className="card-body">
          <ul className="list-group">
          {
                        animal?.map(a => <Line key={a.id} animal={a} />)
                    }
          </ul>

            </div>
        </div>
        
    )
}

export default List