import {useState} from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


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
        // <form action="" onSubmit={onAdd}>
        //         <div className="container">
        //             <label htmlFor="title">Title of your election</label>
        //             <input type="text" id="title" placeholder="Title of your Election" value={title} onChange={(e) => setTitle(e.target.value)}/>
        //             <button type="submit" value="Submit">Submit</button>
        //         </div>
        //     </form>
        <div className="addElec">
            <Form onSubmit={onAdd} action="http://localhost:3000/success" method="POST">
                <Container size="sm">
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Enter Election title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddElection