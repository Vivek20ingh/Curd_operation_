import React,  {useState,useEffect}  from "react";
import { ListGroup } from "react-bootstrap";
import './Styles.css'

import 'bootstrap/dist/css/bootstrap.min.css';



<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>




 const Form=() => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [masterData,setmasterData]= useState([]);
    const [changeButtonm, setChangeButton]=useState(0);
    const [buttonName, setButtonName]=useState("Submit")
    const [key, setkey]=useState(0);
   
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        var obj={'name':name,'city': city, 'age': age};
        
        setmasterData([...masterData,
            obj
        ]);
    }

    const handleDelete =(idx)=>{
        masterData.splice(idx, 1);
            setmasterData([...masterData])

            
    }

    const handleUpdate =(idx)=>{
        setChangeButton(1)
        setName(masterData[idx].name)
        setCity(masterData[idx].city)
        setAge(masterData[idx].age)
        setButtonName("Update")
        setkey(idx);

       

    }
const handleEdit=(e)=>{
    e.preventDefault()
   let obj1={
       name:name,
       city:city,
       age:age
   }
   masterData[key]=obj1;
   setmasterData([...masterData])
   setChangeButton(0)
   setButtonName("Submit")
}
        return (
            <div>
                 <form class="split left">
                     <h3>Detail</h3>

                     <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" placeholder="Enter Name" 
                          value= {name}
                          onChange={e=> setName(e.target.value)}/>
                     </div>

                     <div className="form-group" style={{marginTop: 10}}>
                          <label >City Name</label>
                          <input type="text" className="form-control" placeholder="Enter City Name"  
                          value= {city}
                          onChange={e=> setCity(e.target.value)}/>
                     </div>

               


                     <div className="form-group" style={{marginTop: 10}}>
                         <label >Age</label>
                         <input type="text" className="form-control" placeholder="Enter Your Age" 
                          value= {age}
                          onChange={e=> setAge(e.target.value)}/> 
                    </div>
                    <button  onClick={changeButtonm==0?(evt)=>handleSubmit(evt):(e)=>handleEdit(e) } className="btn btn-primary btn-block"  style={{marginTop: 10}}>{buttonName}</button>
                   
                 </form>

                <div class="split right"> 
              
                    {masterData.map((d,idx)=>
                          <ListGroup as="ol" >
                        <ListGroup.Item
                          as="li" className="d-flex justify-content-between align-items-start"react js >
                              <div className="ms-2 me-auto">
                                 <div className="fw-bold">NAME: {d.name}</div>
                                <div className="fw-bold">CITY: {d.city}</div>
                                <div className="fw-bold">AGE: {d.age}</div>
                                <button onClick ={()=>handleDelete(idx)}>Delete</button>
                                 <button onClick={()=>
                                    handleUpdate(idx)
                                    } >Update</button>

                            </div>
                            
                  
                </ListGroup.Item>
                </ListGroup>
                )}
                
                </div>
                
            </div>


        );
}

export  {Form};

