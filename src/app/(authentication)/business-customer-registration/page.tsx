import BusinessRegistrationForm from "@/components/business-customer-registration/business-registration-form";
import BusinessRegistrationImage from "@/components/business-customer-registration/business-registration-image";

const BusinessRegistration = () => {
  return (
    <div className="flex justify-between">
      <BusinessRegistrationForm />
      <BusinessRegistrationImage />
    </div>
  );
};

export default BusinessRegistration;
