import $ from 'jquery';
import { useEffect, useState } from "react"


export default function Portfolio() {


    return <>

        <section id="portfolio">
            <div className="container text-center py-4">
                <h2>PORTFOLIO COMPONENT</h2>
                <div className="line"></div>

                <div className="row gy-4">
                    <div className="col-md-4 ">

                        <div className="ourPortImage">
                            <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
                            <div className="imageLayer"></div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="ourPortImage">
                            <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
                            <div className="imageLayer"></div>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="ourPortImage">

                            <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
                            <div className="imageLayer"></div>
                        </div>

                    </div>

                    <div className="col-md-4 ">

                        <div className="ourPortImage">
                            <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" alt="" />
                            <div className="imageLayer"></div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="ourPortImage">
                            <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" alt="" />
                            <div className="imageLayer"></div>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="ourPortImage">

                            <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" alt="" />
                            <div className="imageLayer"></div>
                        </div>

                    </div>



                </div>
            </div>


            
            <div className="lightBoxContainer d-none">
                <div className="lightBox">
                    <i id='btnClose' className='fa-solid fa-fa-circle-xmark'></i>
                </div>
            </div>
        </section>
    </>
}