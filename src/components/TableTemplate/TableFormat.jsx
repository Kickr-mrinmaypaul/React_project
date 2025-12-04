import React from 'react'


export default function TableFormat({columns, data, tablename}) {
  return (
        <table className='text-sm text-gray-400 px-2'>
            <thead className='justify-between'>
                <tr>
                    {columns.map((column, index)=>(
                        <th key={index} className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5">{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex)=>(
                    <tr key={rowIndex} className="border-gray-600 hover:bg-gray-700">
                        {columns.map((column, colIndex)=>(
                            <td key={colIndex} className="sm:px-3 sm:py-0.5 md:px-3.5 md:py-1 lg:px-5 lg:py-1 xl:px-6 xl:py-1 2xl:px-7 2xl:py-1.5 text-center">{row[column.accessor]} </td>
                        ) )}
                    </tr>
                ))}
            </tbody>
        </table>
  )
}
