'use client';

import { Range, RangeKeyDict, DateRange } from "react-date-range";

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface CalendarProps{
    value: Range;
    onChange: (value: RangeKeyDict) => void;
    disabledDates?: Date[];
}



const Calender: React.FC<CalendarProps>  = ({
    value,
    onChange,
    disabledDates
}) => {
    return ( 
        <DateRange


        />
     );
}
 
export default Calender;