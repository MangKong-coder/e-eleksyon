import {useState} from 'react';

const AddElection = ( {onSubmit} ) => {
    const [title, setTitle] = useState('')
    const onAdd = (e) => {
        e.preventDefault();

        if(!title) {
            alert('Please Enter a Title')
            return
        }

        onSubmit({title})
        setTitle('')

    }


    return (
        <div>
            <form action="" onSubmit={onAdd}>
                <label>Title</label>
                <input type="text" placeholder="Title of your Election" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddElection
