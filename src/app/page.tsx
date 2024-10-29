"use client"
export default function home() {
  return <div className="bg-black h-screen">
    
    <nav className="flex justify-between items-center bg-gray-800 p-4">
 
  <div className="flex gap-4 list-none">
    
  <li className="text-white font-Montserrat text 50xl">BrandName</li>
  </div>
  <div className="flex gap-4 list-none">
    <li className="text-white font-Montserrat text 14xl">Home</li>
    <li className="text-white font-Montserrat text 14xl">Product</li>
    <li className="text-white font-Montserrat text 14xl">Pricing</li>
    <li className="text-white font-Montserrat text 14xl">Contact</li>
    
    </div>

  <div className="flex gap-4 list-none">
  
    <li className="text-white font-Montserrat">Login</li>
    <li className="text-white font-Montserrat">JOIN US</li>
    
    
  </div>
</nav>
<br>
</br>
<br>
</br>
<p className="font-extrabold text-2xl font-Montserrat text-center text-blue-400"> Welcome</p>
<br></br>
<h1 className="font-extrabold text-4xl font-Montserrat text-center py-6 text-white"> Selling on the internet like a pro</h1>
<br></br>
<h4 className="font-extrabold text font-Montserrat text-center text-white"> We know how large objects will act, but things on a <br>
</br>
  small scale just do not act that way.</h4>
  <br></br>
  <div className="flex justify-center items-center">
      <button
        onClick={() => alert("Button clicked!")}
        className="mr-5 px-10 py-2 font-Montserrat border: 1px solid #23A6F0 text-white rounded hover:bg-blue-400">
      Get Quote Now
      </button>
      <button
        onClick={() => alert("Button clicked!")}
  
        className="px-10 py-2 font-Montserrat border: 1px solid #23A6F0 text-white rounded hover:bg-blue-400">
      Learn More
      </button>
    </div>
    <br></br>
    <div className="flex gap-4 justify-center items-center">
  <div className="w-80 h-80 bg-white text-black p-4">
  <div className="flex gap-4 w-20 h-20 bg-red-300 rounded-md">

</div>
<br></br>
    <p className="font-bold">training courses</p>
    <br></br>
    <hr className="w-8 border-t-2 border-red-500"></hr>
    <br></br>
    <p className="text-black">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
  </div>
  <div className="w-80 h-80 bg-white text-black p-4">
  <div className="flex gap-4 w-20 h-20 bg-green-300 rounded-md">

</div>
<br></br>
<p className="font-bold">2,769 online courses</p>
    <br></br>
    <hr className="w-8 border-t-2 border-red-500"></hr>
    <br></br>
    <p className="text-black">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
  </div>
  <div className=" font-bold w-80 h-80 bg-blue-500 text-white p-4">
  <div className="flex gap-4 w-20 h-20 bg-white rounded-md">

</div>
<br></br>
<p className="font-bold">training courses</p>
    <br></br>
    <hr className="w-8 border-t-2"></hr>
    <br></br>
    <p className="text-white">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
  </div>
</div>
</div>
}
