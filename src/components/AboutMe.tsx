import Image from "next/image";

const AboutMe = () => {
  return (
    <div>
      <Image src={"/me.png"} alt="Foto de perfil" />
      <h1>Prazer, João Lucas</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        aspernatur culpa excepturi vel nisi pariatur consequatur molestias rerum
        veritatis! Nulla ipsum cum tempore voluptas? Laboriosam, enim. Natus
        earum fugit facilis!
      </p>
    </div>
  );
};

export default AboutMe;
