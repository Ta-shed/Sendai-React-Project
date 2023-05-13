
const  Navbar = () => {
    return (
        <div>
<div>
<body>
<header class="bg-gray-800 text-white">
<nav className="flex items-center justify-between px-4 py-2">
    <ul className="flex space-x-4">
    <li className="hover:underline"><a href="#" className="">Home</a></li>
    <li className="hover:underline"><a href="#">About</a></li>
    <li className="hover:underline"><a href="#">Contact Us</a></li>
    <li className="hover:underline"><a href="#">Login</a></li>
    <li className="hover:underline"><a href="#">Sign Up</a></li>
    </ul>
    <li className="list-none float-right"><a href="#" className="bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded">Send Money</a></li>
</nav>
</header>
<main class="container mx-auto py-8 bg-sky-500 h-screen ">
<h1 className="text-3xl mb-5">Compare and Send Money with Sendai</h1>
      <h2 className="text-2xl mb-5">Find the best deal for you!</h2>
      <a href="#" className="button bg-green-500 hover:bg-green-600 font-bold py-2 px-4 rounded text-white">Send Money</a>
    
  </main>
  <footer className="h-20 bg-gray-800 text-white">
      <p>&copy; 2023 - Sendai</p>
    </footer>
</body>

</div>


        </div>
    )
}

export default Navbar;