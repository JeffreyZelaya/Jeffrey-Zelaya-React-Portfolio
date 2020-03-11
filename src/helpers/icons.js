import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faYinYang, 
    faPenNib,
    faPhone,
    faEnvelopeOpenText,
    faMapMarkedAlt

} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faYinYang, 
        faPenNib,    
        faPhone, 
        faEnvelopeOpenText,
        faMapMarkedAlt
        )
}

export default Icons
