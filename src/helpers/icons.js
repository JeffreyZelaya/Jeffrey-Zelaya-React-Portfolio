import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faYinYang, 
    faPenNib 
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faYinYang, faPenNib)
}

export default Icons
