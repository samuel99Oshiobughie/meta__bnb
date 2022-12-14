import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components'
import { FacebookIcon, InstagramIcon, MetabnbLight, TwitterIcon } from '../assets/icons/icons'

function Footer() {
  return (
    <>
        <div style={{backgroundColor:'#1D1D1E'}}>
            <div className='max-w-7xl mx-auto py-[37px] flex justify-between items-center flex-col md:flex-row lg:flex-row p-10'>
                <div className='w-[190px]'>
                  <div className='mb-[30px] lg:mb-[96px] md:mb-[96px]'>
                <MetabnbLight />
                </div>
                <div className=' justify-around space-x-10 w-full flex lg:space-x-10 md:space-x-10 mb-[30px] lg:mb-[55px] md:mb-[55px]'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                </div>
                <div className='mb-[30px]'>
                <div className='block lg:hidden md:hidden'>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      expandIcon={<StyledExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <a href='#' className='font-bold text-white text-[18px]'>Community</a>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                      <div className='text-white flex flex-col justify-between pb-[30px]'>
                          <a href='#' className='font-bol text-white text-[14px]'>NFT</a>
                          <a href='#' className='font-bol text-white text-[14px]'>Tokens</a>
                          <a href='#' className='font-bol text-white text-[14px]'>Landlords</a>
                          <a href='#' className='font-bol text-white text-[14px]'>Discord</a>
                        </div>
                    </AccordionDetails>
                  </StyledAccordion>
                  </div>
                  <div className='block lg:hidden md:hidden'>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      expandIcon={<StyledExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <a href='#' className='font-bold text-white text-[18px]'>Places</a>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                      <div className='text-white flex flex-col justify-between pb-[30px]'>
                          <a href='#' className='font-bol text-white text-[14px]'>Castle</a>
                          <a href='#' className='font-bol text-white text-[14px]'>Farms</a>
                          <a href='#' className='font-bol text-white text-[14px]'>Beach</a>
                          <a href='#' className='font-bol text-white text-[14px]'>Learn more</a>
                        </div>
                    </AccordionDetails>
                  </StyledAccordion>
                  </div>
                  <div className='block lg:hidden md:hidden'>
                  <StyledAccordion>
                    <StyledAccordionSummary
                      expandIcon={<StyledExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <a href='#' className='font-bold text-white text-[18px]'>About us</a>
                    </StyledAccordionSummary>
                    <AccordionDetails>
                      <div className='text-white flex flex-col justify-between pb-[30px]'>
                              <a href='#' className='font-bol text-white text-[14px]'>Road map</a>
                              <a href='#' className='font-bol text-white text-[14px]'>Creators</a>
                              <a href='#' className='font-bol text-white text-[14px]'>Career</a>
                              <a href='#' className='font-bol text-white text-[14px]'>Contact us</a>
                        </div>
                    </AccordionDetails>
                  </StyledAccordion>
                  </div>
                  </div>
                <a href='#' className='text-white'>&copy; 2022 Metabnb</a>
                </div>
                <div className='text-white flex flex-col justify-between pb-[30px] hidden lg:flex md:flex'>
                  <a href='#' className='font-bold text-white text-[18px]'>Community</a>
                  <a href='#' className='font-bol text-white text-[14px]'>NFT</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Tokens</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Landlords</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Discord</a>
                </div>
                <div className='text-white flex flex-col justify-between pb-[30px] hidden lg:flex md:flex'>
                  <a href='#' className='font-bold text-white text-[18px]'>Places</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Castle</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Farms</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Beach</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Learn more</a>
                </div>
                <div className='text-white flex flex-col justify-between pb-[30px] hidden lg:flex md:flex'>
                  <a href='#' className='font-bold text-white text-[18px]'>About us</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Road map</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Creators</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Career</a>
                  <a href='#' className='font-bol text-white text-[14px]'>Contact us</a>
                </div>
                </div>
            </div>
    </>
  )
}

export default Footer

const StyledAccordion = styled(Accordion)`
  color: white !important;
  background-color: #1D1D1E!important;
  width: auto !important;
  box-shadow: none !important;
`

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  color: white !important;
`
const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 0 !important;
`