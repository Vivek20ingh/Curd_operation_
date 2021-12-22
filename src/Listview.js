import { ListGroup } from "react-bootstrap";

const Listview =({masterData,setmasterData,setButtonName,setobject})=>{

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


    return(

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
    )
}

export default  Listview;