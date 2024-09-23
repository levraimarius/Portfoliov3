import { MouseEventHandler } from 'react'

type MenuItemProps = {
    title: string
    clickEvent: MouseEventHandler
}

export default function MenuItem({ title, clickEvent }: MenuItemProps) {
    return <li onClick={clickEvent}>{title}</li>
}
