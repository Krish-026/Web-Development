import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'
export default function Categories() {

    const data = [

        "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600",
    ]

    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src={data[0]} alt="" />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src={data[2]} alt="" />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button></div>
            </div>
            <div className="col">
                <div className="row">
                    <img src={data[1]} alt="" />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button></div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src={data[0]} alt="" />
                            <button>
                                <Link className='link' to="/products/1">Sale</Link>
                            </button></div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src={data[1]} alt="" />
                            <button>
                                <Link className='link' to="/products/1">Sale</Link>
                            </button></div>
                    </div>
                </div>
                <div className="row">
                    <img src={data[2]} alt="" />
                    <button>
                        <Link className='link' to="/products/1">Sale</Link>
                    </button></div>
            </div>
        </div>
    )
}
