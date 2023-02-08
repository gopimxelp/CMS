// import React from 'react'

// const Apppages = () => {
//   return (
//     <div class="h-[100vh] w-[50vw] sm:w-[100%] bg-blue-100">
//       <h1 class="text-black">App pages page</h1>
//       <h2 class="mt-2 ">Content Update Page</h2>
//       <center >
//         <span>Title  :</span><input type="text" placeholder='Title' class="p-2 mt-2"></input><br/>
//         <span>Sub Title  :</span><input type="text" placeholder='Title' class="p-2 mt-2"></input><br/>
//         <span>Link  :</span><input type="text" placeholder='Title' class="p-2 mt-2"></input><br/>
//       </center>
//     </div>
//   )
// }

// export default Apppages






import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

 

    const handlesubmit=(e)=>{
      console.log(name,email,phone)
      e.preventDefault();
      const empdata={name,email,phone,active};
      

      fetch("http://localhost:8000/employee",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card mt-5" style={{"textAlign":"left"}}>
                            <div className="card-title text-center mt-3">
                                <h2>Documentation Creation</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} onChange={e=>idchange(e.target.value)}  className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                        {name.length===0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Sub Title</label>
                                            <input required value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Link</label>
                                            <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn bg-green-500" type="submit"   onClick={handlesubmit}>Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;
