import React, { useState } from 'react'
import './Content.css';
import {useEffect} from 'react';

function Content() {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            return fetch("https://630f229d3792563418886223.mockapi.io/kibllis-content")
            .then((response) => response.json()).then(data => setContent(data));
        }

        fetchData();
    }, []);

    console.log(content);
    
  return (
    <section className="content" id="content">
    <div className="content-blocks">
        {content.map((block) => {
            return (
                <div className="content-block m-600">
                    <img src="images/block-1.jpg" alt="" />
                    <div className="text">
                        <div className="block-title">
                            <h2 className="m-700">{block.title}</h2>
                            <p className="m-700">N4.5m</p>
                        </div>
                        <div className="location">
                            <img src={block.src} alt="location" />
                            <span>{block.location}</span>
                        </div>
                        <p className="distance">{block.distance}</p>
                        <p className="descr">{block.description}</p>
                        <button className="m-700">More Details</button>
                    </div>
                </div>
            );
        })}
        {/* <div className="content-block m-600">
            <img src="images/block-1.jpg" alt="" />
            <div className="text">
                <div className="block-title">
                    <h2 className="m-700">Hill side Estate</h2>
                    <p className="m-700">N4.5m</p>
                </div>
                <div className="location">
                    <img src="images/loc-ic.svg" alt="location" />
                    <span>Akwa</span>
                </div>
                <p className="distance">500 Sqm</p>
                <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="m-700">More Details</button>
            </div>
        </div>
        <div className="content-block m-600">
            <img src="images/block-2.jpg" alt="" />
            <div className="text">
                <div className="block-title">
                    <h2 className="m-700">Sunny Side Estate</h2>
                    <p className="m-700">N7.3m</p>
                </div>
                <div className="location">
                    <img src="images/loc-ic.svg" alt="location" />
                    <span>Ebonyi</span>
                </div>
                <p className="distance">600 Sqm</p>
                <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="m-700">More Details</button>
            </div>
        </div>
        <div className="content-block m-600">
            <img src="images/block-1.jpg" alt="" />
            <div className="text">
                <div className="block-title">
                    <h2 className="m-700">Blue Whale Estate</h2>
                    <p className="m-700">N16.6m</p>
                </div>
                <div className="location">
                    <img src="images/loc-ic.svg" alt="location" />
                    <span>Lekki II</span>
                </div>
                <p className="distance">350 Sqm</p>
                <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="m-700">More Details</button>
            </div>
        </div>
        <div className="content-block m-600">
            <img src="images/block-4.jpg" alt="" />
            <div className="text">
                <div className="block-title">
                    <h2 className="m-700">Lake Kwame Estate</h2>
                    <p className="m-700">N12m</p>
                </div>
                <div className="location">
                    <img src="images/loc-ic.svg" alt="location" />
                    <span>Calabar</span>
                </div>
                <p className="distance">400 Sqm</p>
                <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="m-700">More Details</button>
            </div>
        </div>
        <div className="content-block m-600">
            <img src="images/block-5.jpg" alt="" />
            <div className="text">
                <div className="block-title">
                    <h2 className="m-700">Sunny Side Estate</h2>
                    <p className="m-700">N7.3m</p>
                </div>
                <div className="location">
                    <img src="images/loc-ic.svg" alt="location" />
                    <span>Enugu</span>
                </div>
                <p className="distance">600 Sqm</p>
                <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="m-700">More Details</button>
            </div>
        </div>
        <div className="content-block m-600">
            <img src="images/block-6.jpg" alt="" />
            <div className="text">
                <div className="block-title">
                    <h2 className="m-700">South Herm Estate</h2>
                    <p className="m-700">N3.5m</p>
                </div>
                <div className="location">
                    <img src="images/loc-ic.svg" alt="location" />
                    <span>Delta</span>
                </div>
                <p className="distance">350 Sqm</p>
                <p className="descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="m-700">More Details</button>
            </div>
        </div> */}
    </div>
    <button className="content-btn m-700">View More</button>
</section>
  )
}

export default Content