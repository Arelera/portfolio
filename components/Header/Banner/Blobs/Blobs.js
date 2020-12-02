import S from './Blobs.module.scss';
import Blob1 from './Blob1';
import Blob2 from './Blob2';

export default function Blobs() {
  return (
    <div className={S.blobs}>
      <Blob1 color={'FC60A888'} />
      <Blob2 color={'F4B39388'} />
    </div>
  );
}
