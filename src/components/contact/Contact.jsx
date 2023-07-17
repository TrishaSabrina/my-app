import React from 'react';

const Home = () => {
  return (
    <div className='container'>
      <div className="form-header bg-primary">
        <h3>Setup New Compound</h3>
      </div>

      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Code Here" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name Here" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Description Here" />
        </div>

        <div className="form-group">
          <select className="custom-select mr-sm-9" id="selectCustom">
            <option selected>Select Unit</option>
          </select>
        </div>

        <div className="form-group">
          <select className="custom-select mr-sm-2" id="selectCustom">
            <option selected>Select Group</option>
          </select>
        </div>

        <div className="col mt-3">
          <p>Used In</p>
        </div>
        <div className="col">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="form-check-label" htmlFor="inlineCheckbox1">Broiler</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Fish</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="form-check-label" htmlFor="inlineCheckbox3">Layer</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
            <label className="form-check-label" htmlFor="inlineCheckbox4">Other</label>
          </div>
        </div>

        <div className="col mt-3">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" />
            <label className="form-check-label" htmlFor="inlineCheckbox5">Is Active</label>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
