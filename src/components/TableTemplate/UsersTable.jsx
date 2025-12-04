import React, { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { EllipsisVertical, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


const  UsersTable = ({ tableData }) => {
  const { columns, data } = tableData;
  const [isBlocked, setIsBlocked] = useState({});

  const handleBlock = (id) => {
    setIsBlocked((prev) => ({ ...prev, [id]: true }));
  };

  const handleUnblock = (id) => {
    setIsBlocked((prev) => ({ ...prev, [id]: false }));
  };

    const highlightedClasses = " text-sm text-black bg-red-200 px-3";
    const defaultClasses = "text-sm text-amber-50 px-3";

  return (
    <table className="text-sm text-amber-50 px-3 w-full">
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.accessor}
              className={`${defaultCellClass} text-semibold`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr
            key={row.id || index}
            className={`border-gray-600 hover:bg-gray-700 ${
              isBlocked[row.id] ? "bg-red-700/40" : ""
            }`}
          >
            {columns.map((col) => {
              // S.No special case
              if (col.accessor === "index") {
                return <td key={col.accessor} className={defaultCellClass}>{index + 1}</td>;
              }

              // Actions special case
              if (col.accessor === "actions") {
                return (
                  <td key="actions" className={defaultCellClass}>
                    <Menu as="div" className="relative inline-block">
                      <MenuButton className="inline-flex items-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-white hover:bg-white/20">
                        <EllipsisVertical className="h-4 w-4" />
                        <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                      </MenuButton>

                      <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-gray-800 shadow-lg">
                        <div className="py-1">
                          <MenuItem>
                            <button
                              onClick={() => handleBlock(row.id)}
                              className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700"
                            >
                              Block
                            </button>
                          </MenuItem>

                          <MenuItem>
                            <button
                              onClick={() => handleUnblock(row.id)}
                              className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700"
                            >
                              Unblock
                            </button>
                          </MenuItem>

                          <MenuItem>
                            <Link
                              to="/users/viewusers"
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                            >
                              View Users
                            </Link>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </Menu>
                  </td>
                );
              }

              // Normal cell
              return (
                <td key={col.accessor} className={defaultCellClass}>
                  {row[col.accessor]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default  UsersTable;
