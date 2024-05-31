import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
const Navtabs = () => {
    const [ActiveKey, setActiveKey] = useState("nav1");
    useEffect(() => {
        setActiveKey("nav1");
    }, []);
    return (
        <>
            <div>
                <button
                    className={`${ActiveKey === "nav1"
                        ? "bg-black text-white "
                        : "bg-transparent"
                        } nav_btn `}
                    onClick={() => setActiveKey("nav1")}
                >
                   nav1
                </button>

                <button
                    className={`${ActiveKey === "nav2"
                        ? "bg-black text-white "
                        : "bg-transparent"
                        } nav_btn `}
                    onClick={() => setActiveKey("nav2")}
                >
                 nav2
                </button>
                <button
                    className={`${ActiveKey === "nav3"
                        ? "bg-black text-white "
                        : "bg-transparent"
                        } nav_btn `}
                    onClick={() => setActiveKey("nav3")}
                >
                nav3
                </button>
                <div
                    className={`${ActiveKey === "nav1" ? "  d-block    " : "  d_none "
                        }  ` }
                >
                 Nav1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione quisquam quas officiis nam expedita omnis modi corrupti sequi aut fugit! Voluptatum provident voluptatibus, itaque quia mollitia enim odio! Veniam, in!
                </div>
                <div
                    className={`${ActiveKey === "nav2" ? "  d-block    " : "  d_none"
                        }  `}
                >
               Nav2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa nobis nulla quae iste ullam quibusdam amet velit mollitia, maxime magni veniam distinctio doloribus iusto totam excepturi facilis sunt aspernatur.
                </div>
                <div
                    className={`${ActiveKey === "nav3" ? "  d-block    " : "  d_none"
                        }  `}
                >
                 Nav3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit recusandae explicabo voluptatum quasi, doloremque dolor accusantium. Rem quam excepturi sed, suscipit a nesciunt facilis? Harum, molestias delectus. Voluptas, quis?
                </div>
            </div >

        </>
    )
}

export default Navtabs