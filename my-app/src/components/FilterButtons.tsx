import { useState, useEffect } from "react"
interface IList {
    id: number,
    text: string,
    done: boolean,
    important: boolean
}
interface IFiltered {
    list: IList[]
}

const FilterButtons = (props: IFiltered) => {
    const [filtered, setFiltered] = useState<IList[]>([])
    const [show, setShow] = useState<string>('none')
    const showFn = (el: string) => {
        if (el === "all" && show === "all") {
            setShow("none")
            setFiltered([])
        } else if (el === "all" && show !== "all") {
            setFiltered(props.list)
            setShow("all")
        } else if (el === "done" && show === "done") {
            setShow("none")
            setFiltered([])
        } else if (el === "done" && show !== "done") {
            setFiltered(props.list.filter(el => el.done === true))
            setShow("done")
        } else if (el === "important" && show === "important") {
            setShow("none")
            setFiltered([])
        } else if (el === "important" && show !== "important") {
            setFiltered(props.list.filter(el => el.important === true))
            setShow("important")
        }

    }

    const isShow = () => {

    }

    useEffect(() => {
        isShow()
    }, [show])

    return (
        <div>
            <button onClick={() => showFn('all')} className={show === "all" ? "do" : "none"}>All</button>
            <button onClick={() => showFn('done')} className={show === "done" ? "do" : "none"}>Done</button>
            <button onClick={() => showFn('important')} className={show === "important" ? "do" : "none"}>Important</button>
            <ul>
                {
                    filtered.map(el => {
                        return (
                            <li key={el.id} className={`${el.done == true? "line" : ""} ${el.important==true? "bold" : ""}`}>{el.text}</li>
                        )
                    })
                }
            </ul>
            <p>Done: line-throught</p>
            <p>Important: bold</p>
        </div>
    )
}

export default FilterButtons