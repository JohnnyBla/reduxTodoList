import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from "mdb-react-ui-kit";

import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../redux/modalReducer";
import { removeEvent } from "../redux/eventSlice";

const Popup = () => {
  const { events } = useSelector((state) => state.event);

  const numOfEvents = events.length;
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(openModal());
  };

  const noModal = () => {
    dispatch(closeModal());
  };

  return (
    <MDBModal show={() => showModal} tabIndex="-1">
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>
              {" "}
              <MDBIcon color="warning" className="mx-2" fas icon="list" /> To Do
              List
            </MDBModalTitle>
            <MDBBtn
              className="btn-close"
              color="none"
              onClick={noModal}
            ></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody className="font-monosapce">
            {" "}
            You are about to remove {numOfEvents} events
          </MDBModalBody>

          <MDBModalFooter>
            <div className="row">
              <div className="col-6">
                <MDBBtn
                  color="secondary"
                  onClick={() => {
                    dispatch(closeModal());
                    dispatch(removeEvent());
                  }}
                >
                  Confirm
                </MDBBtn>
              </div>
              <div className="col-6">
                <MDBBtn onClick={noModal}>Cancel</MDBBtn>
              </div>
            </div>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default Popup;
