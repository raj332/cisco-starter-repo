import React,{ useState ,useEffect} from 'react'


const Card = (props) => {

    const [myPublicId, setMyPublicIp] = useState(0)
  
      let fetchPublicIp =async()=>{
        
          const url = (props.ipType === "ipv6")?"https://api64.ipify.org?format=json":"https://api.ipify.org?format=json" 
          let response = await fetch(url,{
              method:"GET" ,
              headers: {
                  Accept: "application/json"          
                }
          })
          let data = await response.json();
          console.log(data.ip)
          setMyPublicIp(data.ip)
          console.log(myPublicId)
      }  

      useEffect(() => {
        fetchPublicIp();
       }, [])
       
  return (
    <div className="card m-3" style={{"width": "18rem"}}>
    <div className="card-body">
      <h5 className="card-title">{props.ipType === "ipv4"?"Public IPv4 address" : "Public IPv6 address"}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{myPublicId}</h6>
    </div>
  </div>
  )
}

export default Card