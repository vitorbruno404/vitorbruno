// app/Components/DottedFace.tsx
import Image from 'next/image';

export default function DottedFace() {
  return (
    <div className="h-[350px] w-[350px] flex items-center justify-center">
      <Image
        src="/media/dottedface.gif"
        alt="Dotted Face"
        width={350}
        height={350}
      />
    </div>
  );
}