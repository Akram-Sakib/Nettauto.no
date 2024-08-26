import PrivateRegistrationForm from "@/components/private-registration/private-registration-form";
import PrivateRegistrationImage from "@/components/private-registration/private-registration-image";

const PrivetRegistration = () => {
  return (
    <div className="flex justify-between min-h-screen">
      <PrivateRegistrationForm />
      <PrivateRegistrationImage />
    </div>
  );
};

export default PrivetRegistration;
