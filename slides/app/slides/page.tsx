import fs from 'fs';
import path from 'path';
import { SlidesClient } from './SlidesClient';

const SlidesPage = async () => {
  const filePath = path.join(process.cwd(), 'docs', 'slides.md');
  const content = fs.readFileSync(filePath, 'utf-8');
  return <SlidesClient htmlContent={content} />;
};

export default SlidesPage;
