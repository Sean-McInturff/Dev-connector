import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({experience: {
        company,
        title,
        to,
        from,
        description
    }
}) => {
    return (
        <Fragment>
            <h2 className="text-primary">Experience</h2>
                <h3 className="text-dark">{company}</h3>
                <Moment format="MM/DD/YYYY">{from}</Moment> - {
                    to === null ? (' Now') : (<Moment format="MM/DD/YYYY">{to}</Moment>)
                }
                <p><strong>Position: </strong>{title}</p>
                {description && (
                    <p>
                    <strong>Description: </strong>{description}
                  </p>
                )}
        </Fragment>
    )
}

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired
}

export default ProfileExperience
