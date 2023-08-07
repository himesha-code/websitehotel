import React, { useState } from 'react'
import BookingDetail from './BookingDetail';
import BookNow from './BookNow';


const Rooms = ({onClick}) => {

    const [selectId, setSelectId] = useState();

    const [visible, setVisible] = useState(false);


    const handleClick = (id) => {
        setSelectId(id !== selectId ? id : null);
    };

    const roomsInfo = [
        {
            id: 1,
            img: "./image/room.jpg",
            title: "Murphy Room",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: "100",
        },
        {
            id: 2,
            img: "./image/room.jpg",
            title: "Murphy Room",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: "100",
        },
        {
            id: 3,
            img: "./image/room.jpg",
            title: "Murphy Room",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: "100",
        },
    ]


    return (
        <div className='container'>
            <div className='py-4 d-flex justify-content-between'>
                <h4 style={{ color: "#2d3454" }}>Nirav Test Property</h4>
                <div className='d-flex gap-1'>
                    <button type="button" class="btn ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-border-all" viewBox="0 0 16 16">
                            <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" />
                        </svg>
                    </button>
                    <button type="button" class="btn ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>

                </div>
            </div>

            <div className="row g-4">
                <div className="col-8">
                    <div className="p-3   roubonded-3">
                        {/* ------ card ----- */}
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {roomsInfo.map((room) => {
                                const { id, img, title, description, price } = room
                                return (
                                    <>
                                        <div class="col">
                                            <div className="card" style={{ width: '16.5rem' }} >
                                                <div className='p-3'><img src={img} className="card-img-top rounded-2" alt="..." /></div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{title}</h5>
                                                    <p className="card-text">{description}</p>
                                                </div>
                                                <div className="card-body d-flex justify-content-between">
                                                    <div className='d-flex flex-column'>
                                                        <p >$ {price} </p>

                                                    </div>
                                                    <button type="button" class="btn btn-outline-primary">Primary</button>
                                                </div>
                                                <div className="card-body text-center">
                                                    <button type='button' className="btn card-link" onClick={() => handleClick(room.id)}>View by Packages</button>
                                                    
                                                </div>
                                            </div>
                                            {selectId === room.id && (
                                                        <div className="d-flex w-100 border bg-light select-option">
                                                            <ul id="action1" className="select-option-inner rounded">
                                                                <li>
                                                                    <b>{room.title}</b>
                                                                </li>
                                                                <li>Buy More</li>

                                                                <li>Sell </li>

                                                                <li>Next Li Tag</li>
                                                                <li>Edit Detials</li>
                                                                <ll><button className='btn btn-outline-primary' onClick={() =>setVisible(true)}>Book now</button></ll>
                                                            </ul>
                                                        </div>
                                                    )}
                                        </div>
                                        
                                    </>
                                )
                            })

                            }
                            
                        </div>
                        {/* ------ card ----- */}

                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="p-3 border rounded-3">
                        <div className='bg-light'>
                            <p>Booking details</p>
                        </div>
                       {!visible ? <BookingDetail /> : ""}
                        {visible && <BookNow onClick={onClick} />}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Rooms