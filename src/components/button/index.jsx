import {Button} from './styles'
import PropTypes from 'prop-types'

function DefaultButton({children, theme, ...props }){
    console.log(props)
    return(
        <Button {...props} theme={theme}>{children}</Button>
    )

}
DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string,
}


export default Button