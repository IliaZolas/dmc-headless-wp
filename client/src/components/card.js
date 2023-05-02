import './card.scss';

const Card = ({title, icon, text}) => {
    return (
        <div className="card">
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className='icon-border'>
                <img src={icon} alt="" />
            </div>
        </div>
    );
}

export default Card;