import "./Modal.css";
import { IoMdClose } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Modal = ({ setOpenModal, user }) => {
  return (
    <section className="modal-section">
      <div className="modalbox">
        <div className="closeend">
          {/* <span className="modalcloseicon" onClick={() => setOpenModal(false)}>
            &#10006;
          </span> */}
          <MdClose
            className="modalcloseicon"
            onClick={() => setOpenModal(false)}
          />
        </div>
        <div>
          <img src={user.image} className="modalimage" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Modal;
