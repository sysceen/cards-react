import "../css/Style.css"
import { useState, useEffect } from "react";
import Data from "../data.json"

const Content = () => { 

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
            <div className="row justify-content-center text-left my-4 m-lg-5 p-lg-5">




                {
                Data.map((card) => {
                    return (
                    <div key={card.title} className="card col-12 col-md-4 border-0" >
                        <img className="card-img-top rounded" src={card.image} style={{height:'50%'}} alt="Card image cap"/>
  
                            <div className="butmid justify-content-center text-center align-items-center">
                                <button className="butts btn btn-success categ px-4 m-1">VIEW</button>
                                <button className="butts btn btn-danger categ px-4 m-1">REMOVE</button>
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
