const NewRequest = () => {
    return (
      <div className="container mx-auto">
        <form className="max-w-lg mx-auto mt-12">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 font-medium">From</label>
              <select
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                name="location"
                id="location"
              >
                <option value="uk">UK</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Send To</label>
              <select
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                name="destination"
                id="destination"
              >
                <option value="South Africa">South Africa</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="mb-2 font-medium">You Send</label>
              <input
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                type="number"
                min={10}
                value={0}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium">The receiver gets</label>
              <input
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                type="number"
                value={0}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium">Delivery Method</label>
              <select
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                name="method"
                id="method"
              >
                <option value="cash">Cash</option>
                <option value="mobile">Mobile Money</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default NewRequest;
  