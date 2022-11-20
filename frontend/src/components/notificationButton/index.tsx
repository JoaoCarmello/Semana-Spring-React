import axios from 'axios';
import notificationIcon from '../../assets/notification-icon.svg'
import { BASE_URL } from '../../Utils/request';
import  './styles.css'

type Props = {
    saleId:number;
}
 
function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {le.loconsog("Sucesso")})
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
