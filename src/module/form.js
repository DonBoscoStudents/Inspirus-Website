import Cord from "./cordcard"

export default function Form()
{
    return(
        <>
        <div className="page">
        <div className="form_structure">
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSdG5u9egJEQEeNLweD206YOVZjkDV2eDsRNiyJI81B_HIW0qQ/formResponse">
            <h1>INCARNATE</h1>
        <div className="input_tab">
        <p>Name</p>
        <input name="entry.702823866" type="text"></input>
        </div>

        <div className="input_tab">
        <p>email</p>
        <input name="entry.702823866" type="text"></input>
        </div>

        <div className="input_tab">
        <p>College/School/Diploma</p>
        <input name="entry.702823866" type="text"></input>
        </div>

        <div className="input_tab">
        <p>Phone Number</p>
        <input name="entry.702823866" type="text"></input>
        </div>

        <div className="input_tab">
        <p>Image Url</p>
        <input name="entry.702823866" type="text"></input>
        </div>

        <div className="input_tab">
        <p>Image Description</p>
        <input name="entry.702823866" type="text"></input>
        </div>
        <input className="button" type="submit"></input>
        </form>
        </div>
        <Cord/>
        </div>
        </>
    )
}