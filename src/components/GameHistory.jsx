import React,{useState} from 'react'
import gameHistory from '../user/gameHistoryData';

export default function GameHistory() {
     
  return (
        <div className='border-1 border-[#9B9476] m-3 rounded-2xl p-3 h-auto overflow-hidden'>
            <table className='text-xs text-gray-400 '>
                <thead>
                    <tr  className='space-x-0 text-xs'>
                        <th className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">S.No</th>
                        <th className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5" >Game Mode</th>
                        <th className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">Play Time</th>
                        <th className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">Score</th>
                        <th className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">Coin</th>
                        <th className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">Date & Time</th>
                        <th className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {gameHistory.map((users, index)=>(
                    <tr key={users.id}>
                        <td className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">{index + 1}</td>
                        <td className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">{users.gameMode}</td>
                        <td className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">{users.playTime}</td>
                        <td className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">{users.score}</td>
                        <td className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">{users.coin}</td>
                        <td className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">{users.dateTime}</td>
                        <td className="sm:px-1.5 sm:py-0.5 md:px-1.5 md:py-0.5 lg:px-2 lg:py-1 xl:px-3 xl:py-1.5 2xl:px-5 2xl:py-1.5">{users.points}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}
