import PropTypes from 'prop-types';
const TittleH = (props) =>{
    return(
        <>
            <span className={`text-center flex sm:text-2xl md:text-3xl font-bold justify-center bg-blue-600 sm:py-1 md:py-3 ${props.colorT}`}>{props.text}</span>
        </>
    );
}

TittleH.propTypes={
    colorT: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default TittleH