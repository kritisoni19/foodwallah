import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import '../App.css';
function Contact() {

    const [show, setShow] = useState(false);
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const [data, setData] = useState([]);
    // 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${name} and ${email}`);
        setShow(true)
    }

    const getJsonData = async () => {
        let data = await fetch('https://jsonplaceholder.typicode.com/todos');
        let json = await data.json();
        console.log(json);
        setData(json)

    }
    useEffect(() => {
        getJsonData();

    }, [])
    // subscribing 
    const contactsliceItems = useSelector((store) => store.contactslice.items)
    return (
        <>
            <div className="container mt-8rem">
                <div className="row ">
                    <div className="col-md-6 col-sm-12 mx-auto">
                        <form>
                            <div className="mb-3">
                                <input type="text" value={name} onChange={e => setname(e.target.value)} name='name' className="form-control" placeholder="Enter name" />
                            </div>
                            <div className="mb-3">
                                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="mb-3">
                                <input type="tel" value={tel} onChange={(e) => { setTel(e.target.value) }} name='tel' className="form-control" placeholder="Enter phone no" />
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="btn btn-primary" onClick={handleSubmit} />
                            </div>
                        </form>
                        {
                            show ? <p>My name is {name} and my email is ${email}</p> : null
                        }
                        {contactsliceItems.join(', ')}
                    </div>
                </div>
            </div>
            <div>
                <table>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                    {data &&
                        data.map((eventss) => {
                            return <tr>
                                <td>{eventss.id}</td>
                                <td>{eventss.title}</td>
                                <td>
                                    {
                                        eventss.completed ? <input type="checkbox" checked/>:<input type="checkbox" />
                                    }
                                        
                                         
                                
                                </td>
                            </tr>

                        })
                    }
                </table>
            </div>
        </>
    )
}

export default Contact;