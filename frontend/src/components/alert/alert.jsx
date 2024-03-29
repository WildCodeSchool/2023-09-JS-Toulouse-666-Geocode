import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./alert.scss";

function Alert({ errors, submit }) {
  const [isShowAlertSuccess, setIsShowAlertSuccess] = useState(submit);
  const [isShowAlertDanger, setIsShowAlertDanger] = useState(false);
  useEffect(() => {
    if (errors) {
      setIsShowAlertDanger(true);
      setIsShowAlertSuccess(false);
    } else {
      setIsShowAlertDanger(false);
      setIsShowAlertSuccess(true);
    }
  }, [errors, submit]);
  return (
    <div>
      <section className="posabsolute">
        <div className="container">
          <div className="row">
            {isShowAlertSuccess && (
              <div className="col-sm-12">
                <div className="alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
                  <button
                    type="button"
                    className="close font__size-18"
                    data-dismiss="alert"
                    onClick={() => setIsShowAlertSuccess(!isShowAlertSuccess)}
                  >
                    <span aria-hidden="true">
                      {/* <a> */}
                      <i className="fa fa-times greencross" />
                      {/* </a> */}
                    </span>
                    <span className="sr-only">Close</span>
                  </button>
                  <i className="start-icon far fa-check-circle faa-tada animated" />
                  <strong className="font__weight-semibold">Bien Joué!</strong>{" "}
                  Votre formulaire a été envoyé avec succès !
                </div>
              </div>
            )}

            {/* <div className="col-sm-12">
              <div
                className="alert fade alert-simple alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
                role="alert"
                data-brk-library="component__alert"
              >
                <button
                  type="button"
                  className="close font__size-18"
                  data-dismiss="alert"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-times blue-cross" />
                  </span>
                  <span className="sr-only">Close</span>
                </button>
                <i className="start-icon  fa fa-info-circle faa-shake animated" />
                <strong className="font__weight-semibold">Heads up!</strong>{" "}
                This alert needs your attention, but it's not super important.
              </div>
            </div> */}

            {/* <div className="col-sm-12">
              <div
                className="alert fade alert-simple alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
                role="alert"
                data-brk-library="component__alert"
              >
                <button
                  type="button"
                  className="close font__size-18"
                  data-dismiss="alert"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-times warning" />
                  </span>
                  <span className="sr-only">Close</span>
                </button>
                <i className="start-icon fa fa-exclamation-triangle faa-flash animated" />
                <strong className="font__weight-semibold">Warning!</strong>{" "}
                Better check yourself, you're not looking too good.
              </div>
            </div> */}

            {isShowAlertDanger && (
              <div className="col-sm-12 maxwidth">
                <div
                  className="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
                  role="alert"
                  data-brk-library="component__alert"
                >
                  <button
                    type="button"
                    className="close font__size-18"
                    data-dismiss="alert"
                    onClick={() => setIsShowAlertDanger(!isShowAlertDanger)}
                  >
                    <span aria-hidden="true">
                      <i className="fa fa-times danger " />
                    </span>
                    <span className="sr-only">Close</span>
                  </button>
                  <i className="start-icon far fa-times-circle faa-pulse animated" />
                  <strong className="font__weight-semibold"> Oops !</strong>{" "}
                  Modifiez et réessayez. <br />
                  {errors &&
                    errors.length > 0 &&
                    errors.map((type) => (
                      <p key={type.field}>
                        {type.field}: {type.message}
                      </p>
                    ))}
                </div>
              </div>
            )}

            {/* <div className="col-sm-12">
              <div
                className="alert fade alert-simple alert-primary alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
                role="alert"
                data-brk-library="component__alert"
              >
                <button
                  type="button"
                  className="close font__size-18"
                  data-dismiss="alert"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-times alertprimary" />
                  </span>
                  <span className="sr-only">Close</span>
                </button>
                <i className="start-icon fa fa-thumbs-up faa-bounce animated" />
                <strong className="font__weight-semibold">
                  Well done!
                </strong>{" "}
                You successfullyread this important.
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Alert;
Alert.defaultProps = {
  errors: [],
};
Alert.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string,
      message: PropTypes.string,
    })
  ),
  submit: PropTypes.bool.isRequired,
};
