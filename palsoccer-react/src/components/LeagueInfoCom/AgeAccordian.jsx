import { createContext, useContext, useEffect, useRef, useState } from "react";


const AgeAccordianContext = createContext()

// eslint-disable-next-line react/prop-types
export default function AgeAccordian({children, value, onChange, ...props}){
    const [selected, setSelected] = useState(value)    

    useEffect(() => {
        onChange?.(selected)
    },[selected])

    return(
        <ul {...props}>
            <AgeAccordianContext.Provider value={{selected, setSelected}}>
                {children}
            </AgeAccordianContext.Provider>
        </ul>
    )
}

// eslint-disable-next-line react/prop-types
export function AgeAccordianItem({children, value, trigger, ...props}){
    const {selected, setSelected} = useContext(AgeAccordianContext)
    const open = selected === value

    const ref = useRef(null)

    return (
        <li className="border-b" {...props}>
            <header role="button" onClick={()=> setSelected(open ? null : value)}
            className="flex justify-between item-center p-4 font-medium">
                {trigger}
                
            </header>
            <div className="overflow-y-hidden  transition-all" 
                 style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}>
                <div className="p-2 pb-4"  ref={ref}>{children}

                </div>
            </div>
        </li>
    )
}