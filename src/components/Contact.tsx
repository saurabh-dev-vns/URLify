const Contact = () => {
    return (
      <div className="container mx-auto p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6">
          We'd love to hear from you! Please fill out the form below to get in touch.
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Your Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  