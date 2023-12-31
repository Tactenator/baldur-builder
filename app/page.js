import Image from "next/image"
import Link from "next/link"
import Logo from '../public/images/baldurs-logo.png'

export default function Home() {
  return (
    <main className="relative h-[100vh] bg-[url('../public/images/baldurs-home.webp')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      <div className="bg-hero text-white p-5 flex flex-col items-center gap-5 rounded-md border-8 border-gold">
        <Image src={Logo} alt="Logo" width={500} height={500}></Image>
        <h1 className="">Welcome to Baldurs Gate 3 Builder</h1>
        <h4>A builder to test your ideas for new custom characters in Baldurs Gate 3.</h4>
        <Link href="/character-creation" className="bg-button px-7 py-3 border-4 border-gold rounded-md">Start Building</Link>
        <p>Looking for chaos? Try our randomizer!</p>
        <button>Randomize!</button>
      </div>
    </main>
  )
}
