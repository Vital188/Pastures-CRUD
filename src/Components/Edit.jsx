import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Animals from "../Data/Animals";
import DataContext from "./DataContext";

function Edit() {
  const { modalData, setModalData, setEditData } = useContext(DataContext);
  const [anim, setAnim] = useState("0");
  const [weight, setWeight] = useState("");



  useEffect(() => {
    if (null === modalData) {
        return;
    }
    setAnim(modalData.anim);
    setWeight(modalData.weight);
}, [modalData]);

  if (null === modalData) {
    return null;
  }
 
  const save = () => {
    setEditData({
        weight,
        id: modalData.id
    });
    setModalData(null);}


  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit weight</h5>
            <button
              onClick={() => setModalData(null)}
              type="button"
              className="btn-close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card m-4">
  
              <div className="card-body">
                {/* <label className="form-label fw-bold">Animals</label> */}
                {/* <select
                  className="form-select mb-4"
                  value={anim}
                  onChange={(e) => setAnim(e.target.value)}
                  aria-label="Default select example"
                >
                  <option value={0} disabled>
                    Choose animal from list:
                  </option>
                  {Animals.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.type}
                    </option>
                  ))}
                </select> */}
                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label fw-bold"
                  >
                    Change weight (grams):
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    id="exampleInputPassword1"
                  />
                </div>
               
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setModalData(null)}
              type="button"
              className="btn btn-secondary"
            >
              Close
            </button>
            <button onClick={save} type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
