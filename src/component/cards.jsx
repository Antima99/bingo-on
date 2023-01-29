import React, { memo } from "react";
import styled from "styled-components";
import { devices } from "./responsiveDeviceSizes";


const Cards = ({
 handleCellClick,
 cellIndex,
 width,
 isStriked,
 phrase,
 isCellCentered,
}) => (
 <CardContainer
   onClick={() => !isCellCentered && !isStriked && handleCellClick(cellIndex)}
   width={width}
   isStriked={isStriked}
 >
   {isCellCentered ? (
     <CenterCard>
       <span>Bingo</span>
     </CenterCard>
   ) : (
     <span>{phrase}</span>
   )}
 </CardContainer>
);


export default memo(Cards);


export const CardContainer = styled("div")`
 cursor: pointer;
 width: 20%;
 height: 7rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border: 1px solid #161d31;
 transition: all ease-in 500ms;
 background: ${(props) => (props.isStriked ? "#6af76e82" : "#FFC0CB")};
 opacity: ${(props) => (props.isStriked ? "0.75" : "1")};
 text-decoration: ${(props) => (props.isStriked ? "line-through" : "unset")};
 pointer-events: ${(props) => (props.isStriked ? "none" : "unset")};
 flex-wrap: wrap;
 padding: 0 0.5rem;
 word-break: break-word;
 span {
   color: ${(props) => (props.isStriked ? "#00308F" : "#733635")};
   @media ${devices.mobileXS} {
     font-size: 0.5rem;
   }
   @media ${devices.mobileS} {
     font-size: 0.5rem;
   }
   @media ${devices.mobileM} {
     font-size: 0.6rem;
   }
   @media ${devices.mobileL} {
     font-size: 0.6rem;
   }
   @media ${devices.tablet} {
     font-size: 1rem;
   }
   @media ${devices.laptop} {
     font-size: 1rem;
   }
   @media ${devices.laptopL} {
     font-size: 1rem;
   }
   @media ${devices.desktop} {
     font-size: 1rem;
   }
 }


 @media ${devices.mobileS} {
   width: 20%;
   height: 6rem;
 }
 @media ${devices.mobileM} {
   width: 20%;
   height: 6rem;
 }
 @media ${devices.mobileL} {
   width: 20%;
   height: 6rem;
 }
 @media ${devices.tablet} {
   width: 20%;
   height: 7rem;
 }
 @media ${devices.laptop} {
   width: 20%;
   height: 7rem;
 }
 @media ${devices.laptopL} {
   width: 20%;
   height: 7rem;
 }
 @media ${devices.desktop} {
   width: 20%;
   height: 7rem;
 }
`;


export const CenterCard = styled("div")`
 border: 1px solid #6495ed;
 height: 7rem;
 width: 7rem;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% );;
 span {
   color: #fff;
 }
 @media ${devices.mobileXS} {
   width: 1.5rem;
   height: 1.5rem;
 }
 @media ${devices.mobileS} {
   width: 2rem;
   height: 3rem;
 }
 @media ${devices.mobileM} {
   width: 2rem;
   height: 3rem;
 }
 @media ${devices.mobileL} {
   width: 4rem;
   height: 4rem;
 }
 @media ${devices.tablet} {
   height: 6rem;
   width: 6rem;
 }
 @media ${devices.laptop} {
   height: 6rem;
   width: 6rem;
 }
 @media ${devices.laptopL} {
   height: 6rem;
   width: 6rem;
 }
 @media ${devices.desktop} {
   height: 6rem;
   width: 6rem;
 }
`;





