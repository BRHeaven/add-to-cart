import React from "react";

export default function ModalCard(props) {
    const checkProduct = (product) => {
        if (product.id < 200) {
            let {id,name,ram,price,chip,sim,pin,cameraAfter,cameraBefore,src} = props.product;
            return (  <div className="modalContent">
              <div className="modalImage">
                <img src={src} alt={id} />
              </div>
              <div className="modalInfoDetail">
                <ul>
                  <li>
                    <p className="title">name</p>
                    <p className="value">{name}</p>
                  </li>
                  <li>
                    <p className="title">price</p>
                    <p className="value">{price}</p>
                  </li>
                  <li>
                    <p className="title">chip</p>
                    <p className="value">{chip}</p>
                  </li>
                  <li>
                    <p className="title">ram</p>
                    <p className="value">{ram}</p>
                  </li>
                  <li>
                    <p className="title">sim</p>
                    <p className="value">{sim}</p>
                  </li>
                  <li>
                    <p className="title">pin</p>
                    <p className="value">{pin}</p>
                  </li>
                  <li>
                    <p className="title">camera before</p>
                    <p className="value">{cameraBefore}</p>
                  </li>
                  <li>
                    <p className="title">camera after</p>
                    <p className="value">{cameraAfter}</p>
                  </li>
                </ul>
              </div>
            </div>);
        } else if (product.id < 300) {
            let {id,name,price,techScreen,screenResolution,faceSize,pin,cpu,memory,operatingSystem,src} = props.product;
            return (  <div className="modalContent">
            <div className="modalImage">
              <img src={src} alt={id} />
            </div>
            <div className="modalInfoDetail">
              <ul>
                <li>
                  <p className="title">name</p>
                  <p className="value">{name}</p>
                </li>
                <li>
                  <p className="title">price</p>
                  <p className="value">{price}</p>
                </li>
                <li>
                  <p className="title">cpu</p>
                  <p className="value">{cpu}</p>
                </li>
                <li>
                  <p className="title">memory</p>
                  <p className="value">{memory}</p>
                </li>
                <li>
                  <p className="title">operating system</p>
                  <p className="value">{operatingSystem}</p>
                </li>
                <li>
                  <p className="title">tech screen</p>
                  <p className="value">{techScreen}</p>
                </li>
                <li>
                  <p className="title">screen resolution</p>
                  <p className="value">{screenResolution}</p>
                </li>
                <li>
                  <p className="title">face size</p>
                  <p className="value">{faceSize}</p>
                </li>
                <li>
                  <p className="title">pin</p>
                  <p className="value">{pin}</p>
                </li>
              </ul>
            </div>
          </div>);
        } else if (product.id  < 400) {
            let {id,name,price,techScreen,screenResolution,operatingSystem,cpu,gpu,ram,storageCapacity,src} = props.product;
            return (  <div className="modalContent">
            <div className="modalImage">
              <img src={src} alt={id} />
            </div>
            <div className="modalInfoDetail">
              <ul>
                <li>
                  <p className="title">name</p>
                  <p className="value">{name}</p>
                </li>
                <li>
                  <p className="title">price</p>
                  <p className="value">{price}</p>
                </li>
                <li>
                  <p className="title">cpu</p>
                  <p className="value">{cpu}</p>
                </li>
                <li>
                  <p className="title">gpu</p>
                  <p className="value">{gpu}</p>
                </li>
                <li>
                  <p className="title">ram</p>
                  <p className="value">{ram}</p>
                </li>
                <li>
                  <p className="title">tech screen</p>
                  <p className="value">{techScreen}</p>
                </li>
                <li>
                  <p className="title">screen resolution</p>
                  <p className="value">{screenResolution}</p>
                </li>
                <li>
                  <p className="title">operating system</p>
                  <p className="value">{operatingSystem}</p>
                </li>
                <li>
                  <p className="title">storage capacity</p>
                  <p className="value">{storageCapacity}</p>
                </li>
              </ul>
            </div>
          </div>);
        } else if (product.id  < 500) {
            let {id,name,price,techScreen,scanFrequency,screenResolution,cpu,ram,hardDrive,src} = props.product;
            return (  <div className="modalContent">
            <div className="modalImage">
              <img src={src} alt={id} />
            </div>
            <div className="modalInfoDetail">
              <ul>
                <li>
                  <p className="title">name</p>
                  <p className="value">{name}</p>
                </li>
                <li>
                  <p className="title">price</p>
                  <p className="value">{price}</p>
                </li>
                <li>
                  <p className="title">cpu</p>
                  <p className="value">{cpu}</p>
                </li>
                <li>
                  <p className="title">ram</p>
                  <p className="value">{ram}</p>
                </li>
                <li>
                  <p className="title">tech screen</p>
                  <p className="value">{techScreen}</p>
                </li>
                <li>
                  <p className="title">scan frequency</p>
                  <p className="value">{scanFrequency}</p>
                </li>
                <li>
                  <p className="title">screen resolution</p>
                  <p className="value">{screenResolution}</p>
                </li>
                <li>
                  <p className="title">hard drive</p>
                  <p className="value">{hardDrive}</p>
                </li>
              </ul>
            </div>
          </div>);
        } else {
            return "false";
        }
    }
    const renderBodyModal = checkProduct(props.product);
  return (
    <div className="modal fade" id="detail" tabIndex={-1}
        aria-labelledby="titleModalCard" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="titleModalCard">Chi Tiết</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
          </div>
          <div className="modal-body">
            {renderBodyModal}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          </div>
        </div>
      </div>
    </div>
  );
}
