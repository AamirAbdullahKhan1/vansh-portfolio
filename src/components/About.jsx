const About = () => {
    return (
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Game Developer"
                className="rounded-full w-64 h-64 object-cover mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                Hi, I'm a passionate game developer with over 5 years of experience in creating immersive and engaging
                games. My expertise includes Unity, Unreal Engine, and custom game engines.
              </p>
              <p className="text-lg mb-4">
                I specialize in 3D graphics, game physics, and AI programming. My goal is to create unforgettable gaming
                experiences that push the boundaries of what's possible in interactive entertainment.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me playing the latest games, participating in game jams, or contributing
                to open-source game development projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
  