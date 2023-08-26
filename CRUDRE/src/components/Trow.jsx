import PropTypes from 'prop-types';
const Tcolumn = (props)=>{
    return (
        <>
            <th className='text-xs min-w-0 md:text-sm  font-semibold'>{props.titulo}</th>
        </>
    );
}
Tcolumn.propTypes={
    titulo: PropTypes.string.isRequired
}
export default Tcolumn