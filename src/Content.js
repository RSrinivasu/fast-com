import React, { useState, useEffect } from 'react';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import ReplayOutlinedIcon from '@material-ui/icons/ReplayOutlined';
import './content.css';


function Content(){
    let [num , setNum] = useState(0)
    let [title, setTitle] = useState("Your Internet Speed is");
    let [cssClass, setCssClass]= useState("");
    let [speed, setSpeed] =useState("Kbps")
    let [isReload, setIsReload]= useState(false);

    console.log(window)

    let startInterval=()=>{
        let interval =   setInterval(() => {
            setTitle("");
            setCssClass("color");
            setSpeed("Mbps")
            setNum(num=>  Number((num + 0.9).toFixed(1)));
        }, 1000);
        return interval;
    }

    let stopIntervel = (obj)=>{
        setTimeout(() => {
            clearInterval(obj);
            setCssClass("");
            setIsReload(true);
            setTitle("Your Internet Speed is");

        }, 10000);
    }


    useEffect(()=>{
        let intervel = startInterval() ;
        stopIntervel(intervel)
    },[])



    let refresh =()=>{
        setNum(20);
        setSpeed("Kbps");
        setCssClass("color");
        setIsReload(false);
        let intervel = startInterval() ;
        stopIntervel(intervel)
    }
    
    return(
        <div className="content">
            <div className="content-title" > <b>{title} </b> </div>
               <div className="content-body">
                    <div className={"content-num "+ cssClass }>{num}</div> 
                    <div className="content-type">
                    <div className={"content-type-mbs "+cssClass}>{speed}</div>
                     {
                        isReload?
                            <ReplayOutlinedIcon onClick={refresh} className={ "pause "+cssClass}/>: 
                            <PauseCircleOutlineIcon style={{border: "solid 2px orange"}}  onClick={refresh} className={ "pause "+cssClass}   />
                     }
                    </div>
                </div>
            <button className="show-more" >Show more info</button>
        </div>
    )
}



export default Content;