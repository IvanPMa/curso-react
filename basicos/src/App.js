import React, { Fragment} from 'react';
import Header from'./components/Header'
import Footer from'./components/Footer'

function App() {
  return ( //retornar almenos un contenedor
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
  );
}

export default App;
