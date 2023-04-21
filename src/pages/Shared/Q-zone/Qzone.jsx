import qzone1 from "../../../assets/1.png"
import qzone2 from "../../../assets/2.png"
import qzone3 from "../../../assets/3.png"

const Qzone = () => {
    return (
        <div className="rounded-3 mt-3 bg-secondary bg-opacity-10 p-3">
            <h4>Q-Zone</h4>
            <div className="my-3 d-flex flex-column gap-4 justify-content-center align-items-center">
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default Qzone;