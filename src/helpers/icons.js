import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faYinYang, 
    faPenNib,
    faPhone,
    faEnvelopeOpenText,
    faMapMarkerAlt

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
        faMapMarkerAlt
        )
}

export default Icons
