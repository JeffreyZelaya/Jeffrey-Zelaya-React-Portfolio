import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import contactPagePicture from "../../../static/assets/images/auth/login.jpg"



export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column"
            style = {{
                background: "url(" + contactPagePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>
                        <div className="text">
                            310-800-8634
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope-open-text" />
                        </div>
                        <div className="text">
                            jeffzelaya3@gmail.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marker-alt" />
                        </div>
                        <div className="text">
                            Pleasant Grove, UT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}