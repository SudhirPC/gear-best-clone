import React from 'react'

export const Register = () => {
  return (
    
   <div>
    {/* <img className="ml-16 w-56 h-28" src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png" alt="" /> */}
    <div>
   
        <section className="h-screen">
  <div className="px-2 h-full text-gray-800">
  {/* <h1 className="ml-96 pl-24 mt-1 text-2xl">Register Here</h1> */}
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      
      <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image"
        />
      </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
        <form>
          
          <div className="mb-6">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Email Address"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              className="form-control block w-full px-4 mb-6 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Create a Password"
            />
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Confirm  Password"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label className="form-check-label inline-block text-gray-800" for="exampleCheck2"
                >I agree to Gearbest Terms and Conditions and Privacy Policies.</label
              >
            </div>
            
          </div>

          <div className="text-center lg:text-left">
            <button
              type="button"
              className="inline-block px-7 py-3 bg-yellow-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Register
            </button>
            <p className="text-sm font-semibold mt-2 pt-1 mb-0">
              Do you have an account?
              <a
                href="#!"
                className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Login</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
</div>


  )
}
