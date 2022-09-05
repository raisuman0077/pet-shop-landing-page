import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const SocialMediaBtn = () => {
    return ( 
        <button className="chat-btn"><FontAwesomeIcon icon={faCommentDots} /> Live chat </button>
     );
}
 
export default SocialMediaBtn;