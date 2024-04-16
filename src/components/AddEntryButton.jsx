import '../styles/Button.css'

function AddEntryButton({ onClick }){
    return (                        
        <button
            type='button'
            onClick={() => onClick()}
            aria-label="Add Entry"
            className='btn add-entry-btn'
        >
        Add Entry
        </button>
    )
}

export default AddEntryButton