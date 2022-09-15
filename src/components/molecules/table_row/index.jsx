import Image from "next/image"
import styles from './styles.module.css'

const TableRow = (props) => {
    const { item } = props

    return (
        <div className={styles.row}>
            <tr>
                <td>
                    {item.customer}
                </td>
                <td>
                    {item.order_id}
                </td>
                <td>
                    <span>
                        {item.status}
                    </span>
                </td>
                <td>
                    <span position='relative'>
                        <Image src='/assets/edit_icon.png' width='20px' height='20px'/>
                    </span>
                    <span position='relative'>
                        <Image src='/assets/edit_icon.png' width='20px' height='20px'/>
                    </span>
                </td>
            </tr>
        </div>
    )

}

export default TableRow