import React,  {useState}  from "react";

import './Styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Listview from "./Listview";
import { ListGroup } from "react-bootstrap";
import shortid from "shortid";


 const Form=() => {
    const [object,setobject]=useState({'unique_id':null,'name':'','city':'','age':''});
    const [masterData,setmasterData]= useState([]);
    const [buttonName, setButtonName]=useState("Submit")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let key= shortid.generate();
        object.unique_id=key;
        setobject(object)
        setmasterData([...masterData,object]);
        console.log(object)
        console.log(key);
        setobject({...object,unique_id:null,name:'',city:'',age:''})
    }

    const handleDelete =(idx)=>{
        console.log(idx);
        let newidx=masterData.findIndex(obj => obj.unique_id===idx );
        masterData.splice(newidx, 1);
            setmasterData([...masterData])
    }

    const handleUpdate =(idx)=>{
        let newidx=masterData.findIndex(obj => obj.unique_id===idx );
        setobject({unique_id:idx,name:masterData[newidx].name, city: masterData[newidx].city,age:masterData[newidx].age})
        setButtonName("Update")   
    }

const handleEdit=(e)=>{
    e.preventDefault()
   let obj1=object
   let newidx=masterData.findIndex(obj => obj.unique_id===obj1.unique_id);
   masterData[newidx]=obj1;
   setmasterData(masterData)
   setobject({...object,unique_id:null,name:'',city:'',age:''})
   setButtonName("Submit")
}
        return (
            <div>
                 <form class="split left">
                     <h3>Detail</h3>
                     <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" placeholder="Enter Name" 
                          value= {object.name}
                          onChange={e=> {
                              setobject({...object,name: e.target.value}); }} />
                     </div>

                     <div className="form-group" style={{marginTop: 10}}>
                          <label >City Name</label>
                          <input type="text" className="form-control" placeholder="Enter City Name"  
                          value= {object.city}
                          onChange={e=> {
                             setobject({...object,city: e.target.value});  }}/>
                     </div>

                     <div className="form-group" style={{marginTop: 10}}>
                         <label >Age</label>
                         <input type="text" className="form-control" placeholder="Enter Your Age" 
                          value= {object.age}
                          onChange={e=> {
                            setobject({...object,age: e.target.value}); }}/>    
                    </div>
                    <button onClick={object.unique_id==null?(evt)=>handleSubmit(evt):(e)=>handleEdit(e) } className="btn btn-primary btn-block"  style={{marginTop: 10}}>{buttonName}</button>
                 </form>

                 <div class="split right"> 
              .
              {masterData.map((d,idx)=>
              <ListGroup as="ol" key={d.unique_id} >
                  <ListGroup.Item
                    as="li" className="d-flex justify-content-between align-items-start"react js >
                        <div className="ms-2 me-auto">
                             <div className="fw-bold">NAME: {d.name}</div>
                             <div className="fw-bold">CITY: {d.city}</div>
                              <div className="fw-bold">AGE: {d.age}</div>
                              <button onClick ={()=>handleDelete(d.unique_id)}>Delete</button>
                              <button onClick={()=>handleUpdate(d.unique_id)} >Update</button>
                      </div>
                   </ListGroup.Item>
                 </ListGroup> )}
          </div>
                 {/* <Listview x={setmasterData,setButtonName,setobject}/> */}
            </div>
        );
}

export  {Form};

