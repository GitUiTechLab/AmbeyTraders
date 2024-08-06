import React, { useState } from 'react'
import "./navbar.css";
import { navbarContent } from '../../constants';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

    const handleToggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }
    return (
        <div className='navbar-container'>
            {navbarContent.map((item, idx) => {
                return (
                    <>
                        <div key={idx} className='navbar-item flex justify-between items-center'>

                            {!item.nestedLabel ? <span>
                                <Link to={item.path}>{item.label}</Link>
                            </span> : (
                                <span>
                                    <Accordion
                                        sx={{
                                            boxShadow: 'none',
                                            '&:before': {
                                                display: 'none',
                                            },
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<FaChevronDown />}
                                            aria-controls={`panel-${item.id}-content`}
                                            id={`panel-${item.id}-header`}
                                            sx={{ padding: 0, minHeight: 'unset' }}

                                        >
                                            {item.label}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>{item.nestedLabelHeader}</div>
                                            {item.nestedLabel.map((each, idx) => {
                                                return (
                                                    <div key={idx}>
                                                        <Link to={each.path}>
                                                            {each.label}
                                                        </Link>
                                                    </div>
                                                )
                                            })}
                                        </AccordionDetails>
                                    </Accordion>
                                </span>
                            )}

                        </div>

                    </>
                )
            })}
        </div>
    )
}

export default Navbar