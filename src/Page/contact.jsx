
import '../styles/contact.css'

export default function Contact(){
    return(
        <section id='contact'>
            <form action="">
                Name: <br />
                <input type="text" name="name" id="name" /><br />
                Email: <br />
                <input type="email" name="email" id="email" /> <br />
                Massage: <br />
                <textarea name="massage" id="massage"></textarea> <br />
                <input type="submit" value="Submit" />
            </form>
            <div id="social">
                <button>Facebook</button>
                <button>Facebook</button>
                <button>Facebook</button>
                <button>Facebook</button>
                <button>Facebook</button>
            </div>
        </section>
    )
}