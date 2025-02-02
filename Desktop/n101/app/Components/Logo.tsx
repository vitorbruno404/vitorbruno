// app/Components/Logo.tsx
import Image from 'next/image';

export default function SimliHeaderLogo() {
  return (
    <div className="mb-8">
      <Image
        src="/media/SimliLogoV2.svg"
        alt="Simli Logo"
        width={120}
        height={40}
      />
    </div>
  );
}