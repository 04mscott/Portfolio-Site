import './index.scss'

const Contact = () => {
    return (
        <div className='contact-container' >
            <h1>Contact Me</h1>
            <div className='contact-form' >
                <form>
                    <div className='row'>
                        <input type='text' name='name' placeholder='Name' required />
                        <input type='email' name='email' placeholder='Email' required />
                    </div>
                    <div className='column'>
                        <input type='text' name='subject' placeholder='Subject' required />
                        <textarea name='message' placeholder='Message' required ></textarea>
                        <input type='submit' className='flat-button' value='Send' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact