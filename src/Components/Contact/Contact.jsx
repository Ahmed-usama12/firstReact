export default function Contact() {
    return <>
        <section id="contact" className=" d-flex justify-content-center ">

            <div className="contactPage  w-50 ">

                <h2 className="text-center py-3 mt-3">CONATCT SECTION</h2>
                <div className="line"></div>
                <form action="">
                    <input type="text" placeholder="userName" className="border-0 border-bottom form-control py-3" />
                    <input type="text" placeholder="userAge" className="border-0 border-bottom form-control py-3" />
                    <input type="text" placeholder="userEmail" className="border-0 border-bottom form-control py-3" />
                    <input type="text" placeholder="userPassword" className="border-0 border-bottom form-control py-3" />

                    <button type="button" class="btn btn-success ">Send Message</button>
                </form>
            </div>
        </section>

    </>
}