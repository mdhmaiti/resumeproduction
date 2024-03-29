import React, { useState } from 'react';
import DataHeaders from './components/EditHeaders';
import EditSection from './components/EditSection';
import ErrorBoundary from 'src/helpers/common/components/ErrorBoundary';
import { OutlinedButton } from 'src/helpers/common/atoms/Buttons';
import { headers } from 'src/helpers/constants/editor-data';
import { resetResumeStore } from 'src/stores/useResumeStore';
import { TemplateSelect } from '../nav-bar/components/TemplateSelect';
import Tip from './Tip';
const EditorLayoutRight = () => {
  const [link, setLink] = useState('');
  const section = headers[link];
  const linkClickHandler = (link: string) => {
    setLink(link);
  };
  const displayElement = link ? (
    <EditSection section={section} onLinkClick={linkClickHandler} />
  ) : (
    <DataHeaders onLinkClick={linkClickHandler} />
  );
  return (
    <div className=" h-full w-fit overflow-auto relative no-scrollbar shadow-level-4dp bg-cyan-800 ">
      {/* {displayElement} */}
      {/* <div className="mt-8 text-white p-3 m-2"> <OutlinedButton onClick={resetResumeStore}>Reset all edits</OutlinedButton> </div> */}{' '}
      {/* <TemplateSelect /> */}
      <Tip />
    </div>
  );
};
export default EditorLayoutRight;
