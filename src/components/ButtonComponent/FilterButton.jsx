import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Search, FunnelPlus, EllipsisVertical  } from 'lucide-react'

export default function FilterButton({
    label = "Filter",
    icon = null,
    items = [],
    onSelect = () => {},}) 
    {
  return (

    <Menu as="div" className="relative inline-block">
        <MenuButton className="inline-flex w-full justify-center cursor-pointer gap-x-1.5 rounded-md bg-[#9B9476]
            sm:px-2 sm:py-1 md:px-2 md:py-1 lg:px-2.5 lg:py-1.5 xl:px-3 xl:py-2 2xl:px-4 2xl:py-2.4
            sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-lg font-semibold text-white">
    
            {label}
            {icon && <span className="ml-1">{icon}</span>}
            <ChevronDownIcon className="-mr-1 sm:size-3 md:size-3 lg:size-4 xl:size-5 2xl:size-7 text-gray-400" />
        </MenuButton>

        <MenuItems
            ransition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10
            rounded-md bg-gray-800 outline outline-1 outline-white/10
            transition data-closed:scale-95 data-closed:opacity-0"
        >
            <div className="py-1">
                {items.map((item, index) => (
                <MenuItem key={index}>
                <button
                    onClick={() => onSelect(item)}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-300
                     data-focus:bg-white/5 data-focus:text-white"
                >
                    {item.label}
                </button>
        </MenuItem>
      ))}
    </div>
  </MenuItems>
</Menu>

  )
}
