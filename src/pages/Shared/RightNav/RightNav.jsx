import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from "../Q-zone/Qzone";
const RightNav = () => {
    return (
        <div className="mt-5">
            <h4>Log in With</h4>
            <div className="d-flex flex-column my-2 gap-3">
                <Button className="" variant="outline-secondary">  <FaGoogle /> Log in with google</Button>
                <Button className="" variant="outline-info"> <FaGithub /> Log in with github</Button>
            </div>

            <h4>Find us On</h4>
            <div>
                <ListGroup>
                    <ListGroup.Item>
                        <FaFacebook />  Facebook
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaInstagram />  Instagram
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FaTwitter />    Twitter
                    </ListGroup.Item>
                </ListGroup>
            </div>

            <Qzone/>
        </div>
    );
};

export default RightNav;