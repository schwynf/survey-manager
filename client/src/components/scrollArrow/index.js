//dependencies
import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
//css
import "./index.css";

const ScrollArrow = () => {

    const [showScroll, setShowScroll] = useState("none");

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        }
    }, [showScroll]);

    const checkScrollTop = () => {
        if (window.pageYOffset > 50 && showScroll === "none") {
            setShowScroll("flex");
        } else if (window.pageYOffset <= 50 && showScroll === "flex") {
            setShowScroll("none");
        }

    }


    return (
        <>
            <div id="scroll">
                <Link to="top" spy={true} smooth={true} offset={-56} duration={800}>
                    <FaArrowCircleUp className="scrollTop" style={{ height: 40, display:showScroll }}></FaArrowCircleUp>
                </Link>
            </div>
        </>
    )
}

export default ScrollArrow;

