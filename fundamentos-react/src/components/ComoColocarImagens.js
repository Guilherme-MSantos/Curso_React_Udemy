import Imagem2 from "../assets/img-2.jpg";

export default function Imagens() {
  return (
    <div>
      <div>
        <img src="/img-1.jpg" alt="paisagem" width="50%" height="50%" />
      </div>

      <div>
        {/* Imagens em asset */}
        <img src={Imagem2} alt="" width="50%" height="50%" />
      </div>
    </div>
  );
}
