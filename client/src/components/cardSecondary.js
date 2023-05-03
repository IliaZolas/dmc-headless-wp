import './card.scss';

const CardSecondary = ({title, icon, text}) => {
    return (
        <div className="card-secondary">
            <div className='secondary-icon'>
                <img src={icon} alt="" />
            </div>
            <div className='secondary-content'>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default CardSecondary;