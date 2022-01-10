import Image from "next/image";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="">
      <div className="">
        <Image src={img} />
      </div>
    </div>
  );
}

export default InfoCard;
