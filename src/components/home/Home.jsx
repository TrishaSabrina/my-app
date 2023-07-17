import React, { useState } from 'react';

const Home = () => {

  const [home,setHome]=useState({
    name:"Trisha",
    email:"tris@gmail.com",
    text:"abcd",
    createb:"kakc",
    createo:"hdwh",
    upb:"kkkkk",
    upo:"aaaaaa"
  });
  return (

   

    
    <div className='container'>
      <div className="form-header bg-primary">
        <h3>Add new Nutrient</h3>
      </div>

      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Code Here"  value={home.name}/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Short Name Here" value={home.text} />
        </div>
        <div className="form-group">
          <input type="email" className="form-control"   placeholder="Long Name Here" value={home.email} />
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
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="form-check-label" htmlFor="inlineCheckbox3">Other</label>
          </div>
        </div>

        <div className="col mt-3">
          <div className="form-check form-check-inline is-active-checkbox">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
            <label className="form-check-label" htmlFor="inlineCheckbox3">Is Active</label>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <div className="form-group2">
              <label>Created By</label>
              <input type="text" className="form-control" disabled placeholder="0000-00-00 00:00:00" value={home.createb} />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group2">
              <label>Created On</label>
              <input type="text" className="form-control" disabled placeholder="Created on" value={home.createo}/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="form-group2">
              <label>Updated By</label>
              <input type="text" className="form-control" disabled placeholder="0000-00-00 00:00:00" value={home.upb} />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group2">
              <label>Updated On</label>
              <input type="text" className="form-control" disabled placeholder="Updated On" value={home.upo} />
            </div>
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
