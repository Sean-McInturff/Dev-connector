import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({education: {
        school,
        degree,
        fieldofstudy,
        to,
        from,
        description
    }
}) => {
    return (
        <Fragment>
            <h2 className="text-primary">Education</h2>
                <h3 className="text-dark">{school}</h3>
                <Moment format="MM/DD/YYYY">{from}</Moment> - {
                    to === null ? (' Now') : (<Moment format="MM/DD/YYYY">{to}</Moment>)
                }
                <p><strong>Degree: </strong>{degree}</p>
                <p><strong>Field Of Study: </strong>{fieldofstudy}</p>
                {description && (
                    <p>
                    <strong>Description: </strong>{description}
                  </p>
                )}
        </Fragment>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
}

export default ProfileEducation
