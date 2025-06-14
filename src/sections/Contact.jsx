import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: {name, value }}) => {
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "service_1w6h2ts",
                "template_alhov6q",
                {
                    name: form.name,
                    email: form.email, 
                    message: form.message,
                    title: "Message from Portfolio Site"
                },
                "lfcJAtaeAWpQSqiWA"
            );
            setLoading(false);
            setForm({
                name: '',
                email: '',
                message: ''
            });
            alert('Thank you. I will get back to you as soon as possible.');
        } catch(error){
            setLoading(false);
            console.error(error);
            alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text">Get In Touch</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you're looking to build a new website, improve your existing platform, or bring 
                        project to life, I'm here to help.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="field-input"
                                required
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                                className="field-input"
                                required
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                rows={5}
                                onChange={handleChange}
                                placeholder="Write your message here"
                                className="field-input"
                                required
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
};
export default Contact;