import { UserProfile } from '@clerk/nextjs';
import './styles.css'; // Import your custom CSS file

function CustomUserProfile() {
  return (
    <div className="custom-profile">
      <UserProfile />
    </div>
  );
}

export default CustomUserProfile;
