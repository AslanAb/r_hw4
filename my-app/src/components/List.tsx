import { useState, useEffect } from "react"
import FilterButtons from "./FilterButtons"


const List = () => {
    const example = [
        { id: 1, text: "1", done: true, important: false },
        { id: 2, text: "2", done: false, important: true },
        { id: 3, text: "3", done: true, important: true },
        { id: 4, text: "4", done: false, important: false },
        { id: 5, text: "5", done: true, important: true },
        { id: 6, text: "6", done: false, important: false },
        { id: 7, text: "7", done: true, important: true }
    ]

    // const [filtered, setFiltered] = useState<IList[]>([])

    return (
        <FilterButtons list={example} />
    );
}
export default List