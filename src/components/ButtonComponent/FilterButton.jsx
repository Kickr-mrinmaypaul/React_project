import React,{useState} from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Search, FunnelPlus, EllipsisVertical  } from 'lucide-react'

export default function FilterButton({
    label = "Filter",
    icon = null,
    items = [],
    onSelect = () => {},}) 
    {
      const [activeButton, setActiveButton] = useState(null);
      const handleActiveButton = (item, index) =>{
        setActiveButton(index);
        onSelect(item);
      }
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
            className="absolute right-0 z-10 mt-1 w-[118px] origin-top-right 
            rounded-xl bg-[#FFFFFF] outline outline-1 outline-white/10
            transition data-closed:scale-95 data-closed:opacity-0"
        >
            <div>
                {items.map((item, index) => (
                <MenuItem key={index}>
                <button
                    onClick={() => handleActiveButton(item, index)}
                    className="flex flex-row items-center gap-1 cursor-pointer w-full px-3 py-2 text-left text-sm text-[#343434] font-semibold "
                >
                  {<div className={`flex ustify-start box h-3 w-3 ${activeButton === index ? "bg-[#0FE3FD]":"bg-[#BFBFBF]"} border border-[#707070] rounded-full` }></div>}  {item.label}
                </button>
        </MenuItem>
      ))}
    </div>
  </MenuItems>
</Menu>

  )
}
