export default function Home() {
  return (
    <main className="relative h-[100vh] bg-[url('../public/images/baldurs-home.webp')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      <div className="bg-hero text-white p-5">
        <img src="../public/images/baldurs-logo.png" alt="Baldurs 3 Logo"></img>
        <h1 className="">Welcome to Baldurs Gate 3 Builder</h1>
        <h4>A builder to test your ideas for new custom characters in Baldurs Gate 3.</h4>
        <button className="bg-button">Start Building</button>
      </div>
    </main>
  )
}
