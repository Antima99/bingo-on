import React, { useState, useEffect, useCallback, memo } from "react";
import initialGameData from "../data/phrases.json";
import { GetBingos } from "./gameUtils";
import boom from "./confetti";
import Cards from "./cards";
import styled from "styled-components";


const GameContainer = styled("div")`
 width: 90%;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 position: relative;
`;
const BingoScore = styled("h5")`
 color: rgb(228, 210, 214);
`;



const Game = () => {
 const [gameData, setGameData] = useState([]);
 const [gameRows] = useState(5);
 const [centerCell, setCenterCell] = useState("");
 const [bingos, setBingos] = useState([]);
 const [bingosWon, setBingosWon] = useState(0);
 const [matchedPossibilityIndexes, setMatchedPossibilityIndexes] = useState(
   []
 );


 useEffect(() => {
   shuffleBoard();
 }, []);


 useEffect(() => {
   checkWinnings(gameData);
 }, [gameData]);


 const shuffleBoard = () => {
   let temp = [];
   let addedIndexes = [];
   do {
     const random = Math.floor(Math.random() * (gameRows * gameRows));
     if (!addedIndexes.includes(random)) {
       temp.push(initialGameData[random]);
       addedIndexes.push(random);
     }
   } while (temp.length !== gameRows * gameRows);
   findCenterCellIndex(temp);
   setGameData(temp);
 };


 const findCenterCellIndex = useCallback((temp) => {
   let middleCell = Math.floor(temp.length / 2);
   setCenterCell(middleCell);
 });


 const handleCellClick = useCallback((cellIndex) => {
   let rows = [...gameData];
   rows[cellIndex].isStriked = true;
   setGameData(rows);
 });


 const checkWinnings = useCallback((data) => {
   const { matchingBingos, matchedPossibilityIndex } = GetBingos(
     [...data],
     matchedPossibilityIndexes
   );
   if (matchingBingos?.length > 0) {
     let temp = bingos;
     matchingBingos.forEach((b) => temp.push(b));
     setBingos(temp);
     setBingosWon(temp.length);
     boom();
     setMatchedPossibilityIndexes((prev) => [
       ...prev,
       ...matchedPossibilityIndex,
     ]);
   }
 });


 const renderCell = (cell, cellIndex) => {
   return (
     <React.Fragment key={cellIndex}>
       <Cards
         cellIndex={cellIndex}
         isCellCentered={centerCell === cellIndex}
         phrase={cell.phrase}
         handleCellClick={handleCellClick}
         isStriked={cell.isStriked}
       />
     </React.Fragment>
   );
 };


 return (
     <>
         <div style={{display:'flex'}}>
         <p style={{color: 'blueviolet' , fontsize:30}} >B</p>
         <p>I</p>
         <p>N</p>
         <p>G</p>
         <p>O</p>

      </div>
       
         <GameContainer>
       {gameData?.length > 0 &&
         gameData?.map((cell, cellIndex) => {
           return (
             <React.Fragment key={cellIndex}>
               {renderCell(cell, cellIndex)}
             </React.Fragment>
           );
         })}
         </GameContainer>
           <BingoScore> Score: {bingosWon}/12</BingoScore>
   </>
 );
};


export default memo(Game);





