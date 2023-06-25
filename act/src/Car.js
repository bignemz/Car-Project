import React from 'react'

function Car() {

     const [vans, setVans]= React.useState([])
    React.useEffect(() => {
        fetch("/api/movies")
            .then(res => res.json())
            .then(data => setVans(data.movies))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">

            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.year}<span>/day</span></p>
            </div>




            {/* <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i> */}
        </div>
    ))
  return (
    <div>{vanElements}</div>
  )
}

export default Car