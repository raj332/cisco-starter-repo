import React,{useState,useEffect} from 'react'

const LatencyCard = () => {
    const [myLatency, setMyLatency] = useState(0)
    const ws= new WebSocket("ws://localhost:55455")
    ws.onmessage =(event)=>{
        console.log(Date.now());
        setMyLatency((Date.now()-event.data))
    }
  return (
    <div className="card m-3" style={{"width": "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">Latency</h5>
      <h6 className="card-subtitle mb-2 text-muted">{myLatency}</h6>
    </div>
  </div>
  )
}

export default LatencyCard