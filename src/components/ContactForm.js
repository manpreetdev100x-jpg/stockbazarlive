import React, { useState } from 'react';
import Footer from './Footor';
import "./style.css"

const ContactForm = () => {

  // https://script.google.com/macros/s/AKfycbxd9dS1YwIzZrPqgVepNaMnx3TivrBOYcjnimTGUJjvY6XdEhftcQsAo4nznqH7jv8utA/exec
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    ConfirmPhone: '',
    City: '',
    Age: '',
    Capital: '',
    Experience: '',
    ContactTime: '',
    Enroll: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      const url = "https://script.google.com/macros/s/AKfycbzUtWbJWCxmTsCUf84s5F5mhed23mfL3MwlERflk6cZcuZHIL41S_eFjwsACQo-2MnaqA/exec"; // replace with your Apps Script Web App link

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });

      const data = await response.text(); // Google Apps Script usually returns plain text
      alert(data || "Form submitted successfully!");
    } catch (err) {
      alert("Submission failed.");
      console.error(err);
    }
  };

  return (
    <div className='flex  flex-col'>
      <div className='md:py-32 flex justify-center items-center w-screen h-auto relative  z-40 pb-20 bg-themeblack'>

        <div className=' mx-5 mt-8 md:w-2/4 '>
          <form
            className="max-w-2xl mx-auto bg-red-500 text-white p-8 rounded-lg shadow-md space-y-4 glass-green2  glow-hover glass-green2_button "
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name *" className="p-2 rounded text-black bg-transparent border-2" required onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name *" className="p-2 rounded text-black bg-transparent border-2 " required onChange={handleChange} />
            </div>

            <input type="email" name="email" placeholder="Email *" className="w-full p-2 rounded text-black bg-transparent border-2" required onChange={handleChange} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="tel" name="phone" placeholder="Phone *" className="p-2 rounded text-black bg-transparent border-2" required onChange={handleChange} />
              <input type="tel" name="confirmPhone" placeholder="Confirm Phone *" className="p-2 rounded text-black bg-transparent border-2" required onChange={handleChange} />
            </div>

            <input type="text" name="city" placeholder="City *" className="w-full p-2 rounded text-black bg-transparent border-2" required onChange={handleChange} />

            <input type="number" name="age" placeholder="Age *" className="w-full p-2 rounded text-black bg-transparent border-2" required onChange={handleChange} />

            <select name="capital" className="w-full p-2 rounded bg-transparent border-2 text-white " required onChange={handleChange}>
              <option value="">How much capital are you planning to trade with? *</option>
              <option value="Less than 10k">Less than ₹10,000</option>
              <option value="10k-50k">₹10,000 - ₹50,000</option>
              <option value="50k+">More than ₹50,000</option>
            </select>

            <select name="experience" className="w-full p-2 rounded  bg-transparent border-2  text-white" required onChange={handleChange}>
              <option value="">How much trading experience do you have? *</option>
              <option value="None">None</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>

            <input type="text" name="contactTime" placeholder="Preferable Time to Contact *" className="w-full p-2 rounded text-black bg-transparent border-2" required onChange={handleChange} />

            <div className="space-y-2 bg-transparent border-2">
              <p>Would you like to enroll for the upcoming batch? *</p>
              <div>
                <label className="mr-4">
                  <input type="radio" name="enroll" value="Yes" onChange={handleChange} required /> Yes
                </label>
                <label>
                  <input type="radio" name="enroll" value="No" onChange={handleChange} /> No
                </label>
              </div>
            </div>


            <button type="submit" className="bg-white opacity-50 text-black font-bold py-2 px-4   rounded">
              Send Message
            </button>
          </form>
        </div>

      </div>
      <div className=' z-0'>
        <Footer />
      </div>
    </div>
  );
};

export default ContactForm;
