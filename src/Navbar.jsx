import React from 'react'

const Navbar = () => {
  return (
    <>
    <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                    <div class="bg-dark p-4">
                        <h5 class="text-body-emphasis h4">Collapsed content</h5>
                        <span class="text-body-secondary">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                         {/* <span class="navbar-toggler-icon"></span> */}
                           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">VitsHotel</a>
                      

                    </div>
                </nav>
                </>
  )
}

export default Navbar