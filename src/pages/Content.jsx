import "../css/Style.css"
import { useState, useEffect } from "react";
import Data from "../data.json"

const Content = () => { 
    const [active, setActive] = useState(0);
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    
    const parse = (date) => {
        var d = new Date(date);
        var day = d.getDay();
        var month = months[d.getMonth()];
        var year = d.getFullYear();
        var strg = month + " " + day + ", " + year
        return strg
    };
    return (  <>

        
    


        <div className="container-fluid">


            <div className="row justify-content-center align-items-center text-left my-4 m-lg-5 p-lg-5">

                <div className="col-12 col-lg-6 px-3">
                    <img src={Data[active].image} className="rounded"  style={{width:"100%",height:"100%"}}/>
                </div>

                <div className="col-12 col-lg-6 p-5">
                    <div className="row">
                        <div className="col-4 col-lg-2 px-0 py-1 categ bg-primary">★ {Data[active].category.split(" ")[0]}</div>
                    </div>

                    <div className="row mb-3" style={{fontSize:"xx-large"}}>
                        {Data[active].title}
                    </div>
                    <div className="row" style={{fontSize:'smaller',fontWeight:'400'}}>
                        <div className="col-5 col-lg-4 p-0 m-0">by {Data[active].author}</div>
                        <div className="col-3 col-lg-2 p-0 mx-1">{parse(Data[active].date)}</div>
                        <div className="col-3 p-0 m-0" style={{color:"gray"}}>{Data[active].duration} min.read</div>
                    </div>

                </div>


            </div>

            <div className="row justify-content-center text-left my-4 m-lg-5 p-lg-5">
                {
                Data.map((card) => {
                    return (
                    <div key={Data.indexOf(card)} className="card col-12 col-md-4 border-0" >
                        <img className="card-img-top rounded" src={card.image} style={{height:'50%'}} alt="Card image cap"/>
  
                            <div className="butmid justify-content-center text-center align-items-center">
                                <button className="butts btn btn-success categ px-4 m-1" onClick={() => setActive(Data.indexOf(card))}>VIEW</button>
                                <button className="butts btn btn-danger categ px-4 m-1" onClick={() => setActive(0)}>REMOVE</button>
                            </div>

                        <div className="card-body px-0 mx-0">
                            <div className="col-3 mb-2 p-1 categ bg-primary">{card.category.split(" ")[0]}</div>
                            <h5 className="card-title title">{card.title}</h5>
                            <p className="card-text desc">{card.description}</p>
                            <div className="row">
                                <div className="col-4 auth">{card.author}</div>
                                <div className="col-4 p-0 m-0 auth">{parse(card.date)}</div>
                                <div className="col-3 p-0 m-0 duration">{card.duration} min.read</div>
                            </div>
                        </div>
                    </div>
                    )
                })
                }





            </div>
        </div>
    </>
)}  

export default Content
