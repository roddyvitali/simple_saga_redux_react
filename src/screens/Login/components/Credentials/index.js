import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import './styles.scss';

const Credentials = _ => {
  return (
    <div className="container-credentials">
      <div className="p-3 my-2 rounded">
        <Toast className="bg-primary">
          <ToastHeader>
            Credenciales
          </ToastHeader>
          <ToastBody>
            <h5>Cuenta 1</h5>
            Usuario: rvitali <br />
            Contraseña: rvitali 
            <br /><br />
            <h5>Cuenta 2</h5>
            Usuario: rvitali1 <br />
            Contraseña: rvitali1 <br />
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default Credentials;