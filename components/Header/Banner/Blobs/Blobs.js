import S from './Blobs.module.scss';
import Blob1 from './Blob1';
import Blob2 from './Blob2';

export default function Blobs() {
  return (
    <div className={S.blobs}>
      <Blob1 color={'A8D0DB88'} />
      <Blob2 color={'D8A7CA88'} />
    </div>
  );
}
