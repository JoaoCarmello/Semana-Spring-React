import axios from 'axios'
import { toast } from 'react-toastify'
import notificationIcon from '../../assets/notification-icon.svg'
import { BASE_URL } from '../../Utils/request'
import  './styles.css'

type Props = {
    saleId:number;
}
 
function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {toast.info("SMS enviado com sucesso!")})
}


function NotificationButton( {saleId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={notificationIcon}
                alt="Notificação" />
        </div>
    )
}

export default NotificationButton
