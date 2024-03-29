import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { motion, useAnimation } from 'framer-motion';

import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
import { TemplateSelect } from '../builder/nav-bar/components/TemplateSelect';
import { TemplateSlider } from '../builder/nav-bar/components/TemplatesSlider';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      <nav className="h-full w-full  #ffffff relative flex py-2.5 pl-5 pr-4  items-center shadow-level-8dp">
        <Link href="/">
          <Image
            src={'/icons/resume-icon.png'}
            alt="logo"
            height="180"
            width="256"
            className="ml-20"
          />
        </Link>
        <div className="flex-auto flex justify-between items-center ml-5">
          {/* <NavBarActions>
            <Link href="/builder" passHref={true}>
              <StyledButton variant="text">Editor</StyledButton>
            </Link>
          </NavBarActions> */}
        </div>
      </nav>
      <div
        style={{
          background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%)',
          fontFamily: "'Roboto Slab', serif",
        }}
      >
        <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
          <motion.div
            className="grid grid-cols-12 pt-12 md:pt-24"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transtionEffects}
          >
            <div className="col-span-12 sm:col-span-4">
              <motion.img
                id="resume-3d"
                src="/icons/resume-icon.png"
                alt="resume-3d"
                className="w-6/12 sm:w-9/12"
                onMouseEnter={() => {
                  controls.start(animationEffectsHoverEnter, transtionEffects);
                }}
                onMouseLeave={() => {
                  controls.start(animationEffectsHoverLeave, transtionEffects);
                }}
                animate={controls}
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h3 className="text-xl md:text-2xl mb-2 text-resume-400">Build your brand-new</h3>
              <h1 className="text-5xl mb-12 text-orange-800 hover:text-orange-600">
                Professional Resume
              </h1>

              <div className="flex mb-10">
                <div className="bg-resume-800 w-1 rounded-lg"></div>
                {/* <p className="text-lg ml-3 text-resume-800">
                  &ldquo;The secret to getting ahead is getting started&rdquo;
                  <br />
                  —Mark Twain
                </p> */}
              </div>

              <p
                className="xl:invisible text-resume-800"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                {/* Desktop screen recommended */}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transtionEffects}
      >
        <div className="mx-20 bg-slate-100 shadow-lg shadow-slate-400 rounded-lg flex flex-col items-center justify-center gap-5">
          <p
            style={{ fontFamily: "'Roboto Slab', serif" }}
            className="my-4 text-3xl font-semibold text-orange-700 hover:text-orange-600 text-center"
          >
            Choose the template
          </p>
          <Link href="/builder" passHref={true}>
            <Button variant="contained" className="bg-sky-800 hover:bg-orange-800">
              BUILD YOUR RESUME
            </Button>
          </Link>
          <TemplateSlider />
        </div>
      </motion.div>
      {/* <motion.div
        className="mx-6 md:mx-40 xl:mx-60 my-32 w-75"
        style={{ fontFamily: "'Roboto Slab', serif" }}
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transtionEffects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureSection />
        </div>
      </motion.div> */}

      <div className="bg-cyan-500 my-32"></div>
    </motion.div>
  );
};

export default HomeLayout;
