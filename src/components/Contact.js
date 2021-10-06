import {
    faFacebookSquare,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";



const Contact = () => {
    const formRef = useRef();
    
    const [formValues, setformValues] = useState({
        email: "",
        subject: "",
        message: "",
    });
    
    // const {email, subject, message} = formValues;
    const reset = () => {
        setformValues({
            email: "",
            subject: "",
            message: "",
        });
    };
    
    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // console.log(formValues.message);
        emailjs
            .sendForm(
                "service_sk8wm4r",
                "template_h1sfp8g",
                formRef.current,
                "user_sD8Ptv9o9WPPN9iZZleEz"
            )
            .then(
                (result) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Mensaje Enviado',
                        text: 'Pronto te contactaré =)!',
                    })
                },
                (error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            );
        reset();
    };

    return (
        <div
            id="contact"
            className="bg-contact100"
            style={{ backgroundImage: "url(assets/images/bg-01.jpg)" }}
        >
            <div className="container-contact100">
                <div className="wrap-contact100 wow animate__rubberBand" data-wow-duration="1.5s">
                    <div className="contact100-pic js-tilt" data-tilt>
                        <img src="assets/images/img-01.png" alt="IMG" />
                    </div>

                    <form
                        ref={formRef}
                        className="contact100-form validate-form"
                        action=""
                        onSubmit={handleSubmit}
                    >
                        <span className="contact100-form-title">Contáctame</span>

                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Valid email is required: ex@abc.xyz"
                        >
                            <input
                                value={formValues.email}
                                onChange={handleInputChange}
                                className="input100"
                                type="text"
                                name="email"
                                placeholder="Correo"
                            />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    aria-hidden="true"
                                />
                            </span>
                        </div>

                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Subject is required"
                        >
                            <input
                                value={formValues.subject}
                                onChange={handleInputChange}
                                className="input100"
                                type="text"
                                name="subject"
                                placeholder="Asunto"
                            />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <FontAwesomeIcon
                                    icon={faUser}
                                    aria-hidden="true"
                                />
                            </span>
                        </div>

                        <div
                            className="wrap-input100 validate-input"
                            data-validate="Message is required"
                        >
                            <textarea
                                onChange={handleInputChange}
                                value={formValues.message}
                                className="input100"
                                name="message"
                                placeholder="Mensaje"
                            />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-contact100-form-btn">
                            <button className="contact100-form-btn">
                                Enviar
                            </button>
                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <a
                                    href="https://github.com/JACA26"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="circle-icon-2">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            color="#000"
                                            size="2x"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="col text-center">
                                <a
                                    href="https://www.linkedin.com/in/jesus-alexander-castilla-atuncar-aa16411b0/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="circle-icon-2">
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            color="#0077b5"
                                            size="2x"
                                        />
                                    </div>
                                </a>
                            </div>
                            <div className="col text-center">
                                <a
                                    href="https://www.facebook.com/AlexCastilla2610/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="circle-icon-2">
                                        <FontAwesomeIcon
                                            icon={faFacebookSquare}
                                            color="#3b5998"
                                            size="2x"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
