import Image from 'next/image';
import Link from 'next/link';

function FeatureSection() {
  return (
    <>
      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/style.svg" alt="style" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">
          Customise with <strong>templates and themes</strong>!
        </p>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/speed.svg" alt="speed" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">Where Your Resume Tells Your Story of Success!</p>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/magic.svg" alt="magic" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">Crafting Careers, One Resume at a Time!</p>
      </FeatureCard>

      <FeatureCard>
        <CardPinnnedIcon>
          <Image src="/icons/lock.svg" alt="lock" height="56" width="56" />
        </CardPinnnedIcon>
        <p className="text-xl mr-14">
          Your <strong>data</strong> never leaves your device
        </p>
      </FeatureCard>
    </>
  );
}

const FeatureCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link href="/builder" passHref={true}>
      <div
        className={`transition ease-in-out delay-100 duration-300 bg-cyan-600 hover:bg-resume-500 text-resume-800
      hover:text-resume-50 fill-resume-800 px-6 py-10 lg:p-12 flex shadow-md cursor-pointer relative rounded-xl`}
      >
        {children}
      </div>
    </Link>
  );
};

const CardPinnnedIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="backdrop-blur-2xl bg-cyan-500 rounded-full p-2 shadow-level-hard absolute right-0 top-0 -mt-4 -mr-1">
      {children}
    </div>
  );
};

export default FeatureSection;
