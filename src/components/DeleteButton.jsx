import DeleteIcon from '../assets/images/trash-can-outline.svg'
import '../styles/Button.css'

const deleteImg = new Image()
deleteImg.src = DeleteIcon

console.log(deleteImg)

function DeleteButton({ onClick }){
    return (                        
        <button
            type='button'
            onClick={() => onClick()}
            aria-label="Delete Entry"
            className='btn delete-btn'
        >
        <img src={DeleteIcon}/>
        </button>
    )
}

export default DeleteButton