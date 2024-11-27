import Map from '../Components/Map';
import Sidebar from '../Components/Sidebar';
import User from '../Components/User';
import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.app}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
