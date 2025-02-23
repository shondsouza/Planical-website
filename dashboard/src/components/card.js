import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({
                  header,
                  description,
                  icon,
                  iconAlt,
                  rootClassName = '',
              }) => {
    return (
        <section className={`card-card ${rootClassName}`.trim()}>
            <div className="card-icon1">
                <img
                    alt={iconAlt}
                    src={icon}
                    className="card-icon2"
                    loading="lazy"
                />
            </div>
            <main className="card-content">
                <h1 className="card-header">{header}</h1>
                <p className="card-description">
                    {typeof description === 'string'
                        ? description
                        : `${description.title}\n${description.specialization}`
                    }
                </p>
            </main>
        </section>
    );
};

Card.defaultProps = {
    description: {
        title: 'Licensed Clinical Psychologist',
        specialization: 'Specializing in anxiety, depression, and trauma recovery with 10+ years of experience in cognitive behavioral therapy.'
    },
    rootClassName: '',
    icon: '/Icons/group 1316.png',
    iconAlt: 'Provider specialty icon',
    header: 'Dr. Sarah Chen, PhD',
};

Card.propTypes = {
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            specialization: PropTypes.string.isRequired
        })
    ]),
    rootClassName: PropTypes.string,
    icon: PropTypes.string.isRequired,
    iconAlt: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
};

export default Card;
